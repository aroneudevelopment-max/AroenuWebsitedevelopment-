# Aroneu Build Notes

STEP 3 TYPOGRAPHY/TOKEN STATUS

Fonts:
- Maven Pro: Missing from public/fonts/
- Newsreader italic: Missing from public/fonts/
- Monospace: UI fallback applied
- Temporary fallback used: system-ui, Georgia
- Launch dependency: FONT DEPENDENCY — NOT FINAL. Maven Pro variable and Newsreader italic files must be provided before launch.

Token files:
- styles/tokens.css: Created with all Aroneu colour, typography, spacing, radius, and motion tokens.
- tailwind config: Mapped via Tailwind v4 @theme in globals.css.
- globals.css: Imports tokens, sets base layout, text rendering, focus visibility, selection colours, and reduced motion.

Rules enforced:
- no orange small text: Verified. Orange restricted to highlight/spark token.
- body measure: Enforced max-width 66ch on body copy via token --measure-body.

STEP 4 COMPONENT STATUS
- Built 61 structural shell components mapped across `components/ui`, `components/forms`, `components/states`, and `components/sections`.
- Created unified interface contracts for CMS data feeding at `lib/component-contracts/index.ts`.
- Enforced component-level accessibility including semantic tags, avoid fake divs for buttons, and prepared structure for aria states.
- Re-read all 8 required source documents and preserved token rules without injecting final copy.

STEP 5 GLOBAL SHELL STATUS
- Built global layout shell: `app/layout.tsx`, `components/layout/SiteShell.tsx`, Header, Footer, MobileNav, SkipLink.
- Implemented accessible cookie consent shell with no premature analytics loading.
- Verified route and navigation registries in `lib/routes.ts` and `lib/navigation.ts`.
- Scaffolded route shells (`page.tsx`) for all 18 required paths (marketing and legal routes).
- Intentionally not built: final page sections, real media, backend logic, analytics scripts.

STEP 3A BRAND LOGO STATUS
- Approved brand logo SVGs and icon PNGs integrated securely into /public/brand.
- Favicon and touch icons wired safely to Next.js layout metadata and /public.
- Scalable AroneuLogo component implemented and injected into Header and Footer avoiding placeholder logos.


STEP 6 CONTENT ARCHITECTURE STATUS
- Content model created in lib/content/types.ts.
- Page registries initialized for all required routes.
- Centralized global copy implemented for site strings, forms, and states.
- Copy placement map and CMS field map documented in docs/.
STEP 7 HOMEPAGE STATUS
- Extracted homepage content into lib/content/pages/home.ts
- Replaced app/page.tsx with mapped section components
- Integrated 5 visual assets from Step 7 brief into public/images/aroneu/
- Successfully executed build and typecheck with static routing
- Ensured no fake client names or unauthorized proof points.

## Step 8 Build Notes
- Replaced app/capability-teams/page.tsx with app/(marketing)/capability-teams/page.tsx to resolve routing conflicts.
- Explicitly cast \data.items as any[]\ in RetentionProof.tsx to fix TypeScript strictly-typed warnings.
- Developed lightweight CSS/SVG diagram components for Governance and Optionality visuals as required.
- Typechecked and built successfully.

## Step 9 Build Notes
- Extracted AI Workspace copy from `copy of aeroneu (1) (3).pdf` to `src/lib/content/pages/ai-workspace.ts`.
- Extended `SectionContent` type in `src/lib/content/types.ts` to include `image?: string;` and `labels?: string[];` for stronger typing without `any` casts.
- Built reusable components for AI Workspace: `WorkspaceVisibilityPanel`, `GovernanceControlsPanel`, `AIInsightPanel`, `DataResponsibilityDiagram`, and `WorkspacePreviewLabels`.
- Integrated 4 visual assets from Step 9 brief into `public/images/aroneu/`.
- Successfully executed build and typecheck with static routing.
- Step 10: Implemented the /how-it-works page. Extended SectionContent types to support custom steps, features, and outcome properties for Discover/Build/Run sections. Addressed TS type errors. Build passed.
- Step 11: Implemented the /about page. Created custom components for Hero, Story, Name Meaning, Values, Society, Leadership, and Locations. Ensured motion and spacing requirements are met. Build passed.

## Step 12: Contact Page Build
- Completed exact copy alignment and schema verification from Step 12.pdf.
- Created ContactHero, ContactWhatToInclude, ContactReassurance, ContactForm, ContactScheduler, ContactOffice components.
- Form is fully functional with native state handling (validation, mock loading, success, failure state), no backend wired since none provided, adhering strictly to constraints.
