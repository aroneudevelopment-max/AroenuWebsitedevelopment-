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
    title: "European Automotive OEM",
    excerpt:
      "A governed capability model supporting complex automotive delivery, with emphasis on visibility, operating rhythm, documentation, and accountability.",
    capabilities: ["Capability Teams", "AI Workspace", "Automotive", "Governance"],
    industry: "Automotive",
    proofPoint: "Approved anonymous client context.",
    context:
      "An enterprise automotive delivery context where work visibility and operating control mattered as much as delivery capacity.",
    teamModel: "Governed capability model",
    role: "Capability extension and governance",
    challenge:
      "The client required governed India capability without exposing programme identity publicly.",
    governance: {
      rhythm:
        "A shared operating rhythm kept delivery updates, leadership checkpoints, and escalation paths easier to govern.",
      visibility:
        "Work status, context, and key decisions stayed visible through structured reporting and the AI Workspace.",
      continuity:
        "Documentation, handovers, and working knowledge were treated as part of the operating model.",
    },
    aiWorkspace:
      "The AI Workspace supported visibility, documentation, decisions, and controls to maintain continuity.",
    outcome:
      "The case shows how governed India capability can support complex European delivery without exposing client identity.",
    metrics: [],
    image: {
      src: "/images/aroneu/ai-workspace-visibility-by-default.jpeg",
      alt: "Anonymous automotive capability context with governed delivery visibility.",
    },
  },
  {
    slug: "global-mobility-company",
    title: "Global Mobility Company",
    excerpt:
      "A distributed capability model supported by governance controls, decision visibility, and continuity planning.",
    capabilities: ["Capability Teams", "Governance", "Continuity"],
    industry: "Mobility",
    proofPoint: "Approved anonymous client context.",
    context:
      "A distributed mobility context where continuity planning and decision visibility mattered across locations.",
    teamModel: "Distributed capability model",
    role: "Governance and operating continuity",
    challenge:
      "The client needed distributed capability with clearer control, continuity, and decision visibility.",
    governance: {
      rhythm:
        "Shared routines created predictable governance checkpoints across distributed work.",
      visibility:
        "Decision visibility and accountability stayed easier to review across the model.",
      continuity:
        "Continuity planning reduced dependency on informal handovers.",
    },
    aiWorkspace:
      "The AI Workspace supported continuity, decision traceability, and operating visibility.",
    outcome:
      "The case shows how governance controls and continuity planning can support distributed capability without public client exposure.",
    metrics: [],
    image: {
      src: "/images/aroneu/abstract-visual.jpeg",
      alt: "Anonymous mobility capability context with continuity planning and governance controls.",
    },
  },
  {
    slug: "fortune-500-automotive-client",
    title: "Fortune 500 Automotive Client",
    excerpt:
      "An enterprise capability context where Aroneu supports governed India capability without exposing client identity publicly.",
    capabilities: ["AI Workspace", "Automotive", "Governance"],
    industry: "Automotive",
    proofPoint: "Approved anonymous client context.",
    context:
      "A Fortune 500 automotive environment where enterprise governance mattered as much as delivery execution.",
    teamModel: "Enterprise governed capability context",
    role: "Visibility and accountability support",
    challenge:
      "The client required enterprise-grade visibility and accountability without public naming or logo use.",
    governance: {
      rhythm:
        "Operating rhythm kept leadership reviews and delivery accountability consistent.",
      visibility:
        "Governance views made work, decisions, and controls easier to inspect.",
      continuity:
        "Documentation discipline helped protect context across the enterprise environment.",
    },
    aiWorkspace:
      "The AI Workspace supported governance visibility, documentation discipline, and enterprise continuity.",
    outcome:
      "The case shows how governed India capability can be supported in enterprise automotive delivery without public identity exposure.",
    metrics: [],
    image: {
      src: "/images/aroneu/governance-gate-flow.jpeg",
      alt: "Anonymous enterprise automotive governance context.",
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
