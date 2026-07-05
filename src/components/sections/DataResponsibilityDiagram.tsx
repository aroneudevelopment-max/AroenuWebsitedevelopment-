import React from "react";
import { SectionContent } from "@/lib/content/types";
/**
 * DataResponsibilityDiagram
 * - 5-step source -> access -> approval -> owner -> output.
 * - Stagger reveal via ScrollReveal.
 * - Horizontal line on desktop, vertical line on mobile.
 */
export function DataResponsibilityDiagram({
  data,
}: {
  data?: SectionContent;
}) {
  if (!data) return null;
  const diagramSteps = [
    { label: "Source material", id: "source" },
    { label: "Access boundary", id: "access" },
    { label: "Approval / review", id: "review" },
    { label: "Accountable owner", id: "owner" },
    { label: "Governed output", id: "output" },
  ];

  return (
    <section className="section-aroneu surface-sand border-y border-zinc-200 overflow-hidden">
      <div className="container-aroneu max-w-4xl mx-auto text-center mb-16">
        {data.eyebrow && (
          <span className="text-label uppercase tracking-widest block mb-4 opacity-70">
            {data.eyebrow}
          </span>
        )}
        {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
        {data.body && (
          <p className="text-body opacity-80 mx-auto max-w-3xl">
            {data.body}
          </p>
        )}
      </div>

      <div className="container-aroneu max-w-5xl mx-auto relative px-4">
        {/* Connection line (Desktop) */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-1/2 left-8 right-8 h-px bg-zinc-300 -translate-y-1/2 z-0"
        />

        {/* Connection line (Mobile) */}
        <div
          aria-hidden="true"
          className="md:hidden absolute left-1/2 top-4 bottom-4 w-px bg-zinc-300 -translate-x-1/2 z-0"
        />

        <div className="z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2 relative">
          {diagramSteps.map((step, i) => (
            
              <div className="flex flex-col items-center p-4 rounded-xl border border-zinc-200 surface-paper shadow-sm transition-transform hover:-translate-y-px">
                <span className="text-[11px] font-mono uppercase tracking-widest opacity-70 mb-1">
                  0{i + 1}
                </span>
                <span className="font-semibold text-sm text-center text-ink">
                  {step.label}
                </span>
              </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}
