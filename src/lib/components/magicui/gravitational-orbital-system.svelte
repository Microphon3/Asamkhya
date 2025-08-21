<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import AIAgentIcons from './ai-agent-icons.svelte';

	export let className = '';

	let mounted = false;
	let animationId: number;

	onMount(() => {
		if (browser) {
			mounted = true;
		}
		return () => {
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
		};
	});

	// Physics-based orbital configuration following Kepler's 3rd Law
	// T² ∝ a³ (period squared proportional to semi-major axis cubed)
	const satellites = [
		// Inner system - Fast, tight orbits
		{ 
			id: 'booking', 
			semiMajor: 160, 
			eccentricity: 0.15, 
			period: 15, 
			phaseOffset: 0,
			mass: 1.2,
			resonance: 1
		},
		{ 
			id: 'payment', 
			semiMajor: 180, 
			eccentricity: 0.12, 
			period: 18.5, 
			phaseOffset: 120,
			mass: 1.1,
			resonance: 1
		},
		{ 
			id: 'guest', 
			semiMajor: 200, 
			eccentricity: 0.08, 
			period: 22.4, 
			phaseOffset: 240,
			mass: 1.0,
			resonance: 2
		},
		{ 
			id: 'maintenance', 
			semiMajor: 220, 
			eccentricity: 0.18, 
			period: 26.8, 
			phaseOffset: 60,
			mass: 0.9,
			resonance: 2
		},

		// Middle system - Moderate orbits
		{ 
			id: 'security', 
			semiMajor: 260, 
			eccentricity: 0.22, 
			period: 35.2, 
			phaseOffset: 180,
			mass: 1.1,
			resonance: 3
		},
		{ 
			id: 'vendor', 
			semiMajor: 280, 
			eccentricity: 0.14, 
			period: 39.8, 
			phaseOffset: 300,
			mass: 0.8,
			resonance: 3
		},
		{ 
			id: 'analytics', 
			semiMajor: 300, 
			eccentricity: 0.25, 
			period: 44.7, 
			phaseOffset: 45,
			mass: 1.0,
			resonance: 4
		},
		{ 
			id: 'inventory', 
			semiMajor: 320, 
			eccentricity: 0.11, 
			period: 49.8, 
			phaseOffset: 90,
			mass: 0.9,
			resonance: 4
		},

		// Outer system - Slow, wide orbits
		{ 
			id: 'escalation', 
			semiMajor: 360, 
			eccentricity: 0.28, 
			period: 60.2, 
			phaseOffset: 270,
			mass: 0.7,
			resonance: 5
		},
		{ 
			id: 'ota', 
			semiMajor: 380, 
			eccentricity: 0.19, 
			period: 66.8, 
			phaseOffset: 135,
			mass: 0.8,
			resonance: 5
		},
		{ 
			id: 'feedback', 
			semiMajor: 400, 
			eccentricity: 0.23, 
			period: 73.8, 
			phaseOffset: 315,
			mass: 0.6,
			resonance: 6
		},
		{ 
			id: 'compliance', 
			semiMajor: 420, 
			eccentricity: 0.16, 
			period: 81.2, 
			phaseOffset: 210,
			mass: 0.7,
			resonance: 6
		}
	];

	// Calculate elliptical position using parametric equations
	function getEllipticalPosition(satellite: typeof satellites[0], time: number) {
		const { semiMajor, eccentricity, period, phaseOffset } = satellite;
		const semiMinor = semiMajor * Math.sqrt(1 - eccentricity * eccentricity);
		
		// Mean anomaly with phase offset
		const meanAnomaly = ((time / period) * 2 * Math.PI + (phaseOffset * Math.PI / 180)) % (2 * Math.PI);
		
		// Solve Kepler's equation for eccentric anomaly (simplified)
		let eccentricAnomaly = meanAnomaly;
		for (let i = 0; i < 5; i++) {
			eccentricAnomaly = meanAnomaly + eccentricity * Math.sin(eccentricAnomaly);
		}
		
		// True anomaly
		const trueAnomaly = 2 * Math.atan2(
			Math.sqrt(1 + eccentricity) * Math.sin(eccentricAnomaly / 2),
			Math.sqrt(1 - eccentricity) * Math.cos(eccentricAnomaly / 2)
		);
		
		// Distance from focus (center)
		const radius = semiMajor * (1 - eccentricity * Math.cos(eccentricAnomaly));
		
		return {
			x: radius * Math.cos(trueAnomaly),
			y: radius * Math.sin(trueAnomaly),
			radius,
			angle: trueAnomaly
		};
	}

	// Generate orbital trail points
	function generateOrbitalTrail(satellite: typeof satellites[0]) {
		const points = [];
		for (let i = 0; i < 60; i++) {
			const time = (i / 60) * satellite.period;
			const pos = getEllipticalPosition(satellite, time);
			points.push(`${300 + pos.x},${300 + pos.y}`);
		}
		return points.join(' ');
	}
