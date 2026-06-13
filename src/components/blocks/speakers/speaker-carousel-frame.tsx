"use client";

import { useId } from "react";

import type { Speaker } from "@/assets/data/speakers";
import PersonImage from "@/components/ui/person-image";
import { cn } from "@/lib/utils";

export type SpeakerFrameVariant = "double-arch" | "arch" | "oval";

type FrameShape = {
  fill: string;
  clip: string;
  imageScale: number;
  imageY: number;
};

const FRAME_VARIANTS: Record<SpeakerFrameVariant, FrameShape> = {
  "double-arch": {
    fill: "#FADCE4",
    clip: `M 140 22
      C 92 22, 54 58, 54 98
      C 54 128, 92 144, 140 150
      C 188 144, 226 128, 226 98
      C 226 58, 188 22, 140 22
      Z
      M 140 150
      C 92 156, 54 192, 54 232
      C 54 288, 92 338, 140 338
      C 188 338, 226 288, 226 232
      C 226 192, 188 156, 140 150
      Z`,
    imageScale: 1.08,
    imageY: -4,
  },
  arch: {
    fill: "#D4EBD8",
    clip: `M 62 340
      L 62 128
      C 62 38, 140 16, 218 128
      L 218 340
      Z`,
    imageScale: 1.06,
    imageY: 0,
  },
  oval: {
    fill: "#EBEBEB",
    clip: "",
    imageScale: 1.05,
    imageY: 0,
  },
};

const FRAME_SEQUENCE: SpeakerFrameVariant[] = [
  "double-arch",
  "arch",
  "oval",
  "arch",
  "oval",
];

export const getSpeakerFrameVariant = (index: number): SpeakerFrameVariant =>
  FRAME_SEQUENCE[index % FRAME_SEQUENCE.length] ?? "oval";

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
  const frame = FRAME_VARIANTS[variant];
  const isOval = variant === "oval";

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
            {isOval ? (
              <ellipse cx="140" cy="178" rx="84" ry="152" />
            ) : (
              <path d={frame.clip} />
            )}
          </clipPath>
        </defs>

        {isOval ? (
          <ellipse cx="140" cy="178" rx="84" ry="152" fill={frame.fill} />
        ) : (
          <path d={frame.clip} fill={frame.fill} />
        )}

        <foreignObject
          x="0"
          y="0"
          width="280"
          height="360"
          clipPath={`url(#${clipId})`}
        >
          <div
            className="relative size-full overflow-hidden"
            style={{
              transform: `translateY(${frame.imageY}px) scale(${frame.imageScale})`,
              transformOrigin: "50% 18%",
            }}
          >
            <PersonImage
              src={speaker.image}
              alt=""
              fill
              sizes="(max-width: 768px) 50vw, 20vw"
              className="object-cover object-top"
            />
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default SpeakerCarouselFrame;
