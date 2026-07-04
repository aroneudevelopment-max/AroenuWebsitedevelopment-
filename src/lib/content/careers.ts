export type CareerRole = {
  slug: string;
  isApprovedForPublic: boolean;
  title: string;
  location?: string;
  workingModel?: string;
  seniority?: string;
  team?: string;
  employmentType?: string;
  capabilityArea?: string;
  summary?: string;
  responsibilities?: string;
  expectations?: string;
  howTeamOperates: string;
  applicationFlowBody: string;
  seo?: {
    metaTitle: string;
    metaDescription: string;
    ogTitle: string;
    ogDescription: string;
  };
};

export type CareerApplicationForm = {
  fullName: string;
  email: string;
  phone?: string;
  linkedIn?: string;
  portfolio?: string;
  location: string;
  cv?: File;
  message?: string;
  consent: boolean;
  roleSlug: string;
};

// Intentionally empty array - no fake roles allowed as per rules
export const approvedCareers: CareerRole[] = [];
