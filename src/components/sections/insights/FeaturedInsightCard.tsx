import React from "react";
import Link from "next/link";
export function FeaturedInsightCard({ data }: { data: any }) {
  if (!data) return null;

  // The CTA must safely link to /contact if the article is not published.
  // We do not link to non-existent /insights/[slug] pages.
  const href = data.isPublished ? data.href : "/contact";
  const isPending = !data.isPublished;

  return (
    <section className="py-24 border-y border-zinc-200 surface-paper">
      <div className="container-aroneu">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
          
            <span className="text-label uppercase tracking-widest opacity-70">
              {data.label}
            </span>
            <h2 className="text-h2 text-ink">{data.heading}</h2>
            <p className="text-body opacity-80">{data.body}</p>
          

          
            <Link
              href={href}
              className="group min-w-0 block rounded-2xl overflow-hidden border border-zinc-200 surface-sand transition-all hover:border-zinc-300 hover:shadow-soft"
              aria-label={
                isPending
                  ? `Discuss the suggested topic: ${data.heading}`
                  : `Read the insight: ${data.heading}`
              }
            >
              <div className="relative w-full aspect-[4/3] bg-zinc-100 overflow-hidden flex flex-col justify-center items-center text-center p-8">
                {data.image && (
                  <img
                    src={data.image}
                    alt={data.heading}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                {/* Gradient overlay to make text readable if image exists */}
                {data.image && (
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                )}
                <div className="relative z-10 flex flex-col items-center">
                  <h3 className={`text-h3 transition-opacity group-hover:opacity-80 ${data.image ? 'text-white' : 'text-ink'}`}>
                    {data.heading}
                  </h3>
                  {/* Accent line — brand gradient signature, restrained */}
                  <div
                    aria-hidden="true"
                    className={`w-12 h-1 mt-6 mb-2 ${data.image ? 'bg-white' : 'surface-ink'}`}
                  />
                </div>
              </div>
              <div className="p-8 flex flex-col space-y-4 surface-paper">
                <div className="flex flex-wrap gap-2">
                  {data.metadata?.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md bg-zinc-100 opacity-70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-2 inline-flex items-center gap-1 text-sm font-medium text-ink group-hover:opacity-80 transition-opacity">
                  {isPending ? "Discuss this topic" : data.cta}{" "}
                  <span
                    aria-hidden="true"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    &rarr;
                  </span>
                </div>
                {isPending && (
                  <p className="text-caption opacity-60">
                    Suggested editorial topic — not a published article.
                  </p>
                )}
              </div>
            </Link>
          
        </div>
      </div>
    </section>
  );
}
