export interface Project {
	id?: number;
	name: string;
	user?: string;
	url?: string;
	description?: string;
	isFork?: boolean;
	createdAt?: string;
	updatedAt?: string;
	homepage?: string;
	language?: string;
	license?: string;
	size?: number;
	stars?: number;
	forks?: number;
	issues?: number;
	topics?: string[];
	thumbnail?: string;
	hidden?: boolean;
	featured?: boolean;
	archived?: boolean;

	title?: string;
	icon?: string;
	emoji?: string;
	has_pages?: boolean;
}

export interface Mirror {
	id: number;
	name: string;
	full_name: string;
	description: string;
	avatar_url: string;
	language: string;
	html_url: string;
	website: string;
	stars_count: number;
	created_at: string;
	updated_at: string;
}

export interface GitHubRepository {
	id: number;
	name: string;
	full_name: string;
	owner: {
		login: string;
		id: number;
		avatar_url: string;
		url: string;
	};
	topics: string[];
	private: boolean;
	html_url: string;
	description: string | null;
	fork: boolean;
	url: string;
	created_at: string; // ISO8601 format
	updated_at: string; // ISO8601 format
	pushed_at: string; // ISO8601 format
	git_url: string;
	ssh_url: string;
	clone_url: string;
	svn_url: string;
	homepage: string | null;
	size: number;
	stargazers_count: number;
	watchers_count: number;
	language: string | null;
	has_issues: boolean;
	has_projects: boolean;
	has_downloads: boolean;
	has_wiki: boolean;
	has_pages: boolean;
	forks_count: number;
	mirror_url: string | null;
	archived: boolean;
	disabled: boolean;
	open_issues_count: number;
	license: {
		key: string;
		name: string;
		spdx_id: string | null;
		url: string | null;
		node_id: string;
	} | null;
	forks: number;
	open_issues: number;
	watchers: number;
	default_branch: string;
}
