import { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service | Aroneu",
  description: "Terms of service information for Aroneu.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      heading="Terms of Service"
      path="/terms"
      updatedNote="This page is a legal-content shell. Final wording will be added once the Aroneu terms of service are approved for public release."
    />
  );
}
