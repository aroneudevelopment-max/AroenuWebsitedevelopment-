import React from "react";
import { SectionContent } from "@/lib/content/types";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * GovernanceAroundTeamDiagram
 * - Team in center, four surrounding governance layers.
 * - Restrained reveal via ScrollReveal per layer (per the motion brief).
 * - Hairline rings, no heavy animations, no 3D.
 */
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
            <span className="text-label uppercase tracking-widest block mb-4 text-zinc-500">
              {data.eyebrow}
            </span>
          )}
          {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
          {data.body && (
            <p className="text-body text-zinc-600 mb-10">{data.body}</p>
          )}

          <div className="space-y-6">
            {items.map((item, i) => (
              <ScrollReveal
                key={i}
                direction="up"
                delay={i * 0.1}
                className="pl-5 border-l-2 border-zinc-300"
              >
                <h3 className="text-base font-semibold mb-2 text-ink">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600">{item.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal
          direction="left"
          delay={0.15}
          className="flex justify-center relative min-h-[420px]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Concentric hairline rings */}
            <div className="w-80 h-80 rounded-full border border-zinc-200" />
            <div className="absolute w-64 h-64 rounded-full border border-zinc-300 surface-sand" />
            <div className="absolute w-48 h-48 rounded-full border border-zinc-400" />
            <div className="absolute w-32 h-32 rounded-full border-2 border-ink surface-ink text-paper flex flex-col items-center justify-center font-semibold text-center leading-tight shadow-soft">
              <span className="text-[10px] uppercase tracking-widest opacity-80">
                Aroneu
              </span>
              <span>
                Capability
                <br />
                Team
              </span>
            </div>

            {/* Layer labels mapped to the four rings */}
            {items.slice(0, 4).map((item, i) => {
              const positions = [
                "top-4 left-1/2 -translate-x-1/2",
                "top-1/2 -translate-y-1/2 left-2",
                "top-1/2 -translate-y-1/2 right-2",
                "bottom-4 left-1/2 -translate-x-1/2",
              ];
              return (
                <span
                  key={i}
                  className={`absolute text-[11px] font-medium text-zinc-500 px-2 py-1 rounded-md border border-zinc-200 surface-paper whitespace-nowrap ${positions[i]}`}
                >
                  {item.title}
                </span>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
