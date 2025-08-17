<script lang="ts">
	let selectedPlan = '';
	let showDemo = false;
	let activeFeature = 'automation';
	
	const features = [
		{
			id: 'automation',
			title: '24/7 Intelligent Automation',
			description: 'Handle customer inquiries, bookings, and follow-ups automatically with AI-powered responses that sound natural and professional.',
			icon: '🤖'
		},
		{
			id: 'integration',
			title: 'Seamless Integration',
			description: 'Plug into your existing systems - CRM, calendar, payment processing, and more. Works with what you already use.',
			icon: '🔗'
		},
		{
			id: 'analytics',
			title: 'Smart Analytics',
			description: 'Track customer interactions, response times, conversion rates, and ROI with detailed reporting and insights.',
			icon: '📊'
		},
		{
			id: 'customization',
			title: 'Brand Customization',
			description: 'Train the AI to match your brand voice, handle your specific services, and follow your business processes.',
			icon: '🎨'
		}
	];
	
	const pricingPlans = [
		{
			id: 'starter',
			name: 'Starter',
			price: '₹2,999',
			period: '/month',
			description: 'Perfect for small businesses starting their automation journey',
			features: [
				'Up to 500 conversations/month',
				'Basic AI responses',
				'Email integration',
				'Standard support',
				'Performance dashboard'
			],
			popular: false
		},
		{
			id: 'professional',
			name: 'Professional',
			price: '₹7,999',
			period: '/month',
			description: 'Ideal for growing businesses with higher customer volume',
			features: [
				'Up to 2,000 conversations/month',
				'Advanced AI with context memory',
				'WhatsApp & phone integration',
				'CRM sync',
				'Custom response training',
				'Priority support',
				'Advanced analytics'
			],
			popular: true
		},
		{
			id: 'enterprise',
			name: 'Enterprise',
			price: 'Custom',
			period: '',
			description: 'Tailored solutions for large-scale operations',
			features: [
				'Unlimited conversations',
				'Custom AI model training',
				'Multi-channel integration',
				'Dedicated account manager',
				'Custom workflows',
				'White-label options',
				'24/7 phone support'
			],
			popular: false
		}
	];
	
	function selectPlan(planId: string) {
		selectedPlan = planId;
	}
	
	function toggleDemo() {
		showDemo = !showDemo;
	}
	
	function setActiveFeature(featureId: string) {
		activeFeature = featureId;
	}
</script>

<svelte:head>
	<title>HeyFront Desk - AI-Powered Customer Service Automation</title>
	<meta name="description" content="Transform your customer service with HeyFront Desk's intelligent automation. Handle inquiries, bookings, and follow-ups 24/7 with AI that sounds human." />
</svelte:head>

