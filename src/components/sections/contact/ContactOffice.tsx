import React from "react";
import { SectionContent } from "@/lib/content/types";

/**
 * ContactOffice
 * - "Built between Europe and India." location/structure strip.
 * - Per the brief, never invent the registered address, VAT, legal
 *   office, or company record. Pending wording is intentional.
 */
export function ContactOffice({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu surface-paper">
      <div className="container-aroneu max-w-4xl mx-auto text-center">
        {data.heading && (
          <h3 className="text-h3 mb-4 text-ink">{data.heading}</h3>
        )}
        {data.body && (
          <p className="text-body opacity-80">{data.body as string}</p>
        )}
        <p className="mt-4 text-caption opacity-70">
          Registered address: pending client confirmation.
        </p>
      </div>
    </section>
  );
}
