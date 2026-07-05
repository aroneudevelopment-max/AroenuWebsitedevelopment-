import React from "react";
import { SectionContent } from "@/lib/content/types";

export function ObjectionTable({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu">
      <div className="container-aroneu max-w-5xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {data.eyebrow && (
            <span className="text-label uppercase tracking-widest block mb-4 opacity-70">
              {data.eyebrow}
            </span>
          )}
          {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
        </div>

        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
          {data.items?.map((item: any, i: number) => (
            <div
              key={i}
              className="py-6 grid grid-cols-1 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.95fr)] gap-5 md:gap-10"
            >
              <div className="font-semibold flex gap-4 text-ink">
                <span
                  className="w-8 h-8 rounded-full border border-zinc-200 surface-sand text-[11px] uppercase tracking-[0.18em] text-zinc-500 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  Q
                </span>
                <span>{item.question}</span>
              </div>
              <div className="opacity-80 flex gap-4">
                <span
                  className="w-8 h-8 rounded-full border border-zinc-200 surface-paper text-[11px] uppercase tracking-[0.18em] text-zinc-500 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  A
                </span>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
