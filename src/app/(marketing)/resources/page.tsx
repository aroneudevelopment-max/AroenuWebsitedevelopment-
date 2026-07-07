import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { FAQSection } from "@/components/sections/FAQSection";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { resourcesPage } from "@/lib/content/pages/resources";
import { SectionContent } from "@/lib/content/types";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { resolveCtaHref } from "@/lib/cta";

export const metadata: Metadata = buildPageMetadata({
  title: resourcesPage.seo?.metaTitle || "Resources - governable capability guides | Aroneu",
  description: resourcesPage.seo?.metaDescription || "",
  path: "/resources",
});

export default function ResourcesPage() {
  const sections = resourcesPage.sections;
  const getSection = (id: string) => sections.find((section: SectionContent) => section.id === id);
  const hero = getSection("hero");
  const emptyState = getSection("empty-state");
  const cta = getSection("closing-cta");
  const faq = getSection("faq");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <JsonLd
        data={[
          collectionPageSchema({
            path: "/resources",
            name: resourcesPage.seo?.metaTitle || "Resources",
            description: resourcesPage.seo?.metaDescription || "",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
          ]),
        ]}
      />

      <Hero data={hero} withTilt3D={false} />

      <section className="py-24 surface-paper border-y border-zinc-200">
        <div className="container-aroneu max-w-3xl mx-auto text-center">
          <div className="mb-10 mx-auto max-w-xl rounded-[2rem] border border-zinc-200 surface-sand p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="rounded-2xl border border-zinc-200 surface-paper p-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 mb-3">
                  Governance
                </p>
                <p className="text-sm font-medium text-ink">
                  Decision history and review checkpoints
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 surface-paper p-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 mb-3">
                  Visibility
                </p>
                <p className="text-sm font-medium text-ink">
                  Status, ownership, and continuity signals
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 surface-paper p-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 mb-3">
                  Controls
                </p>
                <p className="text-sm font-medium text-ink">
                  Practical guide cards are being prepared
                </p>
              </div>
            </div>
          </div>
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
              href={resolveCtaHref(
                emptyState.primaryCTA.href,
                emptyState.primaryCTA.label,
              )}
              className="inline-block px-8 py-4 rounded-full text-base font-medium bg-ink text-paper hover:opacity-90 transition-opacity"
            >
              {emptyState.primaryCTA.label || "Read insights"}
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
