import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Talks from "@/components/blocks/talks/talks";
import { STATIC_PRERENDER_LOCALE } from "@/lib/site-locale-constants";
import { getAllTalkLevelSlugs, isTalkLevel } from "@/lib/talk-levels";
import { buildTalkLevelPageMetadata } from "@/lib/talk-seo";

export async function generateStaticParams() {
  return getAllTalkLevelSlugs().map((level) => ({ level }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ level: string }>;
}): Promise<Metadata> {
  const { level } = await params;

  if (!isTalkLevel(level)) {
    return {};
  }

  return buildTalkLevelPageMetadata(level, STATIC_PRERENDER_LOCALE);
}

export const dynamicParams = false;

const TalkLevelPage = async ({
  params,
}: {
  params: Promise<{ level: string }>;
}) => {
  const { level } = await params;

  if (!isTalkLevel(level)) {
    notFound();
  }

  return <Talks activeLevel={level} />;
};

export default TalkLevelPage;
