"use client";

import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect } from "react";

import type { GalleryImage } from "@/assets/data/gallery";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { assetPath } from "@/lib/utils";

type GalleryImageLightboxProps = {
  images: GalleryImage[];
  selectedIndex: number | null;
  onSelectedIndexChange: (index: number | null) => void;
  previousLabel: string;
  nextLabel: string;
  closeLabel: string;
};

const GalleryImageLightbox = ({
  images,
  selectedIndex,
  onSelectedIndexChange,
  previousLabel,
  nextLabel,
  closeLabel,
}: GalleryImageLightboxProps) => {
  const open = selectedIndex !== null;
  const currentImage = selectedIndex !== null ? images[selectedIndex] : null;

  const goToPrevious = useCallback(() => {
    if (selectedIndex === null || images.length === 0) {
      return;
    }

    onSelectedIndexChange(
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1,
    );
  }, [images.length, onSelectedIndexChange, selectedIndex]);

  const goToNext = useCallback(() => {
    if (selectedIndex === null || images.length === 0) {
      return;
    }

    onSelectedIndexChange(
      selectedIndex === images.length - 1 ? 0 : selectedIndex + 1,
    );
  }, [images.length, onSelectedIndexChange, selectedIndex]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious, open]);

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          onSelectedIndexChange(null);
        }
      }}
    >
      <DialogContent
        className="overflow-hidden border-none bg-transparent p-0 shadow-none sm:max-w-5xl"
        showCloseButton={false}
      >
        {currentImage ? (
          <>
            <DialogTitle className="sr-only">{currentImage.alt}</DialogTitle>
            <DialogDescription className="sr-only">
              {currentImage.alt}
            </DialogDescription>
            <DialogClose
              className="absolute top-3 right-3 z-10 rounded-full bg-black/50 p-1.5 text-white opacity-90 transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
              aria-label={closeLabel}
            >
              <XIcon className="size-4" />
            </DialogClose>
            <div className="relative flex max-h-[85vh] items-center justify-center px-2 py-10 sm:px-12">
              {images.length > 1 ? (
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  className="absolute top-1/2 left-0 z-10 size-10 -translate-y-1/2 rounded-full bg-black/50 text-white hover:bg-black/70"
                  onClick={goToPrevious}
                  aria-label={previousLabel}
                >
                  <ChevronLeftIcon className="size-5" />
                </Button>
              ) : null}
              <Image
                src={assetPath(currentImage.src)}
                alt={currentImage.alt}
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 80vw"
                className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
                priority
              />
              {images.length > 1 ? (
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  className="absolute top-1/2 right-0 z-10 size-10 -translate-y-1/2 rounded-full bg-black/50 text-white hover:bg-black/70"
                  onClick={goToNext}
                  aria-label={nextLabel}
                >
                  <ChevronRightIcon className="size-5" />
                </Button>
              ) : null}
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

export default GalleryImageLightbox;
