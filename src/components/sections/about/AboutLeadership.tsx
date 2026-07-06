import React from "react";
import Image from "next/image";
import { SectionContent } from "@/lib/content/types";
import { resolveCtaHref } from "@/lib/cta";

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

          {(data.features as { heading: string }[])?.length ? (
            <ul className="mb-8 grid gap-3 sm:grid-cols-3">
              {(data.features as { heading: string }[]).map((feature) => (
                <li
                  key={feature.heading}
                  className="rounded-full border border-zinc-200 bg-paper px-4 py-3 text-sm font-medium text-ink text-center"
                >
                  {feature.heading}
                </li>
              ))}
            </ul>
          ) : null}

          {data.primaryCTA && (
            <a
              href={resolveCtaHref(data.primaryCTA.href, data.primaryCTA.label)}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-medium bg-ink text-paper hover:opacity-90 transition-opacity"
            >
              {data.primaryCTA.label}
            </a>
          )}
        </div>

        <div className="relative rounded-[2rem] overflow-hidden border border-zinc-200 surface-sand aspect-[4/3]">
          {data.image ? (
            <Image
              src={data.image}
              alt={data.imageAlt || ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
