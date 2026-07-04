import { Metadata } from "next";
import { howitworksPage } from "../../../lib/content/pages/how-it-works";
import { Hero } from "../../../components/sections/Hero";
import { AnswerBlock } from "../../../components/sections/AnswerBlock";
import { ProcessOverview } from "../../../components/sections/ProcessOverview";
import { DiscoverPlanningCards } from "../../../components/sections/DiscoverPlanningCards";
import { BuildSetupCards } from "../../../components/sections/BuildSetupCards";
import { RunGovernanceRhythm } from "../../../components/sections/RunGovernanceRhythm";
import { HandoverContinuityPath } from "../../../components/sections/HandoverContinuityPath";
import { ClosingCTA } from "../../../components/sections/ClosingCTA";

export const metadata: Metadata = {
  title: "Start lean. Build with confidence. | Aroneu",
  description: "Aroneu starts with the capability you need, then builds the team, context, rhythm, and controls around it.",
};

export default function HowItWorksPage() {
  const { sections } = howitworksPage;

  const heroData = sections.find((s: any) => s.type === "hero");
  const answerBlockData = sections.find((s: any) => s.type === "answerBlock");
  const processOverviewData = sections.find((s: any) => s.type === "processOverview");
  const discoverData = sections.find((s: any) => s.type === "discover");
  const buildData = sections.find((s: any) => s.type === "build");
  const runData = sections.find((s: any) => s.type === "run");
  const continuityData = sections.find((s: any) => s.type === "continuity");
  const closingCTAData = sections.find((s: any) => s.type === "closingCTA");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Hero data={heroData} />
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
