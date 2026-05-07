export type CodeOfConductSection = {
  id: string
  title: string
  paragraphs: string[]
  items?: string[]
}

export const codeOfConduct = {
  title: 'Code of Conduct',
  eyebrow: 'Community Guidelines',
  description:
    'PyCon Colombia is committed to providing a welcoming, respectful, and harassment-free conference experience for everyone.',
  updatedAt: 'Last updated for PyCon Colombia 2026',
  contactEmail: 'Hello@pycon.co',
  sections: [
    {
      id: 'purpose',
      title: 'Purpose',
      paragraphs: [
        'PyCon Colombia gathers professionals, enthusiasts, students, speakers, sponsors, volunteers, and community members around the Python programming language.',
        'This Code of Conduct exists to help every participant feel safe, respected, and able to contribute fully to the event.'
      ]
    },
    {
      id: 'expected-behavior',
      title: 'Expected behavior',
      paragraphs: ['All participants are expected to help create a positive conference environment.'],
      items: [
        'Be respectful and considerate in speech and actions.',
        'Welcome people with different backgrounds, identities, experience levels, and perspectives.',
        'Use inclusive language and respect personal boundaries.',
        'Follow venue, event, and staff instructions.',
        'Report concerns when you see behavior that may put others at risk.'
      ]
    },
    {
      id: 'unacceptable-behavior',
      title: 'Unacceptable behavior',
      paragraphs: ['Harassment and exclusionary behavior are not tolerated at PyCon Colombia.'],
      items: [
        'Offensive comments related to gender, gender identity, sexual orientation, disability, physical appearance, race, ethnicity, religion, nationality, age, or technical background.',
        'Intimidation, stalking, following, unwanted photography or recording, or sustained disruption of talks and activities.',
        'Unwelcome sexual attention, inappropriate physical contact, or repeated unwanted communication.',
        'Retaliation against anyone who reports an incident or supports a report.'
      ]
    },
    {
      id: 'reporting',
      title: 'Reporting an incident',
      paragraphs: [
        'If you experience or witness behavior that violates this Code of Conduct, please contact the organizing team as soon as possible.',
        'Reports can be sent by email or shared with an organizer at the venue. The team will treat reports with care and discretion.'
      ],
      items: ['Email: Hello@pycon.co', 'Include what happened, when and where it happened, and any people involved if you feel comfortable sharing that information.']
    },
    {
      id: 'enforcement',
      title: 'Code of Conduct Enforcement Procedure',
      paragraphs: [
        'The organizing team may take any action it deems appropriate to protect participants and preserve a respectful event environment.',
        'Possible actions include a private warning, removal from a session, removal from the conference without refund, or escalation to venue security or local authorities when necessary.'
      ]
    },
    {
      id: 'health-safety',
      title: 'Health & Safety Policy',
      paragraphs: [
        'Participants are expected to follow health, safety, accessibility, and venue guidelines communicated by PyCon Colombia staff.',
        'If you feel unwell or need support during the event, please contact an organizer or venue staff member.'
      ]
    }
  ] satisfies CodeOfConductSection[]
}
