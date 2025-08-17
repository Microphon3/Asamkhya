<script lang="ts">
	let faqOpen = -1;
	
	function toggleFaq(index: number) {
		faqOpen = faqOpen === index ? -1 : index;
	}
	
	const faqs = [
		{
			question: "How is this different from coding bootcamps?",
			answer: "We're not a bootcamp. We're selective AI education for sharp minds. While bootcamps teach generic coding, we develop AI business acumen, strategic thinking, and practical building skills through intensive, focused learning."
		},
		{
			question: "What if I have zero technical background?",
			answer: "Perfect. We bridge business vision with technical execution through AI-assisted development. Our approach is designed for intelligent individuals who want to understand and build, not just manage."
		},
		{
			question: "Why ₹2,00,000 for 20 hours?",
			answer: "This isn't about hours—it's about transformation and access. You're investing in selective education, founder mentorship, and joining an elite network of builders. Quality over quantity."
		},
		{
			question: "What exactly will I graduate with?",
			answer: "A working product, AI business acumen, strategic thinking skills, and practical coding abilities. Plus lifetime access to our network of serious builders and ongoing founder support."
		},
		{
			question: "How do you select students?",
			answer: "Through rigorous acumen-based assessment. We evaluate potential, critical thinking, and genuine curiosity over credentials. Our process includes application review, problem-solving assessment, and founder interviews."
		},
		{
			question: "Why only in-person in Mumbai?",
			answer: "Intensive learning requires focused environment and peer connections. Our Mumbai studio is designed for maximum impact. The energy and collaboration of serious builders in one space cannot be replicated online."
		}
	];
</script>

<svelte:head>
	<title>Asamkhya - Where AI Meets Reality</title>
	<meta name="description" content="20 Hours. In Person. Acumen-Based Admissions. Where sharp minds build the future together. Selective AI education for elite builders." />
</svelte:head>

