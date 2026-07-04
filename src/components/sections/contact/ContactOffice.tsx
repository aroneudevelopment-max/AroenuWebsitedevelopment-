import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function ContactOffice({ data }: { data?: SectionContent }) {
 if (!data) return null;
 return (
 <section className="section-aroneu">
 <div className="container-aroneu max-w-4xl mx-auto text-center">
 {data.heading && <h3 className="text-h3 mb-4">{data.heading}</h3>}
 {data.body && <p className="text-body text-zinc-600">{data.body as string}</p>}
 </div>
 </section>
 );
}
