import type { CertificateRole } from "@/assets/data/certificates";
import { PRODUCTION_SITE_URL } from "@/lib/site-seo";

export type {
  Certificate,
  CertificateRole,
  ResolvedCertificate,
} from "@/assets/data/certificates";

export function getCertificateHref(id: string): string {
  return `/certificates/${id}/`;
}

/** Canonical public verification URL (always production host + trailing slash). */
export function getCertificateUrl(id: string): string {
  return `${PRODUCTION_SITE_URL}${getCertificateHref(id)}`;
}

export const certificateRoleOrder: CertificateRole[] = [
  "attendee",
  "volunteer",
  "speaker",
  "organizer",
];
