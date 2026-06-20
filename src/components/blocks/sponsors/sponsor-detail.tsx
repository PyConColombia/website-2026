"use client";

import { ArrowLeftIcon, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { getSponsorGalleryImages } from "@/assets/data/sponsor-gallery";
import { getSponsorVideos } from "@/assets/data/sponsor-videos";
import SponsorBecomeSection from "@/components/blocks/sponsors/sponsor-become-section";
import GalleryImageLightbox from "@/components/gallery/gallery-image-lightbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { MotionPreset } from "@/components/ui/motion-preset";
import YouTubeEmbedCard from "@/components/youtube/youtube-embed-card";
import YouTubeVideoLightbox from "@/components/youtube/youtube-video-lightbox";
import { useLanguage, useTranslations } from "@/contexts/language-context";
import { getSponsorBySlug, getSponsorDetail } from "@/lib/sponsors";
import { assetPath, cn } from "@/lib/utils";

type SponsorDetailProps = {
  slug: string;
};

const SponsorDetail = ({ slug }: SponsorDetailProps) => {
  const { locale } = useLanguage();
  const { t } = useTranslations();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(
    null,
  );
  const sponsor = useMemo(() => getSponsorBySlug(slug), [slug]);
  const detail = useMemo(() => getSponsorDetail(slug, locale), [slug, locale]);
  const galleryImages = useMemo(() => getSponsorGalleryImages(slug), [slug]);
  const videos = useMemo(() => getSponsorVideos(slug), [slug]);

  if (!sponsor) {
    return null;
  }

  const tierTitle = t(`blocks.sponsors.tiers.${sponsor.tierKey}.title`);
  const tierBadgeClassName = {
    venue: "border-primary/40 bg-primary/10 text-primary",
    platinum:
      "border-cyan-500/35 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
    gold: "border-amber-500/35 bg-amber-500/15 text-amber-700 dark:text-amber-300",
    goldPlus:
      "border-yellow-500/35 bg-yellow-500/15 text-yellow-800 dark:text-yellow-300",
    silverPlus:
      "border-violet-500/35 bg-violet-500/10 text-violet-700 dark:text-violet-300",
    silver:
      "border-slate-500/35 bg-slate-500/10 text-slate-700 dark:text-slate-300",
  }[sponsor.tierKey];
  const summaryParagraph = detail?.paragraphs[0] ?? detail?.tagline ?? "";
  const extendedParagraphs = detail?.paragraphs.slice(1) ?? [];
  const hasExtendedAbout = extendedParagraphs.length > 0;
  const hasFaqTopics = Boolean(detail?.faqTopics?.length);
  const hasGallery = galleryImages.length > 0;
  const hasVideos = videos.length > 0;

  return (
    <>
      <section className="overflow-hidden py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-6xl space-y-4 text-center md:mb-16 lg:mb-20">
            <MotionPreset
              fade
              blur
              slide={{ direction: "up", offset: 50 }}
              delay={0.05}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="outline"
                className={cn("text-sm font-medium", tierBadgeClassName)}
              >
                {tierTitle}
              </Badge>
            </MotionPreset>

            <MotionPreset
              fade
              blur
              slide={{ direction: "up", offset: 50 }}
              delay={0.1}
              transition={{ duration: 0.5 }}
            >
              <h1 className="sr-only">{sponsor.name}</h1>
              <div className="mx-auto flex max-w-2xl items-center justify-center px-4 py-2 sm:px-6">
                {sponsor.logo ? (
                  <Image
                    src={assetPath(sponsor.logo)}
                    alt={sponsor.name}
                    width={320}
                    height={112}
                    className="h-auto max-h-28 w-auto max-w-full object-contain sm:max-h-32"
                    priority
                  />
                ) : (
                  <span className="text-2xl font-semibold">{sponsor.name}</span>
                )}
              </div>
            </MotionPreset>

            <MotionPreset
              fade
              blur
              slide={{ direction: "up", offset: 50 }}
              delay={0.2}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary text-sm font-medium uppercase">
                {t("blocks.sponsorDetailPage.aboutEyebrow")}
              </p>
            </MotionPreset>

            <MotionPreset
              component="h2"
              className="whitespace-pre-line text-2xl font-semibold md:text-3xl lg:text-4xl"
              fade
              blur
              slide={{ direction: "up", offset: 50 }}
              delay={0.3}
              transition={{ duration: 0.5 }}
            >
              {detail?.tagline ?? t("blocks.sponsorDetailPage.aboutTitle")}
            </MotionPreset>

            {summaryParagraph ? (
              <MotionPreset
                component="p"
                className="text-muted-foreground mx-auto max-w-4xl whitespace-pre-line text-xl"
                fade
                blur
                slide={{ direction: "up", offset: 50 }}
                delay={0.4}
                transition={{ duration: 0.5 }}
              >
                {summaryParagraph}
              </MotionPreset>
            ) : null}

            <MotionPreset
              fade
              blur
              slide={{ direction: "up", offset: 50 }}
              delay={0.5}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap justify-center gap-4">
                {sponsor.href ? (
                  <Button size="lg" className="group" asChild>
                    <a
                      href={sponsor.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("blocks.sponsorDetailPage.visitWebsite")}
                      <ExternalLinkIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                ) : null}
                {detail?.caseStudiesLink ? (
                  <Button size="lg" variant="outline" className="group" asChild>
                    <a
                      href={detail.caseStudiesLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {detail.caseStudiesLink.label}
                      <ExternalLinkIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                ) : null}
                <Button size="lg" variant="outline" asChild>
                  <Link href="/#sponsors">
                    <ArrowLeftIcon />
                    {t("blocks.sponsorDetailPage.backToSponsors")}
                  </Link>
                </Button>
              </div>
            </MotionPreset>

            {hasGallery ? (
              <MotionPreset
                fade
                blur
                slide={{ direction: "up", offset: 40 }}
                delay={0.55}
                transition={{ duration: 0.5 }}
              >
                <div className="relative pt-4">
                  <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-28 bg-linear-to-r to-transparent max-sm:hidden" />
                  <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-28 bg-linear-to-l to-transparent max-sm:hidden" />
                  <div className="w-full overflow-hidden">
                    <Marquee
                      pauseOnHover
                      duration={24}
                      gap={1.25}
                      className="py-2"
                    >
                      {galleryImages.map((image, index) => (
                        <button
                          key={`${image.src}-${index}`}
                          type="button"
                          className="shrink-0 cursor-zoom-in rounded-2xl transition-opacity hover:opacity-90 focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                          onClick={() => setSelectedImageIndex(index)}
                          aria-label={`${t("blocks.gallery.lightboxViewImage")}: ${image.alt}`}
                        >
                          <Image
                            src={assetPath(image.src)}
                            alt={image.alt}
                            width={320}
                            height={260}
                            className="h-56 w-70 rounded-2xl object-cover shadow-sm sm:h-60 sm:w-75"
                          />
                        </button>
                      ))}
                    </Marquee>
                  </div>
                </div>
              </MotionPreset>
            ) : null}
          </div>
        </div>
      </section>

      {hasGallery ? (
        <GalleryImageLightbox
          images={galleryImages}
          selectedIndex={selectedImageIndex}
          onSelectedIndexChange={setSelectedImageIndex}
          previousLabel={t("blocks.gallery.lightboxPrevious")}
          nextLabel={t("blocks.gallery.lightboxNext")}
          closeLabel={t("blocks.gallery.lightboxClose")}
        />
      ) : null}

      {hasExtendedAbout ? (
        <section className="px-4 pb-8 sm:px-6 sm:pb-16 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-7xl space-y-10">
            <MotionPreset
              fade
              blur
              slide={{ direction: "up", offset: 40 }}
              delay={0.1}
              transition={{ duration: 0.5 }}
            >
              <div id="about" className="mx-auto max-w-4xl scroll-mt-24">
                <div className="text-muted-foreground space-y-4 text-base leading-7">
                  {extendedParagraphs.map((paragraph) => (
                    <p key={paragraph} className="whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </MotionPreset>

            {hasFaqTopics ? (
              <MotionPreset
                fade
                blur
                slide={{ direction: "up", offset: 30 }}
                delay={0.12}
                transition={{ duration: 0.45 }}
              >
                <div className="mx-auto max-w-4xl">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    aria-label={t("blocks.sponsorDetailPage.faqTopicsAria")}
                  >
                    {detail?.faqTopics?.map((faqTopic, index) => (
                      <AccordionItem
                        key={`${faqTopic.topic}-${index}`}
                        value={`topic-${index + 1}`}
                      >
                        <AccordionTrigger className="py-5 text-base font-medium">
                          {faqTopic.topic}
                        </AccordionTrigger>
                        {faqTopic.description ? (
                          <AccordionContent className="text-muted-foreground whitespace-pre-line text-base leading-7">
                            {faqTopic.description}
                          </AccordionContent>
                        ) : null}
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </MotionPreset>
            ) : null}
          </div>
        </section>
      ) : null}

      {hasVideos ? (
        <section className="px-4 pb-8 sm:px-6 sm:pb-16 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-7xl space-y-8">
            <MotionPreset
              fade
              blur
              slide={{ direction: "up", offset: 40 }}
              delay={0.1}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl space-y-4 text-center"
            >
              <p className="text-primary text-sm font-medium uppercase">
                {t("blocks.sponsorDetailPage.videosEyebrow")}
              </p>
              <h2 className="text-2xl font-semibold md:text-3xl">
                {t("blocks.sponsorDetailPage.videosTitle")}
              </h2>
            </MotionPreset>

            <div
              className={cn(
                "mx-auto grid gap-6",
                videos.length === 1
                  ? "max-w-2xl"
                  : "max-w-6xl md:grid-cols-2 lg:grid-cols-3",
              )}
            >
              {videos.map((video, index) => (
                <MotionPreset
                  key={video.youtubeId}
                  fade
                  blur
                  slide={{ direction: "up", offset: 30 }}
                  delay={0.15}
                  transition={{ duration: 0.45 }}
                >
                  <YouTubeEmbedCard
                    youtubeId={video.youtubeId}
                    title={video.title}
                    playLabel={t("blocks.sponsorDetailPage.playVideoLabel")}
                    onClick={() => setSelectedVideoIndex(index)}
                  />
                </MotionPreset>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {hasVideos ? (
        <YouTubeVideoLightbox
          videos={videos}
          selectedIndex={selectedVideoIndex}
          onSelectedIndexChange={setSelectedVideoIndex}
          previousLabel={t("blocks.gallery.lightboxPrevious")}
          nextLabel={t("blocks.gallery.lightboxNext")}
          closeLabel={t("blocks.gallery.lightboxClose")}
        />
      ) : null}

      <SponsorBecomeSection />
    </>
  );
};

export default SponsorDetail;
