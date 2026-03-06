export const personalInfo = {
  name: "Sacha AMARA",
  title: "Developpeur Full-Stack Java / React & DevOps",
  bio: "5 ans d'experience en developpement applicatif Java et React, integration continue (CI/CD) et DevOps. Passionne par les principes SOLID, le Clean Code et le TDD, j'aime collaborer au sein d'equipes dynamiques pour relever des defis techniques et innover.",
  email: "amarasacha2@gmail.com",
  github: "https://github.com/RedSnoww12",
  linkedin: "https://www.linkedin.com/in/sacha-amara-pirollo-77320b1a8/",
  location: "Paris, France",
};

export interface Skill {
  name: string;
  level: number; // 1-5
  category: "languages" | "frameworks" | "devops" | "databases" | "methods" | "tools";
}

export const skills: Skill[] = [
  // Languages
  { name: "Java 21", level: 5, category: "languages" },
  { name: "TypeScript", level: 5, category: "languages" },
  { name: "HTML5 & CSS3", level: 4, category: "languages" },

  // Frameworks
  { name: "Spring Boot / Security", level: 4, category: "frameworks" },
  { name: "React JS", level: 4, category: "frameworks" },
  { name: "React Native", level: 4, category: "frameworks" },
  { name: "Angular", level: 3, category: "frameworks" },
  { name: "Spring Cloud Eureka", level: 4, category: "frameworks" },
  { name: "Hibernate / JPA", level: 4, category: "frameworks" },

  // DevOps
  { name: "Docker", level: 4, category: "devops" },
  { name: "Kubernetes", level: 4, category: "devops" },
  { name: "GitLab CI/CD", level: 4, category: "devops" },
  { name: "Azure Pipeline", level: 4, category: "devops" },
  { name: "Ansible", level: 4, category: "devops" },
  { name: "Terraform", level: 3, category: "devops" },
  { name: "Helm", level: 3, category: "devops" },

  // Databases
  { name: "MySQL", level: 4, category: "databases" },
  { name: "MongoDB", level: 4, category: "databases" },

  // Methods
  { name: "SAFe", level: 4, category: "methods" },
  { name: "Scrum / Agile", level: 5, category: "methods" },
  { name: "TDD", level: 4, category: "methods" },
  { name: "Clean Code / SOLID", level: 5, category: "methods" },
  { name: "BDD (Gherkin)", level: 4, category: "methods" },

  // Tools
  { name: "Prometheus", level: 4, category: "tools" },
  { name: "Grafana", level: 4, category: "tools" },
  { name: "Loki", level: 4, category: "tools" },
  { name: "SonarQube", level: 4, category: "tools" },
  { name: "RabbitMQ", level: 3, category: "tools" },
  { name: "Figma", level: 3, category: "tools" },
];

export const skillCategories: Record<string, string> = {
  languages: "Langages",
  frameworks: "Frameworks",
  devops: "DevOps & CI/CD",
  databases: "Bases de donnees",
  methods: "Methodologies",
  tools: "Outils",
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: "professional" | "project";
  description: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    company: "AXA France",
    role: "Developpeur Full-Stack Java/React & Scrum Master",
    period: "Sept. 2022 - Aujourd'hui",
    location: "Paris",
    type: "professional",
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
    type: "professional",
    description: [
      "Refonte d'un logiciel d'hypervision du peripherique parisien : migration d'une architecture monolithique vers une architecture microservices Angular/Spring Boot.",
      "Developpement d'un microservice de communication avec l'API du radar de voie reservee, assurant l'integration en temps reel des donnees de trafic.",
    ],
    skills: ["Java 17", "Spring Boot", "Angular", "API REST"],
  },
];

export interface Project {
  title: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
  github?: string;
}

export const projects: Project[] = [
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
];

export const education = {
  degree: "Master Architecte Logiciel & Developpeur d'Application (M2)",
  school: "ETNA Paris",
  period: "2022 - 2025",
  description: "3 ans d'alternance sur base de 3 semaines en entreprise sur projets.",
};

export interface Language {
  name: string;
  level: string;
  flag: string;
}

export const languages: Language[] = [
  { name: "Francais", level: "Natif", flag: "FR" },
  { name: "Anglais", level: "C1 - Autonome", flag: "EN" },
];
