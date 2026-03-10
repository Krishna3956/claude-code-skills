import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      // Old Vercel domains → send directly to the quiz on the primary domain
      {
        source: "/:path*",
        has: [{ type: "host", value: "claude-code.vercel.app" }],
        destination: "https://www.howwellyouknow.com/play/claude-code",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "claude-code-skills-bay.vercel.app" }],
        destination: "https://www.howwellyouknow.com/play/claude-code",
        permanent: true,
      },
      // Legacy route paths → permanent 301 redirects
      { source: "/test", destination: "/play/claude-code", permanent: true },
      { source: "/test/results", destination: "/play/claude-code/results", permanent: true },
      { source: "/quiz", destination: "/play/claude-code", permanent: true },
      { source: "/result", destination: "/play/claude-code", permanent: true },
      { source: "/v2", destination: "/play/claude-code", permanent: true },
      { source: "/v3", destination: "/play/claude-code", permanent: true },
      { source: "/v3/results", destination: "/play/claude-code/results", permanent: true },
      { source: "/v4", destination: "/play/claude-code", permanent: true },
      { source: "/v4/results", destination: "/play/claude-code/results", permanent: true },
      { source: "/v5", destination: "/play/claude-code", permanent: true },
      { source: "/v5/results", destination: "/play/claude-code/results", permanent: true },
      { source: "/v6", destination: "/play/claude-code", permanent: true },
      { source: "/v6/results", destination: "/play/claude-code/results", permanent: true },
      // v0 renamed to Vercel
      { source: "/play/v0", destination: "/play/vercel", permanent: true },
      { source: "/play/v0/results", destination: "/play/vercel/results", permanent: true },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/yctrends",
        destination: "/yctrends/index.html",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
