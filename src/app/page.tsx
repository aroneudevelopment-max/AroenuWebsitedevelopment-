import { Metadata } from 'next';
import { homePage } from '@/lib/content/pages/home';
import { Hero } from '@/components/sections/Hero';
import { ProofStrip } from '@/components/sections/ProofStrip';
import { ProblemList } from '@/components/sections/ProblemList';
import { CapabilityCards } from '@/components/sections/CapabilityCards';
import { StepRow } from '@/components/sections/StepRow';
import { StatQuad } from '@/components/sections/StatQuad';
import { LeadershipPreview } from '@/components/sections/LeadershipPreview';
import { ClosingCTA } from '@/components/sections/ClosingCTA';
import { FAQSection } from '@/components/sections/FAQSection';

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
      <Hero data={sections.find(s => s.id === 'hero')} />
      
      {/* 2. Proof strip */}
      <ProofStrip data={sections.find(s => s.id === 'proof-strip')} />
      
      {/* 3. Problem section */}
      <ProblemList data={sections.find(s => s.id === 'problem')} />
      
      {/* 4. Two capabilities */}
      <CapabilityCards data={sections.find(s => s.id === 'two-capabilities')} />
      
      {/* 5. How it works preview */}
      <StepRow data={sections.find(s => s.id === 'how-it-works-preview')} />
      
      {/* 6. Proof at scale */}
      <StatQuad data={sections.find(s => s.id === 'proof-at-scale')} />
      
      {/* 7. Leadership / named accountability */}
      <LeadershipPreview data={sections.find(s => s.id === 'leadership')} />
      
      {/* 8. Careers bridge */}
      <div className="bg-zinc-50 border-y py-16 dark:bg-zinc-900 dark:border-zinc-800">
         <ClosingCTA data={sections.find(s => s.id === 'careers-bridge')} />
      </div>
      
      {/* 9. Closing CTA */}
      <ClosingCTA data={sections.find(s => s.id === 'closing-cta')} />
      
      {/* 10. FAQ */}
      <div className="bg-white py-16 dark:bg-black">
        <FAQSection data={sections.find(s => s.id === 'homepage-faq')} />
      </div>
    </div>
  );
}
