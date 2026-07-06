import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { formData, turnstileToken } = data;

    // 1. Verify Turnstile
    if (!turnstileToken) {
      return NextResponse.json({ error: "Missing Turnstile token." }, { status: 400 });
    }

    const turnstileVerify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY || "",
        response: turnstileToken,
      }),
    });

    const turnstileResult = await turnstileVerify.json();
    if (!turnstileResult.success) {
      return NextResponse.json({ error: "Turnstile verification failed." }, { status: 400 });
    }

    // 2. Send Email via Gmail SMTP
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
      replyTo: formData.workEmail,
      subject: "New Website Form Submission",
      text: `Name: ${formData.fullName}
Email: ${formData.workEmail}
Company: ${formData.company || "N/A"}
Role: ${formData.role || "N/A"}
Team Need: ${formData.teamNeed || "N/A"}
Message: ${formData.message || "N/A"}
Page Source: Contact Form`,
    };

    await transporter.sendMail(mailOptions);

    // 3. Push to HubSpot CRM
    if (process.env.HUBSPOT_PAT) {
      // Basic HubSpot Contacts API request
      const [firstname, ...lastnames] = (formData.fullName || "").split(" ");
      const lastname = lastnames.join(" ");

      await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.HUBSPOT_PAT}`
        },
        body: JSON.stringify({
          properties: {
            email: formData.workEmail,
            firstname: firstname || "",
            lastname: lastname || "",
            company: formData.company || "",
            jobtitle: formData.role || "",
            message: formData.message || "",
            hs_lead_status: "NEW"
          }
        })
      }).catch(err => console.error("HubSpot Error:", err)); // Don't block if HubSpot fails
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
