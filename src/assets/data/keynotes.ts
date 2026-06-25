export type Keynote = {
  slug: string;
  image: string;
  flag: string;
  linkedin?: string;
  github?: string;
  website?: string;
  youtube?: string;
  x?: string;
};

export const keynoteList: Keynote[] = [
  {
    slug: "tereza-iofciu",
    image: "/images/keynotes/keynote-01.webp",
    flag: "/images/flags/flag-ro.svg",
    linkedin: "https://www.linkedin.com/in/tereza-iofciu/",
    github: "https://github.com/terezaif",
    website: "https://www.terezaiofciu.com/",
    youtube:
      "https://www.youtube.com/playlist?list=PLPNST8XbhlFpuJgsSI8AfXzh5BwtfHh5Z",
  },
  {
    slug: "anna-pristoupilova",
    image: "/images/keynotes/keynote-02.webp",
    flag: "/images/flags/flag-cz.svg",
    linkedin: "https://www.linkedin.com/in/pristanna/",
    github: "https://github.com/pristanna",
  },
  {
    slug: "malvika-sharan",
    image: "/images/keynotes/keynote-03.webp",
    flag: "/images/flags/flag-in.svg",
    linkedin: "https://www.linkedin.com/in/malvikasharan/",
    github: "https://github.com/malvikasharan",
    website: "https://malvikasharan.github.io/",
  },
  {
    slug: "kari-l-jordan",
    image: "/images/keynotes/keynote-04.webp",
    flag: "/images/flags/flag-us.svg",
    linkedin: "https://www.linkedin.com/in/kariljordan/",
  },
  {
    slug: "irit-katriel",
    image: "/images/keynotes/keynote-05.webp",
    flag: "/images/flags/flag-gb.svg",
    linkedin: "https://www.linkedin.com/in/irit-katriel/",
    github: "https://github.com/iritkatriel",
  },
  {
    slug: "luciano-ramalho",
    image: "/images/keynotes/keynote-06.webp",
    flag: "/images/flags/flag-br.svg",
    linkedin: "https://www.linkedin.com/in/lucianoramalho/",
    github: "https://github.com/ramalho",
    x: "https://x.com/ramalhoorg",
  },
];
