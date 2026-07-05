import React from "react";
import Link from "next/link";
import Image from "next/image";

export function FeaturedInsightCard({ data }: { data: any }) {
  if (!data) return null;

  const href = data.isPublished ? data.href : "/contact";
  const isPending = !data.isPublished;

  return (
    <section className="py-24 border-y border-zinc-200 surface-paper">
      <div className="container-aroneu">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 lg:gap-24 items-start">
          <div className="max-w-xl">
            <span className="text-label uppercase tracking-widest opacity-70">
              {data.label}
            </span>
            <h2 className="text-h2 text-ink mt-4">{data.heading}</h2>
            <p className="text-body opacity-80 mt-6">{data.body}</p>
          </div>

          <div className="min-w-0">
            <Link
              href={href}
              className="group min-w-0 block rounded-[2rem] overflow-hidden border border-zinc-200 surface-sand transition-all hover:border-zinc-300 hover:shadow-soft"
              aria-label={
                isPending
                  ? `Discuss the suggested topic: ${data.heading}`
                  : `Read the insight: ${data.heading}`
              }
            >
              <div className="relative w-full aspect-[16/10] bg-zinc-100 overflow-hidden">
                {data.image && (
                  <Image
                    src={data.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                )}
              </div>
              <div className="p-8 md:p-10 flex flex-col space-y-5 surface-paper">
                <div className="flex flex-wrap gap-2">
                  {data.metadata?.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full bg-zinc-100 opacity-80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-h3 text-ink leading-tight">{data.heading}</h3>
                <p className="text-body opacity-80">{data.body}</p>
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
                    Suggested editorial topic - not a published article.
                  </p>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
