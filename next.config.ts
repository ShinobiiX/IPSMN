import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export', // Outputs a static SPA instead of a server-run app
  images: {
    unoptimized: true, // Required for static export mode
  },
  experimental: {
    // This helps speed up Turbopack on slower disks by caching artifacts
    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig