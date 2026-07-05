import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug } from "@/lib/content/case-studies";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return [];
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    return buildPageMetadata({
      title: "Case study | Aroneu",
      description: "Approved case study details are shared during qualified conversations.",
      path: `/case-studies/${params.slug}`,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: `${caseStudy.title} | Aroneu`,
    description:
      "Approved case study details are shared during qualified conversations.",
    path: `/case-studies/${params.slug}`,
    noIndex: true,
  });
}

export default function CaseStudyDetail({
  params,
}: {
  params: { slug: string };
}) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <article className="page-case-study flex flex-col w-full bg-white">
      <section className="py-24 md:py-32 border-b border-zinc-200">
        <div className="container-aroneu max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-sm font-medium tracking-wide uppercase text-zinc-500 mb-6">
            Case study
          </span>
          <h1 className="text-h1 mb-8">{caseStudy.title}</h1>
          <p className="text-h4 text-zinc-600 max-w-3xl mb-12">
            {caseStudy.excerpt}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Discuss relevant proof
            </Link>
            <Link href="/case-studies" className="btn-secondary">
              Back to case studies
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-zinc-50 border-b border-zinc-200">
        <div className="container-aroneu max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-12">
            <div>
              <p className="text-sm text-zinc-500 mb-1">Client / context</p>
              <p className="font-medium text-black">{caseStudy.context}</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500 mb-1">Industry</p>
              <p className="font-medium text-black">{caseStudy.industry}</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500 mb-1">Capability</p>
              <p className="font-medium text-black">
                {caseStudy.capabilities.join(", ")}
              </p>
            </div>
            <div>
              <p className="text-sm text-zinc-500 mb-1">Team model</p>
              <p className="font-medium text-black">{caseStudy.teamModel}</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500 mb-1">Aroneu role</p>
              <p className="font-medium text-black">{caseStudy.role}</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500 mb-1">Proof</p>
              <p className="font-medium text-black">{caseStudy.proofPoint}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-aroneu max-w-4xl mx-auto py-24 space-y-16">
        <section>
          <h2 className="text-h2 mb-6">The challenge</h2>
          <p className="text-body text-zinc-700">{caseStudy.challenge}</p>
        </section>

        <section>
          <h2 className="text-h2 mb-8">How the work stayed governable</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-200">
              <h3 className="text-xl font-medium mb-4 text-black">Operating rhythm</h3>
              <p className="text-zinc-600">{caseStudy.governance.rhythm}</p>
            </div>
            <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-200">
              <h3 className="text-xl font-medium mb-4 text-black">Visibility</h3>
              <p className="text-zinc-600">{caseStudy.governance.visibility}</p>
            </div>
            <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-200">
              <h3 className="text-xl font-medium mb-4 text-black">Continuity</h3>
              <p className="text-zinc-600">{caseStudy.governance.continuity}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-h2 mb-6">The role of the AI Workspace</h2>
          <p className="text-body text-zinc-700">{caseStudy.aiWorkspace}</p>
        </section>

        <section>
          <h2 className="text-h2 mb-6">Outcome</h2>
          <p className="text-body text-zinc-700">{caseStudy.outcome}</p>
        </section>
      </div>
    </article>
  );
}
