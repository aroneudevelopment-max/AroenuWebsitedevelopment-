import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AnswerBlock } from "@/components/sections/AnswerBlock";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutNameMeaning } from "@/components/sections/about/AboutNameMeaning";
import { AboutValues } from "@/components/sections/about/AboutValues";
import { AboutSociety } from "@/components/sections/about/AboutSociety";
import { AboutLeadership } from "@/components/sections/about/AboutLeadership";
import { AboutLocations } from "@/components/sections/about/AboutLocations";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { aboutPage } from "@/lib/content/pages/about";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: aboutPage.seo?.metaTitle || "About Aroneu - two places, one standard",
  description: aboutPage.seo?.metaDescription || "",
  path: "/about",
  ogTitle: aboutPage.seo?.ogTitle,
  ogDescription: aboutPage.seo?.ogDescription,
});

export default function AboutPage() {
  const { sections } = aboutPage;
  const getSection = (id: string) => sections.find((s) => s.id === id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <JsonLd
        data={[
          webPageSchema({
            path: "/about",
            name: aboutPage.seo?.metaTitle || "About Aroneu",
            description: aboutPage.seo?.metaDescription || "",
            type: "AboutPage",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <AboutHero data={getSection("hero")} />
      <AnswerBlock data={getSection("answer-block")} />
      <AboutStory data={getSection("story")} />
      <AboutNameMeaning data={getSection("name-meaning")} />
      <AboutValues data={getSection("values")} />
      <AboutSociety data={getSection("in-society")} />
      <AboutLeadership data={getSection("leadership")} />
      <AboutLocations data={getSection("locations")} />

      <div className="w-full surface-paper pt-12 pb-24 border-t border-zinc-200">
        <div className="container-aroneu max-w-4xl mx-auto">
          <AnswerBlock data={getSection("belief")} />
        </div>
      </div>

      <ClosingCTA data={getSection("closing-cta")} />

      <div className="py-16 surface-sand border-t border-zinc-200">
        <div className="container-aroneu max-w-4xl mx-auto">
          <FAQSection data={getSection("about-faq")} />
        </div>
      </div>
    </main>
  );
}
