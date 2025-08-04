<script lang="ts">
  import { onMount } from 'svelte';
  import ProjectReadme from '../../components/ProjectReadme.svelte';
  import ProjectHero from '../../components/ProjectHero.svelte';
  import NotFound from '../../components/NotFound.svelte';
  import type { Project } from '../../types/Project';
  import config from '../../config';
	import { page } from '$app/stores';
  import { fetchRepoDetails } from './../../helpers/fetchRepo';

  export let data: { repoDetails: Project, readme: string, meta: Record<string, unknown> };

  // Generates JSON-LD structured data for a given GitHub project
  function generateJsonLd(project: Project) {
    const jsonLd = {
      "@context": "http://schema.org",
      "@type": "SoftwareSourceCode",
      "headline": project.name,
      "image": project.icon || 'https://as93.net/favicon.png',
      "datePublished": project.createdAt,
      "dateModified": project.updatedAt,
      "author": {
        "@type": "Person",
        "name": config.fullName || project.user,
      },
      "description": project.description
    };
    return JSON.stringify(jsonLd);
  }

  $: jsonLdScript = generateJsonLd(data.repoDetails);

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

{#if notFound}
  <NotFound />
{:else}
  <ProjectHero project={data.repoDetails} meta={data.meta} />
  {#if data.readme}
    <ProjectReadme project={data.repoDetails} readme={data.readme} />
  {/if}
{/if}


<svelte:element this="script" type="application/ld+json">
  {@html jsonLdScript}
</svelte:element>
