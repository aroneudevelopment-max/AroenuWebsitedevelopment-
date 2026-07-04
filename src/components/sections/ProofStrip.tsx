import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function ProofStrip({ data }: { data?: SectionContent }) {
 if (!data) return null;
 return (
 <section className="section-aroneu border-y border-zinc-200 surface-sand">
 <div className="container-aroneu grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
 {data.items?.map((item: any, i: number) => (
 <div key={i} className="flex flex-col items-center">
 <span className="text-4xl font-mono mb-2">{item.value}</span>
 <span className="text-sm font-medium text-zinc-500 uppercase tracking-widest">{item.label}</span>
 </div>
 ))}
 </div>
 </section>
 );
}
