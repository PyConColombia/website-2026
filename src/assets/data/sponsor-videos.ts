import { epamVideos } from "@/assets/data/sponsor-videos/epam";

export type SponsorVideo = {
  youtubeId: string;
  title: string;
};

const sponsorVideosBySlug: Partial<Record<string, SponsorVideo[]>> = {
  epam: epamVideos,
};

export function getSponsorVideos(slug: string): SponsorVideo[] {
  return sponsorVideosBySlug[slug] ?? [];
}
