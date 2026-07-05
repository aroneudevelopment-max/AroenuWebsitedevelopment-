import React from "react";
import Image from "next/image";
import { SectionContent } from "@/lib/content/types";

export function AIInsightPanel({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const panelData = data as any;
  const intro =
    data.body ?? (typeof data.subcopy === "string" ? data.subcopy : undefined);

  return (
    <section className="section-aroneu">
      <div className="container-aroneu max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 w-full relative rounded-2xl overflow-hidden border border-zinc-200 shadow-sm surface-sand">
          {panelData.image ? (
            <div className="relative aspect-[5/4]">
              <Image
                src={panelData.image}
                alt={
                  panelData.imageAlt ||
                  "AI Workspace preview showing team health, governance controls, decisions, and AI-supported insight"
                }
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          ) : (
            <div className="w-full h-[400px] flex items-center justify-center opacity-60">
              AI-supported insight view
            </div>
          )}
          <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-orange-400" />
        </div>
        <div className="flex-1">
          {data.eyebrow && (
            <span className="text-label opacity-70 uppercase tracking-widest block mb-4">
              {data.eyebrow}
            </span>
          )}
          {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
          {intro && <p className="text-body opacity-80 mb-8">{intro}</p>}
          <div className="flex flex-wrap gap-2">
            {data.items?.map((item: any, i: number) => (
              <span
                key={i}
                className="font-mono text-xs px-3 py-1.5 bg-zinc-100 opacity-80 rounded border border-zinc-200"
              >
                {item.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
