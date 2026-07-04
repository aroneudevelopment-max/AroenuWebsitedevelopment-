import React from 'react';
import Image from 'next/image';
import { SectionContent } from '@/lib/content/types';

export function LeadershipPreview({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24">
      <div className="container-aroneu grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <Image src="/images/aroneu/leadership-card-system.png" alt="Leadership accountability" width={500} height={400} className="w-full h-auto rounded-xl" />
        </div>
        <div className="order-1 md:order-2">
          {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
          {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
          {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400 mb-8">{data.body}</p>}
          
          <ul className="space-y-3 mb-8">
            {data.items?.map((item: any, i: number) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold">{item.title.charAt(0)}</div>
                <span className="font-medium">{item.title}</span>
              </li>
            ))}
          </ul>
          
          {data.ctas && data.ctas.length > 0 && (
            <a href={data.ctas[0].href} className="inline-block px-6 py-3 rounded-full text-sm font-medium border border-zinc-200 text-black dark:text-white dark:border-zinc-800">
              {data.ctas[0].label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
