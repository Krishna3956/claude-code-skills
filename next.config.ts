import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
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
    ];
  },
};

export default nextConfig;
