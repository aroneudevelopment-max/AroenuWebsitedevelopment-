import React from "react";
import { SectionContent } from "@/lib/content/types";
import Image from "next/image";

export function ContactWhatToInclude({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu surface-sand border-y border-zinc-200">
      <div className="container-aroneu grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          {data.label && (
            <span className="label-aroneu mb-4 text-primary-600 block">
              {data.label}
            </span>
          )}
          {data.heading && <h2 className="text-h2 mb-6 text-ink">{data.heading}</h2>}
          {data.body && <p className="text-body opacity-80 mb-8 max-w-lg">{data.body as string}</p>}

          {data.items && data.items.length > 0 && (
            <ul className="space-y-4">
              {data.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-4 mt-0.5"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-primary-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-body opacity-80">{item as string}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[520px] rounded-3xl overflow-hidden border border-zinc-200 surface-paper">
          <Image
            src="/images/aroneu/senior-professionals-general.jpeg"
            alt="Senior professionals reviewing governance and operating rhythm"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
