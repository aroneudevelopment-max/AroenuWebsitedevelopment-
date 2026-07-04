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