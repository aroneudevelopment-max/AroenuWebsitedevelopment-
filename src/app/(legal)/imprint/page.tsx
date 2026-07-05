import { LegalShell } from "@/components/layout/LegalShell";

export const metadata = {
  title: "Imprint | Aroneu",
  description: "Imprint — pending client legal copy."
};

export default function ImprintPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      heading="Imprint"
      updatedNote="This page is a legal-content shell. Final wording will be added once the Aroneu imprint is approved by client legal."
    />
  );
}
