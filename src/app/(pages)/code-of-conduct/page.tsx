import type { Metadata } from "next";

import CodeOfConduct from "@/components/blocks/code-of-conduct/code-of-conduct";
import { STATIC_PRERENDER_LOCALE } from "@/lib/site-locale-constants";
import { siteMessages } from "@/lib/site-messages";
import { getSiteUrl } from "@/lib/site-seo";

export async function generateMetadata(): Promise<Metadata> {
  const meta = siteMessages[STATIC_PRERENDER_LOCALE].pageMeta.codeOfConduct;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${getSiteUrl()}/code-of-conduct`,
    },
  };
}

const CodeOfConductPage = () => {
  return <CodeOfConduct />;
};

export default CodeOfConductPage;
