<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let className = '';
	export let href: string | undefined = undefined;
	export let disabled = false;
	export let onClick: (() => void) | undefined = undefined;

	let buttonRef: HTMLElement;
	let mounted = false;

	onMount(() => {
		mounted = true;
		if (browser && buttonRef) {
			setupInteractiveHover();
		}
	});

	function setupInteractiveHover() {
		if (!buttonRef) return;

		const handleMouseMove = (e: MouseEvent) => {
			const rect = buttonRef.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			buttonRef.style.setProperty('--mouse-x', `${x}px`);
			buttonRef.style.setProperty('--mouse-y', `${y}px`);
		};

		buttonRef.addEventListener('mousemove', handleMouseMove);

		return () => {
			buttonRef.removeEventListener('mousemove', handleMouseMove);
		};
	}

	function handleClick() {
		if (onClick && !disabled) {
			onClick();
		}
	}
</script>

{#if href}
	<a 
		bind:this={buttonRef}
		{href}
		class="interactive-hover-button {className}"
		class:disabled
	>
		<span class="button-content">
			<slot />
		</span>
		<div class="hover-effect"></div>
	</a>
{:else}
	<button 
		bind:this={buttonRef}
		class="interactive-hover-button {className}"
		class:disabled
		{disabled}
		on:click={handleClick}
	>
		<span class="button-content">
			<slot />
		</span>
		<div class="hover-effect"></div>
	</button>
{/if}

<style>
	.interactive-hover-button {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		padding: 1rem 2rem;
		border: none;
		border-radius: 12px;
		background: var(--neon-green);
		color: white;
		font-weight: 600;
		font-size: 1.0625rem;
		text-decoration: none;
		cursor: pointer;
		overflow: hidden;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: 0 4px 20px rgba(0, 123, 255, 0.3);
		--mouse-x: 50%;
		--mouse-y: 50%;
	}

	.interactive-hover-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 40px rgba(0, 123, 255, 0.4);
	}

	.interactive-hover-button.disabled {
		opacity: 0.6;
		cursor: not-allowed;
		transform: none !important;
	}

	.button-content {
		position: relative;
		z-index: 2;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.hover-effect {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: radial-gradient(
			circle 100px at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.2) 0%,
			transparent 100%
		);
		opacity: 0;
		transition: opacity 0.3s ease;
		pointer-events: none;
		z-index: 1;
	}

	.interactive-hover-button:hover .hover-effect {
		opacity: 1;
	}

	/* Secondary button variant */
	.interactive-hover-button.secondary {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		color: var(--text-primary);
		backdrop-filter: blur(20px);
		box-shadow: var(--shadow-subtle);
	}

	.interactive-hover-button.secondary:hover {
		border-color: var(--neon-green);
		box-shadow: var(--shadow-medium);
	}

	/* Large button variant */
	.interactive-hover-button.large {
		padding: 1.25rem 2.5rem;
		font-size: 1.125rem;
	}

	/* Demo button variant */
	.interactive-hover-button.demo {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		color: var(--text-primary);
		backdrop-filter: blur(20px);
		font-size: 0.9375rem;
		font-weight: 500;
		box-shadow: var(--shadow-subtle);
	}

	.interactive-hover-button.demo:hover {
		border-color: var(--neon-green);
	}

	/* Preview button variant */
	.interactive-hover-button.preview {
		background: var(--neon-green);
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		font-weight: 600;
		font-size: 0.9375rem;
	}

	.interactive-hover-button.preview:hover {
		transform: scale(1.05);
	}

	/* Close button variant */
	.interactive-hover-button.close {
		background: none;
		border: none;
		color: var(--text-secondary);
		font-size: 2rem;
		cursor: pointer;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	.interactive-hover-button.close:hover {
		color: var(--neon-green);
		background: var(--bg-glass);
	}
</style>