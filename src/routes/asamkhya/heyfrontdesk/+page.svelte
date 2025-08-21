<script lang="ts">
	import { InteractiveHoverButton, BentoGrid, BentoCard, Marquee, AnimatedList, Calendar, IntegrationsDemo, PremiumGravitationalSystem } from '$lib/components/magicui';
	import PremiumNotifications from '$lib/components/magicui/premium-notifications.svelte';
	import PremiumCalendar from '$lib/components/magicui/premium-calendar.svelte';
	import PremiumIntegrations from '$lib/components/magicui/premium-integrations.svelte';
	import PremiumFiles from '$lib/components/magicui/premium-files.svelte';

	// Real-time notifications from the 12 agents - Specific 4 notifications for Live Agent Activity
	const notifications = [
		{
			id: 1,
			agent: "Cleaning Confirmed",
			message: "Villa Sunset cleaning completed and verified",
			time: "2 min ago",
			status: "success"
		},
		{
			id: 2,
			agent: "Laundry Delivered",
			message: "Fresh linens delivered to Unit 204",
			time: "5 min ago",
			status: "success"
		},
		{
			id: 3,
			agent: "Guest Verification Submitted",
			message: "Aadhaar verification completed for Priya Sharma",
			time: "8 min ago",
			status: "success"
		},
		{
			id: 4,
			agent: "Lock Box Details Delivered", 
			message: "Access code sent to Villa Sunset guest",
			time: "12 min ago",
			status: "success"
		}
	];

	// Property management compliance files
	const complianceFiles = [
		{
			name: "checkin-checkout-data.pdf",
			body: "Automated guest check-in and checkout documentation with timestamps, identity verification, and compliance tracking."
		},
		{
			name: "daily-report-analysis.xlsx",
			body: "Comprehensive daily operational reports including occupancy rates, revenue analytics, and performance metrics."
		},
		{
			name: "guest-verification.json",
			body: "Real-time guest identity verification data with Aadhaar integration and compliance status tracking."
		},
		{
			name: "payment-reconciliation.pdf",
			body: "Automated payment gateway reconciliation reports with transaction details and financial compliance."
		},
		{
			name: "maintenance-logs.txt",
			body: "Systematic maintenance request logs with vendor assignments, completion status, and quality assurance records."
		},
		{
			name: "tax-compliance.pdf",
			body: "Tax documentation and regulatory filings with automated GST calculations and government portal submissions."
		},
		{
			name: "safety-audit.xlsx",
			body: "Property safety and maintenance audits with compliance checklists and inspection scheduling automation."
		}
	];

	// Features configuration for the bento grid
	const agentFeatures = [
		{
			name: "Live Agent Activity", 
			description: "Real-time notifications from 12 specialized property management agents.",
			cta: "Monitor Activity",
			className: "col-span-3 lg:col-span-2",
			background: "notifications"
		},
		{
			name: "Multi-Platform Panel",
			description: "",
			cta: "Manage Connections", 
			className: "col-span-3 lg:col-span-2",
			background: "integrations"
		},
		{
			name: "Multi-OTA Calendar Sync",
			description: "",
			cta: "View Calendar",
			className: "col-span-3 lg:col-span-1",
			background: "calendar"
		}
	];
</script>

<svelte:head>
	<title>HeyFrontDesk Proprietary Tech - AI Property Management | Asamkhya</title>
	<meta name="description" content="Proprietary technology: How Asamkhya built the first hands-off property management system using 12 AI agents + STR specialists. 100% coverage, 24/7 availability." />
</svelte:head>

