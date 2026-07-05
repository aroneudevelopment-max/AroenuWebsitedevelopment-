import { Metadata } from "next";
import { homePage } from "@/lib/content/pages/home";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { ProblemList } from "@/components/sections/ProblemList";
import { CapabilityCards } from "@/components/sections/CapabilityCards";
import { StepRow } from "@/components/sections/StepRow";
import { StatQuad } from "@/components/sections/StatQuad";
import { LeadershipPreview } from "@/components/sections/LeadershipPreview";
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

      {/* 8. Careers bridge */}
      <section className="section-aroneu surface-ink text-center">
        <div className="container-aroneu max-w-3xl mx-auto">
          {(() => {
            const data = sections.find((s) => s.id === "careers-bridge") as any;
            if (!data) return null;
            return (
              <>
                {data.eyebrow && (
                  <span className="text-label uppercase tracking-widest block mb-4 text-zinc-400">
                    {data.eyebrow}
                  </span>
                )}
                {data.heading && (
                  <h2 className="text-h2 mb-6 text-paper">{data.heading}</h2>
                )}
                {data.body && (
                  <p className="text-body text-zinc-300 mb-10">{data.body}</p>
                )}
                {data.ctas?.[0] && (
                  <a
                    href={data.ctas[0].href}
                    className="inline-block px-8 py-4 rounded-full text-base font-medium border border-zinc-500 text-paper hover:bg-zinc-900 transition-colors"
                  >
                    {data.ctas[0].label} &rarr;
                  </a>
                )}
              </>
            );
          })()}
        </div>
      </section>

      {/* 9. Closing CTA */}
      <ClosingCTA data={sections.find((s) => s.id === "closing-cta")} />

      {/* 10. FAQ */}
      <section className="section-aroneu surface-sand border-t border-zinc-200">
        <div className="container-aroneu max-w-4xl mx-auto">
          <FAQSection data={sections.find((s) => s.id === "homepage-faq")} />
        </div>
      </section>
    </div>
  );
}
