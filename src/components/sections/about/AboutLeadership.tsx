import React from "react";
import { SectionContent } from "@/lib/content/types";
export function AboutLeadership({ data }: { data?: SectionContent }) {
  if (!data) return null;

  /* Burhan decision 2026-07-05: do not treat senior-professionals.jpeg as real
     leadership portraits. Use it only as a general approved people/team visual
     if the source supports it. For named leadership, keep monogram cards. */

  return (
    <section className="section-aroneu">
      <div className="container-aroneu grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
          {data.label && (
            <span className="text-label uppercase tracking-widest block mb-4 text-zinc-500">
              {data.label}
            </span>
          )}
          {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
          {data.body && (
            <p className="text-body text-zinc-600 mb-8 whitespace-pre-line">
              {data.body}
            </p>
          )}

          <div className="space-y-3 mb-8">
            {(data.features as { heading: string; body?: string }[])?.map(
              (feature, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full surface-ink text-paper flex items-center justify-center text-base font-bold shrink-0"
                    aria-hidden="true"
                  >
                    {feature.heading.charAt(0)}
                  </div>
                  <div className="font-medium text-lg text-ink">
                    {feature.heading}
                  </div>
                </div>
              )
            )}
          </div>

          {data.primaryCTA && (
            <a
              href={data.primaryCTA.href}
              className="inline-block px-8 py-4 rounded-full text-base font-medium bg-ink text-paper hover:opacity-90 transition-opacity"
            >
              {data.primaryCTA.label}
            </a>
          )}
        

        {/* Restrained visual placeholder area. Per the placement doc: no fake
           people photos on the named-leadership card. Use a sand panel with
           a calm typographic mark. */}
        
          <div className="relative rounded-2xl overflow-hidden border border-zinc-200 surface-sand aspect-[4/3] flex items-center justify-center">
            <div className="text-center max-w-xs px-6">
              <div
                className="text-label uppercase tracking-widest text-zinc-500 mb-3"
                aria-hidden="true"
              >
                Leadership
              </div>
              <p className="text-body text-zinc-600">
                Named accountability, not a portrait gallery. Real leadership
                profiles appear once approved by Aroneu.
              </p>
            </div>
          </div>
        
      </div>
    </section>
  );
}
