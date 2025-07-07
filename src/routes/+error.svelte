<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import config from '../../config';
  import { fetchRepoDetails, findRepoMeta } from '../../helpers/fetchRepo';
	import type { Project } from '../../types/Project';
	import ProjectHero from '../../components/ProjectHero.svelte';

  let gitHubPagesUrl = '';

  export let data: { repoDetails: Project, readme: string, meta: any };

  const reload = (url: string) => {
    window.location.replace(url);
  };

  onMount(async () => {
    // only for genuine 500s on a top-level slug
    
    const parts = $page.url.pathname.split('/').filter(Boolean);
    const repo = parts[0];
    if (repo) {
      fetchRepoDetails(config.githubUser, repo, fetch)
        .then((res) => {
          if (res && res?.id) {
            data.repoDetails = res as Project;
            data.meta = findRepoMeta(repo, config.projects) || {};
            console.log(data.repoDetails)
            if (data.repoDetails.has_pages) {
              gitHubPagesUrl = `https://${config.githubUser}.github.io/${repo}/`;
            }
          }
        })
        .catch((err) => {
          console.error('Error fetching repo details', err);
        });
    }
    
  });
</script>

<svelte:head>
  <title>Error | AS93</title>
  <meta name="description" content="AS93 - Free & Open Source apps by Alicia Sykes" />
</svelte:head>

{#if gitHubPagesUrl}
<a href="{gitHubPagesUrl}" class="has-github-pages" on:click="{() => reload(gitHubPagesUrl)}" >
  <h3>This page has a GitHub Pages site. Click to redirect.</h3>
</a>
{/if}

{#if data.repoDetails && data.repoDetails.id}
  <ProjectHero project={data.repoDetails} meta={data.meta} />
{/if}

<p>Oops, something's gone a bit wrong here</p>
<h1>{$page.status}</h1>
<p class="emoji">😢</p>
{#if $page?.error?.message}
  <p>{$page.error.message}</p>
{/if}

<style lang="scss">
h1 {
  font-size: 6rem;
  margin: 0;
  padding: 1rem;
  text-align: center;
  opacity: 0.6;
}
.emoji {
  font-size: 5rem;
  margin: 0;
}
p {
  font-size: 2rem;
  margin: 0;
  text-align: center;
}

.has-github-pages {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: var(--primary);
  padding: 0.25rem;
  text-align: center;
  font-size: 1.2rem;
  h3 {
    margin: 0;
    font-size: 1rem;
  }
}
</style>
