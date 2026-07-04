import React from 'react';
import Link from 'next/link';
import { CareerRole } from '@/lib/content/careers';

export function CareerRoleCard({ role }: { role: CareerRole }) {
 return (
 <Link 
 href={`/careers/${role.slug}`}
 className="group block rounded-2xl border border-aroneu-neutral-200 p-6 transition-all duration-200 hover:-translate-y-px hover:border-aroneu-neutral-300 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aroneu-neutral-900"
 >
 <div className="flex flex-col gap-4">
 <div>
 <h3 className="text-h3 text-aroneu-neutral-900 group-hover:text-aroneu-core-600 transition-colors">
 {role.title}
 </h3>
 <div className="mt-2 flex flex-wrap gap-2">
 {role.location && (
 <span className="text-label text-aroneu-neutral-500">{role.location}</span>
 )}
 {role.workingModel && (
 <>
 <span className="text-aroneu-neutral-300">•</span>
 <span className="text-label text-aroneu-neutral-500">{role.workingModel}</span>
 </>
 )}
 {role.capabilityArea && (
 <>
 <span className="text-aroneu-neutral-300">•</span>
 <span className="text-label text-aroneu-neutral-500">{role.capabilityArea}</span>
 </>
 )}
 </div>
 </div>
 <div className="mt-4 flex items-center text-label font-medium text-aroneu-core-600">
 View role
 <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"fill="none"viewBox="0 0 24 24"stroke="currentColor"strokeWidth={2}>
 <path strokeLinecap="round"strokeLinejoin="round"d="M9 5l7 7-7 7"/>
 </svg>
 </div>
 </div>
 </Link>
 );
}
