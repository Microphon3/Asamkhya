<script lang="ts">
	let faqOpen = -1;
	
	function toggleFaq(index: number) {
		faqOpen = faqOpen === index ? -1 : index;
	}

	// Application Form Logic
	interface FormData {
		// Section 1: Basic Information
		name: string;
		email: string;
		phone: string;
		currentRole: string;
		location: string;
		
		// Section 2: Intent & Motivation
		problemToSolve: string;
		whyIntensiveFormat: string;
		
		// Section 3: Reasoning & Problem Solving
		aiReplacementResponse: string;
		budgetDecision: string;
		
		// Section 4: Understanding & Curiosity
		learningExperience: string;
		aiToolExperience: string;
		
		// Section 5: Practical Thinking
		appIdea: string;
		technicalExplanation: string;
		
		// Section 6: Commitment & Pace
		keepingUpPlan: string;
		successVision: string;
	}

	let formData: FormData = {
		name: '',
		email: '',
		phone: '',
		currentRole: '',
		location: '',
		problemToSolve: '',
		whyIntensiveFormat: '',
		aiReplacementResponse: '',
		budgetDecision: '',
		learningExperience: '',
		aiToolExperience: '',
		appIdea: '',
		technicalExplanation: '',
		keepingUpPlan: '',
		successVision: ''
	};

	let currentSection = 1;
	const totalSections = 6;
	let isSubmitting = false;
	let isSubmitted = false;
	let errors: { [key: string]: string } = {};

	// Auto-save to localStorage
	$: if (typeof window !== 'undefined') {
		localStorage.setItem('asamkhyaApplication', JSON.stringify(formData));
	}

	// Load saved data on mount
	if (typeof window !== 'undefined') {
		const saved = localStorage.getItem('asamkhyaApplication');
		if (saved) {
			formData = { ...formData, ...JSON.parse(saved) };
		}
	}

	function validateSection(section: number): boolean {
		errors = {};
		let isValid = true;

		switch (section) {
			case 1:
				if (!formData.name.trim()) { errors.name = 'Name is required'; isValid = false; }
				if (!formData.email.trim()) { errors.email = 'Email is required'; isValid = false; }
				if (!formData.phone.trim()) { errors.phone = 'Phone is required'; isValid = false; }
				if (!formData.currentRole.trim()) { errors.currentRole = 'Current role is required'; isValid = false; }
				if (!formData.location.trim()) { errors.location = 'Location is required'; isValid = false; }
				break;
			case 2:
				if (!formData.problemToSolve.trim() || formData.problemToSolve.length < 100) {
					errors.problemToSolve = 'Please provide at least 100 characters';
					isValid = false;
				}
				if (!formData.whyIntensiveFormat.trim() || formData.whyIntensiveFormat.length < 100) {
					errors.whyIntensiveFormat = 'Please provide at least 100 characters';
					isValid = false;
				}
				break;
			case 3:
				if (!formData.aiReplacementResponse.trim() || formData.aiReplacementResponse.length < 100) {
					errors.aiReplacementResponse = 'Please provide at least 100 characters';
					isValid = false;
				}
				if (!formData.budgetDecision.trim() || formData.budgetDecision.length < 100) {
					errors.budgetDecision = 'Please provide at least 100 characters';
					isValid = false;
				}
				break;
			case 4:
				if (!formData.learningExperience.trim() || formData.learningExperience.length < 100) {
					errors.learningExperience = 'Please provide at least 100 characters';
					isValid = false;
				}
				if (!formData.aiToolExperience.trim() || formData.aiToolExperience.length < 100) {
					errors.aiToolExperience = 'Please provide at least 100 characters';
					isValid = false;
				}
				break;
			case 5:
				if (!formData.appIdea.trim() || formData.appIdea.length < 100) {
					errors.appIdea = 'Please provide at least 100 characters';
					isValid = false;
				}
				if (!formData.technicalExplanation.trim() || formData.technicalExplanation.length < 100) {
					errors.technicalExplanation = 'Please provide at least 100 characters';
					isValid = false;
				}
				break;
			case 6:
				if (!formData.keepingUpPlan.trim() || formData.keepingUpPlan.length < 100) {
					errors.keepingUpPlan = 'Please provide at least 100 characters';
					isValid = false;
				}
				if (!formData.successVision.trim() || formData.successVision.length < 100) {
					errors.successVision = 'Please provide at least 100 characters';
					isValid = false;
				}
				break;
		}
		return isValid;
	}

	function nextSection() {
		if (validateSection(currentSection) && currentSection < totalSections) {
			currentSection++;
		}
	}

	function prevSection() {
		if (currentSection > 1) {
			currentSection--;
		}
	}

	function getProgress(): number {
		return ((currentSection - 1) / (totalSections - 1)) * 100;
	}

	async function handleSubmit() {
		if (!validateSection(currentSection)) return;
		
		isSubmitting = true;
		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 2000));
		isSubmitted = true;
		isSubmitting = false;
		
		// Clear saved data after successful submission
		if (typeof window !== 'undefined') {
			localStorage.removeItem('asamkhyaApplication');
		}
	}

	function getCharacterCount(text: string): string {
		const length = text.length;
		if (length < 100) {
			return `${length}/100 characters (minimum)`;
		}
		return `${length} characters`;
	}

	function getSectionTitle(section: number): string {
		switch (section) {
			case 1: return 'Basic Information';
			case 2: return 'Intent & Motivation';
			case 3: return 'Reasoning & Problem Solving';
			case 4: return 'Understanding & Curiosity';
			case 5: return 'Practical Thinking';
			case 6: return 'Commitment & Pace';
			default: return '';
		}
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
			question: "What exactly will I graduate with?",
			answer: "A working product, AI business acumen, strategic thinking skills, and practical coding abilities. Plus lifetime access to our network of serious builders and ongoing founder support."
		},
		{
			question: "How do you select students?",
			answer: "Through rigorous acumen-based assessment. We evaluate potential, critical thinking, and genuine curiosity over credentials. Our process includes application review, problem-solving assessment, and founder interviews."
		}
	];
