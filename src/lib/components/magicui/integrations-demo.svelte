<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let className = '';

	let containerRef: HTMLDivElement;
	let animated = false;

	const integrations = [
		{ name: 'Airbnb', color: '#ff5a5f', status: 'connected' },
		{ name: 'Booking.com', color: '#003580', status: 'connected' },
		{ name: 'WhatsApp', color: '#25d366', status: 'active' },
		{ name: 'Razorpay', color: '#528ff0', status: 'connected' },
		{ name: 'PMS Admin', color: '#6b46c1', status: 'syncing' },
		{ name: 'Smart Locks', color: '#f59e0b', status: 'connected' }
	];

	onMount(() => {
		if (!browser) return;
		
		setTimeout(() => {
			animated = true;
		}, 500);
	});
</script>

<div 
	bind:this={containerRef}
	class="integrations-demo {className}"
>
	<div class="integration-hub" class:animated>
		<div class="hub-center">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--neon-green)" stroke-width="2">
				<rect x="3" y="11" width="18" height="10" rx="2" ry="2"/>
				<circle cx="12" cy="5" r="2"/>
				<path d="m12 7-3 4h6l-3-4z"/>
			</svg>
			<span>HeyFrontDesk</span>
		</div>
		
		{#each integrations as integration, index}
			<div 
				class="integration-node" 
				class:animated
				style="--delay: {index * 0.2}s; --color: {integration.color}"
			>
				<div class="node-content">
					<div class="node-status status-{integration.status}"></div>
					<span class="node-name">{integration.name}</span>
				</div>
				<div class="connection-beam" class:animated></div>
			</div>
		{/each}
	</div>
</div>

<style>
	.integrations-demo {
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		padding: 2rem;
	}

	.integration-hub {
		position: relative;
		width: 280px;
		height: 280px;
	}

	.hub-center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: var(--bg-primary);
		border: 2px solid var(--neon-green);
		border-radius: 12px;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		font-weight: 600;
		font-size: 0.875rem;
		color: var(--neon-green);
		z-index: 10;
		box-shadow: 0 4px 20px rgba(0, 212, 255, 0.2);
		opacity: 0;
		transform: translate(-50%, -50%) scale(0.8);
		transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.hub-center.animated {
		opacity: 1;
		transform: translate(-50%, -50%) scale(1);
	}

	.integration-node {
		position: absolute;
		opacity: 0;
		transform: scale(0.8);
		transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
		transition-delay: var(--delay);
	}

	.integration-node.animated {
		opacity: 1;
		transform: scale(1);
	}

	.integration-node:nth-child(2) { top: 0; left: 50%; transform: translateX(-50%) scale(0.8); }
	.integration-node:nth-child(3) { top: 20%; right: 0; }
	.integration-node:nth-child(4) { bottom: 20%; right: 0; }
	.integration-node:nth-child(5) { bottom: 0; left: 50%; transform: translateX(-50%) scale(0.8); }
	.integration-node:nth-child(6) { bottom: 20%; left: 0; }
	.integration-node:nth-child(7) { top: 20%; left: 0; }

	.integration-node.animated:nth-child(2) { transform: translateX(-50%) scale(1); }
	.integration-node.animated:nth-child(5) { transform: translateX(-50%) scale(1); }

	.node-content {
		background: var(--bg-secondary);
		border: 1px solid var(--border-medium);
		border-radius: 8px;
		padding: 0.75rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.75rem;
		color: var(--text-secondary);
		min-width: 90px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
	}

	.node-content:hover {
		border-color: var(--color);
		color: var(--text-primary);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.node-status {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.node-status.status-connected {
		background: #10b981;
		box-shadow: 0 0 6px rgba(16, 185, 129, 0.4);
	}

	.node-status.status-active {
		background: var(--neon-green);
		box-shadow: 0 0 6px rgba(0, 212, 255, 0.4);
		animation: pulse 2s infinite;
	}

	.node-status.status-syncing {
		background: #f59e0b;
		box-shadow: 0 0 6px rgba(245, 158, 11, 0.4);
		animation: pulse 1.5s infinite;
	}

	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.5; }
	}

	.node-name {
		font-weight: 500;
		white-space: nowrap;
	}

	.connection-beam {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 2px;
		background: linear-gradient(to center, var(--neon-green), transparent);
		opacity: 0;
		transition: opacity 0.8s ease;
		transition-delay: calc(var(--delay) + 0.3s);
	}

	.connection-beam.animated {
		opacity: 0.6;
	}

	/* Position beams to connect to center */
	.integration-node:nth-child(2) .connection-beam { 
		height: 140px; 
		top: 100%; 
		transform: translateX(-50%);
	}
	.integration-node:nth-child(3) .connection-beam { 
		width: 140px; 
		height: 2px; 
		right: 100%; 
		transform: translateY(-50%);
	}
	.integration-node:nth-child(4) .connection-beam { 
		width: 140px; 
		height: 2px; 
		right: 100%; 
		transform: translateY(-50%);
	}
	.integration-node:nth-child(5) .connection-beam { 
		height: 140px; 
		bottom: 100%; 
		transform: translateX(-50%);
	}
	.integration-node:nth-child(6) .connection-beam { 
		width: 140px; 
		height: 2px; 
		left: 100%; 
		transform: translateY(-50%);
	}
	.integration-node:nth-child(7) .connection-beam { 
		width: 140px; 
		height: 2px; 
		left: 100%; 
		transform: translateY(-50%);
	}
</style>