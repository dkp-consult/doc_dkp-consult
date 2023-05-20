export const SITE = {
	title: 'dkp-consult - doc',
	description: 'Snippets, ressources, liens et autres choses utiles. Le but est de centraliser toutes les ressources utilisées régulièrement.',
	defaultLanguage: 'fr-BE',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	French: 'fr',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/dkp-consult/doc.dkp-consult/tree/main`;

// dkp : no community invite needed 
export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information. dkp: need to change search method
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	fr: {
		'Thèmes': [
			{ text: 'HTML', link: 'fr/HTML' },
			{ text: 'CSS', link: 'fr/CSS' },
			{ text: 'Javascript', link: 'fr/Javascript' },
			{ text: 'GitHub', link: 'fr/GitHub' },
			{ text: 'Linux', link: 'fr/Linux' },
		],
		'Another Section': [{ text: 'Page 4', link: 'fr/page-4' }],
	},
};
