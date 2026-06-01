import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.BASEPATH ?? "",
  assetPrefix: process.env.BASEPATH ?? "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shadcnstudio.com",
        pathname: "/ss-assets/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
  },
  trailingSlash: true,
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

export default nextConfig;
