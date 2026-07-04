# Aroneu Component System

This document provides a registry of the components created for the Aroneu frontend.

## Intended Use
These components serve as the foundational UI primitives, form elements, states, and section shells. They accept props according to real CMS and design system requirements.

## Props/Contracts
Contracts are defined in `src/lib/component-contracts/index.ts`.
Components rely on strict TypeScript prop interfaces to ensure content structure is preserved.

## Accessibility Notes
- Semantic HTML tags are used (e.g., `<button>`, `<section>`).
- Forms include labels and are structured to accept `aria-describedby`.

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
