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


				<!-- Services Section -->
				<div class="services-section">
					<div class="service-card">
						<div class="service-icon">
							<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
								<!-- Web Services Icon -->
								<circle cx="12" cy="12" r="10"/>
								<path d="M2 12h20"/>
								<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
								<circle cx="12" cy="12" r="3"/>
								<path d="M8 8l8 8"/>
								<path d="M16 8l-8 8"/>
							</svg>
						</div>
						<h3>Web Services</h3>
						<p>Pro Code Meets Vibe Code</p>
					</div>
					<div class="service-card">
						<div class="service-icon">
							<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
								<!-- Automation Icon -->
								<rect x="2" y="6" width="20" height="12" rx="2"/>
								<circle cx="8" cy="12" r="2"/>
								<path d="M14 12h6"/>
								<path d="M20 10v4"/>
								<path d="M5 2v4"/>
								<path d="M19 2v4"/>
								<path d="M2 12l6-6"/>
								<path d="M16 18l6-6"/>
							</svg>
						</div>
						<h3>Automation</h3>
						<p>AI Agents + True Intelligence</p>
					</div>
					<div class="service-card">
						<div class="service-icon">
							<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
								<!-- Product Development Icon -->
								<path d="M12 2L2 7l10 5 10-5-10-5z"/>
								<path d="M2 17l10 5 10-5"/>
								<path d="M2 12l10 5 10-5"/>
								<circle cx="12" cy="7" r="1" fill="currentColor"/>
								<circle cx="12" cy="12" r="1" fill="currentColor"/>
								<circle cx="12" cy="17" r="1" fill="currentColor"/>
								<path d="M7 12l5-3"/>
								<path d="M17 12l-5-3"/>
							</svg>
						</div>
						<h3>Product Development</h3>
						<p>Large Scale Impact Solutions</p>
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
							<h3>Create A Website</h3>
							<p>AI Powered Web Development</p>
							<InteractiveHoverButton href="/asamkhya/website">
								<span>Build With Us</span>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
									<path d="M8 0L8 14M8 14L14 8M8 14L2 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
							<h3>AI Course</h3>
							<p>Acumen Based Admissions</p>
							<InteractiveHoverButton href="/asamkhya/ai-course">
								<span>Apply Now</span>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
									<path d="M8 0L8 14M8 14L14 8M8 14L2 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
		padding: 0 2rem;
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
		padding: 4rem 0;
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
		display: flex;
		justify-content: center;
		gap: 2rem;
		margin: 2rem auto;
		max-width: 700px;
		width: 100%;
		padding: 0 2rem;
		box-sizing: border-box;
	}

	.path-card {
		background: var(--bg-glass);
		border: 2px solid var(--border-medium);
		border-radius: 20px;
		padding: 2rem 1.5rem;
		text-align: center;
		backdrop-filter: blur(20px);
		transition: all 0.3s var(--ease-out-cubic);
		position: relative;
		overflow: hidden;
		flex: 1;
		max-width: 280px;
		min-width: 260px;
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
		font-size: 1.4rem;
		font-weight: 700;
		margin-bottom: 0.75rem;
		color: var(--text-primary);
	}

	.path-card p {
		font-size: 1rem;
		color: var(--text-secondary);
		line-height: 1.4;
		margin-bottom: 1.5rem;
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
		font-size: 1rem;
		font-weight: 600;
		padding: 0.75rem 1.5rem;
		box-sizing: border-box;
	}


	/* Responsive Design */
	@media (max-width: 1024px) {
		.container {
			padding: 0 1.5rem;
		}

		.hero-content {
			max-width: 100%;
		}


		.services-section {
			max-width: 100%;
		}
	}

	@media (max-width: 768px) {
		.container {
			padding: 0 1rem;
		}

		:global(.company-name) {
			font-size: clamp(2.5rem, 12vw, 4rem);
		}

		.services-section {
			flex-direction: column;
			gap: 2rem;
			margin: 4rem auto;
			padding: 0 1rem;
			max-width: 100%;
		}

		.service-card {
			padding: 2rem 1.5rem;
			max-width: 100%;
		}

		.service-icon {
			width: 55px;
			height: 55px;
			margin-bottom: 1.25rem;
		}


		.paths-grid {
			flex-direction: column;
			gap: 2rem;
			max-width: 400px;
		}

		.path-card {
			padding: 2rem 1.5rem;
			max-width: 100%;
		}


		.paths-title {
			font-size: 2rem;
		}

	}

	@media (max-width: 480px) {
		.container {
			padding: 0 0.75rem;
		}

		.hero-content {
			max-width: 100%;
		}


		.services-section {
			margin: 3rem auto;
			padding: 0 0.75rem;
			gap: 1.5rem;
		}

		.service-card {
			padding: 2rem 1.5rem;
		}

		.service-icon {
			width: 60px;
			height: 60px;
		}


		.paths-section {
			margin: 3rem 0;
		}

		.path-card {
			padding: 1.5rem 1rem;
		}

	}
</style>