import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function FAQSection({ data }: { data?: SectionContent }) {
  if (!data || !data.faqs || data.faqs.length === 0) return null;
  return (
    <section className="section-aroneu surface-paper">
      <div className="container-aroneu">
        <div className="text-center mb-16">
          <h2 className="text-h2">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-6">
          {data.faqs.map((faq, i) => (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] gap-5 lg:gap-16 border-b border-zinc-200 pb-6"
            >
              <h3 className="text-xl font-semibold min-w-0">{faq.question}</h3>
              <p className="opacity-80 min-w-0 max-w-3xl">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
