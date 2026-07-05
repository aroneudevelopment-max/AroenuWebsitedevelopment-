import React from "react";
import { SectionContent } from "@/lib/content/types";

/**
 * ContactReassurance
 * - "How we handle it / Low pressure. Clear next step." reassurance strip.
 */
export function ContactReassurance({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu surface-paper">
      <div className="container-aroneu max-w-4xl mx-auto text-center">
        {data.label && (
          <span className="label-aroneu mb-4 text-primary-600 block">
            {data.label}
          </span>
        )}
        {data.heading && (
          <h3 className="text-h3 mb-4 text-ink">{data.heading}</h3>
        )}
        {data.body && (
          <p className="text-body opacity-80">{data.body as string}</p>
        )}
      </div>
    </section>
  );
}
