# PromptEdit Marketplace Sales Page

A performant, conversion-focused sales page for [PromptEdit](https://promptedit.com/) — a marketplace for content creator templates.

This is a frontend design challenge: reimagine PromptEdit’s landing experience with clearer messaging, stronger hierarchy, and a more intuitive path to joining the marketplace as a creator or buyer.

## Goal
Create a sample page using https://www.contentcreator.com/prompt-edit as an example and create a performant sales page that sells joining our marketplace.

## Design decisions
Brief bullets on what you improved vs. promptedit.com, for example:
- Moved trust stats + testimonials above tool sections (reference buries them)
- One reusable tool-category component instead of four separate layouts
- Reduced library deep-dives from 5 repeating blocks to 3 tabbed previews
- Single primary CTA label ("Get Started") used consistently
- Mobile-first: 2-col tool grids, stacked pricing, collapsible nav
- FAQ uses native `<details>` for zero JS and fast load

## WireFrame for mobile first
- Figma link to mobile design 
- [Figma — PromptEdit sales page wireframes](https://figma.com/file/...)
- Mobile frame: 375px, all sections, trust above tools
- Desktop: 1440px adaptation of same structure

## Tech stack
- Hosting githubpages with vue so it can relate to the origonal job tech stack
- Vue 3 + Vite
- [Add CSS approach: plain CSS, Tailwind, etc.]

## Getting started

```bash
pnpm install
pnpm dev
```

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
