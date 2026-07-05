import { LegalShell } from "@/components/layout/LegalShell";

export const metadata = {
  title: "Cookie Policy | Aroneu",
  description: "Cookie policy — pending client legal copy."
};

export default function CookiePolicyPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      heading="Cookie Policy"
      updatedNote="This page is a legal-content shell. Final wording will be added once the Aroneu cookie policy is approved by client legal."
    />
  );
}
