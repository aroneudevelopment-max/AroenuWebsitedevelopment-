import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function StatQuad({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
      <div className="container-aroneu grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
          {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
          {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400 mb-8">{data.body}</p>}
          {data.ctas && data.ctas.length > 0 && (
            <a href={data.ctas[0].href} className="inline-block px-6 py-3 rounded-full text-sm font-medium border border-zinc-200 text-black dark:text-white dark:border-zinc-800">
              {data.ctas[0].label}
            </a>
          )}
        </div>
        <div className="space-y-8">
          {data.items?.map((item: any, i: number) => (
            <div key={i} className="pl-6 border-l-2 border-zinc-300 dark:border-zinc-700">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
