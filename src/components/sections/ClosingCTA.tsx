import React from "react";
import { SectionContent } from "@/lib/content/types";

type Tone = "light" | "ink";

export function ClosingCTA({
  data,
  tone = "light",
}: {
  data?: SectionContent;
  tone?: Tone;
}) {
  if (!data) return null;

  const isInk = tone === "ink";

  // Contrast-safe colour set for each surface
  const eyebrowClass = isInk ? "opacity-60" : "opacity-70";
  const headingClass = isInk ? "text-paper" : "text-ink";
  const bodyClass = isInk ? "opacity-80" : "opacity-80";
  const primaryBtn =
    "px-8 py-4 rounded-full text-base font-medium bg-ink text-paper hover:opacity-90 transition-opacity";
  const secondaryBtn = isInk
    ? "px-8 py-4 rounded-full text-base font-medium border border-zinc-500 text-paper hover:bg-zinc-900 transition-colors"
    : "px-8 py-4 rounded-full text-base font-medium border border-zinc-300 text-ink hover:bg-zinc-100 transition-colors";

  return (
    <section
      className={`section-aroneu text-center ${
        isInk ? "surface-ink" : "surface-paper"
      }`}
    >
      <div className="container-aroneu max-w-3xl mx-auto">
        {data.eyebrow && (
          <span
            className={`text-label uppercase tracking-widest block mb-4 ${eyebrowClass}`}
          >
            {data.eyebrow}
          </span>
        )}
        {data.heading && (
          <h2 className={`text-h2 mb-6 ${headingClass}`}>{data.heading}</h2>
        )}
        {data.body && <p className={`text-body mb-10 ${bodyClass}`}>{data.body}</p>}

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {data.primaryCTA && (
            <a href={data.primaryCTA.href} className={primaryBtn}>
              {data.primaryCTA.label}
            </a>
          )}
          {data.secondaryCTA && (
            <a href={data.secondaryCTA.href} className={secondaryBtn}>
              {data.secondaryCTA.label}
            </a>
          )}
        </div>

        {/* legacy ctas[] array support */}
        {!data.primaryCTA && data.ctas && data.ctas.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {data.ctas.map((cta, i) => (
              <a
                key={i}
                href={cta.href}
                className={
                  cta.variant === "primary" ? primaryBtn : secondaryBtn
                }
              >
                {cta.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
