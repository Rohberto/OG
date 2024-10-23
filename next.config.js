/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
      source: '/zohoverify/verifyforzoho.html',
      destination: '/zohoverify/verifyforzoho',
      permanent: true
      }
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config;
  }
}

module.exports = nextConfig
