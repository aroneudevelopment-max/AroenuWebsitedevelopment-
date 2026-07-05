export type InsightArticle = {
  slug: string;
  isPublished: boolean;
  title: string;
  category: string;
  image?: string;
  readingTime: string;
  excerpt: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    ogTitle: string;
    ogDescription: string;
  };
  hero: {
    eyebrow: string;
    h1: string;
    subcopy: string;
    primaryCta: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  };
  directAnswer: string;
  whyThisMatters: string;
  commonMistake: string;
  betterOperatingModel: string;
  checklist: string[];
  howAroneuAppliesThis: string;
  relatedReading: Array<{ label: string; href: string; type: "article" | "resource" | "page" }>;
};

/**
 * Published insight article: "Talent was never the problem. Governance was."
 * This is the featured insight referenced in the insights index page.
 * Content matches the approved source copy exactly.
 */
export const insights: InsightArticle[] = [
  {
    slug: "talent-was-never-the-problem",
    isPublished: true,
    title: "Talent Was Never The Problem — Governance Was",
    category: "Governance",
    image: "/images/aroneu/governance-gate-flow.jpeg",
    readingTime: "5 min read",
    excerpt: "Why offshore models often fail at the operating layer — and what changes when team design, visibility, leadership, and controls are built as one system.",
    seo: {
      metaTitle: "Talent Was Never The Problem — Governance Was | Aroneu",
      metaDescription: "Why offshore models often fail at the operating layer — and what changes when team design, visibility, leadership, and controls are built as one system.",
      ogTitle: "Talent Was Never The Problem — Governance Was",
      ogDescription: "Why offshore models often fail at the operating layer — and what changes when team design, visibility, leadership, and controls are built as one system.",
    },
    hero: {
      eyebrow: "Governance",
      h1: "Talent Was Never The Problem — Governance Was",
      subcopy: "Why offshore models often fail at the operating layer — and what changes when team design, visibility, leadership, and controls are built as one system.",
      primaryCta: { label: "Book a call", href: "/contact" },
      secondaryCta: { label: "Back to insights", href: "/insights" },
    },
    directAnswer: "Most offshore teams do not fail because of talent quality. They fail because there is no governance system connecting the team to the business. Without visibility, operating rhythm, named leadership, and documented controls, even strong teams drift into opacity.",
    whyThisMatters: "European companies need India capability — but they also need to trust the work at distance. When governance is missing, the relationship depends on informal updates, periodic check-ins, and hope. That is not a sustainable operating model.",
    commonMistake: "The most common mistake is treating governance as a reporting layer added after the team is built. Governance is not a dashboard. It is the system that connects team design, operating rhythm, visibility, controls, and continuity into one accountable structure.",
    betterOperatingModel: "Aroneu builds governance into the team from day one. Every Capability Team has a named India Lead, a documented operating rhythm, a shared AI Workspace for visibility, and a set of controls that European leadership can see and trust.",
    checklist: [
      "Named India leadership with accountable authority",
      "Documented operating rhythm visible to both sides",
      "Shared AI Workspace for decisions, context, and controls",
      "Continuity planning built into the team model",
      "Governance controls European leadership can see and audit",
    ],
    howAroneuAppliesThis: "Aroneu does not add governance as an afterthought. The entire Capability Team model is designed around governance — team shape, operating rhythm, visibility, controls, and continuity are built as one connected system.",
    relatedReading: [
      { label: "How it works", href: "/how-it-works", type: "page" },
      { label: "Capability Teams", href: "/capability-teams", type: "page" },
      { label: "Book a call", href: "/contact", type: "page" },
    ],
  },
];
