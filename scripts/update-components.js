const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, '..', 'src', 'components', 'sections');

const components = {
  'Hero.tsx': `
import React from 'react';
import Image from 'next/image';
import { SectionContent } from '@/lib/content/types';

export function Hero({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu flex flex-col md:flex-row items-center justify-between gap-8 pt-24 pb-16">
      <div className="container-aroneu max-w-xl">
        {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
        {data.heading && <h1 className="text-h1 mb-6 text-black dark:text-white">{data.heading}</h1>}
        {data.subcopy && <p className="text-body mb-8 text-zinc-600 dark:text-zinc-400">{data.subcopy}</p>}
        {data.ctas && data.ctas.length > 0 && (
          <div className="flex gap-4">
            {data.ctas.map((cta, i) => (
              <a key={i} href={cta.href} className={\`px-6 py-3 rounded-full text-sm font-medium \${cta.variant === 'primary' ? 'bg-black text-white dark:bg-white dark:text-black' : 'border border-zinc-200 text-black dark:text-white dark:border-zinc-800'}\`}>
                {cta.label}
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
        <Image src="/images/aroneu/ai-workspace-governance-overview.png" alt="AI Workspace overview" width={600} height={400} className="w-full h-auto object-cover rounded-xl" priority />
        {data.visualSlot?.placementNote && (
          <p className="sr-only">Representative visual, not live product screenshot</p>
        )}
      </div>
    </section>
  );
}
  `,
  'ProofStrip.tsx': `
import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function ProofStrip({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-12 border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
      <div className="container-aroneu grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {data.items?.map((item: any, i: number) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-4xl font-mono mb-2 text-black dark:text-white">{item.value}</span>
            <span className="text-sm font-medium text-zinc-500 uppercase tracking-widest">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
  `,
  'ProblemList.tsx': `
import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function ProblemList({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24">
      <div className="container-aroneu max-w-3xl mx-auto text-center mb-16">
        {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
        {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
        {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400">{data.body}</p>}
      </div>
      <div className="container-aroneu max-w-4xl mx-auto">
        <div className="space-y-6">
          {data.items?.map((item: any, i: number) => (
            <div key={i} className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-black">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  `,
  'CapabilityCards.tsx': `
import React from 'react';
import Image from 'next/image';
import { SectionContent } from '@/lib/content/types';

export function CapabilityCards({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="container-aroneu max-w-3xl mx-auto text-center mb-16">
        {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
        {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
        {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400">{data.body}</p>}
      </div>
      <div className="container-aroneu grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.items?.map((item: any, i: number) => (
          <div key={i} className="flex flex-col p-8 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-black">
            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 flex-grow">{item.description}</p>
            <a href={item.href} className="text-black dark:text-white font-medium hover:underline inline-flex items-center">
              {item.ctaLabel} <span className="ml-2">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
  `,
  'StepRow.tsx': `
import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function StepRow({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24">
      <div className="container-aroneu max-w-3xl mx-auto text-center mb-16">
        {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
        {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
        {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400">{data.body}</p>}
      </div>
      <div className="container-aroneu grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {data.items?.map((item: any, i: number) => (
          <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-lg mb-6">{i + 1}</div>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">{item.description}</p>
          </div>
        ))}
      </div>
      {data.ctas && data.ctas.length > 0 && (
        <div className="flex justify-center">
          <a href={data.ctas[0].href} className="px-6 py-3 rounded-full text-sm font-medium border border-zinc-200 text-black dark:text-white dark:border-zinc-800">
            {data.ctas[0].label}
          </a>
        </div>
      )}
    </section>
  );
}
  `,
  'StatQuad.tsx': `
import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function StatQuad({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
      <div className="container-aroneu grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
          {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
          {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400 mb-8">{data.body}</p>}
          {data.ctas && data.ctas.length > 0 && (
            <a href={data.ctas[0].href} className="inline-block px-6 py-3 rounded-full text-sm font-medium border border-zinc-200 text-black dark:text-white dark:border-zinc-800">
              {data.ctas[0].label}
            </a>
          )}
        </div>
        <div className="space-y-8">
          {data.items?.map((item: any, i: number) => (
            <div key={i} className="pl-6 border-l-2 border-zinc-300 dark:border-zinc-700">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  `,
  'LeadershipPreview.tsx': `
import React from 'react';
import Image from 'next/image';
import { SectionContent } from '@/lib/content/types';

export function LeadershipPreview({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24">
      <div className="container-aroneu grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <Image src="/images/aroneu/leadership-card-system.png" alt="Leadership accountability" width={500} height={400} className="w-full h-auto rounded-xl" />
        </div>
        <div className="order-1 md:order-2">
          {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
          {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
          {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400 mb-8">{data.body}</p>}
          
          <ul className="space-y-3 mb-8">
            {data.items?.map((item: any, i: number) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold">{item.title.charAt(0)}</div>
                <span className="font-medium">{item.title}</span>
              </li>
            ))}
          </ul>
          
          {data.ctas && data.ctas.length > 0 && (
            <a href={data.ctas[0].href} className="inline-block px-6 py-3 rounded-full text-sm font-medium border border-zinc-200 text-black dark:text-white dark:border-zinc-800">
              {data.ctas[0].label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
  `,
  'ClosingCTA.tsx': `
import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function ClosingCTA({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24 text-center">
      <div className="container-aroneu max-w-3xl mx-auto">
        {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
        {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
        {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400 mb-10">{data.body}</p>}
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {data.ctas?.map((cta, i) => (
            <a key={i} href={cta.href} className={\`px-8 py-4 rounded-full text-base font-medium \${cta.variant === 'primary' ? 'bg-black text-white dark:bg-white dark:text-black' : 'border border-zinc-200 text-black dark:text-white dark:border-zinc-800'}\`}>
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
  `,
  'FAQSection.tsx': `
import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function FAQSection({ data }: { data?: SectionContent }) {
  if (!data || !data.faqs || data.faqs.length === 0) return null;
  return (
    <section className="section-aroneu py-24">
      <div className="container-aroneu max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-black dark:text-white">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-6">
          {data.faqs.map((faq, i) => (
            <div key={i} className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  `
};

for (const [filename, content] of Object.entries(components)) {
  fs.writeFileSync(path.join(sectionsDir, filename), content.trim() + '\\n', 'utf8');
  console.log('Updated ' + filename);
}