</script>

<svelte:head>
	<title>A4 AI - Build Like You Mean It</title>
	<meta name="description" content="Acumen-based admissions. All approved admissions, course fee 2 lakh. Selective AI education for elite builders." />
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
					<span class="title-primary">Build Like You Mean It</span>
					<span class="title-secondary">Acumen-Based Admissions.</span>
				</h1>
				
				<p class="hero-description">
					All approved admissions, course fee 2 lakh.
				</p>


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
			
			<!-- Premium Application Section -->
			{#if !isSubmitted}
				<div class="form-wrapper">
					<div class="application-header">
						<span class="main-answer">Ready Stranger?</span>
					</div>

					<!-- Progress Bar -->
					<div class="progress-container">
						<div class="progress-bar">
							<div class="progress-fill" style="width: {getProgress()}%"></div>
						</div>
						<div class="progress-text">
							Section {currentSection} of {totalSections}: {getSectionTitle(currentSection)}
						</div>
					</div>

					<form class="comprehensive-form">
						<!-- Section 1: Basic Information -->
						{#if currentSection === 1}
							<div class="form-section" class:active={currentSection === 1}>
								<div class="section-header">
									<h3>Basic Information</h3>
									<p>Let's start with the essentials about you.</p>
								</div>
								
								<div class="form-grid">
									<div class="form-group">
										<label for="name">Full Name *</label>
										<input 
											type="text" 
											id="name" 
											bind:value={formData.name}
											placeholder="Enter your full name"
											class:error={errors.name}
										/>
										{#if errors.name}
											<span class="error-message">{errors.name}</span>
										{/if}
									</div>

									<div class="form-group">
										<label for="email">Email Address *</label>
										<input 
											type="email" 
											id="email" 
											bind:value={formData.email}
											placeholder="your.email@example.com"
											class:error={errors.email}
										/>
										{#if errors.email}
											<span class="error-message">{errors.email}</span>
										{/if}
									</div>

									<div class="form-group">
										<label for="phone">Phone Number *</label>
										<input 
											type="tel" 
											id="phone" 
											bind:value={formData.phone}
											placeholder="+91 98765 43210"
											class:error={errors.phone}
										/>
										{#if errors.phone}
											<span class="error-message">{errors.phone}</span>
										{/if}
									</div>

									<div class="form-group">
										<label for="currentRole">Current Role/Profession *</label>
										<input 
											type="text" 
											id="currentRole" 
											bind:value={formData.currentRole}
											placeholder="e.g., Software Engineer, Business Owner, Student"
											class:error={errors.currentRole}
										/>
										{#if errors.currentRole}
											<span class="error-message">{errors.currentRole}</span>
										{/if}
									</div>

									<div class="form-group full-width">
										<label for="location">Location *</label>
										<input 
											type="text" 
											id="location" 
											bind:value={formData.location}
											placeholder="City, Country"
											class:error={errors.location}
										/>
										{#if errors.location}
											<span class="error-message">{errors.location}</span>
										{/if}
									</div>
								</div>
							</div>
						{/if}

						<!-- Section 2: Intent & Motivation -->
						{#if currentSection === 2}
							<div class="form-section" class:active={currentSection === 2}>
								<div class="section-header">
									<h3>Intent & Motivation</h3>
									<p>Help us understand what drives you and why you're here.</p>
								</div>
								
								<div class="form-group">
									<label for="problemToSolve">Describe a specific problem you want to solve with AI/technology. Be concrete - what exactly frustrates you that you think tech could fix? *</label>
									<textarea 
										id="problemToSolve" 
										bind:value={formData.problemToSolve}
										placeholder="Be specific about a real problem you've experienced or observed..."
										rows="5"
										class:error={errors.problemToSolve}
									></textarea>
									<div class="character-count" class:error={formData.problemToSolve.length < 100}>
										{getCharacterCount(formData.problemToSolve)}
									</div>
									{#if errors.problemToSolve}
										<span class="error-message">{errors.problemToSolve}</span>
									{/if}
								</div>

								<div class="form-group">
									<label for="whyIntensiveFormat">Why intensive learning vs. a 6-month online course? What draws you to this format? *</label>
									<textarea 
										id="whyIntensiveFormat" 
										bind:value={formData.whyIntensiveFormat}
										placeholder="Tell us about your learning style and why intensive format appeals to you..."
										rows="5"
										class:error={errors.whyIntensiveFormat}
									></textarea>
									<div class="character-count" class:error={formData.whyIntensiveFormat.length < 100}>
										{getCharacterCount(formData.whyIntensiveFormat)}
									</div>
									{#if errors.whyIntensiveFormat}
										<span class="error-message">{errors.whyIntensiveFormat}</span>
									{/if}
								</div>
							</div>
						{/if}

						<!-- Section 3: Reasoning & Problem Solving -->
						{#if currentSection === 3}
							<div class="form-section" class:active={currentSection === 3}>
								<div class="section-header">
									<h3>Reasoning & Problem Solving</h3>
									<p>We want to see how you think through complex scenarios.</p>
								</div>
								
								<div class="form-group">
									<label for="aiReplacementResponse">A restaurant owner says 'AI will replace all my staff.' How would you respond? What's your reasoning? *</label>
									<textarea 
										id="aiReplacementResponse" 
										bind:value={formData.aiReplacementResponse}
										placeholder="Walk through your thinking - what would you tell this person and why..."
										rows="5"
										class:error={errors.aiReplacementResponse}
									></textarea>
									<div class="character-count" class:error={formData.aiReplacementResponse.length < 100}>
										{getCharacterCount(formData.aiReplacementResponse)}
									</div>
									{#if errors.aiReplacementResponse}
										<span class="error-message">{errors.aiReplacementResponse}</span>
									{/if}
								</div>

								<div class="form-group">
									<label for="budgetDecision">You have ₹50,000 to improve your business operations. Walk us through how you'd decide whether to spend it on AI tools, hiring people, or something else. *</label>
									<textarea 
										id="budgetDecision" 
										bind:value={formData.budgetDecision}
										placeholder="Show us your decision-making process step by step..."
										rows="5"
										class:error={errors.budgetDecision}
									></textarea>
									<div class="character-count" class:error={formData.budgetDecision.length < 100}>
										{getCharacterCount(formData.budgetDecision)}
									</div>
									{#if errors.budgetDecision}
										<span class="error-message">{errors.budgetDecision}</span>
									{/if}
								</div>
							</div>
						{/if}

						<!-- Section 4: Understanding & Curiosity -->
						{#if currentSection === 4}
							<div class="form-section" class:active={currentSection === 4}>
								<div class="section-header">
									<h3>Understanding & Curiosity</h3>
									<p>Tell us about your learning journey and curiosity about AI.</p>
								</div>
								
								<div class="form-group">
									<label for="learningExperience">Describe the last time you learned something completely new and difficult. What was your approach? *</label>
									<textarea 
										id="learningExperience" 
										bind:value={formData.learningExperience}
										placeholder="Walk us through a specific learning challenge you faced..."
										rows="5"
										class:error={errors.learningExperience}
									></textarea>
									<div class="character-count" class:error={formData.learningExperience.length < 100}>
										{getCharacterCount(formData.learningExperience)}
									</div>
									{#if errors.learningExperience}
										<span class="error-message">{errors.learningExperience}</span>
									{/if}
								</div>

								<div class="form-group">
									<label for="aiToolExperience">What's one AI tool you've tried using? What worked, what didn't, and why do you think that happened? *</label>
									<textarea 
										id="aiToolExperience" 
										bind:value={formData.aiToolExperience}
										placeholder="Be specific about your experience with ChatGPT, Claude, or any other AI tool..."
										rows="5"
										class:error={errors.aiToolExperience}
									></textarea>
									<div class="character-count" class:error={formData.aiToolExperience.length < 100}>
										{getCharacterCount(formData.aiToolExperience)}
									</div>
									{#if errors.aiToolExperience}
										<span class="error-message">{errors.aiToolExperience}</span>
									{/if}
								</div>
							</div>
						{/if}

						<!-- Section 5: Practical Thinking -->
						{#if currentSection === 5}
							<div class="form-section" class:active={currentSection === 5}>
								<div class="section-header">
									<h3>Practical Thinking</h3>
									<p>Show us how you approach building and explaining solutions.</p>
								</div>
								
								<div class="form-group">
									<label for="appIdea">If you could build one app/website that doesn't exist today, what would it do? Who would use it and why? *</label>
									<textarea 
										id="appIdea" 
										bind:value={formData.appIdea}
										placeholder="Describe your idea, target users, and why it would be valuable..."
										rows="5"
										class:error={errors.appIdea}
									></textarea>
									<div class="character-count" class:error={formData.appIdea.length < 100}>
										{getCharacterCount(formData.appIdea)}
									</div>
									{#if errors.appIdea}
										<span class="error-message">{errors.appIdea}</span>
									{/if}
								</div>

								<div class="form-group">
									<label for="technicalExplanation">Describe a time when you had to explain something technical to someone non-technical. How did you approach it? *</label>
									<textarea 
										id="technicalExplanation" 
										bind:value={formData.technicalExplanation}
										placeholder="Walk us through your approach to making complex things simple..."
										rows="5"
										class:error={errors.technicalExplanation}
									></textarea>
									<div class="character-count" class:error={formData.technicalExplanation.length < 100}>
										{getCharacterCount(formData.technicalExplanation)}
									</div>
									{#if errors.technicalExplanation}
										<span class="error-message">{errors.technicalExplanation}</span>
									{/if}
								</div>
							</div>
						{/if}

						<!-- Section 6: Commitment & Pace -->
						{#if currentSection === 6}
							<div class="form-section" class:active={currentSection === 6}>
								<div class="section-header">
									<h3>Commitment & Pace</h3>
									<p>Help us understand your commitment and vision for success.</p>
								</div>
								
								<div class="form-group">
									<label for="keepingUpPlan">This is intensive learning with very capable people. What's your plan for keeping up? *</label>
									<textarea 
										id="keepingUpPlan" 
										bind:value={formData.keepingUpPlan}
										placeholder="Tell us about your preparation and approach to intense learning..."
										rows="5"
										class:error={errors.keepingUpPlan}
									></textarea>
									<div class="character-count" class:error={formData.keepingUpPlan.length < 100}>
										{getCharacterCount(formData.keepingUpPlan)}
									</div>
									{#if errors.keepingUpPlan}
										<span class="error-message">{errors.keepingUpPlan}</span>
									{/if}
								</div>

								<div class="form-group">
									<label for="successVision">What would success look like for you 6 months after completing this program? *</label>
									<textarea 
										id="successVision" 
										bind:value={formData.successVision}
										placeholder="Paint a specific picture of where you see yourself..."
										rows="5"
										class:error={errors.successVision}
									></textarea>
									<div class="character-count" class:error={formData.successVision.length < 100}>
										{getCharacterCount(formData.successVision)}
									</div>
									{#if errors.successVision}
										<span class="error-message">{errors.successVision}</span>
									{/if}
								</div>
							</div>
						{/if}

						<!-- Navigation Buttons -->
						<div class="form-navigation">
							{#if currentSection > 1}
								<button type="button" class="nav-button secondary" on:click={prevSection}>
									← Previous Section
								</button>
							{/if}
							
							{#if currentSection < totalSections}
								<button type="button" class="nav-button primary" on:click={nextSection}>
									Next Section →
								</button>
							{:else}
								<button 
									type="button" 
									class="submit-button" 
									on:click={handleSubmit}
									disabled={isSubmitting}
								>
									{#if isSubmitting}
										Submitting Application...
									{:else}
										Submit Application
									{/if}
								</button>
							{/if}
						</div>

					</form>
				</div>
			{:else}
				<div class="success-page">
					<div class="container">
						<div class="success-content">
							<div class="success-icon">✅</div>
							<h2>Application Submitted!</h2>
							<p class="success-message">
								Thank you for your application. We'll review and contact you within 48 hours.
							</p>
							<div class="next-steps">
								<h3>What happens next:</h3>
								<ol>
									<li>Our founders review your responses (within 24 hours)</li>
									<li>If your application shows potential, we'll schedule a conversation</li>
									<li>We'll discuss your goals, our methodology, and mutual fit</li>
									<li>If accepted, we'll provide enrollment details</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
			{/if}
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
				<p>Join the first batch of builders.</p>
				<div class="cta-actions">
					<a href="/asamkhya/apply" class="cta-primary large">
						<span>Apply Now</span>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M8 0L8 14M8 14L14 8M8 14L2 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</a>
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

	/* Application Section */
	.application-section {
		background: var(--bg-glass);
		padding: 3rem 2rem;
		border-radius: 20px;
		backdrop-filter: blur(20px);
		border: 1px solid var(--border-medium);
		text-align: center;
	}

	.application-section .main-answer {
		font-size: clamp(3.5rem, 7vw, 6rem);
		font-weight: 800;
		background: linear-gradient(135deg, var(--text-primary) 0%, var(--neon-green) 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin: 0 0 2rem;
		display: block;
	}

	.condensed-application-note {
		background: var(--bg-tertiary);
		padding: 2rem;
		border-radius: 16px;
		margin: 2rem 0;
		border: 1px solid var(--border-subtle);
	}

	.condensed-application-note p {
		color: var(--text-secondary);
		margin: 0 0 1rem;
		text-align: left;
	}

	.condensed-application-note ul {
		color: var(--text-secondary);
		text-align: left;
		margin: 1rem 0 0 1.5rem;
	}

	.condensed-application-note li {
		margin-bottom: 0.5rem;
	}

	.success-section {
		text-align: center;
		background: var(--bg-glass);
		padding: 3rem 2rem;
		border-radius: 20px;
		backdrop-filter: blur(20px);
		border: 1px solid var(--border-medium);
	}

	.success-icon {
		font-size: 4rem;
		margin-bottom: 2rem;
	}

	.success-section h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 1.5rem;
		line-height: 1.1;
	}

	.success-message {
		font-size: 1.125rem;
		color: var(--text-secondary);
		margin: 0;
		line-height: 1.6;
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

		.modules-grid {
			grid-template-columns: 1fr;
		}

		.module-card {
			padding: 2rem;
		}

		.course-breakdown,
		.founders,
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

	/* Application Form Styles */
	.application-form {
		padding: 6rem 0;
		background: var(--bg-secondary);
	}

	.form-wrapper {
		background: var(--bg-glass);
		padding: 3rem;
		border-radius: 24px;
		border: 1px solid var(--border-medium);
		backdrop-filter: blur(20px);
		box-shadow: var(--shadow-medium);
		max-width: 900px;
		margin: 0 auto;
	}

	.application-header {
		text-align: center;
		margin-bottom: 3rem;
		position: relative;
	}

	.main-answer {
		font-size: clamp(3.5rem, 7vw, 6rem);
		font-weight: 800;
		color: var(--text-primary);
		margin: 0 0 2rem;
		letter-spacing: -0.03em;
		line-height: 1.1;
		text-align: center;
		white-space: nowrap;
		display: inline-block;
		background: linear-gradient(135deg, var(--text-primary) 0%, var(--neon-green) 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.application-intro {
		font-size: 1.1rem;
		color: var(--text-secondary);
		margin: 2rem 0 0;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 500;
	}

	.application-subtitle {
		font-size: 1.125rem;
		color: var(--text-secondary);
		margin: 0;
		line-height: 1.6;
	}

	/* Progress Bar */
	.progress-container {
		margin-bottom: 3rem;
		text-align: center;
	}

	.progress-bar {
		width: 100%;
		height: 6px;
		background: var(--bg-tertiary);
		border-radius: 50px;
		margin-bottom: 1rem;
		overflow: hidden;
	}

	.progress-fill {
		height: 100%;
		background: linear-gradient(90deg, var(--neon-green), var(--neon-green-dark));
		border-radius: 50px;
		transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.progress-text {
		font-size: 0.9375rem;
		color: var(--neon-green);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	/* Form Sections */
	.comprehensive-form {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.form-section {
		opacity: 1;
		transform: translateX(0);
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.section-header {
		text-align: center;
		margin-bottom: 2.5rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid var(--border-subtle);
	}

	.section-header h3 {
		color: var(--text-primary);
		font-size: 1.75rem;
		font-weight: 700;
		margin: 0 0 0.75rem;
		line-height: 1.2;
	}

	.section-header p {
		color: var(--text-secondary);
		font-size: 1rem;
		margin: 0;
		line-height: 1.5;
	}

	/* Form Grid */
	.form-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
		font-weight: 600;
		color: var(--text-primary);
		font-size: 1rem;
		line-height: 1.4;
	}

	.form-group input,
	.form-group textarea {
		padding: 1rem 1.25rem;
		border: 1px solid var(--border-medium);
		border-radius: 12px;
		font-size: 1rem;
		font-family: inherit;
		background: var(--bg-glass);
		color: var(--text-primary);
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
		box-shadow: var(--shadow-neon);
	}

	.form-group input.error,
	.form-group textarea.error {
		border-color: #ef4444;
		box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
	}

	.form-group textarea {
		resize: vertical;
		min-height: 120px;
		line-height: 1.5;
	}

	/* Character Count */
	.character-count {
		font-size: 0.875rem;
		color: var(--text-muted);
		text-align: right;
		margin-top: -0.25rem;
	}

	.character-count.error {
		color: #ef4444;
		font-weight: 600;
	}

	/* Error Messages */
	.error-message {
		color: #ef4444;
		font-size: 0.875rem;
		font-weight: 500;
		margin-top: -0.25rem;
	}

	/* Form Navigation */
	.form-navigation {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 3rem;
		gap: 1rem;
	}

	.nav-button,
	.submit-button {
		padding: 1rem 2rem;
		font-size: 1rem;
		font-weight: 600;
		border-radius: 12px;
		cursor: pointer;
		border: none;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
	}

	.nav-button.primary {
		background: var(--neon-green);
		color: var(--bg-primary);
		box-shadow: 0 4px 20px rgba(0, 255, 136, 0.3);
	}

	.nav-button.primary:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-neon), 0 6px 30px rgba(0, 255, 136, 0.4);
	}

	.nav-button.secondary {
		background: var(--bg-glass);
		color: var(--text-primary);
		border: 1px solid var(--border-medium);
		backdrop-filter: blur(20px);
	}

	.nav-button.secondary:hover {
		border-color: var(--neon-green);
		color: var(--neon-green);
		box-shadow: var(--shadow-subtle);
	}

	.submit-button {
		background: var(--neon-green);
		color: var(--bg-primary);
		box-shadow: 0 4px 20px rgba(0, 255, 136, 0.3);
		padding: 1.25rem 2.5rem;
		font-size: 1.125rem;
		margin-left: auto;
	}

	.submit-button:hover:not(:disabled) {
		transform: translateY(-2px);
		box-shadow: var(--shadow-neon), 0 8px 40px rgba(0, 255, 136, 0.4);
	}

	.submit-button:disabled {
		opacity: 0.7;
		cursor: not-allowed;
		transform: none;
	}

	/* Auto-save Indicator */
	.auto-save-indicator {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 2rem;
		padding: 1rem;
		background: rgba(0, 255, 136, 0.05);
		border: 1px solid rgba(0, 255, 136, 0.1);
		border-radius: 8px;
		color: var(--text-secondary);
		font-size: 0.875rem;
	}

	.save-icon {
		opacity: 0.7;
	}

	/* Success Page */
	.success-page {
		padding: 8rem 0;
		background: var(--bg-secondary);
		text-align: center;
	}

	.success-content {
		max-width: 700px;
		margin: 0 auto;
	}

	.success-icon {
		font-size: 4rem;
		margin-bottom: 2rem;
	}

	.success-content h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 1.5rem;
		line-height: 1.1;
	}

	.success-message {
		font-size: 1.125rem;
		color: var(--text-secondary);
		margin: 0 0 3rem;
		line-height: 1.6;
	}

	.next-steps {
		text-align: left;
		background: var(--bg-glass);
		padding: 2.5rem;
		border-radius: 16px;
		margin-bottom: 3rem;
		border: 1px solid var(--border-medium);
		backdrop-filter: blur(20px);
	}

	.next-steps h3 {
		color: var(--neon-green);
		margin: 0 0 1.5rem;
		font-weight: 600;
	}

	.next-steps ol {
		color: var(--text-secondary);
		padding-left: 1.5rem;
		line-height: 1.6;
	}

	.next-steps li {
		margin-bottom: 0.75rem;
	}

	/* iPhone 15 and similar small screens */
	@media (max-width: 430px) {
		.container {
			padding: 0 1rem;
		}
		
		.title-primary {
			font-size: clamp(2rem, 8vw, 3rem);
		}
		
		.title-secondary {
			font-size: clamp(1rem, 4vw, 1.5rem);
		}
		
		.section-header h2 {
			font-size: clamp(1.8rem, 6vw, 2.5rem);
		}
		
		.main-answer {
			font-size: clamp(2.2rem, 8vw, 3.5rem);
		}
		
		.cta-content h2 {
			font-size: clamp(1.8rem, 6vw, 2.5rem);
		}
		
		.faq-header h2 {
			font-size: clamp(1.8rem, 6vw, 2.5rem);
		}
		
		.application-section {
			padding: 3rem 0;
		}
		
		.form-section {
			padding: 1.5rem 1rem;
		}
		
		.hero {
			padding: 4rem 0;
		}
		
		.hero-metrics {
			gap: 1.5rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none !important;
			animation: none !important;
		}
	}
</style>