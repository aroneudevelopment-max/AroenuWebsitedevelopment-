import React from "react";
import { SectionContent } from "@/lib/content/types";
import { resolveCtaHref } from "@/lib/cta";

/**
 * CareersBridge
 * - "For senior India talent / Serious work, taken seriously." section.
 * - Renders on a dark surface with paper-white text.
 * - The "View open roles" button has a paper border + paper text on
 *   surface-ink for high contrast.
 */
export function CareersBridge({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const cta = data.ctas?.[0];

  return (
    <section className="section-aroneu surface-ink text-center">
      <div className="container-aroneu max-w-3xl mx-auto">
        {data.eyebrow && (
          <span className="text-label uppercase tracking-widest block mb-4 opacity-60">
            {data.eyebrow}
          </span>
        )}
        {data.heading && (
          <h2 className="text-h2 mb-6 text-paper">{data.heading}</h2>
        )}
        {data.body && (
          <p className="text-body opacity-80 mb-10 mx-auto text-paper">{data.body}</p>
        )}
        {cta && (
          <a
            href={resolveCtaHref(cta.href, cta.label)}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold border-2 border-paper text-paper hover:bg-paper hover:text-ink transition-colors"
          >
            {cta.label}
            <span className="ml-2" aria-hidden="true">
              &rarr;
            </span>
          </a>
        )}
      </div>
    </section>
  );
}
