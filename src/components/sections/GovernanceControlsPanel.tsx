import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function GovernanceControlsPanel({ data }: { data?: SectionContent }) {
 if (!data) return null;
 const panelData = data as any;
 return (
 <section className="section-aroneu surface-sand border-y border-zinc-200">
 <div className="container-aroneu flex flex-col lg:flex-row-reverse gap-16 items-center">
 <div className="flex-1">
 {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
 {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
 {data.body && <p className="text-body text-zinc-600 mb-10">{data.body}</p>}
 <div className="grid grid-cols-2 gap-4">
 {data.items?.map((item: any, i: number) => (
 <div key={i} className="p-4 border border-zinc-200 rounded-lg">
 <span className="text-sm font-semibold">{item.title}</span>
 </div>
 ))}
 </div>
 </div>
 <div className="flex-1 flex justify-center relative w-full rounded-2xl overflow-hidden border border-zinc-200 shadow-sm transition-opacity duration-500 group">
 {panelData.video ? (
 <video
 src={panelData.video}
 autoPlay
 loop
 muted
 playsInline
 className="w-full h-auto object-cover max-h-[500px]"
 />
 ) : panelData.image ? (
 <img src={panelData.image} alt="Governance Controls"className="w-full h-auto object-cover max-h-[500px]"loading="lazy"/>
 ) : (
 <div className="w-full h-[400px] flex items-center justify-center text-zinc-400">Representative Governance Panel</div>
 )}
 <div className="absolute inset-0 surface-ink/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"/>
 <div className="absolute bottom-3 right-3 /80 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-zinc-500 tracking-wider">REPRESENTATIVE VISUAL</div>
 </div>
 </div>
 </section>
 );
}
