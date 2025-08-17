<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/asamkhya', { replaceState: true });
	});
</script>

<svelte:head>
	<title>Asamkhya - Premier AI Institute</title>
	<meta name="description" content="Redirecting to Asamkhya - The Premier Institute for AI Mastery" />
</svelte:head>

<div class="redirect-container">
	<div class="redirect-content">
		<div class="asamkhya-logo">
			<svg viewBox="0 0 80 80" class="crest">
				<circle cx="40" cy="40" r="35" stroke="#D4AF37" stroke-width="2" fill="none"/>
				<circle cx="40" cy="40" r="25" stroke="#D4AF37" stroke-width="1" fill="none"/>
				<polygon points="40,20 45,30 55,30 47,38 50,48 40,42 30,48 33,38 25,30 35,30" fill="#D4AF37"/>
				<text x="40" y="65" text-anchor="middle" font-size="8" fill="#D4AF37" font-family="serif">AI</text>
			</svg>
		</div>
		<h1>Asamkhya</h1>
		<p>The Premier Institute for AI Mastery</p>
		<div class="loading-indicator">
			<div class="dot"></div>
			<div class="dot"></div>
			<div class="dot"></div>
		</div>
	</div>
</div>

<style>
	.redirect-container {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		background: linear-gradient(135deg, #0f1528 0%, #1e2a4a 100%);
		color: #FFFFFF;
		font-family: 'Georgia', serif;
	}

	.redirect-content {
		text-align: center;
		max-width: 400px;
		padding: 2rem;
	}

	.asamkhya-logo {
		width: 100px;
		height: 100px;
		margin: 0 auto 2rem;
		background: radial-gradient(circle, #1e2a4a 0%, #0f1528 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 3px solid #D4AF37;
		box-shadow: 0 0 30px rgba(212, 175, 55, 0.4);
	}

	.crest {
		width: 70px;
		height: 70px;
	}

	h1 {
		font-size: 3rem;
		color: #D4AF37;
		margin: 0 0 1rem;
		font-weight: 400;
		letter-spacing: 0.02em;
	}

	p {
		font-size: 1.2rem;
		color: #8B95A5;
		margin: 0 0 3rem;
		font-style: italic;
	}

	.loading-indicator {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #D4AF37;
		animation: pulse 1.5s infinite ease-in-out;
	}

	.dot:nth-child(2) {
		animation-delay: 0.3s;
	}

	.dot:nth-child(3) {
		animation-delay: 0.6s;
	}

	@keyframes pulse {
		0%, 60%, 100% {
			opacity: 0.3;
			transform: scale(1);
		}
		30% {
			opacity: 1;
			transform: scale(1.2);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.dot {
			animation: none;
			opacity: 0.7;
		}
	}
</style>