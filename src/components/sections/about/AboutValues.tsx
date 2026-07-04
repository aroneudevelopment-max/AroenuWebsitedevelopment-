import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function AboutValues({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24">
      <div className="container-aroneu">
        <div className="max-w-3xl mx-auto text-center mb-16">
          {data.label && <span className="label-aroneu mb-4 text-primary-600 dark:text-primary-400 block">{data.label}</span>}
          {data.heading && <h2 className="heading-aroneu mb-6">{data.heading}</h2>}
          {data.body && <p className="body-aroneu text-zinc-600 dark:text-zinc-400">{data.body}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(data.features as { heading: string; body: string }[])?.map((feature, i) => (
            <div key={i} className="p-8 bg-white dark:bg-black rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-3">{feature.heading}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
