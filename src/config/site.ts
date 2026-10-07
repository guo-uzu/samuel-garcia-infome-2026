export type ResourceStatus = 'coming-soon' | 'ready';

export interface ResourceLink {
	status: ResourceStatus;
	url: string | null;
}

export interface SocialLink extends ResourceLink {
	label: string;
}

export interface NavLink {
	href: string;
	label: string;
}

export const siteConfig = {
	lang: 'es-MX',
  title: 'Samuel García — Quinto Informe',
	favicon: "/nl-logo-orange.svg",
	description:
		'Quinto Informe de Gobierno de Samuel García. Conoce los resultados y el avance de Nuevo León: seguridad, movilidad, agua, salud y más.',
	url: 'https://informenuevoleon2026.mx',
	// nav: main menu links in display order. Add one line per new report page.
	nav: [
		{ href: '/proyectos/seguridad', label: 'Seguridad' },
		{ href: '/proyectos/movilidad', label: 'Movilidad' },
		{ href: '/proyectos/agua', label: 'Agua' },
		{ href: '/proyectos/salud', label: 'Salud' },
		{ href: '/proyectos/ayudamos', label: 'Ayudamos' },
		{ href: '/proyectos/capullos', label: 'Capullos' },
		{ href: '/proyectos/espacios-publicos', label: 'Espacios públicos' },
		{ href: '/proyectos/economia', label: 'Economía' },
		{ href: '/proyectos/medio-ambiente', label: 'Medio ambiente' },
	] satisfies readonly NavLink[],
	video: {
		status: 'coming-soon',
		url: null,
		poster: null,
	} satisfies ResourceLink & { poster: string | null },
	download: {
		status: 'coming-soon',
		url: null,
	} satisfies ResourceLink,
	social: {
		facebook: {
			label: 'Facebook',
			status: 'ready',
			url: 'https://www.facebook.com/gobiernonuevoleon',
		} satisfies SocialLink,
		instagram: {
			label: 'Instagram',
			status: 'ready',
			url: 'https://www.instagram.com/nuevoleonmx/',
		} satisfies SocialLink,
		x: {
			label: 'X',
			status: 'ready',
			url: 'https://x.com/nuevoleon',
		} satisfies SocialLink,
	},
} as const;

export type SiteConfig = typeof siteConfig;
