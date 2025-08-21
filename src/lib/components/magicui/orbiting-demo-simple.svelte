<script lang="ts">
	import AIAgentIcons from './ai-agent-icons.svelte';

	export let className = '';

	// Define the 12 AI agents
	const agents = [
		'booking', 'payment', 'guest', 'maintenance', 'security', 'vendor',
		'analytics', 'inventory', 'escalation', 'ota', 'feedback', 'compliance'
	];
</script>

<div class="orbiting-demo {className}">
	<div class="orbit-container">
		<!-- Outer ring - 6 agents -->
		{#each agents.slice(0, 6) as agent, index}
			<div 
				class="orbit-item outer-ring"
				style="--index: {index}; --total: 6;"
			>
				<div class="agent-icon">
					<AIAgentIcons iconType={agent} size={20} />
				</div>
			</div>
		{/each}

		<!-- Inner ring - 6 agents -->
		{#each agents.slice(6, 12) as agent, index}
			<div 
				class="orbit-item inner-ring"
				style="--index: {index}; --total: 6;"
			>
				<div class="agent-icon">
					<AIAgentIcons iconType={agent} size={18} />
				</div>
			</div>
		{/each}

		<!-- Central Mr. Key -->
		<div class="center-key">
			<div class="key-container">
				<AIAgentIcons iconType="mrkey" size={28} />
				<div class="key-labels">
					<span class="key-name">Mr. Key</span>
					<span class="key-role">Orchestrator</span>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.orbiting-demo {
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
		aspect-ratio: 1;
		position: relative;
	}

	.orbit-container {
		width: 100%;
		height: 100%;
		position: relative;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.orbit-item {
		position: absolute;
		width: 45px;
		height: 45px;
		animation-duration: 20s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	.outer-ring {
		top: 50%;
		left: 50%;
		transform-origin: 0 0;
		animation-name: rotate-clockwise;
		animation-duration: 25s;
	}

	.inner-ring {
		top: 50%;
		left: 50%;
		transform-origin: 0 0;
		animation-name: rotate-counter;
		animation-duration: 18s;
	}

	/* Position agents around the circles */
	.outer-ring:nth-child(1) { transform: translate(-50%, -50%) rotate(0deg) translateX(180px) rotate(0deg); }
	.outer-ring:nth-child(2) { transform: translate(-50%, -50%) rotate(60deg) translateX(180px) rotate(-60deg); }
	.outer-ring:nth-child(3) { transform: translate(-50%, -50%) rotate(120deg) translateX(180px) rotate(-120deg); }
	.outer-ring:nth-child(4) { transform: translate(-50%, -50%) rotate(180deg) translateX(180px) rotate(-180deg); }
	.outer-ring:nth-child(5) { transform: translate(-50%, -50%) rotate(240deg) translateX(180px) rotate(-240deg); }
	.outer-ring:nth-child(6) { transform: translate(-50%, -50%) rotate(300deg) translateX(180px) rotate(-300deg); }

	.inner-ring:nth-child(7) { transform: translate(-50%, -50%) rotate(0deg) translateX(120px) rotate(0deg); }
	.inner-ring:nth-child(8) { transform: translate(-50%, -50%) rotate(60deg) translateX(120px) rotate(-60deg); }
	.inner-ring:nth-child(9) { transform: translate(-50%, -50%) rotate(120deg) translateX(120px) rotate(-120deg); }
	.inner-ring:nth-child(10) { transform: translate(-50%, -50%) rotate(180deg) translateX(120px) rotate(-180deg); }
	.inner-ring:nth-child(11) { transform: translate(-50%, -50%) rotate(240deg) translateX(120px) rotate(-240deg); }
	.inner-ring:nth-child(12) { transform: translate(-50%, -50%) rotate(300deg) translateX(120px) rotate(-300deg); }

	.agent-icon {
		width: 45px;
		height: 45px;
		background: var(--bg-secondary);
		border: 2px solid var(--neon-green);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 0 15px rgba(0, 255, 136, 0.3);
		transition: all 0.3s ease;
	}

	.inner-ring .agent-icon {
		width: 38px;
		height: 38px;
	}

	.agent-icon:hover {
		box-shadow: 0 0 25px rgba(0, 255, 136, 0.6);
		transform: scale(1.15);
		border-color: var(--neon-green-light);
	}

	.center-key {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
	}

	.key-container {
		width: 90px;
		height: 90px;
		background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
		border: 3px solid var(--neon-green);
		border-radius: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2px;
		box-shadow: 
			0 0 30px rgba(0, 255, 136, 0.4),
			inset 0 0 20px rgba(0, 255, 136, 0.1);
		animation: pulse 3s ease-in-out infinite;
	}

	.key-labels {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2px;
	}

	.key-name {
		font-size: 0.7rem;
		font-weight: 700;
		color: var(--neon-green);
		line-height: 1;
	}

	.key-role {
		font-size: 0.45rem;
		font-weight: 500;
		color: var(--text-secondary);
		line-height: 1;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	@keyframes rotate-clockwise {
		from {
			transform: translate(-50%, -50%) rotate(0deg) translateX(180px) rotate(0deg);
		}
		to {
			transform: translate(-50%, -50%) rotate(360deg) translateX(180px) rotate(-360deg);
		}
	}

	@keyframes rotate-counter {
		from {
			transform: translate(-50%, -50%) rotate(0deg) translateX(120px) rotate(0deg);
		}
		to {
			transform: translate(-50%, -50%) rotate(-360deg) translateX(120px) rotate(360deg);
		}
	}

	@keyframes pulse {
		0%, 100% {
			box-shadow: 
				0 0 30px rgba(0, 255, 136, 0.4),
				inset 0 0 20px rgba(0, 255, 136, 0.1);
		}
		50% {
			box-shadow: 
				0 0 40px rgba(0, 255, 136, 0.6),
				inset 0 0 30px rgba(0, 255, 136, 0.2);
		}
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.orbiting-demo {
			max-width: 400px;
		}
		
		.outer-ring:nth-child(1) { transform: translate(-50%, -50%) rotate(0deg) translateX(140px) rotate(0deg); }
		.outer-ring:nth-child(2) { transform: translate(-50%, -50%) rotate(60deg) translateX(140px) rotate(-60deg); }
		.outer-ring:nth-child(3) { transform: translate(-50%, -50%) rotate(120deg) translateX(140px) rotate(-120deg); }
		.outer-ring:nth-child(4) { transform: translate(-50%, -50%) rotate(180deg) translateX(140px) rotate(-180deg); }
		.outer-ring:nth-child(5) { transform: translate(-50%, -50%) rotate(240deg) translateX(140px) rotate(-240deg); }
		.outer-ring:nth-child(6) { transform: translate(-50%, -50%) rotate(300deg) translateX(140px) rotate(-300deg); }

		.inner-ring:nth-child(7) { transform: translate(-50%, -50%) rotate(0deg) translateX(90px) rotate(0deg); }
		.inner-ring:nth-child(8) { transform: translate(-50%, -50%) rotate(60deg) translateX(90px) rotate(-60deg); }
		.inner-ring:nth-child(9) { transform: translate(-50%, -50%) rotate(120deg) translateX(90px) rotate(-120deg); }
		.inner-ring:nth-child(10) { transform: translate(-50%, -50%) rotate(180deg) translateX(90px) rotate(-180deg); }
		.inner-ring:nth-child(11) { transform: translate(-50%, -50%) rotate(240deg) translateX(90px) rotate(-240deg); }
		.inner-ring:nth-child(12) { transform: translate(-50%, -50%) rotate(300deg) translateX(90px) rotate(-300deg); }

		@keyframes rotate-clockwise {
			from {
				transform: translate(-50%, -50%) rotate(0deg) translateX(140px) rotate(0deg);
			}
			to {
				transform: translate(-50%, -50%) rotate(360deg) translateX(140px) rotate(-360deg);
			}
		}

		@keyframes rotate-counter {
			from {
				transform: translate(-50%, -50%) rotate(0deg) translateX(90px) rotate(0deg);
			}
			to {
				transform: translate(-50%, -50%) rotate(-360deg) translateX(90px) rotate(360deg);
			}
		}

		.agent-icon {
			width: 38px;
			height: 38px;
		}

		.inner-ring .agent-icon {
			width: 32px;
			height: 32px;
		}

		.key-container {
			width: 70px;
			height: 70px;
		}

		.key-name {
			font-size: 0.6rem;
		}

		.key-role {
			font-size: 0.4rem;
		}
	}
</style>