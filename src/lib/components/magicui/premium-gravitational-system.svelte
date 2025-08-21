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

	// Premium orbital configuration with sophisticated physics
	const satellites = [
		// Inner ring - Critical operations
		{ 
			id: 'booking', 
			name: 'Booking Intelligence',
			radius: 140, 
			period: 18, 
			phase: 0,
			tier: 'critical',
			glow: 'rgba(0, 255, 136, 0.6)'
		},
		{ 
			id: 'payment', 
			name: 'Payment Processing',
			radius: 140, 
			period: 18, 
			phase: 90,
			tier: 'critical',
			glow: 'rgba(0, 255, 136, 0.6)'
		},
		{ 
			id: 'guest', 
			name: 'Guest Experience',
			radius: 140, 
			period: 18, 
			phase: 180,
			tier: 'critical',
			glow: 'rgba(0, 255, 136, 0.6)'
		},
		{ 
			id: 'maintenance', 
			name: 'Asset Management',
			radius: 140, 
			period: 18, 
			phase: 270,
			tier: 'critical',
			glow: 'rgba(0, 255, 136, 0.6)'
		},

		// Middle ring - Strategic operations
		{ 
			id: 'security', 
			name: 'Security Protocol',
			radius: 200, 
			period: 28, 
			phase: 45,
			tier: 'strategic',
			glow: 'rgba(0, 200, 255, 0.5)'
		},
		{ 
			id: 'vendor', 
			name: 'Vendor Relations',
			radius: 200, 
			period: 28, 
			phase: 135,
			tier: 'strategic',
			glow: 'rgba(0, 200, 255, 0.5)'
		},
		{ 
			id: 'analytics', 
			name: 'Data Intelligence',
			radius: 200, 
			period: 28, 
			phase: 225,
			tier: 'strategic',
			glow: 'rgba(0, 200, 255, 0.5)'
		},
		{ 
			id: 'inventory', 
			name: 'Resource Tracking',
			radius: 200, 
			period: 28, 
			phase: 315,
			tier: 'strategic',
			glow: 'rgba(0, 200, 255, 0.5)'
		},

		// Outer ring - Oversight operations
		{ 
			id: 'escalation', 
			name: 'Issue Resolution',
			radius: 260, 
			period: 42, 
			phase: 22.5,
			tier: 'oversight',
			glow: 'rgba(150, 100, 255, 0.4)'
		},
		{ 
			id: 'ota', 
			name: 'Channel Optimization',
			radius: 260, 
			period: 42, 
			phase: 112.5,
			tier: 'oversight',
			glow: 'rgba(150, 100, 255, 0.4)'
		},
		{ 
			id: 'feedback', 
			name: 'Experience Analytics',
			radius: 260, 
			period: 42, 
			phase: 202.5,
			tier: 'oversight',
			glow: 'rgba(150, 100, 255, 0.4)'
		},
		{ 
			id: 'compliance', 
			name: 'Regulatory Suite',
			radius: 260, 
			period: 42, 
			phase: 292.5,
			tier: 'oversight',
			glow: 'rgba(150, 100, 255, 0.4)'
		}
	];
</script>

