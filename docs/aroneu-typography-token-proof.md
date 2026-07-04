# Aroneu Typography and Token Proof

This document provides proof of the implemented design system foundation as requested in Step 3.

## Font status
- **Maven Pro local file found:** no
- **Newsreader italic local file found:** no
- **Font loading method:** Fallback system-ui / Georgia CSS stack
- **Temporary fallback used:** system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif / Georgia, Cambria, "Times New Roman", Times, serif
- **Launch dependency documented:** yes (FONT DEPENDENCY — NOT FINAL noted in build notes)

## Token list
Verified in `src/styles/tokens.css`.
- Core colours: ink, paper, sand, slate, orange, navy, plum, gradient-signature.
- Type scale: display, h1, h2, h3, body, caption, label.
- Spacing: 4px to 120px scale.
- Radius: brand, ui, product, pill.
- Shadow: soft.
- Motion: standard, enter, exit, emphasis, ease.
- Container: max width and padding, reading measure.

## Tailwind mapping summary
Tailwind v4 is configured inline inside `src/app/globals.css` under the `@theme` block. 
All design tokens have been explicitly mapped to Tailwind variables.

## Typography class mapping
CSS utilities have been created globally to enforce exact typography rules:
- `.text-display`
- `.text-h1`
- `.text-h2`
- `.text-h3`
- `.text-body`
- `.text-caption`
- `.text-label`
- `.text-measure`
- `.text-reading-measure`
- `.text-accent-word`
- `.text-metric`

Layout foundation classes were also built:
- `.container-aroneu`
- `.section-aroneu`
- `.grid-aroneu`
- `.surface-paper`
- `.surface-sand`
- `.surface-ink`
- `.surface-product`

## Screenshots required after run
No local style-guide route was created to avoid public exposure. Instead, the CSS build success and token imports are verifiable through the build output and this documentation.

## Known dependencies
1. **Maven Pro font files:** Required for production UI launch.
2. **Newsreader italic font file:** Required for production UI launch.
