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
      image: "/images/aroneu/governance-controls-panel.png",
      video: "/videos/governance-explainer.mp4",
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
      image: "/images/aroneu/ai-supported-insight-panel.png",
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
