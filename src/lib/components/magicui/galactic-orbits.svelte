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

	// Scientific orbital arrangement - 12 agents in 3 orbital rings
	const innerRing = ['booking', 'payment', 'guest', 'maintenance']; // 4 agents, closest orbit
	const middleRing = ['security', 'vendor', 'analytics', 'inventory']; // 4 agents, medium orbit  
	const outerRing = ['escalation', 'ota', 'feedback', 'compliance']; // 4 agents, furthest orbit
</script>

{#if mounted}
<div class="galactic-system {className}">
	<div class="cosmic-container">
		
		<!-- Orbital Rings Visual Guide -->
		<div class="orbital-ring ring-inner"></div>
		<div class="orbital-ring ring-middle"></div>
		<div class="orbital-ring ring-outer"></div>
		
		<!-- Inner Ring - High Frequency Operations (4 agents) -->
		{#each innerRing as agentType, i}
			<div class="orbit-agent inner-orbit" style="--agent-index: {i}; --ring-total: {innerRing.length};">
				<div class="agent-satellite">
					<div class="satellite-glow"></div>
					<div class="satellite-core">
						<AIAgentIcons iconType={agentType} size={18} />
					</div>
				</div>
			</div>
		{/each}

		<!-- Middle Ring - Medium Frequency Operations (4 agents) -->
		{#each middleRing as agentType, i}
			<div class="orbit-agent middle-orbit" style="--agent-index: {i}; --ring-total: {middleRing.length};">
				<div class="agent-satellite">
					<div class="satellite-glow"></div>
					<div class="satellite-core">
						<AIAgentIcons iconType={agentType} size={20} />
					</div>
				</div>
			</div>
		{/each}

		<!-- Outer Ring - Strategic Operations (4 agents) -->
		{#each outerRing as agentType, i}
			<div class="orbit-agent outer-orbit" style="--agent-index: {i}; --ring-total: {outerRing.length};">
				<div class="agent-satellite">
					<div class="satellite-glow"></div>
					<div class="satellite-core">
						<AIAgentIcons iconType={agentType} size={22} />
					</div>
				</div>
			</div>
		{/each}

		<!-- Central Command - Mr. Key -->
		<div class="central-command">
			<div class="command-halo"></div>
			<div class="command-core">
				<div class="core-pulse"></div>
				<div class="core-icon">
					<AIAgentIcons iconType="mrkey" size={32} />
				</div>
				<div class="command-labels">
					<div class="command-title">Mr. Key</div>
					<div class="command-subtitle">Central Command</div>
				</div>
			</div>
		</div>

		<!-- Galactic Background Effects -->
		<div class="cosmic-particles"></div>
	</div>
</div>
{/if}

<style>
	.galactic-system {
		width: 100%;
		max-width: 600px;
		aspect-ratio: 1;
		margin: 0 auto;
		position: relative;
		background: radial-gradient(ellipse at center, 
			rgba(15, 21, 40, 0.9) 0%, 
			rgba(0, 0, 0, 0.95) 70%, 
			rgba(0, 0, 0, 1) 100%);
		border-radius: 50%;
		overflow: hidden;
	}

	.cosmic-container {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Orbital Ring Guides - Subtle visual rings */
	.orbital-ring {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 1px solid rgba(0, 255, 136, 0.1);
		border-radius: 50%;
		pointer-events: none;
	}

	.ring-inner {
		width: 180px;
		height: 180px;
		animation: rotate-ring 60s linear infinite;
	}

	.ring-middle {
		width: 280px;
		height: 280px;
		animation: rotate-ring 90s linear infinite reverse;
	}

	.ring-outer {
		width: 380px;
		height: 380px;
		animation: rotate-ring 120s linear infinite;
	}

	/* Agent Orbital Mechanics */
	.orbit-agent {
		position: absolute;
		top: 50%;
		left: 50%;
		transform-origin: 0 0;
	}

	.inner-orbit {
		animation: scientific-orbit-inner 25s linear infinite;
	}

	.middle-orbit {
		animation: scientific-orbit-middle 35s linear infinite reverse;
	}

	.outer-orbit {
		animation: scientific-orbit-outer 45s linear infinite;
	}

	/* Agent Satellite Design */
	.agent-satellite {
		position: relative;
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.satellite-glow {
		position: absolute;
		top: -8px;
		left: -8px;
		right: -8px;
		bottom: -8px;
		background: radial-gradient(circle, 
			rgba(0, 255, 136, 0.3) 0%, 
			rgba(0, 255, 136, 0.1) 40%, 
			transparent 70%);
		border-radius: 50%;
		animation: satellite-pulse 3s ease-in-out infinite;
	}

	.satellite-core {
		position: relative;
		width: 48px;
		height: 48px;
		background: linear-gradient(135deg, 
			rgba(15, 21, 40, 0.9) 0%, 
			rgba(30, 42, 74, 0.8) 50%, 
			rgba(15, 21, 40, 0.9) 100%);
		border: 2px solid var(--neon-green);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 
			0 0 15px rgba(0, 255, 136, 0.4),
			inset 0 0 10px rgba(0, 255, 136, 0.1);
		transition: all 0.3s ease;
	}

	.satellite-core:hover {
		transform: scale(1.15);
		box-shadow: 
			0 0 25px rgba(0, 255, 136, 0.6),
			inset 0 0 15px rgba(0, 255, 136, 0.2);
		border-color: var(--neon-green-light);
	}

	/* Central Command Design */
	.central-command {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
	}

	.command-halo {
		position: absolute;
		top: -20px;
		left: -20px;
		right: -20px;
		bottom: -20px;
		background: radial-gradient(circle, 
			rgba(0, 255, 136, 0.2) 0%, 
			rgba(0, 255, 136, 0.05) 50%, 
			transparent 80%);
		border-radius: 50%;
		animation: command-halo-pulse 4s ease-in-out infinite;
	}

	.command-core {
		position: relative;
		width: 120px;
		height: 120px;
		background: radial-gradient(circle, 
			rgba(15, 21, 40, 1) 0%, 
			rgba(30, 42, 74, 0.95) 40%, 
			rgba(15, 21, 40, 1) 100%);
		border: 4px solid var(--neon-green);
		border-radius: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 4px;
		box-shadow: 
			0 0 40px rgba(0, 255, 136, 0.5),
			inset 0 0 25px rgba(0, 255, 136, 0.1),
			0 0 80px rgba(0, 255, 136, 0.2);
	}

	.core-pulse {
		position: absolute;
		top: -4px;
		left: -4px;
		right: -4px;
		bottom: -4px;
		border: 2px solid rgba(0, 255, 136, 0.4);
		border-radius: 50%;
		animation: core-pulse-ring 2s ease-out infinite;
	}

	.core-icon {
		position: relative;
		z-index: 2;
	}

	.command-labels {
		position: relative;
		z-index: 2;
		text-align: center;
		margin-top: 2px;
	}

	.command-title {
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--neon-green);
		line-height: 1;
		text-shadow: 0 0 8px rgba(0, 255, 136, 0.6);
	}

	.command-subtitle {
		font-size: 0.45rem;
		font-weight: 500;
		color: var(--text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		line-height: 1;
		margin-top: 1px;
	}

	/* Cosmic Background Effects */
	.cosmic-particles {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: 
			radial-gradient(2px 2px at 20% 30%, rgba(0, 255, 136, 0.3), transparent),
			radial-gradient(2px 2px at 40% 70%, rgba(0, 255, 136, 0.2), transparent),
			radial-gradient(1px 1px at 90% 40%, rgba(0, 255, 136, 0.4), transparent),
			radial-gradient(1px 1px at 10% 80%, rgba(0, 255, 136, 0.2), transparent),
			radial-gradient(1px 1px at 60% 10%, rgba(0, 255, 136, 0.3), transparent);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		pointer-events: none;
		animation: cosmic-twinkle 8s ease-in-out infinite alternate;
	}

	/* Scientific Orbital Animations */
	@keyframes scientific-orbit-inner {
		from {
			transform: translate(-50%, -50%) 
					  rotate(calc(var(--agent-index) * (360deg / var(--ring-total)))) 
					  translateX(90px) 
					  rotate(calc(-1 * var(--agent-index) * (360deg / var(--ring-total))));
		}
		to {
			transform: translate(-50%, -50%) 
					  rotate(calc(var(--agent-index) * (360deg / var(--ring-total)) + 360deg)) 
					  translateX(90px) 
					  rotate(calc(-1 * (var(--agent-index) * (360deg / var(--ring-total)) + 360deg)));
		}
	}

	@keyframes scientific-orbit-middle {
		from {
			transform: translate(-50%, -50%) 
					  rotate(calc(var(--agent-index) * (360deg / var(--ring-total)))) 
					  translateX(140px) 
					  rotate(calc(-1 * var(--agent-index) * (360deg / var(--ring-total))));
		}
		to {
			transform: translate(-50%, -50%) 
					  rotate(calc(var(--agent-index) * (360deg / var(--ring-total)) - 360deg)) 
					  translateX(140px) 
					  rotate(calc(-1 * (var(--agent-index) * (360deg / var(--ring-total)) - 360deg)));
		}
	}

	@keyframes scientific-orbit-outer {
		from {
			transform: translate(-50%, -50%) 
					  rotate(calc(var(--agent-index) * (360deg / var(--ring-total)))) 
					  translateX(190px) 
					  rotate(calc(-1 * var(--agent-index) * (360deg / var(--ring-total))));
		}
		to {
			transform: translate(-50%, -50%) 
					  rotate(calc(var(--agent-index) * (360deg / var(--ring-total)) + 360deg)) 
					  translateX(190px) 
					  rotate(calc(-1 * (var(--agent-index) * (360deg / var(--ring-total)) + 360deg)));
		}
	}

	@keyframes rotate-ring {
		from { transform: translate(-50%, -50%) rotate(0deg); }
		to { transform: translate(-50%, -50%) rotate(360deg); }
	}

	@keyframes satellite-pulse {
		0%, 100% { opacity: 0.6; }
		50% { opacity: 1; }
	}

	@keyframes command-halo-pulse {
		0%, 100% { 
			opacity: 0.4; 
			transform: scale(1);
		}
		50% { 
			opacity: 0.8; 
			transform: scale(1.1);
		}
	}

	@keyframes core-pulse-ring {
		0% { 
			opacity: 1; 
			transform: scale(1);
		}
		100% { 
			opacity: 0; 
			transform: scale(1.4);
		}
	}

	@keyframes cosmic-twinkle {
		0% { opacity: 0.8; }
		100% { opacity: 1; }
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.galactic-system {
			max-width: 450px;
		}

		.ring-inner { width: 140px; height: 140px; }
		.ring-middle { width: 220px; height: 220px; }
		.ring-outer { width: 300px; height: 300px; }

		.agent-satellite { width: 38px; height: 38px; }
		.satellite-core { width: 38px; height: 38px; }

		.command-core { width: 90px; height: 90px; }
		.command-title { font-size: 0.65rem; }
		.command-subtitle { font-size: 0.4rem; }

		@keyframes scientific-orbit-inner {
			from {
				transform: translate(-50%, -50%) 
						  rotate(calc(var(--agent-index) * (360deg / var(--ring-total)))) 
						  translateX(70px) 
						  rotate(calc(-1 * var(--agent-index) * (360deg / var(--ring-total))));
			}
			to {
				transform: translate(-50%, -50%) 
						  rotate(calc(var(--agent-index) * (360deg / var(--ring-total)) + 360deg)) 
						  translateX(70px) 
						  rotate(calc(-1 * (var(--agent-index) * (360deg / var(--ring-total)) + 360deg)));
			}
		}

		@keyframes scientific-orbit-middle {
			from {
				transform: translate(-50%, -50%) 
						  rotate(calc(var(--agent-index) * (360deg / var(--ring-total)))) 
						  translateX(110px) 
						  rotate(calc(-1 * var(--agent-index) * (360deg / var(--ring-total))));
			}
			to {
				transform: translate(-50%, -50%) 
						  rotate(calc(var(--agent-index) * (360deg / var(--ring-total)) - 360deg)) 
						  translateX(110px) 
						  rotate(calc(-1 * (var(--agent-index) * (360deg / var(--ring-total)) - 360deg)));
			}
		}

		@keyframes scientific-orbit-outer {
			from {
				transform: translate(-50%, -50%) 
						  rotate(calc(var(--agent-index) * (360deg / var(--ring-total)))) 
						  translateX(150px) 
						  rotate(calc(-1 * var(--agent-index) * (360deg / var(--ring-total))));
			}
			to {
				transform: translate(-50%, -50%) 
						  rotate(calc(var(--agent-index) * (360deg / var(--ring-total)) + 360deg)) 
						  translateX(150px) 
						  rotate(calc(-1 * (var(--agent-index) * (360deg / var(--ring-total)) + 360deg)));
			}
		}
	}
</style>