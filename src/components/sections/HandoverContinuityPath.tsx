import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function HandoverContinuityPath({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const typedData = data as any;

  return (
    <section className="section-aroneu py-24 bg-white dark:bg-black">
      <div className="container-aroneu max-w-4xl mx-auto text-center">
        {typedData.heading && (
          <h2 className="heading-aroneu mb-6">{typedData.heading}</h2>
        )}
        {typedData.body && (
          <p className="body-aroneu max-w-2xl mx-auto mb-16 text-zinc-600 dark:text-zinc-400">
            {typedData.body}
          </p>
        )}

        {typedData.features && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {typedData.features.map((feature: any, idx: number) => (
              <div key={idx} className="relative">
                {idx !== typedData.features.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-full h-[1px] bg-zinc-200 dark:bg-zinc-800" />
                )}
                <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6 relative z-10 font-medium text-lg border border-zinc-200 dark:border-zinc-700">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.heading}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
