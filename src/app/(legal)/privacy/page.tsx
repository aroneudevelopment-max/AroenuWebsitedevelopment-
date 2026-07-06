import React from "react";
import Link from "next/link";
import { LegalShell } from "@/components/layout/LegalShell";

export const metadata = {
  title: "Privacy Policy | Aroneu",
  description: "Privacy Policy explaining how Aroneu processes personal data.",
  alternates: {
    canonical: "https://aroneu.de/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      heading="Privacy Policy"
      updatedNote="Last updated: 7 July 2026"
      path="/privacy"
    >
      <section>
        <p>
          This Privacy Policy explains how Aroneu processes personal data when
          you visit our website, contact us, book a call, subscribe to updates,
          download resources, or apply for a role.
        </p>
        <p>
          It also explains your rights under applicable data protection law.
        </p>
        <p>
          This policy applies to the public Aroneu website and related website
          forms. It does not replace any separate commercial agreement, data
          processing agreement, client contract, or service-specific privacy
          documentation that may apply to a client engagement or the AI
          Workspace.
        </p>
      </section>

      <section>
        <h2>1. Who is responsible for your data</h2>
        <p>The controller responsible for this website is:</p>
        <p>
          <strong>Aroneu</strong>
          <br />
          Email: sales@aroneu.de
          <br />
          Phone: 919959746887
        </p>
        <p>
          For general website enquiries, you may also contact us through the
          contact form on this website.
        </p>
      </section>

      <section>
        <h2>2. What this policy covers</h2>
        <p>We process personal data when you interact with Aroneu through this website.</p>
        <p>This may include data from:</p>
        <ul className="list-disc">
          <li>website visits,</li>
          <li>contact forms,</li>
          <li>call booking or scheduling tools,</li>
          <li>newsletter subscriptions,</li>
          <li>resource downloads,</li>
          <li>job applications,</li>
          <li>email communication,</li>
          <li>analytics and consent tools,</li>
          <li>security and spam-prevention systems.</li>
        </ul>
        <p>We only process personal data where there is a lawful reason to do so.</p>
      </section>

      <section>
        <h2>3. Data we process when you visit the website</h2>
        <p>
          When you visit the website, our hosting and security systems may
          process technical data automatically.
        </p>
        <p>This may include:</p>
        <ul className="list-disc">
          <li>IP address,</li>
          <li>browser type and version,</li>
          <li>device information,</li>
          <li>pages visited,</li>
          <li>date and time of access,</li>
          <li>referring website,</li>
          <li>error logs,</li>
          <li>security logs.</li>
        </ul>
        <p>
          We use this data to operate the website, keep it secure, diagnose
          errors, prevent misuse, and improve performance.
        </p>
        <p>
          <strong>Legal basis:</strong>
          <br />
          Our legitimate interest in operating a secure and reliable website,
          Art. 6(1)(f) GDPR.
        </p>
        <p>
          The website is operated using hosting, content, and security
          infrastructure that may process technical data needed to deliver,
          protect, and maintain the site.
        </p>
      </section>

      <section>
        <h2>4. Data we process when you contact us</h2>
        <p>
          When you submit a contact form or send us an enquiry, we process the
          information you provide.
        </p>
        <p>This may include:</p>
        <ul className="list-disc">
          <li>full name,</li>
          <li>work email,</li>
          <li>company,</li>
          <li>role,</li>
          <li>team need,</li>
          <li>message or notes,</li>
          <li>communication history.</li>
        </ul>
        <p>
          We use this data to respond to your enquiry, understand the team or
          governance need you describe, prepare next steps, and manage the
          business relationship.
        </p>
        <p>
          <strong>Legal basis:</strong>
          <br />
          Pre-contractual or contractual necessity, Art. 6(1)(b) GDPR, where
          your enquiry relates to a potential business relationship.
          <br />
          Legitimate interest, Art. 6(1)(f) GDPR, where we respond to business
          enquiries and manage professional communication.
        </p>
      </section>

      <section>
        <h2>5. Data we process when you book a call</h2>
        <p>
          If you use a scheduling tool to book a call with Aroneu, we process
          the information needed to arrange and manage the meeting.
        </p>
        <p>This may include:</p>
        <ul className="list-disc">
          <li>name,</li>
          <li>email address,</li>
          <li>company,</li>
          <li>meeting time,</li>
          <li>meeting notes,</li>
          <li>time zone,</li>
          <li>calendar metadata,</li>
          <li>technical data collected by the scheduling provider.</li>
        </ul>
        <p>
          We use this data to schedule the meeting, send confirmations, manage
          calendar invitations, and prepare for the conversation.
        </p>
        <p>
          <strong>Scheduling provider:</strong> Cal.com
        </p>
        <p>
          <strong>Legal basis:</strong>
          <br />
          Pre-contractual or contractual necessity, Art. 6(1)(b) GDPR.
          <br />
          Legitimate interest in organising business meetings, Art. 6(1)(f)
          GDPR.
        </p>
        <p>
          <strong>International processing note:</strong>
          <br />
          If the scheduling provider processes data outside the European
          Economic Area, we use appropriate safeguards where required, such as
          Standard Contractual Clauses or other legally recognised mechanisms.
        </p>
      </section>

      <section>
        <h2>6. Data we process when you subscribe to updates</h2>
        <p>
          If you subscribe to Aroneu updates or The brief, we process the data
          needed to send the subscription.
        </p>
        <p>This may include:</p>
        <ul className="list-disc">
          <li>email address,</li>
          <li>consent status,</li>
          <li>subscription date and time,</li>
          <li>confirmation status,</li>
          <li>unsubscribe status,</li>
          <li>email engagement data, if enabled by the email provider.</li>
        </ul>
        <p>
          We use this data to send updates, confirm subscription consent, manage
          unsubscribes, and keep evidence of consent.
        </p>
        <p>
          Email and newsletter delivery may be managed through Postmark and/or
          HubSpot, depending on the specific form or communication flow.
        </p>
        <p>
          <strong>Legal basis:</strong>
          <br />
          Consent, Art. 6(1)(a) GDPR.
        </p>
        <p>
          You can withdraw your consent at any time by using the unsubscribe
          link in the email or contacting us directly.
        </p>
        <p>
          Where required, we use a double opt-in process. This means you may
          receive a confirmation email before the subscription becomes active.
        </p>
        <p>
          <strong>Retention:</strong>
          <br />
          We keep subscription data until you unsubscribe or withdraw consent.
          We may retain limited suppression records to make sure we do not
          contact you again after you unsubscribe.
        </p>
      </section>

      <section>
        <h2>7. Data we process when you download resources</h2>
        <p>
          If Aroneu offers downloadable resources, guides, checklists, or
          similar materials, we may process the information you submit to
          receive them.
        </p>
        <p>This may include:</p>
        <ul className="list-disc">
          <li>name,</li>
          <li>work email,</li>
          <li>company,</li>
          <li>requested resource,</li>
          <li>consent status,</li>
          <li>communication preferences.</li>
        </ul>
        <p>
          We use this data to provide the resource, manage related
          communication, and understand interest in Aroneu&apos;s content.
        </p>
        <p>
          Where a resource download is connected to marketing communication, we
          will ask for separate consent where required.
        </p>
        <p>
          <strong>Legal basis:</strong>
          <br />
          Consent, Art. 6(1)(a) GDPR, where you choose to receive marketing
          communication.
          <br />
          Pre-contractual or contractual necessity, Art. 6(1)(b) GDPR, where
          the resource is provided as part of a requested interaction.
          <br />
          Legitimate interest, Art. 6(1)(f) GDPR, where we manage basic
          business communication around the request.
        </p>
      </section>

      <section>
        <h2>8. Data we process when you apply for a role</h2>
        <p>
          If you apply for a role at Aroneu, we process the data needed to
          review and manage your application.
        </p>
        <p>This may include:</p>
        <ul className="list-disc">
          <li>full name,</li>
          <li>email address,</li>
          <li>phone number,</li>
          <li>location,</li>
          <li>CV,</li>
          <li>LinkedIn profile,</li>
          <li>portfolio or website,</li>
          <li>role applied for,</li>
          <li>application message,</li>
          <li>interview notes,</li>
          <li>assessment notes,</li>
          <li>communication history.</li>
        </ul>
        <p>
          We use this data to review your application, communicate with you,
          assess suitability, and manage the recruitment process.
        </p>
        <p>
          <strong>Legal basis:</strong>
          <br />
          Pre-contractual necessity, Art. 6(1)(b) GDPR.
          <br />
          Employment-related data processing under Art. 88 GDPR and applicable
          German employment data rules, including BDSG Section 26 where
          applicable.
          <br />
          Consent, Art. 6(1)(a) GDPR, if you agree to be considered for future
          roles or join a talent pool.
        </p>
        <p>
          If we would like to keep your application for future opportunities, we
          will ask for separate consent.
        </p>
      </section>

      <section>
        <h2>9. Cookies and similar technologies</h2>
        <p>
          We use cookies and similar technologies to operate the website and,
          where you consent, to understand how visitors use it.
        </p>
        <p>
          Some technologies are strictly necessary. They help the website work,
          remember privacy preferences, protect forms from abuse, and keep the
          site secure.
        </p>
        <p>
          Other technologies, such as analytics or marketing tools, are
          optional and only used where required consent has been given.
        </p>
        <p>
          You can find more detail in our{" "}
          <Link href="/cookie-policy">Cookie Policy</Link>.
        </p>
        <p>
          You can manage cookies through your browser settings and, where
          available, through the website&apos;s cookie settings option.
        </p>
      </section>

      <section>
        <h2>10. Analytics</h2>
        <p>
          We may use analytics tools to understand website traffic, page
          performance, and content engagement.
        </p>
        <p>
          Depending on the final analytics setup, this may include
          privacy-friendly analytics or consent-based analytics tools.
        </p>
        <p>
          <strong>Analytics provider:</strong> Google Analytics
        </p>
        <p>
          If analytics cookies or similar identifiers are used, they will only
          be activated where required consent has been given.
        </p>
        <p>
          <strong>Legal basis:</strong>
          <br />
          Consent, Art. 6(1)(a) GDPR, where optional analytics technologies are
          used.
          <br />
          Legitimate interest, Art. 6(1)(f) GDPR, where privacy-friendly,
          non-identifying analytics are used and permitted without consent.
        </p>
      </section>

      <section>
        <h2>11. Security and spam prevention</h2>
        <p>
          We may use security tools to protect forms, prevent spam, and detect
          automated misuse.
        </p>
        <p>This may involve processing technical signals such as:</p>
        <ul className="list-disc">
          <li>IP address,</li>
          <li>browser information,</li>
          <li>device signals,</li>
          <li>interaction patterns,</li>
          <li>security tokens.</li>
        </ul>
        <p>
          <strong>Security provider:</strong> Cloudflare
        </p>
        <p>
          <strong>Legal basis:</strong>
          <br />
          Our legitimate interest in protecting the website, forms, and systems
          from misuse, Art. 6(1)(f) GDPR.
        </p>
      </section>

      <section>
        <h2>12. CRM and business communication</h2>
        <p>
          When you contact Aroneu, book a call, or subscribe to updates, your
          details may be stored in a CRM or communication system.
        </p>
        <p>
          We use these systems to manage enquiries, keep business communication
          organised, and follow up on relevant conversations.
        </p>
        <p>
          <strong>CRM provider:</strong> HubSpot
        </p>
        <p>
          Where the CRM provider processes personal data outside the European
          Economic Area, we use appropriate safeguards where required.
        </p>
      </section>

      <section>
        <h2>13. Processors and service providers</h2>
        <p>
          We use specialised service providers to operate the website and
          related digital services.
        </p>
        <p>
          We may use the following service providers to operate the website and
          related digital services:
        </p>
        <ul className="list-none">
          <li>HubSpot - CRM, forms, lead management, and business communication.</li>
          <li>Cal.com - booking and scheduling.</li>
          <li>Postmark - email delivery and transactional email.</li>
          <li>
            Google Analytics - website analytics, where consent is required and
            given.
          </li>
          <li>Sanity - website content management.</li>
          <li>Cloudflare - security, performance, and spam-prevention support.</li>
        </ul>
        <p>
          These providers process data only where needed for the relevant
          website, communication, security, analytics, or business function.
          Where required, processing is governed by appropriate contractual and
          data-protection safeguards.
        </p>
      </section>

      <section>
        <h2>14. International data transfers</h2>
        <p>
          Some service providers, systems, or authorised personnel may process
          or access personal data outside the European Economic Area.
        </p>
        <p>
          This may include providers based in the United States or authorised
          support and capability-team access from India, depending on the final
          technical setup and the nature of the interaction.
        </p>
        <p>
          Where personal data is processed or accessed outside the European
          Economic Area, Aroneu uses appropriate safeguards where required, such
          as contractual safeguards, access controls, and technical and
          organisational measures.
        </p>
        <p>
          This does not mean that all data is transferred outside the European
          Economic Area. It means that certain providers or authorised people
          may process or access limited data where needed for website
          operations, business communication, support, recruitment, or related
          services.
        </p>
      </section>

      <section>
        <h2>15. AI Workspace and client data</h2>
        <p>
          This website may describe or show the AI Workspace, including
          representative visuals, mockups, or explanations of how governance,
          visibility, documentation, controls, and AI-supported insights may
          work.
        </p>
        <p>
          This Privacy Policy covers the public website and related website
          interactions.
        </p>
        <p>
          Client data processed inside an AI Workspace, client project
          environment, or managed capability-team engagement is handled under
          separate client agreements, data processing arrangements, security
          documentation, and service-specific policies.
        </p>
        <p>
          Customer data enters the AI Workspace only where this is agreed with
          the customer and governed under contract.
        </p>
      </section>

      <section>
        <h2>16. Data we receive from others</h2>
        <p>
          In some cases, we may receive your business contact details from a
          colleague, partner, client, referral source, event contact, or public
          professional source.
        </p>
        <p>
          We use this data only where there is a lawful reason to do so, such
          as responding to a business introduction, managing a professional
          relationship, or following up on a relevant enquiry.
        </p>
        <p>
          <strong>Legal basis:</strong>
          <br />
          Legitimate interest, Art. 6(1)(f) GDPR, unless another legal basis
          applies.
        </p>
        <p>You may object to this processing at any time.</p>
      </section>

      <section>
        <h2>17. How long we keep personal data</h2>
        <p>Retention periods depend on the type of data and the reason for processing.</p>
        <p>
          Newsletter subscription records are kept until you unsubscribe or
          withdraw consent, with limited suppression records retained where
          needed to make sure we do not contact you again.
        </p>
        <p>
          Job application data is kept only for as long as needed for the
          recruitment process, unless a longer period is legally required or the
          applicant has separately agreed to future-role consideration.
        </p>
        <p>
          Where data is no longer needed, we delete it or anonymise it where
          appropriate.
        </p>
      </section>

      <section>
        <h2>18. Your rights</h2>
        <p>Under applicable data protection law, you may have the right to:</p>
        <ul className="list-disc">
          <li>request access to your personal data,</li>
          <li>request correction of inaccurate data,</li>
          <li>request deletion of your data,</li>
          <li>request restriction of processing,</li>
          <li>object to processing based on legitimate interest,</li>
          <li>request data portability,</li>
          <li>withdraw consent at any time,</li>
          <li>lodge a complaint with a supervisory authority.</li>
        </ul>
        <p>To exercise your rights, contact us at:</p>
        <p>
          <strong>Aroneu</strong>
          <br />
          Email: sales@aroneu.de
          <br />
          Phone: 919959746887
        </p>
        <p>We may need to verify your identity before responding to a request.</p>
        <p>
          Withdrawing consent does not affect processing that took place before
          the withdrawal.
        </p>
      </section>

      <section>
        <h2>19. Right to object</h2>
        <p>
          Where we process personal data based on legitimate interest, you may
          object to that processing on grounds relating to your particular
          situation.
        </p>
        <p>You may also object to direct marketing at any time.</p>
        <p>
          After an objection to direct marketing, we will stop using your data
          for that purpose.
        </p>
      </section>

      <section>
        <h2>20. Security</h2>
        <p>
          We use technical and organisational measures to protect personal data
          against unauthorised access, loss, misuse, alteration, or disclosure.
        </p>
        <p>
          These measures may include access controls, role-based permissions,
          secure hosting practices, encrypted transmission, internal
          confidentiality rules, and security monitoring.
        </p>
        <p>
          No website or digital system can be guaranteed to be completely
          secure. We therefore review and improve safeguards as the website and
          systems develop.
        </p>
      </section>

      <section>
        <h2>21. External links</h2>
        <p>
          This website may contain links to external websites or third-party
          services.
        </p>
        <p>
          We are not responsible for how third-party websites process personal
          data. Please review the privacy policy of the relevant third-party
          service before submitting personal data there.
        </p>
      </section>

      <section>
        <h2>22. Children</h2>
        <p>
          This website is intended for business users, prospective clients,
          partners, applicants, and professional visitors.
        </p>
        <p>It is not directed at children.</p>
      </section>

      <section>
        <h2>23. Changes to this Privacy Policy</h2>
        <p>
          We may update this Privacy Policy when our website, technology stack,
          services, legal requirements, or processing activities change.
        </p>
        <p>The latest version will always be published on this page.</p>
      </section>

      <section>
        <h2>24. Contact</h2>
        <p>For privacy questions or data-protection requests, contact:</p>
        <p>
          <strong>Aroneu</strong>
          <br />
          Email: sales@aroneu.de
          <br />
          Phone: 919959746887
        </p>
      </section>
    </LegalShell>
  );
}
