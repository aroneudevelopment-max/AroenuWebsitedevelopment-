import React from 'react';
import Image from 'next/image';
import { SectionContent } from '@/lib/content/types';

export function Hero({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu flex flex-col md:flex-row items-center justify-between gap-8 pt-24 pb-16">
      <div className="container-aroneu max-w-xl">
        {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
        {data.heading && <h1 className="text-h1 mb-6 text-black dark:text-white">{data.heading}</h1>}
        {data.subcopy && <p className="text-body mb-8 text-zinc-600 dark:text-zinc-400">{data.subcopy}</p>}
        {data.ctas && data.ctas.length > 0 && (
          <div className="flex gap-4">
            {data.ctas.map((cta, i) => (
              <a key={i} href={cta.href} className={`px-6 py-3 rounded-full text-sm font-medium ${cta.variant === 'primary' ? 'bg-black text-white dark:bg-white dark:text-black' : 'border border-zinc-200 text-black dark:text-white dark:border-zinc-800'}`}>
                {cta.label}
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
        {data.video ? (
          <video
            src={data.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover rounded-xl"
          />
        ) : (
          <Image src={data.image || "/images/aroneu/ai-workspace-governance-overview.png"} alt={data.heading || "AI Workspace overview"} width={600} height={400} className="w-full h-auto object-cover rounded-xl" priority />
        )}
        {data.visualSlot?.placementNote && (
          <p className="sr-only">Representative visual, not live product screenshot</p>
        )}
      </div>
    </section>
  );
}
