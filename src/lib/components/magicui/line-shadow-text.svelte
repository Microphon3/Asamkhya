<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let className = '';
	export let shadowColor = 'black';
	export let shadowOffset = 4;
	export let shadowBlur = 0;

	let mounted = false;
	let textElement: HTMLElement;

	onMount(() => {
		mounted = true;
		if (browser && textElement) {
			updateShadow();
		}
	});

	function updateShadow() {
		if (!textElement) return;
		
		// Create a single, clean shadow effect
		textElement.style.textShadow = `${shadowOffset}px ${shadowOffset}px 0px ${shadowColor}`;
	}

	$: if (mounted && textElement) {
		updateShadow();
	}
</script>

<span 
	bind:this={textElement}
	class="line-shadow-text {className}"
>
	<slot />
</span>

<style>
	.line-shadow-text {
		display: inline-block;
		font-weight: inherit;
		line-height: inherit;
		transition: text-shadow 0.3s ease;
	}
</style>