import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function WorkspacePreviewLabels({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const panelData = data as any;
  return (
    <section className="section-aroneu py-16 bg-white dark:bg-black">
      <div className="container-aroneu max-w-5xl mx-auto">
        <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 shadow-lg">
          {panelData.image ? (
            <img src={panelData.image} alt="Workspace Governance Overview" className="w-full h-auto object-cover max-h-[600px] md:max-h-[700px]" loading="lazy" />
          ) : (
            <div className="w-full h-[500px] flex items-center justify-center text-zinc-400">Representative Workspace Overview</div>
          )}
          <div className="absolute bottom-3 right-3 bg-white/80 dark:bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-zinc-500 tracking-wider">REPRESENTATIVE VISUAL</div>
        </div>
        {/* Mobile accessible summaries for labels */}
        {panelData.labels && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {panelData.labels.map((label: string, i: number) => (
              <span key={i} className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900 rounded-full text-xs font-semibold text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800">
                {label}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
