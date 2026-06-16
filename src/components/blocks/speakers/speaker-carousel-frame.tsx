"use client";

import { useId } from "react";

import type { Speaker } from "@/assets/data/speakers";
import { PERSON_PLACEHOLDER_IMAGE } from "@/lib/person-image";
import { resolveSpeakerImageUrl } from "@/lib/speaker-image-url";
import { assetPath, cn } from "@/lib/utils";

export type SpeakerFrameVariant = "arch" | "oval";

const FRAME_CENTER_X = 140;
const FRAME_HALF_WIDTH = 120;
const FRAME_LEFT = FRAME_CENTER_X - FRAME_HALF_WIDTH;
const FRAME_RIGHT = FRAME_CENTER_X + FRAME_HALF_WIDTH;

const ARCH_CLIP = `M ${FRAME_LEFT} 340
  L ${FRAME_LEFT} 115
  C ${FRAME_LEFT} 22, ${FRAME_CENTER_X} 4, ${FRAME_RIGHT} 115
  L ${FRAME_RIGHT} 340
  Z`;

const OVAL_RY = 158;
const OVAL_CY = 172;
const OVAL_TOP = OVAL_CY - OVAL_RY;
const OVAL_BOTTOM = OVAL_CY + OVAL_RY;
const OVAL_SIDE_TOP = OVAL_TOP + FRAME_HALF_WIDTH;
const OVAL_SIDE_BOTTOM = OVAL_BOTTOM - FRAME_HALF_WIDTH;

const OVAL_CLIP = `M ${FRAME_LEFT} ${OVAL_SIDE_TOP}
  A ${FRAME_HALF_WIDTH} ${FRAME_HALF_WIDTH} 0 0 1 ${FRAME_RIGHT} ${OVAL_SIDE_TOP}
  L ${FRAME_RIGHT} ${OVAL_SIDE_BOTTOM}
  A ${FRAME_HALF_WIDTH} ${FRAME_HALF_WIDTH} 0 0 1 ${FRAME_LEFT} ${OVAL_SIDE_BOTTOM}
  Z`;

export const getSpeakerFrameVariant = (index: number): SpeakerFrameVariant =>
  index % 2 === 0 ? "arch" : "oval";

type SpeakerCarouselFrameProps = {
  speaker: Speaker;
  frameIndex: number;
  className?: string;
};

const SpeakerCarouselFrame = ({
  speaker,
  frameIndex,
  className,
}: SpeakerCarouselFrameProps) => {
  const clipId = useId();
  const variant = getSpeakerFrameVariant(frameIndex);
  const isOval = variant === "oval";
  const imageUrl = resolveSpeakerImageUrl(speaker.image);
  const imageSrc = imageUrl ?? assetPath(PERSON_PLACEHOLDER_IMAGE);

  return (
    <div className={cn("mx-auto h-84.25 w-full", className)}>
      <svg
        viewBox="0 0 280 360"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
            {isOval ? <path d={OVAL_CLIP} /> : <path d={ARCH_CLIP} />}
          </clipPath>
        </defs>

        <foreignObject
          x="0"
          y="0"
          width="280"
          height="360"
          clipPath={`url(#${clipId})`}
        >
          {/* biome-ignore lint/performance/noImgElement: Next/Image does not render inside SVG foreignObject */}
          <img
            src={imageSrc}
            alt={speaker.name}
            className="size-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
        </foreignObject>
      </svg>
    </div>
  );
};

export default SpeakerCarouselFrame;
