<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Error | AS93</title>
	<meta name="description" content="AS93 - Free & Open Source apps by Alicia Sykes" />
</svelte:head>

<p>Oops, somethings gone a bit wrong here</p>
<h1>{$page.status}</h1>
<p class="emoji">😢</p>
{#if $page?.error?.message}
<p>{$page.error.message}</p>
{/if}

<style>
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
</style>
