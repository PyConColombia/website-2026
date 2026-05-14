import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site-seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/private/*",
          "/login",
          "/register",
          "/forgot-password",
          "/reset-password",
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
