<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let canvasRef: HTMLCanvasElement;
	let animationId: number;

	export let className = '';

	onMount(() => {
		if (!browser || !canvasRef) return;

		const canvas = canvasRef;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		// Set canvas size
		const size = 200;
		canvas.width = size;
		canvas.height = size;

		// Globe parameters
		const centerX = size / 2;
		const centerY = size / 2;
		const radius = size * 0.35;
		let rotation = 0;

		// Globe lines (latitude and longitude)
		const latitudes = [-60, -30, 0, 30, 60];
		const longitudes = Array.from({ length: 12 }, (_, i) => (i * 30) - 180);

		function drawGlobe() {
			if (!ctx) return;

			// Clear canvas
			ctx.clearRect(0, 0, size, size);

			// Set line style
			ctx.strokeStyle = 'rgba(0, 255, 136, 0.3)';
			ctx.lineWidth = 1;

			// Draw latitude lines
			latitudes.forEach(lat => {
				ctx.beginPath();
				const latRad = (lat * Math.PI) / 180;
				const latRadius = radius * Math.cos(latRad);
				const y = centerY - radius * Math.sin(latRad);

				// Create ellipse for latitude lines
				ctx.ellipse(centerX, y, latRadius, latRadius * 0.3, 0, 0, Math.PI * 2);
				ctx.stroke();
			});

			// Draw longitude lines
			longitudes.forEach(lng => {
				ctx.beginPath();
				const lngRad = ((lng + rotation) * Math.PI) / 180;
				
				// Draw curved longitude lines
				for (let lat = -90; lat <= 90; lat += 5) {
					const latRad = (lat * Math.PI) / 180;
					const x = centerX + radius * Math.cos(latRad) * Math.sin(lngRad) * Math.cos(latRad);
					const y = centerY - radius * Math.sin(latRad);
					const z = radius * Math.cos(latRad) * Math.cos(lngRad);

					// Only draw visible parts (front of sphere)
					if (z > 0) {
						if (lat === -90) {
							ctx.moveTo(x, y);
						} else {
							ctx.lineTo(x, y);
						}
					}
				}
				ctx.stroke();
			});

			// Draw outer circle
			ctx.beginPath();
			ctx.strokeStyle = 'rgba(0, 255, 136, 0.5)';
			ctx.lineWidth = 2;
			ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
			ctx.stroke();

			// Add some dots for continents/points of interest
			const points = [
				{ lat: 40, lng: -74 }, // New York
				{ lat: 51, lng: 0 },   // London
				{ lat: 35, lng: 139 }, // Tokyo
				{ lat: -34, lng: 151 }, // Sydney
			];

			ctx.fillStyle = 'rgba(0, 255, 136, 0.8)';
			points.forEach(point => {
				const latRad = (point.lat * Math.PI) / 180;
				const lngRad = ((point.lng + rotation) * Math.PI) / 180;
				const x = centerX + radius * Math.cos(latRad) * Math.sin(lngRad) * Math.cos(latRad);
				const y = centerY - radius * Math.sin(latRad);
				const z = radius * Math.cos(latRad) * Math.cos(lngRad);

				// Only draw visible points
				if (z > 0) {
					ctx.beginPath();
					ctx.arc(x, y, 2, 0, Math.PI * 2);
					ctx.fill();
				}
			});

			// Update rotation
			rotation += 0.5;
			if (rotation >= 360) rotation = 0;
		}

		function animate() {
			drawGlobe();
			animationId = requestAnimationFrame(animate);
		}

		animate();

		return () => {
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
		};
	});
</script>

<canvas 
	bind:this={canvasRef}
	class="globe-canvas {className}"
	style="width: 200px; height: 200px;"
></canvas>

<style>
	.globe-canvas {
		display: block;
		max-width: 100%;
		height: auto;
	}
</style>