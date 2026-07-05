"use client";

import React from "react";
import { SectionContent } from "@/lib/content/types";

export function LeadershipPreview({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const items = (data.items as any[]) || [];
  const cta = data.ctas?.[0];

  return (
    <section className="section-aroneu surface-paper border-y border-zinc-200">
      <div className="container-aroneu grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-16 items-center">
        <div>
          {data.eyebrow && (
            <span className="text-label uppercase tracking-widest block mb-4 opacity-70">
              {data.eyebrow}
            </span>
          )}
          {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
          {data.body && <p className="text-body opacity-80 mb-8">{data.body}</p>}

          <ul className="space-y-3 mb-8">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full surface-ink text-paper flex items-center justify-center text-sm font-bold shrink-0"
                  aria-hidden="true"
                >
                  {item.title.charAt(0)}
                </div>
                <span className="font-medium text-ink text-lg">{item.title}</span>
              </li>
            ))}
          </ul>

          {cta && (
            <a
              href={cta.href}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-medium border border-zinc-300 text-ink hover:bg-zinc-100 transition-colors"
            >
              {cta.label}
            </a>
          )}
        </div>

        <div className="rounded-[2rem] border border-zinc-200 surface-sand p-8 md:p-10 shadow-soft">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {items.map((item, i) => (
              <div
                key={item.title}
                className={`rounded-2xl border border-zinc-200 ${
                  i === 1 ? "surface-ink text-paper" : "surface-paper text-ink"
                } p-5 min-h-[190px] flex flex-col justify-between`}
              >
                <div className="w-14 h-14 rounded-full border border-current/15 flex items-center justify-center text-lg font-semibold">
                  {item.title
                    .split(" ")
                    .map((part: string) => part[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <p className="text-base font-semibold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
