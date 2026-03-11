import type { QuizConfig } from "@/components/quiz/types";

export const hevoConfig: QuizConfig = {
  slug: "hevo",
  toolName: "Hevo Data",
  tagline: "6 rounds. ~3 min. No signup required.",
  subtitle: "Just you vs. modern data pipeline trivia.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#2F6BFF",
  accentColorDim: "#2356D9",
  accentColorSubtle: "rgba(47,107,255,0.12)",
  bgColor: "linear-gradient(145deg, #F4F8FF 0%, #F8FBFF 55%, #EDF4FF 100%)",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#EEF4FF",
  textColor: "#10223F",
  textSecondary: "#3C5478",
  textTertiary: "#6981A4",
  borderColor: "#D4E1F7",
  borderSubtle: "#E7EEF9",
  scorecardBg: "#0D1B33",
  scorecardAccentColor: "#66A0FF",
  scorecardDivider: "#233A61",
  scorecardLabelColor: "#AFC5E8",
  scorecardGridColor: "#233A61",
  logo: (
    <img
      src="/logos/hevo.svg"
      alt="Hevo Data"
      width={126}
      height={42}
      style={{ objectFit: "contain" }}
    />
  ),
  scorecardLogo: (
    <img
      src="/logos/hevo.svg"
      alt="Hevo Data"
      width={120}
      height={38}
      style={{ objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "hevo",
  dimensionLabels: {
    memory: "Platform Basics",
    orchestration: "Pipeline Modes",
    automation: "Transform Ops",
    extensibility: "Connectors & Destinations",
    workflows: "Reliability",
    prompting: "Warehouse Strategy",
    bestPractices: "Team Decisions",
  },
  archetypes: [
    {
      title: "Pipeline Principal",
      emoji: "🏆",
      description:
        "You think like a senior data platform owner and can map Hevo capabilities to real production decisions.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Data Integration Architect",
      emoji: "🧠",
      description:
        "You understand Hevo's ingestion, transformation, and warehouse mechanics deeply, with only a few edge details left.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "ELT Strategist",
      emoji: "⚙️",
      description:
        "Strong command of connector coverage and orchestration patterns. You can design robust day-to-day pipelines.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Warehouse Operator",
      emoji: "📊",
      description:
        "You can run core Hevo workflows confidently and make sensible tradeoffs under normal workloads.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Pipeline Builder",
      emoji: "🛠️",
      description:
        "You know the fundamentals and can ship useful pipelines, but advanced orchestration depth is still forming.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Data Mover",
      emoji: "🌱",
      description:
        "Good base understanding. Next level is stronger recall of CDC modes, transformation flow, and warehouse tuning.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "First Sync",
      emoji: "🚀",
      description:
        "Great starting point. You now have enough context to explore Hevo more strategically.",
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
        "Hevo is positioned as an automated unified data platform for moving and preparing analytics data",
      isTrue: true,
      explanation:
        "Hevo's product pages frame the platform around unified ingestion, loading, and post-load data preparation workflows.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "extensibility",
      statement:
        "Hevo's connector coverage is described as 150+ pre-built connectors across databases, SaaS apps, files, and APIs",
      isTrue: true,
      explanation:
        "The integrations and pipeline pages consistently describe 150+ connectors and multiple source categories.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "workflows",
      statement:
        "Hevo only supports overnight batch-style movement and does not support near real-time ingestion",
      isTrue: false,
      explanation:
        "Pipeline messaging explicitly references near real-time data movement and CDC-oriented replication.",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "orchestration",
      statement:
        "Database replication in Hevo includes both log-based and event/timestamp-based CDC modes",
      isTrue: true,
      explanation:
        "The database replication product page lists flexible replication modes, including log-based and event/timestamp CDC.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "workflows",
      scenario:
        "Your source schema changes frequently and pipelines must stay running. Which setup is stronger?",
      optionA: "Use automatic schema drift evolution",
      optionB: "Pause pipelines and remap manually for every change",
      correct: "A",
      explanation:
        "Hevo highlights automatic schema drift handling to keep pipelines stable through schema evolution.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "automation",
      scenario:
        "You need transformation jobs to run right after fresh warehouse data lands. Which trigger model fits better?",
      optionA: "Trigger on load",
      optionB: "Run ad-hoc manually whenever someone remembers",
      correct: "A",
      explanation:
        "Hevo transformation flows support trigger-on-load plus scheduling, reducing manual orchestration overhead.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "bestPractices",
      scenario:
        "You want one place to monitor model health and debug failures. Which approach aligns better with Hevo's flow?",
      optionA: "Use unified logs, lineage, run history, and alerts",
      optionB: "Split monitoring across disconnected spreadsheets and chat threads",
      correct: "A",
      explanation:
        "Transformation pages emphasize consolidated visibility with logs, lineage, run history, and alerting.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "prompting",
      scenario: "Which destination is explicitly listed on Hevo warehouse pages?",
      blank: "Databricks",
      options: ["Databricks", "Tableau Desktop", "Jira"],
      explanation:
        "Hevo warehouse messaging names destinations including Snowflake, BigQuery, Redshift, Databricks, and more.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "automation",
      scenario: "What transformation stack is directly referenced on Hevo transformation pages?",
      blank: "dbt Core + SQL + Hevo Transformers",
      options: [
        "dbt Core + SQL + Hevo Transformers",
        "Spark-only notebooks",
        "Excel macros + VBA",
      ],
      explanation:
        "Hevo highlights dbt Core integration, SQL model automation, and Hevo Transformers within one workflow.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "extensibility",
      scenario: "On the integrations catalog, which top-level filter type is available?",
      blank: "Sources and Destinations",
      options: ["Sources and Destinations", "Frontend and Backend", "Bronze and Silver"],
      explanation:
        "The integrations UI includes type filters for source connectors and destination targets.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "extensibility",
      prompt: "Tap every warehouse destination explicitly called out in Hevo warehouse pages!",
      correctItems: ["Snowflake", "BigQuery", "Redshift", "Databricks", "Azure Synapse Analytics"],
      wrongItems: ["Google Sheets", "Airtable Base", "Figma File", "Notion Doc"],
      timeLimit: 15,
      explanation:
        "Those five are named warehouse destinations in Hevo's destination-focused messaging.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "prompting",
      prompt: "Tap every warehouse optimization lever described by Hevo!",
      correctItems: [
        "Warehouse-aware load windows",
        "Batch optimization",
        "Concurrency controls",
        "Automated schema management",
      ],
      wrongItems: ["Manual cron-only tuning", "Fixed single-thread loading", "No alerting", "Nightly CSV-only drops"],
      timeLimit: 15,
      explanation:
        "Hevo's warehouse page describes load windows, batching, concurrency controls, and automated schema handling.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "orchestration",
      prompt: "One of these is NOT listed as a Hevo replication mode. Which one?",
      items: [
        "Log-based replication",
        "Event/timestamp-based CDC",
        "Subset data replication",
        "Screen-recording replication",
      ],
      oddItem: "Screen-recording replication",
      explanation:
        "Hevo replication docs discuss log/event CDC and subset strategies, not screen-recording based ingestion.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "workflows",
      prompt: "One statement below conflicts with Hevo reliability messaging. Which one?",
      items: [
        "Near real-time data movement",
        "Automatic schema drift handling",
        "Alerts for failures and delays",
        "Schema changes always require downtime",
      ],
      oddItem: "Schema changes always require downtime",
      explanation:
        "Hevo emphasizes schema evolution support specifically to avoid operational disruption from drift.",
    },
    {
      type: "truth_or_myth",
      id: 15,
      dimension: "bestPractices",
      statement:
        "For teams standardizing on dbt Core, Hevo can be used to run dbt-based transformations without adding a separate orchestration layer",
      isTrue: true,
      explanation:
        "Hevo's transformation experience is positioned around built-in orchestration and monitoring for dbt Core plus SQL workflows.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "?", ids: [1, 2, 3, 4], tagline: "Real capability or fake detail?" },
    { name: "This or That", icon: "vs", ids: [5, 6, 7], tagline: "Pick the stronger pipeline move" },
    { name: "Quick Pick", icon: ">>", ids: [8, 9, 10], tagline: "Name the exact platform piece" },
    { name: "Speed Round", icon: "::", ids: [11, 12], tagline: "Fast recall, real architecture" },
    { name: "Odd One Out", icon: "//", ids: [13, 14], tagline: "Spot the off-platform idea" },
    { name: "Final Boss", icon: "*", ids: [15], tagline: "One shot. Platform-operator level." },
  ],
};
