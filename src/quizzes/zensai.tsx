import type { QuizConfig } from "@/components/quiz/types";

const zensaiLogo = (
  <img
    src="/logos/zensai.svg"
    alt="Zensai"
    width={168}
    height={45}
    style={{ objectFit: "contain" }}
  />
);

export const zensaiConfig: QuizConfig = {
  slug: "zensai",
  toolName: "Zensai",
  tagline: "5 rounds. ~3 min. No tenant rollout required.",
  subtitle:
    "Made for power users of Zensai's Human Success Platform. Learn365, Engage365, Perform365, Microsoft 365-native workflows, and admin-grade product judgment.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#FF5E05",
  accentColorDim: "#DB4F04",
  accentColorSubtle: "rgba(255,94,5,0.10)",
  bgColor: "#FFF8F4",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#FFF0E7",
  textColor: "#222222",
  textSecondary: "#5A5A5A",
  textTertiary: "#7B7B7B",
  borderColor: "#F2D2C0",
  borderSubtle: "#FAE8DE",
  scorecardBg: "#222222",
  scorecardAccentColor: "#FF9A66",
  scorecardDivider: "#4D403A",
  scorecardLabelColor: "#EBD6CC",
  scorecardGridColor: "#4D403A",
  scorecardLogoBg: "#FFFFFF",
  scorecardLogoBorder: "#F2D2C0",
  ctaTextColor: "#FFFFFF",
  logo: zensaiLogo,
  scorecardLogo: (
    <img
      src="/logos/zensai.svg"
      alt="Zensai"
      width={154}
      height={41}
      style={{ objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "zensai",
  dimensionLabels: {
    memory: "Suite Model",
    orchestration: "Learn365 Ops",
    automation: "People Workflows",
    extensibility: "Microsoft Surface",
    workflows: "Platform Admin",
    prompting: "AI Usage",
    bestPractices: "Human Success Judgment",
  },
  archetypes: [
    {
      title: "Human Success Operator",
      emoji: "🧠",
      description:
        "You think in learning, engagement, and performance as one operating system inside Microsoft 365. That is exactly the Zensai model.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "M365 Talent Architect",
      emoji: "🏗️",
      description:
        "You understand the suite boundaries, admin levers, and workflow design well. A few sharper distinctions would put you into top-tier operator territory.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Platform Builder",
      emoji: "⚙️",
      description:
        "You are operating with solid Zensai instincts. The remaining gap is mostly around the deeper suite-extension and reporting decisions.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Flow-of-Work Admin",
      emoji: "🧭",
      description:
        "You know the platform surfaces well, though some of the sharper product boundaries still need tightening.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "People Systems Lead",
      emoji: "📋",
      description:
        "You can run the suite productively, but not every advanced Zensai call feels fully internalized yet.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Microsoft-First Practitioner",
      emoji: "💼",
      description:
        "You clearly understand the broad shape, but the admin-grade nuances still need a bit more repetition.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "Fresh Tenant Champion",
      emoji: "🌱",
      description:
        "You are early. The next step is understanding how Learn365, Engage365, and Perform365 work together inside Microsoft 365.",
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
        "Zensai's Human Success Platform unites learning, engagement, and performance natively inside Microsoft 365 rather than asking teams to live in a separate HR stack",
      isTrue: true,
      explanation:
        "That is the core product framing on the site. Zensai positions the suite as Microsoft 365-native, not as another disconnected destination tool.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "workflows",
      statement:
        "Perform365 is built around annual review cycles only, so weekly check-ins and continuous goal tracking are not part of the product model",
      isTrue: false,
      explanation:
        "That is false. Zensai explicitly pushes Perform365 toward weekly check-ins, real-time goals, and continuous performance conversations.",
    },
    {
      type: "this_or_that",
      id: 3,
      dimension: "prompting",
      scenario:
        "Your L&D team needs to create training quickly without leaving the Microsoft tools employees already use. Which move is stronger?",
      optionA: "Use Learn365's AI-powered course creation with Copilot in Word, PowerPoint, or Teams",
      optionB: "Build everything manually in a separate authoring stack and copy it over later",
      correct: "A",
      explanation:
        "Zensai explicitly highlights AI-powered course creation inside Microsoft's surfaces, including Word, PowerPoint, Teams, and Copilot-assisted workflows.",
    },
    {
      type: "this_or_that",
      id: 4,
      dimension: "automation",
      scenario:
        "A people leader wants goals, check-ins, and feedback to stay visible where employees already work after Viva Goals winds down. Which move is stronger?",
      optionA: "Move that motion into Perform365 where goals remain visible in Teams and SharePoint",
      optionB: "Fall back to a spreadsheet and annual review packet because goals no longer have a Microsoft home",
      correct: "A",
      explanation:
        "Zensai explicitly positions Perform365 as a landing place for Viva Goals-style goal and OKR workflows inside Teams and SharePoint.",
    },
    {
      type: "quick_pick",
      id: 5,
      dimension: "orchestration",
      scenario:
        "Which Zensai extension is specifically for connecting Learn365 to 70+ HRIS and HCM systems?",
      blank: "Integrate365",
      options: ["Flow365", "Integrate365", "Content365"],
      explanation:
        "Integrate365 is the HR-system integration product. It enriches user data so training can be assigned more intelligently by role, team, or location.",
    },
    {
      type: "quick_pick",
      id: 6,
      dimension: "workflows",
      scenario:
        "Which Zensai product is explicitly centered on check-ins, recognition, and communication?",
      blank: "Engage365",
      options: ["Perform365", "Engage365", "Learn365"],
      explanation:
        "Engage365 is the engagement layer. Zensai describes it as turning feedback into action through check-ins, recognition, and communication.",
    },
    {
      type: "speed_pick",
      id: 7,
      dimension: "extensibility",
      prompt: "Tap every Microsoft surface Zensai explicitly says the platform works inside!",
      correctItems: ["Teams", "SharePoint", "Outlook", "Copilot"],
      wrongItems: ["Salesforce", "Jira", "Figma", "Cloudflare"],
      timeLimit: 15,
      explanation:
        "Zensai repeatedly positions the suite as embedded in Microsoft 365, especially Teams, SharePoint, Outlook, and Copilot-enabled workflows.",
    },
    {
      type: "speed_pick",
      id: 8,
      dimension: "orchestration",
      prompt: "Tap every real Learn365 extension or capability family from the site!",
      correctItems: ["Flow365", "Content365", "Integrate365", "Power BI dashboards", "Certifications"],
      wrongItems: ["CPPO automation", "Feature flags", "Warehouse routing", "GPU pooling"],
      timeLimit: 15,
      explanation:
        "Those are real Learn365 extensions or reporting capabilities. The others belong to completely different product domains.",
    },
    {
      type: "odd_one_out",
      id: 9,
      dimension: "bestPractices",
      prompt:
        "One of these is NOT a strong Zensai platform instinct. Which one?",
      items: [
        "Use existing Microsoft login and infrastructure to reduce rollout friction",
        "Keep goals, learning, and feedback close to the daily flow of work",
        "Treat learning, engagement, and performance as disconnected projects with separate adoption motions",
        "Use reporting and AI assistance to reduce admin overhead for people leaders",
      ],
      oddItem: "Treat learning, engagement, and performance as disconnected projects with separate adoption motions",
      explanation:
        "That is the weak move. Zensai's whole platform story is about unifying those motions so growth, feedback, and performance reinforce each other.",
    },
    {
      type: "odd_one_out",
      id: 10,
      dimension: "automation",
      prompt:
        "One of these is NOT a Zensai capability or product surface called out on the site. Which one?",
      items: [
        "AI-assisted summaries for managers",
        "360 feedback",
        "Single sign-on with Microsoft 365 credentials",
        "Serverless function deployment",
      ],
      oddItem: "Serverless function deployment",
      explanation:
        "The first three fit Zensai directly. Serverless deployment is unrelated to the Human Success Platform.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "⚡", ids: [1, 2], tagline: "Real platform model or made-up HR software lore?" },
    { name: "This or That", icon: "🆚", ids: [3, 4], tagline: "Choose the operator-grade move" },
    { name: "Quick Pick", icon: "🎯", ids: [5, 6], tagline: "Name the exact Zensai surface" },
    { name: "Speed Round", icon: "⏱️", ids: [7, 8], tagline: "Recognize the real platform primitives" },
    { name: "Odd One Out", icon: "👀", ids: [9, 10], tagline: "Spot the weak Human Success instinct" },
  ],
};
