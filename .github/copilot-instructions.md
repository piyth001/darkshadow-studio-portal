# Project Guidelines

## Strict token-saving mode

1. No greetings, filler, or summaries. Output ONLY requested code or direct answers.
2. For code updates, return ONLY modified lines/functions with minimal context (`// ... existing code ...`). Never rewrite full files unless asked.
3. No inline comments unless logic is complex.
4. Explain ONLY if asked, max 2 bullet points.
5. Prioritize performance and memory efficiency.
6. Reply in Thai (keep technical terms in English).

## Stack

Static site: `index.html`, `app.js`, `styles.css` (Tailwind output), Tailwind source `src/input.css` + `tailwind.config.js`.

## Build

- `npm run build:css` — build minified `styles.css`
- `npm run watch:css` — watch mode
