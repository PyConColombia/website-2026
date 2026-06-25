import type { SiteLocale } from "@/lib/site-messages";

export type KeynoteContent = {
  name: string;
  role: string;
  country: string;
  description: string;
};

export type KeynoteContentBySlug = Record<string, KeynoteContent>;

export const keynoteContentByLocale: Record<SiteLocale, KeynoteContentBySlug> =
  {
    en: {
      "tereza-iofciu": {
        name: "Tereza Iofciu",
        role: "Data & AI expert, leadership coach, and Python Software Foundation Fellow",
        country: "Romania",
        description:
          "Tereza Iofciu is a data and AI expert, leadership coach, and PSF Fellow with 15+ years of experience leading data and product teams at neuefische, FREE NOW, and New Work (XING). She helps professionals lead and adapt in the age of AI through her Data Diplomat Framework™, bridging technical depth with human leadership. Along side that she's been volunteering in the Python Community and wore many hats over the years: PyLadies Hamburg organizer, Python Software Verband board member, NumFocus DISC Steering Committee member, Python Software Foundation Code of Conduct team member, Diversity & Inclusion working group member, PyConDE & PyData Berlin organizer, Python Pizza Hamburg organizer, and PyPodcats co-leader. In 2021 Tereza was awarded the Python Software Foundation community service award and in 2025 was named a PSF Fellow.",
      },
      "anna-pristoupilova": {
        name: "Anna Pristoupilova",
        role: "Bioinformatician and researcher",
        country: "Czech Republic",
        description:
          "Anna is a bioinformatics scientist focused on genome analysis techniques and their applications in understanding rare genetic diseases. She received the Bolzano Award for her doctoral thesis.\n\nShe holds a PhD in Molecular and Cell Biology, Genetics, and Virology and two MSc degrees: one in Medical Technology and Informatics, and the other in Molecular Biology and Genetics, all from Charles University.\n\nAnna has co-authored over 25 publications in peer-reviewed journals and has presented her work at various scientific conferences.\n\nCurrently, she works as a Senior Bioinformatics Scientist at DNAnexus company, where she assists customers with their bioinformatics analysis. She also conducts research at the Research Unit for Rare Diseases at the First Faculty of Medicine, Charles University.",
      },
      "malvika-sharan": {
        name: "Malvika Sharan",
        role: "Senior Director of Data Science at St. Jude Children's Research Hospital",
        country: "India",
        description:
          "Malvika Sharan is Senior Director of Data Science at St. Jude Children's Research Hospital and a globally recognized leader in open science and community-driven research. She is a co-founder of Open Life Science and a key contributor to The Turing Way, advancing reproducible, ethical, and collaborative data science practices worldwide. With a background in bioinformatics and leadership roles at institutions like the Alan Turing Institute and EMBL, Malvika focuses on building inclusive research communities and empowering practitioners through open, transparent, and responsible approaches to AI and data science.",
      },
      "kari-l-jordan": {
        name: "Dr. Kari L. Jordan",
        role: "Executive Director of The Carpentries",
        country: "United States",
        description:
          "Dr. Kari L. Jordan is a leading figure in data science education, serving as the Executive Director for The Carpentries, a globally recognized nonprofit organization. Upon completing Bachelor's and Master's degrees in Mechanical Engineering from Michigan Technological University, she pursued a Ph.D. in Engineering Education at The Ohio State University, specializing in interventions to enhance belonging for people of color in STEM. Dr. Jordan's visionary leadership has propelled The Carpentries' mission worldwide, fostering exponential growth and impact across academia, industry, and government sectors. A sought-after speaker and advocate for diversity and inclusion, she champions accessible data literacy and bridges the digital skills gap through strategic initiatives and international collaboration. Dr. Jordan's dedication to empowering individuals and fostering inclusive learning environments has earned her widespread recognition and respect, shaping the future of data literacy for societal betterment.",
      },
      "irit-katriel": {
        name: "Irit Katriel",
        role: "CPython core developer and former Faster CPython team member",
        country: "United Kingdom",
        description:
          "Irit Katriel is a software engineer with over two decades of experience. She is a CPython core developer and a former member of the Faster CPython team. Her contributions to Python include the implementation of exception groups and the except* construct (PEP 654), key simplifications to Python's exception mechanism, and a major refactor of the CPython bytecode compiler to improve structure, maintainability, and testability. Irit has also authored several academic publications on the more theoretical aspects of computer science. She holds a PhD in computer science and a BSc in psychology.",
      },
      "luciano-ramalho": {
        name: "Luciano Ramalho",
        role: "Author of Fluent Python and Python Software Foundation Fellow",
        country: "Brazil",
        description:
          "Luciano Ramalho is a renowned Python educator, author, and software developer best known for Fluent Python, one of the most influential books on mastering Pythonic programming and software craftsmanship. A Python Software Foundation Fellow and long-time advocate for open source and developer education, Luciano has helped programmers worldwide deepen their understanding of Python's design, best practices, and expressive power. Through decades of teaching, speaking, and writing, he has played a major role in shaping how developers write more effective, idiomatic, and thoughtful Python.",
      },
    },
    es: {
      "tereza-iofciu": {
        name: "Tereza Iofciu",
        role: "Experta en datos e IA, coach de liderazgo y Fellow de la Python Software Foundation",
        country: "Rumanía",
        description:
          "Tereza Iofciu es experta en datos e IA, coach de liderazgo y Fellow de la PSF con más de 15 años de experiencia liderando equipos de datos y producto en neuefische, FREE NOW y New Work (XING). Ayuda a profesionales a liderar y adaptarse en la era de la IA a través de su Data Diplomat Framework™, combinando profundidad técnica con liderazgo humano. Además de eso, ha sido voluntaria en la Python Community y ha desempeñado muchos roles a lo largo de los años: organizadora de PyLadies Hamburg, miembro de la junta del Python Software Verband, del comité directivo DISC de NumFocus, del equipo de código de conducta de la Python Software Foundation, del grupo de trabajo de Diversidad e Inclusión, organizadora de PyConDE y PyData Berlin, organizadora de Python Pizza Hamburg y colíder de PyPodcats. En 2021, Tereza recibió el premio de servicio comunitario de la Python Software Foundation y en 2025 fue nombrada Fellow de la PSF.",
      },
      "anna-pristoupilova": {
        name: "Anna Pristoupilova",
        role: "Bioinformática e investigadora",
        country: "República Checa",
        description:
          "Anna es científica bioinformática enfocada en técnicas de análisis del genoma y sus aplicaciones para comprender enfermedades genéticas raras. Recibió el Premio Bolzano por su tesis doctoral.\n\nTiene un doctorado en Biología Molecular, Celular, Genética y Virología y dos másteres: uno en Tecnología Médica e Informática y otro en Biología Molecular y Genética, todos de la Universidad Carolina.\n\nAnna ha coautorado más de 25 publicaciones en revistas revisadas por pares y ha presentado su trabajo en diversas conferencias científicas.\n\nActualmente trabaja como Senior Bioinformatics Scientist en DNAnexus, donde asiste a clientes con sus análisis bioinformáticos. También realiza investigación en la Unidad de Investigación de Enfermedades Raras de la Primera Facultad de Medicina de la Universidad Carolina.",
      },
      "malvika-sharan": {
        name: "Malvika Sharan",
        role: "Senior Director of Data Science en St. Jude Children's Research Hospital",
        country: "India",
        description:
          "Malvika Sharan es Senior Director of Data Science en St. Jude Children's Research Hospital y una líder reconocida mundialmente en ciencia abierta e investigación impulsada por la comunidad. Es cofundadora de Open Life Science y contribuidora clave de The Turing Way, promoviendo prácticas de ciencia de datos reproducibles, éticas y colaborativas a nivel global. Con formación en bioinformática y roles de liderazgo en instituciones como el Alan Turing Institute y el EMBL, Malvika se enfoca en construir comunidades de investigación inclusivas y empoderar a profesionales a través de enfoques abiertos, transparentes y responsables de IA y ciencia de datos.",
      },
      "kari-l-jordan": {
        name: "Dr. Kari L. Jordan",
        role: "Directora ejecutiva de The Carpentries",
        country: "Estados Unidos",
        description:
          "La Dra. Kari L. Jordan es una figura destacada en la educación en ciencia de datos y se desempeña como directora ejecutiva de The Carpentries, una organización sin fines de lucro reconocida mundialmente. Tras completar licenciatura y maestría en Ingeniería Mecánica en la Universidad Tecnológica de Michigan, cursó un doctorado en Educación en Ingeniería en la Universidad Estatal de Ohio, especializándose en intervenciones para fortalecer el sentido de pertenencia de personas de color en STEM. El liderazgo visionario de la Dra. Jordan ha impulsado la misión de The Carpentries a nivel mundial, fomentando un crecimiento e impacto exponenciales en los sectores académico, industrial y gubernamental. Como ponente solicitada y defensora de la diversidad y la inclusión, promueve la alfabetización de datos accesible y reduce la brecha de habilidades digitales mediante iniciativas estratégicas y colaboración internacional. La dedicación de la Dra. Jordan a empoderar a las personas y fomentar entornos de aprendizaje inclusivos le ha valido un amplio reconocimiento y respeto, moldeando el futuro de la alfabetización de datos para el bienestar social.",
      },
      "irit-katriel": {
        name: "Irit Katriel",
        role: "Desarrolladora núcleo de CPython y exmiembro del equipo Faster CPython",
        country: "Reino Unido",
        description:
          "Irit Katriel es ingeniera de software con más de dos décadas de experiencia. Es desarrolladora núcleo de CPython y exmiembro del equipo Faster CPython. Sus contribuciones a Python incluyen la implementación de grupos de excepciones y la construcción except* (PEP 654), simplificaciones clave en el mecanismo de excepciones de Python y una refactorización importante del compilador de bytecode de CPython para mejorar la estructura, mantenibilidad y capacidad de prueba. Irit también ha publicado varios trabajos académicos sobre aspectos más teóricos de la informática. Tiene un doctorado en ciencias de la computación y una licenciatura en psicología.",
      },
      "luciano-ramalho": {
        name: "Luciano Ramalho",
        role: "Autor de Fluent Python y Fellow de la Python Software Foundation",
        country: "Brasil",
        description:
          "Luciano Ramalho es un reconocido educador, autor y desarrollador Python, conocido principalmente por Fluent Python, uno de los libros más influyentes sobre programación pitónica y artesanía de software. Fellow de la Python Software Foundation y defensor de larga data del código abierto y la educación de desarrolladores, Luciano ha ayudado a programadores de todo el mundo a profundizar su comprensión del diseño de Python, sus buenas prácticas y su poder expresivo. A través de décadas de enseñanza, conferencias y escritura, ha desempeñado un papel fundamental en la forma en que los desarrolladores escriben Python más efectivo, idiomático y reflexivo.",
      },
    },
  };
