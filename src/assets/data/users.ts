/**
 * Conference users / attendees.
 * Linked from certificates via `userId`. Only users with a certificate entry
 * receive a unique verification page.
 */
export type User = {
  id: string;
  name: string;
  email?: string;
  /** Optional link to an existing team member slug. */
  teamSlug?: string;
};

export const users: User[] = [
  {
    id: "usr_john_roa",
    name: "John Roa",
    email: "john@pycon.co",
    teamSlug: "john-roa",
  },
  {
    id: "usr_alejandro_rendon",
    name: "Alejandro Rendon",
    email: "alejandro@pycon.co",
    teamSlug: "alejandro-rendon",
  },
  {
    id: "usr_carlos_sierra",
    name: "Carlos Sierra",
    email: "carlos@pycon.co",
    teamSlug: "carlos-sierra",
  },
  {
    id: "usr_karen_romo",
    name: "Karen Romo",
    email: "karen@pycon.co",
    teamSlug: "karen-romo",
  },
  {
    id: "usr_maria_franco",
    name: "Maria Franco",
    email: "maria@pycon.co",
    teamSlug: "maria-franco",
  },
  {
    id: "usr_test_attendee",
    name: "Camila Restrepo",
    email: "camila.restrepo@example.com",
  },
];
