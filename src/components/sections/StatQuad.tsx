import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function StatQuad({ data }: { data?: SectionContent }) {
 if (!data) return null;
 return (
 <section className="section-aroneu surface-sand border-y border-zinc-200">
 <div className="container-aroneu grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
 <div>
 {data.eyebrow && <span className="text-label opacity-70 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
 {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
 {data.body && <p className="text-body opacity-80 mb-8">{data.body}</p>}
 {data.ctas && data.ctas.length > 0 && (
 <a href={data.ctas[0].href} className="inline-block px-6 py-3 rounded-full text-sm font-medium border border-zinc-200">
 {data.ctas[0].label}
 </a>
 )}
 </div>
 <div className="space-y-8">
 {data.items?.map((item: any, i: number) => (
 <div key={i} className="pl-6 border-l-2 border-zinc-300">
 <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
 <p className="opacity-80">{item.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
