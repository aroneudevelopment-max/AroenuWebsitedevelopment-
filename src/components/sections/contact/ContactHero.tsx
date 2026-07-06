import React from "react";
import Image from "next/image";
import { SectionContent } from "@/lib/content/types";
import { resolveCtaHref } from "@/lib/cta";

export function ContactHero({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const primaryBtn = "btn-primary-aroneu";
  const secondaryBtn =
    "inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border border-zinc-300 text-ink hover:bg-zinc-100 transition-colors";
  const imageSrc =
    data.image ?? "/images/aroneu/home-governable-capability-poster.jpg";
  const imageAlt = data.imageAlt ?? "";

  return (
    <section className="section-aroneu relative overflow-hidden surface-paper">
      <div className="container-aroneu grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          {data.eyebrow && (
            <span className="label-aroneu mb-4 text-primary-600 block">
              {data.eyebrow}
            </span>
          )}
          {data.heading && <h1 className="text-h1 mb-6 leading-tight text-ink">{data.heading}</h1>}
          {data.subcopy && <p className="text-body opacity-80 mb-8 max-w-xl">{data.subcopy}</p>}

          <div className="flex flex-wrap gap-4">
            {data.ctas?.map((cta, index) => (
              <a
                key={index}
                href={resolveCtaHref(cta.href, cta.label)}
                className={cta.variant === "secondary" ? secondaryBtn : primaryBtn}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative z-10 w-full aspect-[4/3] surface-sand rounded-3xl overflow-hidden border border-zinc-200">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
