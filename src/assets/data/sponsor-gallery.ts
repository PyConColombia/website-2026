import type { GalleryImage } from "@/assets/data/gallery";
import { epamGalleryImages } from "@/assets/data/sponsor-gallery/epam";
import { genlogsGalleryImages } from "@/assets/data/sponsor-gallery/genlogs";
import { lokaGalleryImages } from "@/assets/data/sponsor-gallery/loka";
import { provectusGalleryImages } from "@/assets/data/sponsor-gallery/provectus";
import { slalomGalleryImages } from "@/assets/data/sponsor-gallery/slalom";

const sponsorGalleryBySlug: Partial<Record<string, GalleryImage[]>> = {
  epam: epamGalleryImages,
  genlogs: genlogsGalleryImages,
  loka: lokaGalleryImages,
  provectus: provectusGalleryImages,
  slalom: slalomGalleryImages,
};

export function getSponsorGalleryImages(slug: string): GalleryImage[] {
  return sponsorGalleryBySlug[slug] ?? [];
}