{#if mounted}
<div class="premium-orbital-system {className}">
	<div class="cosmic-environment">
		
		<!-- Clean transparent design - no background elements -->

		<!-- Gravitational field visualization -->
		<div class="gravitational-matrix">
			<svg class="field-grid" viewBox="0 0 600 600">
				<defs>
					<radialGradient id="fieldGradient" cx="50%" cy="50%" r="50%">
						<stop offset="0%" style="stop-color:rgba(0,255,136,0.15);stop-opacity:1" />
						<stop offset="30%" style="stop-color:rgba(0,255,136,0.08);stop-opacity:1" />
						<stop offset="70%" style="stop-color:rgba(0,255,136,0.03);stop-opacity:1" />
						<stop offset="100%" style="stop-color:transparent;stop-opacity:0" />
					</radialGradient>
					<filter id="fieldGlow" x="-50%" y="-50%" width="200%" height="200%">
						<feGaussianBlur stdDeviation="2" result="coloredBlur"/>
						<feMerge>
							<feMergeNode in="coloredBlur"/>
							<feMergeNode in="SourceGraphic"/>
						</feMerge>
					</filter>
				</defs>

				<!-- Gravitational field rings -->
				<circle cx="300" cy="300" r="140" fill="none" stroke="rgba(0,255,136,0.1)" stroke-width="1" filter="url(#fieldGlow)" class="field-ring inner-field" />
				<circle cx="300" cy="300" r="200" fill="none" stroke="rgba(0,200,255,0.08)" stroke-width="1" filter="url(#fieldGlow)" class="field-ring middle-field" />
				<circle cx="300" cy="300" r="260" fill="none" stroke="rgba(150,100,255,0.06)" stroke-width="1" filter="url(#fieldGlow)" class="field-ring outer-field" />
				
				<!-- Central gravitational well -->
				<circle cx="300" cy="300" r="80" fill="url(#fieldGradient)" class="gravitational-well" />
			</svg>
		</div>

		<!-- Orbital pathways -->
		<div class="orbital-paths">
			{#each satellites as satellite}
				<div 
					class="orbital-trail {satellite.tier}"
					style="
						width: {satellite.radius * 2}px;
						height: {satellite.radius * 2}px;
						--glow-color: {satellite.glow};
					"
				></div>
			{/each}
		</div>

		<!-- Central command nucleus -->
		<div class="command-nucleus">
			<div class="nucleus-field">
				<div class="field-ripple ripple-1"></div>
				<div class="field-ripple ripple-2"></div>
				<div class="field-ripple ripple-3"></div>
			</div>
			
			<div class="nucleus-core">
				<div class="core-energy"></div>
				<div class="core-shell">
					<div class="command-icon">
						<AIAgentIcons iconType="mrkey" size={42} />
					</div>
				</div>
			</div>
		</div>

		<!-- Satellite constellation -->
		{#each satellites as satellite}
			<div 
				class="satellite-node {satellite.tier}-tier"
				style="
					--orbital-radius: {satellite.radius}px;
					--orbital-period: {satellite.period}s;
					--phase-offset: {satellite.phase}deg;
					--glow-color: {satellite.glow};
				"
			>
				<div class="node-assembly">
					<div class="node-field"></div>
					<div class="node-housing">
						<div class="housing-core">
							<AIAgentIcons iconType={satellite.id} size={24} />
						</div>
						<div class="status-beacon {satellite.tier}"></div>
					</div>
					<div class="node-identifier">
						<span class="node-name">{satellite.name}</span>
					</div>
				</div>
			</div>
		{/each}

		<!-- Data transmission lines -->
		<svg class="transmission-network" viewBox="0 0 600 600">
			<defs>
				<linearGradient id="transmissionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" style="stop-color:rgba(0,255,136,0.2)" />
					<stop offset="50%" style="stop-color:rgba(0,255,136,0.6)" />
					<stop offset="100%" style="stop-color:rgba(0,255,136,0.1)" />
				</linearGradient>
			</defs>
			
			{#each satellites as satellite, i}
				<line 
					x1="300" y1="300" 
					x2={300 + satellite.radius * Math.cos(satellite.phase * Math.PI / 180)} 
					y2={300 + satellite.radius * Math.sin(satellite.phase * Math.PI / 180)}
					stroke="url(#transmissionGradient)" 
					stroke-width="0.5"
					opacity="0.4"
					class="data-link"
					style="animation-delay: {i * 0.3}s;"
				/>
			{/each}
		</svg>

	</div>
</div>
{/if}

<style>
	.premium-orbital-system {
		width: 100%;
		max-width: 650px;
		height: 650px;
		margin: 0 auto;
		position: relative;
	}

	.cosmic-environment {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Remove background effects - clean transparent design */

	/* Gravitational field */
	.gravitational-matrix {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	.field-grid {
		width: 100%;
		height: 100%;
	}

	.field-ring {
		animation: field-resonance 8s ease-in-out infinite;
	}

	.inner-field { animation-delay: 0s; }
	.middle-field { animation-delay: 2.7s; }
	.outer-field { animation-delay: 5.4s; }

	.gravitational-well {
		animation: well-distortion 6s ease-in-out infinite;
	}

	/* Orbital paths */
	.orbital-paths {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		pointer-events: none;
	}

	.orbital-trail {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 1px solid var(--glow-color);
		border-radius: 50%;
		opacity: 0.15;
		animation: orbital-pulse 4s ease-in-out infinite;
	}

	.orbital-trail.critical { animation-delay: 0s; }
	.orbital-trail.strategic { animation-delay: 1.3s; }
	.orbital-trail.oversight { animation-delay: 2.6s; }

	/* Central command nucleus */
	.command-nucleus {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 20;
	}

	.nucleus-field {
		position: absolute;
		top: -60px;
		left: -60px;
		width: 120px;
		height: 120px;
	}

	.field-ripple {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border: 1px solid rgba(0, 255, 136, 0.2);
		border-radius: 50%;
		animation: ripple-expansion 4s ease-out infinite;
	}

	.ripple-1 { animation-delay: 0s; }
	.ripple-2 { animation-delay: 1.3s; }
	.ripple-3 { animation-delay: 2.6s; }

	.nucleus-core {
		position: relative;
		width: 120px;
		height: 120px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.core-energy {
		position: absolute;
		top: -15px;
		left: -15px;
		right: -15px;
		bottom: -15px;
		background: radial-gradient(circle, 
			rgba(0, 255, 136, 0.2) 0%, 
			rgba(0, 255, 136, 0.1) 50%, 
			transparent 100%);
		border-radius: 50%;
		animation: energy-pulse 3s ease-in-out infinite;
	}

	.core-shell {
		position: relative;
		width: 120px;
		height: 120px;
		background: 
			radial-gradient(circle at 25% 25%, rgba(0, 255, 136, 0.15) 0%, transparent 60%),
			linear-gradient(135deg, rgba(10, 15, 35, 0.95) 0%, rgba(20, 30, 50, 0.9) 100%);
		border: 3px solid var(--neon-green);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 
			0 0 50px rgba(0, 255, 136, 0.4),
			inset 0 0 30px rgba(0, 255, 136, 0.1),
			0 0 100px rgba(0, 255, 136, 0.2);
		backdrop-filter: blur(10px);
	}

	.command-icon {
		position: relative;
		z-index: 2;
		filter: drop-shadow(0 0 8px rgba(0, 255, 136, 0.6));
	}

	/* Satellite nodes */
	.satellite-node {
		position: absolute;
		top: 50%;
		left: 50%;
		transform-origin: 0 0;
		animation: orbital-revolution var(--orbital-period) linear infinite;
		animation-delay: calc(var(--phase-offset) / 360 * var(--orbital-period));
	}

	.node-assembly {
		position: relative;
		transform: translate(-50%, -50%);
		width: 70px;
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.node-field {
		position: absolute;
		top: -10px;
		left: -10px;
		right: -10px;
		bottom: -10px;
		background: radial-gradient(circle, var(--glow-color) 0%, transparent 70%);
		border-radius: 50%;
		animation: node-field-pulse 2.5s ease-in-out infinite;
		opacity: 0.6;
	}

	.node-housing {
		position: relative;
		width: 50px;
		height: 50px;
		background: 
			radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 60%),
			linear-gradient(135deg, rgba(10, 15, 35, 0.9) 0%, rgba(20, 30, 50, 0.8) 100%);
		border: 2px solid;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 
			0 0 20px var(--glow-color),
			inset 0 0 15px rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(5px);
		transition: all 0.3s ease;
	}

	.critical-tier .node-housing {
		border-color: rgba(0, 255, 136, 0.8);
	}

	.strategic-tier .node-housing {
		border-color: rgba(0, 200, 255, 0.7);
	}

	.oversight-tier .node-housing {
		border-color: rgba(150, 100, 255, 0.6);
	}

	.housing-core {
		position: relative;
		z-index: 2;
	}

	.status-beacon {
		position: absolute;
		top: 3px;
		right: 3px;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		animation: beacon-pulse 1.5s ease-in-out infinite;
	}

	.status-beacon.critical {
		background: linear-gradient(45deg, #00ff88, #00cc6a);
		box-shadow: 0 0 8px rgba(0, 255, 136, 0.8);
	}

	.status-beacon.strategic {
		background: linear-gradient(45deg, #00c8ff, #0099cc);
		box-shadow: 0 0 8px rgba(0, 200, 255, 0.8);
	}

	.status-beacon.oversight {
		background: linear-gradient(45deg, #9664ff, #7c3aed);
		box-shadow: 0 0 8px rgba(150, 100, 255, 0.8);
	}

	.node-identifier {
		position: absolute;
		top: 60px;
		left: 50%;
		transform: translateX(-50%);
		white-space: nowrap;
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.node-assembly:hover .node-identifier {
		opacity: 1;
	}

	.node-name {
		font-size: 0.7rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.9);
		background: rgba(0, 0, 0, 0.8);
		padding: 3px 8px;
		border-radius: 6px;
		border: 1px solid var(--glow-color);
		backdrop-filter: blur(10px);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
	}

	/* Data transmission network */
	.transmission-network {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		opacity: 0.3;
	}

	.data-link {
		animation: data-transmission 3s ease-in-out infinite;
	}

	/* Sophisticated animations */
	@keyframes orbital-revolution {
		from {
			transform: translate(-50%, -50%) rotate(var(--phase-offset)) translateX(var(--orbital-radius)) rotate(calc(-1 * var(--phase-offset)));
		}
		to {
			transform: translate(-50%, -50%) rotate(calc(var(--phase-offset) + 360deg)) translateX(var(--orbital-radius)) rotate(calc(-1 * (var(--phase-offset) + 360deg)));
		}
	}

	@keyframes energy-pulse {
		0%, 100% { 
			opacity: 0.6; 
			transform: scale(1);
		}
		50% { 
			opacity: 1; 
			transform: scale(1.1);
		}
	}

	@keyframes ripple-expansion {
		0% { 
			opacity: 0.8; 
			transform: scale(0.8);
		}
		100% { 
			opacity: 0; 
			transform: scale(1.5);
		}
	}

	@keyframes node-field-pulse {
		0%, 100% { opacity: 0.4; }
		50% { opacity: 0.8; }
	}

	@keyframes beacon-pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.3; }
	}

	@keyframes field-resonance {
		0%, 100% { 
			stroke-opacity: 0.3; 
			transform: scale(1);
		}
		50% { 
			stroke-opacity: 0.7; 
			transform: scale(1.02);
		}
	}

	@keyframes well-distortion {
		0%, 100% { transform: scale(1) rotate(0deg); }
		33% { transform: scale(1.05) rotate(120deg); }
		66% { transform: scale(0.95) rotate(240deg); }
	}

	@keyframes orbital-pulse {
		0%, 100% { opacity: 0.1; }
		50% { opacity: 0.3; }
	}

	/* Removed nebula and stellar animations */

	@keyframes data-transmission {
		0%, 100% { opacity: 0.2; }
		50% { opacity: 0.6; }
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.premium-orbital-system {
			max-width: 500px;
			height: 500px;
		}

		.satellite-node {
			--orbital-radius: calc(var(--orbital-radius) * 0.8);
		}

		.nucleus-core,
		.core-shell {
			width: 90px;
			height: 90px;
		}

		.node-assembly {
			width: 55px;
			height: 55px;
		}

		.node-housing {
			width: 40px;
			height: 40px;
		}
	}
</style>