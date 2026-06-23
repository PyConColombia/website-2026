import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Talks from "@/components/blocks/talks/talks";
import { STATIC_PRERENDER_LOCALE } from "@/lib/site-locale-constants";
import { getAllTalkLanguageSlugs, isTalkLanguage } from "@/lib/talk-languages";
import { buildTalkLanguagePageMetadata } from "@/lib/talk-seo";

export async function generateStaticParams() {
  return getAllTalkLanguageSlugs().map((language) => ({ language }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ language: string }>;
}): Promise<Metadata> {
  const { language } = await params;

  if (!isTalkLanguage(language)) {
    return {};
  }

  return buildTalkLanguagePageMetadata(language, STATIC_PRERENDER_LOCALE);
}

export const dynamicParams = false;

const TalkLanguagePage = async ({
  params,
}: {
  params: Promise<{ language: string }>;
}) => {
  const { language } = await params;

  if (!isTalkLanguage(language)) {
    notFound();
  }

  return <Talks activeLanguage={language} />;
};

export default TalkLanguagePage;
