import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function RunGovernanceRhythm({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const typedData = data as any;

  return (
    <section className="section-aroneu py-24 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="container-aroneu max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          {typedData.label && (
            <span className="label-aroneu mb-4 text-primary-600 dark:text-primary-400 block">
              {typedData.label}
            </span>
          )}
          {typedData.heading && (
            <h2 className="heading-aroneu mb-6">{typedData.heading}</h2>
          )}
          {typedData.body && (
            <p className="body-aroneu mb-8 text-zinc-600 dark:text-zinc-400">{typedData.body}</p>
          )}
          {typedData.outcome && (
            <div className="p-4 bg-white dark:bg-black rounded-lg border border-zinc-200 dark:border-zinc-800">
              <span className="font-medium text-sm text-zinc-500 uppercase tracking-wider mb-2 block">Output</span>
              <p className="font-medium">{typedData.outcome}</p>
            </div>
          )}
        </div>
        
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {typedData.features && typedData.features.map((feature: any, idx: number) => (
            <div key={idx} className="p-6 bg-white dark:bg-black rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">
              <h3 className="text-lg font-medium mb-2">{feature.heading}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
