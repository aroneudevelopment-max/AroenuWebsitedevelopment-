import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { WorkspacePreviewLabels } from "@/components/sections/WorkspacePreviewLabels";
import { WorkspaceVisibilityPanel } from "@/components/sections/WorkspaceVisibilityPanel";
import { GovernanceControlsPanel } from "@/components/sections/GovernanceControlsPanel";
import { AIInsightPanel } from "@/components/sections/AIInsightPanel";
import { DataResponsibilityDiagram } from "@/components/sections/DataResponsibilityDiagram";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { aiWorkspacePage } from "@/lib/content/pages/ai-workspace";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: aiWorkspacePage.seo?.metaTitle || "AI Workspace - scale you can see | Aroneu",
  description: aiWorkspacePage.seo?.metaDescription || "",
  path: "/ai-workspace",
  ogTitle: aiWorkspacePage.seo?.ogTitle,
  ogDescription: aiWorkspacePage.seo?.ogDescription,
});

export default function AIWorkspace() {
  const sections = aiWorkspacePage.sections;
  const faqSection = sections.find((s) => s.id === "ai-workspace-faq");

  return (
    <div className="page-ai-workspace flex flex-col w-full">
      <JsonLd
        data={[
          webPageSchema({
            path: "/ai-workspace",
            name: aiWorkspacePage.seo?.metaTitle || "AI Workspace",
            description: aiWorkspacePage.seo?.metaDescription || "",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "AI Workspace", path: "/ai-workspace" },
          ]),
          ...(faqSection?.faqs ? [faqPageSchema(faqSection.faqs)] : []),
        ]}
      />

      <Hero data={sections.find((s) => s.id === "hero")} withTilt3D={false} />
      <WorkspacePreviewLabels data={sections.find((s) => s.id === "workspace-preview-labels")} />
      <WorkspaceVisibilityPanel data={sections.find((s) => s.id === "what-it-makes-visible")} />
      <GovernanceControlsPanel data={sections.find((s) => s.id === "governance-controls")} />
      <AIInsightPanel data={sections.find((s) => s.id === "ai-supported-insights")} />
      <DataResponsibilityDiagram data={sections.find((s) => s.id === "data-and-responsibility")} />
      <FeatureGrid data={sections.find((s) => s.id === "what-it-does-not-replace")} />

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
