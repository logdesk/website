# Logdesk Website

Marketing site and docs for [Logdesk](https://logdesk.dev), built with Next.js and Nextra.

## Getting started

```bash
bun install
bun run dev
```

Or with npm:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

- `dev` — start the local dev server
- `build` — production build
- `start` — run the production build (run `build` first)

## Structure

- `app/page.jsx` — marketing landing page
- `app/pricing`, `app/privacy` — static pages
- `app/docs` — docs layout and routing (Nextra)
- `content/` — docs pages (`.mdx`), rendered at `/docs`
- `app/components/` — illustrations used on the landing page
