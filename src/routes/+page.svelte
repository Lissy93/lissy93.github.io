<script>
	import Hero from '../components/Hero.svelte';
	import ProjectList from '../components/ProjectList.svelte';
	import About from '../components/About.svelte';

	export let data;

	const repos = data.repos || [];
</script>

<svelte:head>
	<title>AS93 | Home</title>
	<meta name="description" content="AS93 - Free & Open Source apps by Alicia Sykes" />
	<link rel="canonical" href="https://as93.net" />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="AS93 | Project Catalog" />
	<meta property="og:description" content="Free & Open Source apps by Alicia Sykes" />
	<meta property="og:image" content="https://as93.net/banner.png" />
	<meta property="og:url" content="https://as93.net" />
	<meta property="og:site_name" content="AS93" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="AS93 | Project Catalog" />
	<meta name="twitter:description" content="Free & Open Source apps by Alicia Sykes" />
	<meta name="twitter:image" content="https://as93.net/banner.png" />
</svelte:head>

<main>
	<Hero />
	<ProjectList projects={repos} />
	<About />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 70rem;
		margin: 0 auto;
		box-sizing: border-box;

		@media (min-width: 1670px) {
			max-width: 85rem;
		}
	}
</style>
