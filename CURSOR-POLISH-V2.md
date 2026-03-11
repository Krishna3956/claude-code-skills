# Design Polish V2 - Make It Look Professional

Paste this entire file as your first message in Cursor.

---

## CONTEXT

The marketing website for How Well You Know is built and functional but looks amateur.
Three root causes: (1) yellow accent color kills trust, (2) no product visuals anywhere,
(3) every section has the same visual weight. Fix all three.

DO NOT change any text content, page structure, routing, or functionality unless
explicitly instructed below.

---

## PRIORITY 1: FIX THE COLOR SCHEME

The current accent is yellow (#E5B800). Change it back to indigo across the entire site.

File: `src/app/globals.css`

Change these CSS variables:
```
--m-accent: #6366F1;
--m-accent-hover: #4F46E5;
--m-accent-light: #EEF2FF;
```

Keep the yellow ONLY in the logo files. The logo can be yellow. The site UI is indigo.

Also change in globals.css the quiz-side variables if they reference yellow:
```
--accent: #6366F1;
--accent-dim: #4F46E5;
```

File: `src/app/(marketing)/page.tsx`
- Hero "Get Early Access" button: change `color: "#1a1a2e"` to `color: "#FFFFFF"`
- Hero scorecard glow: change `rgba(229, 184, 0, 0.15)` to `rgba(99, 102, 241, 0.15)`
- Hero scorecard border: change `rgba(229, 184, 0, 0.25)` to `rgba(99, 102, 241, 0.25)`
- Stat numbers gradient: change from `#E5B800`/`#C49E00` to `#6366F1`/`#8B5CF6`

File: ALL marketing components and pages
- Search for any hardcoded `#E5B800`, `#C49E00`, `#FDF8E1` and replace with the
  equivalent indigo values (`#6366F1`, `#4F46E5`, `#EEF2FF`)
- Search for `color: "#1a1a2e"` on buttons (this was dark text on yellow bg) and
  change to `color: "#FFFFFF"` (white text on indigo bg)

After this change, every button, link, badge, and highlight should be indigo.
Test by scrolling through the entire homepage to verify nothing is still yellow.

---

## PRIORITY 2: HERO RIGHT SIDE - REAL PRODUCT VISUAL

The current hero right side is a hardcoded fake scorecard with tiny vertical bars.
Replace it with a REAL product screenshot approach.

File: `src/app/(marketing)/page.tsx` lines ~134-194

Replace the entire hero right-side div with a browser-frame mockup:

```tsx
<FadeIn delay={0.2}>
  <div className="flex-1 flex justify-center">
    <div
      className="relative"
      style={{
        transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)',
        animation: 'float 4s ease-in-out infinite',
      }}
    >
      {/* Browser chrome frame */}
      <div
        className="overflow-hidden rounded-xl shadow-2xl"
        style={{
          boxShadow: '0 25px 60px rgba(99, 102, 241, 0.15), 0 10px 30px rgba(0, 0, 0, 0.1)',
          maxWidth: '440px',
        }}
      >
        {/* Browser top bar */}
        <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: '#F1F5F9' }}>
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <div
            className="ml-2 flex-1 rounded-md px-3 py-1 text-[10px]"
            style={{ background: '#E2E8F0', color: '#94A3B8' }}
          >
            howwellyouknow.com/play/chatgpt/results
          </div>
        </div>
        {/* Actual scorecard content - this is a screenshot or rebuilt inline */}
        <div
          className="flex flex-col items-center gap-4 p-8"
          style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}
        >
          <div className="rounded-xl bg-white p-3 shadow-lg">
            <Image
              src="/logos/chatgpt.svg"
              alt="ChatGPT"
              width={40}
              height={40}
            />
          </div>
          <p className="text-xs uppercase tracking-widest text-gray-400">
            Your Scorecard
          </p>
          <p className="text-6xl font-extrabold" style={{ color: '#6366F1' }}>
            78<span className="text-xl font-normal text-gray-400">/100</span>
          </p>
          <p className="text-xl font-bold text-white">The Power User</p>
          {/* Radar chart replacement - horizontal skill bars */}
          <div className="w-full max-w-[280px] mt-2 flex flex-col gap-2.5">
            {[
              { name: 'Prompting', pct: 92 },
              { name: 'Plugins', pct: 65 },
              { name: 'Memory', pct: 48 },
              { name: 'Vision', pct: 78 },
              { name: 'Code Interpreter', pct: 88 },
            ].map((skill) => (
              <div key={skill.name} className="flex items-center gap-3">
                <span className="w-24 text-right text-[11px] text-gray-400">{skill.name}</span>
                <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${skill.pct}%`,
                      background: 'linear-gradient(90deg, #6366F1, #8B5CF6)',
                    }}
                  />
                </div>
                <span className="w-8 text-[11px] text-gray-400">{skill.pct}%</span>
              </div>
            ))}
          </div>
          {/* Share buttons */}
          <div className="mt-3 flex gap-2">
            <div className="rounded-lg px-4 py-2 text-[11px] font-medium text-white" style={{ background: 'rgba(99, 102, 241, 0.3)' }}>
              Share on LinkedIn
            </div>
            <div className="rounded-lg px-4 py-2 text-[11px] font-medium text-white" style={{ background: 'rgba(255,255,255,0.1)' }}>
              Share on X
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</FadeIn>
```

This looks like a REAL browser showing a REAL scorecard. The 3D rotation + browser
chrome makes it feel like an actual product screenshot, not a flat mockup. The
horizontal skill bars are much more readable than tiny vertical lines.

---

## PRIORITY 3: ADD PRODUCT VISUALS TO KEY PAGES

### How It Works page (`src/app/(marketing)/how-it-works/page.tsx`)

The "What your users see" section (Welcome -> 6 rounds -> Scorecard) is just text.
Add visual mockup cards for each step:

For each of the 3 steps, wrap it in a card that looks like a phone/device frame:
```tsx
<div
  className="flex-1"
