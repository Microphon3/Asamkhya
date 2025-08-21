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

	const agents = [
		// Inner ring - 4 agents
		{ id: 'booking', name: 'Booking Engine', ring: 'inner', index: 0 },
		{ id: 'payment', name: 'Payment Gateway', ring: 'inner', index: 1 },
		{ id: 'guest', name: 'Guest Relations', ring: 'inner', index: 2 },
		{ id: 'maintenance', name: 'Maintenance Hub', ring: 'inner', index: 3 },
		
		// Middle ring - 4 agents  
		{ id: 'security', name: 'Security Shield', ring: 'middle', index: 0 },
		{ id: 'vendor', name: 'Vendor Network', ring: 'middle', index: 1 },
		{ id: 'analytics', name: 'Analytics Engine', ring: 'middle', index: 2 },
		{ id: 'inventory', name: 'Asset Tracking', ring: 'middle', index: 3 },
		
		// Outer ring - 4 agents
		{ id: 'escalation', name: 'Issue Escalation', ring: 'outer', index: 0 },
		{ id: 'ota', name: 'Channel Manager', ring: 'outer', index: 1 },
		{ id: 'feedback', name: 'Experience AI', ring: 'outer', index: 2 },
		{ id: 'compliance', name: 'Compliance Suite', ring: 'outer', index: 3 }
	];
</script>

