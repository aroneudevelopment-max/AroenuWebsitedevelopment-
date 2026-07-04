import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function ComparisonTable({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="container-aroneu max-w-5xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
          {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
          {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400">{data.body}</p>}
        </div>
        <div className="w-full overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black shadow-sm">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <th className="p-5 font-semibold text-sm">Model</th>
                <th className="p-5 font-semibold text-sm">Best for</th>
                <th className="p-5 font-semibold text-sm">Governance level</th>
                <th className="p-5 font-semibold text-sm">Aroneu view</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {data.items?.map((item: any, i: number) => (
                <tr key={i} className={`hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors ${item.model.includes('Aroneu') ? 'bg-black/5 dark:bg-white/5 border-l-4 border-l-black dark:border-l-white' : ''}`}>
                  <td className="p-5 text-sm font-medium">{item.model}</td>
                  <td className="p-5 text-sm text-zinc-600 dark:text-zinc-400">{item.bestFor}</td>
                  <td className="p-5 text-sm text-zinc-600 dark:text-zinc-400">{item.governance}</td>
                  <td className="p-5 text-sm text-zinc-600 dark:text-zinc-400 italic">{item.aroneuView}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
