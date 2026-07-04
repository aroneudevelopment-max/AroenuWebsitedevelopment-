import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function AboutSociety({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
      <div className="container-aroneu max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1">
          {data.label && <span className="label-aroneu mb-4 text-primary-600 dark:text-primary-400 block">{data.label}</span>}
          {data.heading && <h2 className="heading-aroneu mb-6">{data.heading}</h2>}
          {data.body && <p className="body-aroneu text-zinc-600 dark:text-zinc-400">{data.body}</p>}
        </div>
        
        <div className="flex-1 w-full space-y-4">
          {(data.features as { heading: string; body: string }[])?.map((feature, i) => (
            <div key={i} className="flex gap-4 p-6 bg-white dark:bg-black rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-transform hover:-translate-y-1 duration-300">
              <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                <span className="text-zinc-400 text-sm font-bold">{i + 1}</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{feature.heading}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{feature.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
