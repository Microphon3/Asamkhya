<script lang="ts">
	import { TextReveal } from '$lib/components/magicui';
</script>

<svelte:head>
	<title>Programs - Asamkhya AI Institute</title>
	<meta name="description" content="Discover our rigorous AI education programs designed for exceptional professionals seeking mastery in artificial intelligence." />
</svelte:head>

<div class="programs-page">
	<div class="hero-section">
		<div class="container">
			<h1>AI Mastery Programs</h1>
			<p class="hero-subtitle">Rigorous education pathways for the exceptional few</p>
		</div>
	</div>

	<div class="container">
		<!-- Flagship Program -->
		<section class="flagship-program">
			<div class="program-header">
				<div class="prestige-badge">Flagship Program</div>
				<h2>AI Leadership Intensive</h2>
				<p class="program-tagline">6-Month Transformation for Senior Professionals</p>
			</div>

			<div class="program-grid">
				<div class="program-overview">
					<h3>Program Overview</h3>
					<p>Our flagship program transforms senior professionals and technical leaders into AI visionaries. Through rigorous coursework, hands-on projects, and executive mentorship, participants develop the strategic and technical expertise to lead AI initiatives at the highest level.</p>
					
					<div class="program-highlights">
						<div class="highlight">
							<span class="highlight-number">15</span>
							<span class="highlight-text">Maximum Cohort Size</span>
						</div>
						<div class="highlight">
							<span class="highlight-number">92%</span>
							<span class="highlight-text">Leadership Advancement</span>
						</div>
						<div class="highlight">
							<span class="highlight-number">6</span>
							<span class="highlight-text">Month Duration</span>
						</div>
					</div>
				</div>

				<div class="curriculum-details">
					<h3>Curriculum Excellence</h3>
					<div class="curriculum-modules">
						<div class="module">
							<h4>Strategic AI Leadership</h4>
							<ul>
								<li>AI Strategy & Business Transformation</li>
								<li>Ethical AI Governance</li>
								<li>Team Leadership & Change Management</li>
							</ul>
						</div>
						<div class="module">
							<h4>Technical Mastery</h4>
							<ul>
								<li>Advanced Machine Learning Systems</li>
								<li>Production AI Architecture</li>
								<li>MLOps & Scalable Deployment</li>
							</ul>
						</div>
						<div class="module">
							<h4>Executive Capstone</h4>
							<ul>
								<li>Real Client Implementation</li>
								<li>Board-Level Presentation</li>
								<li>Industry Mentor Guidance</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Specialized Programs -->
		<section class="specialized-programs">
			<div class="section-header">
				<h2>Specialized Tracks</h2>
				<p class="section-subtitle">Targeted expertise for specific domains</p>
			</div>

			<div class="programs-grid">
				<div class="program-card">
					<div class="card-header">
						<h3>Technical Professionals</h3>
						<span class="program-duration">4 Months</span>
					</div>
					<div class="card-content">
						<p>For senior engineers and architects seeking deep technical AI expertise</p>
						<ul class="program-features">
							<li>Advanced Deep Learning</li>
							<li>Computer Vision & NLP</li>
							<li>Research Methodology</li>
							<li>Open Source Contributions</li>
						</ul>
						<div class="program-commitment">
							<strong>Commitment:</strong> 20 hours/week + weekend intensives
						</div>
					</div>
				</div>

				<div class="program-card">
					<div class="card-header">
						<h3>Business Leaders</h3>
						<span class="program-duration">3 Months</span>
					</div>
					<div class="card-content">
						<p>For executives driving AI transformation across organizations</p>
						<ul class="program-features">
							<li>AI Business Strategy</li>
							<li>Data-Driven Decision Making</li>
							<li>Vendor & Technology Evaluation</li>
							<li>Organizational Change</li>
						</ul>
						<div class="program-commitment">
							<strong>Commitment:</strong> 12 hours/week + executive retreats
						</div>
					</div>
				</div>

				<div class="program-card">
					<div class="card-header">
						<h3>Entrepreneurs</h3>
						<span class="program-duration">5 Months</span>
					</div>
					<div class="card-content">
						<p>For founders building AI-native companies and products</p>
						<ul class="program-features">
							<li>AI Product Development</li>
							<li>Investor Pitch Mastery</li>
							<li>Technical Team Building</li>
							<li>Market Strategy</li>
						</ul>
						<div class="program-commitment">
							<strong>Commitment:</strong> 25 hours/week + investor presentations
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Program Experience -->
		<section class="program-experience">
			<div class="experience-content">
				<h2>The Asamkhya Experience</h2>
				<div class="experience-grid">
					<div class="experience-item">
						<div class="experience-icon">🎯</div>
						<h3>Selective Admission</h3>
						<p>Comprehensive assessment process ensuring only the most committed candidates join our exclusive cohorts</p>
					</div>
					<div class="experience-item">
						<div class="experience-icon">👨‍🏫</div>
						<h3>World-Class Faculty</h3>
						<p>Learn from industry leaders, renowned researchers, and successful AI entrepreneurs</p>
					</div>
					<div class="experience-item">
						<div class="experience-icon">🤝</div>
						<h3>Peer Network</h3>
						<p>Connect with exceptional professionals who become lifelong collaborators and advisors</p>
					</div>
					<div class="experience-item">
						<div class="experience-icon">🚀</div>
						<h3>Career Impact</h3>
						<p>Guaranteed career advancement or we provide continued mentorship until you achieve your goals</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Application CTA -->
		<section class="application-cta">
			<div class="cta-content">
				<TextReveal text="Ready to Transform Your Career?" />
				<p>Join the ranks of AI leaders who chose excellence over convenience</p>
				<a href="/asamkhya/assessment" class="cta-button">Begin Assessment Process</a>
				<p class="cta-note">Applications reviewed on a rolling basis. Early application recommended.</p>
			</div>
		</section>
	</div>
