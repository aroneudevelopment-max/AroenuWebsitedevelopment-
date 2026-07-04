import { Metadata } from 'next';
import { caseStudiesPage } from '@/lib/content/pages/case-studies';
import { caseStudies } from '@/lib/content/case-studies';
import { Hero } from '@/components/sections/Hero';
import { AnswerBlock } from '@/components/sections/AnswerBlock';
import { FeaturedCase } from '@/components/sections/case-studies/FeaturedCase';
import { CaseStudyGrid } from '@/components/sections/CaseStudyGrid';
import { ClosingCTA } from '@/components/sections/ClosingCTA';
import { FAQSection } from '@/components/sections/FAQSection';

export const metadata: Metadata = {
  title: caseStudiesPage.seo?.metaTitle,
  description: caseStudiesPage.seo?.metaDescription,
  openGraph: {
    title: caseStudiesPage.seo?.ogTitle,
    description: caseStudiesPage.seo?.ogDescription,
  },
};

export default function CaseStudiesIndex() {
  const sections = caseStudiesPage.sections;
  
  return (
    <div className="page-case-studies flex flex-col w-full">
      {/* 1. Hero */}
      <Hero data={sections.find(s => s.id === 'hero')} />
      
      {/* 2. Answer block */}
      <AnswerBlock data={sections.find(s => s.id === 'answer')} />
      
      {/* 3. Featured case */}
      <FeaturedCase data={sections.find(s => s.id === 'featured-case')} />
      
      {/* 4. Filters & Case study card grid (with Empty state handled inside) */}
      <CaseStudyGrid 
        data={sections.find(s => s.id === 'filters')} 
        caseStudies={caseStudies} 
        emptyState={sections.find(s => s.id === 'empty-state')}
      />
      
      {/* 5. Closing CTA */}
      <ClosingCTA data={sections.find(s => s.id === 'closing-cta')} />
      
      {/* 6. FAQ */}
      <div className="bg-zinc-50 dark:bg-zinc-900 py-16 border-t border-zinc-200 dark:border-zinc-800">
        <FAQSection data={sections.find(s => s.id === 'faq')} />
      </div>
    </div>
  );
}
