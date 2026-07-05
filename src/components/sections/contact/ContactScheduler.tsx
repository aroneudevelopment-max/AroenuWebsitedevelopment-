import React from "react";
import { SectionContent } from "@/lib/content/types";

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
          <a href={data.primaryCTA.href} className="btn-primary-aroneu">
            {data.primaryCTA.label}
          </a>
        )}
        <p className="mt-6 text-caption opacity-70 max-w-xl mx-auto">
          Scheduler integration is intentionally pending. Until the
          approved scheduler (Cal.com or HubSpot Meetings) is connected, the
          &ldquo;Book a call&rdquo; button links to the contact form below so the
          enquiry is captured honestly without a fake booking.
        </p>
      </div>
    </section>
  );
}
