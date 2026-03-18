import type { Project } from '../types/Project';
import { convertGhResponse } from './attributes';

type FetchFn = typeof fetch;

/**
 * Fetch GitHub repository details and convert the response.
 * Throws on failure — callers should catch if graceful degradation is needed.
 */
export async function fetchRepoDetails(
	owner: string,
	repo: string,
	fetchFn: FetchFn,
	token?: string
): Promise<Partial<Project>> {
	const url = `https://api.github.com/repos/${owner}/${repo}`;
	const headers: Record<string, string> = token ? { Authorization: `token ${token}` } : {};
	const response = await fetchFn(url, { headers });
	if (!response.ok) {
		throw new Error(`Failed to fetch repo details: ${response.status} ${response.statusText}`);
	}
	return convertGhResponse(await response.json());
}

/**
 * Fetch the raw README for a GitHub repository.
 * Throws on failure — callers should catch if graceful degradation is needed.
 */
export async function fetchReadme(
	owner: string,
	repo: string,
	fetchFn: FetchFn,
	token?: string
): Promise<string> {
	const url = `https://api.github.com/repos/${owner}/${repo}/readme`;
	const headers: Record<string, string> = {
		Accept: 'application/vnd.github.v3.raw',
		...(token ? { Authorization: `token ${token}` } : {})
	};
	const response = await fetchFn(url, { headers });
	if (!response.ok) {
		throw new Error(`Failed to fetch README: ${response.status} ${response.statusText}`);
	}
	return await response.text();
}

/**
 * Find project meta data by repository name.
 */
export function findRepoMeta(repoName: string, projects: Project[]): Project | undefined {
	return projects.find((p) => p.name === repoName);
}
