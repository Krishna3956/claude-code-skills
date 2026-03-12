# How Well You Know - Quiz Blueprint

This document is the complete blueprint for creating quizzes on the "How Well You Know" platform. Follow this guide to create a new quiz in under 10 minutes.

---

## 1. Overview

**What is it?** A single-page interactive quiz that tests how well someone knows a specific tool. No signup, no backend, no database. Pure client-side Next.js app hosted on Vercel.

**Each quiz has:**
- 15 challenges across 6 rounds
- 5 different challenge types (not just multiple choice)
- 5-7 skill dimensions scored independently (only dimensions with actual questions appear)
- Spider-web radar chart showing strengths/weaknesses
- Downloadable scorecard image
- Share to X/LinkedIn with pre-filled text
- ~3 minutes to complete
- Vercel Analytics with per-quiz event tracking
- Brand-authentic colors, fonts, and logos
- Per-quiz browser tab title ("How {Tool} Are You?")
- Per-quiz favicon (the tool's brand logo)

**URL structure:** `www.howwellyouknow.com/play/{tool-slug}`

---

## 2. Architecture: Template System

The platform uses a **template system** where all game logic, UI, scoring, and results are shared components. Each quiz is just a **config file** + **3 tiny route files** + **1 logo file**.

```
src/
├── components/quiz/           # SHARED (never duplicate)
│   ├── types.ts               # All TypeScript types
│   ├── scoring.ts             # Generic scoring engine
│   ├── QuizPage.tsx           # Full quiz game component
│   ├── ResultsPage.tsx        # Results page component
│   ├── QuizLayout.tsx         # Themed layout (loads fonts, sets CSS vars)
│   └── index.ts               # Barrel exports
├── quizzes/                   # ONE CONFIG FILE PER QUIZ
│   ├── chatgpt.tsx
│   ├── cursor.tsx
│   ├── figma.tsx
│   └── {new-tool}.tsx         # <-- You create this
├── app/play/{tool-slug}/      # 3 THIN ROUTE FILES PER QUIZ
│   ├── layout.tsx             # Imports config, wraps in QuizLayout, exports metadata + favicon
│   ├── page.tsx               # 4 lines: imports config, renders QuizPage
│   └── results/page.tsx       # 4 lines: imports config, renders ResultsPage
└── public/logos/              # LOGO FILES (any format: SVG, PNG, JPG)
    ├── chatgpt.svg
    ├── cursor.png
    └── {new-tool}.{ext}       # <-- You add this
```

---

## 3. How to Create a New Quiz

### Step 1: Research the Brand

Before writing any code, research the tool's brand identity:

1. **Colors**: Find the tool's official brand colors (accent, background feel)
   - Check brandcolorcode.com, brandpalettes.com, or the tool's /brand page
   - Note the primary accent color hex code
   - Note whether their UI feels warm, cool, neutral, dark, or light
   - IMPORTANT: Visit the actual website and match the vibe. Don't guess.
   - HARD RULE: Never default to dark mode styling because it's convenient.
   - HARD RULE: Pick light vs dark based on the actual live site theme cues (`theme-color`, hero background, nav/background contrast).
   - HARD RULE: If the site is light-first, the quiz must be light-first. If the site is dark-first, the quiz must be dark-first.
2. **Font**: Find what typeface the tool uses on their website
   - Check fontofweb.com or inspect their site
   - Map to the closest Google Font (see font table below)
   - When in doubt, use Inter - it's the most common UI font
   - HARD RULE: Don't blindly use `inter` for all quizzes. Match the closest supported font when the brand is clearly distinct (e.g., Poppins, Open Sans, Space Grotesk, Geist).
3. **Logo**: Get the tool's actual brand logo
   - Check their /brand or /press page for downloadable assets
   - Accept any format: SVG, PNG, JPG
   - Save as `/public/logos/{tool-slug}.{ext}`
   - NEVER auto-generate placeholder logos. Use the real brand logo or ask the user to provide one.

### Step 2: Create the Config File

Create `src/quizzes/{tool-slug}.tsx`. This is the ONLY substantial file you write.

```typescript
import type { QuizConfig } from "@/components/quiz/types";

export const {tool}Config: QuizConfig = {
  // Identity
  slug: "{tool-slug}",
  toolName: "{Tool Name}",
  tagline: "6 rounds. ~3 min. No {thing} required.",
  subtitle: "Just you vs. {Tool} trivia.",

  // Typography (pick from available fonts - see font table)
  sansFont: "inter",           // Main body font
  serifFont: "instrument-serif", // Heading font

  // Colors (from brand research)
  accentColor: "#XXXXXX",       // Primary brand color
  accentColorDim: "#XXXXXX",    // Slightly darker variant
  accentColorSubtle: "rgba(X,X,X,0.07)", // Very light tint
  bgColor: "#XXXXXX",           // Page background (match the tool's UI feel)
  bgElevated: "#FFFFFF",        // Card backgrounds
  bgSurface: "#FFFFFF",         // Surface backgrounds
  bgSurfaceLight: "#XXXXXX",    // Light surface (slightly tinted toward brand)
  textColor: "#XXXXXX",         // Primary text (dark)
  textSecondary: "#XXXXXX",     // Secondary text
  textTertiary: "#XXXXXX",      // Tertiary/muted text
  borderColor: "#XXXXXX",       // Borders
  borderSubtle: "#XXXXXX",      // Subtle borders
  scorecardBg: "#XXXXXX",       // Dark scorecard background
  scorecardAccentColor: "#XXXXXX", // OPTIONAL: override accent for dark scorecard (see Scorecard section)
  scorecardDivider: "#XXXXXX",  // Scorecard divider lines
  scorecardLabelColor: "#XXXXXX", // Scorecard label text
  scorecardGridColor: "#XXXXXX",  // Radar chart grid lines

  // Logo (use img tag pointing to file in /public/logos/)
  // Adjust width/height/borderRadius/objectFit based on the logo shape:
  //   - Square icon logos: width={44-56} height={44-56} borderRadius: 10-12
  //   - Wordmark logos: width={100-140} height={28-44} no borderRadius
  //   - Always include objectFit: "contain"
  logo: (<img src="/logos/{tool-slug}.png" alt="{Tool}" width={44} height={44} style={{ borderRadius: 10, objectFit: "contain" }} />),

  // Scorecard logo (OPTIONAL - only needed if the homepage logo is invisible on the dark scorecard)
  // The scorecard renders the logo inside a white pill, so most logos work fine.
  // Only set this if you need a completely different logo variant for the scorecard.
  // scorecardLogo: (<img src="/logos/{tool-slug}-white.svg" ... />),

  // Analytics
  analyticsPrefix: "{tool-slug}",

  // Dimensions (7 skill categories for the radar chart)
  // CRITICAL: Every dimension listed here MUST have at least 1 challenge assigned to it.
  // The scoring engine filters out dimensions with 0 questions, so they won't appear
  // on the scorecard. But having a label for an unused dimension is misleading and wasteful.
  // See "Dimension Coverage" section below for the rules.
  dimensionLabels: {
    memory: "{Dimension 1 Label}",
    orchestration: "{Dimension 2 Label}",
    automation: "{Dimension 3 Label}",
    extensibility: "{Dimension 4 Label}",
    workflows: "{Dimension 5 Label}",
    prompting: "{Dimension 6 Label}",
    bestPractices: "{Dimension 7 Label}",
  },

  // Archetypes (7 score-based titles)
  archetypes: [
    { title: "{Top Title}", emoji: "X", description: "...", minScore: 90, maxScore: 100 },
    { title: "...", emoji: "X", description: "...", minScore: 80, maxScore: 89 },
    { title: "...", emoji: "X", description: "...", minScore: 70, maxScore: 79 },
    { title: "...", emoji: "X", description: "...", minScore: 60, maxScore: 69 },
    { title: "...", emoji: "X", description: "...", minScore: 50, maxScore: 59 },
    { title: "...", emoji: "X", description: "...", minScore: 40, maxScore: 49 },
    { title: "{Bottom Title}", emoji: "X", description: "...", minScore: 0, maxScore: 39 },
  ],

  // Challenges (15 challenges across 6 rounds)
  challenges: [
    // See challenge types below
  ],

  // Rounds (always this structure)
  rounds: [
    { name: "Truth or Myth", icon: "?", ids: [1, 2, 3, 4], tagline: "Real feature or total BS?" },
    { name: "This or That", icon: "vs", ids: [5, 6, 7], tagline: "Pick the smarter move" },
    { name: "Quick Pick", icon: ">>", ids: [8, 9, 10], tagline: "Name that feature" },
    { name: "Speed Round", icon: "::", ids: [11, 12], tagline: "Tap fast, think faster" },
    { name: "Odd One Out", icon: "//", ids: [13, 14], tagline: "Spot the fake" },
    { name: "Final Boss", icon: "*", ids: [15], tagline: "One shot. Expert level." },
  ],
};
```

**IMPORTANT: Round icons are ignored by the template.** The QuizPage component renders clean SVG icons based on the round name automatically. The icon field in rounds exists for backward compatibility but is not displayed.

### Step 3: Add the Logo File

Save the tool's logo as `/public/logos/{tool-slug}.{ext}`. Guidelines:
- Use the actual brand logo (SVG, PNG, or JPG are all fine)
- NEVER create auto-generated placeholder logos
- Rename uploaded files to `{tool-slug}.{ext}` for consistency
- Ensure the logo works on a light background (no white-on-white logos)
- For wordmark logos (text-based), use wider dimensions (e.g., width={120} height={36})
- For square icon logos, use equal dimensions (e.g., width={44-56} height={44-56})

### Step 4: Create 3 Route Files

Create these 3 files (copy-paste, change the import):

**`src/app/play/{tool-slug}/layout.tsx`:**
```typescript
import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { {tool}Config } from "@/quizzes/{tool-slug}";

export const metadata: Metadata = {
  title: "How {Tool Name} Are You?",
  description: "6 rounds. ~3 min. No signup. Test your {Tool Name} skills and get a shareable scorecard.",
  icons: { icon: "/logos/{tool-slug}.{ext}" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={{tool}Config}>{children}</QuizLayout>;
}
```

**`src/app/play/{tool-slug}/page.tsx`:**
```typescript
"use client";
import { QuizPage } from "@/components/quiz";
import { {tool}Config } from "@/quizzes/{tool-slug}";

export default function Page() {
  return <QuizPage config={{tool}Config} />;
}
```

**`src/app/play/{tool-slug}/results/page.tsx`:**
```typescript
"use client";
import { ResultsPage } from "@/components/quiz";
import { {tool}Config } from "@/quizzes/{tool-slug}";

export default function Page() {
  return <ResultsPage config={{tool}Config} />;
}
```

**CRITICAL: The layout.tsx must include all three metadata fields:**
1. `title` - "How {Tool Name} Are You?" (this is the browser tab title)
2. `description` - one-liner about the quiz
3. `icons` - `{ icon: "/logos/{tool-slug}.{ext}" }` (this is the browser tab favicon)

### Step 5: Deploy

Push to `main` and Vercel auto-deploys. Quiz is live at `www.howwellyouknow.com/play/{tool-slug}`.

---

## 4. Challenge Types (5 Types)

### Type 1: Truth or Myth (ids 1-4)
Binary true/false. Start easy, build confidence.
```typescript
{
  type: "truth_or_myth",
  id: 1,
  dimension: "memory",
  statement: "Statement about the tool that may or may not be true",
  isTrue: true,
  explanation: "Why this is true/false and what users should know",
}
```
**IMPORTANT:** The statement text is displayed as-is. Do NOT wrap it in quotation marks. The UI does NOT add quotes around statements.

### Type 2: This or That (ids 5-7)
Scenario with two options. Tests decision-making.
```typescript
{
  type: "this_or_that",
  id: 5,
  dimension: "orchestration",
  scenario: "You want to do X. What's the best approach?",
  optionA: "First option",
  optionB: "Second option",
  correct: "A",
  explanation: "Why A is better and what users should learn",
}
```

### Type 3: Quick Pick (ids 8-10)
Multiple choice (3-4 options) with a scenario.
```typescript
{
  type: "quick_pick",
  id: 8,
  dimension: "workflows",
  scenario: "You want to do X. What feature helps?",
  blank: "The correct answer text",
  options: ["The correct answer text", "Wrong option 1", "Wrong option 2"],
  explanation: "Why this answer is correct and what it teaches",
}
```

### Type 4: Speed Pick (ids 11-12)
Tap all correct items from a mixed list. Timed (15 seconds).
```typescript
{
  type: "speed_pick",
  id: 11,
  dimension: "extensibility",
  prompt: "Tap everything that's a real {Tool} feature!",
  correctItems: ["Real feature 1", "Real feature 2", "Real feature 3", "Real feature 4"],
  wrongItems: ["Fake feature 1", "Fake feature 2", "Fake feature 3", "Fake feature 4"],
  timeLimit: 15,
  explanation: "Which ones are real and why they matter",
}
```

### Type 5: Odd One Out (ids 13-14)
Pick the fake from 4 items.
```typescript
{
  type: "odd_one_out",
  id: 13,
  dimension: "bestPractices",
  prompt: "One of these is NOT a real {Tool} feature. Which one?",
  items: ["Real 1", "Real 2", "Real 3", "Fake"],
  oddItem: "Fake",
  explanation: "Why the fake one doesn't exist and what the real ones do",
}
```

---

## 5. Content Guidelines

### Educational Depth
The quiz is NOT just a test. It's a teaching tool. Each question should:
- Reveal a feature most people don't know about
- Explain WHY the feature matters, not just that it exists
- Show real use cases, not just feature names
- Be specific enough to be useful, not so granular it's irrelevant

### What Makes Good Questions
- "ChatGPT can remember things across conversations" (reveals Memory feature)
- "You can build custom GPTs with uploaded knowledge files" (reveals Custom GPTs)
- "Figma Variables can create entire theme systems" (reveals Variables power)

### What Makes Bad Questions
- "What year was ChatGPT released?" (trivia, not educational)
- "What's the keyboard shortcut for X?" (too granular)
- "Is ChatGPT made by OpenAI?" (too obvious)
- "Tool X describes itself as..." (third-person marketing copy, vague, not operator-level)

### Opening Question Rule (Mandatory)
- Questions 1-3 must test practical product knowledge, not brand slogans or generic positioning lines.
- Do not write third-person framing like "Tool X claims..." or "Tool X describes itself...".
- Write questions as direct capability checks a real user/operator would recognize from actual usage.

### Formatting Rules
- **No em dashes** - use regular dashes with spaces, commas, or periods instead
- **No quotation marks around statements** - the UI displays statement text as-is, without wrapping in quotes. Never add `"` or curly quotes around truth_or_myth statements or any challenge text.

---

## 6. Dimension Coverage (CRITICAL)

This is the most important data integrity rule on the platform. Getting this wrong produces fake results.

### The Rule
**Every dimension that appears in `dimensionLabels` MUST have at least 1 challenge assigned to it via the `dimension` field.** The scoring engine will silently filter out dimensions with 0 questions, so they won't crash anything - but it means you declared a skill category that the user was never tested on, which is misleading.

### How to Distribute 15 Challenges Across 7 Dimensions
With 15 challenges and 7 dimensions, aim for 2-3 questions per dimension. A good distribution:
- 3 dimensions with 3 questions each = 9
- 3 dimensions with 2 questions each = 6
- Total = 15

If a tool genuinely doesn't have 7 distinct skill areas, it's OK to use fewer dimensions (5 or 6). The radar chart and scorecard adapt automatically. But you MUST still provide labels for all 7 dimensions in `dimensionLabels` (the TypeScript type requires it) - just know that unused ones won't be displayed.

### Self-Check After Writing Challenges
After writing all 15 challenges, count the `dimension` values. Every dimension key should appear at least once:
```
memory: 2, orchestration: 2, automation: 2, extensibility: 2,
workflows: 2, prompting: 2, bestPractices: 3  -> GOOD (all 7 covered)

memory: 0, orchestration: 4, automation: 0, extensibility: 3,
workflows: 2, prompting: 4, bestPractices: 2  -> BAD (memory and automation have 0)
```

### What Happens If You Get This Wrong
If a dimension has 0 questions, the scoring engine excludes it from results. The user sees a radar chart with 5 or 6 spokes instead of 7, and the dimension bars only show the tested dimensions. This is correct behavior - but it means you wasted a dimension label and the radar chart looks asymmetric. The fix is to redistribute your challenges so every dimension has at least 1 question.

### Past Mistakes (for reference)
These quizzes were created with dimensions that had 0 questions. The scoring engine now handles this gracefully (filters them out), but ideally every quiz should cover all 7 dimensions:
- **Canva**: `orchestration` had 0 questions (labeled "Design Tools" but never tested)
- **Docker**: `workflows` had 0 questions (labeled "Advanced Features" but never tested)
- **Midjourney**: `memory` and `automation` had 0 questions each (labeled "Image Understanding" and "Workflows & Speed" but never tested)

---

## 7. Data Integrity Rules (DO NOT BREAK)

These rules exist because we broke them in the past. Every single one caused a real bug.

### Rule 1: No Phantom Dimensions
Every dimension in `dimensionLabels` must have at least 1 challenge with that dimension. If you declare 7 dimensions, you need 7 dimensions used across your 15 challenges. Count them.

**What went wrong:** Canva, Docker, and Midjourney had dimensions with 0 questions. The old scoring engine defaulted those to a score of 50 - a completely fabricated number that appeared on the radar chart and scorecard as if the user had been tested. Users saw "Design Tools: 50" on their Canva scorecard when they were never asked a single question about design tools.

### Rule 2: No Fake Scores
The scoring engine must NEVER invent a score for a dimension that wasn't tested. If `possible === 0` for a dimension, that dimension must be excluded from results entirely. The current engine does this correctly - do not revert this behavior.

### Rule 3: Challenge Type Must Match Round
- Round "Truth or Myth" (ids 1-4): all challenges must be `type: "truth_or_myth"`
- Round "This or That" (ids 5-7): all challenges must be `type: "this_or_that"`
- Round "Quick Pick" (ids 8-10): all challenges must be `type: "quick_pick"`
- Round "Speed Round" (ids 11-12): all challenges must be `type: "speed_pick"`
- Round "Odd One Out" (ids 13-14): all challenges must be `type: "odd_one_out"`
- Round "Final Boss" (id 15): can be any type (usually `truth_or_myth`)

### Rule 4: Answer Must Be Findable
- `quick_pick`: the `blank` value MUST exist in the `options` array (exact string match)
- `odd_one_out`: the `oddItem` value MUST exist in the `items` array (exact string match)
- `speed_pick`: `correctItems` and `wrongItems` must not overlap (no item in both arrays)
- `this_or_that`: `correct` must be exactly `"A"` or `"B"`

### Rule 5: IDs Must Be Sequential 1-15
Every quiz must have exactly 15 challenges with IDs 1 through 15. No duplicates, no gaps, no IDs outside this range. The round config must reference all 15 IDs with no orphans.

### Rule 6: Archetype Ranges Must Cover 0-100
The archetypes array must have ranges that cover every possible score from 0 to 100 with no gaps and no overlaps. Standard structure:
```
0-39, 40-49, 50-59, 60-69, 70-79, 80-89, 90-100
```

### Rule 7: Results URL Must Be Opaque
Result URLs use Base64-encoded payloads with a checksum. Users cannot see or modify their scores. Never revert to plain `?s=&d=&p=` encoding for new quizzes.

### Rule 8: Scorecard Shows Only Real Data
The scorecard (radar chart, dimension bars, score number) must only display data from dimensions that had actual questions. No defaults, no placeholders, no hardcoded values.

### Rule 9: No favicon.ico in src/app/
Never create or place a `favicon.ico` file in `src/app/`. Next.js treats it as a special file-based convention that silently overrides every `icons` metadata export in every layout across the entire app. Per-quiz favicons will stop working with no error or warning.

**What went wrong:** A `favicon.ico` in `src/app/` was overriding all 25 per-quiz favicons. Every quiz tab showed the same Claude Code logo instead of its own brand logo. The fix was moving it to `public/default-favicon.ico` and referencing it via the root layout's metadata `icons` field. The root layout now uses the HWYK monogram (`/logos/hwyk-logo.svg`) as the default favicon for all non-quiz pages.

---

## 8. Available Fonts

The template pre-loads these Google Fonts. Pick the one closest to the tool's brand:

| Font | Best For | Matches |
|------|----------|---------|
| `dm-sans` | Default, warm brands | Claude/Anthropic |
| `inter` | Clean, geometric UI | ChatGPT, Notion, Linear, GitHub Copilot, Slack, most SaaS tools |
| `space-grotesk` | Technical, condensed | Cursor |
| `plus-jakarta-sans` | Modern grotesque | Figma |
| `ibm-plex-sans` | Precise, Scandinavian | Perplexity |
| `outfit` | Modern, clean tech | Windsurf |
| `geist` | Vercel ecosystem | Vercel |
| `open-sans` | Friendly, readable | Postman |
| `poppins` | Geometric, rounded | Canva |
| `nunito-sans` | Rounded, approachable | Lovable |

Serif fonts (for headings):
| Font | Best For |
|------|----------|
| `instrument-serif` | Default, editorial |
| `playfair-display` | Bold, dramatic |
| `lora` | Warm, readable |
| `source-serif-4` | Clean, modern serif |

**When in doubt, use `inter` for sans and `instrument-serif` for serif.**

---

## 9. Color Strategy

The goal is to make each quiz feel like the company itself built it.

### How to Pick Colors
1. **Accent color**: The tool's primary brand color (from their logo/brand page)
2. **Background**: Match the tool's actual website feel
   - Warm cream (#FAFxFx) for warm brands (Notion, Lovable)
   - Cool white (#F4F5Fx) for cool brands (Linear, Perplexity)
   - Pure white (#FAFAFA or #FFFFFF) for minimal brands (Vercel, Cursor, Midjourney)
   - IMPORTANT: Keep backgrounds neutral. Don't tint the background with the accent color unless the tool's actual website does this. Lavender/pink/blue tinted backgrounds look off-brand for most tools.
3. **Text colors**: Derive from the tool's actual text colors
4. **Surface colors**: Keep neutral or very subtly tinted
5. **Scorecard**: Always dark (the tool's darkest color)
6. **Scorecard accent**: If the tool's `accentColor` is dark/black (e.g., Vercel #000000, Midjourney #1A1A1A, Notion #37352F, Cursor #2D2D2D), you MUST set `scorecardAccentColor` to a light color that is visible on the dark scorecard background. This color is used for the score number, radar chart, progress bars, top border, and gradient glow on the scorecard. Without it, all those elements will be invisible (black on black).

### Scorecard Accent Color Rules
Any `accentColor` darker than approximately `#4A4A4A` will be hard to see on the dark scorecard. Use this rule of thumb:
- **Bright/colorful accent** (e.g., #00A67E, #A259FF, #EF5B25): No override needed. The accent is already visible on dark.
- **Dark accent** (e.g., #000000, #1A1A1A, #37352F, #2D2D2D): Set `scorecardAccentColor` to a light variant:
  - Pure black brands (Vercel, Midjourney): use `#FFFFFF` (white)
  - Dark brown/grey brands (Notion): use a warm light grey like `#E0DFDC`
  - Dark grey brands (Cursor): use a silver grey like `#A0A0A0`

### Common Mistakes to Avoid
- Don't use Discord colors for non-Discord tools (e.g., #5865F2 is Discord blue, not Midjourney)
- Don't tint backgrounds with the accent color unless the brand actually does this
- Don't guess colors - visit the actual website and match what you see
- Ensure logos are visible on the chosen background (no white logos on white backgrounds)
- Don't forget `scorecardAccentColor` for dark-accent quizzes - the scorecard will look completely broken (invisible text, invisible chart) without it

---

## 10. Logo Guidelines

### File Naming
- Save as `/public/logos/{tool-slug}.{ext}` (e.g., `cursor.png`, `figma.svg`, `slack.png`)
- Any image format works: SVG, PNG, JPG

### Sizing in Config
Adjust the `logo` field based on the logo shape:

| Logo Type | Width | Height | Border Radius | Example |
|-----------|-------|--------|---------------|---------|
| Square icon | 44-56 | 44-56 | 10-12 | Cursor, Slack, Notion |
| Large square icon | 56-64 | 56-64 | 12-14 | Midjourney, Emergent |
| Wordmark (text logo) | 100-140 | 28-44 | 0-6 | HubSpot, Zapier |

Always include `objectFit: "contain"` in the style.

### Favicon
The layout.tsx `icons` metadata field sets the browser tab icon. Point it to the same logo file:
```typescript
icons: { icon: "/logos/{tool-slug}.{ext}" },
```

**CRITICAL: Never place a `favicon.ico` file in `src/app/`.** Next.js treats `src/app/favicon.ico` as a special file-based metadata convention that overrides ALL `icons` metadata in every layout, including child layouts. If one exists, no per-quiz favicon will ever load - they'll all show the root favicon instead.

**Default favicon rule:** The root layout (`src/app/layout.tsx`) uses the HWYK monogram (`/logos/hwyk-logo.svg`) as the default favicon. This applies to the homepage, brand guidelines, and any future non-quiz pages. Quiz pages override this with their own tool-specific favicon via their layout.tsx `icons` metadata. Never change the root favicon to anything other than the HWYK monogram.

---

## 11. Scorecard Design

The scorecard is the downloadable/shareable image users get after completing a quiz. It's the most important visual for virality - it's what people post on LinkedIn and X.

### Why Dark Background
The scorecard always uses a dark background (`scorecardBg`). This is intentional and should NOT be changed to match the quiz homepage theme. Reasons:
- **Social feed contrast**: LinkedIn and X have white/light backgrounds. A dark card pops dramatically and catches attention. A light card would blend in and get scrolled past.
- **Premium feel**: Dark cards look polished and "designed" - like Spotify Wrapped, Duolingo year-in-review, etc.
- **Save-worthy**: Users are more likely to screenshot/save a dark card because it looks like a finished product, not a webpage screenshot.

### Scorecard Layout (top to bottom)
1. **Accent top border** (3px) - brand color strip at the very top
2. **Accent gradient glow** - subtle gradient from accent color (9% opacity) fading to transparent over 120px
3. **Logo in white pill** - the brand logo sits inside a solid white (`#FFFFFF`) rounded container with 10px padding. This ensures ANY logo is visible on the dark background, regardless of whether the logo is dark, light, or colorful.
4. **"SCORECARD" label** - small uppercase tracking text
5. **Score** (large, accent-colored) - the main number (e.g., "73/100")
6. **Archetype title** - the fun title (e.g., "Prompt Crafter")
7. **Archetype description** - one-liner about the archetype
8. **Radar chart** - spider-web chart showing dimension scores
9. **Dimension bars** - horizontal progress bars for each dimension
10. **Footer** - "howwellyouknow.com" branding
11. **Save button** (hidden during download) - top-right corner

### Logo on Scorecard
The logo is rendered inside a white pill container (`background: #FFFFFF`, `padding: 10px`, `rounded-2xl`). This means:
- **Dark logos** (Vercel, Windsurf, Notion, Midjourney, Cursor, Zapier, HubSpot, GitHub Copilot) are clearly visible against the white surface
- **Colorful logos** (Figma, ChatGPT, Docker, Slack, etc.) look great - the white pill acts like an app icon container
- **Logos with their own backgrounds** (Canva, Linear, etc.) are neatly framed

The logo used is `config.scorecardLogo ?? config.logo` - so by default it uses the same logo as the homepage. Only set `scorecardLogo` if you need a completely different logo variant for the scorecard (rare).

### Scorecard Accent Color
The scorecard uses `config.scorecardAccentColor ?? config.accentColor` for all colored elements: score number, radar chart stroke/fill, progress bars, dimension scores, top border, and gradient glow.

For quizzes with dark accent colors (Vercel, Midjourney, Notion, Cursor), you MUST set `scorecardAccentColor` to a light color. Otherwise, all these elements are invisible (dark on dark). See the Color Strategy section for specific guidance.

### Current quizzes with scorecardAccentColor overrides

| Quiz | accentColor | scorecardAccentColor | Reason |
|------|-------------|---------------------|--------|
| Vercel | #000000 | #FFFFFF | Black accent invisible on black scorecard |
| Midjourney | #1A1A1A | #FFFFFF | Near-black invisible on dark scorecard |
| Notion | #37352F | #E0DFDC | Dark brown invisible on dark scorecard |
| Cursor | #2D2D2D | #A0A0A0 | Dark grey invisible on dark scorecard |

---

## 12. Analytics (Vercel Analytics)

Every quiz automatically tracks these events via `@vercel/analytics`. The `analyticsPrefix` in the config determines the event prefix.

### Events Tracked Per Quiz

| Event | When | Properties |
|-------|------|------------|
| `{prefix}_started` | User clicks "Let's Go" | - |
| `{prefix}_answer` | User picks an answer | `round`, `questionId`, `choice` |
| `{prefix}_question_result` | After answer is evaluated | `questionId`, `correct`, `questionIndex`, `totalQuestions` |
| `{prefix}_lock_in` | Speed round locked in | `questionId` |
| `{prefix}_next` | User advances to next question | `questionId`, `questionIndex` |
| `{prefix}_see_results` | User clicks final "See Results" | `questionId`, `questionIndex` |
| `{prefix}_completed` | All 15 questions answered | `score`, `correctCount`, `totalQuestions` |
| `{prefix}_results_viewed` | Results page loads | `score`, `archetype` |
| `{prefix}_share_x` | Shared on X | `score` |
| `{prefix}_share_li` | Shared on LinkedIn | `score` |
| `{prefix}_scorecard_dl` | Scorecard downloaded | `score`, `archetype` |
| `{prefix}_play_again` | Play again clicked | `score` |

This gives a full funnel: homepage view -> started -> per-question progress -> completion -> results -> share/download.

---

## 13. Scoring System

### How Scores Work
- Each challenge: correct = 1 point, wrong = 0
- Per-dimension score: `(earned / possible) * 100`
- Overall score: `(total earned / total possible) * 100`
- **Dimensions with 0 questions are EXCLUDED from results.** They do not appear on the radar chart, dimension bars, or scorecard. There is no default/fake score.

### URL Encoding (Stateless Results)
Results are encoded as an opaque, tamper-resistant Base64 token:
```
?r=eyJzIjo3MywiayI6WyJtZW1vcnkiLC...fQ.1k7f3a
```
The token contains:
- `s` = overall score
- `k` = array of dimension keys (only dimensions with questions)
- `d` = array of dimension scores (same order as keys)
- `p` = percentile

A checksum is appended after a `.` separator. If anyone modifies the token, the checksum fails and the results page shows "No results found." This prevents users from faking scores and downloading fake scorecards.

Old URLs using the plain `?s=&d=&p=` format still work for backward compatibility.

### Percentile Curve
```
Score >= 95 -> 99th percentile
Score >= 90 -> 96th
Score >= 80 -> 85th
Score >= 70 -> 68th
Score >= 60 -> 48th
Score >= 50 -> 30th
Score <  40 -> 8th
```

---

## 14. What's Shared vs. Per-Quiz

| Shared (never duplicate) | Per-Quiz (create new) |
|--------------------------|----------------------|
| `src/components/quiz/*` (all game logic) | `src/quizzes/{tool}.tsx` (config file) |
| `src/components/RadarChart.tsx` | `src/app/play/{tool}/layout.tsx` (with metadata + favicon) |
| `src/app/layout.tsx` | `src/app/play/{tool}/page.tsx` (4 lines) |
| `src/app/api/capture-email/route.ts` | `src/app/play/{tool}/results/page.tsx` (4 lines) |
| `src/lib/validate-email.ts` + `disposable-domains.ts` | `public/logos/{tool}.{ext}` (brand logo file) |
| `package.json` / deps | |
| `next.config.ts` | |

**To add a new quiz: 1 config file + 3 route files + 1 logo file. That's it.**

---

## 15. Existing Quizzes

| Quiz | Slug | Accent | Scorecard Accent | Font | Status |
|------|------|--------|-----------------|------|--------|
| Claude Code | `claude-code` | #D97757 (terracotta) | - | DM Sans | Template |
| ChatGPT | `chatgpt` | #00A67E (green) | - | Inter | Template |
| Cursor | `cursor` | #2D2D2D (black) | #A0A0A0 (silver) | Space Grotesk | Template |
| Figma | `figma` | #A259FF (purple) | - | Plus Jakarta Sans | Template |
| Notion | `notion` | #37352F (dark brown) | #E0DFDC (warm grey) | Inter | Template |
| Perplexity | `perplexity` | #20808D (teal) | - | IBM Plex Sans | Template |
| Windsurf | `windsurf` | #00B7A4 (teal-green) | - | Outfit | Template |
| Vercel | `vercel` | #000000 (black) | #FFFFFF (white) | Geist | Template |
| Postman | `postman` | #EF5B25 (orange) | - | Open Sans | Template |
| Linear | `linear` | #5E6AD2 (indigo) | - | Inter | Template |
| Lovable | `lovable` | #FF0105 (red) | - | Nunito Sans | Template |
| GitHub Copilot | `github-copilot` | #8534F3 (purple) | - | Inter | Template |
| Canva | `canva` | #7D2AE7 (purple) | - | Poppins | Template |
| Slack | `slack` | #4A154B (aubergine) | - | Inter | Template |
| Midjourney | `midjourney` | #1A1A1A (black) | #FFFFFF (white) | Inter | Template |
| Obsidian | `obsidian` | #8B5CF6 (purple) | - | Inter | Template |
| HubSpot | `hubspot` | #FF7A59 (coral) | - | Inter | Template |
| Airtable | `airtable` | #18BFFF (cyan) | - | Inter | Template |
| Zapier | `zapier` | #FF4F00 (orange) | - | Inter | Template |
| Emergent | `emergent` | #00BCD4 (teal) | - | Inter | Template |
| Replit | `replit` | #F26207 (orange) | - | Inter | Template |
| Bolt.new | `bolt` | #4F46E5 (indigo) | - | Inter | Template |
| Docker | `docker` | #1D63ED (blue) | - | Inter | Template |
| Gemini | `gemini` | #4285F4 (blue) | - | Inter | Template |
| Loom | `loom` | #625DF5 (purple) | - | Inter | Template |

---

## 16. Platform Branding ("Powered by" Badge & Logo Usage)

### Brand Assets Location
All HWYK brand assets live in `/public/logos/`:

| File | Description | Use When |
|------|-------------|----------|
| `hwyk-logo.svg` | Monogram (hwyk square icon), light bg | Light backgrounds, with white bg |
| `hwyk-logo-dark.svg` | Monogram, dark bg | Dark backgrounds, with dark bg |
| `hwyk-logo-transparent.svg` | Monogram, no bg | Light backgrounds, transparent |
| `hwyk-logo-dark-transparent.svg` | Monogram, no bg | Dark backgrounds, transparent |
| `hwyk-lockup-light.png` | Full lockup (monogram + wordmark), white bg | Homepage, light contexts |
| `hwyk-lockup-dark.png` | Full lockup, black bg | Dark-themed contexts |
| `hwyk-lockup-cream.png` | Full lockup, cream bg | Warm/off-white contexts |
| `hwyk-lockup-transparent.png` | Full lockup, transparent bg | Overlaying on any background |

### When to Use Which Logo
- **Full lockup** (`hwyk-lockup-*.png`): Homepage, landing pages, scorecards, social share images, email headers - anywhere the brand name needs to be read.
- **Monogram** (`hwyk-logo-*.svg`): Favicons, nav bar icons, app icons, badges on quiz pages, small corners of scorecards, mobile headers - anywhere space is tight.

### "Powered by" Badge — Mandatory Format
Every "Powered by" badge MUST follow this exact element order: **"Powered by" text → monogram logo → ↗ arrow**. No exceptions. The ↗ (top-right facing arrow) signals that clicking takes the user to an external page. Never omit the arrow. Never rearrange the order.

The badge links to the HWYK homepage (`/`). It is implemented in the shared `QuizPage.tsx` and `ResultsPage.tsx` components, so it automatically appears on all quizzes.

**Quiz Home Screen — Desktop (sm and above):** Inline under the title, inside the hero section.
- Pill shape with rounded border (`borderRadius: 20`)
- Background: `var(--v5-bg-surface)`, border: `var(--v5-border)`
- Layout: `"Powered by" text → monogram (28×28) → ↗ arrow (10px)`
- Hover: border turns brand yellow (`rgba(250,204,21,0.5)`), background gets faint yellow tint (`rgba(250,204,21,0.08)`)
- Uses `hwyk-logo-transparent.svg`

**Quiz Home Screen — Mobile (below sm):** Fixed top-left corner.
- Same pill style, slightly smaller (logo 26×26, text 11px, arrow 9px)
- Fixed position: `top: 0, left: 0` with `px-4 py-3` spacing
- Uses `hwyk-logo-transparent.svg`

**Scorecard (Results Page):** Inside the scorecard card, top-left corner (mirrors Save button on top-right).
- Glass style: `background: rgba(255,255,255,0.06)`, `border: 1px solid rgba(255,255,255,0.1)`
- Layout: `monogram (16×16) → "Powered by" text → ↗ arrow (9px)`
- Uses `hwyk-logo-dark-transparent.svg` (light monogram for dark scorecard backgrounds)
- Appears in the downloaded PNG as well

**All versions:**
- Link to `/` (homepage)
- Always include the ↗ external link arrow
- Arrow SVG: `<svg viewBox="0 0 24 24"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>` with `strokeWidth: 2.5`, `opacity: 0.5`

### "Made with ♥ by Krishna Goyal" Credit
- **Desktop:** Fixed bottom-right corner
- **Mobile:** Inline at the bottom of the hero section, below the "~3 min" text

### Homepage
- Route: `/` (`src/app/page.tsx`)
- White background, centered full lockup logo (`hwyk-lockup-light.png`), "COMING SOON" text below
- Brand guidelines page at `/brand-guidelines`

---

## 17. Email Capture (Soft Gate on Results Page)

### How It Works

The results page uses a **soft gate** to capture emails without blocking the core experience:

- **Always visible (no gate):** Score number, archetype title, tool logo, share buttons (X, LinkedIn)
- **Blurred until email entered:** Spider chart, dimension breakdown bars, archetype description
- **Inline overlay:** A frosted-glass card sits on top of the blurred section with an email input and "Show My Results" CTA
- **Save button gating:** The Save/Download button is always visible, but clicking it before entering email smooth-scrolls to the email overlay and auto-focuses the input

### After Email Submission

- Email is sent to the `/api/capture-email` API route, which appends a row to a Google Sheet
- Blur animates away (0.5s CSS transition)
- Gate is shown every time (no localStorage persistence) -- each play = fresh email capture
- Save button works normally (downloads full scorecard PNG)
- Analytics event `{prefix}_email_captured` fires to Vercel Analytics as a backup

### Email Storage (Google Sheets)

Emails are stored in a Google Sheet via the Google Sheets API (service account auth). Each row contains:

| Timestamp (UTC) | Email | Quiz slug | Score | Archetype | Dimensions | User Agent |

**Setup:** See `.env.example` for the 3 required environment variables (`GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_SHEET_ID`). The service account must have Editor access to the sheet.

**API route:** `src/app/api/capture-email/route.ts` -- validates the email server-side, rate-limits by IP (10 req/min), and appends to the sheet. The call is fire-and-forget from the client: if the Sheets API is down, the user still gets unlocked and the Vercel Analytics event still fires.

### Email Validation

Validation happens on both client and server:

1. **Format check** -- standard email regex
2. **Disposable domain blocklist** -- ~500 known throwaway email providers (mailinator, guerrillamail, yopmail, etc.) in `src/lib/disposable-domains.ts`
3. **Fake pattern detection** -- rejects obvious fakes like `test@test.com`, `fake@gmail.com`, single-character local parts
4. **Typo correction** -- suggests fixes for common misspellings (`gmial.com` -> `gmail.com`, `yaho.com` -> `yahoo.com`)

Client validation: `src/lib/validate-email.ts` (used by `InlineEmailForm`)
Server validation: `src/app/api/capture-email/route.ts` (format + disposable domain check)

### Key Rules

- **Email only** -- no first name, no last name. Collect name later via email flow.
- **No hard block on share** -- share buttons always work. Sharing spreads the quiz organically.
- **No localStorage persistence** -- gate shown every time. Each play = fresh email capture for per-session analytics.
- **Blur, not hide** -- users can see there IS more content. Creates curiosity and FOMO.
- **Fire-and-forget storage** -- never block the user experience if the storage backend is down.

---

## 18. Analytics Events

All events use `@vercel/analytics` `track()` and are prefixed with `config.analyticsPrefix` (e.g., `chatgpt_`, `vercel_`).

### Quiz Funnel Events

| Event | Trigger | Properties |
|-------|---------|------------|
| `{prefix}_started` | User clicks "Let's Go" | — |
| `{prefix}_answer` | User selects an answer | `round`, `questionId`, `choice`/`item` |
| `{prefix}_question_result` | Answer evaluated | `questionId`, `correct`, `questionIndex`, `totalQuestions` |
| `{prefix}_lock_in` | Speed round lock-in | `questionId` |
| `{prefix}_next` | User clicks "Next" | `questionId`, `questionIndex` |
| `{prefix}_see_results` | User clicks "See Results" (last question) | `questionId`, `questionIndex` |
| `{prefix}_completed` | Quiz finished, redirecting | `score`, `correctCount`, `totalQuestions` |

### Results Page Events

| Event | Trigger | Properties |
|-------|---------|------------|
| `{prefix}_results_viewed` | Results page loads | `score`, `archetype` |
| `{prefix}_email_captured` | User submits email on soft gate | `score`, `archetype`, `email` |
| `{prefix}_email_skipped` | User clicks "Play Again" without entering email | `score` |
| `{prefix}_scorecard_dl` | User downloads scorecard PNG | `score`, `archetype` |
| `{prefix}_share_x` | User clicks "Post on X" | `score` |
| `{prefix}_share_li` | User clicks "Share on LinkedIn" | `score` |
| `{prefix}_play_again` | User clicks "Play Again" | `score` |

### Platform Events (not quiz-prefixed)

| Event | Trigger | Properties |
|-------|---------|------------|
| `powered_by_clicked` | User clicks any "Powered by" badge | `source` ("quiz_intro", "quiz_intro_mobile", "results_scorecard"), `quiz` |

---

## 19. Design Principles

1. **No signup friction** - zero barrier to entry
2. **Variety over repetition** - 5 challenge types prevent quiz fatigue
3. **Instant feedback** - every answer shows correct/wrong + explanation
4. **Educational** - users learn while playing, not just tested
5. **Brand-authentic** - each quiz looks like the company itself built it
6. **Shareable by default** - scorecard PNG + pre-filled social text
7. **Fun titles** - archetypes are more shareable than raw scores
8. **Radar chart** - visual skill profile is more interesting than a number
9. **Dark scorecard** - looks premium in social feeds; NEVER switch to light backgrounds
10. **Logo on scorecard** - brand logo inside a white pill container, visible on any dark background
11. **Scorecard accent override** - dark-accent quizzes must set `scorecardAccentColor` so text/charts are visible
12. **Mobile-first** - all layouts responsive, buttons tap-friendly
13. **Tamper-resistant URLs** - results encoded as opaque Base64 tokens with checksums; users cannot fake scores
14. **No phantom dimensions** - every dimension in the config must have at least 1 challenge; untested dimensions are excluded from results, never faked
15. **No fake scores** - the scoring engine never invents data; if a dimension has 0 questions, it does not appear on the scorecard at all
16. **No em dashes** - clean, consistent punctuation throughout
17. **No quotation marks on statements** - text displays as-is, clean and direct
18. **Per-quiz favicon** - each tab shows the tool's brand logo, not a generic icon
19. **Per-quiz tab title** - "How {Tool} Are You?" in the browser tab
20. **Answer integrity** - every `blank` must exist in `options`, every `oddItem` must exist in `items`, `correct` must be "A" or "B", `correctItems` and `wrongItems` must never overlap
21. **"Powered by" badge** - every quiz page shows a "Powered by" pill with the HWYK monogram, linking to the homepage; desktop: inline under title, mobile: fixed top-left
22. **Brand credit placement** - "Made with ♥ by Krishna Goyal" sits at bottom-right on desktop, inline on mobile
23. **Soft email gate** - results page shows score/title freely but blurs detailed breakdown until email is entered; Save button scrolls to gate when locked
24. **Analytics coverage** - every user action (start, answer, complete, share, download, email capture, powered-by click) is tracked via Vercel analytics
25. **Email validation** - disposable domains, fake patterns, and common typos are blocked client-side and server-side; emails are stored in Google Sheets via the `/api/capture-email` route

---

## 20. Checklist for New Quiz

Use this checklist every time you create a new quiz:

**Brand & Design:**
- [ ] Researched brand colors from official website (not guessed)
- [ ] Researched brand font from official website
- [ ] Got actual brand logo file (not auto-generated)
- [ ] Logo is visible on light background (no white-on-white)
- [ ] Logo saved as `/public/logos/{slug}.{ext}`
- [ ] If accentColor is dark (darker than ~#4A4A4A), set `scorecardAccentColor` to a light color

**Config File:**
- [ ] Config file created at `src/quizzes/{slug}.tsx`
- [ ] 15 challenges with sequential IDs 1-15 (no gaps, no duplicates)
- [ ] Each challenge type matches its round (truth_or_myth for ids 1-4, this_or_that for 5-7, etc.)
- [ ] 7 archetypes with ranges covering 0-100 (no gaps, no overlaps)

**Data Integrity (CRITICAL - count these manually):**
- [ ] Every dimension in `dimensionLabels` has at least 1 challenge assigned to it
- [ ] Counted dimension distribution across all 15 challenges - all 7 dimensions covered
- [ ] Every `quick_pick` challenge: `blank` value exists exactly in `options` array
- [ ] Every `odd_one_out` challenge: `oddItem` value exists exactly in `items` array
- [ ] Every `speed_pick` challenge: `correctItems` and `wrongItems` have zero overlap
- [ ] Every `this_or_that` challenge: `correct` is exactly `"A"` or `"B"` (not "a", not "Option A")

**Content Quality:**
- [ ] 15 challenges written (educational, not trivia)
- [ ] No em dashes in any text
- [ ] No quotation marks wrapping statements or challenge text
- [ ] 7 archetypes with fun, shareable titles

**Route Files:**
- [ ] `layout.tsx` has metadata with title ("How {Tool} Are You?"), description, AND icons (favicon)
- [ ] `page.tsx` created (4 lines)
- [ ] `results/page.tsx` created (4 lines)

**Final Verification:**
- [ ] Build passes (`npx next build`)
- [ ] Visually checked on localhost - colors/logo/font look right
- [ ] Played through all 15 questions - no errors, scoring feels right
- [ ] Checked scorecard page - logo visible in white pill, accent color visible on dark bg, radar chart visible
- [ ] Radar chart shows the correct number of spokes (should match number of dimensions with questions)
- [ ] No dimension on scorecard shows a score for something the user was never asked about
