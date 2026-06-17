"use client";

import { useId } from "react";

import type { Speaker } from "@/assets/data/speakers";
import { PERSON_PLACEHOLDER_IMAGE } from "@/lib/person-image";
import { resolveSpeakerImageUrl } from "@/lib/speaker-image-url";
import { assetPath, cn } from "@/lib/utils";

export type SpeakerFrameVariant =
  | "arch"
  | "oval"
  | "rounded"
  | "shield"
  | "circle"
  | "gothic";

const FRAME_CENTER_X = 140;
const FRAME_HALF_WIDTH = 120;
const FRAME_LEFT = FRAME_CENTER_X - FRAME_HALF_WIDTH;
const FRAME_RIGHT = FRAME_CENTER_X + FRAME_HALF_WIDTH;
const FRAME_BOTTOM = 340;

const ARCH_CLIP = `M ${FRAME_LEFT} ${FRAME_BOTTOM}
  L ${FRAME_LEFT} 115
  C ${FRAME_LEFT} 22, ${FRAME_CENTER_X} 4, ${FRAME_RIGHT} 115
  L ${FRAME_RIGHT} ${FRAME_BOTTOM}
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

const ROUNDED_RADIUS = 28;
const ROUNDED_TOP = 28;
const ROUNDED_BOTTOM = FRAME_BOTTOM - ROUNDED_RADIUS;

const ROUNDED_CLIP = `M ${FRAME_LEFT + ROUNDED_RADIUS} ${ROUNDED_TOP}
  L ${FRAME_RIGHT - ROUNDED_RADIUS} ${ROUNDED_TOP}
  A ${ROUNDED_RADIUS} ${ROUNDED_RADIUS} 0 0 1 ${FRAME_RIGHT} ${ROUNDED_TOP + ROUNDED_RADIUS}
  L ${FRAME_RIGHT} ${ROUNDED_BOTTOM}
  A ${ROUNDED_RADIUS} ${ROUNDED_RADIUS} 0 0 1 ${FRAME_RIGHT - ROUNDED_RADIUS} ${FRAME_BOTTOM}
  L ${FRAME_LEFT + ROUNDED_RADIUS} ${FRAME_BOTTOM}
  A ${ROUNDED_RADIUS} ${ROUNDED_RADIUS} 0 0 1 ${FRAME_LEFT} ${ROUNDED_BOTTOM}
  L ${FRAME_LEFT} ${ROUNDED_TOP + ROUNDED_RADIUS}
  A ${ROUNDED_RADIUS} ${ROUNDED_RADIUS} 0 0 1 ${FRAME_LEFT + ROUNDED_RADIUS} ${ROUNDED_TOP}
  Z`;

const SHIELD_CLIP = `M ${FRAME_LEFT} 90
  C ${FRAME_LEFT} 28, ${FRAME_CENTER_X} 8, ${FRAME_RIGHT} 90
  L ${FRAME_RIGHT} 210
  C ${FRAME_RIGHT} 278, 198, 332, ${FRAME_CENTER_X} 345
  C 82, 332, ${FRAME_LEFT} 278, ${FRAME_LEFT} 210
  Z`;

const CIRCLE_RX = FRAME_HALF_WIDTH;
const CIRCLE_RY = 155;
const CIRCLE_CY = 182;
const CIRCLE_TOP = CIRCLE_CY - CIRCLE_RY;

const CIRCLE_CLIP = `M ${FRAME_CENTER_X} ${CIRCLE_TOP}
  A ${CIRCLE_RX} ${CIRCLE_RY} 0 1 1 ${FRAME_CENTER_X - 0.01} ${CIRCLE_TOP}
  Z`;

const GOTHIC_CLIP = `M ${FRAME_LEFT} ${FRAME_BOTTOM}
  L ${FRAME_LEFT} 125
  C ${FRAME_LEFT} 42, 78, 6, ${FRAME_CENTER_X} 6
  C 202, 6, ${FRAME_RIGHT} 42, ${FRAME_RIGHT} 125
  L ${FRAME_RIGHT} ${FRAME_BOTTOM}
  Z`;

const FRAME_CLIP_PATHS: Record<SpeakerFrameVariant, string> = {
  arch: ARCH_CLIP,
  oval: OVAL_CLIP,
  rounded: ROUNDED_CLIP,
  shield: SHIELD_CLIP,
  circle: CIRCLE_CLIP,
  gothic: GOTHIC_CLIP,
};

const SPEAKER_FRAME_VARIANTS = Object.keys(
  FRAME_CLIP_PATHS,
) as SpeakerFrameVariant[];

export const getSpeakerFrameVariant = (index: number): SpeakerFrameVariant =>
  SPEAKER_FRAME_VARIANTS[index % SPEAKER_FRAME_VARIANTS.length];

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
            <path d={FRAME_CLIP_PATHS[variant]} />
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
