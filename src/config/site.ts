export type ResourceStatus = 'coming-soon' | 'ready';

export interface ResourceLink {
	status: ResourceStatus;
	url: string | null;
}

export interface SocialLink extends ResourceLink {
	label: string;
}

export const siteConfig = {
	lang: 'es-MX',
	title: 'Samuel García — Quinto Informe',
	description:
		'Quinto Informe de Gobierno de Samuel García. Conoce los resultados y el avance de Nuevo León: seguridad, movilidad, agua, salud y más.',
	url: 'https://informenuevoleon2026.mx',
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
			status: 'coming-soon',
			url: null,
		} satisfies SocialLink,
		instagram: {
			label: 'Instagram',
			status: 'coming-soon',
			url: null,
		} satisfies SocialLink,
		x: {
			label: 'X',
			status: 'coming-soon',
			url: null,
		} satisfies SocialLink,
	},
} as const;

export type SiteConfig = typeof siteConfig;
