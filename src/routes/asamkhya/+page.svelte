<script lang="ts">
	import { onMount } from 'svelte';
	import { Ripple, InteractiveHoverButton, MorphingText, LineShadowText, Safari } from '$lib/components/magicui';
	
	let showWhatsAppDemo = false;
	let showFormDemo = false;
	let show3DDemo = false;
	let formData = { name: '', email: '', message: '' };
	let formSubmitted = false;

	function openWhatsAppDemo() {
		showWhatsAppDemo = true;
		// Simulate WhatsApp integration
		setTimeout(() => {
			const message = "Hi! I'm interested in your AI-powered website development services. Can we discuss my project?";
			const phone = "919876543210"; // Demo number
			const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
			window.open(whatsappUrl, '_blank');
			showWhatsAppDemo = false;
		}, 1500);
	}

	function openFormDemo() {
		showFormDemo = true;
	}

	function submitDemoForm() {
		if (formData.name && formData.email) {
			formSubmitted = true;
			setTimeout(() => {
				showFormDemo = false;
				formSubmitted = false;
				formData = { name: '', email: '', message: '' };
			}, 2000);
		}
	}

	function open3DDemo() {
		show3DDemo = true;
		// Initialize simple 3D effect
		setTimeout(() => {
			show3DDemo = false;
		}, 3000);
	}

	let portfolioItems = [
		{
			id: 1,
			title: "Luxe Restaurant",
			category: "Food & Beverage",
			description: "Premium dining experience with AI-powered reservations and WhatsApp ordering",
			image: "/api/placeholder/600/400",
			technologies: ["SvelteKit", "WhatsApp API", "Stripe", "Three.js"],
			features: ["Online Reservations", "WhatsApp Ordering", "3D Menu Showcase", "Payment Integration"],
			status: "Live Demo"
		},
		{
			id: 2,
			title: "TechFlow SaaS",
			category: "Software",
			description: "Modern SaaS platform with user dashboards and subscription management",
			image: "/api/placeholder/600/400",
			technologies: ["SvelteKit", "Supabase", "Stripe", "Tailwind"],
			features: ["User Dashboard", "Subscription Management", "Analytics", "API Integration"],
			status: "Live Demo"
		},
		{
			id: 3,
			title: "Aurora E-commerce",
			category: "E-commerce",
			description: "Beautiful online store with smart product recommendations and cart automation",
			image: "/api/placeholder/600/400",
			technologies: ["SvelteKit", "Shopify API", "AI Recommendations", "Cloudflare"],
			features: ["Smart Cart", "Product Recommendations", "Inventory Management", "Mobile App"],
			status: "Live Demo"
		},
		{
			id: 4,
			title: "ConsultPro Services",
			category: "Professional Services",
			description: "Professional consulting website with automated client onboarding",
			image: "/api/placeholder/600/400",
			technologies: ["SvelteKit", "Calendly", "EmailJS", "Forms"],
			features: ["Client Onboarding", "Booking System", "Document Upload", "CRM Integration"],
			status: "Live Demo"
		},
		{
			id: 5,
			title: "CreativeStudio Agency",
			category: "Creative",
			description: "Stunning creative agency showcase with 3D animations and interactive portfolio",
			image: "/api/placeholder/600/400",
			technologies: ["SvelteKit", "Three.js", "GSAP", "WebGL"],
			features: ["3D Animations", "Interactive Portfolio", "Client Gallery", "Contact Forms"],
			status: "Live Demo"
		},
		{
			id: 6,
			title: "LocalBiz Hub",
			category: "Local Business",
			description: "Complete local business solution with maps, reviews, and customer management",
			image: "/api/placeholder/600/400",
			technologies: ["SvelteKit", "Google Maps", "Reviews API", "WhatsApp"],
			features: ["Interactive Maps", "Review Management", "WhatsApp Support", "Local SEO"],
			status: "Live Demo"
		}
	];

	let technologies = [
		{ name: "SvelteKit", description: "Modern web framework for lightning-fast websites", icon: "⚡" },
		{ name: "Three.js", description: "3D graphics and animations that captivate users", icon: "🎯" },
		{ name: "WhatsApp API", description: "Direct customer communication through WhatsApp", icon: "💬" },
		{ name: "Stripe", description: "Secure payment processing and subscriptions", icon: "💳" },
		{ name: "Supabase", description: "Real-time database and authentication", icon: "🗄️" },
		{ name: "Tailwind CSS", description: "Beautiful, responsive design systems", icon: "🎨" },
		{ name: "Magic UI", description: "Premium component libraries", icon: "✨" },
		{ name: "Cloudflare", description: "Global CDN and edge computing", icon: "🌐" }
	];

	let selectedCategory = "All";
	let categories = ["All", "Food & Beverage", "Software", "E-commerce", "Professional Services", "Creative", "Local Business"];

	// Morphing text for company name
	let companyTexts = ["असंख्य", "ASAṂKHYA"];

	$: filteredPortfolio = selectedCategory === "All" 
		? portfolioItems 
		: portfolioItems.filter(item => item.category === selectedCategory);
