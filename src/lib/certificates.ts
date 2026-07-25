import {
  type Certificate,
  type CertificateRole,
  certificates,
} from "@/assets/data/certificates";
import type { User } from "@/assets/data/users";
import { PRODUCTION_SITE_URL } from "@/lib/site-seo";
import { getUserById } from "@/lib/users";

export type CertificateWithUser = Certificate & {
  user: User;
};

export function getAllCertificateIds(): string[] {
  return certificates.map((certificate) => certificate.id);
}

export function getCertificateById(id: string): Certificate | undefined {
  return certificates.find((certificate) => certificate.id === id);
}

export function getCertificateWithUser(
  id: string,
): CertificateWithUser | undefined {
  const certificate = getCertificateById(id);

  if (!certificate) {
    return undefined;
  }

  const user = getUserById(certificate.userId);

  if (!user) {
    return undefined;
  }

  return { ...certificate, user };
}

export function getCertificateHref(id: string): string {
  return `/certificates/${id}/`;
}

/** Canonical public verification URL (always production host + trailing slash). */
export function getCertificateUrl(id: string): string {
  return `${PRODUCTION_SITE_URL}${getCertificateHref(id)}`;
}

export function getCertificatesForUser(userId: string): Certificate[] {
  return certificates.filter((certificate) => certificate.userId === userId);
}

export const certificateRoleOrder: CertificateRole[] = [
  "attendee",
  "volunteer",
  "speaker",
  "organizer",
];
