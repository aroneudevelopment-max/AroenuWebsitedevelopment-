import React from "react";
import Image from "next/image";
import { SectionContent } from "@/lib/content/types";

export function GovernanceAroundTeamDiagram({
  data,
}: {
  data?: SectionContent;
}) {
  if (!data) return null;
  const items = (data.items as any[]) || [];

  return (
    <section className="section-aroneu surface-sand border-y border-zinc-200">
      <div className="container-aroneu grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          {data.eyebrow && (
            <span className="text-label uppercase tracking-widest block mb-4 opacity-70">
              {data.eyebrow}
            </span>
          )}
          {data.heading && <h2 className="text-h2 mb-6 text-ink">{data.heading}</h2>}
          {data.body && <p className="text-body opacity-80 mb-10">{data.body}</p>}

          <div className="space-y-6">
            {items.map((item, i) => (
              <div key={i} className="pl-5 border-l-2 border-zinc-300">
                <h3 className="text-base font-semibold mb-2 text-ink">{item.title}</h3>
                <p className="text-sm opacity-80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center relative w-full">
          <div className="relative w-full aspect-[5/4] rounded-3xl overflow-hidden border border-zinc-200 shadow-soft surface-paper">
            {data.video ? (
              <video
                src={data.video}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster={data.videoPoster || data.image}
                className="w-full h-full object-cover"
                aria-label={
                  data.videoAlt ||
                  "Diagram showing senior India team, local leadership, client rhythm, and AI Workspace governance"
                }
              />
            ) : data.image ? (
              <Image
                src={data.image}
                alt={
                  data.imageAlt ||
                  "Diagram showing senior India team, local leadership, client rhythm, and AI Workspace governance"
                }
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
