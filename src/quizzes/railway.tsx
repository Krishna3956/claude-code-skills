import type { QuizConfig } from "@/components/quiz/types";

export const RailwayConfig: QuizConfig = {
  slug: "railway",
  toolName: "Railway",
  tagline: "How well do you know Railway? Test your power-user knowledge of the intelligent cloud platform.",
  subtitle: "Just you vs. Railway challenge trivia.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#7C3AED",
  accentColorDim: "#6D33D0",
  accentColorSubtle: "rgba(124,58,237,0.1)",
  bgColor: "linear-gradient(145deg, #F8FAFC 0%, #FFFFFF 55%, #F3F7FF 100%)",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#EEF2F7",
  textColor: "#0F172A",
  textSecondary: "#334155",
  textTertiary: "#64748B",
  borderColor: "#D7E0EA",
  borderSubtle: "#E7EDF4",
  scorecardBg: "#111827",
  scorecardAccentColor: "#7C3AED",
  scorecardDivider: "#243247",
  scorecardLabelColor: "#AFC2DD",
  scorecardGridColor: "#243247",
  logo: (
    <img
      src="/logos/railway.png"
      alt="Railway"
      width={44}
      height={44}
      style={{ objectFit: "contain", borderRadius: 10 }}
    />
  ),
  scorecardLogo: (
    <img
      src="/logos/railway.png"
      alt="Railway"
      width={42}
      height={42}
      style={{ borderRadius: 10, objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "railway",
  dimensionLabels: {
  "memory": "Compute & Resources",
  "orchestration": "Services & Infrastructure",
  "automation": "Build & Deploy",
  "extensibility": "Networking & Integrations",
  "workflows": "Environments & Collaboration",
  "prompting": "AI & Agent Capabilities",
  "bestPractices": "Observability & Operations"
},
  archetypes: [
  {
    "title": "Railway Grandmaster",
    "emoji": "🏆",
    "description": "You can reason about Railway like a true power user under real constraints.",
    "minScore": 90,
    "maxScore": 100
  },
  {
    "title": "Workflow Architect",
    "emoji": "🧠",
    "description": "Strong command of advanced Railway workflows with only a few edge cases left.",
    "minScore": 80,
    "maxScore": 89
  },
  {
    "title": "Power Operator",
    "emoji": "⚡",
    "description": "You can execute reliably and make good product-level tradeoffs.",
    "minScore": 70,
    "maxScore": 79
  },
  {
    "title": "Skilled Builder",
    "emoji": "🛠️",
    "description": "Solid execution across core features, with room to sharpen advanced depth.",
    "minScore": 60,
    "maxScore": 69
  },
  {
    "title": "Practitioner",
    "emoji": "📈",
    "description": "You can ship practical outcomes and are leveling up fast.",
    "minScore": 50,
    "maxScore": 59
  },
  {
    "title": "Explorer",
    "emoji": "🌱",
    "description": "Great base. More repetition on edge cases will significantly raise your score.",
    "minScore": 40,
    "maxScore": 49
  },
  {
    "title": "First Steps",
    "emoji": "🚀",
    "description": "Strong start. Keep going and mastery is very reachable.",
    "minScore": 0,
    "maxScore": 39
  }
],
  challenges: [
    {
        type: "truth_or_myth",
        id: 1,
        dimension: "memory",
        statement: "On the Pro plan, a single service can scale up to 1,000 vCPU and 1 TB of RAM.",
        isTrue: true,
        explanation: "Railway Pro plan supports up to 1,000 vCPU and 1 TB RAM per service. Enterprise pushes this further to 2,400 vCPU and 2.4 TB RAM."
    },
    {
        type: "truth_or_myth",
        id: 2,
        dimension: "orchestration",
        statement: "Railway's private networking requires manual VPC configuration before services can communicate internally.",
        isTrue: false,
        explanation: "Railway provides up to 100 Gbps internal networking with zero VPC configuration. Private connections are available from the moment you deploy."
    },
    {
        type: "truth_or_myth",
        id: 3,
        dimension: "automation",
        statement: "Railpack produces a smaller base image for Python projects than for Node.js projects, as a percentage reduction over the legacy builder.",
        isTrue: true,
        explanation: "Railpack achieves a 77% smaller base image for Python versus 38% for Node.js compared to the previous Nixpacks-based builder."
    },
    {
        type: "truth_or_myth",
        id: 4,
        dimension: "bestPractices",
        statement: "Railway's log retention on the Hobby plan is 30 days.",
        isTrue: false,
        explanation: "Hobby plan retains logs for 7 days. Pro plan provides 30-day retention, and Enterprise extends this to 90 days."
    },
    {
        type: "this_or_that",
        id: 5,
        dimension: "extensibility",
        scenario: "You need to expose a service that speaks raw TCP rather than HTTP to the public internet on Railway.",
        optionA: "Use the TCP proxy feature with a configurable port.",
        optionB: "Use the HTTP proxy with a custom domain and wildcard certificate.",
        correct: "A",
        explanation: "Railway's TCP proxy is specifically designed for non-HTTP traffic, supporting L4 load balancing and a configurable port. The HTTP proxy terminates TLS and is for HTTP/HTTPS workloads only."
    },
    {
        type: "this_or_that",
        id: 6,
        dimension: "workflows",
        scenario: "A teammate opens a pull request and needs an isolated, fully functional environment to test their changes before merging.",
        optionA: "Manually clone the production environment and redeploy with the branch's Docker image.",
        optionB: "Rely on Railway's PR environments, which are created automatically and torn down after merge.",
        correct: "B",
        explanation: "Railway automatically creates PR environments tied to GitHub pull requests and deletes them when the PR is merged or closed, requiring no manual intervention."
    },
    {
        type: "this_or_that",
        id: 7,
        dimension: "prompting",
        scenario: "You want an AI coding agent running in your terminal to deploy and manage Railway services without leaving the terminal context.",
        optionA: "Use the Railway MCP server so the agent can call Railway's API through the Model Context Protocol.",
        optionB: "Have the agent manually edit railway.toml files and push commits to trigger autodeploys.",
        correct: "A",
        explanation: "Railway ships an MCP server that exposes platform actions to AI agents via the Model Context Protocol, enabling agents like Claude Code or Codex to deploy and manage services programmatically from the terminal."
    },
    {
        type: "quick_pick",
        id: 8,
        dimension: "automation",
        scenario: "Railway's cron job scheduler supports atomic scheduling down to _____ intervals.",
        blank: "5-minute",
        options: [
            "1-minute",
            "5-minute",
            "10-minute",
            "15-minute"
        ],
        explanation: "Railway cron jobs are atomic to 5-minute intervals and are configured via standard crontab expressions."
    },
    {
        type: "quick_pick",
        id: 9,
        dimension: "memory",
        scenario: "Railway volumes support up to _____ IOPS for read and write operations on paid plans.",
        blank: "100,000+",
        options: [
            "10,000",
            "50,000",
            "100,000+",
            "500,000"
        ],
        explanation: "Railway advertises 100,000+ IOPS for its high-performance persistent storage volumes, alongside up to 5 TB of storage on Enterprise."
    },
    {
        type: "quick_pick",
        id: 10,
        dimension: "extensibility",
        scenario: "Railway's public networking supports up to _____ of transfer speed per service endpoint.",
        blank: "10 Gbps",
        options: [
            "1 Gbps",
            "10 Gbps",
            "40 Gbps",
            "100 Gbps"
        ],
        explanation: "Public networking on Railway supports up to 10 Gbps of transfer speed, while private internal networking reaches up to 100 Gbps."
    },
    {
        type: "speed_pick",
        id: 11,
        dimension: "workflows",
        prompt: "Select all features that are included in Railway's PR environment behavior.",
        correctItems: [
            "Automatic environment creation on PR open",
            "Automatic teardown after PR merge",
            "GitHub branch deploys",
            "Selective deployments within the environment"
        ],
        wrongItems: [
            "Permanent environment promotion to production",
            "Manual teardown required after merge",
            "Dedicated static IP per PR environment"
        ],
        timeLimit: 15,
        explanation: "PR environments on Railway are automatically created when a PR is opened and destroyed when merged. They support GitHub branch deploys and selective service deployments. They do not auto-promote to production or assign static IPs."
    },
    {
        type: "speed_pick",
        id: 12,
        dimension: "bestPractices",
        prompt: "Select all alert and notification channels that Railway's configurable alerts natively support.",
        correctItems: [
            "Email",
            "Slack",
            "Discord",
            "Webhooks"
        ],
        wrongItems: [
            "PagerDuty",
            "SMS",
            "Microsoft Teams"
        ],
        timeLimit: 15,
        explanation: "Railway supports alerts via email, Slack, Discord, and webhooks. PagerDuty, SMS, and Microsoft Teams are not listed as native notification channels."
    },
    {
        type: "odd_one_out",
        id: 13,
        dimension: "orchestration",
        prompt: "Three of these are core service source types Railway supports for deployment. Which one does NOT belong?",
        items: [
            "Docker image",
            "GitHub repository",
            "Local repository via CLI",
            "Terraform module"
        ],
        oddItem: "Terraform module",
        explanation: "Railway supports deploying from Docker images, GitHub repositories, and local repositories via the CLI. Terraform modules are not a Railway service source type."
    },
    {
        type: "odd_one_out",
        id: 14,
        dimension: "prompting",
        prompt: "Three of these AI coding agents are listed in Railway's official Agent Directory. Which one is NOT?",
        items: [
            "Devin",
            "Cursor",
            "Cline",
            "Replit Agent"
        ],
        oddItem: "Replit Agent",
        explanation: "Railway's Agent Directory includes Devin, Cursor, and Cline among others. Replit Agent is not listed in Railway's official agent directory."
    },
    {
        type: "odd_one_out",
        id: 15,
        dimension: "automation",
        prompt: "Three of these are valid ways to manage Railway deployment configuration as code. Which one is NOT supported?",
        items: [
            "railway.toml",
            "railway.json",
            "Dockerfile",
            "railway.yaml"
        ],
        oddItem: "railway.yaml",
        explanation: "Railway's config-as-code feature supports TOML and JSON formats (railway.toml and railway.json) as well as Dockerfiles. A railway.yaml file is not a supported config-as-code format on Railway."
    }
],
  rounds: [
    { name: "Truth or Myth", icon: "?", ids: [1, 2, 3, 4], tagline: "Real feature or total BS?" },
    { name: "This or That", icon: "vs", ids: [5, 6, 7], tagline: "Pick the smarter move" },
    { name: "Quick Pick", icon: ">>", ids: [8, 9, 10], tagline: "Name that feature" },
    { name: "Speed Round", icon: "::", ids: [11, 12], tagline: "Tap fast, think faster" },
    { name: "Odd One Out", icon: "//", ids: [13, 14], tagline: "Spot the fake" },
    { name: "Final Boss", icon: "*", ids: [15], tagline: "One shot. Expert level." },
  ],
};
