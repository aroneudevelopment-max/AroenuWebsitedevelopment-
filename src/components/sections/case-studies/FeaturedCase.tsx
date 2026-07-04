import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function FeaturedCase({ data }: { data: any }) {
  if (!data) return null;
  
  const card = data.items?.[0];
  
  return (
    <section className="py-24 bg-white dark:bg-black border-y border-zinc-200 dark:border-zinc-800">
      <div className="container-aroneu">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
          <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
            <span className="text-sm font-medium tracking-wide uppercase text-zinc-500 dark:text-zinc-400">
              {data.label}
            </span>
            <h2 className="text-h2">
              {data.heading}
            </h2>
            <p className="text-body text-zinc-600 dark:text-zinc-300">
              {data.body}
            </p>
          </div>
          
          {card && (
            <div className="w-full md:w-1/2">
              <Link href={card.href} className="group block rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg">
                {card.image && (
                  <div className="relative w-full aspect-video bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                    <Image 
                      src={card.image.src} 
                      alt={card.image.alt} 
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-8 flex flex-col space-y-4">
                  <h3 className="text-h4 group-hover:text-black dark:group-hover:text-white transition-colors">{card.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
                    {card.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {card.metadata?.map((tag: string, i: number) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 flex items-center text-sm font-medium text-black dark:text-white">
                    {card.cta} <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
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
