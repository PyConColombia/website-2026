import "server-only";

import fs from "node:fs";
import path from "node:path";

const SPEAKER_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"] as const;

export function findSpeakerImagePathBySlug(slug: string): string | undefined {
  const speakersDir = path.join(process.cwd(), "public", "images", "speakers");

  for (const extension of SPEAKER_IMAGE_EXTENSIONS) {
    const fileName = `${slug}${extension}`;
    if (fs.existsSync(path.join(speakersDir, fileName))) {
      return `/images/speakers/${fileName}`;
    }
  }

  return undefined;
}