<div class="page">
	<!-- Hero Section -->
	<section class="hero">
		<div class="container">
			<div class="hero-content">
				<div class="case-study-badge">
					<span class="badge-text">Proprietary Tech</span>
				</div>
				
				<h1 class="hero-title">
					Your Property Micromanagers
				</h1>
				
				<div class="hero-subtitle">
					<span class="subtitle-emphasis">24X7. Human Led. True Intelligence Backed.</span>
				</div>
				
				<div class="hero-description">
					<p>Redefining Short Term Rental Operations. A B2B solution for Property owners of all sizes. For everyone who wants to make more money and yet save more time.</p>
				</div>
				
				<div class="launch-status">
					<span class="status-badge">Launching Soon</span>
				</div>
			</div>
		</div>
	</section>

	<!-- The Build Section -->
	<section class="build-section">
		<div class="container">
			<div class="section-header">
				<h2>How it Works</h2>
				<p>The first complete property management system that actually works - where property owners are completely hands-off while maintaining 24/7 premium service.</p>
			</div>
			
			<!-- HeyFrontDesk System Architecture -->
			<div class="system-architecture">
				<div class="architecture-header">
					<h3>The HeyFrontDesk 3-Layer System</h3>
					<p>A revolutionary architecture with short-term rental specialists that doesn't exist anywhere else - property owners stay completely hands-off</p>
				</div>
				
				<!-- Query Flow Explanation -->
				<div class="query-flow">
					<div class="flow-step">
						<div class="step-number">1</div>
						<div class="step-content">
							<h4>12 AI Agents</h4>
							<p>Handle ALL incoming queries 24/7. Each specialized in bookings, payments, maintenance, guest communication, etc.</p>
						</div>
					</div>
					<div class="flow-arrow">→</div>
					<div class="flow-step">
						<div class="step-number">2</div>
						<div class="step-content">
							<h4>Mr. Key Orchestrator</h4>
							<p>Coordinates complex multi-agent tasks, statutory escalations, and makes decisions AI agents can't handle alone.</p>
						</div>
					</div>
					<div class="flow-arrow">→</div>
					<div class="flow-step">
						<div class="step-number">3</div>
						<div class="step-content">
							<h4>HFD Human Concierge</h4>
							<p>Short-term rental specialists who handle EVERY escalation AI cannot resolve. Acts as your complete property manager, shielding you from all operations.</p>
						</div>
					</div>
				</div>
				
				<div class="system-stats">
					<div class="stat-highlight">
						<span class="stat-number">100%</span>
						<span class="stat-label">Coverage Guaranteed</span>
					</div>
					<div class="stat-highlight">
						<span class="stat-number">24/7</span>
						<span class="stat-label">AI + STR Specialists</span>
					</div>
					<div class="stat-highlight">
						<span class="stat-number">0%</span>
						<span class="stat-label">Owner Involvement Needed</span>
					</div>
				</div>
				
				<PremiumGravitationalSystem className="agents-orbit-demo" />
			</div>

		</div>
	</section>


	<!-- Live Agents in Action -->
	<section class="agents-live">
		<div class="container">
			<div class="section-header">
				<h2>Watch the Agents Work</h2>
				<p>Real-time activity from the 12 specialized agents managing properties right now</p>
			</div>
			
			<BentoGrid>
				{#each agentFeatures as feature}
					<BentoCard 
						name={feature.name}
						description={feature.description} 
						cta={feature.cta}
						className={feature.className}
					>
						{#if feature.background === "notifications"}
							<PremiumNotifications {notifications} />
						{:else if feature.background === "integrations"}
							<PremiumIntegrations />
						{:else if feature.background === "calendar"}
							<PremiumCalendar selected={new Date(2024, 11, 15)} />
						{/if}
					</BentoCard>
				{/each}
			</BentoGrid>
		</div>
	</section>

	<!-- Results Section -->
	<section class="results">
		<div class="container">
			<div class="section-header">
				<h2>The Economics of AI-First Business</h2>
				<p>Dramatic cost reduction through intelligent automation</p>
			</div>
			
			<div class="cost-comparison">
				<div class="cost-card traditional">
					<h3>Traditional Property Management</h3>
					<div class="cost-amount">₹40,000<span>/month</span></div>
					<div class="cost-breakdown">
						<div class="cost-item">• Field staff salaries</div>
						<div class="cost-item">• Office overhead</div>
						<div class="cost-item">• Manual coordination</div>
						<div class="cost-item">• Reactive problem solving</div>
					</div>
				</div>
				
				<div class="vs-arrow">
					<span>→</span>
				</div>
				
				<div class="cost-card heyfrontdesk">
					<h3>HeyFrontDesk</h3>
					<div class="cost-amount highlight">₹4,000<span>/month</span></div>
					<div class="cost-breakdown">
						<div class="cost-item">• Automated 80% of operations</div>
						<div class="cost-item">• No field staff required</div>
						<div class="cost-item">• Streamlined vendor coordination</div>
						<div class="cost-item">• Real-time response times</div>
					</div>
				</div>
			</div>
			
			<div class="results-highlight">
				<div class="result-stat">
					<span class="stat-number">90%</span>
					<span class="stat-label">Cost Reduction</span>
				</div>
				<div class="result-description">
					<p><em>Same quality service. One-tenth the cost. This is what AI-first design looks like.</em></p>
				</div>
			</div>
		</div>
	</section>

	<!-- Human + AI Section -->
	<section class="human-ai">
		<div class="container">
			<div class="section-header">
				<h2>Led by Humans, Powered by Intelligence</h2>
				<p>The perfect balance: AI efficiency with human judgment</p>
			</div>
			
			<div class="hybrid-showcase">
				<div class="hybrid-card">
					<div class="card-icon">
						<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--neon-green)" stroke-width="2">
							<rect x="3" y="11" width="18" height="10" rx="2" ry="2"/>
							<circle cx="12" cy="5" r="2"/>
							<path d="m12 7-3 4h6l-3-4z"/>
							<circle cx="8" cy="16" r="1"/>
							<circle cx="16" cy="16" r="1"/>
						</svg>
					</div>
					<h3>AI Handles</h3>
					<ul>
						<li>Routine inquiries & bookings</li>
						<li>Payment processing & verification</li>
						<li>Vendor coordination</li>
						<li>Guest communication</li>
						<li>Maintenance scheduling</li>
					</ul>
				</div>
				
				<div class="handoff-arrow">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--neon-green)" stroke-width="2">
						<polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
					</svg>
				</div>
				
				<div class="hybrid-card">
					<div class="card-icon">
						<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--neon-green)" stroke-width="2">
							<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
							<circle cx="9" cy="7" r="4"/>
							<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
							<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
						</svg>
					</div>
					<h3>Humans Step In</h3>
					<ul>
						<li>Complex problem resolution</li>
						<li>Emotional situations</li>
						<li>High-value guest services</li>
						<li>Crisis management</li>
						<li>Strategic decisions</li>
					</ul>
				</div>
			</div>
			
			<div class="result-summary">
				<div class="summary-stat">
					<span class="stat-number">80%</span>
					<span class="stat-label">Automated</span>
				</div>
				<div class="summary-stat">
					<span class="stat-number">20%</span>
					<span class="stat-label">Human Touch</span>
				</div>
				<div class="summary-stat">
					<span class="stat-number">100%</span>
					<span class="stat-label">Satisfaction</span>
				</div>
			</div>
		</div>
	</section>

	<!-- What This Proves Section -->
	<section class="proof">
		<div class="container">
			<div class="section-header">
				<h2>What This Proves</h2>
				<p>Why we built this case study for you</p>
			</div>
			
			<div class="proof-grid">
				<div class="proof-card">
					<div class="proof-number">01</div>
					<h3>AI Can Handle Complex Business Logic</h3>
					<p>Property management isn't just chat. It's multi-step operations, vendor coordination, payments, and crisis management. We proved AI can do it all.</p>
				</div>
				
				<div class="proof-card">
					<div class="proof-number">02</div>
					<h3>90% Cost Reduction is Real</h3>
					<p>Not theoretical. We actually achieved ₹40,000 → ₹4,000 monthly costs while maintaining service quality. The economics work.</p>
				</div>
				
				<div class="proof-card">
					<div class="proof-number">03</div>
					<h3>We Can Build This For Your Business</h3>
					<p>Whatever your industry—retail, healthcare, logistics, finance—we design AI-first solutions that transform your operations and economics.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Launch Section -->
	<section class="launch">
		<div class="container">
			<div class="section-header">
				<h2>HeyFrontDesk is Live</h2>
				<p>See the actual product in action</p>
			</div>
			
			<div class="launch-content">
				<div class="launch-info">
					<div class="launch-detail">
						<h3>Currently Serving</h3>
						<div class="detail-stats">
							<div class="detail-stat">
								<span class="stat-value">15+</span>
								<span class="stat-desc">Properties</span>
							</div>
							<div class="detail-stat">
								<span class="stat-value">200+</span>
								<span class="stat-desc">Guests/Month</span>
							</div>
						</div>
					</div>
					
					<div class="launch-links">
						<a href="https://heyfrontdesk.com" target="_blank" rel="noopener noreferrer" class="launch-btn primary">
							<span>Visit HeyFrontDesk.com</span>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path d="M8 2L14 8L8 14M14 8L2 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</a>
						
						<a href="https://demo.heyfrontdesk.com" target="_blank" rel="noopener noreferrer" class="launch-btn secondary">
							<span>Try Live Demo</span>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path d="M8 2L14 8L8 14M14 8L2 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</a>
					</div>
				</div>
				
				<div class="investment-info">
					<h3>Investment Options</h3>
					<div class="investment-tier">
						<div class="tier-price">₹9,000<span>/property/month</span></div>
						<div class="tier-features">
							<div class="tier-feature">• Complete AI property management</div>
							<div class="tier-feature">• 12 specialized agents</div>
							<div class="tier-feature">• Human backup & escalation</div>
							<div class="tier-feature">• 24/7 guest support</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="case-study-cta">
		<div class="container">
			<div class="cta-content">
				<h2>Ready to Transform Your Business?</h2>
				<p>Let's design an AI-first solution for your industry. Same approach, your context.</p>
				
				<div class="cta-actions">
					<InteractiveHoverButton href="/asamkhya/contact" className="primary large">
						<span>Schedule Strategy Session</span>
						<svg width="20" height="20" viewBox="0 0 16 16" fill="none">
							<path d="M8 2L14 8L8 14M14 8L2 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</InteractiveHoverButton>
					
					<InteractiveHoverButton href="/asamkhya/ai-course" className="secondary large">
						<span>Learn Our Methods</span>
					</InteractiveHoverButton>
				</div>
				
				<div class="cta-note">
					<p><em>This case study showcases our AI product development capabilities. Every business is unique—let's build something revolutionary for yours.</em></p>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	/* Page Layout */
	.page {
		width: 100%;
		min-height: 100vh;
		background: var(--bg-primary);
		color: var(--text-primary);
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
		background: var(--bg-secondary);
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
		max-width: 800px;
		margin: 0 auto;
		padding: 0 1rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
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
		font-size: clamp(2rem, 6vw, 5rem);
		font-weight: 800;
		color: var(--text-primary);
		margin: 0 0 2rem;
		line-height: 1.1;
		letter-spacing: -0.02em;
		text-align: center;
		width: 100%;
		display: block;
	}

	.hero-subtitle {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.main-question {
		font-size: clamp(1.5rem, 4vw, 2rem);
		font-weight: 300;
		color: var(--text-secondary);
		letter-spacing: -0.01em;
	}

	.main-answer {
		font-size: clamp(1.8rem, 5vw, 2.5rem);
		font-weight: 700;
		color: var(--neon-green);
		letter-spacing: -0.02em;
	}

	.hero-description {
		margin-bottom: 3rem;
	}

	.hero-description p {
		font-size: 1.125rem;
		color: var(--text-secondary);
		line-height: 1.6;
		max-width: 600px;
		margin: 0 auto;
	}

	.hero-actions {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	/* Features Section */
	.features {
		padding: 8rem 0;
		background: var(--bg-primary);
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
		border-radius: 16px;
		padding: 2rem;
		backdrop-filter: blur(20px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		text-align: center;
	}

	.feature-card:hover {
		transform: translateY(-4px);
		border-color: var(--neon-green);
		box-shadow: var(--shadow-medium);
	}

	.feature-icon {
		font-size: 3rem;
		margin-bottom: 1.5rem;
		display: block;
	}

	.feature-card h3 {
		color: var(--text-primary);
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0 0 1rem;
	}

	.feature-card p {
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
	}

	/* Demo Section */
	.demo {
		padding: 8rem 0;
		background: var(--bg-secondary);
	}

	.demo-content {
		text-align: center;
	}

	.demo-header {
		margin-bottom: 4rem;
	}

	.demo-header h2 {
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 1rem;
	}

	.demo-header p {
		font-size: 1.125rem;
		color: var(--text-secondary);
		margin: 0;
	}

	.demo-interface {
		display: flex;
		justify-content: center;
	}

	.phone-interface {
		max-width: 400px;
		width: 100%;
	}

	.phone-screen {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 24px;
		padding: 2rem;
		backdrop-filter: blur(20px);
	}

	.call-info {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 2rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--border-subtle);
	}

	.caller-avatar {
		width: 48px;
		height: 48px;
		background: var(--bg-tertiary);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
	}

	.caller-details h4 {
		color: var(--text-primary);
		margin: 0 0 0.25rem;
		font-size: 1.125rem;
	}

	.caller-details p {
		color: var(--text-secondary);
		margin: 0;
		font-size: 0.9rem;
	}

	.conversation {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.message {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1rem;
		border-radius: 12px;
		text-align: left;
	}

	.ai-message {
		background: rgba(0, 255, 136, 0.1);
		border: 1px solid rgba(0, 255, 136, 0.3);
	}

	.human-message {
		background: var(--bg-tertiary);
		border: 1px solid var(--border-subtle);
	}

	.speaker {
		font-weight: 600;
		font-size: 0.875rem;
		color: var(--neon-green);
	}

	.human-message .speaker {
		color: var(--text-primary);
	}

	.text {
		color: var(--text-secondary);
		line-height: 1.5;
	}

	.demo-btn {
		background: var(--neon-green);
		color: var(--bg-primary);
		border: none;
		padding: 1rem 2rem;
		border-radius: 12px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: 0 4px 20px rgba(0, 255, 136, 0.3);
	}

	.demo-btn:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-neon);
	}

	/* Pricing Section */
	.pricing {
		padding: 8rem 0;
		background: var(--bg-primary);
	}

	.pricing-cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 2rem;
		max-width: 1000px;
		margin: 0 auto;
	}

	.pricing-card {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 20px;
		padding: 2.5rem;
		backdrop-filter: blur(20px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		position: relative;
		text-align: center;
	}

	.pricing-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-medium);
	}

	.pricing-card.featured {
		border-color: var(--neon-green);
		box-shadow: 0 0 40px rgba(0, 255, 136, 0.2);
	}

	.plan-badge {
		position: absolute;
		top: -10px;
		left: 50%;
		transform: translateX(-50%);
		background: var(--neon-green);
		color: var(--bg-primary);
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.plan-header {
		margin-bottom: 2rem;
	}

	.plan-header h3 {
		color: var(--text-primary);
		font-size: 1.5rem;
		font-weight: 700;
		margin: 0 0 1rem;
	}

	.price {
		display: flex;
		align-items: baseline;
		justify-content: center;
		gap: 0.25rem;
	}

	.amount {
		color: var(--neon-green);
		font-size: 2.5rem;
		font-weight: 800;
		line-height: 1;
	}

	.period {
		color: var(--text-secondary);
		font-size: 1rem;
		font-weight: 500;
	}

	.features-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 2.5rem;
		text-align: left;
	}

	.feature {
		color: var(--text-secondary);
		font-size: 0.95rem;
		line-height: 1.4;
	}

	.plan-button {
		width: 100%;
	}

	/* Contact Section */
	.contact {
		padding: 8rem 0;
		background: var(--bg-secondary);
	}

	.contact-form-section {
		max-width: 800px;
		margin: 0 auto;
	}

	.form-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.form-header h2 {
		font-size: clamp(2.5rem, 5vw, 3rem);
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 1rem;
	}

	.form-header p {
		color: var(--text-secondary);
		font-size: 1.125rem;
		margin: 0;
	}

	.contact-form {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 20px;
		padding: 3rem;
		backdrop-filter: blur(20px);
	}

	.form-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.form-group.full-width {
		grid-column: 1 / -1;
	}

	.form-group label {
		color: var(--text-primary);
		font-weight: 600;
		font-size: 1rem;
	}

	.form-group input,
	.form-group textarea {
		padding: 1rem 1.25rem;
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 12px;
		color: var(--text-primary);
		font-family: inherit;
		font-size: 1rem;
		backdrop-filter: blur(20px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.form-group input::placeholder,
	.form-group textarea::placeholder {
		color: var(--text-muted);
	}

	.form-group input:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: var(--neon-green);
		box-shadow: 0 0 0 3px rgba(0, 255, 136, 0.1);
	}

	.form-group textarea {
		resize: vertical;
		min-height: 120px;
		line-height: 1.5;
	}

	.submit-btn {
		width: 100%;
		background: var(--neon-green);
		color: var(--bg-primary);
		border: none;
		padding: 1.25rem 2rem;
		font-size: 1.125rem;
		font-weight: 600;
		border-radius: 12px;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: 0 4px 20px rgba(0, 255, 136, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
	}

	.submit-btn:hover:not(:disabled) {
		transform: translateY(-2px);
		box-shadow: var(--shadow-neon);
	}

	.submit-btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
		transform: none;
	}

	.loading-dots {
		display: flex;
		gap: 0.25rem;
	}

	.dot {
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: var(--bg-primary);
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

	/* Success State */
	.success-container {
		text-align: center;
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 24px;
		padding: 4rem 3rem;
		backdrop-filter: blur(20px);
		max-width: 600px;
		margin: 0 auto;
	}

	.success-icon {
		font-size: 4rem;
		margin-bottom: 2rem;
	}

	.success-container h2 {
		font-size: 2.5rem;
		color: var(--text-primary);
		margin: 0 0 1.5rem;
		font-weight: 700;
	}

	.success-message {
		font-size: 1.125rem;
		color: var(--text-secondary);
		line-height: 1.6;
		margin-bottom: 2rem;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.container {
			padding: 0 1.5rem;
		}

		.hero {
			padding: 6rem 0 4rem;
		}

		.features,
		.demo,
		.pricing,
		.contact {
			padding: 6rem 0;
		}

		.features-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.pricing-cards {
			grid-template-columns: 1fr;
		}

		.form-grid {
			grid-template-columns: 1fr;
		}

		.contact-form {
			padding: 2rem;
		}

		.success-container {
			padding: 3rem 2rem;
		}
	}

	/* iPhone 15 and similar small screens */
	@media (max-width: 430px) {
		.container {
			padding: 0 1rem;
		}

		.hero-title {
			font-size: clamp(2.2rem, 8vw, 3rem);
		}

		.main-question {
			font-size: clamp(1.2rem, 5vw, 1.6rem);
		}

		.main-answer {
			font-size: clamp(1.4rem, 6vw, 1.8rem);
		}

		.section-header h2 {
			font-size: clamp(1.8rem, 6vw, 2.5rem);
		}

		.feature-card {
			padding: 1.5rem;
		}

		.phone-screen {
			padding: 1.5rem;
		}

		.contact-form {
			padding: 1.5rem;
		}

		.success-container {
			padding: 2rem 1.5rem;
		}

		.success-container h2 {
			font-size: clamp(1.8rem, 6vw, 2.2rem);
		}
	}

	/* Human + AI Section */
	.human-ai {
		padding: 8rem 0;
		background: var(--bg-primary);
	}

	.hybrid-showcase {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 3rem;
		align-items: center;
		margin-bottom: 4rem;
	}

	.hybrid-card {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 16px;
		padding: 2rem;
		backdrop-filter: blur(20px);
		text-align: center;
	}

	.card-icon {
		margin-bottom: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.card-icon svg {
		width: 48px;
		height: 48px;
		stroke: var(--neon-green);
		filter: drop-shadow(0 0 4px rgba(0, 255, 136, 0.3));
	}

	.hybrid-card h3 {
		color: var(--text-primary);
		font-size: 1.5rem;
		font-weight: 700;
		margin: 0 0 1.5rem;
	}

	.hybrid-card ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		text-align: left;
	}

	.hybrid-card li {
		color: var(--text-secondary);
		font-size: 0.9rem;
		line-height: 1.4;
	}

	.handoff-arrow {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.handoff-arrow svg {
		width: 32px;
		height: 32px;
		stroke: var(--neon-green);
		filter: drop-shadow(0 0 6px rgba(0, 255, 136, 0.4));
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0%, 100% { opacity: 1; transform: scale(1); }
		50% { opacity: 0.7; transform: scale(1.05); }
	}

	.result-summary {
		display: flex;
		justify-content: center;
		gap: 4rem;
		text-align: center;
	}

	.summary-stat {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.summary-stat .stat-number {
		color: var(--neon-green);
		font-size: 2.5rem;
		font-weight: 800;
		line-height: 1;
	}

	.summary-stat .stat-label {
		color: var(--text-secondary);
		font-size: 0.9rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	/* What This Proves Section */
	.proof {
		padding: 8rem 0;
		background: var(--bg-secondary);
	}

	.proof-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.proof-card {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 16px;
		padding: 2.5rem;
		backdrop-filter: blur(20px);
		position: relative;
	}

	.proof-number {
		position: absolute;
		top: -12px;
		left: 2rem;
		background: var(--neon-green);
		color: var(--bg-primary);
		width: 32px;
		height: 32px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 0.875rem;
	}

	.proof-card h3 {
		color: var(--text-primary);
		font-size: 1.25rem;
		font-weight: 700;
		margin: 0 0 1rem;
		line-height: 1.3;
	}

	.proof-card p {
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
	}

	/* Launch Section */
	.launch {
		padding: 8rem 0;
		background: var(--bg-primary);
	}

	.launch-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: start;
	}

	.launch-info h3,
	.investment-info h3 {
		color: var(--text-primary);
		font-size: 1.5rem;
		font-weight: 700;
		margin: 0 0 1.5rem;
	}

	.detail-stats {
		display: flex;
		gap: 2rem;
		margin-top: 1rem;
	}

	.detail-stat {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.stat-value {
		color: var(--neon-green);
		font-size: 2rem;
		font-weight: 800;
		line-height: 1;
	}

	.stat-desc {
		color: var(--text-secondary);
		font-size: 0.875rem;
		font-weight: 500;
	}

	.launch-links {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 2rem;
	}

	.launch-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		padding: 1rem 2rem;
		border-radius: 12px;
		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		border: 2px solid transparent;
	}

	.launch-btn.primary {
		background: var(--neon-green);
		color: var(--bg-primary);
		box-shadow: 0 4px 20px rgba(0, 255, 136, 0.3);
	}

	.launch-btn.secondary {
		background: transparent;
		color: var(--neon-green);
		border-color: var(--neon-green);
	}

	.launch-btn:hover {
		transform: translateY(-2px);
	}

	.launch-btn.primary:hover {
		box-shadow: var(--shadow-neon);
	}

	.launch-btn.secondary:hover {
		background: rgba(0, 255, 136, 0.1);
	}

	.investment-tier {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 16px;
		padding: 2rem;
		backdrop-filter: blur(20px);
	}

	.tier-price {
		color: var(--neon-green);
		font-size: 2rem;
		font-weight: 800;
		margin-bottom: 1.5rem;
		line-height: 1;
	}

	.tier-price span {
		color: var(--text-secondary);
		font-size: 1rem;
		font-weight: 500;
	}

	.tier-features {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.tier-feature {
		color: var(--text-secondary);
		font-size: 0.9rem;
		line-height: 1.4;
	}

	/* CTA Section */
	.case-study-cta {
		padding: 8rem 0;
		background: var(--bg-secondary);
		position: relative;
	}

	.case-study-cta::before {
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

	.cta-content {
		text-align: center;
		position: relative;
		z-index: 1;
		max-width: 800px;
		margin: 0 auto;
	}

	.cta-content h2 {
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 1rem;
		line-height: 1.1;
	}

	.cta-content p {
		font-size: 1.25rem;
		color: var(--text-secondary);
		margin: 0 0 3rem;
		line-height: 1.6;
	}

	.cta-actions {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.cta-note {
		max-width: 600px;
		margin: 0 auto;
	}

	.cta-note p {
		font-size: 1rem;
		color: var(--text-muted);
		margin: 0;
		line-height: 1.5;
	}

	/* Build Section Styles */
	.build-section {
		padding: 8rem 0;
		background: var(--bg-secondary);
	}

	.build-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 3rem;
	}

	.build-card {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 16px;
		padding: 2.5rem;
		backdrop-filter: blur(20px);
	}

	.build-card h3 {
		color: var(--text-primary);
		font-size: 1.5rem;
		font-weight: 700;
		margin: 0 0 1.5rem;
	}

	.build-card p {
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
	}

	.stack-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.stack-item {
		color: var(--text-secondary);
		font-size: 0.95rem;
		line-height: 1.4;
	}

	/* Architecture Section */
	.architecture {
		padding: 8rem 0;
		background: var(--bg-primary);
	}

	.architecture-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: start;
	}

	.agent-tree {
		position: sticky;
		top: 2rem;
	}

	.architecture-details {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.detail-card {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 16px;
		padding: 2rem;
		backdrop-filter: blur(20px);
	}

	.detail-card h3 {
		color: var(--text-primary);
		font-size: 1.25rem;
		font-weight: 700;
		margin: 0 0 1rem;
	}

	.detail-card p {
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
	}

	.detail-card ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.detail-card li {
		color: var(--text-secondary);
		font-size: 0.95rem;
		line-height: 1.4;
	}

	/* Tree Component Overrides */
	:global(.heyfrontdesk-tree) {
		background: var(--bg-glass) !important;
		border: 1px solid var(--border-medium) !important;
		backdrop-filter: blur(20px) !important;
	}

	:global(.heyfrontdesk-tree .folder-title) {
		color: var(--neon-green);
		font-weight: 600;
	}

	.agent-description {
		padding: 0.75rem 0;
		border-left: 2px solid var(--neon-green);
		padding-left: 1rem;
		margin-left: 0.5rem;
	}

	.agent-description strong {
		color: var(--text-primary);
		font-weight: 600;
	}

	/* Results Section Updates */
	.cost-comparison {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.cost-card {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 16px;
		padding: 2.5rem;
		backdrop-filter: blur(20px);
		text-align: center;
		flex: 1;
		max-width: 300px;
	}

	.cost-card h3 {
		color: var(--text-primary);
		font-size: 1.25rem;
		font-weight: 700;
		margin: 0 0 1.5rem;
	}

	.cost-amount {
		font-size: 2.5rem;
		font-weight: 800;
		line-height: 1;
		margin-bottom: 1.5rem;
		color: var(--text-secondary);
	}

	.cost-amount.highlight {
		color: var(--neon-green);
	}

	.cost-amount span {
		font-size: 1rem;
		font-weight: 500;
		color: var(--text-muted);
	}

	.cost-breakdown {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		text-align: left;
	}

	.cost-item {
		color: var(--text-secondary);
		font-size: 0.9rem;
		line-height: 1.4;
	}

	.vs-arrow {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2rem;
		color: var(--neon-green);
		font-weight: 600;
	}

	.results-highlight {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 3rem;
		text-align: center;
	}

	.result-stat {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.result-stat .stat-number {
		color: var(--neon-green);
		font-size: 3rem;
		font-weight: 800;
		line-height: 1;
	}

	.result-stat .stat-label {
		color: var(--text-secondary);
		font-size: 1rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.result-description {
		max-width: 400px;
	}

	.result-description p {
		color: var(--text-secondary);
		font-size: 1.125rem;
		line-height: 1.6;
		margin: 0;
	}

	.subtitle-emphasis {
		color: var(--neon-green);
		font-size: clamp(1.125rem, 3vw, 1.5rem);
		font-weight: 500;
	}

	.launch-status {
		margin-top: 2rem;
	}

	.status-badge {
		display: inline-flex;
		align-items: center;
		padding: 0.75rem 1.5rem;
		background: rgba(0, 255, 136, 0.1);
		border: 1px solid var(--neon-green);
		border-radius: 50px;
		color: var(--neon-green);
		font-weight: 600;
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}


	/* Query Flow Responsive */
	@media (max-width: 768px) {
		.query-flow {
			flex-direction: column;
			gap: 2rem;
			padding: 1.5rem;
		}
		
		.flow-arrow {
			transform: rotate(90deg);
		}
		
		.system-stats {
			flex-direction: column;
			gap: 2rem;
			padding: 1.5rem;
		}
		
		.stat-number {
			font-size: 2rem;
		}
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.hybrid-showcase {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.handoff-arrow {
			transform: rotate(90deg);
		}

		.result-summary {
			gap: 2rem;
		}

		.proof-grid {
			grid-template-columns: 1fr;
		}

		.launch-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.architecture-content {
			grid-template-columns: 1fr;
			gap: 3rem;
		}

		.agent-tree {
			position: static;
		}

		.build-grid {
			grid-template-columns: 1fr;
		}

		.cost-comparison {
			flex-direction: column;
			gap: 1rem;
		}

		.vs-arrow {
			transform: rotate(90deg);
		}

		.results-highlight {
			flex-direction: column;
			gap: 2rem;
		}

		.cta-actions {
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}
	}

	@media (max-width: 430px) {
		.hybrid-card,
		.proof-card,
		.build-card,
		.detail-card,
		.cost-card,
		.investment-tier {
			padding: 1.5rem;
		}

		.summary-stat .stat-number,
		.result-stat .stat-number {
			font-size: 2rem;
		}

		.cost-amount {
			font-size: 2rem;
		}

		.tier-price {
			font-size: 1.5rem;
		}
	}

	/* Agents Summary Section */
	.agents-summary {
		margin-top: 3rem;
	}

	.agents-grid-simple {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.agent-category {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 16px;
		padding: 2rem;
		backdrop-filter: blur(20px);
		text-align: center;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.agent-category:hover {
		border-color: var(--neon-green);
		transform: translateY(-4px);
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
	}

	.category-icon {
		margin: 0 auto 1.5rem;
		width: 60px;
		height: 60px;
		background: rgba(0, 212, 255, 0.1);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.agent-category h3 {
		color: var(--text-primary);
		font-size: 1.25rem;
		font-weight: 700;
		margin: 0 0 1rem;
	}

	.agent-category p {
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
		font-size: 0.95rem;
	}

	/* Agents Live Section */
	.agents-live {
		padding: 4rem 0;
		background: var(--bg-primary);
		border-top: 1px solid var(--border-subtle);
	}

	/* HeyFrontDesk System Architecture */
	.system-architecture {
		margin: 4rem 0;
		text-align: center;
	}

	.architecture-header {
		margin-bottom: 3rem;
	}

	.architecture-header h3 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 1rem;
	}

	.architecture-header p {
		font-size: 1.125rem;
		color: var(--text-secondary);
		max-width: 700px;
		margin: 0 auto;
		line-height: 1.6;
	}

	/* Query Flow */
	.query-flow {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		margin: 3rem 0;
		padding: 2rem;
		background: var(--bg-secondary);
		border-radius: 16px;
		border: 1px solid var(--border-medium);
	}

	.flow-step {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		max-width: 280px;
		text-align: center;
	}

	.step-number {
		width: 40px;
		height: 40px;
		background: var(--neon-green);
		color: var(--bg-primary);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 1.2rem;
	}

	.step-content h4 {
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}

	.step-content p {
		font-size: 0.9rem;
		color: var(--text-secondary);
		line-height: 1.5;
	}

	.flow-arrow {
		font-size: 1.5rem;
		color: var(--neon-green);
		font-weight: bold;
	}

	/* System Stats */
	.system-stats {
		display: flex;
		justify-content: center;
		gap: 3rem;
		margin: 3rem 0;
		padding: 2rem;
		background: linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, transparent 100%);
		border-radius: 16px;
		border: 1px solid rgba(0, 255, 136, 0.2);
	}

	.stat-highlight {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.stat-number {
		font-size: 2.5rem;
		font-weight: 800;
		color: var(--neon-green);
		line-height: 1;
	}

	.stat-label {
		font-size: 0.9rem;
		color: var(--text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		text-align: center;
	}

	:global(.agents-orbit-demo) {
		margin: 2rem auto;
		padding: 2rem;
	}

	/* Bento Grid Customizations */
	:global(.agents-bento) {
		margin-top: 3rem;
	}

	:global(.agents-bento .bento-card) {
		background: var(--bg-secondary);
		border-color: var(--border-medium);
		min-height: 320px;
		position: relative;
		overflow: hidden;
	}

	:global(.agents-bento .bento-card:hover) {
		border-color: var(--neon-green);
	}

	:global(.agents-bento .bento-card-background) {
		position: absolute;
		inset: 0;
		overflow: hidden;
		z-index: 1;
	}

	:global(.agents-bento .bento-card-header) {
		position: relative;
		z-index: 2;
	}

	/* Remove duplicate styles - already defined above */

	/* Report file card styles */
	:global(.agents-bento .report-file-card) {
		position: relative;
		width: 100px;
		height: 120px;
		cursor: pointer;
		overflow: hidden;
		border-radius: 8px;
		border: 1px solid var(--border-subtle);
		background: var(--bg-primary);
		padding: 12px;
		margin: 6px;
		transition: all 300ms ease-out;
		flex-shrink: 0;
	}

	:global(.agents-bento .report-file-card:hover) {
		background: var(--bg-glass);
		border-color: var(--border-medium);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	:global(.agents-bento .report-file-header) {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 6px;
		margin-bottom: 8px;
	}

	:global(.agents-bento .report-file-name) {
		font-size: 11px;
		font-weight: 600;
		color: var(--neon-green);
		font-family: 'Monaco', 'Menlo', monospace;
		line-height: 1.2;
	}

	:global(.agents-bento .report-file-description) {
		margin-top: 8px;
		font-size: 10px;
		color: var(--text-secondary);
		line-height: 1.3;
		margin-bottom: 0;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	/* Component positioning styles */
	:global(.notifications-positioned) {
		position: absolute;
		inset: 80px 20px 20px 20px;
		overflow: hidden;
		border: none;
		transition: all 300ms ease-out;
		mask-image: linear-gradient(to top, transparent 10%, #000 100%);
		-webkit-mask-image: linear-gradient(to top, transparent 10%, #000 100%);
	}

	:global(.bento-card:hover .notifications-positioned) {
		filter: brightness(1.05);
	}

	:global(.integrations-positioned) {
		position: absolute;
		inset: 80px 20px 20px 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		transition: all 300ms ease-out;
	}

	:global(.bento-card:hover .integrations-positioned) {
		filter: brightness(1.05);
	}

	:global(.calendar-positioned) {
		position: absolute;
		bottom: 20px;
		left: 20px;
		right: 20px;
		max-height: 240px;
		overflow: hidden;
		border-radius: 0.5rem;
		transition: all 300ms ease-out;
		mask-image: linear-gradient(to top, transparent 0%, #000 20%, #000 100%);
		-webkit-mask-image: linear-gradient(to top, transparent 0%, #000 20%, #000 100%);
	}

	:global(.bento-card:hover .calendar-positioned) {
		filter: brightness(1.05);
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none !important;
			animation: none !important;
		}
	}
</style>