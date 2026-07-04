import { Metadata } from 'next';
import { insightsIndexContent } from '@/lib/content/pages/insights';
import { insights } from '@/lib/content/insights';
import { Hero } from '@/components/sections/Hero';
import { AnswerBlock } from '@/components/sections/AnswerBlock';
import { FeaturedInsightCard } from '@/components/sections/insights/FeaturedInsightCard';
import { InsightGrid } from '@/components/sections/insights/InsightGrid';
import { FAQSection } from '@/components/sections/FAQSection';
import { ClosingCTA } from '@/components/sections/ClosingCTA';

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
      <Hero data={sections.find((s: any) => s.id === 'hero')} />
      
      {/* 2. Answer block */}
      <AnswerBlock data={sections.find((s: any) => s.id === 'answer')} />
      
      {/* 3. Featured article */}
      <FeaturedInsightCard data={sections.find((s: any) => s.id === 'featured-article')} />
      
      {/* 4. Categories & 5. Article card grid & 6. Suggested themes & 7. Empty state */}
      {/* InsightGrid component encapsulates 4, 5, 6, and 7 functionality securely based on published state */}
      <InsightGrid 
        filterData={sections.find((s: any) => s.id === 'categories')} 
        articles={insights} 
        suggestedThemesData={sections.find((s: any) => s.id === 'suggested-themes')}
        emptyStateData={sections.find((s: any) => s.id === 'empty-state')}
      />
      
      {/* 8. Insights FAQ */}
      <div className="bg-zinc-50 dark:bg-zinc-900 py-16 border-t border-zinc-200 dark:border-zinc-800">
        <FAQSection data={sections.find((s: any) => s.id === 'faq')} />
      </div>
      
      {/* 9. Closing CTA */}
      <ClosingCTA data={sections.find((s: any) => s.id === 'closing-cta')} />
    </div>
  );
}
