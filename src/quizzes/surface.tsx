import type { QuizConfig } from "@/components/quiz/types";

const surfaceLogo = (
  <img
    src="/logos/surface-labs.png"
    alt="Surface"
    width={151}
    height={44}
    style={{ objectFit: "contain" }}
  />
);

export const surfaceConfig: QuizConfig = {
  slug: "surface",
  toolName: "Surface",
  tagline: "6 rounds. ~3 min. No demo call required.",
  subtitle: "Medium difficulty. Product-operator questions, not vague marketing fluff.",
  sansFont: "geist",
  serifFont: "source-serif-4",
  accentColor: "#004EEB",
  accentColorDim: "#003DC0",
  accentColorSubtle: "rgba(0,78,235,0.10)",
  bgColor: "#F7F7F7",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFEFA",
  bgSurfaceLight: "#E9EDF6",
  textColor: "#181818",
  textSecondary: "#5F6672",
  textTertiary: "#8B8985",
  borderColor: "#DCDCDC",
  borderSubtle: "#EDEDED",
  scorecardBg: "#0B1029",
  scorecardAccentColor: "#8FB0FF",
  scorecardDivider: "#24335D",
  scorecardLabelColor: "#AFC1EF",
  scorecardGridColor: "#24335D",
  scorecardLogoBg: "#FFFFFF",
  scorecardLogoBorder: "#DCDCDC",
  ctaTextColor: "#FFFFFF",
  logo: surfaceLogo,
  scorecardLogo: (
    <img
      src="/logos/surface-labs.png"
      alt="Surface"
      width={135}
      height={39}
      style={{ objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "surface",
  dimensionLabels: {
    memory: "Forms & Logic",
    orchestration: "Routing & Sync",
    automation: "AI Agents",
    extensibility: "Integrations & MCP",
    workflows: "Lead Operations",
    prompting: "Enrichment & Qualification",
    bestPractices: "Revenue Hygiene",
  },
  archetypes: [
    {
      title: "Pipeline Orchestrator",
      emoji: "🧠",
      description:
        "You understand Surface as an operating layer for capture, qualification, routing, and sync rather than just a form skin.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Revenue Systems Builder",
      emoji: "🏗️",
      description:
        "You know how the product pieces fit across forms, enrichment, workflows, and downstream CRM handoff.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Workflow Operator",
      emoji: "⚙️",
      description:
        "You have solid product instincts around Surface, but a few deeper system-level decisions still separate you from expert operator territory.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Funnel Tactician",
      emoji: "🎯",
      description:
        "You understand the practical use cases, though some of the AI and integration surfaces are still a layer below your current model.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Capture Manager",
      emoji: "📥",
      description:
        "You know what Surface is for, but the operational leverage across routing, sync, and qualification is still only partially mapped.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Lead Handler",
      emoji: "🧾",
      description:
        "You have the basic shape, but the deeper workflow design layer is still fuzzy.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "Raw Traffic",
      emoji: "🌱",
      description:
        "You just met the product. There is more here than embedded forms and a thank-you page.",
      minScore: 0,
      maxScore: 39,
    },
  ],
  challenges: [
    {
      type: "truth_or_myth",
      id: 1,
      dimension: "memory",
      statement:
        "Surface forms support conditional logic so what a visitor sees can change based on previous answers",
      isTrue: true,
      explanation:
        "Conditional logic is part of the forms/workflows layer, which is a core product surface rather than an add-on gimmick.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "prompting",
      statement:
        "Surface positions enrichment as a way to add context to inbound leads before routing or follow-up decisions are made",
      isTrue: true,
      explanation:
        "The product narrative leans on enriching captured leads so qualification and downstream action are smarter.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "extensibility",
      statement:
        "Surface is designed to work only as a standalone database and deliberately avoids CRM or go-to-market integrations",
      isTrue: false,
      explanation:
        "Integrations are part of the product story. The value is in capture plus downstream sync and workflow action, not isolation.",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "automation",
      statement:
        "Surface is limited to static forms and does not extend into AI-agent-driven workflows",
      isTrue: false,
      explanation:
        "AI agents appear in the product navigation and expand Surface beyond plain lead capture.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "workflows",
      scenario:
        "A team wants every inbound submission to land in one operating view where reps can work leads instead of bouncing between inboxes and spreadsheets. Which approach fits Surface better?",
      optionA: "Use a central lead table with workflow actions",
      optionB: "Email each submission around and reconcile manually",
      correct: "A",
      explanation:
        "The lead table and workflow layer are meant to turn submissions into an operable queue, not scattered notifications.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "orchestration",
      scenario:
        "You need routing logic that branches based on qualification answers and then syncs the right destination system. Which move is stronger?",
      optionA: "Use one generic form and manually triage every response later",
      optionB: "Build it through forms + workflows + integrations",
      correct: "B",
      explanation:
        "Surface is strongest when capture, logic, and downstream action are linked instead of treated as separate manual steps.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "bestPractices",
      scenario:
        "Your ops team wants tighter data hygiene on inbound demand. What is the stronger operating posture?",
      optionA: "Push raw unqualified leads everywhere and clean them up later",
      optionB: "Qualify and enrich before handing off to the rest of the GTM stack",
      correct: "B",
      explanation:
        "That is the whole leverage point: better capture and qualification before downstream noise spreads.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "memory",
      scenario:
        "Which Surface capability changes later form steps based on earlier responses?",
      blank: "Conditional logic",
      options: ["Static embeds", "Conditional logic", "Lead scoring only"],
      explanation:
        "Conditional logic is the mechanism for adaptive form flow.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "extensibility",
      scenario:
        "Which integration surface appears in Surface's product ecosystem story for connecting other tools and agents?",
      blank: "MCP",
      options: ["Browser bookmarks", "Theme packs", "MCP"],
      explanation:
        "Surface is listed in the MCP ecosystem, which signals an integration surface beyond simple embeds.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "automation",
      scenario:
        "Which Surface feature pushes the product beyond static form collection into active system behavior?",
      blank: "AI agents",
      options: ["PDF exports only", "AI agents", "Hex colors"],
      explanation:
        "AI agents are explicitly part of the product offering and are what move it beyond simple forms.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "workflows",
      prompt: "Tap every thing that fits Surface's core inbound workflow story!",
      correctItems: ["Forms", "Workflows", "Lead table", "Lead routing"],
      wrongItems: ["Video hosting", "Payroll", "Server monitoring", "Warehouse scanning"],
      timeLimit: 15,
      explanation:
        "Surface is about inbound capture and GTM operations, not unrelated back-office or infra categories.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "extensibility",
      prompt: "Tap every Surface-aligned system connection or extension concept!",
      correctItems: ["Integrations", "CRM sync", "Enrichment", "MCP"],
      wrongItems: ["GPU training jobs", "Package registry", "DNS hosting", "Mobile game engine"],
      timeLimit: 15,
      explanation:
        "Those are the surrounding surfaces that make Surface useful in a live GTM stack.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "prompting",
      prompt: "One of these is NOT aligned with Surface's lead qualification story. Which one?",
      items: ["Enrichment", "Qualification logic", "Lead scoring context", "Blind raw intake forever"],
      oddItem: "Blind raw intake forever",
      explanation:
        "Surface is trying to make inbound better before handoff, not preserve chaos as a feature.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "automation",
      prompt: "One of these is NOT part of the product's active-operations posture. Which one?",
      items: ["AI agents", "Workflows", "Automated routing", "Manual spreadsheet cleanup as the main engine"],
      oddItem: "Manual spreadsheet cleanup as the main engine",
      explanation:
        "The product is positioned around automation and operational flow, not spreadsheet janitorial work as the core motion.",
    },
    {
      type: "truth_or_myth",
      id: 15,
      dimension: "orchestration",
      statement:
        "Surface makes the most sense when forms, enrichment, qualification, routing, and downstream sync are treated as one connected workflow rather than separate tools glued together later",
      isTrue: true,
      explanation:
        "That connected-workflow framing is the real product model. Thinking of it as 'just a form' misses the point.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "?", ids: [1, 2, 3, 4], tagline: "Real product surface or fake?" },
    { name: "This or That", icon: "vs", ids: [5, 6, 7], tagline: "Pick the stronger ops move" },
    { name: "Quick Pick", icon: ">>", ids: [8, 9, 10], tagline: "Name the product mechanism" },
    { name: "Speed Round", icon: "::", ids: [11, 12], tagline: "Capture stack only" },
    { name: "Odd One Out", icon: "//", ids: [13, 14], tagline: "Spot the anti-pattern" },
    { name: "Final Boss", icon: "*", ids: [15], tagline: "One shot. Connected workflow thinking." },
  ],
};
