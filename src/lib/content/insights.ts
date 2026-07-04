export type InsightArticle = {
  slug: string;
  isPublished: boolean;
  title: string;
  category: string;
  readingTime: string;
  excerpt: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    ogTitle: string;
    ogDescription: string;
  };
  hero: {
    eyebrow: string;
    h1: string;
    subcopy: string;
    primaryCta: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  };
  directAnswer: string;
  whyThisMatters: string;
  commonMistake: string;
  betterOperatingModel: string;
  checklist: string[];
  howAroneuAppliesThis: string;
  relatedReading: Array<{ label: string; href: string; type: "article" | "resource" | "page" }>;
};

// As per Step 14 instruction: Do not invent final article bodies. 
// No articles are currently published. We export an empty array to be populated when safe.
export const insights: InsightArticle[] = [];
