export interface Project {
	name: string;
	title?: string;
	description?: string;
	language?: string;
	icon?: string;
	screenshot?: string;
	homepage?: string;
	docker?: string;
	mirror?: string;
	docs?: string;
	crate?: string;
	color?: string;
}

export interface Social {
	name: string;
	icon: string;
	tone: string;
	link: string;
	user: string;
	noAt?: boolean;
}

export interface Link {
	href: string;
	text: string;
}

declare const config: {
	githubUser: string;
	fullName: string;
	projects: Project[];
	socials: Social[];
	links: Link[];
};

export default config;
