import { PageContent } from "../types";

export const caseStudiesPage: PageContent = {
  route: "/case-studies",
  slug: "case-studies",
  pageJob:
    "Prove Aroneu's model with controlled, approved evidence. The page should show how teams were governed, not only what outcomes were achieved.",
  seo: {
    metaTitle: "Case studies - governance at scale | Aroneu",
    metaDescription:
      "See how governed India capability teams support serious European delivery through visibility, accountability, and continuity.",
    ogTitle: "Governance at scale.",
    ogDescription:
      "Aroneu case studies show how senior India teams are built, governed, and made visible for European companies.",
  },
  sections: [
    {
      id: "hero",
      type: "hero",
      eyebrow: "Case studies",
      heading: "Governance at scale.",
      body:
        "Proof should show more than delivery. It should show how the team was built, how work stayed visible, and how governance held as complexity grew.",
      image: "/images/aroneu/home-governable-capability-poster.jpg",
      imageAlt: "Governed capability model supporting complex European delivery",
      ctas: [
        { label: "Discuss relevant proof", href: "/contact", variant: "primary" },
        { label: "Book a call", href: "/book-a-call", variant: "secondary" },
      ],
    },
    {
      id: "answer",
      type: "answer",
      body:
        "Aroneu case studies show how governable India capability teams are designed, run, and supported by an AI Workspace. Each case focuses on the challenge, team model, governance approach, operating rhythm, AI Workspace role, outcome, and approved proof.",
    },
    {
      id: "featured-case",
      type: "featured-case",
      label: "Featured case",
      heading: "A governed capability model for complex European delivery.",
      body:
        "A senior India capability team supported a European programme where visibility, continuity, and operating control mattered as much as delivery capacity.",
      items: [
        {
          title: "European automotive programme",
          excerpt:
            "How a governed India team supported a connected-car ecosystem with clear operating rhythm, documentation, and accountability.",
          metadata: ["Capability Teams", "AI Workspace", "Automotive", "Governance"],
          cta: "Discuss relevant proof",
          href: "/contact",
          image: {
            src: "/images/aroneu/ai-workspace-visibility-by-default.jpeg",
            alt: "Governed capability model supporting complex European delivery",
          },
        },
      ],
    },
    {
      id: "filters",
      type: "filters",
      label: "Filter by",
      items: [
        "All",
        "Capability Teams",
        "AI Workspace",
        "Engineering",
        "Cloud",
        "Quality",
        "Support",
        "Automotive",
        "Governance",
        "Continuity",
      ],
      subcopy: "Find proof by capability, industry, or governance need.",
    },
    {
      id: "empty-state",
      type: "empty-state",
      heading: "Case studies are being prepared.",
      body:
        "Approved case studies will appear here once client names, proof points, and public wording are cleared.",
      primaryCTA: { label: "Book a call", href: "/book-a-call" },
    },
    {
      id: "faq",
      type: "faq",
      heading: "Case studies FAQ",
      faqs: [
        {
          question: "What will Aroneu case studies show?",
          answer:
            "Each case study will show the challenge, team model, governance approach, operating rhythm, AI Workspace role, outcome, and approved proof. The goal is to show how the work was governed, not only what was delivered.",
        },
        {
          question: "Why does Aroneu focus on governance in case studies?",
          answer:
            "Governance is the difference between adding remote capacity and building trusted capability. Aroneu case studies are designed to show how visibility, accountability, continuity, and controls worked around the team.",
        },
        {
          question: "Can case studies be anonymised?",
          answer:
            "Yes. Where public naming is not approved, Aroneu can use anonymised case-study framing that protects the client while still explaining the model, mechanism, and approved proof.",
        },
        {
          question: "Can we discuss relevant proof privately?",
          answer:
            "Yes. Some proof may be shared during a qualified conversation if public naming, logos, or metrics are not approved for the website.",
        },
      ],
    },
    {
      id: "closing-cta",
      type: "cta",
      heading: "Want to see proof for your kind of team?",
      body:
        "Tell us the capability you are considering and the governance risks you need to control. We can share the most relevant approved proof during the conversation.",
      ctas: [
        { label: "Book a call", href: "/book-a-call", variant: "primary" },
        { label: "See how it works", href: "/how-it-works", variant: "secondary" },
      ],
    },
  ],
  internalNotes: [
    "Do not publish named clients, logos, direct quotes, or metrics unless approved.",
    "The featured case uses anonymised framing and avoids claiming Aroneu built an entire platform.",
  ],
};
