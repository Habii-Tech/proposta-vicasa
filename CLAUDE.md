# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static single-page commercial proposal ("Proposta Comercial — Habii.tech × Fazendinhas Belo Vale"), built in Brazilian Portuguese, designed as a 10-slide vertical scroll-snap presentation. No build step, no framework, no package manager — plain HTML/CSS/JS loaded via `<script>` tags and Tailwind via CDN.

## Running locally

Open `index.html` directly in a browser, or serve the directory with any static server, e.g.:

```bash
python3 -m http.server 8000
```

There is no build, no test suite, no linter, no package.json.

## Architecture

`index.html` is the only entry point. It:
1. Pulls Tailwind from the CDN (`cdn.tailwindcss.com`) with an inline `tailwind.config` that adds the Work Sans font.
2. Loads `assets/css/proposta.css` for things Tailwind can't easily express (scroll-snap, keyframes, `::before`/`::after` decorations, JS-driven states like `.pf-fade` / `.pf-active`).
3. Loads each slide component script in order — each is a self-contained file that calls `document.getElementById('slides-container').insertAdjacentHTML('beforeend', \`...\`)` to inject its `<section class="slide" data-i="N">`. **Slide order is determined by the order of `<script>` tags in `index.html`, not by filename** — note that `s9-portfolio.js` is loaded between `s2` and `s3`.
4. After all components are injected, loads `assets/js/cases.js` (data), `carousel.js` (portfolio interactions), and `nav.js` (dots/progress/keyboard) — these run against the now-existing DOM.

### Slide injection contract

Every component file in `assets/components/` must:
- Render exactly one `<section class="slide ..." data-i="N">`, where `data-i` is its **zero-based position index** used by `nav.js` to set the active dot. If you reorder slides in `index.html`, update `data-i` accordingly.
- Use only Tailwind utilities + inline styles. Custom class names that need CSS rules go into `assets/css/proposta.css`.

### Navigation (`assets/js/nav.js`)

Builds the right-side dot rail, the bottom-right counter (`N / total`), and the top progress bar from `.slide` elements. Uses `IntersectionObserver` (threshold `.5`) to track the active slide, and arrow/page keys for scroll-snap navigation. No router, no hash routing.

### Portfolio carousel (`s9-portfolio.js` + `cases.js` + `carousel.js`)

The portfolio slide is the only interactive section. It depends on three pieces working together:

- `cases.js` declares a global `const CASES = [...]` — array of case objects with fields like `name`, `logo`, `caseImg`, `screenFill`, `color`, `glowColor`, `platform`, `inProgress`. **Edit this file to add/edit cases.**
- `s9-portfolio.js` renders the static shell with the well-known IDs the carousel reads: `pf-detail`, `pf-name`, `pf-meta`, `pf-desc`, `pf-stat`, `pf-glow`, `pf-phones`, `pf-cards`, `pf-counter`. Renaming any of these breaks `carousel.js`.
- `carousel.js` is an IIFE that runs on `DOMContentLoaded`: builds the bottom card row, swaps the detail panel with a `.pf-fade` transition, and re-renders the phone visual (real PNG via `caseImg`, stacked SVG phone mockups, or an "Em andamento / Próximo case" placeholder when `inProgress: true`).

When adding a case: add a `CASES` entry, drop its image into `assets/images/`, and the carousel and card row update automatically — no other code changes needed.

## Conventions

- Language: All copy is Brazilian Portuguese. Keep it that way.
- Brand colors: `#1DB954` (Habii green accent), `#1F2B23` (dark green bg), `#F4F8F5` (page bg), `#0C1410` (text). Each portfolio case has its own `color`/`glowColor`/`screenFill`.
- Font: Work Sans (via Google Fonts in `index.html`).
- Styling: prefer Tailwind utility classes inline; reach for `proposta.css` only for selectors Tailwind can't handle.
