# Page Override: Accueil (Home)

> This file contains page-specific design rules that **override** the Master file.
> For any rule not mentioned here, refer to `design-system/capoeira-senzala-78/MASTER.md`

---

**Page:** Home (/)
**Last Updated:** 2026-02-05
**Components:** HeroSection, Gallery4, Feature108, Feature, LandingAccordionItem, AutoPlayVideoGallery, Faq5, Cta4

---

## Page-Specific Color Applications

### Hero Section
- **Primary CTA Button** (`Découvrir nos cours`)
  - Background: `bg-primary-500` (#F9BB07)
  - Text: `text-darker-blue` (#0A0E10)
  - Hover: `bg-primary-400` with `-translate-y-0.5` lift effect
  - Shadow: `shadow-primary-500/30` → `shadow-primary-500/50` on hover

- **Secondary Button** (`Où pratiquer ?`)
  - Border: `border-primary-500/40`
  - Hover border: `border-primary-500`
  - Background hover: `bg-primary-500/10`
  - Text: `text-white`

- **Navigation Links**
  - Active state: `text-primary-500`
  - Hover state: `hover:text-primary-500`
  - Mobile menu hover: `group-hover:text-primary-500`

- **Inscription Button** (Navbar)
  - Background: `bg-primary-500`
  - Hover: `bg-primary-600`
  - Text: `text-white`

### Events Gallery (Gallery4)
- Uses global `bg-primary` and `bg-primary/20` for pagination dots
- No override needed ✓

### Feature Tabs (Feature108)
- **Badges**
  - Background: `bg-primary-500/20`
  - Text: `text-primary-500`
  - Border: `border-primary-500/30`
  - Hover: `bg-primary-500/30`

- **Tab Triggers**
  - Active state: `bg-primary-500` with `text-darker-blue`
  - Active hover: `bg-primary-400`
  - Transition: `200ms` all properties

- **CTA Buttons**
  - Background: `bg-primary-500`
  - Text: `text-darker-blue`
  - Hover: `bg-primary-400`

### Professional Services (Feature Carousel)
- Badge: Same as Feature108 (primary gold with transparency)
- Button: Gold primary with dark text

### Video Gallery (AutoPlayVideoGallery)
- Active video ring: `ring-2 ring-primary-500`
- Control button: Primary gold with dark text

### FAQ Section (Faq5)
- Badge: Primary gold with transparency and border

### Interactive Accordion
- CTA button: Primary gold with lift effect on hover

---

## Component Consistency Rules

### All Buttons on Home Page
1. **Primary Buttons** (main actions):
   - `bg-primary-500` + `text-darker-blue`
   - Hover: `bg-primary-400` + `-translate-y-0.5`
   - Always include `cursor-pointer`
   - Transition: `duration-200`

2. **Secondary Buttons** (outline style):
   - `border-2 border-primary-500/40`
   - Hover: `border-primary-500` + `bg-primary-500/10`
   - Text: `text-white`

3. **Badge Components**:
   - `bg-primary-500/20`
   - `text-primary-500`
   - `border border-primary-500/30`
   - Hover: `bg-primary-500/30`

### Interactive States
- All clickable elements have `cursor-pointer`
- Hover transitions are `200ms` (not 300ms)
- Use `hover:-translate-y-0.5` for lift effect on primary buttons
- Use `hover:scale-[1.02]` for cards and images

---

## Typography on Home Page

Follows MASTER.md typography rules:
- **Headings**: Barlow Condensed (bold, energetic)
- **Body**: Barlow (light to medium weight)
- Text color: `text-white` for primary, `text-white/80` for secondary

---

## Shadows on Home Page

Uses MASTER.md shadow system:
- Button shadows: `shadow-lg shadow-primary-500/30`
- Hover shadows: `shadow-xl` or increased opacity
- Optional gold glow for emphasis: `shadow-gold`

---

## Animation Notes

Home page uses three animation libraries (as per project architecture):
- **Framer Motion**: Hero section entrance animations (`initial`, `animate`, `transition`)
- **GSAP**: Not currently used on home sections but available
- **Lenis**: Smooth scrolling applied globally

---

## Files Modified

1. `/src/components/blocks/hero-section-5.tsx`
   - Primary and secondary buttons
   - Navigation active/hover states
   - Navbar inscription button

2. `/src/components/blocks/shadcnblocks-com-feature108.tsx`
   - Badges (2 instances)
   - Tab triggers active state
   - CTA buttons

3. `/src/components/ui/faq-5.tsx`
   - Badge component

4. `/src/components/ui/feature-with-image-carousel.tsx`
   - Badge and CTA button

5. `/src/components/ui/interactive-image-accordion.tsx`
   - CTA button

6. `/src/components/ui/auto-play-video-gallery.tsx`
   - Active video ring
   - Control button

---

## Pre-Delivery Checklist (Home Page)

- [x] All yellow-* colors replaced with primary-*
- [x] All buttons use darker-blue text on gold background
- [x] All buttons have cursor-pointer
- [x] Hover states use 200ms transitions
- [x] Primary buttons have lift effect (-translate-y-0.5)
- [x] Badges use gold with transparency and borders
- [x] Navigation uses primary-500 for active/hover states
- [x] All interactive elements have smooth transitions
- [x] Color consistency across all home components

---

## Notes

The home page is the primary entry point and showcases the complete design system. All color applications here serve as reference for other pages.
