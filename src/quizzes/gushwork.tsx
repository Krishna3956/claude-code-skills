import type { QuizConfig } from "@/components/quiz/types";

const gushworkLogo = (
  <img
    src="/logos/gushwork.svg"
    alt="Gushwork"
    width={138}
    height={26}
    style={{ objectFit: "contain" }}
  />
);

export const gushworkConfig: QuizConfig = {
  slug: "gushwork",
  toolName: "Gushwork",
  tagline: "3 min. No sign-up required.",
  subtitle: "Built for people who actually run inbound.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#0070FF",
  accentColorDim: "#005BD1",
  accentColorSubtle: "rgba(0,112,255,0.10)",
  bgColor: "#F8F6F3",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#EEF4FF",
  textColor: "#111827",
  textSecondary: "#4B5563",
  textTertiary: "#6B7280",
  borderColor: "#D6E5FF",
  borderSubtle: "#EAF1FF",
  scorecardBg: "#0F172A",
  scorecardAccentColor: "#4EA3FF",
  scorecardDivider: "#23324F",
  scorecardLabelColor: "#D7E6FF",
  scorecardGridColor: "#22314D",
  scorecardLogoBg: "rgba(255,255,255,0.04)",
  scorecardLogoBorder: "rgba(78,163,255,0.20)",
  ctaTextColor: "#FFFFFF",
  logo: gushworkLogo,
  scorecardLogo: (
    <img
      src="/logos/gushwork-white.webp"
      alt="Gushwork"
      width={150}
      height={28}
      style={{ objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "gushwork",
  dimensionLabels: {
    memory: "Feature Recall",
    orchestration: "System Design",
    automation: "Growth Ops",
    extensibility: "Platform Surface",
    workflows: "Lead Quality",
    prompting: "AI Search Strategy",
    bestPractices: "Operator Judgment",
  },
  archetypes: [
    {
      title: "Inbound Systems Operator",
      emoji: "📈",
      description:
        "You understand Gushwork as a coordinated inbound engine, not a pile of SEO tasks. Content, AI discoverability, lead quality, and operating discipline all connect for you.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "AI Search Architect",
      emoji: "🧠",
      description:
        "You map the product well: Brand Memory feeds creation quality, AI Feed improves discoverability, and the lead surfaces close the loop with signal instead of noise.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Growth Platform Builder",
      emoji: "🛠️",
      description:
        "You have strong instincts for Gushwork's platform, though a few of the sharper boundaries between creation, analytics, and qualified lead handling still need tightening.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Search Ops Lead",
      emoji: "🎯",
      description:
        "You know the surfaces and the overall direction. A bit more precision around how the features compound would move you into the upper tier.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Hands-Off Growth Manager",
      emoji: "🧭",
      description:
        "You understand the promise, but some of the operator-grade distinctions still blur together.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Lead Gen Explorer",
      emoji: "🌱",
      description:
        "You are early. Start by separating discoverability, page production, lead filtering, and analytics into one coherent system.",
      minScore: 0,
      maxScore: 49,
    },
  ],
  challenges: [
    {
      type: "truth_or_myth",
      id: 1,
      dimension: "workflows",
      statement:
        "Gushwork's Leads Dashboard is built to show every visitor, auto-filter spam, and alert you only for leads that matter",
      isTrue: true,
      explanation:
        "That is the core job of the Leads Dashboard on the live site: visitor visibility, spam filtering, and qualified lead alerts.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "memory",
      statement:
        "Brand Memory is basically a style guide for colors and logos, not a place to store products, buyers, competitors, and brand rules",
      isTrue: false,
      explanation:
        "That is false. Brand Memory is explicitly described as the place to store products, buyers, competitors, and brand rules so the AI can work from one source of truth.",
    },
    {
      type: "this_or_that",
      id: 3,
      dimension: "orchestration",
      scenario:
        "Your team wants content quality to stay consistent across many generated pages without re-explaining the business on every request. Which move is stronger?",
      optionA: "Centralize products, buyers, competitors, and brand rules in Brand Memory",
      optionB: "Rely on ad hoc prompt edits every time a new page or campaign is created",
      correct: "A",
      explanation:
        "Gushwork positions Brand Memory as the single source of truth that keeps the rest of the system grounded in the business.",
    },
    {
      type: "this_or_that",
      id: 4,
      dimension: "workflows",
      scenario:
        "You care less about raw traffic and more about seeing every visitor, filtering spam, and getting alerted only when leads actually matter. Which move is stronger?",
      optionA: "Use Analytics alone and manually sort signal from noise later",
      optionB: "Use the Leads Dashboard as the qualified-lead handling layer",
      correct: "B",
      explanation:
        "The Leads Dashboard is explicitly positioned around seeing every visitor, auto-filtering spam, and surfacing only the leads that matter.",
    },
    {
      type: "quick_pick",
      id: 5,
      dimension: "extensibility",
      scenario:
        "Which Gushwork feature is described as building content, landing pages, and resources for AI bots and human visitors?",
      blank: "Page Creation Engine",
      options: ["Analytics", "Page Creation Engine", "Leads Dashboard"],
      explanation:
        "That description belongs to Page Creation Engine, which is the production layer for pages and resources.",
    },
    {
      type: "quick_pick",
      id: 6,
      dimension: "automation",
      scenario:
        "Which feature plugs into any site and handles backlinks, content refreshes, and optimizations on autopilot?",
      blank: "Content Management Suite",
      options: ["Brand Memory", "Content Management Suite", "AI Feed"],
      explanation:
        "That exact description belongs to the AI-first CMS, labeled on the site as Content Management Suite.",
    },
    {
      type: "speed_pick",
      id: 7,
      dimension: "memory",
      prompt: "Tap every real Gushwork platform feature currently called out on the site!",
      correctItems: [
        "Brand Memory",
        "Leads Dashboard",
        "Page Creation Engine",
        "Analytics",
        "Content Management Suite",
      ],
      wrongItems: [
        "Ad Creative Studio",
        "Billing Console",
        "Feature Flag Manager",
        "Sales Dialer",
      ],
      timeLimit: 15,
      explanation:
        "Those are the core feature surfaces shown across the product navigation. The others are made up.",
    },
    {
      type: "speed_pick",
      id: 8,
      dimension: "prompting",
      prompt: "Tap every AI search surface Gushwork explicitly names on the AI Feed page!",
      correctItems: ["ChatGPT", "Gemini", "Perplexity"],
      wrongItems: ["Salesforce", "Figma", "Notion", "Mailchimp"],
      timeLimit: 15,
      explanation:
        "The AI Feed page explicitly names ChatGPT, Gemini, and Perplexity as engines the pages are built to help reach and inform.",
    },
    {
      type: "odd_one_out",
      id: 9,
      dimension: "bestPractices",
      prompt:
        "One of these is NOT a real Gushwork-style operating move. Which one?",
      items: [
        "Use Brand Memory so the AI has a stable source of truth about your business",
        "Treat the Leads Dashboard as the place to filter spam and focus on qualified opportunities",
        "Use the AI-first CMS for backlinks, refreshes, and optimizations on autopilot",
        "Keep feature knowledge scattered across Slack threads so every page starts from scratch",
      ],
      oddItem: "Keep feature knowledge scattered across Slack threads so every page starts from scratch",
      explanation:
        "That is the weak move. Gushwork's product design is built around centralizing business context and automating the repetitive execution layers.",
    },
    {
      type: "odd_one_out",
      id: 10,
      dimension: "orchestration",
      prompt:
        "One of these pairings is mismatched. Which one?",
      items: [
        "AI Feed -> discoverability across AI search surfaces",
        "Page Creation Engine -> pages and resources for bots and humans",
        "Leads Dashboard -> spam filtering and lead alerts",
        "Analytics -> storing products, buyers, competitors, and brand rules",
      ],
      oddItem: "Analytics -> storing products, buyers, competitors, and brand rules",
      explanation:
        "That pairing belongs to Brand Memory, not Analytics. Analytics is the tracking layer for AI bots and human visitors on the site.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "⚡", ids: [1, 2], tagline: "Current platform reality or made-up growth ops?" },
    { name: "This or That", icon: "🆚", ids: [3, 4], tagline: "Pick the stronger operator move" },
    { name: "Quick Pick", icon: "🎯", ids: [5, 6], tagline: "Map the exact feature to the job" },
    { name: "Speed Round", icon: "⏱️", ids: [7, 8], tagline: "Recognize the real platform surfaces" },
    { name: "Odd One Out", icon: "👀", ids: [9, 10], tagline: "Spot the mismatched growth instinct" },
  ],
};
