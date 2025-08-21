<script lang="ts">
	import { Ripple, InteractiveHoverButton, MorphingText, LineShadowText, AnimatedBeamDemo } from '$lib/components/magicui';

	// Morphing text for company name
	let companyTexts = ["असंख्य", "ASAṂKHYA"];
</script>

<svelte:head>
	<title>Asamkhya - A State of Mind</title>
	<meta name="description" content="We are Asamkhya. A state of mind where collective intelligence meets infinite possibilities. Choose your path: Create premium websites or master AI skills." />
</svelte:head>

<div class="page">
	<!-- Hero Section -->
	<section class="hero">
		<div class="container">
			<div class="hero-content">
				<!-- Ripple Effect Background -->
				<div class="ripple-section">
					<Ripple />
					<div class="asamkhya-logo">
						<div class="logo-text">
							<MorphingText texts={companyTexts} className="company-name" duration={3000} morphDuration={1000} />
							<div class="hero-badge">
								<span class="badge-text">AI State of Mind</span>
							</div>
						</div>
					</div>
				</div>



				<!-- Tech Stack Section -->
				<div class="tech-stack-section">
					<p class="tech-intro">Tech Stack</p>
					<AnimatedBeamDemo />
				</div>

				<!-- Path Selection -->
				<div class="paths-section">
					<h2 class="paths-title">Choose Your Path</h2>
					<div class="paths-grid">
						<div class="path-card">
							<div class="path-icon">
								<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
									<circle cx="12" cy="12" r="10"/>
									<path d="M2 12h20"/>
									<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
								</svg>
							</div>
							<h3>Webby</h3>
							<p>AI Powered Web Development</p>
							<InteractiveHoverButton href="/asamkhya/website" className="minimal">
								<span>Build With Us</span>
								<svg width="14" height="14" viewBox="0 0 16 16" fill="none">
									<path d="M8 0L8 14M8 14L14 8M8 14L2 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</InteractiveHoverButton>
						</div>

						<div class="path-card">
							<div class="path-icon">
								<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
									<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
									<polyline points="9,22 9,12 15,12 15,22"/>
								</svg>
							</div>
							<h3>HeyFrontDesk</h3>
							<p>Redefining STR Workflow</p>
							<InteractiveHoverButton href="/asamkhya/heyfrontdesk" className="minimal">
								<span>Explore</span>
								<svg width="14" height="14" viewBox="0 0 16 16" fill="none">
									<path d="M8 0L8 14M8 14L14 8M8 14L2 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</InteractiveHoverButton>
						</div>

						<div class="path-card">
							<div class="path-icon">
								<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
									<path d="M9 12l2 2 4-4"/>
									<path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
									<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
									<ellipse cx="12" cy="5" rx="9" ry="3"/>
								</svg>
							</div>
							<h3>Cohort 1.0</h3>
							<p>Become A Vibe Coder</p>
							<InteractiveHoverButton href="/asamkhya/ai-course" className="minimal">
								<span>Apply Now</span>
								<svg width="14" height="14" viewBox="0 0 16 16" fill="none">
									<path d="M8 0L8 14M8 14L14 8M8 14L2 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</InteractiveHoverButton>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>
</div>

