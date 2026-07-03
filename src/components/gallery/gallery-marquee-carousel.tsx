"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import type { GalleryImage } from "@/assets/data/gallery";
import GalleryImageLightbox from "@/components/gallery/gallery-image-lightbox";
import { Marquee } from "@/components/ui/marquee";
import { assetPath, cn } from "@/lib/utils";

const defaultImageClassName =
  "h-68.5 w-67 shrink-0 rounded-lg border object-cover shadow-sm";

export type GalleryMarqueeCarouselProps = {
  images: GalleryImage[];
  duration?: number;
  /** Constant scroll speed in px/s. Overrides duration when set. */
  pixelsPerSecond?: number;
  gap?: number;
  showEdgeFade?: boolean;
  imageClassName?: string;
  className?: string;
  lightbox?: boolean;
  lightboxLabels?: {
    previous: string;
    next: string;
    close: string;
    viewImage: string;
  };
};

const GalleryMarqueeCarousel = ({
  images,
  duration = 22,
  pixelsPerSecond = 130,
  gap = 1.5,
  showEdgeFade = true,
  imageClassName = defaultImageClassName,
  className,
  lightbox = false,
  lightboxLabels,
}: GalleryMarqueeCarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryRows = useMemo(() => {
    const midpoint = Math.ceil(images.length / 2);

    return [images.slice(0, midpoint), images.slice(midpoint)];
  }, [images]);

  if (images.length === 0) {
    return null;
  }

  const renderImage = (image: GalleryImage, index: number) => {
    const imageNode = (
      <Image
        src={assetPath(image.src)}
        alt={image.alt}
        width={268}
        height={274}
        sizes="268px"
        className={imageClassName}
      />
    );

    if (!lightbox) {
      return (
        <div key={`${image.src}-${index}`} className="shrink-0">
          {imageNode}
        </div>
      );
    }

    return (
      <button
        key={`${image.src}-${index}`}
        type="button"
        className="shrink-0 cursor-zoom-in transition-opacity hover:opacity-90 focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden rounded-lg"
        onClick={() => setSelectedIndex(index)}
        aria-label={
          lightboxLabels
            ? `${lightboxLabels.viewImage}: ${image.alt}`
            : image.alt
        }
      >
        {imageNode}
      </button>
    );
  };

  return (
    <>
      <div className={cn("relative", className)}>
        {showEdgeFade ? (
          <>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-35 bg-linear-to-r to-transparent max-sm:hidden" />
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-35 bg-linear-to-l to-transparent max-sm:hidden" />
          </>
        ) : null}

        <div className="w-full overflow-hidden">
          <Marquee
            pauseOnHover
            duration={duration}
            pixelsPerSecond={pixelsPerSecond}
            gap={gap}
          >
            {galleryRows[0].map((image, index) => renderImage(image, index))}
          </Marquee>
        </div>

        {galleryRows[1].length > 0 ? (
          <div className="w-full overflow-hidden">
            <Marquee
              pauseOnHover
              duration={duration}
              pixelsPerSecond={pixelsPerSecond}
              gap={gap}
              reverse
            >
              {galleryRows[1].map((image, index) =>
                renderImage(image, index + galleryRows[0].length),
              )}
            </Marquee>
          </div>
        ) : null}
      </div>

      {lightbox && lightboxLabels ? (
        <GalleryImageLightbox
          images={images}
          selectedIndex={selectedIndex}
          onSelectedIndexChange={setSelectedIndex}
          previousLabel={lightboxLabels.previous}
          nextLabel={lightboxLabels.next}
          closeLabel={lightboxLabels.close}
        />
      ) : null}
    </>
  );
};

export default GalleryMarqueeCarousel;
