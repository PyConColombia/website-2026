import type { Metadata } from "next";

import CTASection from "@/components/blocks/cta/cta";
import BlogSection from "@/components/blog/blog-section/blog-section";
import HeroSection from "@/components/blog/hero-section/hero-section";
import SectionSeparator from "@/components/section-separator";
import { getPosts } from "@/lib/posts";
import { STATIC_PRERENDER_LOCALE } from "@/lib/site-locale-constants";
import { siteMessages } from "@/lib/site-messages";
import {
  getSiteUrl,
  SITE_KEYWORDS,
  webPageJsonLd,
  websiteJsonLd,
} from "@/lib/site-seo";

export async function generateMetadata(): Promise<Metadata> {
  const meta = siteMessages[STATIC_PRERENDER_LOCALE].pageMeta.blog;

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      ...SITE_KEYWORDS,
      "PyCon blog",
      "conference news",
      "Python community",
    ],
    alternates: {
      canonical: `${getSiteUrl()}/blog`,
    },
  };
}

const BlogPage = async () => {
  const pageMeta = siteMessages[STATIC_PRERENDER_LOCALE].pageMeta.blog;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      websiteJsonLd(),
      webPageJsonLd({
        name: pageMeta.jsonLdName,
        description: pageMeta.description,
        url: `${getSiteUrl()}/blog`,
      }),
    ],
  };

  const blogPosts = await getPosts();

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <>
      <HeroSection posts={featuredPosts} />

      <SectionSeparator />

      <BlogSection posts={blogPosts} />

      <CTASection />

      <script
        type="application/ld+json"
        /* biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is static structured data */
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
};

export default BlogPage;
