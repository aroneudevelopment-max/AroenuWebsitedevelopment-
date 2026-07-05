import { Metadata } from "next";
import { insightsIndexContent } from "@/lib/content/pages/insights";
import { insights } from "@/lib/content/insights";
import { Hero } from "@/components/sections/Hero";
import { AnswerBlock } from "@/components/sections/AnswerBlock";
import { FeaturedInsightCard } from "@/components/sections/insights/FeaturedInsightCard";
import { InsightGrid } from "@/components/sections/insights/InsightGrid";
import { FAQSection } from "@/components/sections/FAQSection";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export const metadata: Metadata = {
  title: insightsIndexContent.seo?.metaTitle,
  description: insightsIndexContent.seo?.metaDescription,
  openGraph: {
    title: insightsIndexContent.seo?.ogTitle,
    description: insightsIndexContent.seo?.ogDescription,
  },
};

export default function InsightsIndex() {
  const sections = insightsIndexContent.sections;

  return (
    <div className="page-insights flex flex-col w-full">
      {/* 1. Hero */}
      <Hero data={sections.find((s: any) => s.id === "hero")} />

      {/* 2. Answer block */}
      <AnswerBlock data={sections.find((s: any) => s.id === "answer")} />

      {/* 3. Featured article (renders on light surface) */}
      <FeaturedInsightCard data={sections.find((s: any) => s.id === "featured-article")} />

      {/* 4-7. InsightGrid handles categories, article cards, suggested themes, empty state */}
      <InsightGrid
        filterData={sections.find((s: any) => s.id === "categories")}
        articles={insights}
        suggestedThemesData={sections.find((s: any) => s.id === "suggested-themes")}
        emptyStateData={sections.find((s: any) => s.id === "empty-state")}
      />

      {/* 8. FAQ - on sand surface, light theme */}
      <div className="py-16 surface-sand border-t border-zinc-200">
        <div className="container-aroneu max-w-4xl mx-auto">
          <FAQSection data={sections.find((s: any) => s.id === "faq")} />
        </div>
      </div>

      {/* 9. Closing CTA - on paper */}
      <div className="py-16 surface-paper">
        <ClosingCTA data={sections.find((s: any) => s.id === "closing-cta")} />
      </div>
    </div>
  );
}
