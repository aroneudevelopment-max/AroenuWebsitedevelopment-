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
  id?: string;
  type?: string;
  component?: string;
  label?: string;
  eyebrow?: string;
  heading?: string;
  subcopy?: string;
  body?: string | string[];
  features?: unknown[];
  steps?: unknown[];
  primaryCTA?: Cta;
  secondaryCTA?: Cta;
  ctas?: Cta[];
  metadata?: string[];
  cta?: string;
  href?: string;
  isPublished?: boolean;
  themes?: unknown[];
  items?: unknown[];
  faqs?: FAQItem[];
  outcome?: string;
  image?: string;
  video?: string;
  visualSlot?: VisualSlot;
  pendingProof?: boolean;
  sourceStatus?: "approved" | "provided" | "needs-verification" | "pending";
  internalNotes?: string[];
  labels?: string[];
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
