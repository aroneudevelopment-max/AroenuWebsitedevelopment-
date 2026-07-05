"use client";

import React from "react";
import Image from "next/image";
import { SectionContent } from "@/lib/content/types";
export function LeadershipPreview({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const items = (data.items as any[]) || [];

  return (
    <section className="section-aroneu">
      <div className="container-aroneu grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 surface-sand flex items-center justify-center">
            <div className="text-center max-w-xs px-6">
              <div className="text-label uppercase tracking-widest text-zinc-500 mb-3">
                Leadership
              </div>
              <p className="text-body text-zinc-600">
                Named accountability, not a portrait gallery. Real leadership
                profiles appear once approved by Aroneu.
              </p>
            </div>
          </div>
        

        
          {data.eyebrow && (
            <span className="text-label uppercase tracking-widest block mb-4 text-zinc-500">
              {data.eyebrow}
            </span>
          )}
          {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
          {data.body && (
            <p className="text-body text-zinc-600 mb-8">{data.body}</p>
          )}

          <ul className="space-y-3 mb-8">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full surface-ink text-paper flex items-center justify-center text-sm font-bold shrink-0"
                  aria-hidden="true"
                >
                  {item.title.charAt(0)}
                </div>
                <span className="font-medium text-ink">{item.title}</span>
              </li>
            ))}
          </ul>

          {data.ctas && data.ctas.length > 0 && (
            <a
              href={data.ctas[0].href}
              className="inline-block px-8 py-4 rounded-full text-base font-medium border border-zinc-300 text-ink hover:bg-zinc-100 transition-colors"
            >
              {data.ctas[0].label}
            </a>
          )}
        
      </div>
    </section>
  );
}
