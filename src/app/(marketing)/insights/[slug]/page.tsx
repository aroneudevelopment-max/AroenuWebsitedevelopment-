import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { insights, InsightArticle } from '@/lib/content/insights';
import { Hero } from '@/components/sections/Hero';
import { InsightAnswerBlock } from '@/components/sections/insights/InsightAnswerBlock';
import { ClosingCTA } from '@/components/sections/ClosingCTA';
import Link from 'next/link';

export function generateStaticParams() {
  // Only generate routes for published articles
  return insights.filter(article => article.isPublished).map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = insights.find(a => a.slug === params.slug && a.isPublished);
  
  if (!article) {
    return {
      title: "Insight | Aroneu",
      description: "Insight article is being prepared.",
    };
  }

  return {
    title: article.seo.metaTitle,
    description: article.seo.metaDescription,
    openGraph: {
      title: article.seo.ogTitle,
      description: article.seo.ogDescription,
    },
  };
}

export default function InsightArticlePage({ params }: { params: { slug: string } }) {
  const article = insights.find(a => a.slug === params.slug);

  if (!article || !article.isPublished) {
    // Return safe fallback as required by visual placement rules
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-24 px-6 text-center">
        <h1 className="text-h2 mb-4">This insight is being prepared.</h1>
        <p className="text-body text-zinc-600 max-w-md mb-8">
          The editorial team is preparing the detailed brief for this topic. 
        </p>
        <Link href="/insights" className="btn-primary">
          Return to insights
        </Link>
      </div>
    );
  }

  return (
    <div className="page-insight-article flex flex-col w-full">
      {/* 1. Hero */}
      <Hero data={article.hero} />
      
      {/* 2. Direct answer / The short answer */}
      <InsightAnswerBlock heading="The short answer" body={article.directAnswer} />
      
      <div className="py-16">
        <div className="container-aroneu max-w-3xl mx-auto">
          {/* Article reading measure 60-66ch enforced via Tailwind max-w-prose or max-w-2xl */}
          <div className="prose prose-zinc max-w-prose">
            
            {/* 3. Why this matters */}
            <h2 className="text-h3 mt-12 mb-6">Why this matters</h2>
            <p className="text-body leading-relaxed mb-10">{article.whyThisMatters}</p>
            
            {/* 4. The common mistake */}
            <h2 className="text-h3 mt-12 mb-6">The common mistake</h2>
            <p className="text-body leading-relaxed mb-10">{article.commonMistake}</p>
            
            {/* 5. The better operating model */}
            <h2 className="text-h3 mt-12 mb-6">The better operating model</h2>
            <p className="text-body leading-relaxed mb-10">{article.betterOperatingModel}</p>
            
            {/* 6. Practical checklist */}
            <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-200 my-12">
              <h2 className="text-h3 mt-0 mb-6">A practical checklist</h2>
              <ul className="space-y-4 m-0 p-0 list-none">
                {article.checklist.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center mr-4 mt-0.5 text-xs">✓</span>
                    <span className="text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 7. How Aroneu applies this */}
            <div className="border-t border-b border-zinc-200 py-10 my-12">
              <h2 className="text-h4 mb-4">How Aroneu applies this</h2>
              <p className="text-body leading-relaxed mb-0">{article.howAroneuAppliesThis}</p>
            </div>
            
            {/* 8. Related reading */}
            {article.relatedReading && article.relatedReading.length > 0 && (
              <div className="mt-16">
                <h2 className="text-h4 mb-6">Related reading</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {article.relatedReading.map((link, i) => (
                    <Link 
                      key={i} 
                      href={link.href}
                      className="group p-6 rounded-xl border border-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col no-underline"
                    >
                      <span className="text-xs font-mono uppercase text-zinc-500 mb-2">{link.type}</span>
                      <span className="font-medium text-black group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* 9. Closing CTA */}
      {/* Reusing standard CTA structure but with custom text if required */}
      <section className="py-24 bg-black text-white border-t border-zinc-800">
        <div className="container-aroneu flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-h2 mb-6 text-white">
            Apply this to your team model.
          </h2>
          <p className="text-body mb-10 text-zinc-300">
            Talk to us about the capability you need and the governance questions you are trying to answer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 rounded-full text-sm font-medium transition-colors bg-white text-black hover:bg-zinc-200 dark:hover:bg-zinc-800">
              Book a call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
