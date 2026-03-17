import type { QuizConfig } from "@/components/quiz/types";

const huddle01Logo = (
  <img
    src="/logos/huddle01-cloud.png"
    alt="Huddle01 Cloud"
    width={172}
    height={24}
    style={{ objectFit: "contain" }}
  />
);

export const huddle01Config: QuizConfig = {
  slug: "huddle01",
  toolName: "Huddle01 Cloud",
  tagline: "5 rounds. ~3 min. No hyperscaler bill shock required.",
  subtitle:
    "Built for operators who actually evaluate cloud economics. AI inference, managed Docker and Kubernetes, load balancing, dedicated AMD EPYC compute, and transparent billing instincts.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#00D3F3",
  accentColorDim: "#00B8DB",
  accentColorSubtle: "rgba(0, 211, 243, 0.12)",
  bgColor: "#081A21",
  bgElevated: "#0D242D",
  bgSurface: "#102A34",
  bgSurfaceLight: "#133540",
  textColor: "#ECFEFF",
  textSecondary: "#B9EDF4",
  textTertiary: "#8FD9E6",
  borderColor: "rgba(162, 244, 253, 0.24)",
  borderSubtle: "rgba(162, 244, 253, 0.14)",
  scorecardBg: "#061318",
  scorecardAccentColor: "#00D3F3",
  scorecardDivider: "rgba(162, 244, 253, 0.18)",
  scorecardLabelColor: "#CFFAFE",
  scorecardGridColor: "rgba(162, 244, 253, 0.16)",
  scorecardLogoBg: "rgba(255,255,255,0.04)",
  scorecardLogoBorder: "rgba(162, 244, 253, 0.18)",
  ctaTextColor: "#053345",
  logo: huddle01Logo,
  scorecardLogo: (
    <img
      src="/logos/huddle01-cloud.png"
      alt="Huddle01 Cloud"
      width={172}
      height={24}
      style={{ objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "huddle01",
  dimensionLabels: {
    memory: "Core Services",
    orchestration: "Workload Fit",
    automation: "Cost Model",
    extensibility: "Deployment Surface",
    workflows: "Ops Judgment",
    prompting: "Platform Comparison",
    bestPractices: "Infra Instincts",
  },
  archetypes: [
    {
      title: "Cloud Economics Operator",
      emoji: "☁️",
      description:
        "You read Huddle01 Cloud the way an infra buyer should: through control, performance, workload fit, and cost structure instead of generic cloud mythology.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Inference Platform Builder",
      emoji: "🧠",
      description:
        "You have strong instincts around where Huddle01 Cloud fits for AI inference, managed workloads, and cost-sensitive production teams.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Modern Infra Evaluator",
      emoji: "🛠️",
      description:
        "You understand the platform well, especially the tradeoff between hyperscaler sprawl and focused cloud primitives.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Workload Mapper",
      emoji: "📦",
      description:
        "Your instincts are good, but a few service-boundary details still need tightening.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Cloud Shopper",
      emoji: "🧭",
      description:
        "You understand the broad pitch, but you are not consistently separating deployment surfaces, pricing shape, and workload fit yet.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Compute Explorer",
      emoji: "🌐",
      description:
        "You have partial recall, though the sharper operator-level distinctions are still blurry.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "Fresh Out Of The Hyperscaler Maze",
      emoji: "🌱",
      description:
        "You are early. Start by mapping Huddle01 Cloud around its core services, transparent billing model, and AI workload positioning.",
      minScore: 0,
      maxScore: 39,
    },
  ],
  challenges: [
    {
      type: "truth_or_myth",
      id: 1,
      dimension: "automation",
      statement:
        "Huddle01 Cloud currently positions itself around bare metal performance, cloud flexibility, transparent pricing, and full control",
      isTrue: true,
      explanation:
        "That is the live homepage framing. The product is sold on performance and economics, not on generic cloud sprawl.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "memory",
      statement:
        "Huddle01 Cloud's AI/ML surface is basically only virtual machines, with no managed Docker, managed Kubernetes, block storage, load balancer, or AI inference layer",
      isTrue: false,
      explanation:
        "That is false. The current AI/ML positioning explicitly calls out Virtual Machines, AI Inference, Managed Docker, Block Storage, Managed Kubernetes, and Load Balancer.",
    },
    {
      type: "this_or_that",
      id: 3,
      dimension: "orchestration",
      scenario:
        "Your team wants to ship model-serving containers fast without managing the underlying servers. Which Huddle01 Cloud move is more aligned?",
      optionA: "Use Managed Docker as the shortest path from image to production inference pipeline",
      optionB: "Treat raw VMs as the default even when the goal is containerized model serving without infra management",
      correct: "A",
      explanation:
        "The site positions Managed Docker as the simple path from trained model to inference pipeline in production.",
    },
    {
      type: "this_or_that",
      id: 4,
      dimension: "bestPractices",
      scenario:
        "You need long-running model training on dedicated compute with no noisy neighbours and direct control over attached datasets. Which choice maps better?",
      optionA: "Dedicated virtual machines with AMD EPYC vCPUs plus attached block storage",
      optionB: "Force everything through a load balancer-first setup as if training and traffic distribution were the same job",
      correct: "A",
      explanation:
        "The AI/ML flow explicitly frames VMs plus block storage as the fit for training and fine-tuning workloads.",
    },
    {
      type: "quick_pick",
      id: 5,
      dimension: "memory",
      scenario:
        "Which processor family does Huddle01 Cloud explicitly call out for its dedicated compute nodes?",
      blank: "AMD EPYC",
      options: ["Intel Xeon", "AMD EPYC", "Apple M-series"],
      explanation:
        "The site repeatedly highlights dedicated AMD EPYC compute for VMs and managed Kubernetes nodes.",
    },
    {
      type: "quick_pick",
      id: 6,
      dimension: "automation",
      scenario:
        "Which billing shape is explicitly used as a differentiator against hyperscalers?",
      blank: "Per-second, transparent",
      options: ["Per-request with premium egress", "Per-second, transparent", "Annual reserved only"],
      explanation:
        "Huddle01 Cloud contrasts its pricing with per-hour plus extras, emphasizing transparent per-second billing and no hidden fees.",
    },
    {
      type: "speed_pick",
      id: 7,
      dimension: "extensibility",
      prompt: "Tap every real Huddle01 Cloud core service currently called out for AI/ML workloads!",
      correctItems: [
        "Virtual Machines",
        "AI Inference",
        "Managed Docker",
        "Managed Kubernetes",
        "Load Balancer",
        "Block Storage",
      ],
      wrongItems: [
        "Serverless spreadsheets",
        "No-code ETL studio",
        "Warehouse BI",
        "Design tokens CDN",
      ],
      timeLimit: 15,
      explanation:
        "Those are the current service surfaces listed on the AI/ML page. The others are invented.",
    },
    {
      type: "speed_pick",
      id: 8,
      dimension: "prompting",
      prompt: "Tap every real cloud comparison target Huddle01 Cloud currently lists!",
      correctItems: ["AWS", "Google Cloud", "Azure", "Digital Ocean", "Vultr"],
      wrongItems: ["Figma", "Snowflake", "Twilio", "Canva"],
      timeLimit: 15,
      explanation:
        "Those are live comparison targets on the current site and reflect how Huddle01 Cloud frames its market position.",
    },
    {
      type: "odd_one_out",
      id: 9,
      dimension: "workflows",
      prompt:
        "One of these is NOT a real Huddle01 Cloud workflow or platform claim. Which one?",
      items: [
        "Unlimited egress included",
        "Managed Kubernetes with control plane handled for you",
        "Dedicated GPUs for AI inference on bare metal",
        "Mandatory vendor lock-in through 200+ ancillary services",
      ],
      oddItem: "Mandatory vendor lock-in through 200+ ancillary services",
      explanation:
        "That is the opposite of the pitch. The platform is explicitly framed as focused, transparent, and low-lock-in compared with hyperscaler sprawl.",
    },
    {
      type: "odd_one_out",
      id: 10,
      dimension: "bestPractices",
      prompt:
        "One of these is the weak operator instinct when evaluating Huddle01 Cloud. Which one?",
      items: [
        "Match Managed Docker to fast containerized model serving",
        "Use VMs plus block storage for training and fine-tuning jobs",
        "Treat the load balancer as the traffic layer for spiky inference demand",
        "Assume per-hour billing with hidden extras is basically the same as transparent per-second billing",
      ],
      oddItem:
        "Assume per-hour billing with hidden extras is basically the same as transparent per-second billing",
      explanation:
        "That is the weak instinct. Huddle01 Cloud leans hard on pricing shape and hidden-fee avoidance as part of the product decision.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "⚡", ids: [1, 2], tagline: "Current product reality or leftover cloud fiction?" },
    { name: "This or That", icon: "🆚", ids: [3, 4], tagline: "Map the workload to the right surface" },
    { name: "Quick Pick", icon: "🎯", ids: [5, 6], tagline: "Recall the exact infra and billing signals" },
    { name: "Speed Round", icon: "⏱️", ids: [7, 8], tagline: "Recognize the real service and comparison set" },
    { name: "Odd One Out", icon: "👀", ids: [9, 10], tagline: "Spot the bad cloud-buying instinct" },
  ],
};
