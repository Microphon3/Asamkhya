<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let isDark = $state(true);
	let mounted = $state(false);

	onMount(() => {
		mounted = true;
		if (browser) {
			// Force dark mode by default (original design)
			isDark = true;
			document.documentElement.classList.remove('light');
			console.log('Forced dark mode on mount');
			
			// Check for saved theme preference after setting dark as default
			const savedTheme = localStorage.getItem('theme');
			if (savedTheme === 'light') {
				isDark = false;
				document.documentElement.classList.add('light');
				console.log('Set to light mode from saved preference');
			}
			console.log('Initial isDark state:', isDark);
		}
	});

	function toggleTheme() {
		if (!browser) return;
		
		isDark = !isDark;
		
		if (isDark) {
			// DARK MODE - Force everything dark with !important
			localStorage.setItem('theme', 'dark');
			
			// Create dark mode stylesheet
			const darkStyles = `
				* { transition: all 0.3s ease !important; }
				body, html, .page { background: #0d1117 !important; color: #f0f6fc !important; }
				.hero { background: #0d1117 !important; color: #f0f6fc !important; }
				.service-card, .path-card { 
					background: rgba(33, 38, 45, 0.8) !important; 
					color: #f0f6fc !important; 
					border: 1px solid rgba(240, 246, 252, 0.15) !important; 
				}
				h1, h2, h3, h4, h5, h6 { color: #f0f6fc !important; }
				p, span, div { color: #8b949e !important; }
				.company-name { color: #00d4ff !important; }
				.neon-green, [style*="neon-green"] { color: #00d4ff !important; }
			`;
			
			// Remove existing theme styles and add dark
			removeThemeStyles();
			addThemeStyles('dark-theme', darkStyles);
			
		} else {
			// LIGHT MODE - Force everything light with !important  
			localStorage.setItem('theme', 'light');
			
			// Create light mode stylesheet - Enhanced Definition & Vibrancy
			const lightStyles = `
				* { transition: all 0.3s ease !important; }
				body, html, .page { background: #ffffff !important; color: #0d1117 !important; }
				.hero { background: #ffffff !important; color: #0d1117 !important; }
				.service-card, .path-card { 
					background: #ffffff !important; 
					color: #0d1117 !important; 
					border: 1px solid rgba(13, 17, 23, 0.15) !important; 
					box-shadow: 0 4px 12px rgba(13, 17, 23, 0.15) !important;
				}
				.service-card:hover, .path-card:hover {
					background: #f6f8fa !important;
					border-color: rgba(0, 212, 255, 0.3) !important;
					box-shadow: 0 6px 16px rgba(13, 17, 23, 0.15) !important;
				}
				h1, h2, h3, h4, h5, h6 { color: #0d1117 !important; }
				p, span, div { color: #24292f !important; }
				.text-secondary, .service-card p { color: #656d76 !important; }
				.text-tertiary { color: #8c959f !important; }
				.company-name { color: #00d4ff !important; }
				.neon-green, [style*="neon-green"] { color: #00d4ff !important; }
				.badge-text { 
					color: #ffffff !important; 
					background: #00d4ff !important;
					border-color: #00d4ff !important; 
				}
				.interactive-hover-button { 
					border-color: #00d4ff !important; 
					color: #00d4ff !important; 
					background: rgba(248, 249, 250, 0.85) !important;
				}
				.interactive-hover-button:hover {
					background: #00d4ff !important;
					color: #ffffff !important;
				}
				.service-icon { border-color: rgba(13, 17, 23, 0.15) !important; }
				.tech-logo { color: #24292f !important; }
				.tech-stack-section { background: #f8f9fa !important; }
			`;
			
			// Remove existing theme styles and add light
			removeThemeStyles();
			addThemeStyles('light-theme', lightStyles);
		}
	}
	
	function removeThemeStyles() {
		const existing = document.getElementById('dark-theme') || document.getElementById('light-theme');
		if (existing) existing.remove();
	}
	
	function addThemeStyles(id: string, css: string) {
		const style = document.createElement('style');
		style.id = id;
		style.textContent = css;
		document.head.appendChild(style);
	}
</script>

{#if mounted}
	<button
		class="theme-toggler"
		onclick={toggleTheme}
		aria-label="Toggle theme"
		title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
	>
		<div class="toggle-container">
			<div class="toggle-track" class:dark={isDark}>
				<div class="toggle-thumb" class:dark={isDark}>
					<div class="icon-container">
						{#if isDark}
							<!-- Moon Icon - for dark mode -->
							<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
								<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
							</svg>
						{:else}
							<!-- Sun Icon - for light mode -->
							<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
								<circle cx="12" cy="12" r="5"/>
								<path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
							</svg>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</button>
{/if}

<style>
	.theme-toggler {
		background: #ffffff;
		border: 1px solid rgba(0, 0, 0, 0.15);
		cursor: pointer;
		padding: 12px;
		border-radius: 8px;
		transition: all 0.2s ease;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.theme-toggler:hover {
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		transform: translateY(-1px);
	}

	.toggle-container {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.toggle-track {
		display: none; /* Hide the track, we'll use simple icon switching */
	}

	.toggle-thumb {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		color: #666666;
		transition: all 0.2s ease;
	}

	.toggle-thumb.dark {
		color: #333333;
	}

	.icon-container {
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
		width: 100%;
		height: 100%;
	}

	.toggle-thumb svg {
		transition: all 0.3s ease;
	}

	/* Animation for icon rotation */
	.toggle-thumb.dark svg {
		transform: rotate(180deg);
	}

	/* Focus states for accessibility */
	.theme-toggler:focus {
		outline: none;
		box-shadow: 0 0 0 3px rgba(0, 255, 136, 0.3);
		border-radius: 50%;
	}
</style>