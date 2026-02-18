import { NextResponse } from "next/server";
import { appointmentFormSchema } from "@/lib/validations";
import { formatDate } from "@/lib/utils";
import { ZodError } from "zod";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Parse date string back to Date object
    const parsedBody = {
      ...body,
      preferredDate: new Date(body.preferredDate),
    };

    // Validate request body
    const validatedData = appointmentFormSchema.parse(parsedBody);

    if (!process.env.WEB3FORMS_ACCESS_KEY) {
      throw new Error("Missing WEB3FORMS_ACCESS_KEY environment variable");
    }

    // Send to Web3Forms (Edge Compatible)
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "CNK-Law-Website-Edge-Worker",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: `New Appointment Request from ${validatedData.name}`,
        from_name: "CNK Law Website",
        ...validatedData,
        preferredDate: formatDate(validatedData.preferredDate),
      }),
    });

    const resultText = await response.text();
    let result;
    try {
      result = JSON.parse(resultText);
    } catch (e) {
      if (resultText.includes("error code: 1106")) {
        throw new Error("Cloudflare blocked the request (Error 1106). Check Access Key.");
      }
      throw new Error(`Upstream error: ${resultText.substring(0, 100)}`);
    }

    if (!response.ok) {
      throw new Error(result.message || "Web3Forms submission failed");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Appointment request submitted successfully",
        data: {
          name: validatedData.name,
          date: formatDate(validatedData.preferredDate),
          time: validatedData.preferredTime,
        },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Appointment request error:", error);

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
    const isConfigError = err.message.includes("WEB3FORMS_ACCESS_KEY");

    return NextResponse.json(
      {
        success: false,
        message: isConfigError
          ? "Server configuration error (Appointment Key Missing)"
          : err.message || "An unexpected error occurred"
      },
      { status: 500 }
    );
  }
}
