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
- `src/styles/motion.css`: the motion system (split headings, entrances, scroll reveals, page transitions, scroll-linked motion and the pause control). Component-specific motion stays beside the component's rules in `home.css` and `pages.css`.

Motion only runs under `html[data-motion="on"]`, set before the first paint by the script in `src/components/motion/script.ts`. Mark content with `data-enter` (on screen when a page opens) or `data-reveal` (further down) rather than hiding it in CSS, so it stays visible without JavaScript, with reduced motion and when motion is paused. `DESIGN.md` describes the motion language.

Edit the owning rule rather than appending another override to the entrypoint. Keep a component's responsive behavior in its stylesheet.

## Verification

```sh
npm run lint
npm run build
npx playwright install chromium
npm run test:e2e
```

The browser suite starts the production build on port 3100. It checks desktop, tablet, and narrow-phone layouts, project-column alignment, navigation and filters, case-study links, and sculpture dragging/keyboard controls with reduced motion enabled. `tests/motion.spec.ts` turns motion on to check that scrolled content is never left hidden, that a project card's logo travels into its case study and that the pause control persists, and checks the reduced-motion and no-JavaScript states. `tests/accessibility.spec.ts` runs axe (WCAG 2.2 A and AA, plus best practices) on every route, the open menu and a graded result. `tests/performance.spec.ts` holds key routes to the "good" lab thresholds for Largest Contentful Paint (2.5 s) and Cumulative Layout Shift (0.1) with motion on. `tests/grader.spec.ts` covers the grading demo against a mocked API, so no test calls the model. Build first after source changes. Avoid running `next build` while serving that same build directory.

Failures retain Playwright traces under `test-results/`. GitHub Actions runs lint, build, and browser checks on pull requests and pushes to `main`, and uploads failure artifacts. Test output is ignored by Git.

## Live grading demo

The Skilladder case study includes a live grading demo. `src/app/api/grade/route.ts` sends the visitor's answer to Claude through the Anthropic SDK with the question and rubric in `src/data/grader.ts`, and returns per-criterion scores, the quote behind each score, a confidence level and a review flag. Nothing is stored.

The section only appears when `ANTHROPIC_API_KEY` is set. Locally, put it in `.env.local` (Git ignores `.env*` files). On Vercel, add it under Project Settings → Environment Variables and redeploy. Set a monthly spend limit on the Anthropic workspace that owns the key: the route's per-visitor rate limit is held in memory, so it is best effort and resets when an instance restarts. The model is set in `MODEL` at the top of the route.

## Deployment

The repository is connected to Vercel. Changes pushed to `main` follow the configured production deployment workflow.
