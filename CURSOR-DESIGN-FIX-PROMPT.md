# Design Polish Prompt for Cursor Agent

Paste this entire file as your first message in a new Cursor agent tab.

---

## CONTEXT

You are improving the visual design of the How Well You Know marketing website. The site is already built and functional. The content and structure are correct. Your job is ONLY to improve the visual polish, spacing, and professional feel.

The site currently looks like "a startup someone built overnight." The goal is to make it look like Linear.app, Cal.com, or Resend.com: clean, crisp, confident, professional.

DO NOT change any copy/content, page structure, routing, or functionality. Only change CSS, Tailwind classes, layout spacing, visual effects, and component styling.

## THE 15 SPECIFIC FIXES

### Fix 1: Hero Section - Make the scorecard visual bigger and more impressive

File: `src/app/(marketing)/page.tsx` (lines ~131-182)

The scorecard preview on the right side of the hero is tiny and lost in a dark box. It needs to:
- Make the dark card at least `max-w-[420px]` and taller
- Add a subtle glow effect behind the card: `box-shadow: 0 0 80px rgba(99, 102, 241, 0.15)`
- Make the score number bigger: `text-6xl` not `text-5xl`
- Make the skill bars taller: `h-16` not `h-12`, and `w-2` not `w-1.5`
- Add the `@keyframes float` animation in the global CSS if not already there:
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}
```
- The radar/skill bars should have more visual variation in heights (not random, use fixed values like 85%, 60%, 45%, 75%, 90%)

### Fix 2: Hero Section - Headline typography

File: `src/app/(marketing)/page.tsx` (lines ~88-95)

The headline is `text-3xl md:text-5xl`. That's too small for a hero. Change to:
- `text-4xl md:text-6xl lg:text-7xl`
- Add `tracking-tight` for that premium feel
- Make line height tighter: `leading-[1.1]` instead of `leading-tight`

### Fix 3: Logo Marquee - Make it actually scroll

File: `src/components/marketing/LogoMarquee.tsx`

The marquee has the CSS animation but it's not scrolling in the screenshot. Make sure:
- The `@keyframes marquee` is defined in global CSS:
```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```
- The container needs `will-change: transform` for smooth rendering
- Add gradient fade masks on left and right edges:
```tsx
<div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
     style={{ background: 'linear-gradient(to right, var(--m-bg-secondary), transparent)' }} />
<div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
     style={{ background: 'linear-gradient(to left, var(--m-bg-secondary), transparent)' }} />
```
- Speed should be `40s` not `60s` (60s is too slow to notice)

### Fix 4: Problem Stats Section - Make the numbers visually dramatic

File: `src/app/(marketing)/page.tsx` (lines ~190-243)

The stat cards are plain white boxes. They should punch you in the face. Changes:
- Stat numbers: `text-5xl md:text-7xl font-extrabold` (not `text-4xl md:text-5xl font-bold`)
- Add a subtle gradient to the stat numbers instead of flat accent color:
```tsx
style={{
  background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}}
