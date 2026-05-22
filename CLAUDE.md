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
- Font: Work Sans (via Google Fonts in `index.html`).
- Styling: prefer Tailwind utility classes inline; reach for `proposta.css` only for selectors Tailwind can't handle.

## Design system (tokens in `tailwind.config`)

The `tailwind.config` block inside `index.html` defines semantic tokens. **Always use these tokens** instead of arbitrary `text-[12.5px]` / `text-[#5C6E64]` values. If a value isn't in the system, either it's wrong or the system needs a new token (discuss first).

### Typography scale

| Token | Use for | Resolved |
|---|---|---|
| `text-h1` | Cover hero only | `clamp(52px,6vw,82px)` · 900 · `-0.04em` · `0.95` |
| `text-h2` | Slide title (every section) | `clamp(36px,4vw,54px)` · 900 · `-0.03em` · `1` |
| `text-h3` | Subsection title inside a slide | `22px` · 800 · `-0.025em` · `1.1` |
| `text-h4` | Large card title | `17px` · 800 · `-0.015em` · `1.2` |
| `text-lead` | Intro paragraph | `17px` · 400 · `1.65` |
| `text-body` | Default body | `15px` · 400 · `1.65` |
| `text-body-sm` | Body inside cards | `13px` · 400 · `1.65` |
| `text-caption` | Card title (small), metadata, chip label | `12px` · 500 · `1.5` |
| `text-micro` | Tiny meta (under a chip, etc.) | `11px` · 500 · `1.4` |
| `text-eyebrow` | Section kicker (always combined with `uppercase`) | `11px` · 700 · `.1em` · `1.1` |
| `text-eyebrow-sm` | Sub-kicker inside a card | `10px` · 700 · `.14em` · `1.1` |

Pesos vêm embutidos nos tokens — sobrescreva (`font-extrabold`, `font-semibold`) só quando intencional.

### Colors

| Token | Hex | Use for |
|---|---|---|
| `text-ink` / `bg-ink` | `#0C1410` | Títulos, texto forte |
| `text-ink-body` | `#374840` | Corpo principal |
| `text-ink-muted` | `#5C6E64` | Corpo secundário, descrições de card |
| `text-ink-soft` | `#8FA398` | Labels, metadados, eyebrow neutro |
| `text-brand` / `bg-brand` | `#1DB954` | Acento ativo |
| `text-brand-dark` | `#158A3E` | Texto verde sobre fundo claro (eyebrow colorido) |
| `text-brand-soft` | `#6EBF8B` | Termo destacado em `<em>` |
| `bg-brand-bg` | `#F0FDF4` | Fundo de badge/chip claro |
| `border-brand-border` | `#D1FAE5` | Border de badge/chip claro |
| `bg-surface-page` | `#F4F8F5` | Fundo padrão de slide claro |
| `bg-surface-card` | `#FFFFFF` | Cards |
| `border-surface-line` | `#DDE8E2` | Borders de card / divisores |
| `bg-surface-dark` | `#1F2B23` | Fundo de slide escuro (capa, blocos contrastantes) |

### Anatomia padrão de um slide

1. **Header bar** (h-72px, absolute top): logo + eyebrow do título no canto direito.
2. **Eyebrow** (`text-eyebrow uppercase text-brand-dark`) + **H2** (`text-h2 text-ink` com `<em class="text-brand-soft not-italic">` no destaque).
3. **Lead** (`text-body text-ink-muted`) ao lado ou abaixo, max-width ~400px.
4. **Conteúdo em grid** de cards: `bg-surface-card border border-surface-line rounded-[20px]`.
5. Ícone do card em badge: `w-10 h-10 bg-brand-bg border border-brand-border rounded-[9px]` com SVG `stroke="#158A3E"` (ou cor temática para alertas).

Slides ainda usando classes "cruas" (`text-[15px]`, `text-[#5C6E64]`): migrar para tokens quando tocar no arquivo. O `s7-metodologia.js` é a referência atual da migração.
