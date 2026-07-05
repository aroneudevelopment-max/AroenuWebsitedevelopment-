import { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Imprint | Aroneu",
  description: "Imprint information for Aroneu.",
  path: "/imprint",
  noIndex: true,
});

export default function ImprintPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      heading="Imprint"
      path="/imprint"
      updatedNote="This page is a legal-content shell. Final wording will be added once the Aroneu imprint is approved for public release."
    />
  );
}
