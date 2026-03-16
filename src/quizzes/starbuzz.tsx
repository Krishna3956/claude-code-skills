import type { QuizConfig } from "@/components/quiz/types";

const starbuzzLogo = (
  <img
    src="/logos/starbuzz.png"
    alt="Starbuzz.ai"
    width={120}
    height={120}
    style={{ objectFit: "contain" }}
  />
);

export const starbuzzConfig: QuizConfig = {
  slug: "starbuzz",
  toolName: "Starbuzz.ai",
  tagline: "5 rounds. ~3 min. No influencer spreadsheet required.",
  subtitle:
    "Built for serious campaign operators. AI campaign setup, creator discovery, competitor mapping, tracking automation, Brand GPT, and affiliate-grade workflow judgment.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#FE5901",
  accentColorDim: "#D94D01",
  accentColorSubtle: "rgba(254,89,1,0.10)",
  bgColor: "#FFF8F4",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#FFEFE6",
  textColor: "#1C394B",
  textSecondary: "#4F6170",
  textTertiary: "#6F7F8C",
  borderColor: "#FFD8C4",
  borderSubtle: "#FFEADF",
  scorecardBg: "#1C394B",
  scorecardAccentColor: "#FF935C",
  scorecardDivider: "#425869",
  scorecardLabelColor: "#D6E1E8",
  scorecardGridColor: "#425869",
  scorecardLogoBg: "#FFFFFF",
  scorecardLogoBorder: "#FFD8C4",
  ctaTextColor: "#FFFFFF",
  logo: starbuzzLogo,
  scorecardLogo: (
    <img
      src="/logos/starbuzz.png"
      alt="Starbuzz.ai"
      width={108}
      height={108}
      style={{ objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "starbuzz",
  dimensionLabels: {
    memory: "Creator Discovery",
    orchestration: "Campaign Setup",
    automation: "Tracking Ops",
    extensibility: "Commerce Surface",
    workflows: "Reporting Flow",
    prompting: "AI Assistant Use",
    bestPractices: "Influencer Ops Judgment",
  },
  archetypes: [
    {
      title: "Influencer Ops Operator",
      emoji: "🧠",
      description:
        "You think like a campaign operator, not a spreadsheet babysitter. Discovery, briefs, tracking, affiliate flow, and reporting all connect for you.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Campaign Systems Builder",
      emoji: "🏗️",
      description:
        "You understand how Starbuzz.ai compresses creator discovery and campaign execution. A few sharper decisions would put you into top-tier operator territory.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Creator Workflow Lead",
      emoji: "⚙️",
      description:
        "You have strong instincts for running campaigns cleanly. The remaining gap is mostly around how aggressively to lean on the AI agents and commerce workflows.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Brand Campaign Manager",
      emoji: "🧭",
      description:
        "You know the broad surfaces well, though some of the deeper automation and strategy workflows still need tightening.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Influencer Coordinator",
      emoji: "📋",
      description:
        "You can run campaigns productively, but the full Starbuzz operator model is not fully second nature yet.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Spreadsheet Escapee",
      emoji: "📊",
      description:
        "You clearly feel the pain Starbuzz solves, but the highest-leverage platform moves still need more repetition.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "Fresh Brand User",
      emoji: "🌱",
      description:
        "You are early. The next step is understanding how Starbuzz ties creator discovery, briefs, tracking, and reporting into one campaign system.",
      minScore: 0,
      maxScore: 39,
    },
  ],
  challenges: [
    {
      type: "truth_or_myth",
      id: 1,
      dimension: "orchestration",
      statement:
        "Starbuzz.ai positions AI Campaign Creation as a way to generate campaign names, descriptions, target audience, and influencer tasks from a single prompt",
      isTrue: true,
      explanation:
        "That is exactly how the AI Campaign Creation assistant is described on the site. It is meant to jump-start the brief, not just summarize one later.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "automation",
      statement:
        "Tracking Automation in Starbuzz.ai still assumes you will manually chase every link and update likes, comments, views, and engagement in separate sheets",
      isTrue: false,
      explanation:
        "That is false. The whole point of the Tracking Automation assistant is to remove manual updating and let operators focus on insights rather than status collection.",
    },
    {
      type: "this_or_that",
      id: 3,
      dimension: "prompting",
      scenario:
        "You are launching a new D2C coffee campaign and want the platform to get you to a usable creator short-list fast. Which move is stronger?",
      optionA: "Use the website- or prompt-led AI assistant flow so Starbuzz recommends relevant niche creators from brand context",
      optionB: "Start with a blank spreadsheet and manually search hundreds of creators before giving the platform any brief context",
      correct: "A",
      explanation:
        "Starbuzz is explicitly designed to collapse the first discovery step through AI-driven recommendations rather than forcing a cold-start spreadsheet workflow.",
    },
    {
      type: "this_or_that",
      id: 4,
      dimension: "bestPractices",
      scenario:
        "Your team wants to understand where the brand stands before locking campaign direction. Which move is stronger?",
      optionA: "Use competitor recommendations and generated comparison reports before finalizing strategy",
      optionB: "Skip competitor context and assume creator fit alone is enough to shape the whole campaign",
      correct: "A",
      explanation:
        "Starbuzz explicitly pitches competitor recommendations as a way to refine campaign strategy, not just as a nice-to-have research tab.",
    },
    {
      type: "quick_pick",
      id: 5,
      dimension: "prompting",
      scenario:
        "Which Starbuzz.ai surface is explicitly framed as your in-platform guide for both navigation help and influencer marketing know-how?",
      blank: "Brand GPT",
      options: ["Competitor Radar", "Brand GPT", "Creator Dialer"],
      explanation:
        "Brand GPT is positioned as the assistant that helps with platform guidance and influencer-marketing questions, not just campaign generation.",
    },
    {
      type: "quick_pick",
      id: 6,
      dimension: "extensibility",
      scenario:
        "Which commerce-oriented Starbuzz workflow is called out on the brand solution page alongside campaign execution?",
      blank: "Affiliate tracking",
      options: ["Affiliate tracking", "Subscription invoicing", "App-store rating sync"],
      explanation:
        "Affiliate and link tracking is part of the platform story for brands. The others are unrelated commerce surfaces.",
    },
    {
      type: "speed_pick",
      id: 7,
      dimension: "memory",
      prompt: "Tap every real Starbuzz.ai AI assistant or workflow surface!",
      correctItems: ["AI Campaign Creation", "Recommended Influencers", "Recommended Competitors", "Tracking Automation", "Brand GPT"],
      wrongItems: ["GPU scheduler", "Payroll approvals", "Warehouse routing", "Feature flag console"],
      timeLimit: 15,
      explanation:
        "Those are the actual AI assistants and workflow surfaces Starbuzz highlights. The others belong to unrelated software categories.",
    },
    {
      type: "speed_pick",
      id: 8,
      dimension: "workflows",
      prompt: "Tap every campaign pain point Starbuzz explicitly claims to replace for brands!",
      correctItems: ["Manual influencer lists", "Endless spreadsheets", "No real-time campaign metrics", "Reports built from scratch", "ROI uncertainty"],
      wrongItems: ["Broken CI pipelines", "DNS outages", "Database failover", "Payroll cutoff misses"],
      timeLimit: 15,
      explanation:
        "These are all listed directly in the before-and-after campaign workflow section for brands on the site.",
    },
    {
      type: "odd_one_out",
      id: 9,
      dimension: "bestPractices",
      prompt:
        "One of these is NOT a strong Starbuzz.ai operating instinct. Which one?",
      items: [
        "Let AI accelerate the first brief and creator discovery pass",
        "Use tracking automation so the team can focus on decisions instead of manual updates",
        "Rebuild campaign reports from scratch every time because automation reduces rigor",
        "Use competitor context to shape strategy before the campaign hardens",
      ],
      oddItem: "Rebuild campaign reports from scratch every time because automation reduces rigor",
      explanation:
        "That is the weak move. Starbuzz is explicitly trying to remove repetitive reporting work so teams can spend time on interpretation and execution.",
    },
    {
      type: "odd_one_out",
      id: 10,
      dimension: "extensibility",
      prompt:
        "One of these is NOT a Starbuzz.ai social or campaign surface called out on the site. Which one?",
      items: [
        "Instagram fake follower scanning",
        "Affiliate tracking",
        "Real-time engagement rate",
        "Kubernetes log aggregation",
      ],
      oddItem: "Kubernetes log aggregation",
      explanation:
        "The first three fit Starbuzz directly. Kubernetes log aggregation belongs to an infrastructure monitoring tool, not an influencer-marketing platform.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "⚡", ids: [1, 2], tagline: "Real campaign automation or made-up marketing lore?" },
    { name: "This or That", icon: "🆚", ids: [3, 4], tagline: "Choose the operator-grade move" },
    { name: "Quick Pick", icon: "🎯", ids: [5, 6], tagline: "Name the exact Starbuzz surface" },
    { name: "Speed Round", icon: "⏱️", ids: [7, 8], tagline: "Recognize the real campaign primitives" },
    { name: "Odd One Out", icon: "👀", ids: [9, 10], tagline: "Spot the weak campaign instinct" },
  ],
};
