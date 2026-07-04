import React from 'react';
import Image from 'next/image';
import { SectionContent } from '@/lib/content/types';

export function ContactHero({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu pt-32 pb-16 relative overflow-hidden">
      <div className="container-aroneu grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="z-10 pt-4">
          {data.eyebrow && <span className="label-aroneu mb-4 text-primary-600 dark:text-primary-400 block">{data.eyebrow}</span>}
          {data.heading && <h1 className="text-h1 mb-6 text-black dark:text-white leading-tight">{data.heading}</h1>}
          {data.subcopy && <p className="text-body text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl">{data.subcopy}</p>}
          
          <div className="flex flex-wrap gap-4">
            {data.ctas?.map((cta, index) => (
              <a 
                key={index} 
                href={cta.href} 
                className={cta.variant === 'secondary' ? 'btn-secondary-aroneu' : 'btn-primary-aroneu'}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>
        
        {/* Support Visual */}
        <div className="relative z-10 w-full aspect-[4/3] bg-zinc-50 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 lg:mt-0 mt-8">
          <Image 
            src="/images/Abstract_visual_for_Aroneu_202607030333 (1).jpeg" 
            alt="Abstract Europe–India bridge"
            fill
            className="object-cover mix-blend-multiply dark:mix-blend-lighten opacity-80"
            priority
          />
        </div>
      </div>
    </section>
  );
}
