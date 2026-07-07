import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionContent } from "@/lib/content/types";

type FeaturedCaseCard = {
  href: string;
  title: string;
  excerpt: string;
  cta: string;
  image?: {
    src: string;
    alt: string;
  };
  metadata?: string[];
};

export function FeaturedCase({ data }: { data?: SectionContent }) {
  if (!data) return null;

  const card = data.items?.[0] as FeaturedCaseCard | undefined;

  return (
    <section className="py-24 border-y border-zinc-200">
      <div className="container-aroneu">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
          <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
            <span className="text-sm font-medium tracking-wide uppercase opacity-70">
              {data.label}
            </span>
            <h2 className="text-h2">{data.heading}</h2>
            <p className="text-body opacity-80">{data.body}</p>
          </div>

          {card && (
            <div className="w-full md:w-1/2">
              <Link
                href={card.href}
                className="group block rounded-[2rem] overflow-hidden border border-zinc-200 surface-sand transition-all hover:border-zinc-300 hover:shadow-soft"
              >
                {card.image && (
                  <div className="relative w-full aspect-[16/10] bg-zinc-100 overflow-hidden">
                    <Image
                      src={card.image.src}
                      alt={card.image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-8 flex flex-col space-y-4">
                  <h3 className="text-h4 transition-colors">{card.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed">{card.excerpt}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {card.metadata?.map((tag: string, i: number) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-md bg-zinc-200 opacity-80">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 flex items-center text-sm font-medium">
                    {card.cta}{" "}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
