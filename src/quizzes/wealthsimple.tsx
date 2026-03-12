import type { QuizConfig } from "@/components/quiz/types";

export const wealthsimpleConfig: QuizConfig = {
  slug: "wealthsimple",
  toolName: "Wealthsimple",
  tagline: "6 rounds. ~3 min. No account required.",
  subtitle:
    "Think you know Wealthsimple? Test investing, tax optimization, account types, and financial literacy.",
  sansFont: "inter",
  serifFont: "instrument-serif",
  accentColor: "#28A745",
  accentColorDim: "#228C3A",
  accentColorSubtle: "rgba(40,167,69,0.10)",
  bgColor: "linear-gradient(145deg, #F5FBF7 0%, #EEF8F0 55%, #E5F2E8 100%)",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#EAF5EC",
  textColor: "#0F2018",
  textSecondary: "#2A5035",
  textTertiary: "#5A8065",
  borderColor: "#C8E2CC",
  borderSubtle: "#D8EEDD",
  scorecardBg: "#0A1A0F",
  scorecardAccentColor: "#66E88A",
  scorecardDivider: "#1A4025",
  scorecardLabelColor: "#98C8A5",
  scorecardGridColor: "#1A4025",
  navbarTheme: "light",
  logo: (
    <img
      src="/logos/wealthsimple.svg"
      alt="Wealthsimple"
      width={44}
      height={44}
      style={{ objectFit: "contain", borderRadius: 12 }}
    />
  ),
  scorecardLogo: (
    <img
      src="/logos/wealthsimple.svg"
      alt="Wealthsimple"
      width={42}
      height={42}
      style={{ objectFit: "contain", borderRadius: 12 }}
    />
  ),
  analyticsPrefix: "wealthsimple",
  dimensionLabels: {
    memory: "Product Suite",
    orchestration: "Portfolio Design",
    automation: "Tax Optimization",
    extensibility: "Account Types",
    workflows: "Investment Ops",
    prompting: "Feature Recall",
    bestPractices: "Financial Discipline",
  },
  archetypes: [
    {
      title: "Wealthsimple Grandmaster",
      emoji: "🏆",
      description:
        "You understand every product, tax strategy, and portfolio optimization lever.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Portfolio Architect",
      emoji: "🧠",
      description:
        "Strong command of asset allocation, tax-loss harvesting, and account strategy.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Power Investor",
      emoji: "⚡",
      description:
        "You use Wealthsimple's tools effectively for tax-efficient wealth building.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Skilled Saver",
      emoji: "🛠️",
      description:
        "Good fundamentals with room for deeper tax and portfolio optimization.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Practitioner",
      emoji: "📈",
      description: "You can invest and manage accounts effectively day to day.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Explorer",
      emoji: "🌱",
      description:
        "Good start. More reps on tax strategies and account types will help.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "First Steps",
      emoji: "🚀",
      description: "Clear path to sophisticated wealth management.",
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
        "Wealthsimple's managed portfolios use a passive index-based strategy with automatic rebalancing rather than active stock picking",
      isTrue: true,
      explanation:
        "Passive indexing with auto-rebalancing is core to their managed investing approach.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "automation",
      statement:
        "Tax-loss harvesting in Wealthsimple automatically sells losing positions and replaces them with similar assets to realize tax losses while maintaining market exposure",
      isTrue: true,
      explanation:
        "TLH captures tax deductions while keeping portfolio allocation intact.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "orchestration",
      statement:
        "TFSA contribution room resets every January 1st regardless of withdrawals made in the previous year",
      isTrue: false,
      explanation:
        "TFSA withdrawal room is restored the following calendar year, not immediately.",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "bestPractices",
      statement:
        "Wealthsimple Cash offers CDIC protection on deposits up to $100,000 per eligible category",
      isTrue: true,
      explanation: "Deposits are held at partner banks with CDIC coverage.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "automation",
      scenario: "You want to minimize taxes on investment gains. Better Wealthsimple strategy?",
      optionA:
        "Use TFSA for high-growth assets and RRSP for income-generating ones",
      optionB: "Put everything in a taxable account",
      correct: "A",
      explanation:
        "Tax-sheltered accounts optimize after-tax returns based on asset type.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "orchestration",
      scenario: "You received a large bonus. Better approach for investing it?",
      optionA:
        "Lump sum invest based on historical evidence of time-in-market advantage",
      optionB: "Wait for a market dip that may never come",
      correct: "A",
      explanation:
        "Research shows lump sum beats dollar-cost averaging about 2/3 of the time.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "workflows",
      scenario: "For retirement planning, what matters more?",
      optionA:
        "Consistent contributions with appropriate asset allocation for time horizon",
      optionB: "Trying to pick individual winning stocks",
      correct: "A",
      explanation:
        "Systematic investing with proper allocation beats stock picking for most investors.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "memory",
      scenario: "Canadian tax-sheltered account with no tax on withdrawals:",
      blank: "TFSA",
      options: ["TFSA", "RRSP", "RESP"],
      explanation:
        "TFSA contributions are after-tax but growth and withdrawals are completely tax-free.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "extensibility",
      scenario: "Wealthsimple product for commission-free self-directed stock trading:",
      blank: "Wealthsimple Trade",
      options: ["Wealthsimple Trade", "Wealthsimple Invest", "Wealthsimple Save"],
      explanation:
        "Trade is the self-directed platform for buying individual stocks and ETFs.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "automation",
      scenario:
        "Strategy that sells losing investments to offset capital gains taxes:",
      blank: "Tax-loss harvesting",
      options: ["Tax-loss harvesting", "Dollar-cost averaging", "Portfolio rebalancing"],
      explanation:
        "Tax-loss harvesting realizes losses strategically to reduce tax burden.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "extensibility",
      prompt: "Tap every real Wealthsimple product!",
      correctItems: ["Trade", "Managed Invest", "Cash", "Tax"],
      wrongItems: ["Kubernetes", "Docker Hub", "GraphQL", "Terraform"],
      timeLimit: 15,
      explanation: "These are core Wealthsimple products.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "workflows",
      prompt: "Tap every strong investing practice!",
      correctItems: [
        "Diversification",
        "Tax-sheltered accounts",
        "Regular rebalancing",
        "Long time horizon",
      ],
      wrongItems: [
        "Market timing",
        "Single stock bets",
        "Panic selling",
        "Ignoring fees",
      ],
      timeLimit: 15,
      explanation: "Strong investing requires discipline and diversification.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "automation",
      prompt: "One is NOT a Wealthsimple product. Which one?",
      items: ["Trade", "Cash", "Tax", "Wealthsimple Kubernetes"],
      oddItem: "Wealthsimple Kubernetes",
      explanation:
        "Trade, Cash, and Tax are real products. Wealthsimple Kubernetes doesn't exist.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "bestPractices",
      prompt: "Which practice most harms long-term returns?",
      items: [
        "Regular contributions",
        "Diversified portfolio",
        "Tax-loss harvesting",
        "Panic selling during market drops",
      ],
      oddItem: "Panic selling during market drops",
      explanation:
        "Panic selling locks in losses and prevents recovery when markets rebound.",
    },
    {
      type: "odd_one_out",
      id: 15,
      dimension: "orchestration",
      prompt: "Final boss: weakest wealth-building strategy?",
      items: [
        "Passive index investing",
        "TFSA/RRSP optimization",
        "Automatic rebalancing",
        "100% in a single speculative stock with no tax strategy",
      ],
      oddItem: "100% in a single speculative stock with no tax strategy",
      explanation:
        "Concentration and lack of tax strategy maximize risk and minimize after-tax returns.",
    },
  ],
  rounds: [
    {
      name: "Truth or Myth",
      icon: "?",
      ids: [1, 2, 3, 4],
      tagline: "Real feature or total BS?",
    },
    {
      name: "This or That",
      icon: "vs",
      ids: [5, 6, 7],
      tagline: "Pick the smarter move",
    },
    {
      name: "Quick Pick",
      icon: ">>",
      ids: [8, 9, 10],
      tagline: "Name that feature",
    },
    {
      name: "Speed Round",
      icon: "::",
      ids: [11, 12],
      tagline: "Tap fast, think faster",
    },
    {
      name: "Odd One Out",
      icon: "//",
      ids: [13, 14],
      tagline: "Spot the fake",
    },
    {
      name: "Final Boss",
      icon: "*",
      ids: [15],
      tagline: "One shot. Expert level.",
    },
  ],
};
