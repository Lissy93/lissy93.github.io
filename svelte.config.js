import adapterAuto from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const useSSR = process.env.USE_SSR === 'true';
const base = process.env.BASE_PATH ?? '';
const githubToken = process.env.GITHUB_TOKEN;

async function getGithubSlugs() {
	if (!githubToken) return [];
	const res = await fetch(`https://api.github.com/users/lissy93/repos?per_page=100`, {
		headers: { Authorization: `Bearer ${githubToken}` }
	});
	if (!res.ok) {
		console.warn(`GitHub API failed: ${res.status} ${res.statusText} — skipping repo slugs`);
		return [];
	}
	const repos = await res.json();
	return repos.map((repo) => `/${repo.name}`);
}

const githubSlugs = await getGithubSlugs();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: useSSR ? adapterAuto() : adapterStatic({ fallback: '404.html' }),
		paths: {
			base
		},
		prerender: {
			entries: ['*', ...githubSlugs],
			handleUnseenRoutes: 'warn'
		}
	}
};

export default config;
