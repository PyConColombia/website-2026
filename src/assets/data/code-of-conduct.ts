export type CodeOfConductSection = {
  id: string;
  title: string;
  paragraphs: string[];
  items?: string[];
};

const contactEmail = "hello@pycon.co";

export const codeOfConduct = {
  title: "Code of Conduct",
  eyebrow: "PyCon Colombia",
  description:
    "PyCon Colombia is committed to providing a welcoming, respectful, and harassment-free conference experience for everyone in the Python community.",
  updatedAt: "Last updated for PyCon Colombia 2026",
  contactEmail,
  contactInformation: {
    id: "contact-information",
    title: "Contact Information",
    intro:
      "If you have been harassed, or realize that someone else is being harassed or is violating the International Terms of the PyCon Colombia or have any problems, please contact our organizers:",
    reportForm: {
      label: "Open report form",
      href: "https://forms.gle/Q92DS8RvrzW8sUN67",
    },
    paragraphsAfterButton: [
      "Our team at the conference will also be available to collaborate and contact local security or assist you to ensure your safety. We value your presence in our events.",
      "In case of any violation of the terms of this code of conduct by the organizers please contact the main organizer of the conference, John Roa or as a last resort to the PSF.",
    ],
  },
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        "PyCon Colombia is a conference organized by the Python Colombia community created for the dissemination of the Python programming language in our country and Latin America, with the objective of sharing knowledge and expanding the spaces for interaction and collaboration of its members.",
        "We value the participation of each member of the community and we want each participant in the conference to enjoy and gain a valuable experience full of knowledge and innovation. According to this code, all participants including organizers, speakers, volunteers and attendees are expected to show respect and courtesy among themselves in all aspects of the conference, its organization and the events taking place in the context of the conference.",
        "The organizers of this event and any event in the future are subject to enforce following and complying with international and Colombian laws and the spirit of the International Python Society (Python Software Foundation).",
      ],
    },
    {
      id: "content",
      title: "Code of Conduct Content",
      paragraphs: [
        "PyCon Colombia is dedicated to providing a conference free of harassment for all members, regardless of gender, sexual orientation, physical abilities, physical appearance, race or religion. No abuse will be tolerated by any conference participant.",
        "All communications should be focused on a professional audience including people with different backgrounds and experiences. Sexual language is not appropriate for any event organized under our rules, including talks.",
      ],
    },
    {
      id: "community-goals",
      title: "Our goal as a community recommends",
      paragraphs: [
        "As participants of the PyCon Colombia community we ask everyone to:",
      ],
      items: [
        "Be kind to other members.",
        "Do not insult or demean the other participants.",
        "Behave professionally.",
        "Remember that any conduct of harassment, sexism, racism or political division, or of any instance, is not appropriate for participation within the conference or community.",
        "Not attending the conference under the influence of alcoholic beverages.",
        "Participants of our community of any type (Organizers, Speakers, Volunteers and Assistants) who do not comply with any of these rules will be expelled from the conference without any reimbursement at the discretion of the organizing committee of the conference.",
      ],
    },
    {
      id: "closing",
      title: "Thank you",
      paragraphs: [
        "Thank you for being subject to these terms and welcome to PyCon Colombia. This is a friendly event for our entire community.",
      ],
    },
  ] satisfies CodeOfConductSection[],
};
