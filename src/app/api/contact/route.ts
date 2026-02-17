import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { createEmailTransport } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = contactFormSchema.parse(body);

    // Create email transport
    const transporter = createEmailTransport();

    // Send email to firm
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `,
    });

    // Send confirmation to user
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: validatedData.email,
      subject: "Thank you for contacting CNK Law",
      html: `
        <h2>Thank You for Contacting Us</h2>
        <p>Dear ${validatedData.name},</p>
        <p>We have received your message and will get back to you as soon as possible, typically within 24 hours.</p>
        <p>If your matter is urgent, please call us directly at ${process.env.CONTACT_EMAIL}.</p>
        <br>
        <p>Best regards,<br>CNK Law Team</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message" },
      { status: 500 }
    );
  }
}
