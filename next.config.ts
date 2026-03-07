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
      // Old route paths → new route (for www.howwellyouknow.com)
      { source: "/test", destination: "/play/claude-code", permanent: false },
      { source: "/test/results", destination: "/play/claude-code/results", permanent: false },
      { source: "/quiz", destination: "/play/claude-code", permanent: false },
      { source: "/result", destination: "/play/claude-code", permanent: false },
      { source: "/v2", destination: "/play/claude-code", permanent: false },
      { source: "/v3", destination: "/play/claude-code", permanent: false },
      { source: "/v3/results", destination: "/play/claude-code/results", permanent: false },
      { source: "/v4", destination: "/play/claude-code", permanent: false },
      { source: "/v4/results", destination: "/play/claude-code/results", permanent: false },
      { source: "/v5", destination: "/play/claude-code", permanent: false },
      { source: "/v5/results", destination: "/play/claude-code/results", permanent: false },
      { source: "/v6", destination: "/play/claude-code", permanent: false },
      { source: "/v6/results", destination: "/play/claude-code/results", permanent: false },
      // v0 renamed to Vercel
      { source: "/play/v0", destination: "/play/vercel", permanent: true },
      { source: "/play/v0/results", destination: "/play/vercel/results", permanent: true },
    ];
  },
};

export default nextConfig;
