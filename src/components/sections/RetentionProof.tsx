import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function RetentionProof({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const items = data.items as any[] | undefined;
  return (
    <section className="section-aroneu py-24">
      <div className="container-aroneu max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 text-center md:text-left">
          {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
          {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
          {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400 mb-8">{data.body}</p>}
          {data.subcopy && <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{data.subcopy}</p>}
        </div>
        <div className="w-full md:w-auto shrink-0 flex items-center justify-center p-12 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-zinc-50 dark:bg-zinc-900 shadow-sm">
          {items && items.length > 0 && (
            <div className="flex flex-col items-center">
              <span className="text-6xl font-mono mb-3 text-black dark:text-white tracking-tight">{items[0].value}</span>
              <span className="text-sm font-medium uppercase tracking-widest text-zinc-500">{items[0].label}</span>
              <span className="text-xs text-zinc-400 mt-2 max-w-[200px] text-center">{items[0].description}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
