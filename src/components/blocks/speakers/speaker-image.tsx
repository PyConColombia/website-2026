"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

import PersonImage from "@/components/ui/person-image";
import { resolveSpeakerImageUrl } from "@/lib/speaker-image-url";

type SpeakerImageProps = Omit<ImageProps, "src"> & {
  src?: string | null;
};

const SpeakerImage = ({ src, alt, ...props }: SpeakerImageProps) => {
  const resolvedSrc = resolveSpeakerImageUrl(src);
  const [hasError, setHasError] = useState(false);

  if (resolvedSrc && !hasError) {
    return (
      <Image
        {...props}
        src={resolvedSrc}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
      />
    );
  }

  return <PersonImage {...props} src={null} alt={alt} />;
};

export default SpeakerImage;
