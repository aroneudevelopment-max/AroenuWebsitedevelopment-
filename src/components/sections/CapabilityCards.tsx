import React from 'react';
import Image from 'next/image';
import { SectionContent } from '@/lib/content/types';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Tilt3D } from '@/components/ui/Tilt3D';

export function CapabilityCards({ data }: { data?: SectionContent }) {
 if (!data) return null;
 return (
 <section className="section-aroneu surface-sand">
 <ScrollReveal direction="up"className="container-aroneu max-w-3xl mx-auto text-center mb-16">
 {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
 {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
 {data.body && <p className="text-body text-zinc-600">{data.body}</p>}
 </ScrollReveal>
 <div className="container-aroneu grid grid-cols-1 md:grid-cols-2 gap-8">
 {data.items?.map((item: any, i: number) => (
 <ScrollReveal direction="up"delay={i * 0.15} key={i}>
 <Tilt3D className="h-full">
 <div className="flex flex-col p-8 border border-zinc-200 rounded-2xl h-full shadow-lg hover:shadow-2xl transition-shadow duration-300">
 <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
 <p className="text-zinc-600 mb-8 flex-grow">{item.description}</p>
 <a href={item.href} className="font-medium hover:underline inline-flex items-center">
 {item.ctaLabel} <span className="ml-2">→</span>
 </a>
 </div>
 </Tilt3D>
 </ScrollReveal>
 ))}
 </div>
 </section>
 );
}
