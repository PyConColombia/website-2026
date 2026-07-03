"use client";

import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
  duration?: number;
  /** When set, scroll speed stays constant regardless of content width. */
  pixelsPerSecond?: number;
  delay?: number;
  gap?: number;
  pauseOnHover?: boolean;
  repeat?: number;
  reverse?: boolean;
  vertical?: boolean;
}

function Marquee(props: MarqueeProps) {
  const {
    children,
    className,
    duration: durationProp = 40,
    pixelsPerSecond,
    delay = 0,
    gap = 1,
    pauseOnHover = false,
    repeat = 4,
    reverse = false,
    vertical = false,
    ...rest
  } = props;

  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(durationProp);

  useLayoutEffect(() => {
    if (!pixelsPerSecond) {
      setDuration(durationProp);
      return;
    }

    const track = trackRef.current;

    if (!track) {
      return;
    }

    const updateDuration = () => {
      const size = vertical
        ? track.getBoundingClientRect().height
        : track.getBoundingClientRect().width;

      if (size > 0) {
        setDuration(size / pixelsPerSecond);
      }
    };

    updateDuration();

    const observer = new ResizeObserver(updateDuration);
    observer.observe(track);

    return () => observer.disconnect();
  }, [pixelsPerSecond, durationProp, vertical]);

  return (
    <div
      style={
        {
          "--marquee-duration": `${duration}s`,
          "--marquee-delay": `${delay}s`,
          "--marquee-gap": `${gap}rem`,
        } as CSSProperties
      }
      className={cn(
        "group flex gap-(--marquee-gap) overflow-hidden p-3",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
      {...rest}
    >
      {Array(repeat)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            ref={index === 0 ? trackRef : undefined}
            className={cn(
              "flex shrink-0 justify-around gap-(--marquee-gap) [animation-delay:var(--marquee-delay)]",
              {
                "animate-marquee-horizontal flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-direction:reverse]": reverse,
              },
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

export { Marquee, type MarqueeProps };
