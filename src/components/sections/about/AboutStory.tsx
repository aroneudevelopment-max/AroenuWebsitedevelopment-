import React from "react";
import { SectionContent } from "@/lib/content/types";

export function AboutStory({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu">
      <div className="container-aroneu grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          {data.label && (
            <span className="text-label uppercase tracking-widest block mb-4 text-zinc-500">
              {data.label}
            </span>
          )}
          {data.heading && (
            <h2 className="text-h2 mb-6">{data.heading}</h2>
          )}
          {data.body && (
            <div className="text-body text-zinc-600 space-y-4">
              {String(data.body)
                .split(/\n\n+/)
                .map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
            </div>
          )}
        </div>

        {/* Governance Gap Visual - Aroneu bridge motif (Europe - Governance - India) */}
        <div className="flex flex-col gap-3 p-8 surface-sand rounded-2xl border border-zinc-200 relative">
          <div className="p-5 rounded-lg border border-zinc-200 text-center font-medium surface-paper">
            European Need
          </div>
          <div
            aria-hidden="true"
            className="h-6 flex justify-center items-center text-zinc-300 text-2xl leading-none"
          >
            &#8595;
          </div>
          <div className="p-5 surface-ink text-paper rounded-lg text-center font-medium">
            Governance Layer
          </div>
          <div
            aria-hidden="true"
            className="h-6 flex justify-center items-center text-zinc-300 text-2xl leading-none"
          >
            &#8595;
          </div>
          <div className="p-5 rounded-lg border border-zinc-200 text-center font-medium surface-paper">
            India Capability
          </div>
        </div>
      </div>
    </section>
  );
}
