import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function AboutNameMeaning({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
      <div className="container-aroneu max-w-4xl mx-auto text-center">
        {data.label && <span className="label-aroneu mb-4 text-primary-600 dark:text-primary-400 block">{data.label}</span>}
        {data.heading && <h2 className="heading-aroneu mb-8">{data.heading}</h2>}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {(data.features as { heading: string; body: string }[])?.map((feature, i) => (
            <div key={i} className="p-8 bg-white dark:bg-black rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden group">
              <h3 className="text-2xl font-semibold mb-4 text-primary-900 dark:text-primary-100 relative z-10">{feature.heading}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed relative z-10">{feature.body}</p>
            </div>
          ))}
        </div>
        
        {data.body && (
          <p className="text-lg font-medium text-black dark:text-white max-w-2xl mx-auto whitespace-pre-line">
            {data.body}
          </p>
        )}
      </div>
    </section>
  );
}
