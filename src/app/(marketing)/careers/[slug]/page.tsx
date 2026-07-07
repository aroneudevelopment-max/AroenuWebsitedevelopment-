import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { careerRoleTemplateContent, careerApplicationFormContent } from "@/lib/content/pages/careers";
import { approvedCareers } from "@/lib/content/careers";
import { CareerApplicationForm } from "@/components/sections/CareerApplicationForm";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = approvedCareers.find(
    (r) => r.slug === slug && r.isApprovedForPublic,
  );

  if (!role) {
    return buildPageMetadata({
      title: "Careers | Aroneu",
      description: careersIndexFallbackDescription,
      path: `/careers/${slug}`,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title:
      role.seo?.metaTitle ||
      careerRoleTemplateContent.seo.metaTitle.replace("[Role title]", role.title),
    description:
      role.seo?.metaDescription ||
      careerRoleTemplateContent.seo.metaDescription.replace("[role title]", role.title),
    path: `/careers/${slug}`,
    ogTitle:
      role.seo?.ogTitle ||
      careerRoleTemplateContent.seo.ogTitle.replace("[Role title]", role.title),
    ogDescription:
      role.seo?.ogDescription || careerRoleTemplateContent.seo.ogDescription,
  });
}

const careersIndexFallbackDescription =
  "Approved role details are published only when a live opening is ready for public release.";

export default async function CareerRolePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = approvedCareers.find(
    (r) => r.slug === slug && r.isApprovedForPublic,
  );

  if (!role) {
    notFound();
  }

  return (
    <>
      <section className="section-aroneu bg-white pt-24 lg:pt-32">
        <div className="container-aroneu">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <Link
                href="/careers"
                className="inline-flex items-center text-label font-medium text-aroneu-neutral-500 hover:text-aroneu-neutral-900 transition-colors"
              >
                <svg
                  className="mr-1.5 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                {careerRoleTemplateContent.hero.eyebrow}
              </Link>
            </div>

            <h1 className="text-h1 text-aroneu-neutral-900">{role.title}</h1>
            <p className="mt-6 text-lead text-aroneu-neutral-600 max-w-prose">
              {careerRoleTemplateContent.hero.subcopy}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={careerRoleTemplateContent.hero.primaryCta.href}
                className="inline-flex items-center rounded-full bg-aroneu-core-600 px-6 py-3 text-label text-white transition-colors hover:bg-aroneu-core-700"
              >
                {careerRoleTemplateContent.hero.primaryCta.label}
              </Link>
              <Link
                href={careerRoleTemplateContent.hero.secondaryCta.href}
                className="inline-flex items-center rounded-full bg-aroneu-neutral-100 px-6 py-3 text-label text-aroneu-neutral-900 transition-colors hover:bg-aroneu-neutral-200"
              >
                {careerRoleTemplateContent.hero.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-t border-aroneu-neutral-200 bg-aroneu-neutral-50">
        <div className="container-aroneu">
          <div className="mx-auto max-w-3xl grid grid-cols-2 gap-8 sm:grid-cols-4">
            {role.location && (
              <div>
                <dt className="text-caption text-aroneu-neutral-500">Location</dt>
                <dd className="mt-1 text-label text-aroneu-neutral-900">{role.location}</dd>
              </div>
            )}
            {role.workingModel && (
              <div>
                <dt className="text-caption text-aroneu-neutral-500">Working model</dt>
                <dd className="mt-1 text-label text-aroneu-neutral-900">{role.workingModel}</dd>
              </div>
            )}
            {role.seniority && (
              <div>
                <dt className="text-caption text-aroneu-neutral-500">Seniority</dt>
                <dd className="mt-1 text-label text-aroneu-neutral-900">{role.seniority}</dd>
              </div>
            )}
            {role.team && (
              <div>
                <dt className="text-caption text-aroneu-neutral-500">Team</dt>
                <dd className="mt-1 text-label text-aroneu-neutral-900">{role.team}</dd>
              </div>
            )}
            {role.employmentType && (
              <div>
                <dt className="text-caption text-aroneu-neutral-500">Employment type</dt>
                <dd className="mt-1 text-label text-aroneu-neutral-900">{role.employmentType}</dd>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-aroneu bg-white">
        <div className="container-aroneu">
          <div className="mx-auto max-w-3xl space-y-16">
            {role.responsibilities && (
              <div>
                <h2 className="text-h3 text-aroneu-neutral-900">
                  {careerRoleTemplateContent.whatYouWillWorkOn.heading}
                </h2>
                <div
                  className="mt-6 text-body text-aroneu-neutral-600 max-w-prose space-y-4"
                  dangerouslySetInnerHTML={{ __html: role.responsibilities }}
                />
              </div>
            )}

            {role.expectations && (
              <div>
                <h2 className="text-h3 text-aroneu-neutral-900">
                  {careerRoleTemplateContent.whatWeExpect.heading}
                </h2>
                <div
                  className="mt-6 text-body text-aroneu-neutral-600 max-w-prose space-y-4"
                  dangerouslySetInnerHTML={{ __html: role.expectations }}
                />
              </div>
            )}

            <div>
              <h2 className="text-h3 text-aroneu-neutral-900">
                {careerRoleTemplateContent.howTheTeamOperates.heading}
              </h2>
              <div className="mt-6 text-body text-aroneu-neutral-600 max-w-prose space-y-4">
                <p>{careerRoleTemplateContent.howTheTeamOperates.body}</p>
                {role.howTeamOperates && (
                  <div dangerouslySetInnerHTML={{ __html: role.howTeamOperates }} />
                )}
              </div>
            </div>

            <div id="apply" className="scroll-mt-24">
              <h2 className="text-h3 text-aroneu-neutral-900">
                {careerRoleTemplateContent.applicationFlow.heading}
              </h2>
              <p className="mt-4 mb-8 text-body text-aroneu-neutral-600 max-w-prose">
                {careerRoleTemplateContent.applicationFlow.body}
              </p>

              <CareerApplicationForm content={careerApplicationFormContent} roleSlug={role.slug} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
