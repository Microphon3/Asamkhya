<script lang="ts">
	let contactData = {
		name: '',
		email: '',
		phone: '',
		projectType: '',
		budget: '',
		timeline: '',
		message: ''
	};
	
	let projectTypes = [
		'Restaurant & Food Service',
		'E-commerce Store',
		'SaaS Product',
		'Professional Services',
		'Creative Portfolio',
		'Local Business',
		'Custom Solution'
	];
	
	let budgetRanges = [
		'₹50k - ₹1L',
		'₹1L - ₹2L',
		'₹2L - ₹5L',
		'₹5L+'
	];
	
	let timelineOptions = [
		'1-2 weeks',
		'2-4 weeks',
		'1-2 months',
		'Flexible'
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
			contactData = { 
				name: '', 
				email: '', 
				phone: '', 
				projectType: '', 
				budget: '', 
				timeline: '', 
				message: '' 
			};
		}, 2000);
	}
	
	function openWhatsApp() {
		const message = "Hi! I'm interested in discussing an AI-powered website project with Asamkhya.";
		const phone = "919876543210";
		const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
		window.open(whatsappUrl, '_blank');
	}
</script>

<svelte:head>
	<title>Contact Asamkhya - Start Your AI Web Project</title>
	<meta name="description" content="Get in touch with Asamkhya for your AI-powered website project. Fast response, transparent pricing, intelligent automation." />
</svelte:head>

