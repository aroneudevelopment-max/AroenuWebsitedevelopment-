import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { AnswerBlock } from "@/components/sections/AnswerBlock";
import { CapabilityCards } from "@/components/sections/CapabilityCards";
import { CareersRoleGrid } from "@/components/sections/CareersRoleGrid";
import { StepRow } from "@/components/sections/StepRow";
import { FAQSection } from "@/components/sections/FAQSection";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { careersIndexContent, careerFaq } from "@/lib/content/pages/careers";
import { approvedCareers } from "@/lib/content/careers";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: careersIndexContent.seo.metaTitle,
  description: careersIndexContent.seo.metaDescription,
  path: "/careers",
  ogTitle: careersIndexContent.seo.ogTitle,
  ogDescription: careersIndexContent.seo.ogDescription,
});

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={[
          collectionPageSchema({
            path: "/careers",
            name: careersIndexContent.seo.metaTitle,
            description: careersIndexContent.seo.metaDescription,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Careers", path: "/careers" },
          ]),
        ]}
      />

      <Hero
        data={{
          eyebrow: careersIndexContent.hero.eyebrow,
          heading: careersIndexContent.hero.h1,
          subcopy: careersIndexContent.hero.subcopy,
          primaryCTA: careersIndexContent.hero.primaryCta,
          secondaryCTA: careersIndexContent.hero.secondaryCta,
          image: "/images/aroneu/senior-professionals-general.jpeg",
          imageAlt: "Senior professionals reviewing governance and operating rhythm",
        }}
      />

      <AnswerBlock data={{ body: careersIndexContent.answerBlock }} />

      <CapabilityCards
        data={{
          eyebrow: careersIndexContent.whyAroneu.label,
          heading: careersIndexContent.whyAroneu.heading,
          subcopy: careersIndexContent.whyAroneu.body,
          items: careersIndexContent.whyAroneu.cards.map((c) => ({
            heading: c.title,
            body: c.body,
          })),
        }}
      />

      <CapabilityCards
        data={{
          eyebrow: careersIndexContent.lifeAndValues.label,
          heading: careersIndexContent.lifeAndValues.heading,
          subcopy: careersIndexContent.lifeAndValues.body,
          items: careersIndexContent.lifeAndValues.values.map((c) => ({
            heading: c.title,
            body: c.body,
          })),
        }}
      />

      <CareersRoleGrid
        label={careersIndexContent.openRoles.label}
        heading={careersIndexContent.openRoles.heading}
        body={careersIndexContent.openRoles.body}
        roles={approvedCareers}
        emptyState={careersIndexContent.emptyRolesState}
      />

      <StepRow
        data={{
          eyebrow: careersIndexContent.applicationFlow.label,
          heading: careersIndexContent.applicationFlow.heading,
          items: careersIndexContent.applicationFlow.steps.map((s) => ({
            heading: s.title,
            body: s.body,
          })),
        }}
      />

      <FAQSection
        data={{
          heading: "Careers FAQ",
          faqs: careerFaq.faq,
        }}
      />

      <ClosingCTA
        data={{
          heading: careersIndexContent.closingCta.heading,
          body: careersIndexContent.closingCta.body,
          primaryCTA: careersIndexContent.closingCta.primaryCta,
          secondaryCTA: careersIndexContent.closingCta.secondaryCta,
        }}
      />
    </>
  );
}
