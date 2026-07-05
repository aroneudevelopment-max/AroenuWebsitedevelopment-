import { LegalShell } from "@/components/layout/LegalShell";

export const metadata = {
  title: "Terms of Service | Aroneu",
  description: "Terms of service — pending client legal copy."
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      heading="Terms of Service"
      updatedNote="This page is a legal-content shell. Final wording will be added once the Aroneu terms of service are approved by client legal."
    />
  );
}
