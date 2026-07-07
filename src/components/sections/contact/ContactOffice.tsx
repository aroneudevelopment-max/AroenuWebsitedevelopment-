import React from "react";
import { SectionContent } from "@/lib/content/types";

/**
 * ContactOffice
 * - "Built between Europe and India." location/structure strip.
 * - Per the brief, never invent the registered address, VAT, legal
 *   office, or company record.
 */
export function ContactOffice({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const items = (data.items as string[] | undefined) ?? [];

  return (
    <section className="section-aroneu surface-paper">
      <div className="container-aroneu max-w-4xl mx-auto text-center">
        {data.heading && (
          <h3 className="text-h3 mb-4 text-ink">{data.heading}</h3>
        )}
        {data.body && (
          <p className="text-body opacity-80">{data.body as string}</p>
        )}
        {items.length ? (
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            {items.map((item) => {
              const href = item.includes("@") ? `mailto:${item}` : `tel:${item}`;
              const label = item.includes("@") ? "Email" : "Phone";

              return (
                <a
                  key={item}
                  href={href}
                  className="rounded-full border border-zinc-200 bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-zinc-50"
                >
                  {label}: {item}
                </a>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
