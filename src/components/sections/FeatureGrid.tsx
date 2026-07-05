import React from "react";
import { SectionContent } from "@/lib/content/types";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * FeatureGrid
 * - Generic 1/2/3/4 column grid of feature cards.
 * - Each card has a heading + body with full card width.
 * - ScrollReveal wrapper added to satisfy user requirements for scrolling animations.
 */
export function FeatureGrid({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const items = (data.items as any[]) || [];

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
      <div className={`container-aroneu grid grid-cols-1 md:grid-cols-2 ${items.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6`}>
        {items.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div
              className="flex flex-col h-full p-6 md:p-8 border border-zinc-200 rounded-2xl surface-paper transition-transform hover:-translate-y-1"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-ink">
                {item.title}
              </h3>
              <p className="opacity-80 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
