"use client";

import { ArrowRightIcon, CalendarDaysIcon } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SecondaryFlowButton } from "@/components/ui/flow-button";

import { useTranslations } from "@/contexts/language-context";
import type { PostMetadata } from "@/lib/posts";
import { assetPath } from "@/lib/utils";

const defaultPostImage = "/images/og-image.png";

const RelatedBlogSection = ({ posts }: { posts: PostMetadata[] }) => {
  const { t, locale } = useTranslations();
  const dateLocaleTag = locale === "es" ? "es-CO" : "en-US";

  return (
    <section className="pt-8 sm:pt-16 lg:pt-24">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <p className="text-sm font-medium uppercase">
            {t("blocks.relatedBlogSection.eyebrow")}
          </p>

          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            {t("blocks.relatedBlogSection.title")}
          </h2>

          <p className="text-muted-foreground text-xl">
            {t("blocks.relatedBlogSection.subtitle")}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="group h-full overflow-hidden shadow-none">
                <CardContent className="flex h-full flex-col gap-3.5">
                  <div className="mb-2.5 overflow-hidden rounded-lg">
                    <Image
                      src={assetPath(post.image ?? defaultPostImage)}
                      alt={post.title ?? t("blocks.blogHero.postFallbackAlt")}
                      width={1200}
                      height={675}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="h-59.5 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-1.5">
                    <div className="text-muted-foreground flex items-center gap-1.5">
                      <CalendarDaysIcon className="size-4.5" />
                      <span className="text-muted-foreground">
                        {new Date(post.publishedAt ?? "").toLocaleDateString(
                          dateLocaleTag,
                          {
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                          },
                        )}
                      </span>
                    </div>
                    <Badge className="bg-primary/10 text-primary rounded-full text-sm">
                      {post.category}
                    </Badge>
                  </div>

                  <h3 className="line-clamp-2 text-lg font-medium md:text-xl">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex flex-1 items-end justify-between">
                    <p className="text-sm font-medium">{post.author?.name}</p>
                    <SecondaryFlowButton size="icon">
                      <ArrowRightIcon className="size-4 -rotate-45" />
                      <span className="sr-only">
                        {t("blocks.relatedBlogSection.readMoreSrOnly").replace(
                          "{title}",
                          post.title ?? "",
                        )}
                      </span>
                    </SecondaryFlowButton>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogSection;
