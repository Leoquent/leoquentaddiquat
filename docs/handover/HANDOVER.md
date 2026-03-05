# AI HANDOVER PROTOCOL (IMPORTANT)

This document contains all instructions, requirements, and reference context for the comprehensive UI redesign and restructuring of the Leoquent & Addiquat website. 

**TO THE NEXT AGENT:** Read this document carefully before taking any action. You are inheriting a high-fidelity cinematic project.

---

## 1. CORE DESIGN PRINCIPLES (MANDATORY)
Follow the `frontend-design` skill guidelines (already stored in `.agent/skills/frontend-design/SKILL.md`).

- **Aesthetic**: Cinematic, Editorial, Premium.
- **Palette**: Acid Lime (`#9eff20`), Black, White, Deep Grey.
- **Font**: **Inter** (Sans-serif) for everything. High weight (900) for headlines.
- **Grid**: 1px borders (`--color-border-light`) for an editorial "New York Times" or "Vogue" grid feel.
- **Motion**: Elegant, staggered Framer Motion entrances.

---

## 2. NEW SECTIONS TO IMPLEMENT
Based on reference images provided by the user (described below):

### A. Scrolling Ticker (Post-Hero)
- An infinite horizontal marquee directly below the Hero section.
- Content: "AGENTIC AI • CUSTOM SOFTWARE • AUTOMATION • ..."
- High contrast (Acid Lime on Black or vice versa).

### B. Core Capabilities (Reference: Image 1)
- 3-column editorial grid.
- Column 1 (Black bg): "01 GENERATIVE MODELS" (Acid lime text).
- Column 2/3 (White bg): "02 AUTONOMOUS AGENTS", "03 DATA INFRASTRUCTURE".

### C. Custom Agent Network (Reference: Image 3)
- Deep black section.
- Center: Large radial Acid Lime "Glow".
- Surrounding: Cards for "Call-Center Agent", "Angebots-Agent", etc.
- Call-center agent card is highlighted in full Acid Lime.

### D. Process Steps (Reference: Image 2)
- "Unser Weg zu Ihrer Lösung".
- 4 cards: 01 Analyse, 02 Architektur, 03 Entwicklung, 04 Integration.
- Clean white style with large step numbers.

### E. The Addiquat Advantage (Reference: Image 4)
- Benefits list with thick vertical acid lime side borders (border-l).
- "Zeit sparen", "Kostenreduktion", "Wettbewerbsvorteil", "Massgeschneidert".

---

## 3. CURRENT STATE & TASKS

### Refined Tasks:
- [ ] Update `Header.tsx` to include "Services", "Prozess", "Portfolio".
- [ ] Refine `HeroSection.tsx`: Keep Typewriter with Marker (z-index is already fixed).
- [ ] Implement `ScrollingTicker` component.
- [ ] Implement `CoreCapabilities` component.
- [ ] Implement `CustomAgentsNetwork` component (Dark mode, neon glow).
- [ ] Implement `ProcessSteps` component.
- [ ] Implement `Advantages` component.
- [ ] Implement a new `Portfolio` section (Cinematic references).
- [ ] Update `page.tsx` with the new narrative flow.

### Already Fixed:
- Typewriter font is Inter.
- Typewriter marker z-index layering is fixed (marker behind text).
- Marker vertical padding is refined to `0.12em`.

---

## 4. DESIGN ASSETS
The user has provided reference images which should be in `docs/handover/references/` (if successfully copied) or can be described as high-contrast, editorial/cinematic UI layouts.

---

**AUTHORIZED BY PREVIOUS AGENT.**
Go build something extraordinary.
