<script lang="ts">
	import type { Project } from '../types/Project';
	import ProjectReadme from './ProjectReadme.svelte';

	export let showModal: boolean = false;
	export let project: Project;
	export let readme: string = '';

	let dialog: HTMLDialogElement;

	$: if (dialog && showModal) dialog.showModal();
</script>

<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y_no_static_element_interactions a11y_click_events_have_key_events -->
	<div on:click|stopPropagation>
		<slot />
		<ProjectReadme {project} {readme} />
		<!-- svelte-ignore a11y_autofocus -->
		<button autofocus on:click={() => dialog.close()}>Close</button>
	</div>
</dialog>

<style lang="scss">
	dialog {
		max-width: 60em;
		height: 85vh;
		max-height: 60em;
		border-radius: 8px;
		border: none;
		padding: 0;
		color: var(--foreground);
		background: var(--background);
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.5);
	}

	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		position: absolute;
		top: 0.25rem;
		right: 0.25rem;
		background: var(--background-lighter);
		border: none;
		color: var(--foreground);
		border-radius: 5px;
		cursor: pointer;
		font-size: 0.75rem;
		&:hover {
			color: var(--primary);
		}
	}
</style>
