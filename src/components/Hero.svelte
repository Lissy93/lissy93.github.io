<script lang="ts">
	import Icon from './Icon.svelte';
</script>

<header>
	<h1>App Catalog</h1>
	<h2>I build free & open source apps which respect your privacy</h2>
	<h3>
		Coded with
		<Icon name="heart" width="1rem" height="1rem" color="var(--primary)" />
		by <a href="https://github.com/lissy93" target="_blank" rel="nofollow">Alicia Sykes</a>
	</h3>
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		h1 {
			margin: 0;
			font-size: 4rem;
		}
		h2 {
			margin: 0;
			font-size: 1.5rem;
			font-weight: 400;
			text-align: center;
			font-family: var(--font-body);
		}
		h3 {
			margin: 0;
			opacity: 0.75;
			font-weight: 400;
			color: var(--primary);
			display: flex;
			gap: 0.3rem;
			align-items: center;
			@media (max-width: 768px) {
				display: inline;
				text-align: center;
			}
		}
	}
</style>
