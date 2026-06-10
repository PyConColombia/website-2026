import { epamVideos } from "@/assets/data/sponsor-videos/epam";
import { slalomVideos } from "@/assets/data/sponsor-videos/slalom";

export type SponsorVideo = {
  youtubeId: string;
  title: string;
};

const sponsorVideosBySlug: Partial<Record<string, SponsorVideo[]>> = {
  epam: epamVideos,
  slalom: slalomVideos,
};

export function getSponsorVideos(slug: string): SponsorVideo[] {
  return sponsorVideosBySlug[slug] ?? [];
}
