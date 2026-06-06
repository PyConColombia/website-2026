"use client";

import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import { useCallback, useEffect } from "react";

import type { SponsorVideo } from "@/assets/data/sponsor-videos";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

type YouTubeVideoLightboxProps = {
  videos: SponsorVideo[];
  selectedIndex: number | null;
  onSelectedIndexChange: (index: number | null) => void;
  previousLabel: string;
  nextLabel: string;
  closeLabel: string;
};

const YouTubeVideoLightbox = ({
  videos,
  selectedIndex,
  onSelectedIndexChange,
  previousLabel,
  nextLabel,
  closeLabel,
}: YouTubeVideoLightboxProps) => {
  const open = selectedIndex !== null;
  const currentVideo = selectedIndex !== null ? videos[selectedIndex] : null;

  const goToPrevious = useCallback(() => {
    if (selectedIndex === null || videos.length === 0) {
      return;
    }

    onSelectedIndexChange(
      selectedIndex === 0 ? videos.length - 1 : selectedIndex - 1,
    );
  }, [onSelectedIndexChange, selectedIndex, videos.length]);

  const goToNext = useCallback(() => {
    if (selectedIndex === null || videos.length === 0) {
      return;
    }

    onSelectedIndexChange(
      selectedIndex === videos.length - 1 ? 0 : selectedIndex + 1,
    );
  }, [onSelectedIndexChange, selectedIndex, videos.length]);

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
        {currentVideo ? (
          <>
            <DialogTitle className="sr-only">{currentVideo.title}</DialogTitle>
            <DialogDescription className="sr-only">
              {currentVideo.title}
            </DialogDescription>
            <DialogClose
              className="absolute top-3 right-3 z-10 rounded-full bg-black/50 p-1.5 text-white opacity-90 transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
              aria-label={closeLabel}
            >
              <XIcon className="size-4" />
            </DialogClose>
            <div className="relative px-2 py-10 sm:px-12">
              {videos.length > 1 ? (
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
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
                <iframe
                  key={currentVideo.youtubeId}
                  className="absolute inset-0 size-full border-0"
                  src={`https://www.youtube-nocookie.com/embed/${currentVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              {videos.length > 1 ? (
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

export default YouTubeVideoLightbox;
