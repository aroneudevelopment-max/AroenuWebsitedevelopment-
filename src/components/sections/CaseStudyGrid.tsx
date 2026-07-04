'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CaseStudy } from '@/lib/content/case-studies';

export function CaseStudyGrid({ data, caseStudies, emptyState }: { data: any, caseStudies: CaseStudy[], emptyState?: any }) {
  const [activeFilter, setActiveFilter] = useState('All');
  
  if (!data) return null;
  
  const filters = data.items || [];
  
  const filteredCases = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(c => 
        c.capabilities.includes(activeFilter) || 
        c.industry === activeFilter ||
        (activeFilter === 'Engineering' && c.capabilities.includes('Engineering'))
      );

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="container-aroneu">
        {/* Filters */}
        <div className="mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center space-x-3 text-sm text-zinc-500 dark:text-zinc-400">
            <span className="font-medium uppercase tracking-wide">{data.label}:</span>
          </div>
          
          <div className="flex flex-wrap gap-2 md:justify-end">
            {filters.map((filter: string) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  activeFilter === filter 
                    ? 'bg-black text-white dark:bg-white dark:text-black font-medium' 
                    : 'bg-white dark:bg-black text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        {/* Helper text */}
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">{data.subcopy}</p>

        {/* Grid */}
        {filteredCases.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map(caseStudy => (
              <Link 
                key={caseStudy.slug} 
                href={`/case-studies/${caseStudy.slug}`}
                className="group flex flex-col bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700 transition-all h-full"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
                      {caseStudy.capabilities.includes('Capability Teams') && caseStudy.capabilities.includes('AI Workspace') 
                        ? 'Capability Teams / AI Workspace' 
                        : caseStudy.capabilities[0]}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
                      {caseStudy.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-medium tracking-tight text-black dark:text-white mb-3 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                    {caseStudy.title}
                  </h3>
                  
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 flex-grow">
                    {caseStudy.excerpt}
                  </p>
                  
                  <div className="py-4 border-t border-zinc-100 dark:border-zinc-800 mb-6">
                    <p className="text-sm font-medium text-black dark:text-white">Proof point:</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{caseStudy.proofPoint}</p>
                  </div>
                  
                  <div className="mt-auto flex items-center text-sm font-medium text-black dark:text-white">
                    Read the case study <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center flex flex-col items-center max-w-lg mx-auto">
             <h3 className="text-h3 mb-4">{emptyState?.heading || "Case studies are being prepared."}</h3>
             <p className="text-body text-zinc-600 dark:text-zinc-400 mb-8">
               {emptyState?.body || "Approved case studies will appear here once client names, proof points, and public wording are cleared."}
             </p>
             <Link href={emptyState?.primaryCTA?.href || "/contact"} className="btn-primary">
               {emptyState?.primaryCTA?.label || "Book a call"}
             </Link>
          </div>
        )}
      </div>
    </section>
  );
}
