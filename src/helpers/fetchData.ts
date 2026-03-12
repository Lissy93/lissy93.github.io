import { env } from '$env/dynamic/private';

import type { Project } from '../types/Project';
import { findEmoji, convertGhResponse } from './attributes';
import config from '../config';

export const makeProjectList = async (ghResponse: unknown): Promise<Project[]> => {
	if (!ghResponse || !Array.isArray(ghResponse)) return [];

	// Update each project found in config with GitHub data
	return config.projects
		.map((project: Project) => {
			// Find the project in the GitHub response
			const ghRepoData =
				ghResponse.find(
					(ghProject: Project) =>
						ghProject?.name?.toLocaleLowerCase() === project.name.toLocaleLowerCase()
				) || {};
			// Get the data we need from the GitHub response
			const repoData = convertGhResponse(ghRepoData);
			// Some additional stuff derived from existing data
			const computedExtras = {
				emoji: findEmoji(repoData.description),
				title: repoData.name
			};
			// Combine project config with GitHub data
			return { ...repoData, ...computedExtras, ...project };
		})
		.sort((a, b) => {
			return (b.stars ?? 0) - (a.stars ?? 0);
		});
};

export async function load({ fetch }: { fetch: typeof globalThis.fetch }) {
	const githubToken = env.GITHUB_TOKEN;
	const githubApiUrl = `https://api.github.com/users/${config.githubUser}/repos?per_page=100`;
	const githubRequest: RequestInit = {
		headers: githubToken ? { Authorization: `Bearer ${githubToken}` } : undefined
	};

	let repos: Project[] = [];
	let pageUrl: string | null = githubApiUrl;

	while (pageUrl) {
		const response: Response = await fetch(pageUrl, githubRequest);
		if (!response.ok) {
			throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
		}
		const newRepos = await response.json();
		repos = repos.concat(newRepos);

		const linkHeader: string | null = response.headers.get('Link');
		if (linkHeader) {
			const matches: RegExpMatchArray | null = linkHeader.match(/<([^>]+)>;\s*rel="next"/);
			pageUrl = matches ? matches[1] : null;
		} else {
			pageUrl = null;
		}
	}

	return { repos: await makeProjectList(repos) };
}
