import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function BuildSetupCards({ data }: { data?: SectionContent }) {
 if (!data) return null;
 const typedData = data as any;

 return (
 <section className="section-aroneu border-b border-zinc-200">
 <div className="container-aroneu max-w-5xl mx-auto flex flex-col md:flex-row-reverse gap-12">
 <div className="flex-1">
 {typedData.label && (
 <span className="label-aroneu mb-4 text-primary-600 block">
 {typedData.label}
 </span>
 )}
 {typedData.heading && (
 <h2 className="heading-aroneu mb-6">{typedData.heading}</h2>
 )}
 {typedData.body && (
 <p className="body-aroneu mb-8 opacity-80">{typedData.body}</p>
 )}
 {typedData.outcome && (
 <div className="p-4 surface-sand rounded-lg border border-zinc-200">
 <span className="font-medium text-sm opacity-70 uppercase tracking-wider mb-2 block">Output</span>
 <p className="font-medium">{typedData.outcome}</p>
 </div>
 )}
 </div>
 
 <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
 {typedData.features && typedData.features.map((feature: any, idx: number) => (
 <div key={idx} className="p-6 surface-sand rounded-xl border border-zinc-200 shadow-sm transition-all hover:shadow-md">
 <h3 className="text-lg font-medium mb-2">{feature.heading}</h3>
 <p className="text-sm opacity-80 leading-relaxed">{feature.body}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
