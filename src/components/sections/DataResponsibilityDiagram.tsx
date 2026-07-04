import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function DataResponsibilityDiagram({ data }: { data?: SectionContent }) {
 if (!data) return null;
 const diagramSteps = [
 { label:"Source material", id:"source"},
 { label:"Access boundary", id:"access"},
 { label:"Approval/review", id:"review"},
 { label:"Accountable owner", id:"owner"},
 { label:"Governed output", id:"output"}
 ];

 return (
 <section className="section-aroneu surface-sand border-y border-zinc-200 overflow-hidden">
 <div className="container-aroneu max-w-4xl mx-auto text-center mb-16">
 {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
 {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
 {data.body && <p className="text-body text-zinc-600 mx-auto max-w-3xl">{data.body}</p>}
 </div>
 
 <div className="container-aroneu max-w-5xl mx-auto relative px-4">
 {/* Connection line (Desktop) */}
 <div className="hidden md:block absolute top-1/2 left-8 right-8 h-[1px] bg-zinc-300 -translate-y-1/2 z-0"/>
 
 {/* Connection line (Mobile) */}
 <div className="md:hidden absolute left-1/2 top-4 bottom-4 w-[1px] bg-zinc-300 -translate-x-1/2 z-0"/>
 
 <div className="z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2 relative">
 {diagramSteps.map((step, i) => (
 <div key={i} className="flex flex-col items-center p-4 rounded-xl border border-zinc-200 shadow-sm w-full md:w-36 transition-transform hover:-translate-y-1 duration-300">
 <span className="font-semibold text-sm text-center">{step.label}</span>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
