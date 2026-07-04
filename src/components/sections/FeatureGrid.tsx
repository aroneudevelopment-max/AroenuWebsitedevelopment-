import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function FeatureGrid({ data }: { data?: SectionContent }) {
 if (!data) return null;
 return (
 <section className="section-aroneu surface-sand border-y border-zinc-200">
 <div className="container-aroneu max-w-3xl mx-auto text-center mb-16">
 {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
 {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
 {data.body && <p className="text-body text-zinc-600">{data.body}</p>}
 </div>
 <div className="container-aroneu grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {data.items?.map((item: any, i: number) => (
 <div key={i} className="flex flex-col p-8 border border-zinc-200 rounded-2xl transition-transform hover:-translate-y-1">
 <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
 <p className="text-zinc-600 text-sm leading-relaxed">{item.description}</p>
 </div>
 ))}
 </div>
 </section>
 );
}
