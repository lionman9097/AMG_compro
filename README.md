# SealPro

Company profile website for a silicone sealant distributor, built with **Nuxt 4** and **Tailwind CSS**.

A four-page marketing site presenting a B2B silicone sealant business — engineered sealant products, company story, and a contact inquiry flow — with a cool, instrument-panel-clean "Cobalt" design language.

## Tech Stack

- **Framework** — [Nuxt 4](https://nuxt.com/) (Vue 3, Nitro SSR/SSG)
- **Language** — TypeScript
- **Styling** — [Tailwind CSS](https://tailwindcss.com/) v3 with a custom OKLCH token system
- **Icons** — [Lucide](https://lucide.dev/) (`@lucide/vue`)
- **Fonts** — Space Grotesk (display), Inter (body), JetBrains Mono (data)

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — full-height hero with Stat-Led headline, category overview, and CTA banner |
| `/about` | Company story, mission/vision, values, and milestone timeline (Long Document layout) |
| `/products` | Filterable product catalog with tabular spec sheets |
| `/contact` | Contact form with company information |

## Getting Started

### Prerequisites

- Node.js 18+
- A package manager (`npm`, `pnpm`, `yarn`, or `bun`)

### Installation

```bash
npm install
```

### Development

Start the dev server with hot reload:

```bash
npm run dev
```

The site is served at `http://localhost:3000`.

### Production build

Build a server-rendered production bundle:

```bash
npm run build
npm run preview
```

Or generate a fully static site:

```bash
npm run generate
```

## Project Structure

```
├── app.vue                  # Root component (NuxtLayout + NuxtPage)
├── nuxt.config.ts           # Nuxt + Tailwind + Nitro configuration
├── tailwind.config.js       # Tailwind theme (Cobalt palette, fonts, animations)
├── design.md                # Locked design system reference
├── assets/
│   └── css/tailwind.css     # CSS tokens, @layer components, utilities
├── components/
│   ├── NavBar.vue           # Floating pill navigation
│   ├── Footer.vue           # Single-line footer
│   ├── HeroSection.vue      # Full-height image hero
│   ├── SectionHeader.vue    # Numeral-prefixed section heading
│   ├── CategoryOverview.vue # Product category index
│   ├── ProductCard.vue      # Tabular product row
│   ├── TrustBar.vue         # Stats grid
│   ├── CTABanner.vue        # Call-to-action strip
│   ├── ContactForm.vue      # Inquiry form
│   └── CompanyInfo.vue      # Contact details
├── data/
│   ├── company.ts           # Company info, stats, values, milestones
│   └── products.ts          # Product catalog (8 products, 4 categories)
├── layouts/
│   └── default.vue          # App shell (NavBar + main + Footer)
├── pages/
│   ├── index.vue            # Home
│   ├── about.vue            # About
│   ├── products.vue         # Products
│   └── contact.vue          # Contact
└── public/
    └── favicon.svg
```

## Design System

The visual language is defined in [`design.md`](design.md) and implemented as CSS custom properties in [`assets/css/tailwind.css`](assets/css/tailwind.css).

- **Genre** — modern-minimal
- **Macrostructure** — Stat-Led (data-as-narrative hero) for marketing pages; Long Document for the About page
- **Palette** — cool near-white paper (`oklch(98.5% 0.002 255)`) with a single electric cobalt accent (`oklch(58% 0.22 250)`)
- **Type** — Space Grotesk for display, Inter for body, JetBrains Mono for data and specs
- **Motion** — composed rather than animated; a single hero figure tick on load

## License

This project does not currently include a `LICENSE` file. If you intend to make this public, add a license of your choice (e.g. MIT, Apache-2.0) before sharing.
