# Ayodeji — Portfolio

Personal portfolio website built with Next.js 16, React 19, and Tailwind CSS 4.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Fonts:** DM Sans (body) + Instrument Serif (headings) via `next/font`
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/              # Pages (App Router)
│   ├── about/
│   ├── work/
│   ├── skills/
│   ├── writing/
│   └── contact/
├── components/       # Shared components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── PageHeader.tsx
│   └── ScrollReveal.tsx
└── data/
    └── content.ts    # All hardcoded content
```

## Deployment

Push to GitHub and connect to [Vercel](https://vercel.com). Zero config needed.

## Customization

All content lives in `src/data/content.ts` — update your info there.
