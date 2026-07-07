import React from "react";
import Image from "next/image";
import { SectionContent } from "@/lib/content/types";
import { resolveCtaHref } from "@/lib/cta";

type LeadershipItem = {
  title: string;
};

export function LeadershipPreview({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const items = (data.items as LeadershipItem[]) || [];
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
          {data.body && (
            <p className="text-body opacity-80 mb-8 whitespace-pre-line">
              {data.body}
            </p>
          )}

          <ul className="space-y-3 mb-8">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div
                  className="h-2.5 w-2.5 rounded-full bg-primary-500 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium text-ink text-lg">{item.title}</span>
              </li>
            ))}
          </ul>

          {cta && (
            <a
              href={resolveCtaHref(cta.href, cta.label)}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-medium border border-zinc-300 text-ink hover:bg-zinc-100 transition-colors"
            >
              {cta.label}
            </a>
          )}
        </div>

        <div className="rounded-[2rem] border border-zinc-200 surface-sand shadow-soft overflow-hidden aspect-[4/3] relative">
          {data.image ? (
            <Image
              src={data.image}
              alt={data.imageAlt || ""}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
