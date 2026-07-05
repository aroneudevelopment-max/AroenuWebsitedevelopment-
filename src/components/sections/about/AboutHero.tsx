import React from "react";
import Image from "next/image";
import { SectionContent } from "@/lib/content/types";

export function AboutHero({ data }: { data?: SectionContent }) {
  if (!data) return null;

  return (
    <section className="section-aroneu relative overflow-hidden surface-paper">
      <div className="container-aroneu grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          {data.eyebrow && (
            <span className="label-aroneu mb-4 text-primary-600 block">
              {data.eyebrow}
            </span>
          )}
          {data.heading && <h1 className="text-h1 mb-6 leading-tight">{data.heading}</h1>}
          {data.subcopy && <p className="text-body opacity-80 mb-8 max-w-xl">{data.subcopy}</p>}

          <div className="flex flex-wrap gap-4">
            {data.primaryCTA && (
              <a href={data.primaryCTA.href} className="btn-primary-aroneu">
                {data.primaryCTA.label}
              </a>
            )}
            {data.secondaryCTA && (
              <a href={data.secondaryCTA.href} className="btn-secondary-aroneu">
                {data.secondaryCTA.label}
              </a>
            )}
          </div>
        </div>

        <div className="relative z-10 w-full aspect-[4/3] surface-sand rounded-3xl overflow-hidden border border-zinc-200">
          {data.image && (
            <Image
              src={data.image}
              alt={data.imageAlt ?? ""}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          )}
        </div>
      </div>
    </section>
  );
}
