import type { MetadataRoute } from "next";

import { getPosts } from "@/lib/posts";
import { getSiteUrl } from "@/lib/site-seo";
import { getAllSpeakerTrackSlugs } from "@/lib/speaker-tracks";
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
    ...getAllSpeakerTrackSlugs().map((slug) => `/speakers/${slug}`),
    ...getAllSpeakerSlugs().map((slug) => `/speakers/${slug}`),
    "/code-of-conduct",
    ...getAllSponsorSlugs().map((slug) => `/sponsors/${slug}`),
    ...posts.map((post) => `/blog/${post.slug}`),
  ];

  return routes.map((route) => ({
    url: `${getSiteUrl()}${route}`,
  }));
}
