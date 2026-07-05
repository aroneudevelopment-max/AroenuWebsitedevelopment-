import React from "react";
import { SectionContent } from "@/lib/content/types";

/**
 * AboutSociety
 * - "Responsibility beyond the team" 3-card section.
 */
export function AboutSociety({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const items = (data.features as { heading: string; body: string }[]) || [];

  return (
    <section className="section-aroneu surface-sand border-y border-zinc-200">
      <div className="container-aroneu max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1">
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

        <div className="flex-1 w-full space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 rounded-xl border border-zinc-200 surface-paper shadow-sm"
            >
              <div className="w-10 h-10 rounded-full surface-sand flex items-center justify-center shrink-0">
                <span className="text-caption font-mono opacity-70">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-ink text-base">
                  {item.heading}
                </h3>
                <p className="opacity-80 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
