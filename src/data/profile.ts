import type { Lang } from '../i18n/ui';

type Localized<T = string> = Record<Lang, T>;

export const profile = {
	name: 'S. Tony ADJI ADJI',
	shortName: 'Tony Adji',
	email: 'tonysimonadji@gmail.com',
	github: 'https://github.com/tonyadji',
	linkedin: 'https://www.linkedin.com/in/tony-adji/',
};

export interface Experience {
	role: Localized;
	company: string;
	url?: string;
	client?: string;
	location: Localized;
	start: string; // YYYY-MM
	end?: string; // undefined = present
	context: Localized;
	highlights: Localized<string[]>;
	stack: string[];
}

export const experiences: Experience[] = [
	{
		role: { en: 'Senior Backend Engineer', fr: 'Ingénieur Backend Senior' },
		company: 'Studely Finance',
		location: { en: 'Remote', fr: 'Remote' },
		start: '2023-12',
		context: {
			en: 'Fintech providing financial services for international student mobility.',
			fr: 'Fintech proposant des services financiers pour la mobilité étudiante internationale.',
		},
		highlights: {
			en: [
				'Architected a Server-Driven UI (SDUI) engine controlling mobile interfaces from backend APIs, removing iOS/Android inconsistencies and client-side technical debt.',
				'Engineered an event-driven architecture with Amazon EventBridge and SQS to decouple services and process critical financial data asynchronously.',
				'Integrated external KYC providers for real-time identity verification.',
				'Led the refactoring of legacy systems into a new backend based on DDD and Clean Architecture.',
				'Optimized CI/CD with GitLab CI and ArgoCD, deploying containerized services to Kubernetes.',
				'Mentored junior developers on TDD (JUnit 5, Mockito) and the move to microservices.',
			],
			fr: [
				'Conception d’un moteur Server-Driven UI (SDUI) pilotant les interfaces mobiles depuis les API backend, supprimant les incohérences iOS/Android et la dette côté client.',
				'Mise en place d’une architecture événementielle avec Amazon EventBridge et SQS pour découpler les services et traiter les données financières critiques en asynchrone.',
				'Intégration de fournisseurs KYC externes pour la vérification d’identité en temps réel.',
				'Pilotage de la refonte du legacy vers un nouveau backend basé sur le DDD et la Clean Architecture.',
				'Optimisation de la CI/CD avec GitLab CI et ArgoCD, déploiement de services conteneurisés sur Kubernetes.',
				'Mentorat de développeurs juniors sur le TDD (JUnit 5, Mockito) et la migration vers les microservices.',
			],
		},
		stack: ['Java 17', 'Spring Boot', 'SDUI', 'AWS EventBridge', 'AWS SQS', 'Kubernetes', 'ArgoCD', 'MongoDB', 'Elasticsearch'],
	},
	{
		role: { en: 'Backend Engineer', fr: 'Ingénieur Backend' },
		company: 'Accenture',
		client: 'AXA Juridica',
		location: { en: 'Mauritius', fr: 'Maurice' },
		start: '2022-07',
		end: '2023-11',
		context: {
			en: 'Cloud-native insurance platform for legal protection contracts.',
			fr: 'Plateforme d’assurance cloud-native pour des contrats de protection juridique.',
		},
		highlights: {
			en: [
				'Developed core Java 17 / Spring Boot microservices automating premium calculation and contract lifecycle management.',
				'Implemented event-driven patterns with Apache Kafka for consistent, scalable asynchronous communication.',
				'Enforced quality with TDD (JUnit 5, Mockito) and BDD with Cucumber.',
				'Translated complex insurance regulations into technical specifications with Product Owners.',
				'Conducted technical interviews and onboarded new joiners on the architecture.',
			],
			fr: [
				'Développement de microservices Java 17 / Spring Boot automatisant le calcul des primes et le cycle de vie des contrats.',
				'Mise en œuvre de patterns événementiels avec Apache Kafka pour une communication asynchrone cohérente et scalable.',
				'Qualité garantie par le TDD (JUnit 5, Mockito) et le BDD avec Cucumber.',
				'Traduction de réglementations d’assurance complexes en spécifications techniques avec les Product Owners.',
				'Entretiens techniques de recrutement et accompagnement des nouveaux arrivants sur l’architecture.',
			],
		},
		stack: ['Java 17', 'Spring Boot', 'Apache Kafka', 'Azure', 'Microservices', 'Elasticsearch', 'Cucumber', 'SonarQube'],
	},
	{
		role: { en: 'Backend Developer', fr: 'Développeur Backend' },
		company: 'United Finance',
		location: { en: 'Cameroon', fr: 'Cameroun' },
		start: '2020-09',
		end: '2021-06',
		context: {
			en: 'Digital transformation of banking services for a major financial institution.',
			fr: 'Transformation digitale des services bancaires d’une grande institution financière.',
		},
		highlights: {
			en: [
				'Built secure Spring Boot microservices automating loan origination, including credit risk analysis and decision engines.',
				'Designed the backend of a customer-support chatbot (API and back-office) to reduce ticket volume.',
				'Set up GitLab CI pipelines from scratch with automated unit and integration tests.',
				'Secured API endpoints with Spring Security (OAuth2 / JWT).',
			],
			fr: [
				'Développement de microservices Spring Boot sécurisés automatisant l’octroi de crédit, dont l’analyse de risque et les moteurs de décision.',
				'Conception du backend d’un chatbot de support client (API et back-office) pour réduire le volume de tickets.',
				'Mise en place de pipelines GitLab CI avec tests unitaires et d’intégration automatisés.',
				'Sécurisation des API avec Spring Security (OAuth2 / JWT).',
			],
		},
		stack: ['Java 11', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'MySQL', 'PostgreSQL', 'GitLab CI', 'Docker'],
	},
	{
		role: { en: 'Fullstack Developer', fr: 'Développeur Fullstack' },
		company: 'Brain-Booster',
		location: { en: 'Cameroon', fr: 'Cameroun' },
		start: '2018-07',
		end: '2020-08',
		context: {
			en: 'Enterprise social network improving internal corporate communication.',
			fr: 'Réseau social d’entreprise pour améliorer la communication interne.',
		},
		highlights: {
			en: [
				'Developed the instant messaging module: real-time communication, persistence and history with MongoDB and Java.',
				'Implemented core microservices (user profiles, content management) following the solution architect’s design.',
				'Integrated third-party APIs: cloud storage, payment gateways and push notifications.',
				'Maintained the stack and resolved production issues.',
			],
			fr: [
				'Développement du module de messagerie instantanée : temps réel, persistance et historique avec MongoDB et Java.',
				'Implémentation de microservices clés (profils, gestion de contenu) selon la conception de l’architecte solution.',
				'Intégration d’API tierces : stockage cloud, passerelles de paiement et notifications push.',
				'Maintenance de la plateforme et résolution d’incidents en production.',
			],
		},
		stack: ['Java 11', 'Spring Boot', 'MongoDB', 'MySQL', 'REST', 'Jenkins'],
	},
];

