import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function GovernanceControlsPanel({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const panelData = data as any;
  return (
    <section className="section-aroneu py-24 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
      <div className="container-aroneu flex flex-col lg:flex-row-reverse gap-16 items-center">
        <div className="flex-1">
          {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
          {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
          {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400 mb-10">{data.body}</p>}
          <div className="grid grid-cols-2 gap-4">
            {data.items?.map((item: any, i: number) => (
              <div key={i} className="p-4 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-black rounded-lg">
                <span className="text-sm font-semibold">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-center relative w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black shadow-sm transition-opacity duration-500 group">
          {panelData.image ? (
            <img src={panelData.image} alt="Governance Controls" className="w-full h-auto object-cover max-h-[500px]" loading="lazy" />
          ) : (
            <div className="w-full h-[400px] flex items-center justify-center text-zinc-400">Representative Governance Panel</div>
          )}
          <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <div className="absolute bottom-3 right-3 bg-white/80 dark:bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-zinc-500 tracking-wider">REPRESENTATIVE VISUAL</div>
        </div>
      </div>
    </section>
  );
}
