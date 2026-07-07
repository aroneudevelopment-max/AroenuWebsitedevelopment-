import React from "react";
import Image from "next/image";
import { SectionContent } from "@/lib/content/types";
import { Tilt3D } from "@/components/ui/Tilt3D";
import { resolveCtaHref } from "@/lib/cta";

type Tone = "light" | "ink";

/**
 * Hero
 * - Renders eyebrow, H1, subcopy, primary CTA, secondary CTA.
 * - Renders the brand-approved visual (image poster) on the right.
 * - Optional `video` (approved source) renders as a manual / muted video with
 *   the image as a poster — NEVER autoplays with sound.
 * - Tilt3D is only applied on the home, capability-teams, and about heroes
 *   (per placement doc). The how-it-works and ai-workspace heroes are flat.
 * - The hero visual is now LARGE on desktop (aspect-[4/3] in a w-1/2 column).
 */
export function Hero({
  data,
  tone = "light",
  withTilt3D = true,
  videoMode = "autoplay",
}: {
  data?: SectionContent;
  tone?: Tone;
  withTilt3D?: boolean;
  videoMode?: "autoplay" | "poster";
}) {
  if (!data) return null;
  const isInk = tone === "ink";
  const subcopy =
    data.subcopy ?? (typeof data.body === "string" ? data.body : undefined);
  const hasVisual = Boolean(data.image || data.video || data.videoPoster);
  const imageFitClass =
    data.imageFit === "contain" ? "object-contain p-4 md:p-6" : "object-cover";
  const videoFitClass =
    data.videoFit === "contain" ? "object-contain p-4 md:p-6" : "object-cover";
  const shouldRenderVideo = Boolean(data.video) && videoMode === "autoplay";
  const visualAlt =
    data.imageAlt ?? (shouldRenderVideo ? "" : data.heading || "Hero visual");
  const poster = data.videoPoster || data.image || undefined;
  const posterImage = poster || data.image;

  const headingClass = isInk ? "text-paper" : "text-ink";
  const subcopyClass = isInk ? "opacity-80" : "opacity-80";
  const eyebrowClass = isInk ? "opacity-60" : "text-primary-600";
  const primaryBtn =
    "inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold bg-ink text-paper hover:opacity-90 transition-opacity";
  const secondaryBtn = isInk
    ? "inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold border border-zinc-500 text-paper hover:bg-zinc-900 transition-colors"
    : "inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold border border-zinc-300 text-ink hover:bg-zinc-100 transition-colors";

  return (
    <section
      className={`section-aroneu ${
        isInk ? "surface-ink" : "surface-paper"
      }`}
    >
      <div
        className={`container-aroneu grid grid-cols-1 ${
          hasVisual ? "lg:grid-cols-2" : ""
        } gap-12 items-center`}
      >
        <div className="min-w-0 flex flex-col items-start justify-center z-10">
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
          {subcopy && (
            <p className={`text-body mb-8 max-w-xl ${subcopyClass}`}>
              {subcopy}
            </p>
          )}

          {(data.primaryCTA || data.secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {data.primaryCTA && (
                <a
                  href={resolveCtaHref(
                    data.primaryCTA.href,
                    data.primaryCTA.label,
                  )}
                  className={primaryBtn}
                >
                  {data.primaryCTA.label}
                </a>
              )}
              {data.secondaryCTA && (
                <a
                  href={resolveCtaHref(
                    data.secondaryCTA.href,
                    data.secondaryCTA.label,
                  )}
                  className={secondaryBtn}
                >
                  {data.secondaryCTA.label}
                </a>
              )}
            </div>
          )}

          {!data.primaryCTA && data.ctas && data.ctas.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4">
              {data.ctas.map((cta, i) => (
                <a
                  key={i}
                  href={resolveCtaHref(cta.href, cta.label)}
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

        {hasVisual && <div className="relative min-w-0 z-10">
          {withTilt3D ? (
            <Tilt3D>
              <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden border border-zinc-200 shadow-soft surface-sand">
                {shouldRenderVideo ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<video src="${data.video}" autoplay loop muted playsinline preload="metadata" ${poster ? `poster="${poster}"` : ""} class="w-full h-full ${videoFitClass}" aria-label="${data.videoAlt || data.heading || 'Hero overview video'}"></video>`
                    }}
                    className={`w-full h-full ${videoFitClass}`}
                  />
                ) : posterImage ? (
                  <Image
                    src={posterImage}
                    alt={visualAlt}
                    fill
                    className={imageFitClass}
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : null}
              </div>
            </Tilt3D>
          ) : shouldRenderVideo ? (
            <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden border border-zinc-200 shadow-soft surface-sand">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<video src="${data.video}" autoplay loop muted playsinline preload="metadata" ${poster ? `poster="${poster}"` : ""} class="w-full h-full ${videoFitClass}" aria-label="${data.videoAlt || data.heading || 'Hero overview video'}"></video>`
                }}
                className={`w-full h-full ${videoFitClass}`}
              />
            </div>
          ) : posterImage ? (
            <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden border border-zinc-200 shadow-soft surface-sand">
              <Image
                src={posterImage}
                alt={visualAlt}
                fill
                className={imageFitClass}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          ) : null}
        </div>}
      </div>
    </section>
  );
}
