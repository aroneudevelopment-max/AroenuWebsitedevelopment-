import React from "react";
import Image from "next/image";
import { SectionContent } from "@/lib/content/types";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Tilt3D } from "@/components/ui/Tilt3D";

type Tone = "light" | "ink";

/**
 * Hero
 * - Renders eyebrow, H1, subcopy, primary CTA, secondary CTA.
 * - Renders the brand-approved visual (image poster) on the right.
 * - Optional `video` (approved source) renders as a manual / muted video with
 *   the image as a poster — NEVER autoplays with sound.
 * - Tilt3D is only applied on the homepage, capability-teams, and about
 *   (per placement doc, where a calm 3D depth is appropriate). The how-it-works
 *   and ai-workspace heroes use flat renders to keep their domain look serious.
 */
export function Hero({
  data,
  tone = "light",
  withTilt3D = true,
}: {
  data?: SectionContent;
  tone?: Tone;
  withTilt3D?: boolean;
}) {
  if (!data) return null;
  const isInk = tone === "ink";

  const headingClass = isInk ? "text-paper" : "text-ink";
  const subcopyClass = isInk ? "text-zinc-300" : "text-zinc-600";
  const eyebrowClass = isInk ? "text-zinc-400" : "text-zinc-500";
  const primaryBtn =
    "inline-block px-8 py-4 rounded-full text-base font-medium bg-ink text-paper hover:opacity-90 transition-opacity";
  const secondaryBtn = isInk
    ? "inline-block px-8 py-4 rounded-full text-base font-medium border border-zinc-500 text-paper hover:bg-zinc-900 transition-colors"
    : "inline-block px-8 py-4 rounded-full text-base font-medium border border-zinc-300 text-ink hover:bg-zinc-100 transition-colors";

  const visual = (
    <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
      {data.image ? (
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 shadow-soft surface-sand">
          <Image
            src={data.image}
            alt={data.heading || "Hero visual"}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ) : (
        <div className="w-full aspect-[4/3] rounded-2xl surface-sand border border-zinc-200" />
      )}

      {data.video && (
        <div className="mt-4">
          <a
            href={data.video}
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-ink transition-colors"
            aria-label="Play the overview video in your browser"
          >
            <span
              aria-hidden="true"
              className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-ink text-paper"
            >
              &#9654;
            </span>
            <span>Watch the overview</span>
          </a>
          <p className="mt-2 text-caption text-zinc-400">
            Representative overview. No sound. Manual play.
          </p>
        </div>
      )}

      {data.visualSlot?.placementNote && (
        <p className="sr-only">{data.visualSlot.placementNote}</p>
      )}
    </div>
  );

  return (
    <section
      className={`section-aroneu ${
        isInk ? "surface-ink" : "surface-paper"
      } flex flex-col md:flex-row items-center justify-between gap-8`}
    >
      <ScrollReveal direction="up" className="container-aroneu max-w-xl">
        {data.eyebrow && (
          <span
            className={`text-label uppercase tracking-widest block mb-4 ${eyebrowClass}`}
          >
            {data.eyebrow}
          </span>
        )}
        {data.heading && (
          <h1 className={`text-h1 mb-6 ${headingClass}`}>{data.heading}</h1>
        )}
        {data.subcopy && (
          <p className={`text-body mb-8 ${subcopyClass}`}>{data.subcopy}</p>
        )}

        {/* New shape: primaryCTA / secondaryCTA */}
        {(data.primaryCTA || data.secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-4">
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
        )}

        {/* Legacy shape: ctas[] */}
        {!data.primaryCTA && data.ctas && data.ctas.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4">
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
      </ScrollReveal>

      <ScrollReveal
        direction="left"
        delay={0.2}
        className="w-full md:w-1/2 mt-8 md:mt-0"
      >
        {withTilt3D ? <Tilt3D>{visual}</Tilt3D> : visual}
      </ScrollReveal>
    </section>
  );
}
