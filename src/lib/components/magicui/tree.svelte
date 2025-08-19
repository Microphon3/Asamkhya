<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let className = '';
	export let initialSelectedId = '';
	export let initialExpandedItems: string[] = [];

	const selectedId = writable(initialSelectedId);
	const expandedItems = writable(new Set(initialExpandedItems));

	function toggleExpanded(id: string) {
		expandedItems.update(items => {
			const newItems = new Set(items);
			if (newItems.has(id)) {
				newItems.delete(id);
			} else {
				newItems.add(id);
			}
			return newItems;
		});
	}

	function selectItem(id: string) {
		selectedId.set(id);
	}

	setContext('selectedId', selectedId);
	setContext('expandedItems', expandedItems);
	setContext('toggleExpanded', toggleExpanded);
	setContext('selectItem', selectItem);
</script>

<div class="tree-container {className}">
	<slot />
</div>

<style>
	.tree-container {
		font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
		font-size: 0.875rem;
		line-height: 1.5;
		color: var(--text-primary);
		background: var(--bg-secondary);
		border-radius: 8px;
		padding: 1rem;
		border: 1px solid var(--border-medium);
	}
</style>