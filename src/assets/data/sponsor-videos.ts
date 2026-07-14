import { aimpointVideos } from "@/assets/data/sponsor-videos/aimpoint";
import { epamVideos } from "@/assets/data/sponsor-videos/epam";
import { factoredVideos } from "@/assets/data/sponsor-videos/factored";
import { interledgerVideos } from "@/assets/data/sponsor-videos/interledger";
import { lokaVideos } from "@/assets/data/sponsor-videos/loka";
import { lovelyticsVideos } from "@/assets/data/sponsor-videos/lovelytics";
import { provectusVideos } from "@/assets/data/sponsor-videos/provectus";
import { slalomVideos } from "@/assets/data/sponsor-videos/slalom";

export type SponsorVideo = {
  youtubeId: string;
  title: string;
};

const sponsorVideosBySlug: Partial<Record<string, SponsorVideo[]>> = {
  aimpoint: aimpointVideos,
  epam: epamVideos,
  factored: factoredVideos,
  interledger: interledgerVideos,
  loka: lokaVideos,
  lovelytics: lovelyticsVideos,
  provectus: provectusVideos,
  slalom: slalomVideos,
};

export function getSponsorVideos(slug: string): SponsorVideo[] {
  return sponsorVideosBySlug[slug] ?? [];
}
