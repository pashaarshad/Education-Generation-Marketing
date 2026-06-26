import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { collegeName, contactName, email, phone, intakeSize, challenges } = await request.json();

    // Check configuration
    const gmailUser = "managementgenerationmarketing@gmail.com";
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailAppPassword) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Email service is not configured (missing GMAIL_APP_PASSWORD in environment variables)." 
        },
        { status: 500 }
      );
    }

    // Configure Nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    // Format the email content beautifully
    const mailOptions = {
      from: `"Generation Marketing System" <${gmailUser}>`,
      to: "managementgenerationmarketing@gmail.com",
      replyTo: email,
      subject: `🔥 New Lead: Audit Request from ${collegeName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff; color: #1a202c;">
          <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="color: #0170B9; margin: 0; font-size: 24px; font-weight: 800;">Generation Marketing</h1>
            <p style="color: #718096; margin: 5px 0 0 0; font-size: 14px;">Admission Strategy Audit Request Received</p>
          </div>
          
          <div style="border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; padding: 20px 0; margin-bottom: 20px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 6px 0; font-weight: 600; color: #4a5568; width: 180px; font-size: 14px;">College / University:</td>
                <td style="padding: 6px 0; color: #1a202c; font-size: 14px;">${collegeName}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: 600; color: #4a5568; font-size: 14px;">Contact Person:</td>
                <td style="padding: 6px 0; color: #1a202c; font-size: 14px;">${contactName}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: 600; color: #4a5568; font-size: 14px;">Official Email:</td>
                <td style="padding: 6px 0; color: #0170B9; font-size: 14px;"><a href="mailto:${email}" style="color: #0170B9; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: 600; color: #4a5568; font-size: 14px;">Phone / WhatsApp:</td>
                <td style="padding: 6px 0; color: #1a202c; font-size: 14px;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: 600; color: #4a5568; font-size: 14px;">Target Annual Intake:</td>
                <td style="padding: 6px 0; color: #1a202c; font-size: 14px;">${intakeSize}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #f7fafc; padding: 15px 20px; border-radius: 8px; border: 1px solid #edf2f7; margin-bottom: 25px;">
            <h3 style="margin: 0 0 10px 0; color: #2d3748; font-size: 14px; font-weight: 700;">Selected Challenges:</h3>
            ${
              challenges && challenges.length > 0
                ? `<ul style="margin: 0; padding-left: 20px; color: #4a5568; font-size: 13px;">
                    ${challenges.map((c: string) => `<li style="margin-bottom: 6px;">${c}</li>`).join("")}
                  </ul>`
                : `<p style="margin: 0; color: #a0aec0; font-size: 13px; font-style: italic;">None specified.</p>`
            }
          </div>

          <div style="text-align: center; font-size: 11px; color: #a0aec0; border-top: 1px solid #e2e8f0; padding-top: 15px;">
            Sent automatically from Generation Marketing system platform.
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("Nodemailer API route error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to submit request." },
      { status: 500 }
    );
  }
}
