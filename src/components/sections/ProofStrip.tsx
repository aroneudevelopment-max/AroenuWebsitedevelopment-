import React from "react";
import { SectionContent } from "@/lib/content/types";

export function ProofStrip({ data }: { data?: SectionContent }) {
  if (!data) return null;

  const items = (data.items as any[]) ?? [];
  const pending = (data as any).pendingProof === true;

  return (
    <section className="section-aroneu border-y border-zinc-200 surface-sand">
      <div className="container-aroneu">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <span
                className={`text-4xl font-mono mb-2 ${
                  pending ? "text-zinc-300" : "text-ink"
                }`}
                aria-hidden={pending ? "true" : undefined}
              >
                {pending ? "— —" : item.value}
              </span>
              <span className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        {pending && (
          <p className="mt-8 text-center text-caption text-zinc-500 max-w-2xl mx-auto">
            Selected proof figures are pending verification in the Aroneu
            governance ledger. Final values will appear once internal approval
            is complete.
          </p>
        )}
      </div>
    </section>
  );
}
