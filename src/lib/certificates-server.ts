import type {
  Certificate,
  CertificateRole,
  ResolvedCertificate,
} from "@/assets/data/certificates";
import { speakers } from "@/assets/data/speakers";
import { teamMembers, volunteerMembers } from "@/assets/data/team";
import { loadCertificateRegistry } from "@/lib/certificate-registry";
import { getSpeakerProfileHref } from "@/lib/speakers";
import { getTeamMemberHref } from "@/lib/team";

function normalizePersonName(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function namesMatch(left: string, right: string): boolean {
  const a = normalizePersonName(left);
  const b = normalizePersonName(right);

  if (!a || !b) {
    return false;
  }

  if (a === b) {
    return true;
  }

  const [shorter, longer] = a.length <= b.length ? [a, b] : [b, a];
  const tokens = shorter.split(" ").filter(Boolean);

  // Require at least first + last token so short partials don't false-match.
  return tokens.length >= 2 && tokens.every((token) => longer.includes(token));
}

function findTeamMemberSlug(name: string): string | undefined {
  const member = [...teamMembers, ...volunteerMembers].find((entry) =>
    namesMatch(entry.name, name),
  );
  return member?.slug;
}

function findSpeakerSlug(name: string): string | undefined {
  const exact = speakers.find(
    (speaker) =>
      normalizePersonName(speaker.name) === normalizePersonName(name),
  );
  if (exact) {
    return exact.slug;
  }

  const fuzzy = speakers.find((speaker) => namesMatch(speaker.name, name));
  return fuzzy?.slug;
}

function resolveProfileHref(
  name: string,
  role: CertificateRole,
): string | undefined {
  if (role === "organizer" || role === "volunteer") {
    const teamSlug = findTeamMemberSlug(name);
    if (teamSlug) {
      return getTeamMemberHref(teamSlug);
    }
  }

  if (role === "speaker") {
    const speakerSlug = findSpeakerSlug(name);
    if (speakerSlug) {
      return getSpeakerProfileHref(speakerSlug);
    }
  }

  const speakerSlug = findSpeakerSlug(name);
  if (speakerSlug) {
    return getSpeakerProfileHref(speakerSlug);
  }

  const teamSlug = findTeamMemberSlug(name);
  if (teamSlug) {
    return getTeamMemberHref(teamSlug);
  }

  return undefined;
}

function resolveCertificate(certificate: Certificate): ResolvedCertificate {
  return {
    ...certificate,
    profileHref: resolveProfileHref(certificate.name, certificate.role),
  };
}

export async function getAllCertificateIds(): Promise<string[]> {
  const registry = await loadCertificateRegistry();
  return [...registry.keys()];
}

export async function getCertificateById(
  id: string,
): Promise<Certificate | undefined> {
  const registry = await loadCertificateRegistry();
  return registry.get(id);
}

export async function getResolvedCertificate(
  id: string,
): Promise<ResolvedCertificate | undefined> {
  const certificate = await getCertificateById(id);

  if (!certificate) {
    return undefined;
  }

  return resolveCertificate(certificate);
}
