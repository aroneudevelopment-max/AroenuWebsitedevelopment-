import { Metadata } from "next";
import { capabilityTeamsPage } from "@/lib/content/pages/capability-teams";
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

export const metadata: Metadata = {
  title: capabilityTeamsPage.seo?.metaTitle,
  description: capabilityTeamsPage.seo?.metaDescription,
  openGraph: {
    title: capabilityTeamsPage.seo?.ogTitle,
    description: capabilityTeamsPage.seo?.ogDescription,
  },
};

export default function CapabilityTeams() {
  const sections = capabilityTeamsPage.sections;

  return (
    <div className="page-capability-teams flex flex-col w-full">
      {/* 1. Hero */}
      <Hero data={sections.find((s) => s.id === "hero")} />

      {/* 2. What you get */}
      <FeatureGrid data={sections.find((s) => s.id === "what-you-get")} />

      {/* 3. Roles / capability areas */}
      <RoleTagGrid data={sections.find((s) => s.id === "roles-capability-areas")} />

      {/* 4. Governance built in */}
      <GovernanceAroundTeamDiagram data={sections.find((s) => s.id === "governance-built-in")} />

      {/* 5. Retention by design */}
      <RetentionProof data={sections.find((s) => s.id === "retention-by-design")} />

      {/* 6. Model comparison */}
      <ComparisonTable data={sections.find((s) => s.id === "model-comparison")} />

      {/* 7. Objection and answer table */}
      <ObjectionTable data={sections.find((s) => s.id === "objection-table")} />

      {/* 8. Internalise / transfer optionality */}
      <InternaliseTransferDiagram data={sections.find((s) => s.id === "internalise-optionality")} />

      {/* 9. Closing CTA - on paper, not dark */}
      <div className="py-16 surface-paper">
        <ClosingCTA data={sections.find((s) => s.id === "closing-cta")} />
      </div>

      {/* 10. FAQ - on sand surface so the dark contrast bug is eliminated */}
      <div className="bg-zinc-50 py-16 border-t border-zinc-200">
        <div className="container-aroneu max-w-4xl mx-auto">
          <FAQSection data={sections.find((s) => s.id === "capability-teams-faq")} />
        </div>
      </div>
    </div>
  );
}
