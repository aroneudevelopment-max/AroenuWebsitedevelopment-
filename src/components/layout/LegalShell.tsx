import React from "react";

/**
 * LegalShell
 * - Used for /privacy, /imprint, /terms, /cookie-policy.
 * - Renders a single restrained "pending client legal copy" page.
 * - The brief forbids inventing legal text; this shell makes the pending
 *   state explicit and visible.
 */
export function LegalShell({
  eyebrow,
  heading,
  updatedNote,
}: {
  eyebrow?: string;
  heading?: string;
  updatedNote?: string;
}) {
  return (
    <main className="flex min-h-screen flex-col w-full surface-paper">
      <section className="section-aroneu">
        <div className="container-aroneu max-w-3xl mx-auto">
          {eyebrow && (
            <span className="text-label uppercase tracking-widest block mb-4 text-zinc-500">
              {eyebrow}
            </span>
          )}
          {heading && <h1 className="text-h1 mb-6">{heading}</h1>}
          {updatedNote && (
            <p className="text-body text-zinc-600 mb-8">{updatedNote}</p>
          )}

          <div className="surface-sand border border-zinc-200 rounded-2xl p-8 mb-8">
            <p className="text-label uppercase tracking-widest text-zinc-500 mb-3">
              Status
            </p>
            <p className="text-zinc-700">
              Pending client legal copy. This shell renders the page header
              and a clear status block. The final legal wording will be added
              by Aroneu once approved and signed off by client legal.
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
      </section>
    </main>
  );
}
