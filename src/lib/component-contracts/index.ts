export type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "dark";
};

export type SectionBase = {
  eyebrow?: string;
  heading: string;
  subcopy?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
};

export type MetricItem = {
  value: string;
  label: string;
  note?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type CardItem = {
  eyebrow?: string;
  title: string;
  body: string;
  href?: string;
  ctaLabel?: string;
};
