import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function ProblemList({ data }: { data?: SectionContent }) {
 if (!data) return null;
 return (
 <section className="section-aroneu">
 <div className="container-aroneu max-w-3xl mx-auto text-center mb-16">
 {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
 {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
 {data.body && <p className="text-body text-zinc-600">{data.body}</p>}
 </div>
 <div className="container-aroneu max-w-4xl mx-auto">
 <div className="space-y-6">
 {data.items?.map((item: any, i: number) => (
 <div key={i} className="p-6 border border-zinc-200 rounded-xl">
 <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
 <p className="text-zinc-600">{item.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
