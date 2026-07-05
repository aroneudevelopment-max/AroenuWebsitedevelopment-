import React from "react";
import Image from "next/image";
import { SectionContent } from "@/lib/content/types";

/**
 * ContactHero
 * - Copy left, approved Europe-India bridge visual right.
 * - No mix-blend / opacity-80 on the image (previous version made it look broken).
 * - The image is the approved brand abstract visual from /images/aroneu/.
 */
export function ContactHero({ data }: { data?: SectionContent }) {
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
          {data.heading && (
            <h1 className="text-h1 mb-6 leading-tight text-ink">
              {data.heading}
            </h1>
          )}
          {data.subcopy && (
            <p className="text-body text-zinc-600 mb-8 max-w-xl">
              {data.subcopy}
            </p>
          )}

          <div className="flex flex-wrap gap-4">
            {data.ctas?.map((cta, index) => (
              <a key={index} href={cta.href} className="btn-primary-aroneu">
                {cta.label}
              </a>
            ))}
          </div>
        </div>

        {/* Approved abstract Europe-India bridge visual */}
        <div className="relative z-10 w-full aspect-[4/3] surface-sand rounded-3xl overflow-hidden border border-zinc-200">
          <Image
            src="/images/aroneu/abstract-visual.jpeg"
            alt="Aroneu — Europe-India bridge visual"
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
