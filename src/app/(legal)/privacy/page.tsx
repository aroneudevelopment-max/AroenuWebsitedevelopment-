import { LegalShell } from "@/components/layout/LegalShell";

export const metadata = {
  title: "Privacy Policy | Aroneu",
  description: "Privacy policy — pending client legal copy."
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      heading="Privacy Policy"
      updatedNote="This page is a legal-content shell. Final wording will be added once the Aroneu privacy policy is approved by client legal."
    />
  );
}
