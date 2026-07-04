import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function AIInsightPanel({ data }: { data?: SectionContent }) {
 if (!data) return null;
 const panelData = data as any;
 return (
 <section className="section-aroneu">
 <div className="container-aroneu max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
 <div className="flex-1 w-full relative rounded-2xl overflow-hidden border border-zinc-200 shadow-sm surface-sand group">
 {panelData.image ? (
 <img src={panelData.image} alt="AI Insight Panel"className="w-full h-auto object-cover max-h-[500px]"loading="lazy"/>
 ) : (
 <div className="w-full h-[400px] flex items-center justify-center text-zinc-400">Representative AI Insight</div>
 )}
 {/* Spark Signal Simulation */}
 <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-orange-400 animate-[pulse_2s_ease-in-out_infinite]"/>
 <div className="absolute bottom-3 right-3 /80 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-zinc-500 tracking-wider">REPRESENTATIVE VISUAL</div>
 </div>
 <div className="flex-1">
 {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
 {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
 {data.body && <p className="text-body text-zinc-600 mb-8">{data.body}</p>}
 <div className="flex flex-wrap gap-2">
 {data.items?.map((item: any, i: number) => (
 <span key={i} className="font-mono text-xs px-3 py-1.5 bg-zinc-100 text-zinc-600 rounded border border-zinc-200">
 {item.title}
 </span>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}
