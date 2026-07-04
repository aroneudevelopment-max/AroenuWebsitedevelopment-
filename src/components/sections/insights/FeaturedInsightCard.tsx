import React from 'react';
import Link from 'next/link';

export function FeaturedInsightCard({ data }: { data: any }) {
  if (!data) return null;

  // The CTA should safely link to contact if the article isn't published.
  const href = data.isPublished ? data.href : "/contact";
  
  return (
    <section className="py-24 bg-white dark:bg-black border-y border-zinc-200 dark:border-zinc-800">
      <div className="container-aroneu">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
          <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
            <span className="text-sm font-medium tracking-wide uppercase text-zinc-500 dark:text-zinc-400">
              {data.label}
            </span>
            <h2 className="text-h2">
              {data.heading}
            </h2>
            <p className="text-body text-zinc-600 dark:text-zinc-300">
              {data.body}
            </p>
          </div>
          
          <div className="w-full md:w-1/2">
            <Link href={href} className="group block rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg">
              <div className="relative w-full aspect-video bg-zinc-100 dark:bg-zinc-800 overflow-hidden flex flex-col justify-end p-8">
                 {/* No abstract photo for Featured Insight card per rules unless specifically needed, using editorial typography card */}
                 <div className="mt-auto">
                    <h3 className="text-h4 group-hover:text-black dark:group-hover:text-white transition-colors">{data.heading}</h3>
                 </div>
                 {/* Accent line */}
                 <div className="w-12 h-1 bg-black dark:bg-white mt-6 mb-2"></div>
              </div>
              <div className="p-8 flex flex-col space-y-4">
                <div className="flex flex-wrap gap-2">
                  {data.metadata?.map((tag: string, i: number) => (
                    <span key={i} className="text-xs font-mono px-2 py-1 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-4 flex items-center text-sm font-medium text-black dark:text-white">
                  {data.cta} <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
