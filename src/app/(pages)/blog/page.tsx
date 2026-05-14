import type { Metadata } from "next";

import CTASection from "@/components/blocks/cta/cta";
import BlogSection from "@/components/blog/blog-section/blog-section";
import HeroSection from "@/components/blog/hero-section/hero-section";
import SectionSeparator from "@/components/section-separator";
import { getPosts } from "@/lib/posts";
import {
  getSiteUrl,
  SITE_KEYWORDS,
  webPageJsonLd,
  websiteJsonLd,
} from "@/lib/site-seo";

const blogDescription =
  "News, speaker stories, and updates from PyCon Colombia 2026—July 24–26 in Medellín at Universidad EAFIT.";

export const metadata: Metadata = {
  title: "Blog",
  description: blogDescription,
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    websiteJsonLd(),
    webPageJsonLd({
      name: "Blog — PyCon Colombia 2026",
      description: blogDescription,
      url: `${getSiteUrl()}/blog`,
    }),
  ],
};

const BlogPage = async () => {
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
