import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/", destination: "/test", permanent: false },
      { source: "/quiz", destination: "/test", permanent: false },
      { source: "/result", destination: "/test", permanent: false },
      { source: "/v2", destination: "/test", permanent: false },
      { source: "/v3", destination: "/test", permanent: false },
      { source: "/v3/results", destination: "/test", permanent: false },
      { source: "/v4", destination: "/test", permanent: false },
      { source: "/v4/results", destination: "/test", permanent: false },
      { source: "/v5", destination: "/test", permanent: false },
      { source: "/v5/results", destination: "/test", permanent: false },
      { source: "/v6", destination: "/test", permanent: false },
      { source: "/v6/results", destination: "/test", permanent: false },
    ];
  },
};

export default nextConfig;