>
  <div
    className="mx-auto max-w-[260px] overflow-hidden rounded-2xl border shadow-lg"
    style={{ borderColor: 'var(--m-border)' }}
  >
    {/* Step preview area */}
    <div className="p-6" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
      <div className="text-center">
        <div
          className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
          style={{ background: 'var(--m-accent)' }}
        >
          {s.step}
        </div>
        <h3 className="text-base font-semibold text-white">{s.title}</h3>
        <p className="mt-2 text-xs text-gray-400">{s.desc}</p>
      </div>
    </div>
  </div>
</div>
```

### Use Case pages (all 4: onboarding, community, marketing, documentation)

Add FadeIn animations to every section. Import FadeIn and wrap sections.

The Before vs After table on the onboarding page: highlight the "After" column cells
with a light indigo background (#EEF2FF) to visually distinguish them.

---

## PRIORITY 4: VISUAL RHYTHM AND CONTRAST

### Homepage section backgrounds

Currently it's monotonous white/gray. Add more contrast:

File: `src/app/(marketing)/page.tsx`

- **Problem stats section**: Change background to a very subtle gradient:
  `background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)'`

- **Comparison table section**: Make it more dramatic. Use a dark background:
  ```
  style={{ background: '#0F172A' }}
  ```
  And change ALL text colors in that section to white/light:
  - Heading: `color: '#FFFFFF'`
  - Subheading: `color: '#94A3B8'`
  - Table text: `color: '#CBD5E1'` for regular cells, `color: '#FFFFFF'` for HWYK column
  - Table header: muted white
  - HWYK column background: `rgba(99, 102, 241, 0.15)` instead of `var(--m-accent-light)`
  - Table border: `rgba(255,255,255,0.1)` instead of `var(--m-border)`
  - Row label: `color: '#E2E8F0'`

  This creates a visual "break" in the page. It says "pay attention, this is important."
  Stripe, Linear, and Vercel all use dark sections mid-page for their comparison/feature
  sections.