<style>
	/* Dark Mode Color Scheme (Default) */
	:root {
		/* Primary Colors */
		--bg-primary: #0d1117;
		--bg-secondary: #21262d;
		--bg-tertiary: #30363d;
		--bg-glass: rgba(33, 38, 45, 0.8);
		
		/* Accent Colors */
		--neon-green: #00d4ff;
		--neon-green-dark: #00a8cc;
		
		/* Text Colors */
		--text-primary: #f0f6fc;
		--text-secondary: #8b949e;
		--text-tertiary: #6e7681;
		
		/* Border Colors */
		--border-light: rgba(240, 246, 252, 0.1);
		--border-medium: rgba(240, 246, 252, 0.15);
		--border-strong: rgba(240, 246, 252, 0.3);
		
		/* Shadow Effects */
		--shadow-subtle: 0 1px 3px rgba(0, 0, 0, 0.5);
		--shadow-medium: 0 4px 12px rgba(0, 0, 0, 0.4);
		--shadow-strong: 0 8px 32px rgba(0, 0, 0, 0.6);
		
		/* Animation Curves */
		--ease-out-cubic: cubic-bezier(0.22, 1, 0.36, 1);
		--ease-in-out-cubic: cubic-bezier(0.4, 0, 0.2, 1);
	}


	.page {
		background: var(--bg-primary);
		color: var(--text-primary);
		min-height: 100vh;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif;
		width: 100%;
		overflow-x: hidden;
		position: relative;
	}


	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 clamp(1rem, 4vw, 2rem);
		width: 100%;
		box-sizing: border-box;
	}

	/* Hero Section */
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		background: radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
		width: 100%;
		padding: clamp(2rem, 8vw, 4rem) 0;
	}

	.hero-content {
		text-align: center;
		position: relative;
		z-index: 2;
		max-width: 900px;
		margin: 0 auto;
		width: 100%;
	}

	.ripple-section {
		position: relative;
		margin-bottom: 6rem;
		padding: 0;
	}

	.asamkhya-logo {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 8rem;
		padding: 3rem 0;
	}

	.logo-text {
		text-align: center;
	}

	:global(.company-name) {
		font-size: clamp(5rem, 14vw, 10rem);
		font-weight: 800;
		letter-spacing: 0.1em;
		background: linear-gradient(135deg, var(--text-primary) 0%, var(--neon-green) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: 1rem;
		display: block;
	}

	.hero-badge {
		margin-top: 1rem;
	}

	.badge-text {
		font-size: 1rem;
		color: var(--neon-green);
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		padding: 0.5rem 1.5rem;
		border: 2px solid var(--neon-green);
		border-radius: 50px;
		background: rgba(0, 212, 255, 0.1);
		backdrop-filter: blur(10px);
	}



	/* Services Section */
	.services-section {
		margin: 4rem auto 8rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: stretch;
		gap: 2rem;
		max-width: 1200px;
		width: 100%;
		padding: 0 2rem;
		box-sizing: border-box;
	}

	.service-card {
		background: linear-gradient(135deg, rgba(0, 212, 255, 0.02) 0%, rgba(26, 26, 26, 0.6) 100%);
		border: 1px solid rgba(0, 212, 255, 0.15);
		border-radius: 16px;
		padding: 1.75rem 1.25rem;
		text-align: center;
		backdrop-filter: blur(15px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		position: relative;
		overflow: hidden;
		flex: 1;
		max-width: 280px;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
	}

	.service-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent);
		transition: left 0.6s ease;
	}

	.service-card:hover::before {
		left: 100%;
	}

	.service-card:hover {
		border-color: rgba(0, 212, 255, 0.4);
		box-shadow: 0 8px 32px rgba(0, 212, 255, 0.15);
		transform: translateY(-4px);
	}

	.service-icon {
		width: 50px;
		height: 50px;
		margin: 0 auto 1.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 212, 255, 0.03) 100%);
		border: 1px solid rgba(0, 212, 255, 0.2);
		border-radius: 12px;
		color: var(--neon-green);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		position: relative;
		z-index: 2;
	}

	.service-card:hover .service-icon {
		background: linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(0, 212, 255, 0.1) 100%);
		border-color: rgba(0, 212, 255, 0.4);
		transform: translateY(-2px) scale(1.05);
		box-shadow: 0 4px 12px rgba(0, 212, 255, 0.2);
	}

	.service-card h3 {
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
		color: var(--text-primary);
		letter-spacing: -0.02em;
		position: relative;
		z-index: 2;
	}

	.service-card p {
		font-size: 0.9rem;
		color: var(--text-secondary);
		line-height: 1.4;
		margin: 0;
		position: relative;
		z-index: 2;
		font-weight: 400;
	}

	/* Tech Stack Section */
	.tech-stack-section {
		margin: 6rem auto;
		text-align: center;
		max-width: 1000px;
		width: 100%;
		padding: 0 2rem;
		box-sizing: border-box;
	}

	.tech-intro {
		font-size: 1.1rem;
		color: var(--text-secondary);
		margin-bottom: 3rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 500;
	}

	/* Paths Section */
	.paths-section {
		margin: 6rem auto;
		max-width: 1000px;
		width: 100%;
		padding: 0 2rem;
		box-sizing: border-box;
		text-align: center;
	}

	.paths-title {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 3rem;
		background: linear-gradient(135deg, var(--text-primary) 0%, var(--neon-green-light) 50%, var(--neon-green) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		letter-spacing: -0.02em;
	}

	.paths-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		justify-content: center;
		gap: clamp(1rem, 3vw, 2rem);
		margin: 2rem auto;
		max-width: 1000px;
		width: 100%;
		padding: 0 clamp(1rem, 4vw, 2rem);
		box-sizing: border-box;
	}

	.path-card {
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 12px;
		padding: clamp(1.25rem, 3vw, 1.5rem) clamp(1rem, 2vw, 1.25rem);
		text-align: center;
		backdrop-filter: blur(40px);
		transition: all 0.2s ease-out;
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 240px;
	}

	.path-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, transparent, var(--neon-green), transparent);
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.path-card:hover {
		border-color: var(--neon-green);
		box-shadow: 0 8px 32px rgba(0, 212, 255, 0.2);
		transform: translateY(-4px);
	}

	.path-card:hover::before {
		opacity: 1;
	}

	.path-icon {
		width: 60px;
		height: 60px;
		margin: 0 auto 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 212, 255, 0.1);
		border: 2px solid rgba(0, 212, 255, 0.3);
		border-radius: 50%;
		color: var(--neon-green);
		transition: all 0.3s ease;
	}

	.path-card:hover .path-icon {
		background: rgba(0, 212, 255, 0.2);
		border-color: var(--neon-green);
		transform: scale(1.05);
	}

	.path-card h3 {
		font-size: clamp(1.125rem, 2.5vw, 1.4rem);
		font-weight: 700;
		margin-bottom: 0.75rem;
		color: var(--text-primary);
		line-height: 1.2;
	}

	.path-card p {
		font-size: clamp(0.875rem, 2vw, 1rem);
		color: var(--text-secondary);
		line-height: 1.4;
		margin-bottom: 1.5rem;
		flex-grow: 1;
	}

	/* Ensure consistent button sizes */
	.path-card :global(button),
	.path-card :global(a[role="button"]),
	.path-card :global(.interactive-hover-button) {
		width: 100%;
		min-height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		font-size: clamp(0.875rem, 2vw, 1rem);
		font-weight: 600;
		padding: clamp(0.625rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem);
		box-sizing: border-box;
		touch-action: manipulation;
	}


	/* Responsive Design - Mobile First Approach */
	
	/* Small Mobile: 320px - 480px */
	@media (max-width: 480px) {
		.hero {
			min-height: 100svh; /* Support for modern mobile browsers */
			padding: clamp(1rem, 6vw, 2rem) 0;
		}
		
		.hero-content {
			max-width: 100%;
		}
		
		:global(.company-name) {
			font-size: clamp(2rem, 14vw, 3rem);
			margin-bottom: 1rem;
		}
		
		.badge-text {
			font-size: 0.875rem;
			padding: 0.375rem 1rem;
		}
		
		.paths-title {
			font-size: clamp(1.5rem, 6vw, 2rem);
			margin-bottom: 2rem;
		}
		
		.paths-grid {
			grid-template-columns: 1fr;
			max-width: 100%;
		}
		
		.path-card {
			min-height: 200px;
		}
		
		.path-icon {
			width: 48px;
			height: 48px;
			margin-bottom: 1rem;
		}
	}

	/* Mobile/Large Mobile: 481px - 768px */
	@media (max-width: 768px) {
		.hero {
			min-height: 100svh;
		}
		
		:global(.company-name) {
			font-size: clamp(2.5rem, 12vw, 4rem);
		}
		
		.paths-grid {
			grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
			max-width: 600px;
		}
		
		.tech-stack-section,
		.paths-section {
			margin: clamp(3rem, 8vw, 6rem) auto;
		}
	}

	/* Tablet: 769px - 1024px */
	@media (min-width: 769px) and (max-width: 1024px) {
		.hero-content {
			max-width: 100%;
		}
		
		.paths-grid {
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			max-width: 900px;
		}
	}

	/* Desktop: 1025px+ */
	@media (min-width: 1025px) {
		.paths-grid {
			grid-template-columns: repeat(3, 1fr);
			max-width: 1000px;
		}
		
		.hero {
			min-height: 100vh;
		}
	}

	/* Ultra-wide: 1440px+ */
	@media (min-width: 1441px) {
		.container {
			max-width: 1400px;
		}
		
		.paths-grid {
			max-width: 1200px;
		}
	}

	/* Accessibility: Reduce motion */
	@media (prefers-reduced-motion: reduce) {
		* {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
		}
	}

	/* High contrast mode support */
	@media (prefers-contrast: high) {
		.path-card {
			border: 2px solid var(--neon-green);
		}
		
		.path-card h3 {
			color: var(--neon-green);
		}
	}
</style>