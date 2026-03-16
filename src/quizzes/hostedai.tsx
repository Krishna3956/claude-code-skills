import type { QuizConfig } from "@/components/quiz/types";

const hostedAiLogo = (
  <img
    src="/logos/hostedai.svg"
    alt="Hosted.ai"
    width={168}
    height={40}
    style={{ objectFit: "contain" }}
  />
);

export const hostedaiConfig: QuizConfig = {
  slug: "hostedai",
  toolName: "Hosted.ai",
  tagline: "5 rounds. ~3 min. No GPU cluster required.",
  subtitle:
    "Built for serious GPUaaS operators. VM vs GPUaaS tradeoffs, pool-based scheduling, overcommit policy, billing logic, and multi-tenant platform judgment.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#4C64BF",
  accentColorDim: "#3F53A3",
  accentColorSubtle: "rgba(76,100,191,0.12)",
  bgColor: "#F6F8FD",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#EEF2FF",
  textColor: "#151A2D",
  textSecondary: "#4A577C",
  textTertiary: "#6C7798",
  borderColor: "#D5DCF4",
  borderSubtle: "#E8ECFA",
  scorecardBg: "#12182D",
  scorecardAccentColor: "#7E94F2",
  scorecardDivider: "#2D3A67",
  scorecardLabelColor: "#D6DDFB",
  scorecardGridColor: "#2D3A67",
  scorecardLogoBg: "#FFFFFF",
  scorecardLogoBorder: "#D5DCF4",
  ctaTextColor: "#FFFFFF",
  logo: hostedAiLogo,
  scorecardLogo: (
    <img
      src="/logos/hostedai.svg"
      alt="Hosted.ai"
      width={152}
      height={36}
      style={{ objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "hostedai",
  dimensionLabels: {
    memory: "Compute Models",
    orchestration: "GPU Pooling",
    automation: "Scheduling Logic",
    extensibility: "Platform Surface",
    workflows: "Tenant Operations",
    prompting: "Workload Fit",
    bestPractices: "GPUaaS Judgment",
  },
  archetypes: [
    {
      title: "GPUaaS Platform Operator",
      emoji: "🧠",
      description:
        "You think like an infrastructure operator, not a GPU reseller. Pool policy, tenancy boundaries, billing mechanics, and workload fit all connect for you.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Cloud Compute Architect",
      emoji: "🏗️",
      description:
        "You understand Hosted.ai at the control-plane level. A few sharper calls around product boundaries and scheduling tradeoffs would put you at the very top.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Multi-Tenant GPU Builder",
      emoji: "⚙️",
      description:
        "You are operating with strong instincts. The remaining gap is mostly in the harder VM-versus-GPUaaS and packaging decisions.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Infrastructure Orchestrator",
      emoji: "🧭",
      description:
        "You know the platform shape well, though some of the deeper scheduling and tenancy distinctions still blur occasionally.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Resource Pool Manager",
      emoji: "🗂️",
      description:
        "You understand the operating model, but a few advanced Hosted.ai calls still feel more familiar than fully internalized.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Cluster Packager",
      emoji: "📦",
      description:
        "You have the right categories in mind, but you are not yet consistently making the highest-leverage platform decisions.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "Fresh GPUaaS Admin",
      emoji: "🌱",
      description:
        "You are early. The next step is learning how Hosted.ai separates VM infrastructure, GPUaaS pooling, tenancy, billing, and utilization strategy.",
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
        "Hosted.ai offers both traditional VM Instances and GPUaaS Instances rather than forcing every workload into a single compute model",
      isTrue: true,
      explanation:
        "That is explicit in the docs. Hosted.ai separates VM Instances from GPUaaS Instances because they solve different infrastructure and tenancy needs.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "prompting",
      statement:
        "GPUaaS Instances are the 1:1 GPU passthrough KVM option for workloads that need full OS control and no GPU sharing",
      isTrue: false,
      explanation:
        "That is false. The docs describe 1:1 GPU passthrough and full OS control under VM Instances. GPUaaS Instances are the Kubernetes-based pooled compute layer.",
    },
    {
      type: "this_or_that",
      id: 3,
      dimension: "prompting",
      scenario:
        "A customer needs long-running environments, custom drivers, persistent storage, and zero GPU sharing. Which Hosted.ai model is stronger?",
      optionA: "VM Instances with traditional virtualization and GPU passthrough",
      optionB: "GPUaaS Instances with shared pool scheduling and pod-style lifecycle",
      correct: "A",
      explanation:
        "That is the VM fit the docs call out directly. Full OS control and no sharing are exactly where VM Instances make more sense than GPUaaS.",
    },
    {
      type: "this_or_that",
      id: 4,
      dimension: "orchestration",
      scenario:
        "You want fast-starting inference workloads across customer teams while maximizing utilization from shared accelerators. Which move is stronger?",
      optionA: "Sell only dedicated 1:1 passthrough VMs for every workload",
      optionB: "Use GPUaaS pools with multi-tenant sharing and policy-driven scheduling",
      correct: "B",
      explanation:
        "Hosted.ai is strongest here when GPUaaS pools can absorb variable workloads and improve card utilization rather than isolating every task into a dedicated VM.",
    },
    {
      type: "quick_pick",
      id: 5,
      dimension: "automation",
      scenario:
        "Which Hosted.ai billing pattern is explicitly called out on the platform page?",
      blank: "Bill for GPU VRAM and TFLOPs consumed",
      options: ["Bill only by seat count", "Bill for GPU VRAM and TFLOPs consumed", "Bill only by static per-user licenses"],
      explanation:
        "The platform page explicitly mentions billing users by GPU VRAM and TFLOPs consumed, alongside fixed-resource or fixed-card billing options.",
    },
    {
      type: "quick_pick",
      id: 6,
      dimension: "extensibility",
      scenario:
        "Which billing or commerce integration does Hosted.ai explicitly mention?",
      blank: "WHMCS",
      options: ["Stripe Billing Portal", "Zuora CPQ", "WHMCS"],
      explanation:
        "WHMCS is explicitly named on the site as an integration point for service-provider billing workflow.",
    },
    {
      type: "speed_pick",
      id: 7,
      dimension: "workflows",
      prompt: "Tap every real Hosted.ai control-plane or tenancy surface!",
      correctItems: ["GPU pools", "RBAC", "Team workspaces", "REST API", "Permissions and limits"],
      wrongItems: ["Ad creative studio", "Warehouse slotting", "Payroll engine", "Email warmup"],
      timeLimit: 15,
      explanation:
        "Those are all real Hosted.ai platform surfaces. The others belong to unrelated product categories.",
    },
    {
      type: "speed_pick",
      id: 8,
      dimension: "automation",
      prompt: "Tap every real GPUaaS characteristic or capability documented by Hosted.ai!",
      correctItems: ["Kubernetes-based pods", "Up to 4 network ports", "Sharing up to 10x", "Infiniband support", "Furiosa NPU support"],
      wrongItems: ["Unlimited browser tabs", "Warehouse scanners", "Managed email relay", "Static IPv6 only"],
      timeLimit: 15,
      explanation:
        "Those are documented GPUaaS details. They distinguish Hosted.ai from a generic VM hosting product.",
    },
    {
      type: "odd_one_out",
      id: 9,
      dimension: "bestPractices",
      prompt:
        "One of these is NOT a strong Hosted.ai packaging instinct. Which one?",
      items: [
        "Use GPUaaS when fast startup and shared inference economics matter",
        "Use VM Instances when customers need full OS control and no sharing",
        "Treat every workload as identical and ignore pool-level sharing policy",
        "Package teams with their own workspaces, users, and permissions",
      ],
      oddItem: "Treat every workload as identical and ignore pool-level sharing policy",
      explanation:
        "That is the weak move. Hosted.ai is built around configuring pools, policies, and packaging around distinct customer and workload needs.",
    },
    {
      type: "odd_one_out",
      id: 10,
      dimension: "extensibility",
      prompt:
        "One of these is NOT a Hosted.ai capability mentioned on the site or docs. Which one?",
      items: [
        "Adaptive scheduling",
        "GPU overcommit",
        "Billing-engine integration",
        "Managed CDN edge rendering",
      ],
      oddItem: "Managed CDN edge rendering",
      explanation:
        "Adaptive scheduling, GPU overcommit, and billing-system integration are all real Hosted.ai capabilities. Managed CDN edge rendering is not part of the product.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "⚡", ids: [1, 2], tagline: "Real platform boundaries or made-up infra lore?" },
    { name: "This or That", icon: "🆚", ids: [3, 4], tagline: "Pick the right compute model" },
    { name: "Quick Pick", icon: "🎯", ids: [5, 6], tagline: "Name the exact Hosted.ai surface" },
    { name: "Speed Round", icon: "⏱️", ids: [7, 8], tagline: "Recognize the real operator primitives" },
    { name: "Odd One Out", icon: "👀", ids: [9, 10], tagline: "Spot the weak GPUaaS instinct" },
  ],
};
