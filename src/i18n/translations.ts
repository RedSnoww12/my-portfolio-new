const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "A propos",
      skills: "Competences",
      projects: "Projets",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      downloadCv: "Mon CV",
    },
    stats: {
      years: "Annees d'experience",
      projects: "Projets realises",
      technologies: "Technologies maitrisees",
      companies: "Entreprises",
    },
    about: {
      subtitle: "A propos",
      title: "Mon profil",
      frontend: "Front-End",
      frontendDesc: "React, React Native, Angular, TypeScript",
      backend: "Back-End",
      backendDesc: "Java 21, Spring Boot, Spring Security, JPA",
      devops: "DevOps",
      devopsDesc: "Docker, Kubernetes, CI/CD, Monitoring",
      methods: "Methodologies",
      methodsDesc: "Scrum, TDD, Clean Code, SOLID, BDD",
    },
    skills: {
      subtitle: "Competences",
      title: "Stack technique",
      all: "Toutes",
      categories: {
        languages: "Langages",
        frameworks: "Frameworks",
        devops: "DevOps & CI/CD",
        databases: "Bases de donnees",
        methods: "Methodologies",
        tools: "Outils",
      },
    },
    projects: {
      subtitle: "Projets",
      title: "Realisations techniques",
    },
    experience: {
      subtitle: "Experience",
      title: "Parcours professionnel",
    },
    languages: {
      subtitle: "Langues",
      title: "Langues parlees",
    },
    contact: {
      subtitle: "Contact",
      title: "Travaillons ensemble",
      description: "Interesse par mon profil ? N'hesitez pas a me contacter pour discuter de vos projets ou opportunites.",
    },
    footer: {
      rights: "Tous droits reserves.",
    },
    notFound: {
      message: "Oups, cette page n'existe pas.",
      back: "Retour a l'accueil",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      downloadCv: "My Resume",
    },
    stats: {
      years: "Years of experience",
      projects: "Projects completed",
      technologies: "Technologies mastered",
      companies: "Companies",
    },
    about: {
      subtitle: "About",
      title: "My profile",
      frontend: "Front-End",
      frontendDesc: "React, React Native, Angular, TypeScript",
      backend: "Back-End",
      backendDesc: "Java 21, Spring Boot, Spring Security, JPA",
      devops: "DevOps",
      devopsDesc: "Docker, Kubernetes, CI/CD, Monitoring",
      methods: "Methodologies",
      methodsDesc: "Scrum, TDD, Clean Code, SOLID, BDD",
    },
    skills: {
      subtitle: "Skills",
      title: "Tech stack",
      all: "All",
      categories: {
        languages: "Languages",
        frameworks: "Frameworks",
        devops: "DevOps & CI/CD",
        databases: "Databases",
        methods: "Methodologies",
        tools: "Tools",
      },
    },
    projects: {
      subtitle: "Projects",
      title: "Technical achievements",
    },
    experience: {
      subtitle: "Experience",
      title: "Professional background",
    },
    languages: {
      subtitle: "Languages",
      title: "Spoken languages",
    },
    contact: {
      subtitle: "Contact",
      title: "Let's work together",
      description: "Interested in my profile? Feel free to contact me to discuss your projects or opportunities.",
    },
    footer: {
      rights: "All rights reserved.",
    },
    notFound: {
      message: "Oops, this page doesn't exist.",
      back: "Back to home",
    },
  },
};

export type Locale = keyof typeof translations;
export type Translations = (typeof translations)[Locale];
export default translations;
