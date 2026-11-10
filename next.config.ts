import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Isolate the configured-form E2E build from the default empty-id build.
  distDir: process.env.NEXT_BUILD_DIR ?? ".next",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
