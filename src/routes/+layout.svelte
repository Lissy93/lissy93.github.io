<script>
	import './styles.css';
	import Nav from '../components/Nav.svelte';
</script>

<svelte:head>
	<!-- Website Info -->
	<meta name="author" content="Alicia Sykes" />
	<meta
		name="keywords"
		content="open source, code, privacy, security, linux, self-hosted, projects"
	/>

	<!-- Theme colors and site icons -->
	<meta name="theme-color" content="#ec4899" />
	<link rel="icon" href="/favicon.png" type="image/png" />
	<link rel="apple-touch-icon" href="/favicon.png" />

	<!-- Hit counter -->
	<script defer data-domain="as93.net" src="https://no-track.as93.net/js/script.js"></script>

	<!-- Verification for SEO -->
	<meta name="msvalidate.01" content="3B8A195ACDEB67AAA9AB3BBD8C37E3B6" />

	<!-- Schema.org Markup for Google -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": "AS93",
			"url": "https://as93.net",
			"description": "Free and open source apps and services, which respect your privacy",
			"author": {
				"@type": "Person",
				"name": "Alicia Sykes",
				"url": "https://aliciasykes.com",
				"image": "https://as93.net/profile.jpg"
			}
		}
	</script>
</svelte:head>

<div class="app">
	<Nav />
	<slot />
	<!-- <Footer /> -->
</div>

<style>
</style>
