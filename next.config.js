/**
 * Next.js configuration for FlexLaunch.
 * Enables the App Router (app directory) and strict mode.
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable the new app directory (Next 13+) – Vercel detects automatically.
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
