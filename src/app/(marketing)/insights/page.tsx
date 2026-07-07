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
import { SectionContent } from "@/lib/content/types";
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
  const getSection = (id: string) => sections.find((section: SectionContent) => section.id === id);

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

      <Hero data={getSection("hero")} withTilt3D={false} />
      <AnswerBlock data={getSection("answer")} />
      <FeaturedInsightCard data={getSection("featured-article")} />
      <InsightGrid
        filterData={getSection("categories")}
        articles={insights}
        suggestedThemesData={getSection("suggested-themes")}
        emptyStateData={getSection("empty-state")}
      />

      <div className="py-16 surface-sand border-t border-zinc-200">
        <div className="container-aroneu max-w-4xl mx-auto">
          <FAQSection data={getSection("faq")} />
        </div>
      </div>

      <div className="py-16 surface-paper">
        <ClosingCTA data={getSection("closing-cta")} />
      </div>
    </div>
  );
}
