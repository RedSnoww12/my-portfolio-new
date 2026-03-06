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
      title: "Developpeur Full-Stack Java / React & DevOps",
      bio: "5 ans d'experience en developpement applicatif Java et React, integration continue (CI/CD) et DevOps. Passionne par les principes SOLID, le Clean Code et le TDD, j'aime collaborer au sein d'equipes dynamiques pour relever des defis techniques et innover.",
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
      education: {
        degree: "Master Architecte Logiciel & Developpeur d'Application (M2)",
        school: "ETNA Paris",
        period: "2022 - 2025",
        description: "3 ans d'alternance sur base de 3 semaines en entreprise sur projets.",
      },
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
      items: [
        {
          title: "Quantum Motors",
          role: "Developpeur DevOps",
          period: "2025",
          description: [
            "Migration complete de l'infrastructure vers Docker/Kubernetes, standardisant les deploiements sur un cluster K8s.",
            "Installation automatisee d'une plateforme GitLab CI/CD (via Ansible) et deploiement de runners GitLab sur le cluster.",
            "Pipeline CI/CD complete (build, tests, analyse qualite, deploiement) avec strategie Blue/Green pour zero downtime.",
            "Stack de supervision PLG (Prometheus, Grafana, Loki) pour monitorer la performance de l'ecosysteme applicatif.",
          ],
          skills: ["Docker", "Kubernetes", "GitLab CI/CD", "Prometheus", "Grafana", "Loki", "Ansible"],
        },
        {
          title: "MyCloseShop",
          role: "Developpeur Principal Full-Stack",
          period: "2024 - Aujourd'hui",
          description: [
            "Application mobile de prise de rendez-vous en React Native avec interface moderne et intuitive.",
            "Backend en architecture microservices avec Java Spring Boot, APIs REST securisees (Spring Security, JWT).",
            "Persistance des donnees MySQL avec Hibernate/JPA et migrations versionnees via Flyway.",
            "Architecture cloud-ready avec decouverte de services Spring Cloud Eureka pour l'orchestration des microservices.",
          ],
          skills: ["React Native", "Java 21", "Spring Security", "JWT", "JPA", "MySQL", "Flyway", "AKS"],
          github: "https://github.com/RedSnoww12",
        },
      ],
    },
    experience: {
      subtitle: "Experience",
      title: "Parcours professionnel",
      items: [
        {
          company: "AXA France",
          role: "Developpeur Full-Stack Java/React & Scrum Master",
          period: "Sept. 2022 - Aujourd'hui",
          location: "Paris",
          description: [
            "Refonte des parcours de souscription en ligne en ReactJS 18 et Java 21 Spring Boot, ameliorant l'experience utilisateur et la maintenabilite du code.",
            "Deploiement d'applications conteneurisees sur OpenShift (CaaS) pour assurer la scalabilite et la fiabilite en production.",
            "Participation au cycle Agile Scrum : redaction des user stories, planification des sprints et suivi des ceremonies.",
            "Mise en place de tests BDD avec Gherkin et developpement pilote par les tests (TDD).",
            "Scrum Master par intermittence : animation des reunions Agile et facilitation de la collaboration entre les equipes IT et metiers.",
          ],
          skills: ["Java 21", "React", "Gherkin", "TDD", "SOLID", "Agile Scrum"],
        },
        {
          company: "SEMERU",
          role: "Developpeur Java Spring Boot",
          period: "Sept. 2020 - Sept. 2022",
          location: "Paris",
          description: [
            "Refonte d'un logiciel d'hypervision du peripherique parisien : migration d'une architecture monolithique vers une architecture microservices Angular/Spring Boot.",
            "Developpement d'un microservice de communication avec l'API du radar de voie reservee, assurant l'integration en temps reel des donnees de trafic.",
          ],
          skills: ["Java 17", "Spring Boot", "Angular", "API REST"],
        },
      ],
    },
    languages: {
      subtitle: "Langues",
      title: "Langues parlees",
      items: [
        { name: "Francais", level: "Natif", flag: "FR" },
        { name: "Anglais", level: "C1 - Autonome", flag: "EN" },
      ],
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
      title: "Full-Stack Java / React Developer & DevOps",
      bio: "5 years of experience in Java and React application development, continuous integration (CI/CD) and DevOps. Passionate about SOLID principles, Clean Code and TDD, I enjoy collaborating within dynamic teams to tackle technical challenges and innovate.",
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
      education: {
        degree: "Master's in Software Architecture & Application Development (M2)",
        school: "ETNA Paris",
        period: "2022 - 2025",
        description: "3-year work-study program with 3 weeks per month in-company on projects.",
      },
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
      items: [
        {
          title: "Quantum Motors",
          role: "DevOps Developer",
          period: "2025",
          description: [
            "Full infrastructure migration to Docker/Kubernetes, standardizing deployments on a K8s cluster.",
            "Automated GitLab CI/CD platform installation (via Ansible) and deployment of GitLab runners on the cluster.",
            "Complete CI/CD pipeline (build, tests, quality analysis, deployment) with Blue/Green deployment strategy for zero downtime.",
            "PLG monitoring stack (Prometheus, Grafana, Loki) to monitor application ecosystem performance.",
          ],
          skills: ["Docker", "Kubernetes", "GitLab CI/CD", "Prometheus", "Grafana", "Loki", "Ansible"],
        },
        {
          title: "MyCloseShop",
          role: "Lead Full-Stack Developer",
          period: "2024 - Present",
          description: [
            "Mobile appointment booking app built with React Native, offering a modern and intuitive user interface.",
            "Microservices backend with Java Spring Boot, providing secured REST APIs (Spring Security, JWT).",
            "MySQL data persistence with Hibernate/JPA and versioned database migrations via Flyway.",
            "Cloud-ready architecture with Spring Cloud Eureka service discovery for microservice orchestration.",
          ],
          skills: ["React Native", "Java 21", "Spring Security", "JWT", "JPA", "MySQL", "Flyway", "AKS"],
          github: "https://github.com/RedSnoww12",
        },
      ],
    },
    experience: {
      subtitle: "Experience",
      title: "Professional background",
      items: [
        {
          company: "AXA France",
          role: "Full-Stack Java/React Developer & Scrum Master",
          period: "Sep. 2022 - Present",
          location: "Paris",
          description: [
            "Redesign of online subscription journeys in ReactJS 18 and Java 21 Spring Boot, improving UX and code maintainability.",
            "Deployment of containerized applications on OpenShift (CaaS) to ensure scalability and production reliability.",
            "Agile Scrum cycle participation: writing user stories, sprint planning and ceremony follow-up.",
            "Implementation of BDD tests with Gherkin and test-driven development (TDD).",
            "Intermittent Scrum Master: leading Agile meetings and facilitating collaboration between IT and business teams.",
          ],
          skills: ["Java 21", "React", "Gherkin", "TDD", "SOLID", "Agile Scrum"],
        },
        {
          company: "SEMERU",
          role: "Java Spring Boot Developer",
          period: "Sep. 2020 - Sep. 2022",
          location: "Paris",
          description: [
            "Redesign of a Paris ring road hypervision software: migration from monolithic to Angular/Spring Boot microservices architecture.",
            "Development of a microservice for communication with the reserved lane radar API, ensuring real-time traffic data integration.",
          ],
          skills: ["Java 17", "Spring Boot", "Angular", "REST API"],
        },
      ],
    },
    languages: {
      subtitle: "Languages",
      title: "Spoken languages",
      items: [
        { name: "French", level: "Native", flag: "FR" },
        { name: "English", level: "C1 - Proficient", flag: "EN" },
      ],
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
