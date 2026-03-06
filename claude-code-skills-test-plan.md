# CLAUDE CODE SKILLS TEST — BUILD PLAN

**Goal:** Build a viral, fun, shareable tool that tests how well you know Claude Code. No login. Free. Optimized to drive traffic to Krishna's LinkedIn. Launch on Product Hunt, Reddit, HN, LinkedIn.

**Name candidates:** "How Claude Code Are You?" / "Claude Code IQ" / "Rate My Vibe Code" / "ccskills.dev" / "claudeiq.dev"

---

## THE PRODUCT CONCEPT

### What It Is
An interactive, visually beautiful skill assessment that tests your knowledge of Claude Code's features, workflows, and best practices. You answer ~15-20 scenario-based questions (NOT boring multiple choice — more like "what would you do?" interactive scenarios). At the end, you get a stunning radar/spider-web chart showing your skill profile across multiple dimensions, plus a shareable card you can post on Twitter/LinkedIn.

### Why It Will Work (Viral Mechanics)

**What makes things go viral among developers:**

1. **Identity signal** — "Look how good I am at this thing" (same as typing speed tests, GitHub stats)
2. **Social comparison** — "I got 87/100, what did you get?" → friends try it → loop
3. **Beautiful shareable output** — A gorgeous card/chart people WANT to post (Spotify Wrapped proved this)
4. **Low friction** — No signup, no login, takes 3-5 minutes max
5. **Timeliness** — Claude Code is THE hot topic in dev circles right now (2025-2026). Riding the wave.
6. **Ego + fun** — People can't resist testing themselves

**The formula:** Timely topic (Claude Code is viral) × identity signal (show off your score) × beautiful output (shareable card) × zero friction (no login) = viral potential.

### Why Claude Code Specifically (Not Cursor/Windsurf)

- Claude Code is the **hottest AI coding tool right now** — massive buzz on Twitter, HN, Reddit
- It has a **deep feature set most people don't fully know** — CLAUDE.md, Skills, Subagents, Agent Teams, Hooks, MCP, Plugins, Slash Commands, Permissions — there's genuinely a lot to test
- Anthropic's community is **highly engaged** and loves sharing content
- There's **no existing tool like this** — nobody has built a "how well do you know Claude Code?" assessment
- Cursor and Windsurf don't have as deep/complex a feature set to test against

**Future expansion:** If this works for Claude Code, you can clone it for Cursor, Windsurf, Copilot, etc. Same engine, different questions. Each launch is another viral moment.

---

## SCORING DIMENSIONS (THE SPIDER WEB AXES)

Based on Claude Code's actual feature set, here are **7 skill dimensions** for the radar chart:

### 1. Memory & Context (CLAUDE.md)
- Do you know how CLAUDE.md files work?
- Project-level vs user-level vs workspace-level memory
- Rules files (.claude/rules/)
- How context loads, how to manage it
- Paths frontmatter for conditional loading

### 2. Orchestration (Subagents & Agent Teams)
- Do you know what subagents are and when to use them?
- Subagents vs agent teams — what's the difference?
- Isolated context, returning summaries
- Multi-agent coordination, peer-to-peer messaging
- maxTurns, permissionMode, preloaded skills

### 3. Automation (Hooks)
- PreToolUse, PostToolUse, SessionStart, SessionEnd hooks
- Prompt-based hooks vs shell script hooks vs agent-based hooks
- Decision control (allow, deny, ask)
- Lifecycle event matching
- Deterministic scripts outside the AI loop

### 4. Extensibility (MCP & Plugins)
- What is MCP and how does it connect external services?
- MCP scope (local > project > user)
- Plugin installation and namespacing
- Marketplaces and plugin discovery
- When to use MCP vs Skills vs Hooks

### 5. Workflow Design (Skills & Slash Commands)
- Creating reusable skills (SKILL.md files)
- Slash commands for quick invocation
- Skill discovery and priority ordering
- Skills running inline vs in subagents
- Supporting files directory structure

### 6. Prompting & Interaction
- Effective prompting techniques for Claude Code
- When to use @ references
- How to manage long contexts
- Iterative design patterns
- Debugging and verification workflows

### 7. Best Practices & Architecture
- Permission management (allowlist, yolo mode, etc.)
- Git workflow integration
- Project structure for AI-assisted development
- Cost management (context costs per feature)
- Security and privacy considerations

---

## THE QUESTION FORMAT — NOT BORING QUIZZES

**Critical design decision: NO boring multiple choice.** The questions need to feel like mini-scenarios that are actually interesting.

### Question Types (Mix These)

**Type A: "What Would You Do?" Scenarios**
> Your Claude Code session is getting slow and responses are degrading. You suspect context bloat. What's your move?
> - A) Start a new session
> - B) Use /compact to summarize the conversation
> - C) Create a subagent for the remaining work
> - D) Add the task to CLAUDE.md and start fresh

