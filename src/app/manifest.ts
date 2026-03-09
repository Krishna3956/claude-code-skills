import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "How Well You Know",
    short_name: "HWYK",
    description:
      "Turn your product docs into 3-minute interactive challenges. Your customers learn your product. You see what they don't understand.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#635BFF",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/logos/hwyk-logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
