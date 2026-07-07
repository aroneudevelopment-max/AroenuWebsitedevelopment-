const DOCUMENT_MIME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const DOCUMENT_EXTENSIONS = [".pdf", ".doc", ".docx"] as const;

const rateLimitBuckets = new Map<string, { count: number; resetAt: number }>();

export const CAREER_CV_MAX_BYTES = 10 * 1024 * 1024;

export function isValidEmail(value: string) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);
}

export function validateContactSubmissionInput({
  fullName,
  workEmail,
  company,
  role,
  teamNeed,
  message,
}: {
  fullName: string;
  workEmail: string;
  company: string;
  role: string;
  teamNeed: string;
  message: string;
}) {
  if (!fullName || !workEmail || !company || !role || !teamNeed || !message) {
    return "Please complete the required contact fields.";
  }

  if (!isValidEmail(workEmail)) {
    return "Please enter a valid work email.";
  }

  return null;
}

export function validateCareerApplicationInput({
  fullName,
  email,
  location,
  consent,
}: {
  fullName: string;
  email: string;
  location: string;
  consent: string;
}) {
  if (!fullName || !email || !location) {
    return "Please complete the required application fields.";
  }

  if (!isValidEmail(email)) {
    return "Please enter a valid email address.";
  }

  if (consent !== "true") {
    return "Please confirm the application consent checkbox.";
  }

  return null;
}

export function getClientIdentifier(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const forwardedIp = forwardedFor?.split(",")[0]?.trim();

  return (
    request.headers.get("cf-connecting-ip")?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    forwardedIp ||
    "unknown"
  );
}

export function checkRateLimit(
  request: Request,
  {
    key,
    maxRequests,
    windowMs,
  }: {
    key: string;
    maxRequests: number;
    windowMs: number;
  },
) {
  const now = Date.now();

  for (const [bucketKey, bucket] of rateLimitBuckets) {
    if (bucket.resetAt <= now) {
      rateLimitBuckets.delete(bucketKey);
    }
  }

  const bucketKey = `${key}:${getClientIdentifier(request)}`;
  const existingBucket = rateLimitBuckets.get(bucketKey);

  if (!existingBucket || existingBucket.resetAt <= now) {
    rateLimitBuckets.set(bucketKey, { count: 1, resetAt: now + windowMs });
    return { limited: false, retryAfterSeconds: 0 };
  }

  if (existingBucket.count >= maxRequests) {
    return {
      limited: true,
      retryAfterSeconds: Math.max(
        1,
        Math.ceil((existingBucket.resetAt - now) / 1000),
      ),
    };
  }

  existingBucket.count += 1;
  return { limited: false, retryAfterSeconds: 0 };
}

function getAllowedDocumentExtension(filename: string) {
  const normalized = filename.trim().toLowerCase();
  return DOCUMENT_EXTENSIONS.find((extension) => normalized.endsWith(extension));
}

export function sanitizeAttachmentFilename(
  filename: string,
  fallbackStem: string,
) {
  const safeExtension = getAllowedDocumentExtension(filename) || ".pdf";
  const baseName = filename.slice(0, Math.max(0, filename.length - safeExtension.length));
  const normalizedStem = baseName
    .normalize("NFKD")
    .replace(/[^\w.-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^[.-]+|[.-]+$/g, "")
    .slice(0, 80);

  const safeStem = normalizedStem || fallbackStem;
  return `${safeStem}${safeExtension}`;
}

export function validateCareerCv(file: File) {
  if (file.size > CAREER_CV_MAX_BYTES) {
    return {
      error: "CV file is too large. Maximum size is 10 MB.",
    };
  }

  const allowedExtension = getAllowedDocumentExtension(file.name);
  if (!allowedExtension) {
    return {
      error: "Please upload a PDF or Word document for the CV.",
    };
  }

  if (file.type && !DOCUMENT_MIME_TYPES.has(file.type)) {
    return {
      error: "Please upload a PDF or Word document for the CV.",
    };
  }

  return {
    filename: sanitizeAttachmentFilename(file.name, "career-application-cv"),
  };
}
