"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { galleryImages } from "@/assets/data/gallery";
import GalleryMarqueeCarousel from "@/components/gallery/gallery-marquee-carousel";
import { PrimaryFlowButton } from "@/components/ui/flow-button";
import { MotionPreset } from "@/components/ui/motion-preset";
import { useTranslations } from "@/contexts/language-context";

const galleryUrl = "https://photos.app.goo.gl/JKTcdNn8HBLNYWgH6";

const Gallery = () => {
  const { t } = useTranslations();

  return (
    <section
      id="gallery"
      className="space-y-12 py-8 sm:space-y-16 sm:py-16 lg:space-y-24 lg:py-24"
    >
      <MotionPreset
        fade
        slide={{ direction: "down", offset: 50 }}
        blur
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl space-y-4 px-4 text-center sm:px-6 lg:px-8"
      >
        <p className="text-primary text-sm font-medium uppercase">
          {t("blocks.gallery.eyebrow")}
        </p>
        <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
          {t("blocks.gallery.title")}
        </h2>
        <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
          {t("blocks.gallery.subtitle")}
        </p>
        <PrimaryFlowButton size="lg" className="mx-auto" asChild>
          <Link href={galleryUrl} target="_blank" rel="noopener noreferrer">
            {t("blocks.gallery.seeAll")}
            <ArrowRightIcon />
          </Link>
        </PrimaryFlowButton>
      </MotionPreset>

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
  );
};

export default Gallery;
