import React from "react";
import { SectionContent } from "@/lib/content/types";

export function ProofStrip({ data }: { data?: SectionContent }) {
  if (!data) return null;

  const items = (data.items as any[]) ?? [];
  const pending = (data as any).pendingProof === true;

  return (
    <section className="section-aroneu border-y border-zinc-200 surface-sand">
      <div className="container-aroneu">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              {pending ? (
                <span className="text-lg font-semibold text-ink max-w-[16rem]">
                  {item.title || item.label}
                </span>
              ) : (
                <>
                  <span className="text-4xl font-mono mb-2 text-ink">
                    {item.value}
                  </span>
                  <span className="text-sm font-medium opacity-70 uppercase tracking-widest">
                    {item.label}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
