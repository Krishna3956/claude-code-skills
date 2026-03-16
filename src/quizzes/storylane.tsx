import type { QuizConfig } from "@/components/quiz/types";

const storylaneLogo = (
  <img
    src="/logos/storylane.svg"
    alt="Storylane"
    width={160}
    height={36}
    style={{ objectFit: "contain" }}
  />
);

export const storylaneConfig: QuizConfig = {
  slug: "storylane",
  toolName: "Storylane",
  tagline: "5 rounds. ~3 min. No demo workspace required.",
  subtitle:
    "Medium difficulty for serious demo operators. Guided demos, sandbox flows, Buyer Hub, personalization, and rep-ready delivery.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#ED2DA0",
  accentColorDim: "#C61D81",
  accentColorSubtle: "rgba(237,45,160,0.12)",
  bgColor: "#FFF7FB",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#FDE8F5",
  textColor: "#18181B",
  textSecondary: "#52525B",
  textTertiary: "#71717A",
  borderColor: "#F5C2E1",
  borderSubtle: "#FCE7F3",
  scorecardBg: "#1A1020",
  scorecardAccentColor: "#FF62BA",
  scorecardDivider: "#3F2B49",
  scorecardLabelColor: "#E9CCE0",
  scorecardGridColor: "#493451",
  scorecardLogoBg: "#FFFFFF",
  scorecardLogoBorder: "#F5C2E1",
  ctaTextColor: "#FFFFFF",
  logo: storylaneLogo,
  scorecardLogo: (
    <img
      src="/logos/storylane.svg"
      alt="Storylane"
      width={144}
      height={32}
      style={{ objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "storylane",
  dimensionLabels: {
    memory: "Demo Formats",
    orchestration: "Demo Architecture",
    automation: "Go-To-Market Ops",
    extensibility: "Distribution Surface",
    workflows: "Viewer Journey",
    prompting: "Personalization",
    bestPractices: "Demo Judgment",
  },
  archetypes: [
    {
      title: "Demo Systems Operator",
      emoji: "🎛️",
      description:
        "You think in demo systems, not screenshots. Structure, personalization, buyer journeys, and downstream GTM signal are all part of the same operating model.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Interactive Demo Architect",
      emoji: "🏗️",
      description:
        "You know how to build demos that sell: guided where it matters, sandbox where it helps, and measured where revenue teams need visibility.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Revenue Demo Builder",
      emoji: "📈",
      description:
        "You have solid Storylane instincts. A few sharper calls around analytics, distribution, and format choice would move you into the top tier.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Journey Designer",
      emoji: "🧭",
      description:
        "You understand the flow of a product story, though some of the deeper rep-enablement and buyer-signal mechanics still need tightening.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Demo Builder",
      emoji: "🛠️",
      description:
        "You can get useful demos live, but not every Storylane surface is working together as one coordinated funnel yet.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Walkthrough Maker",
      emoji: "👣",
      description:
        "You know the basics of interactive product storytelling, but the more strategic operator layer still has room to develop.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "Fresh Clickthrough",
      emoji: "🌱",
      description:
        "You are at the beginning. The next step is understanding when Storylane is a guided path, a sandbox, a buyer hub, or a rep-distribution system.",
      minScore: 0,
      maxScore: 39,
    },
  ],
  challenges: [
    {
      type: "truth_or_myth",
      id: 1,
      dimension: "bestPractices",
      statement:
        "For limited interactive demos, Storylane recommends keeping the path roughly within 8 to 12 steps and splitting longer flows into chapters",
      isTrue: true,
      explanation:
        "That is explicit Storylane guidance. If the flow gets longer, chapters are the cleaner way to preserve comprehension and momentum.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "workflows",
      statement:
        "Storylane only supports one demo mode, so a guided demo cannot be converted into a sandbox-style experience through URL behavior",
      isTrue: false,
      explanation:
        "That is false. Storylane documents `hide_all=true` as the supported way to remove the guided hotspots and create a more sandbox-style experience.",
    },
    {
      type: "this_or_that",
      id: 3,
      dimension: "orchestration",
      scenario:
        "Your Storylane flow is pushing past 15 steps and viewers are dropping before the product payoff. Which move is stronger?",
      optionA: "Split the experience into chapters or separate focused demos",
      optionB: "Keep one long uninterrupted path so buyers see everything in one sitting",
      correct: "A",
      explanation:
        "Storylane explicitly nudges teams toward tighter flows. Chapters preserve narrative without turning the demo into an endurance test.",
    },
    {
      type: "this_or_that",
      id: 4,
      dimension: "prompting",
      scenario:
        "You want an outbound rep to send a demo that feels tailored to one account and still tracks who viewed it. Which move is stronger?",
      optionA: "Send the same generic public link to every prospect and infer engagement later",
      optionB: "Send a tokenized or email-appended Storylane link so the demo personalizes and the lead is identifiable",
      correct: "B",
      explanation:
        "Storylane supports URL-based personalization tokens and appending viewer email to links, which is the more operator-grade way to distribute demos.",
    },
    {
      type: "quick_pick",
      id: 5,
      dimension: "memory",
      scenario:
        "Which Storylane product surface is built to package multiple assets for buyer-facing follow-up, including demos and supporting collateral?",
      blank: "Buyer Hub",
      options: ["Presenter Mode", "Buyer Hub", "Chrome Extension"],
      explanation:
        "Buyer Hub is the packaged buyer-facing experience. It is about consolidating what a prospect needs after or around the demo itself.",
    },
    {
      type: "quick_pick",
      id: 6,
      dimension: "extensibility",
      scenario:
        "Which URL parameter is the documented switch for hiding a demo's guided steps?",
      blank: "hide_all=true",
      options: ["tour=off", "hide_all=true", "sandbox_mode=1"],
      explanation:
        "The documented parameter is hide_all=true. That is the supported link-level way to suppress the guided overlays.",
    },
    {
      type: "speed_pick",
      id: 7,
      dimension: "automation",
      prompt: "Tap every real Storylane product or operator surface!",
      correctItems: ["Guided Demos", "Sandbox Demos", "Buyer Hub", "RepX", "Presenter Mode"],
      wrongItems: ["GPU kernels", "Warehouse robotics", "Feature flags console", "Email warmup engine"],
      timeLimit: 15,
      explanation:
        "Those are all real Storylane surfaces or workflows. The others belong to totally different product categories.",
    },
    {
      type: "speed_pick",
      id: 8,
      dimension: "workflows",
      prompt: "Tap every buyer or seller signal Storylane surfaces in its Buyer Hub analytics!",
      correctItems: ["Demos viewed", "Last view", "Time spent", "CTA clicked", "% completion"],
      wrongItems: ["Laptop battery health", "Git commit count", "SQL query plan", "Support seat utilization"],
      timeLimit: 15,
      explanation:
        "Those are exactly the kinds of engagement signals Storylane highlights for buyer-hub usage and follow-up workflows.",
    },
    {
      type: "odd_one_out",
      id: 9,
      dimension: "bestPractices",
      prompt:
        "One of these is NOT a strong Storylane distribution or personalization move. Which one?",
      items: [
        "Append viewer email to the demo URL when you need lead-level attribution",
        "Use personalization tokens in the URL for account-specific copy",
        "Keep a generic static link for every prospect because context does not matter",
        "Turn long demos into tighter chaptered experiences before you distribute them",
      ],
      oddItem: "Keep a generic static link for every prospect because context does not matter",
      explanation:
        "That is the weak move. Storylane is strongest when the demo link itself carries context, identity, or a purposeful journey shape.",
    },
    {
      type: "odd_one_out",
      id: 10,
      dimension: "extensibility",
      prompt:
        "One of these is NOT true about Storylane Presenter Mode. Which one?",
      items: [
        "It is launched through the Chrome extension",
        "It can hide guide text from the audience while the presenter continues",
        "Presenter notes are documented for HTML demos",
        "Public viewers can see your private presenter notes directly in the demo",
      ],
      oddItem: "Public viewers can see your private presenter notes directly in the demo",
      explanation:
        "That is the false one. Presenter Mode is explicitly about helping the seller present cleanly without exposing the backstage guidance to the audience.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "⚡", ids: [1, 2], tagline: "Storylane reality or invented demo folklore?" },
    { name: "This or That", icon: "🆚", ids: [3, 4], tagline: "Pick the operator-grade move" },
    { name: "Quick Pick", icon: "🎯", ids: [5, 6], tagline: "Recall the exact surface" },
    { name: "Speed Round", icon: "⏱️", ids: [7, 8], tagline: "Recognize the real GTM signals" },
    { name: "Odd One Out", icon: "👀", ids: [9, 10], tagline: "Spot the weak demo instinct" },
  ],
};
