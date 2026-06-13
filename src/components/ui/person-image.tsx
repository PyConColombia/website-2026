"use client";

import Image, { type ImageProps } from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import {
  PERSON_PLACEHOLDER_IMAGE,
  PERSON_PLACEHOLDER_IMAGE_DARK,
} from "@/lib/person-image";
import { assetPath } from "@/lib/utils";

type PersonImageProps = Omit<ImageProps, "src"> & {
  src?: string | null;
};

const getPlaceholderPath = (isDark: boolean) =>
  assetPath(isDark ? PERSON_PLACEHOLDER_IMAGE_DARK : PERSON_PLACEHOLDER_IMAGE);

const PersonImage = ({ src, alt, ...props }: PersonImageProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const trimmedSrc = src?.trim();
  const [imgSrc, setImgSrc] = useState(() =>
    trimmedSrc ? assetPath(trimmedSrc) : getPlaceholderPath(isDark),
  );

  useEffect(() => {
    setImgSrc(trimmedSrc ? assetPath(trimmedSrc) : getPlaceholderPath(isDark));
  }, [trimmedSrc, isDark]);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        const fallback = getPlaceholderPath(isDark);

        if (imgSrc !== fallback) {
          setImgSrc(fallback);
        }
      }}
    />
  );
};

export default PersonImage;
