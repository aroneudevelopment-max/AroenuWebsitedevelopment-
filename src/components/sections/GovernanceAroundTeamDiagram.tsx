import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function GovernanceAroundTeamDiagram({ data }: { data?: SectionContent }) {
 if (!data) return null;
 return (
 <section className="section-aroneu surface-sand border-y border-zinc-200">
 <div className="container-aroneu grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <div>
 {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
 {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
 {data.body && <p className="text-body text-zinc-600 mb-10">{data.body}</p>}
 <div className="space-y-6">
 {data.items?.map((item: any, i: number) => (
 <div key={i} className="pl-5 border-l-2 border-zinc-300">
 <h3 className="text-base font-semibold mb-2">{item.title}</h3>
 <p className="text-sm text-zinc-600">{item.description}</p>
 </div>
 ))}
 </div>
 </div>
 <div className="flex justify-center relative min-h-[400px]">
 {/* CSS/SVG Governance Diagram - 4 layers revealing slowly */}
 <div className="absolute inset-0 flex items-center justify-center">
 <div className="w-80 h-80 rounded-full border border-zinc-200 shadow-sm flex items-center justify-center animate-[pulse_4s_ease-in-out_infinite] opacity-80"/>
 <div className="absolute w-64 h-64 rounded-full border border-zinc-300 flex items-center justify-center surface-sand"/>
 <div className="absolute w-48 h-48 rounded-full border border-zinc-400 flex items-center justify-center"/>
 <div className="absolute w-32 h-32 rounded-full border-2 border-black surface-ink text-white flex flex-col items-center justify-center font-semibold text-center leading-tight shadow-md">
 <span className="text-xs uppercase tracking-widest opacity-80">Aroneu</span>
 <span>Capability<br/>Team</span>
 </div>
 
 {/* Labels mapped to layers */}
 <div className="absolute top-8 text-xs font-medium text-zinc-500 px-2 py-1 rounded-md border border-zinc-200">Workspace visibility</div>
 <div className="absolute left-4 text-xs font-medium text-zinc-500 px-2 py-1 rounded-md border border-zinc-200">Operating rhythm</div>
 <div className="absolute right-4 text-xs font-medium text-zinc-500 px-2 py-1 rounded-md border border-zinc-200">Visible accountability</div>
 <div className="absolute bottom-16 text-xs font-medium text-zinc-500 px-2 py-1 rounded-md border border-zinc-200">Documented context</div>
 </div>
 </div>
 </div>
 </section>
 );
}
