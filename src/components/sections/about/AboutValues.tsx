import React from "react";
import { SectionContent } from "@/lib/content/types";

/**
 * AboutValues
 * - "The standards behind the model" 4-card values section.
 * - Each card has a heading + body with full card width.
 * - No ScrollReveal wrapper so cards are always visible.
 */
export function AboutValues({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const items = (data.features as { heading: string; body: string }[]) || [];

  return (
    <section className="section-aroneu">
      <div className="container-aroneu">
        <div className="max-w-3xl mx-auto text-center mb-16">
          {data.label && (
            <span className="text-label uppercase tracking-widest block mb-4 text-primary-600">
              {data.label}
            </span>
          )}
          {data.heading && <h2 className="text-h2 mb-6 text-ink">{data.heading}</h2>}
          {data.body && (
            <p className="text-body opacity-80">{data.body}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-6 md:p-8 border border-zinc-200 rounded-2xl surface-paper transition-transform hover:-translate-y-1"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-ink">
                {item.heading}
              </h3>
              <p className="opacity-80 text-sm leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
