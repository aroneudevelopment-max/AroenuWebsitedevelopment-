import React from "react";
import JsonLd from "@/components/seo/JsonLd";
import { webPageSchema } from "@/lib/schema";

export function LegalShell({
  eyebrow,
  heading,
  updatedNote,
  path,
}: {
  eyebrow?: string;
  heading?: string;
  updatedNote?: string;
  path: string;
}) {
  return (
    <main className="legal-page flex min-h-screen flex-col w-full surface-paper">
      <JsonLd
        data={webPageSchema({
          path,
          name: heading || "Legal",
          description: updatedNote || "Legal information for Aroneu.",
        })}
      />

      <section className="section-aroneu border-b border-zinc-200/80">
        <div className="container-aroneu">
          <div className="legal-hero mx-auto max-w-4xl">
            {eyebrow && (
              <span className="text-label uppercase tracking-widest block mb-5 text-zinc-500">
                {eyebrow}
              </span>
            )}
            {heading && <h1 className="text-h1 mb-6 text-ink">{heading}</h1>}
          </div>
        </div>
      </section>

      <section className="section-aroneu pt-10 lg:pt-14">
        <div className="container-aroneu">
          <div className="legal-document mx-auto max-w-4xl">
            {updatedNote && (
              <p className="legal-intro text-body text-zinc-700 mb-8">
                {updatedNote}
              </p>
            )}

            <div className="surface-sand border border-zinc-200 rounded-3xl p-7 md:p-9 mb-8">
              <p className="text-label uppercase tracking-widest text-zinc-500 mb-3">
                Status
              </p>
              <p className="text-body text-zinc-700">
                This page is a legal-content shell. Approved legal wording will
                appear here when it is ready for public release.
              </p>
            </div>

            <p className="text-caption text-zinc-500">
              Need this for review?{" "}
              <a
                href="/contact"
                className="text-ink underline underline-offset-4 hover:text-zinc-500"
              >
                Contact Aroneu
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
