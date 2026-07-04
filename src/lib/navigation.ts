import { routes } from './routes';

export const primaryNavigation = [
  { label: "Capability Teams", href: routes.capabilityTeams },
  { label: "AI Workspace", href: routes.aiWorkspace },
  { label: "How it works", href: routes.howItWorks },
  { label: "About", href: routes.about },
  { label: "Insights", href: routes.insights },
];

export const footerNavigation = {
  company: [
    { label: "About", href: routes.about },
    { label: "Careers", href: routes.careers },
    { label: "Contact", href: routes.contact },
  ],
  capability: [
    { label: "Capability Teams", href: routes.capabilityTeams },
    { label: "AI Workspace", href: routes.aiWorkspace },
    { label: "How it works", href: routes.howItWorks },
  ],
  knowledge: [
    { label: "Insights", href: routes.insights },
    { label: "Case Studies", href: routes.caseStudies },
    { label: "Resources", href: routes.resources },
  ],
  legal: [
    { label: "Privacy Policy", href: routes.privacy },
    { label: "Imprint", href: routes.imprint },
    { label: "Terms of Service", href: routes.terms },
    { label: "Cookie Policy", href: routes.cookiePolicy },
  ]
};
