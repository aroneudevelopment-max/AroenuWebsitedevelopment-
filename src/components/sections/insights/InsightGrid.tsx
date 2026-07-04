'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { InsightArticle } from '@/lib/content/insights';

export function InsightGrid({ 
 filterData, 
 articles, 
 suggestedThemesData,
 emptyStateData 
}: { 
 filterData: any, 
 articles: InsightArticle[], 
 suggestedThemesData: any,
 emptyStateData: any
}) {
 const [activeFilter, setActiveFilter] = useState('All');
 
 if (!filterData) return null;
 
 const filters = filterData.items || [];
 
 const filteredArticles = activeFilter === 'All' 
 ? articles 
 : articles.filter(a => a.category === activeFilter);

 const hasPublishedArticles = articles.some(a => a.isPublished);

 return (
 <section className="py-24 surface-sand border-b border-zinc-200">
 <div className="container-aroneu">
 {/* Filters */}
 <div className="mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
 <div className="flex items-center space-x-3 text-sm text-zinc-500">
 <span className="font-medium uppercase tracking-wide">{filterData.label}:</span>
 </div>
 
 <div className="flex flex-wrap gap-2 md:justify-end"role="group"aria-label="Topic filters">
 {filters.map((filter: string) => (
 <button
 key={filter}
 onClick={() => setActiveFilter(filter)}
 aria-pressed={activeFilter === filter}
 className={`px-4 py-2 text-sm rounded-full transition-colors ${
 activeFilter === filter 
 ? 'surface-ink text-white font-medium' 
 : ' text-zinc-600 border border-zinc-200 hover:border-zinc-300 :border-zinc-700'
 }`}
 >
 {filter}
 </button>
 ))}
 </div>
 </div>
 
 {/* If no published articles exist at all in the whole list, show Suggested Themes */}
 {!hasPublishedArticles && suggestedThemesData && (
 <div className="mt-8">
 <h3 className="text-xl font-medium mb-8">Suggested themes</h3>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {suggestedThemesData.themes?.map((theme: any, i: number) => (
 <div 
 key={i} 
 className="flex flex-col border border-zinc-200 rounded-xl overflow-hidden p-8"
 >
 <span className="text-xs font-mono uppercase px-2 py-1 rounded-md bg-zinc-100 text-zinc-600 self-start mb-4">
 Suggested topic
 </span>
 <h4 className="text-lg font-medium mb-3">{theme.title}</h4>
 <p className="text-sm text-zinc-600 mb-6 flex-grow">{theme.excerpt}</p>
 <Link href="/contact"className="text-sm font-medium hover:text-zinc-600 :text-zinc-300 transition-colors">
 Discuss this topic →
 </Link>
 </div>
 ))}
 </div>
 </div>
 )}

 {/* Article Grid if we have published articles and results for the filter */}
 {hasPublishedArticles && filteredArticles.length > 0 && (
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {filteredArticles.filter(a => a.isPublished).map(article => (
 <Link 
 key={article.slug} 
 href={`/insights/${article.slug}`}
 className="group flex flex-col border border-zinc-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-zinc-300 :border-zinc-700 transition-all h-full"
 >
 <div className="relative w-full aspect-video bg-zinc-100 overflow-hidden p-6 flex items-end">
 {/* Abstract editorial thumbnail style */}
 <h3 className="text-lg font-medium group-hover:text-zinc-700 :text-zinc-300 transition-colors z-10 relative">
 {article.title}
 </h3>
 </div>
 <div className="p-8 flex flex-col flex-grow">
 <div className="flex flex-wrap items-center gap-4 mb-4">
 <span className="text-xs font-mono uppercase px-2 py-1 rounded-md bg-zinc-100 text-zinc-600">
 {article.category}
 </span>
 <span className="text-xs text-zinc-500">{article.readingTime}</span>
 </div>
 <p className="text-sm text-zinc-600 mb-6 flex-grow">
 {article.excerpt}
 </p>
 <div className="mt-auto flex items-center text-sm font-medium">
 Read insight <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
 </div>
 </div>
 </Link>
 ))}
 </div>
 )}

 {/* Empty state if filtering yields no results, but we do have published articles */}
 {hasPublishedArticles && filteredArticles.length === 0 && (
 <div className="py-24 text-center flex flex-col items-center max-w-lg mx-auto">
 <h3 className="text-h3 mb-4">{emptyStateData?.heading ||"No insights found."}</h3>
 <p className="text-body text-zinc-600 mb-8">
 {emptyStateData?.body ||"Try another topic or check back as new briefs are published."}
 </p>
 <button onClick={() => setActiveFilter('All')} className="btn-primary">
 {emptyStateData?.primaryCTA?.label ||"Clear filters"}
 </button>
 </div>
 )}
 </div>
 </section>
 );
}
