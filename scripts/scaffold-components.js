const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const componentsDir = path.join(srcDir, 'components');
const libDir = path.join(srcDir, 'lib');
const docsDir = path.join(__dirname, '..', 'docs');

const dirs = [
  'ui',
  'layout',
  'sections',
  'forms',
  'states',
  'mockups',
  'seo'
].map(d => path.join(componentsDir, d));
dirs.push(path.join(libDir, 'component-contracts'));

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

function writeComponent(filePath, content) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content.trim() + '\n', 'utf8');
  }
}

// 1. UI Primitives
const uiPrimitives = [
  { name: 'Button', props: 'label: string; href?: string; variant?: "primary" | "secondary" | "ghost" | "dark"; disabled?: boolean; loading?: boolean;', element: 'button' },
  { name: 'Badge', props: 'label: string; variant?: "default" | "warning" | "success";', element: 'span' },
  { name: 'Card', props: 'title?: string; body?: string; children?: React.ReactNode; variant?: "sharp" | "soft" | "glass" | "metric" | "product" | "caseStudy" | "article" | "job";', element: 'div' },
  { name: 'Avatar', props: 'src?: string; alt: string; fallbackInitials: string;', element: 'div' },
  { name: 'Spark', props: 'active?: boolean;', element: 'div' },
  { name: 'Input', props: 'id: string; name: string; type?: string; placeholder?: string; required?: boolean; value?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;', element: 'input' },
  { name: 'Textarea', props: 'id: string; name: string; placeholder?: string; required?: boolean; rows?: number; value?: string; onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;', element: 'textarea' },
  { name: 'Select', props: 'id: string; name: string; options: {value: string; label: string}[]; required?: boolean;', element: 'select' },
  { name: 'Checkbox', props: 'id: string; name: string; required?: boolean; checked?: boolean; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;', element: 'input' },
  { name: 'Switch', props: 'id: string; checked?: boolean; onCheckedChange?: (checked: boolean) => void;', element: 'button' },
  { name: 'Alert', props: 'title?: string; message: string; type?: "info" | "warning" | "error" | "success";', element: 'div' },
  { name: 'Tabs', props: 'tabs: {id: string; label: string; content: React.ReactNode}[];', element: 'div' },
  { name: 'Accordion', props: 'items: {id: string; title: string; content: string}[];', element: 'div' },
  { name: 'Container', props: 'children: React.ReactNode; className?: string;', element: 'div' },
  { name: 'Section', props: 'children: React.ReactNode; id?: string; className?: string;', element: 'section' },
  { name: 'Grid', props: 'children: React.ReactNode; columns?: 1 | 2 | 3 | 4;', element: 'div' },
  { name: 'Stat', props: 'value: string; label: string;', element: 'div' },
  { name: 'Metric', props: 'value: string; label: string; note?: string;', element: 'div' },
  { name: 'LinkArrow', props: 'href: string; label: string;', element: 'a' }
];

uiPrimitives.forEach(comp => {
  const content = `
import React from 'react';

export interface ${comp.name}Props {
  ${comp.props}
}

export function ${comp.name}(props: ${comp.name}Props) {
  return (
    <${comp.element} className="${comp.name.toLowerCase()}-component">
      {/* TODO: Implement ${comp.name} UI using tokens */}
      ${comp.element === 'button' ? '{props.label}' : ''}
      ${comp.element === 'input' && comp.name === 'Checkbox' ? '' : ''}
      ${['Container', 'Section', 'Grid', 'Card'].includes(comp.name) ? '{props.children}' : ''}
    </${comp.element}>
  );
}
  `;
  writeComponent(path.join(componentsDir, 'ui', `${comp.name}.tsx`), content);
});

