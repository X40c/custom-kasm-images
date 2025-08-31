/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'X40c\'s Registry',
    description: 'Pen testing and security research focused images',
    icon: '/img/logo.svg',
    listUrl: 'https://x40c.github.io/custom-kasm-images',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  basePath: '/custom-kasm-images/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
