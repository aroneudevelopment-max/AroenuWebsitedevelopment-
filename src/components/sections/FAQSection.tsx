import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function FAQSection({ data }: { data?: SectionContent }) {
 if (!data || !data.faqs || data.faqs.length === 0) return null;
 return (
 <section className="section-aroneu surface-ink">
 <div className="container-aroneu max-w-4xl mx-auto">
 <div className="text-center mb-16">
 <h2 className="text-h2 text-paper">Frequently Asked Questions</h2>
 </div>
 <div className="space-y-6">
 {data.faqs.map((faq, i) => (
 <div key={i} className="border-b border-zinc-200 pb-6">
 <h3 className="text-xl font-semibold mb-3 text-paper">{faq.question}</h3>
 <p className="opacity-80 text-paper">{faq.answer}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
