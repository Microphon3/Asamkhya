<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import AIAgentIcons from './ai-agent-icons.svelte';

	export let className = '';

	let mounted = false;
	let containerRef: HTMLDivElement;

	onMount(() => {
		if (browser) {
			mounted = true;
		}
	});

	// Enterprise-grade agent distribution
	const agents = [
		{ id: 'booking', name: 'Booking Engine', orbit: 1, angle: 0, priority: 'critical' },
		{ id: 'payment', name: 'Payment Gateway', orbit: 1, angle: 90, priority: 'critical' },
		{ id: 'guest', name: 'Guest Relations', orbit: 1, angle: 180, priority: 'critical' },
		{ id: 'maintenance', name: 'Maintenance Hub', orbit: 1, angle: 270, priority: 'critical' },
		
		{ id: 'security', name: 'Security Shield', orbit: 2, angle: 45, priority: 'high' },
		{ id: 'vendor', name: 'Vendor Network', orbit: 2, angle: 135, priority: 'high' },
		{ id: 'analytics', name: 'Analytics Engine', orbit: 2, angle: 225, priority: 'high' },
		{ id: 'inventory', name: 'Asset Tracking', orbit: 2, angle: 315, priority: 'high' },
		
		{ id: 'escalation', name: 'Issue Escalation', orbit: 3, angle: 22.5, priority: 'strategic' },
		{ id: 'ota', name: 'Channel Manager', orbit: 3, angle: 112.5, priority: 'strategic' },
		{ id: 'feedback', name: 'Experience AI', orbit: 3, angle: 202.5, priority: 'strategic' },
		{ id: 'compliance', name: 'Compliance Suite', orbit: 3, angle: 292.5, priority: 'strategic' }
	];
</script>

