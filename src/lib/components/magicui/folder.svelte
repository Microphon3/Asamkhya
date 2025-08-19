<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let element: string;
	export let value: string;

	const expandedItems: Writable<Set<string>> = getContext('expandedItems');
	const selectedId: Writable<string> = getContext('selectedId');
	const toggleExpanded: (id: string) => void = getContext('toggleExpanded');
	const selectItem: (id: string) => void = getContext('selectItem');

	$: isExpanded = $expandedItems.has(value);
	$: isSelected = $selectedId === value;

	function handleClick() {
		selectItem(value);
		toggleExpanded(value);
	}
</script>

<div class="folder-container">
	<div 
		class="folder-header" 
		class:selected={isSelected}
		on:click={handleClick}
		role="button"
		tabindex="0"
		on:keydown={(e) => e.key === 'Enter' && handleClick()}
	>
		<span class="folder-icon">
			{#if isExpanded}
				📂
			{:else}
				📁
			{/if}
		</span>
		<span class="folder-name">{element}</span>
	</div>
	
	{#if isExpanded}
		<div class="folder-content">
			<slot />
		</div>
	{/if}
</div>

<style>
	.folder-container {
		margin-left: 0;
	}

	.folder-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.25rem 0.5rem;
		cursor: pointer;
		border-radius: 4px;
		transition: background-color 0.2s ease;
	}

	.folder-header:hover {
		background-color: var(--bg-tertiary);
	}

	.folder-header.selected {
		background-color: var(--neon-green);
		color: var(--bg-primary);
	}

	.folder-icon {
		font-size: 1rem;
		user-select: none;
	}

	.folder-name {
		font-weight: 500;
		user-select: none;
	}

	.folder-content {
		margin-left: 1.5rem;
		border-left: 1px solid var(--border-medium);
		padding-left: 1rem;
	}
</style>