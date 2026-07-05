import { PageContent } from '../types';

export const insightsIndexContent: PageContent = {
  route: "/insights",
  slug: "insights",
  pageJob: "Show intellectual authority by answering serious buyer questions about governance, visibility, capability teams, continuity, and distributed-team trust.",
  seo: {
    metaTitle: "Insights — the brief | Aroneu",
    metaDescription: "Practical thinking on governable India capability teams, visibility, continuity, AI Workspace governance, and distributed-team trust.",
    ogTitle: "The brief on governable capability.",
    ogDescription: "Aroneu insights answer serious buyer questions about India capability, visibility, governance, and long-term continuity.",
  },
  sections: [
    {
      id: "hero",
      type: "hero",
      eyebrow: "Insights",
      heading: "The brief on governable capability.",
      body: "Clear thinking for leaders building India capability without losing visibility, accountability, or control.",
      ctas: [
        { label: "Read featured insight", href: "/insights/talent-was-never-the-problem", variant: "primary" },
        { label: "Book a call", href: "/contact", variant: "secondary" }
      ]
    },
    {
      id: "answer",
      type: "answer",
      body: "Aroneu insights explain how European companies can make India capability more governable through team design, operating rhythm, visibility, documentation, controls, and AI-supported governance."
    },
    {
      id: "featured-article",
      type: "featured-article",
      label: "Featured insight",
      heading: "Talent was never the problem. Governance was.",
      body: "Why offshore models often fail at the operating layer — and what changes when team design, visibility, leadership, and controls are built as one system.",
      metadata: ["Governance", "Capability Teams", "5 min read"],
      cta: "Read the insight",
      href: "/insights/talent-was-never-the-problem",
      isPublished: true
    },
    {
      id: "categories",
      type: "filters",
      label: "Topics",
      items: [
        "All",
        "Governance",
        "Capability Teams",
        "AI Workspace",
        "Continuity",
        "Leadership",
        "Distributed teams",
        "Buyer guides",
        "Talent"
      ]
    },

    {
      id: "empty-state",
      type: "empty-state",
      heading: "No insights found.",
      body: "Try another topic or check back as new briefs are published.",
      primaryCTA: { label: "Clear filters", href: "#" }
    },
    {
      id: "closing-cta",
      type: "cta",
      heading: "Have a question about governable capability?",
      body: "Tell us what you are trying to build. We can help you think through the team model, governance need, and right next step.",
      ctas: [
        { label: "Book a call", href: "/contact", variant: "primary" }
      ]
    },
    {
      id: "faq",
      type: "faq",
      heading: "Insights FAQ",
      faqs: [
        {
          question: "What topics does Aroneu write about?",
          answer: "Aroneu writes about governable India capability, team design, visibility, continuity, AI-supported governance, and distributed-team trust."
        },
        {
          question: "Are these generic blog posts?",
          answer: "No. Each insight should answer one serious buyer question clearly. The goal is to help leaders understand the operating model before they make a team decision."
        },
        {
          question: "Can insights help us compare team models?",
          answer: "Yes. Some insights compare models such as a Capability Team, staffing model, EOR model, captive centre, or traditional vendor delivery."
        },
        {
          question: "Can we suggest a topic?",
          answer: "Yes. If you are trying to understand a governance problem, contact Aroneu and share the question you are working through."
        }
      ]
    }
  ],
  internalNotes: [
    "Article themes are safe as editorial directions, not claims.",
    "Do not publish articles that sound like generic SEO filler.",
    "Each article should contain a direct answer near the top and visible FAQ only when useful.",
    "The source defines the featured article, categories, article card fields, suggested article themes, empty state, closing CTA, FAQ, internal links, alt text, and internal notes above."
  ]
};
