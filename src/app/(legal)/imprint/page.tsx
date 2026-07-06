import React from "react";
import { LegalShell } from "@/components/layout/LegalShell";

export const metadata = {
  title: "Imprint | Aroneu",
  description: "Legal provider information for the Aroneu website.",
  alternates: {
    canonical: "https://aroneu.de/imprint",
  },
};

export default function ImprintPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      heading="Imprint"
      updatedNote="Last updated: 7 July 2026"
      intro="This page contains provider and contact information for the Aroneu website."
      path="/imprint"
    >
      <section>
        <h2>Provider information</h2>
        <p>
          <strong>Aroneu</strong>
          <br />
          Email: sales@aroneu.de
          <br />
          Phone: 919959746887
        </p>
        <p>
          Further company registration details, including registered address,
          register information, and VAT details, will be updated once the
          incorporation details are finalised and approved for publication.
        </p>
      </section>

      <section>
        <h2>Privacy requests</h2>
        <p>For privacy-related requests, please use:</p>
        <p>sales@aroneu.de</p>
      </section>

      <section>
        <h2>Nature of this website</h2>
        <p>
          This website provides information about Aroneu, its Capability Teams,
          the AI Workspace, related insights, careers, and contact options.
        </p>
        <p>
          The information on this website is intended for general business
          information only. It does not create a client relationship, service
          agreement, employment relationship, or other binding commercial
          relationship unless separately agreed in writing.
        </p>
      </section>

      <section>
        <h2>Dispute resolution</h2>
        <p>
          Aroneu is not obliged and does not undertake to participate in
          dispute resolution proceedings before a consumer arbitration board,
          unless legally required.
        </p>
      </section>

      <section>
        <h2>External links</h2>
        <p>This website may link to external websites.</p>
        <p>
          Aroneu is not responsible for the content, availability, or
          data-processing practices of external websites. Responsibility for
          linked external content lies with the respective provider or operator.
        </p>
        <p>
          If we become aware of unlawful external content, we will review and
          remove the relevant link where appropriate.
        </p>
      </section>

      <section>
        <h2>Copyright and intellectual property</h2>
        <p>
          The content, structure, copy, visuals, brand elements, and design of
          this website are protected by applicable intellectual property laws.
        </p>
        <p>
          Unless otherwise stated, all rights belong to Aroneu or the
          respective rights holder.
        </p>
        <p>
          Content from this website may not be copied, reproduced, modified,
          distributed, or used commercially without prior written permission
          from Aroneu.
        </p>
      </section>

      <section>
        <h2>AI Workspace visuals and representative materials</h2>
        <p>
          The website may include AI Workspace visuals, diagrams, interface
          previews, or other representative materials.
        </p>
        <p>
          Unless expressly stated otherwise, these visuals are provided to
          explain the Aroneu operating model and may not represent a live
          production interface, final client environment, or complete product
          feature set.
        </p>
        <p>
          Client-specific systems, data flows, access controls, and governance
          arrangements are defined separately in written agreements and
          technical documentation.
        </p>
      </section>

      <section>
        <h2>Legal notices</h2>
        <p>This Imprint is provided for the public Aroneu website.</p>
        <p>
          Commercial services, client engagements, data processing arrangements,
          and employment matters may be governed by separate agreements,
          policies, or legal notices.
        </p>
      </section>
    </LegalShell>
  );
}
