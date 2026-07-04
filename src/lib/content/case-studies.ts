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
    excerpt: "How a governed India team supported a connected-car ecosystem with clear operating rhythm, documentation, and accountability.",
    capabilities: ["Capability Teams", "AI Workspace", "Automotive", "Governance"],
    industry: "Automotive",
    proofPoint: "Pending approved proof",
    context: "A European programme where visibility, continuity, and operating control mattered as much as delivery capacity.",
    teamModel: "Senior India capability team",
    role: "Capability extension and governance",
    challenge: "Pending approved details. The client required a governed India capability team built around automotive, governance needs, and connected-car ecosystem complexity.",
    governance: {
      rhythm: "Pending approved cadence.",
      visibility: "Pending approved visibility mechanism.",
      continuity: "Pending approved documentation mechanism."
    },
    aiWorkspace: "The AI Workspace supported visibility, documentation, decisions, and controls to maintain team health and project continuity.",
    outcome: "Pending approved outcome details.",
    metrics: [],
    image: {
      src: "/images/Abstract_visual_for_Aroneu_202607030333 (1).jpeg",
      alt: "Abstract automotive programme visual showing governed India capability and connected systems."
    }
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(c => c.slug === slug);
}
