# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for Capoeira Senzala 78 (a capoeira school in Yvelines, France). Built with Next.js 13 App Router, React 18, Tailwind CSS, and shadcn/ui components. All content is in French.

## Commands

- `npm run dev` — Start dev server (http://localhost:3000)
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run start` — Run production server

## Architecture

### Routing (Next.js App Router)

All pages live in `src/app/`. Key routes:
- `/` — Home page (composed via `HomeSections.js`)
- `/cours-tarifs` — Course schedules by city
- `/evenements` and `/evenements/[id]` — Events listing and detail
- `/actualites` and `/actualites/[id]` — Articles listing and detail
- `/achats` — Product shop (TypeScript)
- `/contact`, `/la-capoeira`, `/le-groupe-senzala-78`, `/prestations`, `/partenaires` — Static pages

### Component Organization

- `src/components/ui/` — Base UI primitives (shadcn/ui wrapping Radix UI). Configured via `components.json`.
- `src/components/blocks/` — Large composite page sections (hero, galleries, bento grids)
- `src/components/custom/` — Business-specific components (HistoryScroll, EventsHeroBackground)
- `src/components/magicui/` — Animation components (blur-fade, marquee, bento-grid)

### Data Layer

**No backend/API.** All content is static data in `src/data/`:
- `events.js` — Events array with categories, dates, external registration links
- `articles.js` — Articles with HTML content in `content` field
- `products.ts` — Product catalog (TypeScript with types in `types.ts`)
- `professeurs.ts` — Instructor profiles
- `maitres.js` — Masters biographical data
- `cours.js` — Aggregates 21 city JSON files from `src/data/cours/` (course schedules)

City course files are individual JSON files in `src/data/cours/` (e.g., `versailles.json`, `poissy.json`). Each contains schedule details with days, times, age groups, and locations.

External transactions (registrations, purchases) link out to **AssoConnect**.

### Styling

- Tailwind CSS with `cn()` utility from `src/lib/utils.ts` (clsx + tailwind-merge)
- **Color palette:** Primary gold `#F9BB07` (primary-500), dark backgrounds `#13191C` (dark-blue) and `#0A0E10` (darker-blue), white text
- Import path alias: `@/*` → `src/*`
- Custom animations defined in `tailwind.config.js`: `spin-slow`, `bounce-slow`, `marquee`, `marquee-vertical`

### Animation Stack

Three animation libraries are used:
- **Framer Motion** — Component entrance/exit animations, gestures
- **GSAP** (with `@gsap/react`) — Scroll-based animations, parallax effects
- **Lenis** (`@studio-freight/lenis`) — Smooth scrolling

### Key Patterns

- Mixed JS/JSX and TypeScript files — the shop section (`achats`, `products.ts`, `types.ts`) uses TypeScript; most other pages use plain JS/JSX
- TypeScript strict mode is disabled
- Pages compose blocks and custom components; data is imported directly from `src/data/`
- Client-side filtering for events (by category) and articles (with pagination via Intersection Observer)
