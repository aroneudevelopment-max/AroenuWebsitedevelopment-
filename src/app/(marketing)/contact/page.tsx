import { Metadata } from "next";
import { contactPage } from "../../../lib/content/pages/contact";
import { ContactHero } from "../../../components/sections/contact/ContactHero";
import { AnswerBlock } from "../../../components/sections/AnswerBlock";
import { ContactWhatToInclude } from "../../../components/sections/contact/ContactWhatToInclude";
import { ContactReassurance } from "../../../components/sections/contact/ContactReassurance";
import { ContactForm } from "../../../components/sections/contact/ContactForm";
import { ContactScheduler } from "../../../components/sections/contact/ContactScheduler";
import { ContactOffice } from "../../../components/sections/contact/ContactOffice";
import { ClosingCTA } from "../../../components/sections/ClosingCTA";

export const metadata: Metadata = {
  title: contactPage.seo?.metaTitle || "Book a call | Aroneu",
  description: contactPage.seo?.metaDescription || "Talk to Aroneu about the India capability team you need.",
};

export default function ContactPage() {
  const { sections } = contactPage;

  const getSection = (id: string) => sections.find((s) => s.id === id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <ContactHero data={getSection("hero")} />
      
      {/* Answer Block */}
      <div className="w-full bg-white pt-12 pb-24 border-t border-zinc-100">
        <AnswerBlock data={getSection("answer-block")} />
      </div>
      
      <ContactWhatToInclude data={getSection("what-to-include")} />
      <ContactReassurance data={getSection("reassurance")} />
      <ContactForm data={getSection("contact-form")} />
      <ContactScheduler data={getSection("scheduler")} />
      <ContactOffice data={getSection("office-context")} />
      <ClosingCTA data={getSection("closing-cta")} />
    </main>
  );
}
