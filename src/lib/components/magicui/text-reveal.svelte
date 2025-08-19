<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let text: string = '';

	let containerRef: HTMLDivElement;
	let isVisible = false;

	onMount(() => {
		if (browser && containerRef) {
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						isVisible = true;
						observer.disconnect();
					}
				},
				{ threshold: 0.1 }
			);

			observer.observe(containerRef);

			return () => {
				observer.disconnect();
			};
		}
	});
</script>

<div bind:this={containerRef} class="text-reveal-container">
	<h2 class="text-reveal" class:visible={isVisible}>
		{text}
	</h2>
</div>

<style>
	.text-reveal-container {
		overflow: hidden;
		padding: 1rem 0;
	}

	.text-reveal {
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 700;
		color: var(--text-primary);
		margin: 0;
		line-height: 1.1;
		letter-spacing: -0.02em;
		transform: translateY(100%);
		opacity: 0;
		transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
		background: linear-gradient(135deg, var(--text-primary) 0%, var(--neon-green) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.text-reveal.visible {
		transform: translateY(0);
		opacity: 1;
	}

	/* Add some sparkle effect on reveal */
	.text-reveal.visible::after {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.4), transparent);
		animation: shine 2s ease-in-out;
		pointer-events: none;
	}

	@keyframes shine {
		0% { left: -100%; }
		100% { left: 100%; }
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.text-reveal {
			font-size: clamp(2rem, 8vw, 3rem);
		}
	}
</style>