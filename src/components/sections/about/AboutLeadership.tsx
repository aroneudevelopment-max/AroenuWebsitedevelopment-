import React from 'react';
import Image from 'next/image';
import { SectionContent } from '@/lib/content/types';

export function AboutLeadership({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24 bg-white dark:bg-black">
      <div className="container-aroneu grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          {data.label && <span className="label-aroneu mb-4 text-primary-600 dark:text-primary-400 block">{data.label}</span>}
          {data.heading && <h2 className="heading-aroneu mb-6">{data.heading}</h2>}
          {data.body && <p className="body-aroneu text-zinc-600 dark:text-zinc-400 mb-8 whitespace-pre-line">{data.body}</p>}
          
          <div className="space-y-4 mb-8">
            {(data.features as { heading: string; body?: string }[])?.map((feature, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-sm font-bold shrink-0">
                  {feature.heading.charAt(0)}
                </div>
                <div className="font-medium text-lg">{feature.heading}</div>
              </div>
            ))}
          </div>
          
          {data.primaryCTA && (
            <a href={data.primaryCTA.href} className="btn-secondary-aroneu">
              {data.primaryCTA.label}
            </a>
          )}
        </div>
        
        <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 transition-transform duration-300 hover:-translate-y-px">
          {data.image && (
            <Image 
              src={data.image} 
              alt="Placeholder leadership cards" 
              width={600} 
              height={500} 
              className="w-full h-auto"
            />
          )}
        </div>
      </div>
    </section>
  );
}
