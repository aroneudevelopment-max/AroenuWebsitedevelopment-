"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CaseStudy } from "@/lib/content/case-studies";

export function CaseStudyGrid({
  data,
  caseStudies,
  emptyState,
}: {
  data: any;
  caseStudies: CaseStudy[];
  emptyState?: any;
}) {
  const [activeFilter, setActiveFilter] = useState("All");

  if (!data) return null;

  const filters: string[] = data.items || [];

  const filteredCases =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter(
          (c) =>
            c.capabilities.includes(activeFilter) ||
            c.industry === activeFilter ||
            (activeFilter === "Engineering" &&
              c.capabilities.includes("Engineering"))
        );

  return (
    <section className="py-24 surface-sand border-b border-zinc-200">
      <div className="container-aroneu">
        {/* Filters */}
        <div className="mb-12 flex flex-col gap-6">
          <div className="flex items-baseline gap-3">
            <span className="text-label uppercase tracking-widest opacity-70">
              {data.label}:
            </span>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Case study filters"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  activeFilter === filter
                    ? "bg-ink text-paper font-medium"
                    : "opacity-80 border border-zinc-200 hover:border-zinc-300 surface-paper"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Helper text */}
        {data.subcopy && (
          <p className="text-sm opacity-70 mb-8">{data.subcopy}</p>
        )}

        {/* Grid or empty state */}
        {filteredCases.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map((caseStudy) => (
              <Link
                key={caseStudy.slug}
                href={`/case-studies/${caseStudy.slug}`}
                className="group min-w-0 flex flex-col border border-zinc-200 rounded-2xl surface-paper overflow-hidden hover:border-zinc-300 hover:shadow-soft transition-all h-full"
              >
                <div className="p-6 md:p-8 flex flex-col h-full">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md bg-zinc-100 opacity-70">
                      {caseStudy.capabilities.includes("Capability Teams") &&
                      caseStudy.capabilities.includes("AI Workspace")
                        ? "Capability Teams / AI Workspace"
                        : caseStudy.capabilities[0]}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md bg-zinc-100 opacity-70">
                      {caseStudy.industry}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium tracking-tight mb-3 text-ink group-hover:opacity-80 transition-opacity">
                    {caseStudy.title}
                  </h3>

                  <p className="text-sm opacity-80 mb-6 flex-grow">
                    {caseStudy.excerpt}
                  </p>

                  <div className="py-4 border-t border-zinc-200 mb-6">
                    <p className="text-caption uppercase tracking-widest opacity-70 mb-1">
                      Proof point
                    </p>
                    <p className="text-sm opacity-80">
                      {caseStudy.proofPoint}
                    </p>
                  </div>

                  <div className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-ink group-hover:opacity-80 transition-opacity">
                    Read the case study{" "}
                    <span
                      aria-hidden="true"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center flex flex-col items-center max-w-lg mx-auto surface-paper border border-zinc-200 rounded-2xl p-8">
            <h3 className="text-h3 mb-4">
              {emptyState?.heading || "Case studies are being prepared."}
            </h3>
            <p className="text-body opacity-80 mb-8">
              {emptyState?.body ||
                "Approved case studies will appear here once client names, proof points, and public wording are cleared."}
            </p>
            <Link
              href={emptyState?.primaryCTA?.href || "/contact"}
              className="px-6 py-3 rounded-full text-sm font-medium bg-ink text-paper hover:opacity-90 transition-opacity"
            >
              {emptyState?.primaryCTA?.label || "Book a call"}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
