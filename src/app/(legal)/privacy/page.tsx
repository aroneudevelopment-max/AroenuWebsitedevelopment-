import { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy | Aroneu",
  description: "Privacy policy information for Aroneu.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      heading="Privacy Policy"
      path="/privacy"
      updatedNote="This page is a legal-content shell. Final wording will be added once the Aroneu privacy policy is approved for public release."
    />
  );
}
