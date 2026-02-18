import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = contactFormSchema.parse(body);

    if (!process.env.WEB3FORMS_ACCESS_KEY) {
      throw new Error("Missing WEB3FORMS_ACCESS_KEY environment variable");
    }

    // Send to Web3Forms (Edge Compatible)
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: `New Contact Form Submission from ${validatedData.name}`,
        from_name: "CNK Law Website",
        ...validatedData,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to submit to Web3Forms");
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    const err = error instanceof Error ? error : new Error(String(error));
    console.error("Contact form error:", err);

    const isMissingKey = err.message.includes("WEB3FORMS_ACCESS_KEY");

    return NextResponse.json(
      {
        success: false,
        message: isMissingKey
          ? "Server configuration error (Contact Key Missing)"
          : "An unexpected error occurred. Please try again later."
      },
      { status: 500 }
    );
  }
}
