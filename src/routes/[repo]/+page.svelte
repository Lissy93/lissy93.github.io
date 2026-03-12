<script lang="ts">
	import { onMount } from 'svelte';
	import ProjectReadme from '../../components/ProjectReadme.svelte';
	import ProjectHero from '../../components/ProjectHero.svelte';
	import NotFound from '../../components/NotFound.svelte';
	import type { Project } from '../../types/Project';
	import config from '../../config';
	import { page } from '$app/stores';
	import { fetchRepoDetails } from './../../helpers/fetchRepo';

	export let data: { repoDetails: Project; readme: string; meta: Record<string, unknown> };

	function generateJsonLd(
		project: Project,
		meta: Record<string, unknown>
	) {
		const name =
			(meta?.title as string) || project?.name?.replaceAll('-', ' ') || 'Project';
		const description =
			(meta?.description as string) || project?.description || '';
		const image =
			(meta?.icon as string) || project?.icon || 'https://as93.net/favicon.png';
		const url = `https://as93.net/${project?.name || ''}`;
		const repoUrl = `https://github.com/${config.githubUser}/${project?.name || ''}`;

		const jsonLd: Record<string, unknown> = {
			'@context': 'https://schema.org',
			'@type': 'SoftwareSourceCode',
			name,
			description,
			image,
			url,
			codeRepository: repoUrl,
			author: {
				'@type': 'Person',
				name: config.fullName || project?.user || 'Alicia Sykes',
				url: 'https://aliciasykes.com'
			}
		};
		if (project?.createdAt) jsonLd.dateCreated = project.createdAt;
		if (project?.updatedAt) jsonLd.dateModified = project.updatedAt;
		if (project?.language) jsonLd.programmingLanguage = project.language;
		if (project?.license) jsonLd.license = project.license;
		return JSON.stringify(jsonLd).replace(/</g, '\\u003c');
	}

	$: jsonLdScript = generateJsonLd(data.repoDetails, data.meta);

	$: projectName =
		(data.meta?.title as string) ||
		data.repoDetails?.name?.replaceAll('-', ' ') ||
		'Project';
	$: projectDescription =
		(data.meta?.description as string) || data.repoDetails?.description || '';
	$: projectImage =
		(data.meta?.icon as string) || data.repoDetails?.icon || 'https://as93.net/banner.png';
	$: canonicalUrl = `https://as93.net/${data.repoDetails?.name || $page.params.repo}`;
	$: pageTitle = `${projectName} | AS93`;

	let notFound = false;

	onMount(() => {
		// Check if project is found, if not, set notFound to true to show 404
		if (
			(!data.repoDetails || Object.keys(data.repoDetails).length === 0) &&
			(!data.meta || Object.keys(data.meta).length === 0)
		) {
			notFound = true;
		}

		// Import readme

		// Fetch (or attempt to) the most-up-to-date repo details
		fetchRepoDetails(config.githubUser, $page.params.repo, fetch)
			.then((res) => {
				if (res && res?.id) {
					data.repoDetails = res as Project;
					notFound = false;
				}
			})
			.catch((err) => {
				console.error('Error fetching repo details', err);
			});
	});
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={projectDescription} />
	<link rel="canonical" href={canonicalUrl} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={projectDescription} />
	<meta property="og:image" content={projectImage} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:site_name" content="AS93" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={projectDescription} />
	<meta name="twitter:image" content={projectImage} />

	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${jsonLdScript}</script>`}
</svelte:head>

{#if notFound}
	<NotFound />
{:else}
	<ProjectHero project={data.repoDetails} meta={data.meta} />
	{#if data.readme}
		<ProjectReadme project={data.repoDetails} readme={data.readme} />
	{/if}
{/if}
