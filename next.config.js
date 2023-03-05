/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['127.0.0.1', 'https://web-production-853d.up.railway.app'],
  },

}

module.exports = nextConfig