</script>

{#if mounted}
<div class="gravitational-system {className}">
	<div class="space-background">
		<!-- Particle field -->
		<div class="particle-field">
			{#each Array(25) as _, i}
				<div 
					class="space-particle"
					style="
						left: {Math.random() * 100}%;
						top: {Math.random() * 100}%;
						animation-delay: {Math.random() * 4}s;
						animation-duration: {3 + Math.random() * 4}s;
					"
				></div>
			{/each}
		</div>

		<!-- Orbital trails -->
		<svg class="orbital-trails" viewBox="0 0 600 600">
			<defs>
				<linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" style="stop-color:rgba(0,255,136,0.1)" />
					<stop offset="50%" style="stop-color:rgba(0,255,136,0.05)" />
					<stop offset="100%" style="stop-color:rgba(0,255,136,0.02)" />
				</linearGradient>
				<filter id="trailGlow">
					<feGaussianBlur stdDeviation="1" result="coloredBlur"/>
					<feMerge> 
						<feMergeNode in="coloredBlur"/>
						<feMergeNode in="SourceGraphic"/>
					</feMerge>
				</filter>
			</defs>
			
			{#each satellites as satellite}
				<polyline 
					points={generateOrbitalTrail(satellite)}
					fill="none" 
					stroke="url(#trailGradient)" 
					stroke-width="1"
					filter="url(#trailGlow)"
					class="orbital-path"
					style="animation-delay: {satellite.phaseOffset / 360 * 2}s;"
				/>
			{/each}
		</svg>

		<!-- Gravitational field visualization -->
		<div class="gravitational-field">
			<div class="field-ring ring-1"></div>
			<div class="field-ring ring-2"></div>
			<div class="field-ring ring-3"></div>
			<div class="field-ring ring-4"></div>
		</div>

		<!-- Central gravitational body -->
		<div class="central-body">
			<div class="gravitational-well">
				<div class="well-distortion"></div>
			</div>
			<div class="central-mass">
				<div class="mass-core">
					<AIAgentIcons iconType="mrkey" size={38} />
				</div>
				<div class="gravitational-influence"></div>
			</div>
			<div class="central-info">
				<div class="body-name">Mr. Key</div>
				<div class="body-type">Gravitational Center</div>
				<div class="field-strength">300px Mass Influence</div>
			</div>
		</div>

		<!-- Orbiting satellites -->
		{#each satellites as satellite}
			<div 
				class="satellite-body resonance-{satellite.resonance}"
				style="
					--semi-major: {satellite.semiMajor}px;
					--eccentricity: {satellite.eccentricity};
					--period: {satellite.period}s;
					--phase-offset: {satellite.phaseOffset}deg;
					--mass: {satellite.mass};
				"
			>
				<div class="satellite-wrapper">
					<div class="gravitational-influence-satellite"></div>
					<div class="satellite-core">
						<AIAgentIcons iconType={satellite.id} size={Math.round(18 * satellite.mass)} />
					</div>
					<div class="velocity-vector"></div>
				</div>
			</div>
		{/each}
	</div>
</div>
{/if}

<style>
	.gravitational-system {
		width: 100%;
		max-width: 600px;
		height: 600px;
		margin: 0 auto;
		position: relative;
		background: 
			radial-gradient(circle at 20% 80%, rgba(0, 20, 40, 0.8) 0%, transparent 50%),
			radial-gradient(circle at 80% 20%, rgba(15, 21, 40, 0.6) 0%, transparent 50%),
			radial-gradient(circle at 40% 40%, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 1) 100%);
		border-radius: 20px;
		overflow: hidden;
		box-shadow: 
			0 25px 50px -12px rgba(0, 0, 0, 0.6),
			inset 0 1px 0 rgba(255, 255, 255, 0.02);
	}

	.space-background {
		position: relative;
		width: 100%;
		height: 100%;
	}

	/* Particle field */
	.particle-field {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		pointer-events: none;
	}

	.space-particle {
		position: absolute;
		width: 1px;
		height: 1px;
		background: rgba(0, 255, 136, 0.4);
		border-radius: 50%;
		animation: particle-twinkle linear infinite;
		box-shadow: 0 0 2px rgba(0, 255, 136, 0.8);
	}

	/* Orbital trails */
	.orbital-trails {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	.orbital-path {
		animation: trail-pulse 8s ease-in-out infinite;
	}

	/* Gravitational field */
	.gravitational-field {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		pointer-events: none;
	}

	.field-ring {
		position: absolute;
		border: 1px solid rgba(0, 255, 136, 0.08);
		border-radius: 50%;
		animation: field-pulse 6s ease-in-out infinite;
	}

	.ring-1 {
		width: 200px;
		height: 200px;
		top: -100px;
		left: -100px;
		animation-delay: 0s;
	}

	.ring-2 {
		width: 300px;
		height: 300px;
		top: -150px;
		left: -150px;
		animation-delay: 1.5s;
	}

	.ring-3 {
		width: 400px;
		height: 400px;
		top: -200px;
		left: -200px;
		animation-delay: 3s;
	}

	.ring-4 {
		width: 500px;
		height: 500px;
		top: -250px;
		left: -250px;
		animation-delay: 4.5s;
	}

	/* Central gravitational body */
	.central-body {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
	}

	.gravitational-well {
		position: absolute;
		top: -60px;
		left: -60px;
		width: 120px;
		height: 120px;
		border-radius: 50%;
		background: radial-gradient(circle, 
			rgba(0, 255, 136, 0.15) 0%, 
			rgba(0, 255, 136, 0.05) 40%, 
			transparent 100%);
		animation: well-distortion 8s ease-in-out infinite;
	}

	.well-distortion {
		position: absolute;
		top: 10px;
		left: 10px;
		right: 10px;
		bottom: 10px;
		border-radius: 50%;
		background: radial-gradient(ellipse 80% 120% at center, 
			transparent 30%, 
			rgba(0, 255, 136, 0.1) 60%, 
			transparent 100%);
		animation: lensing-effect 4s ease-in-out infinite;
	}

	.central-mass {
		position: relative;
		width: 140px;
		height: 140px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.mass-core {
		position: relative;
		width: 120px;
		height: 120px;
		background: 
			radial-gradient(circle at 25% 25%, rgba(0, 255, 136, 0.2) 0%, transparent 50%),
			radial-gradient(circle at center, rgba(15, 21, 40, 0.95) 0%, rgba(30, 42, 74, 0.9) 100%);
		border: 3px solid var(--neon-green);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 
			0 0 60px rgba(0, 255, 136, 0.4),
			inset 0 0 30px rgba(0, 255, 136, 0.1);
		animation: gravitational-pulse 3s ease-in-out infinite;
	}

	.gravitational-influence {
		position: absolute;
		top: -40px;
		left: -40px;
		right: -40px;
		bottom: -40px;
		border: 2px solid rgba(0, 255, 136, 0.15);
		border-radius: 50%;
		animation: influence-expansion 5s ease-in-out infinite;
	}

	.central-info {
		position: absolute;
		top: 160px;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;
		background: rgba(0, 0, 0, 0.8);
		border: 1px solid rgba(0, 255, 136, 0.3);
		border-radius: 12px;
		padding: 8px 12px;
		backdrop-filter: blur(10px);
	}

	.body-name {
		font-size: 0.9rem;
		font-weight: 700;
		color: var(--neon-green);
		text-shadow: 0 0 10px rgba(0, 255, 136, 0.6);
	}

	.body-type {
		font-size: 0.6rem;
		color: rgba(255, 255, 255, 0.7);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin: 2px 0;
	}

	.field-strength {
		font-size: 0.55rem;
		color: rgba(0, 255, 136, 0.8);
		font-weight: 500;
	}

	/* Satellite bodies */
	.satellite-body {
		position: absolute;
		top: 50%;
		left: 50%;
		transform-origin: 0 0;
		animation: elliptical-orbit var(--period) linear infinite;
		animation-delay: calc(var(--phase-offset) / 360 * var(--period));
	}

	.satellite-wrapper {
		position: relative;
		transform: translate(-50%, -50%) scale(var(--mass));
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.gravitational-influence-satellite {
		position: absolute;
		top: -5px;
		left: -5px;
		right: -5px;
		bottom: -5px;
		background: radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%);
		border-radius: 50%;
		animation: satellite-field 2s ease-in-out infinite;
	}

	.satellite-core {
		position: relative;
		width: 40px;
		height: 40px;
		background: linear-gradient(135deg, 
			rgba(15, 21, 40, 0.9) 0%, 
			rgba(30, 42, 74, 0.8) 100%);
		border: 2px solid var(--neon-green);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 
			0 0 15px rgba(0, 255, 136, 0.3),
			inset 0 0 10px rgba(0, 255, 136, 0.1);
		transition: all 0.3s ease;
		z-index: 2;
	}

	.velocity-vector {
		position: absolute;
		top: -2px;
		right: -8px;
		width: 12px;
		height: 2px;
		background: linear-gradient(90deg, rgba(0, 255, 136, 0.6) 0%, transparent 100%);
		border-radius: 1px;
		animation: velocity-indicator 1s ease-in-out infinite;
	}

	/* Resonance-based grouping effects */
	.resonance-1 { --resonance-color: rgba(0, 255, 136, 0.8); }
	.resonance-2 { --resonance-color: rgba(0, 200, 255, 0.8); }
	.resonance-3 { --resonance-color: rgba(100, 150, 255, 0.8); }
	.resonance-4 { --resonance-color: rgba(150, 100, 255, 0.8); }
	.resonance-5 { --resonance-color: rgba(200, 80, 255, 0.8); }
	.resonance-6 { --resonance-color: rgba(255, 60, 200, 0.8); }

	.satellite-core:hover {
		transform: scale(1.2);
		box-shadow: 
			0 0 25px var(--resonance-color, rgba(0, 255, 136, 0.6)),
			inset 0 0 15px rgba(0, 255, 136, 0.2);
	}

	/* Physics-based animations */
	@keyframes elliptical-orbit {
		from {
			transform: translate(-50%, -50%) 
					  rotate(var(--phase-offset)) 
					  translateX(calc(var(--semi-major) * (1 - var(--eccentricity)))) 
					  rotate(calc(-1 * var(--phase-offset)));
		}
		to {
			transform: translate(-50%, -50%) 
					  rotate(calc(var(--phase-offset) + 360deg)) 
					  translateX(calc(var(--semi-major) * (1 - var(--eccentricity)))) 
					  rotate(calc(-1 * (var(--phase-offset) + 360deg)));
		}
	}

	@keyframes gravitational-pulse {
		0%, 100% { 
			box-shadow: 
				0 0 60px rgba(0, 255, 136, 0.4),
				inset 0 0 30px rgba(0, 255, 136, 0.1);
		}
		50% { 
			box-shadow: 
				0 0 80px rgba(0, 255, 136, 0.6),
				inset 0 0 40px rgba(0, 255, 136, 0.2);
		}
	}

	@keyframes well-distortion {
		0%, 100% { transform: scale(1) rotate(0deg); }
		33% { transform: scale(1.05) rotate(120deg); }
		66% { transform: scale(0.95) rotate(240deg); }
	}

	@keyframes lensing-effect {
		0%, 100% { opacity: 0.3; transform: scale(1); }
		50% { opacity: 0.6; transform: scale(1.1); }
	}

	@keyframes influence-expansion {
		0%, 100% { transform: scale(1); opacity: 0.5; }
		50% { transform: scale(1.1); opacity: 0.8; }
	}

	@keyframes field-pulse {
		0%, 100% { opacity: 0.3; transform: scale(1); }
		50% { opacity: 0.6; transform: scale(1.02); }
	}

	@keyframes satellite-field {
		0%, 100% { opacity: 0.6; }
		50% { opacity: 1; }
	}

	@keyframes velocity-indicator {
		0%, 100% { opacity: 0.4; }
		50% { opacity: 0.8; }
	}

	@keyframes trail-pulse {
		0%, 100% { opacity: 0.3; }
		50% { opacity: 0.7; }
	}

	@keyframes particle-twinkle {
		0%, 100% { opacity: 0.2; }
		50% { opacity: 1; }
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.gravitational-system {
			max-width: 500px;
			height: 500px;
		}

		.satellite-body {
			--semi-major: calc(var(--semi-major) * 0.8);
		}

		.central-mass,
		.mass-core {
			width: 100px;
			height: 100px;
		}

		.ring-1 { width: 160px; height: 160px; top: -80px; left: -80px; }
		.ring-2 { width: 240px; height: 240px; top: -120px; left: -120px; }
		.ring-3 { width: 320px; height: 320px; top: -160px; left: -160px; }
		.ring-4 { width: 400px; height: 400px; top: -200px; left: -200px; }
	}
</style>