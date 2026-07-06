import React from "react";

export const metadata = {
  title: "Data Residency and AI Workspace Compliance Note | Aroneu",
  description: "Aroneu Data Residency and AI Workspace Compliance Note.",
  alternates: {
    canonical: "https://aroneu.de/data-residency",
  },
};

export default function DataResidencyPage() {
  return (
    <main className="flex min-h-screen flex-col w-full surface-paper">
      <section className="pt-32 pb-24 border-b border-zinc-200">
        <div className="container-aroneu max-w-3xl mx-auto">
          <span className="text-label uppercase tracking-widest block mb-4 text-zinc-500">
            Legal
          </span>
          <h1 className="text-display mb-6 font-light">Data Residency and AI Workspace Compliance Note</h1>
          <p className="text-body text-zinc-500 mb-8">
            Last updated: [Insert date]
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-aroneu max-w-3xl mx-auto">
          <div className="text-zinc-800 space-y-6">
            <p className="text-body"><strong>Route option:</strong> /data-residency</p>
            <p className="text-body"><strong>Alternative placement:</strong> Section inside /ai-workspace and linked from Privacy Policy</p>
            <p className="text-body"><strong>Page title:</strong> Data Residency and AI Workspace Compliance Note</p>
            
            <p className="text-body">
              This page explains how Aroneu describes data residency, data access, AI Workspace visuals, and cross-border operating controls on the public website.
            </p>
            <p className="text-body">
              It is written for clients, procurement teams, legal reviewers, data protection teams, and security stakeholders who want to understand the boundary between Aroneu’s website, the AI Workspace, and client-specific engagements.
            </p>
            <p className="text-body">
              This page does not replace any client agreement, data processing agreement, security schedule, technical architecture document, or service-specific privacy notice.
            </p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">1. What this note covers</h2>
            <p className="text-body">This note covers the public explanation of:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>where Aroneu says data is hosted,</li>
              <li>who may access data,</li>
              <li>how the AI Workspace is described,</li>
              <li>how India capability teams fit into the operating model,</li>
              <li>what safeguards may apply to international access,</li>
              <li>how website tools differ from client systems,</li>
              <li>which facts must be confirmed before final publication.</li>
            </ul>
            <p className="text-body">The aim is clarity.</p>
            <p className="text-body">
              Aroneu should not overstate data sovereignty.<br />
              Aroneu should not hide the reality of cross-border work.<br />
              Aroneu should explain the operating model in a way a serious buyer can trust.
            </p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">2. The important distinction: residency and access</h2>
            <p className="text-body">Data residency and data access are not the same thing.</p>
            <p className="text-body"><strong>Data residency</strong> means where data is stored or hosted.</p>
            <p className="text-body"><strong>Data access</strong> means where authorised people, systems, or service providers may view, process, support, or manage that data.</p>
            <p className="text-body">A system can be hosted in Europe and still involve authorised access from outside Europe.</p>
            <p className="text-body">For that reason, Aroneu’s public copy must be precise. It should explain where data is hosted only where the hosting location is confirmed, and it should separately explain who may access data and under what controls.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">3. Public website data and client workspace data</h2>
            <p className="text-body">Aroneu’s public website and the AI Workspace should not be described as the same processing environment.</p>
            <p className="text-body">The public website may use tools for:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>hosting,</li>
              <li>forms,</li>
              <li>scheduling,</li>
              <li>CRM,</li>
              <li>newsletter delivery,</li>
              <li>analytics,</li>
              <li>consent management,</li>
              <li>security and spam prevention.</li>
            </ul>
            <p className="text-body">These tools may involve third-party providers and, depending on the final stack, international processing or access.</p>
            <p className="text-body">The AI Workspace may involve a different architecture, different hosting, different access controls, and different client-specific agreements.</p>
            <p className="text-body">Do not imply that the public website, CRM, scheduler, and AI Workspace all share the same data-residency model unless this has been confirmed by the technical and legal teams.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">4. Safe public wording for the AI Workspace</h2>
            <p className="text-body">Use this wording where the architecture is not yet fully confirmed:</p>
            <p className="text-body">The AI Workspace is the governance layer around Aroneu’s capability teams. It is designed to make work, decisions, controls, documentation, and team health easier to see and manage.</p>
            <p className="text-body">Client-specific hosting, access controls, data flows, security requirements, and processing arrangements are defined in the relevant agreements and technical documentation.</p>
            <p className="text-body">Use this only after hosting and access facts are confirmed:</p>
            <p className="text-body">The AI Workspace is hosted in [confirmed hosting location]. Access is limited to authorised users and governed through role-based permissions, agreed controls, and client-specific operating rules.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">5. What Aroneu should not claim publicly</h2>
            <p className="text-body">Do not use these claims unless Aroneu’s legal and technical teams have fully verified them:</p>
            <ul className="list-none space-y-1 text-body">
              <li>100% EU data sovereign.</li>
              <li>EU-only data.</li>
              <li>Your data never leaves Europe.</li>
              <li>No third-country access.</li>
              <li>Fully GDPR compliant.</li>
              <li>Immune to the CLOUD Act.</li>
              <li>No external processors.</li>
              <li>No data sharing.</li>
              <li>All systems are hosted only in Germany.</li>
              <li>All tools are European.</li>
              <li>AI handles governance automatically.</li>
              <li>The AI Workspace makes uncontrolled decisions.</li>
            </ul>
            <p className="text-body">These claims are too absolute and can become legally or commercially risky if any hosting provider, CRM, scheduler, analytics tool, support provider, or authorised operator sits outside the EEA or is connected to a non-EU parent company.</p>
            <p className="text-body">Use precise language instead.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">6. Safer public language</h2>
            <p className="text-body">Use wording like this:</p>
            <p className="text-body">Where personal data is processed or accessed outside the European Economic Area, Aroneu uses appropriate safeguards where required, such as EU Standard Contractual Clauses, data processing agreements, access controls, and technical and organisational measures.</p>
            <p className="text-body">Use this for AI Workspace visuals:</p>
            <p className="text-body">AI Workspace visuals on this website may be representative. Client-specific systems, data flows, access controls, hosting, and governance arrangements are defined separately in written agreements and technical documentation.</p>
            <p className="text-body">Use this for governance:</p>
            <p className="text-body">The purpose of the AI Workspace is visibility and operating control. It supports human leadership. It does not replace client standards, remove accountability, or make uncontrolled decisions.</p>
            <p className="text-body">Use this for India capability teams:</p>
            <p className="text-body">Where authorised Aroneu personnel or capability teams access systems from outside the European Economic Area, access is limited to what is needed for the relevant role and governed by contractual, organisational, and technical safeguards.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">7. India capability teams</h2>
            <p className="text-body">Aroneu’s model involves India capability teams serving European companies.</p>
            <p className="text-body">That model should be explained directly and carefully.</p>
            <p className="text-body">India capability does not mean uncontrolled access.</p>
            <p className="text-body">Any access to client or website systems should be defined by:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>role,</li>
              <li>purpose,</li>
              <li>client agreement,</li>
              <li>data-processing terms,</li>
              <li>access permissions,</li>
              <li>security controls,</li>
              <li>confidentiality duties,</li>
              <li>transfer safeguards where required.</li>
            </ul>
            <p className="text-body">If India-based personnel access personal data or client systems from outside the EEA, the final legal wording must reflect the applicable transfer mechanism and safeguards.</p>
            <p className="text-body">This may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>EU Standard Contractual Clauses,</li>
              <li>Transfer Impact Assessment where required,</li>
              <li>role-based access controls,</li>
              <li>least-privilege access,</li>
              <li>VPN or secure network controls,</li>
              <li>audit logs,</li>
              <li>confidentiality obligations,</li>
              <li>restricted system access,</li>
              <li>client-approved operating rules.</li>
            </ul>
            <p className="text-body">[Insert final India access scope and legal safeguard wording.]</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">8. Website tools and international providers</h2>
            <p className="text-body">The public Aroneu website may use third-party tools.</p>
            <p className="text-body">Depending on the final implementation, this may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>hosting provider: [Insert provider]</li>
              <li>CRM provider: [Insert provider]</li>
              <li>scheduler provider: [Insert provider]</li>
              <li>newsletter provider: [Insert provider]</li>
              <li>analytics provider: [Insert provider]</li>
              <li>consent-management provider: [Insert provider]</li>
              <li>security provider: [Insert provider]</li>
            </ul>
            <p className="text-body">Some providers may process data outside the European Economic Area or be connected to non-European corporate groups.</p>
            <p className="text-body">This should be disclosed in the Privacy Policy and Cookie Policy where relevant.</p>
            <p className="text-body">Do not hide this.</p>
            <p className="text-body">Do not over-explain it in marketing sections.</p>
            <p className="text-body">Disclose it clearly in legal and compliance areas.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">9. Core AI Workspace data</h2>
            <p className="text-body">The following details must be confirmed before Aroneu makes specific claims about AI Workspace data residency:</p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full text-left text-body border-collapse">
                <thead>
                  <tr className="border-b border-zinc-300">
                    <th className="py-2 pr-4 font-semibold">Question</th>
                    <th className="py-2 font-semibold">Confirmed answer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  <tr>
                    <td className="py-2 pr-4">Where is AI Workspace production data hosted?</td>
                    <td className="py-2">[Insert confirmed hosting location]</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Which cloud or infrastructure provider is used?</td>
                    <td className="py-2">[Insert provider]</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Are backups stored in the same region?</td>
                    <td className="py-2">[Insert answer]</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Are logs stored separately?</td>
                    <td className="py-2">[Insert answer]</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Are any sub-processors outside the EEA involved?</td>
                    <td className="py-2">[Insert answer]</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Can India-based personnel access the workspace?</td>
                    <td className="py-2">[Insert answer]</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">What access controls are used?</td>
                    <td className="py-2">[Insert answer]</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Are SCCs executed where required?</td>
                    <td className="py-2">[Insert answer]</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Has a Transfer Impact Assessment been completed where required?</td>
                    <td className="py-2">[Insert answer]</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Is client data separated by tenant, workspace, or project?</td>
                    <td className="py-2">[Insert answer]</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Are AI models or third-party AI APIs used?</td>
                    <td className="py-2">[Insert answer]</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Are client inputs used to train third-party models?</td>
                    <td className="py-2">[Insert answer]</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">What is the incident-response process?</td>
                    <td className="py-2">[Insert answer]</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-body">Do not publish final claims until these answers are confirmed by Aroneu’s technical and legal teams.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">10. AI-supported insight boundaries</h2>
            <p className="text-body">The AI Workspace may support visibility, documentation, reporting, governance checks, and operating insight.</p>
            <p className="text-body">The public website should describe this carefully.</p>
            <p className="text-body">Safe wording:</p>
            <p className="text-body">AI-supported insights help surface signals, patterns, and follow-up points. They are designed to support human review, not replace leadership judgement or client decision-making.</p>
            <p className="text-body">Avoid:</p>
            <ul className="list-none space-y-1 text-body">
              <li>AI makes decisions for you.</li>
              <li>AI governs the team automatically.</li>
              <li>AI replaces managers.</li>
              <li>AI removes the need for oversight.</li>
              <li>AI guarantees delivery quality.</li>
              <li>AI prevents all risk.</li>
            </ul>
            <p className="text-body">The brand promise is governable capability, not uncontrolled automation.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">11. Representative visuals</h2>
            <p className="text-body">The website may show AI Workspace visuals, videos, diagrams, or interface previews.</p>
            <p className="text-body">Unless the visuals are confirmed live product screenshots, label them carefully.</p>
            <p className="text-body">Use:</p>
            <ul className="list-none space-y-1 text-body">
              <li>Representative visual</li>
              <li>Workspace preview</li>
              <li>Representative interface</li>
              <li>Illustrative workflow</li>
              <li>Example governance view</li>
            </ul>
            <p className="text-body">Do not use:</p>
            <ul className="list-none space-y-1 text-body">
              <li>Live client dashboard</li>
              <li>Actual client data</li>
              <li>Real-time AI command centre</li>
              <li>Guaranteed workspace interface</li>
              <li>Full product screenshot</li>
            </ul>
            <p className="text-body">Recommended public line:</p>
            <p className="text-body">AI Workspace visuals are representative unless stated otherwise. Final workspace configuration, data views, permissions, and controls depend on the client engagement and approved technical setup.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">12. Public section for the AI Workspace page</h2>
            <p className="text-body">Use this section inside /ai-workspace.</p>
            <p className="text-body"><strong>Eyebrow</strong><br />Data, access, and control</p>
            <p className="text-body"><strong>Heading</strong><br />Residency is only one part of governance.</p>
            <p className="text-body"><strong>Body</strong><br />A governed workspace needs more than a hosting location. It also needs clear access rules, role-based permissions, documented controls, and agreed responsibilities.</p>
            <p className="text-body">Aroneu separates data residency from data access. Where systems are hosted, who can access them, and which safeguards apply are defined through the technical setup and client agreements.</p>
            <p className="text-body"><strong>Cards</strong></p>
            <ul className="list-none space-y-2 text-body">
              <li><strong>Data residency</strong><br />Where workspace data is hosted and backed up.</li>
              <li><strong>Access control</strong><br />Who can access systems, for what purpose, and under which permissions.</li>
              <li><strong>Operating controls</strong><br />How decisions, documentation, quality gates, and responsibilities stay visible.</li>
              <li><strong>Transfer safeguards</strong><br />How access outside the EEA is handled where required.</li>
            </ul>
            <p className="text-body"><strong>Note</strong><br />Client-specific hosting, access, processor, and transfer details are confirmed during the engagement setup and documented in the relevant agreements.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">13. Short footer/legal link version</h2>
            <p className="text-body">Use this if the website needs a short legal-trust line near the footer or AI Workspace CTA.</p>
            <p className="text-body">Data residency and access depend on the final technical setup, client agreement, and approved providers. Aroneu documents hosting, access controls, processors, and transfer safeguards where required.</p>
            <p className="text-body">Link label:<br />Data and access note</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">14. Procurement-friendly summary</h2>
            <p className="text-body">Use this version where a serious buyer wants a quick explanation.</p>
            <p className="text-body">Aroneu distinguishes clearly between where data is hosted and where authorised access may occur.</p>
            <p className="text-body">The AI Workspace is designed as a governance layer around capability teams. Its purpose is to make work, decisions, documentation, controls, and team health easier to see and manage.</p>
            <p className="text-body">Client-specific data processing, hosting, access permissions, processors, international transfers, and safeguards are defined in the relevant agreements and technical documentation.</p>
            <p className="text-body">Where personal data is processed or accessed outside the EEA, Aroneu uses appropriate safeguards where required.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">15. Required legal and technical confirmations</h2>
            <p className="text-body">Before publishing specific data-residency claims, confirm:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>AI Workspace hosting location,</li>
              <li>cloud or infrastructure provider,</li>
              <li>backup region,</li>
              <li>log storage region,</li>
              <li>processor and sub-processor list,</li>
              <li>CRM provider,</li>
              <li>scheduler provider,</li>
              <li>analytics provider,</li>
              <li>consent-management provider,</li>
              <li>security provider,</li>
              <li>whether India-based personnel access CRM, CMS, AI Workspace, or client systems,</li>
              <li>SCC execution status,</li>
              <li>Transfer Impact Assessment status,</li>
              <li>DPA status with all processors,</li>
              <li>whether any US-based providers are used,</li>
              <li>whether any AI APIs process client or user data,</li>
              <li>whether client data is used for model training,</li>
              <li>role-based access control model,</li>
              <li>least-privilege access policy,</li>
              <li>audit logging,</li>
              <li>incident-response process,</li>
              <li>client-data retention and deletion process.</li>
            </ul>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">16. Implementation rule for the website-building agent</h2>
            <p className="text-body">Do not hide this information in a long legal page only.</p>
            <p className="text-body">A short, calm version should appear on the AI Workspace page because the AI Workspace is where procurement and security-minded buyers will look for it.</p>
            <p className="text-body">The full legal detail should remain in:</p>
            <ul className="list-none space-y-1 text-body">
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Data and access note</li>
              <li>Client agreements</li>
              <li>Data processing agreements</li>
            </ul>
            <p className="text-body">Do not publish absolute statements until the facts are confirmed.</p>
            <p className="text-body">Do not use legal-risk disclaimers in the hero.</p>
            <p className="text-body">Do not make the AI Workspace page sound afraid.</p>
            <p className="text-body">The tone should be:<br />clear, sober, controlled, factual.</p>
            <p className="text-body">Not defensive.<br />Not promotional.<br />Not vague.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">Clean copy set for build</h2>
            <p className="text-body">Use this set for immediate website implementation.</p>
            
            <h3 className="text-h3 mt-10 mb-4 font-semibold text-ink">AI Workspace section</h3>
            <p className="text-body"><strong>Eyebrow</strong><br />Data, access, and control</p>
            <p className="text-body"><strong>Heading</strong><br />Residency is only one part of governance.</p>
            <p className="text-body"><strong>Body</strong><br />A governed workspace needs more than a hosting location. It also needs clear access rules, role-based permissions, documented controls, and agreed responsibilities.</p>
            <p className="text-body">Aroneu separates data residency from data access. Where systems are hosted, who can access them, and which safeguards apply are defined through the technical setup and client agreements.</p>
            
            <h3 className="text-h3 mt-10 mb-4 font-semibold text-ink">Four cards</h3>
            <p className="text-body"><strong>Data residency</strong><br />Where workspace data is hosted and backed up.</p>
            <p className="text-body"><strong>Access control</strong><br />Who can access systems, for what purpose, and under which permissions.</p>
            <p className="text-body"><strong>Operating controls</strong><br />How decisions, documentation, quality gates, and responsibilities stay visible.</p>
            <p className="text-body"><strong>Transfer safeguards</strong><br />How access outside the EEA is handled where required.</p>
            
            <p className="text-body"><strong>Note</strong><br />Client-specific hosting, access, processor, and transfer details are confirmed during the engagement setup and documented in the relevant agreements.</p>
            
            <h3 className="text-h3 mt-10 mb-4 font-semibold text-ink">Representative visual note</h3>
            <p className="text-body">AI Workspace visuals are representative unless stated otherwise. Final workspace configuration, data views, permissions, and controls depend on the client engagement and approved technical setup.</p>
            
            <h3 className="text-h3 mt-10 mb-4 font-semibold text-ink">Legal trust note</h3>
            <p className="text-body">Where personal data is processed or accessed outside the European Economic Area, Aroneu uses appropriate safeguards where required, such as EU Standard Contractual Clauses, data processing agreements, access controls, and technical and organisational measures.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
