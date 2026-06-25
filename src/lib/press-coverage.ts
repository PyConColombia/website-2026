import {
  type PressCoverageItem,
  type PressCoverageType,
  pressCoverageItems,
} from "@/assets/data/press-coverage";

export type { PressCoverageItem, PressCoverageType };

export function getPressCoverageItems(): PressCoverageItem[] {
  return [...pressCoverageItems].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getPressCoverageByType(
  type: PressCoverageType,
): PressCoverageItem[] {
  return getPressCoverageItems().filter((item) => item.type === type);
}
