import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function InternaliseTransferDiagram({ data }: { data?: SectionContent }) {
 if (!data) return null;
 return (
 <section className="section-aroneu surface-sand border-y border-zinc-200">
 <div className="container-aroneu max-w-4xl mx-auto text-center mb-16">
 {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
 {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
 {data.body && <p className="text-body text-zinc-600 mx-auto max-w-3xl">{data.body}</p>}
 </div>
 
 <div className="container-aroneu max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mb-16 relative">
 {/* Connection line */}
 <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-zinc-200 -translate-y-1/2 z-0"></div>
 
 <div className="z-10 flex flex-col items-center p-6 rounded-xl border border-zinc-200 shadow-sm w-full md:w-auto">
 <span className="w-8 h-8 rounded-full surface-ink text-white flex items-center justify-center font-bold mb-3">1</span>
 <span className="font-semibold">Governed team</span>
 </div>
 
 <div className="md:hidden w-0.5 h-8 bg-zinc-200"></div>
 
 <div className="z-10 flex flex-col items-center p-6 rounded-xl border border-zinc-200 shadow-sm w-full md:w-auto">
 <span className="w-8 h-8 rounded-full surface-ink text-white flex items-center justify-center font-bold mb-3">2</span>
 <span className="font-semibold text-center">Documented<br/>knowledge</span>
 </div>
 
 <div className="md:hidden w-0.5 h-8 bg-zinc-200"></div>

 <div className="z-10 flex flex-col items-center p-6 rounded-xl border border-zinc-200 shadow-sm w-full md:w-auto">
 <span className="w-8 h-8 rounded-full surface-ink text-white flex items-center justify-center font-bold mb-3">3</span>
 <span className="font-semibold text-center">Continuity /<br/>Optional transfer</span>
 </div>
 </div>
 
 {data.ctas && data.ctas.length > 0 && (
 <div className="flex justify-center">
 <a href={data.ctas[0].href} className="px-6 py-3 rounded-full text-sm font-medium border border-zinc-200 hover:surface-ink/5 :/5 transition-colors">
 {data.ctas[0].label}
 </a>
 </div>
 )}
 </section>
 );
}
