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
      <section>
        <p>
          This Cookie Policy explains how Aroneu uses cookies and similar
          technologies on this website.
        </p>
        <p>
          It should be read together with our{" "}
          <Link href="/privacy">Privacy Policy</Link>, which explains how we
          process personal data more broadly.
        </p>
      </section>

      <section>
        <h2>1. What cookies are</h2>
        <p>
          Cookies are small text files that may be stored on your device when
          you visit a website.
        </p>
        <p>
          They help websites work, remember choices, protect forms from misuse,
          understand traffic, or support marketing and communication tools.
        </p>
        <p>This policy also covers similar technologies, including:</p>
        <ul className="list-disc">
          <li>local storage,</li>
          <li>session storage,</li>
          <li>pixels,</li>
          <li>tags,</li>
          <li>embedded scripts,</li>
          <li>consent-management tools,</li>
          <li>analytics scripts,</li>
          <li>security and spam-prevention tools.</li>
        </ul>
        <p>
          Some of these technologies are necessary for the website to work.
          Others are optional and are only used where required consent has been
          given.
        </p>
      </section>

      <section>
        <h2>2. How Aroneu uses cookies</h2>
        <p>We use cookies and similar technologies for four main purposes:</p>
        <ol className="list-decimal">
          <li>
            <strong>Strictly necessary technologies</strong>
            <br />
            These help the website work, keep it secure, remember consent
            choices, and protect forms from misuse.
          </li>
          <li>
            <strong>Functional technologies</strong>
            <br />
            These support additional website functions, such as embedded
            scheduling tools or preference-based features.
          </li>
          <li>
            <strong>Analytics technologies</strong>
            <br />
            These help us understand how visitors use the website, which pages
            are useful, and where the site can be improved.
          </li>
          <li>
            <strong>Marketing technologies</strong>
            <br />
            These may help us understand campaign performance, manage business
            communication, or measure engagement with Aroneu content.
          </li>
        </ol>
        <p>
          We only use optional functional, analytics, or marketing technologies
          where the relevant consent has been given, unless a legal exception
          applies.
        </p>
      </section>

      <section>
        <h2>3. Strictly necessary technologies</h2>
        <p>
          Strictly necessary technologies are required for the website to
          function properly.
        </p>
        <p>They may be used to:</p>
        <ul className="list-disc">
          <li>load and secure the website,</li>
          <li>remember privacy preferences,</li>
          <li>prevent spam or automated misuse,</li>
          <li>protect forms,</li>
          <li>maintain basic website functionality,</li>
          <li>keep the website stable and available.</li>
        </ul>
        <p>
          These technologies do not require consent where they are technically
          necessary to provide the website or security function you request.
        </p>
        <p>
          <strong>Legal basis:</strong>
          <br />
          Legitimate interest in operating a secure and reliable website, Art.
          6(1)(f) GDPR.
          <br />
          Where applicable, the technical necessity exception under Section 25
          TDDDG.
        </p>
      </section>

      <section>
        <h2>4. Functional technologies</h2>
        <p>Functional technologies support optional website features.</p>
        <p>They may be used for:</p>
        <ul className="list-disc">
          <li>booking or scheduling tools,</li>
          <li>embedded forms,</li>
          <li>preference-based website functions,</li>
          <li>video or interactive content,</li>
          <li>resource-download flows.</li>
        </ul>
        <p>
          If a functional technology is not strictly necessary, it will only be
          used where required consent has been given.
        </p>
        <p>
          <strong>Legal basis:</strong>
          <br />
          Consent, Art. 6(1)(a) GDPR, where the technology is optional.
          <br />
          Pre-contractual or contractual necessity, Art. 6(1)(b) GDPR, where
          the tool is needed to provide a requested interaction.
          <br />
          Legitimate interest, Art. 6(1)(f) GDPR, where applicable.
        </p>
      </section>

      <section>
        <h2>5. Analytics technologies</h2>
        <p>Analytics technologies help us understand how the website is used.</p>
        <p>They may help us see:</p>
        <ul className="list-disc">
          <li>which pages are visited,</li>
          <li>how visitors move through the site,</li>
          <li>how content performs,</li>
          <li>where technical issues occur,</li>
          <li>which pages may need improvement.</li>
        </ul>
        <p>
          If analytics cookies or similar identifiers are used, they will only
          be activated where required consent has been given.
        </p>
        <p>
          <strong>Analytics provider:</strong> Google Analytics
        </p>
        <p>
          <strong>Legal basis:</strong>
          <br />
          Consent, Art. 6(1)(a) GDPR, where optional analytics cookies or
          identifiers are used.
          <br />
          Legitimate interest, Art. 6(1)(f) GDPR, where analytics are
          privacy-friendly, non-identifying, and permitted without consent.
        </p>
      </section>

      <section>
        <h2>6. Marketing technologies</h2>
        <p>
          Marketing technologies may help Aroneu understand interest in its
          website, resources, newsletter, or business communication.
        </p>
        <p>They may be used to:</p>
        <ul className="list-disc">
          <li>measure campaign performance,</li>
          <li>understand whether website content is useful,</li>
          <li>support CRM or newsletter systems,</li>
          <li>measure engagement with email or resource content,</li>
          <li>connect website enquiries with business follow-up.</li>
        </ul>
        <p>
          Marketing technologies are optional and require consent where they use
          cookies, pixels, or similar identifiers.
        </p>
        <p>
          <strong>Marketing and CRM provider:</strong> HubSpot
        </p>
        <p>
          <strong>Legal basis:</strong>
          <br />
          Consent, Art. 6(1)(a) GDPR, where marketing cookies, pixels, or
          similar technologies are used.
        </p>
      </section>

      <section>
        <h2>7. Consent management</h2>
        <p>
          We use a consent-management tool to record and manage your cookie
          choices.
        </p>
        <p>
          This tool may store your consent status so the website can remember
          whether you accepted, rejected, or customised optional technologies.
        </p>
        <p>
          You can manage cookies through your browser settings and, where
          available, through the website&apos;s cookie settings option.
        </p>
        <p>
          Withdrawing consent does not affect processing that took place before
          consent was withdrawn.
        </p>
      </section>

      <section>
        <h2>8. Cookie categories</h2>
        <p>The website may use the following categories.</p>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Purpose</th>
                <th>Consent required?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Strictly necessary</td>
                <td>Website operation, security, consent storage, form protection</td>
                <td>No, where technically necessary</td>
              </tr>
              <tr>
                <td>Functional</td>
                <td>Optional website features, scheduling, embedded tools, preferences</td>
                <td>Yes, where not strictly necessary</td>
              </tr>
              <tr>
                <td>Analytics</td>
                <td>Traffic measurement, page performance, content improvement</td>
                <td>
                  Yes, unless configured without cookies or persistent
                  identifiers and legally permitted
                </td>
              </tr>
              <tr>
                <td>Marketing</td>
                <td>Campaign measurement, CRM tracking, email engagement, attribution</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>9. Technologies used on this website</h2>
        <p>The website may use or connect to the following services:</p>
        <ul className="list-none">
          <li>Cloudflare - security, performance, and spam-prevention support.</li>
          <li>
            Google Analytics - website analytics, where consent is required and
            given.
          </li>
          <li>HubSpot - CRM, forms, lead management, and marketing communication.</li>
          <li>Cal.com - booking and scheduling.</li>
          <li>Postmark - email delivery and transactional email.</li>
          <li>Sanity - website content management.</li>
        </ul>
        <p>
          Some of these services may use cookies, scripts, pixels, local
          storage, or similar technologies depending on the website feature
          being used. Optional analytics and marketing technologies are only
          used where the relevant consent has been given.
        </p>
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
