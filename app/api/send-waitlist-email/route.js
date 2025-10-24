import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

console.log("user - ", process.env.GMAIL_USER);
console.log("PASS - ", process.env.GMAIL_APP_PASSWORD);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Set to false when using port 587
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  requireTLS: true, // Ensure TLS is initiated (STARTTLS)
});

export async function POST(req) {
  const { name, email } = await req.json();

  console.log("NAME - ", name);
  console.log("EMAIL - ", email);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { success: false, error: "Invalid email format" },
      { status: 400 }
    );
  }

  const emailHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Welcome to CodeNEarn</title>
  </head>
  <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #2e2e38, #3a3a49); font-family: 'Segoe UI', sans-serif; color: #ffffff;">
    <div style="max-width: 600px; margin: 40px auto; padding: 40px 30px; background-color: #2f2f3f; border-radius: 16px; border: 1px solid #444; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);">
      
      <h1 style="color: #00ffff; font-size: 30px; text-align: center; margin-bottom: 10px;">Welcome to CodeNEarn, ${name} 🎉</h1>

      <p style="font-size: 17px; line-height: 1.6; text-align: center;">
        You've officially joined the <strong>CodeNEarn waitlist</strong> — and we’re thrilled to have you on board!
      </p>

      <hr style="margin: 30px 0; border: 0; border-top: 1px solid #555;" />

      <p style="font-size: 16px; line-height: 1.6;">
        🔥 <strong>Here's what's coming your way:</strong>
      </p>
      <ul style="padding-left: 20px; font-size: 16px; line-height: 1.8;">
        <li>💥 Real-time coding battles with friends & global devs</li>
        <li>🏆 Skill-based ranking system (Bronze → Diamond)</li>
        <li>🎁 Victory Points to unlock power-ups & themes</li>
        <li>📊 Global Leaderboards</li>
      </ul>

      <p style="margin-top: 25px; font-size: 16px;">
        We’ll notify you soon with early access details.<br/>
        Until then — <em>stay sharp. stay legendary.</em>
      </p>

      <div style="text-align: center; margin-top: 30px;">
        <a href="https://codecasino.vercel.app" target="_blank" style="display: inline-block; padding: 14px 28px; background: #00ffff; color: #000; font-weight: bold; text-decoration: none; border-radius: 8px; font-size: 16px; box-shadow: 0 2px 6px rgba(0,0,0,0.3); transition: background 0.3s;">
          🚀 Visit CodeNEarn
        </a>
      </div>

      <hr style="margin: 40px 0; border: 0; border-top: 1px solid #555;" />

      <p style="font-size: 12px; color: #bbb; text-align: center;">
        You’re receiving this email because you joined our waitlist.<br/>
        If this wasn’t you, feel free to ignore this message.
      </p>
    </div>
  </body>
</html>
`;

  try {
    const mailOptions = {
      from: `"CodeNEarn" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `🎉 Welcome to CodeNEarn, ${name}!`,
      html: emailHtml,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
