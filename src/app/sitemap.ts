import type { MetadataRoute } from "next";

import { getPosts } from "@/lib/posts";
import { getSiteUrl } from "@/lib/site-seo";
import { getAllSpeakerSlugs } from "@/lib/speakers";
import { getAllSponsorSlugs } from "@/lib/sponsors";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  const routes = [
    "" /* This is equivalent to / */,
    "/blog",
    "/pricing",
    "/team",
    "/speakers",
    ...getAllSpeakerSlugs().map((slug) => `/speakers/${slug}`),
    "/scholarships",
    "/code-of-conduct",
    ...getAllSponsorSlugs().map((slug) => `/sponsors/${slug}`),
    ...posts.map((post) => `/blog/${post.slug}`),
  ];

  return routes.map((route) => ({
    url: `${getSiteUrl()}${route}`,
  }));
}
