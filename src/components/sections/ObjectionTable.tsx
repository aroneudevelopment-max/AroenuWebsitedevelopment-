import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function ObjectionTable({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24">
      <div className="container-aroneu max-w-4xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/3">
          {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
          {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
        </div>
        <div className="w-full lg:w-2/3">
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
            {data.items?.map((item: any, i: number) => (
              <div key={i} className="py-6 flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="sm:w-1/3 font-semibold text-black dark:text-white flex gap-3">
                  <span className="text-zinc-400 shrink-0">?</span>
                  <span>{item.question}</span>
                </div>
                <div className="sm:w-2/3 text-zinc-600 dark:text-zinc-400 flex gap-3">
                  <span className="text-zinc-400 shrink-0">→</span>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
