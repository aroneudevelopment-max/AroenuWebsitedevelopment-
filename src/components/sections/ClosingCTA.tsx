import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function ClosingCTA({ data }: { data?: SectionContent }) {
 if (!data) return null;
 return (
 <section className="section-aroneu text-center">
 <div className="container-aroneu max-w-3xl mx-auto">
 {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
 {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
 {data.body && <p className="text-body text-zinc-600 mb-10">{data.body}</p>}
 
 <div className="flex flex-col sm:flex-row justify-center gap-4">
 {data.ctas?.map((cta, i) => (
 <a key={i} href={cta.href} className={`px-8 py-4 rounded-full text-base font-medium ${cta.variant === 'primary' ? 'surface-ink text-white ' : 'border border-zinc-200 '}`}>
 {cta.label}
 </a>
 ))}
 </div>
 </div>
 </section>
 );
}
