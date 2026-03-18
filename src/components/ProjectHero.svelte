<script lang="ts">
	import Icon from './Icon.svelte';
	import type { Project } from '../types/Project';

	export let project: Project;
	export let meta: Record<string, unknown> = {};

	const get = (key: string): string | undefined => {
		const value = meta?.[key];
		return typeof value === 'string' && value.trim() ? value : undefined;
	};

	const putCommasInBigNumber = (num: string | number): string => {
		if (typeof num !== 'number' || isNaN(num)) {
			return '';
		}
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	};

	const repo = get('name') || project?.name;
	const name = get('title') || (get('name') || project?.name || 'Untitled').replaceAll('-', ' ');
	const description = get('description') ?? project?.description;
	const homepage = get('homepage') ?? project?.homepage;
	const githubUrl = repo ? `https://github.com/lissy93/${repo}` : project?.url;
	const docsUrl = get('docs');
	const dockerUrl = get('docker');
	const mirrorUrl = get('mirror');
	const crate = get('crate');
	const icon = get('icon');
	const screenshot = get('screenshot');
	const color = get('color');

	const license = get('license') || project?.license || 'MIT';
	const stars = putCommasInBigNumber(get('stars') || project?.stars || 0);
	const author = get('author') || project?.user || 'Lissy93';
	const language = get('language') || project?.language || '';
	const isArchived = get('archived') || project?.archived || false;
</script>

<header style={color ? `--primary: ${color}` : ''}>
	<div class="middle">
		<div class="left">
			{#if name}
				<h1>{name}</h1>
			{/if}
			{#if description}
				<p class="subtitle">{description}</p>
			{/if}
			{#if icon}
				<img width="128" src={icon} alt="Project icon" />
			{/if}

			<div class="main-links">
				{#if githubUrl}
					<a class="btn-link" href={githubUrl} target="_blank" rel="noopener">
						<Icon name="github" width="20" height="20" />
						View on GitHub
					</a>
				{/if}
				{#if homepage}
					<a class="btn-link" href={homepage} target="_blank" rel="noopener">
						<Icon name="website" width="20" height="20" />
						View Website
					</a>
				{/if}
			</div>

			<div class="links">
				{#if docsUrl}
					<a href={docsUrl} target="_blank" rel="noopener">
						<Icon name="docs" width="20" height="20" />
						<span>Docs</span>
					</a>
				{/if}
				{#if dockerUrl}
					<a href={dockerUrl} target="_blank" rel="noopener">
						<Icon name="docker" width="20" height="20" />
						<span>DockerHub</span>
					</a>
				{/if}
				{#if mirrorUrl}
					<a href={mirrorUrl} target="_blank" rel="noopener">
						<Icon name="codeberg" width="20" height="20" />
						<span>CodeBerg Mirror</span>
					</a>
				{/if}
				{#if crate}
					<a href={crate} target="_blank" rel="noopener">
						<Icon name="rust" width="20" height="20" />
						<span>Crates.io</span>
					</a>
				{/if}
			</div>
		</div>

		{#if screenshot}
			<div class="right">
				<img class="screenshot" src={screenshot} alt="Screenshot" loading="lazy" />
			</div>
		{/if}
	</div>

	<div class="bottom">
		{#if language || (stars && stars !== '0') || isArchived}
			<div class="chips">
				<ul>
					{#if license}
						<li>
							<Icon name="license" width="14" height="14" />
							License: {license}
						</li>
					{/if}
					{#if stars && stars !== '0'}
						<li>
							<Icon name="star" width="14" height="14" />
							Stars: {stars}
						</li>
					{/if}
					{#if author}
						<li>
							<Icon name="user" width="14" height="14" />
							Author: {author}
						</li>
					{/if}
					{#if language}
						<li>
							<Icon name="language" width="18" height="14" />
							Language: {language}
						</li>
					{/if}
					{#if isArchived}
						<li class="warn">Archived</li>
					{/if}
				</ul>
			</div>
		{/if}
		<p class="license">
			Free & open source, forever.
			<a href={githubUrl} target="_blank" rel="noopener">{name}</a>
			is licensed under
			{license}
			&copy; 2025 <a href="https://aliciasykes.com" target="_blank" rel="noopener">Alicia Sykes</a>
		</p>
	</div>
</header>

<style lang="scss">
	header {
		align-items: center;
		background: var(--background);
		background: radial-gradient(circle, var(--background-lighter) 0%, var(--background) 50%);
		color: var(--primary);
		padding: 1rem;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		.middle {
			min-height: 70vh;
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			gap: 2rem;
		}

		.chips {
			ul {
				list-style: none;
				margin: 0;
				padding: 0;
				display: flex;
				gap: 1rem;
				justify-content: center;
				li {
					color: var(--foreground);
					border: 2px solid var(--foreground-transparent);
					border-radius: 4px;
					font-size: 0.8rem;
					opacity: 0.7;
					padding: 0.2rem 0.5rem;
					display: flex;
					align-items: center;
					gap: 0.25rem;
					&.warn {
						color: var(--warning);
						border-color: var(--warning);
					}
				}
			}
		}

		h1 {
			margin: 0;
			color: var(--primary);
			font-size: 4rem;
			font-weight: 600;
			font-family: var(--font-heading);
			text-shadow: 2px 2px 3px #000;
			// text-transform: capitalize;
		}
		.subtitle {
			font-size: 1.2rem;
			font-weight: 400;
			font-family: var(--font-body);
			text-align: center;
			margin: 0.5rem auto;
			color: var(--foreground);
			max-width: 600px;
			text-shadow: 2px 2px 3px #000;
		}
		.main-links {
			display: flex;
			margin-top: 0.5rem;
			a.btn-link {
				color: var(--primary);
				text-decoration: none;
				margin: 0.5rem;
				padding: 0.5rem;
				border-radius: 0.25rem;
				border: 1px solid var(--primary);
				transition: all 0.2s ease-in-out;
				min-width: 6rem;
				text-align: center;
				font-family: var(--font-body);
				font-weight: bold;
				display: flex;
				align-items: center;
				gap: 0.5rem;
				&:hover {
					background: var(--primary);
					color: var(--background);
				}
			}
		}
		.links {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-evenly;
			max-width: 600px;
			gap: 1.25rem;
			margin: 1rem auto;
			a {
				color: var(--primary);
				opacity: 0.5;
				font-family: var(--font-body);
				transition: all 0.2s ease-in-out;
				text-decoration: none;
				display: flex;
				align-items: center;
				gap: 0.25rem;
				&:hover {
					opacity: 1;
					span {
						text-decoration: underline;
					}
				}
			}
		}
		.bottom {
			display: flex;
			flex-direction: column;
			@media (min-width: 800px) {
				bottom: 1rem;
				position: absolute;
				width: -moz-available;
				margin: 0 auto;
				display: flex;
				justify-content: center;
			}
		}
		.license {
			color: var(--grey);
			font-family: var(--font-body);
			margin: 1rem auto;
			font-size: 0.75rem;
			opacity: 0.5;
			text-align: center;

			a {
				color: var(--grey);
				text-decoration: none;
				margin: 0 6px;
			}
		}
		.left {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			min-width: 48vw;
		}
		.right {
			align-items: center;
			display: flex;
		}
		.left,
		.right {
			max-width: 800px;
			@media (min-width: 800px) {
				flex: 1;
			}
		}
		.screenshot {
			width: 100%;
			height: fit-content;
			max-height: 650px;
			border-radius: 4px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		}
	}
</style>
