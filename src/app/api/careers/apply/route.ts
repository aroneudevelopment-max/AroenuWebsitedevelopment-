import { NextResponse } from "next/server";
import {
  pushHubSpotContact,
  sendWebsiteEmail,
  type WebsiteAttachment,
} from "@/lib/server/delivery";
import {
  checkRateLimit,
  validateCareerApplicationInput,
  validateCareerCv,
} from "@/lib/server/form-security";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const rateLimit = checkRateLimit(request, {
      key: "careers-apply",
      maxRequests: 6,
      windowMs: 10 * 60 * 1000,
    });

    if (rateLimit.limited) {
      return NextResponse.json(
        { error: "Too many application attempts. Please try again shortly." },
        {
          status: 429,
          headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
        },
      );
    }

    const formData = await request.formData();
    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const linkedIn = String(formData.get("linkedIn") || "").trim();
    const portfolio = String(formData.get("portfolio") || "").trim();
    const location = String(formData.get("location") || "").trim();
    const candidateRole = String(formData.get("candidateRole") || "").trim();
    const experience = String(formData.get("experience") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const roleSlug = String(formData.get("roleSlug") || "general-interest").trim();
    const consent = String(formData.get("consent") || "").trim();
    const cvFile = formData.get("cv");

    const applicationValidationError = validateCareerApplicationInput({
      fullName,
      email,
      location,
      consent,
    });
    if (applicationValidationError) {
      return NextResponse.json(
        { error: applicationValidationError },
        { status: 400 },
      );
    }

    if (!(cvFile instanceof File)) {
      return NextResponse.json(
        { error: "Please attach your CV before submitting." },
        { status: 400 },
      );
    }

    const validatedCv = validateCareerCv(cvFile);
    if (validatedCv.error) {
      return NextResponse.json(
        { error: validatedCv.error },
        { status: 400 },
      );
    }

    const attachment: WebsiteAttachment = {
      filename: validatedCv.filename || "career-application-cv.pdf",
      content: Buffer.from(await cvFile.arrayBuffer()),
      contentType: cvFile.type || undefined,
    };

    await sendWebsiteEmail({
      replyTo: email,
      subject: roleSlug === "general-interest"
        ? "New General Careers CV Submission"
        : `New Careers Application: ${roleSlug}`,
      text: `Name: ${fullName}
Email: ${email}
Phone: ${phone || "N/A"}
Location: ${location}
Candidate Role: ${candidateRole || "N/A"}
Experience: ${experience || "N/A"}
LinkedIn: ${linkedIn || "N/A"}
Portfolio: ${portfolio || "N/A"}
Role Slug: ${roleSlug}
Message: ${message || "N/A"}
Source: Careers page`,
      attachments: [attachment],
    });

    await pushHubSpotContact({
      email,
      fullName,
      phone,
      role: candidateRole || roleSlug,
      message: `Careers submission\nLocation: ${location}${experience ? `\nExperience: ${experience}` : ""}${message ? `\n\n${message}` : ""}`,
      source: "Careers page",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Careers application error:", error);
    if (error instanceof Error && error.message.includes("SMTP_PASS")) {
      return NextResponse.json(
        { error: "Career application delivery is not configured yet." },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
