<script lang="ts">
	import { onMount } from 'svelte';
	
	let mounted = false;
	
	export let mainCircleSize = 400;
	export let mainCircleOpacity = 0.2;
	export let numCircles = 8;
	
	onMount(() => {
		mounted = true;
	});
	
	$: circles = mounted ? Array.from({ length: numCircles }, (_, i) => {
		const size = mainCircleSize + i * 120;
		return {
			size,
			opacity: mainCircleOpacity - i * 0.02,
			delay: i * 0.12
		};
	}) : [];
</script>

{#if mounted}
	<div class="ripple-container">
		{#each circles as circle, i}
			<div
				class="ripple-circle"
				style="
					width: {circle.size}px;
					height: {circle.size}px;
					opacity: {circle.opacity};
					animation-delay: {circle.delay}s;
				"
			></div>
		{/each}
	</div>
{/if}

<style>
	.ripple-container {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;
	}

	.ripple-circle {
		position: absolute;
		border: 1px solid #00d4ff;
		border-radius: 50%;
		animation: ripple 3.25s ease-out infinite;
		transform: scale(0);
	}

	@keyframes ripple {
		0% {
			transform: scale(0);
			opacity: 1;
		}
		80% {
			transform: scale(1);
			opacity: 0.5;
		}
		100% {
			transform: scale(1);
			opacity: 0;
		}
	}

	/* Reduced motion */
	@media (prefers-reduced-motion: reduce) {
		.ripple-circle {
			animation: none !important;
		}
	}
</style>