import React from 'react';
import { SectionContent } from '@/lib/content/types';
import Image from 'next/image';

export function ContactWhatToInclude({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-16 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
      <div className="container-aroneu grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          {data.label && <span className="label-aroneu mb-4 text-primary-600 dark:text-primary-400 block">{data.label}</span>}
          {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
          {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg">{data.body as string}</p>}
          
          {data.items && data.items.length > 0 && (
            <ul className="space-y-4">
              {data.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-body text-zinc-700 dark:text-zinc-300">{item as string}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
          <Image 
            src="/images/Senior_Indian_professionals_in_w_202607030328 (1).jpeg" 
            alt="Senior professionals"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80 mix-blend-multiply dark:mix-blend-lighten"
          />
        </div>
      </div>
    </section>
  );
}
