import {
  type TeamMember,
  teamMembers,
  volunteerMembers,
} from "@/assets/data/team";

export type TeamMemberKind = "organizer" | "volunteer";

export type TeamMemberWithKind = TeamMember & {
  kind: TeamMemberKind;
};

export function getAllTeamMemberSlugs(): string[] {
  return [...teamMembers, ...volunteerMembers].map((member) => member.slug);
}

export function isTeamMemberSlug(slug: string): boolean {
  return getAllTeamMemberSlugs().includes(slug);
}

export function getTeamMemberBySlug(
  slug: string,
): TeamMemberWithKind | undefined {
  const organizer = teamMembers.find((member) => member.slug === slug);

  if (organizer) {
    return { ...organizer, kind: "organizer" };
  }

  const volunteer = volunteerMembers.find((member) => member.slug === slug);

  if (volunteer) {
    return { ...volunteer, kind: "volunteer" };
  }

  return undefined;
}

export function getTeamMemberHref(slug: string): string {
  return `/team/${slug}`;
}
