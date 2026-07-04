import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function ContactScheduler({ data }: { data?: SectionContent }) {
 if (!data) return null;
 return (
 <section id="scheduler"className="section-aroneu surface-sand border-y border-zinc-200">
 <div className="container-aroneu max-w-4xl mx-auto text-center">
 {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
 {data.body && <p className="text-body text-zinc-600 mb-8 max-w-2xl mx-auto">{data.body as string}</p>}
 {data.primaryCTA && (
 <a href={data.primaryCTA.href} className="btn-primary-aroneu">
 {data.primaryCTA.label}
 </a>
 )}
 </div>
 </section>
 );
}
