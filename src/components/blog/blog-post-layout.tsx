"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import TableOfContents from "@/components/blog/table-of-contents";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SecondaryFlowButton } from "@/components/ui/flow-button";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "@/contexts/language-context";
import type { PostMetadata } from "@/lib/posts";
import { assetPath } from "@/lib/utils";

const defaultPostImage = "/images/og-image.png";

export type BlogPostLayoutProps = {
  headings: { slug: string; text: string; depth: number }[];
  metadata: PostMetadata;
  previousPost: Pick<PostMetadata, "slug" | "title"> | null;
  nextPost: Pick<PostMetadata, "slug" | "title"> | null;
  children: ReactNode;
};

const BlogPostLayout = ({
  headings,
  metadata,
  previousPost,
  nextPost,
  children,
}: BlogPostLayoutProps) => {
  const { t, locale } = useTranslations();
  const dateLocaleTag = locale === "es" ? "es-CO" : "en-US";
  const fallbackTitle = t("blocks.blogPostPage.fallbackTitle");
  const displayTitle = metadata.title ?? fallbackTitle;
  const imageAlt = metadata.title ?? t("blocks.blogHero.postFallbackAlt");

  return (
    <section className="py-8 sm:py-16">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 px-4 sm:px-6 lg:grid-cols-[250px_1fr] lg:gap-12 lg:px-8 xl:gap-16">
        <aside className="hidden lg:block">
          <TableOfContents headings={headings} />
        </aside>

        <div>
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">
                    {t("blocks.blogPostPage.breadcrumbHome")}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/blog">
                    {t("blocks.blogPostPage.breadcrumbBlog")}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{metadata.category}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="mb-6 text-2xl font-semibold md:text-3xl lg:text-4xl">
            {displayTitle}
          </h1>

          <p className="text-muted-foreground">{metadata.description}</p>

          <Separator className="my-6" />

          <div className="mb-16 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Avatar className="size-11.5">
                <AvatarImage
                  src={metadata.author?.picture}
                  alt={metadata.author?.name}
                />
                <AvatarFallback>
                  {metadata.author?.name?.charAt(0) ?? "?"}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col text-sm">
                <span className="text-muted-foreground mb-1">
                  {t("blocks.blogPostPage.writtenBy")}
                </span>
                <span className="font-medium">{metadata.author?.name}</span>
              </div>
            </div>

            <div className="flex flex-col text-sm">
              <span className="text-muted-foreground mb-1.5">
                {t("blocks.blogPostPage.readTime")}
              </span>
              <span className="font-medium">{metadata.readTime}</span>
            </div>

            <div className="flex flex-col text-sm">
              <span className="text-muted-foreground mb-1.5">
                {t("blocks.blogPostPage.postedOn")}
              </span>
              <span className="font-medium">
                {new Date(metadata.publishedAt ?? "").toLocaleDateString(
                  dateLocaleTag,
                  {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                  },
                )}
              </span>
            </div>
          </div>

          <Image
            src={assetPath(metadata.image ?? defaultPostImage)}
            alt={imageAlt}
            width={1280}
            height={720}
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="mb-16 max-h-110 w-full rounded-xl object-cover"
          />

          {children}

          <div className="flex items-center justify-between gap-4 pt-8 sm:pt-16">
            {previousPost ? (
              <SecondaryFlowButton asChild size="lg">
                <Link href={`/blog/${previousPost.slug}`}>
                  <ChevronLeftIcon className="max-sm:hidden" />
                  {t("blocks.blogPostPage.previousPost")}
                </Link>
              </SecondaryFlowButton>
            ) : (
              <SecondaryFlowButton
                size="lg"
                className="pointer-events-none opacity-50"
              >
                <ChevronLeftIcon className="max-sm:hidden" />
                {t("blocks.blogPostPage.previousPost")}
              </SecondaryFlowButton>
            )}
            {nextPost ? (
              <SecondaryFlowButton asChild size="lg">
                <Link href={`/blog/${nextPost.slug}`}>
                  {t("blocks.blogPostPage.nextPost")}
                  <ChevronRightIcon className="max-sm:hidden" />
                </Link>
              </SecondaryFlowButton>
            ) : (
              <SecondaryFlowButton
                size="lg"
                className="pointer-events-none opacity-50"
              >
                {t("blocks.blogPostPage.nextPost")}
                <ChevronRightIcon className="max-sm:hidden" />
              </SecondaryFlowButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostLayout;
