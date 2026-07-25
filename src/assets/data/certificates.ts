/**
 * Attendance certificates. Each entry has a unique public hash `id` used in
 * `/certificates/[id]`. Only users listed here are considered attendees who
 * receive a certificate.
 */
export type CertificateRole =
  | "attendee"
  | "volunteer"
  | "speaker"
  | "organizer";

export type Certificate = {
  /** Public unique hash used in the certificate URL. */
  id: string;
  userId: string;
  role: CertificateRole;
  issuedAt: string;
};

export const certificates: Certificate[] = [
  {
    id: "b2e9f1a84c7d5036e91a",
    userId: "usr_john_roa",
    role: "organizer",
    issuedAt: "2026-07-26",
  },
  {
    id: "7c4a8d9e2f1b6a308c4e",
    userId: "usr_alejandro_rendon",
    role: "organizer",
    issuedAt: "2026-07-26",
  },
  {
    id: "3f8a1c6e9b2d7045a1f2",
    userId: "usr_carlos_sierra",
    role: "organizer",
    issuedAt: "2026-07-26",
  },
  {
    id: "9d2e7a4f1c8b6035d7e1",
    userId: "usr_karen_romo",
    role: "organizer",
    issuedAt: "2026-07-26",
  },
  {
    id: "5a1c8e3f7b2d9046c3a8",
    userId: "usr_maria_franco",
    role: "volunteer",
    issuedAt: "2026-07-26",
  },
  {
    id: "e4f7b2c9a1d68305f8e2",
    userId: "usr_test_attendee",
    role: "attendee",
    issuedAt: "2026-07-26",
  },
];
