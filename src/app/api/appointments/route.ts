import { NextResponse } from "next/server";

export const runtime = "edge";
import { appointmentFormSchema } from "@/lib/validations";
import { createEmailTransport } from "@/lib/email";
import { formatDate } from "@/lib/utils";

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

    // Create email transport
    const transporter = createEmailTransport();

    // Send email to firm
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `New Appointment Request from ${validatedData.name}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Preferred Date:</strong> ${formatDate(validatedData.preferredDate)}</p>
        <p><strong>Preferred Time:</strong> ${validatedData.preferredTime}</p>
        <p><strong>Practice Area:</strong> ${validatedData.practiceArea}</p>
        <p><strong>Case Description:</strong></p>
        <p>${validatedData.caseDescription}</p>
      `,
    });

    // Send confirmation to user
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: validatedData.email,
      subject: "Appointment Request Confirmation - CNK Law",
      html: `
        <h2>Appointment Request Received</h2>
        <p>Dear ${validatedData.name},</p>
        <p>Thank you for requesting an appointment with CNK Law. We have received your request and will confirm your appointment within 24 hours.</p>

        <h3>Your Request Details:</h3>
        <p><strong>Preferred Date:</strong> ${formatDate(validatedData.preferredDate)}</p>
        <p><strong>Preferred Time:</strong> ${validatedData.preferredTime}</p>
        <p><strong>Practice Area:</strong> ${validatedData.practiceArea}</p>

        <p>Our team will review your request and send you a confirmation email with the exact appointment time and any additional information you may need.</p>

        <p>If you have any questions or need to make changes, please contact us directly.</p>

        <br>
        <p>Best regards,<br>CNK Law Team</p>
      `,
    });

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
  } catch (error) {
    console.error("Appointment request error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit appointment request" },
      { status: 500 }
    );
  }
}
