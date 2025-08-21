<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let name: string;
	export let description: string;
	export let href: string = '#';
	export let cta: string = 'Learn more';
	export let className: string = '';
	export let Icon: any = undefined;

	let cardRef: HTMLDivElement;
	let mounted = false;
	let isHovered = false;

	onMount(() => {
		if (browser) {
			mounted = true;
		}
	});
</script>

<div 
	bind:this={cardRef}
	class="bento-card group {className}"
	class:hovered={isHovered}
	on:mouseenter={() => isHovered = true}
	on:mouseleave={() => isHovered = false}
	role="button"
	tabindex="0"
>
	<div class="premium-glass-overlay"></div>
	<div class="bento-card-content">
		<div class="bento-card-header">
			{#if Icon}
				<div class="bento-card-icon">
					<svelte:component this={Icon} />
				</div>
			{/if}
			<h3 class="bento-card-title">{name}</h3>
			<p class="bento-card-description">{description}</p>
		</div>
		
		<div class="bento-card-background">
			<slot />
		</div>
		
		<div class="premium-hover-glow"></div>
	</div>
</div>

<style>
	.bento-card {
		position: relative;
		overflow: hidden;
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
		padding: 1.5rem;
		transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
		cursor: pointer;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		animation: breathing 6s ease-in-out infinite;
		backdrop-filter: blur(10px);
		will-change: transform, box-shadow;
	}

	.bento-card:hover,
	.bento-card.hovered {
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
		border-color: rgba(0, 255, 136, 0.3);
		transform: translateY(-4px) scale(1.01);
		box-shadow: 
			0 12px 40px rgba(0, 0, 0, 0.2),
			0 0 0 1px rgba(0, 255, 136, 0.1),
			0 0 20px rgba(0, 255, 136, 0.15);
	}

	.bento-card-content {
		position: relative;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 200px;
	}

	.bento-card-header {
		position: relative;
		z-index: 2;
		margin-bottom: 16px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		min-height: 80px;
	}

	.bento-card-icon {
		width: 32px;
		height: 32px;
		margin-bottom: 1rem;
		color: var(--neon-green);
	}

	.bento-card-title {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0;
		transition: color 300ms ease;
		line-height: 1.3;
		flex-shrink: 0;
	}

	.bento-card:hover .bento-card-title {
		color: rgba(0, 255, 136, 0.9);
	}

	.bento-card-description {
		font-size: 0.875rem;
		color: var(--text-secondary);
		line-height: 1.4;
		margin: 0;
		flex: 1;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.bento-card-background {
		position: absolute;
		inset: 0;
		z-index: 1;
		pointer-events: none;
	}

	.premium-glass-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 40%;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.1) 0%,
			rgba(255, 255, 255, 0.05) 50%,
			transparent 100%
		);
		pointer-events: none;
		z-index: 3;
	}

	.premium-hover-glow {
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%);
		opacity: 0;
		transition: opacity 500ms ease;
		pointer-events: none;
		z-index: 1;
	}

	.bento-card:hover .premium-hover-glow {
		opacity: 1;
		animation: glow-rotate 3s linear infinite;
	}

	/* Premium animations */
	@keyframes breathing {
		0%, 100% {
			transform: scale(1.0);
			box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		}
		50% {
			transform: scale(1.005);
			box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
		}
	}

	@keyframes glow-rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes pulse-glow {
		0%, 100% {
			opacity: 0.4;
		}
		50% {
			opacity: 0.8;
		}
	}

	/* Grid column spans */
	:global(.col-span-1) {
		grid-column: span 1;
	}

	:global(.col-span-2) {
		grid-column: span 2;
	}

	:global(.col-span-3) {
		grid-column: span 3;
	}

	/* Responsive overrides */
	@media (min-width: 1024px) {
		:global(.lg\\:col-span-1) {
			grid-column: span 1;
		}

		:global(.lg\\:col-span-2) {
			grid-column: span 2;
		}

		:global(.lg\\:col-span-3) {
			grid-column: span 3;
		}
	}

	@media (max-width: 1024px) {
		:global(.col-span-3) {
			grid-column: span 2;
		}

		:global(.lg\\:col-span-2) {
			grid-column: span 2;
		}

		:global(.lg\\:col-span-1) {
			grid-column: span 1;
		}
	}

	@media (max-width: 640px) {
		:global(.col-span-1),
		:global(.col-span-2),
		:global(.col-span-3),
		:global(.lg\\:col-span-1),
		:global(.lg\\:col-span-2),
		:global(.lg\\:col-span-3) {
			grid-column: span 1;
		}
	}
</style>