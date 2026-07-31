/**
 * Attendance certificates. Public verification pages live at
 * `/certificates/[id]`. Records are loaded at build time from the
 * certificates JSON configured via env (see `loadCertificateRegistry`).
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
