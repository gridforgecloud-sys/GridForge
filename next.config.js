/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for Cloudflare Pages
  images: {
    domains: ['gridforgeai.com'],
    unoptimized: true, // Required for static export
  },
  trailingSlash: false,
};

module.exports = nextConfig;

