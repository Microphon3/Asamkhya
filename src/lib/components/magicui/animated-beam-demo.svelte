<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let containerRef: HTMLDivElement;
	let centerRef: HTMLDivElement;
	let reactRef: HTMLDivElement;
	let svelteRef: HTMLDivElement;
	let nodeRef: HTMLDivElement;
	let threeRef: HTMLDivElement;
	let tailwindRef: HTMLDivElement;
	let tsRef: HTMLDivElement;
	let claudeRef: HTMLDivElement;

	onMount(() => {
		if (browser && containerRef) {
			createAnimatedBeams();
		}
	});

	function createAnimatedBeams() {
		const beams = [
			{ from: reactRef, to: centerRef, curvature: -75, endYOffset: -10 },
			{ from: svelteRef, to: centerRef },
			{ from: nodeRef, to: centerRef, curvature: 75, endYOffset: 10 },
			{ from: threeRef, to: centerRef, curvature: -75, endYOffset: -10, reverse: true },
			{ from: tailwindRef, to: centerRef, reverse: true },
			{ from: tsRef, to: centerRef, curvature: 75, endYOffset: 10, reverse: true },
			{ from: claudeRef, to: centerRef }
		];

		beams.forEach((beam, index) => {
			setTimeout(() => {
				createBeam(beam);
			}, index * 500);
		});
	}

	function createBeam({ from, to, curvature = 0, endYOffset = 0, reverse = false }) {
		if (!from || !to) return;

		const fromRect = from.getBoundingClientRect();
		const toRect = to.getBoundingClientRect();
		const containerRect = containerRef.getBoundingClientRect();

		const fromX = fromRect.left + fromRect.width / 2 - containerRect.left;
		const fromY = fromRect.top + fromRect.height / 2 - containerRect.top;
		const toX = toRect.left + toRect.width / 2 - containerRect.left;
		const toY = toRect.top + toRect.height / 2 - containerRect.top + endYOffset;

		const beam = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		beam.style.position = 'absolute';
		beam.style.top = '0';
		beam.style.left = '0';
		beam.style.width = '100%';
		beam.style.height = '100%';
		beam.style.pointerEvents = 'none';
		beam.style.zIndex = '1';

		// Create static path
		const staticPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		// Create animated path
		const animatedPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		
		let pathData;
		if (curvature === 0) {
			pathData = `M ${fromX} ${fromY} L ${toX} ${toY}`;
		} else {
			const midX = (fromX + toX) / 2;
			const midY = (fromY + toY) / 2 + curvature;
			pathData = `M ${fromX} ${fromY} Q ${midX} ${midY} ${toX} ${toY}`;
		}

		// Static path (always visible, dim)
		staticPath.setAttribute('d', pathData);
		staticPath.setAttribute('fill', 'none');
		staticPath.setAttribute('stroke', '#00d4ff');
		staticPath.setAttribute('stroke-width', '1');
		staticPath.setAttribute('opacity', '0.2');

		// Animated path (flowing laser)
		animatedPath.setAttribute('d', pathData);
		animatedPath.setAttribute('fill', 'none');
		animatedPath.setAttribute('stroke', '#00d4ff');
		animatedPath.setAttribute('stroke-width', '3');
		animatedPath.setAttribute('opacity', '0.8');

		const totalLength = staticPath.getTotalLength();
		const dashLength = totalLength * 0.3; // Length of the flowing dash
		
		animatedPath.style.strokeDasharray = `${dashLength} ${totalLength}`;
		animatedPath.style.strokeDashoffset = reverse ? `-${dashLength}` : `${totalLength + dashLength}`;

		beam.appendChild(staticPath);
		beam.appendChild(animatedPath);
		containerRef.appendChild(beam);

		// Continuously animate the flowing beam
		const animateBeam = () => {
			animatedPath.animate(
				{
					strokeDashoffset: reverse ? 
						[`-${dashLength}`, `-${totalLength + dashLength}`] : 
						[`${totalLength + dashLength}`, `-${dashLength}`]
				},
				{
					duration: 3000,
					easing: 'linear',
					iterations: Infinity
				}
			);
		};

		// Start animation after a staggered delay
		setTimeout(animateBeam, 0);
	}
</script>

<div
	bind:this={containerRef}
	class="beam-container"