<div class="heyfrontdesk-page">
	<!-- Hero Section -->
	<section class="hero">
		<div class="container">
			<div class="hero-content">
				<div class="hero-badge">
					<span class="badge-text">AI-Powered Customer Service</span>
				</div>
				
				<h1 class="hero-title">
					<span class="title-primary">HeyFront Desk</span>
					<span class="title-secondary">Your 24/7 AI Customer Service Agent</span>
				</h1>
				
				<p class="hero-description">
					Never miss a customer inquiry again. Our intelligent AI handles phone calls, WhatsApp messages, and emails with responses so natural, your customers will think they're talking to your best employee.
				</p>

				<div class="hero-stats">
					<div class="stat">
						<div class="stat-value">95%</div>
						<div class="stat-label">Customer Satisfaction</div>
					</div>
					<div class="stat">
						<div class="stat-value">24/7</div>
						<div class="stat-label">Availability</div>
					</div>
					<div class="stat">
						<div class="stat-value">3x</div>
						<div class="stat-label">Faster Response</div>
					</div>
				</div>

				<div class="hero-actions">
					<button class="cta-primary" on:click={toggleDemo}>
						<span>Watch Demo</span>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M5 3L13 8L5 13V3Z" fill="currentColor"/>
						</svg>
					</button>
					<a href="/asamkhya/contact" class="cta-secondary">
						Get Started Today
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<section class="features">
		<div class="container">
			<div class="section-header">
				<h2>Everything Your Business Needs</h2>
				<p>Comprehensive AI automation that handles your customer service like a human expert</p>
			</div>

			<div class="features-grid">
				{#each features as feature}
					<div class="feature-card" class:active={activeFeature === feature.id} on:click={() => setActiveFeature(feature.id)}>
						<div class="feature-icon">{feature.icon}</div>
						<h3>{feature.title}</h3>
						<p>{feature.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Demo Section -->
	{#if showDemo}
		<section class="demo-section">
			<div class="container">
				<div class="demo-content">
					<button class="demo-close" on:click={toggleDemo}>×</button>
					<h3>See HeyFront Desk in Action</h3>
					<div class="demo-placeholder">
						<div class="demo-icon">▶️</div>
						<p>Interactive demo coming soon</p>
						<p class="demo-note">Experience how our AI handles real customer conversations</p>
					</div>
				</div>
			</div>
		</section>
	{/if}

	<!-- Pricing Section -->
	<section class="pricing">
		<div class="container">
			<div class="section-header">
				<h2>Simple, Transparent Pricing</h2>
				<p>Choose the plan that fits your business size and needs</p>
			</div>

			<div class="pricing-grid">
				{#each pricingPlans as plan}
					<div class="pricing-card" class:popular={plan.popular} class:selected={selectedPlan === plan.id} on:click={() => selectPlan(plan.id)}>
						{#if plan.popular}
							<div class="popular-badge">Most Popular</div>
						{/if}
						
						<div class="plan-header">
							<h3>{plan.name}</h3>
							<div class="plan-price">
								<span class="price">{plan.price}</span>
								<span class="period">{plan.period}</span>
							</div>
							<p class="plan-description">{plan.description}</p>
						</div>

						<ul class="plan-features">
							{#each plan.features as feature}
								<li>
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path d="M13 4L6 11L3 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
									{feature}
								</li>
							{/each}
						</ul>

						<button class="plan-cta" class:selected={selectedPlan === plan.id}>
							{selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
						</button>
					</div>
				{/each}
			</div>

			<div class="pricing-footer">
				<p>All plans include free setup and training. No hidden fees.</p>
				<a href="/asamkhya/contact" class="enterprise-link">Need a custom solution? Contact us</a>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="final-cta">
		<div class="container">
			<div class="cta-content">
				<h2>Ready to Transform Your Customer Service?</h2>
				<p>Join hundreds of businesses that trust HeyFront Desk to handle their customer interactions professionally and efficiently.</p>
				
				<div class="cta-actions">
					<a href="/asamkhya/contact" class="cta-primary large">
						<span>Start Free Trial</span>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M8 0L8 14M8 14L14 8M8 14L2 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</a>
				</div>
				
				<div class="cta-guarantee">
					<span>14-day free trial • No credit card required • Setup in 24 hours</span>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.heyfrontdesk-page {
		width: 100%;
		min-height: 100vh;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* Hero Section */
	.hero {
		padding: 8rem 0 6rem;
		position: relative;
		overflow: hidden;
	}

	.hero::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 100%;
		background: 
			radial-gradient(circle at 30% 20%, rgba(0, 255, 136, 0.08) 0%, transparent 50%),
			radial-gradient(circle at 70% 80%, rgba(0, 255, 136, 0.04) 0%, transparent 50%);
		pointer-events: none;
	}

	.hero-content {
		text-align: center;
		position: relative;
		z-index: 1;
	}

	.hero-badge {
		display: inline-flex;
		align-items: center;
		padding: 0.5rem 1.25rem;
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 50px;
		margin-bottom: 2rem;
		backdrop-filter: blur(20px);
	}

	.badge-text {
		color: var(--neon-green);
		font-size: 0.875rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.hero-title {
		margin: 0 0 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.title-primary {
		font-size: clamp(3rem, 8vw, 5rem);
		font-weight: 700;
		line-height: 0.9;
		color: var(--text-primary);
		letter-spacing: -0.02em;
	}

	.title-secondary {
		font-size: clamp(1.25rem, 4vw, 2rem);
		font-weight: 600;
		color: var(--neon-green);
		letter-spacing: -0.01em;
	}

	.hero-description {
		font-size: 1.25rem;
		color: var(--text-secondary);
		line-height: 1.6;
		max-width: 600px;
		margin: 0 auto 3rem;
	}

	.hero-stats {
		display: flex;
		justify-content: center;
		gap: 3rem;
		margin-bottom: 3rem;
		flex-wrap: wrap;
	}

	.stat {
		text-align: center;
	}

	.stat-value {
		display: block;
		font-size: 2rem;
		font-weight: 700;
		color: var(--neon-green);
		line-height: 1;
		margin-bottom: 0.5rem;
	}

	.stat-label {
		color: var(--text-muted);
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 500;
	}

	.hero-actions {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.cta-primary {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		background: var(--neon-green);
		color: var(--bg-primary);
		padding: 1rem 2rem;
		border-radius: 12px;
		text-decoration: none;
		font-weight: 600;
		font-size: 1.0625rem;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: 0 4px 20px rgba(0, 255, 136, 0.3);
		border: none;
		cursor: pointer;
	}

	.cta-primary:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-neon), 0 8px 40px rgba(0, 255, 136, 0.4);
	}

	.cta-primary.large {
		padding: 1.25rem 2.5rem;
		font-size: 1.125rem;
	}

	.cta-secondary {
		display: inline-flex;
		align-items: center;
		padding: 1rem 2rem;
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		color: var(--text-primary);
		text-decoration: none;
		border-radius: 12px;
		font-weight: 500;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		backdrop-filter: blur(20px);
	}

	.cta-secondary:hover {
		transform: translateY(-2px);
		border-color: var(--neon-green);
		box-shadow: var(--shadow-subtle);
	}

	/* Features Section */
	.features {
		padding: 8rem 0;
	}

	.section-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.section-header h2 {
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 1rem;
		line-height: 1.1;
	}

	.section-header p {
		font-size: 1.125rem;
		color: var(--text-secondary);
		margin: 0;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.feature-card {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 20px;
		padding: 2.5rem;
		backdrop-filter: blur(20px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		cursor: pointer;
	}

	.feature-card:hover,
	.feature-card.active {
		transform: translateY(-4px);
		border-color: var(--neon-green);
		box-shadow: var(--shadow-medium);
	}

	.feature-icon {
		font-size: 3rem;
		margin-bottom: 1.5rem;
	}

	.feature-card h3 {
		color: var(--text-primary);
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0 0 1rem;
		line-height: 1.3;
	}

	.feature-card p {
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
	}

	/* Demo Section */
	.demo-section {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.8);
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}

	.demo-content {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 20px;
		padding: 3rem;
		max-width: 600px;
		width: 100%;
		backdrop-filter: blur(20px);
		position: relative;
		text-align: center;
	}

	.demo-close {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: none;
		border: none;
		color: var(--text-primary);
		font-size: 2rem;
		cursor: pointer;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
	}

	.demo-close:hover {
		background: var(--bg-glass);
	}

	.demo-placeholder {
		padding: 4rem 2rem;
		background: var(--bg-secondary);
		border-radius: 12px;
		margin-top: 2rem;
	}

	.demo-icon {
		font-size: 4rem;
		margin-bottom: 1rem;
	}

	.demo-note {
		color: var(--text-muted);
		margin-top: 1rem;
	}

	/* Pricing Section */
	.pricing {
		padding: 8rem 0;
		background: var(--bg-secondary);
	}

	.pricing-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
		max-width: 1200px;
		margin: 0 auto 3rem;
	}

	.pricing-card {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 20px;
		padding: 2.5rem;
		backdrop-filter: blur(20px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		position: relative;
		cursor: pointer;
	}

	.pricing-card:hover,
	.pricing-card.selected {
		transform: translateY(-4px);
		border-color: var(--neon-green);
		box-shadow: var(--shadow-medium);
	}

	.pricing-card.popular {
		border-color: var(--neon-green);
		background: rgba(0, 255, 136, 0.05);
	}

	.popular-badge {
		position: absolute;
		top: -12px;
		left: 50%;
		transform: translateX(-50%);
		background: var(--neon-green);
		color: var(--bg-primary);
		padding: 0.5rem 1.5rem;
		border-radius: 50px;
		font-size: 0.875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.plan-header {
		text-align: center;
		margin-bottom: 2rem;
	}

	.plan-header h3 {
		color: var(--text-primary);
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0 0 1rem;
	}

	.plan-price {
		margin-bottom: 1rem;
	}

	.price {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--neon-green);
	}

	.period {
		color: var(--text-muted);
		font-size: 1rem;
	}

	.plan-description {
		color: var(--text-secondary);
		margin: 0;
		line-height: 1.5;
	}

	.plan-features {
		list-style: none;
		padding: 0;
		margin: 0 0 2rem;
	}

	.plan-features li {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem 0;
		color: var(--text-secondary);
		border-bottom: 1px solid var(--border-subtle);
	}

	.plan-features li:last-child {
		border-bottom: none;
	}

	.plan-features svg {
		color: var(--neon-green);
		flex-shrink: 0;
	}

	.plan-cta {
		width: 100%;
		padding: 1rem;
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		color: var(--text-primary);
		border-radius: 12px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.plan-cta:hover,
	.plan-cta.selected {
		background: var(--neon-green);
		color: var(--bg-primary);
		border-color: var(--neon-green);
	}

	.pricing-footer {
		text-align: center;
		color: var(--text-muted);
	}

	.enterprise-link {
		color: var(--neon-green);
		text-decoration: none;
		font-weight: 500;
		display: block;
		margin-top: 1rem;
	}

	.enterprise-link:hover {
		text-decoration: underline;
	}

	/* Final CTA */
	.final-cta {
		padding: 8rem 0;
	}

	.cta-content {
		text-align: center;
	}

	.cta-content h2 {
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 1rem;
		line-height: 1.1;
	}

	.cta-content > p {
		font-size: 1.25rem;
		color: var(--text-secondary);
		margin: 0 0 3rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 3rem;
	}

	.cta-actions {
		margin-bottom: 2rem;
	}

	.cta-guarantee {
		color: var(--text-muted);
		font-size: 0.9375rem;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.container {
			padding: 0 1.5rem;
		}

		.hero {
			padding: 6rem 0 4rem;
		}

		.hero-stats {
			gap: 2rem;
		}

		.hero-actions {
			flex-direction: column;
			align-items: center;
		}

		.features-grid,
		.pricing-grid {
			grid-template-columns: 1fr;
		}

		.feature-card,
		.pricing-card {
			padding: 2rem;
		}

		.features,
		.pricing,
		.final-cta {
			padding: 6rem 0;
		}

		.demo-content {
			padding: 2rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none !important;
			animation: none !important;
		}
	}
</style>