<div class="contact-page">
	<div class="contact-container">
		{#if submissionStatus === 'success'}
			<!-- Success State -->
			<div class="success-container">
				<div class="success-icon">🚀</div>
				<h1>Project Inquiry Received!</h1>
				<p class="success-message">
					Thank you for your interest! Our team will review your project details and get back to you within 24 hours with a detailed proposal and next steps.
				</p>
				<div class="success-actions">
					<button class="new-message-btn" on:click={() => submissionStatus = ''}>
						Send Another Inquiry
					</button>
					<button class="whatsapp-btn" on:click={openWhatsApp}>
						Quick Chat on WhatsApp
					</button>
				</div>
			</div>
		{:else}
			<!-- Contact Form -->
			<div class="contact-header">
				<div class="hero-badge">
					<span class="badge-text">Start Your Project</span>
				</div>
				<h1>On Your Mark. Get Set. Build.</h1>
			</div>
			
			<div class="contact-content">
				<!-- Contact Information -->
				<div class="contact-info">
					<div class="info-section">
						<h2>Why Choose Asamkhya?</h2>
						<p class="info-description">
							We don't just build websites - we create intelligent digital experiences. Every project includes smart automation, modern design, and AI-powered features that help your business grow.
						</p>
					</div>
					
					<div class="contact-methods">
						<div class="contact-method">
							<div class="method-icon">📧</div>
							<div class="method-content">
								<h3>Email</h3>
								<p>hello@asamkhya.com</p>
							</div>
						</div>
					</div>
					
				</div>
				
				<!-- Contact Form -->
				<div class="form-section">
					<form on:submit={handleSubmit} class="contact-form">
						<div class="form-header">
							<h2>Start Your Project</h2>
							<p>Tell us about your vision</p>
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
							
							<div class="form-group">
								<label for="phone">Phone Number</label>
								<input type="tel" id="phone" bind:value={contactData.phone} placeholder="+91 98765 43210" />
							</div>
							
							<div class="form-group">
								<label for="projectType">Project Type *</label>
								<select id="projectType" bind:value={contactData.projectType} required>
									<option value="">Select project type</option>
									{#each projectTypes as type}
										<option value={type}>{type}</option>
									{/each}
								</select>
							</div>
							
							<div class="form-group">
								<label for="budget">Budget Range</label>
								<select id="budget" bind:value={contactData.budget}>
									<option value="">Select budget range</option>
									{#each budgetRanges as range}
										<option value={range}>{range}</option>
									{/each}
								</select>
							</div>
							
							<div class="form-group">
								<label for="timeline">Timeline</label>
								<select id="timeline" bind:value={contactData.timeline}>
									<option value="">Select timeline</option>
									{#each timelineOptions as option}
										<option value={option}>{option}</option>
									{/each}
								</select>
							</div>
							
							<div class="form-group full-width">
								<label for="message">Project Details *</label>
								<textarea 
									id="message" 
									bind:value={contactData.message} 
									required 
									rows="6" 
									placeholder="Tell us about your business, goals, and what features you need..."
								></textarea>
							</div>
						</div>
						
						<button type="submit" class="submit-btn" disabled={isSubmitting}>
							{#if isSubmitting}
								<span>Sending...</span>
								<div class="loading-dots">
									<div class="dot"></div>
									<div class="dot"></div>
									<div class="dot"></div>
								</div>
							{:else}
								<span>Send Project Inquiry</span>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
									<path d="M8 0L8 14M8 14L14 8M8 14L2 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							{/if}
						</button>
					</form>
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
		max-width: 700px;
		margin: 0 auto;
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
		background: rgba(255, 255, 255, 0.03);
		padding: 1.5rem 1.25rem;
		border-radius: 12px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(40px);
		transition: all 0.2s ease-out;
	}

	.contact-method:hover {
		border-color: var(--neon-green);
		box-shadow: 0 8px 32px rgba(0, 212, 255, 0.2);
		transform: translateY(-4px);
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
		display: block;
		margin-bottom: 1rem;
	}

	.whatsapp-direct {
		background: var(--neon-green);
		color: var(--bg-primary);
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		font-size: 0.875rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.whatsapp-direct:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(0, 255, 136, 0.4);
	}

	.what-included {
		background: var(--bg-glass);
		padding: 2rem;
		border-radius: 16px;
		border: 1px solid var(--border-medium);
		backdrop-filter: blur(20px);
	}

	.what-included h3 {
		color: var(--neon-green);
		margin: 0 0 1.5rem;
		font-size: 1.25rem;
		font-weight: 600;
	}

	.included-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.included-item {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.check {
		color: var(--neon-green);
		font-weight: 700;
		font-size: 1.125rem;
	}

	.included-item span:last-child {
		color: var(--text-secondary);
		line-height: 1.4;
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
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 16px;
		padding: 2rem 1.5rem;
		backdrop-filter: blur(40px);
		box-shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
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
		padding: 0.75rem 1rem;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 8px;
		color: var(--text-primary);
		font-family: inherit;
		font-size: 1rem;
		backdrop-filter: blur(40px);
		transition: all 0.2s ease-out;
	}

	.form-group input::placeholder,
	.form-group textarea::placeholder {
		color: var(--text-muted);
	}

	.form-group input:focus,
	.form-group textarea:focus,
	.form-group select:focus {
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
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
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
		max-width: 600px;
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
	.whatsapp-btn {
		padding: 1.25rem 2rem;
		font-size: 1rem;
		font-weight: 600;
		border-radius: 12px;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		border: none;
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

	.whatsapp-btn {
		background: var(--neon-green);
		color: var(--bg-primary);
		box-shadow: 0 4px 20px rgba(0, 255, 136, 0.3);
	}

	.whatsapp-btn:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-neon), 0 8px 40px rgba(0, 255, 136, 0.4);
	}

	/* Process Preview */
	.process-preview {
		background: var(--bg-secondary);
		padding: 4rem 3rem;
		border-radius: 24px;
		margin-bottom: 4rem;
	}

	.process-preview h2 {
		text-align: center;
		color: var(--text-primary);
		font-size: 2.5rem;
		margin: 0 0 3rem;
		font-weight: 700;
		line-height: 1.1;
	}

	.process-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2.5rem;
	}

	.process-step {
		text-align: center;
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 20px;
		padding: 2.5rem 2rem;
		backdrop-filter: blur(20px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.process-step:hover {
		transform: translateY(-4px);
		border-color: var(--neon-green);
		box-shadow: var(--shadow-medium);
	}

	.step-number {
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
		margin-bottom: 1.5rem;
	}

	.process-step h3 {
		color: var(--text-primary);
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0 0 1rem;
	}

	.process-step p {
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
	}

	/* FAQ Section */
	.faq-section {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		padding: 4rem 3rem;
		border-radius: 24px;
		backdrop-filter: blur(20px);
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
		background: var(--bg-secondary);
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

		.process-grid,
		.faq-grid {
			grid-template-columns: 1fr;
		}

		.process-preview,
		.faq-section {
			padding: 3rem 2rem;
		}

		.form-section {
			padding: 2.5rem;
		}

		.success-container {
			padding: 3rem 2rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none !important;
			animation: none !important;
		}
	}

	/* iPhone 15 and similar small screens */
	@media (max-width: 430px) {
		.contact-container {
			padding: 0 1rem;
		}
		
		.contact-page {
			padding: 2.5rem 0;
		}
		
		.contact-header h1 {
			font-size: clamp(2rem, 7vw, 2.8rem);
		}
		
		.form-section {
			padding: 2rem 1.5rem;
		}
		
		.success-container {
			padding: 2.5rem 1.5rem;
		}
		
		.success-container h1 {
			font-size: clamp(1.8rem, 6vw, 2.2rem);
		}
		
		.success-message {
			font-size: 1.1rem;
		}
	}
</style>