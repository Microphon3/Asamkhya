<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="app-container">
	<Header />

	<main>
		{@render children()}
	</main>
</div>

<style>
	:global(:root) {
		/* Premium Dark Theme - Asamkhya AI */
		--neon-green: #00FF88;
		--neon-green-dark: #00CC6A;
		--neon-green-light: #33FFAA;
		--neon-green-glow: rgba(0, 255, 136, 0.3);
		
		--bg-primary: #0A0A0A;
		--bg-secondary: #111111;
		--bg-tertiary: #1A1A1A;
		--bg-card: rgba(26, 26, 26, 0.8);
		--bg-glass: rgba(255, 255, 255, 0.05);
		
		--text-primary: #FFFFFF;
		--text-secondary: #B0B0B0;
		--text-muted: #808080;
		--text-dark: #4A4A4A;
		
		--border-subtle: rgba(255, 255, 255, 0.1);
		--border-medium: rgba(255, 255, 255, 0.2);
		--border-strong: rgba(255, 255, 255, 0.3);
		
		--shadow-subtle: 0 2px 20px rgba(0, 0, 0, 0.3);
		--shadow-medium: 0 8px 40px rgba(0, 0, 0, 0.4);
		--shadow-strong: 0 20px 80px rgba(0, 0, 0, 0.5);
		--shadow-neon: 0 0 30px var(--neon-green-glow);
	}

	:global(body) {
		margin: 0;
		background: var(--bg-primary);
		color: var(--text-primary);
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "SF Pro Display", sans-serif;
		font-feature-settings: "cv01", "cv03", "cv04", "cv11";
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		overflow-x: hidden;
	}
	
	:global(h1, h2, h3, h4, h5, h6) {
		word-wrap: break-word;
		hyphens: auto;
	}

	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}

	.app-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background: var(--bg-primary);
		position: relative;
	}

	.app-container::before {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: 
			radial-gradient(circle at 20% 50%, rgba(0, 255, 136, 0.15) 0%, transparent 50%),
			radial-gradient(circle at 80% 20%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
			radial-gradient(circle at 40% 80%, rgba(0, 255, 136, 0.05) 0%, transparent 50%);
		pointer-events: none;
		z-index: -1;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>