export const skillGroups: { title: Localized; items: string[] }[] = [
	{
		title: { en: 'Core backend', fr: 'Backend' },
		items: ['Java 17+', 'Java EE', 'Spring Boot', 'Spring MVC', 'Spring Security', 'JPA / Hibernate', 'JUnit', 'Mockito'],
	},
	{
		title: { en: 'Architecture & design', fr: 'Architecture & conception' },
		items: ['Microservices', 'REST APIs', 'Domain-Driven Design', 'Clean Architecture', 'TDD', 'System Design', 'Event-Driven Architecture'],
	},
	{
		title: { en: 'Data & messaging', fr: 'Données & messaging' },
		items: ['Amazon EventBridge', 'Amazon SQS', 'Apache Kafka', 'RabbitMQ', 'PostgreSQL', 'MySQL', 'MongoDB', 'Neo4j', 'Elasticsearch'],
	},
	{
		title: { en: 'DevOps, cloud & tools', fr: 'DevOps, cloud & outils' },
		items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'ArgoCD', 'GitLab CI', 'Jenkins', 'Maven', 'Git (Gitflow)'],
	},
];

export const certifications = {
	earned: [
        { name: 'ServiceNow Certified Implementations Specialist - Customer Service Management', year: 2026 },
		{ name: 'ServiceNow Certified Application Developer', year: 2023 },
		{ name: 'ServiceNow Certified System Administrator', year: 2022 },
	],
	goals: [
		{ name: 'AWS Certified Solutions Architect – Professional' },
		{ name: 'AWS Certified Generative AI Developer – Professional' },
	],
};

export const education = {
	degree: { en: 'IT Engineering Degree — Software Engineering', fr: 'Diplôme d’ingénieur informatique — Génie logiciel' },
	school: 'African Institute of Computer Sciences (AICS)',
	location: { en: 'Yaoundé, Cameroon', fr: 'Yaoundé, Cameroun' },
	years: '2014 – 2017',
};

export const spokenLanguages: { name: Localized; level: Localized }[] = [
	{ name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Langue maternelle' } },
	{ name: { en: 'English', fr: 'Anglais' }, level: { en: 'Full professional', fr: 'Professionnel complet' } },
	{ name: { en: 'Chinese', fr: 'Chinois' }, level: { en: 'Beginner (HSK2)', fr: 'Débutant (HSK2)' } },
];
