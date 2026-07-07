import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const linkedIn = formData.get("linkedIn") as string;
    const portfolio = formData.get("portfolio") as string;
    const location = formData.get("location") as string;
    const message = formData.get("message") as string;
    const cvFile = formData.get("cv") as File | null;

    let attachments = [];
    if (cvFile && cvFile.size > 0) {
      const buffer = Buffer.from(await cvFile.arrayBuffer());
      attachments.push({
        filename: cvFile.name,
        content: buffer,
        contentType: cvFile.type,
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Career Application: ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nLinkedIn: ${linkedIn || "N/A"}\nPortfolio: ${portfolio || "N/A"}\nLocation: ${location}\nMessage: ${message || "N/A"}\nPage Source: Careers Form`,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Career application error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
