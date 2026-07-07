import React from "react";
import Link from "next/link";
import { LegalShell } from "@/components/layout/LegalShell";

export const metadata = {
  title: "Cookie Policy | Aroneu",
  description: "Cookie Policy explaining how Aroneu uses cookies and similar technologies.",
  alternates: {
    canonical: "https://aroneu.de/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      heading="Cookie Policy"
      updatedNote="Last updated: 7 July 2026"
      path="/cookie-policy"
    >
      <section className="py-16">
        <div className="container-aroneu max-w-3xl mx-auto">
          <div className=" space-y-6">
            <p className="text-body">
              This Cookie Policy explains how Aroneu GmbH uses cookies and similar technologies on this website.
            </p>
            <p className="text-body">
              It should be read together with our Privacy Policy, which explains how we process personal data more broadly.
            </p>

            <h2 className="text-h2 mt-16 mb-6  text-ink">1. What cookies are</h2>
            <p className="text-body">
              Cookies are small text files that may be stored on your device when you visit a website.
            </p>
            <p className="text-body">
              They help websites work, remember choices, protect forms from misuse, understand traffic, or support marketing and communication tools.
            </p>
            <p className="text-body">
              This policy also covers similar technologies, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>local storage,</li>
              <li>session storage,</li>
              <li>pixels,</li>
              <li>tags,</li>
              <li>embedded scripts,</li>
              <li>consent-management tools,</li>
              <li>analytics scripts,</li>
              <li>security and spam-prevention tools.</li>
            </ul>
            <p className="text-body">
              Some of these technologies are necessary for the website to work. Others are optional and are only used where required consent has been given.
            </p>

            <h2 className="text-h2 mt-16 mb-6  text-ink">2. How Aroneu uses cookies</h2>
            <p className="text-body">We use cookies and similar technologies for four main purposes:</p>
            <ol className="list-decimal pl-6 space-y-2 text-body">
              <li>
                <strong>Strictly necessary technologies</strong><br />
                These help the website work, keep it secure, remember consent choices, and protect forms from misuse.
              </li>
              <li>
                <strong>Functional technologies</strong><br />
                These support additional website functions, such as embedded scheduling tools or preference-based features.
              </li>
              <li>
                <strong>Analytics technologies</strong><br />
                These help us understand how visitors use the website, which pages are useful, and where the site can be improved.
              </li>
              <li>
                <strong>Marketing technologies</strong><br />
                These may help us understand campaign performance, manage business communication, or measure engagement with Aroneu content.
              </li>
            </ol>
            <p className="text-body">
              We only use optional functional, analytics, or marketing technologies where the relevant consent has been given, unless a legal exception applies.
            </p>

            <h2 className="text-h2 mt-16 mb-6  text-ink">3. Strictly necessary technologies</h2>
            <p className="text-body">Strictly necessary technologies are required for the website to function properly.</p>
            <p className="text-body">They may be used to:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>load and secure the website,</li>
              <li>remember privacy preferences,</li>
              <li>prevent spam or automated misuse,</li>
              <li>protect forms,</li>
              <li>maintain basic website functionality,</li>
              <li>keep the website stable and available.</li>
            </ul>
            <p className="text-body">
              These technologies do not require consent where they are technically necessary to provide the website or security function you request.
            </p>
            <p className="text-body">
              <strong>Legal basis:</strong><br />
              Legitimate interest in operating a secure and reliable website, Art. 6(1)(f) GDPR.<br />
              Where applicable, the technical necessity exception under § 25 TDDDG.
            </p>

            <h2 className="text-h2 mt-16 mb-6  text-ink">4. Functional technologies</h2>
            <p className="text-body">Functional technologies support optional website features.</p>
            <p className="text-body">They may be used for:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>booking or scheduling tools,</li>
              <li>embedded forms,</li>
              <li>preference-based website functions,</li>
              <li>video or interactive content,</li>
              <li>resource-download flows.</li>
            </ul>
            <p className="text-body">
              If a functional technology is not strictly necessary, it will only be used where required consent has been given.
            </p>
            <p className="text-body">
              <strong>Legal basis:</strong><br />
              Consent, Art. 6(1)(a) GDPR, where the technology is optional.<br />
              Pre-contractual or contractual necessity, Art. 6(1)(b) GDPR, where the tool is needed to provide a requested interaction.<br />
              Legitimate interest, Art. 6(1)(f) GDPR, where applicable.
            </p>

            <h2 className="text-h2 mt-16 mb-6  text-ink">5. Analytics technologies</h2>
            <p className="text-body">Analytics technologies help us understand how the website is used.</p>
            <p className="text-body">They may help us see:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>which pages are visited,</li>
              <li>how visitors move through the site,</li>
              <li>how content performs,</li>
              <li>where technical issues occur,</li>
              <li>which pages may need improvement.</li>
            </ul>
            <p className="text-body">The exact analytics setup depends on the final website configuration.</p>
            <p className="text-body">If Aroneu uses a privacy-friendly analytics tool that does not store cookies or persistent identifiers, this will be reflected in the cookie table below.</p>
            <p className="text-body">If Aroneu uses analytics tools that rely on cookies, identifiers, or similar technologies, those tools will only be activated where required consent has been given.</p>
            <p className="text-body">
              <strong>Analytics provider:</strong><br />
              
            </p>
            <p className="text-body">
              <strong>Legal basis:</strong><br />
              Consent, Art. 6(1)(a) GDPR, where optional analytics cookies or identifiers are used.<br />
              Legitimate interest, Art. 6(1)(f) GDPR, where analytics are privacy-friendly, non-identifying, and permitted without consent.
            </p>

            <h2 className="text-h2 mt-16 mb-6  text-ink">6. Marketing technologies</h2>
            <p className="text-body">Marketing technologies may help Aroneu understand interest in its website, resources, newsletter, or business communication.</p>
            <p className="text-body">They may be used to:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>measure campaign performance,</li>
              <li>understand whether website content is useful,</li>
              <li>support CRM or newsletter systems,</li>
              <li>measure engagement with email or resource content,</li>
              <li>connect website enquiries with business follow-up.</li>
            </ul>
            <p className="text-body">Marketing technologies are optional and require consent where they use cookies, pixels, or similar identifiers.</p>
            <p className="text-body">
              <strong>Marketing / CRM provider:</strong><br />
              HubSpot
            </p>
            <p className="text-body">
              <strong>Legal basis:</strong><br />
              Consent, Art. 6(1)(a) GDPR, where marketing cookies, pixels, or similar technologies are used.
            </p>

            <h2 className="text-h2 mt-16 mb-6  text-ink">7. Consent management</h2>
            <p className="text-body">We use a consent-management tool to record and manage your cookie choices.</p>
            <p className="text-body">This tool may store your consent status so the website can remember whether you accepted, rejected, or customised optional technologies.</p>
            <p className="text-body">
              <strong>Consent-management provider:</strong><br />
              
            </p>
            <p className="text-body">You can change or withdraw your consent at any time by reopening the cookie settings.</p>
            <p className="text-body">
              Cookie settings link:<br />
              
            </p>
            <p className="text-body">Withdrawing consent does not affect processing that took place before consent was withdrawn.</p>

            <h2 className="text-h2 mt-16 mb-6  text-ink">8. Cookie categories</h2>
            <p className="text-body">The website may use the following categories.</p>
            
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-300">
                    <th className="py-3 px-4 font-medium align-top">Category</th>
                    <th className="py-3 px-4 font-medium align-top">Purpose</th>
                    <th className="py-3 px-4 font-medium align-top">Consent required?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 px-4 align-top">Strictly necessary</td>
                    <td className="py-3 px-4 align-top">Website operation, security, consent storage, form protection</td>
                    <td className="py-3 px-4 align-top">No, where technically necessary</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 px-4 align-top">Functional</td>
                    <td className="py-3 px-4 align-top">Optional website features, scheduling, embedded tools, preferences</td>
                    <td className="py-3 px-4 align-top">Yes, where not strictly necessary</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 px-4 align-top">Analytics</td>
                    <td className="py-3 px-4 align-top">Traffic measurement, page performance, content improvement</td>
                    <td className="py-3 px-4 align-top">Yes, unless configured without cookies or persistent identifiers and legally permitted</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 px-4 align-top">Marketing</td>
                    <td className="py-3 px-4 align-top">Campaign measurement, CRM tracking, email engagement, attribution</td>
                    <td className="py-3 px-4 align-top">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-h2 mt-16 mb-6  text-ink">9. Cookie and technology table</h2>
            <p className="text-body">The table below must reflect the final production website after a technical cookie scan.</p>
            <p className="text-body">Do not treat sample entries as final. The final table must list only technologies actually active on the website.</p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse min-w-">
                <thead>
                  <tr className="border-b border-zinc-300">
                    <th className="py-3 px-4 font-medium align-top">Name / script</th>
                    <th className="py-3 px-4 font-medium align-top">Provider</th>
                    <th className="py-3 px-4 font-medium align-top">Category</th>
                    <th className="py-3 px-4 font-medium align-top">Purpose</th>
                    <th className="py-3 px-4 font-medium align-top">Personal data involved</th>
                    <th className="py-3 px-4 font-medium align-top">Consent required?</th>
                    <th className="py-3 px-4 font-medium align-top">Lifespan</th>
                    <th className="py-3 px-4 font-medium align-top">Provider location</th>
                    <th className="py-3 px-4 font-medium align-top">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top">Strictly necessary</td>
                    <td className="py-3 px-4 align-top">Stores cookie consent choices</td>
                    <td className="py-3 px-4 align-top">Consent status, technical identifier</td>
                    <td className="py-3 px-4 align-top">No</td>
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top">Confirm before launch</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 px-4 align-top">Hosting / security logs</td>
                    <td className="py-3 px-4 align-top">Vercel</td>
                    <td className="py-3 px-4 align-top">Strictly necessary</td>
                    <td className="py-3 px-4 align-top">Website delivery, security, error logs</td>
                    <td className="py-3 px-4 align-top">IP address, browser data, access logs</td>
                    <td className="py-3 px-4 align-top">No, where technically necessary</td>
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top">Confirm before launch</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top">Strictly necessary / security</td>
                    <td className="py-3 px-4 align-top">Spam and bot prevention on forms</td>
                    <td className="py-3 px-4 align-top">IP address, browser signals, interaction data</td>
                    <td className="py-3 px-4 align-top">No, where used as necessary security</td>
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top">Use only if active</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top">Plausible Analytics</td>
                    <td className="py-3 px-4 align-top">Analytics</td>
                    <td className="py-3 px-4 align-top">Privacy-friendly traffic measurement</td>
                    <td className="py-3 px-4 align-top">Aggregated traffic data; confirm configuration</td>
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top">Use only if active</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 px-4 align-top">_ga, _ga_*, or equivalent</td>
                    <td className="py-3 px-4 align-top">Google Analytics 4</td>
                    <td className="py-3 px-4 align-top">Analytics</td>
                    <td className="py-3 px-4 align-top">Website traffic and event measurement</td>
                    <td className="py-3 px-4 align-top">IP address, client ID, device and usage data</td>
                    <td className="py-3 px-4 align-top">Yes</td>
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top">Use only if active</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top">HubSpot</td>
                    <td className="py-3 px-4 align-top">Marketing</td>
                    <td className="py-3 px-4 align-top">CRM attribution, campaign measurement, lead engagement</td>
                    <td className="py-3 px-4 align-top">IP address, session ID, page activity</td>
                    <td className="py-3 px-4 align-top">Yes</td>
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top">Use only if active</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 px-4 align-top">Scheduler cookies/scripts</td>
                    <td className="py-3 px-4 align-top">Cal.com</td>
                    <td className="py-3 px-4 align-top">Functional</td>
                    <td className="py-3 px-4 align-top">Appointment scheduling and embedded booking</td>
                    <td className="py-3 px-4 align-top">IP address, browser data, booking metadata</td>
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top">Use only if embedded</td>
                  </tr>
                  <tr className="border-b border-zinc-200">
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top">HubSpot</td>
                    <td className="py-3 px-4 align-top">Marketing</td>
                    <td className="py-3 px-4 align-top">Email engagement measurement</td>
                    <td className="py-3 px-4 align-top">Opens, clicks, email engagement data</td>
                    <td className="py-3 px-4 align-top">Yes, where required</td>
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top"></td>
                    <td className="py-3 px-4 align-top">Use only if active</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-h2 mt-16 mb-6  text-ink">10. Third-party tools and embedded content</h2>
            <p className="text-body">Some website features may be provided by third-party tools.</p>
            <p className="text-body">This may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>scheduling tools,</li>
              <li>CRM forms,</li>
              <li>newsletter tools,</li>
              <li>analytics tools,</li>
              <li>video embeds,</li>
              <li>security tools,</li>
              <li>resource-download tools.</li>
            </ul>
            <p className="text-body">When these tools are active, they may process technical data such as IP address, device information, browser data, usage data, or submitted form data.</p>
            <p className="text-body">Where optional third-party tools require consent, they must not be activated before the relevant consent has been given.</p>
            <p className="text-body">More information about service providers and international processing is available in our Privacy Policy.</p>

            <h2 className="text-h2 mt-16 mb-6  text-ink">11. Scheduler and booking tools</h2>
            <p className="text-body">If Aroneu uses an embedded scheduling tool, the tool may set cookies or use similar technologies to load the calendar interface, manage availability, and process booking information.</p>
            <p className="text-body">
              <strong>Scheduler provider:</strong><br />
              
            </p>
            <p className="text-body">If the scheduler is embedded directly on the website and uses optional cookies or third-party scripts, it may require consent before loading.</p>
            <p className="text-body">If the scheduler opens as an external link, the provider’s own cookie and privacy rules may apply on its website.</p>

            <h2 className="text-h2 mt-16 mb-6  text-ink">12. Newsletter and CRM tracking</h2>
            <p className="text-body">If Aroneu uses newsletter or CRM tools, those tools may use cookies, pixels, or similar technologies to understand engagement with Aroneu communication.</p>
            <p className="text-body">This may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>whether an email was opened,</li>
              <li>whether a link was clicked,</li>
              <li>whether a website visit followed a campaign link,</li>
              <li>whether a resource or form was used.</li>
            </ul>
            <p className="text-body">Where these technologies are optional or used for marketing, they require consent where required by law.</p>
            <p className="text-body">
              <strong>Newsletter / CRM provider:</strong><br />
              
            </p>

            <h2 className="text-h2 mt-16 mb-6  text-ink">13. Security technologies</h2>
            <p className="text-body">We may use security technologies to protect forms and the website from misuse, spam, automated requests, or malicious activity.</p>
            <p className="text-body">These tools may process technical signals such as IP address, browser information, device data, interaction patterns, or security tokens.</p>
            <p className="text-body">
              <strong>Security provider:</strong><br />
              
            </p>
            <p className="text-body">Where the security technology is necessary to protect the website and forms, it may be used without consent on the basis of legitimate interest and technical necessity.</p>

            <h2 className="text-h2 mt-16 mb-6  text-ink">14. How to change your cookie choices</h2>
            <p className="text-body">You can change or withdraw your cookie preferences at any time.</p>
            <p className="text-body">Use the cookie settings link or icon available on the website:</p>
            
            <p className="text-body">You can also change cookie settings in your browser. Most browsers allow you to block, delete, or restrict cookies.</p>
            <p className="text-body">Browser-level restrictions may affect how some website features work.</p>

            <h2 className="text-h2 mt-16 mb-6  text-ink">15. Browser controls</h2>
            <p className="text-body">You can manage cookies through your browser settings.</p>
            <p className="text-body">Depending on your browser, you may be able to:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>delete cookies,</li>
              <li>block cookies,</li>
              <li>allow cookies only for selected websites,</li>
              <li>clear local storage,</li>
              <li>restrict third-party cookies,</li>
              <li>receive warnings before cookies are stored.</li>
            </ul>
            <p className="text-body">For details, check your browser’s help section.</p>

            <h2 className="text-h2 mt-16 mb-6  text-ink">16. Consent records</h2>
            <p className="text-body">Where required, our consent-management tool may store a record of your consent choices.</p>
            <p className="text-body">This may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>consent status,</li>
              <li>consent date and time,</li>
              <li>selected categories,</li>
              <li>technical consent identifier,</li>
              <li>version of the consent notice.</li>
            </ul>
            <p className="text-body">This helps us respect your choices and demonstrate that optional technologies were used only where consent was given.</p>

            <h2 className="text-h2 mt-16 mb-6  text-ink">17. Changes to this Cookie Policy</h2>
            <p className="text-body">We may update this Cookie Policy when the website, cookie setup, technology providers, analytics tools, CRM tools, or legal requirements change.</p>
            <p className="text-body">The latest version will always be published on this page.</p>
            <p className="text-body">The date at the top of the page shows when this policy was last updated.</p>

            <h2 className="text-h2 mt-16 mb-6  text-ink">18. Contact</h2>
            <p className="text-body">For questions about this Cookie Policy, contact:</p>
            <p className="text-body">
              <strong>Aroneu GmbH</strong>
            </p>
            <p className="text-body">For more information about how we process personal data, please see our Privacy Policy.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>10. Third-party tools and embedded content</h2>
        <p>Some website features may be provided by third-party tools.</p>
        <p>This may include:</p>
        <ul className="list-disc">
          <li>scheduling tools,</li>
          <li>CRM forms,</li>
          <li>newsletter tools,</li>
          <li>analytics tools,</li>
          <li>video embeds,</li>
          <li>security tools,</li>
          <li>resource-download tools.</li>
        </ul>
        <p>
          When these tools are active, they may process technical data such as
          IP address, device information, browser data, usage data, or
          submitted form data.
        </p>
        <p>
          Where optional third-party tools require consent, they must not be
          activated before the relevant consent has been given.
        </p>
        <p>
          More information about service providers and international processing
          is available in our <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </section>

      <section>
        <h2>11. Scheduler and booking tools</h2>
        <p>
          If Aroneu uses an embedded scheduling tool, the tool may set cookies
          or use similar technologies to load the calendar interface, manage
          availability, and process booking information.
        </p>
        <p>
          <strong>Scheduler provider:</strong> Cal.com
        </p>
        <p>
          If the scheduler is embedded directly on the website and uses optional
          cookies or third-party scripts, it may require consent before
          loading.
        </p>
        <p>
          If the scheduler opens as an external link, the provider&apos;s own
          cookie and privacy rules may apply on its website.
        </p>
      </section>

      <section>
        <h2>12. Newsletter and CRM tracking</h2>
        <p>
          If Aroneu uses newsletter or CRM tools, those tools may use cookies,
          pixels, or similar technologies to understand engagement with Aroneu
          communication.
        </p>
        <p>This may include:</p>
        <ul className="list-disc">
          <li>whether an email was opened,</li>
          <li>whether a link was clicked,</li>
          <li>whether a website visit followed a campaign link,</li>
          <li>whether a resource or form was used.</li>
        </ul>
        <p>
          Where these technologies are optional or used for marketing, they
          require consent where required by law.
        </p>
        <p>
          Newsletter, CRM, and email providers may include HubSpot and
          Postmark, depending on the specific communication flow.
        </p>
      </section>

      <section>
        <h2>13. Security technologies</h2>
        <p>
          We may use security technologies to protect forms and the website from
          misuse, spam, automated requests, or malicious activity.
        </p>
        <p>
          These tools may process technical signals such as IP address, browser
          information, device data, interaction patterns, or security tokens.
        </p>
        <p>
          <strong>Security provider:</strong> Cloudflare
        </p>
        <p>
          Where the security technology is necessary to protect the website and
          forms, it may be used without consent on the basis of legitimate
          interest and technical necessity.
        </p>
      </section>

      <section>
        <h2>14. How to change your cookie choices</h2>
        <p>
          You can change or withdraw your cookie preferences at any time
          through the cookie settings option on the website, where available.
        </p>
        <p>
          You can also change cookie settings in your browser. Most browsers
          allow you to block, delete, or restrict cookies.
        </p>
        <p>Browser-level restrictions may affect how some website features work.</p>
      </section>

      <section>
        <h2>15. Browser controls</h2>
        <p>You can manage cookies through your browser settings.</p>
        <p>Depending on your browser, you may be able to:</p>
        <ul className="list-disc">
          <li>delete cookies,</li>
          <li>block cookies,</li>
          <li>allow cookies only for selected websites,</li>
          <li>clear local storage,</li>
          <li>restrict third-party cookies,</li>
          <li>receive warnings before cookies are stored.</li>
        </ul>
        <p>For details, check your browser&apos;s help section.</p>
      </section>

      <section>
        <h2>16. Consent records</h2>
        <p>
          Where required, our consent-management tool may store a record of your
          consent choices.
        </p>
        <p>This may include:</p>
        <ul className="list-disc">
          <li>consent status,</li>
          <li>consent date and time,</li>
          <li>selected categories,</li>
          <li>technical consent identifier,</li>
          <li>version of the consent notice.</li>
        </ul>
        <p>
          This helps us respect your choices and demonstrate that optional
          technologies were used only where consent was given.
        </p>
      </section>

      <section>
        <h2>17. Changes to this Cookie Policy</h2>
        <p>
          We may update this Cookie Policy when the website, cookie setup,
          technology providers, analytics tools, CRM tools, or legal
          requirements change.
        </p>
        <p>The latest version will always be published on this page.</p>
        <p>The date at the top of the page shows when this policy was last updated.</p>
      </section>

      <section>
        <h2>18. Contact</h2>
        <p>For questions about this Cookie Policy, contact:</p>
        <p>
          <strong>Aroneu</strong>
          <br />
          Email: sales@aroneu.de
          <br />
          Phone: 919959746887
        </p>
        <p>
          For more information about how we process personal data, please see
          our <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </section>
    </LegalShell>
  );
}
