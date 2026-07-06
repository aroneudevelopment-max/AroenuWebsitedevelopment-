import { NextResponse } from "next/server";
import {
  pushHubSpotContact,
  sendWebsiteEmail,
  type WebsiteAttachment,
} from "@/lib/server/delivery";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const allowedMimeTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
]);
const allowedExtensions = [".pdf", ".doc", ".docx", ".jpg", ".jpeg", ".png", ".webp", ".heic", ".heif"];

function isValidEmail(value: string) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);
}

function hasAllowedExtension(filename: string) {
  const normalized = filename.trim().toLowerCase();
  return allowedExtensions.some((extension) => normalized.endsWith(extension));
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const linkedIn = String(formData.get("linkedIn") || "").trim();
    const portfolio = String(formData.get("portfolio") || "").trim();
    const location = String(formData.get("location") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const roleSlug = String(formData.get("roleSlug") || "general-interest").trim();
    const consent = String(formData.get("consent") || "").trim();
    const cvFile = formData.get("cv");

    if (!fullName || !email || !location) {
      return NextResponse.json(
        { error: "Please complete the required application fields." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (consent !== "true") {
      return NextResponse.json(
        { error: "Please confirm the application consent checkbox." },
        { status: 400 },
      );
    }

    if (!(cvFile instanceof File)) {
      return NextResponse.json(
        { error: "Please attach your CV before submitting." },
        { status: 400 },
      );
    }

    if (cvFile.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "CV file is too large. Maximum size is 5 MB." },
        { status: 400 },
      );
    }

    if (!allowedMimeTypes.has(cvFile.type) && !hasAllowedExtension(cvFile.name)) {
      return NextResponse.json(
        { error: "Please upload a PDF, Word document, or common image file for the CV." },
        { status: 400 },
      );
    }

    const attachment: WebsiteAttachment = {
      filename: cvFile.name || "career-application-upload",
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
      role: roleSlug,
      message: `Careers submission\nLocation: ${location}${message ? `\n\n${message}` : ""}`,
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
