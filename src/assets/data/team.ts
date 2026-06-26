export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
  github?: string;
  x?: string;
};

export type VolunteerMember = TeamMember;

export const teamMembers: TeamMember[] = [
  {
    slug: "john-roa",
    name: "John Roa",
    role: "Chief Organizer",
    image: "/images/avatar/john-roa.webp",
    linkedin: "https://www.linkedin.com/in/johnroa27",
    github: "https://github.com/jhonjairoroa87",
    x: "https://twitter.com/@jhonjairoroa87",
  },
  {
    slug: "carlos-sierra",
    name: "Carlos Sierra",
    role: "Speakers, schedule and scholarships",
    image: "/images/avatar/carlos-sierra.webp",
    linkedin: "https://www.linkedin.com/in/casierrav",
    x: "https://twitter.com/@casierrav_alife",
  },
  {
    slug: "juan-david-hernandez",
    name: "Juan David Hernandez",
    role: "Speakers",
    image: "/images/avatar/juan-david-hernandez.webp",
    linkedin: "https://www.linkedin.com/in/juandhernandez",
    github: "https://github.com/davoshack",
    x: "https://twitter.com/JuanDHernandezG",
  },
  {
    slug: "alejandro-rendon",
    name: "Alejandro Rendon",
    role: "Website",
    image: "/images/avatar/alejandro-rendon.webp",
    linkedin: "https://www.linkedin.com/in/arendondiosa",
    github: "https://github.com/arendondiosa",
  },
  {
    slug: "gonzalo-pena-castellanos",
    name: "Gonzalo Peña-Castellanos",
    role: "Keynotes",
    image: "/images/avatar/gonzalo-pena-castellanos.jpeg",
    linkedin: "https://www.linkedin.com/in/goanpeca",
    github: "https://github.com/goanpeca",
  },
  {
    slug: "leonardo-romo",
    name: "Leonardo Romo",
    role: "Executive assitant",
    image: "/images/avatar/leonardo-romo.webp",
    linkedin: "https://www.linkedin.com/in/leonardo-romo-808616103",
    x: "https://twitter.com/@Leoromo97",
  },
  {
    slug: "karen-romo",
    name: "Karen Romo",
    role: "Event manager",
    image: "/images/avatar/karen-romo.webp",
    linkedin: "https://www.linkedin.com/in/karen-lisette-romo-b1383b270",
    x: "https://twitter.com/@karenlis727",
  },
  {
    slug: "ivan-roa",
    name: "Ivan Roa",
    role: "Design/Venue Logistics",
    image: "/images/avatar/ivan-roa.webp",
    linkedin: "https://www.linkedin.com/in/ivan-roa-64b78158",
    github: "https://github.com/naviroa92",
  },
  {
    slug: "nancy-acuna",
    name: "Nancy Acuña",
    role: "Logistics/Finance",
    image: "/images/avatar/nancy-acuna.webp",
  },
  {
    slug: "maria-franco",
    name: "Maria Franco",
    role: "Interviews",
    image: "/images/avatar/maria-franco.jpg",
    linkedin: "https://www.linkedin.com/in/mariafrancodev",
    github: "https://github.com/mariafrancodev",
    x: "https://twitter.com/mariafrancodev",
  },
  {
    slug: "wendy-rueda",
    name: "Wendy Rueda",
    role: "Social Networks",
    image: "/images/avatar/wendy-rueda.webp",
    linkedin: "https://www.linkedin.com/in/wendy-rueda-cifuentes-84a617215",
    x: "https://twitter.com/@wen_rueda",
  },
];

export const volunteerMembers: VolunteerMember[] = [
  {
    slug: "valerie-arismendy",
    name: "Valerie Arismendy",
    role: "Co-host de auditorio",
    image: "/images/avatar/valerie-arismendy.webp",
    linkedin: "https://www.linkedin.com/in/valerie-arismendy/",
  },
  {
    slug: "jesus-mena",
    name: "Jesús Mena",
    role: "Co-host de auditorio",
    image: "/images/avatar/jesus-mena.jpg",
    linkedin: "https://www.linkedin.com/in/yisuslinkon",
  },
  {
    slug: "yurley-sanchez-florez",
    name: "Yurley Katterine Sanchez Florez",
    role: "Co-host de auditorio",
    image: "/images/avatar/yurley-sanchez.jpg",
    linkedin: "https://www.linkedin.com/in/yursksf1/",
  },
  {
    slug: "veruzka-borges",
    name: "Veruzka Borges",
    role: "Co-host de auditorio",
    image: "/images/avatar/veruzka-borges.png",
    linkedin: "https://www.linkedin.com/in/veruzkab/",
  },
  {
    slug: "juan-camilo-velasquez",
    name: "Juan Camilo Velásquez Pérez",
    role: "Padrino Keynotes",
    image: "/images/avatar/juan-velasquez.png",
    linkedin:
      "https://www.linkedin.com/in/juan-camilo-vel%C3%A1squez-p%C3%A9rez/",
  },
  {
    slug: "mateo-usme-valencia",
    name: "Mateo Usme Valencia",
    role: "Padrino Keynotes",
    image: "/images/avatar/mateo-usme.png",
    linkedin: "https://www.linkedin.com/in/mateousmevalencia/",
  },
];
