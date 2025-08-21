<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let className = '';
	export let radius = 150;
	export let iconSize = 40;
	export let reverse = false;
	export let speed = 1;
	export let duration = 20;

	let containerRef: HTMLDivElement;
	let icons: any[] = [];

	// Accept icon components as slots
	export let children: any[] = [];

	onMount(() => {
		if (!browser) return;
		
		// Animation starts on mount
		const animationDuration = duration / speed;
		const direction = reverse ? 'reverse' : 'normal';
		
		if (containerRef) {
			containerRef.style.setProperty('--animation-duration', `${animationDuration}s`);
			containerRef.style.setProperty('--animation-direction', direction);
		}
	});

	$: orbitRadius = radius;
	$: itemCount = children.length;
</script>

<div 
	bind:this={containerRef}
	class="orbiting-circles {className}"
	style="--radius: {orbitRadius}px; --icon-size: {iconSize}px;"
>
	{#each children as child, index}
		<div 
			class="orbiting-icon"
			style="--delay: {(index * (duration / speed)) / itemCount}s; --total-items: {itemCount}; --item-index: {index};"
		>
			<div class="icon-wrapper">
				<svelte:component this={child} />
			</div>
		</div>
	{/each}
</div>

<style>
	.orbiting-circles {
		position: relative;
		width: calc(var(--radius) * 2 + var(--icon-size));
		height: calc(var(--radius) * 2 + var(--icon-size));
	}

	.orbiting-icon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		animation: orbit var(--animation-duration, 20s) linear infinite;
		animation-direction: var(--animation-direction, normal);
		animation-delay: var(--delay, 0s);
	}

	.icon-wrapper {
		width: var(--icon-size, 40px);
		height: var(--icon-size, 40px);
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--bg-secondary);
		border: 1px solid var(--neon-green);
		border-radius: 50%;
		box-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
		transition: all 0.3s ease;
		transform: translate(var(--radius), 0);
	}

	.icon-wrapper:hover {
		box-shadow: 0 0 20px rgba(0, 255, 136, 0.6);
		transform: translate(var(--radius), 0) scale(1.1);
	}

	.icon-wrapper :global(svg) {
		width: 60%;
		height: 60%;
		color: var(--neon-green);
		fill: currentColor;
	}

	@keyframes orbit {
		from {
			transform: translate(-50%, -50%) rotate(0deg) translateX(var(--radius)) rotate(0deg);
		}
		to {
			transform: translate(-50%, -50%) rotate(360deg) translateX(var(--radius)) rotate(-360deg);
		}
	}

	/* Ensure proper z-index layering */
	.orbiting-circles {
		z-index: 1;
	}

	.icon-wrapper {
		z-index: 2;
	}
</style>