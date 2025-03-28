import nodemailer from "nodemailer";
import { NextResponse, NextRequest } from "next/server";

// Define the structure for the request body
interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  experience: string;
  whatsappUpdates: boolean;
}

// Define the structure of the API response
interface ResponseData {
  success?: boolean;
  message?: string;
  error?: string;
  info?: string;
}

export async function POST(request: NextRequest) {
  // Retrieve and validate environment variables
  const smtpUser: string = process.env.SMTP_USER || "linuxworld.certificates@gmail.com";
  const smtpPass: string = process.env.EMAIL_PASS || "vkaa fbfm qdfk whws";
  const smtpHost: string = "smtp.gmail.com";
  const smtpPort: number = 587;
  const recipientEmail: string = "bhupesh7750@example.com";

  if (!smtpUser || !smtpPass || !recipientEmail) {
    console.error("Server misconfiguration: Missing email credentials.");
    return NextResponse.json<ResponseData>(
      { error: "Server misconfiguration: Missing email credentials." },
      { status: 500 }
    );
  }

  // Parse request body
  let body: ContactFormData;
  try {
    body = await request.json();
  } catch (err) {
    console.log(err);
    return NextResponse.json<ResponseData>(
      { error: "Invalid JSON payload in the request body." },
      { status: 400 }
    );
  }

  const { fullName, phoneNumber, email, experience, whatsappUpdates } = body;

  // Validate required fields
  if (!fullName || !phoneNumber || !email || !experience) {
    return NextResponse.json<ResponseData>(
      { error: "Full name, phone number, email, and experience are required." },
      { status: 400 }
    );
  }

  // Validate phone number (must be numeric and between 10 and 15 digits)
  if (!/^\d{10,15}$/.test(phoneNumber)) {
    return NextResponse.json<ResponseData>(
      { error: "Phone number must be a valid numeric string between 10 and 15 digits." },
      { status: 400 }
    );
  }

  // Validate email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json<ResponseData>(
      { error: "Invalid email format." },
      { status: 400 }
    );
  }

  // Create nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: false,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    // Email options
    const mailOptions = {
      from: `"${fullName}" <${smtpUser}>`,
      to: recipientEmail,
      subject: `New Contact Form Submission from ${fullName}`,
      text: `
        You have received a new message:

        Full Name: ${fullName}
        Phone Number: ${phoneNumber}
        Email: ${email}
        Experience: ${experience}
        WhatsApp Updates: ${whatsappUpdates ? "Yes" : "No"}
      `.trim(),
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json<ResponseData>(
      {
        success: true,
        message: "Email sent successfully!",
        info: info.messageId,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error.message);
    return NextResponse.json<ResponseData>(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}