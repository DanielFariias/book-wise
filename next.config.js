/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'api.tsx', 'api.ts'],
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'avatars.githubusercontent.com',
      'images.unsplash.com',
      'github.com',
    ],
  },
}

module.exports = nextConfig
