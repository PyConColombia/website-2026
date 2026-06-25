import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Talks from "@/components/blocks/talks/talks";
import { STATIC_PRERENDER_LOCALE } from "@/lib/site-locale-constants";
import { getAllTalkFormatSlugs, isTalkFormat } from "@/lib/talk-formats";
import { buildTalkFormatPageMetadata } from "@/lib/talk-seo";

export async function generateStaticParams() {
  return getAllTalkFormatSlugs().map((format) => ({ format }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ format: string }>;
}): Promise<Metadata> {
  const { format } = await params;

  if (!isTalkFormat(format)) {
    return {};
  }

  return buildTalkFormatPageMetadata(format, STATIC_PRERENDER_LOCALE);
}

export const dynamicParams = false;

const TalkFormatPage = async ({
  params,
}: {
  params: Promise<{ format: string }>;
}) => {
  const { format } = await params;

  if (!isTalkFormat(format)) {
    notFound();
  }

  return <Talks activeFormat={format} />;
};

export default TalkFormatPage;
