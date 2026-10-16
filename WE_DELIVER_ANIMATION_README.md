# We Deliver — Pixel-Accurate Scrolling & Burst Reveal Animation

## 1. Overview & Architecture

This implementation delivers a pixel-accurate scrolling entrance and burst reveal animation for the **"We Deliver"** section, faithfully replicating the motion choreography from **Frames 1–4** (`Video Project 1.mp4`) and applying the compact card proportions and visual design from **Image 5**.

### Key Highlights
- **Initial Anchor**: The central `"We Deliver"` hero card appears first as the user scrolls into view.
- **Outward Burst Choreography**: All 8 surrounding cards emerge outward from directly behind the central hero card to settle in their exact 3×3 grid coordinates.
- **Image 5 Compact Proportions**: Cards feature refined, balanced aspect ratios with skeuomorphic rounded corners (`border-radius: 20px`), squircle icons, subtle rim lighting, and a vibrant electric blue bottom glow on the hero card.
- **Dual Support**: Available both in vanilla HTML5/CSS3/GSAP (`index.html`, `css/style.css`, `js/main.js`) and as a reusable React component (`components/WeDeliverCards.jsx`).
- **Interactive Replay & Spotlight**: Includes a dedicated replay button for presentation demos and real-time cursor spotlights on card hover.

---

## 2. Visual Comparison Checklist & Timeline Mapping

| Reference Frame | Animation Phase | Start Time | Duration | Transforms & Styles | Easing | Visual Behavior |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Frame 1** | Initial Viewport Entry | `0 ms` | — | Hero: `scale(0.92)`, `translateY(24px)`, `opacity: 0`<br>BG Cards: collapsed behind center, `scale(0.35)`, `opacity: 0` | — | Central card peeks into view as section crosses 30% visibility threshold. |
| **Frame 2** | Central Hero Reveal & Peak | `0 → 420 ms` | `420 ms` | Hero: `scale(1.0)`, `translateY(0)`, `opacity: 1`<br>Glow pulse activates at `350 ms` | `cubic-bezier(0.22, 1, 0.36, 1)` (soft overshoot) | Hero card expands to full size with gentle spring bounce; bottom blue rim glows. |
| **Frame 3** | Background Cards Burst Outward | `280 → 900 ms` | `200 ms` per card | BG Cards: `scale(0.35 → 1.0)`, `opacity: 0 → 0.85`, `rotateZ(rotZ → 0)` | `power2.out` / `cubic-bezier(0.16, 1, 0.3, 1)` | 8 cards burst outwards in all directions with staggered delays based on distance. |
| **Frame 4** | Grid Settlement & Cleanup | `900 → 1100 ms` | `200 ms` | All cards: inline transforms cleared, pointer events restored, CSS hover active | `linear` | All 9 cards lock into place forming the 3×3 bento grid matching Image 5. |

---

## 3. How to Tune Timings & Easings

### In Vanilla JS (`js/main.js` & `public/js/main.js`)
All configuration parameters are centralized inside the `CONFIG` object around line 468:

```javascript
const CONFIG = {
  replayable: true,          // Reset when scrolling away and back (or false for once-only)
  triggerThreshold: 0.3,     // Section visibility threshold (30%)
  
  hero: {
    duration: 0.42,          // 420ms hero entrance (Frame 1 -> Frame 2)
    ease: 'cubic-bezier(0.22, 1, 0.36, 1)', // Soft spring overshoot
    startScale: 0.92,        // Initial scale
    startY: 24,              // Y-offset in pixels
    startOpacity: 0          // Initial opacity
  },
  
  bg: {
    duration: 0.20,          // Duration per card (160ms - 220ms)
    stagger: 0.09,           // Stagger delay between cards (80ms - 120ms)
    ease: 'power2.out',      // Smooth outward deceleration
    startScale: 0.35,        // Clustered initial scale behind hero
    startOpacity: 0,
    peakBlur: true           // Enable subtle parallax blur during motion
  },
  
  // Per-card rotation offsets and Y-shifts derived from reference frames
  cardAnimData: [
    { delay: 0.00, rotZ:  1.2, extraY:  8 },  // software    (top-left)
    { delay: 0.09, rotZ: -0.8, extraY: 12 },  // uiux        (mid-left)
    { delay: 0.18, rotZ:  0.6, extraY: 16 },  // cloud       (bot-left)
    { delay: 0.04, rotZ: -1.0, extraY:  6 },  // agile       (top-center)
    { delay: 0.13, rotZ:  0.9, extraY: 14 },  // security    (bot-center)
    { delay: 0.02, rotZ:  1.4, extraY:  8 },  // ai          (top-right)
    { delay: 0.11, rotZ: -1.2, extraY: 10 },  // business    (mid-right)
    { delay: 0.20, rotZ:  0.5, extraY: 18 },  // partnership (bot-right)
  ]
};
```

### In CSS Variables (`css/style.css` & `public/css/style.css`)
CSS custom properties allow dynamic animation overrides:
```css
.deliver-section-wrap {
  --deliver-hero-duration: 420ms;
  --deliver-hero-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --deliver-bg-duration: 200ms;
  --deliver-bg-stagger: 90ms;
  --deliver-bg-ease: cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## 4. How to Swap Assets & Icons

### In HTML (`index.html`)
Each card is an `<article class="deliver-card deliver-grid-card">` containing:
1. **Icon Container**: `<div class="deliver-squircle-icon">` contains an inline SVG or custom icon.
2. **Text Body**: `<h3 class="deliver-card-title">` and `<p class="deliver-card-tagline">`.
3. **Spotlight Effect**: `<div class="deliver-card-spotlight">` provides dynamic mouse glow.

To change an icon, replace the SVG inside `.deliver-squircle-icon`:
```html
<div class="deliver-squircle-icon">
  <!-- Replace SVG below with custom 24x24 icon -->
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    ...
  </svg>
</div>
```

### In React (`components/WeDeliverCards.jsx`)
Update the `deliverablesData` dictionary at the top of the component. Icons map to Lucide React icons (`ICON_MAP`).

---

## 5. Performance, Mobile & Accessibility

1. **Hardware Acceleration**:
   - `will-change: transform, opacity;` applied to all cards.
   - Layout properties (`width`, `height`, `margin`, `top`, `left`) are **never** animated.
   - Dynamic dynamic vector deltas calculated via `getBoundingClientRect()` once prior to animation initiation.
2. **Prefers-Reduced-Motion**:
   - Detects `window.matchMedia('(prefers-reduced-motion: reduce)')`.
   - If enabled, skips motion transforms completely and applies an instant, accessible opacity fade-in.
3. **Mobile Screen Adaptation**:
   - On screens `<= 768px`, duration is automatically shortened by ~30% (`--deliver-hero-duration: 300ms`).
   - Cards smoothly collapse into a single-column layout with the hero card anchored at the top for maximum clarity.

---

## 6. Assumptions Documented
- **Image 5 Centered Grid**: Image 5 displays a 3×3 matrix with `"We Deliver"` in row 2, column 2. The surrounding 8 cards are arranged across three vertical columns (Left: 3, Center: 2 flanking hero, Right: 3).
- **Outward Burst Direction**: Since Frame 2 shows all background cards behind the central card, the animation computes exact vector deltas from each card's target center to the hero card's center (`dx, dy`) so that cards explode outward to their natural resting locations regardless of screen size.
