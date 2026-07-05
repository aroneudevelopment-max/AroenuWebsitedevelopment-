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
          {panelData.video ? (
            <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-200 shadow-sm">
              <video
                src={panelData.video}
                poster={panelData.image}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover"
              />
            </div>
          ) : panelData.image ? (
            <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-200 shadow-sm">
              <img
                src={panelData.image}
                alt="Governance controls panel"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
