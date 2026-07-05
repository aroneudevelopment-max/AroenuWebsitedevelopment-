import { Metadata } from "next";
import { aboutPage } from "../../../lib/content/pages/about";
import { AboutHero } from "../../../components/sections/about/AboutHero";
import { AnswerBlock } from "../../../components/sections/AnswerBlock";
import { AboutStory } from "../../../components/sections/about/AboutStory";
import { AboutNameMeaning } from "../../../components/sections/about/AboutNameMeaning";
import { AboutValues } from "../../../components/sections/about/AboutValues";
import { AboutSociety } from "../../../components/sections/about/AboutSociety";
import { AboutLeadership } from "../../../components/sections/about/AboutLeadership";
import { AboutLocations } from "../../../components/sections/about/AboutLocations";
import { ClosingCTA } from "../../../components/sections/ClosingCTA";
import { FAQSection } from "../../../components/sections/FAQSection";

export const metadata: Metadata = {
  title: aboutPage.seo?.metaTitle || "About Aroneu",
  description: aboutPage.seo?.metaDescription || "About Aroneu",
};

export default function AboutPage() {
  const { sections } = aboutPage;

  const getSection = (id: string) => sections.find((s) => s.id === id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <AboutHero data={getSection("hero")} />
      <AnswerBlock data={getSection("answer-block")} />
      <AboutStory data={getSection("story")} />
      <AboutNameMeaning data={getSection("name-meaning")} />
      <AboutValues data={getSection("values")} />
      <AboutSociety data={getSection("in-society")} />
      <AboutLeadership data={getSection("leadership")} />
      <AboutLocations data={getSection("locations")} />

      {/* Belief section - on light surface */}
      <div className="w-full surface-paper pt-12 pb-24 border-t border-zinc-200">
        <div className="container-aroneu max-w-4xl mx-auto">
          <AnswerBlock data={getSection("belief")} />
        </div>
      </div>

      <ClosingCTA data={getSection("closing-cta")} />

      {/* FAQ - on sand surface */}
      <div className="py-16 surface-sand border-t border-zinc-200">
        <div className="container-aroneu max-w-4xl mx-auto">
          <FAQSection data={getSection("about-faq")} />
        </div>
      </div>
    </main>
  );
}
