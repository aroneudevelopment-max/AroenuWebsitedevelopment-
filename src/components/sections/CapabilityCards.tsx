import React from "react";
import { SectionContent } from "@/lib/content/types";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Tilt3D } from "@/components/ui/Tilt3D";

/**
 * CapabilityCards
 * - Two-card "One model. Two connected capabilities." section.
 * - Cards use surface-paper on a surface-sand section, with explicit
 *   ink-coloured headings and zinc-700 body so contrast is high.
 */
export function CapabilityCards({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const items = (data.items as any[]) || [];

  return (
    <section className="section-aroneu surface-sand">
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

      <div className="container-aroneu grid grid-cols-1 lg:grid-cols-2 gap-8">
        {items.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <Tilt3D className="h-full">
              <div
                className="group flex flex-col h-full p-8 md:p-12 border border-zinc-200 rounded-3xl surface-paper transition-all hover:border-zinc-300 hover:shadow-soft"
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-ink">
                  {item.title}
                </h3>
                <p className="text-body opacity-80 mb-8 flex-grow">
                  {item.description}
                </p>
                {item.href && (
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 text-ink font-medium group-hover:opacity-80 transition-opacity"
                  >
                    {item.ctaLabel || "Learn more"} <span aria-hidden="true">&rarr;</span>
                  </a>
                )}
              </div>
            </Tilt3D>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
