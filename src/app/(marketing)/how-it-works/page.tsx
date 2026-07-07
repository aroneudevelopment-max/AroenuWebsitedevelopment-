import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { AnswerBlock } from "@/components/sections/AnswerBlock";
import { ProcessOverview } from "@/components/sections/ProcessOverview";
import { DiscoverPlanningCards } from "@/components/sections/DiscoverPlanningCards";
import { BuildSetupCards } from "@/components/sections/BuildSetupCards";
import { RunGovernanceRhythm } from "@/components/sections/RunGovernanceRhythm";
import { HandoverContinuityPath } from "@/components/sections/HandoverContinuityPath";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { howitworksPage } from "@/lib/content/pages/how-it-works";
import { SectionContent } from "@/lib/content/types";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "How it works - Discover, Build, Run | Aroneu",
  description:
    "Start lean and build with confidence: how Aroneu stands up and governs a dedicated India team.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  const { sections } = howitworksPage;
  const getSectionByType = (type: string) =>
    sections.find((section: SectionContent) => section.type === type);

  const heroData = getSectionByType("hero");
  const answerBlockData = getSectionByType("answerBlock");
  const processOverviewData = getSectionByType("processOverview");
  const discoverData = getSectionByType("discover");
  const buildData = getSectionByType("build");
  const runData = getSectionByType("run");
  const continuityData = getSectionByType("continuity");
  const closingCTAData = getSectionByType("closingCTA");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <JsonLd
        data={[
          webPageSchema({
            path: "/how-it-works",
            name: "How it works - Discover, Build, Run | Aroneu",
            description:
              "Start lean and build with confidence: how Aroneu stands up and governs a dedicated India team.",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "How it works", path: "/how-it-works" },
          ]),
        ]}
      />

      <Hero data={heroData} withTilt3D={false} />
      <AnswerBlock data={answerBlockData} />
      <ProcessOverview data={processOverviewData} />
      <DiscoverPlanningCards data={discoverData} />
      <BuildSetupCards data={buildData} />
      <RunGovernanceRhythm data={runData} />
      <HandoverContinuityPath data={continuityData} />
      <ClosingCTA data={closingCTAData} />
    </main>
  );
}
