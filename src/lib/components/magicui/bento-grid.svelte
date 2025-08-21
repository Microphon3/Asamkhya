<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let className = '';

	let containerRef: HTMLDivElement;
</script>

<div 
	bind:this={containerRef}
	class="bento-grid {className}"
>
	<slot />
</div>

<style>
	.bento-grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: 320px 320px;
		gap: 1rem;
		height: auto;
		min-height: 660px;
		max-width: 1200px;
		margin: 0 auto;
	}

	/* Live Agent Activity - HERO CARD (spans all 2 rows, left side) */
	:global(.bento-grid .bento-card:nth-child(1)) {
		grid-row: 1 / span 2;
		grid-column: 1;
		min-height: 660px;
	}

	/* Multi-Platform Panel - Top Right */
	:global(.bento-grid .bento-card:nth-child(2)) {
		grid-row: 1;
		grid-column: 2;
		max-height: 320px;
		min-height: 320px;
	}

	/* Multi-OTA Calendar Sync - Bottom Right (same size as platform panel) */
	:global(.bento-grid .bento-card:nth-child(3)) {
		grid-row: 2;
		grid-column: 2;
		max-height: 320px;
		min-height: 320px;
	}

	@media (max-width: 768px) {
		.bento-grid {
			grid-template-columns: 1fr;
			grid-template-rows: repeat(3, auto);
			height: auto;
			gap: 1rem;
			min-height: auto;
		}

		/* Mobile: Live Agent Activity first (hero) */
		:global(.bento-grid .bento-card:nth-child(1)) {
			grid-row: 1;
			grid-column: 1;
			min-height: 400px;
		}

		/* Mobile: Platform Integrations second */
		:global(.bento-grid .bento-card:nth-child(2)) {
			grid-row: 2;
			grid-column: 1;
			max-height: none;
			min-height: auto;
		}

		/* Mobile: Calendar third */
		:global(.bento-grid .bento-card:nth-child(3)) {
			grid-row: 3;
			grid-column: 1;
			max-height: none;
			min-height: auto;
		}
	}

	@media (max-width: 1024px) and (min-width: 769px) {
		.bento-grid {
			grid-template-columns: 2fr 1fr;
			grid-template-rows: 250px 250px;
			min-height: 520px;
		}

		/* Tablet: Live Agent Activity spans full left */
		:global(.bento-grid .bento-card:nth-child(1)) {
			grid-row: 1 / span 2;
			grid-column: 1;
			min-height: 520px;
		}

		/* Tablet: Multi-Platform Panel top right */
		:global(.bento-grid .bento-card:nth-child(2)) {
			grid-row: 1;
			grid-column: 2;
			max-height: 250px;
			min-height: 250px;
		}

		/* Tablet: Calendar bottom right */
		:global(.bento-grid .bento-card:nth-child(3)) {
			grid-row: 2;
			grid-column: 2;
			max-height: 250px;
			min-height: 250px;
		}
	}
</style>