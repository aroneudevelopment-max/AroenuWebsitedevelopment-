import { Metadata } from "next";
import { resourcesPage } from "@/lib/content/pages/resources";
import { Hero } from "@/components/sections/Hero";
import { FAQSection } from "@/components/sections/FAQSection";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export const metadata: Metadata = {
  title: "Resources | Aroneu",
  description:
    "Practical resources on governable India capability teams, visibility, continuity, and AI-supported governance.",
};

/**
 * /resources
 * Per the brief, this page is a shell with an empty state until resources
 * are approved. Newsletter-style collection, gated prompt, ungated prompt,
 * and FAQ are wired for future content.
 */
export default function ResourcesPage() {
  const sections = resourcesPage.sections;
  const hero = sections.find((s) => s.id === "hero") as any;
  const emptyState = sections.find((s) => s.id === "empty-state") as any;
  const cta = sections.find((s) => s.id === "closing-cta") as any;
  const faq = sections.find((s) => s.id === "faq") as any;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Hero data={hero} withTilt3D={false} />

      <section className="py-24 surface-paper border-y border-zinc-200">
        <div className="container-aroneu max-w-3xl mx-auto text-center">
          <span className="text-label uppercase tracking-widest text-zinc-500 block mb-4">
            Resources
          </span>
          <h2 className="text-h2 mb-6">
            {emptyState?.heading || "Resources are being prepared."}
          </h2>
          <p className="text-body text-zinc-600 mb-10">
            {emptyState?.body ||
              "Aroneu is preparing practical resources on governable India capability, AI-supported governance, and operating rhythm. New resources will appear here once they are approved."}
          </p>
          {emptyState?.primaryCTA && (
            <a
              href={emptyState.primaryCTA.href}
              className="inline-block px-8 py-4 rounded-full text-base font-medium bg-ink text-paper hover:opacity-90 transition-opacity"
            >
              {emptyState.primaryCTA.label || "Get notified"}
            </a>
          )}
        </div>
      </section>

      <div className="py-16 surface-paper">
        <ClosingCTA data={cta} />
      </div>

      <div className="py-16 surface-sand border-t border-zinc-200">
        <div className="container-aroneu max-w-4xl mx-auto">
          <FAQSection data={faq} />
        </div>
      </div>
    </main>
  );
}