```
- Remove the border from the cards. Use `bg-gradient-to-br from-white to-slate-50` with a subtle shadow instead:
```
className="rounded-2xl p-8 md:p-10 shadow-sm"
style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)' }}
```
- Add a top accent bar to each card: a 3px line at the top in indigo
```tsx
<div className="absolute top-0 left-6 right-6 h-[3px] rounded-full" style={{ background: 'var(--m-accent)' }} />
```
(make the card `relative` for this to work)

### Fix 5: Mini Demo - Add tool selection pills and make it feel alive

File: `src/components/marketing/MiniDemo.tsx`

The current mini demo is just "Try 3 quick questions" with a Start button. It's boring. Add tool selection pills BEFORE the start state:

Replace the `state === "start"` render with:
```tsx
// Show 4 tool pills: ChatGPT (default selected), Figma, Notion, Cursor
// Each pill = tool logo (24x24) + name, in a rounded-full pill
// Selected = accent border + accent-light background
// Unselected = gray border
// Below the pills: the existing Start card, but now says "Try 3 ChatGPT questions"
```

Also:
- Add a subtle card shadow: `shadow-md` not just `border`
- The question card should have a colored top bar showing question type: "Truth or Myth" in a small badge
- Add a progress bar (thin, accent color) at the top of the card showing 1/3, 2/3, 3/3
- On the completion card, add "Get this for your product" as a secondary outlined button next to "Play the full challenge"

### Fix 6: How It Works - Add connecting lines and bigger icons

File: `src/app/(marketing)/page.tsx` (lines ~265-307)

Currently: 4 columns with small numbered circles and tiny icons. Feels disconnected.

Fix:
- Number circles: `h-14 w-14` (not `h-12 w-12`), with `text-base font-bold`
- Icons: `size={28}` (not `size={24}`)
- Between each step (desktop only), add a connecting dotted line. Use a pseudo-element or a simple flex item:
```tsx
{i < STEPS.length - 1 && (
  <div className="hidden md:flex items-center justify-center">
    <div className="w-full border-t-2 border-dashed" style={{ borderColor: 'var(--m-border)' }} />
  </div>
)}
```
This means changing the grid to include separator columns: `md:grid-cols-7` with steps in cols 1,3,5,7 and lines in cols 2,4,6. OR use flexbox with gap items.

- Add a dashboard mockup placeholder below. Even a simple gray rounded rectangle with text "Dashboard screenshot coming soon" is better than nothing. Use:
```tsx
<div className="mt-16 mx-auto max-w-[900px] rounded-2xl border-2 border-dashed p-16 text-center"
     style={{ borderColor: 'var(--m-border)' }}>
  <p style={{ color: 'var(--m-text-tertiary)' }}>Dashboard mockup</p>
