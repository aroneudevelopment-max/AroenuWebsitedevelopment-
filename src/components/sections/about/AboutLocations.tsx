import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function AboutLocations({ data }: { data?: SectionContent }) {
 if (!data) return null;
 return (
 <section className="section-aroneu surface-sand border-t border-zinc-200 relative overflow-hidden">
 <div className="container-aroneu text-center relative z-10">
 {data.label && <span className="label-aroneu mb-4 text-primary-600 block">{data.label}</span>}
 {data.heading && <h2 className="heading-aroneu mb-6 max-w-2xl mx-auto">{data.heading}</h2>}
 {data.body && <p className="body-aroneu opacity-80 max-w-3xl mx-auto mb-16">{data.body}</p>}
 
 <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-0 relative max-w-4xl mx-auto">
 {/* Bridge Line Background */}
 <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-zinc-300 -translate-y-1/2 z-0"></div>
 
 {(data.features as { heading: string; body: string }[])?.map((feature, i) => (
 <React.Fragment key={i}>
 <div className="flex-1 p-8 border border-zinc-200 rounded-3xl relative z-10 shadow-sm transition-transform hover:-translate-y-1 duration-300 surface-paper">
 <h3 className="text-2xl font-semibold mb-4 text-primary-900">{feature.heading}</h3>
 <p className="opacity-80 leading-relaxed">{feature.body}</p>
 </div>
 
 {i === 0 && (
 <div className="hidden md:flex w-24 items-center justify-center relative z-10">
 <div className="px-3 py-1 bg-zinc-100 rounded-full border border-zinc-200 text-xs font-semibold opacity-70 uppercase tracking-widest whitespace-nowrap shadow-sm">
 One Standard
 </div>
 </div>
 )}
 </React.Fragment>
 ))}
 </div>
 </div>
 </section>
 );
}
