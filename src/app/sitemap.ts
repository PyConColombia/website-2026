import type { MetadataRoute } from "next";

import { getPosts } from "@/lib/posts";
import { getSiteUrl } from "@/lib/site-seo";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  const routes = [
    "" /* This is equivalent to / */,
    "/blog",
    "/pricing",
    "/team",
    "/scholarships",
    "/code-of-conduct",
    ...posts.map((post) => `/blog/${post.slug}`),
  ];

  return routes.map((route) => ({
    url: `${getSiteUrl()}${route}`,
  }));
}
