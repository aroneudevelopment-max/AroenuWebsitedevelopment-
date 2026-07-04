import React from 'react';
import Image from 'next/image';
import { SectionContent } from '@/lib/content/types';

export function CapabilityCards({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="container-aroneu max-w-3xl mx-auto text-center mb-16">
        {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
        {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
        {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400">{data.body}</p>}
      </div>
      <div className="container-aroneu grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.items?.map((item: any, i: number) => (
          <div key={i} className="flex flex-col p-8 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-black">
            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 flex-grow">{item.description}</p>
            <a href={item.href} className="text-black dark:text-white font-medium hover:underline inline-flex items-center">
              {item.ctaLabel} <span className="ml-2">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
