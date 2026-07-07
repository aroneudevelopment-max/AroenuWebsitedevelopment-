import React from 'react';
import { SectionContent } from '@/lib/content/types';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

type ProblemListItem = {
 title?: string;
 description?: string;
};

export function ProblemList({ data }: { data?: SectionContent }) {
 if (!data) return null;
 const items = (data.items as ProblemListItem[] | undefined) || [];
 return (
 <section className="section-aroneu surface-sand">
 <ScrollReveal>
 <div className="container-aroneu max-w-3xl mx-auto text-center mb-16">
 {data.eyebrow && <span className="text-label opacity-70 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
 {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
 {data.body && <p className="text-body opacity-80 mx-auto">{data.body}</p>}
 </div>
 </ScrollReveal>
 <div className="container-aroneu max-w-4xl mx-auto">
 <div className="space-y-6">
 {items.map((item, i) => (
 <ScrollReveal key={i} delay={i * 0.1}>
 <div className="p-6 border border-zinc-200 rounded-xl surface-paper transition-transform hover:-translate-y-1 shadow-sm">
 <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
 <p className="opacity-80">{item.description}</p>
 </div>
 </ScrollReveal>
 ))}
 </div>
 </div>
 </section>
 );
}
