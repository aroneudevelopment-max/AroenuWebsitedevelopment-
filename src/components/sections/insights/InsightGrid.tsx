"use client";

import React, { useState } from "react";
import Link from "next/link";
import { InsightArticle } from "@/lib/content/insights";

export function InsightGrid({
  filterData,
  articles,
  suggestedThemesData,
  emptyStateData,
}: {
  filterData: any;
  articles: InsightArticle[];
  suggestedThemesData: any;
  emptyStateData: any;
}) {
  const [activeFilter, setActiveFilter] = useState("All");

  if (!filterData) return null;

  const filters: string[] = filterData.items || [];

  const filteredArticles =
    activeFilter === "All"
      ? articles
      : articles.filter((a) => a.category === activeFilter);

  const hasPublishedArticles = articles.some((a) => a.isPublished);

  return (
    <section className="py-24 surface-sand border-b border-zinc-200">
      <div className="container-aroneu">
        {/* Filters */}
        <div className="mb-12 flex flex-col gap-6">
          <div className="flex items-baseline gap-3">
            <span className="text-label uppercase tracking-widest opacity-70">
              {filterData.label}:
            </span>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Topic filters"
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

        {/* Suggested themes (rendered when there are no published articles) */}
        {!hasPublishedArticles && suggestedThemesData && (
          <div className="mt-4">
            <div className="mb-8">
              <h3 className="text-h3">Suggested themes</h3>
              <p className="text-caption opacity-70 mt-2">
                These topics are planned editorial directions, not published
                articles. They show what Aroneu is preparing to publish.
              </p>
            </div>

            {/* Burhan decision 2026-07-05: 2-col desktop, 1-col mobile.
                min-w-0 ensures the card can shrink without forcing text
                vertical-wrapping. */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {suggestedThemesData.themes?.map((theme: any, i: number) => (
                <div
                  key={i}
                  className="min-w-0 flex flex-col border border-zinc-200 rounded-2xl surface-paper p-6 md:p-8 transition-colors hover:border-zinc-300"
                >
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md bg-zinc-100 opacity-70 self-start mb-5">
                    Suggested topic
                  </span>
                  <h4 className="text-lg md:text-xl font-semibold mb-3 text-ink">
                    {theme.title}
                  </h4>
                  <p className="text-sm opacity-80 leading-relaxed mb-6 flex-grow">
                    {theme.excerpt}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-sm font-medium text-ink hover:opacity-80 transition-opacity"
                  >
                    Discuss this topic <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Article grid (rendered when there are published articles) */}
        {hasPublishedArticles && filteredArticles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles
              .filter((a) => a.isPublished)
              .map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group min-w-0 flex flex-col border border-zinc-200 rounded-2xl overflow-hidden surface-paper hover:border-zinc-300 hover:shadow-soft transition-all h-full"
                >
                  <div className="relative w-full aspect-video bg-zinc-100 overflow-hidden p-6 flex justify-center items-center text-center">
                    {article.image && (
                      <img
                        src={article.image}
                        alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    {article.image && (
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                    )}
                    <h3 className={`text-lg font-medium transition-opacity group-hover:opacity-90 z-10 relative ${article.image ? 'text-white' : 'text-ink'}`}>
                      {article.title}
                    </h3>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md bg-zinc-100 opacity-70">
                        {article.category}
                      </span>
                      <span className="text-caption opacity-70">
                        {article.readingTime}
                      </span>
                    </div>
                    <p className="text-sm opacity-80 mb-6 flex-grow">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-ink group-hover:opacity-80 transition-opacity">
                      Read insight{" "}
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
        )}

        {/* Empty state when articles are published but none match the filter */}
        {hasPublishedArticles && filteredArticles.length === 0 && (
          <div className="py-16 text-center flex flex-col items-center max-w-lg mx-auto">
            <h3 className="text-h3 mb-4">
              {emptyStateData?.heading || "No insights found."}
            </h3>
            <p className="text-body opacity-80 mb-8">
              {emptyStateData?.body ||
                "Try another topic or check back as new briefs are published."}
            </p>
            <button
              onClick={() => setActiveFilter("All")}
              className="px-6 py-3 rounded-full text-sm font-medium bg-ink text-paper hover:opacity-90 transition-opacity"
            >
              {emptyStateData?.primaryCTA?.label || "Clear filters"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
