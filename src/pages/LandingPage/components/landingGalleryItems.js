/**
 * Humanize filename for alt text: "my-photo_01" → "My photo 01"
 */
export function humanizeGalleryFilename(src) {
  const base =
    src
      .split("/")
      .pop()
      ?.replace(/\.[^.]+$/, "") ?? "";
  const words = base.replace(/[-_]+/g, " ").trim();
  if (!words) return "Image";
  return words.charAt(0).toUpperCase() + words.slice(1);
}

/**
 * @param {object} opts
 * @param {readonly string[]} opts.srcList
 * @param {string} [opts.imageAltTemplate] - use `{name}` for humanized basename
 * @param {Record<string, string>} [opts.altBySrc] - optional per-path overrides
 */
export function buildGalleryItems({ srcList, imageAltTemplate, altBySrc }) {
  return srcList.map((src) => {
    const name = humanizeGalleryFilename(src);
    let alt = altBySrc?.[src];
    if (!alt) {
      alt = imageAltTemplate?.includes("{name}")
        ? imageAltTemplate.replace(/{name}/g, name)
        : name;
    }
    return { src, alt };
  });
}
