import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function ContactScheduler({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section id="scheduler" className="section-aroneu py-24 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
      <div className="container-aroneu max-w-4xl mx-auto text-center">
        {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
        {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">{data.body as string}</p>}
        {data.primaryCTA && (
          <a href={data.primaryCTA.href} className="btn-primary-aroneu">
            {data.primaryCTA.label}
          </a>
        )}
      </div>
    </section>
  );
}
