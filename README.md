# Ayodeji Portfolio

Next.js 16 / React 19 portfolio with a warm paper theme, interactive project walkthroughs, and a draggable canvas sculpture. Typography uses Manrope and Unbounded through `next/font`.

## Development

```sh
npm ci
npm run dev
```

The development site runs at http://localhost:3000. Content and case studies live in `src/data/content.ts`; homepage walkthroughs and the sculpture live in `src/components/engine/`.

## Styles

`src/app/globals.css` is the stylesheet entrypoint. Keep the import order intact:

- `src/styles/base.css`: theme tokens, typography, primitives, and shared branding.
- `src/styles/home.css`: navigation, homepage, assessment walkthrough, and their responsive rules.
- `src/styles/pages.css`: work index, case studies, About, Skills, Contact, and responsive rules.

Edit the owning rule rather than appending another override to the entrypoint. Keep a component's responsive behavior in its stylesheet.

## Verification

```sh
npm run lint
npm run build
npx playwright install chromium
npm run test:e2e
```

The browser suite starts the production build on port 3100. It checks desktop, tablet, and narrow-phone layouts, project-column alignment, navigation and filters, case-study links, and sculpture dragging/keyboard controls with reduced motion enabled. Build first after source changes. Avoid running `next build` while serving that same build directory.

Failures retain Playwright traces under `test-results/`. GitHub Actions runs lint, build, and browser checks on pull requests and pushes to `main`, and uploads failure artifacts. Test output is ignored by Git.

## Deployment

The repository is connected to Vercel. Changes pushed to `main` follow the configured production deployment workflow.
