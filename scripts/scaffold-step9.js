const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const libContentPagesDir = path.join(srcDir, 'lib', 'content', 'pages');
const publicImagesDir = path.join(__dirname, '..', 'public', 'images', 'aroneu');
const appDir = path.join(srcDir, 'app', '(marketing)', 'ai-workspace');
const sectionsDir = path.join(srcDir, 'components', 'sections');

// Ensure directories exist
[publicImagesDir, appDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// 1. Copy Assets
const assetsDir = path.join(__dirname, '..', '..', '09_STEP_09_AI_WORKSPACE');
const assetsToCopy = [
  { src: 'F1_ai-workspace-governance-overview (1).png', dest: 'ai-workspace-governance-overview.png' },
  { src: 'F3_governance-controls-panel (1).png', dest: 'ai-workspace-governance-controls.png' },
  { src: 'F4_ai-workspace-visibility-panels (1).png', dest: 'ai-workspace-visibility-panels.png' },
  { src: 'F5_ai-supported-insight-panel (1).png', dest: 'ai-workspace-ai-insights.png' }
];

assetsToCopy.forEach(asset => {
  const srcPath = path.join(assetsDir, asset.src);
  const destPath = path.join(publicImagesDir, asset.dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log('Copied ' + asset.src + ' to ' + asset.dest);
  }
});

// 2. Update ai-workspace.ts content
const aiWorkspaceTsContent = `
import { PageContent } from '../types';

export const aiWorkspacePage: PageContent = {
  route: "/ai-workspace",
  slug: "ai-workspace",
  pageJob: "Explain the governance layer and visibility without overclaiming AI.",
  audience: ["CTO", "VP Engineering", "delivery leader", "economic buyer"],
  beliefShift: "Offshore is a black box -> I can see the work, the decisions, and the health of the team.",
  primaryCta: { label: "See the workspace", href: "/contact", variant: "primary" }, // Used Book a call link for CTA due to /contact being the global lead target
  secondaryCta: { label: "Book a call", href: "/contact", variant: "secondary" },
  seo: {
    metaTitle: "AI Workspace — Team visibility and governance | Aroneu",
    metaDescription: "The Aroneu AI Workspace makes team health, delivery rhythm, and governance controls visible. It is the operating layer around your capability team.",
    ogTitle: "Scale you can see. Work you can trust.",
    ogDescription: "The governance layer around every team — the connective tissue where work, decisions and controls are made visible.",
    canonicalPath: "/ai-workspace",
  },
  sections: [
    {
      id: "hero",
      component: "Hero",
      eyebrow: "AI workspace",
      heading: "Scale you can see. Work you can trust.",
      subcopy: "The governance layer around every team — the connective tissue where work, decisions and controls are made visible.",
      ctas: [
        { label: "Book a call", href: "/contact", variant: "primary" },
        { label: "Explore Capability Teams", href: "/capability-teams", variant: "secondary" }
      ],
      internalNotes: ["Status: final-copy-provided"]
    },
    {
      id: "workspace-preview-labels",
      component: "WorkspacePreviewLabels",
      image: "/images/aroneu/ai-workspace-governance-overview.png",
      labels: [
        "Team health",
        "Delivery rhythm",
        "Governance controls",
        "Decision log",
        "Knowledge base",
        "Spark signal"
      ],
      internalNotes: ["Status: final-copy-provided"]
    },
    {
      id: "what-it-makes-visible",
      component: "WorkspaceVisibilityPanel",
      heading: "Visibility by default.",
      body: "The AI Workspace makes the operating rhythm visible, so you spend less time chasing updates and more time guiding the work.",
      image: "/images/aroneu/ai-workspace-visibility-panels.png",
      items: [
        { title: "Capacity, continuity, and team signals" },
        { title: "Progress, blockers, and working cadence" },
        { title: "Access, approvals, quality gates, and status" },
        { title: "Key decisions, context, and owners" },
        { title: "Documentation, handovers, and reusable context" },
        { title: "AI-supported insight, marked and sourced" }
      ],
      internalNotes: ["Status: final-copy-provided"]
    },
    {
      id: "governance-controls",
      component: "GovernanceControlsPanel",
      heading: "Control what matters.",
      body: "The workspace is built to surface the controls, access, approvals, and quality gates that keep work safe.",
      image: "/images/aroneu/ai-workspace-governance-controls.png",
      items: [
        { title: "Access and identity" },
        { title: "Quality gates" },
        { title: "Decision history" },
        { title: "Governed status" }
      ],
      internalNotes: ["Status: final-copy-provided"]
    },
    {
      id: "ai-supported-insights",
      component: "AIInsightPanel",
      heading: "AI supports the operating rhythm. It does not replace it.",
      body: "AI is a support layer for summaries, patterns, documentation, risks, and next-step signals, while human accountability stays inside the model.",
      image: "/images/aroneu/ai-workspace-ai-insights.png",
      items: [
        { title: "Summaries" },
        { title: "Signals" },
        { title: "Sources" },
        { title: "Spark signal" }
      ],
      internalNotes: ["Status: final-copy-provided"]
    },
    {
      id: "data-and-responsibility",
      component: "DataResponsibilityDiagram",
      heading: "Clear on what lives where, and who is accountable.",
      body: "The AI Workspace makes governance visible without making data responsibility vague. Access, sources, approvals, and accountability are defined around the client setup. Specific data, residency, access, and compliance details should be agreed during implementation and reflected in the final legal and technical setup.",
      internalNotes: ["Status: final-copy-provided"]
    },
    {
      id: "what-it-does-not-replace",
      component: "FeatureGrid",
      heading: "The workspace supports leadership. It does not remove it.",
      items: [
        { title: "It does not replace leadership.", description: "" },
        { title: "It does not make uncontrolled decisions.", description: "" },
        { title: "It does not remove client standards.", description: "" },
        { title: "It does not turn governance into automation theatre.", description: "" }
      ],
      internalNotes: ["Status: final-copy-provided"]
    },
    {
      id: "closing-cta",
      component: "ClosingCTA",
      heading: "See how governance becomes visible.",
      body: "Talk to us about the team you want to build, the controls you need, and what your leaders must be able to see.",
      ctas: [
        { label: "Book a call", href: "/contact", variant: "primary" },
        { label: "Explore Capability Teams", href: "/capability-teams", variant: "secondary" }
      ],
      internalNotes: ["Status: final-copy-provided"]
    },
    {
      id: "ai-workspace-faq",
      component: "FAQSection",
      faqs: [
        { question: "What is the AI Workspace?", answer: "The AI Workspace is the governance layer around every Aroneu team. It helps make team health, work status, controls, documentation, decisions, and AI-supported insights visible in one operating space." },
        { question: "Is the AI Workspace a separate product?", answer: "No. It is the built-in operating and visibility layer for teams working with Aroneu. It is not sold as a standalone SaaS product." },
        { question: "What can leaders see inside the workspace?", answer: "Leaders can see team capacity, delivery rhythm, approvals, decision history, knowledge documentation, and AI-supported summaries of project status." }
      ],
      internalNotes: ["Status: final-copy-provided"]
    }
  ]
};
`;

fs.writeFileSync(path.join(libContentPagesDir, 'ai-workspace.ts'), aiWorkspaceTsContent.trim() + '\n', 'utf8');
console.log('Updated lib/content/pages/ai-workspace.ts');

// 3. New Components
const newComponents = {
  'WorkspaceVisibilityPanel.tsx': `
import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function WorkspaceVisibilityPanel({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24 bg-white dark:bg-black">
      <div className="container-aroneu grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
          {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
          {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400 mb-10">{data.body}</p>}
          <div className="space-y-4">
            {data.items?.map((item: any, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white flex-shrink-0" />
                <span className="text-sm font-medium">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center relative w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 shadow-sm transition-opacity duration-500">
          {data.image ? (
            <img src={data.image} alt="Workspace Visibility Panel" className="w-full h-auto object-cover max-h-[500px]" loading="lazy" />
          ) : (
            <div className="w-full h-[400px] flex items-center justify-center text-zinc-400">Representative Visual Panel</div>
          )}
          <div className="absolute bottom-3 right-3 bg-white/80 dark:bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-zinc-500 tracking-wider">REPRESENTATIVE VISUAL</div>
        </div>
      </div>
    </section>
  );
}
  `,
  'GovernanceControlsPanel.tsx': `
import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function GovernanceControlsPanel({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
      <div className="container-aroneu flex flex-col lg:flex-row-reverse gap-16 items-center">
        <div className="flex-1">
          {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
          {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
          {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400 mb-10">{data.body}</p>}
          <div className="grid grid-cols-2 gap-4">
            {data.items?.map((item: any, i: number) => (
              <div key={i} className="p-4 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-black rounded-lg">
                <span className="text-sm font-semibold">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-center relative w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black shadow-sm transition-opacity duration-500 group">
          {data.image ? (
            <img src={data.image} alt="Governance Controls" className="w-full h-auto object-cover max-h-[500px]" loading="lazy" />
          ) : (
            <div className="w-full h-[400px] flex items-center justify-center text-zinc-400">Representative Governance Panel</div>
          )}
          <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <div className="absolute bottom-3 right-3 bg-white/80 dark:bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-zinc-500 tracking-wider">REPRESENTATIVE VISUAL</div>
        </div>
      </div>
    </section>
  );
}
  `,
  'AIInsightPanel.tsx': `
import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function AIInsightPanel({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24 bg-white dark:bg-black">
      <div className="container-aroneu max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 w-full relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm bg-zinc-50 dark:bg-zinc-900 group">
          {data.image ? (
            <img src={data.image} alt="AI Insight Panel" className="w-full h-auto object-cover max-h-[500px]" loading="lazy" />
          ) : (
            <div className="w-full h-[400px] flex items-center justify-center text-zinc-400">Representative AI Insight</div>
          )}
          {/* Spark Signal Simulation */}
          <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-orange-400 dark:bg-orange-500 animate-[pulse_2s_ease-in-out_infinite]" />
          <div className="absolute bottom-3 right-3 bg-white/80 dark:bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-zinc-500 tracking-wider">REPRESENTATIVE VISUAL</div>
        </div>
        <div className="flex-1">
          {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
          {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
          {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400 mb-8">{data.body}</p>}
          <div className="flex flex-wrap gap-2">
            {data.items?.map((item: any, i: number) => (
              <span key={i} className="font-mono text-xs px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded border border-zinc-200 dark:border-zinc-700">
                {item.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
  `,
  'DataResponsibilityDiagram.tsx': `
import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function DataResponsibilityDiagram({ data }: { data?: SectionContent }) {
  if (!data) return null;
  const diagramSteps = [
    { label: "Source material", id: "source" },
    { label: "Access boundary", id: "access" },
    { label: "Approval/review", id: "review" },
    { label: "Accountable owner", id: "owner" },
    { label: "Governed output", id: "output" }
  ];

  return (
    <section className="section-aroneu py-24 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="container-aroneu max-w-4xl mx-auto text-center mb-16">
        {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
        {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
        {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400 mx-auto max-w-3xl">{data.body}</p>}
      </div>
      
      <div className="container-aroneu max-w-5xl mx-auto relative px-4">
        {/* Connection line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-8 right-8 h-[1px] bg-zinc-300 dark:bg-zinc-700 -translate-y-1/2 z-0" />
        
        {/* Connection line (Mobile) */}
        <div className="md:hidden absolute left-1/2 top-4 bottom-4 w-[1px] bg-zinc-300 dark:bg-zinc-700 -translate-x-1/2 z-0" />
        
        <div className="z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2 relative">
          {diagramSteps.map((step, i) => (
            <div key={i} className="flex flex-col items-center bg-white dark:bg-black p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm w-full md:w-36 transition-transform hover:-translate-y-1 duration-300">
              <span className="font-semibold text-sm text-center">{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  `,
  'WorkspacePreviewLabels.tsx': `
import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function WorkspacePreviewLabels({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-16 bg-white dark:bg-black">
      <div className="container-aroneu max-w-5xl mx-auto">
        <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 shadow-lg">
          {data.image ? (
            <img src={data.image} alt="Workspace Governance Overview" className="w-full h-auto object-cover max-h-[600px] md:max-h-[700px]" loading="lazy" />
          ) : (
            <div className="w-full h-[500px] flex items-center justify-center text-zinc-400">Representative Workspace Overview</div>
          )}
          <div className="absolute bottom-3 right-3 bg-white/80 dark:bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-zinc-500 tracking-wider">REPRESENTATIVE VISUAL</div>
        </div>
        {/* Mobile accessible summaries for labels */}
        {data.labels && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {data.labels.map((label: string, i: number) => (
              <span key={i} className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900 rounded-full text-xs font-semibold text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800">
                {label}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
  `
};

for (const [filename, content] of Object.entries(newComponents)) {
  fs.writeFileSync(path.join(sectionsDir, filename), content.trim() + '\n', 'utf8');
  console.log('Created ' + filename);
}

// 4. Assemble app/(marketing)/ai-workspace/page.tsx
const pageTsxContent = `
import { Metadata } from 'next';
import { aiWorkspacePage } from '@/lib/content/pages/ai-workspace';
import { Hero } from '@/components/sections/Hero';
import { WorkspacePreviewLabels } from '@/components/sections/WorkspacePreviewLabels';
import { WorkspaceVisibilityPanel } from '@/components/sections/WorkspaceVisibilityPanel';
import { GovernanceControlsPanel } from '@/components/sections/GovernanceControlsPanel';
import { AIInsightPanel } from '@/components/sections/AIInsightPanel';
import { DataResponsibilityDiagram } from '@/components/sections/DataResponsibilityDiagram';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { ClosingCTA } from '@/components/sections/ClosingCTA';
import { FAQSection } from '@/components/sections/FAQSection';

export const metadata: Metadata = {
  title: aiWorkspacePage.seo?.metaTitle,
  description: aiWorkspacePage.seo?.metaDescription,
  openGraph: {
    title: aiWorkspacePage.seo?.ogTitle,
    description: aiWorkspacePage.seo?.ogDescription,
  },
};

export default function AIWorkspace() {
  const sections = aiWorkspacePage.sections;
  
  return (
    <div className="page-ai-workspace flex flex-col w-full">
      {/* 1. Hero */}
      <Hero data={sections.find(s => s.id === 'hero')} />
      
      {/* 6. Workspace preview labels (Pulled up based on 'hero visual' instructions if appropriate, but logically flows well here as visual anchor) */}
      <WorkspacePreviewLabels data={sections.find(s => s.id === 'workspace-preview-labels')} />
      
      {/* 2. What it makes visible */}
      <WorkspaceVisibilityPanel data={sections.find(s => s.id === 'what-it-makes-visible')} />
      
      {/* 3. Governance controls */}
      <GovernanceControlsPanel data={sections.find(s => s.id === 'governance-controls')} />
      
      {/* 4. AI-supported insights */}
      <AIInsightPanel data={sections.find(s => s.id === 'ai-supported-insights')} />
      
      {/* 5. Data and responsibility */}
      <DataResponsibilityDiagram data={sections.find(s => s.id === 'data-and-responsibility')} />
      
      {/* 7. What the workspace does not replace */}
      <FeatureGrid data={sections.find(s => s.id === 'what-it-does-not-replace')} />
      
      {/* 8. Closing CTA */}
      <div className="py-16 bg-white dark:bg-black">
        <ClosingCTA data={sections.find(s => s.id === 'closing-cta')} />
      </div>
      
      {/* 9. FAQ */}
      <div className="bg-zinc-50 dark:bg-zinc-900 py-16 border-t border-zinc-200 dark:border-zinc-800">
        <FAQSection data={sections.find(s => s.id === 'ai-workspace-faq')} />
      </div>
    </div>
  );
}
`;

fs.writeFileSync(path.join(appDir, 'page.tsx'), pageTsxContent.trim() + '\n', 'utf8');
console.log('Updated app/(marketing)/ai-workspace/page.tsx');

console.log('Step 9 Scaffolding complete.');
