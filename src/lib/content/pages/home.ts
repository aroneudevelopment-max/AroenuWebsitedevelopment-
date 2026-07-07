import { PageContent } from "../types";

export const homePage: PageContent = {
  route: "/",
  slug: "home",
  pageJob: "Explain Aroneu and make the model believable fast.",
  audience: ["CTO", "VP Engineering", "COO", "CFO", "delivery leader"],
  beliefShift: "India teams are risky -> India capability can be governed.",
  primaryCta: { label: "Book a call", href: "/book-a-call", variant: "primary" },
  secondaryCta: {
    label: "See the workspace",
    href: "/ai-workspace",
    variant: "secondary",
  },
  seo: {
    metaTitle: "Aroneu - Governable India capability teams",
    metaDescription:
      "Senior India teams European companies can govern, supported by an AI Workspace that makes work, decisions, and controls visible.",
    ogTitle: "Make India capability governable.",
    ogDescription:
      "Aroneu builds senior India capability teams for European companies, with the governance, visibility, and accountability needed to trust work at distance.",
    canonicalPath: "/",
  },
  sections: [
    {
      id: "hero",
      component: "Hero",
      eyebrow: "India capability, European governance",
      heading: "Make India capability governable.",
      subcopy:
        "Aroneu builds dedicated, senior India teams for European companies. Each team runs as an extension of your business, supported by an AI Workspace that makes work, decisions, and controls visible.",
      image: "/images/aroneu/home-governable-capability-poster.jpg",
      imageAlt: "AI Workspace governance preview showing visible controls and governed output",
      ctas: [
        { label: "Book a call", href: "/book-a-call", variant: "primary" },
        {
          label: "See the workspace",
          href: "/ai-workspace",
          variant: "secondary",
        },
      ],
      visualSlot: {
        id: "homepage-master-hero",
        purpose: "make-governance-visible",
        recommendedAssetType: "photo",
        placementNote:
          "Homepage master hero - preferred brand bridge / Europe-India motif",
        required: true,
        doNotUse: ["neon AI", "robot hands", "fake dashboards", "spinning globe"],
      },
      video: "/videos/home-governable-capability.mp4",
      videoPoster: "/images/aroneu/home-governable-capability-poster.jpg",
      videoAlt: "AI Workspace governance preview showing visible controls and governed output",
      internalNotes: ["Status: final-copy-provided"],
    },
    {
      id: "proof-strip",
      component: "ProofStrip",
      items: [
        { title: "Complex European programmes" },
        { title: "Governed team continuity" },
        { title: "Senior capability built and run" },
      ],
      pendingProof: true,
      internalNotes: ["Status: final-copy-provided"],
    },
    {
      id: "problem",
      component: "ProblemList",
      eyebrow: "The problem",
      heading: "Talent was never the problem. Governance was.",
      body:
        "India has serious capability. Europe needs capacity. The risk begins when distance turns into opacity - slow onboarding, weak context, silent misunderstanding, knowledge loss, and unclear accountability.",
      items: [
        {
          title: "Slow onboarding",
          description: "Teams start without enough business context.",
        },
        {
          title: "Hidden drift",
          description: "Misunderstanding stays quiet until it costs time.",
        },
        {
          title: "Knowledge loss",
          description: "Decisions live in chats, people, and handovers.",
        },
        {
          title: "Weak accountability",
          description: "Leaders receive updates, but not the full operating picture.",
        },
        {
          title: "Informal control",
          description: "Work moves forward, but governance stays scattered.",
        },
      ],
      internalNotes: ["Status: final-copy-provided"],
    },
    {
      id: "two-capabilities",
      component: "CapabilityCards",
      eyebrow: "The Aroneu model",
      heading: "One model. Two connected capabilities.",
      body:
        "Aroneu combines Capability Teams and the AI Workspace so people, rhythm, controls, and visibility are designed together.",
      items: [
        {
          title: "Capability Teams",
          description:
            "Senior India teams built and run as an extension of your business - with role fit, local leadership, shared standards, and continuity planning.",
          href: "/capability-teams",
          ctaLabel: "Explore Capability Teams",
        },
        {
          title: "AI Workspace",
          description:
            "The governance layer around every team, making work, decisions, controls, and team health easier to see and improve.",
          href: "/ai-workspace",
          ctaLabel: "See the workspace",
        },
      ],
      internalNotes: ["Status: final-copy-provided"],
    },
    {
      id: "how-it-works-preview",
      component: "StepRow",
      eyebrow: "Operating model",
      heading: "Start lean. Build with confidence.",
      body:
        "Aroneu moves from the team you need to the rhythm that keeps it governed.",
      items: [
        {
          title: "Discover",
          description:
            "Define the capability, risks, role mix, and governance needs before the team is built.",
        },
        {
          title: "Build",
          description:
            "Select senior India talent, onboard business context, and establish the operating rhythm.",
        },
        {
          title: "Run",
          description:
            "Keep work visible through leadership routines, documentation, controls, and the AI Workspace.",
        },
      ],
      ctas: [
        {
          label: "See how it works",
          href: "/how-it-works",
          variant: "secondary",
        },
      ],
      internalNotes: ["Status: final-copy-provided"],
    },
    {
      id: "proof-at-scale",
      component: "StatQuad",
      eyebrow: "Proof at scale",
      heading: "Built for serious operating environments.",
      body:
        "Aroneu is built for complex European delivery where team visibility, continuity, and operating control matter as much as capacity.",
      items: [
        {
          title: "Scale is not only headcount.",
          description:
            "It is the ability to keep work visible as complexity grows.",
        },
        {
          title: "Governance is not only reporting.",
          description:
            "It is the rhythm, ownership, and controls around delivery.",
        },
        {
          title: "Continuity is not only retention.",
          description:
            "It is the way knowledge, context, and decisions stay usable over time.",
        },
      ],
      ctas: [
        {
          label: "Read the case study",
          href: "/case-studies",
          variant: "secondary",
        },
      ],
      internalNotes: ["Status: final-copy-provided"],
    },
    {
      id: "leadership",
      component: "LeadershipPreview",
      eyebrow: "Governance ownership",
      heading: "A governed model needs clear owners.",
      body:
        "Aroneu is designed around clear accountability. Clients should understand who owns governance, who leads the operating rhythm, and how decisions remain visible across the model.\n\nLeadership is built into the system through defined roles, shared routines, and workspace visibility.",
      image: "/images/aroneu/governance-ownership-visual.jpeg",
      imageAlt:
        "Role-based governance ownership visual showing European governance, India operations, and delivery leadership.",
      items: [
        { title: "Governance" },
        { title: "Operations" },
        { title: "Delivery" },
      ],
      ctas: [{ label: "Talk to the team", href: "/contact", variant: "secondary" }],
      internalNotes: ["Status: final-copy-provided"],
    },
    {
      id: "careers-bridge",
      component: "ClosingCTA",
      eyebrow: "For senior India talent",
      heading: "Serious work, taken seriously.",
      body:
        "Aroneu is built for people who want their work to be visible, trusted, and connected to critical European business outcomes.",
      ctas: [{ label: "View open roles", href: "/careers", variant: "secondary" }],
      internalNotes: ["Status: final-copy-provided"],
    },
    {
      id: "closing-cta",
      component: "ClosingCTA",
      heading: "Build the team you can see, govern, and trust.",
      body:
        "Tell us what capability you need, where governance matters, and what level of ownership you want to preserve.",
      ctas: [
        { label: "Book a call", href: "/book-a-call", variant: "primary" },
        {
          label: "See how it works",
          href: "/how-it-works",
          variant: "secondary",
        },
      ],
      internalNotes: ["Status: final-copy-provided"],
    },
    {
      id: "homepage-faq",
      component: "FAQSection",
      faqs: [
        {
          question: "What does Aroneu do?",
          answer:
            "Aroneu builds governable India capability teams for European companies. Each team is designed around senior talent, operating rhythm, visibility, controls, and an AI Workspace that supports governance.",
        },
        {
          question: "Who is Aroneu for?",
          answer:
            "Aroneu is for European companies that need senior India capability but do not want a distant team they cannot see, govern, or trust. It is designed for leaders who care about accountability, continuity, and control.",
        },
        {
          question: "What is a Capability Team?",
          answer:
            "A Capability Team is a dedicated India-based team built and run as an extension of your business. It is shaped around role fit, senior talent, local leadership, shared standards, and continuity planning.",
        },
        {
          question: "What is the AI Workspace?",
          answer:
            "The AI Workspace is the governance layer around every Aroneu team. It helps make work, decisions, controls, documentation, team health, and AI-supported insights visible in one operating space.",
        },
        {
          question:
            "How is Aroneu different from a traditional vendor team?",
          answer:
            "Aroneu is built around long-term capability, not disconnected task delivery. The model combines senior team design, local leadership, shared routines, governance controls, and visibility through the AI Workspace.",
        },
      ],
      internalNotes: ["Status: final-copy-provided"],
    },
  ],
};