</div>

<style>
	/* Color Palette */
	:local(:root) {
		--navy-primary: #1e2a4a;
		--navy-deep: #0f1528;
		--gold-primary: #D4AF37;
		--gold-light: #F4E98C;
		--cream: #FFF8E7;
		--gray-light: #F5F7FA;
		--gray-medium: #8B95A5;
		--white: #FFFFFF;
	}

	.programs-page {
		width: 100%;
		background: var(--navy-deep);
		color: var(--white);
		font-family: 'Georgia', serif;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* Hero Section */
	.hero-section {
		background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy-primary) 100%);
		padding: 6rem 0 4rem;
		text-align: center;
		position: relative;
	}

	.hero-section::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		width: 40%;
		height: 100%;
		background: radial-gradient(circle at center, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
	}

	.hero-section h1 {
		font-size: clamp(3rem, 6vw, 4.5rem);
		color: var(--gold-primary);
		margin: 0 0 1.5rem;
		font-weight: 400;
		letter-spacing: -0.02em;
	}

	.hero-subtitle {
		font-size: 1.3rem;
		color: var(--gray-medium);
		margin: 0;
		font-style: italic;
	}

	/* Flagship Program */
	.flagship-program {
		padding: 6rem 0;
		border-bottom: 1px solid rgba(212, 175, 55, 0.2);
	}

	.program-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.prestige-badge {
		background: linear-gradient(135deg, var(--gold-primary) 0%, #B8941F 100%);
		color: var(--navy-deep);
		padding: 0.5rem 1.5rem;
		border-radius: 25px;
		font-size: 0.9rem;
		font-weight: 600;
		display: inline-block;
		margin-bottom: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.program-header h2 {
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		color: var(--gold-primary);
		margin: 0 0 1rem;
		font-weight: 400;
	}

	.program-tagline {
		font-size: 1.2rem;
		color: var(--gray-medium);
		margin: 0;
		font-style: italic;
	}

	.program-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: start;
	}

	.program-overview h3,
	.curriculum-details h3 {
		color: var(--gold-primary);
		font-size: 2rem;
		margin: 0 0 1.5rem;
	}

	.program-overview p {
		color: var(--gray-light);
		line-height: 1.7;
		margin-bottom: 3rem;
		font-size: 1.1rem;
	}

	.program-highlights {
		display: flex;
		justify-content: space-between;
		gap: 2rem;
	}

	.highlight {
		text-align: center;
		background: rgba(212, 175, 55, 0.1);
		padding: 2rem 1rem;
		border-radius: 12px;
		border: 1px solid rgba(212, 175, 55, 0.3);
		flex: 1;
	}

	.highlight-number {
		display: block;
		font-size: 3rem;
		color: var(--gold-primary);
		font-weight: 300;
		line-height: 1;
	}

	.highlight-text {
		display: block;
		color: var(--gray-medium);
		font-size: 0.9rem;
		margin-top: 0.5rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.curriculum-modules {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.module {
		background: rgba(255, 255, 255, 0.02);
		padding: 2rem;
		border-radius: 12px;
		border: 1px solid rgba(212, 175, 55, 0.2);
	}

	.module h4 {
		color: var(--gold-primary);
		margin: 0 0 1rem;
		font-size: 1.3rem;
	}

	.module ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.module li {
		padding: 0.5rem 0;
		color: var(--gray-light);
		position: relative;
		padding-left: 1.5rem;
	}

	.module li::before {
		content: '→';
		color: var(--gold-primary);
		position: absolute;
		left: 0;
	}

	/* Specialized Programs */
	.specialized-programs {
		padding: 6rem 0;
	}

	.section-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.section-header h2 {
		font-size: clamp(2.2rem, 4vw, 3rem);
		color: var(--gold-primary);
		margin: 0 0 1rem;
		font-weight: 400;
	}

	.section-subtitle {
		font-size: 1.1rem;
		color: var(--gray-medium);
		margin: 0;
		font-style: italic;
	}

	.programs-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2.5rem;
	}

	.program-card {
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(212, 175, 55, 0.2);
		border-radius: 16px;
		padding: 2.5rem;
		transition: all 0.3s ease;
	}

	.program-card:hover {
		transform: translateY(-5px);
		border-color: rgba(212, 175, 55, 0.4);
		background: rgba(255, 255, 255, 0.05);
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.5rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid rgba(212, 175, 55, 0.2);
	}

	.card-header h3 {
		color: var(--gold-primary);
		margin: 0;
		font-size: 1.5rem;
	}

	.program-duration {
		background: rgba(212, 175, 55, 0.2);
		color: var(--gold-light);
		padding: 0.3rem 0.8rem;
		border-radius: 15px;
		font-size: 0.8rem;
		font-weight: 600;
	}

	.card-content p {
		color: var(--gray-light);
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}

	.program-features {
		list-style: none;
		padding: 0;
		margin: 0 0 2rem;
	}

	.program-features li {
		padding: 0.5rem 0;
		color: var(--gray-medium);
		position: relative;
		padding-left: 1.5rem;
	}

	.program-features li::before {
		content: '✓';
		color: var(--gold-primary);
		position: absolute;
		left: 0;
		font-weight: bold;
	}

	.program-commitment {
		background: rgba(212, 175, 55, 0.1);
		padding: 1rem;
		border-radius: 8px;
		color: var(--gold-light);
		font-size: 0.9rem;
		border-left: 3px solid var(--gold-primary);
	}

	/* Program Experience */
	.program-experience {
		padding: 6rem 0;
		background: var(--navy-primary);
		margin: 0 -2rem;
	}

	.experience-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.experience-content h2 {
		text-align: center;
		font-size: clamp(2.2rem, 4vw, 3rem);
		color: var(--gold-primary);
		margin: 0 0 4rem;
		font-weight: 400;
	}

	.experience-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 3rem;
	}

	.experience-item {
		text-align: center;
		background: rgba(255, 255, 255, 0.02);
		padding: 2.5rem;
		border-radius: 16px;
		border: 1px solid rgba(212, 175, 55, 0.2);
		transition: all 0.3s ease;
	}

	.experience-item:hover {
		transform: translateY(-5px);
		background: rgba(255, 255, 255, 0.05);
	}

	.experience-icon {
		font-size: 3rem;
		margin-bottom: 1.5rem;
		filter: sepia(100%) hue-rotate(35deg) saturate(200%);
	}

	.experience-item h3 {
		color: var(--gold-primary);
		margin: 0 0 1rem;
		font-size: 1.4rem;
	}

	.experience-item p {
		color: var(--gray-light);
		line-height: 1.6;
		margin: 0;
	}

	/* Application CTA */
	.application-cta {
		padding: 6rem 0;
		text-align: center;
	}

	.cta-content h2 {
		font-size: clamp(2.2rem, 4vw, 3rem);
		color: var(--gold-primary);
		margin: 0 0 1.5rem;
		font-weight: 400;
	}

	.cta-content > p {
		font-size: 1.2rem;
		color: var(--gray-medium);
		margin: 0 0 3rem;
		font-style: italic;
	}

	.cta-button {
		background: linear-gradient(135deg, var(--gold-primary) 0%, #B8941F 100%);
		color: var(--navy-deep);
		text-decoration: none;
		padding: 1.2rem 2.5rem;
		font-size: 1.1rem;
		font-weight: 600;
		border-radius: 8px;
		transition: all 0.3s ease;
		box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
		display: inline-block;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
	}

	.cta-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(212, 175, 55, 0.5);
	}

	.cta-note {
		margin-top: 1.5rem;
		color: var(--gray-medium);
		font-size: 0.9rem;
		font-style: italic;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.program-grid {
			grid-template-columns: 1fr;
			gap: 3rem;
		}

		.program-highlights {
			flex-direction: column;
			gap: 1.5rem;
		}

		.programs-grid {
			grid-template-columns: 1fr;
		}

		.experience-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.program-card,
		.experience-item,
		.cta-button {
			transition: none;
		}

		.program-card:hover,
		.experience-item:hover,
		.cta-button:hover {
			transform: none;
		}
	}
</style>