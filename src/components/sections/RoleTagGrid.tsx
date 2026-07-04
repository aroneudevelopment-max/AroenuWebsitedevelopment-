import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function RoleTagGrid({ data }: { data?: SectionContent }) {
 if (!data) return null;
 return (
 <section className="section-aroneu">
 <div className="container-aroneu max-w-3xl mx-auto text-center mb-12">
 {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
 {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
 {data.body && <p className="text-body text-zinc-600">{data.body}</p>}
 </div>
 <div className="container-aroneu max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
 {data.items?.map((item: any, i: number) => (
 <span key={i} className="px-5 py-2 border border-zinc-200 rounded-full text-sm font-medium surface-sand text-zinc-800">
 {item.title}
 </span>
 ))}
 </div>
 </section>
 );
}
