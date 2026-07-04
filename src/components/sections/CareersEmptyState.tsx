import React from 'react';
import Link from 'next/link';

interface CareersEmptyStateProps {
  heading: string;
  body: string;
  cta: { label: string; href: string };
}

export function CareersEmptyState({ heading, body, cta }: CareersEmptyStateProps) {
  return (
    <div className="rounded-2xl bg-aroneu-neutral-50 p-8 text-center sm:p-12">
      <h3 className="text-h3 text-aroneu-neutral-900">{heading}</h3>
      <p className="mt-4 text-body text-aroneu-neutral-600 max-w-prose mx-auto">{body}</p>
      <div className="mt-8">
        <Link 
          href={cta.href}
          className="inline-flex items-center rounded-full bg-aroneu-neutral-900 px-6 py-3 text-label text-white transition-colors hover:bg-aroneu-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aroneu-neutral-900 focus-visible:ring-offset-2"
        >
          {cta.label}
        </Link>
      </div>
    </div>
  );
}
