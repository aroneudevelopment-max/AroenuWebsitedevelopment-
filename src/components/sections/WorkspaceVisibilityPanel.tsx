import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function WorkspaceVisibilityPanel({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const panelData = data as any;
  return (
    <section className="section-aroneu py-24 bg-white dark:bg-black">
      <div className="container-aroneu grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
          {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
          {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400 mb-10">{data.body}</p>}
          <div className="space-y-4">
            {data.items?.map((item: any, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white flex-shrink-0" />
                <span className="text-sm font-medium">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center relative w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 shadow-sm transition-opacity duration-500">
          {panelData.image ? (
            <img src={panelData.image} alt="Workspace Visibility Panel" className="w-full h-auto object-cover max-h-[500px]" loading="lazy" />
          ) : (
            <div className="w-full h-[400px] flex items-center justify-center text-zinc-400">Representative Visual Panel</div>
          )}
          <div className="absolute bottom-3 right-3 bg-white/80 dark:bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-zinc-500 tracking-wider">REPRESENTATIVE VISUAL</div>
        </div>
      </div>
    </section>
  );
}
