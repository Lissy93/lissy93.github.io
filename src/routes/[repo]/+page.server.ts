import { env } from '$env/dynamic/private';

import { fetchRepoDetails, fetchReadme, findRepoMeta } from './../../helpers/fetchRepo';

import config from '../../config';

export const prerender = true;

export async function load({
	params,
	fetch
}: {
	params: { repo: string };
	fetch: typeof globalThis.fetch;
}) {
	const { repo } = params;
	const githubUser = config.githubUser;
	const githubToken = env.GITHUB_TOKEN;
	const repoDetails = await fetchRepoDetails(githubUser, repo, fetch, githubToken);
	const readme = await fetchReadme(githubUser, repo, fetch, githubToken).catch(() => '');

	const meta = findRepoMeta(repo, config.projects) || {};
	return { repoDetails, readme, meta };
}
