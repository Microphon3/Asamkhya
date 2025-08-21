<script lang="ts">
	import OrbitingCircles from './orbiting-circles.svelte';
	import AIAgentIcons from './ai-agent-icons.svelte';

	export let className = '';

	// Define the 12 AI agents
	const agents = [
		'booking',
		'payment', 
		'guest',
		'maintenance',
		'security',
		'vendor',
		'analytics',
		'inventory',
		'escalation',
		'ota',
		'feedback',
		'compliance'
	];

	// Split agents into two orbits (inner: 6 agents, outer: 6 agents)
	const innerAgents = agents.slice(0, 6);
	const outerAgents = agents.slice(6, 12);
</script>

<div class="orbiting-demo {className}">
	<div class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
		<!-- Outer orbit - 6 agents -->
		{#each outerAgents as agent, index}
			<div 
				class="orbit-item outer-orbit"
				style="--delay: {index * 0.8}s; --start-rotation: {(360 / outerAgents.length) * index}deg;"
			>
				<div class="agent-wrapper">
					<AIAgentIcons iconType={agent} size={24} />
				</div>
			</div>
		{/each}

		<!-- Inner orbit - 6 agents -->
		{#each innerAgents as agent, index}
			<div 
				class="orbit-item inner-orbit"
				style="--delay: {index * 0.5}s; --start-rotation: {(360 / innerAgents.length) * index}deg;"
			>
				<div class="agent-wrapper">
					<AIAgentIcons iconType={agent} size={20} />
				</div>
			</div>
		{/each}

		<!-- Central Mr. Key -->
		<div class="mr-key-center">
			<div class="key-wrapper">
				<AIAgentIcons iconType="mrkey" size={32} />
				<div class="key-label">
					<span class="key-title">Mr. Key</span>
					<span class="key-subtitle">Orchestrator</span>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.orbiting-demo {
		position: relative;
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
	}

	.orbit-item {
		position: absolute;
		top: 50%;
		left: 50%;
		transform-origin: 0 0;
		animation-delay: var(--delay, 0s);
	}

	.outer-orbit {
		animation: orbit-outer 25s linear infinite;
	}

	.inner-orbit {
		animation: orbit-inner 15s linear infinite reverse;
	}

	.agent-wrapper {
		width: 50px;
		height: 50px;
		background: var(--bg-secondary);
		border: 2px solid var(--neon-green);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 0 15px rgba(0, 255, 136, 0.3);
		transition: all 0.3s ease;
		position: relative;
	}

	.inner-orbit .agent-wrapper {
		width: 40px;
		height: 40px;
	}

	.agent-wrapper:hover {
		box-shadow: 0 0 25px rgba(0, 255, 136, 0.6);
		transform: scale(1.1);
		border-color: var(--neon-green-light);
	}

	.mr-key-center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
	}

	.key-wrapper {
		background: linear-gradient(135deg, var(--bg-secondary), var(--bg-primary));
		border: 3px solid var(--neon-green);
		border-radius: 50%;
		width: 100px;
		height: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-shadow: 
			0 0 30px rgba(0, 255, 136, 0.4),
			inset 0 0 20px rgba(0, 255, 136, 0.1);
		animation: pulse 3s ease-in-out infinite;
		gap: 0.25rem;
	}

	.key-label {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 0.25rem;
	}

	.key-title {
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--neon-green);
		line-height: 1;
	}

	.key-subtitle {
		font-size: 0.5rem;
		font-weight: 500;
		color: var(--text-secondary);
		line-height: 1;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	@keyframes orbit-outer {
		from {
			transform: translate(-50%, -50%) rotate(var(--start-rotation, 0deg)) translateX(160px) rotate(calc(-1 * var(--start-rotation, 0deg)));
		}
		to {
			transform: translate(-50%, -50%) rotate(calc(var(--start-rotation, 0deg) + 360deg)) translateX(160px) rotate(calc(-1 * (var(--start-rotation, 0deg) + 360deg)));
		}
	}

	@keyframes orbit-inner {
		from {
			transform: translate(-50%, -50%) rotate(var(--start-rotation, 0deg)) translateX(100px) rotate(calc(-1 * var(--start-rotation, 0deg)));
		}
		to {
			transform: translate(-50%, -50%) rotate(calc(var(--start-rotation, 0deg) + 360deg)) translateX(100px) rotate(calc(-1 * (var(--start-rotation, 0deg) + 360deg)));
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

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.orbiting-demo :global(.relative) {
			height: 400px !important;
		}
		
		.agent-wrapper {
			width: 40px;
			height: 40px;
			transform: translate(-120px, -20px);
		}

		.inner-orbit .agent-wrapper {
			width: 32px;
			height: 32px;
			transform: translate(-80px, -16px);
		}

		.key-wrapper {
			width: 80px;
			height: 80px;
		}

		.key-title {
			font-size: 0.6rem;
		}

		.key-subtitle {
			font-size: 0.4rem;
		}
	}
</style>