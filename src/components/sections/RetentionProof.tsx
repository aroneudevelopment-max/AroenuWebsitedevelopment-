import React from "react";
import { SectionContent } from "@/lib/content/types";

export function RetentionProof({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const items = (data.items as any[] | undefined) ?? [];
  const pending = (data as any).pendingProof === true;

  return (
    <section className="section-aroneu">
      <div className="container-aroneu max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 text-center md:text-left">
          {data.eyebrow && (
            <span className="text-label uppercase tracking-widest block mb-4 opacity-70">
              {data.eyebrow}
            </span>
          )}
          {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
          {data.body && (
            <p className="text-body opacity-80 mb-8">{data.body}</p>
          )}
          {data.subcopy && (
            <p className="text-sm font-medium opacity-80">{data.subcopy}</p>
          )}
        </div>
        <div className="w-full md:w-auto shrink-0 flex items-center justify-center p-12 border border-zinc-200 rounded-2xl surface-sand shadow-sm">
          {items && items.length > 0 && (
            <div className="flex flex-col items-center">
              <span
                className={`text-6xl font-mono mb-3 tracking-tight ${
                  pending ? "opacity-80" : "text-ink"
                }`}
                aria-hidden={pending ? "true" : undefined}
              >
                {pending ? "— —" : items[0].value}
              </span>
              <span className="text-sm font-medium uppercase tracking-widest opacity-70">
                {items[0].label}
              </span>
              <span className="text-xs opacity-60 mt-2 max-w-[200px] text-center">
                {items[0].description}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
