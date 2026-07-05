import React from 'react';
import { SectionContent } from '@/lib/content/types';
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function StatQuad({ data }: { data?: SectionContent }) {
 if (!data) return null;
 return (
 <section className="section-aroneu surface-sand border-y border-zinc-200">
      <ScrollReveal>
        <div className="container-aroneu max-w-3xl mx-auto text-center mb-16">
          {data.eyebrow && (
            <span className="text-label uppercase tracking-widest block mb-4 text-primary-600">
              {data.eyebrow}
            </span>
          )}
          {data.heading && <h2 className="text-h2 mb-6 text-ink">{data.heading}</h2>}
          {data.body && (
            <p className="text-body opacity-80">{data.body}</p>
          )}
        </div>
      </ScrollReveal>
      <div className="container-aroneu">
        <div className={`grid grid-cols-1 md:grid-cols-2 ${data.items?.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"} gap-6 mb-12`}>
          {data.items?.map((item: any, i: number) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex flex-col h-full border-t-2 border-zinc-200 pt-6">
                <h3 className="text-lg font-semibold mb-3 text-ink">
                  {item.title}
                </h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
 </section>
 );
}
