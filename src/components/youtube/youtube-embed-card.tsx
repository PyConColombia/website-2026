"use client";

import { PlayIcon } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type YouTubeEmbedCardProps = {
  youtubeId: string;
  title: string;
  playLabel: string;
  onClick: () => void;
};

const YouTubeEmbedCard = ({
  youtubeId,
  title,
  playLabel,
  onClick,
}: YouTubeEmbedCardProps) => {
  const thumbMax = `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;
  const thumbHq = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <button
      type="button"
      className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl border bg-card shadow-sm"
      onClick={onClick}
      aria-label={`${playLabel}: ${title}`}
    >
      <Image
        src={thumbMax}
        alt=""
        fill
        unoptimized
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        onError={(event) => {
          const target = event.currentTarget;
          if (!target.src.includes("hqdefault")) {
            target.src = thumbHq;
          }
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
