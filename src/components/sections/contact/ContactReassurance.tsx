import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function ContactReassurance({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-12">
      <div className="container-aroneu max-w-4xl mx-auto text-center">
        {data.label && <span className="label-aroneu mb-4 text-primary-600 dark:text-primary-400 block">{data.label}</span>}
        {data.heading && <h3 className="text-h3 mb-4 text-black dark:text-white">{data.heading}</h3>}
        {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400">{data.body as string}</p>}
      </div>
    </section>
  );
}
