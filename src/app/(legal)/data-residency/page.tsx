import React from "react";
import { LegalShell } from "@/components/layout/LegalShell";

export const metadata = {
  title: "Data and Access Note | Aroneu",
  description:
    "Data and Access Note explaining how Aroneu describes data residency, data access, and AI Workspace boundaries.",
  alternates: {
    canonical: "https://aroneu.de/data-residency",
  },
};

export default function DataResidencyPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      heading="Data Residency and AI Workspace Compliance Note"
      updatedNote="Last updated: 7 July 2026"
      path="/data-residency"
    >
      <section>
        <h2>1. Data residency and data access</h2>
        <p>Data residency and data access are not the same thing.</p>
        <p>Data residency means where data is stored or hosted.</p>
        <p>
          Data access means where authorised people, systems, or service
          providers may view, process, support, or manage that data.
        </p>
        <p>
          A system can be hosted in one location and still involve authorised
          access from another location. For that reason, Aroneu separates
          hosting, access, permissions, and safeguards when describing how data
          is handled.
        </p>
      </section>

      <section>
        <h2>2. Public website data and AI Workspace data</h2>
        <p>
          Aroneu&apos;s public website and the AI Workspace are not the same
          processing environment.
        </p>
        <p>
          The public website may use third-party tools for hosting, forms,
          scheduling, CRM, email delivery, analytics, content management,
          consent management, security, and spam prevention.
        </p>
        <p>
          The AI Workspace may involve separate architecture, access controls,
          data flows, client-specific agreements, and security documentation.
        </p>
        <p>
          Client-specific hosting, access controls, processing arrangements, and
          responsibilities are defined separately in the relevant agreement and
          technical documentation.
        </p>
      </section>

      <section>
        <h2>3. Website tools</h2>
        <p>The public Aroneu website may use or connect to the following services:</p>
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
          These services may process limited technical, communication, booking,
          analytics, or form-related data depending on how the website is used.
        </p>
      </section>

      <section>
        <h2>4. International processing and access</h2>
        <p>
          Some service providers, systems, or authorised personnel may process
          or access personal data outside the European Economic Area where this
          is needed for website operations, business communication, scheduling,
          support, recruitment, or related services.
        </p>
        <p>
          Where personal data is processed or accessed outside the European
          Economic Area, Aroneu uses appropriate safeguards where required.
          These may include contractual safeguards, access controls, technical
          and organisational measures, and role-based permissions.
        </p>
        <p>
          This does not mean that all data is transferred outside the European
          Economic Area. It means that certain providers or authorised people
          may process or access limited data where needed for the relevant
          purpose.
        </p>
      </section>

      <section>
        <h2>5. India capability teams</h2>
        <p>Aroneu&apos;s model involves India capability teams serving European companies.</p>
        <p>India capability does not mean uncontrolled access.</p>
        <p>
          Where authorised Aroneu personnel or capability teams access systems
          from outside the European Economic Area, access is limited to what is
          needed for the relevant role and governed through client agreements,
          data-processing terms, confidentiality duties, permissions, and
          security controls where applicable.
        </p>
      </section>

      <section>
        <h2>6. AI Workspace and client data</h2>
        <p>
          The AI Workspace is designed as a governance layer around Aroneu&apos;s
          capability teams. Its purpose is to make work, decisions,
          documentation, controls, and team health easier to see and manage.
        </p>
        <p>
          Customer data enters the AI Workspace only where this is agreed with
          the customer and governed under contract.
        </p>
        <p>
          Client-specific data processing, hosting, access permissions,
          processors, international transfers, safeguards, retention, and
          deletion terms are defined in the relevant agreements and technical
          documentation.
        </p>
      </section>

      <section>
        <h2>7. AI-supported insight boundaries</h2>
        <p>
          AI-supported insights may help surface signals, patterns,
          documentation gaps, reporting points, or follow-up actions.
        </p>
        <p>
          They are designed to support human review, not replace leadership
          judgement, client standards, or accountability.
        </p>
        <p>
          The AI Workspace supports visibility and operating control. It does
          not make uncontrolled decisions.
        </p>
      </section>

      <section>
        <h2>8. AI Workspace visuals</h2>
        <p>
          The website may show AI Workspace visuals, videos, diagrams, or
          interface previews.
        </p>
        <p>These visuals are representative unless stated otherwise.</p>
        <p>
          Final workspace configuration, data views, permissions, and controls
          depend on the client engagement and approved technical setup.
        </p>
      </section>

      <section>
        <h2>9. Summary</h2>
        <p>
          Aroneu distinguishes between where data is hosted and where
          authorised access may occur.
        </p>
        <p>
          The public website uses selected third-party tools to operate forms,
          scheduling, analytics, email, content, security, and business
          communication.
        </p>
        <p>
          The AI Workspace is handled separately from the public website.
          Customer data enters the AI Workspace only where agreed with the
          customer and governed under contract.
        </p>
        <p>
          Where personal data is processed or accessed outside the European
          Economic Area, Aroneu uses appropriate safeguards where required.
        </p>
      </section>

      <section>
        <p>
          For more information about website data processing, please see the
          Privacy Policy and Cookie Policy.
        </p>
        <p>For privacy-related questions, contact:</p>
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
