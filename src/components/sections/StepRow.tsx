import React from "react";
import { SectionContent } from "@/lib/content/types";
/**
 * StepRow
 * - 1/2/3 light-weight numbered cards.
 */
export function StepRow({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const items = (data.items as any[]) || [];

  return (
    <section className="section-aroneu surface-paper">
      <div className="container-aroneu max-w-3xl mx-auto text-center mb-16">
        {data.eyebrow && (
          <span className="text-label uppercase tracking-widest block mb-4 text-primary-600">
            {data.eyebrow}
          </span>
        )}
        {data.heading && <h2 className="text-h2 mb-6 text-ink">{data.heading}</h2>}
        {data.body && (
          <p className="text-body opacity-80">{data.body}</p>
        )}
      </div>

      <div className="container-aroneu grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-start p-6 border border-zinc-200 rounded-2xl surface-sand"
          >
            <div className="w-10 h-10 rounded-full border border-zinc-300 text-ink flex items-center justify-center font-mono text-sm mb-5 surface-paper">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-ink">
              {item.title || item.label}
            </h3>
            <p className="opacity-80 text-sm leading-relaxed">
              {item.description || item.body}
            </p>
          </div>
        ))}
      </div>

      {data.ctas && data.ctas.length > 0 && (
        <div className="flex justify-center">
          <a
            href={data.ctas[0].href}
            className="inline-block px-8 py-4 rounded-full text-base font-medium border border-zinc-300 text-ink hover:bg-zinc-100 transition-colors"
          >
            {data.ctas[0].label}
          </a>
        </div>
      )}
    </section>
  );
}
