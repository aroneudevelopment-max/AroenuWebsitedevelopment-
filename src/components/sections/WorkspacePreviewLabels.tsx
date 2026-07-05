import React from "react";
import Image from "next/image";
import { SectionContent } from "@/lib/content/types";
import { Tilt3D } from "@/components/ui/Tilt3D";

export function WorkspacePreviewLabels({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const panelData = data as any;

  return (
    <section className="section-aroneu">
      <div className="container-aroneu max-w-5xl mx-auto">
        <Tilt3D>
          <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-200 shadow-soft surface-sand">
            {panelData.image ? (
              <div className="relative aspect-[16/10] md:aspect-[16/9]">
                <Image
                  src={panelData.image}
                  alt={panelData.imageAlt || ""}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 960px"
                />
              </div>
            ) : (
              <div className="px-6 py-10 md:px-10 md:py-12">
                <div className="flex flex-wrap gap-3 justify-center">
                  {panelData.labels?.map((label: string) => (
                    <span
                      key={label}
                      className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.18em] border border-zinc-200 surface-paper text-ink"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Tilt3D>
      </div>
    </section>
  );
}
