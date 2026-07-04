import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function ProblemList({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24">
      <div className="container-aroneu max-w-3xl mx-auto text-center mb-16">
        {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
        {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
        {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400">{data.body}</p>}
      </div>
      <div className="container-aroneu max-w-4xl mx-auto">
        <div className="space-y-6">
          {data.items?.map((item: any, i: number) => (
            <div key={i} className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-black">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