{#if mounted}
<div class="orbital-command-center {className}" bind:this={containerRef}>
	<div class="neural-network-bg">
		<svg class="connection-grid" viewBox="0 0 400 400">
			<!-- Neural connection lines -->
			<defs>
				<linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" style="stop-color:rgba(0,255,136,0.1)" />
					<stop offset="50%" style="stop-color:rgba(0,255,136,0.3)" />
					<stop offset="100%" style="stop-color:rgba(0,255,136,0.1)" />
				</linearGradient>
				<filter id="glow">
					<feGaussianBlur stdDeviation="2" result="coloredBlur"/>
					<feMerge> 
						<feMergeNode in="coloredBlur"/>
						<feMergeNode in="SourceGraphic"/>
					</feMerge>
				</filter>
			</defs>
			
			{#each agents as agent}
				<line 
					x1="200" y1="200" 
					x2={200 + (agent.orbit * 60) * Math.cos(agent.angle * Math.PI / 180)} 
					y2={200 + (agent.orbit * 60) * Math.sin(agent.angle * Math.PI / 180)}
					stroke="url(#connectionGradient)" 
					stroke-width="0.5"
					filter="url(#glow)"
					class="neural-connection"
					style="animation-delay: {agent.angle / 360 * 2}s;"
				/>
			{/each}
			
			<!-- Orbital rings -->
			<circle cx="200" cy="200" r="60" fill="none" stroke="rgba(0,255,136,0.06)" stroke-width="1" />
			<circle cx="200" cy="200" r="120" fill="none" stroke="rgba(0,255,136,0.04)" stroke-width="1" />
			<circle cx="200" cy="200" r="180" fill="none" stroke="rgba(0,255,136,0.03)" stroke-width="1" />
		</svg>
	</div>

	<div class="command-matrix">
		<!-- Agent nodes -->
		{#each agents as agent}
			<div 
				class="agent-node orbit-{agent.orbit} priority-{agent.priority}"
				style="
					--orbit-radius: {agent.orbit * 80}px;
					--agent-angle: {agent.angle}deg;
					--animation-delay: {agent.angle / 45}s;
				"
			>
				<div class="node-core">
					<div class="quantum-field"></div>
					<div class="data-stream"></div>
					<div class="icon-container">
						<AIAgentIcons iconType={agent.id} size={agent.orbit === 1 ? 24 : agent.orbit === 2 ? 22 : 20} />
					</div>
					<div class="node-status {agent.priority}"></div>
				</div>
				<div class="agent-label">
					<span class="agent-name">{agent.name}</span>
				</div>
			</div>
		{/each}

		<!-- Central orchestrator -->
		<div class="central-orchestrator">
			<div class="orchestrator-field">
				<div class="primary-core">
					<div class="core-energy"></div>
					<div class="core-matrix"></div>
					<div class="central-icon">
						<AIAgentIcons iconType="mrkey" size={36} />
					</div>
				</div>
				<div class="orchestrator-info">
					<div class="system-name">Mr. Key</div>
					<div class="system-role">Neural Orchestrator</div>
					<div class="system-metrics">
						<div class="metric">
							<span class="metric-value">12</span>
							<span class="metric-label">Agents</span>
						</div>
						<div class="metric">
							<span class="metric-value">∞</span>
							<span class="metric-label">Ops/sec</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Ambient particles -->
	<div class="particle-system">
		{#each Array(8) as _, i}
			<div class="ambient-particle" style="--particle-delay: {i * 0.8}s; --particle-duration: {4 + i * 0.5}s;"></div>
		{/each}
	</div>
</div>
{/if}

<style>
	.orbital-command-center {
		position: relative;
		width: 100%;
		max-width: 650px;
		aspect-ratio: 1;
		margin: 0 auto;
		background: 
			radial-gradient(circle at 30% 20%, rgba(0, 255, 136, 0.03) 0%, transparent 50%),
			radial-gradient(circle at 70% 80%, rgba(15, 21, 40, 0.8) 0%, transparent 50%),
			linear-gradient(135deg, rgba(15, 21, 40, 0.95) 0%, rgba(0, 0, 0, 0.98) 100%);
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 
			0 25px 50px -12px rgba(0, 0, 0, 0.5),
			inset 0 1px 0 rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(20px);
	}

	.neural-network-bg {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0.4;
	}

	.connection-grid {
		width: 100%;
		height: 100%;
	}

	.neural-connection {
		animation: pulse-connection 4s ease-in-out infinite;
	}

	.command-matrix {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Agent Node Design */
	.agent-node {
		position: absolute;
		top: 50%;
		left: 50%;
		transform-origin: 0 0;
		animation: orbital-motion var(--orbit-speed, 30s) linear infinite;
		animation-delay: var(--animation-delay, 0s);
	}

	.orbit-1 {
		--orbit-speed: 25s;
		animation-name: orbit-inner;
	}

	.orbit-2 {
		--orbit-speed: 40s;
		animation-name: orbit-middle;
		animation-direction: reverse;
	}

	.orbit-3 {
		--orbit-speed: 60s;
		animation-name: orbit-outer;
	}

	.node-core {
		position: relative;
		width: 64px;
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: center;
		transform: translate(-50%, -50%);
	}

	.quantum-field {
		position: absolute;
		top: -8px;
		left: -8px;
		right: -8px;
		bottom: -8px;
		background: radial-gradient(circle, 
			rgba(0, 255, 136, 0.15) 0%, 
			rgba(0, 255, 136, 0.05) 60%, 
			transparent 100%);
		border-radius: 50%;
		animation: quantum-pulse 3s ease-in-out infinite;
	}

	.data-stream {
		position: absolute;
		top: 4px;
		left: 4px;
		right: 4px;
		bottom: 4px;
		border: 1px solid rgba(0, 255, 136, 0.3);
		border-radius: 50%;
		background: linear-gradient(135deg, 
			rgba(15, 21, 40, 0.95) 0%, 
			rgba(30, 42, 74, 0.9) 50%, 
			rgba(15, 21, 40, 0.95) 100%);
		backdrop-filter: blur(10px);
		box-shadow: 
			0 4px 20px rgba(0, 255, 136, 0.2),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
	}

	.icon-container {
		position: relative;
		z-index: 2;
	}

	.node-status {
		position: absolute;
		top: 2px;
		right: 2px;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		animation: status-pulse 2s ease-in-out infinite;
	}

	.node-status.critical {
		background: linear-gradient(45deg, #00ff88, #00cc6a);
		box-shadow: 0 0 12px rgba(0, 255, 136, 0.8);
	}

	.node-status.high {
		background: linear-gradient(45deg, #0ea5e9, #0284c7);
		box-shadow: 0 0 12px rgba(14, 165, 233, 0.6);
	}

	.node-status.strategic {
		background: linear-gradient(45deg, #8b5cf6, #7c3aed);
		box-shadow: 0 0 12px rgba(139, 92, 246, 0.6);
	}

	.agent-label {
		position: absolute;
		top: 70px;
		left: 50%;
		transform: translateX(-50%);
		white-space: nowrap;
		pointer-events: none;
	}

	.agent-name {
		font-size: 0.75rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.8);
		background: rgba(0, 0, 0, 0.6);
		padding: 2px 8px;
		border-radius: 4px;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(0, 255, 136, 0.2);
	}

	/* Central Orchestrator */
	.central-orchestrator {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
	}

	.orchestrator-field {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
	}

	.primary-core {
		position: relative;
		width: 140px;
		height: 140px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.core-energy {
		position: absolute;
		top: -12px;
		left: -12px;
		right: -12px;
		bottom: -12px;
		background: radial-gradient(circle, 
			rgba(0, 255, 136, 0.2) 0%, 
			rgba(0, 255, 136, 0.08) 40%, 
			transparent 70%);
		border-radius: 50%;
		animation: core-energy-pulse 4s ease-in-out infinite;
	}

	.core-matrix {
		position: relative;
		width: 140px;
		height: 140px;
		background: 
			linear-gradient(135deg, rgba(15, 21, 40, 0.98) 0%, rgba(30, 42, 74, 0.95) 100%),
			radial-gradient(circle at 30% 30%, rgba(0, 255, 136, 0.1) 0%, transparent 60%);
		border: 2px solid rgba(0, 255, 136, 0.6);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 
			0 0 40px rgba(0, 255, 136, 0.3),
			inset 0 0 30px rgba(0, 255, 136, 0.05),
			0 8px 32px rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(20px);
		position: relative;
		overflow: hidden;
	}

	.core-matrix::before {
		content: '';
		position: absolute;
		top: -2px;
		left: -2px;
		right: -2px;
		bottom: -2px;
		background: conic-gradient(from 0deg, 
			rgba(0, 255, 136, 0.4) 0deg, 
			transparent 60deg, 
			rgba(0, 255, 136, 0.4) 120deg, 
			transparent 180deg, 
			rgba(0, 255, 136, 0.4) 240deg, 
			transparent 300deg, 
			rgba(0, 255, 136, 0.4) 360deg);
		border-radius: 50%;
		animation: core-rotation 8s linear infinite;
		z-index: -1;
	}

	.central-icon {
		position: relative;
		z-index: 2;
	}

	.orchestrator-info {
		text-align: center;
		background: rgba(0, 0, 0, 0.6);
		padding: 12px 20px;
		border-radius: 12px;
		border: 1px solid rgba(0, 255, 136, 0.3);
		backdrop-filter: blur(20px);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
	}

	.system-name {
		font-size: 1rem;
		font-weight: 700;
		color: var(--neon-green);
		text-shadow: 0 0 20px rgba(0, 255, 136, 0.6);
		margin-bottom: 4px;
	}

	.system-role {
		font-size: 0.7rem;
		color: rgba(255, 255, 255, 0.7);
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 8px;
	}

	.system-metrics {
		display: flex;
		gap: 16px;
		justify-content: center;
	}

	.metric {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2px;
	}

	.metric-value {
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--neon-green);
	}

	.metric-label {
		font-size: 0.6rem;
		color: rgba(255, 255, 255, 0.6);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	/* Particle System */
	.particle-system {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		pointer-events: none;
		overflow: hidden;
	}

	.ambient-particle {
		position: absolute;
		width: 2px;
		height: 2px;
		background: rgba(0, 255, 136, 0.6);
		border-radius: 50%;
		animation: particle-drift var(--particle-duration, 4s) linear infinite;
		animation-delay: var(--particle-delay, 0s);
		box-shadow: 0 0 6px rgba(0, 255, 136, 0.8);
	}

	/* Animations */
	@keyframes orbit-inner {
		from {
			transform: translate(-50%, -50%) rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg);
		}
		to {
			transform: translate(-50%, -50%) rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg);
		}
	}

	@keyframes orbit-middle {
		from {
			transform: translate(-50%, -50%) rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg);
		}
		to {
			transform: translate(-50%, -50%) rotate(-360deg) translateX(var(--orbit-radius)) rotate(360deg);
		}
	}

	@keyframes orbit-outer {
		from {
			transform: translate(-50%, -50%) rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg);
		}
		to {
			transform: translate(-50%, -50%) rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg);
		}
	}

	@keyframes quantum-pulse {
		0%, 100% { opacity: 0.6; transform: scale(1); }
		50% { opacity: 1; transform: scale(1.1); }
	}

	@keyframes core-energy-pulse {
		0%, 100% { opacity: 0.6; transform: scale(1); }
		50% { opacity: 1; transform: scale(1.08); }
	}

	@keyframes core-rotation {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}

	@keyframes status-pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.4; }
	}

	@keyframes pulse-connection {
		0%, 100% { opacity: 0.3; }
		50% { opacity: 0.8; }
	}

	@keyframes particle-drift {
		0% {
			transform: translateY(100vh) translateX(0);
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
		100% {
			transform: translateY(-10px) translateX(20px);
			opacity: 0;
		}
	}

	/* Responsive */
	@media (max-width: 768px) {
		.orbital-command-center {
			max-width: 500px;
		}

		.agent-node {
			--orbit-radius: calc(var(--orbit-radius) * 0.75);
		}

		.node-core {
			width: 50px;
			height: 50px;
		}

		.primary-core,
		.core-matrix {
			width: 110px;
			height: 110px;
		}

		.system-name {
			font-size: 0.9rem;
		}

		.agent-name {
			font-size: 0.65rem;
		}
	}
</style>