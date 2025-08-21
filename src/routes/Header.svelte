<script lang="ts">
	import { page } from '$app/stores';
	
	$: currentPath = $page.url?.pathname;
</script>

<header>
	<a class="brand" href="/asamkhya">
		<div class="brand-seal">
			<svg viewBox="0 0 50 30" class="logo">
				<defs>
					<linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" style="stop-color:var(--neon-green);stop-opacity:1" />
						<stop offset="50%" style="stop-color:var(--neon-green-light);stop-opacity:1" />
						<stop offset="100%" style="stop-color:var(--neon-green);stop-opacity:1" />
					</linearGradient>
					<filter id="glow">
						<feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
						<feMerge> 
							<feMergeNode in="coloredBlur"/>
							<feMergeNode in="SourceGraphic"/>
						</feMerge>
					</filter>
				</defs>
				
				<!-- Classic infinity symbol with proper mathematical curves -->
				<path d="M8 15 C8 8, 12 5, 18 8 C20 9, 22 12, 25 15 C28 12, 30 9, 32 8 C38 5, 42 8, 42 15 C42 22, 38 25, 32 22 C30 21, 28 18, 25 15 C22 18, 20 21, 18 22 C12 25, 8 22, 8 15 Z" 
					  fill="none" 
					  stroke="url(#logoGradient)" 
					  stroke-width="3" 
					  stroke-linecap="round"
					  stroke-linejoin="round"
					  filter="url(#glow)"/>
				
				<!-- Center connection point -->
				<circle cx="25" cy="15" r="1" fill="var(--neon-green)" opacity="0.8"/>
			</svg>
		</div>
		<div class="brand-text">
			<span class="brand-name">ASAMKHYA</span>
			<span class="brand-tagline">AI STATE OF MIND</span>
		</div>
	</a>

	<nav>
		<a href="/asamkhya" class:active={currentPath === '/asamkhya'} class="infinity-link">
			<span class="infinity-symbol">∞</span>
		</a>
		<a href="/asamkhya/website" class:active={currentPath?.startsWith('/asamkhya/website')}>Webby</a>
		<a href="/asamkhya/heyfrontdesk" class:active={currentPath?.startsWith('/asamkhya/heyfrontdesk')}>HeyFrontDesk</a>
		<a href="/asamkhya/ai-course" class:active={currentPath?.startsWith('/asamkhya/ai-course')}>Cohort</a>
		<a href="/asamkhya/about" class:active={currentPath === '/asamkhya/about'}>Team</a>
		<a href="/asamkhya/contact" class:active={currentPath === '/asamkhya/contact'}>Business</a>
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
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.brand:hover .brand-seal {
		transform: scale(1.05);
	}

	.logo {
		width: 50px;
		height: 30px;
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
		padding: 0.75rem 0.5rem;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		letter-spacing: 0.025em;
	}

	nav a:hover {
		color: var(--text-primary);
		transform: translateY(-1px);
	}

	nav a.active {
		color: var(--neon-green);
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

	.infinity-link {
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.infinity-symbol {
		font-size: 1.5rem;
		font-weight: 400;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		display: block;
		line-height: 1;
	}

	.infinity-link:hover .infinity-symbol {
		transform: scale(1.1);
		filter: drop-shadow(0 0 4px var(--neon-green));
	}

	.infinity-link.active .infinity-symbol {
		color: var(--neon-green);
		filter: drop-shadow(0 0 6px var(--neon-green));
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

	/* iPhone 15 and similar small screens */
	@media (max-width: 430px) {
		header {
			padding: 0.75rem 1rem;
		}
		
		.brand {
			gap: 0.75rem;
		}
		
		.brand-name {
			font-size: 1rem;
		}
		
		.brand-tagline {
			font-size: 0.625rem;
		}
		
		.brand-seal {
			width: 36px;
			height: 24px;
		}
		
		.logo {
			width: 36px;
			height: 24px;
		}
		
		nav {
			gap: 0.5rem;
		}
		
		nav a {
			padding: 0.25rem 0.375rem;
			font-size: 0.7rem;
		}
		
		.infinity-symbol {
			font-size: 1.1rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none !important;
		}
	}
</style>