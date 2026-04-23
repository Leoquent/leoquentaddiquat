# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install                        # install dependencies
./node_modules/.bin/next dev       # dev server at localhost:3000
./node_modules/.bin/next build     # production build (use local binary, not npx)
```

ESLint is intentionally ignored during builds (`eslint.ignoreDuringBuilds: true`). TypeScript errors **do** fail the build.

## Architecture

This is a **Next.js 15 App Router** project. The entire marketing site lives in a single file: `app/page.tsx` (a `"use client"` component with all sections inlined — no separate section components). GSAP ScrollTrigger animations are orchestrated inside a single `useGSAP` hook in that file.

**Routes:**
- `/` — one-page marketing site (`app/page.tsx`)
- `/api/analyse` — Route Handler that sends lead emails via Gmail SMTP (`app/api/analyse/route.ts`)
- `/demo-video` — Remotion video player page

**Critical `next.config.ts` constraints:**
- `output: 'export'` — static export only. **This conflicts with `/api/analyse`**, which is a server-side Route Handler and cannot be statically exported. Before going live, either remove `output: 'export'` and deploy to a Node.js host (e.g. Vercel), or replace the email logic with a client-side service (Formspree, EmailJS). Do not deploy to GitHub Pages with the API route in place.
- `basePath` is `/leoquentaddiquat` in production and empty in dev. All internal asset URLs (`/logo.png`, photos) must use the `basePath` prefix in production, hence the `const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""` pattern used throughout.

## Design System

All tokens are defined in `app/globals.css` via `@theme`:

| Token | Value | Usage |
|---|---|---|
| `vanta` | `#050505` | Primary background |
| `lime` | `#CCFF00` | CTAs, highlights, active states |
| `gridline` | `#1A1A1A` | Section borders |
| `bone` | `#EAEAEA` | Body text on dark |
| `mute` | `#666666` | Secondary text |

**Fonts:** Inter (`--font-sans`), Syne (`--font-syne` / display), Playfair Display (`--font-serif`).

**Key CSS classes** (defined in `globals.css`):
- `.hero-headline` — fluid type, 900 weight, tight tracking
- `.section-headline` — fluid type for section H2s
- `.brutalist-marker` — acid-lime highlighter pen effect behind text
- `.btn-glitch` — hover shifts element with lime box-shadow
- `.noise-bg` — fixed full-screen SVG grain overlay (z-index 9999)

**Interaction patterns:**
- Hover-to-reveal: cards slide content up from `translate-y-[120%]` to `0` on `:hover`
- Selected state: `bg-lime text-vanta` (inverted)
- Mobile accordion: controlled by `openSolution`, `openIndustry`, `openMember` state with `grid-rows-[0fr]` → `grid-rows-[1fr]` transition

## Content Sources of Truth

Before editing any copy, read these files first:
- `New_Website_Copy.md` — finalized German copy for all sections (single source of truth)
- `Website_Content_For_AI.md` — structured content breakdown per section
- `AI_Style_And_Vibe_Prompt.md` — brand voice, visual identity, and tone guidelines

All website copy is in **German**. The brand voice is authoritative and direct — no agency buzzwords.

## Lead Funnel (Overlay)

The funnel lives in `components/AnalyseFunnel.tsx` and renders as a slide-up overlay on the homepage — no separate route. It is triggered by all "Potenzial analysieren" buttons and the bottom CTA email form.

The questionnaire collects: Branche → Größe → Schmerzen (pain points, max 3) → Interesse → Dringlichkeit → Kontaktdaten.

On submit it calls `POST /api/analyse`, which sends two emails via Nodemailer + Gmail SMTP:
1. Lead notification to the team (with all answers formatted)
2. Confirmation to the lead (with Calendly booking link)

**Required env vars** (see `.env.example`):
```
GMAIL_USER=your@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx   # Google App Password (needs 2FA enabled)
GMAIL_NOTIFY_TO=your@gmail.com
```

The Calendly URL is hardcoded at the top of `components/AnalyseFunnel.tsx` as `CALENDAR_URL`.

## Git & Branch Strategy

The repo belongs to the GitHub account `Leoquent` — push access requires being added as a Collaborator in GitHub repo Settings. The remote is configured via SSH:

```bash
git remote set-url origin git@github.com:Leoquent/leoquentaddiquat.git
```

The `feature/lead-qualification-funnel` branch is pushed and has an open Pull Request. Once merged into `main`, the next feature work should branch off `main`.
