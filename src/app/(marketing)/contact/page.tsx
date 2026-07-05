import { Metadata } from "next";
import { contactPage } from "../../../lib/content/pages/contact";
import { ContactHero } from "../../../components/sections/contact/ContactHero";
import { ContactAnswerBlock } from "../../../components/sections/contact/ContactAnswerBlock";
import { ContactWhatToInclude } from "../../../components/sections/contact/ContactWhatToInclude";
import { ContactReassurance } from "../../../components/sections/contact/ContactReassurance";
import { ContactForm } from "../../../components/sections/contact/ContactForm";
import { ContactScheduler } from "../../../components/sections/contact/ContactScheduler";
import { ContactOffice } from "../../../components/sections/contact/ContactOffice";
import { ContactClosingCTA } from "../../../components/sections/contact/ContactClosingCTA";
import { ClosingCTA } from "../../../components/sections/ClosingCTA";
import { FAQSection } from "../../../components/sections/FAQSection";

export const metadata: Metadata = {
  title: contactPage.seo?.metaTitle || "Book a call | Aroneu",
  description:
    contactPage.seo?.metaDescription ||
    "Talk to Aroneu about the India capability team you need.",
};

export default function ContactPage() {
  const { sections } = contactPage;

  const getSection = (id: string) => sections.find((s) => s.id === id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full surface-paper">
      <ContactHero data={getSection("hero")} />
      <ContactAnswerBlock data={getSection("answer-block")} />
      <ContactWhatToInclude data={getSection("what-to-include")} />
      <ContactReassurance data={getSection("reassurance")} />
      <ContactForm data={getSection("contact-form")} />
      <ContactScheduler data={getSection("scheduler")} />
      <ContactOffice data={getSection("office-context")} />
      <ContactClosingCTA data={getSection("closing-cta")} />
    </main>
  );
}