Each answer reveals something about their skill level. Multiple answers can be "correct" but some are more expert-level.

**Type B: "Spot the Problem" Code Snippets**
> Here's a CLAUDE.md file. What's wrong with it?
> ```
> [show a CLAUDE.md with a common mistake]
> ```
> [Interactive options with visual hints]

**Type C: "Which Feature?" Quick Fire**
> You need Claude to automatically run `npm test` after every file edit. Which feature?
> - Hooks ✓
> - Skills
> - Subagents
> - MCP

These are fast, satisfying, build momentum.

**Type D: "Rank These" Drag-and-Drop (optional, higher effort)**
> Put these in the correct priority order for skill loading:
> [ managed ] [ user ] [ project ] [ plugin ]

**Type E: "True or False" with a Twist**
> "Subagents share the same conversation context as your main session."
> TRUE / FALSE
> (Answer: FALSE — they run in isolated context. If you got it wrong, you learn something.)

### Question Flow (15-18 Questions Total)

- **Questions 1-3:** Easy warmup (everyone gets these right, feels good)
- **Questions 4-8:** Medium difficulty (separates beginners from intermediates)
- **Questions 9-13:** Hard (only power users get these)
- **Questions 14-18:** Expert-level (deep features like agent teams, hooks, plugin scoping)

Each question has a **1-2 sentence "did you know?" after answering** — this makes it educational AND shareable ("I learned something cool, let me share this with others").

### Estimated: 2-3 questions per dimension = 15-21 total questions

---

## THE UX FLOW

### Screen 1: Landing Page (3 seconds to hook them)

```
[Dark background, subtle grid/terminal aesthetic]

🧠 How Claude Code Are You?

Test your knowledge of Claude Code's features — from CLAUDE.md 
to Subagents, Hooks to MCP.

15 questions. 3 minutes. No signup needed.

[START TEST →]  (big, glowing button)

"Already taken by 12,847 developers"  (social proof counter, 
can start at a fake number honestly)

Made with ♥ by Krishna Goyal  (LinkedIn link)
```

**Design notes:**
- Dark theme (developers prefer it)
- Terminal/code aesthetic (monospace accents, subtle grid)
- Anthropic brand colors (coral/orange accents) — recognizable without being a ripoff
- Minimal — no navigation, no distractions, one CTA

### Screen 2-17: Questions (One Per Screen)

```
[Question 7 of 15]                    [Progress bar ████████░░░░░░░]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Your CLAUDE.md is getting huge (2000+ lines). Claude is 
starting to ignore some instructions. What's your best move?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ┌──────────────────────────────────────┐
  │ A) Split into .claude/rules/ files   │
  │    with paths frontmatter            │
  ├──────────────────────────────────────┤
  │ B) Delete the less important parts   │
  ├──────────────────────────────────────┤
  │ C) Use skills for specialized context│
  ├──────────────────────────────────────┤
  │ D) Just keep adding to CLAUDE.md     │
  └──────────────────────────────────────┘

[After selecting, show brief feedback:]
✅ Nice! Rules files with paths frontmatter load conditionally 
   — only when you're working in matching directories. This 
   keeps context lean.
   
   Dimension: Memory & Context  +3 points
```

**Design notes:**
- One question per screen (no scrolling, no overwhelm)
- Smooth transition animations between questions
- Instant feedback after each answer (dopamine hit)
- Show which dimension the question belongs to
- Progress bar gives a sense of completion

### Screen 18: Results — THE MONEY SCREEN

This is the most important screen. This is what people screenshot and share.

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

         🧠 YOUR CLAUDE CODE PROFILE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

         [BEAUTIFUL RADAR/SPIDER CHART]
         
    Memory ████████░░  80%
    Orchestration ██████░░░░  60%
    Automation ████████████  95%
    Extensibility ██████░░░░  55%
    Workflows ████████░░  75%
    Prompting ██████████░  90%
    Best Practices ████████░░  80%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

         Overall Score: 76/100
         
         🏆 You're an "Agent Architect"
         
         Top 18% of all test takers

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"You've mastered hooks and prompting, but your 
orchestration game could level up. Try building 
agent teams for your next complex project."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[SHARE ON TWITTER]  [SHARE ON LINKEDIN]  [COPY LINK]

