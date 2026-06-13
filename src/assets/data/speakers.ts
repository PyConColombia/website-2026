export type SpeakerTrack = "artificial-intelligence" | "community";

export type Speaker = {
  name: string;
  image: string;
  title: string;
  description: string;
  tracks: SpeakerTrack[];
  github?: string;
  linkedin?: string;
  talkTitle: string;
  country: string;
  language: string;
  level: string;
  talkDescription: string;
};

export const speakers: Speaker[] = [
  {
    name: "Cristhian David Recalde Arévalo",
    image:
      "https://drive.google.com/thumbnail?id=16WUKxy4RMU2Z-H0pbk98nGI9K8BwOwSD&sz=w800",
    title: "Mobile Developer @ HomeTeam Network",
    description:
      "Soy un desarrollador Full Stack apasionado por crear soluciones digitales elegantes y funcionales. Mi enfoque está en escribir código limpio, mantenible y escalable que no solo funcione, sino que también proporcione una excelente experiencia de usuario. Trabajo principalmente con tecnologías modernas que me permitieron construir aplicaciones robustas y de alto rendimiento para StartUps de Estados Unidos y Ecuador. Además del desarrollo, disfruto aprendiendo continuamente, compartiendo conocimiento en comunidades tecnológicas y contribuyendo a proyectos open source cuando es posible.",
    tracks: ["artificial-intelligence", "community"],
    github: "https://github.com/crycodex",
    linkedin: "https://www.linkedin.com/in/isnotcristhianr/",
    talkTitle: "Empleabilidad en la era de la IA",
    country: "Ecuador",
    language: "Spanish / Español",
    level: "Beginner / Principiante",
    talkDescription:
      "La inteligencia artificial está cambiando el mercado laboral más rápido que nunca. Muchos desarrolladores se preguntan: ¿la IA me reemplazará o me potenciará? En esta charla compartiré mi experiencia real pasando de ser desarrollador en Latinoamérica a trabajar para empresas de Estados Unidos, enfrentando entrevistas, optimizando mi perfil profesional y adaptándome a un entorno donde la IA ya es parte del día a día.",
  },
];
