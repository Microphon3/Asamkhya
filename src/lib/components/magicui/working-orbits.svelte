<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import AIAgentIcons from './ai-agent-icons.svelte';

	export let className = '';

	let mounted = false;

	onMount(() => {
		if (browser) {
			mounted = true;
		}
	});

	// Agent types for the orbiting circles
	const outerAgents = ['booking', 'payment', 'guest', 'maintenance', 'security', 'vendor'];
	const innerAgents = ['analytics', 'inventory', 'escalation', 'ota', 'feedback', 'compliance'];
</script>

{#if mounted}
<div class="orbit-system {className}">
	<div class="orbit-container">
		
		<!-- Outer Circle Agents -->
		<div class="orbit-ring outer-ring">
			{#each outerAgents as agentType, i}
				<div class="agent-orbit-item" style="--delay: {i * 0.5}s">
					<div class="agent-bubble">
						<AIAgentIcons iconType={agentType} size={20} />
					</div>
				</div>
			{/each}
		</div>

		<!-- Inner Circle Agents -->
		<div class="orbit-ring inner-ring">
			{#each innerAgents as agentType, i}
				<div class="agent-orbit-item" style="--delay: {i * 0.3}s">
					<div class="agent-bubble small">
						<AIAgentIcons iconType={agentType} size={16} />
					</div>
				</div>
			{/each}
		</div>

		<!-- Central Mr. Key -->
		<div class="central-orchestrator">
			<div class="orchestrator-bubble">
				<AIAgentIcons iconType="mrkey" size={24} />
			</div>
			<div class="orchestrator-label">
				<div class="label-name">Mr. Key</div>
				<div class="label-role">Orchestrator</div>
			</div>
		</div>

	</div>
</div>
{/if}

<style>
	.orbit-system {
		width: 100%;
		max-width: 450px;
		aspect-ratio: 1;
		margin: 0 auto;
		position: relative;
	}

	.orbit-container {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.orbit-ring {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
	}

	.outer-ring {
		width: 320px;
		height: 320px;
		animation: rotate-clockwise 20s linear infinite;
	}

	.inner-ring {
		width: 200px;
		height: 200px;
		animation: rotate-counter 15s linear infinite;
	}

	.agent-orbit-item {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		animation-delay: var(--delay, 0s);
	}

	.agent-orbit-item:nth-child(1) { transform: translateX(-50%) rotate(0deg) translateY(-160px) rotate(0deg); }
	.agent-orbit-item:nth-child(2) { transform: translateX(-50%) rotate(60deg) translateY(-160px) rotate(-60deg); }
	.agent-orbit-item:nth-child(3) { transform: translateX(-50%) rotate(120deg) translateY(-160px) rotate(-120deg); }
	.agent-orbit-item:nth-child(4) { transform: translateX(-50%) rotate(180deg) translateY(-160px) rotate(-180deg); }
	.agent-orbit-item:nth-child(5) { transform: translateX(-50%) rotate(240deg) translateY(-160px) rotate(-240deg); }
	.agent-orbit-item:nth-child(6) { transform: translateX(-50%) rotate(300deg) translateY(-160px) rotate(-300deg); }

	.inner-ring .agent-orbit-item:nth-child(1) { transform: translateX(-50%) rotate(0deg) translateY(-100px) rotate(0deg); }
	.inner-ring .agent-orbit-item:nth-child(2) { transform: translateX(-50%) rotate(60deg) translateY(-100px) rotate(-60deg); }
	.inner-ring .agent-orbit-item:nth-child(3) { transform: translateX(-50%) rotate(120deg) translateY(-100px) rotate(-120deg); }
	.inner-ring .agent-orbit-item:nth-child(4) { transform: translateX(-50%) rotate(180deg) translateY(-100px) rotate(-180deg); }
	.inner-ring .agent-orbit-item:nth-child(5) { transform: translateX(-50%) rotate(240deg) translateY(-100px) rotate(-240deg); }
	.inner-ring .agent-orbit-item:nth-child(6) { transform: translateX(-50%) rotate(300deg) translateY(-100px) rotate(-300deg); }

	.agent-bubble {
		width: 42px;
		height: 42px;
		background: var(--bg-secondary);
		border: 2px solid var(--neon-green);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 0 12px rgba(0, 255, 136, 0.3);
		transition: all 0.3s ease;
	}

	.agent-bubble.small {
		width: 36px;
		height: 36px;
	}

	.agent-bubble:hover {
		transform: scale(1.2);
		box-shadow: 0 0 20px rgba(0, 255, 136, 0.6);
		border-color: var(--neon-green-light);
	}

	.central-orchestrator {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		z-index: 10;
	}

	.orchestrator-bubble {
		width: 80px;
		height: 80px;
		background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
		border: 3px solid var(--neon-green);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 
			0 0 25px rgba(0, 255, 136, 0.4),
			inset 0 0 15px rgba(0, 255, 136, 0.1);
		animation: pulse-glow 2.5s ease-in-out infinite;
		margin: 0 auto 8px;
	}

	.orchestrator-label {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1px;
	}

	.label-name {
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--neon-green);
		line-height: 1;
	}

	.label-role {
		font-size: 0.5rem;
		font-weight: 500;
		color: var(--text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		line-height: 1;
	}

	@keyframes rotate-clockwise {
		from {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		to {
			transform: translate(-50%, -50%) rotate(360deg);
		}
	}

	@keyframes rotate-counter {
		from {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		to {
			transform: translate(-50%, -50%) rotate(-360deg);
		}
	}

	@keyframes pulse-glow {
		0%, 100% {
			box-shadow: 
				0 0 25px rgba(0, 255, 136, 0.4),
				inset 0 0 15px rgba(0, 255, 136, 0.1);
		}
		50% {
			box-shadow: 
				0 0 35px rgba(0, 255, 136, 0.6),
				inset 0 0 25px rgba(0, 255, 136, 0.2);
		}
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.orbit-system {
			max-width: 350px;
		}

		.outer-ring {
			width: 250px;
			height: 250px;
		}

		.inner-ring {
			width: 160px;
			height: 160px;
		}

		.agent-orbit-item:nth-child(1) { transform: translateX(-50%) rotate(0deg) translateY(-125px) rotate(0deg); }
		.agent-orbit-item:nth-child(2) { transform: translateX(-50%) rotate(60deg) translateY(-125px) rotate(-60deg); }
		.agent-orbit-item:nth-child(3) { transform: translateX(-50%) rotate(120deg) translateY(-125px) rotate(-120deg); }
		.agent-orbit-item:nth-child(4) { transform: translateX(-50%) rotate(180deg) translateY(-125px) rotate(-180deg); }
		.agent-orbit-item:nth-child(5) { transform: translateX(-50%) rotate(240deg) translateY(-125px) rotate(-240deg); }
		.agent-orbit-item:nth-child(6) { transform: translateX(-50%) rotate(300deg) translateY(-125px) rotate(-300deg); }

		.inner-ring .agent-orbit-item:nth-child(1) { transform: translateX(-50%) rotate(0deg) translateY(-80px) rotate(0deg); }
		.inner-ring .agent-orbit-item:nth-child(2) { transform: translateX(-50%) rotate(60deg) translateY(-80px) rotate(-60deg); }
		.inner-ring .agent-orbit-item:nth-child(3) { transform: translateX(-50%) rotate(120deg) translateY(-80px) rotate(-120deg); }
		.inner-ring .agent-orbit-item:nth-child(4) { transform: translateX(-50%) rotate(180deg) translateY(-80px) rotate(-180deg); }
		.inner-ring .agent-orbit-item:nth-child(5) { transform: translateX(-50%) rotate(240deg) translateY(-80px) rotate(-240deg); }
		.inner-ring .agent-orbit-item:nth-child(6) { transform: translateX(-50%) rotate(300deg) translateY(-80px) rotate(-300deg); }

		.agent-bubble {
			width: 36px;
			height: 36px;
		}

		.agent-bubble.small {
			width: 30px;
			height: 30px;
		}

		.orchestrator-bubble {
			width: 65px;
			height: 65px;
		}

		.label-name {
			font-size: 0.65rem;
		}

		.label-role {
			font-size: 0.45rem;
		}
	}
</style>