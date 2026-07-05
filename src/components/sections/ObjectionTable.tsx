import React from "react";
import { SectionContent } from "@/lib/content/types";

export function ObjectionTable({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu">
      <div className="container-aroneu max-w-5xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {data.eyebrow && (
            <span className="text-label uppercase tracking-widest block mb-4 text-zinc-500">
              {data.eyebrow}
            </span>
          )}
          {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
        </div>

        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
          {data.items?.map((item: any, i: number) => (
            <div
              key={i}
              className="py-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"
            >
              <div className="md:col-span-1 font-semibold flex gap-3 text-ink">
                <span className="text-zinc-400 shrink-0" aria-hidden="true">
                  ?
                </span>
                <span>{item.question}</span>
              </div>
              <div className="md:col-span-2 text-zinc-600 flex gap-3">
                <span className="text-zinc-400 shrink-0" aria-hidden="true">
                  &rarr;
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
