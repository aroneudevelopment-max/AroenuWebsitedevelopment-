import { PageContent } from "../types";

export const resourcesPage: PageContent = {
  route: "/resources",
  slug: "resources",
  pageJob:
    "Provide practical, sourced resources on governable India capability, AI-supported governance, and operating rhythm. No fabricated case studies, metrics, or claims.",
  seo: {
    metaTitle: "Resources - governable capability guides | Aroneu",
    metaDescription:
      "Planning guides and checklists for European companies evaluating India capability teams, governance, visibility, and continuity.",
  },
  sections: [
    {
      id: "hero",
      type: "hero",
      eyebrow: "Resources",
      heading: "Practical thinking on governable capability.",
      subcopy:
        "Resources for leaders who need senior India capability without losing governance, visibility, or continuity. New resources will appear here once they are approved.",
      image: "/images/aroneu/ai-workspace-control-what-matters.jpeg",
      imageAlt: "",
      primaryCTA: { label: "Book a call", href: "/book-a-call" },
      secondaryCTA: { label: "Read insights", href: "/insights" },
    },
    {
      id: "empty-state",
      type: "empty-state",
      heading: "Resources are being prepared.",
      body:
        "Aroneu is preparing practical resources on governable India capability, AI-supported governance, and operating rhythm. New resources will appear here once they are approved.",
      primaryCTA: { label: "Read insights", href: "/insights" },
    },
    {
      id: "closing-cta",
      type: "closingCTA",
      heading: "Need a specific resource now?",
      body:
        "If you are working through a particular governance or capability question, contact Aroneu. We can help shape the right brief for your team.",
      primaryCTA: { label: "Book a call", href: "/book-a-call" },
      secondaryCTA: { label: "See how it works", href: "/how-it-works" },
    },
    {
      id: "faq",
      type: "faq",
      heading: "Resources FAQ",
      faqs: [
        {
          question: "What kinds of resources will Aroneu publish?",
          answer:
            "Practical briefs, short guides, and structured overviews on governable India capability, AI-supported governance, and operating rhythm. None of the resources will be repackaged generic content.",
        },
        {
          question: "Are resources gated?",
          answer:
            "Some resources may be gated and others ungated, depending on the topic. The final gating decisions will be confirmed as resources are approved.",
        },
        {
          question: "Can we suggest a resource topic?",
          answer:
            "Yes. If there is a governance or operating question you are working through, contact Aroneu and share it.",
        },
      ],
    },
  ],
  internalNotes: [
    "Status: shell-placeholder",
    "Resources list is intentionally empty until content is approved.",
    "Do not invent resource titles, descriptions, or gating states.",
  ],
};
