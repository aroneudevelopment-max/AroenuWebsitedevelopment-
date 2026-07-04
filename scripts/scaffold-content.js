const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const libContentDir = path.join(srcDir, 'lib', 'content');
const libContentPagesDir = path.join(libContentDir, 'pages');
const docsDir = path.join(__dirname, '..', 'docs');

[libContentDir, libContentPagesDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 1. types.ts
const typesContent = `
export type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "dark";
};

export type SeoFields = {
  metaTitle?: string;
  metaDescription?: string;
  canonicalPath?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  robotsIndex?: boolean;
  robotsFollow?: boolean;
  schemaType?: string;
};

export type VisualSlot = {
  id: string;
  purpose:
    | "explain-model"
    | "make-governance-visible"
    | "reduce-buyer-risk"
    | "support-trust-or-action";
  recommendedAssetType?:
    | "photo"
    | "static-mockup"
    | "diagram"
    | "video"
    | "motion-reference"
    | "optional-3d-reference"
    | "none";
  placementNote: string;
  required: boolean;
  doNotUse?: string[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type MetricItem = {
  value: string;
  label: string;
  note?: string;
  sourceStatus?: "approved" | "provided" | "needs-verification";
};

export type SectionContent = {
  id: string;
  component: string;
  eyebrow?: string;
  heading?: string;
  subcopy?: string;
  body?: string | string[];
  ctas?: Cta[];
  items?: unknown[];
  faqs?: FAQItem[];
  visualSlot?: VisualSlot;
  internalNotes?: string[];
};

export type PageContent = {
  route: string;
  slug: string;
  pageJob: string;
  audience?: string[];
  beliefShift?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  seo?: SeoFields;
  sections: SectionContent[];
  internalNotes?: string[];
};

export type ContentStatus =
  | "final-copy-provided"
  | "shell-placeholder"
  | "needs-client-input"
  | "needs-backend-wiring"
  | "do-not-publish-as-final";
`;
fs.writeFileSync(path.join(libContentDir, 'types.ts'), typesContent.trim() + '\n', 'utf8');

// 2. site.ts
const siteContent = `
export const siteConfig = {
  brandLine: "Governable capability, made new.",
  entityLine: "Aroneu GmbH",
  contactDetails: {
    email: "status: needs-client-input",
    address: "status: needs-client-input",
  },
  primaryCtaLabel: "Book a call",
  secondaryCtaLabel: "See the workspace",
};
`;
fs.writeFileSync(path.join(libContentDir, 'site.ts'), siteContent.trim() + '\n', 'utf8');

// 3. global.ts (Nav and Footer)
const globalContent = `
export const globalNav = {
  items: [
    { label: "Capability Teams", href: "/capability-teams" },
    { label: "AI Workspace", href: "/ai-workspace" },
    { label: "How it works", href: "/how-it-works" },
  ]
};

export const globalFooter = {
  companyGroup: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  capabilityGroup: [
    { label: "Capability Teams", href: "/capability-teams" },
    { label: "AI Workspace", href: "/ai-workspace" },
    { label: "How it works", href: "/how-it-works" },
  ],
  knowledgeGroup: [
    { label: "Insights", href: "/insights" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Resources", href: "/resources" },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Imprint", href: "/imprint" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ]
};
`;
fs.writeFileSync(path.join(libContentDir, 'global.ts'), globalContent.trim() + '\n', 'utf8');

// 4. forms.ts
const formsContent = `
export const contactFormCopy = {
  heading: "Get in touch",
  subcopy: "Reach out to discuss your capability needs.",
  fields: {
    name: "Name",
    email: "Email address",
    message: "How can we help?",
  },
  submitLabel: "Send message",
  status: "shell-placeholder"
};

export const careersFormCopy = {
  heading: "Apply now",
  submitLabel: "Submit application",
  status: "shell-placeholder"
};

export const newsletterFormCopy = {
  heading: "Stay updated",
  submitLabel: "Subscribe",
  status: "shell-placeholder"
};
`;
fs.writeFileSync(path.join(libContentDir, 'forms.ts'), formsContent.trim() + '\n', 'utf8');

// 5. states.ts
const statesContent = `
export const emptyStateCopy = {
  heading: "Nothing here yet",
  subcopy: "Check back later for updates.",
  status: "shell-placeholder"
};

export const errorStateCopy = {
  heading: "Something went wrong",
  subcopy: "We encountered an issue loading this content.",
  retryLabel: "Try again",
  status: "shell-placeholder"
};

export const notFoundCopy = {
  heading: "Page not found",
  subcopy: "The page you are looking for does not exist or has been moved.",
  homeLabel: "Return home",
  status: "final-copy-provided"
};

export const serverErrorCopy = {
  heading: "Server Error",
  subcopy: "An unexpected error occurred.",
  status: "final-copy-provided"
};

export const cookieConsentCopy = {
  heading: "We use cookies",
  subcopy: "To improve your experience and ensure security.",
  acceptLabel: "Accept",
  declineLabel: "Decline",
  status: "shell-placeholder"
};
`;
fs.writeFileSync(path.join(libContentDir, 'states.ts'), statesContent.trim() + '\n', 'utf8');

// 6. seo-fields.ts
const seoFieldsContent = `
export const defaultSeo = {
  metaTitle: "Aroneu | Governable capability, made new.",
  metaDescription: "Aroneu builds governable India capability teams for European companies, run on an AI workspace.",
  ogTitle: "Aroneu",
  ogDescription: "Governable capability, made new.",
};
`;
fs.writeFileSync(path.join(libContentDir, 'seo-fields.ts'), seoFieldsContent.trim() + '\n', 'utf8');

// 7. visual-slots.ts
const visualSlotsContent = `
import { VisualSlot } from './types';

export const workspacePreviewSlot: VisualSlot = {
  id: "workspace-governance-preview",
  purpose: "make-governance-visible",
  recommendedAssetType: "static-mockup",
  placementNote: "AI Workspace hero or visual split section",
  required: true,
  doNotUse: ["neon AI", "robot hands", "fake dashboards"]
};
`;
fs.writeFileSync(path.join(libContentDir, 'visual-slots.ts'), visualSlotsContent.trim() + '\n', 'utf8');

// 8. pages
const pages = [
  'home', 'capability-teams', 'ai-workspace', 'how-it-works', 'about',
  'case-studies', 'insights', 'careers', 'resources', 'contact', 'legal', 'errors'
];

pages.forEach(page => {
  const content = `
import { PageContent } from '../types';

export const ${page.replace(/-/g, '')}Page: PageContent = {
  route: "/${page === 'home' ? '' : page}",
  slug: "${page}",
  pageJob: "Convert awareness to trust",
  sections: [],
  internalNotes: ["Status: shell-placeholder"]
};
`;
  fs.writeFileSync(path.join(libContentPagesDir, `${page}.ts`), content.trim() + '\n', 'utf8');
});

const pagesIndexContent = pages.map(page => `export * from './${page}';`).join('\n') + '\n';
fs.writeFileSync(path.join(libContentPagesDir, 'index.ts'), pagesIndexContent, 'utf8');

// CMS Field Map Doc
const cmsFieldMapContent = `# Aroneu CMS Field Map

Map frontend content to future CMS fields.

## Required Models

- **siteSettings**: brandLine, entityLine, contactDetails (email, address)
- **page**: route, slug, pageJob, audience, beliefShift, primaryCta, secondaryCta, seo, sections
- **pageSection**: id, component, eyebrow, heading, subcopy, body, ctas, items, faqs, visualSlot
- **cta**: label, href, variant
- **faqItem**: question, answer
- **metric**: value, label, note, sourceStatus
- **visualSlot**: id, purpose, recommendedAssetType, placementNote, required, doNotUse
- **caseStudy**: (fields mapped from insight/case-study schemas)
- **insight**: (fields mapped from insight schema)
- **careerRole**: (fields mapped from job schema)
- **resource**: (fields mapped from resource schema)
- **legalPage**: content, effectiveDate
- **formCopy**: heading, subcopy, fields, submitLabel
- **stateCopy**: heading, subcopy, retryLabel, homeLabel
- **seoFields**: metaTitle, metaDescription, canonicalPath, ogTitle, ogDescription, ogImage, robotsIndex, robotsFollow, schemaType
- **navigationItem**: label, href
- **footerGroup**: companyGroup, capabilityGroup, knowledgeGroup, legalLinks

*Note: Live Sanity credentials are NOT connected in this step. This is purely a frontend-safe content schema.*
`;
fs.writeFileSync(path.join(docsDir, 'aroneu-cms-field-map.md'), cmsFieldMapContent, 'utf8');

// Copy Placement Map Doc
const copyPlacementContent = `# Aroneu Copy Placement Map

Route → Section → Component → Content source → CMS-ready field → Status

| Route | Section ID | Section name | Component | Copy source page/section | CMS-ready fields | Visual slot | SEO/AEO/GEO note | Status | Risk/notes |
|---|---|---|---|---|---|---|---|---|---|
| / | hero | Hero | Hero | copy package: Homepage | eyebrow, heading, tagline, ctas | workspace-governance-preview | AEO: define value prop clearly | final-copy-provided | No raw assets placed yet |
| /capability-teams | hero | Hero | Hero | copy package: Capability | eyebrow, heading, subcopy, ctas | explain-model | - | final-copy-provided | - |
| /ai-workspace | hero | Hero | Hero | copy package: AI Workspace | eyebrow, heading, subcopy, ctas | make-governance-visible | WebPage schema default | final-copy-provided | Do not overclaim as SaaS |
`;
fs.writeFileSync(path.join(docsDir, 'aroneu-copy-placement-map.md'), copyPlacementContent, 'utf8');

// Validation Helper
const validateContent = `
import { PageContent } from './types';

export function validatePageContent(page: PageContent) {
  const errors: string[] = [];
  
  if (!page.route) errors.push('Route is missing');
  if (!page.sections) errors.push('Sections array is missing');
  
  page.sections.forEach((sec, idx) => {
    if (!sec.component) errors.push(\`Section \${idx} missing component name\`);
    if (!sec.id) errors.push(\`Section \${idx} missing ID\`);
  });

  return errors;
}
`;
fs.writeFileSync(path.join(libContentDir, 'validate-content.ts'), validateContent.trim() + '\n', 'utf8');

console.log('Content architecture scaffolding complete.');
