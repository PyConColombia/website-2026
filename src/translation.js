const data = {
  en: {
    navbar: {
      callForProposals: "Call for proposals",
      home: "Home",
      schedule: "Schedule",
      sponsors: "Sponsors",
      scholarships: "Scholarships",
      team: "Team",
      keynotes: "Keynotes",
      speakers: "Speakers",
      getTickets: "GET YOUR TICKETS",
      submitProposal: "Submit Proposal",
      ticketsUrl:
        "https://www.eventbrite.co/e/pycon-colombia-2025-tickets-1271703351959",
    },
    landing: {
      date: "Medellín, July 4th, 5th and 6th, 2025",
      introduction: {
        header: "Ready to dive into the ",
        boldHeader: "world of Python",
        text: "Come explore, learn, and connect with others just as passionate as you are.",
        finalText: "Stand by for more information!",
      },
      ticketsButton: "Get your tickets",
      topics: {
        sectionAriaLabel: "Conference topic tracks",
        rows: [
          [
            "Data Science",
            "Scientific Computing",
            "Artificial intelligence",
            "Computer Vision",
            "Core Python",
            "Machine Learning",
            "Video games",
            "Community",
            "Devops",
            "MCP",
            "clean architecture",
          ],
          [
            "Data Science",
            "Core Python",
            "Machine Learning",
            "Video games",
            "Scientific Computing",
            "Artificial intelligence",
            "Computer Vision",
            "Community",
            "Devops",
            "MCP",
            "clean architecture",
          ],
        ],
      },
      hero: {
        dateLine1: "medellin, colombia",
        dateLine2: "24, 25 & 26 JULY - 2026",
        conferenceTitle: "pycon COLOMBIA",
        tagline: "The most and biggest Python conference in Colombia.",
        wordmarkAlt: "PYCON",
      },
      bodyMessage: {
        header: "Become a Speaker",
        text: "Got a brilliant idea, a project you're proud of, or insights that could inspire others?",
        finalText:
          "We’re looking for passionate speakers to lead talks on development, security, Python, and beyond.",
      },
      speakerDeadline: "Closes on May 5th 2025",
      applyToSpeakButton: "Apply to Speak",
      subscribe: {
        header: "Want to ",
        headerBold: "know more?",
        description:
          "Join Pycon Colombia newsletter and get a complete overview of our events, speakers and community participation.",
        emailPlaceholder: "Enter your email",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        submitButton: "Subscribe to newsletter",
      },
      keynotes: {
        sectionAriaLabel: "Keynote speakers",
        title: "Keynotes Speakers",
        columns: [
          {
            photoFirst: true,
            photo: {
              src: "/images/keynotes/terezaiofciu.jpg",
              alt: "Portrait of keynote speaker Tereza Iofciu",
            },
            name: "Tereza Iofciu",
            // handle: "@terezaiofciu",
            flag: { code: "ro", label: "Romania" },
            bio: "Tereza Iofciu is a data and AI expert, leadership coach, and PSF Fellow with 15+ years of experience. She is an active contributor to the Python community and creator of the Data Diplomat Framework, focused on bridging technical expertise with human-centered leadership.",
            social: [
              {
                key: "linkedin",
                href: "https://www.linkedin.com/in/tereza-iofciu/",
                label: "LinkedIn",
              },
              {
                key: "website",
                href: "https://www.terezaiofciu.com/",
                label: "Website",
              },
              {
                key: "youtube",
                href: "https://www.youtube.com/playlist?list=PLPNST8XbhlFpuJgsSI8AfXzh5BwtfHh5Z",
                label: "YouTube",
              },
            ],
          },
          {
            photoFirst: false,
            photo: {
              src: "/images/keynotes/anna-pristoupilova.jpeg",
              alt: "Portrait of keynote speaker Anna Pristoupilova",
            },
            name: "Anna Pristoupilova",
            handle: "@pristanna",
            flag: { code: "cz", label: "Czech Republic" },
            bio: "Bioinformatician with a demonstrated history of working in the research. Skilled in Bioinformatics, NGS Sequencing, Rare Diseases, Molecular Biology and Genetics. Strong research professional with PhD and Master’s Degree focused on Molecular biology and genetics and second Master's Degree focused on Medical devices and informatics, both from Charles University, Czech Republic.",
            social: [
              {
                key: "linkedin",
                href: "https://www.linkedin.com/in/pristanna/",
                label: "LinkedIn",
              },
              // {
              //   key: "website",
              //   href: "https://www.terezaiofciu.com/",
              //   label: "Website",
              // },
              // {
              //   key: "youtube",
              //   href: "https://www.youtube.com/playlist?list=PLPNST8XbhlFpuJgsSI8AfXzh5BwtfHh5Z",
              //   label: "YouTube",
              // },
            ],
          },
          {
            photoFirst: true,
            photo: {
              src: "/images/keynotes/malvika-sharan.jpg",
              alt: "Portrait of keynote speaker Malvika Sharan",
            },
            name: "Malvika Sharan",
            handle: "@malvikasharan",
            flag: { code: "in", label: "India" },
            bio: "Malvika Sharan is Senior Director of Data Science at St. Jude Children's Research Hospital and a globally recognized leader in open science and community-driven research. She is a co-founder of Open Life Science and a key contributor to The Turing Way, advancing reproducible, ethical, and collaborative data science practices worldwide. With a background in bioinformatics and leadership roles at institutions like the Alan Turing Institute and EMBL, Malvika focuses on building inclusive research communities and empowering practitioners through open, transparent, and responsible approaches to AI and data science.",
            social: [
              {
                key: "linkedin",
                href: "https://www.linkedin.com/in/malvikasharan/",
                label: "LinkedIn",
              },
              {
                key: "website",
                href: "https://malvikasharan.github.io/",
                label: "Website",
              },
              // {
              //   key: "youtube",
              //   href: "https://www.youtube.com/playlist?list=PLPNST8XbhlFpuJgsSI8AfXzh5BwtfHh5Z",
              //   label: "YouTube",
              // },
              {
                key: "github",
                href: "https://github.com/malvikasharan",
                label: "GitHub",
              },
            ],
          },
        ],
      },
      gallery: {
        sectionAriaLabel: "Conference photo gallery",
        modalCloseLabel: "Close image",
        /** Use `{name}` for the humanized filename (e.g. `my-shot.png` → `My shot`). */
        imageAltTemplate: "Conference photo: {name}",
      },
    },
    callForProposals: {
      header: "Share Your Voice",
      introText:
        "Got a brilliant idea, a project you're proud of, or insights that could inspire others?",
      footerText:
        "We’re looking for passionate speakers to lead talks on development, security, Python, and beyond.",
      mainText:
        "Feel free to submit proposals on a wide array of technical topics that pique your interest. We're excited to explore the diverse ideas and insights you bring to the table.",
      buttonText: "Submit your proposal",
      block1Title: "Talks",
      block1Text:
        "This is a space of 40 minutes (Including Q & A, commonly distributed in 30 minutes for talk, 10 minutes for questions). if which you can speak of any subject (Not only Python-centric themes) using a slide deck and live demos if you wish",
      block2Title: "Talk Videos",
      block2Text:
        "We will record the talks and upload them to our YouTube channel, this includes a screen recording of the speaker's slide deck, live demos, and speaker's in-person activity. This benefits all the members of the Python community who can't make it to PyCon Colombia. By submitting your proposal to PyCon Colombia, you agree to give us permission to record, edit and release audio and/or video of your presentation. If you aren't ok with this, please let us know and we will work this out.",
      frequentQuestion: {
        title: "Frequent questions",
        topics: {
          title: "Topics",
          text1:
            "Feel free to check out the talks & workshops from previous editions, from 2017 to 2024. Some of the recordings are available on our YouTube channel ",
          linkText: "here",
          text2:
            "We like to see any kind of proposal related to the following topics:",
          mainTopics: [
            "Data Science",
            "Machine Learning",
            "Deep Learning",
            "Artificial Intelligence",
            "Internet of Things (IoT)",
            "Web Development",
            "Micro-Python",
            "Python Frameworks",
          ],
          text3:
            "Of course, not everything should be technical topics, here are our alternative topics which we consider related to our conference:",
          alternativeTopics: [
            "Inclusion & Diversity",
            "Community",
            "Industry & Academy Bonding",
            "Education & Soft Skills",
            "People in STEM Life Quality",
          ],
          text4:
            "If your talk topic doesn’t fit any of our listings but you are really passionate about your talk, don’t worry! We love people like you. This is your conference! Submit your proposal and maybe we will discover new topics to improve our lists.",
        },
        whySpeak: {
          title: "Why should you speak at PyCon Colombia 2025?",
          text: "We strongly believe that if you have something you are really passionate about and you want to spread the word, you should craft a talk and do it! But if that’s not enough to convince you, here is the list of perks you get by becoming a PyCon Colombia 2025 speaker:",
          perks: [
            "Free full conference pass: Gives you access to all talks and workshops.",
            "Access to Speaker dinner: Dinner that includes keynote speakers, sponsors, speakers, and organizers, fully paid by the conference.",
            "A professionally produced video of your talk published on our YouTube channel (see Talk Videos section for more details).",
            "The opportunity to positively impact the lives of over 600 attendees.",
          ],
        },
        selectionProcess: {
          title: "Our Selection Process",
          text1:
            "In order to create the most valuable talks and workshops line-up for the conference we follow this process:",
          steps: [
            "All proposal reviews are anonymized, that way we avoid bias towards the submitter.",
            "All proposals are reviewed and voted by our Reviewers Team.",
            "The best-rated proposals are de-anonymized to review the speaker’s profile, this is made by the PyCon Colombia’s Talks Committee.",
            "The Committee decides the final line-up.",
          ],
          text2:
            "We are really excited to get a lot more excellent submissions than we have speaking slots. This process helps us to get the best proposals by trying to avoid bias toward the speaker’s profile.",
        },
        codeOfConduct: {
          title: "Code of Conduc aaaat",
          text: "In order to create an environment that is safe and comfortable for all our attendees and staff members and to make sure everybody enjoys the conference, we have written this Code of Conduct. We hope you read, understand, and comply with it during the conference and in your proposal and talk.",
        },
      },
    },
    sponsors: {
      title: "Meet Our Sponsors",
      description:
        "From cutting-edge tech companies to dedicated community advocates, these sponsors are leading the way in Python and software development.",
      thankYouMessage:
        "We couldn’t do it without them—thank you for your commitment to advancing the future of Python!",
    },
    codeOfConduct: {
      title: "Code of Conduct",
      introBold: "PyCon Colombia ",
      intro:
        "is a conference organized by the Python Colombia community created for the dissemination of the Python programming language in our country and Latin America, with the objective of sharing knowledge and expanding the spaces for interaction and collaboration of its members. We value the participation of each member of the community and we want each participant in the conference to enjoy and gain valuable experience full of knowledge and innovation. According to this code, all participants including organizers, speakers, volunteers and attendees are expected to show respect and courtesy among themselves in all aspects of the conference, its organization and the events taking place in the context of the conference. To be more explicit than is expected of any person participating in the event and the global and local community of Python and PyCon Colombia are required to comply with the following Code of Conduct. The organizers of this event and any event in the future are subject to enforce following and complying with international and Colombian laws and the spirit of the International Python Society (Python Software Foundation)",
      conductContent: {
        title: "Code of Conduct Content",
        text: "PyCon Colombia is dedicated to providing a conference free of harassment for all members, regardless of gender, sexual orientation, physical abilities, physical appearance, race or religion. No abuse will be tolerated by any conference participant. All communications should be focused on a professional audience including people with different backgrounds and experiences. Sexual language is not appropriate for any event organized under our rules, including talks.",
      },
      communityGoals: {
        title: "Our goal as a community recommends:",
        items: [
          "Be kind to other members.",
          "Do not insult or demean the other participants.",
          "Behave professionally.",
          "Remember that any conduct of harassment, sexism, racism or political division or of any instance, is not appropriate for participation within the conference or community",
          "Not attending the conference under the influence of alcoholic beverages.",
          "Participants of our community of any type (Organizers, Speakers, Volunteers and Assistants) who do not comply with any of these rules will be expelled from the conference without any reimbursement at the discretion of the organizing committee of the conference.",
        ],
      },
      closingMessage:
        "Thank you for being subject to these terms and welcome to PyCon Colombia. This is a friendly event for our entire community.",
      contactInfo: {
        title: "Contact Information",
        text: "If you have been harassed, or realize that someone else is being harassed or is violating the International Terms of the PyCon Colombia or have any problems, please contact our organizers:",
        securityNote:
          "Our team at the conference will also be available to collaborate and contact local security or assist you to ensure your safety. We value your presence in our events.",
        escalationNote:
          "In case of any violation of the terms of this code of conduct by the organizers please contact the main organizer of the conference, John Roa or as a last resort to the PSF.",
      },
    },
    codeOfConductEnforcementProcedure: {
      title: "Code of Conduct Enforcement Procedure",
      summaryIntro:
        "This document summarizes the procedures the PyCon staff uses to enforce the Code of Conduct.",
      summaryHeader: "Summary of processes",
      summaryStepsIntro:
        "When the work group receives a report of a possible Code of Conduct violation, it will:",
      summarySteps: [
        "Acknowledge the receipt of the report.",
        "Evaluate conflicts of interest.",
        "Call a meeting of Code of Conduct responders who do not have a conflict of interest.",
        "Evaluate the reported incident.",
        "Propose a behavioral modification plan.",
        "Propose consequences for the reported behavior.",
        "Vote on behavioral modification plan and consequences for the reported person.",
        "Contact online community administrators/moderators to approve the behavioral modification plan and consequences.",
        "Follow up with the reported person.",
        "Decide further responses.",
        "Follow up with the reporter.",
      ],
      acknowledgeReportHeader: "Acknowledge the report",
      acknowledgeReportText:
        "Reporters should receive an emailed acknowledgment of the receipt of their report within 24 hours.",
      conflictInterestHeader: "Conflict of interest policy",
      conflictInterestExamplesIntro:
        "Examples of conflicts of interest include:",
      conflictInterestExamples: [
        "The reporter or reported person is your manager",
        "You have a romantic or platonic relationship with either the reporter or the reported person. It’s fine to participate if they are an acquaintance.",
        `The reporter or reported person is your metamour. (This is a term used in the poly community; the short definition is <a href="https://www.urbandictionary.com/define.php?term=metamours" target="blank">here</a>, and a longer description is <a href="https://solopoly.net/2012/09/29/whats-a-metamour-on-my-terms/" target="blank">here</a>).`,
        "The reporter or reported person is your family member",
        "The reporter or reported person is your direct client",
        "The reporter or reported person is someone you work closely with. This could be someone on your team or someone who works on the same project as you.",
        "Contact online community administrators/moderators to approve the behavioral modification plan and consequences.",
        "The reporter or reported person is a maintainer who regularly reviews your contributions",
      ],
      conflictInterestNote1:
        "Committee members do not need to state why they have a conflict of interest, only that one exists. Other work group members should not ask why the person has a conflict of interest.",
      conflictInterestNote2:
        "Anyone who has a conflict of interest will remove themselves from the discussion of the incident, and recuse themselves from voting on a response to the report.",
      evaluatingReportHeader: "Evaluating a report",
      jurisdictionHeader: "JURISDICTION",
      jurisdictionPoints: [
        "-Is this a Code of Conduct violation? Is this behavior on our list of inappropriate behavior? Is it borderline inappropriate behavior? Does it violate our community norms?",
        "-Did this occur in a space that is within our Code of Conduct’s scope? If the incident occurred outside the community, but a community member’s mental health or physical safety may be negatively impacted if no action is taken, the incident may be in scope. Private conversations in community spaces are also in scope.",
      ],
      impactHeader: "IMPACT",
      impactPoints: [
        "-Did this incident occur in a private conversation or in a public space? Incidents that all community members can see will have more negative impact.",
        "-Does this behavior negatively impact a marginalized group in our community? Is the reporter a person from a marginalized group in our community? How is the reporter being negatively impacted by the reported person’s behavior? Are members of the marginalized group likely to disengage with the community if no action was taken on this report?",
        "-Does this incident involve a community leader? Community members often look up to community leaders to set the standard of acceptable behavior.",
      ],
      riskHeader: "RISK",
      riskPoints: [
        "-Does this incident include sexual harrasment?",
        "-Does this pose a safety risk? Does the behavior put a person’s physical safety at risk? Will this incident severely negatively impact someone’s mental health?",
        "-Is there a risk of this behavior being repeated? Does the reported person understand why their behavior was inappropriate? Is there an established pattern of behavior from past reports?",
      ],
      riskSummary:
        "Reports which involve higher risk or higher impact may face more severe consequences than reports which involve lower risk or lower impact.",
      proposeBehaviorPlanHeader: "Propose a behavioral modification plan",
      proposeBehaviorPlanText:
        "The event staff will determine a concrete behavioral modification plan that ensures the inappropriate behavior is not repeated. The event staff will also discuss what actions may need to be taken if the reported person does not agree to the behavioral modification plan.",
      behaviorPlanNote:
        "What follows are examples of possible behavioral modification plans for incidents that occur in online spaces under the scope of this Code of Conduct. This behavioral modification list is not inclusive, and the event staff reserves the right to take any action it deems necessary.",
      behaviorPlanExamples: [
        "Requiring that the reported person not use specific language",
        "Requiring that the reported person not join in on specific types of discussions",
        "Requiring that the reported person not send private messages to a community member",
        "Requiring that the reported person not join specific communication channels",
        "Removing the reported person from administrator or moderator rights to community infrastructure",
        "Removing a volunteer from their duties and responsibilities",
        "Removing a person from leadership of relevant organizations",
        "Removing a person from membership of relevant organizations",
      ],
      proposeConsequencesHeader: "Propose consequences",
      proposeConsequencesText:
        "What follows are examples of possible consequences to an incident report. This consequences list is not inclusive, and the event staff reserves the right to take any action it deems necessary.",
      possiblePrivateResponsesHeader:
        "Possible private responses to an incident include:",
      possiblePrivateResponses: [
        "Nothing, if the behavior was determined to not be a Code of Conduct violation",
        "A verbal or emailed warning",
        "A final warning",
        "Temporarily removing the reported person from the online community",
        "Permanently removing the reported person from the online community",
        "Publishing an account of the incident",
      ],
      followUpReportedPersonHeader: "Follow up with the reported person",
      followUpReportedPersonText:
        "The event staff will work with online community administrators/moderators to draft a response to the reported person. The email should contain:",
      followUpReportedPersonList: [
        "A description of the person’s behavior in neutral language",
        "The negative impact of that behavior",
        "A concrete behavioral modification plan",
        "Any consequences of their behavior",
      ],
      followUpReportedPersonNote:
        "The work group should not state who reported this incident. They should attempt to anonymize any identifying information from the report. The reported person should be discouraged from contacting the reporter to discuss the report. If they wish to apologize to the reporter, the work group can accept the apology on behalf of the reporter.",
      decideFurtherResponseHeader: "Decide further responses",
      decideFurtherResponseText:
        "If the reported person provides additional context, the event staff may need to re-evaluate the behavioral modification plan and consequences.",
      followUpReporterHeader: "Follow up with the reporter",
      followUpReporterText1:
        "A person who makes a report should receive a follow up email stating what action was taken in response to the report. If the work group decided no response was needed, they should provide an email explaining why it was not a Code of Conduct violation. Reports that are not made in good faith (such as “reverse sexism” or “reverse racism”) may receive no response.",
      followUpReporterText2:
        "The follow up email should be sent no later than one week after the receipt of the report. If deliberation or follow up with the reported person takes longer than one week, the work group should send a status email to the reporter.",
    },
    healthAndSafetyPolicy: {
      title: "Health and Safety Policy",
      paragraph1:
        "Our attendees' health and safety remain our top priority as we continue to monitor the state of the pandemic and look to venue, local, and CDC guidelines to make the best and most informed decisions around onsite safety and requirements. Python Colombia has worked hard to be a community that is welcoming to all so we will be erring on the side of safety for all participants.",
      paragraph2:
        "PyCon Colombia will continue to provide social distancing where possible in the venue. The guidelines implemented for PyCon Colombia 2025 are subject to change based on health and safety recommendations at the time of the event. We are committing, however, to only make changes in the direction of greater protections.",
    },
    scholarships: {
      title: "Diversity Scholarships",
      paragraph1:
        "Python's presence in software development worldwide continues to increase, leading to new outcomes changing our time. At PyCon Colombia, in addition to promoting open source and sharing among all attendees, we strive every year to ensure that our community is as accessible and diverse as possible. We see diversity and inclusion as a benefit to the ecosystem and its individuals.",
      paragraph2:
        "We aim for PyCon Colombia to be inclusive of the entire Python community in our country. In order to help alleviate financial barriers to attending the conference, the PyCon organizing committee is offering scholarships to individuals who face financial obstacles, including students and members of underrepresented groups within the Python community. These scholarships cover the cost of conference admission.",
      paragraph3:
        "It should be noted that scholarship recipients will be responsible for covering all other expenses, such as travel, accommodations, visa fees, and transportation.",
      paragraph4Text: "If you want to apply, please go to this form:",
      formLink: "https://forms.gle/EnSffxKcuzu4yugdA",
      formLinkText: "Link form",
    },
    questions: {
      eligibility: {
        title: "Eligibility",
        paragraph1:
          "These scholarships are aimed at individuals facing financial barriers, including students and individuals from underrepresented groups in the technology community, such as women, LGBTQIA+ individuals, persons with disabilities, and racial and ethnic minorities. We encourage all of you to apply for our scholarships.",
        paragraph2:
          "Please read the following instructions and complete the form to apply for the scholarship.",
        paragraph3:
          "Please note that each application will be individually reviewed by the PyCon Colombia Organizing Team and classified according to the application form and letter of intent responses. All personal information collected will be kept confidential.",
        paragraph4:
          "Submitting your application doesn’t guarantee immediate eligibility. Please review the terms and conditions.",
      },
      acknowledgments: {
        title: "Acknowledgments",
        paragraph1:
          "The PyCon Colombia 2025 Diversity Program is made possible thanks to the support of PyCon Colombia 2025 sponsors.",
        paragraph2:
          "If your organization is interested in participating in the Diversity Program, please contact: scholarships@pycon.co",
      },
      importantDates: {
        title: "Important Dates",
        items: [
          "Application opens May 21. Applications for the PyCon Colombia scholarship must be submitted starting on this day.",
          "Application deadline: June 8. The form will close on this day.",
          "Selected applications: June 15. Winners of the scholarship will be notified by email of their acceptance.",
        ],
      },
      termsAndConditions: {
        title: "Terms and Conditions",
        paragraph: "For your application to be accepted:",
        items: [
          "You must submit it within the dates and deadlines.",
          "You must provide a letter of interest following the suggested format.",
          "You must be available to attend the entire PyCon Colombia Conference (July 4, 5 and 6, 2025).",
          "You must attach a legalized authorization from your parents if you are a minor.",
        ],
      },
      selectedHelp: {
        title: "You were selected. Do you want to help the conf?",
        paragraph:
          "For accepted scholarship recipients attending the conference, we would love for you to share your experience with the world about how PyCon Colombia 2025 was and encourage more people to apply for the scholarships next year. Possible ways to help us are:",
        items: [
          "Posts on Social media your journey and details about the conference. Please add the tag of @PyConColombia",
          "Write a blog or record a video sharing your experience at the conference.",
          "** Interview in a blog or video format **",
          "** Please note that in either of these formats, you can choose to remain anonymous.**",
        ],
      },
    },
    codeOfConductPage: {
      metaTitle: "Code of Conduct | PyCon Colombia 2026",
      sectionAriaLabel: "Code of conduct",
      eyebrow: "PyCon Colombia",
      titlePart1: "Code of",
      titlePart2: "Conduct",
      intro:
        "PyCon Colombia is a conference organized by the Python Colombia community created for the dissemination of the Python programming language in our country and Latin America, with the objective of sharing knowledge and expanding the spaces for interaction and collaboration of its members. We value the participation of each member of the community and we want each participant in the conference to enjoy and gain valuable experience full of knowledge and innovation. According to this code, all participants including organizers, speakers, volunteers and attendees are expected to show respect and courtesy among themselves in all aspects of the conference, its organization and the events taking place in the context of the conference. To be more explicit than is expected of any person participating in the event and the global and local community of Python and PyCon Colombia are required to comply with the following Code of Conduct. The organizers of this event and any event in the future are subject to enforce following and complying with international and Colombian laws and the spirit of the International Python Society (Python Software Foundation).",
      nav: {
        intro: "Introduction",
        content: "Code of Conduct Content",
        recommendations: "Our goal",
        contact: "Contact Information",
        more: "Want to know more?",
      },
      helpCard: {
        title: "Contact organizers",
        body: "If you have been harassed or need help, you can reach our organizers directly.",
        email: "john@pycon.co",
        emailHref: "mailto:john@pycon.co",
      },
      contentSection: {
        title: "Code of Conduct Content",
        body: "PyCon Colombia is dedicated to providing a conference free of harassment for all members, regardless of gender, sexual orientation, physical abilities, physical appearance, race or religion. No abuse will be tolerated by any conference participant. All communications should be focused on a professional audience including people with different backgrounds and experiences. Sexual language is not appropriate for any event organized under our rules, including talks.",
      },
      recommendations: {
        title: "Our goal as a community recommends:",
        inclusiveTitle: "Be Inclusive",
        inclusiveBody:
          "Acknowledge different backgrounds and perspectives. Foster a welcoming atmosphere for all participants.",
        respectfulTitle: "Be Respectful",
        respectfulBody:
          "Disagreement is no excuse for poor manners. Be kind in all interactions and communications.",
        items: [
          "Be kind to other members.",
          "Do not insult or demean the other participants.",
          "Behave professionally.",
          "Remember that any conduct of harassment, sexism, racism or political division or of any instance, is not appropriate for participation within the conference or community.",
          "Not attending the conference under the influence of alcoholic beverages.",
          "Participants of our community of any type (Organizers, Speakers, Volunteers and Assistants) who do not comply with any of these rules will be expelled from the conference without any reimbursement at the discretion of the organizing committee of the conference.",
        ],
        thankYou:
          "Thank you for being subject to these terms and welcome to PyCon Colombia. This is a friendly event for our entire community.",
      },
      contact: {
        title: "Contact Information",
        lead: "If you have been harassed, or realize that someone else is being harassed or is violating the International Terms of the PyCon Colombia or have any problems, please contact our organizers:",
        contacts: [
          {
            name: "John Jairo Roa Acuña",
            email: "john@pycon.co",
            href: "mailto:john@pycon.co",
          },
        ],
        teamNote:
          "Our team at the conference will also be available to collaborate and contact local security or assist you to ensure your safety. We value your presence in our events.",
        organizerNote:
          "In case of any violation of the terms of this code of conduct by the organizers please contact the main organizer of the conference, John Roa or as a last resort to the PSF.",
        staffLanyardLead: "Staff wear",
        staffLanyardBold: "Yellow Lanyards",
        infoDeskLead: "Report at the",
        infoDeskBold: "Info Desk",
      },
      more: {
        title: "Want to know more?",
        linkText: "Submit",
        linkTo: "/",
      },
    },
    footer: {
      others: "Others",
      legal: "Legal",
      brandName: "PYCON COLOMBIA",
      description: `PyCon Colombia is the Annual Colombian conference that gathers professionals, enthusiasts and amateur users of the Python programming language.
Join us to learn, share, and connect with python professionals from across the globe.`,
      email: "hello@pycon.co",
      codeOfConduct: "Code of Conduct",
      codeOfConductEnforcementProcedure:
        "Code of Conduct Enforcement Procedure",
      HealthSafetyPolicy: "Health & Safety Policy",
      contact: "Contact",
      followUs: "Follow us:",
    },
  },
  es: {
    navbar: {
      callForProposals: "Llamado a ponentes",
      home: "Inicio",
      schedule: "Agenda",
      sponsors: "Patrocinadores",
      scholarships: "Becas",
      team: "Equipo",
      keynotes: "Keynotes",
      speakers: "Ponentes",
      getTickets: "CONSIGUE TUS ENTRADAS",
      submitProposal: "Enviar propuesta",
      ticketsUrl:
        "https://www.eventbrite.co/e/pycon-colombia-2025-tickets-1271703351959",
    },
    landing: {
      date: "Medellín, Julio 4, 5 y 6, 2025",
      introduction: {
        header: "Listo para surmergirte en el ",
        boldHeader: "mundo de Python",
        text: "Ven a explorar, aprender y conectar con otros que comparten tu misma pasión.",
        finalText: "¡Mantente atento para más información!",
      },
      ticketsButton: "Consigue tus entradas",
      topics: {
        sectionAriaLabel: "Carruseles de temas de la conferencia",
        rows: [
          [
            "Ciencia de datos",
            "Computación científica",
            "Inteligencia artificial",
            "Visión por computadora",
            "Python core",
            "Aprendizaje automático",
            "Videojuegos",
            "Comunidad",
            "DevOps",
            "MCP",
            "arquitectura limpia",
          ],
          [
            "Ciencia de datos",
            "Python core",
            "Aprendizaje automático",
            "Videojuegos",
            "Computación científica",
            "Inteligencia artificial",
            "Visión por computadora",
            "Comunidad",
            "DevOps",
            "MCP",
            "arquitectura limpia",
          ],
        ],
      },
      hero: {
        dateLine1: "medellín, colombia",
        dateLine2: "24, 25 y 26 DE JULIO - 2026",
        conferenceTitle: "pycon COLOMBIA",
        tagline: "La conferencia de Python más grande en Colombia.",
        wordmarkAlt: "PYCON",
      },
      bodyMessage: {
        header: "Conviértete en un Ponente",
        text: "¿Tienes una gran idea, un proyecto que te enorgullece o experiencias que puedan motivar a otros?",
        finalText:
          "Estamos buscando ponentes apasionados para liderar charlas sobre desarrollo, seguridad, Python y más.",
      },
      speakerDeadline: "Finaliza el 5 de mayo de 2025",
      applyToSpeakButton: "Postúlate como Ponente",
      subscribe: {
        header: "¿Quieres ",
        headerBold: "saber más?",
        description:
          "Únete al boletín de PyCon Colombia y recibe un panorama completo de nuestros eventos, ponentes y participación de la comunidad.",
        emailPlaceholder: "Ingresa tu correo",
        firstName: "Nombre",
        lastName: "Apellidos",
        email: "Correo",
        submitButton: "Suscribirse al boletín",
      },
      keynotes: {
        sectionAriaLabel: "Ponentes principales (keynotes)",
        title: "Keynotes",
        columns: [
          {
            photoFirst: true,
            photo: {
              src: "/images/keynotes/keynote-photo-1-3dbd42.png",
              alt: "Retrato de ponente principal",
            },
            name: "Mike Droettboom",
            handle: "@mdboom",
            flag: { code: "us", label: "Estados Unidos" },
            bio: "Director de ingeniería de software en Microsoft, lidera mejoras de rendimiento en CPython. Contribuidor open source con trayectoria en matplotlib, astropy, Pyodide y airspeed velocity.",
            social: [
              {
                key: "github",
                href: "https://github.com/mdboom",
                label: "GitHub",
              },
              {
                key: "instagram",
                href: "https://www.instagram.com/",
                label: "Instagram",
              },
              {
                key: "twitter",
                href: "https://twitter.com/",
                label: "X",
              },
              {
                key: "youtube",
                href: "https://www.youtube.com/",
                label: "YouTube",
              },
            ],
          },
          {
            photoFirst: false,
            photo: {
              src: "/images/keynotes/keynote-photo-2-2d8cc5.png",
              alt: "Retrato de ponente principal",
            },
            name: "Érico Andrei",
            handle: "@ericof",
            flag: { code: "br", label: "Brasil" },
            bio: "Fellow de la Python Software Foundation y organizador en la comunidad Python de Brasil, impulsando PyCon y la colaboración open source en Latinoamérica.",
            social: [
              {
                key: "github",
                href: "https://github.com/ericof",
                label: "GitHub",
              },
              {
                key: "instagram",
                href: "https://www.instagram.com/",
                label: "Instagram",
              },
              {
                key: "twitter",
                href: "https://twitter.com/",
                label: "X",
              },
              {
                key: "youtube",
                href: "https://www.youtube.com/",
                label: "YouTube",
              },
            ],
          },
          {
            photoFirst: true,
            photo: {
              src: "/images/keynotes/keynote-photo-3-1e4643.png",
              alt: "Retrato de ponente principal",
            },
            name: "Shreya Gupta",
            handle: "@shreyagupta",
            flag: { code: "in", label: "India" },
            bio: "Arquitecta de soluciones en Gen-IA en Nvidia, experta en desarrollo de modelos de IA. Máster en Sistemas Simbólicos por Stanford, investigación en aprendizaje profundo y neurociencia cognitiva. Defensora de la diversidad en STEM.",
            social: [
              {
                key: "github",
                href: "https://github.com/",
                label: "GitHub",
              },
              {
                key: "instagram",
                href: "https://www.instagram.com/",
                label: "Instagram",
              },
              {
                key: "twitter",
                href: "https://twitter.com/",
                label: "X",
              },
              {
                key: "youtube",
                href: "https://www.youtube.com/",
                label: "YouTube",
              },
            ],
          },
        ],
      },
      gallery: {
        sectionAriaLabel: "Galería de fotos de la conferencia",
        modalCloseLabel: "Cerrar imagen",
        imageAltTemplate: "Foto: {name}",
      },
    },
    callForProposals: {
      header: "Comparte tu voz",
      introText:
        "¿Tienes una gran idea, un proyecto que te enorgullece o experiencias que puedan motivar a otros?",
      footerText:
        "Estamos buscando ponentes apasionados para liderar charlas sobre desarrollo, seguridad, Python y más.",
      mainText:
        "Siéntete libre de enviar propuestas sobre una amplia variedad de temas técnicos que despierten tu interés. Estamos emocionados por descubrir las distintas ideas y enfoques que puedas compartir.",
      buttonText: "Envía tu propuesta",
      block1Title: "Charlas",
      block1Text:
        "Este es un espacio de 40 minutos (incluyendo preguntas y respuestas, generalmente distribuidos en 30 minutos para la charla y 10 minutos para las preguntas), en el que puedes hablar sobre cualquier tema (no solo aquellos centrados en Python), utilizando diapositivas y demostraciones en vivo si lo deseas.",
      block2Title: "Videos de Charlas",
      block2Text:
        "Todas las charlas serán grabadas y publicadas en nuestro canal de YouTube. La grabación incluirá la pantalla con las diapositivas del ponente, demostraciones en vivo y su participación en el evento. Esto permitirá que los miembros de la comunidad de Python que no puedan asistir a PyCon Colombia también se beneficien del contenido. Al enviar tu propuesta a PyCon Colombia, aceptas que podamos grabar, editar y difundir el audio y/o video de tu presentación. Si tienes alguna objeción al respecto, por favor háznoslo saber para encontrar una alternativa.",
      frequentQuestion: {
        title: "Preguntas frecuentes",
        topics: {
          title: "Temas",
          text1:
            "Siéntete libre de revisar las charlas y talleres de ediciones anteriores, desde 2017 hasta 2024. Algunas de las grabaciones están disponibles en nuestro canal de YouTube ",
          linkText: "aquí",
          text2: "Nos interesa recibir propuestas sobre los siguientes temas:",
          mainTopics: [
            "Ciencia de Datos",
            "Aprendizaje Automático",
            "Aprendizaje Profundo",
            "Inteligencia Artificial",
            "Internet de las Cosas (IoT)",
            "Desarrollo Web",
            "Micro-Python",
            "Frameworks de Python",
          ],
          text3:
            "Por supuesto, no todo debe ser técnico. Aquí hay algunos temas alternativos que consideramos relevantes para nuestra conferencia:",
          alternativeTopics: [
            "Inclusión y Diversidad",
            "Comunidad",
            "Vínculo entre Industria y Academia",
            "Educación y Habilidades Blandas",
            "Calidad de vida de personas en STEM",
          ],
          text4:
            "Si el tema de tu charla no encaja en ninguna de nuestras categorías, pero te apasiona, ¡no te preocupes! Nos encanta contar con personas como tú. ¡Esta es tu conferencia! Envía tu propuesta y tal vez descubramos nuevos temas para mejorar nuestra lista.",
        },
        whySpeak: {
          title: "¿Por qué deberías hablar en PyCon Colombia 2025?",
          text: "Creemos firmemente que si hay algo que te apasiona y quieres compartirlo, deberías preparar una charla y hacerlo. Pero si eso no es suficiente para convencerte, aquí tienes algunos beneficios de ser ponente en PyCon Colombia 2025:",
          perks: [
            "Entrada gratuita a la conferencia completa: Te da acceso a todas las charlas y talleres.",
            "Acceso a la cena de ponentes: Cena con los ponentes principales, patrocinadores, expositores y organizadores, totalmente cubierta por la conferencia.",
            "Un video profesional de tu charla publicado en nuestro canal de YouTube (consulta la sección de Videos de Charlas para más detalles).",
            "La oportunidad de impactar positivamente la vida de más de 600 asistentes.",
          ],
        },
        selectionProcess: {
          title: "Nuestro Proceso de Selección",
          text1:
            "Para construir una agenda de charlas y talleres de alto valor para la conferencia, seguimos este proceso:",
          steps: [
            "Todas las revisiones de propuestas son anónimas para evitar sesgos hacia los postulantes.",
            "Todas las propuestas son evaluadas y votadas por nuestro equipo de revisores.",
            "Las propuestas mejor calificadas son desanonimizadas para revisar el perfil del ponente, lo cual es realizado por el Comité de Charlas de PyCon Colombia.",
            "El Comité decide la agenda final.",
          ],
          text2:
            "Estamos muy emocionados de recibir más propuestas excelentes de las que tenemos espacio para charlas. Este proceso nos ayuda a seleccionar las mejores propuestas minimizando el sesgo hacia el perfil del ponente.",
        },
        codeOfConduct: {
          title: "Código de Conducta",
          text: "Para crear un ambiente seguro y cómodo para todos nuestros asistentes y miembros del equipo, y garantizar que todos disfruten de la conferencia, hemos escrito este Código de Conducta. Esperamos que lo leas, lo entiendas y lo sigas tanto en tu propuesta como en tu charla.",
        },
      },
    },
    callForProposalsPage: {
      metaTitle: "Llamado a propuestas | PyCon Colombia 2026",
      submitProposalHref:
        "mailto:speakers@pycon.co?subject=Propuesta%20PyCon%20Colombia%202026",
      hero: {
        badge: "Aceptamos envíos",
        titleBefore: "Llamado a",
        titleAccent: "propuestas",
        titleYear: "2026",
        lead: "Comparte tu conocimiento, inspira a la comunidad y ayuda a dar forma al futuro de Python en Latinoamérica. Te esperamos en los majestuosos Andes en PyCon Colombia 2026.",
        ctaPrimary: "Envía tu propuesta",
        ctaSecondary: "Ver guía de envío",
        imageSrc: "/images/cfp.jpg",
        imageAlt: "Salón de conferencias moderno",
      },
      why: {
        title: "¿Por qué hablar en PyCon Colombia?",
        paragraphs: [
          "PyCon Colombia es la reunión más grande de pythonistas en la región. Hablar aquí no se trata solo de compartir código: es tender puentes, acompañar a la siguiente generación y aportar a uno de los ecosistemas tecnológicos más vibrantes del mundo.",
          "Recibimos con los brazos abiertos a personas de todos los perfiles y niveles de experiencia. Tanto si es tu primera charla como si ya eres una voz reconocida, la comunidad está para apoyarte.",
        ],
      },
      helpCard: {
        title: "¿Necesitas ayuda?",
        body: "Lee el FAQ para ponentes o escríbenos para orientarte en tu envío.",
        faqLinkText: "Ver preguntas frecuentes",
      },
      channels: {
        title: "Canales clave",
        items: [
          {
            icon: "mail",
            label: "speakers@pycon.co",
            href: "mailto:speakers@pycon.co",
          },
          { icon: "forum", label: "Discord de la comunidad", href: null },
          { icon: "doc", label: "Plantilla de propuesta", href: null },
        ],
      },
      dates: {
        title: "Fechas importantes",
        subtitle:
          "Anota en tu calendario. No se aceptarán envíos fuera de plazo.",
        items: [
          {
            date: "15 DE OCTUBRE DE 2025",
            title: "Apertura del CFP",
            body: "Empieza a bosquejar tus sesiones y tu biografía como ponente.",
            dotPrimary: true,
            borderPrimary: false,
          },
          {
            date: "10 DE ENERO DE 2026",
            title: "Cierre de envíos",
            body: "Todas las propuestas deben enviarse por el portal antes de medianoche hora Colombia.",
            dotPrimary: false,
            borderPrimary: false,
          },
          {
            date: "15 DE FEBRERO DE 2026",
            title: "Anuncios",
            body: "Les informaremos el estado de su propuesta.",
            dotPrimary: false,
            borderPrimary: false,
          },
          {
            date: "12-14 DE JUNIO DE 2026",
            title: "PyCon Colombia",
            body: "El evento principal se realiza en Medellín.",
            dotPrimary: true,
            borderPrimary: true,
          },
        ],
      },
      formats: {
        title: "Formatos de sesión",
        items: [
          {
            icon: "talk",
            title: "Charlas",
            body: "Presentaciones de 30 minutos con espacio para preguntas. Ideales para casos de uso, bibliotecas nuevas o profundizaciones en Python.",
            tags: ["30 MIN", "PREGUNTAS INCLUIDAS"],
          },
          {
            icon: "workshop",
            title: "Talleres",
            body: "Sesiones prácticas intensivas de 3 horas, con guía paso a paso para quienes siguen en su propio equipo.",
            tags: ["180 MIN", "MANOS A LA OBRA"],
          },
          {
            icon: "poster",
            title: "Pósters",
            body: "Representación visual de proyectos o investigación, en el salón principal con tiempo dedicado a conversar y conectar.",
            tags: ["VISUAL", "NETWORKING"],
          },
        ],
      },
      topics: {
        title: "¿Qué buscamos?",
        lead: "Valoramos la diversidad de miradas. Aceptamos cualquier tema relacionado con Python; estas son algunas líneas que entusiasman especialmente a la comunidad este año.",
        quoteBefore:
          "Priorizamos contenido acciónable, bien estructurado y alineado con nuestro ",
        quoteAfter: ".",
        codeOfConductLabel: "código de conducta",
        items: [
          { key: "ds", title: "Ciencia de datos e IA" },
          { key: "web", title: "Desarrollo web" },
          { key: "devops", title: "DevOps e infraestructura" },
          { key: "sec", title: "Ciberseguridad" },
          { key: "sci", title: "Python científico" },
          { key: "edu", title: "Educación y habilidades blandas" },
          { key: "iot", title: "IoT y hardware" },
          { key: "core", title: "Python core" },
          { key: "oss", title: "Cultura de código abierto" },
        ],
      },
      selection: {
        title: "El proceso de selección",
        steps: [
          {
            title: "Revisión anónima",
            body: "Para mayor equidad, la primera revisión se hace sin ver nombres ni afiliaciones.",
          },
          {
            title: "Retroalimentación de la comunidad",
            body: "Un grupo de personas expertas y de la comunidad califica profundidad técnica y relevancia.",
          },
          {
            title: "Curaduría final",
            body: "El comité de programa arma una mezcla equilibrada de temas y niveles para la agenda final.",
          },
        ],
      },
      benefits: {
        title: "Beneficios para ponentes",
        items: [
          "Pase completo a la conferencia: acceso a charlas, talleres y espacios sociales.",
          "Cena exclusiva de ponentes: conoce a keynotes y al equipo central.",
          "Apoyo económico: ayuda con viaje y alojamiento para quienes la necesiten.",
          "Swag de ponente: material edición limitada solo para quienes presentan.",
        ],
        cta: "¿Lista o listo para postularte?",
      },
      faq: {
        title: "Preguntas frecuentes",
        subtitle: "Lo esencial para presentar en PyCon Colombia.",
        items: [
          {
            q: "¿En qué idioma envío la propuesta y doy la charla?",
            a: "PyCon Colombia es bilingüe. Aceptamos propuestas en español e inglés. Puedes elegir el idioma en el que te sientas más cómodo o cómoda al presentar.",
          },
          {
            q: "¿Puedo enviar más de una propuesta?",
            a: "Sí. Aunque para mantener una agenda diversa, por lo general limitamos a una presentación por persona en el programa final.",
          },
          {
            q: "¿Hay apoyo de viaje para ponentes?",
            a: "Sí, tenemos programa de ayuda económica. Esperamos que muchas empresas cubran el viaje de sus equipos, pero ofrecemos apoyo a quienes lo necesiten, en especial a grupos subrepresentados en tecnología.",
          },
          {
            q: "¿Qué criterios se usan para evaluar las propuestas?",
            a: "Relevancia para la comunidad, calidad técnica, claridad del resumen y valor educativo de la charla. Buscamos equilibrio entre niveles principiante y avanzado.",
          },
          {
            q: "Nunca he hablado en una conferencia. ¿Puedo postularme?",
            a: "¡Por supuesto! Nos encantan las personas que dan su primera charla. Incluso ofrecemos mentorías para pulir tu presentación antes del evento.",
          },
          {
            q: "¿Las sesiones se graban?",
            a: "Sí, salvo que pidas explícitamente lo contrario, las charlas se graban y publican en nuestro canal de YouTube después del evento, para toda la comunidad global de Python.",
          },
        ],
        footerLead: "¿Sigues con dudas? Estamos para ayudarte.",
        footerLink: "Escribir al comité de ponentes",
      },
    },
    sponsors: {
      title: "Conoce a Nuestros Patrocinadores",
      description:
        "Desde empresas tecnológicas innovadoras hasta defensores comprometidos de la comunidad, estos patrocinadores están liderando el camino en Python y desarrollo de software.",
      thankYouMessage:
        "No podríamos hacerlo sin ellos—¡gracias por su compromiso con el avance del futuro de Python!",
    },
    codeOfConduct: {
      title: "Código de Conducta",
      introBold: "PyCon Colombia ",
      intro:
        "es una conferencia organizada por la comunidad Python Colombia creada para la difusión del lenguaje de programación Python en nuestro país y América Latina, con el objetivo de compartir conocimientos y expandir los espacios de interacción y colaboración entre sus miembros. Valoramos la participación de cada miembro de la comunidad y queremos que cada participante en la conferencia disfrute y obtenga una experiencia valiosa llena de conocimiento e innovación. Según este código, se espera que todos los participantes, incluidos organizadores, ponentes, voluntarios y asistentes, muestren respeto y cortesía entre sí en todos los aspectos de la conferencia, su organización y los eventos que se lleven a cabo en el contexto de la misma. Para ser más explícitos, se espera que cualquier persona que participe en el evento y en la comunidad global y local de Python y PyCon Colombia cumpla con el siguiente Código de Conducta. Los organizadores de este evento y de cualquier evento futuro están sujetos a hacer cumplir el seguimiento y cumplimiento de las leyes internacionales y colombianas y el espíritu de la Sociedad Internacional de Python (Python Software Foundation).",
      conductContent: {
        title: "Contenido del Código de Conducta",
        text: "PyCon Colombia se compromete a proporcionar una conferencia libre de acoso para todos los miembros, sin importar género, orientación sexual, habilidades físicas, apariencia física, raza o religión. No se tolerará ningún tipo de abuso por parte de ningún participante de la conferencia. Todas las comunicaciones deben estar enfocadas en una audiencia profesional, incluyendo personas con diferentes trayectorias y experiencias. El lenguaje sexual no es apropiado para ningún evento organizado bajo nuestras normas, incluidas las charlas.",
      },
      communityGoals: {
        title: "Nuestro objetivo como comunidad recomienda:",
        items: [
          "Ser amable con los demás miembros.",
          "No insultar ni menospreciar a otros participantes.",
          "Comportarse de manera profesional.",
          "Recordar que cualquier conducta de acoso, sexismo, racismo o división política, en cualquier instancia, no es apropiada para la participación dentro de la conferencia o la comunidad.",
          "No asistir a la conferencia bajo la influencia de bebidas alcohólicas.",
          "Los participantes de nuestra comunidad, sin importar su rol (organizadores, ponentes, voluntarios y asistentes), que no cumplan con estas reglas serán expulsados de la conferencia sin reembolso, a discreción del comité organizador del evento.",
        ],
      },
      closingMessage:
        "Gracias por acatar estos términos y bienvenido a PyCon Colombia. Este es un evento amigable para toda nuestra comunidad.",
      contactInfo: {
        title: "Información de Contacto",
        text: "Si has sido acosado, o te das cuenta de que alguien más está siendo acosado o está violando los términos internacionales de PyCon Colombia o tienes cualquier problema, por favor contacta a nuestros organizadores:",
        securityNote:
          "Nuestro equipo en la conferencia también estará disponible para colaborar y contactar a seguridad local o asistirte para garantizar tu seguridad. Valoramos tu presencia en nuestros eventos.",
        escalationNote:
          "En caso de cualquier violación de los términos de este código de conducta por parte de los organizadores, por favor contacta al organizador principal de la conferencia, John Roa, o como último recurso, a la PSF.",
      },
    },
    codeOfConductEnforcementProcedure: {
      title: "Procedimiento de Aplicación del Código de Conducta",
      summaryIntro:
        "Este documento resume los procedimientos que el equipo de PyCon utiliza para hacer cumplir el Código de Conducta.",
      summaryHeader: "Resumen de procesos",
      summaryStepsIntro:
        "Cuando el grupo de trabajo recibe un reporte de una posible violación al Código de Conducta, realizará:",
      summarySteps: [
        "Reconocer la recepción del reporte.",
        "Evaluar conflictos de interés.",
        "Convocar una reunión de respondedores del Código de Conducta que no tengan conflicto de interés.",
        "Evaluar el incidente reportado.",
        "Proponer un plan de modificación de conducta.",
        "Proponer consecuencias para el comportamiento reportado.",
        "Votar sobre el plan de modificación de conducta y las consecuencias para la persona reportada.",
        "Contactar a administradores/moderadores de la comunidad en línea para aprobar el plan de modificación y las consecuencias.",
        "Dar seguimiento a la persona reportada.",
        "Decidir respuestas adicionales.",
        "Dar seguimiento al reportante.",
      ],
      acknowledgeReportHeader: "Reconocimiento del reporte",
      acknowledgeReportText:
        "Los reportantes deben recibir un acuse de recibo por correo electrónico dentro de las 24 horas siguientes a la recepción del reporte.",
      conflictInterestHeader: "Política de conflictos de interés",
      conflictInterestExamplesIntro:
        "Ejemplos de conflictos de interés incluyen:",
      conflictInterestExamples: [
        "El reportante o la persona reportada es tu jefe",
        "Tienes una relación romántica o platónica con el reportante o la persona reportada. Está bien participar si son conocidos.",
        `El reportante o la persona reportada es tu metamour. (Este es un término usado en la comunidad poliamorosa; la definición corta está <a href="https://www.urbandictionary.com/define.php?term=metamours" target="blank">aquí</a>, y una descripción más larga está <a href="https://solopoly.net/2012/09/29/whats-a-metamour-on-my-terms/" target="blank">aquí</a>).`,
        "El reportante o la persona reportada es un familiar tuyo",
        "El reportante o la persona reportada es tu cliente directo",
        "El reportante o la persona reportada es alguien con quien trabajas muy de cerca. Puede ser alguien en tu equipo o que trabaja en el mismo proyecto que tú.",
        "Contactar a administradores/moderadores de la comunidad en línea para aprobar el plan de modificación y las consecuencias.",
        "El reportante o la persona reportada es un mantenedor que revisa regularmente tus contribuciones",
      ],
      conflictInterestNote1:
        "Los miembros del comité no necesitan explicar por qué tienen un conflicto de interés, solo que existe. Los demás miembros no deben preguntar el motivo.",
      conflictInterestNote2:
        "Quien tenga conflicto de interés se retirará de la discusión del incidente y se recusará de votar la respuesta al reporte.",
      evaluatingReportHeader: "Evaluando un reporte",
      jurisdictionHeader: "JURISDICCIÓN",
      jurisdictionPoints: [
        "-¿Es esta una violación al Código de Conducta? ¿Está este comportamiento en nuestra lista de comportamientos inapropiados? ¿Es borderline? ¿Viola nuestras normas comunitarias?",
        "-¿Ocurrió en un espacio dentro del alcance de nuestro Código de Conducta? Si ocurrió fuera, pero la salud mental o seguridad física de un miembro puede verse afectada si no se actúa, puede estar dentro del alcance. Conversaciones privadas en espacios comunitarios también están dentro del alcance.",
      ],
      impactHeader: "IMPACTO",
      impactPoints: [
        "-¿Ocurrió en conversación privada o en espacio público? Los incidentes visibles a toda la comunidad tienen mayor impacto negativo.",
        "-¿Este comportamiento afecta negativamente a un grupo marginado de la comunidad? ¿El reportante es parte de un grupo marginado? ¿Cómo le afecta el comportamiento? ¿Es probable que miembros del grupo se alejen si no se actúa?",
        "-¿Involucra un líder comunitario? Los miembros suelen tomar como ejemplo el comportamiento de los líderes.",
      ],
      riskHeader: "RIESGO",
      riskPoints: [
        "-¿Incluye acoso sexual?",
        "-¿Representa un riesgo para la seguridad? ¿Pone en riesgo la seguridad física? ¿Afecta severamente la salud mental?",
        "-¿Existe riesgo de repetición? ¿La persona reportada entiende la inapropiación? ¿Hay patrón de comportamiento?",
      ],
      riskSummary:
        "Los reportes con mayor riesgo o impacto pueden tener consecuencias más severas.",
      proposeBehaviorPlanHeader: "Proponer un plan de modificación de conducta",
      proposeBehaviorPlanText:
        "El equipo definirá un plan concreto para evitar la repetición del comportamiento inapropiado. También se discutirán acciones en caso de desacuerdo.",
      behaviorPlanNote:
        "Estos son ejemplos de planes para incidentes en espacios online. No es una lista exhaustiva, el equipo puede tomar otras acciones.",
      behaviorPlanExamples: [
        "Requerir que la persona reportada no use un lenguaje específico",
        "Requerir que no participe en ciertos tipos de discusiones",
        "Requerir que no envíe mensajes privados a miembros de la comunidad",
        "Requerir que no acceda a ciertos canales de comunicación",
        "Quitar derechos de administrador o moderador en la infraestructura comunitaria",
        "Remover voluntario de sus funciones y responsabilidades",
        "Quitar a una persona de liderazgo en organizaciones relevantes",
        "Quitar a una persona de membresías en organizaciones relevantes",
      ],
      proposeConsequencesHeader: "Proponer consecuencias",
      proposeConsequencesText:
        "Ejemplos de consecuencias para un reporte. No es lista exhaustiva, el equipo puede tomar otras acciones.",
      possiblePrivateResponsesHeader: "Respuestas privadas posibles incluyen:",
      possiblePrivateResponses: [
        "No hacer nada si no es violación al Código de Conducta",
        "Advertencia verbal o por correo",
        "Advertencia final",
        "Remover temporalmente a la persona de la comunidad online",
        "Remover permanentemente a la persona de la comunidad online",
        "Publicar un relato del incidente",
      ],
      followUpReportedPersonHeader: "Seguimiento con la persona reportada",
      followUpReportedPersonText:
        "El equipo trabajará con admins/moderadores para redactar respuesta. El correo debe contener:",
      followUpReportedPersonList: [
        "Descripción neutral del comportamiento",
        "Impacto negativo del comportamiento",
        "Plan concreto de modificación de conducta",
        "Cualquier consecuencia por su comportamiento",
      ],
      followUpReportedPersonNote:
        "No se debe revelar quién hizo el reporte. Se deben anonimizar datos. Se debe desalentar que la persona reportada contacte al reportante. Si desea disculparse, el equipo puede aceptar en nombre del reportante.",
      decideFurtherResponseHeader: "Decidir respuestas adicionales",
      decideFurtherResponseText:
        "Si la persona reportada da contexto adicional, se puede reevaluar el plan y consecuencias.",
      followUpReporterHeader: "Seguimiento con el reportante",
      followUpReporterText1:
        "El reportante debe recibir correo con acciones tomadas o explicación si no hubo violación. Reportes no hechos de buena fe pueden no recibir respuesta.",
      followUpReporterText2:
        "El correo debe enviarse máximo una semana después del reporte. Si la deliberación tarda más, se debe enviar correo de estado.",
    },
    healthAndSafetyPolicy: {
      title: "Política de Salud y Seguridad",
      paragraph1:
        "La salud y seguridad de nuestros asistentes siguen siendo nuestra máxima prioridad mientras monitoreamos la situación de la pandemia y consideramos las directrices del lugar, locales y del CDC para tomar las decisiones más informadas sobre la seguridad y requisitos en sitio. Python Colombia ha trabajado para ser una comunidad acogedora para todos, por lo que nos inclinaremos por la seguridad de todos los participantes.",
      paragraph2:
        "PyCon Colombia continuará promoviendo el distanciamiento social donde sea posible en el lugar. Las directrices implementadas para PyCon Colombia 2025 están sujetas a cambios basados en recomendaciones de salud y seguridad en el momento del evento. Sin embargo, nos comprometemos a hacer cambios solo hacia mayores protecciones.",
    },
    scholarships: {
      title: "Becas de Diversidad",
      paragraph1:
        "La presencia de Python en el desarrollo de software a nivel mundial sigue creciendo, dando lugar a nuevos resultados que cambian nuestro tiempo. En PyCon Colombia, además de promover el código abierto y el compartir entre todos los asistentes, nos esforzamos cada año para que nuestra comunidad sea lo más accesible y diversa posible. Vemos la diversidad y la inclusión como un beneficio para el ecosistema y sus individuos.",
      paragraph2:
        "Buscamos que PyCon Colombia sea inclusiva para toda la comunidad Python en nuestro país. Para ayudar a aliviar las barreras financieras para asistir a la conferencia, el comité organizador de PyCon está ofreciendo becas a personas que enfrentan obstáculos económicos, incluyendo estudiantes y miembros de grupos subrepresentados dentro de la comunidad Python. Estas becas cubren el costo de la admisión a la conferencia.",
      paragraph3:
        "Cabe aclarar que los beneficiarios de las becas serán responsables de cubrir todos los demás gastos, como transporte, alojamiento, visa y traslados.",
      paragraph4Text:
        "Si quieres aplicar, por favor ingresa a este formulario:",
      formLink: "https://forms.gle/EnSffxKcuzu4yugdA",
      formLinkText: "Formulario",
    },
    questions: {
      eligibility: {
        title: "Elegibilidad",
        paragraph1:
          "Estas becas están dirigidas a personas que enfrentan barreras financieras, incluyendo estudiantes y personas de grupos subrepresentados en la comunidad tecnológica, como mujeres, personas LGBTQIA+, personas con discapacidades, y minorías raciales y étnicas. Les animamos a todos a postularse a nuestras becas.",
        paragraph2:
          "Por favor, lea las siguientes instrucciones y complete el formulario para solicitar la beca.",
        paragraph3:
          "Tenga en cuenta que cada solicitud será revisada individualmente por el equipo organizador de PyCon Colombia y clasificada de acuerdo con el formulario de solicitud y las respuestas a la carta de intención. Toda la información personal recopilada se mantendrá confidencial.",
        paragraph4:
          "Enviar su solicitud no garantiza elegibilidad inmediata. Por favor, revise los términos y condiciones.",
      },
      acknowledgments: {
        title: "Agradecimientos",
        paragraph1:
          "El Programa de Diversidad de PyCon Colombia 2025 es posible gracias al apoyo de los patrocinadores de PyCon Colombia 2025.",
        paragraph2:
          "Si su organización está interesada en participar en el Programa de Diversidad, por favor contacte: scholarships@pycon.co",
      },
      importantDates: {
        title: "Fechas Importantes",
        items: [
          "Apertura de postulaciones: 21 de mayo. Las solicitudes para la beca PyCon Colombia deben enviarse a partir de esta fecha.",
          "Fecha límite de postulación: 8 de junio. El formulario se cerrará en esta fecha.",
          "Selección de postulantes: 15 de junio. Los ganadores serán notificados por correo electrónico.",
        ],
      },
      termsAndConditions: {
        title: "Términos y Condiciones",
        paragraph: "Para que su solicitud sea aceptada:",
        items: [
          "Debe enviarse dentro de las fechas y plazos establecidos.",
          "Debe proporcionar una carta de interés siguiendo el formato sugerido.",
          "Debe estar disponible para asistir a toda la Conferencia PyCon Colombia (4, 5 y 6 de julio de 2025).",
          "Debe adjuntar una autorización legalizada de sus padres si es menor de edad.",
        ],
      },
      selectedHelp: {
        title: "Fuiste seleccionado. ¿Quieres ayudar a la conferencia?",
        paragraph:
          "Para los beneficiarios aceptados que asistan a la conferencia, nos encantaría que compartieras tu experiencia con el mundo sobre cómo fue PyCon Colombia 2025 y motivar a más personas a postularse para las becas el próximo año. Algunas formas de ayudarnos son:",
        items: [
          "Publicar en redes sociales tu recorrido y detalles sobre la conferencia. Por favor agrega la etiqueta @PyConColombia",
          "Escribir un blog o grabar un video compartiendo tu experiencia en la conferencia.",
          "** Entrevista en formato blog o video **",
          "** Por favor ten en cuenta que en cualquiera de estos formatos puedes elegir permanecer en anonimato.**",
        ],
      },
    },
    codeOfConductPage: {
      metaTitle: "Código de conducta | PyCon Colombia 2026",
      sectionAriaLabel: "Código de conducta",
      eyebrow: "PyCon Colombia",
      titlePart1: "Código de",
      titlePart2: "conducta",
      intro:
        "PyCon Colombia es una conferencia organizada por la comunidad Python Colombia, creada para la divulgación del lenguaje de programación Python en nuestro país y en América Latina, con el objetivo de compartir conocimiento y ampliar los espacios de interacción y colaboración de sus integrantes. Valoramos la participación de cada miembro de la comunidad y queremos que cada persona participante en la conferencia disfrute y obtenga una experiencia valiosa llena de conocimiento e innovación. De acuerdo con este código, se espera que todas las personas participantes, incluidas organizadoras, ponentes, voluntarias y asistentes, muestren respeto y cortesía entre sí en todos los aspectos de la conferencia, su organización y los eventos que ocurran en el marco de la conferencia. Para ser más explícitos que lo que se espera de cualquier persona que participe en el evento, se requiere que la comunidad global y local de Python y PyCon Colombia cumpla el siguiente Código de Conducta. Las organizadoras de este evento y de cualquier evento en el futuro están obligadas a hacer cumplir y a acatar las leyes internacionales y colombianas y el espíritu de la Python Software Foundation (International Python Society).",
      nav: {
        intro: "Introducción",
        content: "Contenido del código de conducta",
        recommendations: "Nuestra meta",
        contact: "Información de contacto",
        more: "¿Quieres saber más?",
      },
      helpCard: {
        title: "Contacto con organizadoras",
        body: "Si has sido acosado o necesitas ayuda, puedes contactar directamente a nuestras organizadoras.",
        email: "john@pycon.co",
        emailHref: "mailto:john@pycon.co",
      },
      contentSection: {
        title: "Contenido del código de conducta",
        body: "PyCon Colombia se dedica a ofrecer una conferencia libre de acoso para todos los miembros, sin importar género, orientación sexual, capacidades físicas, apariencia física, raza o religión. No se tolerará ningún abuso por parte de ninguna persona participante en la conferencia. Todas las comunicaciones deben estar dirigidas a una audiencia profesional que incluye personas con distintos orígenes y experiencias. El lenguaje sexual no es apropiado en ningún evento organizado bajo nuestras reglas, incluidas las charlas.",
      },
      recommendations: {
        title: "Nuestra meta como comunidad recomienda:",
        inclusiveTitle: "Sé inclusivo",
        inclusiveBody:
          "Reconoce distintos orígenes y perspectivas. Fomenta un ambiente acogedor para todas las personas participantes.",
        respectfulTitle: "Sé respetuoso",
        respectfulBody:
          "El desacuerdo no es excusa para malos modales. Sé amable en todas tus interacciones y comunicaciones.",
        items: [
          "Ser amable con los demás miembros.",
          "No insultar ni menospreciar a las demás personas participantes.",
          "Comportarse de manera profesional.",
          "Recordar que cualquier conducta de acoso, sexismo, racismo o división política, o de cualquier índole, no es apropiada para participar dentro de la conferencia o la comunidad.",
          "No asistir a la conferencia bajo los efectos de bebidas alcohólicas.",
          "Las personas participantes de nuestra comunidad de cualquier tipo (Organizadoras, Ponentes, Voluntarias y Asistentes) que no cumplan alguna de estas reglas serán expulsadas de la conferencia sin ningún reembolso, a criterio del comité organizador de la conferencia.",
        ],
        thankYou:
          "Gracias por acoger estos términos y bienvenido o bienvenida a PyCon Colombia. Este es un evento amigable para toda nuestra comunidad.",
      },
      contact: {
        title: "Información de contacto",
        lead: "Si has sido acosado o acosada, te das cuenta de que alguien más está siendo acosado o se están violando los Términos Internacionales de PyCon Colombia, o tienes algún problema, por favor contacta a nuestras organizadoras:",
        contacts: [
          {
            name: "John Jairo Roa Acuña",
            email: "john@pycon.co",
            href: "mailto:john@pycon.co",
          },
        ],
        teamNote:
          "Nuestro equipo en la conferencia también estará disponible para colaborar, contactar a seguridad local o ayudarte a garantizar tu seguridad. Valoramos tu presencia en nuestros eventos.",
        organizerNote:
          "En caso de cualquier violación de los términos de este código de conducta por parte de las organizadoras, por favor contacta al organizador principal de la conferencia, John Roa, o como último recurso a la PSF.",
        staffLanyardLead: "El staff usa",
        staffLanyardBold: "lanyards amarillos",
        infoDeskLead: "Reporta en el",
        infoDeskBold: "mostrador de información",
      },
      more: {
        title: "¿Quieres saber más?",
        linkText: "Enviar",
        linkTo: "/",
      },
    },
    footer: {
      others: "Otros",
      legal: "Legal",
      brandName: "PYCON COLOMBIA",
      description:
        "PyCon Colombia es la conferencia nacional de la comunidad Python. Acompáñanos a aprender, compartir y conectar con desarrolladores de todo el país.",
      email: "hello@pycon.co",
      codeOfConduct: "Código de Conducta",
      codeOfConductEnforcementProcedure:
        "Procedimiento de aplicación del Código de Conducta",
      HealthSafetyPolicy: "Política de salud y seguridad",
      contact: "Contacto",
      followUs: "Siguenos en:",
    },
  },
};

export default data;
