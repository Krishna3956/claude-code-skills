import type { QuizConfig } from "@/components/quiz/types";

export const snowflakeConfig: QuizConfig = {
  slug: "snowflake",
  toolName: "Snowflake",
  tagline: "6 rounds. ~3 min. No signup required.",
  subtitle: "Just you vs. Snowflake trivia.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#29B5E8",
  accentColorDim: "#199FCE",
  accentColorSubtle: "rgba(41,181,232,0.12)",
  bgColor: "#F3FBFE",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#E9F7FD",
  textColor: "#0F2A36",
  textSecondary: "#3D5A67",
  textTertiary: "#6E8A96",
  borderColor: "#CFEAF5",
  borderSubtle: "#E4F3FA",
  scorecardBg: "#0F2A36",
  scorecardAccentColor: "#29B5E8",
  scorecardDivider: "#214353",
  scorecardLabelColor: "#A7C8D6",
  scorecardGridColor: "#214353",
  logo: (
    <img
      src="/logos/snowflake.png"
      alt="Snowflake"
      width={44}
      height={44}
      style={{ borderRadius: 10, objectFit: "contain" }}
    />
  ),
  scorecardLogo: (
    <img
      src="/logos/snowflake.png"
      alt="Snowflake"
      width={42}
      height={42}
      style={{ borderRadius: 10, objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "snowflake",
  dimensionLabels: {
    memory: "Core Concepts",
    orchestration: "Compute Layer",
    automation: "Pipelines & CDC",
    extensibility: "Sharing & Ecosystem",
    workflows: "Access & Governance",
    prompting: "Query Optimization",
    bestPractices: "Recovery & Ops",
  },
  archetypes: [
    {
      title: "Snowflake Architect",
      emoji: "❄️",
      description:
        "You understand Snowflake deeply across compute, sharing, governance, and operational recovery patterns.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Warehouse Strategist",
      emoji: "🏗️",
      description:
        "You are strong on Snowflake fundamentals and platform mechanics, with only a few advanced gaps left.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Data Platform Builder",
      emoji: "🧠",
      description:
        "You can run real workloads in Snowflake confidently and make good architecture decisions.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Analytics Operator",
      emoji: "📊",
      description:
        "You know the core workflow and practical features, but some advanced platform details are still forming.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "SQL Practitioner",
      emoji: "🛠️",
      description:
        "You can use Snowflake day to day, and the next gain comes from mastering platform-specific capabilities.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Data Explorer",
      emoji: "🌱",
      description:
        "You are getting the fundamentals right, but platform mechanics and ops details need more reps.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "First Query",
      emoji: "🚀",
      description:
        "Solid start. You have the baseline now, and the advanced Snowflake pieces will click quickly from here.",
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
        "Snowflake separates compute from storage so they can scale independently",
      isTrue: true,
      explanation:
        "This is a core Snowflake design principle. Compute and storage are decoupled, enabling independent scaling and pricing behavior.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "orchestration",
      statement:
        "Virtual warehouses can be configured to auto-suspend when idle and auto-resume on demand",
      isTrue: true,
      explanation:
        "Snowflake warehouses support auto-suspend and auto-resume. This helps reduce idle compute spend while keeping fast startup for new queries.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "extensibility",
      statement:
        "Secure data sharing in Snowflake requires exporting data files and re-importing them into consumer accounts",
      isTrue: false,
      explanation:
        "Secure data sharing gives live, read-only access without copying or file export workflows.",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "bestPractices",
      statement:
        "Zero-copy cloning immediately duplicates all underlying data files at clone time",
      isTrue: false,
      explanation:
        "Zero-copy cloning starts as metadata pointers to existing data. Physical duplication is not immediate at clone creation.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "orchestration",
      scenario:
        "Your BI warehouse is idle most of the day. Which setup is better for controlling compute cost?",
      optionA: "Enable auto-suspend and auto-resume on the warehouse",
      optionB: "Keep the warehouse running 24/7 to avoid resume delay",
      correct: "A",
      explanation:
        "Auto-suspend and auto-resume are the standard cost-control baseline for intermittent workloads.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "workflows",
      scenario:
        "You need analysts to query curated tables without broad admin permissions. Which approach is better?",
      optionA: "Create least-privilege roles and grant only required object privileges",
      optionB: "Give ACCOUNTADMIN to speed things up",
      correct: "A",
      explanation:
        "Snowflake uses role-based access control. Least privilege is the recommended governance pattern.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "automation",
      scenario:
        "You want CDC-driven transformations after source table changes. Which Snowflake-native approach is better?",
      optionA: "Use Streams to capture changes and Tasks to schedule downstream SQL",
      optionB: "Rebuild every target table with full reloads each hour",
      correct: "A",
      explanation:
        "Streams track table changes and Tasks orchestrate SQL execution. This is a standard incremental pattern in Snowflake.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "memory",
      scenario:
        "Which Snowflake feature lets you query historical data and recover dropped objects within retention?",
      blank: "Time Travel",
      options: ["Time Travel", "Auto Clustering", "Search Optimization"],
      explanation:
        "Time Travel provides access to historical data states and object recovery within retention settings.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "automation",
      scenario:
        "Which feature continuously loads files from stages into Snowflake tables?",
      blank: "Snowpipe",
      options: ["Snowpipe", "Fail-safe", "Database Replication"],
      explanation:
        "Snowpipe is the continuous data ingestion service for staged files.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "workflows",
      scenario:
        "Which feature creates fast environment copies for dev or test without full immediate data duplication?",
      blank: "Zero-copy cloning",
      options: ["Zero-copy cloning", "Unload and reload", "External table refresh"],
      explanation:
        "Zero-copy cloning is designed for quick environment duplication workflows with metadata-based sharing at creation.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "orchestration",
      prompt: "Tap every real Snowflake object or service term!",
      correctItems: ["Virtual Warehouse", "Database", "Schema", "Stage", "Task"],
      wrongItems: ["Kubernetes Pod", "Docker Compose", "Lambda Runtime", "S3 Bucket Policy"],
      timeLimit: 15,
      explanation:
        "Warehouse, database, schema, stage, and task are Snowflake-native concepts. The others are from external platforms.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "extensibility",
      prompt: "Tap every real Snowflake platform capability!",
      correctItems: [
        "Secure Data Sharing",
        "Snowflake Marketplace",
        "Role-based access control",
        "Streams",
        "Time Travel",
      ],
      wrongItems: [
        "Built-in Kafka broker",
        "On-prem hardware appliance mode",
        "Manual index rebuild jobs",
        "Native VM orchestration",
      ],
      timeLimit: 15,
      explanation:
        "Snowflake includes sharing, marketplace, RBAC, streams, and Time Travel. The wrong options are not Snowflake-native platform features.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "prompting",
      prompt: "One statement about Snowflake storage behavior is incorrect. Which one?",
      items: [
        "Micro-partitions are immutable",
        "Partition pruning can reduce scanned data",
        "Clustering keys define a strict row-by-row physical insert order",
        "Snowflake automatically manages partitioning",
      ],
      oddItem: "Clustering keys define a strict row-by-row physical insert order",
      explanation:
        "Clustering keys guide data organization, but they do not guarantee strict row-by-row physical ordering semantics at insert time.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "bestPractices",
      prompt: "One statement about recovery is false. Which one?",
      items: [
        "Time Travel is user-accessible within retention limits",
        "Fail-safe lasts 7 days",
        "Fail-safe is designed mainly for disaster recovery scenarios",
        "Users can restore data from Fail-safe directly using normal SQL",
      ],
      oddItem: "Users can restore data from Fail-safe directly using normal SQL",
      explanation:
        "Fail-safe recovery is not a direct self-service SQL workflow. It is primarily a Snowflake support-driven recovery path.",
    },
    {
      type: "truth_or_myth",
      id: 15,
      dimension: "extensibility",
      statement:
        "In Snowflake secure data sharing, consumers query live shared data without creating an independent copied dataset first",
      isTrue: true,
      explanation:
        "Secure sharing exposes live data to consumers without copying data files between accounts.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "?", ids: [1, 2, 3, 4], tagline: "Platform truth or fake claim?" },
    { name: "This or That", icon: "vs", ids: [5, 6, 7], tagline: "Pick the smarter architecture move" },
    { name: "Quick Pick", icon: ">>", ids: [8, 9, 10], tagline: "Name the Snowflake feature" },
    { name: "Speed Round", icon: "::", ids: [11, 12], tagline: "Tap fast, filter noise" },
    { name: "Odd One Out", icon: "//", ids: [13, 14], tagline: "Find the subtle wrong statement" },
    { name: "Final Boss", icon: "*", ids: [15], tagline: "One shot. Data platform level." },
  ],
};

