import React from "react";
import { SectionContent } from "@/lib/content/types";

export function ComparisonTable({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu surface-sand border-y border-zinc-200">
      <div className="container-aroneu max-w-5xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {data.eyebrow && (
            <span className="text-label uppercase tracking-widest block mb-4 opacity-70">
              {data.eyebrow}
            </span>
          )}
          {data.heading && <h2 className="text-h2 mb-6">{data.heading}</h2>}
          {data.body && (
            <p className="text-body opacity-80">{data.body}</p>
          )}
        </div>

        <div className="w-full overflow-x-auto rounded-xl border border-zinc-200 shadow-sm surface-paper">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-zinc-200 surface-sand">
                <th className="p-5 font-semibold text-sm">Model</th>
                <th className="p-5 font-semibold text-sm">Best for</th>
                <th className="p-5 font-semibold text-sm">Governance level</th>
                <th className="p-5 font-semibold text-sm">Aroneu view</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {data.items?.map((item: any, i: number) => {
                const isAroneu = String(item.model).toLowerCase().includes(
                  "aroneu"
                );
                return (
                  <tr
                    key={i}
                    className={`transition-colors hover:bg-zinc-50 ${
                      isAroneu
                        ? "bg-zinc-50 border-l-4 border-l-ink"
                        : ""
                    }`}
                  >
                    <td className="p-5 text-sm font-medium">{item.model}</td>
                    <td className="p-5 text-sm opacity-80">
                      {item.bestFor}
                    </td>
                    <td className="p-5 text-sm opacity-80">
                      {item.governance}
                    </td>
                    <td className="p-5 text-sm opacity-80 italic">
                      {item.aroneuView}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
