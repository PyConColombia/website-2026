import "server-only";

import { findSpeakerImagePathBySlug } from "@/lib/speaker-image-discovery.server";
import { resolveSpeakerImageUrl } from "@/lib/speaker-image-url";

export function resolveSpeakerImageSource(
  image: string | undefined | null,
  slug: string,
): string | undefined {
  const explicit = resolveSpeakerImageUrl(image);

  if (explicit) {
    return explicit;
  }

  const discovered = findSpeakerImagePathBySlug(slug);

  if (!discovered) {
    return undefined;
  }

  return resolveSpeakerImageUrl(discovered);
}