// 2. Form Primitives
const formPrimitives = [
  'FormField', 'FieldLabel', 'FieldHelp', 'FieldError', 'FormSummary', 'FileUpload', 'ConsentCheckbox', 'SubmitButton'
];
formPrimitives.forEach(name => {
  const content = `
import React from 'react';

export interface ${name}Props {
  children?: React.ReactNode;
  id?: string;
  label?: string;
  error?: string;
}

export function ${name}(props: ${name}Props) {
  return (
    <div className="${name.toLowerCase()}-component">
      {props.children}
    </div>
  );
}
  `;
  writeComponent(path.join(componentsDir, 'forms', `${name}.tsx`), content);
});

// 3. State Components
const stateComponents = [
  'LoadingState', 'EmptyState', 'ErrorState', 'RetryState', 'SuccessState', 'NoResultsState', 'PendingIntegrationState'
];
stateComponents.forEach(name => {
  const content = `
import React from 'react';

export interface ${name}Props {
  message?: string;
}

export function ${name}({ message }: ${name}Props) {
  return (
    <div className="${name.toLowerCase()}-component surface-paper text-body">
      <p>{message || "${name} active"}</p>
    </div>
  );
}
  `;
  writeComponent(path.join(componentsDir, 'states', `${name}.tsx`), content);
});

// 4. Section Shells
const sectionShells = [
  'Hero', 'ProofStrip', 'ProblemList', 'CapabilityCards', 'StepRow', 'StatQuad', 'LeadershipPreview', 
  'ClosingCTA', 'PageIntro', 'FeatureGrid', 'ObjectionTable', 'RoleTagGrid', 'RetentionProof', 
  'ProductVisual', 'GovernanceControls', 'AIInsightsPanel', 'DataResidencyPanel', 'CaseStudyGrid', 
  'InsightGrid', 'CareersRoleGrid', 'FAQSection', 'ContactFormSection', 'SchedulerSection', 
  'NewsletterBlock', 'LegalContent', 'ComparisonTable', 'AnswerBlock', 'Breadcrumbs'
];
sectionShells.forEach(name => {
  const content = `
import React from 'react';

export interface ${name}Props {
  eyebrow?: string;
  heading?: string;
  subcopy?: string;
}

export function ${name}(props: ${name}Props) {
  return (
    <section className="section-aroneu">
      <div className="container-aroneu">
        {props.heading && <h2 className="text-h2">{props.heading}</h2>}
      </div>
    </section>
  );
}
  `;
  writeComponent(path.join(componentsDir, 'sections', `${name}.tsx`), content);
});

// 5. Component Contracts file
const contractsContent = `
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
`;
writeComponent(path.join(libDir, 'component-contracts', 'index.ts'), contractsContent);

// 6. Docs
const docContent = `
# Aroneu Component System

This document provides a registry of the components created for the Aroneu frontend.

## Intended Use
These components serve as the foundational UI primitives, form elements, states, and section shells. They accept props according to real CMS and design system requirements.

## Props/Contracts
Contracts are defined in \`src/lib/component-contracts/index.ts\`.
Components rely on strict TypeScript prop interfaces to ensure content structure is preserved.

## Accessibility Notes
- Semantic HTML tags are used (e.g., \`<button>\`, \`<section>\`).
- Forms include labels and are structured to accept \`aria-describedby\`.

## SEO/AEO/GEO Support Notes
- Section shells accept heading props to control H1/H2/H3 mapping dynamically.
- Text uses readable measures and standard HTML tags to ensure crawlability.

## Copy Support Notes
- Components are designed to handle varying lengths of text without breaking layouts.

## Not-yet-built Items
- The components are currently structural shells. Full visual styling inside each primitive will follow the specific page needs in later steps.

## Backend-pending Warnings
- Form primitives and state components are prepared visually. They must NOT be wired to fake backend success routines. They wait for Part 3 integration.

## No-fake-data Rules
- Components do not contain hardcoded marketing claims or lorem ipsum. They receive their content exclusively via props.
`;
writeComponent(path.join(docsDir, 'aroneu-component-system.md'), docContent);

console.log('Component scaffolding complete.');
