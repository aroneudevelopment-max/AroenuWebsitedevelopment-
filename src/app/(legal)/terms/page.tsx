import React from "react";
import { LegalShell } from "@/components/layout/LegalShell";

export const metadata = {
  title: "Website Terms of Use | Aroneu",
  description: "Website Terms of Use for the Aroneu public website.",
  alternates: {
    canonical: "https://aroneu.de/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      heading="Website Terms of Use"
      updatedNote="Last updated: 7 July 2026"
      path="/terms"
    >
      <section>
        <h2>1. Who operates this website</h2>
        <p>This website is operated by:</p>
        <p>
          <strong>Aroneu</strong>
          <br />
          Email: sales@aroneu.de
          <br />
          Phone: 919959746887
        </p>
        <p>For full provider and contact information, please see our Imprint.</p>
      </section>

      <section>
        <h2>2. Purpose of this website</h2>
        <p>This website provides information about Aroneu, including:</p>
        <ul className="list-disc">
          <li>Capability Teams,</li>
          <li>the AI Workspace,</li>
          <li>how Aroneu works,</li>
          <li>company information,</li>
          <li>insights and resources,</li>
          <li>careers information,</li>
          <li>contact and booking options.</li>
        </ul>
        <p>The content is provided for general business information only.</p>
        <p>
          Using this website, reading its content, submitting a form,
          downloading a resource, or booking a call does not by itself create a
          client relationship, employment relationship, partnership, service
          agreement, or other binding commercial relationship with Aroneu.
        </p>
        <p>Any commercial engagement with Aroneu must be agreed separately in writing.</p>
      </section>

      <section>
        <h2>3. No professional or legal advice</h2>
        <p>
          The content on this website is not legal, tax, financial, technical,
          procurement, compliance, or professional advice.
        </p>
        <p>
          Aroneu may publish information about governance, capability teams,
          AI-supported workflows, distributed teams, and related operating
          models. This information is provided to help visitors understand
          Aroneu&apos;s perspective and services. It should not be relied on as
          advice for a specific legal, technical, operational, or commercial
          decision.
        </p>
        <p>
          You should seek appropriate professional advice before making
          decisions that depend on your specific circumstances.
        </p>
      </section>

      <section>
        <h2>4. Accuracy of website content</h2>
        <p>We aim to keep the website clear, accurate, and up to date.</p>
        <p>
          However, website content may contain omissions, outdated information,
          or errors. Aroneu may update, change, remove, or restructure website
          content at any time.
        </p>
        <p>
          We do not guarantee that every statement on the website is complete,
          current, or suitable for your specific situation.
        </p>
        <p>
          Where the website refers to client work, case studies, performance
          indicators, roles, technology, or operational examples, the final
          facts may depend on separate approvals, contracts, technical
          documentation, or client-specific arrangements.
        </p>
      </section>

      <section>
        <h2>5. AI Workspace visuals and representative materials</h2>
        <p>
          The website may include AI Workspace visuals, diagrams, interface
          previews, videos, workflow examples, or other representative
          materials.
        </p>
        <p>
          Unless expressly stated otherwise, these materials are provided to
          explain the Aroneu operating model. They may use representative
          layouts, illustrative data, synthetic data, or simplified examples.
        </p>
        <p>They should not be understood as:</p>
        <ul className="list-disc">
          <li>a full product specification,</li>
          <li>a live client environment,</li>
          <li>a guarantee of available features,</li>
          <li>a commitment to a specific interface,</li>
          <li>or a final description of any client-specific setup.</li>
        </ul>
        <p>
          The actual scope, configuration, access model, data flows, hosting,
          controls, and responsibilities for any AI Workspace or client
          environment are defined separately in written agreements and technical
          documentation.
        </p>
      </section>

      <section>
        <h2>6. Intellectual property</h2>
        <p>The content on this website belongs to Aroneu or the relevant rights holder.</p>
        <p>This includes, where applicable:</p>
        <ul className="list-disc">
          <li>website copy,</li>
          <li>page structure,</li>
          <li>visual design,</li>
          <li>diagrams,</li>
          <li>graphics,</li>
          <li>videos,</li>
          <li>AI Workspace previews,</li>
          <li>brand elements,</li>
          <li>logo and wordmark,</li>
          <li>resources and downloads,</li>
          <li>insight articles,</li>
          <li>case-study formats,</li>
          <li>and other website materials.</li>
        </ul>
        <p>You may view and use the website for normal business-information purposes.</p>
        <p>
          You may not copy, reproduce, distribute, modify, scrape, sell,
          publish, or commercially use website content without prior written
          permission from Aroneu, unless this is allowed by applicable law.
        </p>
      </section>

      <section>
        <h2>7. Permitted use</h2>
        <p>
          You may use this website for lawful business, informational,
          recruitment, or enquiry purposes.
        </p>
        <p>You must not use this website in a way that:</p>
        <ul className="list-disc">
          <li>violates applicable law,</li>
          <li>infringes the rights of Aroneu or others,</li>
          <li>attempts to gain unauthorised access to systems, forms, accounts, servers, or data,</li>
          <li>disrupts or damages the website,</li>
          <li>introduces malware, harmful code, or automated abuse,</li>
          <li>scrapes or extracts content at scale without permission,</li>
          <li>misuses forms, scheduling tools, or contact channels,</li>
          <li>submits false, misleading, or harmful information,</li>
          <li>impersonates another person or organisation,</li>
          <li>
            or attempts to reverse engineer, copy, or misuse any AI Workspace
            visual, workflow, or representative material shown on the website.
          </li>
        </ul>
        <p>
          We may restrict or block access where we reasonably believe the
          website is being misused.
        </p>
      </section>

      <section>
        <h2>8. Forms, enquiries, and submitted information</h2>
        <p>
          The website may allow you to submit information through contact forms,
          booking tools, newsletter forms, resource forms, or careers forms.
        </p>
        <p>
          You are responsible for making sure the information you submit is
          accurate, lawful, and not confidential beyond what is appropriate for
          the specific form.
        </p>
        <p>
          Please do not submit sensitive personal data, confidential business
          information, trade secrets, client data, source code, regulated data,
          or protected health data through a general website form unless Aroneu
          has specifically requested it through an approved secure channel.
        </p>
        <p>
          Submitting a form does not oblige Aroneu to respond, provide services,
          make an offer, accept an application, or enter into any agreement.
        </p>
        <p>Personal data submitted through the website is handled according to our Privacy Policy.</p>
      </section>

      <section>
        <h2>9. Resources and downloads</h2>
        <p>
          Aroneu may provide resources, guides, checklists, articles, or other
          downloadable materials.
        </p>
        <p>
          These materials are provided for general information only. They are
          not tailored advice and may not reflect your organisation&apos;s
          specific legal, technical, operational, or commercial position.
        </p>
        <p>
          You may use downloaded resources internally for evaluation and
          planning. You may not resell, republish, rebrand, or distribute them
          commercially without written permission from Aroneu.
        </p>
      </section>

      <section>
        <h2>10. Careers information</h2>
        <p>Careers content on this website is provided for general recruitment information.</p>
        <p>
          Any role descriptions, hiring statements, application processes, or
          career-related content may change at any time.
        </p>
        <p>
          Submitting an application does not create an employment relationship
          or guarantee an interview, offer, or future role.
        </p>
        <p>
          Applicant data is handled according to our Privacy Policy and any
          applicable applicant privacy notice.
        </p>
      </section>

      <section>
        <h2>11. External links</h2>
        <p>This website may link to third-party websites, tools, platforms, or resources.</p>
        <p>
          External links are provided for convenience or context only. Aroneu
          does not control external websites and is not responsible for their
          content, availability, security, policies, or data-processing
          practices.
        </p>
        <p>
          You use external websites at your own risk and should review their own
          terms and privacy notices.
        </p>
      </section>

      <section>
        <h2>12. Website availability</h2>
        <p>We aim to keep the website available and functioning properly.</p>
        <p>
          However, we do not guarantee uninterrupted access, error-free
          operation, or permanent availability of any page, feature, form,
          download, video, or external integration.
        </p>
        <p>
          The website may be unavailable or limited because of maintenance,
          updates, technical issues, third-party provider issues, security
          measures, or circumstances outside our control.
        </p>
      </section>

      <section>
        <h2>13. Limitation of liability</h2>
        <p>Nothing in these terms limits liability where it cannot be limited under applicable law.</p>
        <p>To the extent permitted by law, Aroneu is not liable for losses arising from:</p>
        <ul className="list-disc">
          <li>reliance on general website content,</li>
          <li>temporary website unavailability,</li>
          <li>technical errors,</li>
          <li>third-party websites or services,</li>
          <li>unauthorised use of the website,</li>
          <li>loss of data submitted through inappropriate channels,</li>
          <li>
            or use of representative visuals, resources, or examples as if they
            were client-specific advice.
          </li>
        </ul>
        <p>
          Commercial liability, service commitments, data-processing
          obligations, confidentiality obligations, delivery responsibilities,
          and other client-specific terms are governed by separate written
          agreements where applicable.
        </p>
      </section>

      <section>
        <h2>14. Privacy and cookies</h2>
        <p>Personal data processed through this website is handled according to our Privacy Policy.</p>
        <p>Cookies and similar technologies are explained in our Cookie Policy.</p>
        <p>
          Where optional cookies or tracking technologies are used, they are
          managed through the website&apos;s consent mechanism where required.
        </p>
      </section>

      <section>
        <h2>15. Changes to these terms</h2>
        <p>
          We may update these Website Terms of Use when the website, services,
          legal requirements, technology, or operating model changes.
        </p>
        <p>The latest version will be published on this page.</p>
        <p>The date at the top of the page shows when the terms were last updated.</p>
      </section>

      <section>
        <h2>16. Governing law</h2>
        <p>
          These Website Terms of Use are governed by the laws of Germany,
          unless mandatory law provides otherwise.
        </p>
      </section>

      <section>
        <h2>17. Contact</h2>
        <p>For questions about these Website Terms of Use, contact:</p>
        <p>
          <strong>Aroneu</strong>
          <br />
          Email: sales@aroneu.de
          <br />
          Phone: 919959746887
        </p>
        <p>
          For privacy-related requests, please use the contact details in the
          Privacy Policy.
        </p>
      </section>
    </LegalShell>
  );
}