[Download Your Card ↓]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Built by Krishna Goyal → [LinkedIn] [Twitter]
```

---

## THE SHAREABLE CARD (MOST IMPORTANT ASSET)

This is what gets shared on social media. It needs to be BEAUTIFUL.

### Card Design Spec

```
┌─────────────────────────────────────────────┐
│                                             │
│  🧠 How Claude Code Are You?               │
│                                             │
│        [RADAR CHART - 7 axes]               │
│        beautiful, glowing,                  │
│        dark bg, neon accents                │
│                                             │
│  Score: 76/100                              │
│  Title: "Agent Architect"                   │
│  Top 18% of developers                     │
│                                             │
│  howclaudecode.dev                          │
│                                             │
└─────────────────────────────────────────────┘
```

**Card design requirements:**
- **1200x630px** (OG image size, perfect for Twitter/LinkedIn)
- **Dark background** with subtle grid pattern
- **Glowing radar chart** — neon lines on dark bg (think cyberpunk/terminal aesthetic)
- **Score prominently displayed**
- **Title/archetype** — gives people identity to share
- **URL clearly visible** — drives traffic back
- **NO cluttered text** — clean, minimal, shareable

### The Archetype Titles (Identity Signal)

Based on overall score, give users a fun title they'll WANT to share:

| Score Range | Title | Emoji | Description |
|---|---|---|---|
| 90-100 | **"Claude Whisperer"** | 🧙 | You speak fluent Claude. Subagents, hooks, agent teams — you orchestrate AI like a symphony. |
| 80-89 | **"Agent Architect"** | 🏗️ | You design sophisticated Claude Code workflows. Your CLAUDE.md game is strong. |
| 70-79 | **"Vibe Commander"** | 🎯 | You know your way around Claude Code. A few advanced features to master and you'll be elite. |
| 60-69 | **"Prompt Pilot"** | ✈️ | Solid foundation. You can fly, but haven't unlocked autopilot yet. |
| 50-59 | **"Code Companion"** | 🤝 | You and Claude are getting to know each other. The good stuff is still ahead. |
| 40-49 | **"Terminal Tourist"** | 🗺️ | You've visited Claude Code, but haven't moved in yet. Time to explore. |
| 0-39 | **"Fresh Install"** | 🌱 | Everyone starts somewhere. You just discovered a universe of features. |

**Why titles matter:** People share "I'm an Agent Architect 🏗️" way more than "I got 82/100." Titles create identity, identity creates sharing.

---

## TECHNICAL IMPLEMENTATION PLAN

### Tech Stack

| Component | Tech | Why |
|---|---|---|
| **Framework** | Next.js 14 (App Router) | Fast, Vercel deploy, good SEO |
| **Styling** | Tailwind CSS | Fast to build, beautiful dark themes |
| **Radar Chart** | Recharts or Chart.js | Radar chart component built-in |
| **Shareable Image** | @vercel/og or html-to-image | Generate OG images dynamically |
| **Hosting** | Vercel (free tier) | Zero cost, instant deploy |
| **Analytics** | Vercel Analytics or Plausible | Track visitors, shares |
| **State** | React state (no backend needed) | Quiz state is client-side only |

### Architecture: ZERO BACKEND

- No database
- No auth
- No API routes (except OG image generation)
- Pure client-side quiz
- Results computed in browser
- Shareable link encodes score in URL params (e.g. `howclaudecode.dev/result?s=76&t=architect&m=80-60-95-55-75-90-80`)
- OG image route dynamically generates the card from URL params

**Why no backend:** Zero cost, zero maintenance, instant load, no privacy concerns, no GDPR issues.

### URL-Based Result Sharing

When someone finishes the quiz:
1. Compute score client-side
2. Generate a URL like: `howclaudecode.dev/result?s=76&d=80,60,95,55,75,90,80&t=architect`
3. This URL has dynamic OG tags that generate the shareable card
4. When someone shares this link on Twitter/LinkedIn, the card auto-previews
5. Clicking the link shows the result page with "Take the test yourself" CTA

This is the CORE viral loop: Take test → Get result URL → Share on social → Friends see card → Click → Take test → Repeat.

### File Structure

```
/app
  /page.tsx              → Landing page
  /quiz/page.tsx         → Quiz flow (client-side)
  /result/page.tsx       → Results page (reads URL params)
  /api/og/route.tsx      → Dynamic OG image generation
/components
  /RadarChart.tsx        → Spider web visualization
  /QuestionCard.tsx      → Individual question component
  /ProgressBar.tsx       → Quiz progress indicator
  /ShareCard.tsx         → Result card component
  /ShareButtons.tsx      → Social share buttons
/data
  /questions.ts          → All questions, answers, scoring
  /archetypes.ts         → Title definitions and descriptions
/lib
  /scoring.ts            → Score calculation logic
  /url.ts                → Encode/decode results in URL
