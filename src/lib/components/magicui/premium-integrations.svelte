<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let className = '';

	let mounted = false;

	const integrations = [
		{ name: 'Airbnb', status: 'online', syncActive: true, logo: '🏠', lastSync: '2 min ago' },
		{ name: 'Booking.com', status: 'online', syncActive: false, logo: '🌐', lastSync: '5 min ago' },
		{ name: 'Vrbo', status: 'syncing', syncActive: true, logo: '🏖️', lastSync: 'syncing...' },
		{ name: 'Expedia', status: 'online', syncActive: true, logo: '🛫', lastSync: '8 min ago' },
		{ name: 'Razorpay', status: 'online', syncActive: true, logo: '💳', lastSync: '3 min ago' },
		{ name: 'MakeMyTrip', status: 'online', syncActive: false, logo: '✈️', lastSync: '6 min ago' }
	];

	onMount(() => {
		if (browser) {
			mounted = true;
			console.log('Premium Integrations mounted with', integrations.length, 'integrations');
		}
	});

	function getStatusColor(status: string) {
		switch (status) {
			case 'online': return '#00ff88';
			case 'syncing': return '#ffa500';
			case 'offline': return '#ff4444';
			default: return '#888888';
		}
	}
</script>

{#if mounted}
<div class="premium-integrations {className}">
	<div class="integrations-header">
		<div class="header-title">
			<span class="title-text">Multi-Platform Panel</span>
			<div class="sync-indicator">
				<div class="sync-dot"></div>
				<span>Real-time sync</span>
			</div>
		</div>
		<div class="connection-stats">
			<span class="online-count">{integrations.filter(i => i.status === 'online').length}</span>
			<span class="stats-label">online</span>
		</div>
	</div>

	<div class="integrations-grid">
		{#each integrations as integration, i}
			<div 
				class="integration-card {integration.status}"
				class:sync-active={integration.syncActive}
				style="--delay: {i * 0.1}s; --float-duration: {2 + (i % 3) * 0.5}s;"
			>
				<div class="integration-logo">
					<span class="logo-emoji">{integration.logo}</span>
					<div class="logo-glow"></div>
				</div>
				
				<div class="integration-info">
					<div class="integration-name">{integration.name}</div>
					<div class="integration-status">
						<div 
							class="status-dot" 
							style="--status-color: {getStatusColor(integration.status)}"
						></div>
						<span class="status-text">{integration.status}</span>
					</div>
				</div>
				
				{#if integration.status === 'online'}
					<div class="success-checkmark">
						<svg width="8" height="8" viewBox="0 0 24 24" fill="none">
							<path d="M20 6L9 17L4 12" stroke="#00ff88" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				{/if}
				
				{#if integration.syncActive}
					<div class="sync-animation">
						<div class="sync-line line-1"></div>
						<div class="sync-line line-2"></div>
						<div class="sync-line line-3"></div>
					</div>
				{/if}
				
				<div class="connection-pulse"></div>
			</div>
		{/each}
	</div>
</div>
{/if}

<style>
	.premium-integrations {
		position: absolute;
		top: 60px;
		right: 12px;
		left: 12px;
		bottom: 16px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: calc(100% - 24px);
		box-sizing: border-box;
	}

	.integrations-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding-bottom: 8px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.header-title {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.title-text {
		font-size: 0.8rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.9);
	}

	.sync-indicator {
		display: flex;
		align-items: center;
		gap: 4px;
		font-size: 0.6rem;
		color: rgba(255, 255, 255, 0.6);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.sync-dot {
		width: 4px;
		height: 4px;
		background: #00ff88;
		border-radius: 50%;
		animation: sync-pulse 2s ease-in-out infinite;
	}

	.connection-stats {
		display: flex;
		align-items: center;
		gap: 4px;
		background: rgba(0, 255, 136, 0.1);
		padding: 4px 8px;
		border-radius: 8px;
		border: 1px solid rgba(0, 255, 136, 0.3);
	}

	.online-count {
		font-size: 0.7rem;
		font-weight: 700;
		color: #00ff88;
	}

	.stats-label {
		font-size: 0.6rem;
		color: rgba(255, 255, 255, 0.7);
	}

	.integrations-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 1fr);
		gap: 8px;
		flex: 1;
		min-height: 160px;
		max-height: 200px;
		padding: 0 16px;
		width: 100%;
		box-sizing: border-box;
	}

	.integration-card {
		position: relative;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 6px;
		padding: 6px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 3px;
		height: 100%;
		min-height: 65px;
		max-height: 65px;
		width: 100%;
		box-sizing: border-box;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		animation: float-gentle var(--float-duration) ease-in-out infinite;
		animation-delay: var(--delay);
		cursor: pointer;
		overflow: hidden;
	}

	.integration-card:hover {
		background: rgba(255, 255, 255, 0.08);
		border-color: rgba(0, 255, 136, 0.4);
		transform: translateY(-3px) scale(1.03);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
	}

	.integration-card:hover .integration-logo {
		transform: scale(1.1) rotate(5deg);
		background: rgba(0, 255, 136, 0.1);
	}

	.integration-card:hover .logo-emoji {
		filter: drop-shadow(0 0 8px rgba(0, 255, 136, 0.6));
	}

	.integration-card.online {
		border-color: rgba(0, 255, 136, 0.3);
		background: radial-gradient(circle at top left, rgba(0, 255, 136, 0.05) 0%, transparent 60%);
	}

	.integration-card.syncing {
		border-color: rgba(255, 165, 0, 0.3);
		background: radial-gradient(circle at top left, rgba(255, 165, 0, 0.05) 0%, transparent 60%);
	}

	.integration-card.offline {
		border-color: rgba(255, 68, 68, 0.3);
		background: radial-gradient(circle at top left, rgba(255, 68, 68, 0.05) 0%, transparent 60%);
		opacity: 0.7;
	}

	.integration-logo {
		position: relative;
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 4px;
		flex-shrink: 0;
		margin-bottom: 2px;
		transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.logo-emoji {
		font-size: 0.9rem;
		filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.3));
	}

	.logo-glow {
		position: absolute;
		inset: -2px;
		background: radial-gradient(circle, var(--status-color, transparent) 0%, transparent 70%);
		border-radius: 8px;
		opacity: 0.3;
		animation: logo-glow-pulse 3s ease-in-out infinite;
	}

	.integration-info {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2px;
		width: 100%;
	}

	.integration-name {
		font-size: 0.55rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.9);
		margin-bottom: 1px;
		text-align: center;
		line-height: 1.1;
	}

	.integration-status {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 3px;
		width: 100%;
	}

	.status-dot {
		width: 3px;
		height: 3px;
		background: var(--status-color);
		border-radius: 50%;
		animation: status-blink 2s ease-in-out infinite;
	}

	.status-text {
		font-size: 0.5rem;
		color: rgba(255, 255, 255, 0.6);
		text-transform: capitalize;
		font-weight: 500;
	}


	.success-checkmark {
		position: absolute;
		top: 4px;
		right: 4px;
		width: 12px;
		height: 12px;
		background: rgba(0, 255, 136, 0.2);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		animation: checkmark-pulse 2s ease-in-out infinite;
	}

	.sync-animation {
		position: absolute;
		top: 0;
		right: 0;
		width: 20px;
		height: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1px;
		opacity: 0.6;
	}

	.sync-line {
		height: 1px;
		background: var(--status-color, #ffa500);
		border-radius: 0.5px;
		animation: sync-flow 1.5s ease-in-out infinite;
	}

	.line-1 { animation-delay: 0s; width: 8px; }
	.line-2 { animation-delay: 0.2s; width: 12px; }
	.line-3 { animation-delay: 0.4s; width: 6px; }

	.connection-pulse {
		position: absolute;
		inset: -1px;
		border: 1px solid var(--status-color, transparent);
		border-radius: 11px;
		opacity: 0;
		animation: connection-pulse 4s ease-in-out infinite;
	}


	/* Animations */
	@keyframes float-gentle {
		0%, 100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-2px);
		}
	}

	@keyframes sync-pulse {
		0%, 100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.5;
			transform: scale(1.2);
		}
	}

	@keyframes logo-glow-pulse {
		0%, 100% {
			opacity: 0.2;
		}
		50% {
			opacity: 0.4;
		}
	}

	@keyframes status-blink {
		0%, 100% {
			opacity: 1;
		}
		50% {
			opacity: 0.4;
		}
	}

	@keyframes checkmark-pulse {
		0%, 100% {
			opacity: 0.8;
			transform: scale(1);
		}
		50% {
			opacity: 1;
			transform: scale(1.1);
		}
	}

	@keyframes sync-flow {
		0%, 100% {
			opacity: 0.3;
			transform: translateX(-50%);
		}
		50% {
			opacity: 1;
			transform: translateX(50%);
		}
	}

	@keyframes connection-pulse {
		0%, 100% {
			opacity: 0;
			transform: scale(1);
		}
		50% {
			opacity: 0.5;
			transform: scale(1.05);
		}
	}


	/* Responsive adjustments */
	@media (max-width: 768px) {
		.integrations-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 6px;
			padding: 0 8px;
		}

		.integration-card {
			padding: 6px 4px;
			min-height: 55px;
			max-height: 55px;
		}

		.integration-name {
			font-size: 0.5rem;
		}

		.premium-integrations {
			top: 50px;
			gap: 8px;
		}
	}

	@media (max-width: 480px) {
		.integrations-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 4px;
			padding: 0 4px;
		}

		.integration-card {
			padding: 4px 2px;
			min-height: 50px;
			max-height: 50px;
			gap: 2px;
		}

		.integration-name {
			font-size: 0.45rem;
		}

		.status-text {
			font-size: 0.4rem;
		}
	}
</style>