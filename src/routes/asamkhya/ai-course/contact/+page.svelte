<script lang="ts">
	let contactData = {
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	};
	
	let subjectTypes = [
		'Course Questions',
		'Application Support',
		'Payment & Pricing',
		'Technical Questions',
		'Partnership Inquiry',
		'Media & Press',
		'Other'
	];
	
	let isSubmitting = false;
	let submissionStatus = '';
	
	function handleSubmit(event: Event) {
		event.preventDefault();
		isSubmitting = true;
		
		// Simulate form submission
		setTimeout(() => {
			submissionStatus = 'success';
			isSubmitting = false;
			contactData = { name: '', email: '', phone: '', subject: '', message: '' };
		}, 2000);
	}
</script>

<svelte:head>
	<title>Contact - Asamkhya AI Institute</title>
	<meta name="description" content="Connect with Asamkhya AI Institute. Speak directly with founders about boutique AI education, investment details, and premium learning experience." />
</svelte:head>

<div class="contact-page">
	<div class="contact-container">
		{#if submissionStatus === 'success'}
			<!-- Success State -->
			<div class="success-container">
				<div class="success-icon">✅</div>
				<h1>Message Received!</h1>
				<p class="success-message">
					Welcome to the conversation. Our founders will personally respond within 24 hours to discuss your journey into premium AI education.
				</p>
				<div class="success-actions">
					<button class="new-message-btn" on:click={() => submissionStatus = ''}>
						Send Another Message
					</button>
					<a href="/asamkhya/apply" class="apply-btn">Apply for Excellence</a>
				</div>
			</div>
		{:else}
			<!-- Contact Form -->
			<div class="contact-header">
				<div class="hero-badge">
					<span class="badge-text">Direct Access</span>
				</div>
				<h1>Speak with the Founders</h1>
				<p class="contact-subtitle">Questions about premium AI education? We're here for serious conversations.</p>
			</div>
			
			<div class="contact-content">
				<!-- Contact Information -->
				<div class="contact-info">
					<div class="info-section">
						<h2>Direct Founder Access</h2>
						<p class="info-description">
							Serious about AI education? Our founders personally handle all conversations. No sales team, no middleman—just direct access to the people who built this premium program and know how to get you results.
						</p>
					</div>
					
					<div class="contact-methods">
						<div class="contact-method">
							<div class="method-icon">📞</div>
							<div class="method-content">
								<h3>Founder Calls</h3>
								<p>+91 98765 43210</p>
								<span class="availability">Mon-Sat, 10 AM - 6 PM IST</span>
							</div>
						</div>
						
						<div class="contact-method">
							<div class="method-icon">📧</div>
							<div class="method-content">
								<h3>Direct Email</h3>
								<p>founders@asamkhya.ai</p>
								<span class="availability">Founder response within 24 hours</span>
							</div>
						</div>
						
						<div class="contact-method">
							<div class="method-icon">💬</div>
							<div class="method-content">
								<h3>Premium WhatsApp</h3>
								<p>+91 98765 43210</p>
								<span class="availability">Quick clarifications & updates</span>
							</div>
						</div>
					</div>
					
					<div class="office-info">
						<h3>Premium Studio Location</h3>
						<div class="address">
							<p>
								Asamkhya AI Institute<br>
								Mumbai<br>
								Maharashtra, India
							</p>
						</div>
						<div class="office-note">
							<p><em>Boutique learning environment • Visit by appointment</em></p>
						</div>
					</div>

					<div class="quick-links">
						<h3>Take Action</h3>
						<div class="links-grid">
							<a href="/asamkhya/apply" class="quick-link">
								<div class="link-icon">🚀</div>
								<span>Apply for Excellence</span>
							</a>
							<a href="/asamkhya/about" class="quick-link">
								<div class="link-icon">💎</div>
								<span>See the Difference</span>
							</a>
						</div>
					</div>
				</div>
				
				<!-- Contact Form -->
				<div class="form-section">
					<form on:submit={handleSubmit} class="contact-form">
						<div class="form-header">
							<h2>Send us a Message</h2>
							<p>We'll get back to you quickly</p>
						</div>
						
						<div class="form-grid">
							<div class="form-group">
								<label for="name">Your Name *</label>
								<input type="text" id="name" bind:value={contactData.name} required placeholder="Full name" />
							</div>
							
							<div class="form-group">
								<label for="email">Email Address *</label>
								<input type="email" id="email" bind:value={contactData.email} required placeholder="your@email.com" />
							</div>
							
							<div class="form-group full-width">
								<label for="phone">Phone Number</label>
								<input type="tel" id="phone" bind:value={contactData.phone} placeholder="+91 98765 43210" />
							</div>
							
							<div class="form-group full-width">
								<label for="subject">What's this about? *</label>
								<select id="subject" bind:value={contactData.subject} required>
									<option value="">Choose a topic</option>
									{#each subjectTypes as type}
										<option value={type}>{type}</option>
									{/each}
								</select>
							</div>
							
							<div class="form-group full-width">
								<label for="message">Your Message *</label>
								<textarea 
									id="message" 
									bind:value={contactData.message} 
									required 
									rows="6" 
									placeholder="Tell us what you'd like to know..."
								></textarea>
							</div>
						</div>
						
						<button type="submit" class="submit-btn" disabled={isSubmitting}>
							{#if isSubmitting}
								Sending Message...
							{:else}
								Send Message
							{/if}
						</button>
					</form>
				</div>
			</div>
			
			<!-- FAQ Section -->
			<div class="faq-section">
				<h2>Frequently Asked</h2>
				<div class="faq-grid">
					<div class="faq-item">
						<h3>When is the first batch?</h3>
						<p>The inaugural batch starts October 2025. Future batches run every 2-3 months with maximum 15 serious builders each.</p>
					</div>
					
					<div class="faq-item">
						<h3>Can I visit your premium studio?</h3>
						<p>Absolutely. Schedule a private tour of our Mumbai studio to experience the learning environment and meet our founders before investing.</p>
					</div>
					
					<div class="faq-item">
						<h3>What are the investment options?</h3>
						<p>₹2L total with flexible payment plans available. We discuss options that work for serious builders ready to invest in their transformation.</p>
					</div>
					
					<div class="faq-item">
						<h3>What if I need more time to decide?</h3>
						<p>Take your time. Premium education requires the right mindset and commitment. We'd rather wait for the right candidates than rush the process.</p>
					</div>

					<div class="faq-item">
						<h3>Can founding teams apply together?</h3>
						<p>We encourage co-founder applications. Many breakthrough products emerge from collaborative teams. Both founders must apply and be accepted.</p>
					</div>
					
					<div class="faq-item">
						<h3>What's included after graduation?</h3>
						<p>6 months of exclusive alumni access, monthly founder calls, direct technical support, and lifetime network access to our growing community of builders.</p>
					</div>
				</div>
			</div>

			<!-- Additional Info -->
			<div class="additional-info">
				<div class="info-grid">
					<div class="info-card">
						<div class="card-icon">⚡</div>
						<h3>Founder-Level Response</h3>
						<p>All messages receive founder attention within 24 hours. For urgent discussions, call or WhatsApp us directly for immediate access.</p>
					</div>
					
					<div class="info-card">
						<div class="card-icon">🤝</div>
						<h3>No Middleman</h3>
						<p>You speak directly with Chintan and Tanmay—the founders who built this program and personally guide every transformation.</p>
					</div>
					
					<div class="info-card">
						<div class="card-icon">🎯</div>
						<h3>Brutally Honest</h3>
						<p>We'll tell you if this investment makes sense for your goals. Premium education isn't for everyone—and we respect that.</p>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.contact-page {
		width: 100%;
		min-height: 100vh;
		padding: 4rem 0;
	}

	.contact-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* Contact Header */
	.contact-header {
		text-align: center;
		margin-bottom: 4rem;
		position: relative;
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

	.contact-header h1 {
		font-size: clamp(3rem, 6vw, 4rem);
		color: var(--text-primary);
		margin: 0 0 1.5rem;
		font-weight: 700;
		line-height: 1.1;
		letter-spacing: -0.02em;
	}

	.contact-subtitle {
		font-size: 1.25rem;
		color: var(--text-secondary);
		margin: 0;
		line-height: 1.6;
	}

	/* Contact Content */
	.contact-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		margin-bottom: 6rem;
	}

	/* Contact Info */
	.contact-info {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.info-section h2 {
		color: var(--text-primary);
		font-size: 2rem;
		margin: 0 0 1.5rem;
		font-weight: 700;
		line-height: 1.2;
	}

	.info-description {
		color: var(--text-secondary);
		line-height: 1.6;
		font-size: 1.125rem;
		margin: 0;
	}

	.contact-methods {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.contact-method {
		display: flex;
		align-items: flex-start;
		gap: 1.5rem;
		background: var(--bg-glass);
		padding: 2rem;
		border-radius: 16px;
		border: 1px solid var(--border-medium);
		backdrop-filter: blur(20px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.contact-method:hover {
		border-color: var(--neon-green);
		transform: translateY(-2px);
		box-shadow: var(--shadow-subtle);
	}

	.method-icon {
		font-size: 2rem;
		flex-shrink: 0;
	}

	.method-content h3 {
		color: var(--text-primary);
		margin: 0 0 0.5rem;
		font-size: 1.125rem;
		font-weight: 600;
	}

	.method-content p {
		color: var(--neon-green);
		margin: 0 0 0.5rem;
		font-weight: 600;
		font-size: 1rem;
	}

	.availability {
		color: var(--text-muted);
		font-size: 0.875rem;
	}

	.office-info {
		background: var(--bg-glass);
		padding: 2rem;
		border-radius: 16px;
		border: 1px solid var(--border-medium);
		backdrop-filter: blur(20px);
	}

	.office-info h3 {
		color: var(--neon-green);
		margin: 0 0 1.5rem;
		font-size: 1.25rem;
		font-weight: 600;
	}

	.address p {
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
	}

	.office-note {
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid var(--border-subtle);
	}

	.office-note p {
		color: var(--neon-green);
		margin: 0;
		font-size: 0.875rem;
		font-weight: 500;
	}

	.quick-links h3 {
		color: var(--text-primary);
		margin: 0 0 1.5rem;
		font-size: 1.25rem;
		font-weight: 600;
	}

	.links-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.quick-link {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: var(--bg-glass);
		padding: 1.5rem;
		border-radius: 12px;
		border: 1px solid var(--border-medium);
		backdrop-filter: blur(20px);
		text-decoration: none;
		color: var(--text-secondary);
		font-weight: 500;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.quick-link:hover {
		border-color: var(--neon-green);
		color: var(--neon-green);
		transform: translateY(-2px);
		box-shadow: var(--shadow-subtle);
	}

	.link-icon {
		font-size: 1.5rem;
	}

	/* Form Section */
	.form-section {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 24px;
		padding: 3rem;
		backdrop-filter: blur(20px);
		box-shadow: var(--shadow-medium);
	}

	.form-header {
		text-align: center;
		margin-bottom: 2.5rem;
	}

	.form-header h2 {
		color: var(--text-primary);
		font-size: 1.75rem;
		margin: 0 0 0.5rem;
		font-weight: 700;
		line-height: 1.2;
	}

	.form-header p {
		color: var(--text-secondary);
		margin: 0;
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
		margin-bottom: 0.5rem;
		font-weight: 600;
		font-size: 1rem;
	}

	.form-group input,
	.form-group textarea,
	.form-group select {
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
	.form-group textarea::placeholder,
	.form-group select::placeholder {
		color: var(--text-muted);
	}

	.form-group input:focus,
	.form-group textarea:focus,
	.form-group select:focus {
		outline: none;
		border-color: var(--neon-green);
		box-shadow: var(--shadow-neon);
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
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	.submit-btn:hover:not(:disabled) {
		transform: translateY(-2px);
		box-shadow: var(--shadow-neon), 0 8px 40px rgba(0, 255, 136, 0.4);
	}

	.submit-btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
		transform: none;
	}

	/* Success State */
	.success-container {
		text-align: center;
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 24px;
		padding: 4rem 3rem;
		backdrop-filter: blur(20px);
		box-shadow: var(--shadow-medium);
	}

	.success-icon {
		font-size: 4rem;
		margin-bottom: 2rem;
	}

	.success-container h1 {
		font-size: 2.5rem;
		color: var(--text-primary);
		margin: 0 0 1.5rem;
		font-weight: 700;
		line-height: 1.1;
	}

	.success-message {
		font-size: 1.25rem;
		color: var(--text-secondary);
		line-height: 1.6;
		margin-bottom: 3rem;
		max-width: 500px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 3rem;
	}

	.success-actions {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.new-message-btn,
	.apply-btn {
		padding: 1.25rem 2rem;
		font-size: 1rem;
		font-weight: 600;
		border-radius: 12px;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		text-decoration: none;
		display: inline-flex;
		align-items: center;
	}

	.new-message-btn {
		background: var(--bg-glass);
		color: var(--text-primary);
		border: 1px solid var(--border-medium);
		backdrop-filter: blur(20px);
	}

	.new-message-btn:hover {
		border-color: var(--neon-green);
		color: var(--neon-green);
		transform: translateY(-2px);
		box-shadow: var(--shadow-subtle);
	}

	.apply-btn {
		background: var(--neon-green);
		color: var(--bg-primary);
		border: 1px solid var(--neon-green);
		box-shadow: 0 4px 20px rgba(0, 255, 136, 0.3);
	}

	.apply-btn:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-neon), 0 8px 40px rgba(0, 255, 136, 0.4);
	}

	/* FAQ Section */
	.faq-section {
		background: var(--bg-secondary);
		padding: 4rem 3rem;
		border-radius: 24px;
		margin-bottom: 4rem;
	}

	.faq-section h2 {
		text-align: center;
		color: var(--text-primary);
		font-size: 2.5rem;
		margin: 0 0 3rem;
		font-weight: 700;
		line-height: 1.1;
	}

	.faq-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 2rem;
	}

	.faq-item {
		background: var(--bg-glass);
		padding: 2rem;
		border-radius: 16px;
		border: 1px solid var(--border-medium);
		backdrop-filter: blur(20px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.faq-item:hover {
		border-color: var(--neon-green);
		transform: translateY(-2px);
		box-shadow: var(--shadow-subtle);
	}

	.faq-item h3 {
		color: var(--neon-green);
		margin: 0 0 1rem;
		font-size: 1.125rem;
		font-weight: 600;
		line-height: 1.3;
	}

	.faq-item p {
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
	}

	/* Additional Info */
	.additional-info {
		background: var(--bg-glass);
		padding: 4rem 3rem;
		border-radius: 24px;
		border: 1px solid var(--border-medium);
		backdrop-filter: blur(20px);
	}

	.info-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2.5rem;
	}

	.info-card {
		text-align: center;
		background: var(--bg-glass);
		padding: 2.5rem 2rem;
		border-radius: 20px;
		border: 1px solid var(--border-medium);
		backdrop-filter: blur(20px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.info-card:hover {
		transform: translateY(-4px);
		border-color: var(--neon-green);
		box-shadow: var(--shadow-medium);
	}

	.card-icon {
		font-size: 2.5rem;
		margin-bottom: 1.5rem;
	}

	.info-card h3 {
		color: var(--text-primary);
		margin: 0 0 1rem;
		font-size: 1.25rem;
		font-weight: 600;
	}

	.info-card p {
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.contact-container {
			padding: 0 1.5rem;
		}

		.contact-page {
			padding: 3rem 0;
		}

		.contact-content {
			grid-template-columns: 1fr;
			gap: 3rem;
		}

		.form-grid {
			grid-template-columns: 1fr;
		}

		.links-grid {
			grid-template-columns: 1fr;
		}

		.success-actions {
			flex-direction: column;
			align-items: center;
		}

		.info-grid,
		.faq-grid {
			grid-template-columns: 1fr;
		}

		.faq-section,
		.additional-info {
			padding: 3rem 2rem;
		}

		.form-section {
			padding: 2.5rem;
		}

		.success-container {
			padding: 3rem 2rem;
		}
	}

	@media (max-width: 600px) {
		.contact-container {
			padding: 0 1rem;
		}

		.form-section {
			padding: 2rem 1.5rem;
		}

		.success-container {
			padding: 2.5rem 1.5rem;
		}

		.faq-section,
		.additional-info {
			padding: 2.5rem 1.5rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none !important;
			animation: none !important;
		}
	}
</style>