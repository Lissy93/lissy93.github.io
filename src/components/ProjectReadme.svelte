<script lang="ts">
	import { onMount } from 'svelte';
	import { Marked } from 'marked';

	import type { Project } from '../types/Project';
	import { formatLargeNumber, formatSize, formatTimeAgo, formatDate } from '../helpers/attributes';
	import Icon from './Icon.svelte';

	export let project: Project;
	export let readme: string | undefined;

	let mdMode = true;

	const convertReadme = async (readme: string, owner = project.user, repo = project.name) => {
		const renderer = {
			heading({ text, depth }: { text: string; depth: number }) {
				const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
				return `<h${depth} id="${escapedText}">${text}</h${depth}>`;
			}
		};

		const instance = new Marked();
		instance.use({ renderer });
		instance.use({
			walkTokens(tok: { type: string; href?: string }) {
				if (
					(tok.type === 'link' || tok.type === 'image') &&
					typeof tok.href === 'string' &&
					!/^https?:\/\//.test(tok.href)
				) {
					const path = tok.href.replace(/^\/|^\.\//, '');
					tok.href = `https://github.com/${owner}/${repo}/blob/HEAD/${path}`;
				}
			}
		});

		const html = await instance.parse(readme);

		const sanitizedHtml = html.replace(/<img\s+[^>]*src="(?!https?:\/\/)[^"]*"[^>]*>/gi, '');

		return sanitizedHtml;
	};

	async function fetchReadme(owner: string, repo: string): Promise<string> {
		const url = `https://api.github.com/repos/${owner}/${repo}/readme`;
		const response = await fetch(url, {
			headers: { Accept: 'application/vnd.github.v3.raw' }
		});

		if (!response.ok) {
			throw new Error(`Error fetching README: ${response.statusText}`);
		}
		return await response.text();
	}

	const isMarkdown = (readme: string) => {
		const markdownIndicators = ['## ', '![', '](', '<img', '<details', '<!--', '> _**['];
		return markdownIndicators.some((indicator) => (readme || '').includes(indicator));
	};

	onMount(async () => {
		if (!readme) {
			readme = await fetchReadme(project.user || 'lissy93', project.name);
		}
		mdMode = isMarkdown(readme);
	});
</script>

<section>
	<div class="top-stats">
		{#if project.stars}
			<div title="Stargazer count">
				<Icon name="star" />
				<span>{formatLargeNumber(project.stars)}</span>
			</div>
		{/if}

		{#if project.forks}
			<div title="Fork count">
				<Icon name="fork" />
				<span>{project.forks}</span>
			</div>
		{/if}

		{#if project.license && project.license !== 'NOASSERTION'}
			<div title="License">
				<Icon name="license" />
				<span>{project.license}</span>
			</div>
		{/if}

		{#if project.size}
			<div title="Repository size">
				<Icon name="size" />
				<span>{formatSize(project.size)}</span>
			</div>
		{/if}

		{#if project.createdAt}
			<div title="Date created">
				<Icon name="date" />
				<span>{formatDate(project.createdAt)}</span>
			</div>
		{/if}

		{#if project.updatedAt}
			<div title="Last updated">
				<Icon name="time" />
				<span>{formatTimeAgo(project.updatedAt)}</span>
			</div>
		{/if}

		{#if project.language}
			<div title="Programming language">
				<Icon width="22" name="language" />
				<span>{project.language}</span>
			</div>
		{/if}
	</div>

	<!-- Render the readme -->
	{#if mdMode}
		<div class="markdown">
			{#await convertReadme(readme || '') then renderedReadme}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html renderedReadme}
			{:catch error}
				<p>Error rendering README: {error.message}</p>
			{/await}
		</div>
	{:else}
		<pre class="plain-text">
      {readme}
    </pre>
	{/if}
</section>

<style lang="scss">
	section {
		max-width: 70rem;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background: var(--secondary);
		transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.25s;
		border-radius: 0.5rem;
		border: 1px solid #1e293bcc;
		.top-stats {
			display: flex;
			flex-wrap: wrap;
			border-bottom: 1px solid #1e293bcc;
			div {
				padding: 0.5rem 1rem;
				display: flex;
				gap: 0.5rem;
				align-items: center;
				&:not(:last-child) {
					border-right: 1px solid #1e293bcc;
				}
			}
		}

		.plain-text {
			padding: 0 2rem;
			overflow-x: auto;
			margin: 0;
		}

		.markdown {
			padding: 1rem 2rem;
			:global(td) {
				border: 1px solid #1e293bcc;
			}
			:global(img) {
				max-width: 100%;
				border-radius: 5px;
			}
			:global(blockquote) {
				border-left: 3px solid var(--primary);
				margin-left: 0.5rem;
				padding-left: 1rem;
				background: var(--background-lighter);
				border-radius: 0 5px 5px 0;
			}
			:global(pre) {
				background: var(--background-lighter);
				padding: 1rem 0.5rem;
				border-radius: 5px;
				overflow-x: auto;
			}
			:global(a) {
				color: var(--primary);
				text-decoration: none;
				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
</style>
