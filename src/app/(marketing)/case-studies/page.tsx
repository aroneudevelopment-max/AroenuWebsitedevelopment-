import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { AnswerBlock } from "@/components/sections/AnswerBlock";
import { FeaturedCase } from "@/components/sections/case-studies/FeaturedCase";
import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { caseStudiesPage } from "@/lib/content/pages/case-studies";
import { caseStudies } from "@/lib/content/case-studies";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: caseStudiesPage.seo?.metaTitle || "Case studies - governance at scale | Aroneu",
  description: caseStudiesPage.seo?.metaDescription || "",
  path: "/case-studies",
  ogTitle: caseStudiesPage.seo?.ogTitle,
  ogDescription: caseStudiesPage.seo?.ogDescription,
});

export default function CaseStudiesIndex() {
  const sections = caseStudiesPage.sections;

  return (
    <div className="page-case-studies flex flex-col w-full">
      <JsonLd
        data={[
          collectionPageSchema({
            path: "/case-studies",
            name: caseStudiesPage.seo?.metaTitle || "Case studies",
            description: caseStudiesPage.seo?.metaDescription || "",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case studies", path: "/case-studies" },
          ]),
        ]}
      />

      <Hero data={sections.find((s) => s.id === "hero")} withTilt3D={false} />
      <AnswerBlock data={sections.find((s) => s.id === "answer")} />
      <FeaturedCase data={sections.find((s) => s.id === "featured-case")} />
      <CaseStudyGrid
        data={sections.find((s) => s.id === "filters")}
        caseStudies={caseStudies}
        emptyState={sections.find((s) => s.id === "empty-state")}
      />
      <ClosingCTA data={sections.find((s) => s.id === "closing-cta")} />

      <div className="bg-zinc-50 py-16 border-t border-zinc-200">
        <FAQSection data={sections.find((s) => s.id === "faq")} />
      </div>
    </div>
  );
}
