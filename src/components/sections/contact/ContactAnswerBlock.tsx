import React from "react";
import { SectionContent } from "@/lib/content/types";

/**
 * ContactAnswerBlock
 * - Restrained sand-surface answer block under the hero.
 */
export function ContactAnswerBlock({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu surface-sand border-b border-zinc-200">
      <div className="container-aroneu max-w-3xl mx-auto text-center">
        {data.body && (
          <p className="text-body text-zinc-700 mx-auto max-w-2xl">
            {data.body as string}
          </p>
        )}
      </div>
    </section>
  );
}
