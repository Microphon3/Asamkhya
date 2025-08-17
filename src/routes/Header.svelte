<script lang="ts">
	import { page } from '$app/stores';
	
	$: currentPath = $page.url?.pathname;
</script>

<header>
	<a class="brand" href="/asamkhya">
		<div class="brand-seal">
			<svg viewBox="0 0 60 60" class="logo">
				<defs>
					<linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" style="stop-color:var(--neon-green);stop-opacity:1" />
						<stop offset="100%" style="stop-color:var(--neon-green-dark);stop-opacity:1" />
					</linearGradient>
				</defs>
				<circle cx="30" cy="30" r="28" fill="none" stroke="url(#logoGradient)" stroke-width="1" opacity="0.3"/>
				<rect x="18" y="18" width="24" height="16" rx="2" fill="none" stroke="url(#logoGradient)" stroke-width="2"/>
				<path d="M22 26L26 30L22 34M34 26L30 30L34 34" stroke="url(#logoGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<text x="30" y="52" text-anchor="middle" font-size="6" fill="var(--neon-green)" font-family="monospace" font-weight="bold">WEB</text>
			</svg>
		</div>
		<div class="brand-text">
			<span class="brand-name">ASAMKHYA</span>
			<span class="brand-tagline">WEB DEVELOPMENT</span>
		</div>
	</a>

	<nav>
		<a href="/asamkhya" class:active={currentPath === '/asamkhya'}>Portfolio</a>
		<a href="/asamkhya/ai-course" class:active={currentPath?.startsWith('/asamkhya/ai-course')}>AI Course</a>
		<a href="/asamkhya/about" class:active={currentPath === '/asamkhya/about'}>About</a>
		<a href="/asamkhya/contact" class:active={currentPath === '/asamkhya/contact'}>Contact</a>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 3rem;
		background: rgba(26, 26, 26, 0.9);
		backdrop-filter: blur(20px);
		border-bottom: 1px solid var(--border-subtle);
		position: sticky;
		top: 0;
		z-index: 100;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 1rem;
		text-decoration: none;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.brand:hover {
		transform: translateY(-1px);
	}

	.brand-seal {
		width: 50px;
		height: 50px;
		background: var(--bg-glass);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--border-medium);
		position: relative;
		overflow: hidden;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.brand-seal::before {
		content: '';
		position: absolute;
		inset: 0;
		background: var(--bg-glass);
		border-radius: inherit;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.brand:hover .brand-seal {
		border-color: var(--neon-green);
		box-shadow: var(--shadow-neon);
	}

	.logo {
		width: 35px;
		height: 35px;
		position: relative;
		z-index: 1;
	}

	.brand-text {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
	}

	.brand-name {
		color: var(--text-primary);
		font-weight: 700;
		font-size: 1.25rem;
		letter-spacing: 0.05em;
		line-height: 1;
	}

	.brand-tagline {
		color: var(--neon-green);
		font-weight: 500;
		font-size: 0.6875rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		line-height: 1;
	}

	nav {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	nav a {
		text-decoration: none;
		color: var(--text-secondary);
		font-size: 0.9375rem;
		font-weight: 500;
		position: relative;
		padding: 0.75rem 1.25rem;
		border-radius: 8px;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		letter-spacing: 0.025em;
	}

	nav a::before {
		content: '';
		position: absolute;
		inset: 0;
		background: var(--bg-glass);
		border-radius: inherit;
		opacity: 0;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	nav a:hover {
		color: var(--text-primary);
		transform: translateY(-1px);
	}

	nav a:hover::before {
		opacity: 1;
	}

	nav a.active {
		color: var(--neon-green);
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
	}

	nav a.active::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 50%;
		transform: translateX(-50%);
		width: 4px;
		height: 4px;
		background: var(--neon-green);
		border-radius: 50%;
		box-shadow: 0 0 8px var(--neon-green);
	}

	/* Responsive Design */
	@media (max-width: 1024px) {
		header {
			padding: 1rem 2rem;
		}
		
		nav {
			gap: 1.5rem;
		}
	}

	@media (max-width: 768px) {
		header {
			padding: 1rem 1.5rem;
		}
		
		.brand-name {
			font-size: 1.125rem;
		}
		
		.brand-seal {
			width: 44px;
			height: 44px;
		}
		
		.logo {
			width: 30px;
			height: 30px;
		}
		
		nav {
			gap: 1rem;
		}
		
		nav a {
			font-size: 0.875rem;
			padding: 0.625rem 1rem;
		}
	}

	@media (max-width: 640px) {
		nav a {
			padding: 0.5rem 0.75rem;
			font-size: 0.8125rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none !important;
		}
	}
</style>