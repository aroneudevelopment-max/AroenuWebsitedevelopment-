import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { caseStudies, getCaseStudyBySlug } from '@/lib/content/case-studies';
import Link from 'next/link';

export function generateStaticParams() {
  return caseStudies.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const caseStudy = getCaseStudyBySlug(params.slug);
  
  if (!caseStudy) {
    return { title: 'Case Study Not Found' };
  }

  return {
    title: `${caseStudy.title} | Aroneu`,
    description: `How Aroneu supported ${caseStudy.industry} with a governed India capability team, visible operating rhythm, and approved proof.`,
    openGraph: {
      title: caseStudy.title,
      description: "A controlled look at the challenge, team model, governance approach, AI Workspace role, and outcome.",
    }
  };
}

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudyBySlug(params.slug);
  
  if (!caseStudy) {
    notFound();
  }

  return (
    <article className="page-case-study flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="py-24 md:py-32 border-b border-zinc-200">
        <div className="container-aroneu max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-sm font-medium tracking-wide uppercase text-zinc-500 mb-6">
            Case study
          </span>
          <h1 className="text-h1 mb-8">{caseStudy.title}</h1>
          <p className="text-h4 text-zinc-600 max-w-3xl mb-12">
            A governed India capability team built around {caseStudy.capabilities.join(', ')}, {caseStudy.industry}, and {caseStudy.context}.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Book a call</Link>
            <Link href="/capability-teams" className="btn-secondary">Explore Capability Teams</Link>
          </div>
        </div>
      </section>

      {/* Summary panel */}
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
              <p className="font-medium text-black">{caseStudy.capabilities.join(', ')}</p>
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

      <div className="container-aroneu max-w-4xl mx-auto py-24">
        {/* Content sections */}
        <div className="space-y-20">
          
          <section>
            <h2 className="text-h2 mb-6">The challenge</h2>
            <div className="prose prose-zinc prose-lg max-w-none text-zinc-700">
              <p>{caseStudy.challenge}</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-h2 mb-6">The team model</h2>
            <div className="prose prose-zinc prose-lg max-w-none text-zinc-700">
              <p>{caseStudy.teamModel}</p>
            </div>
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
            <div className="prose prose-zinc prose-lg max-w-none text-zinc-700">
              <p>{caseStudy.aiWorkspace}</p>
            </div>
          </section>

          <section>
            <h2 className="text-h2 mb-6">The outcome</h2>
            <div className="prose prose-zinc prose-lg max-w-none text-zinc-700">
              <p>{caseStudy.outcome}</p>
            </div>
          </section>

          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <section>
              <h2 className="text-h2 mb-8">Approved proof</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {caseStudy.metrics.map((metric, idx) => (
                  <div key={idx} className="border-t-2 border-black pt-6">
                    <p className="text-4xl font-medium text-black mb-2">{metric.value}</p>
                    <p className="text-zinc-600">{metric.label}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {caseStudy.quote && (
            <section>
              <h2 className="text-h2 mb-8">Client perspective</h2>
              <figure className="bg-zinc-50 p-12 rounded-xl border border-zinc-200 relative">
                <span className="text-6xl text-zinc-200 absolute top-8 left-8">"</span>
                <blockquote className="text-2xl font-medium text-black mb-6 relative z-10 leading-relaxed">
                  {caseStudy.quote.text}
                </blockquote>
                <figcaption className="text-zinc-600 relative z-10">
                  — {caseStudy.quote.attribution}
                </figcaption>
              </figure>
            </section>
          )}

        </div>
      </div>

      {/* Related capability */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="container-aroneu max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-h2 mb-6">Related capability</h2>
          <p className="text-body text-zinc-600 mb-10 max-w-2xl">
            This case connects to the way Aroneu builds Capability Teams and supports them through the AI Workspace.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/capability-teams" className="btn-secondary bg-white">Capability Teams</Link>
            <Link href="/ai-workspace" className="btn-secondary bg-white">AI Workspace</Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 border-t border-zinc-200 text-center">
        <div className="container-aroneu max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-h2 mb-6">Build a governed team for your own context.</h2>
          <p className="text-body text-zinc-600 mb-10">
            Tell us what capability you need, what risk you need to control, and what proof would help your team evaluate the model.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">Book a call</Link>
        </div>
      </section>
    </article>
  );
}
