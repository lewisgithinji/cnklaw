import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { ZodError } from "zod";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = contactFormSchema.parse(body);

    if (!process.env.WEB3FORMS_ACCESS_KEY) {
      throw new Error("WEB3FORMS_ACCESS_KEY is not defined");
    }

    // Convert to Form Data (Often more successful bypassing WAFs)
    const formData = new URLSearchParams();
    formData.append("access_key", process.env.WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `New Contact Form Submission from ${validatedData.name}`);
    formData.append("from_name", "CNK Law Website");
    Object.entries(validatedData).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      body: formData,
    });

    const resultText = await response.text();
    const statusCode = response.status;

    if (resultText.includes("1106") || statusCode === 403) {
      throw new Error(`Cloudflare Access Denied (Error 1106). Status: ${statusCode}. This usually means the Access Key is missing or Web3Forms is blocking the Worker IP.`);
    }

    let result;
    try {
      result = JSON.parse(resultText);
    } catch (e) {
      throw new Error(`Server returned non-JSON response (${statusCode}): ${resultText.substring(0, 50)}...`);
    }

    if (!response.ok) {
      throw new Error(result.message || `Submission failed with status ${statusCode}`);
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Contact form error:", error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation Error",
          errors: error.issues.map((issue) => ({ path: issue.path, message: issue.message }))
        },
        { status: 400 }
      );
    }

    const err = error instanceof Error ? error : new Error(String(error));
    const isConfigError = err.message.includes("WEB3FORMS_ACCESS_KEY") || err.message.includes("not defined");

    return NextResponse.json(
      {
        success: false,
        message: isConfigError
          ? "Server configuration error (Access Key Missing)"
          : err.message || "An unexpected error occurred"
      },
      { status: 500 }
    );
  }
}
