import React from 'react';
import Image from 'next/image';
import { SectionContent } from '@/lib/content/types';

export function AboutHero({ data }: { data?: SectionContent }) {
 if (!data) return null;
 return (
 <section className="section-aroneu relative overflow-hidden">
 <div className="container-aroneu grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <div className="z-10">
 {data.eyebrow && <span className="label-aroneu mb-4 text-primary-600 block">{data.eyebrow}</span>}
 {data.heading && <h1 className="text-h1 mb-6 leading-tight">{data.heading}</h1>}
 {data.subcopy && <p className="text-body text-zinc-600 mb-8 max-w-xl">{data.subcopy}</p>}
 
 <div className="flex flex-wrap gap-4">
 {data.primaryCTA && (
 <a href={data.primaryCTA.href} className="btn-primary-aroneu">
 {data.primaryCTA.label}
 </a>
 )}
 {data.secondaryCTA && (
 <a href={data.secondaryCTA.href} className="btn-secondary-aroneu">
 {data.secondaryCTA.label}
 </a>
 )}
 </div>
 </div>
 
 {/* Europe-India Bridge Visual */}
 <div className="relative z-10 w-full aspect-[4/3] surface-sand rounded-3xl overflow-hidden border border-zinc-200">
 {data.image && (
 <Image 
 src={data.image} 
 alt="Abstract Europe–India bridge showing one standard of governed work."
 fill
 className="object-cover mix-blend-multiply opacity-80"
 priority
 />
 )}
 
 {/* Bridge overlay effect */}
 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
 <div className="w-3/4 h-px bg-primary-500/50 shadow-[0_0_15px_rgba(var(--primary-500),0.5)]"></div>
 <div className="absolute w-4 h-4 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(var(--primary-500),0.8)]"></div>
 </div>
 </div>
 </div>
 </section>
 );
}
