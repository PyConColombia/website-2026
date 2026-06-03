import type { GalleryImage } from "@/assets/data/gallery";
import { genlogsGalleryImages } from "@/assets/data/sponsor-gallery/genlogs";
import { lokaGalleryImages } from "@/assets/data/sponsor-gallery/loka";
import { provectusGalleryImages } from "@/assets/data/sponsor-gallery/provectus";

const sponsorGalleryBySlug: Partial<Record<string, GalleryImage[]>> = {
  genlogs: genlogsGalleryImages,
  loka: lokaGalleryImages,
  provectus: provectusGalleryImages,
};

export function getSponsorGalleryImages(slug: string): GalleryImage[] {
  return sponsorGalleryBySlug[slug] ?? [];
}
