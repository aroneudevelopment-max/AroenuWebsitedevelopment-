import React from "react";
import { SectionContent } from "@/lib/content/types";

/**
 * ContactClosingCTA
 * - "Start with the governance question." final CTA on the contact page.
 */
export function ContactClosingCTA({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu surface-paper">
      <div className="container-aroneu max-w-3xl mx-auto text-center">
        {data.eyebrow && (
          <span className="label-aroneu mb-4 text-primary-600 block">
            {data.eyebrow}
          </span>
        )}
        {data.heading && <h2 className="text-h2 mb-6 text-ink">{data.heading}</h2>}
        {data.body && (
          <p className="text-body opacity-80 mb-10 max-w-2xl mx-auto">
            {data.body as string}
          </p>
        )}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {data.primaryCTA && (
            <a href={data.primaryCTA.href} className="btn-primary-aroneu">
              {data.primaryCTA.label}
            </a>
          )}
          {data.secondaryCTA && (
            <a href={data.secondaryCTA.href} className="btn-secondary-aroneu">
              {data.secondaryCTA.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
