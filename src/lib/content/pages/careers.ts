import { CareerRole } from '../careers';

export const careersIndexContent = {
  seo: {
    metaTitle: "Careers — serious work, taken seriously | Aroneu",
    metaDescription: "Join Aroneu and work on senior India capability teams connected to serious European business outcomes.",
    ogTitle: "Serious work, taken seriously.",
    ogDescription: "Aroneu careers are for senior India talent who want visible work, trusted ownership, and European operating standards."
  },
  hero: {
    eyebrow: "Careers",
    h1: "Serious work, with people who take it — and you — seriously.",
    subcopy: "At Aroneu, senior India talent is not invisible support. You work as part of trusted global capability, connected to serious European business outcomes.",
    primaryCta: { label: "View open roles", href: "#open-roles" },
    secondaryCta: { label: "Learn about Aroneu", href: "/about" }
  },
  answerBlock: "Aroneu careers are for senior India talent who want meaningful work, European standards, long-term growth, visible ownership, and a serious engineering culture.",
  whyAroneu: {
    label: "Why join",
    heading: "Work that is visible, trusted, and connected.",
    body: "Aroneu is built for people who want their work to matter inside the business it supports. The model gives teams structure, standards, context, and visibility.",
    cards: [
      {
        title: "Meaningful work",
        body: "Work on capability that supports serious business outcomes, not disconnected tasks."
      },
      {
        title: "European standards",
        body: "Operate with clear expectations, documentation, rhythm, and quality."
      },
      {
        title: "Senior ownership",
        body: "Bring judgement, not only execution."
      },
      {
        title: "Visible contribution",
        body: "Your work, decisions, and progress should be easier to see and trust."
      },
      {
        title: "Long-term growth",
        body: "Build capability that compounds through stability, context, and ownership."
      },
      {
        title: "Serious culture",
        body: "Calm work, clear standards, and respect for people who take ownership."
      }
    ]
  },
  lifeAndValues: {
    label: "How we work",
    heading: "One standard, across both places.",
    body: "Aroneu connects India capability with European governance. That means clear communication, respect for context, documentation discipline, and accountability in the way work is done.",
    values: [
      {
        title: "Clarity",
        body: "Say what matters. Make work understandable."
      },
      {
        title: "Ownership",
        body: "Take responsibility for the work, the context, and the handover."
      },
      {
        title: "Continuity",
        body: "Build knowledge that stays useful beyond one person or one sprint."
      },
      {
        title: "Respect",
        body: "Work with seriousness, humility, and trust across cultures."
      }
    ]
  },
  openRoles: {
    label: "Open roles",
    heading: "Current opportunities",
    body: "Open roles will appear here when they are approved for hiring."
  },
  emptyRolesState: {
    heading: "No open roles right now.",
    body: "We are not listing open roles at the moment. You can still learn how Aroneu works and check back for approved opportunities.",
    cta: { label: "Learn about Aroneu", href: "/about" }
  },
  applicationFlow: {
    label: "Application process",
    heading: "A clear process for serious candidates.",
    steps: [
      {
        title: "Apply",
        body: "Share your details, CV, and the kind of work you want to own."
      },
      {
        title: "Review",
        body: "Aroneu reviews fit against role needs, standards, and capability areas."
      },
      {
        title: "Conversation",
        body: "If there is alignment, the next step is a focused conversation about experience, ownership, and working style."
      }
    ]
  },
  closingCta: {
    heading: "Build work you can stand behind.",
    body: "If you want serious work, clear standards, and visible ownership, Aroneu is the kind of company to watch.",
    primaryCta: { label: "View open roles", href: "#open-roles" },
    secondaryCta: { label: "About Aroneu", href: "/about" }
  }
};

export const careerRoleTemplateContent = {
  seo: {
    metaTitle: "[Role title] | Careers at Aroneu",
    metaDescription: "Apply for [role title] at Aroneu and work on senior India capability connected to European business outcomes.",
    ogTitle: "[Role title] at Aroneu",
    ogDescription: "A serious role for senior talent who wants visible work, clear standards, and ownership."
  },
  hero: {
    eyebrow: "Careers",
    h1: "[Approved role title]",
    subcopy: "Join an Aroneu capability team working with clear standards, visible ownership, and serious European business context.",
    primaryCta: { label: "Apply", href: "#apply" },
    secondaryCta: { label: "View all roles", href: "/careers" }
  },
  whatYouWillWorkOn: {
    heading: "What you will work on"
  },
  whatWeExpect: {
    heading: "What we expect"
  },
  howTheTeamOperates: {
    heading: "How the team operates",
    body: "Aroneu teams work through shared rhythm, documentation, visible ownership, and governance routines. The exact setup depends on the client, capability area, and role."
  },
  applicationFlow: {
    heading: "How to apply",
    body: "Share your details and CV. If the role is aligned with your experience, Aroneu will review the application and follow up through the approved hiring process.",
    cta: { label: "Apply", href: "#apply" }
  }
};

export const careerApplicationFormContent = {
  fields: {
    fullName: {
      label: "Full name",
      placeholder: "Your full name",
      helper: ""
    },
    email: {
      label: "Email",
      placeholder: "you@email.com",
      helper: ""
    },
    phone: {
      label: "Phone",
      placeholder: "Optional",
      helper: "Include your number if you prefer phone contact."
    },
    linkedIn: {
      label: "LinkedIn",
      placeholder: "LinkedIn URL",
      helper: "Required for senior roles."
    },
    portfolio: {
      label: "Portfolio",
      placeholder: "GitHub or portfolio URL",
      helper: "Include if relevant to the capability area."
    },
    location: {
      label: "Location",
      placeholder: "City, country",
      helper: "Tell us where you are based."
    },
    cv: {
      label: "CV upload",
      placeholder: "Upload CV",
      helper: "PDF format. Max 5MB."
    },
    message: {
      label: "Cover letter/Note",
      placeholder: "Why this role?",
      helper: "Optional note on what you want to own."
    }
  },
  consentText: "I acknowledge that Aroneu may process my application details to assess my suitability for this role. Your details will be used to review your application. See our Privacy Policy.",
  submitButton: "Apply",
  successState: "Thank you. Your application has been received.",
  failureState: "Something went wrong. Please try again."
};

export const careerFaq = {
  faq: [
    {
      question: "Who should apply to Aroneu?",
      answer: "Aroneu is for senior India talent who wants meaningful work, visible ownership, European standards, and a serious operating culture."
    },
    {
      question: "Is Aroneu a staffing marketplace?",
      answer: "No. Aroneu builds governed capability teams. The work is designed to be connected, visible, and accountable inside serious business environments."
    },
    {
      question: "What kind of roles does Aroneu hire for?",
      answer: "Roles depend on approved client and company needs. Aroneu may hire across engineering, cloud, quality, support, product, delivery, and AI-related capability areas."
    },
    {
      question: "Can I apply if no roles are open?",
      answer: "If no roles are listed, check back for approved opportunities. Aroneu should only accept applications through the public flow when the hiring process and privacy wording are confirmed."
    },
    {
      question: "What does Aroneu value in candidates?",
      answer: "Aroneu values judgement, communication, ownership, technical depth, documentation discipline, and the ability to work inside a governed operating rhythm."
    }
  ]
};

export const careerSafetyNotes = [
  "No fake roles, salaries, benefits, visa claims, or working hours should be published.",
  "CV upload and processing requires backend verification and privacy approval.",
  "Application endpoints should fail gracefully until production routing exists."
];
