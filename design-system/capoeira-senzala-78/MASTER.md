# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Capoeira Senzala 78
**Generated:** 2026-02-05 13:40:05
**Category:** Sports Team/Club

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Primary | `#F9BB07` | `--color-primary` | Brand gold, CTAs, highlights |
| Secondary | `#FCD34D` | `--color-secondary` | Accents, hover states |
| CTA/Accent | `#22C55E` | `--color-cta` | Action buttons (inscription, contact) |
| Background (Dark) | `#0A0E10` | `--color-background` | Main background |
| Background (Alt) | `#13191C` | `--color-background-alt` | Cards, sections |
| Text | `#FFFFFF` | `--color-text` | Primary text |
| Text Muted | `#94A3B8` | `--color-text-muted` | Secondary text, descriptions |

**Color Notes:** Brazilian gold heritage + energetic accents on dark backgrounds. High contrast for readability and energy.

### Typography

- **Heading Font:** Barlow Condensed
- **Body Font:** Barlow
- **Mood:** sports, fitness, athletic, energetic, condensed, action
- **Google Fonts:** [Barlow Condensed + Barlow](https://fonts.google.com/share?selection.family=Barlow+Condensed:wght@400;500;600;700|Barlow:wght@300;400;500;600;700)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Barlow:wght@300;400;500;600;700&display=swap');
```

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.3)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.4), 0 0 0 1px rgba(249,187,7,0.05)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.5), 0 0 0 1px rgba(249,187,7,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.6), 0 0 20px rgba(249,187,7,0.15)` | Hero images, featured cards |
| `--shadow-gold` | `0 0 30px rgba(249,187,7,0.3)` | Gold glow effect |

**Note:** Shadows on dark backgrounds need higher opacity. Optional gold glow for emphasis.

---

## Component Specs

### Buttons

```css
/* Primary Button - Gold */
.btn-primary {
  background: #F9BB07;
  color: #0A0E10;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  background: #FCD34D;
  transform: translateY(-1px);
}

/* Secondary Button - Outline Gold */
.btn-secondary {
  background: transparent;
  color: #F9BB07;
  border: 2px solid #F9BB07;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background: #F9BB07;
  color: #0A0E10;
}

/* CTA Button - Green (Inscription/Contact) */
.btn-cta {
  background: #22C55E;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-cta:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}
```

### Cards

```css
.card {
  background: #13191C;
  border: 1px solid rgba(249, 187, 7, 0.1);
  border-radius: 12px;
  padding: 24px;
  color: #FFFFFF;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  border-color: rgba(249, 187, 7, 0.3);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  background: #13191C;
  border: 1px solid rgba(249, 187, 7, 0.2);
  border-radius: 8px;
  color: #FFFFFF;
  font-size: 16px;
  transition: all 200ms ease;
}

.input::placeholder {
  color: #94A3B8;
}

.input:focus {
  border-color: #F9BB07;
  outline: none;
  box-shadow: 0 0 0 3px rgba(249, 187, 7, 0.2);
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
}

.modal {
  background: #13191C;
  border: 1px solid rgba(249, 187, 7, 0.2);
  border-radius: 16px;
  padding: 32px;
  color: #FFFFFF;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Vibrant & Block-based

**Keywords:** Bold, energetic, playful, block layout, geometric shapes, high color contrast, duotone, modern, energetic

**Best For:** Startups, creative agencies, gaming, social media, youth-focused, entertainment, consumer

**Key Effects:** Large sections (48px+ gaps), animated patterns, bold hover (color shift), scroll-snap, large type (32px+), 200-300ms

### Page Pattern

**Pattern Name:** Community/Forum Landing

- **Conversion Strategy:** Show active community (member count, posts today). Highlight benefits. Preview content. Easy onboarding.
- **CTA Placement:** Join button prominent + After member showcase
- **Section Order:** 1. Hero (community value prop), 2. Popular topics/categories, 3. Active members showcase, 4. Join CTA

---

## Dark Theme Guidelines

This design system uses a **dark-first approach** with Brazilian gold accents.

### Color Application Rules

1. **Backgrounds**
   - Main background: `#0A0E10` (darker-blue)
   - Cards/Sections: `#13191C` (dark-blue)
   - Never use pure black `#000000` — it's too harsh

2. **Text Hierarchy**
   - Primary text: `#FFFFFF` (white)
   - Secondary text: `#94A3B8` (slate-400)
   - Ensure 4.5:1 contrast minimum

3. **Gold Usage**
   - Primary CTAs and brand elements: `#F9BB07`
   - Hover states: `#FCD34D` (lighter gold)
   - Subtle accents: `rgba(249, 187, 7, 0.1-0.3)` for borders/glows

4. **Borders & Dividers**
   - Subtle: `rgba(249, 187, 7, 0.1)`
   - Standard: `rgba(249, 187, 7, 0.2)`
   - Emphasized: `rgba(249, 187, 7, 0.3)`

5. **Interactive States**
   - Use gold borders/glows on hover
   - Maintain smooth transitions (200-300ms)
   - Provide clear visual feedback

### Brazilian/Capoeira Energy

- Use gold liberally but purposefully — it represents energy, tradition, and the Brazilian sun
- Pair with dynamic animations (you already have Framer Motion, GSAP, Lenis)
- Large, bold typography with Barlow Condensed creates athletic energy
- Green CTA buttons (#22C55E) provide strong contrast for action items

---

## Anti-Patterns (Do NOT Use)

- ❌ Static content
- ❌ Poor fan engagement

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
