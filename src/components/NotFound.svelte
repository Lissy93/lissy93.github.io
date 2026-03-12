<script lang="ts">
	import Icon from './Icon.svelte';
</script>

<svelte:head>
	<title>404 - Page Not Found</title>
	<meta name="description" content="Creative 404 page not found" />
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

<div class="wrapper">
	<h3>404</h3>
	<h2>Not Found</h2>
	<Icon class="icon" name="cat" width="200" height="200" />
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		justify-content: center;
		min-height: 80vh;
		align-items: center;
		flex-direction: column;
		color: var(--primary);
		h2 {
			font-size: 5rem;
			margin: 0;
			color: var(--foreground);
		}
		h3 {
			font-size: 2rem;
			margin: 0;
			color: var(--foreground);
		}
	}
</style>
