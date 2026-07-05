import React from "react";
import Image from "next/image";
import { SectionContent } from "@/lib/content/types";

export function ProcessOverview({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const typedData = data as any;

  return (
    <section className="section-aroneu border-y border-zinc-200">
      <div className="container-aroneu max-w-5xl mx-auto flex flex-col items-center">
        {typedData.label && (
          <span className="label-aroneu mb-6 text-center text-primary-600">
            {typedData.label}
          </span>
        )}
        {typedData.heading && (
          <h2 className="heading-aroneu text-center mb-8">{typedData.heading}</h2>
        )}
        {typedData.body && (
          <p className="body-aroneu text-center max-w-3xl mb-16">{typedData.body}</p>
        )}

        {typedData.image && (
          <div className="w-full flex justify-center mb-16">
            <div className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-2xl shadow-sm border border-zinc-200 overflow-hidden bg-white">
              <Image
                src={typedData.image}
                alt={
                  typedData.imageAlt ||
                  "Three-step process showing Discover, Build, and Run for a governed India team"
                }
                fill
                className="object-contain p-4 md:p-6"
                sizes="(max-width: 1024px) 100vw, 960px"
              />
            </div>
          </div>
        )}

        {typedData.steps && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {typedData.steps.map((step: any, idx: number) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 surface-sand rounded-2xl border border-zinc-200"
              >
                <h3 className="text-xl font-medium mb-3">{step.label}</h3>
                <p className="opacity-80">{step.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
