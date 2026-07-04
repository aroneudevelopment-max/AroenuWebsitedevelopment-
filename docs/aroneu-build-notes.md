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