import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function StepRow({ data }: { data?: SectionContent }) {
 if (!data) return null;
 return (
 <section className="section-aroneu">
 <div className="container-aroneu max-w-3xl mx-auto text-center mb-16">
 {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
 {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
 {data.body && <p className="text-body text-zinc-600">{data.body}</p>}
 </div>
 <div className="container-aroneu grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
 {data.items?.map((item: any, i: number) => (
 <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
 <div className="w-12 h-12 rounded-full surface-ink text-white flex items-center justify-center font-bold text-lg mb-6">{i + 1}</div>
 <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
 <p className="text-zinc-600">{item.description}</p>
 </div>
 ))}
 </div>
 {data.ctas && data.ctas.length > 0 && (
 <div className="flex justify-center">
 <a href={data.ctas[0].href} className="px-6 py-3 rounded-full text-sm font-medium border border-zinc-200">
 {data.ctas[0].label}
 </a>
 </div>
 )}
 </section>
 );
}
