export const languages = { en: 'English', fr: 'Français' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
	en: {
		'meta.title': 'Tony Adji — Senior Backend Engineer',
		'meta.description':
			'Senior Backend Engineer with 7+ years in Fintech and Insurance. Java, Spring Boot, DDD, event-driven architectures and AWS.',
		'nav.about': 'About',
		'nav.experience': 'Experience',
		'nav.skills': 'Skills',
		'nav.projects': 'Projects',
		'nav.certifications': 'Certifications',
		'nav.contact': 'Contact',
		'theme.toggle': 'Toggle dark mode',
		'hero.greeting': 'Hi, I’m',
		'hero.role': 'Senior Backend Engineer',
		'hero.pitch':
			'I design and build scalable, secure backends for Fintech and Insurance — with Java, Spring Boot, Domain-Driven Design and event-driven architectures on AWS.',
		'hero.cta.contact': 'Get in touch',
		'hero.cta.projects': 'See my projects',
		'hero.location': 'Open to relocation',
		'about.title': 'About me',
		'about.p1':
			'Senior Backend Engineer with 7+ years of experience in the Fintech and Insurance sectors. I specialize in building scalable microservices and secure architectures with Java and Spring Boot.',
		'about.p2':
			'Passionate about software craftsmanship, I apply Domain-Driven Design and Clean Architecture to turn complex business rules into maintainable systems. I enjoy mentoring, reading about DDD and Clean Code, and playing chess.',
		'about.education': 'Education',
		'about.languages': 'Languages',
		'experience.title': 'Experience',
		'experience.present': 'Present',
		'experience.stack': 'Stack',
		'skills.title': 'Skills',
		'projects.title': 'Personal projects',
		'projects.intro': 'Side projects where I explore architecture, security and observability end to end.',
		'projects.details': 'Read more',
		'projects.source': 'Source code',
		'projects.back': 'Back to projects',
		'status.wip': 'Work in progress',
		'status.active': 'Active',
		'certs.title': 'Certifications',
		'certs.earned': 'Earned',
		'certs.goals': 'Currently preparing',
		'certs.inProgress': 'In progress',
		'contact.title': 'Contact',
		'contact.text':
			'Looking for a backend engineer for a high-impact team? I’m open to new opportunities and relocation — let’s talk.',
		'contact.email': 'Send an email',
		'footer.built': 'Built with Astro.',
		'404.title': 'Page not found',
		'404.back': 'Back to home',
	},
	fr: {
		'meta.title': 'Tony Adji — Ingénieur Backend Senior',
		'meta.description':
			'Ingénieur Backend Senior, 7+ ans d’expérience en Fintech et Assurance. Java, Spring Boot, DDD, architectures événementielles et AWS.',
		'nav.about': 'À propos',
		'nav.experience': 'Expérience',
		'nav.skills': 'Compétences',
		'nav.projects': 'Projets',
		'nav.certifications': 'Certifications',
		'nav.contact': 'Contact',
		'theme.toggle': 'Basculer le mode sombre',
		'hero.greeting': 'Bonjour, je suis',
		'hero.role': 'Ingénieur Backend Senior',
		'hero.pitch':
			'Je conçois et développe des backends scalables et sécurisés pour la Fintech et l’Assurance — avec Java, Spring Boot, le Domain-Driven Design et des architectures événementielles sur AWS.',
		'hero.cta.contact': 'Me contacter',
		'hero.cta.projects': 'Voir mes projets',
		'hero.location': 'Ouvert à la relocalisation',
		'about.title': 'À propos',
		'about.p1':
			'Ingénieur Backend Senior avec plus de 7 ans d’expérience dans les secteurs de la Fintech et de l’Assurance. Je suis spécialisé dans la conception de microservices scalables et d’architectures sécurisées avec Java et Spring Boot.',
		'about.p2':
			'Passionné par le software craftsmanship, j’applique le Domain-Driven Design et la Clean Architecture pour transformer des règles métier complexes en systèmes maintenables. J’aime transmettre, lire sur le DDD et le Clean Code, et jouer aux échecs.',
		'about.education': 'Formation',
		'about.languages': 'Langues',
		'experience.title': 'Expérience',
		'experience.present': 'Aujourd’hui',
		'experience.stack': 'Stack',
		'skills.title': 'Compétences',
		'projects.title': 'Projets personnels',
		'projects.intro': 'Des projets où j’explore l’architecture, la sécurité et l’observabilité de bout en bout.',
		'projects.details': 'En savoir plus',
		'projects.source': 'Code source',
		'projects.back': 'Retour aux projets',
		'status.wip': 'En cours',
		'status.active': 'Actif',
		'certs.title': 'Certifications',
		'certs.earned': 'Obtenues',
		'certs.goals': 'En préparation',
		'certs.inProgress': 'En cours',
		'contact.title': 'Contact',
		'contact.text':
			'Vous cherchez un ingénieur backend pour une équipe à fort impact ? Je suis ouvert à de nouvelles opportunités et à la relocalisation — parlons-en.',
		'contact.email': 'Envoyer un email',
		'footer.built': 'Construit avec Astro.',
		'404.title': 'Page introuvable',
		'404.back': 'Retour à l’accueil',
	},
} as const;

export type UiKey = keyof (typeof ui)['en'];

export function getLangFromUrl(url: URL): Lang {
	const [, first] = url.pathname.split('/');
	return first in ui ? (first as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
	return (key: UiKey) => ui[lang][key] ?? ui[defaultLang][key];
}
