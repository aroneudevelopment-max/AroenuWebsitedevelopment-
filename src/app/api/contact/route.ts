import { NextResponse } from "next/server";
import {
  pushHubSpotContact,
  sendWebsiteEmail,
} from "@/lib/server/delivery";
import { checkRateLimit, isValidEmail } from "@/lib/server/form-security";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const rateLimit = checkRateLimit(request, {
      key: "contact",
      maxRequests: 8,
      windowMs: 10 * 60 * 1000,
    });

    if (rateLimit.limited) {
      return NextResponse.json(
        { error: "Too many contact submissions. Please try again shortly." },
        {
          status: 429,
          headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
        },
      );
    }

    const data = await request.json();
    const { formData, turnstileToken } = data;
    const fullName = String(formData?.fullName || "").trim();
    const workEmail = String(formData?.workEmail || "").trim();
    const phone = String(formData?.phone || "").trim();
    const company = String(formData?.company || "").trim();
    const role = String(formData?.role || "").trim();
    const teamNeed = String(formData?.teamNeed || "").trim();
    const message = String(formData?.message || "").trim();
    const pageSource = String(formData?.pageSource || "Contact Form").trim();

    if (!fullName || !workEmail || !company || !role || !teamNeed || !message) {
      return NextResponse.json(
        { error: "Please complete the required contact fields." },
        { status: 400 },
      );
    }

    if (!isValidEmail(workEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid work email." },
        { status: 400 },
      );
    }

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY?.trim();

    if (turnstileSecret) {
      if (!turnstileToken) {
        return NextResponse.json(
          { error: "Please complete the security check." },
          { status: 400 },
        );
      }

      const turnstileVerify = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: turnstileSecret,
            response: String(turnstileToken),
          }),
        },
      );

      const turnstileResult = await turnstileVerify.json();
      if (!turnstileResult.success) {
        return NextResponse.json(
          { error: "Security verification failed. Please try again." },
          { status: 400 },
        );
      }
    }

    await sendWebsiteEmail({
      replyTo: workEmail,
      subject: "New Website Form Submission",
      text: `Name: ${fullName}
Email: ${workEmail}
Phone: ${phone || "N/A"}
Company: ${company}
Role: ${role}
Team Need: ${teamNeed}
Message: ${message}
Page Source: ${pageSource}`,
    });

    await pushHubSpotContact({
      email: workEmail,
      fullName,
      company,
      role,
      phone,
      message: `${teamNeed}${message ? `\n\n${message}` : ""}`,
      source: pageSource,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    if (error instanceof Error && error.message.includes("SMTP_PASS")) {
      return NextResponse.json(
        { error: "Contact delivery is not configured yet." },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
