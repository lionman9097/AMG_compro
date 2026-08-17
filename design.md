# Design — SealPro

A locked design system for this app. Every page redesign reads this file before
emitting code. Do not regenerate per page — extend or amend this file when the
system needs to grow.

## Genre
modern-minimal

## Macrostructure family

- **Marketing pages (Home, Products, Contact):** Stat-Led — giant number hero, data-as-narrative, supporting stats grid, tabular spec sheets. Variations: Home uses "18+" as lead figure. Products uses catalog-as-spec-sheet. Contact is a clean two-column form.
- **Content pages (About):** Long Document — continuous prose with inline section heads. Company story reads as a journal entry, not marketing slides.

## Theme (Cobalt — light)

Cool engineered near-white paper. Single electric cobalt signal accent. Sharp,
technical, instrument-panel clarity.

| Token | Value | Role |
|-------|-------|------|
| `--color-paper` | `oklch(98.5% 0.002 255)` | Page background — cool near-white |
| `--color-paper-2` | `oklch(95.5% 0.004 255)` | Card surfaces, secondary backgrounds |
| `--color-ink` | `oklch(22% 0.01 260)` | Primary text — deep near-black with cool undertone |
| `--color-ink-2` | `oklch(45% 0.02 255)` | Secondary text, captions |
| `--color-rule` | `oklch(89% 0.008 260)` | Borders, dividers, hairlines |
| `--color-accent` | `oklch(58% 0.22 250)` | Electric cobalt — CTAs, focus rings, active states |
| `--color-accent-ink` | `oklch(100% 0 0)` | Text on accent backgrounds |
| `--color-focus` | `oklch(58% 0.22 250 / 35%)` | Focus ring color |

## Typography

- **Display:** Space Grotesk, weight 600, tracking `-0.03em`. For hero figures, section headings, stat numerals.
- **Body:** Inter, weight 400. For prose, descriptions, form labels, navigation.
- **Mono:** JetBrains Mono, weight 400. For data tables, spec sheets, tabular figures.
- **Type scale anchor:** `--text-display` = `clamp(2.5rem, 5vw + 0.5rem, 7rem)`

## Spacing

4-point named scale. Pages use Tailwind spacing utilities scaled to multiples of 4.

## Motion

- **Easings:** `cubic-bezier(0.16, 1, 0.3, 1)` — exponential ease-out.
- **Reveal pattern:** Off. The page is composed, not animated in. The sole exception: hero figure tick (counter from 0 to target over 500ms, easing as above).
- **Reduced-motion:** All animations disabled; hero figure renders at final value immediately.

## Microinteractions stance

- **Hover:** 800ms delay on large surfaces, 0ms on interactive controls. Subtle color shift only — no lift, no shadow growth, no scale.
- **Focus:** Immediate, cobalt ring, offset by 2px.

## CTA voice

- **Primary CTA:** Black-filled pill (`bg-zinc-900 text-white`, `rounded-full px-8 py-3.5`). Short imperative copy ("Explore Products", "Send Inquiry").
- **Secondary CTA:** White-outlined pill (`border border-zinc-300 text-zinc-700`, `rounded-full px-8 py-3.5`).

## Nav & Footer

- **Nav:** N5 Floating pill — content-sized, detached from edges (top-4, mx-auto), `backdrop-blur-xl bg-white/85`, soft shadow, wordmark center-left, 4 links right. On scroll: border appears.
- **Footer:** Ft2 Inline single line — wordmark + tagline + copyright across one line, hairline rule above. No column layout.

## Per-page allowances

- Marketing pages MAY use enrichment (data-viz for stats, tabular layouts for specs).
- Content pages (About): typography only — no cards, no icons, no decorative elements.
- Contact page: form only — no map placeholder, no decorative icons.

## What pages MUST share

- The wordmark / logotype: "SealPro" in Space Grotesk 600.
- The accent colour (cobalt) and its placement (≤ 5% per viewport).
- The display + body + mono fonts.
- The CTA voice (pill shape, border-radius full, padding rhythm).
- Section heading rhythm: numeral prefix + label + display heading.

## What pages MAY differ on

- Macrostructure within the page-type family.
- Hero archetype (Stat-Led vs. catalog variant).
- Supporting content shape (stats grid vs. tabular spec sheet vs. long-form prose).
