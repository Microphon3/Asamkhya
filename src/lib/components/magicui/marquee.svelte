<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let className = '';
	export let reverse = false;
	export let pauseOnHover = false;
	export let vertical = false;
	export let repeat = 4;

	let containerRef: HTMLDivElement;

	onMount(() => {
		if (!browser) return;

		const container = containerRef;
		if (!container) return;

		// Set CSS custom properties for animation
		container.style.setProperty('--pause-on-hover', pauseOnHover ? 'paused' : 'running');
		container.style.setProperty('--pause-on-click', pauseOnHover ? 'paused' : 'running');
		container.style.setProperty('--direction', reverse ? 'reverse' : 'normal');
		container.style.setProperty('--duration', '40s');
	});
</script>

<div
	bind:this={containerRef}
	class="marquee-container {className}"
	class:reverse
	class:vertical
	class:pause-on-hover={pauseOnHover}
>
	{#each Array(repeat) as _, i}
		<div class="marquee-content" aria-hidden={i > 0}>
			<slot />
		</div>
	{/each}
</div>

<style>
	.marquee-container {
		display: flex;
		width: 100%;
		overflow: hidden;
		user-select: none;
		gap: var(--gap, 1rem);
	}

	.marquee-container:not(.vertical) {
		flex-direction: row;
	}

	.marquee-container.vertical {
		flex-direction: column;
		height: 100%;
	}

	.marquee-content {
		flex: 0 0 auto;
		display: flex;
		min-width: 100%;
		gap: var(--gap, 1rem);
		animation: scroll var(--duration, 40s) linear infinite;
		animation-direction: var(--direction, normal);
		animation-play-state: var(--pause-on-hover, running);
	}

	.marquee-container.vertical .marquee-content {
		flex-direction: column;
		min-height: 100%;
		animation-name: scroll-vertical;
	}

	.marquee-container.pause-on-hover:hover .marquee-content {
		animation-play-state: paused;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	@keyframes scroll-vertical {
		0% {
			transform: translateY(0%);
		}
		100% {
			transform: translateY(-100%);
		}
	}

	/* Remove animation for users who prefer reduced motion */
	@media (prefers-reduced-motion: reduce) {
		.marquee-content {
			animation: none;
		}
	}
</style>