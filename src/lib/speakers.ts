import { type Speaker, speakers } from "@/assets/data/speakers";

export function getAllSpeakerSlugs() {
  return speakers.map((speaker) => speaker.slug);
}

export function getSpeakerBySlug(slug: string): Speaker | undefined {
  return speakers.find((speaker) => speaker.slug === slug);
}
