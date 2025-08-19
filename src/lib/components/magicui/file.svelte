<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let value: string;

	const selectedId: Writable<string> = getContext('selectedId');
	const selectItem: (id: string) => void = getContext('selectItem');

	$: isSelected = $selectedId === value;

	function handleClick() {
		selectItem(value);
	}
</script>

<div 
	class="file-container" 
	class:selected={isSelected}
	on:click={handleClick}
	role="button"
	tabindex="0"
	on:keydown={(e) => e.key === 'Enter' && handleClick()}
>
	<span class="file-icon">📄</span>
	<div class="file-content">
		<slot />
	</div>
</div>

<style>
	.file-container {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.25rem 0.5rem;
		cursor: pointer;
		border-radius: 4px;
		transition: background-color 0.2s ease;
		margin: 0.125rem 0;
	}

	.file-container:hover {
		background-color: var(--bg-tertiary);
	}

	.file-container.selected {
		background-color: var(--neon-green);
		color: var(--bg-primary);
	}

	.file-icon {
		font-size: 0.875rem;
		user-select: none;
	}

	.file-content {
		flex: 1;
		user-select: none;
	}

	.file-content :global(p) {
		margin: 0;
		font-family: inherit;
		font-size: inherit;
	}
</style>