/**
 * Attendance certificates. Public verification pages live at
 * `/certificates/[id]/` and require the per-certificate `key` from the
 * registry JSON. Records are validated server-side (see `loadCertificateRegistry`).
 */
export type CertificateRole =
  | "attendee"
  | "volunteer"
  | "speaker"
  | "organizer";

export type Certificate = {
  /** Public unique hash used in the certificate URL. */
  id: string;
  name: string;
  role: CertificateRole;
};

export type ResolvedCertificate = Certificate & {
  /** Profile link when the recipient matches team or speakers data. */
  profileHref?: string;
};
