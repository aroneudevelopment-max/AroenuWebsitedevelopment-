import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function AboutStory({ data }: { data?: SectionContent }) {
 if (!data) return null;
 return (
 <section className="section-aroneu">
 <div className="container-aroneu grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
 <div>
 {data.label && <span className="label-aroneu mb-4 text-primary-600 block">{data.label}</span>}
 {data.heading && <h2 className="heading-aroneu mb-6">{data.heading}</h2>}
 {data.body && (
 <div className="body-aroneu text-zinc-600 space-y-4 whitespace-pre-line">
 {data.body}
 </div>
 )}
 </div>
 
 {/* Governance Gap Visual */}
 <div className="flex flex-col gap-4 p-8 surface-sand rounded-2xl border border-zinc-200 relative">
 <div className="p-4 rounded-lg border border-zinc-200 text-center font-medium">
 European Need
 </div>
 <div className="h-8 flex justify-center items-center text-zinc-400">
 ↓
 </div>
 <div className="p-4 bg-primary-50 text-primary-700 rounded-lg border border-primary-200 text-center font-medium transition-opacity duration-500 ease-in-out opacity-100 motion-reduce:opacity-100">
 Governance Layer
 </div>
 <div className="h-8 flex justify-center items-center text-zinc-400">
 ↓
 </div>
 <div className="p-4 rounded-lg border border-zinc-200 text-center font-medium">
 India Capability
 </div>
 </div>
 </div>
 </section>
 );
}
