import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,  // temp fix
  },
  eslint: {
    ignoreDuringBuilds: true, // temp fix
  },
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com","img.youtube.com"], // allow images from external source.
  },
};

export default nextConfig;

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA(nextConfig);
