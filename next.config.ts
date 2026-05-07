import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.BASEPATH ?? '',
  assetPrefix: process.env.BASEPATH ?? '',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx']
}

export default nextConfig
