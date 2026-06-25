import type { MetadataRoute } from "next";

import { getPosts } from "@/lib/posts";
import { getSiteUrl } from "@/lib/site-seo";
import { getAllSpeakerTrackSlugs } from "@/lib/speaker-tracks";
import { getAllSpeakerSlugs } from "@/lib/speakers";
import { getAllSponsorSlugs } from "@/lib/sponsors";
import { getAllTalkLanguageSlugs } from "@/lib/talk-languages";
import { getAllTalkLevelSlugs } from "@/lib/talk-levels";
import { getAllTalkIds, getTalkHref } from "@/lib/talks";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  const routes = [
    "" /* This is equivalent to / */,
    "/blog",
    "/press",
    "/pricing",
    "/team",
    "/speakers",
    "/talks",
    ...getAllSpeakerTrackSlugs().map((slug) => `/talks/${slug}`),
    ...getAllTalkLevelSlugs().map((level) => `/talks/level/${level}`),
    ...getAllTalkLanguageSlugs().map(
      (language) => `/talks/language/${language}`,
    ),
    ...getAllTalkIds().map((id) => getTalkHref(id)),
    ...getAllSpeakerSlugs().map((slug) => `/speakers/${slug}`),
    "/code-of-conduct",
    ...getAllSponsorSlugs().map((slug) => `/sponsors/${slug}`),
    ...posts.map((post) => `/blog/${post.slug}`),
  ];

  return routes.map((route) => ({
    url: `${getSiteUrl()}${route}`,
  }));
}
