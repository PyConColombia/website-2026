export const PERSON_PLACEHOLDER_IMAGE = "/images/avatar/person-placeholder.svg";
export const PERSON_PLACEHOLDER_IMAGE_DARK =
  "/images/avatar/person-placeholder-dark.svg";

export function resolvePersonImage(image?: string | null) {
  const trimmed = image?.trim();

  return trimmed || PERSON_PLACEHOLDER_IMAGE;
}
