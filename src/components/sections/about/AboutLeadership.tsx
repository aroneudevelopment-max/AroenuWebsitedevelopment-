import React from "react";
import { SectionContent } from "@/lib/content/types";

export function AboutLeadership({ data }: { data?: SectionContent }) {
  if (!data) return null;

  return (
    <section className="section-aroneu surface-paper border-y border-zinc-200">
      <div className="container-aroneu grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          {data.label && (
            <span className="text-label uppercase tracking-widest block mb-4 opacity-70">
              {data.label}
            </span>
          )}
          {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
          {data.body && (
            <p className="text-body opacity-80 mb-8 whitespace-pre-line">
              {data.body}
            </p>
          )}

          {data.primaryCTA && (
            <a
              href={data.primaryCTA.href}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-medium bg-ink text-paper hover:opacity-90 transition-opacity"
            >
              {data.primaryCTA.label}
            </a>
          )}
        </div>

        <div className="relative rounded-[2rem] overflow-hidden border border-zinc-200 surface-sand p-8 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {(data.features as { heading: string; body?: string }[])?.map((feature, i) => (
              <div
                key={feature.heading}
                className={`rounded-2xl border border-zinc-200 ${
                  i === 1 ? "surface-ink text-paper" : "surface-paper text-ink"
                } p-5 min-h-[190px] flex flex-col justify-between`}
              >
                <div className="w-14 h-14 rounded-full border border-current/15 flex items-center justify-center text-lg font-semibold">
                  {feature.heading
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <p className="text-base font-semibold">{feature.heading}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
