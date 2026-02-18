import { NextResponse } from "next/server";
import { appointmentFormSchema } from "@/lib/validations";
import { formatDate } from "@/lib/utils";

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
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: `New Appointment Request from ${validatedData.name}`,
        from_name: "CNK Law Website",
        ...validatedData,
        preferredDate: formatDate(validatedData.preferredDate),
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to submit to Web3Forms");
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
    const err = error instanceof Error ? error : new Error(String(error));
    console.error("Appointment request error:", err);

    const isMissingKey = err.message.includes("WEB3FORMS_ACCESS_KEY");

    return NextResponse.json(
      {
        success: false,
        message: isMissingKey
          ? "Server configuration error (Appointment Key Missing)"
          : "An unexpected error occurred. Please try again later."
      },
      { status: 500 }
    );
  }
}
