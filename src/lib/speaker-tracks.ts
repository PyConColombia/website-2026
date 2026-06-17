import {
  type Speaker,
  type SpeakerTrack,
  speakers,
  speakerTrackOrder,
} from "@/assets/data/speakers";

export type SpeakerTrackFilter = SpeakerTrack | "view-all";

export const speakerTrackStyles: Record<
  SpeakerTrack,
  { badge: string; dot: string; tabActive: string }
> = {
  "artificial-intelligence": {
    badge:
      "border-violet-500/35 bg-violet-500/10 text-violet-700 dark:text-violet-300",
    dot: "bg-violet-500",
    tabActive:
      "data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300 after:bg-violet-500",
  },
  "machine-learning": {
    badge: "border-blue-500/35 bg-blue-500/10 text-blue-700 dark:text-blue-300",
    dot: "bg-blue-500",
    tabActive:
      "data-[state=active]:text-blue-700 dark:data-[state=active]:text-blue-300 after:bg-blue-500",
  },
  "data-science": {
    badge: "border-cyan-500/35 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
    dot: "bg-cyan-500",
    tabActive:
      "data-[state=active]:text-cyan-700 dark:data-[state=active]:text-cyan-300 after:bg-cyan-500",
  },
  "core-python": {
    badge:
      "border-yellow-500/35 bg-yellow-500/15 text-yellow-800 dark:text-yellow-300",
    dot: "bg-yellow-500",
    tabActive:
      "data-[state=active]:text-yellow-800 dark:data-[state=active]:text-yellow-300 after:bg-yellow-500",
  },
  web: {
    badge: "border-sky-500/35 bg-sky-500/10 text-sky-700 dark:text-sky-300",
    dot: "bg-sky-500",
    tabActive:
      "data-[state=active]:text-sky-700 dark:data-[state=active]:text-sky-300 after:bg-sky-500",
  },
  security: {
    badge: "border-red-500/35 bg-red-500/10 text-red-700 dark:text-red-300",
    dot: "bg-red-500",
    tabActive:
      "data-[state=active]:text-red-700 dark:data-[state=active]:text-red-300 after:bg-red-500",
  },
  devops: {
    badge:
      "border-orange-500/35 bg-orange-500/10 text-orange-700 dark:text-orange-300",
    dot: "bg-orange-500",
    tabActive:
      "data-[state=active]:text-orange-700 dark:data-[state=active]:text-orange-300 after:bg-orange-500",
  },
  community: {
    badge:
      "border-emerald-500/35 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    dot: "bg-emerald-500",
    tabActive:
      "data-[state=active]:text-emerald-700 dark:data-[state=active]:text-emerald-300 after:bg-emerald-500",
  },
  "open-source": {
    badge: "border-teal-500/35 bg-teal-500/10 text-teal-700 dark:text-teal-300",
    dot: "bg-teal-500",
    tabActive:
      "data-[state=active]:text-teal-700 dark:data-[state=active]:text-teal-300 after:bg-teal-500",
  },
  "scientific-computing": {
    badge:
      "border-indigo-500/35 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
    dot: "bg-indigo-500",
    tabActive:
      "data-[state=active]:text-indigo-700 dark:data-[state=active]:text-indigo-300 after:bg-indigo-500",
  },
};

export function isSpeakerTrack(slug: string): slug is SpeakerTrack {
  return speakerTrackOrder.includes(slug as SpeakerTrack);
}

export function getActiveSpeakerTracks(): SpeakerTrack[] {
  return speakerTrackOrder.filter((track) =>
    speakers.some((speaker) => speaker.tracks.includes(track)),
  );
}

export function getSpeakersByTrack(track: SpeakerTrack): Speaker[] {
  return speakers.filter((speaker) => speaker.tracks.includes(track));
}

export function getSpeakerTrackHref(track: SpeakerTrackFilter): string {
  return track === "view-all" ? "/speakers" : `/speakers/${track}`;
}

export function getAllSpeakerTrackSlugs(): SpeakerTrack[] {
  return getActiveSpeakerTracks();
}
