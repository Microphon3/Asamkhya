<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	export let baseVelocity = 20;
	export let direction = 1;
	export let className = '';

	let mounted = false;
	let containerRef: HTMLDivElement;
	let animationId: number;
	let xPos = 0;

	onMount(() => {
		mounted = true;
		if (browser) {
			startAnimation();
		}
	});

	onDestroy(() => {
		if (browser && animationId) {
			cancelAnimationFrame(animationId);
		}
	});

	function startAnimation() {
		function animate() {
			xPos += (baseVelocity * direction) / 60; // 60fps
			
			// Reset position when it goes too far
			if (direction > 0 && xPos > window.innerWidth) {
				xPos = -window.innerWidth;
			} else if (direction < 0 && xPos < -window.innerWidth) {
				xPos = window.innerWidth;
			}
			
			if (containerRef) {
				containerRef.style.transform = `translateX(${xPos}px)`;
			}
			animationId = requestAnimationFrame(animate);
		}
		animate();
	}
</script>

<div class="scroll-velocity-row {className}" bind:this={containerRef}>
	{#each Array(10) as _, i}
		<span class="scroll-text"><slot /></span>
	{/each}
</div>

<style>
	.scroll-velocity-row {
		display: flex;
		white-space: nowrap;
		will-change: transform;
		gap: 3rem;
	}
	
	.scroll-text {
		flex-shrink: 0;
	}
</style>