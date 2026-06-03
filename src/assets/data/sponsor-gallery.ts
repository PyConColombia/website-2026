import type { GalleryImage } from "@/assets/data/gallery";
import { lokaGalleryImages } from "@/assets/data/sponsor-gallery/loka";

const sponsorGalleryBySlug: Partial<Record<string, GalleryImage[]>> = {
  loka: lokaGalleryImages,
};

export function getSponsorGalleryImages(slug: string): GalleryImage[] {
  return sponsorGalleryBySlug[slug] ?? [];
}
