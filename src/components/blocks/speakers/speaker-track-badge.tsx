"use client";

import Link from "next/link";

import type { SpeakerTrack } from "@/assets/data/speakers";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "@/contexts/language-context";
import { getSpeakerTrackHref, speakerTrackStyles } from "@/lib/speaker-tracks";
import { cn } from "@/lib/utils";

type SpeakerTrackBadgeProps = {
  track: SpeakerTrack;
  asLink?: boolean;
  className?: string;
};

const SpeakerTrackBadge = ({
  track,
  asLink = false,
  className,
}: SpeakerTrackBadgeProps) => {
  const { t } = useTranslations();
  const label = t(`blocks.speakers.tracks.${track}`);

  const badge = (
    <Badge
      variant="outline"
      className={cn(speakerTrackStyles[track].badge, className)}
    >
      {label}
    </Badge>
  );

  if (asLink) {
    return (
      <Link
        href={getSpeakerTrackHref(track)}
        className="rounded-full transition-opacity hover:opacity-90"
      >
        {badge}
      </Link>
    );
  }

  return badge;
};

export default SpeakerTrackBadge;
