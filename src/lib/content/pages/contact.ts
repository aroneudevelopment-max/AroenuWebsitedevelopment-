import { PageContent } from "../types";

export const contactPage: PageContent = {
  route: "/contact",
  slug: "contact",
  pageJob:
    "Convert serious buyers into qualified conversations without pressure, hype, or a generic sales feel.",
  seo: {
    metaTitle: "Book a call | Aroneu",
    metaDescription:
      "Talk to Aroneu about the India capability team you need, the governance risks you want to control, and the visibility your leaders need.",
    ogTitle: "Let's talk about the team you need.",
    ogDescription:
      "Share what you are trying to build. Aroneu will respond within one business day.",
  },
  sections: [
    {
      id: "hero",
      type: "contact-hero",
      component: "ContactHero",
      eyebrow: "Contact Aroneu",
      heading: "Let's talk about the team you need.",
      subcopy:
        "Tell us what you are trying to build, where capability is constrained, and what level of governance your leaders need.",
      ctas: [
        { label: "Book a call", href: "#scheduler" },
        { label: "Submit enquiry", href: "#contact-form", variant: "secondary" },
      ],
      image: "/images/aroneu/contact-hero-concept.jpeg",
      imageAlt:
        "Abstract contact-page visual showing connected interface panels and devices across a clean white workspace.",
      visualSlot: {
        id: "hero-visual",
        purpose: "support-trust-or-action",
        recommendedAssetType: "photo",
        placementNote:
          "restrained hero/support visual, do not put behind live body copy",
        required: false,
        doNotUse: ["decorative wallpaper", "heavy animation"],
      },
    },
    {
      id: "answer-block",
      type: "contact-answer-block",
      component: "ContactAnswerBlock",
      body:
        "Use this page to speak with Aroneu about Capability Teams, the AI Workspace, a smaller pilot, or a governance problem inside an existing distributed team model.",
    },
    {
      id: "what-to-include",
      type: "contact-what-to-include",
      component: "ContactWhatToInclude",
      label: "What helps",
      heading: "A useful first note is enough.",
      body:
        "You do not need a complete brief. A few clear details help us understand whether Aroneu is the right fit.",
      items: [
        "The capability you need.",
        "The work or function the team would support.",
        "The governance risks you want to reduce.",
        "The timeline or decision stage, if known.",
        "Who should be involved in the next conversation.",
      ],
      visualSlot: {
        id: "what-to-include-support",
        purpose: "support-trust-or-action",
        recommendedAssetType: "photo",
        placementNote:
          "small trust/support image if it feels serious and human.",
        required: false,
      },
    },
    {
      id: "reassurance",
      type: "contact-reassurance",
      component: "ContactReassurance",
      label: "How we handle it",
      heading: "Low pressure. Clear next step.",
      body:
        "We will review your note and come back within one business day. There is no obligation. Your details are handled according to our privacy policy and used to respond to this enquiry.",
    },
    {
      id: "contact-form",
      type: "contact-form",
      component: "ContactForm",
      heading: "Tell us what you are trying to build.",
      subcopy: "Share a little about the team, capability, or governance challenge you want to discuss. We will review your note and come back within one business day.",
      features: [
        {
          name: "fullName",
          label: "Full name",
          placeholder: "Your name",
          helperText: "",
          requiredError: "Enter your name.",
        },
        {
          name: "workEmail",
          label: "Work email",
          placeholder: "you@company.com",
          helperText: "Use your work email so we can reply properly.",
          requiredError: "Enter a valid work email.",
          invalidError: "Enter a valid work email.",
          softWarning: "Use your work email so we can reply properly.",
        },
        {
          name: "phone",
          label: "Phone",
          placeholder: "Optional",
          helperText: "Add a callback number if you want us to follow up by phone.",
          required: false,
          requiredError: "",
        },
        {
          name: "company",
          label: "Company",
          placeholder: "Company name",
          helperText: "",
          requiredError: "Enter your company name.",
        },
        {
          name: "role",
          label: "Role",
          placeholder: "Your role",
          helperText: "This helps us understand the right context for the conversation.",
          requiredError: "Enter your role.",
        },
        {
          name: "teamNeed",
          label: "Team need",
          placeholder: "What kind of capability do you need?",
          helperText: "For example: engineering capacity, AI workflow support, delivery governance, support operations, or a dedicated India team.",
          options: [
            "Capability Team",
            "AI Workspace",
            "Founder Pilot",
            "Governance review",
            "General enquiry",
          ],
          requiredError: "Tell us what you want to discuss.",
        },
        {
          name: "message",
          label: "Message",
          placeholder: "Add any useful context.",
          helperText: "Do not include confidential client data, source code, health data, or regulated information in this form.",
          requiredError: "Add a short message.",
        },
      ],
      internalNotes: [
        "Consent label: I acknowledge that Aroneu may process my details to respond to this enquiry.",
        "Consent helper: Your details will be used to review your enquiry and contact you about the next step. See our Privacy Policy.",
        "Missing consent error: Please acknowledge the privacy notice to continue.",
        "Privacy line: By submitting this form, you acknowledge that your data will be processed in accordance with our Privacy Policy.",
        "Submit button: Submit enquiry",
        "Loading state: Sending your enquiry.",
        "Success button: Enquiry received.",
        "Success heading: Enquiry received.",
        "Success body: Thank you. We have received your note and will come back within one business day.",
        "Failure heading: Something went wrong.",
        "Failure body: Your enquiry was not sent. Please check the highlighted fields and try again.",
        "Failure CTA: Try again",
        "Top-of-form error summary: Please check the highlighted fields.",
      ],
    },
    {
      id: "scheduler",
      type: "contact-scheduler",
      component: "ContactScheduler",
      heading: "Prefer to choose a time?",
      body:
        "Book a conversation with Aroneu and tell us what you want to discuss. We will use the call to understand your team need, governance risk, and next best step.",
      primaryCTA: { label: "Book a call", href: "#contact-form" },
      internalNotes: [
        "Privacy note: You will be taken to Cal.com to choose a time. Cal.com's own privacy terms may apply on its website.",
      ],
    },
    {
      id: "office-context",
      type: "contact-office",
      component: "ContactOffice",
      heading: "Built between Europe and India.",
      body:
        "Aroneu works with European companies building senior India capability. Exact office and legal details should match the approved company records.",
    },
    {
      id: "closing-cta",
      type: "contact-closing-cta",
      component: "ContactClosingCTA",
      heading: "Start with the governance question.",
      body:
        "Tell us what your team needs to do, what your leaders need to see, and what you cannot afford to lose control of.",
      primaryCTA: { label: "Book a call", href: "#scheduler" },
      secondaryCTA: { label: "Submit enquiry", href: "#contact-form", variant: "secondary" },
    },
  ],
};
