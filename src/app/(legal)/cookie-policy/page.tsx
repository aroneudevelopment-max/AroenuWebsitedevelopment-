import { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Cookie Policy | Aroneu",
  description: "Cookie policy information for Aroneu.",
  path: "/cookie-policy",
  noIndex: true,
});

export default function CookiePolicyPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      heading="Cookie Policy"
      path="/cookie-policy"
      updatedNote="This page is a legal-content shell. Final wording will be added once the Aroneu cookie policy is approved for public release."
    />
  );
}
