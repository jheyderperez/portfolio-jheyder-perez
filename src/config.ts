// ═══════════════════════════════════════════════════════════════════
// TODO TU CONTENIDO ESTÁ EN ESTE ARCHIVO
//
// La web tiene dos idiomas. Cada texto que cambia según el idioma se
// escribe así:
//
//     { es: "Texto en español", en: "Text in English" }
//
// Los textos que son iguales en los dos idiomas (nombres, títulos de
// artículos, nombres de instituciones) van como texto simple: "Texto".
//
// Si agregas algo y solo lo escribes en español, la versión en inglés
// mostrará el texto en español hasta que agregues la traducción.
// ═══════════════════════════════════════════════════════════════════

export type Lang = "es" | "en";
export type Text = string | { es: string; en: string };

export const siteConfig = {
  name: "Jheyder W. Perez Aguinaga",
  // Cómo se muestra el nombre arriba a la izquierda: primera parte en negrita.
  shortName: { first: "Jheyder", last: "Perez Aguinaga" },
  url: "https://jheyderperez.com",

  title: {
    es: "Ingeniero Civil & Investigador",
    en: "Civil Engineer & Researcher",
  } as Text,

  // Una línea debajo del nombre en «Sobre mí».
  position: {
    es: "Investigador visitante en Tohoku University · CEO de Toward Resilience Corporation S.A.C.",
    en: "Visiting Researcher at Tohoku University · CEO of Toward Resilience Corporation S.A.C.",
  } as Text,

  description: {
    es: "Ingeniero Civil especializado en Evaluación Estructural y Gestión de Riesgos de Desastres. CEO de Toward Resilience Corp. Investigador visitante en Tohoku University. Docente en PUCP.",
    en: "Civil Engineer specialized in Structural Assessment and Disaster Risk Management. CEO of Toward Resilience Corp. Visiting Researcher at Tohoku University. Lecturer at PUCP.",
  } as Text,

  accentColor: "#0F4C5C",
  highlightColor: "#14919B",

  social: {
    email: "jheyder.perez@gmail.com",
    scholar: "https://scholar.google.com/citations?user=B-WX9P0AAAAJ&hl=es",
    researchgate: "https://www.researchgate.net/profile/Jheyder-Perez-Aguinaga-2",
    linkedin: "https://www.linkedin.com/in/jheyderperez/",
    whatsapp: "https://wa.me/51959066643",
    github: "", // pon aquí tu perfil de GitHub, p. ej. "https://github.com/usuario"
  },

  // CV en PDF para descargar desde la pestaña CV. Si lo subes a public/
  // (p. ej. public/cv.pdf), escribe aquí "/cv.pdf". Vacío = no se muestra el botón.
  cvPdf: "",

  // ─────────────────────────────── SOBRE MÍ ───────────────────────────────
  // Cada elemento de la lista es un párrafo.
  aboutMe: [
    {
      es: "Ingeniero Civil por la Universidad San Ignacio de Loyola, con Maestría en Ingeniería Civil con mención en Gestión de Riesgos Naturales por la Pontificia Universidad Católica del Perú (PUCP), donde obtuve el primer puesto con mención sobresaliente.",
      en: "Civil Engineer from Universidad San Ignacio de Loyola, with a Master's degree in Civil Engineering with a specialization in Natural Hazard Risk Management from the Pontificia Universidad Católica del Perú (PUCP), where I graduated first in my class with outstanding distinction.",
    },
    {
      es: "Actualmente soy CEO de Toward Resilience Corporation S.A.C., empresa especializada en evaluación estructural de edificaciones existentes, y pre docente e investigador en la PUCP.",
      en: "I am currently CEO of Toward Resilience Corporation S.A.C., a company specialized in the structural assessment of existing buildings, and a teaching assistant and researcher at PUCP.",
    },
    {
      es: "Mi investigación se enfoca en sistemas de evacuación frente a tsunamis utilizando modelos basados en agentes y técnicas de reinforcement learning, con colaboraciones internacionales en Tohoku University (Japón) y la Universidad Técnica Federico Santa María (Chile).",
      en: "My research focuses on tsunami evacuation systems using agent-based models and reinforcement learning techniques, with international collaborations at Tohoku University (Japan) and Universidad Técnica Federico Santa María (Chile).",
    },
    {
      es: "Próximamente iniciaré mi Doctorado en Ciencias de la Ingeniería en la Pontificia Universidad Católica de Chile.",
      en: "I will soon begin my PhD in Engineering Sciences at the Pontificia Universidad Católica de Chile.",
    },
  ] as Text[],

  researchLines: [
    {
      title: { es: "Evaluación Estructural de Edificaciones Existentes", en: "Structural Assessment of Existing Buildings" },
      description: {
        es: "Ensayos no destructivos, potencial de corrosión y modelamiento estructural en colegios, hospitales, iglesias, edificios residenciales y proyectos mineros.",
        en: "Non-destructive testing, corrosion potential and structural modeling in schools, hospitals, churches, residential buildings and mining projects.",
      },
    },
    {
      title: { es: "Gestión de Riesgos de Desastres Naturales", en: "Natural Disaster Risk Management" },
      description: {
        es: "Resiliencia comunitaria, preparación frente a sismos, tsunamis, flujos de escombros e inundaciones, con enfoque en Lima Metropolitana.",
        en: "Community resilience and preparedness for earthquakes, tsunamis, debris flows and floods, with a focus on Metropolitan Lima.",
      },
    },
    {
      title: { es: "Modelamiento Basado en Agentes (ABM)", en: "Agent-Based Modeling (ABM)" },
      description: {
        es: "Simulación de evacuación peatonal frente a tsunamis mediante agent-based models, con aplicaciones en Camaná, Perú y colaboración con Tohoku University.",
        en: "Simulation of pedestrian tsunami evacuation using agent-based models, with applications in Camaná, Peru, in collaboration with Tohoku University.",
      },
    },
    {
      title: { es: "Reinforcement Learning aplicado a Evacuación", en: "Reinforcement Learning for Evacuation" },
      description: {
        es: "Optimización de rutas de evacuación peatonal utilizando técnicas de machine learning y reinforcement learning para escenarios multi-amenaza.",
        en: "Optimization of pedestrian evacuation routes using machine learning and reinforcement learning techniques for multi-hazard scenarios.",
      },
    },
  ],

  // ───────────────────────────── PUBLICACIONES ─────────────────────────────
  // type: "journal" (revista) | "conference" (conferencia) | "thesis" (tesis)
  // status: texto opcional, p. ej. { es: "En revisión", en: "Under review" }
  // Tu apellido se resalta en negrita automáticamente («Perez J.»).
  publications: [
    {
      authors: "Perez J., Moya L., Ramirez J., Gonzales E., Mas E., Adriano B. & Koshimura S.",
      year: "2025",
      title: "Tsunami Evacuation Planning for Camana, Peru: Insights from Agent-Based Modeling",
      venue: "Natural Hazards",
      status: { es: "En revisión", en: "Under review" } as Text,
      type: "journal",
      link: "",
    },
    {
      authors: "Perez J., Moya L., Ramirez J., Gonzales E., Mas E., Adriano B. & Koshimura S.",
      year: "2025",
      title: "Tsunami pedestrian evacuation simulation for Camaná, Peru: Perspectives for improving evacuation performance",
      venue: "E3S Web of Conferences, Vol. 515 (2025) — 17th Aceh International Workshop on Sustainable Tsunami Disaster Recovery",
      type: "conference",
      link: "https://www.e3s-conferences.org/articles/e3sconf/abs/2025/51/e3sconf_aiwest-dr2025_02011/e3sconf_aiwest-dr2025_02011.html",
    },
    {
      authors: "Perez J., Cabrera N. & Reza A.",
      year: "2025",
      title: "Preparedness and strengths in disaster risk management in Lurigancho-Chosica, Lima, Peru: Toward resilience of Lima Metropolitan",
      venue: "E3S Web of Conferences, Vol. 515 (2025) — 17th Aceh International Workshop on Sustainable Tsunami Disaster Recovery",
      type: "conference",
      link: "https://www.e3s-conferences.org/articles/e3sconf/abs/2025/51/e3sconf_aiwest-dr2025_03005/e3sconf_aiwest-dr2025_03005.html",
    },
    {
      authors: "Cordova-Arias C. & Perez J.",
      year: "2024",
      title: "Quantitative indicators for multi-hazard community resilience assessment of informal settlements",
      venue: { es: "18th World Conference on Earthquake Engineering (18WCEE) — Milán, Italia", en: "18th World Conference on Earthquake Engineering (18WCEE) — Milan, Italy" } as Text,
      type: "conference",
      link: "https://www.researchgate.net/publication/381847001",
    },
    {
      authors: "Perez J. & Córdova-Arias C.",
      year: "2022",
      title: "Propuesta de indicadores cuantitativos para la evaluación de la resiliencia comunitaria frente a escenarios multiamenazas en asentamientos informales de Lima Metropolitana, Perú",
      venue: {
        es: "Investigación para optar el título de Ingeniero Civil — Universidad San Ignacio de Loyola, Lima, Perú",
        en: "Research to obtain the degree of Civil Engineer — Universidad San Ignacio de Loyola, Lima, Peru",
      } as Text,
      type: "thesis",
      link: "",
    },
    {
      authors: "Perez J., Retamozo K., Santillán B. & Velasquez S.",
      year: "2021",
      title: "Diagnóstico y propuestas de reparación de patologías en el concreto en vivienda multifamiliar en el distrito de Independencia",
      venue: {
        es: "Investigación para optar el grado de Bachiller en Ingeniería Civil — Universidad San Ignacio de Loyola, Lima, Perú",
        en: "Research to obtain the B.S. degree in Civil Engineering — Universidad San Ignacio de Loyola, Lima, Peru",
      } as Text,
      type: "thesis",
      link: "",
    },
  ] as Array<{
    authors: string;
    year: string;
    title: string;
    venue: Text;
    status?: Text;
    type: "journal" | "conference" | "thesis";
    link?: string;
  }>,

  // Presentaciones (charlas, ponencias). Los títulos van en su idioma original.
  talks: [
    {
      year: "2025",
      title: "Análisis de Evacuación frente a Alerta de Tsunami en Punta Arenas, Chile: Proceso observado y Simulación computacional",
      venue: { es: "Conferencia Internacional sobre Ciudades Resilientes, Chile", en: "International Conference on Resilient Cities, Chile" },
    },
    {
      year: "2025",
      title: "Tsunami pedestrian evacuation simulation for Camana, Peru: Perspectives for improving evacuation performance",
      venue: { es: "17th Aceh International Workshop on Sustainable Tsunami Disaster Recovery (virtual), Londres, Reino Unido", en: "17th Aceh International Workshop on Sustainable Tsunami Disaster Recovery (virtual), London, United Kingdom" },
    },
    {
      year: "2025",
      title: "La participación colaborativa para la adaptación al cambio climático y la gestión de riesgos en ecosistemas de Laderas urbanas, Lima y Arequipa",
      venue: { es: "Pontificia Universidad Católica del Perú, setiembre de 2025", en: "Pontificia Universidad Católica del Perú, September 2025" },
    },
    {
      year: "2025",
      title: "Taller de Difusión de Resultados: Sistema Inteligente de Evacuación Peatonal Basado en técnicas de Reinforcement Learning",
      venue: { es: "Pontificia Universidad Católica del Perú, agosto de 2025", en: "Pontificia Universidad Católica del Perú, August 2025" },
    },
    {
      year: "2024",
      title: "Perspectivas de la Evaluación Estructural en el Desarrollo de Proyectos en el Perú",
      venue: { es: "Seminario Especializado sobre Gestión de Proyectos de Evaluación Estructural, organizado por Toward Resilience Co., Lima, Perú", en: "Specialized Seminar on Structural Assessment Project Management, organized by Toward Resilience Co., Lima, Peru" },
    },
    {
      year: "2022",
      title: "Lima Metropolitana: La metrópoli que, bajo un clima cambiante, debe buscar evaluar su resiliencia comunitaria frente a escenarios de múltiples peligros",
      venue: { es: "Policy Brief: Aportes de la ciencia a Nuestro Desafío Climático, Ministerio del Ambiente, 2.ª edición, Lima, Perú", en: "Policy Brief: Science Contributions to Our Climate Challenge, Ministry of the Environment of Peru, 2nd edition, Lima, Peru" },
    },
    {
      year: "2021",
      title: "Propuesta para la Evaluación de la Resiliencia Comunitaria frente a Múltiples Peligros en Lima",
      venue: { es: "Conferencia Internacional sobre Ciudades Resilientes (virtual), Chile, abril de 2021", en: "International Conference on Resilient Cities (virtual), Chile, April 2021" },
    },
  ] as Array<{ year: string; title: string; venue: Text }>,

  // ─────────────────────────────── PROYECTOS ───────────────────────────────
  researchProjects: [
    {
      name: { es: "Modelo Global de Evacuación por Tsunami (GTEM)", en: "Global Tsunami Evacuation Model (GTEM)" },
      role: { es: "Asistente de investigación", en: "Research Assistant" },
      dateRange: { es: "Ago. 2025 – Presente", en: "Aug. 2025 – Present" },
      description: {
        es: "Desarrollo de sistemas complejos con modelos basados en agentes para optimizar la evacuación frente a tsunamis. Colaboración Tohoku University – PUCP, financiado por la Coalición para Infraestructura Resiliente a los Desastres (CDRI).",
        en: "Development of complex systems with agent-based models to optimize tsunami evacuation. Tohoku University – PUCP collaboration, funded by the Coalition for Disaster Resilient Infrastructure (CDRI).",
      },
      tags: ["Agent-Based Modeling", "Python", "Tohoku University", "CDRI"],
      link: "",
    },
    {
      name: "An integrative framework for tsunami vertical-evacuation planning",
      role: { es: "Pasante de investigación", en: "Research Intern" },
      dateRange: { es: "Jun. – Jul. 2025", en: "Jun. – Jul. 2025" },
      description: {
        es: "Pasantía de investigación en la Universidad Técnica Federico Santa María, Valparaíso, Chile, supervisada por el Prof. Jorge León.",
        en: "Research internship at Universidad Técnica Federico Santa María, Valparaíso, Chile, supervised by Prof. Jorge León.",
      },
      tags: ["UTFSM", { es: "Evacuación vertical", en: "Vertical evacuation" }],
      link: "",
    },
    {
      name: { es: "Proyecto LAdERA — CONCYTEC", en: "LAdERA Project — CONCYTEC" },
      role: { es: "Asistente de investigación", en: "Research Assistant" },
      dateRange: { es: "Ago. 2024 – Presente", en: "Aug. 2024 – Present" },
      description: {
        es: "Lineamientos para Adaptación al cambio climático en Ecosistemas urbanos de bajo Riesgo y mejoramiento Ambiental. Financiado por el CONCYTEC, Pontificia Universidad Católica del Perú.",
        en: "Guidelines for climate change adaptation in low-risk urban ecosystems and environmental improvement. Funded by CONCYTEC, Pontificia Universidad Católica del Perú.",
      },
      tags: [{ es: "Gestión de Riesgos", en: "Risk Management" }, { es: "Cambio Climático", en: "Climate Change" }, "PUCP"],
      link: "",
    },
    {
      name: { es: "Evacuación Peatonal con Reinforcement Learning", en: "Pedestrian Evacuation with Reinforcement Learning" },
      role: { es: "Tesista de maestría", en: "Master's thesis researcher" },
      dateRange: { es: "Mar. 2023 – Jun. 2025", en: "Mar. 2023 – Jun. 2025" },
      description: {
        es: "Sistema inteligente de evacuación peatonal basado en técnicas de reinforcement learning. Tesis de maestría financiada por el CONCYTEC, Pontificia Universidad Católica del Perú.",
        en: "Intelligent pedestrian evacuation system based on reinforcement learning techniques. Master's thesis funded by CONCYTEC, Pontificia Universidad Católica del Perú.",
      },
      tags: ["Reinforcement Learning", "Python", "PUCP"],
      link: "",
    },
  ] as Array<{ name: Text; role: Text; dateRange: Text; description: Text; tags: Text[]; link?: string }>,

  // Proyectos de código con su repositorio en GitHub.
  // Reemplaza los <<PLACEHOLDER>> con tus proyectos (o borra el bloque que sobre).
  codeProjects: [
    {
      name: "<<PLACEHOLDER: nombre del proyecto de código 1>>",
      description: {
        es: "<<PLACEHOLDER: qué hace el proyecto, en 1-2 líneas>>",
        en: "<<PLACEHOLDER: what the project does, in 1-2 lines>>",
      },
      tags: ["<<PLACEHOLDER: lenguaje>>"],
      github: "", // p. ej. "https://github.com/usuario/repositorio"
    },
    {
      name: "<<PLACEHOLDER: nombre del proyecto de código 2>>",
      description: {
        es: "<<PLACEHOLDER: qué hace el proyecto, en 1-2 líneas>>",
        en: "<<PLACEHOLDER: what the project does, in 1-2 lines>>",
      },
      tags: ["<<PLACEHOLDER: lenguaje>>"],
      github: "",
    },
  ] as Array<{ name: Text; description: Text; tags: Text[]; github: string }>,

  // Consultoría (Toward Resilience Corporation S.A.C.)
  services: [
    {
      title: { es: "Evaluación Estructural", en: "Structural Assessment" },
      description: {
        es: "Evaluación integral de edificaciones existentes mediante ensayos no destructivos, potencial de corrosión y modelamiento estructural. Experiencia en colegios, hospitales, iglesias, edificios residenciales y proyectos mineros.",
        en: "Comprehensive assessment of existing buildings through non-destructive testing, corrosion potential and structural modeling. Experience with schools, hospitals, churches, residential buildings and mining projects.",
      },
    },
    {
      title: { es: "Asesoría en Investigación", en: "Research Advisory" },
      description: {
        es: "Soporte en investigación académica en gestión de riesgos naturales, resiliencia comunitaria, modelamiento basado en agentes y evacuación frente a tsunamis.",
        en: "Support for academic research in natural hazard risk management, community resilience, agent-based modeling and tsunami evacuation.",
      },
    },
  ] as Array<{ title: Text; description: Text }>,

  consultingProjects: [
    {
      name: { es: "Evaluación estructural de 21 instituciones educativas de Lima Metropolitana", en: "Structural assessment of 21 schools in Metropolitan Lima" },
      client: { es: "Dirección Regional de Educación de Lima Metropolitana (DRELM)", en: "Regional Education Directorate of Metropolitan Lima (DRELM)" },
      date: { es: "Ago. – Nov. 2025", en: "Aug. – Nov. 2025" },
    },
    {
      name: { es: "Agua potable y alcantarillado de Puerto Maldonado y C.P. Mayor El Triunfo: evaluación estructural preliminar y detallada para el estudio definitivo", en: "Water supply and sewerage of Puerto Maldonado and C.P. Mayor El Triunfo: preliminary and detailed structural assessment for the final design study" },
      client: "",
      date: { es: "May. – Jul. 2025", en: "May – Jul. 2025" },
    },
    {
      name: { es: "Iglesia San Antonio de Mala: evaluación estructural con fines de restauración tras el colapso por el sismo de Ica de 2007", en: "San Antonio de Mala Church: structural assessment for restoration after its collapse in the 2007 Ica earthquake" },
      client: "",
      date: { es: "Set. – Feb. 2025", en: "Sep. – Feb. 2025" },
    },
    {
      name: { es: "Hospital Nacional Daniel Alcides Carrión, Callao: reforzamiento estructural de viga existente por corrosión extrema", en: "Daniel Alcides Carrión National Hospital, Callao: structural strengthening of an existing beam due to extreme corrosion" },
      client: "",
      date: { es: "Abr. – Jul. 2024", en: "Apr. – Jul. 2024" },
    },
    {
      name: { es: "Mina Justa: detección del acero de refuerzo y potencial de corrosión en muros de batea del circuito de lixiviación", en: "Mina Justa: rebar detection and corrosion potential in the leaching circuit vat walls" },
      client: { es: "JJC Contratistas Generales S.A., en soporte a Thornton Tomasetti", en: "JJC Contratistas Generales S.A., supporting Thornton Tomasetti" },
      date: { es: "Ene. – Jun. 2023", en: "Jan. – Jun. 2023" },
    },
  ] as Array<{ name: Text; client: Text; date: Text }>,

  // ─────────────────────────────── DOCENCIA ───────────────────────────────
  teaching: [
    {
      institution: "Pontificia Universidad Católica del Perú (PUCP)",
      role: { es: "Pre docente — Facultad de Ingeniería", en: "Teaching Assistant — Faculty of Engineering" },
      courses: [
        { name: { es: "Laboratorio de Materiales", en: "Materials Laboratory" }, terms: "2023-02, 2024-01, 2024-02", note: "Prof. Laura Navarro" },
        { name: { es: "Resistencia de Materiales", en: "Strength of Materials" }, terms: "2023-02", note: "Prof. Acero Martínez" },
        { name: { es: "Introducción a la Ingeniería Civil", en: "Introduction to Civil Engineering" }, terms: "2025-01", note: "Prof. Leonel Lipa Cusi" },
      ],
    },
    {
      institution: "<<PLACEHOLDER: institución donde dictó estos cursos como docente>>",
      role: { es: "Docente", en: "Lecturer" },
      courses: [
        { name: { es: "Evaluación Estructural de Edificaciones Existentes", en: "Structural Assessment of Existing Buildings" }, terms: "2024-01, 2024-02, 2024-03, 2025-01, 2026-01", note: "" },
        { name: { es: "Concretos Convencionales y Especiales", en: "Conventional and Special Concretes" }, terms: "2024-01", note: "" },
        { name: { es: "Investigación Cualitativa y Cuantitativa en Procesos Industriales y Empresariales", en: "Qualitative and Quantitative Research in Industrial and Business Processes" }, terms: "2025-01", note: "" },
      ],
    },
    {
      institution: "Universidad San Ignacio de Loyola (USIL)",
      role: { es: "Pre docente", en: "Teaching Assistant" },
      courses: [
        { name: { es: "Tecnología del Concreto", en: "Concrete Technology" }, terms: "2021-02, 2022-02", note: "Prof. Cristina Córdova Arias" },
        { name: { es: "Proyecto de Ingeniería Civil", en: "Civil Engineering Project" }, terms: "2022-02", note: "Prof. Cristina Córdova Arias" },
        { name: { es: "Seminario de Tesis", en: "Thesis Seminar" }, terms: "2022-02", note: "Prof. Cristina Córdova Arias" },
      ],
    },
  ] as Array<{ institution: Text; role: Text; courses: Array<{ name: Text; terms: string; note: string }> }>,

  // ────────────────────────────────── CV ──────────────────────────────────
  education: [
    {
      school: "Pontificia Universidad Católica de Chile",
      degree: { es: "Doctorado en Ciencias de la Ingeniería", en: "PhD in Engineering Sciences" },
      dateRange: "2026",
      achievements: [{ es: "Próximo inicio", en: "Starting soon" }],
    },
    {
      school: "Pontificia Universidad Católica del Perú (PUCP)",
      degree: { es: "Maestría en Ingeniería Civil — Gestión de Riesgos Naturales", en: "Master's in Civil Engineering — Natural Hazard Risk Management" },
      dateRange: "2023 – 2025",
      achievements: [
        { es: "1er Puesto", en: "Ranked 1st in class" },
        { es: "Tesis aprobada con Mención Sobresaliente", en: "Thesis approved with Outstanding Distinction" },
        { es: "Financiamiento CONCYTEC", en: "CONCYTEC funding" },
      ],
    },
    {
      school: "Universidad San Ignacio de Loyola (USIL)",
      degree: { es: "Ingeniero Civil — CIP N° 315093", en: "Civil Engineer — CIP No. 315093" },
      dateRange: "2015 – 2020",
      achievements: [
        { es: "Tesis con Mención Sobresaliente", en: "Thesis with Outstanding Distinction" },
        { es: "Beca Completa PRONABEC (Beca 18)", en: "Full scholarship PRONABEC (Beca 18)" },
        { es: "Premio Excelencia Universitaria — ACI International", en: "University Excellence Award — ACI International" },
      ],
    },
  ] as Array<{ school: string; degree: Text; dateRange: string; achievements: Text[] }>,

  experience: [
    {
      company: "Tohoku University & International Research Project",
      title: { es: "Investigador Visitante", en: "Visiting Researcher" },
      dateRange: { es: "Ago. 2025 – Presente", en: "Aug. 2025 – Present" },
      bullets: [
        { es: "Investigación en Japón bajo el Prof. Erik Mas sobre modelos basados en agentes para evacuación frente a tsunamis", en: "Research in Japan under Prof. Erik Mas on agent-based models for tsunami evacuation" },
        { es: "Proyecto GTEM: Modelo Global de Evacuación por Tsunami, financiado por CDRI", en: "GTEM Project: Global Tsunami Evacuation Model, funded by CDRI" },
      ],
    },
    {
      company: "Pontificia Universidad Católica del Perú (PUCP)",
      title: { es: "Pre Docente & Asistente de Investigación", en: "Teaching Assistant & Research Assistant" },
      dateRange: { es: "Ago. 2023 – Presente", en: "Aug. 2023 – Present" },
      bullets: [
        { es: "Pre docente en Laboratorio de Materiales, Resistencia de Materiales e Introducción a la Ingeniería Civil", en: "Teaching assistant in Materials Laboratory, Strength of Materials and Introduction to Civil Engineering" },
        { es: "Investigador en el Proyecto LAdERA (CONCYTEC): adaptación al cambio climático en ecosistemas urbanos", en: "Researcher in the LAdERA Project (CONCYTEC): climate change adaptation in urban ecosystems" },
        { es: "Intercambio en la Universidad Técnica Federico Santa María (Chile): tsunami vertical-evacuation planning", en: "Exchange at Universidad Técnica Federico Santa María (Chile): tsunami vertical-evacuation planning" },
      ],
    },
    {
      company: "Toward Resilience Corporation S.A.C.",
      title: { es: "CEO & Ingeniero de Proyectos", en: "CEO & Project Engineer" },
      dateRange: { es: "Ago. 2022 – Presente", en: "Aug. 2022 – Present" },
      bullets: [
        { es: "Evaluación estructural de 21 instituciones educativas para la DRELM de Lima Metropolitana", en: "Structural assessment of 21 schools for the DRELM of Metropolitan Lima" },
        { es: "Servicios para JJC Contratistas Generales / Thornton Tomasetti en minería (Mina Justa)", en: "Services for JJC Contratistas Generales / Thornton Tomasetti in mining (Mina Justa)" },
        { es: "Ensayos no destructivos, potencial de corrosión y modelamiento con fines de reforzamiento", en: "Non-destructive testing, corrosion potential and modeling for structural strengthening" },
      ],
    },
    {
      company: "Universidad San Ignacio de Loyola (USIL)",
      title: { es: "Asistente Académico & Pre Docente", en: "Academic Assistant & Teaching Assistant" },
      dateRange: { es: "Ago. 2022 – Oct. 2023", en: "Aug. 2022 – Oct. 2023" },
      bullets: [
        { es: "Pre docente en Tecnología del Concreto, Proyecto de Ingeniería Civil y Seminario de Tesis", en: "Teaching assistant in Concrete Technology, Civil Engineering Project and Thesis Seminar" },
        { es: "Gestión documentaria y académica de estudiantes de Ingeniería Civil", en: "Academic and records management for Civil Engineering students" },
      ],
    },
    {
      company: "Scientia Concrete S.A.C.",
      title: { es: "Ingeniero Estructural de Proyectos", en: "Structural Project Engineer" },
      dateRange: { es: "Ene. 2020 – Jul. 2022", en: "Jan. 2020 – Jul. 2022" },
      bullets: [
        { es: "Evaluación estructural y rehabilitación de edificaciones históricas, universidades y viviendas", en: "Structural assessment and rehabilitation of historic buildings, universities and housing" },
        { es: "Técnicas destructivas y no destructivas en concreto armado, albañilería y tierra armada", en: "Destructive and non-destructive techniques in reinforced concrete, masonry and reinforced earth" },
      ],
    },
  ] as Array<{ company: string; title: Text; dateRange: Text; bullets: Text[] }>,

  specializations: [
    { name: "Machine Learning Summer School", detail: { es: "108 horas académicas — Universidad Católica San Pablo, Perú", en: "108 academic hours — Universidad Católica San Pablo, Peru" }, year: { es: "Ago. 2025", en: "Aug. 2025" } },
    { name: { es: "Conservación, Intervención, Adecuación y Refuerzo de Construcciones Existentes; Exploración, Diagnóstico e Instrumentación de Construcciones Existentes", en: "Conservation, Intervention, Adaptation and Strengthening of Existing Buildings; Exploration, Diagnosis and Instrumentation of Existing Buildings" }, detail: { es: "PUCP, Escuela de Posgrado", en: "PUCP, Graduate School" }, year: { es: "Ago. 2024", en: "Aug. 2024" } },
    { name: "Artificial Intelligence Summer Camp", detail: { es: "40 horas académicas — Facultad de Ingeniería, PUCP, Lima, Perú", en: "40 academic hours — Faculty of Engineering, PUCP, Lima, Peru" }, year: { es: "Mar. 2024", en: "Mar. 2024" } },
    { name: { es: "Evaluación del Riesgo de Desastres Originados por Fenómenos Naturales", en: "Assessment of Disaster Risk from Natural Hazards" }, detail: "Universidad Nacional Mayor de San Marcos (UNMSM)", year: { es: "Jul. 2022", en: "Jul. 2022" } },
  ] as Array<{ name: Text; detail: Text; year: Text }>,

  scholarships: [
    {
      name: "CDRI — Coalition for Disaster Resilient Infrastructure",
      issuer: "CDRI Research Grant",
      year: { es: "2025 – Presente", en: "2025 – Present" },
      description: { es: "Financiamiento del proyecto GTEM (Global Tsunami Evacuation Model) en colaboración con Tohoku University y PUCP.", en: "Funding for the GTEM project (Global Tsunami Evacuation Model) in collaboration with Tohoku University and PUCP." },
    },
    {
      name: { es: "Financiamiento CONCYTEC", en: "CONCYTEC Funding" },
      issuer: "Consejo Nacional de Ciencia, Tecnología e Innovación Tecnológica",
      year: "2023 – 2025",
      description: { es: "Financiamiento para estudios de Maestría en Gestión de Riesgos Naturales en PUCP y tesis sobre evacuación peatonal con reinforcement learning.", en: "Funding for Master's studies in Natural Hazard Risk Management at PUCP and a thesis on pedestrian evacuation with reinforcement learning." },
    },
    {
      name: "Beca 18 — PRONABEC",
      issuer: { es: "Gobierno del Perú", en: "Government of Peru" },
      year: "2015 – 2020",
      description: { es: "Beca completa de pregrado para estudios de Ingeniería Civil en la Universidad San Ignacio de Loyola.", en: "Full undergraduate scholarship for Civil Engineering studies at Universidad San Ignacio de Loyola." },
    },
  ] as Array<{ name: Text; issuer: Text; year: Text; description: Text }>,

  awards: [
    {
      name: { es: "1er Puesto — Mención Sobresaliente", en: "Ranked 1st — Outstanding Distinction" },
      issuer: "Pontificia Universidad Católica del Perú (PUCP)",
      year: "2025",
      description: { es: "Primer puesto de la promoción en la Maestría en Ingeniería Civil con mención en Gestión de Riesgos Naturales.", en: "Ranked first in class in the Master's in Civil Engineering with a specialization in Natural Hazard Risk Management." },
    },
    {
      name: { es: "Proyecto de investigación seleccionado", en: "Selected research project" },
      issuer: "",
      year: "2024",
      description: { es: "Evaluación de la resiliencia para mejorar la gobernanza del riesgo de desastres frente a eventos multipeligro en el balneario de Ancón.", en: "Resilience assessment to improve disaster risk governance against multi-hazard events in the seaside district of Ancón." },
    },
    {
      name: { es: "Investigación seleccionada", en: "Selected research" },
      issuer: "Academic Dialogues: Science Contributions to Our Climate Challenge, 2nd Edition",
      year: "2021",
      description: "",
    },
    {
      name: { es: "Premio a la Excelencia Universitaria", en: "University Excellence Award" },
      issuer: "American Concrete Institute — ACI International",
      year: "2020",
      description: { es: "Por su destacada labor como Vicepresidente del Capítulo Estudiantil ACI USIL.", en: "For his outstanding work as Vice President of the ACI USIL Student Chapter." },
    },
    {
      name: { es: "Tesis con Mención Sobresaliente", en: "Thesis with Outstanding Distinction" },
      issuer: "Universidad San Ignacio de Loyola (USIL)",
      year: "2020",
      description: { es: "Tesis de pregrado en Ingeniería Civil reconocida con la más alta distinción.", en: "Undergraduate thesis in Civil Engineering recognized with the highest distinction." },
    },
  ] as Array<{ name: Text; issuer: Text; year: string; description: Text }>,

  skills: [
    { es: "Evaluación Estructural", en: "Structural Assessment" },
    { es: "Ensayos No Destructivos", en: "Non-Destructive Testing" },
    { es: "Gestión de Riesgos", en: "Risk Management" },
    "Agent-Based Modeling",
    "Reinforcement Learning",
    "Machine Learning",
    "Python",
    "Matlab",
    "ETABS",
    "SAP2000",
    "DIANA FEA",
    "Abaqus FEA",
  ] as Text[],

  languages: [
    { name: { es: "Castellano", en: "Spanish" }, level: { es: "Nativo", en: "Native" } },
    { name: { es: "Inglés", en: "English" }, level: { es: "Avanzado (lectura) · Intermedio (conversación)", en: "Advanced (reading) · Intermediate (conversation)" } },
  ] as Array<{ name: Text; level: Text }>,
};
