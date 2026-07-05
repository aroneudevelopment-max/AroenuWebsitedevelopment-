import React from "react";
import Image from "next/image";
import { SectionContent } from "@/lib/content/types";
import { Tilt3D } from "@/components/ui/Tilt3D";

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
}: {
  data?: SectionContent;
  tone?: Tone;
  withTilt3D?: boolean;
}) {
  if (!data) return null;
  const isInk = tone === "ink";

  const headingClass = isInk ? "text-paper" : "text-ink";
  const subcopyClass = isInk ? "text-zinc-300" : "text-zinc-700";
  const eyebrowClass = isInk ? "text-zinc-400" : "text-primary-600";
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
      <div className="container-aroneu grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
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
            <p className={`text-body mb-8 max-w-xl ${subcopyClass}`}>
              {data.subcopy}
            </p>
          )}

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
        

        
          {withTilt3D ? (
            <Tilt3D>
              {data.video ? (
                <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden border border-zinc-200 shadow-soft surface-sand">
                  <video
                    src={data.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={data.image || undefined}
                    className="w-full h-full object-cover"
                    aria-label={data.heading || "Hero overview video"}
                  />
                </div>
              ) : data.image ? (
                <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden border border-zinc-200 shadow-soft surface-sand">
                  <Image
                    src={data.image}
                    alt={data.heading || "Hero visual"}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ) : (
                <div className="w-full aspect-[4/3] lg:aspect-[5/4] rounded-2xl surface-sand border border-zinc-200" />
              )}
            </Tilt3D>
          ) : data.video ? (
            <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden border border-zinc-200 shadow-soft surface-sand">
              <video
                src={data.video}
                autoPlay
                loop
                muted
                playsInline
                poster={data.image || undefined}
                className="w-full h-full object-cover"
                aria-label={data.heading || "Hero overview video"}
              />
            </div>
          ) : data.image ? (
            <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden border border-zinc-200 shadow-soft surface-sand">
              <Image
                src={data.image}
                alt={data.heading || "Hero visual"}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          ) : (
            <div className="w-full aspect-[4/3] lg:aspect-[5/4] rounded-2xl surface-sand border border-zinc-200" />
          )}

          {data.video && (
            <div className="mt-4 flex items-center gap-2 text-caption text-zinc-500">
              <span aria-hidden="true">&#9654;</span>
              <span>Autoplay. Muted. Representative overview.</span>
            </div>
          )}
        
      </div>
    </section>
  );
}
