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
  name: "Jheyder Perez",
  // Cómo se muestra el nombre arriba a la izquierda: primera parte en negrita.
  shortName: { first: "Jheyder", last: "Perez" },
  url: "https://jheyderperez.com",

  title: {
    es: "Ingeniero Civil & Investigador",
    en: "Civil Engineer & Researcher",
  } as Text,

  // Una línea debajo del nombre en «Sobre mí».
  position: {
    es: "Doctorando en Ciencias de la Ingeniería · Pontificia Universidad Católica de Chile",
    en: "Ph.D. Student in Engineering Sciences · Pontificia Universidad Católica de Chile",
  } as Text,

  description: {
    es: "Ingeniero Civil e investigador en evacuación frente a tsunamis con modelos basados en agentes y reinforcement learning. Doctorando en la Pontificia Universidad Católica de Chile y CDRI Fellow en Tohoku University.",
    en: "Civil Engineer and researcher in tsunami evacuation with agent-based models and reinforcement learning. Ph.D. student at Pontificia Universidad Católica de Chile and CDRI Fellow at Tohoku University.",
  } as Text,

  accentColor: "#0F4C5C",
  highlightColor: "#14919B",

  social: {
    email: "jpereza61@estudiante.uc.cl",
    scholar: "https://scholar.google.com/citations?user=B-WX9P0AAAAJ&hl=es",
    researchgate: "https://www.researchgate.net/profile/Jheyder-Perez-Aguinaga-2",
    linkedin: "https://www.linkedin.com/in/jheyderperez/",
    whatsapp: "https://wa.me/51959066643",
    github: "https://github.com/jheyderperez",
  },

  // CV en PDF para descargar desde la pestaña CV. Si lo subes a public/
  // (p. ej. public/cv.pdf), escribe aquí "/cv.pdf". Vacío = no se muestra el botón.
  cvPdf: "/cv.pdf",

  // ─────────────────────────────── SOBRE MÍ ───────────────────────────────
  // Cada elemento de la lista es un párrafo.
  aboutMe: [
    {
      es: "Ingeniero Civil por la Universidad San Ignacio de Loyola, con Maestría en Ingeniería Civil con mención en Gestión de Riesgos Naturales por la Pontificia Universidad Católica del Perú (PUCP), donde obtuve el primer puesto con mención sobresaliente.",
      en: "Civil Engineer from Universidad San Ignacio de Loyola, with a Master's degree in Civil Engineering with a specialization in Natural Hazard Risk Management from the Pontificia Universidad Católica del Perú (PUCP), where I graduated first in my class with outstanding distinction.",
    },
    {
      es: "Actualmente soy estudiante de Doctorado en Ciencias de la Ingeniería en la Pontificia Universidad Católica de Chile, asistente de investigación en Tohoku University como CDRI Fellow y docente a tiempo parcial en la Universidad San Ignacio de Loyola, donde asesoro tesis de pregrado.",
      en: "I am currently a Ph.D. student in Engineering Sciences at Pontificia Universidad Católica de Chile, a Research Assistant at Tohoku University as a CDRI Fellow, and a part-time faculty member at Universidad San Ignacio de Loyola, where I advise undergraduate theses.",
    },
    {
      es: "Mi investigación se enfoca en sistemas de evacuación frente a tsunamis utilizando modelos basados en agentes y técnicas de reinforcement learning, con colaboraciones internacionales en Tohoku University (Japón) y la Universidad Técnica Federico Santa María (Chile).",
      en: "My research focuses on tsunami evacuation systems using agent-based models and reinforcement learning techniques, with international collaborations at Tohoku University (Japan) and Universidad Técnica Federico Santa María (Chile).",
    },
  ] as Text[],

  researchLines: [
    {
      title: { es: "Evaluación Estructural de Edificaciones Existentes", en: "Structural Assessment of Existing Buildings" },
      description: {
        es: "Patología, ensayos destructivos y no destructivos, potencial de corrosión y modelamiento estructural con fines de reparación y reforzamiento.",
        en: "Pathology, destructive and non-destructive testing, corrosion potential and structural modeling for repair and strengthening.",
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
      year: "2026",
      title: "Tsunami evacuation planning for Camana, Peru: insights from agent-based modeling",
      venue: "Natural Hazards, 122, Article 488",
      type: "journal",
      link: "https://link.springer.com/article/10.1007/s11069-026-08244-0",
    },
    {
      authors: "Perez J., León J., Moya L. & Ogueda-Oliva A.",
      year: "2025",
      title: "Análisis de evacuación frente a alerta de tsunami en Punta Arenas, Chile: proceso observado y simulación computacional",
      venue: { es: "Conferencia Internacional Ciudades Resilientes — Valparaíso, Chile", en: "International Conference on Resilient Cities — Valparaíso, Chile" } as Text,
      type: "conference",
      link: "",
    },
    {
      authors: "Perez J., Moya L., Ramirez J., Gonzales E., Mas E., Adriano B. & Koshimura S.",
      year: "2025",
      title: "Tsunami pedestrian evacuation simulation for Camaná, Peru: Perspectives for improving evacuation performance",
      venue: "E3S Web of Conferences, 651, 02011 — 17th Aceh International Workshop on Sustainable Tsunami Disaster Recovery",
      type: "conference",
      link: "https://www.e3s-conferences.org/articles/e3sconf/abs/2025/51/e3sconf_aiwest-dr2025_02011/e3sconf_aiwest-dr2025_02011.html",
    },
    {
      authors: "Perez J., Cabrera N. & Reza A.",
      year: "2025",
      title: "Preparedness and strengths in disaster risk management in Lurigancho-Chosica, Lima, Peru: Toward resilience of Lima Metropolitan",
      venue: "E3S Web of Conferences, 651, 03005 — 17th Aceh International Workshop on Sustainable Tsunami Disaster Recovery",
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
      year: "2021",
      title: "Propuesta para la evaluación de la resiliencia comunitaria frente a múltiples peligros en Lima",
      venue: { es: "Conferencia Internacional Ciudades Resilientes desde el Sur Global (virtual), Chile, p. 63", en: "International Conference on Resilient Cities from the Global South (virtual), Chile, p. 63" } as Text,
      type: "conference",
      link: "",
    },
    {
      authors: "Perez J.",
      year: "2025",
      title: "Diseño de planes de evacuación peatonal frente a tsunami mediante modelos basados en agentes y un algoritmo de machine learning en el balneario de Camaná, Arequipa, Perú",
      venue: {
        es: "Tesis de maestría — Pontificia Universidad Católica del Perú, Lima, Perú",
        en: "Master's thesis — Pontificia Universidad Católica del Perú, Lima, Peru",
      } as Text,
      type: "thesis",
      link: "https://hdl.handle.net/20.500.12404/31276",
    },
    {
      authors: "Perez J.",
      year: "2022",
      title: "Propuesta de indicadores cuantitativos para la evaluación de la resiliencia comunitaria frente a escenarios multiamenazas en asentamientos informales de Lima Metropolitana, Perú",
      venue: {
        es: "Investigación para optar el título de Ingeniero Civil — Universidad San Ignacio de Loyola, Lima, Perú",
        en: "Research to obtain the degree of Civil Engineer — Universidad San Ignacio de Loyola, Lima, Peru",
      } as Text,
      type: "thesis",
      link: "https://hdl.handle.net/20.500.14005/13005",
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

  // Coautores con página propia: su nombre en la lista de autores enlaza ahí.
  // Escribe el nombre tal como aparece en «authors» (p. ej. "Moya L.").
  coauthors: {
    "Moya L.": "https://sites.google.com/view/luismoya",
  } as Record<string, string>,

  // Presentaciones (charlas, ponencias). Los títulos van en su idioma original.
  talks: [
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
      year: "2022",
      title: "Lima Metropolitana: La metrópoli que, bajo un clima cambiante, debe buscar evaluar su resiliencia comunitaria frente a escenarios de múltiples peligros",
      venue: { es: "Policy Brief: Aportes de la ciencia a Nuestro Desafío Climático, Ministerio del Ambiente, 2.ª edición, Lima, Perú", en: "Policy Brief: Science Contributions to Our Climate Challenge, Ministry of the Environment of Peru, 2nd edition, Lima, Peru" },
    },
  ] as Array<{ year: string; title: string; venue: Text }>,

  // ─────────────────────────────── PROYECTOS ───────────────────────────────
  researchProjects: [
    {
      name: { es: "Modelo Global de Evacuación por Tsunami (GTEM)", en: "Global Tsunami Evacuation Model (GTEM)" },
      role: { es: "Asistente de investigación", en: "Research Assistant" },
      dateRange: "2025 – 2026",
      description: {
        es: "Sistemas complejos y modelos basados en agentes para un modelo global de evacuación por tsunami, como CDRI Fellow en Tohoku University, con la supervisión del Prof. Erick Mas y Luis Moya (PUCP).",
        en: "Complex systems and agent-based modeling for a global tsunami evacuation model, as a CDRI Fellow at Tohoku University, supervised by Prof. Erick Mas and Luis Moya (PUCP).",
      },
      tags: ["Agent-Based Modeling", "Python", "Tohoku University", "CDRI"],
      link: "https://regidirides.github.io/gtem/",
      links: [{ label: { es: "CDRI Fellowship", en: "CDRI Fellowship" }, url: "https://cdri.world/fellowship/inception-of-a-global-tsunami-evacuation-model/" }],
    },
    {
      name: { es: "Evacuación frente a tsunami en Punta Arenas, Chile", en: "Tsunami evacuation in Punta Arenas, Chile" },
      role: { es: "Pasante de investigación", en: "Research Intern" },
      dateRange: "2025",
      description: {
        es: "Intercambio de investigación de maestría en el Centro de Investigación para la Gestión Integrada del Riesgo de Desastres (CIGIDEN), Universidad Técnica Federico Santa María, Valparaíso: modelamiento de la evacuación con modelos basados en agentes y reinforcement learning, con la supervisión del Prof. Jorge León y Luis Moya.",
        en: "M.Sc. research exchange at the Research Center for Integrated Disaster Risk Management (CIGIDEN), Universidad Técnica Federico Santa María, Valparaíso: evacuation modeling with agent-based models and reinforcement learning, supervised by Prof. Jorge León and Luis Moya.",
      },
      tags: ["UTFSM", "CIGIDEN", "Agent-Based Modeling", "Reinforcement Learning"],
      link: "",
    },
    {
      name: { es: "Proyecto LAdERA — CONCYTEC", en: "LAdERA Project — CONCYTEC" },
      role: { es: "Asistente de investigación", en: "Research Assistant" },
      dateRange: "2024 – 2026",
      description: {
        es: "Análisis geoespacial de indicadores multidimensionales para la adaptación al cambio climático en ecosistemas urbanos, con la supervisión de la Prof. Sandra Santa-Cruz y Luis Moya. Financiado por el CONCYTEC, Pontificia Universidad Católica del Perú.",
        en: "Geospatial analysis of multidimensional indicators for climate change adaptation in urban ecosystems, supervised by Prof. Sandra Santa-Cruz and Luis Moya. Funded by CONCYTEC, Pontificia Universidad Católica del Perú.",
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
      link: "https://hdl.handle.net/20.500.12404/31276",
    },
  ] as Array<{ name: Text; role: Text; dateRange: Text; description: Text; tags: Text[]; link?: string; links?: Array<{ label: Text; url: string }> }>,

  // Proyectos de código con su repositorio en GitHub. La sección aparece sola
  // cuando agregas el primero. Ejemplo:
  //   { name: "mi-modelo", description: { es: "…", en: "…" }, tags: ["Python"], github: "https://github.com/jheyderperez/mi-modelo" },
  codeProjects: [
  ] as Array<{ name: Text; description: Text; tags: Text[]; github: string }>,

  // ─────────────────────────────── DOCENCIA ───────────────────────────────
  teaching: [
    {
      institution: "Universidad San Ignacio de Loyola (USIL)",
      role: { es: "Docente a tiempo parcial — 2026", en: "Part-time Faculty Member — 2026" },
      courses: [
        { name: { es: "Asesor de tesis de pregrado y miembro de jurado de sustentación", en: "Undergraduate thesis advisor and thesis defense committee member" }, terms: "2026", note: "" },
      ],
    },
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
      dateRange: "2026 – Presente",
      achievements: [{ es: "Beca VRIP — Pontificia Universidad Católica de Chile", en: "VRIP Scholarship — Pontificia Universidad Católica de Chile" }],
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
      company: "Universidad San Ignacio de Loyola (USIL)",
      title: { es: "Docente a tiempo parcial", en: "Part-time Faculty Member" },
      dateRange: "2026",
      bullets: [
        { es: "Asesor de tesis de pregrado y miembro de jurado de sustentación", en: "Undergraduate thesis advisor and thesis defense committee member" },
      ],
    },
    {
      company: "Tohoku University",
      title: { es: "Investigador visitante y asistente de investigación — CDRI Fellow", en: "Visiting Researcher and Research Assistant — CDRI Fellow" },
      dateRange: "2025 – 2026",
      bullets: [
        { es: "Sistemas complejos y modelos basados en agentes para el Global Tsunami Evacuation Model (GTEM), con la supervisión del Prof. Erick Mas y Luis Moya (PUCP)", en: "Complex systems and agent-based modeling for the Global Tsunami Evacuation Model (GTEM), supervised by Prof. Erick Mas and Luis Moya (PUCP)" },
      ],
    },
    {
      company: "Universidad Técnica Federico Santa María — CIGIDEN",
      title: { es: "Pasante de investigación", en: "Research Intern" },
      dateRange: "2025",
      bullets: [
        { es: "Modelamiento de la evacuación en Punta Arenas con modelos basados en agentes y reinforcement learning, con la supervisión del Prof. Jorge León y Luis Moya", en: "Evacuation modeling in Punta Arenas using agent-based modeling and reinforcement learning, supervised by Prof. Jorge León and Luis Moya" },
      ],
    },
    {
      company: "Pontificia Universidad Católica del Perú (PUCP)",
      title: { es: "Asistente de investigación — Proyecto LAdERA (CONCYTEC)", en: "Research Assistant — LAdERA Project (CONCYTEC)" },
      dateRange: "2024 – 2026",
      bullets: [
        { es: "Análisis geoespacial de indicadores multidimensionales para la adaptación al cambio climático en ecosistemas urbanos, con la supervisión de la Prof. Sandra Santa-Cruz y Luis Moya", en: "Geospatial analysis of multidimensional indicators for climate change adaptation in urban ecosystems, supervised by Prof. Sandra Santa-Cruz and Luis Moya" },
      ],
    },
    {
      company: "Pontificia Universidad Católica del Perú (PUCP)",
      title: { es: "Pre docente", en: "Teaching Assistant" },
      dateRange: "2023 – 2025",
      bullets: [
        { es: "Laboratorio de Materiales, Resistencia de Materiales e Introducción a la Ingeniería Civil", en: "Materials Laboratory, Strength of Materials and Introduction to Civil Engineering" },
      ],
    },
    {
      company: "Toward Resilience Corporation S.A.C.",
      title: { es: "CEO e ingeniero de proyectos", en: "CEO and Project Engineer" },
      dateRange: "2022 – 2026",
      bullets: [
        { es: "Evaluación estructural, patología, ensayos, reparación y reforzamiento, y gestión del riesgo de desastres", en: "Structural assessment, pathology, testing, repair, strengthening and disaster risk management" },
      ],
    },
    {
      company: "Universidad San Ignacio de Loyola (USIL)",
      title: { es: "Asistente académico y pre docente", en: "Academic Assistant and Teaching Assistant" },
      dateRange: "2022 – 2023",
      bullets: [
        { es: "Tecnología del Concreto, Proyecto de Ingeniería Civil y Seminario de Tesis", en: "Concrete Technology, Civil Engineering Project and Thesis Seminar" },
      ],
    },
    {
      company: "Scientia Concrete S.A.C.",
      title: { es: "Ingeniero estructural de proyectos", en: "Structural Project Engineer" },
      dateRange: "2020 – 2022",
      bullets: [
        { es: "Evaluación y rehabilitación de estructuras existentes mediante ensayos destructivos y no destructivos", en: "Evaluation and rehabilitation of existing structures through destructive and non-destructive testing" },
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
      name: "CDRI Fellowship — Coalition for Disaster Resilient Infrastructure",
      issuer: "CDRI",
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
      name: { es: "Beca VRIP", en: "VRIP Scholarship" },
      issuer: "Pontificia Universidad Católica de Chile",
      year: "2026",
      description: "",
    },
    {
      name: { es: "Seleccionado — Contrato Predoctoral FPI-UPM 2025", en: "Selected recipient — FPI-UPM 2025 Predoctoral Contract Grant" },
      issuer: "Universidad Politécnica de Madrid",
      year: "2026",
      description: "",
    },
    {
      name: { es: "1er Puesto — Mención Sobresaliente", en: "Ranked 1st — Outstanding Distinction" },
      issuer: "Pontificia Universidad Católica del Perú (PUCP)",
      year: "2025",
      description: { es: "Primer puesto de la promoción en la Maestría en Ingeniería Civil con mención en Gestión de Riesgos Naturales.", en: "Ranked first in class in the Master's in Civil Engineering with a specialization in Natural Hazard Risk Management." },
    },
    {
      name: { es: "Proyecto de investigación seleccionado", en: "Selected research project" },
      issuer: { es: "Centro de Estudios y Prevención de Desastres (PREDES)", en: "Center for Disaster Studies and Prevention (PREDES)" },
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
      year: "2019",
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
    "Julia",
    "Matlab",
    "C++",
    "NetLogo",
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
