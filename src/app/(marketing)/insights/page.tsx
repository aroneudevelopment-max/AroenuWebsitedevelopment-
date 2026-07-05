import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { AnswerBlock } from "@/components/sections/AnswerBlock";
import { FeaturedInsightCard } from "@/components/sections/insights/FeaturedInsightCard";
import { InsightGrid } from "@/components/sections/insights/InsightGrid";
import { FAQSection } from "@/components/sections/FAQSection";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { insightsIndexContent } from "@/lib/content/pages/insights";
import { insights } from "@/lib/content/insights";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: insightsIndexContent.seo?.metaTitle || "Insights - the brief | Aroneu",
  description: insightsIndexContent.seo?.metaDescription || "",
  path: "/insights",
  ogTitle: insightsIndexContent.seo?.ogTitle,
  ogDescription: insightsIndexContent.seo?.ogDescription,
});

export default function InsightsIndex() {
  const sections = insightsIndexContent.sections;

  return (
    <div className="page-insights flex flex-col w-full">
      <JsonLd
        data={[
          collectionPageSchema({
            path: "/insights",
            name: insightsIndexContent.seo?.metaTitle || "Insights",
            description: insightsIndexContent.seo?.metaDescription || "",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
          ]),
        ]}
      />

      <Hero data={sections.find((s: any) => s.id === "hero")} withTilt3D={false} />
      <AnswerBlock data={sections.find((s: any) => s.id === "answer")} />
      <FeaturedInsightCard data={sections.find((s: any) => s.id === "featured-article")} />
      <InsightGrid
        filterData={sections.find((s: any) => s.id === "categories")}
        articles={insights}
        suggestedThemesData={sections.find((s: any) => s.id === "suggested-themes")}
        emptyStateData={sections.find((s: any) => s.id === "empty-state")}
      />

      <div className="py-16 surface-sand border-t border-zinc-200">
        <div className="container-aroneu max-w-4xl mx-auto">
          <FAQSection data={sections.find((s: any) => s.id === "faq")} />
        </div>
      </div>

      <div className="py-16 surface-paper">
        <ClosingCTA data={sections.find((s: any) => s.id === "closing-cta")} />
      </div>
    </div>
  );
}
