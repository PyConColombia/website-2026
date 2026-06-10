"use client";

import { PlayIcon } from "lucide-react";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type YouTubeEmbedCardProps = {
  youtubeId: string;
  title: string;
  playLabel: string;
  onClick: () => void;
};

const MIN_THUMB_WIDTH = 480;

function getYouTubeThumbnailUrls(youtubeId: string) {
  return [
    `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${youtubeId}/sddefault.jpg`,
    `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`,
  ];
}

const YouTubeEmbedCard = ({
  youtubeId,
  title,
  playLabel,
  onClick,
}: YouTubeEmbedCardProps) => {
  const thumbUrls = useMemo(
    () => getYouTubeThumbnailUrls(youtubeId),
    [youtubeId],
  );
  const [thumbState, setThumbState] = useState({
    youtubeId,
    thumbIndex: 0,
  });

  if (thumbState.youtubeId !== youtubeId) {
    setThumbState({ youtubeId, thumbIndex: 0 });
  }

  const thumbIndex = thumbState.thumbIndex;
  const thumbSrc =
    thumbUrls[thumbIndex] ?? thumbUrls[thumbUrls.length - 1] ?? "";

  const tryNextThumbnail = useCallback(
    (naturalWidth: number) => {
      if (
        naturalWidth >= MIN_THUMB_WIDTH ||
        thumbIndex >= thumbUrls.length - 1
      ) {
        return;
      }

      setThumbState((state) => ({
        ...state,
        thumbIndex: state.thumbIndex + 1,
      }));
    },
    [thumbIndex, thumbUrls.length],
  );

  return (
    <button
      type="button"
      className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl border bg-card shadow-sm"
      onClick={onClick}
      aria-label={`${playLabel}: ${title}`}
    >
      <Image
        key={thumbSrc}
        src={thumbSrc}
        alt=""
        fill
        unoptimized
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        onLoad={(event) => {
          tryNextThumbnail(event.currentTarget.naturalWidth);
        }}
        onError={() => {
          setThumbState((state) =>
            state.thumbIndex < thumbUrls.length - 1
              ? { ...state, thumbIndex: state.thumbIndex + 1 }
              : state,
          );
        }}
      />
      <span
        className="absolute inset-0 bg-black/35 transition-colors group-hover:bg-black/45"
        aria-hidden
      />
      <span
        className={cn(
          "absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full",
          "bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-105",
        )}
        aria-hidden
      >
        <PlayIcon className="size-6 fill-current" />
      </span>
    </button>
  );
};

export default YouTubeEmbedCard;
