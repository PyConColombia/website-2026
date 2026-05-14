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
    ],
  },
  trailingSlash: true,
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

export default nextConfig;
