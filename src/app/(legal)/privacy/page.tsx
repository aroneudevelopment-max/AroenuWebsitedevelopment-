import React from "react";

export const metadata = {
  title: "Privacy Policy | Aroneu",
  description: "Privacy Policy explaining how Aroneu GmbH processes personal data.",
  alternates: {
    canonical: "https://aroneu.de/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col w-full surface-paper">
      <section className="pt-32 pb-24 border-b border-zinc-200">
        <div className="container-aroneu max-w-3xl mx-auto">
          <span className="text-label uppercase tracking-widest block mb-4 text-zinc-500">
            Legal
          </span>
          <h1 className="text-display mb-6 font-light">Privacy Policy</h1>
          <p className="text-body text-zinc-500 mb-8">
            Last updated: [Insert date]
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-aroneu max-w-3xl mx-auto">
          <div className="text-zinc-800 space-y-6">
            <p className="text-body">
              This Privacy Policy explains how Aroneu GmbH processes personal data when you visit our website, contact us, book a call, subscribe to updates, download resources, or apply for a role.
            </p>
            <p className="text-body">
              It also explains your rights under applicable data protection law.
            </p>
            <p className="text-body">
              This policy applies to the public Aroneu website and related website forms. It does not replace any separate commercial agreement, data processing agreement, client contract, or service-specific privacy documentation that may apply to a client engagement or the AI Workspace.
            </p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">1. Who is responsible for your data</h2>
            <p className="text-body">The controller responsible for this website is:</p>
            <p className="text-body">
              <strong>Aroneu GmbH</strong><br />
              [Registered address]<br />
              [Postal code, city, country]
            </p>
            <p className="text-body">
              Email: [privacy contact email]<br />
              Phone: [phone number, if applicable]
            </p>
            <p className="text-body">Represented by: [Managing director(s)]</p>
            <p className="text-body">
              For general website enquiries, you may also contact us through the contact form on this website.
            </p>
            <h3 className="text-h3 mt-12 mb-4 font-medium text-ink">Data Protection Officer</h3>
            <p className="text-body">
              [If Aroneu has appointed a Data Protection Officer, insert full DPO contact details here.]
            </p>
            <p className="text-body">
              [If no Data Protection Officer is appointed, insert approved wording confirming that privacy requests can be sent to the privacy contact email above.]
            </p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">2. What this policy covers</h2>
            <p className="text-body">We process personal data when you interact with Aroneu through this website.</p>
            <p className="text-body">This may include data from:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
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
            <p className="text-body">We only process personal data where there is a lawful reason to do so.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">3. Data we process when you visit the website</h2>
            <p className="text-body">When you visit the website, our hosting and security systems may process technical data automatically.</p>
            <p className="text-body">This may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>IP address,</li>
              <li>browser type and version,</li>
              <li>device information,</li>
              <li>pages visited,</li>
              <li>date and time of access,</li>
              <li>referring website,</li>
              <li>error logs,</li>
              <li>security logs.</li>
            </ul>
            <p className="text-body">We use this data to operate the website, keep it secure, diagnose errors, prevent misuse, and improve performance.</p>
            <p className="text-body"><strong>Legal basis:</strong><br />Our legitimate interest in operating a secure and reliable website, Art. 6(1)(f) GDPR.</p>
            <p className="text-body"><strong>Hosting provider:</strong><br />[Insert final hosting provider, for example Vercel or Netlify]</p>
            <p className="text-body"><strong>Retention:</strong><br />[Insert retention period for server logs]</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">4. Data we process when you contact us</h2>
            <p className="text-body">When you submit a contact form or send us an enquiry, we process the information you provide.</p>
            <p className="text-body">This may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>full name,</li>
              <li>work email,</li>
              <li>company,</li>
              <li>role,</li>
              <li>team need,</li>
              <li>message or notes,</li>
              <li>communication history.</li>
            </ul>
            <p className="text-body">We use this data to respond to your enquiry, understand the team or governance need you describe, prepare next steps, and manage the business relationship.</p>
            <p className="text-body"><strong>Legal basis:</strong><br />Pre-contractual or contractual necessity, Art. 6(1)(b) GDPR, where your enquiry relates to a potential business relationship.<br />Legitimate interest, Art. 6(1)(f) GDPR, where we respond to business enquiries and manage professional communication.</p>
            <p className="text-body"><strong>Retention:</strong><br />[Insert retention period for inbound enquiries and business communication]</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">5. Data we process when you book a call</h2>
            <p className="text-body">If you use a scheduling tool to book a call with Aroneu, we process the information needed to arrange and manage the meeting.</p>
            <p className="text-body">This may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>name,</li>
              <li>email address,</li>
              <li>company,</li>
              <li>meeting time,</li>
              <li>meeting notes,</li>
              <li>time zone,</li>
              <li>calendar metadata,</li>
              <li>technical data collected by the scheduling provider.</li>
            </ul>
            <p className="text-body">We use this data to schedule the meeting, send confirmations, manage calendar invitations, and prepare for the conversation.</p>
            <p className="text-body"><strong>Scheduling provider:</strong><br />[Insert final scheduler provider: Cal.com, Calendly, meetergo, or other]</p>
            <p className="text-body"><strong>Legal basis:</strong><br />Pre-contractual or contractual necessity, Art. 6(1)(b) GDPR.<br />Legitimate interest in organising business meetings, Art. 6(1)(f) GDPR.</p>
            <p className="text-body"><strong>International processing note:</strong><br />If the scheduling provider processes data outside the European Economic Area, we use appropriate safeguards where required, such as Standard Contractual Clauses or other legally recognised mechanisms.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">6. Data we process when you subscribe to updates</h2>
            <p className="text-body">If you subscribe to Aroneu updates or “The brief”, we process the data needed to send the subscription.</p>
            <p className="text-body">This may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>email address,</li>
              <li>consent status,</li>
              <li>subscription date and time,</li>
              <li>confirmation status,</li>
              <li>unsubscribe status,</li>
              <li>email engagement data, if enabled by the email provider.</li>
            </ul>
            <p className="text-body">We use this data to send updates, confirm subscription consent, manage unsubscribes, and keep evidence of consent.</p>
            <p className="text-body"><strong>Newsletter provider:</strong><br />[Insert final newsletter or CRM provider]</p>
            <p className="text-body"><strong>Legal basis:</strong><br />Consent, Art. 6(1)(a) GDPR.</p>
            <p className="text-body">You can withdraw your consent at any time by using the unsubscribe link in the email or contacting us directly.</p>
            <p className="text-body">Where required, we use a double opt-in process. This means you may receive a confirmation email before the subscription becomes active.</p>
            <p className="text-body"><strong>Retention:</strong><br />We keep subscription data until you unsubscribe or withdraw consent. We may retain limited suppression records to make sure we do not contact you again after you unsubscribe.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">7. Data we process when you download resources</h2>
            <p className="text-body">If Aroneu offers downloadable resources, guides, checklists, or similar materials, we may process the information you submit to receive them.</p>
            <p className="text-body">This may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>name,</li>
              <li>work email,</li>
              <li>company,</li>
              <li>requested resource,</li>
              <li>consent status,</li>
              <li>communication preferences.</li>
            </ul>
            <p className="text-body">We use this data to provide the resource, manage related communication, and understand interest in Aroneu’s content.</p>
            <p className="text-body">Where a resource download is connected to marketing communication, we will ask for separate consent where required.</p>
            <p className="text-body"><strong>Legal basis:</strong><br />Consent, Art. 6(1)(a) GDPR, where you choose to receive marketing communication.<br />Pre-contractual or contractual necessity, Art. 6(1)(b) GDPR, where the resource is provided as part of a requested interaction.<br />Legitimate interest, Art. 6(1)(f) GDPR, where we manage basic business communication around the request.</p>
            <p className="text-body"><strong>Retention:</strong><br />[Insert retention period for resource-download data]</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">8. Data we process when you apply for a role</h2>
            <p className="text-body">If you apply for a role at Aroneu, we process the data needed to review and manage your application.</p>
            <p className="text-body">This may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
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
            <p className="text-body">We use this data to review your application, communicate with you, assess suitability, and manage the recruitment process.</p>
            <p className="text-body"><strong>Legal basis:</strong><br />Pre-contractual necessity, Art. 6(1)(b) GDPR.<br />Employment-related data processing under Art. 88 GDPR and applicable German employment data rules, including BDSG § 26 where applicable.<br />Consent, Art. 6(1)(a) GDPR, if you agree to be considered for future roles or join a talent pool.</p>
            <p className="text-body"><strong>Retention:</strong><br />[Insert approved applicant retention period, for example 3–6 months after the recruitment process ends, unless a longer period is required by law or the applicant has consented to talent-pool retention.]</p>
            <p className="text-body">If we would like to keep your application for future opportunities, we will ask for separate consent.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">9. Cookies and similar technologies</h2>
            <p className="text-body">We use cookies and similar technologies to operate the website and, where you consent, to understand how visitors use it.</p>
            <p className="text-body">Some technologies are strictly necessary. They help the website work, remember privacy preferences, protect forms from abuse, and keep the site secure.</p>
            <p className="text-body">Other technologies, such as analytics or marketing tools, are optional and only used where required consent has been given.</p>
            <p className="text-body">You can find more detail in our Cookie Policy.</p>
            <p className="text-body">You can change or withdraw your cookie preferences at any time through [insert cookie settings link or CMP widget location].</p>
            <p className="text-body"><strong>Consent management provider:</strong><br />[Insert final CMP provider, for example Cookiebot or equivalent]</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">10. Analytics</h2>
            <p className="text-body">We may use analytics tools to understand website traffic, page performance, and content engagement.</p>
            <p className="text-body">Depending on the final analytics setup, this may include privacy-friendly analytics or consent-based analytics tools.</p>
            <p className="text-body"><strong>Analytics provider:</strong><br />[Insert final analytics provider: Plausible, Google Analytics 4, or other]</p>
            <p className="text-body">If analytics cookies or similar identifiers are used, they will only be activated where required consent has been given.</p>
            <p className="text-body"><strong>Legal basis:</strong><br />Consent, Art. 6(1)(a) GDPR, where optional analytics technologies are used.<br />Legitimate interest, Art. 6(1)(f) GDPR, where privacy-friendly, non-identifying analytics are used and permitted without consent.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">11. Security and spam prevention</h2>
            <p className="text-body">We may use security tools to protect forms, prevent spam, and detect automated misuse.</p>
            <p className="text-body">This may involve processing technical signals such as:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>IP address,</li>
              <li>browser information,</li>
              <li>device signals,</li>
              <li>interaction patterns,</li>
              <li>security tokens.</li>
            </ul>
            <p className="text-body"><strong>Security provider:</strong><br />[Insert final provider, for example Cloudflare Turnstile or other]</p>
            <p className="text-body"><strong>Legal basis:</strong><br />Our legitimate interest in protecting the website, forms, and systems from misuse, Art. 6(1)(f) GDPR.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">12. CRM and business communication</h2>
            <p className="text-body">When you contact Aroneu, book a call, or subscribe to updates, your details may be stored in a CRM or communication system.</p>
            <p className="text-body">We use these systems to manage enquiries, keep business communication organised, and follow up on relevant conversations.</p>
            <p className="text-body"><strong>CRM provider:</strong><br />[Insert final CRM provider: HubSpot, ActiveCampaign, or other]</p>
            <p className="text-body">Where the CRM provider processes personal data outside the European Economic Area, we use appropriate safeguards where required.</p>
            <p className="text-body">If lead scoring, profiling, or email engagement tracking is enabled, the relevant processing details must be added here before publication.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">13. Processors and service providers</h2>
            <p className="text-body">We use specialised service providers to operate the website and related digital services.</p>
            <p className="text-body">These may include providers for:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>website hosting,</li>
              <li>security and spam prevention,</li>
              <li>consent management,</li>
              <li>analytics,</li>
              <li>CRM and lead management,</li>
              <li>newsletter delivery,</li>
              <li>scheduling,</li>
              <li>email delivery,</li>
              <li>file storage,</li>
              <li>recruitment workflows.</li>
            </ul>
            <p className="text-body">These providers process personal data only where needed to provide their services to Aroneu.</p>
            <p className="text-body">We use data processing agreements where required by law.</p>
            <p className="text-body"><strong>Current provider list:</strong><br />[Insert final processor and sub-processor table]</p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-300">
                    <th className="py-3 px-4 font-medium">Provider</th>
                    <th className="py-3 px-4 font-medium">Purpose</th>
                    <th className="py-3 px-4 font-medium">Location</th>
                    <th className="py-3 px-4 font-medium">Legal basis / safeguard</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 px-4">[Provider]</td>
                    <td className="py-3 px-4">[Purpose]</td>
                    <td className="py-3 px-4">[Country/region]</td>
                    <td className="py-3 px-4">[DPA, SCCs, adequacy decision, or other safeguard]</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">14. International data transfers</h2>
            <p className="text-body">Some service providers, systems, or authorised personnel may process or access personal data outside the European Economic Area.</p>
            <p className="text-body">This may include providers based in the United States or authorised support and capability-team access from India, depending on the final technical setup and the nature of the interaction.</p>
            <p className="text-body">Where personal data is processed or accessed outside the European Economic Area, we use appropriate safeguards where required. These may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>EU Standard Contractual Clauses,</li>
              <li>data processing agreements,</li>
              <li>role-based access controls,</li>
              <li>access limitations,</li>
              <li>technical and organisational security measures,</li>
              <li>transfer impact assessments where required.</li>
            </ul>
            <p className="text-body">This does not mean that all data is transferred outside the European Economic Area. It means that certain providers or authorised people may process or access limited data where needed for website operations, business communication, support, recruitment, or related services.</p>
            <p className="text-body">[Insert final India access scope, SCC status, TIA status, and approved legal wording.]</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">15. AI Workspace and client data</h2>
            <p className="text-body">This website may describe or show the AI Workspace, including representative visuals, mockups, or explanations of how governance, visibility, documentation, controls, and AI-supported insights may work.</p>
            <p className="text-body">This Privacy Policy covers the public website and related website interactions.</p>
            <p className="text-body">Client data processed inside an AI Workspace, client project environment, or managed capability-team engagement may be governed by separate client agreements, data processing agreements, security documentation, and service-specific policies.</p>
            <p className="text-body">Any AI Workspace data-residency or hosting statement must be based on the confirmed technical architecture.</p>
            <p className="text-body">[Insert approved AI Workspace hosting location, processor list, access model, and client-data policy reference.]</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">16. Data we receive from others</h2>
            <p className="text-body">In some cases, we may receive your business contact details from a colleague, partner, client, referral source, event contact, or public professional source.</p>
            <p className="text-body">We use this data only where there is a lawful reason to do so, such as responding to a business introduction, managing a professional relationship, or following up on a relevant enquiry.</p>
            <p className="text-body"><strong>Legal basis:</strong><br />Legitimate interest, Art. 6(1)(f) GDPR, unless another legal basis applies.</p>
            <p className="text-body">You may object to this processing at any time.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">17. How long we keep personal data</h2>
            <p className="text-body">We keep personal data only for as long as needed for the purpose for which it was collected, unless a longer period is required by law.</p>
            <p className="text-body">Retention periods depend on the type of data and the reason for processing.</p>
            <p className="text-body">Suggested retention table:</p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-300">
                    <th className="py-3 px-4 font-medium">Data type</th>
                    <th className="py-3 px-4 font-medium">Retention period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 px-4">Website server logs</td>
                    <td className="py-3 px-4">[Insert period]</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 px-4">Contact enquiries</td>
                    <td className="py-3 px-4">[Insert period]</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 px-4">Meeting and scheduler data</td>
                    <td className="py-3 px-4">[Insert period]</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 px-4">Newsletter subscription records</td>
                    <td className="py-3 px-4">Until unsubscribe, plus limited suppression records</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 px-4">Resource-download records</td>
                    <td className="py-3 px-4">[Insert period]</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 px-4">Job application data</td>
                    <td className="py-3 px-4">[Insert approved applicant retention period]</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 px-4">Consent records</td>
                    <td className="py-3 px-4">[Insert CMP/CRM retention period]</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 px-4">Legal or contractual records</td>
                    <td className="py-3 px-4">[Insert statutory retention period]</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-body">When data is no longer needed, we delete it or anonymise it where appropriate.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">18. Your rights</h2>
            <p className="text-body">Under applicable data protection law, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>request access to your personal data,</li>
              <li>request correction of inaccurate data,</li>
              <li>request deletion of your data,</li>
              <li>request restriction of processing,</li>
              <li>object to processing based on legitimate interest,</li>
              <li>request data portability,</li>
              <li>withdraw consent at any time,</li>
              <li>lodge a complaint with a supervisory authority.</li>
            </ul>
            <p className="text-body">To exercise your rights, contact us at:</p>
            <p className="text-body">[privacy contact email]</p>
            <p className="text-body">We may need to verify your identity before responding to a request.</p>
            <p className="text-body">Withdrawing consent does not affect processing that took place before the withdrawal.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">19. Right to object</h2>
            <p className="text-body">Where we process personal data based on legitimate interest, you may object to that processing on grounds relating to your particular situation.</p>
            <p className="text-body">You may also object to direct marketing at any time.</p>
            <p className="text-body">After an objection to direct marketing, we will stop using your data for that purpose.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">20. Security</h2>
            <p className="text-body">We use technical and organisational measures to protect personal data against unauthorised access, loss, misuse, alteration, or disclosure.</p>
            <p className="text-body">These measures may include access controls, role-based permissions, secure hosting practices, encrypted transmission, internal confidentiality rules, and security monitoring.</p>
            <p className="text-body">No website or digital system can be guaranteed to be completely secure. We therefore review and improve safeguards as the website and systems develop.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">21. External links</h2>
            <p className="text-body">This website may contain links to external websites or third-party services.</p>
            <p className="text-body">We are not responsible for how third-party websites process personal data. Please review the privacy policy of the relevant third-party service before submitting personal data there.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">22. Children</h2>
            <p className="text-body">This website is intended for business users, prospective clients, partners, applicants, and professional visitors.</p>
            <p className="text-body">It is not directed at children.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">23. Changes to this Privacy Policy</h2>
            <p className="text-body">We may update this Privacy Policy when our website, technology stack, services, legal requirements, or processing activities change.</p>
            <p className="text-body">The latest version will always be published on this page.</p>

            <h2 className="text-h2 mt-16 mb-6 font-light text-ink">24. Contact</h2>
            <p className="text-body">For privacy questions or data-protection requests, contact:</p>
            <p className="text-body">
              <strong>Aroneu GmbH</strong><br />
              [Registered address]<br />
              [Privacy contact email]<br />
              [Phone number, if applicable]
            </p>

          </div>
        </div>
      </section>
    </main>
  );
}
