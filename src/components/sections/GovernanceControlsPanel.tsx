import React from "react";
import { SectionContent } from "@/lib/content/types";

export function GovernanceControlsPanel({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const panelData = data as any;

  return (
    <section className="section-aroneu surface-sand border-y border-zinc-200">
      <div className="container-aroneu flex flex-col lg:flex-row-reverse gap-16 items-center">
        <div className="flex-1">
          {data.eyebrow && (
            <span className="text-label uppercase tracking-widest block mb-4 opacity-70">
              {data.eyebrow}
            </span>
          )}
          {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
          {data.body && (
            <p className="text-body opacity-80 mb-10">{data.body}</p>
          )}
          <div className="grid grid-cols-2 gap-4">
            {data.items?.map((item: any, i: number) => (
              <div key={i} className="p-4 border border-zinc-200 rounded-lg surface-paper">
                <span className="text-sm font-semibold">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col items-stretch relative w-full">
          {panelData.image && (
            <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-200 shadow-sm">
              <img
                src={panelData.image}
                alt="Governance controls panel — representative"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-3 right-3 surface-paper/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] opacity-70 tracking-wider">
                REPRESENTATIVE VISUAL
              </div>
            </div>
          )}

          {panelData.video && (
            <div className="mt-6 flex flex-col items-start gap-2">
              <a
                href={panelData.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-ink text-paper text-base font-medium hover:opacity-90 transition-opacity"
                aria-label="Watch the governance explainer video in a new tab"
              >
                <span
                  aria-hidden="true"
                  className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-paper text-ink text-sm"
                >
                  &#9654;
                </span>
                <span>Watch the explainer</span>
              </a>
              <p className="text-caption opacity-70">
                Manual play. No sound. Representative explainer for the
                governance layer, not a live product demo.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