```

---

## VIRALITY OPTIMIZATION CHECKLIST

### Before Launch
- [ ] OG image is BEAUTIFUL and renders correctly on Twitter + LinkedIn
- [ ] URL sharing works (card shows in preview when pasting link)
- [ ] Mobile responsive (many people will open links on phone)
- [ ] Load time < 2 seconds (nobody waits for a quiz)
- [ ] "Made by Krishna Goyal" with LinkedIn link on every page
- [ ] Social share buttons pre-fill with good copy

### Share Copy Templates

**Twitter pre-fill:**
```
I scored 76/100 on "How Claude Code Are You?" — I'm an Agent Architect 🏗️

Test your Claude Code skills → howclaudecode.dev

#ClaudeCode #VibeCoding #AI
```

**LinkedIn pre-fill:**
```
Just tested my Claude Code knowledge — scored 76/100 and earned 
the "Agent Architect" title 🏗️

Turns out I didn't know half the features. Subagents, hooks, 
agent teams — there's so much more to Claude Code than just chatting.

Test yourself → howclaudecode.dev
```

### After Launch — Distribution Plan

**Day 1: Soft launch**
- Post on personal Twitter/LinkedIn
- Send to 10-20 developer friends, ask them to share their results
- Track which questions people screenshot

**Day 2-3: Community launch**
- **Reddit:** Post to r/ClaudeAI, r/programming, r/webdev, r/SideProject
  - Title: "I built a free tool to test how well you actually know Claude Code — most people don't know half its features"
  - DO NOT be salesy. Be genuine. "I was surprised how much I didn't know about subagents and hooks"
- **Hacker News:** "Show HN: How Claude Code Are You? — Test your knowledge of Claude Code features"
- **Product Hunt:** Launch with good screenshots, clear description

**Day 4-7: Ride the wave**
- Respond to every comment
- If it gets traction, tweet the most interesting stats: "Only 12% of test takers know about agent teams" — this creates FOMO
- Tag @AnthropicAI on Twitter — they might retweet

**Ongoing:**
- Add a "leaderboard" or "how you compare" section if it gets enough traffic
- Write a blog post: "What 10,000 developers don't know about Claude Code" (content marketing from the data)

---

## COST ANALYSIS

| Item | Cost |
|---|---|
| Domain (e.g. howclaudecode.dev) | ~$12/year |
| Vercel Hosting (free tier) | $0/mo |
| Development time | 3-5 days |
| **Total** | **~$12** |

This is essentially free to build and run.

---

## WHAT SUCCESS LOOKS LIKE

| Metric | Minimum Viable | Good | Great |
|---|---|---|---|
| Test completions (week 1) | 500 | 2,000 | 10,000+ |
| Social shares | 50 | 200 | 1,000+ |
| LinkedIn profile views for Krishna | 500 | 2,000 | 5,000+ |
| Email captures (if added later) | 100 | 500 | 2,000+ |
| Product Hunt upvotes | 50 | 200 | 500+ |

---

## TIMELINE

| Day | Task |
|---|---|
| **Day 1** | Set up Next.js project, build landing page, build quiz flow UI |
| **Day 2** | Write all 15-18 questions with scoring logic, build radar chart component |
| **Day 3** | Build results page, shareable card, OG image generation, URL encoding |
| **Day 4** | Polish: animations, mobile responsive, social share buttons, meta tags |
| **Day 5** | Test everything, buy domain, deploy, soft launch |

---

## OPEN DECISIONS FOR KRISHNA

1. **Name/Domain:** "howclaudecode.dev" vs "claudeiq.dev" vs "ccskills.dev" vs "vibecodeiq.com" — which resonates?
2. **Scope:** Claude Code only (focused, timely) vs multi-tool (Claude + Cursor + Windsurf — broader but more work). **My recommendation: Start with Claude Code only. It's the hot topic. Expand later if it works.**
3. **Email capture:** Add an optional "Get weekly Claude Code tips" email signup on the results page? Low friction, builds audience. **My recommendation: Yes, but OPTIONAL. Don't gate results behind email.**
4. **Counter/social proof:** Show "X developers have taken this test" on landing page? **My recommendation: Yes. Start with a reasonable seed number.**

---

## WHY THIS SPECIFIC IDEA HAS BETTER VIRAL POTENTIAL THAN MOST

1. **Claude Code is peaking in hype** — perfect timing
2. **Developers have ego** — they WANT to prove they know the tool
3. **Most people DON'T know the advanced features** — they'll be surprised → share
4. **The "did you know?" moments create educational value** — people share things they learned
5. **The archetype titles are identity signals** — "I'm a Claude Whisperer 🧙" is irresistible to post
6. **Zero friction** — no signup, no payment, 3 minutes, beautiful result
7. **It's actually USEFUL** — people learn about features they didn't know existed

This isn't just a quiz. It's a **discovery engine for Claude Code features** wrapped in a fun, shareable experience.

---

*Ready to build? Let's go.*
