<script lang="ts">
	import { onMount } from 'svelte';
	import { Ripple, InteractiveHoverButton, MorphingText, LineShadowText, Safari } from '$lib/components/magicui';
	import Meteors from '$lib/components/magicui/meteors.svelte';
	
	let showWhatsAppDemo = $state(false);
	let showFormDemo = $state(false);
	let show3DDemo = $state(false);
	let formData = $state({ name: '', email: '', message: '' });
	let formSubmitted = $state(false);
	
	// Toggle for Basic vs Basic Pro
	let activePackage = $state('basic');
	
	function switchPackage(packageType: 'basic' | 'basicpro') {
		activePackage = packageType;
	}

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
		{ name: "SvelteKit", description: "Modern web framework for lightning-fast websites", icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
		{ name: "Three.js", description: "3D graphics and animations that captivate users", icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 17L12 12L2 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
		{ name: "WhatsApp API", description: "Direct customer communication through WhatsApp", icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
		{ name: "Stripe", description: "Secure payment processing and subscriptions", icon: `<svg viewBox="0 0 24 24" fill="none"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><line x1="1" y1="10" x2="23" y2="10" stroke="currentColor" stroke-width="2"/></svg>` },
		{ name: "Supabase", description: "Real-time database and authentication", icon: `<svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" stroke-width="2"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="currentColor" stroke-width="2"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="currentColor" stroke-width="2"/></svg>` },
		{ name: "Tailwind CSS", description: "Beautiful, responsive design systems", icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M7 7h10v10M7 17L17 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>` },
		{ name: "Magic UI", description: "Premium component libraries", icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 18h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 22h4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
		{ name: "Cloudflare", description: "Global CDN and edge computing", icon: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="2"/><path d="m12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="2"/></svg>` }
	];

	let selectedCategory = $state("All");
	let categories = ["All", "Food & Beverage", "Software", "E-commerce", "Professional Services", "Creative", "Local Business"];

	// Morphing text for company name
	let companyTexts = ["असंख्य", "ASAṂKHYA"];

	let filteredPortfolio = $derived(selectedCategory === "All" 
		? portfolioItems 
		: portfolioItems.filter(item => item.category === selectedCategory));
</script>

<svelte:head>
	<title>Asamkhya - AI-Powered Website Development</title>
	<meta name="description" content="Premium websites with intelligent automation. We build AI-enhanced digital experiences that drive business results." />
</svelte:head>

<div class="page">

	<!-- Core Message Section -->
	<section class="core-message">
		<div class="container">
			<div class="message-header">
				<div class="core-proposition">
					<div class="hero-line-1">
						<span class="main-question">Cheese sandwich? ... cool.</span>
					</div>
					<div class="hero-line-2">
						<span class="main-answer">Michelin Star grilled cheese? Oh Yeah!!</span>
					</div>
					<p class="core-subtitle">That's us with websites.</p>
				</div>
				
			</div>
		</div>
	</section>

	<!-- What's Basic Look Like Section -->
	<section class="basic-showcase">
		<div class="container">
			<div class="section-header">
				<div class="fun-badge">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M12 2L2 7l10 5 10-5-10-5z"/>
						<path d="M2 17l10 5 10-5"/>
						<path d="M2 12l10 5 10-5"/>
					</svg>
					<span>{activePackage === 'basic' ? 'OUR "BEST IN BASIC" PACKAGE' : 'OUR "BASIC PRO" PACKAGE'}</span>
				</div>
				<h2 class="section-title">What Does Basic Even Mean?</h2>
				
				<!-- Package Toggle -->
				<div class="package-toggle">
					<button 
						class="toggle-btn" 
						class:active={activePackage === 'basic'}
						onclick={() => switchPackage('basic')}
					>
						BASIC
					</button>
					<button 
						class="toggle-btn" 
						class:active={activePackage === 'basicpro'}
						onclick={() => switchPackage('basicpro')}
					>
						BASIC PRO
					</button>
				</div>
				
				<!-- Basic Pro Description -->
				{#if activePackage === 'basicpro'}
					<div class="package-description">
						<p class="tech-intro">(+Includes Everything in Basic)</p>
					</div>
				{/if}
			</div>
			
			<!-- Basic Package (4 cards) -->
			{#if activePackage === 'basic'}
				<div class="feature-showcase basic-layout">
					<!-- Premium Design -->
					<div class="fun-card card-1">
						<div class="card-icon">
							<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
								<circle cx="12" cy="12" r="2"/>
								<path d="M8 8l8 8"/>
								<path d="M16 8l-8 8"/>
							</svg>
						</div>
						<h3>Premium Design & UX</h3>
						<div class="feature-items">
							<div class="feature-item">
								<span class="item-bullet">→</span>
								<span>Premium UI Design</span>
							</div>
							<div class="feature-item">
								<span class="item-bullet">→</span>
								<span>Smooth Animations</span>
							</div>
							<div class="feature-item">
								<span class="item-bullet">→</span>
								<span>Mobile Optimization</span>
							</div>
							<div class="feature-item">
								<span class="item-bullet">→</span>
								<span>Fast Loading Speeds</span>
							</div>
						</div>
					</div>


					<!-- Security & Infrastructure -->
					<div class="fun-card card-6">
						<div class="card-icon">
							<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
								<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
								<path d="M9 12l2 2 4-4"/>
								<circle cx="12" cy="10" r="1" fill="currentColor"/>
							</svg>
						</div>
						<h3>Security & Infrastructure</h3>
						<div class="feature-items">
							<div class="feature-item">
								<span class="item-bullet">→</span>
								<span>Advanced Security Protection</span>
							</div>
							<div class="feature-item">
								<span class="item-bullet">→</span>
								<span>SSL Certificates & Encryption</span>
							</div>
							<div class="feature-item">
								<span class="item-bullet">→</span>
								<span>Scalable Infrastructure</span>
							</div>
							<div class="feature-item">
								<span class="item-bullet">→</span>
								<span>Automated Backup Systems</span>
							</div>
						</div>
					</div>

					<!-- Content Management -->
					<div class="fun-card card-new">
						<div class="card-icon">
							<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
								<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
								<polyline points="14,2 14,8 20,8"/>
								<line x1="16" y1="13" x2="8" y2="13"/>
								<line x1="16" y1="17" x2="8" y2="17"/>
								<polyline points="10,9 9,9 8,9"/>
							</svg>
						</div>
						<h3>Content Management</h3>
						<div class="feature-items">
							<div class="feature-item">
								<span class="item-bullet">→</span>
								<span>Easy-To-Update Content Structure</span>
							</div>
							<div class="feature-item">
								<span class="item-bullet">→</span>
								<span>Basic Contact Forms</span>
							</div>
							<div class="feature-item">
								<span class="item-bullet">→</span>
								<span>Professional Email Setup</span>
							</div>
							<div class="feature-item">
								<span class="item-bullet">→</span>
								<span>Social Media Integration</span>
							</div>
						</div>
					</div>
				</div>
			{/if}

			<!-- Basic Pro Package (Everything in Basic + More) -->
			{#if activePackage === 'basicpro'}
				<div class="feature-showcase basicpro-grid">
					<!-- Smart Communication -->
						<div class="fun-card card-3">
							<div class="card-icon">
								<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
									<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
									<rect x="2" y="9" width="4" height="12"/>
									<circle cx="4" cy="4" r="2"/>
								</svg>
							</div>
							<h3>Smart Communication</h3>
							<div class="feature-items">
								<div class="feature-item">
									<span class="item-bullet">→</span>
									<span>WhatsApp Business API</span>
								</div>
								<div class="feature-item">
									<span class="item-bullet">→</span>
									<span>One-Click Contact Buttons</span>
								</div>
								<div class="feature-item">
									<span class="item-bullet">→</span>
									<span>Advanced Contact Forms</span>
								</div>
								<div class="feature-item">
									<span class="item-bullet">→</span>
									<span>Live Chat Integration</span>
								</div>
							</div>
						</div>

						<!-- Marketing Automation -->
						<div class="fun-card card-4">
							<div class="card-icon">
								<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
									<circle cx="12" cy="12" r="3"/>
									<path d="M12 1v6m0 6v6"/>
									<path d="M21 12h-6m-6 0H3"/>
									<circle cx="12" cy="12" r="1" fill="currentColor"/>
								</svg>
							</div>
							<h3>Marketing Automation</h3>
							<div class="feature-items">
								<div class="feature-item">
									<span class="item-bullet">→</span>
									<span>Email Marketing Platform</span>
								</div>
								<div class="feature-item">
									<span class="item-bullet">→</span>
									<span>Automated Email Sequences</span>
								</div>
								<div class="feature-item">
									<span class="item-bullet">→</span>
									<span>Social Media Auto-Posting</span>
								</div>
								<div class="feature-item">
									<span class="item-bullet">→</span>
									<span>Review Request Automation</span>
								</div>
							</div>
						</div>

						<!-- Business Intelligence -->
						<div class="fun-card card-2">
							<div class="card-icon">
								<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
									<path d="M3 3v18h18"/>
									<path d="M18 17V9"/>
									<path d="M13 17V5"/>
									<path d="M8 17v-3"/>
									<circle cx="13" cy="5" r="1" fill="currentColor"/>
								</svg>
							</div>
							<h3>Business Intelligence</h3>
							<div class="feature-items">
								<div class="feature-item">
									<span class="item-bullet">→</span>
									<span>Advanced Analytics Dashboard</span>
								</div>
								<div class="feature-item">
									<span class="item-bullet">→</span>
									<span>Conversion Tracking Setup</span>
								</div>
								<div class="feature-item">
									<span class="item-bullet">→</span>
									<span>Lead Source Attribution</span>
								</div>
								<div class="feature-item">
									<span class="item-bullet">→</span>
									<span>Performance Reports</span>
								</div>
							</div>
						</div>

						<!-- Advanced Business Tools -->
						<div class="fun-card card-new">
							<div class="card-icon">
								<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
									<circle cx="8" cy="21" r="1"/>
									<circle cx="19" cy="21" r="1"/>
									<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78"/>
									<rect x="2" y="6" width="20" height="12" rx="2"/>
								</svg>
							</div>
							<h3>Advanced Business Tools</h3>
							<div class="feature-items">
								<div class="feature-item">
									<span class="item-bullet">→</span>
									<span>Payment Gateway Integration</span>
								</div>
								<div class="feature-item">
									<span class="item-bullet">→</span>
									<span>CRM Integration Workflows</span>
								</div>
								<div class="feature-item">
									<span class="item-bullet">→</span>
									<span>Online Booking System</span>
								</div>
								<div class="feature-item">
									<span class="item-bullet">→</span>
									<span>Customer Onboarding Tools</span>
								</div>
							</div>
						</div>
				</div>
			{/if}
			
			<div class="basic-punchline">
				<p class="punchline-text">Basic ingredients. <span class="highlight">Extraordinary results.</span></p>
			</div>
		</div>
	</section>

	<!-- Who We Help Section -->
	<section class="who-we-help">
		<div class="container">
			<div class="section-header">
				<div class="section-badge">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
						<circle cx="9" cy="7" r="4"/>
						<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
						<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
					</svg>
					<span>Who We Help</span>
				</div>
				<h2 class="section-title">For Smart Business Owners</h2>
			</div>
			
			<div class="help-grid">
				<div class="help-card">
					<div class="help-icon">
						<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M3 21h18"/>
							<path d="M5 21V7l8-4v18"/>
							<path d="M19 21V11l-6-4"/>
						</svg>
					</div>
					<h3>Small Businesses</h3>
					<p>Websites That Just Work</p>
				</div>
				<div class="help-card">
					<div class="help-icon">
						<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
							<line x1="8" y1="21" x2="16" y2="21"/>
							<line x1="12" y1="17" x2="12" y2="21"/>
						</svg>
					</div>
					<h3>Professionals</h3>
					<p>Clean. Credible. Converting.</p>
				</div>
				<div class="help-card">
					<div class="help-icon">
						<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M3 12h18l-9-9"/>
							<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7"/>
						</svg>
					</div>
					<h3>Restaurants</h3>
					<p>Menu. Maps. WhatsApp Orders.</p>
				</div>
				<div class="help-card">
					<div class="help-icon">
						<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 2.98L7 14.87 2 9l6.91-1.26L12 2z"/>
						</svg>
					</div>
					<h3>New Startups</h3>
					<p>Launch Like You've Been Here Forever</p>
				</div>
				<div class="help-card">
					<div class="help-icon">
						<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
						</svg>
					</div>
					<h3>Local Services</h3>
					<p>Get Found. Get Calls. Grow.</p>
				</div>
				<div class="help-card">
					<div class="help-icon">
						<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<circle cx="12" cy="12" r="10"/>
							<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
							<line x1="12" y1="17" x2="12.01" y2="17"/>
						</svg>
					</div>
					<h3>Complexity Refugees</h3>
					<p>No Apps. No Logins. Just Websites.</p>
				</div>
			</div>
		</div>
	</section>



	<!-- CTA Section -->
	<section class="final-cta">
		<Meteors number={30} />
		<div class="container">
			<div class="cta-content">
				<h2>What would you like to build?</h2>
				<div class="cta-actions">
					<InteractiveHoverButton href="/asamkhya/contact" className="large">
						<span>Leave A Voice Note</span>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M8 0L8 14M8 14L14 8M8 14L2 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</InteractiveHoverButton>
				</div>
				<div class="cta-note">
					<span>Free Consultation • Intelligent Automation</span>
				</div>
			</div>
		</div>
	</section>

</div>

<!-- Demo Modals -->
{#if showFormDemo}
	<div class="modal-overlay" onclick={() => showFormDemo = false}>
		<div class="modal-content" onclick={(e) => e.stopPropagation()}>
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
					<div class="success-icon">
					<svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="22,4 12,14.01 9,11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</div>
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
		padding: 1.5rem 1.25rem;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 12px;
		backdrop-filter: blur(40px);
		transition: all 0.2s ease-out;
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
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 8px;
		height: 80px;
		backdrop-filter: blur(40px);
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
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 12px;
		overflow: hidden;
		backdrop-filter: blur(40px);
		transition: all 0.2s ease-out;
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
		position: relative;
		overflow: hidden;
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
	@media (max-width: 1024px) {
		.basic-layout {
			grid-template-columns: repeat(2, 1fr);
			gap: 1.5rem;
		}
		
		.basicpro-cards-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 1.5rem;
		}
	}

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
	/* ===== NEW SECTIONS STYLES ===== */
	
	/* Section Badge - Consistent across all new sections */
	.section-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 50px;
		margin-bottom: 2rem;
		backdrop-filter: blur(20px);
		color: var(--neon-green);
		font-size: 0.875rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.section-badge svg {
		color: var(--neon-green);
	}

	/* Typography Hierarchy */
	.section-title {
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 1.5rem;
		letter-spacing: -0.02em;
		line-height: 1.1;
		text-align: center;
	}

	.sub-title {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--neon-green);
		margin: 0 0 1rem;
		text-align: center;
	}

	.section-description {
		font-size: 1.1rem;
		color: var(--text-secondary);
		line-height: 1.6;
		max-width: 600px;
		margin: 0 auto 3rem;
		text-align: center;
	}

	.lead-text {
		font-size: 1.25rem;
		color: var(--text-secondary);
		line-height: 1.6;
		margin-bottom: 1rem;
		text-align: center;
	}

	.highlight-text {
		font-size: 1.1rem;
		color: var(--text-primary);
		font-weight: 600;
		margin-bottom: 1rem;
		text-align: center;
	}

	.tagline-text {
		font-size: 1rem;
		color: var(--neon-green);
		font-style: italic;
		margin-bottom: 0;
		text-align: center;
	}

	/* Core Message Section */
	.core-message {
		padding: 8rem 0;
		position: relative;
		background: var(--bg-primary);
		text-align: center;
	}

	.core-message::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 100%;
		background: 
			radial-gradient(circle at 30% 20%, rgba(0, 212, 255, 0.06) 0%, transparent 50%),
			radial-gradient(circle at 70% 80%, rgba(0, 212, 255, 0.03) 0%, transparent 50%);
		pointer-events: none;
	}

	.message-header {
		position: relative;
		z-index: 1;
		max-width: 800px;
		margin: 0 auto;
	}

	.website-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem 2rem;
		background: var(--bg-glass);
		border: 2px solid var(--neon-green);
		border-radius: 50px;
		margin-bottom: 3rem;
		backdrop-filter: blur(20px);
		color: var(--neon-green);
		font-size: 1rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		box-shadow: 0 0 30px rgba(0, 212, 255, 0.2);
	}

	.website-badge svg {
		color: var(--neon-green);
	}

	.core-proposition {
		margin-bottom: 4rem;
	}

	.hero-line-1,
	.hero-line-2 {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.main-question {
		font-size: clamp(3rem, 6vw, 5rem);
		font-weight: 300;
		color: var(--text-secondary);
		margin: 0 0 1rem;
		letter-spacing: -0.02em;
		line-height: 1.2;
		text-align: center;
		white-space: nowrap;
		display: inline-block;
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
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.core-subtitle {
		font-size: 1.6rem;
		color: var(--text-primary);
		margin-top: 2.5rem;
		font-weight: 600;
		line-height: 1.4;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		position: relative;
		display: inline-block;
	}

	.core-subtitle::after {
		content: '';
		position: absolute;
		bottom: -12px;
		left: 50%;
		transform: translateX(-50%);
		width: 120%;
		height: 2px;
		background: linear-gradient(90deg, transparent, var(--neon-green), transparent);
		border-radius: 1px;
		opacity: 0.6;
	}


	.consultation-text {
		color: rgba(255, 255, 255, 0.7);
		font-size: 0.95rem;
		font-weight: 500;
		text-align: center;
		letter-spacing: 0.02em;
	}

	/* Who We Help Section */
	.who-we-help {
		padding: 6rem 0;
		background: var(--bg-secondary);
		position: relative;
	}

	.who-we-help::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 100%;
		background: 
			radial-gradient(circle at 70% 30%, rgba(0, 212, 255, 0.03) 0%, transparent 50%);
		pointer-events: none;
	}

	.section-header {
		text-align: center;
		margin-bottom: 4rem;
		position: relative;
		z-index: 1;
	}

	.help-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		position: relative;
		z-index: 1;
		max-width: 1000px;
		margin: 0 auto;
	}

	.help-card {
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 12px;
		padding: 1.5rem 1.25rem;
		text-align: center;
		backdrop-filter: blur(40px);
		transition: all 0.2s ease-out;
		position: relative;
		overflow: hidden;
		flex: 1;
		max-width: 280px;
		box-shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
	}

	.help-card:hover {
		border-color: rgba(0, 212, 255, 0.4);
		box-shadow: 0 8px 32px rgba(0, 212, 255, 0.15);
		transform: translateY(-4px);
	}

	.help-icon {
		width: 60px;
		height: 60px;
		margin: 0 auto 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
	}

	.help-icon svg {
		width: 32px;
		height: 32px;
		color: var(--neon-green);
		transition: all 0.3s ease;
	}

	.help-card:hover .help-icon {
		transform: scale(1.05);
	}

	.help-card:hover .help-icon svg {
		color: var(--neon-green-light);
	}

	.help-card h3 {
		font-size: 1.4rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 1rem;
		letter-spacing: -0.02em;
	}

	.help-card p {
		color: var(--text-secondary);
		line-height: 1.5;
		margin: 0;
		font-size: 1rem;
		font-weight: 500;
	}

	/* Art of Basic Section */
	.art-of-basic {
		padding: 6rem 0;
		background: var(--bg-primary);
		position: relative;
	}

	.art-of-basic::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 100%;
		background: 
			radial-gradient(circle at 20% 70%, rgba(0, 212, 255, 0.04) 0%, transparent 50%),
			radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.02) 0%, transparent 50%);
		pointer-events: none;
	}

	.art-header {
		text-align: center;
		margin-bottom: 4rem;
		position: relative;
		z-index: 1;
	}

	.art-content {
		position: relative;
		z-index: 1;
	}

	.art-intro {
		margin-bottom: 3rem;
	}

	.benefits-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 2rem;
		margin: 3rem 0;
		max-width: 1000px;
		margin-left: auto;
		margin-right: auto;
	}

	.benefit-item {
		text-align: center;
		padding: 2rem 1.5rem;
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 16px;
		backdrop-filter: blur(20px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.benefit-item:hover {
		transform: translateY(-4px);
		border-color: var(--neon-green);
		box-shadow: var(--shadow-subtle);
	}

	.benefit-metric {
		font-size: 2.5rem;
		font-weight: 800;
		color: var(--neon-green);
		margin-bottom: 1rem;
		display: block;
	}

	.benefit-icon {
		width: 48px;
		height: 48px;
		margin: 0 auto 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 212, 255, 0.1);
		border: 1px solid rgba(0, 212, 255, 0.2);
		border-radius: 12px;
		backdrop-filter: blur(10px);
	}

	.benefit-icon svg {
		color: var(--neon-green);
	}

	.benefit-text {
		color: var(--text-secondary);
		font-size: 0.95rem;
		line-height: 1.4;
		margin: 0;
	}

	.art-conclusion {
		text-align: center;
		margin-top: 4rem;
		padding: 2rem;
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 16px;
		backdrop-filter: blur(20px);
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 4rem;
	}

	.philosophy {
		font-size: 1.2rem;
		font-style: italic;
		color: var(--neon-green);
		font-weight: 500;
		line-height: 1.5;
		margin: 0;
	}

	/* Basic Showcase Section - New Fun Design */
	.basic-showcase {
		padding: 8rem 0;
		background: var(--bg-secondary);
		position: relative;
		overflow: hidden;
	}

	.basic-showcase::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: 
			radial-gradient(circle at 20% 30%, rgba(0, 255, 136, 0.08) 0%, transparent 50%),
			radial-gradient(circle at 80% 70%, rgba(0, 255, 136, 0.04) 0%, transparent 50%);
		pointer-events: none;
	}

	.basic-showcase .section-header {
		text-align: center;
		margin-bottom: 5rem;
		position: relative;
		z-index: 1;
	}

	.fun-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: rgba(0, 255, 136, 0.1);
		border: 1px solid rgba(0, 255, 136, 0.3);
		border-radius: 50px;
		padding: 0.75rem 1.5rem;
		margin-bottom: 2rem;
		color: var(--neon-green);
		font-size: 0.875rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.basic-showcase .section-title {
		font-size: clamp(2.5rem, 6vw, 4rem);
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 1.5rem;
		line-height: 1.1;
		background: linear-gradient(135deg, var(--text-primary) 0%, var(--neon-green-light) 50%, var(--neon-green) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.basic-showcase .section-subtitle {
		font-size: 1.5rem;
		color: var(--text-secondary);
		margin: 0;
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
		line-height: 1.4;
		font-weight: 400;
	}

	/* Package Toggle */
	.package-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		margin: 2rem 0;
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 50px;
		padding: 0.5rem;
		backdrop-filter: blur(20px);
		max-width: 300px;
		margin-left: auto;
		margin-right: auto;
	}

	.toggle-btn {
		background: transparent;
		border: none;
		color: var(--text-secondary);
		font-size: 0.9rem;
		font-weight: 600;
		padding: 0.75rem 1.5rem;
		border-radius: 50px;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.toggle-btn.active {
		background: var(--neon-green);
		color: var(--bg-primary);
		box-shadow: 0 4px 12px rgba(0, 255, 136, 0.3);
	}

	.toggle-btn:not(.active):hover {
		color: var(--text-primary);
		background: rgba(255, 255, 255, 0.05);
	}

	/* Basic Pro Header */
	.basicpro-header {
		text-align: center;
		margin-bottom: 3rem;
		padding: 2rem;
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 20px;
		backdrop-filter: blur(20px);
	}

	.basicpro-header h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 0.5rem;
	}

	.basicpro-header p {
		font-size: 1rem;
		color: var(--text-secondary);
		margin: 0;
	}

	/* Layout Variations */
	.basic-layout {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}

	.basicpro-layout {
		max-width: 1200px;
		margin: 0 auto;
	}
	
	.package-description {
		text-align: center;
		margin: 2rem 0 3rem;
	}
	
	.package-description p {
		color: var(--text-secondary);
		font-size: 1.1rem;
		margin: 0;
		font-weight: 500;
	}
	
	.basicpro-grid {
		display: grid !important;
		grid-template-columns: repeat(2, 1fr) !important;
		gap: 2rem;
		margin-bottom: 4rem;
		max-width: 1000px;
		margin-left: auto;
		margin-right: auto;
	}
	
	.basicpro-header {
		text-align: center;
		margin-bottom: 3rem;
	}
	
	.basicpro-header h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--neon-green);
		margin-bottom: 0.5rem;
	}
	
	.basicpro-header p {
		color: var(--text-secondary);
		font-size: 1.1rem;
		margin: 0;
	}
	
	.basicpro-cards-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
		margin-bottom: 4rem;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}

	/* Feature Showcase Layout */
	.feature-showcase {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 2rem;
		margin-bottom: 4rem;
		position: relative;
		z-index: 1;
		align-items: start;
	}

	.feature-column {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	/* Fun Cards */
	.fun-card {
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 12px;
		padding: 1.5rem 1.25rem;
		backdrop-filter: blur(40px);
		transition: all 0.2s ease-out;
		position: relative;
		overflow: hidden;
		text-align: left;
		max-width: 400px;
	}

	.fun-card:hover {
		transform: translateY(-8px) rotate(1deg);
		border-color: var(--neon-green);
		box-shadow: 0 12px 40px rgba(0, 255, 136, 0.2);
	}

	.card-1:hover { transform: translateY(-8px) rotate(-2deg); }
	.card-2:hover { transform: translateY(-8px) rotate(1deg); }
	.card-3:hover { transform: translateY(-8px) rotate(2deg); }
	.card-4:hover { transform: translateY(-8px) rotate(-1deg); }
	.card-5:hover { transform: translateY(-8px) rotate(1deg); }
	.card-6:hover { transform: translateY(-8px) rotate(-1.5deg); }

	.card-icon {
		width: 70px;
		height: 70px;
		margin-bottom: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 255, 136, 0.03) 100%);
		border: 1px solid rgba(0, 255, 136, 0.2);
		border-radius: 20px;
		color: var(--neon-green);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		position: relative;
	}

	.fun-card:hover .card-icon {
		background: linear-gradient(135deg, rgba(0, 255, 136, 0.2) 0%, rgba(0, 255, 136, 0.1) 100%);
		border-color: rgba(0, 255, 136, 0.4);
		transform: scale(1.05);
		box-shadow: 0 4px 16px rgba(0, 255, 136, 0.2);
	}

	.fun-card h3 {
		color: var(--text-primary);
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0 0 1.5rem;
		line-height: 1.2;
	}

	.feature-items {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.feature-item {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		color: var(--text-secondary);
		font-size: 0.95rem;
		line-height: 1.4;
	}

	.item-bullet {
		color: var(--neon-green);
		font-weight: 600;
		margin-top: 0.1rem;
		flex-shrink: 0;
	}


	/* Punchline Section */
	.basic-punchline {
		text-align: center;
		position: relative;
		z-index: 1;
		margin-top: 4rem;
	}

	.punchline-text {
		font-size: 2rem;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0 0 1rem;
		line-height: 1.2;
	}

	.highlight {
		background: linear-gradient(135deg, var(--neon-green) 0%, var(--neon-green-light) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		font-weight: 700;
	}

	.pricing-mention {
		margin: 2rem 0 1.5rem;
		text-align: center;
	}
	
	.starting-price {
		font-size: 1.25rem;
		color: var(--text-secondary);
		margin: 0;
		font-weight: 500;
	}
	
	.starting-price strong {
		color: var(--neon-green);
		font-size: 1.4rem;
		font-weight: 700;
	}

	.fun-disclaimer {
		margin-top: 1rem;
	}

	.fun-disclaimer small {
		color: var(--text-tertiary);
		font-size: 0.875rem;
		font-style: italic;
		opacity: 0.8;
	}

	/* AI-Powered Pricing Section */
	.ai-pricing {
		padding: 8rem 0;
		background: var(--bg-primary);
		position: relative;
	}

	.ai-pricing::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 100%;
		background: 
			radial-gradient(circle at 30% 20%, rgba(0, 212, 255, 0.08) 0%, transparent 50%),
			radial-gradient(circle at 70% 80%, rgba(0, 212, 255, 0.05) 0%, transparent 50%);
		pointer-events: none;
	}

	.pricing-showcase {
		max-width: 1000px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.pricing-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.price-title {
		font-size: clamp(4rem, 8vw, 6rem);
		font-weight: 900;
		color: var(--neon-green);
		margin: 1rem 0;
		letter-spacing: -0.03em;
		line-height: 1;
		text-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
	}

	.price-subtitle {
		font-size: 1.3rem;
		color: var(--text-secondary);
		margin: 0;
		font-weight: 500;
	}

	.features-grid {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 3rem;
		margin-bottom: 4rem;
	}

	.feature-category h3 {
		font-size: 1.5rem;
		color: var(--text-primary);
		margin: 0 0 2rem;
		font-weight: 700;
	}

	.ai-category h3 {
		color: var(--neon-green);
		position: relative;
	}

	.ai-category h3::after {
		content: '';
		position: absolute;
		bottom: -0.5rem;
		left: 0;
		width: 60px;
		height: 2px;
		background: var(--neon-green);
		border-radius: 1px;
	}

	.basic-features {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.feature-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 12px;
		backdrop-filter: blur(10px);
	}

	.feature-item svg {
		color: var(--neon-green);
		flex-shrink: 0;
	}

	.feature-item span {
		color: var(--text-secondary);
		font-size: 0.95rem;
		font-weight: 500;
	}

	.ai-features {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.ai-feature {
		display: flex;
		align-items: flex-start;
		gap: 1.5rem;
		padding: 2rem;
		background: linear-gradient(135deg, var(--bg-glass) 0%, rgba(0, 212, 255, 0.05) 100%);
		border: 1px solid rgba(0, 212, 255, 0.2);
		border-radius: 20px;
		backdrop-filter: blur(20px);
		transition: all 0.4s ease;
		position: relative;
		overflow: hidden;
	}

	.ai-feature::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(90deg, transparent, var(--neon-green), transparent);
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.ai-feature:hover {
		border-color: var(--neon-green);
		box-shadow: 0 10px 40px rgba(0, 212, 255, 0.15);
		transform: translateY(-2px);
	}

	.ai-feature:hover::before {
		opacity: 1;
	}

	.ai-icon {
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(0, 212, 255, 0.1) 100%);
		border: 2px solid rgba(0, 212, 255, 0.3);
		border-radius: 16px;
		flex-shrink: 0;
		transition: all 0.3s ease;
	}

	.ai-icon svg {
		color: var(--neon-green);
	}

	.ai-feature:hover .ai-icon {
		background: linear-gradient(135deg, rgba(0, 212, 255, 0.3) 0%, rgba(0, 212, 255, 0.15) 100%);
		border-color: var(--neon-green);
		transform: scale(1.1);
	}

	.ai-content h4 {
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 0.5rem;
		letter-spacing: -0.01em;
	}

	.ai-content p {
		color: var(--text-secondary);
		font-size: 0.95rem;
		line-height: 1.5;
		margin: 0;
	}

	.pricing-cta {
		text-align: center;
	}

	.cta-note {
		color: var(--text-secondary);
		font-size: 0.9rem;
		margin: 1rem 0 0;
		font-weight: 500;
	}

	/* Founder Section */
	.founder-section {
		padding: 8rem 0;
		background: var(--bg-primary);
		position: relative;
	}
	
	.founder-section::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 100%;
		background: 
			radial-gradient(circle at 30% 20%, rgba(0, 212, 255, 0.05) 0%, transparent 50%),
			radial-gradient(circle at 70% 80%, rgba(0, 212, 255, 0.03) 0%, transparent 50%);
		pointer-events: none;
	}

	.founder-content {
		position: relative;
		z-index: 1;
		max-width: 1200px;
		margin: 0 auto;
		text-align: center;
	}

	.founder-text h2 {
		font-size: clamp(2.8rem, 6vw, 4rem);
		color: var(--text-primary);
		margin-bottom: 2rem;
		font-weight: 700;
		letter-spacing: -0.02em;
		line-height: 1.1;
		line-height: 1.2;
	}

	.story-blocks {
		margin: 2rem 0;
	}

	.story-block {
		margin-bottom: 1.5rem;
		padding: 1.5rem;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 12px;
		backdrop-filter: blur(10px);
	}

	.story-block p {
		color: var(--text-light);
		line-height: 1.6;
		margin: 0;
	}

	.founder-cta {
		margin-top: 2rem;
	}

	.cta-note {
		color: var(--text-light);
		margin-bottom: 1rem;
		font-style: italic;
	}

	.vibe-coding-demo {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 16px;
		padding: 2rem;
		backdrop-filter: blur(20px);
	}

	.demo-header {
		text-align: center;
		margin-bottom: 2rem;
	}

	.demo-title {
		font-size: 1.3rem;
		color: var(--gold-primary);
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.demo-subtitle {
		color: var(--text-secondary);
		font-size: 0.9rem;
	}

	.demo-content {
		space-y: 1rem;
	}

	.code-line, .result-line {
		padding: 1rem;
		border-radius: 8px;
		margin-bottom: 1rem;
		font-family: 'Monaco', 'Menlo', monospace;
		font-size: 0.9rem;
	}

	.code-line {
		background: rgba(255, 255, 255, 0.05);
	}

	.code-line.ai {
		background: rgba(212, 175, 55, 0.1);
	}

	.result-line {
		background: rgba(16, 185, 129, 0.1);
		border: 1px solid rgba(16, 185, 129, 0.3);
	}

	.user, .claude, .result {
		font-weight: 600;
		color: var(--gold-primary);
	}

	/* Social Proof Section */
	.social-proof {
		padding: 8rem 0;
		background: var(--bg-primary);
		position: relative;
	}
	
	.social-proof::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 100%;
		background: 
			radial-gradient(circle at 30% 20%, rgba(0, 212, 255, 0.04) 0%, transparent 50%),
			radial-gradient(circle at 70% 80%, rgba(0, 212, 255, 0.02) 0%, transparent 50%);
		pointer-events: none;
	}

	.proof-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.proof-header h2 {
		font-size: clamp(2.2rem, 5vw, 3.2rem);
		color: var(--text-primary);
		margin-bottom: 1rem;
		font-weight: 600;
		letter-spacing: -0.02em;
		line-height: 1.2;
	}

	.honest-disclaimer {
		font-size: 1.1rem;
		color: var(--text-secondary);
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.6;
	}

	.proof-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin: 3rem 0;
	}

	.proof-card {
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 12px;
		padding: 1.5rem 1.25rem;
		backdrop-filter: blur(40px);
		transition: all 0.2s ease-out;
		height: 100%;
	}
	
	.proof-card:hover {
		border-color: var(--neon-green);
		box-shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
		transform: translateY(-2px);
	}

	.proof-header-card {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.proof-icon {
		width: 32px;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--neon-green);
		margin-bottom: 1rem;
	}
	
	.proof-icon svg {
		width: 24px;
		height: 24px;
	}

	.proof-header-card h3 {
		font-size: 1.3rem;
		color: var(--text-primary);
		margin: 0;
	}

	.proof-item, .skill-item, .supporter-item {
		margin-bottom: 1rem;
		padding: 0.75rem;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 8px;
	}

	.client-type, .skill-label {
		color: var(--text-secondary);
		font-size: 0.9rem;
	}

	.project-type, .skill-value {
		color: var(--text-primary);
		font-weight: 600;
		display: block;
		margin-top: 0.25rem;
	}

	.supporter-quote {
		color: var(--text-light);
		font-style: italic;
		display: block;
		margin-bottom: 0.5rem;
	}

	.supporter-credit {
		color: var(--text-secondary);
		font-size: 0.8rem;
	}

	.proof-note {
		color: var(--text-secondary);
		font-size: 0.9rem;
		text-align: center;
		margin-top: 1rem;
		font-style: italic;
	}

	.proof-commitment {
		margin-top: 3rem;
	}

	.commitment-content h3 {
		text-align: center;
		font-size: 1.8rem;
		color: var(--text-primary);
		margin-bottom: 2rem;
	}

	.commitment-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
	}

	.commitment-item {
		text-align: center;
		padding: 2rem;
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 16px;
		backdrop-filter: blur(20px);
		transition: all 0.3s ease;
		height: 100%;
	}
	
	.commitment-item:hover {
		border-color: var(--neon-green);
		box-shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
		transform: translateY(-2px);
	}

	.commitment-icon {
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--neon-green);
		margin-bottom: 1.5rem;
		background: rgba(0, 212, 255, 0.1);
		border-radius: 50%;
		border: 2px solid rgba(0, 212, 255, 0.2);
	}
	
	.commitment-icon svg {
		width: 24px;
		height: 24px;
	}

	/* FAQ Section */
	.faq-section {
		padding: 8rem 0;
		background: var(--bg-primary);
		position: relative;
	}
	
	.faq-section::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 100%;
		background: 
			radial-gradient(circle at 30% 20%, rgba(0, 212, 255, 0.03) 0%, transparent 50%),
			radial-gradient(circle at 70% 80%, rgba(0, 212, 255, 0.02) 0%, transparent 50%);
		pointer-events: none;
	}

	.faq-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.faq-header h2 {
		font-size: clamp(2.2rem, 5vw, 3.2rem);
		color: var(--text-primary);
		margin-bottom: 1rem;
		font-weight: 600;
		letter-spacing: -0.02em;
		line-height: 1.2;
	}

	.faq-intro {
		font-size: 1.1rem;
		color: var(--text-light);
		max-width: 600px;
		margin: 0 auto;
	}

	.faq-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 2rem;
		margin: 3rem 0;
	}

	.faq-item {
		background: var(--bg-glass);
		border: 1px solid var(--border-medium);
		border-radius: 16px;
		padding: 2rem;
		backdrop-filter: blur(20px);
		transition: all 0.3s ease;
	}
	
	.faq-item:hover {
		border-color: var(--neon-green);
		box-shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
		transform: translateY(-2px);
	}

	.faq-question {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.faq-icon {
		width: 32px;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--neon-green);
		margin-right: 1rem;
	}
	
	.faq-icon svg {
		width: 20px;
		height: 20px;
	}

	.faq-question h3 {
		font-size: 1.3rem;
		color: var(--text-primary);
		margin: 0;
		font-weight: 600;
	}

	.faq-answer {
		color: var(--text-light);
		line-height: 1.6;
	}

	.faq-answer p {
		margin-bottom: 1rem;
	}

	.faq-answer ul {
		margin-top: 1rem;
		padding-left: 1.5rem;
	}

	.faq-answer li {
		margin-bottom: 0.5rem;
		color: var(--text-light);
	}

	.faq-cta {
		text-align: center;
		margin-top: 3rem;
	}

	.cta-content h3 {
		font-size: 1.8rem;
		color: var(--gold-primary);
		margin-bottom: 1rem;
	}

	.cta-content p {
		color: var(--text-light);
		margin-bottom: 2rem;
	}

	/* Final CTA Section */
	.final-cta {
		padding: 4rem 0;
		background: var(--bg-subtle);
		border-top: 1px solid var(--border-medium);
	}

	.scarcity-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.scarcity-badge {
		display: inline-block;
		background: linear-gradient(45deg, #ef4444, #dc2626);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.9rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.scarcity-header h2 {
		font-size: 2.5rem;
		color: var(--text-primary);
		margin-bottom: 1rem;
	}

	.scarcity-text {
		font-size: 1.1rem;
		color: var(--text-secondary);
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.6;
	}

	.cta-benefits {
		max-width: 600px;
		margin: 3rem auto;
	}

	.benefit-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
	}

	.benefit-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		background: var(--bg-glass);
		border-radius: 8px;
		backdrop-filter: blur(10px);
	}

	.benefit-check {
		color: #10b981;
		font-weight: bold;
		font-size: 1.2rem;
	}

	.urgency-section {
		margin: 3rem 0;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.urgency-content {
		display: flex;
		align-items: center;
		gap: 2rem;
		padding: 2rem;
		background: var(--bg-glass);
		border-radius: 16px;
		backdrop-filter: blur(20px);
	}

	.urgency-icon {
		font-size: 3rem;
	}

	.urgency-text h3 {
		font-size: 1.3rem;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}

	.urgency-text p {
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
	}

	.cta-actions {
		text-align: center;
		margin: 3rem 0;
	}

	.primary-cta {
		margin-bottom: 2rem;
	}

	.cta-note {
		color: var(--text-secondary);
		font-size: 0.9rem;
		margin-top: 1rem;
	}

	.alternative-cta {
		padding-top: 1.5rem;
		border-top: 1px solid var(--border-medium);
	}

	.alternative-text {
		color: var(--text-secondary);
		margin-bottom: 1rem;
	}

	.social-proof-mini {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid var(--border-medium);
	}

	.social-icons {
		display: flex;
		justify-content: center;
		gap: 3rem;
	}

	.social-item {
		text-align: center;
	}

	.social-number {
		display: block;
		font-size: 1.8rem;
		font-weight: 800;
		color: var(--gold-primary);
		margin-bottom: 0.5rem;
	}

	.social-label {
		font-size: 0.9rem;
		color: var(--text-secondary);
	}

	/* Mobile Responsive Adjustments */
	@media (max-width: 768px) {
		.core-message {
			padding: 6rem 0;
		}
		

		.consultation-text {
			font-size: 0.85rem;
			padding: 0 1rem;
		}

		.website-badge {
			padding: 0.75rem 1.5rem;
			font-size: 0.9rem;
			margin-bottom: 2rem;
		}

		.main-question {
			font-size: clamp(2rem, 8vw, 4rem);
		}

		.main-answer {
			font-size: clamp(2.5rem, 9vw, 5rem);
		}


		.help-grid {
			grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
			gap: 1rem;
		}

		.help-card {
			padding: 2rem 1.5rem;
		}

		.help-icon {
			width: 64px;
			height: 64px;
			margin-bottom: 1.5rem;
		}

		.help-icon svg {
			width: 32px;
			height: 32px;
		}

		/* Basic Showcase Mobile */
		.basic-showcase {
			padding: 6rem 0;
		}

		.basic-showcase .section-title {
			font-size: clamp(2rem, 8vw, 3rem);
			margin-bottom: 1rem;
		}

		.basic-showcase .section-subtitle {
			font-size: 1.25rem;
			margin-bottom: 3rem;
		}

		.feature-showcase,
		.basic-layout,
		.basicpro-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		
		.basicpro-cards-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
		
		.basicpro-header h3 {
			font-size: 1.25rem;
		}
		
		.basicpro-header p {
			font-size: 1rem;
		}
		
		.starting-price {
			font-size: 1.1rem;
		}
		
		.starting-price strong {
			font-size: 1.25rem;
		}

		.package-toggle {
			max-width: 280px;
			margin: 1.5rem auto;
		}

		.toggle-btn {
			font-size: 0.8rem;
			padding: 0.625rem 1.25rem;
		}

		.basicpro-header {
			padding: 1.5rem;
			margin-bottom: 2rem;
		}

		.basicpro-header h3 {
			font-size: 1.25rem;
		}

		.basicpro-header p {
			font-size: 0.9rem;
		}

		.fun-card {
			max-width: 100%;
			padding: 1.5rem;
		}

		.card-icon {
			width: 60px;
			height: 60px;
		}

		.fun-card h3 {
			font-size: 1.25rem;
		}

		.feature-item {
			font-size: 0.875rem;
		}

		.punchline-text {
			font-size: 1.5rem;
		}

		.founder-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.founder-text h2 {
			font-size: 2rem;
		}

		.pricing-banner {
			flex-direction: column;
			gap: 1rem;
		}

		.price {
			font-size: 2rem;
		}

		.features-grid, .exclusions-grid, .clients-grid, .proof-grid, .faq-grid {
			grid-template-columns: 1fr;
		}

		.urgency-content {
			flex-direction: column;
			text-align: center;
			gap: 1rem;
		}

		.social-icons {
			flex-direction: column;
			gap: 1.5rem;
		}

		.commitment-grid {
			grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		}

		.benefit-list {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 480px) {
		.core-message {
			padding: 4rem 0;
		}

		.website-badge {
			padding: 0.5rem 1rem;
			font-size: 0.8rem;
			gap: 0.5rem;
		}

		.website-badge svg {
			width: 16px;
			height: 16px;
		}

		.main-question {
			font-size: clamp(1.8rem, 8vw, 3rem);
			white-space: normal;
		}

		.main-answer {
			font-size: clamp(2rem, 9vw, 4rem);
			white-space: normal;
		}
	}

	/* iPhone 15 and similar small screens */
	@media (max-width: 430px) {
		.container {
			padding: 0 1rem;
		}
		
		.main-question {
			font-size: clamp(1.4rem, 6vw, 2.2rem);
			line-height: 1.3;
			white-space: normal;
		}

		.main-answer {
			font-size: clamp(1.6rem, 7vw, 2.8rem);
			line-height: 1.2;
			white-space: normal;
		}
		
		.section-title {
			font-size: clamp(1.8rem, 7vw, 2.5rem);
		}
		
		.basic-showcase .section-title {
			font-size: clamp(1.4rem, 6vw, 2rem);
		}
		
		.price-title {
			font-size: clamp(2.5rem, 8vw, 3.5rem);
		}
		
		.cta-content h2 {
			font-size: clamp(1.8rem, 6vw, 2.5rem);
		}

		.core-subtitle {
			font-size: 1.2rem;
			margin-top: 1.5rem;
		}



		.help-grid {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.help-card {
			padding: 1.5rem;
		}

		.help-icon {
			width: 56px;
			height: 56px;
		}

		.help-icon svg {
			width: 28px;
			height: 28px;
		}

		/* Basic Showcase Small Mobile */
		.basic-showcase {
			padding: 4rem 0;
		}

		.basic-showcase .section-title {
			font-size: clamp(1.75rem, 8vw, 2.5rem);
		}

		.basic-showcase .section-subtitle {
			font-size: 1rem;
		}

		.feature-showcase {
			gap: 1.5rem;
		}

		.fun-card {
			padding: 1.25rem;
		}

		.card-icon {
			width: 50px;
			height: 50px;
		}

		.fun-card h3 {
			font-size: 1.125rem;
		}

		.feature-item {
			font-size: 0.8125rem;
		}

		.punchline-text {
			font-size: 1.25rem;
		}

		.founder-text h2,
		.help-header h2,
		.art-header h2,
		.pricing-header h2,
		.proof-header h2,
		.faq-header h2,
		.scarcity-header h2 {
			font-size: 1.8rem;
		}

		.story-block,
		.client-card,
		.proof-card,
		.faq-item {
			padding: 1.5rem;
		}

		.pricing-banner {
			padding: 1rem;
		}
	}


</style>