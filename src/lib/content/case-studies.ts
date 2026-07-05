export interface CaseStudy {
  slug: string;
  title: string;
  excerpt: string;
  capabilities: string[];
  industry: string;
  proofPoint: string;
  context: string;
  teamModel: string;
  role: string;
  challenge: string;
  governance: {
    rhythm: string;
    visibility: string;
    continuity: string;
  };
  aiWorkspace: string;
  outcome: string;
  metrics: {
    label: string;
    value: string;
  }[];
  quote?: {
    text: string;
    attribution: string;
  };
  image?: {
    src: string;
    alt: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "european-automotive-programme",
    title: "European automotive programme",
    excerpt:
      "How a governed India team supported a connected-car ecosystem with clear operating rhythm, documentation, and accountability.",
    capabilities: ["Capability Teams", "AI Workspace", "Automotive", "Governance"],
    industry: "Automotive",
    proofPoint: "Approved proof available on request.",
    context:
      "A European programme where visibility, continuity, and operating control mattered as much as delivery capacity.",
    teamModel: "Senior India capability team",
    role: "Capability extension and governance",
    challenge:
      "The programme required a governed India capability team in an environment where visibility, continuity, and operating control mattered as much as delivery capacity.",
    governance: {
      rhythm:
        "A shared operating rhythm kept delivery updates, leadership checkpoints, and escalation paths easier to govern.",
      visibility:
        "Work status, context, and key decisions stayed visible through structured reporting and the AI Workspace.",
      continuity:
        "Documentation, handovers, and working knowledge were treated as part of the operating model.",
    },
    aiWorkspace:
      "The AI Workspace supported visibility, documentation, decisions, and controls to maintain team health and project continuity.",
    outcome:
      "The case demonstrated how governed India capability can support complex European delivery without relying on public claims that have not been approved for release.",
    metrics: [],
    image: {
      src: "/images/aroneu/abstract-visual.jpeg",
      alt: "Abstract automotive programme visual showing governed India capability and connected systems.",
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
