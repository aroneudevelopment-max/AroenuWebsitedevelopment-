import React from "react";

export const metadata = {
  title: "Imprint | Aroneu",
  description: "Legal provider information for the Aroneu website.",
  alternates: {
    canonical: "https://aroneu.de/imprint",
  },
};

export default function ImprintPage() {
  return (
    <main className="flex min-h-screen flex-col w-full surface-paper">
      <section className="pt-32 pb-24 border-b border-zinc-200">
        <div className="container-aroneu max-w-3xl mx-auto">
          <span className="text-label uppercase tracking-widest block mb-4 text-zinc-500">
            Legal
          </span>
          <h1 className="text-display mb-6 font-light">Imprint</h1>
          <p className="text-body text-zinc-500 mb-8">
            Last updated: [Insert date]
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-aroneu max-w-3xl mx-auto">
          <div className="text-zinc-800 space-y-6">
            <p className="text-body">
              This page contains the legal provider information for the Aroneu website.
            </p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">Information according to § 5 DDG</h2>
            <p className="text-body">
              <strong>Aroneu GmbH</strong><br />
              [Registered street address]<br />
              [Postal code, city]<br />
              Germany
            </p>
            <p className="text-body">
              Represented by:<br />
              [Managing director(s) / Geschäftsführer]
            </p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">Contact</h2>
            <p className="text-body">
              Email: [general contact email]<br />
              Phone: [phone number]
            </p>
            <p className="text-body">
              For privacy-related requests, please use:<br />
              [privacy contact email]
            </p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">Commercial register</h2>
            <p className="text-body">
              Registered with: [Register court / Amtsgericht]<br />
              Commercial register number: [HRB number]
            </p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">VAT identification number</h2>
            <p className="text-body">
              VAT ID according to § 27a German VAT Act:<br />
              [VAT ID, if applicable]
            </p>
            <p className="text-body">
              [If Aroneu does not yet have or does not use a VAT ID publicly, insert approved legal wording here.]
            </p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">Responsible for website content</h2>
            <p className="text-body">
              Responsible for the content of this website:
            </p>
            <p className="text-body">
              <strong>Aroneu GmbH</strong><br />
              [Registered street address]<br />
              [Postal code, city]<br />
              Germany
            </p>
            <p className="text-body">
              Represented by:<br />
              [Managing director(s)]
            </p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">Nature of this website</h2>
            <p className="text-body">
              This website provides information about Aroneu, its Capability Teams, the AI Workspace, related insights, careers, and contact options.
            </p>
            <p className="text-body">
              The information on this website is intended for general business information only. It does not create a client relationship, service agreement, employment relationship, or other binding commercial relationship unless separately agreed in writing.
            </p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">Dispute resolution</h2>
            <p className="text-body">
              The European Commission provides an online dispute resolution platform at:<br />
              [Insert official ODR link if required by legal counsel]
            </p>
            <p className="text-body">
              Aroneu is not obliged and does not undertake to participate in dispute resolution proceedings before a consumer arbitration board, unless legally required.
            </p>
            <p className="text-body">
              [Confirm final wording with legal counsel, especially because Aroneu operates in a B2B context.]
            </p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">External links</h2>
            <p className="text-body">
              This website may link to external websites.
            </p>
            <p className="text-body">
              Aroneu is not responsible for the content, availability, or data-processing practices of external websites. Responsibility for linked external content lies with the respective provider or operator.
            </p>
            <p className="text-body">
              If we become aware of unlawful external content, we will review and remove the relevant link where appropriate.
            </p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">Copyright and intellectual property</h2>
            <p className="text-body">
              The content, structure, copy, visuals, brand elements, and design of this website are protected by applicable intellectual property laws.
            </p>
            <p className="text-body">
              Unless otherwise stated, all rights belong to Aroneu GmbH or the respective rights holder.
            </p>
            <p className="text-body">
              Content from this website may not be copied, reproduced, modified, distributed, or used commercially without prior written permission from Aroneu GmbH.
            </p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">AI Workspace visuals and representative materials</h2>
            <p className="text-body">
              The website may include AI Workspace visuals, diagrams, interface previews, or other representative materials.
            </p>
            <p className="text-body">
              Unless expressly stated otherwise, these visuals are provided to explain the Aroneu operating model and may not represent a live production interface, final client environment, or complete product feature set.
            </p>
            <p className="text-body">
              Client-specific systems, data flows, access controls, and governance arrangements are defined separately in written agreements and technical documentation.
            </p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">Legal notices</h2>
            <p className="text-body">
              This Imprint is provided for the public Aroneu website.
            </p>
            <p className="text-body">
              Commercial services, client engagements, data processing arrangements, and employment matters may be governed by separate agreements, policies, or legal notices.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
