<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { writable } from 'svelte/store';

	export let className = '';
	export let initialSelectedId = '';
	export let initialExpandedItems: string[] = [];
	export let elements: any[] = [];

	let selectedId = writable(initialSelectedId);
	let expandedItems = writable(new Set(initialExpandedItems));

	const dispatch = createEventDispatcher();

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
		dispatch('select', { id });
	}

	export { selectedId, expandedItems, toggleExpanded, selectItem };
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
	}
</style>