import React from "react";
import { SectionContent } from "@/lib/content/types";
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
      <div className="container-aroneu max-w-3xl mx-auto text-center mb-16">
        {data.eyebrow && (
          <span className="text-label uppercase tracking-widest block mb-4 text-primary-600">
            {data.eyebrow}
          </span>
        )}
        {data.heading && (
          <h2 className="text-h2 mb-6 text-ink">{data.heading}</h2>
        )}
        {data.body && (
          <p className="text-body opacity-80 mx-auto">{data.body}</p>
        )}
      </div>

      <div className="container-aroneu grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          
            <Tilt3D className="h-full">
              <div className="flex flex-col h-full p-6 md:p-8 border border-zinc-200 rounded-2xl surface-paper shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-ink">
                  {item.title}
                </h3>
                <p className="opacity-80 mb-8 flex-grow text-base leading-relaxed">
                  {item.description}
                </p>
                {item.href && item.ctaLabel && (
                  <a
                    href={item.href}
                    className="font-medium text-ink hover:opacity-70 inline-flex items-center"
                  >
                    {item.ctaLabel}{" "}
                    <span className="ml-2" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                )}
              </div>
            </Tilt3D>
          
        ))}
      </div>
    </section>
  );
}
