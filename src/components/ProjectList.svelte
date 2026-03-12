<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import type { Project } from '../types/Project';

	export let projects: Project[] = [];
</script>

<div class="project-list">
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</div>

<style lang="scss">
	.project-list {
		display: grid;
		gap: 1.8rem;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	}
</style>
