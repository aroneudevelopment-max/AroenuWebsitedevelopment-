import { Metadata } from "next";
import { homePage } from "@/lib/content/pages/home";
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

export const metadata: Metadata = {
  title: homePage.seo?.metaTitle || "Aroneu",
  description: homePage.seo?.metaDescription,
  openGraph: {
    title: homePage.seo?.ogTitle,
    description: homePage.seo?.ogDescription,
  },
};

export default function Home() {
  const sections = homePage.sections;

  return (
    <div className="page-home flex flex-col w-full">
      {/* 1. Hero */}
      <Hero data={sections.find((s) => s.id === "hero")} />

      {/* 2. Proof strip (pending-proof mode until source-ledger approves the metrics) */}
      <ProofStrip data={sections.find((s) => s.id === "proof-strip")} />

      {/* 3. Problem section */}
      <ProblemList data={sections.find((s) => s.id === "problem")} />

      {/* 4. Two capabilities */}
      <CapabilityCards data={sections.find((s) => s.id === "two-capabilities")} />

      {/* 5. How it works preview */}
      <StepRow data={sections.find((s) => s.id === "how-it-works-preview")} />

      {/* 6. Proof at scale */}
      <StatQuad data={sections.find((s) => s.id === "proof-at-scale")} />

      {/* 7. Leadership / named accountability */}
      <LeadershipPreview data={sections.find((s) => s.id === "leadership")} />

      {/* 8. Careers bridge (dark surface) */}
      <CareersBridge data={sections.find((s) => s.id === "careers-bridge")} />

      {/* 9. Closing CTA */}
      <div className="surface-paper">
        <ClosingCTA data={sections.find((s) => s.id === "closing-cta")} />
      </div>

      {/* 10. FAQ (on light surface, no dark-on-dark) */}
      <section className="section-aroneu surface-paper border-t border-zinc-200">
        <div className="container-aroneu max-w-4xl mx-auto">
          <FAQSection data={sections.find((s) => s.id === "homepage-faq")} />
        </div>
      </section>
    </div>
  );
}