>
	<div class="beam-content">
		<!-- Top Row -->
		<div class="row">
			<div class="tech-item">
				<div
					bind:this={reactRef}
					class="circle"
				>
					<!-- React Icon -->
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
						<circle cx="12" cy="12" r="3"/>
						<ellipse cx="12" cy="12" rx="11" ry="3" transform="rotate(60 12 12)"/>
						<ellipse cx="12" cy="12" rx="11" ry="3" transform="rotate(120 12 12)"/>
						<ellipse cx="12" cy="12" rx="11" ry="3"/>
					</svg>
				</div>
				<span class="tech-name">React</span>
			</div>
			<div class="tech-item">
				<div
					bind:this={threeRef}
					class="circle"
				>
					<!-- Three.js Icon -->
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
						<polygon points="12,2 2,7 12,12 22,7"/>
						<polyline points="2,17 12,22 22,17"/>
						<polyline points="2,12 12,17 22,12"/>
						<circle cx="12" cy="12" r="2" fill="currentColor"/>
					</svg>
				</div>
				<span class="tech-name">Three.js</span>
			</div>
		</div>

		<!-- Middle Row -->
		<div class="row">
			<div class="tech-item">
				<div
					bind:this={svelteRef}
					class="circle"
				>
					<!-- SvelteKit Icon -->
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
						<path d="M3 12c0-7 4-11 9-11 2.5 0 4.5 1 6 2.5"/>
						<path d="M21 12c0 7-4 11-9 11-2.5 0-4.5-1-6-2.5"/>
						<path d="M9 5s0 3 3 3 3-3 3-3"/>
						<path d="M15 19s0-3-3-3-3 3-3 3"/>
					</svg>
				</div>
				<span class="tech-name">Svelte</span>
			</div>

			<!-- Center Infinity Loop -->
			<div
				bind:this={centerRef}
				class="circle-center"
			>
				<!-- Infinity Loop -->
				<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4z"/>
					<path d="M12 12c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4z"/>
				</svg>
			</div>

			<div class="tech-item">
				<div
					bind:this={tailwindRef}
					class="circle"
				>
					<!-- Tailwind CSS Icon -->
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
						<path d="M6 8c0-2.5 2-4 5-4 4.5 0 5 3 7 3 1.5 0 3-1 3-3"/>
						<path d="M6 15c0-2.5 2-4 5-4 4.5 0 5 3 7 3 1.5 0 3-1 3-3"/>
						<path d="M3 12c1-4 4-6 8-6 6 0 8 4 10 4"/>
					</svg>
				</div>
				<span class="tech-name">Tailwind</span>
			</div>
		</div>

		<!-- Bottom Row -->
		<div class="row">
			<div class="tech-item">
				<div
					bind:this={nodeRef}
					class="circle"
				>
					<!-- Node.js Icon -->
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
						<path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"/>
						<path d="M12 22V12"/>
						<path d="M22 17L12 12L2 17"/>
						<path d="M12 2v10"/>
						<path d="M7 14.5l5-2.5"/>
						<path d="M17 14.5l-5-2.5"/>
					</svg>
				</div>
				<span class="tech-name">Node.js</span>
			</div>
			<div class="tech-item">
				<div
					bind:this={tsRef}
					class="circle"
				>
					<!-- TypeScript Icon -->
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
						<rect x="3" y="3" width="18" height="18" rx="2"/>
						<path d="M8 16v-4h4v4"/>
						<path d="M12 8v8"/>
						<path d="M8 8h8"/>
						<circle cx="16" cy="8" r="1" fill="currentColor"/>
					</svg>
				</div>
				<span class="tech-name">TypeScript</span>
			</div>
			<div class="tech-item">
				<div
					bind:this={claudeRef}
					class="circle"
				>
					<!-- Claude AI Icon -->
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
						<circle cx="12" cy="12" r="10"/>
						<path d="M8 14s1.5 2 4 2 4-2 4-2"/>
						<line x1="9" y1="9" x2="9.01" y2="9"/>
						<line x1="15" y1="9" x2="15.01" y2="9"/>
						<path d="M12 2a10 10 0 0 1 8 16"/>
						<circle cx="12" cy="12" r="4"/>
					</svg>
				</div>
				<span class="tech-name">Claude AI</span>
			</div>
		</div>
	</div>
</div>

<style>
	.beam-container {
		position: relative;
		display: flex;
		height: 400px;
		width: 100%;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		padding: 40px;
	}

	.beam-content {
		display: flex;
		width: 100%;
		height: 100%;
		max-height: 300px;
		max-width: 48rem;
		flex-direction: column;
		align-items: stretch;
		justify-content: space-between;
		gap: 40px;
	}

	.row {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	.tech-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		transition: all 0.3s ease;
	}

	.tech-item:hover {
		transform: translateY(-2px);
	}

	.circle {
		z-index: 10;
		display: flex;
		width: 48px;
		height: 48px;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		border: 2px solid;
		padding: 12px;
		box-shadow: 0 0 20px -12px rgba(0, 0, 0, 0.8);
		border-color: var(--border-medium);
		background: var(--bg-primary);
		color: var(--text-secondary);
		transition: all 0.3s ease;
	}

	.tech-item:hover .circle {
		transform: scale(1.05);
		color: var(--neon-green);
		border-color: var(--neon-green);
		box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
	}

	.tech-name {
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--text-tertiary);
		transition: all 0.3s ease;
		letter-spacing: 0.05em;
		text-align: center;
	}

	.tech-item:hover .tech-name {
		color: var(--neon-green);
		transform: scale(1.05);
	}

	.circle-center {
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		border: 2px solid;
		padding: 16px;
		width: 64px;
		height: 64px;
		border-color: var(--neon-green);
		background: var(--bg-primary);
		color: var(--neon-green);
		box-shadow: 0 0 30px rgba(0, 212, 255, 0.4);
		animation: pulse 2s ease-in-out infinite alternate;
	}

	@keyframes pulse {
		from {
			box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);
		}
		to {
			box-shadow: 0 0 40px rgba(0, 212, 255, 0.6);
		}
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.tech-item {
			gap: 6px;
		}

		.circle {
			width: 40px;
			height: 40px;
			padding: 8px;
		}
		
		.circle-center {
			width: 56px;
			height: 56px;
			padding: 12px;
		}

		.tech-name {
			font-size: 0.7rem;
		}
	}

	@media (max-width: 480px) {
		.tech-item {
			gap: 4px;
		}

		.circle {
			width: 36px;
			height: 36px;
			padding: 6px;
		}
		
		.circle-center {
			width: 48px;
			height: 48px;
			padding: 8px;
		}

		.tech-name {
			font-size: 0.65rem;
		}
	}
</style>