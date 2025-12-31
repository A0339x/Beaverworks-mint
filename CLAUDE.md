# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Beaverworks Mint Redesign - A premium e-commerce website for a Canadian mint company showcasing collectible coins, flight badges, and watches. Emphasizes Canadian heritage and craftsmanship with high-end micro-interactions.

## Commands

```bash
npm install      # Install dependencies
npm run dev      # Start dev server on port 3000
npm run build    # Production build
npm run preview  # Preview production build
```

## Architecture

**Tech Stack:** React 19 + TypeScript + Vite + Tailwind CSS (via CDN) + Framer Motion

**Routing:** Client-side state-based routing via `ViewState` in `App.tsx`. No React Router - navigation is handled through `onNavigate(id, type)` callbacks passed down to components.

**View Types:**
- `home` - Landing page with Hero, Features, ProductGrid, NewsSection
- `category` - Collection pages (shop, arrow-collection, 100-collection, badges, watches)
- `product` - Individual product detail pages
- `page` - Static content pages (story, contact, services/*)

**Data Management:** All data lives in `constants.ts`:
- `NAV_ITEMS` - Navigation structure with nested dropdowns
- `PRODUCTS` - Product catalog with specs, descriptions, related items
- `COLLECTION_INFO` - Category page metadata and hero content
- `PAGE_CONTENT` - Static page content with sections
- `NEWS_UPDATES` - News/blog items

**Styling:**
- Tailwind via CDN (configured in `index.html`)
- Custom colors: `canadian-red` (#C8102E), `canadian-gold` (#D4AF37)
- Fonts: Playfair Display (serif headings), Lato (sans body)
- No separate CSS files - all styling inline with Tailwind classes

**Path Alias:** `@/*` maps to project root (configured in `tsconfig.json` and `vite.config.ts`)

## Component Patterns

Components receive `onNavigate: (id: string, type: ViewType) => void` for navigation. Pages that display products/categories look up data from `constants.ts` using the `id` prop.

The Navigation component adapts colors based on scroll position and current view (transparent on home hero, white background elsewhere).