{#if mounted}
<div class="orbital-system {className}">
	<div class="orbit-container">
		
		<!-- Agent Nodes -->
		{#each agents as agent}
			<div 
				class="agent-node {agent.ring}-ring"
				style="--agent-index: {agent.index};"
			>
				<div class="node-wrapper">
					<div class="node-glow"></div>
					<div class="node-circle">
						<AIAgentIcons iconType={agent.id} size={20} />
					</div>
				</div>
				<div class="agent-tooltip">
					{agent.name}
				</div>
			</div>
		{/each}

		<!-- Central Command -->
		<div class="central-command">
			<div class="command-glow"></div>
			<div class="command-circle">
				<AIAgentIcons iconType="mrkey" size={32} />
			</div>
			<div class="command-info">
				<div class="command-title">Mr. Key</div>
				<div class="command-subtitle">Neural Orchestrator</div>
				<div class="command-stats">
					<span>12 Agents</span>
					<span>∞ Ops/sec</span>
				</div>
			</div>
		</div>
		
	</div>
</div>
{/if}

<style>
	.orbital-system {
		width: 100%;
		max-width: 600px;
		height: 600px;
		margin: 0 auto;
		position: relative;
		background: 
			radial-gradient(circle at center, rgba(15, 21, 40, 0.95) 0%, rgba(0, 0, 0, 0.98) 100%);
		border-radius: 20px;
		overflow: hidden;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
	}

	.orbit-container {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Agent Positioning */
	.agent-node {
		position: absolute;
		top: 50%;
		left: 50%;
	}

	.inner-ring {
		animation: orbit-clockwise 20s linear infinite;
	}
	
	.middle-ring {
		animation: orbit-counter 30s linear infinite;
	}
	
	.outer-ring {
		animation: orbit-clockwise 40s linear infinite;
	}

	/* Position agents around each ring */
	.inner-ring[style*="--agent-index: 0"] {
		transform: translate(-50%, -50%) rotate(0deg) translateY(-120px) rotate(0deg);
	}
	.inner-ring[style*="--agent-index: 1"] {
		transform: translate(-50%, -50%) rotate(90deg) translateY(-120px) rotate(-90deg);
	}
	.inner-ring[style*="--agent-index: 2"] {
		transform: translate(-50%, -50%) rotate(180deg) translateY(-120px) rotate(-180deg);
	}
	.inner-ring[style*="--agent-index: 3"] {
		transform: translate(-50%, -50%) rotate(270deg) translateY(-120px) rotate(-270deg);
	}

	.middle-ring[style*="--agent-index: 0"] {
		transform: translate(-50%, -50%) rotate(45deg) translateY(-180px) rotate(-45deg);
	}
	.middle-ring[style*="--agent-index: 1"] {
		transform: translate(-50%, -50%) rotate(135deg) translateY(-180px) rotate(-135deg);
	}
	.middle-ring[style*="--agent-index: 2"] {
		transform: translate(-50%, -50%) rotate(225deg) translateY(-180px) rotate(-225deg);
	}
	.middle-ring[style*="--agent-index: 3"] {
		transform: translate(-50%, -50%) rotate(315deg) translateY(-180px) rotate(-315deg);
	}

	.outer-ring[style*="--agent-index: 0"] {
		transform: translate(-50%, -50%) rotate(22.5deg) translateY(-240px) rotate(-22.5deg);
	}
	.outer-ring[style*="--agent-index: 1"] {
		transform: translate(-50%, -50%) rotate(112.5deg) translateY(-240px) rotate(-112.5deg);
	}
	.outer-ring[style*="--agent-index: 2"] {
		transform: translate(-50%, -50%) rotate(202.5deg) translateY(-240px) rotate(-202.5deg);
	}
	.outer-ring[style*="--agent-index: 3"] {
		transform: translate(-50%, -50%) rotate(292.5deg) translateY(-240px) rotate(-292.5deg);
	}

	/* Node Styling */
	.node-wrapper {
		position: relative;
		width: 60px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.node-glow {
		position: absolute;
		top: -10px;
		left: -10px;
		right: -10px;
		bottom: -10px;
		background: radial-gradient(circle, rgba(0, 255, 136, 0.2) 0%, transparent 70%);
		border-radius: 50%;
		animation: node-pulse 3s ease-in-out infinite;
	}

	.node-circle {
		position: relative;
		width: 60px;
		height: 60px;
		background: linear-gradient(135deg, rgba(15, 21, 40, 0.9) 0%, rgba(30, 42, 74, 0.8) 100%);
		border: 2px solid var(--neon-green);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 0 20px rgba(0, 255, 136, 0.4);
		transition: all 0.3s ease;
	}

	.node-circle:hover {
		transform: scale(1.1);
		box-shadow: 0 0 30px rgba(0, 255, 136, 0.6);
	}

	.agent-tooltip {
		position: absolute;
		top: 70px;
		left: 50%;
		transform: translateX(-50%);
		background: rgba(0, 0, 0, 0.8);
		color: rgba(255, 255, 255, 0.9);
		padding: 4px 8px;
		border-radius: 6px;
		font-size: 0.7rem;
		font-weight: 500;
		white-space: nowrap;
		border: 1px solid rgba(0, 255, 136, 0.3);
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.2s ease;
	}

	.node-wrapper:hover .agent-tooltip {
		opacity: 1;
	}

	/* Central Command */
	.central-command {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		z-index: 10;
	}

	.command-glow {
		position: absolute;
		top: -20px;
		left: -20px;
		right: -20px;
		bottom: -20px;
		background: radial-gradient(circle, rgba(0, 255, 136, 0.15) 0%, transparent 70%);
		border-radius: 50%;
		animation: command-pulse 4s ease-in-out infinite;
	}

	.command-circle {
		position: relative;
		width: 120px;
		height: 120px;
		background: 
			radial-gradient(circle at 30% 30%, rgba(0, 255, 136, 0.1) 0%, transparent 60%),
			linear-gradient(135deg, rgba(15, 21, 40, 0.95) 0%, rgba(30, 42, 74, 0.9) 100%);
		border: 3px solid var(--neon-green);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 
			0 0 40px rgba(0, 255, 136, 0.5),
			inset 0 0 20px rgba(0, 255, 136, 0.1);
		margin: 0 auto 12px;
	}

	.command-info {
		background: rgba(0, 0, 0, 0.7);
		border: 1px solid rgba(0, 255, 136, 0.3);
		border-radius: 12px;
		padding: 12px 16px;
		backdrop-filter: blur(10px);
	}

	.command-title {
		font-size: 1rem;
		font-weight: 700;
		color: var(--neon-green);
		margin-bottom: 4px;
		text-shadow: 0 0 10px rgba(0, 255, 136, 0.6);
	}

	.command-subtitle {
		font-size: 0.7rem;
		color: rgba(255, 255, 255, 0.7);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 8px;
	}

	.command-stats {
		display: flex;
		gap: 16px;
		justify-content: center;
		font-size: 0.65rem;
		color: rgba(255, 255, 255, 0.8);
	}

	.command-stats span {
		background: rgba(0, 255, 136, 0.1);
		padding: 2px 6px;
		border-radius: 4px;
		border: 1px solid rgba(0, 255, 136, 0.2);
	}

	/* Animations */
	@keyframes orbit-clockwise {
		from {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		to {
			transform: translate(-50%, -50%) rotate(360deg);
		}
	}

	@keyframes orbit-counter {
		from {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		to {
			transform: translate(-50%, -50%) rotate(-360deg);
		}
	}

	@keyframes node-pulse {
		0%, 100% { opacity: 0.6; }
		50% { opacity: 1; }
	}

	@keyframes command-pulse {
		0%, 100% { opacity: 0.8; transform: scale(1); }
		50% { opacity: 1; transform: scale(1.05); }
	}

	/* Responsive */
	@media (max-width: 768px) {
		.orbital-system {
			max-width: 500px;
			height: 500px;
		}

		.inner-ring[style*="--agent-index: 0"] { transform: translate(-50%, -50%) rotate(0deg) translateY(-100px) rotate(0deg); }
		.inner-ring[style*="--agent-index: 1"] { transform: translate(-50%, -50%) rotate(90deg) translateY(-100px) rotate(-90deg); }
		.inner-ring[style*="--agent-index: 2"] { transform: translate(-50%, -50%) rotate(180deg) translateY(-100px) rotate(-180deg); }
		.inner-ring[style*="--agent-index: 3"] { transform: translate(-50%, -50%) rotate(270deg) translateY(-100px) rotate(-270deg); }

		.middle-ring[style*="--agent-index: 0"] { transform: translate(-50%, -50%) rotate(45deg) translateY(-150px) rotate(-45deg); }
		.middle-ring[style*="--agent-index: 1"] { transform: translate(-50%, -50%) rotate(135deg) translateY(-150px) rotate(-135deg); }
		.middle-ring[style*="--agent-index: 2"] { transform: translate(-50%, -50%) rotate(225deg) translateY(-150px) rotate(-225deg); }
		.middle-ring[style*="--agent-index: 3"] { transform: translate(-50%, -50%) rotate(315deg) translateY(-150px) rotate(-315deg); }

		.outer-ring[style*="--agent-index: 0"] { transform: translate(-50%, -50%) rotate(22.5deg) translateY(-200px) rotate(-22.5deg); }
		.outer-ring[style*="--agent-index: 1"] { transform: translate(-50%, -50%) rotate(112.5deg) translateY(-200px) rotate(-112.5deg); }
		.outer-ring[style*="--agent-index: 2"] { transform: translate(-50%, -50%) rotate(202.5deg) translateY(-200px) rotate(-202.5deg); }
		.outer-ring[style*="--agent-index: 3"] { transform: translate(-50%, -50%) rotate(292.5deg) translateY(-200px) rotate(-292.5deg); }

		.node-wrapper {
			width: 50px;
			height: 50px;
		}

		.node-circle {
			width: 50px;
			height: 50px;
		}

		.command-circle {
			width: 100px;
			height: 100px;
		}
	}
</style>