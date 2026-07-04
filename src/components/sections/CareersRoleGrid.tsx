import React from 'react';
import { CareerRoleCard } from './CareerRoleCard';
import { CareersEmptyState } from './CareersEmptyState';
import { CareerRole } from '@/lib/content/careers';

export interface CareersRoleGridProps {
 label: string;
 heading: string;
 body: string;
 roles: CareerRole[];
 emptyState: {
 heading: string;
 body: string;
 cta: { label: string; href: string };
 };
}

export function CareersRoleGrid({ label, heading, body, roles, emptyState }: CareersRoleGridProps) {
 const publicRoles = roles.filter(role => role.isApprovedForPublic);

 return (
 <section id="open-roles"className="section-aroneu">
 <div className="container-aroneu">
 <div className="mb-12 max-w-3xl">
 <span className="mb-4 block text-label uppercase tracking-wider text-aroneu-neutral-500">
 {label}
 </span>
 <h2 className="text-h2 text-aroneu-neutral-900">{heading}</h2>
 {publicRoles.length > 0 && (
 <p className="mt-4 text-body text-aroneu-neutral-600 max-w-prose">{body}</p>
 )}
 </div>

 {publicRoles.length > 0 ? (
 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {publicRoles.map(role => (
 <CareerRoleCard key={role.slug} role={role} />
 ))}
 </div>
 ) : (
 <CareersEmptyState {...emptyState} />
 )}
 </div>
 </section>
 );
}
