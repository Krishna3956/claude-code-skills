import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/", destination: "/v6", permanent: false },
      { source: "/quiz", destination: "/v6", permanent: false },
      { source: "/result", destination: "/v6", permanent: false },
      { source: "/v2", destination: "/v6", permanent: false },
      { source: "/v3", destination: "/v6", permanent: false },
      { source: "/v3/results", destination: "/v6", permanent: false },
      { source: "/v4", destination: "/v6", permanent: false },
      { source: "/v4/results", destination: "/v6", permanent: false },
      { source: "/v5", destination: "/v6", permanent: false },
      { source: "/v5/results", destination: "/v6", permanent: false },
    ];
  },
};

export default nextConfig;
