const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const libContentPagesDir = path.join(srcDir, 'lib', 'content', 'pages');
const publicImagesDir = path.join(__dirname, '..', 'public', 'images', 'aroneu');
const appDir = path.join(srcDir, 'app', '(marketing)', 'capability-teams');
const sectionsDir = path.join(srcDir, 'components', 'sections');

// Ensure directories exist
[publicImagesDir, appDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// 1. Copy Assets
const assetsDir = path.join(__dirname, '..', '..', '08_STEP_08_CAPABILITY_TEAMS');
const assetsToCopy = [
  { src: 'Senior_Indian_professionals_in_w…_202607030328 (1).jpeg', dest: 'capability-teams-senior-professionals.jpeg' },
  { src: 'Abstract_visual_for_Aroneu_202607030333 (1).jpeg', dest: 'capability-teams-abstract-governance.jpeg' },
  { src: 'Aroneu_Governance_Gate_Flow_2K_202607030441 (1).jpeg', dest: 'capability-teams-governance-flow.jpeg' },
  { src: 'Aroneu_Discover_Build_Run_process_202607030450 (1).jpeg', dest: 'capability-teams-discover-build-run.jpeg' }
];

assetsToCopy.forEach(asset => {
  const srcPath = path.join(assetsDir, asset.src);
  const destPath = path.join(publicImagesDir, asset.dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log('Copied ' + asset.src + ' to ' + asset.dest);
  }
});

// 2. Update capability-teams.ts content
const capabilityTeamsTsContent = `
import { PageContent } from '../types';

export const capabilityTeamsPage: PageContent = {
  route: "/capability-teams",
  slug: "capability-teams",
  pageJob: "Explain and sell the people-side offer.",
  audience: ["CTO", "VP Engineering", "delivery leader", "economic buyer"],
  beliefShift: "A remote team becomes a vendor I chase -> This is a governed extension of my business.",
  primaryCta: { label: "Book a call", href: "/contact", variant: "primary" },
  secondaryCta: { label: "See the AI Workspace", href: "/ai-workspace", variant: "secondary" },
  seo: {
    metaTitle: "Capability Teams — an extension of your team | Aroneu",
    metaDescription: "Dedicated, senior India teams run as a true extension of your business — same standards, visibility, and accountability.",
    ogTitle: "An extension of your team.",
    ogDescription: "Aroneu Capability Teams give European companies senior India capability with shared standards, local leadership, visibility, and continuity.",
    canonicalPath: "/capability-teams",
  },
  sections: [
    {
      id: "hero",
      component: "Hero",
      eyebrow: "Capability Teams",
      heading: "Capability Teams, run as an extension of your business.",
      subcopy: "Aroneu builds dedicated, senior India teams around your operating needs. The team works with your standards, your rhythm, and the governance needed to stay visible.",
      ctas: [
        { label: "Book a call", href: "/contact", variant: "primary" },
        { label: "See the workspace", href: "/ai-workspace", variant: "secondary" }
      ],
      internalNotes: ["Status: final-copy-provided"]
    },
    {
      id: "what-you-get",
      component: "FeatureGrid",
      eyebrow: "What you get",
      heading: "Capability, built with control.",
      body: "Aroneu does not simply fill seats. We design the team, operating rhythm, and governance around the work you need to own.",
      items: [
        { title: "Role fit", description: "The team is shaped around the capability you need, not a generic list of profiles." },
        { title: "Senior talent", description: "People are selected for judgement, domain fit, communication, and long-term ownership." },
        { title: "Local leadership", description: "Named leadership keeps day-to-day responsibility close to the team and visible to you." },
        { title: "Structured onboarding", description: "Business context, documentation, and working standards are built into the start." },
        { title: "Shared rhythm", description: "The team runs through clear routines, reporting discipline, and governance touchpoints." },
        { title: "Continuity planning", description: "Knowledge, handovers, and role depth are treated as part of the operating model." }
      ],
      internalNotes: ["Status: final-copy-provided"]
    },
    {
      id: "roles-capability-areas",
      component: "RoleTagGrid",
      eyebrow: "Capability areas",
      heading: "Deep technology talent, across your stack.",
      body: "Aroneu builds senior India capability across engineering, product, cloud, quality, support, and AI-related work.",
      items: [
        { title: "Java" }, { title: ".NET" }, { title: "C++" }, { title: "DevOps" },
        { title: "Cloud" }, { title: "QA" }, { title: "AI engineering" },
        { title: "Product owner" }, { title: "Scrum master" }, { title: "24×7 support" },
        { title: "More as approved" }
      ],
      internalNotes: ["Status: final-copy-provided"]
    },
    {
      id: "governance-built-in",
      component: "GovernanceAroundTeamDiagram",
      eyebrow: "How the team stays governable",
      heading: "The team is only the beginning.",
      body: "A strong team still fails if the operating model is weak. Aroneu builds the surrounding structure: leadership, documentation, routines, visibility, quality gates, and the AI Workspace.",
      items: [
        { title: "Operating rhythm", description: "Cadences, rituals, updates, and escalation paths are agreed before work becomes chaotic." },
        { title: "Visible accountability", description: "Responsibility sits with named people, not scattered channels or informal promises." },
        { title: "Documented context", description: "Decisions, handovers, standards, and working knowledge are kept easier to find and govern." },
        { title: "Workspace visibility", description: "The AI Workspace helps make work, controls, team health, and decisions visible around the team." }
      ],
      internalNotes: ["Status: final-copy-provided"]
    },
    {
      id: "retention-by-design",
      component: "RetentionProof",
      eyebrow: "Continuity",
      heading: "Culture first, so knowledge compounds.",
      body: "Aroneu’s model is built to keep teams stable: selective hiring, domain identity, local leadership, intercultural enablement, and meaningful connection to the work.",
      items: [
        { value: "<4%", label: "attrition", description: "Governed teams have operated with <4% attrition." }
      ],
      subcopy: "Retention matters because every departure takes context with it. Aroneu treats continuity as a design requirement, not a hope.",
      internalNotes: ["Status: final-copy-provided"]
    },
    {
      id: "model-comparison",
      component: "ComparisonTable",
      eyebrow: "Model fit",
      heading: "Most companies are not only comparing cost. They are comparing control.",
      body: "The right model depends on how much ownership, visibility, continuity, and governance the company needs.",
      items: [
        { model: "Traditional offshore vendor", bestFor: "Short-term delivery or task execution", governance: "Often limited to reporting and escalation", aroneuView: "Useful for some projects, but weaker when the company needs long-term capability." },
        { model: "Staffing model", bestFor: "Filling roles quickly", governance: "Depends heavily on the client’s own management", aroneuView: "Can add capacity, but does not automatically create operating governance." },
        { model: "EOR model", bestFor: "Employing people in another country", governance: "Legal employment support, not delivery governance", aroneuView: "Solves employment structure, but not necessarily rhythm, continuity, or visibility." },
        { model: "Captive centre", bestFor: "Full long-term ownership", governance: "High control, higher setup complexity", aroneuView: "Strong model, but slower and heavier to build." },
        { model: "Aroneu Capability Team", bestFor: "Senior India capability with European governance", governance: "Built around visibility, accountability, and continuity", aroneuView: "Designed for companies that need scale without losing control." }
      ],
      internalNotes: ["Status: final-copy-provided"]
    },
    {
      id: "objection-table",
      component: "ObjectionTable",
      eyebrow: "Buyer concerns",
      heading: "The real questions are about control.",
      items: [
        { question: "Will they understand our context?", answer: "The team starts with structured onboarding, documentation, and shared operating standards." },
        { question: "Who is accountable day to day?", answer: "Aroneu builds named local leadership and governance routines around the team." },
        { question: "Will knowledge disappear?", answer: "Continuity is supported through documentation, handover readiness, shared routines, and the AI Workspace." },
        { question: "Will this become hard to govern?", answer: "The team is wrapped in visibility, controls, and reporting rhythm from the beginning." },
        { question: "Can we bring the team closer later?", answer: "The model keeps optionality open through documented knowledge, continuity planning, and transfer discussions where agreed." }
      ],
      internalNotes: ["Status: final-copy-provided"]
    },
    {
      id: "internalise-optionality",
      component: "InternaliseTransferDiagram",
      eyebrow: "Long-term optionality",
      heading: "Build capability without closing your options.",
      body: "Some companies want a long-term governed team with Aroneu. Others may later want to internalise or transfer parts of the capability. The model is designed to keep the team understandable, documented, and easier to move when the commercial and legal path is agreed.",
      ctas: [
        { label: "Talk to us", href: "/contact", variant: "primary" }
      ],
      internalNotes: ["Status: final-copy-provided"]
    },
    {
      id: "closing-cta",
      component: "ClosingCTA",
      heading: "Build the team you can govern.",
      body: "Tell us the capability you need, the risks you need controlled, and what kind of team ownership matters to your business.",
      ctas: [
        { label: "Book a call", href: "/contact", variant: "primary" },
        { label: "See the AI Workspace", href: "/ai-workspace", variant: "secondary" }
      ],
      internalNotes: ["Status: final-copy-provided"]
    },
    {
      id: "capability-teams-faq",
      component: "FAQSection",
      faqs: [
        { question: "What is an Aroneu Capability Team?", answer: "An Aroneu Capability Team is a dedicated India-based team built for a European company and run as an extension of its business. The team is selected, onboarded, and governed with shared standards, visibility, accountability, and continuity planning." },
        { question: "How is this different from a traditional offshore vendor?", answer: "A traditional vendor usually delivers work from outside the client’s operating system. Aroneu is designed around extension, visibility, and governance, so the team can work closer to the client’s standards, context, and accountability rhythm." },
        { question: "Who manages the team day to day?", answer: "Aroneu helps structure the operating model, leadership rhythm, visibility, and governance layer around the team. The exact day-to-day setup depends on the client’s needs, roles, and internal ownership model." },
        { question: "Can the team be internalised later?", answer: "The Aroneu model can support long-term continuity and optional transfer discussions where commercially and legally agreed. The aim is to build capability that remains understandable, documented, and governable." },
        { question: "How does Aroneu reduce knowledge loss?", answer: "Aroneu reduces knowledge loss through senior selection, documentation standards, shared routines, leadership visibility, and continuity planning. The AI Workspace supports this by keeping decisions, work context, and handover information easier to see." }
      ],
      internalNotes: ["Status: final-copy-provided"]
    }
  ]
};
`;

fs.writeFileSync(path.join(libContentPagesDir, 'capability-teams.ts'), capabilityTeamsTsContent.trim() + '\n', 'utf8');
console.log('Updated lib/content/pages/capability-teams.ts');

// 3. New Components
const newComponents = {
  'FeatureGrid.tsx': `
import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function FeatureGrid({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
      <div className="container-aroneu max-w-3xl mx-auto text-center mb-16">
        {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
        {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
        {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400">{data.body}</p>}
      </div>
      <div className="container-aroneu grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.items?.map((item: any, i: number) => (
          <div key={i} className="flex flex-col p-8 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-black transition-transform hover:-translate-y-1">
            <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
  `,
  'RoleTagGrid.tsx': `
import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function RoleTagGrid({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24">
      <div className="container-aroneu max-w-3xl mx-auto text-center mb-12">
        {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
        {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
        {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400">{data.body}</p>}
      </div>
      <div className="container-aroneu max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
        {data.items?.map((item: any, i: number) => (
          <span key={i} className="px-5 py-2 border border-zinc-200 dark:border-zinc-800 rounded-full text-sm font-medium bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200">
            {item.title}
          </span>
        ))}
      </div>
    </section>
  );
}
  `,
  'GovernanceAroundTeamDiagram.tsx': `
import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function GovernanceAroundTeamDiagram({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
      <div className="container-aroneu grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
          {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
          {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400 mb-10">{data.body}</p>}
          <div className="space-y-6">
            {data.items?.map((item: any, i: number) => (
              <div key={i} className="pl-5 border-l-2 border-zinc-300 dark:border-zinc-700">
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center relative min-h-[400px]">
          {/* CSS/SVG Governance Diagram - 4 layers revealing slowly */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black shadow-sm flex items-center justify-center animate-[pulse_4s_ease-in-out_infinite] opacity-80" />
            <div className="absolute w-64 h-64 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900" />
            <div className="absolute w-48 h-48 rounded-full border border-zinc-400 dark:border-zinc-600 flex items-center justify-center bg-white dark:bg-black" />
            <div className="absolute w-32 h-32 rounded-full border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black flex flex-col items-center justify-center font-semibold text-center leading-tight shadow-md">
              <span className="text-xs uppercase tracking-widest opacity-80">Aroneu</span>
              <span>Capability<br/>Team</span>
            </div>
            
            {/* Labels mapped to layers */}
            <div className="absolute top-8 text-xs font-medium text-zinc-500 bg-white dark:bg-black px-2 py-1 rounded-md border border-zinc-200 dark:border-zinc-800">Workspace visibility</div>
            <div className="absolute left-4 text-xs font-medium text-zinc-500 bg-white dark:bg-black px-2 py-1 rounded-md border border-zinc-200 dark:border-zinc-800">Operating rhythm</div>
            <div className="absolute right-4 text-xs font-medium text-zinc-500 bg-white dark:bg-black px-2 py-1 rounded-md border border-zinc-200 dark:border-zinc-800">Visible accountability</div>
            <div className="absolute bottom-16 text-xs font-medium text-zinc-500 bg-white dark:bg-black px-2 py-1 rounded-md border border-zinc-200 dark:border-zinc-800">Documented context</div>
          </div>
        </div>
      </div>
    </section>
  );
}
  `,
  'RetentionProof.tsx': `
import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function RetentionProof({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24">
      <div className="container-aroneu max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 text-center md:text-left">
          {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
          {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
          {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400 mb-8">{data.body}</p>}
          {data.subcopy && <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{data.subcopy}</p>}
        </div>
        <div className="w-full md:w-auto shrink-0 flex items-center justify-center p-12 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-zinc-50 dark:bg-zinc-900 shadow-sm">
          {data.items && data.items.length > 0 && (
            <div className="flex flex-col items-center">
              <span className="text-6xl font-mono mb-3 text-black dark:text-white tracking-tight">{data.items[0].value}</span>
              <span className="text-sm font-medium uppercase tracking-widest text-zinc-500">{data.items[0].label}</span>
              <span className="text-xs text-zinc-400 mt-2 max-w-[200px] text-center">{data.items[0].description}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
  `,
  'ComparisonTable.tsx': `
import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function ComparisonTable({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="container-aroneu max-w-5xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
          {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
          {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400">{data.body}</p>}
        </div>
        <div className="w-full overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black shadow-sm">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <th className="p-5 font-semibold text-sm">Model</th>
                <th className="p-5 font-semibold text-sm">Best for</th>
                <th className="p-5 font-semibold text-sm">Governance level</th>
                <th className="p-5 font-semibold text-sm">Aroneu view</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {data.items?.map((item: any, i: number) => (
                <tr key={i} className={\`hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors \${item.model.includes('Aroneu') ? 'bg-black/5 dark:bg-white/5 border-l-4 border-l-black dark:border-l-white' : ''}\`}>
                  <td className="p-5 text-sm font-medium">{item.model}</td>
                  <td className="p-5 text-sm text-zinc-600 dark:text-zinc-400">{item.bestFor}</td>
                  <td className="p-5 text-sm text-zinc-600 dark:text-zinc-400">{item.governance}</td>
                  <td className="p-5 text-sm text-zinc-600 dark:text-zinc-400 italic">{item.aroneuView}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
  `,
  'ObjectionTable.tsx': `
import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function ObjectionTable({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24">
      <div className="container-aroneu max-w-4xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/3">
          {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
          {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
        </div>
        <div className="w-full lg:w-2/3">
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
            {data.items?.map((item: any, i: number) => (
              <div key={i} className="py-6 flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="sm:w-1/3 font-semibold text-black dark:text-white flex gap-3">
                  <span className="text-zinc-400 shrink-0">?</span>
                  <span>{item.question}</span>
                </div>
                <div className="sm:w-2/3 text-zinc-600 dark:text-zinc-400 flex gap-3">
                  <span className="text-zinc-400 shrink-0">→</span>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
  `,
  'InternaliseTransferDiagram.tsx': `
import React from 'react';
import { SectionContent } from '@/lib/content/types';

export function InternaliseTransferDiagram({ data }: { data?: SectionContent }) {
  if (!data) return null;
  return (
    <section className="section-aroneu py-24 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
      <div className="container-aroneu max-w-4xl mx-auto text-center mb-16">
        {data.eyebrow && <span className="text-label text-zinc-500 uppercase tracking-widest block mb-4">{data.eyebrow}</span>}
        {data.heading && <h2 className="text-h2 mb-6 text-black dark:text-white">{data.heading}</h2>}
        {data.body && <p className="text-body text-zinc-600 dark:text-zinc-400 mx-auto max-w-3xl">{data.body}</p>}
      </div>
      
      <div className="container-aroneu max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mb-16 relative">
        {/* Connection line */}
        <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-y-1/2 z-0"></div>
        
        <div className="z-10 flex flex-col items-center bg-white dark:bg-black p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm w-full md:w-auto">
          <span className="w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold mb-3">1</span>
          <span className="font-semibold">Governed team</span>
        </div>
        
        <div className="md:hidden w-0.5 h-8 bg-zinc-200 dark:bg-zinc-800"></div>
        
        <div className="z-10 flex flex-col items-center bg-white dark:bg-black p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm w-full md:w-auto">
          <span className="w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold mb-3">2</span>
          <span className="font-semibold text-center">Documented<br/>knowledge</span>
        </div>
        
        <div className="md:hidden w-0.5 h-8 bg-zinc-200 dark:bg-zinc-800"></div>

        <div className="z-10 flex flex-col items-center bg-white dark:bg-black p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm w-full md:w-auto">
          <span className="w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold mb-3">3</span>
          <span className="font-semibold text-center">Continuity /<br/>Optional transfer</span>
        </div>
      </div>
      
      {data.ctas && data.ctas.length > 0 && (
        <div className="flex justify-center">
          <a href={data.ctas[0].href} className="px-6 py-3 rounded-full text-sm font-medium border border-zinc-200 text-black dark:text-white dark:border-zinc-800 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            {data.ctas[0].label}
          </a>
        </div>
      )}
    </section>
  );
}
  `
};

for (const [filename, content] of Object.entries(newComponents)) {
  fs.writeFileSync(path.join(sectionsDir, filename), content.trim() + '\n', 'utf8');
  console.log('Created ' + filename);
}

// 4. Assemble app/capability-teams/page.tsx
const pageTsxContent = `
import { Metadata } from 'next';
import { capabilityTeamsPage } from '@/lib/content/pages/capability-teams';
import { Hero } from '@/components/sections/Hero';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { RoleTagGrid } from '@/components/sections/RoleTagGrid';
import { GovernanceAroundTeamDiagram } from '@/components/sections/GovernanceAroundTeamDiagram';
import { RetentionProof } from '@/components/sections/RetentionProof';
import { ComparisonTable } from '@/components/sections/ComparisonTable';
import { ObjectionTable } from '@/components/sections/ObjectionTable';
import { InternaliseTransferDiagram } from '@/components/sections/InternaliseTransferDiagram';
import { ClosingCTA } from '@/components/sections/ClosingCTA';
import { FAQSection } from '@/components/sections/FAQSection';

export const metadata: Metadata = {
  title: capabilityTeamsPage.seo?.metaTitle,
  description: capabilityTeamsPage.seo?.metaDescription,
  openGraph: {
    title: capabilityTeamsPage.seo?.ogTitle,
    description: capabilityTeamsPage.seo?.ogDescription,
  },
};

export default function CapabilityTeams() {
  const sections = capabilityTeamsPage.sections;
  
  return (
    <div className="page-capability-teams flex flex-col w-full">
      {/* 1. Hero */}
      <Hero data={sections.find(s => s.id === 'hero')} />
      
      {/* 2. What you get */}
      <FeatureGrid data={sections.find(s => s.id === 'what-you-get')} />
      
      {/* 3. Roles / capability areas */}
      <RoleTagGrid data={sections.find(s => s.id === 'roles-capability-areas')} />
      
      {/* 4. Governance built in */}
      <GovernanceAroundTeamDiagram data={sections.find(s => s.id === 'governance-built-in')} />
      
      {/* 5. Retention by design */}
      <RetentionProof data={sections.find(s => s.id === 'retention-by-design')} />
      
      {/* 6. Model comparison */}
      <ComparisonTable data={sections.find(s => s.id === 'model-comparison')} />
      
      {/* 7. Objection and answer table */}
      <ObjectionTable data={sections.find(s => s.id === 'objection-table')} />
      
      {/* 8. Internalise / transfer optionality */}
      <InternaliseTransferDiagram data={sections.find(s => s.id === 'internalise-optionality')} />
      
      {/* 9. Closing CTA */}
      <div className="py-16 bg-white dark:bg-black">
        <ClosingCTA data={sections.find(s => s.id === 'closing-cta')} />
      </div>
      
      {/* 10. FAQ */}
      <div className="bg-zinc-50 dark:bg-zinc-900 py-16 border-t border-zinc-200 dark:border-zinc-800">
        <FAQSection data={sections.find(s => s.id === 'capability-teams-faq')} />
      </div>
    </div>
  );
}
`;

fs.writeFileSync(path.join(appDir, 'page.tsx'), pageTsxContent.trim() + '\n', 'utf8');
console.log('Updated app/capability-teams/page.tsx');

console.log('Step 8 Scaffolding complete.');