</script>

<svelte:head>
	<title>Asamkhya - AI-Powered Website Development</title>
	<meta name="description" content="Premium websites with intelligent automation. We build AI-enhanced digital experiences that drive business results." />
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
								<span class="badge-text">AI-Powered Development</span>
							</div>
						</div>
					</div>
				</div>

				
				<div class="hero-title">
					<h1 class="shadow-text-display">
						<LineShadowText shadowColor="rgba(255, 255, 255, 0.3)" shadowOffset={2}>
							Tell us <em>why</em>?
						</LineShadowText>
					</h1>
					<h1 class="shadow-text-display shadow-secondary">
						<LineShadowText shadowColor="rgba(0, 212, 255, 0.4)" shadowOffset={2}>
							We deploy the how.
						</LineShadowText>
					</h1>
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
						<p>Modern websites with AI integration</p>
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
						<p>Smart workflows that work 24/7</p>
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
						<p>End-to-end digital solutions</p>
					</div>
				</div>

				<!-- Tech Stack Section -->
				<div class="tech-stack-section">
					<p class="tech-intro">Built with industry-leading technologies</p>
					<div class="tech-logos">
						<div class="tech-logo">
							<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
								<!-- React Logo -->
								<circle cx="12" cy="12" r="3"/>
								<ellipse cx="12" cy="12" rx="11" ry="3" transform="rotate(60 12 12)"/>
								<ellipse cx="12" cy="12" rx="11" ry="3" transform="rotate(120 12 12)"/>
								<ellipse cx="12" cy="12" rx="11" ry="3"/>
							</svg>
							<span>React</span>
						</div>
						<div class="tech-logo">
							<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
								<!-- TypeScript Logo -->
								<rect x="3" y="3" width="18" height="18" rx="2"/>
								<path d="M8 16v-4h4v4"/>
								<path d="M12 8v8"/>
								<path d="M8 8h8"/>
								<circle cx="16" cy="8" r="1" fill="currentColor"/>
							</svg>
							<span>TypeScript</span>
						</div>
						<div class="tech-logo">
							<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
								<!-- Svelte Logo -->
								<path d="M3 12c0-7 4-11 9-11 2.5 0 4.5 1 6 2.5"/>
								<path d="M21 12c0 7-4 11-9 11-2.5 0-4.5-1-6-2.5"/>
								<path d="M9 5s0 3 3 3 3-3 3-3"/>
								<path d="M15 19s0-3-3-3-3 3-3 3"/>
							</svg>
							<span>SvelteKit</span>
						</div>
						<div class="tech-logo">
							<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
								<!-- Node.js Logo -->
								<path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"/>
								<path d="M12 22V12"/>
								<path d="M22 17L12 12L2 17"/>
								<path d="M12 2v10"/>
								<path d="M7 14.5l5-2.5"/>
								<path d="M17 14.5l-5-2.5"/>
							</svg>
							<span>Node.js</span>
						</div>
						<div class="tech-logo">
							<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
								<!-- Three.js Logo -->
								<polygon points="12,2 2,7 12,12 22,7"/>
								<polyline points="2,17 12,22 22,17"/>
								<polyline points="2,12 12,17 22,12"/>
								<circle cx="12" cy="12" r="2" fill="currentColor"/>
							</svg>
							<span>Three.js</span>
						</div>
						<div class="tech-logo">
							<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
								<!-- Tailwind CSS Logo -->
								<path d="M6 8c0-2.5 2-4 5-4 4.5 0 5 3 7 3 1.5 0 3-1 3-3"/>
								<path d="M6 15c0-2.5 2-4 5-4 4.5 0 5 3 7 3 1.5 0 3-1 3-3"/>
								<path d="M3 12c1-4 4-6 8-6 6 0 8 4 10 4"/>
							</svg>
							<span>Tailwind</span>
						</div>
						<div class="tech-logo">
							<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
								<!-- AI/Claude Logo -->
								<circle cx="12" cy="12" r="10"/>
								<path d="M8 14s1.5 2 4 2 4-2 4-2"/>
								<line x1="9" y1="9" x2="9.01" y2="9"/>
								<line x1="15" y1="9" x2="15.01" y2="9"/>
								<path d="M12 2a10 10 0 0 1 8 16"/>
								<circle cx="12" cy="12" r="4"/>
							</svg>
							<span>Claude AI</span>
						</div>
						<div class="tech-logo">
							<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
								<!-- Cloudflare Logo -->
								<path d="M4 12a8 8 0 1 1 16 0"/>
								<path d="M4 16h16"/>
								<path d="M8 12h8"/>
								<circle cx="12" cy="8" r="2"/>
								<path d="M6 18s2-2 6-2 6 2 6 2"/>
							</svg>
							<span>Cloudflare</span>
						</div>
					</div>
				</div>

				<div class="hero-actions">
					<InteractiveHoverButton href="/asamkhya/contact">
						<span>Start Your Project</span>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M8 0L8 14M8 14L14 8M8 14L2 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</InteractiveHoverButton>
					<InteractiveHoverButton href="#portfolio" className="secondary">
						View Portfolio
					</InteractiveHoverButton>
				</div>
			</div>
		</div>
	</section>

	<!-- Website Samples Section -->
	<section class="website-samples">
		<div class="container">
			<div class="section-header">
				<h2>Website Possibilities</h2>
				<p>Premium websites we can build for your business</p>
			</div>

			<div class="samples-grid">
				<div class="sample-item">
					<Safari url="influencer.studio" className="sample-browser">
						<div class="sample-content influencer-site">
							<div class="influencer-header">
								<div class="profile-section">
									<div class="profile-pic"></div>
									<div class="profile-info">
										<h1>Maya Chen</h1>
										<p>Lifestyle & Fashion Creator</p>
										<div class="stats">
											<span>2.1M followers</span>
											<span>•</span>
											<span>Brand Partnerships</span>
										</div>
									</div>
								</div>
								<button class="collaborate-btn">Collaborate</button>
							</div>
							<div class="content-grid">
								<div class="content-card"></div>
								<div class="content-card"></div>
								<div class="content-card"></div>
								<div class="content-card"></div>
							</div>
						</div>
					</Safari>
					<div class="sample-info">
						<h3>Influencer Portfolio</h3>
						<p>Professional brand showcase with booking system</p>
					</div>
				</div>

				<div class="sample-item">
					<Safari url="restaurant.app" className="sample-browser">
						<div class="sample-content restaurant-site">
							<div class="restaurant-hero">
								<h1>Sakura Sushi</h1>
								<p>Authentic Japanese Cuisine</p>
								<div class="cta-buttons">
									<button class="order-btn">Order Now</button>
									<button class="reserve-btn">Reserve Table</button>
								</div>
							</div>
							<div class="menu-preview">
								<div class="menu-item"></div>
								<div class="menu-item"></div>
								<div class="menu-item"></div>
							</div>
						</div>
					</Safari>
					<div class="sample-info">
						<h3>Restaurant Website</h3>
						<p>Online ordering with WhatsApp integration</p>
					</div>
				</div>

				<div class="sample-item">
					<Safari url="consultancy.pro" className="sample-browser">
						<div class="sample-content consulting-site">
							<div class="consulting-header">
								<h1>Strategic Solutions</h1>
								<p>Business Consulting Excellence</p>
								<button class="contact-btn">Free Consultation</button>
							</div>
							<div class="services-preview">
								<div class="service-box"></div>
								<div class="service-box"></div>
								<div class="service-box"></div>
							</div>
						</div>
					</Safari>
					<div class="sample-info">
						<h3>Professional Services</h3>
						<p>Lead generation with automated booking</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Portfolio Section -->
	<section id="portfolio" class="portfolio">
		<div class="container">
			<div class="section-header">
				<h2>Recent Work</h2>
				<p>Premium websites that drive business results</p>
			</div>

			<!-- Category Filter -->
			<div class="category-filter">
				{#each categories as category}
					<button 
						class="filter-button" 
						class:active={selectedCategory === category}
						on:click={() => selectedCategory = category}
					>
						{category}
					</button>
				{/each}
			</div>

			<!-- Portfolio Grid -->
			<div class="portfolio-grid">
				{#each filteredPortfolio as item}
					<div class="portfolio-card">
						<div class="card-image">
							<div class="image-placeholder">
								<div class="placeholder-content">
									<div class="placeholder-icon">🌐</div>
									<div class="placeholder-text">{item.title}</div>
								</div>
							</div>
							<div class="card-overlay">
								<InteractiveHoverButton className="preview">Live Demo</InteractiveHoverButton>
							</div>
						</div>
						<div class="card-content">
							<div class="card-header">
								<span class="card-category">{item.category}</span>
								<span class="card-status">{item.status}</span>
							</div>
							<h3>{item.title}</h3>
							<p>{item.description}</p>
							<div class="card-features">
								{#each item.features.slice(0, 3) as feature}
									<span class="feature-tag">{feature}</span>
								{/each}
							</div>
							<div class="card-tech">
								{#each item.technologies.slice(0, 3) as tech}
									<span class="tech-tag">{tech}</span>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Process Section -->
	<section class="process">
		<div class="container">
			<div class="section-header">
				<h2>Our Development Process</h2>
				<p>AI-assisted development for faster, smarter results</p>
			</div>

			<div class="process-grid">
				<div class="process-step">
					<div class="step-number">01</div>
					<h3>Discovery & Planning</h3>
					<p>We analyze your business needs and design the perfect digital solution with AI-powered insights.</p>
				</div>
				<div class="process-step">
					<div class="step-number">02</div>
					<h3>Smart Development</h3>
					<p>Using Claude Code and modern frameworks, we build your website with intelligent automation built-in.</p>
				</div>
				<div class="process-step">
					<div class="step-number">03</div>
					<h3>Integration & Testing</h3>
					<p>We connect your website to WhatsApp, payment systems, and other tools that drive your business.</p>
				</div>
				<div class="process-step">
					<div class="step-number">04</div>
					<h3>Launch & Support</h3>
					<p>Deploy to Cloudflare for global performance, with ongoing support and optimization.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="final-cta">
		<div class="container">
			<div class="cta-content">
				<h2>Ready to Build Something Amazing?</h2>
				<p>Let's create a website that works as hard as you do, with AI-powered automation that drives real results.</p>
				<div class="cta-actions">
					<InteractiveHoverButton href="/asamkhya/contact" className="large">
						<span>Start Your Project</span>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M8 0L8 14M8 14L14 8M8 14L2 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</InteractiveHoverButton>
				</div>
				<div class="cta-note">
					<span>Free consultation • Fast delivery • Intelligent automation</span>
				</div>
			</div>
		</div>
	</section>
</div>

<!-- Demo Modals -->
{#if showFormDemo}
	<div class="modal-overlay" on:click={() => showFormDemo = false}>
		<div class="modal-content" on:click|stopPropagation>
			<div class="modal-header">
				<h3>Smart Form Demo</h3>
				<InteractiveHoverButton className="close" onClick={() => showFormDemo = false}>×</InteractiveHoverButton>
			</div>
			{#if !formSubmitted}
				<div class="demo-form">
					<div class="form-group">
						<label for="name">Name</label>
						<input type="text" id="name" bind:value={formData.name} placeholder="Your full name" />
					</div>
					<div class="form-group">
						<label for="email">Email</label>
						<input type="email" id="email" bind:value={formData.email} placeholder="your@email.com" />
					</div>
					<div class="form-group">
						<label for="message">Project Details</label>
						<textarea id="message" bind:value={formData.message} placeholder="Tell us about your project..."></textarea>
					</div>
					<InteractiveHoverButton onClick={submitDemoForm}>
						Send Inquiry
					</InteractiveHoverButton>
				</div>
			{:else}
				<div class="success-message">
					<div class="success-icon">✅</div>
					<h4>Thank you!</h4>
					<p>Your inquiry has been sent. We'll get back to you within 24 hours.</p>
				</div>
			{/if}
		</div>
	</div>
{/if}

{#if show3DDemo}
	<div class="modal-overlay">
		<div class="threejs-demo">
			<div class="demo-cube">
				<div class="cube-face front">AI</div>
				<div class="cube-face back">WEB</div>
				<div class="cube-face right">DEV</div>
				<div class="cube-face left">3D</div>
				<div class="cube-face top">ASAMKHYA</div>
				<div class="cube-face bottom">SMART</div>
			</div>
			<div class="demo-text">
				<h3>3D Web Experiences</h3>
				<p>Interactive elements that engage your users</p>
			</div>
		</div>
	</div>
{/if}

<style>
	/* GitHub Dark Color Scheme */
	:root {
		/* Primary Colors */
		--bg-primary: #0d1117; /* GitHub Dark */
		--bg-secondary: #21262d; /* Slate */
		--bg-tertiary: #30363d;
		--bg-glass: rgba(33, 38, 45, 0.8);
		
		/* Accent Colors */
		--neon-green: #00d4ff; /* Electric Blue */
		--neon-green-dark: #00a8cc;
		
		/* Text Colors */
		--text-primary: #ffffff; /* Pure White */
		--text-secondary: #e6edf3;
		--text-muted: #8b949e;
		
		/* Border Colors */
		--border-medium: rgba(240, 246, 252, 0.15);
		--border-subtle: rgba(240, 246, 252, 0.1);
		
		/* Shadow Effects */
		--shadow-subtle: 0 4px 20px rgba(0, 212, 255, 0.1);
		--shadow-medium: 0 8px 30px rgba(0, 212, 255, 0.15);
		--shadow-neon: 0 0 20px rgba(0, 212, 255, 0.3);
	}

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
	}

	.hero::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 100%;
		background: 
			radial-gradient(circle at 30% 20%, rgba(0, 212, 255, 0.08) 0%, transparent 50%),
			radial-gradient(circle at 70% 80%, rgba(0, 212, 255, 0.04) 0%, transparent 50%);
		pointer-events: none;
	}

	.hero-content {
		text-align: center;
		position: relative;
		z-index: 1;
	}

	/* Ripple Section */
	.ripple-section {
		position: relative;
		height: 600px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 4rem;
		overflow: hidden;
	}

	.asamkhya-logo {
		position: relative;
		z-index: 10;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}


	.logo-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.company-name,
	:global(.company-name) {
		font-size: 7rem;
		font-weight: 800;
		color: var(--text-primary);
		letter-spacing: 0.15em;
		font-family: 'Orbitron', 'Noto Sans Devanagari', 'Arial Unicode MS', monospace, sans-serif;
		min-height: 7.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		text-transform: uppercase;
		word-spacing: 0.3em;
	}

	.company-tagline {
		font-size: 1.5rem;
		color: var(--neon-green);
		font-weight: 500;
		letter-spacing: 0.05em;
		text-transform: uppercase;
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
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.shadow-text-display {
		margin: 0;
		font-size: clamp(3rem, 7vw, 5rem);
		font-weight: 700;
		line-height: 1.1;
		color: var(--text-primary);
		letter-spacing: -0.02em;
		text-align: center;
	}

	.shadow-text-display.shadow-secondary {
		color: var(--neon-green);
	}

	/* Services Section */
	.services-section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		margin: 3rem 0;
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
	}

	.service-card {
		text-align: center;
		padding: 1.5rem;
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 16px;
		backdrop-filter: blur(20px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.service-card:hover {
		transform: translateY(-4px);
		border-color: var(--neon-green);
		box-shadow: var(--shadow-medium);
	}

	.service-icon {
		margin-bottom: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.service-icon svg {
		width: 32px;
		height: 32px;
		color: var(--neon-green);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		stroke-width: 1.5;
	}

	.service-card:hover .service-icon svg {
		color: var(--text-primary);
		filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.4));
		transform: scale(1.1);
	}

	.service-card h3 {
		color: var(--text-primary);
		font-size: 1.125rem;
		font-weight: 600;
		margin: 0 0 0.5rem;
	}

	.service-card p {
		color: var(--text-secondary);
		font-size: 0.9375rem;
		margin: 0;
		line-height: 1.4;
	}

	/* Tech Stack Section */
	.tech-stack-section {
		margin: 4rem 0 3rem;
		text-align: center;
	}

	.tech-intro {
		color: var(--text-muted);
		font-size: 0.9375rem;
		margin: 0 0 2rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 500;
	}

	.tech-logos {
		display: flex;
		justify-content: center;
		gap: 2rem;
		flex-wrap: wrap;
		align-items: center;
		padding: 2rem 0;
		max-width: 100%;
	}

	.tech-logo {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		opacity: 0.8;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		position: relative;
		cursor: pointer;
		padding: 0.5rem;
		border-radius: 12px;
		flex-shrink: 0;
		min-width: 60px;
	}

	.tech-logo:hover {
		opacity: 1;
		transform: translateY(-2px);
	}

	.tech-logo svg {
		width: 40px;
		height: 40px;
		color: var(--text-secondary);
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		position: relative;
		z-index: 2;
		stroke-width: 1;
	}

	.tech-logo:hover svg {
		color: var(--neon-green);
		filter: drop-shadow(0 0 12px rgba(0, 212, 255, 0.5));
		stroke-width: 1.2;
	}


	.tech-logo span {
		color: var(--text-secondary);
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.025em;
		text-transform: uppercase;
		transition: color 0.3s ease;
		z-index: 2;
		position: relative;
	}

	.tech-logo:hover span {
		color: var(--text-primary);
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
		box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);
	}

	.cta-primary:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-neon), 0 8px 40px rgba(0, 212, 255, 0.4);
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

	/* Website Samples */
	.website-samples {
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

	.samples-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 3rem;
		max-width: 1400px;
		margin: 0 auto;
	}

	.sample-item {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	:global(.sample-browser) {
		width: 100%;
		height: 300px;
	}

	.sample-content {
		width: 100%;
		height: 100%;
		overflow: hidden;
		font-family: 'Inter', system-ui, sans-serif;
	}

	/* Influencer Site */
	.influencer-site {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		padding: 2rem;
	}

	.influencer-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
	}

	.profile-section {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.profile-pic {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: linear-gradient(45deg, #ff6b6b, #ffd93d);
		border: 3px solid white;
	}

	.profile-info h1 {
		font-size: 1.5rem;
		margin: 0 0 0.25rem;
		font-weight: 700;
	}

	.profile-info p {
		margin: 0 0 0.5rem;
		opacity: 0.9;
		font-size: 0.9rem;
	}

	.stats {
		display: flex;
		gap: 0.5rem;
		font-size: 0.8rem;
		opacity: 0.8;
	}

	.collaborate-btn {
		background: white;
		color: #667eea;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 25px;
		font-weight: 600;
		font-size: 0.9rem;
	}

	.content-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.content-card {
		background: rgba(255, 255, 255, 0.2);
		border-radius: 12px;
		height: 80px;
		backdrop-filter: blur(10px);
	}

	/* Restaurant Site */
	.restaurant-site {
		background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), 
		            linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
		color: white;
		padding: 2rem;
	}

	.restaurant-hero {
		text-align: center;
		margin-bottom: 2rem;
	}

	.restaurant-hero h1 {
		font-size: 2rem;
		margin: 0 0 0.5rem;
		font-weight: 700;
	}

	.restaurant-hero p {
		margin: 0 0 1.5rem;
		opacity: 0.9;
	}

	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
	}

	.order-btn, .reserve-btn {
		padding: 0.75rem 1.5rem;
		border: none;
		border-radius: 8px;
		font-weight: 600;
		font-size: 0.9rem;
	}

	.order-btn {
		background: #ff6b6b;
		color: white;
	}

	.reserve-btn {
		background: rgba(255, 255, 255, 0.2);
		color: white;
		backdrop-filter: blur(10px);
	}

	.menu-preview {
		display: flex;
		gap: 1rem;
	}

	.menu-item {
		flex: 1;
		height: 60px;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 8px;
		backdrop-filter: blur(10px);
	}

	/* Consulting Site */
	.consulting-site {
		background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
		color: white;
		padding: 2rem;
	}

	.consulting-header {
		text-align: center;
		margin-bottom: 2rem;
	}

	.consulting-header h1 {
		font-size: 1.8rem;
		margin: 0 0 0.5rem;
		font-weight: 700;
	}

	.consulting-header p {
		margin: 0 0 1.5rem;
		opacity: 0.9;
	}

	.contact-btn {
		background: #4CAF50;
		color: white;
		border: none;
		padding: 0.75rem 2rem;
		border-radius: 8px;
		font-weight: 600;
		font-size: 0.9rem;
	}

	.services-preview {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}

	.service-box {
		height: 80px;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		backdrop-filter: blur(10px);
	}

	.sample-info {
		text-align: center;
	}

	.sample-info h3 {
		color: var(--text-primary);
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0 0 0.5rem;
	}

	.sample-info p {
		color: var(--text-secondary);
		margin: 0;
		line-height: 1.5;
	}

	/* Portfolio Section */
	.portfolio {
		padding: 8rem 0;
	}

	.category-filter {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 3rem;
		flex-wrap: wrap;
	}

	.filter-button {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		color: var(--text-secondary);
		padding: 0.75rem 1.5rem;
		border-radius: 50px;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		backdrop-filter: blur(20px);
		font-weight: 500;
		font-size: 0.9375rem;
	}

	.filter-button:hover,
	.filter-button.active {
		color: var(--neon-green);
		border-color: var(--neon-green);
		background: rgba(0, 255, 136, 0.1);
	}

	.portfolio-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
		gap: 2.5rem;
	}

	.portfolio-card {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 20px;
		overflow: hidden;
		backdrop-filter: blur(20px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.portfolio-card:hover {
		transform: translateY(-4px);
		border-color: var(--neon-green);
		box-shadow: var(--shadow-medium);
	}

	.card-image {
		position: relative;
		height: 240px;
		overflow: hidden;
	}

	.image-placeholder {
		width: 100%;
		height: 100%;
		background: linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary));
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 1rem;
	}

	.placeholder-icon {
		font-size: 3rem;
		opacity: 0.6;
	}

	.placeholder-text {
		color: var(--text-secondary);
		font-weight: 600;
		font-size: 1.125rem;
	}

	.card-overlay {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.portfolio-card:hover .card-overlay {
		opacity: 1;
	}

	.preview-button {
		background: var(--neon-green);
		color: var(--bg-primary);
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.preview-button:hover {
		transform: scale(1.05);
	}

	.card-content {
		padding: 2rem;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.card-category {
		color: var(--neon-green);
		font-size: 0.875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.card-status {
		background: rgba(0, 255, 136, 0.2);
		color: var(--neon-green);
		padding: 0.25rem 0.75rem;
		border-radius: 50px;
		font-size: 0.75rem;
		font-weight: 600;
	}

	.card-content h3 {
		color: var(--text-primary);
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0 0 1rem;
	}

	.card-content p {
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0 0 1.5rem;
	}

	.card-features {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
		flex-wrap: wrap;
	}

	.feature-tag {
		background: var(--bg-tertiary);
		color: var(--text-secondary);
		padding: 0.375rem 0.75rem;
		border-radius: 6px;
		font-size: 0.75rem;
		font-weight: 500;
	}

	.card-tech {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.tech-tag {
		background: rgba(0, 255, 136, 0.1);
		color: var(--neon-green);
		border: 1px solid rgba(0, 255, 136, 0.3);
		padding: 0.375rem 0.75rem;
		border-radius: 6px;
		font-size: 0.75rem;
		font-weight: 500;
	}

	/* Process Section */
	.process {
		padding: 8rem 0;
		background: var(--bg-secondary);
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

	.cta-note {
		color: var(--text-muted);
		font-size: 0.9375rem;
	}

	/* Demo Modals */
	.modal-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		backdrop-filter: blur(10px);
	}

	.modal-content {
		background: var(--bg-tertiary);
		border: 1px solid var(--border-medium);
		border-radius: 20px;
		padding: 2rem;
		max-width: 500px;
		width: 90%;
		max-height: 80vh;
		overflow-y: auto;
		position: relative;
	}

	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
	}

	.modal-header h3 {
		color: var(--text-primary);
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0;
	}

	.modal-close {
		background: none;
		border: none;
		color: var(--text-secondary);
		font-size: 2rem;
		cursor: pointer;
		padding: 0;
		width: 2rem;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.modal-close:hover {
		color: var(--neon-green);
	}

	/* Form Demo */
	.demo-form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.form-group label {
		color: var(--text-primary);
		font-weight: 500;
		font-size: 0.9375rem;
	}

	.form-group input,
	.form-group textarea {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 12px;
		padding: 1rem;
		color: var(--text-primary);
		font-size: 1rem;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.form-group input:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: var(--neon-green);
		box-shadow: 0 0 0 3px rgba(0, 255, 136, 0.1);
	}

	.form-group textarea {
		min-height: 100px;
		resize: vertical;
	}

	.submit-button {
		background: var(--neon-green);
		color: var(--bg-primary);
		border: none;
		padding: 1rem 2rem;
		border-radius: 12px;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.submit-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgba(0, 255, 136, 0.4);
	}

	.success-message {
		text-align: center;
		padding: 2rem 0;
	}

	.success-icon {
		font-size: 4rem;
		margin-bottom: 1rem;
	}

	.success-message h4 {
		color: var(--text-primary);
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0 0 1rem;
	}

	.success-message p {
		color: var(--text-secondary);
		margin: 0;
		line-height: 1.6;
	}

	/* 3D Demo */
	.threejs-demo {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		color: var(--text-primary);
		text-align: center;
	}

	.demo-cube {
		width: 120px;
		height: 120px;
		position: relative;
		transform-style: preserve-3d;
		animation: rotateCube 4s infinite linear;
	}

	.cube-face {
		position: absolute;
		width: 120px;
		height: 120px;
		background: linear-gradient(135deg, var(--neon-green), var(--neon-green-dark));
		border: 2px solid var(--text-primary);
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 1rem;
		color: var(--bg-primary);
	}

	.cube-face.front { transform: rotateY(0deg) translateZ(60px); }
	.cube-face.back { transform: rotateY(180deg) translateZ(60px); }
	.cube-face.right { transform: rotateY(90deg) translateZ(60px); }
	.cube-face.left { transform: rotateY(-90deg) translateZ(60px); }
	.cube-face.top { transform: rotateX(90deg) translateZ(60px); }
	.cube-face.bottom { transform: rotateX(-90deg) translateZ(60px); }

	@keyframes rotateCube {
		0% { transform: rotateX(0deg) rotateY(0deg); }
		100% { transform: rotateX(360deg) rotateY(360deg); }
	}

	.demo-text h3 {
		font-size: 2rem;
		font-weight: 700;
		margin: 0 0 1rem;
		color: var(--neon-green);
	}

	.demo-text p {
		font-size: 1.125rem;
		color: var(--text-secondary);
		margin: 0;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.container {
			padding: 0 1.5rem;
		}

		.ripple-section {
			height: 400px;
			margin-bottom: 3rem;
		}


		.company-name,
		:global(.company-name) {
			font-size: 4.5rem;
			min-height: 5rem;
			letter-spacing: 0.1em;
			word-spacing: 0.2em;
		}

		.company-tagline {
			font-size: 1.125rem;
		}

		.shadow-text-display {
			font-size: clamp(2rem, 6vw, 3rem);
		}

		.services-section {
			grid-template-columns: 1fr;
			gap: 1.5rem;
			margin: 2rem 0;
		}

		.service-card {
			padding: 1.25rem;
		}

		.tech-logos {
			gap: 2rem;
			padding: 1.5rem 0;
		}

		.tech-logo {
			padding: 0.75rem;
		}

		.tech-logo svg {
			width: 36px;
			height: 36px;
		}

		.tech-logo span {
			font-size: 0.75rem;
		}

		.company-tagline {
			font-size: 1rem;
		}

		.hero {
			padding: 6rem 0 4rem;
		}

		.demo-bar {
			flex-direction: column;
			align-items: center;
		}

		.hero-actions {
			flex-direction: column;
			align-items: center;
		}

		.category-filter {
			justify-content: flex-start;
			overflow-x: auto;
			padding-bottom: 1rem;
		}

		.portfolio-grid {
			grid-template-columns: 1fr;
		}

		.process-grid,
		.samples-grid {
			grid-template-columns: 1fr;
		}

		.samples-grid {
			gap: 2rem;
		}

		:global(.sample-browser) {
			height: 250px;
		}

		.website-samples,
		.portfolio,
		.process,
		.final-cta {
			padding: 6rem 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none !important;
			animation: none !important;
		}
	}
</style>