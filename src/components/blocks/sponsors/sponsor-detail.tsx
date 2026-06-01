"use client";

import { ArrowLeftIcon, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { getSponsorGalleryImages } from "@/assets/data/sponsor-gallery";
import SponsorBecomeSection from "@/components/blocks/sponsors/sponsor-become-section";
import GalleryMarqueeCarousel from "@/components/gallery/gallery-marquee-carousel";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { PrimaryFlowButton } from "@/components/ui/flow-button";
import { MotionPreset } from "@/components/ui/motion-preset";
import { useLanguage, useTranslations } from "@/contexts/language-context";
import { getSponsorBySlug, getSponsorDetail } from "@/lib/sponsors";
import { assetPath, cn } from "@/lib/utils";

type SponsorDetailProps = {
  slug: string;
};

const SponsorDetail = ({ slug }: SponsorDetailProps) => {
  const { locale } = useLanguage();
  const { t } = useTranslations();
  const sponsor = useMemo(() => getSponsorBySlug(slug), [slug]);
  const detail = useMemo(() => getSponsorDetail(slug, locale), [slug, locale]);
  const galleryImages = useMemo(() => getSponsorGalleryImages(slug), [slug]);

  if (!sponsor) {
    return null;
  }

  const tierTitle = t(`blocks.sponsors.tiers.${sponsor.tierKey}.title`);
  const isVenue = sponsor.tier.accent === "venue";
  const hasAbout = Boolean(detail?.paragraphs.length);
  const hasGallery = galleryImages.length > 0;

  return (
    <>
      <section className="py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-12 lg:px-8">
          <MotionPreset
            fade
            blur
            slide={{ direction: "up", offset: 30 }}
            transition={{ duration: 0.5 }}
          >
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">
                      {t("blocks.sponsorDetailPage.breadcrumbHome")}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/#sponsors">
                      {t("blocks.sponsorDetailPage.breadcrumbSponsors")}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{sponsor.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </MotionPreset>

          <div className="space-y-6 text-center">
            <MotionPreset
              fade
              blur
              slide={{ direction: "up", offset: 50 }}
              delay={0.1}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="outline"
                className={cn(
                  "bg-background text-sm font-normal",
                  isVenue && "border-primary/30 text-primary",
                )}
              >
                {tierTitle}
              </Badge>
            </MotionPreset>

            <MotionPreset
              fade
              blur
              slide={{ direction: "up", offset: 50 }}
              delay={0.2}
              transition={{ duration: 0.5 }}
            >
              <h1 className="sr-only">{sponsor.name}</h1>
              <div
                className={cn(
                  "mx-auto flex max-w-2xl items-center justify-center rounded-2xl border bg-card px-8 py-10 shadow-sm sm:px-12 sm:py-14",
                  isVenue && "border-primary/20 bg-primary/5",
                )}
              >
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

            {detail?.tagline ? (
              <MotionPreset
                fade
                blur
                slide={{ direction: "up", offset: 50 }}
                delay={0.3}
                transition={{ duration: 0.5 }}
              >
                <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                  {detail.tagline}
                </p>
              </MotionPreset>
            ) : null}

            <MotionPreset
              fade
              blur
              slide={{ direction: "up", offset: 50 }}
              delay={0.4}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap justify-center gap-4">
                {sponsor.href ? (
                  <PrimaryFlowButton size="lg" asChild>
                    <a
                      href={sponsor.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("blocks.sponsorDetailPage.visitWebsite")}
                      <ExternalLinkIcon />
                    </a>
                  </PrimaryFlowButton>
                ) : null}
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-lg text-base shadow-none"
                  asChild
                >
                  <Link href="/#sponsors">
                    <ArrowLeftIcon />
                    {t("blocks.sponsorDetailPage.backToSponsors")}
                  </Link>
                </Button>
              </div>
            </MotionPreset>
          </div>
        </div>
      </section>

      {hasAbout ? (
        <section className="px-4 pb-8 sm:px-6 sm:pb-16 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <MotionPreset
              fade
              blur
              slide={{ direction: "up", offset: 40 }}
              delay={0.1}
              transition={{ duration: 0.5 }}
            >
              <div
                id="about"
                className="scroll-mt-24 rounded-lg border bg-card px-5 py-6 shadow-sm sm:px-8 sm:py-10 lg:px-12"
              >
                <h2 className="mb-6 text-xl font-semibold md:text-2xl">
                  {t("blocks.sponsorDetailPage.aboutTitle")}
                </h2>
                <div className="text-muted-foreground space-y-4 text-base leading-7">
                  {detail?.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </MotionPreset>
          </div>
        </section>
      ) : null}

      {hasGallery ? (
        <section className="pb-8 sm:pb-16 lg:pb-24">
          <MotionPreset
            fade
            slide={{ direction: "down", offset: 30 }}
            transition={{ duration: 0.5 }}
          >
            <GalleryMarqueeCarousel
              images={galleryImages}
              lightbox
              lightboxLabels={{
                previous: t("blocks.gallery.lightboxPrevious"),
                next: t("blocks.gallery.lightboxNext"),
                close: t("blocks.gallery.lightboxClose"),
                viewImage: t("blocks.gallery.lightboxViewImage"),
              }}
            />
          </MotionPreset>
        </section>
      ) : null}

      <SponsorBecomeSection />
    </>
  );
};

export default SponsorDetail;
