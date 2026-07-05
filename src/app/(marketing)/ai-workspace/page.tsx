import { Metadata } from "next";
import { aiWorkspacePage } from "@/lib/content/pages/ai-workspace";
import { Hero } from "@/components/sections/Hero";
import { WorkspacePreviewLabels } from "@/components/sections/WorkspacePreviewLabels";
import { WorkspaceVisibilityPanel } from "@/components/sections/WorkspaceVisibilityPanel";
import { GovernanceControlsPanel } from "@/components/sections/GovernanceControlsPanel";
import { AIInsightPanel } from "@/components/sections/AIInsightPanel";
import { DataResponsibilityDiagram } from "@/components/sections/DataResponsibilityDiagram";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: aiWorkspacePage.seo?.metaTitle,
  description: aiWorkspacePage.seo?.metaDescription,
  openGraph: {
    title: aiWorkspacePage.seo?.ogTitle,
    description: aiWorkspacePage.seo?.ogDescription,
  },
};

export default function AIWorkspace() {
  const sections = aiWorkspacePage.sections;

  return (
    <div className="page-ai-workspace flex flex-col w-full">
      {/* 1. Hero — flat render (no Tilt3D) per the AI Workspace motion brief:
         panels should feel like a governed product preview, not a 3D scene. */}
      <Hero data={sections.find((s) => s.id === "hero")} withTilt3D={false} />

      {/* Workspace preview labels - anchored visual per placement doc */}
      <WorkspacePreviewLabels data={sections.find((s) => s.id === "workspace-preview-labels")} />

      {/* 2. What it makes visible */}
      <WorkspaceVisibilityPanel data={sections.find((s) => s.id === "what-it-makes-visible")} />

      {/* 3. Governance controls */}
      <GovernanceControlsPanel data={sections.find((s) => s.id === "governance-controls")} />

      {/* 4. AI-supported insights */}
      <AIInsightPanel data={sections.find((s) => s.id === "ai-supported-insights")} />

      {/* 5. Data and responsibility */}
      <DataResponsibilityDiagram data={sections.find((s) => s.id === "data-and-responsibility")} />

      {/* 7. What the workspace does not replace */}
      <FeatureGrid data={sections.find((s) => s.id === "what-it-does-not-replace")} />

      {/* 8. Closing CTA - on paper, not dark */}
      <div className="py-16 surface-paper">
        <ClosingCTA data={sections.find((s) => s.id === "closing-cta")} />
      </div>

      {/* 9. FAQ - on sand surface so the dark contrast bug is eliminated */}
      <div className="bg-zinc-50 py-16 border-t border-zinc-200">
        <div className="container-aroneu max-w-4xl mx-auto">
          <FAQSection data={sections.find((s) => s.id === "ai-workspace-faq")} />
        </div>
      </div>
    </div>
  );
}