<div class="page">
	<!-- Hero Section -->
	<section class="hero">
		<div class="container">
			<div class="hero-content">
				<div class="hero-badge">
					<span class="badge-text">Premium AI Education</span>
				</div>
				
				<h1 class="hero-title">
					<span class="title-primary">Where AI Meets Reality</span>
					<span class="title-secondary">20 Hours. In Person. Acumen-Based Admissions.</span>
				</h1>
				
				<p class="hero-description">
					Where sharp minds build the future together.
				</p>

				<div class="hero-metrics">
					<div class="metric">
						<div class="metric-value">₹2L</div>
						<div class="metric-label">Investment</div>
					</div>
					<div class="metric">
						<div class="metric-value">20hrs</div>
						<div class="metric-label">In Person</div>
					</div>
					<div class="metric">
						<div class="metric-value">15max</div>
						<div class="metric-label">First Cohort</div>
					</div>
				</div>

				<div class="hero-actions">
					<a href="/asamkhya/apply" class="cta-primary">
						<span>Apply Now</span>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M8 0L8 14M8 14L14 8M8 14L2 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</a>
					<a href="/asamkhya/contact" class="cta-secondary">
						Questions? Let's Talk
					</a>
				</div>
				
				<div class="hero-note">
					<span>First batch starts October 2025 • Mumbai</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Course Breakdown Section -->
	<section class="course-breakdown">
		<div class="container">
			<div class="section-header">
				<h2>Complete AI Builder Program</h2>
				<p>20 Hours. 3 Core Modules. Real-World Application.</p>
			</div>

			<div class="modules-grid">
				<div class="module-card">
					<div class="module-header">
						<div class="module-number">01</div>
						<h3>Foundations and Business Application</h3>
					</div>
					<p class="module-description">AI that drives real business results</p>
					<ul class="module-list">
						<li>Business AI implementation</li>
						<li>ROI analysis and cost-benefit</li>
						<li>Industry-specific AI tools</li>
						<li>Scaling AI solutions</li>
						<li>Practical applications that work</li>
					</ul>
				</div>

				<div class="module-card">
					<div class="module-header">
						<div class="module-number">02</div>
						<h3>Critical Thinking & AI</h3>
					</div>
					<p class="module-description">Navigate the AI landscape with intelligence</p>
					<ul class="module-list">
						<li>AI reality vs hype</li>
						<li>Strategic thinking for AI adoption</li>
						<li>Future-proofing your skillset</li>
						<li>Decision-making in the AI era</li>
						<li>Understanding what actually works</li>
					</ul>
				</div>

				<div class="module-card">
					<div class="module-header">
						<div class="module-number">03</div>
						<h3>Vibe Coding Product Development</h3>
					</div>
					<p class="module-description">From concept to live product with AI as your partner</p>
					<ul class="module-list">
						<li>AI-assisted development techniques</li>
						<li>Modern tools and workflows</li>
						<li>Product design and user experience</li>
						<li>Rapid prototyping methods</li>
						<li>Deployment and launch strategies</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Product Showcase Section -->
	<section class="product-showcase">
		<div class="container">
			<div class="showcase-header">
				<h2>What You'll Actually Build</h2>
				<p>Real products our graduates create and launch</p>
			</div>

			<div class="products-grid">
				<!-- Row 1 - Business Automation Tools -->
				<div class="product-card">
					<div class="product-badge business">Build in Week 3-4</div>
					<h3>Smart Customer Management System</h3>
					<p>Track leads, automate follow-ups, close more deals</p>
				</div>

				<div class="product-card">
					<div class="product-badge business">Build in Week 3-4</div>
					<h3>AI-Powered Booking Platform</h3>
					<p>Let customers book services 24/7 with intelligent scheduling</p>
				</div>

				<div class="product-card">
					<div class="product-badge business">Build in Week 4</div>
					<h3>Internal Workflow Dashboard</h3>
					<p>Streamline team operations with custom automation</p>
				</div>

				<!-- Row 2 - Revenue-Generating Platforms -->
				<div class="product-card">
					<div class="product-badge advanced">Advanced Project</div>
					<h3>Industry-Specific SaaS Tool</h3>
					<p>Solve problems in your field, charge monthly subscriptions</p>
				</div>

				<div class="product-card">
					<div class="product-badge business">Build in Week 2-3</div>
					<h3>Professional Services Website</h3>
					<p>Consulting site with automated client onboarding</p>
				</div>

				<div class="product-card">
					<div class="product-badge business">Build in Week 3-4</div>
					<h3>Course Delivery Platform</h3>
					<p>Sell your expertise with built-in payment processing</p>
				</div>

				<!-- Row 3 - AI-Enhanced Applications -->
				<div class="product-card">
					<div class="product-badge ai">AI Integration</div>
					<h3>Smart Document Processor</h3>
					<p>Upload invoices, get instant data extraction and insights</p>
				</div>

				<div class="product-card">
					<div class="product-badge ai">AI Integration</div>
					<h3>Customer Service Chatbot</h3>
					<p>Handle 80% of customer queries automatically</p>
				</div>

				<div class="product-card">
					<div class="product-badge advanced">Advanced Project</div>
					<h3>Data Analysis Dashboard</h3>
					<p>Turn your business data into actionable insights</p>
				</div>

				<!-- Row 4 - E-commerce & Marketplace -->
				<div class="product-card">
					<div class="product-badge business">Build in Week 3-4</div>
					<h3>Niche E-commerce Store</h3>
					<p>Sell products with inventory management and payment processing</p>
				</div>

				<div class="product-card">
					<div class="product-badge advanced">Advanced Project</div>
					<h3>Service Marketplace</h3>
					<p>Connect service providers with customers in your industry</p>
				</div>

				<div class="product-card">
					<div class="product-badge advanced">Advanced Project</div>
					<h3>Subscription Platform</h3>
					<p>Launch recurring revenue products with automated billing</p>
				</div>
			</div>

			<div class="showcase-footer">
				<div class="footer-content">
					<p class="footer-highlight">Choose your product idea during the application process</p>
					<p class="footer-note">Your cohort project becomes your first business tool</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Founders Section -->
	<section class="founders">
		<div class="container">
			<div class="section-header">
				<h2>The Teacher & The Student</h2>
			</div>
			
			<div class="founders-grid">
				<div class="founder-card">
					<div class="founder-image">
						<div class="image-placeholder">
							<div class="placeholder-initials">CT</div>
						</div>
						<div class="founder-badge">The Teacher</div>
					</div>
					<div class="founder-info">
						<h3>Chintan Thakkar</h3>
						<p class="founder-title">One of the most practical hands-on AI minds in this country</p>
						<p class="founder-bio">
							Always ahead of the curve. Chintan has spent two decades engrossed in learning and developing AI technologies. Zero fluff approach - deep technical mastery focused on what actually works.
						</p>
					</div>
				</div>

				<div class="founder-card">
					<div class="founder-image">
						<div class="image-placeholder">
							<div class="placeholder-initials">TB</div>
						</div>
						<div class="founder-badge">The Student</div>
					</div>
					<div class="founder-info">
						<h3>Tanmay Bahulekar</h3>
						<p class="founder-title">Operations Mind Turned Builder</p>
						<p class="founder-bio">
							College dropout focused on operations and business strategy. Learned to vibe code under Chintan's guidance, turning ideas into tech products that work.
						</p>
					</div>
				</div>
			</div>
			
			<div class="founders-promise">
				<div class="promise-content">
					<h3>Why This Combination Works</h3>
					<p>Chintan brings 20 years of focused learning and technical depth. Tanmay brings the recent experience of making the journey from business thinking to technical building.</p>
					<br>
					<p>When a dedicated technologist shares two decades of learning with someone who just crossed from business to building, you get teaching that works for people like you.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Outcomes Section -->
	<section class="promise">
		<div class="container">
			<div class="promise-content">
				<h2>Graduate with</h2>
				<div class="promise-grid">
					<div class="promise-item">
						<div class="promise-icon">🚀</div>
						<h3>A Working Product</h3>
						<p>A complete, deployed application that solves real problems and can generate revenue from day one.</p>
					</div>
					<div class="promise-item">
						<div class="promise-icon">🧠</div>
						<h3>AI Business Acumen</h3>
						<p>Deep understanding of how AI drives business value and strategic decision-making in real-world scenarios.</p>
					</div>
					<div class="promise-item">
						<div class="promise-icon">💡</div>
						<h3>Strategic Thinking</h3>
						<p>Critical analysis skills to navigate AI hype, assess opportunities, and make intelligent technology decisions.</p>
					</div>
					<div class="promise-item">
						<div class="promise-icon">⚡</div>
						<h3>Practical Coding Skills</h3>
						<p>Hands-on development abilities with AI-assisted tools and modern frameworks for rapid product building.</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Admissions Section -->
	<section class="course-details">
		<div class="container">
			<div class="details-header">
				<h2>Selective Admission Process</h2>
				<p>We seek individuals with the intellectual curiosity and drive to excel</p>
			</div>
			
			<div class="details-grid">
				<div class="detail-card">
					<div class="card-header">
						<div class="card-icon">🧠</div>
						<h3>Acumen-Based Selection</h3>
					</div>
					<div class="card-content">
						<div class="detail-value">Merit Over Background</div>
						<p>We evaluate potential, not pedigree. Sharp thinking, genuine curiosity, and willingness to challenge assumptions matter more than degrees.</p>
					</div>
				</div>

				<div class="detail-card">
					<div class="card-header">
						<div class="card-icon">🎯</div>
						<h3>Rigorous Assessment</h3>
					</div>
					<div class="card-content">
						<div class="detail-value">Multi-Stage Process</div>
						<p>Application review, problem-solving assessment, and founder interviews ensure we select candidates who thrive in intensive learning.</p>
					</div>
				</div>

				<div class="detail-card">
					<div class="card-header">
						<div class="card-icon">👥</div>
						<h3>Elite Cohort Size</h3>
					</div>
					<div class="card-content">
						<div class="detail-value">Maximum 15 Students</div>
						<p>Small cohorts enable personalized attention and foster deep connections between serious builders who push each other to excel.</p>
					</div>
				</div>

				<div class="detail-card featured">
					<div class="card-header">
						<div class="card-icon">💎</div>
						<h3>Investment</h3>
					</div>
					<div class="card-content">
						<div class="detail-value">₹2,00,000</div>
						<p>Fee for all students accepted in the first cohort</p>
						<div class="investment-note">Includes: All materials, mentorship, workspace access, and ongoing support</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="faq">
		<div class="container">
			<div class="faq-header">
				<h2>Everything you need to know</h2>
				<p>Straight answers to important questions</p>
			</div>
			
			<div class="faq-list">
				{#each faqs as faq, index}
					<div class="faq-item" class:open={faqOpen === index}>
						<button class="faq-question" on:click={() => toggleFaq(index)}>
							<span>{faq.question}</span>
							<div class="faq-toggle" class:rotated={faqOpen === index}>
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path d="M5 8L10 13L15 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
						</button>
						{#if faqOpen === index}
							<div class="faq-answer">
								<p>{faq.answer}</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Final CTA -->
	<section class="final-cta">
		<div class="container">
			<div class="cta-content">
				<h2>Ready to build the future?</h2>
				<p>Join the first batch of builders who refuse to settle for confusion and mediocrity.</p>
				<div class="cta-actions">
					<a href="/asamkhya/apply" class="cta-primary large">
						<span>Apply Now</span>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M8 0L8 14M8 14L14 8M8 14L2 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</a>
				</div>
				<div class="cta-urgency">
					<span>First batch starts October 2025 • 15 seats only</span>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.page {
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

	.hero-metrics {
		display: flex;
		justify-content: center;
		gap: 3rem;
		margin-bottom: 3rem;
		flex-wrap: wrap;
	}

	.metric {
		text-align: center;
	}

	.metric-value {
		display: block;
		font-size: 2rem;
		font-weight: 700;
		color: var(--neon-green);
		line-height: 1;
		margin-bottom: 0.5rem;
	}

	.metric-label {
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
		margin-bottom: 2rem;
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

	.hero-note {
		color: var(--text-muted);
		font-size: 0.9375rem;
	}

	/* Course Breakdown Section */
	.course-breakdown {
		padding: 8rem 0;
	}

	.modules-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2.5rem;
		max-width: 1400px;
		margin: 0 auto;
	}

	.module-card {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 20px;
		padding: 3rem;
		backdrop-filter: blur(20px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		position: relative;
	}

	.module-card:hover {
		transform: translateY(-4px);
		border-color: var(--neon-green);
		box-shadow: var(--shadow-medium);
	}

	.module-header {
		margin-bottom: 1.5rem;
	}

	.module-number {
		display: inline-block;
		width: 3rem;
		height: 3rem;
		background: linear-gradient(135deg, var(--neon-green), var(--neon-green-dark));
		border-radius: 12px;
		color: var(--bg-primary);
		font-size: 1.25rem;
		font-weight: 700;
		text-align: center;
		line-height: 3rem;
		margin-bottom: 1rem;
	}

	.module-header h3 {
		color: var(--text-primary);
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0;
		line-height: 1.3;
	}

	.module-description {
		color: var(--neon-green);
		font-weight: 500;
		margin: 0 0 1.5rem;
		font-size: 1rem;
	}

	.module-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.module-list li {
		color: var(--text-secondary);
		padding: 0.5rem 0;
		position: relative;
		padding-left: 1.5rem;
	}

	.module-list li:before {
		content: '→';
		color: var(--neon-green);
		font-weight: bold;
		position: absolute;
		left: 0;
	}

	/* Product Showcase Section */
	.product-showcase {
		padding: 8rem 0;
		background: var(--bg-primary);
	}

	.showcase-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.showcase-header h2 {
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 1rem;
		line-height: 1.1;
	}

	.showcase-header p {
		font-size: 1.125rem;
		color: var(--text-secondary);
		margin: 0;
	}

	.products-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
		max-width: 1400px;
		margin: 0 auto 4rem;
	}

	.product-card {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 20px;
		padding: 2.5rem;
		backdrop-filter: blur(20px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		position: relative;
		overflow: hidden;
	}

	.product-card:hover {
		transform: translateY(-4px);
		border-color: var(--neon-green);
		box-shadow: var(--shadow-medium);
	}

	.product-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(90deg, var(--neon-green), var(--neon-green-dark));
		opacity: 0;
		transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.product-card:hover::before {
		opacity: 1;
	}

	.product-badge {
		display: inline-block;
		padding: 0.375rem 1rem;
		border-radius: 50px;
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 1.5rem;
		border: 1px solid;
	}

	.product-badge.business {
		background: rgba(0, 255, 136, 0.1);
		color: var(--neon-green);
		border-color: var(--neon-green);
	}

	.product-badge.ai {
		background: rgba(147, 51, 234, 0.1);
		color: #a855f7;
		border-color: #a855f7;
	}

	.product-badge.advanced {
		background: rgba(239, 68, 68, 0.1);
		color: #ef4444;
		border-color: #ef4444;
	}

	.product-card h3 {
		color: var(--text-primary);
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0 0 1rem;
		line-height: 1.3;
	}

	.product-card p {
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
		font-size: 1rem;
	}

	.showcase-footer {
		text-align: center;
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 20px;
		padding: 2.5rem;
		backdrop-filter: blur(20px);
		max-width: 800px;
		margin: 0 auto;
	}

	.footer-content {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.footer-highlight {
		color: var(--neon-green);
		font-size: 1.125rem;
		font-weight: 600;
		margin: 0;
		line-height: 1.4;
	}

	.footer-note {
		color: var(--text-secondary);
		font-size: 1rem;
		margin: 0;
		line-height: 1.5;
	}

	/* Founders Section */
	.founders {
		padding: 8rem 0;
		background: var(--bg-secondary);
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

	.founders-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 3rem;
		margin-bottom: 4rem;
	}

	.founder-card {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 24px;
		padding: 2.5rem;
		backdrop-filter: blur(20px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.founder-card:hover {
		transform: translateY(-4px);
		border-color: var(--neon-green);
		box-shadow: var(--shadow-medium), var(--shadow-neon);
	}

	.founder-image {
		position: relative;
		margin-bottom: 2rem;
		text-align: center;
	}

	.image-placeholder {
		width: 120px;
		height: 120px;
		background: linear-gradient(135deg, var(--neon-green), var(--neon-green-dark));
		border-radius: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1rem;
		position: relative;
		overflow: hidden;
	}

	.placeholder-initials {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--bg-primary);
	}

	.founder-badge {
		display: inline-block;
		background: var(--bg-tertiary);
		border: 1px solid var(--border-medium);
		padding: 0.375rem 1rem;
		border-radius: 50px;
		color: var(--neon-green);
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.founder-info h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 0.5rem;
	}

	.founder-title {
		color: var(--neon-green);
		font-size: 1rem;
		font-weight: 600;
		margin: 0 0 1.5rem;
	}

	.founder-bio {
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
	}

	.founders-promise {
		text-align: center;
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 20px;
		padding: 3rem 2rem;
		backdrop-filter: blur(20px);
	}

	.promise-content h3 {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0 0 1rem;
		line-height: 1.3;
	}

	.promise-content p {
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	/* Promise Section */
	.promise {
		padding: 8rem 0;
	}

	.promise-content h2 {
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 700;
		color: var(--text-primary);
		text-align: center;
		margin: 0 0 4rem;
		line-height: 1.2;
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 4rem;
	}

	.promise-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2.5rem;
	}

	.promise-item {
		text-align: center;
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 20px;
		padding: 2.5rem 2rem;
		backdrop-filter: blur(20px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.promise-item:hover {
		transform: translateY(-4px);
		border-color: var(--neon-green);
		box-shadow: var(--shadow-medium);
	}

	.promise-icon {
		font-size: 3rem;
		margin-bottom: 1.5rem;
	}

	.promise-item h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0 0 1rem;
	}

	.promise-item p {
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
	}

	/* Course Details */
	.course-details {
		padding: 8rem 0;
		background: var(--bg-secondary);
	}

	.details-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.details-header h2 {
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 1rem;
	}

	.details-header p {
		font-size: 1.125rem;
		color: var(--text-secondary);
		margin: 0;
	}

	.details-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
	}

	.detail-card {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 20px;
		padding: 2rem;
		backdrop-filter: blur(20px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.detail-card:hover {
		transform: translateY(-4px);
		border-color: var(--neon-green);
		box-shadow: var(--shadow-medium);
	}

	.detail-card.featured {
		border-color: var(--neon-green);
		background: rgba(0, 255, 136, 0.05);
	}

	.card-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.card-icon {
		font-size: 1.5rem;
	}

	.card-header h3 {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0;
	}

	.detail-value {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--neon-green);
		margin-bottom: 1rem;
	}

	.card-content p {
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
	}

	.investment-note {
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid var(--border-subtle);
		color: var(--text-muted);
		font-size: 0.875rem;
		font-style: italic;
	}

	/* FAQ Section */
	.faq {
		padding: 8rem 0;
	}

	.faq-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.faq-header h2 {
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 1rem;
	}

	.faq-header p {
		font-size: 1.125rem;
		color: var(--text-secondary);
		margin: 0;
	}

	.faq-list {
		max-width: 800px;
		margin: 0 auto;
	}

	.faq-item {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 16px;
		margin-bottom: 1rem;
		backdrop-filter: blur(20px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.faq-item:hover,
	.faq-item.open {
		border-color: var(--neon-green);
		box-shadow: var(--shadow-subtle);
	}

	.faq-question {
		width: 100%;
		padding: 1.5rem 2rem;
		background: none;
		border: none;
		color: var(--text-primary);
		font-size: 1.125rem;
		font-weight: 600;
		text-align: left;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.faq-toggle {
		color: var(--neon-green);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.faq-toggle.rotated {
		transform: rotate(180deg);
	}

	.faq-answer {
		padding: 0 2rem 1.5rem;
		color: var(--text-secondary);
		line-height: 1.6;
		border-top: 1px solid var(--border-subtle);
	}

	.faq-answer p {
		margin: 1rem 0 0;
	}

	/* Final CTA */
	.final-cta {
		padding: 8rem 0;
		background: var(--bg-secondary);
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

	.cta-urgency {
		color: var(--text-muted);
		font-size: 0.9375rem;
	}

	/* Responsive Design */
	@media (max-width: 1024px) {
		.products-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.container {
			padding: 0 1.5rem;
		}

		.hero {
			padding: 6rem 0 4rem;
		}

		.hero-metrics {
			gap: 2rem;
		}

		.hero-actions {
			flex-direction: column;
			align-items: center;
		}

		.founders-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.founder-card {
			padding: 2rem;
		}

		.modules-grid,
		.promise-grid,
		.details-grid,
		.products-grid {
			grid-template-columns: 1fr;
		}

		.module-card,
		.product-card {
			padding: 2rem;
		}

		.course-breakdown,
		.product-showcase,
		.founders,
		.promise,
		.course-details,
		.faq,
		.final-cta {
			padding: 6rem 0;
		}

		.faq-question {
			padding: 1.25rem 1.5rem;
			font-size: 1rem;
		}

		.faq-answer {
			padding: 0 1.5rem 1.25rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none !important;
			animation: none !important;
		}
	}
</style>