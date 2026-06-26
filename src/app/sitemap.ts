import type { MetadataRoute } from "next";

import { getAllKeynoteSlugs } from "@/lib/keynotes";
import { getPosts } from "@/lib/posts";
import { getSiteUrl } from "@/lib/site-seo";
import { getAllSpeakerTrackSlugs } from "@/lib/speaker-tracks";
import { getAllSpeakerSlugs } from "@/lib/speakers";
import { getAllSponsorSlugs } from "@/lib/sponsors";
import { getAllTalkFormatSlugs } from "@/lib/talk-formats";
import { getAllTalkLanguageSlugs } from "@/lib/talk-languages";
import { getAllTalkLevelSlugs } from "@/lib/talk-levels";
import { getAllTalkIds, getTalkHref } from "@/lib/talks";
import { getAllTeamMemberSlugs } from "@/lib/team";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  const routes = [
    "" /* This is equivalent to / */,
    "/blog",
    "/press",
    "/pricing",
    "/team",
    ...getAllTeamMemberSlugs().map((slug) => `/team/${slug}`),
    "/speakers",
    "/keynotes",
    ...getAllKeynoteSlugs().map((slug) => `/keynotes/${slug}`),
    "/talks",
    ...getAllSpeakerTrackSlugs().map((slug) => `/talks/${slug}`),
    ...getAllTalkLevelSlugs().map((level) => `/talks/level/${level}`),
    ...getAllTalkFormatSlugs().map((format) => `/talks/format/${format}`),
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
