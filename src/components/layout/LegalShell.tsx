import React from "react";
import JsonLd from "@/components/seo/JsonLd";
import { webPageSchema } from "@/lib/schema";

export function LegalShell({
  eyebrow,
  heading,
  updatedNote,
  intro,
  path,
  children,
}: {
  eyebrow?: string;
  heading: string;
  updatedNote: string;
  intro?: React.ReactNode;
  path: string;
  children: React.ReactNode;
}) {
  return (
    <main className="legal-page flex min-h-screen flex-col w-full surface-paper">
      <JsonLd
        data={webPageSchema({
          path,
          name: heading,
          description:
            typeof intro === "string" ? intro : "Legal information for Aroneu.",
        })}
      />

      <section className="section-aroneu border-b border-zinc-200/80">
        <div className="container-aroneu">
          <div className="legal-hero mx-auto max-w-[54rem]">
            {eyebrow && (
              <span className="legal-kicker text-label block text-slate">
                {eyebrow}
              </span>
            )}
            <h1 className="text-h1 mb-4 text-ink">{heading}</h1>
            <p className="text-caption text-slate">{updatedNote}</p>
            {intro && <div className="legal-intro mt-8 text-body text-slate">{intro}</div>}
          </div>
        </div>
      </section>

      <section className="section-aroneu pt-10 lg:pt-14">
        <div className="container-aroneu">
          <article className="legal-document mx-auto max-w-[54rem]">{children}</article>
        </div>
      </section>
    </main>
  );
}
