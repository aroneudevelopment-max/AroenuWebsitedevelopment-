import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { ProblemList } from "@/components/sections/ProblemList";
import { CapabilityCards } from "@/components/sections/CapabilityCards";
import { StepRow } from "@/components/sections/StepRow";
import { StatQuad } from "@/components/sections/StatQuad";
import { LeadershipPreview } from "@/components/sections/LeadershipPreview";
import { CareersBridge } from "@/components/sections/CareersBridge";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { homePage } from "@/lib/content/pages/home";
import { buildPageMetadata } from "@/lib/seo";
import { webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: homePage.seo?.metaTitle || "Aroneu - Governable India capability teams",
  description: homePage.seo?.metaDescription || "",
  path: "/",
  ogTitle: homePage.seo?.ogTitle,
  ogDescription: homePage.seo?.ogDescription,
});

export default function Home() {
  const sections = homePage.sections;

  return (
    <div className="page-home flex flex-col w-full">
      <JsonLd
        data={webPageSchema({
          path: "/",
          name: homePage.seo?.metaTitle || "Aroneu",
          description: homePage.seo?.metaDescription || "",
        })}
      />

      <Hero data={sections.find((s) => s.id === "hero")} />
      <ProofStrip data={sections.find((s) => s.id === "proof-strip")} />
      <ProblemList data={sections.find((s) => s.id === "problem")} />
      <CapabilityCards data={sections.find((s) => s.id === "two-capabilities")} />
      <StepRow data={sections.find((s) => s.id === "how-it-works-preview")} />
      <StatQuad data={sections.find((s) => s.id === "proof-at-scale")} />
      <LeadershipPreview data={sections.find((s) => s.id === "leadership")} />
      <CareersBridge data={sections.find((s) => s.id === "careers-bridge")} />

      <div className="surface-paper">
        <ClosingCTA data={sections.find((s) => s.id === "closing-cta")} />
      </div>

      <section className="section-aroneu surface-paper border-t border-zinc-200">
        <div className="container-aroneu max-w-4xl mx-auto">
          <FAQSection data={sections.find((s) => s.id === "homepage-faq")} />
        </div>
      </section>
    </div>
  );
}
