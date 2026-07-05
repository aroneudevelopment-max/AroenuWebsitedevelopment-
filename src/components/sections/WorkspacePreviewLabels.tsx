import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function WorkspacePreviewLabels({ data }: { data?: SectionContent }) {
 if (!data) return null;
 const panelData = data as any;
 return (
 <section className="section-aroneu">
 <div className="container-aroneu max-w-5xl mx-auto">
 <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-200 surface-sand shadow-lg">
 {panelData.image ? (
 <img src={panelData.image} alt="Workspace Governance Overview"className="w-full h-auto object-cover max-h-[600px] md:max-h-[700px]"loading="lazy"/>
 ) : (
 <div className="w-full h-[500px] flex items-center justify-center opacity-60">Representative Workspace Overview</div>
 )}
 <div className="absolute bottom-3 right-3 /80 backdrop-blur-sm px-2 py-1 rounded text-[10px] opacity-70 tracking-wider">REPRESENTATIVE VISUAL</div>
 </div>
 {/* Mobile accessible summaries for labels */}
 {panelData.labels && (
 <div className="mt-8 flex flex-wrap justify-center gap-3">
 {panelData.labels.map((label: string, i: number) => (
 <span key={i} className="px-4 py-2 bg-zinc-100 rounded-full text-xs font-semibold opacity-80 border border-zinc-200">
 {label}
 </span>
 ))}
 </div>
 )}
 </div>
 </section>
 );
}
