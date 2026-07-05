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
      /* Burhan decision 2026-07-05: do not reuse the F1 AI-workspace governance
         panel here. Use the brand bridge / capability-team visual instead. */
      eyebrow: "Capability Teams",
      heading: "Capability Teams, run as an extension of your business.",
      subcopy: "Aroneu builds dedicated, senior India teams around your operating needs. The team works with your standards, your rhythm, and the governance needed to stay visible.",
      image: "/images/aroneu/abstract-visual.jpeg",
      ctas: [
        { label: "Book a call", href: "/contact", variant: "primary" },
        { label: "See the workspace", href: "/ai-workspace", variant: "secondary" }
      ],
      visualSlot: {
        id: "capability-teams-hero",
        purpose: "explain-model",
        recommendedAssetType: "photo",
        placementNote: "Capability-team system visual / Europe-India bridge motif",
        required: true,
        doNotUse: ["developer face grid", "hiring marketplace UI", "AI workspace panel"]
      },
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
      body: "Aroneu's model is built to keep teams stable: selective hiring, domain identity, local leadership, intercultural enablement, and meaningful connection to the work.",
      /* Burhan decision 2026-07-05: do not publish <4% attrition as proof
         unless approved. It is not. Show a safe pending-proof treatment. */
      items: [
        { value: "—", label: "attrition", description: "Governed attrition figures are pending verification in the Aroneu governance ledger." }
      ],
      pendingProof: true,
      subcopy: "Retention matters because every departure takes context with it. Aroneu treats continuity as a design requirement, not a hope.",
      internalNotes: [
        "Status: pending-proof",
        "Reason: <4% attrition not explicitly approved in the source-ledger."
      ]
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
