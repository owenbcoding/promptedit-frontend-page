# PromptEdit Sales Page

A performant, conversion-focused sales page for [PromptEdit](https://promptedit.com/) — an AI tools marketplace for video creators with an optional Content Creator Templates Library subscription.

Reimagined from the [reference landing page](https://www.contentcreator.com/prompt-edit) with clearer messaging, stronger hierarchy, and less repetitive scrolling.

**Live demo:** [owenbcoding.github.io/promptedit-frontend-page](https://owenbcoding.github.io/promptedit-frontend-page/)

## Goal

Build a sample sales page that sells joining PromptEdit as a customer: one place for AI image, video, audio, and editing tools, with pay-as-you-go credits and an optional monthly plan that unlocks the template library.

## Page structure

Sections render in this order (mobile-first, same flow at 1440px desktop):

1. **Nav** — sticky header, anchor links, mobile menu
2. **Hero** — headline, subhead, primary/secondary CTAs, quick stats
3. **Intro** — “grocery store for AI” value prop + benefits
4. **Trust** — library stats + testimonials (moved above tools vs. reference)
5. **Tools** — four AI categories via one reusable component
6. **Pricing** — credit starter pack + monthly subscription + guarantee callout
7. **Library** — tabbed preview of template categories
8. **Audience** — “PromptEdit is for you if…”
9. **FAQ** — native `<details>` accordion
10. **Final CTA** — closing conversion block
11. **Footer** — logo, tagline, legal links

## Design decisions

Improvements vs. the [reference page](https://www.contentcreator.com/prompt-edit):

- Reframed for all creators, not only AI Creator Course enrollees — cleaner headline hierarchy
- Moved trust stats + testimonials above tool sections (reference buries them after long library blocks)
- One reusable `ToolCategory` component for all four AI categories instead of four separate layouts
- Condensed five repeating library deep-dives into five tabbed previews (no duplicate CTAs between each)
- Consistent primary CTA (“Get Started”) in nav, hero, and footer; plan-specific labels on pricing cards
- Mobile-first: 2-column tool grids, stacked pricing, collapsible nav
- FAQ uses native `<details>` — no extra JS, fast load
- SVG category icons instead of emoji for sharper rendering at all sizes

### Intentionally omitted

- Course-specific enrollment copy (“Now that you’ve enrolled…”)
- Audio/video preview embeds and before/after SFX demos (placeholder preview labels only)
- Repeated “Click To Get Started Today!” after every library subsection
- Login / Tutorials nav links from the reference header

## Wireframes

- [Figma — PromptEdit sales page wireframes](https://curry-coding-41440917.figma.site/)
- Mobile frame: 375px, all sections, trust above tools
- Desktop: 1440px adaptation of the same structure

## Tech stack

- Vue 3 + Vite
- Tailwind CSS 4 (utility layer via `@tailwindcss/vite`)
- Scoped component CSS + CSS custom properties for theming
- Content driven from `src/data/content.js`
- Deployed to GitHub Pages via GitHub Actions

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:5173/promptedit-frontend-page/](http://localhost:5173/promptedit-frontend-page/) after starting the dev server (base path matches production).

## Build & deploy

```bash
pnpm build    # outputs to dist/
pnpm preview  # local production preview
```

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.

**One-time GitHub setup:** Repository → Settings → Pages → Source: **GitHub Actions**.

## Project layout

```
src/
  components/   # Vue SFCs (Hero, Pricing, ToolCategory, etc.)
  data/
    content.js  # All copy, links, and section config
  assets/       # Logo and static images
  style.css     # Global tokens, layout utilities, shared classes
```

## Known limitations

- Library tab previews use labeled placeholders, not real template thumbnails or media embeds
- Signup CTAs link to [promptedit.com](https://promptedit.com/); legal footer links point to Content Creator terms/privacy pages from the reference site
