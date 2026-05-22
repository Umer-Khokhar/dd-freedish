/** @type {import('next').NextConfig} */
const nextConfig = {
  // 'standalone' output is required for Docker deployment (Railway/Render).
  // It bundles everything into a self-contained folder with its own server.js.
  // This is harmless for Vercel — Vercel ignores this setting and uses its own build.
  output: 'standalone',
};

export default nextConfig;
