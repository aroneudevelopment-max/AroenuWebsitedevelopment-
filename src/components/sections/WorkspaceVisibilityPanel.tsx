import React from "react";
import Image from "next/image";
import { SectionContent } from "@/lib/content/types";

export function WorkspaceVisibilityPanel({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const panelData = data as any;

  return (
    <section className="section-aroneu">
      <div className="container-aroneu grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          {data.eyebrow && (
            <span className="text-label opacity-70 uppercase tracking-widest block mb-4">
              {data.eyebrow}
            </span>
          )}
          {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
          {data.body && <p className="text-body opacity-80 mb-10">{data.body}</p>}
          <div className="space-y-4">
            {data.items?.map((item: any, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full surface-ink flex-shrink-0" />
                <span className="text-sm font-medium">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center relative w-full rounded-2xl overflow-hidden border border-zinc-200 surface-sand shadow-sm">
          {panelData.image ? (
            <div className="relative w-full aspect-[5/4]">
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
              Workspace visibility overview
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
