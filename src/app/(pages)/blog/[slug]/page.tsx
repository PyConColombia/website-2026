import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CTASection from "@/components/blocks/cta/cta";
import BlogPostLayout from "@/components/blog/blog-post-layout";
import RelatedBlogSection from "@/components/blog/related-blog-section/related-blog-section";
import MDXContent from "@/components/mdx-content";
import SectionSeparator from "@/components/section-separator";
import { extractHeadings } from "@/lib/extract-headings";
import { getPostBySlug, getPosts } from "@/lib/posts";
import { STATIC_PRERENDER_LOCALE } from "@/lib/site-locale-constants";
import { siteMessages } from "@/lib/site-messages";
import { getSiteUrl, webPageJsonLd, websiteJsonLd } from "@/lib/site-seo";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const fallbackTitle =
    siteMessages[STATIC_PRERENDER_LOCALE].blocks.blogPostPage.fallbackTitle;

  const { metadata } = post;

  return {
    title: metadata.title ?? fallbackTitle,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: `${getSiteUrl()}/blog/${metadata.slug}`,
    },
  };
}

export const dynamicParams = false;

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const posts = await getPosts();

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const messages = siteMessages[STATIC_PRERENDER_LOCALE];

  const { metadata, content } = post;

  const allPosts = posts.sort(
    (a, b) =>
      new Date(a.publishedAt ?? "").getTime() -
      new Date(b.publishedAt ?? "").getTime(),
  );

  const currentPostIndex = allPosts.findIndex((p) => p.slug === slug);
  const previousPost =
    currentPostIndex > 0 ? allPosts[currentPostIndex - 1] : null;
  const nextPost =
    currentPostIndex < allPosts.length - 1
      ? allPosts[currentPostIndex + 1]
      : null;

  const sameCategoryPosts = allPosts.filter(
    (p) => p.category === metadata.category && p.slug !== slug,
  );
  const otherCategoryPosts = allPosts.filter(
    (p) => p.category !== metadata.category && p.slug !== slug,
  );
  const relatedPosts = [...sameCategoryPosts, ...otherCategoryPosts].slice(
    0,
    3,
  );

  const headings = extractHeadings(content);

  const postUrl = `${getSiteUrl()}/blog/${metadata.slug}`;
  const fallbackArticleTitle = messages.blocks.blogPostPage.fallbackTitle;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      websiteJsonLd(),
      webPageJsonLd({
        name: metadata.title ?? fallbackArticleTitle,
        description: metadata.description,
        url: postUrl,
      }),
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: messages.nav.home,
            item: `${getSiteUrl()}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: messages.blocks.blogPostPage.breadcrumbBlog,
            item: `${getSiteUrl()}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: metadata.title ?? fallbackArticleTitle,
            item: postUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <BlogPostLayout
        headings={headings}
        metadata={metadata}
        previousPost={
          previousPost
            ? { slug: previousPost.slug, title: previousPost.title }
            : null
        }
        nextPost={
          nextPost ? { slug: nextPost.slug, title: nextPost.title } : null
        }
      >
        <MDXContent source={content} />
      </BlogPostLayout>

      <SectionSeparator />

      <RelatedBlogSection posts={relatedPosts} />

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

export default BlogDetailsPage;
