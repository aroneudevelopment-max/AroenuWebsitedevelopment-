import React from "react";
import { SectionContent } from "@/lib/content/types";
export function InternaliseTransferDiagram({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const steps = ["Governed team", "Documented knowledge", "Continuity / Optional transfer"];

  return (
    <section className="section-aroneu surface-sand border-y border-zinc-200">
      <div className="container-aroneu max-w-4xl mx-auto text-center mb-16">
        {data.eyebrow && (
          <span className="text-label uppercase tracking-widest block mb-4 text-zinc-500">
            {data.eyebrow}
          </span>
        )}
        {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
        {data.body && (
          <p className="text-body text-zinc-600 mx-auto max-w-3xl">
            {data.body}
          </p>
        )}
      </div>

      <div className="container-aroneu max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mb-16 relative">
        {/* Hairline connector line (desktop) */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-1/2 left-10 right-10 h-px bg-zinc-300 -translate-y-1/2 z-0"
        />

        {steps.map((label, i) => (
          
            <div className="min-w-0 flex flex-col items-center p-6 rounded-2xl border border-zinc-200 surface-paper shadow-sm w-full md:w-auto">
              <span className="w-10 h-10 rounded-full border border-zinc-300 surface-paper text-ink flex items-center justify-center font-mono text-sm mb-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-semibold text-ink text-center">
                {label}
              </span>
            </div>
          
        ))}
      </div>

      {data.ctas && data.ctas.length > 0 && (
        <div className="flex justify-center">
          <a
            href={data.ctas[0].href}
            className="inline-block px-8 py-4 rounded-full text-base font-medium border border-zinc-300 text-ink hover:bg-zinc-100 transition-colors"
          >
            {data.ctas[0].label}
          </a>
        </div>
      )}
    </section>
  );
}
