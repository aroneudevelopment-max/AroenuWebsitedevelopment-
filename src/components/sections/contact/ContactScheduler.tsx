import React from "react";
import { SectionContent } from "@/lib/content/types";
import { resolveCtaHref } from "@/lib/cta";

/**
 * ContactScheduler
 * - "Prefer to choose a time?" section.
 * - No fake scheduler. Book a call CTA links to /contact#contact-form
 *   so the user lands on the form without an unverified scheduler.
 */
export function ContactScheduler({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section
      id="scheduler"
      className="section-aroneu surface-sand border-y border-zinc-200"
    >
      <div className="container-aroneu max-w-3xl mx-auto text-center">
        {data.heading && (
          <h2 className="text-h2 mb-6 text-ink">{data.heading}</h2>
        )}
        {data.body && (
          <p className="text-body opacity-80 mb-8 max-w-2xl mx-auto">
            {data.body as string}
          </p>
        )}
        {data.primaryCTA && (
          <a
            href={resolveCtaHref(data.primaryCTA.href, data.primaryCTA.label)}
            className="btn-primary-aroneu"
          >
            {data.primaryCTA.label}
          </a>
        )}
      </div>
    </section>
  );
}