- **CTA section**: Add subtle dot grid pattern behind. Use a pseudo-element or inline SVG:
  ```tsx
  <section
    id={id}
    className="relative overflow-hidden py-20 md:py-28"
    style={{ background: 'linear-gradient(180deg, #EEF2FF 0%, #FFFFFF 50%, #EEF2FF 100%)' }}
  >
    {/* Decorative dot pattern */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: 'radial-gradient(#6366F1 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    />
    {/* ... rest of CTA content with relative z-10 */}
  </section>
  ```

---

## PRIORITY 5: MINI DEMO - ADD TOOL PILLS

File: `src/components/marketing/MiniDemo.tsx`

The "start" state is boring. Add tool selection pills before the Start button:

Add a state for selected tool (default: "chatgpt"). Show 4 pills:
```tsx
const TOOLS = [
  { slug: 'chatgpt', name: 'ChatGPT', logo: '/logos/chatgpt.svg' },
  { slug: 'figma', name: 'Figma', logo: '/logos/figma.svg' },
  { slug: 'notion', name: 'Notion', logo: '/logos/notion.png' },
  { slug: 'cursor', name: 'Cursor', logo: '/logos/cursor.png' },
];
```

In the start state, render pills above the Start button:
```tsx
<div className="mb-6 flex flex-wrap justify-center gap-2">
  {TOOLS.map((tool) => (
    <button
      key={tool.slug}
      onClick={() => setSelectedTool(tool.slug)}
      className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all"
      style={{
        borderColor: selectedTool === tool.slug ? 'var(--m-accent)' : 'var(--m-border)',
        background: selectedTool === tool.slug ? 'var(--m-accent-light)' : 'var(--m-bg)',
        color: selectedTool === tool.slug ? 'var(--m-accent)' : 'var(--m-text-secondary)',
      }}
    >
      <Image src={tool.logo} alt={tool.name} width={20} height={20} className="rounded" />
      {tool.name}
    </button>
  ))}
</div>
```

And change "Try 3 quick questions" to "Try 3 {selectedToolName} questions".

The completion state should show two buttons:
1. "Play the full challenge" -> links to /play/{selectedTool}
2. "Get this for your product" -> links to #early-access

---

## PRIORITY 6: PRICING SECTION ON HOMEPAGE - RESTORE THE URGENCY

File: `src/app/(marketing)/page.tsx` lines ~450-481

The pricing section heading was changed to "Simple pricing that grows with you" which
is generic. The spec said "Starts at $49/mo. Early access is half that." which creates
urgency and shows the deal. Change it back:

```tsx
<h2>Starts at $49/mo. Early access is half that.</h2>
<p>Founding members lock in 50% off for life. $25/mo for Pro. $75/mo for Business.
We're only opening this to a small group.</p>
```

The pricing PAGE can say "Simple pricing that grows with you" (appropriate for a
dedicated pricing page). But the homepage teaser needs the urgency hook.

---

## PRIORITY 7: SPACING AND TYPOGRAPHY CONSISTENCY

### Section headings
All section headings should be `text-2xl font-bold md:text-4xl` (currently some are
`md:text-3xl`). Bigger headings = more premium feel.

### Card border radius
All cards: `rounded-2xl` not `rounded-xl`. Larger radius = more modern.

### Button sizes
All CTA buttons site-wide: minimum `px-6 py-3.5` (currently some are `py-3`).
The "Get Early Access" in the navbar: `px-6 py-2.5 shadow-sm`.

---

## RULES
- Do NOT use em dashes in any text
- Do NOT change page text/copy content except where explicitly noted above
- Do NOT add new npm packages
- Test every change on mobile (responsive must not break)
- After all changes, scroll through the entire homepage top to bottom and verify:
  1. No yellow anywhere in the UI (logos are OK to keep their original colors)
  2. All buttons are readable (white text on indigo)
  3. Dark comparison section looks good with white text
  4. Hero scorecard looks like a real browser showing real output
  5. CTA section feels important (gradient bg, dot pattern)
