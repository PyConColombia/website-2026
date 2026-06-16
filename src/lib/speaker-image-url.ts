import { assetPath } from "@/lib/utils";

const GOOGLE_DRIVE_THUMBNAIL_PATTERN =
  /^https?:\/\/drive\.google\.com\/thumbnail\?id=([^&]+)(?:&sz=(\w+))?/i;
const GOOGLE_DRIVE_OPEN_PATTERN =
  /^https?:\/\/drive\.google\.com\/open\?id=([^&]+)/i;
const GOOGLE_DRIVE_FILE_PATTERN =
  /^https?:\/\/drive\.google\.com\/file\/d\/([^/]+)/i;

export function resolveSpeakerImageUrl(image?: string | null) {
  const trimmed = image?.trim();

  if (!trimmed) {
    return undefined;
  }

  const thumbnailMatch = trimmed.match(GOOGLE_DRIVE_THUMBNAIL_PATTERN);
  if (thumbnailMatch) {
    const [, fileId, size = "w800"] = thumbnailMatch;
    return `https://lh3.googleusercontent.com/d/${fileId}=${size}`;
  }

  const openMatch = trimmed.match(GOOGLE_DRIVE_OPEN_PATTERN);
  if (openMatch) {
    const [, fileId] = openMatch;
    return `https://lh3.googleusercontent.com/d/${fileId}=w800`;
  }

  const fileMatch = trimmed.match(GOOGLE_DRIVE_FILE_PATTERN);
  if (fileMatch) {
    const [, fileId] = fileMatch;
    return `https://lh3.googleusercontent.com/d/${fileId}=w800`;
  }

  if (/^https?:/.test(trimmed)) {
    return trimmed;
  }

  return assetPath(trimmed);
}
