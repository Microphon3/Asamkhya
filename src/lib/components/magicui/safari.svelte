<script lang="ts">
	export let url = "";
	export let className = "";
	export let src = "";
</script>

<div class="safari-browser {className}">
	<!-- Browser Chrome -->
	<div class="safari-header">
		<div class="safari-controls">
			<div class="safari-button close"></div>
			<div class="safari-button minimize"></div>
			<div class="safari-button maximize"></div>
		</div>
		<div class="safari-url-bar">
			<div class="url-display">
				<span class="protocol">https://</span>
				<span class="domain">{url}</span>
			</div>
		</div>
		<div class="safari-actions">
			<div class="safari-nav-button">←</div>
			<div class="safari-nav-button">→</div>
		</div>
	</div>
	
	<!-- Browser Content -->
	<div class="safari-content">
		{#if src}
			<img {src} alt="Website preview" class="website-preview" />
		{:else}
			<slot />
		{/if}
	</div>
</div>

<style>
	.safari-browser {
		background: var(--bg-secondary);
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 
			0 25px 50px rgba(0, 0, 0, 0.3),
			0 0 0 1px rgba(255, 255, 255, 0.1);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.safari-browser:hover {
		transform: translateY(-4px);
		box-shadow: 
			0 35px 80px rgba(0, 0, 0, 0.4),
			0 0 0 1px rgba(255, 255, 255, 0.15);
	}

	.safari-header {
		display: flex;
		align-items: center;
		background: var(--bg-tertiary);
		padding: 0.75rem 1rem;
		border-bottom: 1px solid var(--border-medium);
		gap: 1rem;
	}

	.safari-controls {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.safari-button {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		border: 1px solid rgba(0, 0, 0, 0.2);
	}

	.safari-button.close {
		background: #ff5f57;
	}

	.safari-button.minimize {
		background: #ffbd2e;
	}

	.safari-button.maximize {
		background: #28ca42;
	}

	.safari-url-bar {
		flex: 1;
		background: var(--bg-primary);
		border: 1px solid var(--border-medium);
		border-radius: 8px;
		padding: 0.5rem 1rem;
		min-width: 0;
	}

	.url-display {
		font-size: 0.875rem;
		color: var(--text-secondary);
		font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
	}

	.protocol {
		color: var(--text-muted);
	}

	.domain {
		color: var(--text-primary);
		font-weight: 500;
	}

	.safari-actions {
		display: flex;
		gap: 0.5rem;
	}

	.safari-nav-button {
		width: 28px;
		height: 28px;
		background: var(--bg-primary);
		border: 1px solid var(--border-medium);
		border-radius: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--text-muted);
		font-size: 0.875rem;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.safari-nav-button:hover {
		background: var(--bg-glass);
		color: var(--text-primary);
	}

	.safari-content {
		background: #ffffff;
		min-height: 300px;
		position: relative;
		overflow: hidden;
	}

	.website-preview {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	/* Dark mode website content */
	:global(.dark) .safari-content {
		background: var(--bg-primary);
	}
</style>