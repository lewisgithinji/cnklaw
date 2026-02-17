import { NextResponse } from "next/server";

export const runtime = "edge";
import { newsletterSchema } from "@/lib/validations";
import { createEmailTransport } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = newsletterSchema.parse(body);

    // Create email transport
    const transporter = createEmailTransport();

    // Send notification to firm about new subscriber
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: "New Newsletter Subscription",
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    // Send welcome email to subscriber
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: validatedData.email,
      subject: "Welcome to CNK Law Newsletter",
      html: `
        <h2>Welcome to Our Newsletter!</h2>
        <p>Thank you for subscribing to the CNK Law newsletter.</p>
        <p>You'll receive regular updates with:</p>
        <ul>
          <li>Legal insights and analysis</li>
          <li>Updates on new laws and regulations</li>
          <li>Firm news and events</li>
          <li>Practical legal guidance</li>
        </ul>
        <p>We're committed to keeping you informed and providing valuable legal information.</p>
        <br>
        <p>Best regards,<br>CNK Law Team</p>
        <br>
        <p style="font-size: 12px; color: #666;">
          You can unsubscribe at any time by contacting us at ${process.env.CONTACT_EMAIL}
        </p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Successfully subscribed to newsletter" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to subscribe to newsletter" },
      { status: 500 }
    );
  }
}