</div>
```

### Fix 7: Use Case Cards - Add visual differentiation

File: `src/components/marketing/UseCaseCard.tsx`

The cards are flat and identical. Fix:
- Icon container: `h-12 w-12` (not `h-10 w-10`), `rounded-xl` (not `rounded-lg`)
- Add a subtle gradient hover effect:
```tsx
onMouseEnter={(e) => {
  e.currentTarget.style.borderColor = 'var(--m-accent)';
  e.currentTarget.style.background = 'linear-gradient(135deg, #FFFFFF 0%, #EEF2FF 100%)';
}}
onMouseLeave={(e) => {
  e.currentTarget.style.borderColor = 'var(--m-border)';
  e.currentTarget.style.background = 'var(--m-bg)';
}}
```
- Title: `text-xl font-bold` (not `text-lg font-semibold`)

### Fix 8: Comparison Table - Highlight the HWYK column more aggressively

File: `src/app/(marketing)/page.tsx` (lines ~326-387)

The HWYK column has a light accent background but it doesn't pop enough.
- Give the entire HWYK column a left border: `border-l-2` in accent color
- Make the HWYK header cell bold with a small "You are here" badge below the name
- The HWYK cell values should be `font-bold` and slightly larger `text-sm` -> `text-base`
- All other columns' values should be slightly muted (keep `text-secondary`)
- Round the table in a card: wrap it in `<div className="rounded-xl border overflow-hidden" style={{ borderColor: 'var(--m-border)' }}>`

### Fix 9: Pricing Cards - Elevate the Pro card

File: `src/components/marketing/PricingCards.tsx`

The Pro card is highlighted but doesn't stand out enough.
- Pro card: add `shadow-xl` and scale it slightly: `md:scale-[1.03]`
- Pro card: add a subtle gradient border effect at top or use `ring-2 ring-indigo-500/20`
- Free and Business cards: `shadow-sm` (not just border)
- The "Most Popular" badge should be slightly bigger: `px-4 py-1.5 text-sm`
- The CTA buttons should be taller: `py-3.5` not `py-3`

### Fix 10: CTA Section - Add visual weight

File: `src/components/marketing/CTASection.tsx`

The early access CTA section is just text + form on white. It's the most important conversion point and it looks like every other section.

Fix:
- Add a subtle background gradient instead of flat white:
```tsx
style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 50%, #F8FAFC 100%)' }}
```
- Or better: use a light indigo tint: `background: linear-gradient(180deg, #EEF2FF 0%, #FFFFFF 100%)`
- Add a decorative element: a subtle grid pattern or dot pattern behind the text (CSS only, no images)
- Make the heading bigger: `text-3xl md:text-4xl`
- The email input + button combo: increase height to `h-14`, add `shadow-sm` to input, make button `px-8`

### Fix 11: Footer - Tighten spacing

File: `src/components/marketing/Footer.tsx`

Not seen in the screenshots but likely needs:
- Reduce top padding slightly
- Add a subtle top border: `border-t` with `var(--m-border)`
- Make the bottom copyright line smaller and more muted

### Fix 12: Global spacing and section transitions

File: `src/app/(marketing)/page.tsx`

The alternating white/gray sections are too uniform. Add variety:
- Every section currently uses `py-20 md:py-24`. Vary it:
  - Hero: `py-20 md:py-28` (more breathing room)
  - Problem stats: `py-16 md:py-24`
  - Mini demo: `py-20 md:py-28` (needs space, it's interactive)
  - How it works: `py-16 md:py-24`
  - Use cases: `py-16 md:py-20`
  - Comparison: `py-16 md:py-24`
  - Pricing teaser: `py-16 md:py-20`
  - CTA: `py-20 md:py-28`

### Fix 13: Section headings - Add subheadings consistently

Several sections only have a heading with no subheading. The visual rhythm feels monotonous. Add subtle subheadings where missing:
- "Built for the teams that own customer success" -> add below: "Four ways companies use interactive challenges to reduce churn and drive adoption."
- "From docs to interactive challenge in minutes" -> add below: "No content team needed. No months of setup. Just paste a URL."

### Fix 14: Navbar - Increase logo quality and CTA button size

File: `src/components/marketing/Navbar.tsx`

- The logo in the navbar is 160x28. If the logo file is high-res, that's fine. If it looks blurry, increase to `width={180} height={32}`
- "Get Early Access" button: add `shadow-sm` and increase padding: `px-6 py-3`
- Ensure the backdrop blur is working (it is in the code, but verify in browser)

### Fix 15: Add Framer Motion fade-in animations on scroll

This is the single biggest thing that makes a site feel polished vs. amateur. Every section should fade in as you scroll to it.

Create a reusable wrapper component:

File: `src/components/marketing/FadeIn.tsx`
```tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
```

Then wrap each major section's content in `<FadeIn>`. For grids (stat cards, use case cards, how it works steps), stagger the children:
```tsx
<FadeIn delay={0}>Card 1</FadeIn>
<FadeIn delay={0.1}>Card 2</FadeIn>
<FadeIn delay={0.2}>Card 3</FadeIn>
```

Framer Motion is already installed in the project. This is the highest-impact change for perceived quality.

## PRIORITY ORDER

Do these in this order (highest impact first):
1. Fix 15 (scroll animations - biggest visual upgrade)
2. Fix 2 (hero typography)
3. Fix 1 (hero scorecard)
4. Fix 4 (stat numbers)
5. Fix 3 (logo marquee scroll)
6. Fix 5 (mini demo pills)
7. Fix 10 (CTA section weight)
8. Fix 6 (how it works connectors)
9. Fix 8 (comparison table)
10. Fix 9 (pricing cards)
11. Fix 7 (use case cards)
12. Fix 12 (global spacing)
13. Fix 13 (subheadings)
14. Fix 14 (navbar)
15. Fix 11 (footer)

## REFERENCE SITES

Open these in a browser for visual reference while building:
- https://linear.app (hero layout, section spacing, overall feel)
- https://cal.com (pricing cards, comparison table)
- https://resend.com (typography, minimal elegance)
- https://dub.co (hero animation, scroll animations)

## RULES
- Do NOT change any text/copy content
- Do NOT change routing or page structure
- Do NOT add new npm packages (Framer Motion and Lucide are already installed)
- Do NOT use em dashes in any text you add
- Keep the existing CSS variable system (--m-bg, --m-accent, etc.)
- Test on mobile after each fix (responsive must not break)
