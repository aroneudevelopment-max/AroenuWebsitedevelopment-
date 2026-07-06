import nodemailer from "nodemailer";

export type WebsiteAttachment = {
  filename: string;
  content: Buffer;
  contentType?: string;
};

const DEFAULT_SMTP_HOST = "smtp.gmail.com";
const DEFAULT_SMTP_PORT = 465;
const DEFAULT_RECEIVER_EMAIL = "Aroneudevelopment@gmail.com";

function getTrimmedEnv(name: string) {
  return process.env[name]?.trim();
}

export function getReceiverEmail() {
  return getTrimmedEnv("CONTACT_RECEIVER_EMAIL") || DEFAULT_RECEIVER_EMAIL;
}

export function createMailerTransport() {
  const smtpUser = getTrimmedEnv("SMTP_USER") || getReceiverEmail();
  const smtpPass = getTrimmedEnv("SMTP_PASS");

  if (!smtpPass) {
    throw new Error("SMTP_PASS is not configured.");
  }

  const smtpPort = Number(getTrimmedEnv("SMTP_PORT") || DEFAULT_SMTP_PORT);

  return nodemailer.createTransport({
    host: getTrimmedEnv("SMTP_HOST") || DEFAULT_SMTP_HOST,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
}

export async function sendWebsiteEmail({
  subject,
  text,
  replyTo,
  attachments,
}: {
  subject: string;
  text: string;
  replyTo?: string;
  attachments?: WebsiteAttachment[];
}) {
  const smtpUser = getTrimmedEnv("SMTP_USER") || getReceiverEmail();
  const transporter = createMailerTransport();

  await transporter.sendMail({
    from: smtpUser,
    to: getReceiverEmail(),
    replyTo,
    subject,
    text,
    attachments,
  });
}

export async function pushHubSpotContact({
  email,
  fullName,
  company,
  role,
  phone,
  message,
  source,
}: {
  email: string;
  fullName: string;
  company?: string;
  role?: string;
  phone?: string;
  message?: string;
  source?: string;
}) {
  const hubspotPat = getTrimmedEnv("HUBSPOT_PAT");

  if (!hubspotPat) {
    return;
  }

  const [firstname, ...lastnameParts] = fullName.split(" ").filter(Boolean);
  const lastname = lastnameParts.join(" ");

  const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${hubspotPat}`,
    },
    body: JSON.stringify({
      properties: {
        email,
        firstname: firstname || "",
        lastname,
        company: company || "",
        jobtitle: role || "",
        phone: phone || "",
        message: message || "",
        website_source_detail: source || "",
        hs_lead_status: "NEW",
      },
    }),
  }).catch((error) => {
    console.error("HubSpot request error:", error);
    return null;
  });

  if (response && !response.ok) {
    console.error("HubSpot response error:", response.status, response.statusText);
  }
}
