import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { RoleTagGrid } from "@/components/sections/RoleTagGrid";
import { GovernanceAroundTeamDiagram } from "@/components/sections/GovernanceAroundTeamDiagram";
import { RetentionProof } from "@/components/sections/RetentionProof";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { ObjectionTable } from "@/components/sections/ObjectionTable";
import { InternaliseTransferDiagram } from "@/components/sections/InternaliseTransferDiagram";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { capabilityTeamsPage } from "@/lib/content/pages/capability-teams";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: capabilityTeamsPage.seo?.metaTitle || "Capability Teams - an extension of your team | Aroneu",
  description: capabilityTeamsPage.seo?.metaDescription || "",
  path: "/capability-teams",
  ogTitle: capabilityTeamsPage.seo?.ogTitle,
  ogDescription: capabilityTeamsPage.seo?.ogDescription,
});

export default function CapabilityTeams() {
  const sections = capabilityTeamsPage.sections;
  const faqSection = sections.find((s) => s.id === "capability-teams-faq");

  return (
    <div className="page-capability-teams flex flex-col w-full">
      <JsonLd
        data={[
          serviceSchema({
            path: "/capability-teams",
            name: "Capability Teams",
            description: capabilityTeamsPage.seo?.metaDescription || "",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Capability Teams", path: "/capability-teams" },
          ]),
          ...(faqSection?.faqs ? [faqPageSchema(faqSection.faqs)] : []),
        ]}
      />

      <Hero data={sections.find((s) => s.id === "hero")} />
      <FeatureGrid data={sections.find((s) => s.id === "what-you-get")} />
      <RoleTagGrid data={sections.find((s) => s.id === "roles-capability-areas")} />
      <GovernanceAroundTeamDiagram data={sections.find((s) => s.id === "governance-built-in")} />
      <RetentionProof data={sections.find((s) => s.id === "retention-by-design")} />
      <ComparisonTable data={sections.find((s) => s.id === "model-comparison")} />
      <ObjectionTable data={sections.find((s) => s.id === "objection-table")} />
      <InternaliseTransferDiagram data={sections.find((s) => s.id === "internalise-optionality")} />

      <div className="py-16 surface-paper">
        <ClosingCTA data={sections.find((s) => s.id === "closing-cta")} />
      </div>

      <div className="bg-zinc-50 py-16 border-t border-zinc-200">
        <div className="container-aroneu max-w-4xl mx-auto">
          <FAQSection data={faqSection} />
        </div>
      </div>
    </div>
  );
}
