<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let files: Array<{
		name: string;
		body: string;
	}> = [];
	export let className = '';

	let mounted = false;
	let fileCount = 0;
	let visibleFiles: Array<{
		name: string;
		body: string;
		id: string;
		saving: boolean;
		processing: boolean;
		progress: number;
		icon: string;
		lastUpdated: string;
		size: string;
	}> = [];

	const fileIcons = {
		pdf: '📄',
		xlsx: '📊', 
		svg: '🎨',
		gpg: '🔐',
		txt: '📝',
		json: '🔧',
		docx: '📋'
	};

	onMount(() => {
		if (browser) {
			mounted = true;
			initializeFiles();
			startAutoSaveAnimation();
		}
	});

	function initializeFiles() {
		const sizes = ['1.2MB', '856KB', '2.1MB', '3.4MB', '654KB', '2.8MB', '1.5MB'];
		const timestamps = ['2 min ago', '5 min ago', '12 min ago', '1 hr ago', '3 hr ago', '1 day ago', '2 days ago'];
		
		// Only show first 2 files for compact display
		visibleFiles = files.slice(0, 2).map((file, index) => ({
			...file,
			id: `file-${index}`,
			saving: false,
			processing: index === 1, // Set second file as processing
			progress: index === 1 ? 0 : 100,
			icon: getFileIcon(file.name),
			lastUpdated: timestamps[index] || '1 hr ago',
			size: sizes[index] || '1.2MB'
		}));
		fileCount = files.length; // Show total count, but display only 2
		
		// Start processing animation for processing file
		startProcessingAnimation();
	}

	function startProcessingAnimation() {
		const processingFile = visibleFiles.find(f => f.processing);
		if (!processingFile) return;
		
		const processInterval = setInterval(() => {
			if (processingFile.progress < 100) {
				processingFile.progress += Math.random() * 8;
				if (processingFile.progress > 100) processingFile.progress = 100;
				visibleFiles = [...visibleFiles];
			} else {
				processingFile.processing = false;
				clearInterval(processInterval);
				visibleFiles = [...visibleFiles];
			}
		}, 150);
	}

	function getFileIcon(filename: string) {
		const extension = filename.split('.').pop()?.toLowerCase() || 'txt';
		return fileIcons[extension as keyof typeof fileIcons] || '📄';
	}

	function startAutoSaveAnimation() {
		// Simulate auto-save every 3-7 seconds
		const saveFile = () => {
			if (visibleFiles.length === 0) return;
			
			const randomIndex = Math.floor(Math.random() * visibleFiles.length);
			const file = visibleFiles[randomIndex];
			
			if (!file.saving) {
				file.saving = true;
				file.progress = 0;
				
				// Animate progress bar
				const progressInterval = setInterval(() => {
					if (file.progress < 100) {
						file.progress += Math.random() * 15;
						if (file.progress > 100) file.progress = 100;
						visibleFiles = [...visibleFiles]; // Trigger reactivity
					} else {
						file.saving = false;
						clearInterval(progressInterval);
						
						// Increment file count occasionally
						if (Math.random() > 0.7) {
							fileCount++;
						}
						
						visibleFiles = [...visibleFiles]; // Final update
					}
				}, 100);
			}
			
			// Schedule next save
			setTimeout(saveFile, 3000 + Math.random() * 4000);
		};

		// Start the cycle
		setTimeout(saveFile, 2000);
	}
</script>

{#if mounted}
<div class="premium-files {className}">
	<div class="files-header">
		<div class="header-info">
			<div class="auto-save-indicator">
				<div class="save-dot"></div>
				<span>Auto-save enabled</span>
			</div>
			<div class="storage-breakdown">
				<div class="breakdown-item">
					<span class="breakdown-label">Documents:</span>
					<span class="breakdown-value">1.2GB</span>
				</div>
				<div class="breakdown-item">
					<span class="breakdown-label">Reports:</span>
					<span class="breakdown-value">0.8GB</span>
				</div>
				<div class="breakdown-item">
					<span class="breakdown-label">Audits:</span>
					<span class="breakdown-value">0.4GB</span>
				</div>
			</div>
		</div>
	</div>

	<div class="files-marquee">
		{#each visibleFiles as file, i}
			<div 
				class="file-card"
				class:saving={file.saving}
				class:processing={file.processing}
				style="--card-delay: {i * 0.1}s;"
			>
				<div class="file-icon-container">
					<div class="file-icon">{file.icon}</div>
					{#if file.saving}
						<div class="save-spinner"></div>
					{/if}
				</div>
				
				<div class="file-content">
					<div class="file-header">
						<div class="file-name">{file.name}</div>
						{#if file.processing}
							<div class="processing-badge">PROCESSING...</div>
						{:else if file.saving}
							<div class="saving-badge">Saving...</div>
						{/if}
					</div>
					
					<div class="file-description">{file.body}</div>
					
					<div class="file-meta">
						<span class="file-size">{file.size}</span>
						<span class="file-timestamp">Updated {file.lastUpdated}</span>
					</div>
					
					{#if file.processing}
						<div class="progress-container">
							<div class="progress-bar">
								<div 
									class="progress-fill processing" 
									style="width: {file.progress}%"
								></div>
							</div>
							<div class="progress-text">{Math.round(file.progress)}%</div>
						</div>
					{:else if file.saving}
						<div class="progress-container">
							<div class="progress-bar">
								<div 
									class="progress-fill" 
									style="width: {file.progress}%"
								></div>
							</div>
							<div class="progress-text">{Math.round(file.progress)}%</div>
						</div>
					{/if}
				</div>
				
				<div class="file-status">
					{#if file.saving}
						<div class="status-icon saving">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none">
								<circle cx="12" cy="12" r="3" stroke="#ffa500" stroke-width="2" stroke-linecap="round"/>
							</svg>
						</div>
					{:else}
						<div class="status-icon saved">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none">
								<path d="M20 6L9 17L4 12" stroke="#00ff88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>

	<div class="storage-info">
		<div class="storage-bar">
			<div class="storage-used"></div>
		</div>
		<div class="storage-text">
			<span>2.4 GB used</span>
			<span>of 15 GB</span>
		</div>
	</div>
</div>
{/if}

<style>
	.premium-files {
		position: absolute;
		top: 80px;
		right: 16px;
		left: 16px;
		bottom: 16px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.files-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 8px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.header-info {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
	}

	.storage-breakdown {
		display: flex;
		flex-direction: column;
		gap: 2px;
		text-align: right;
	}

	.breakdown-item {
		display: flex;
		align-items: center;
		gap: 4px;
		font-size: 0.6rem;
	}

	.breakdown-label {
		color: rgba(255, 255, 255, 0.6);
	}

	.breakdown-value {
		color: rgba(255, 255, 255, 0.9);
		font-weight: 600;
		font-variant-numeric: tabular-nums;
	}

	.auto-save-indicator {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 0.7rem;
		color: rgba(255, 255, 255, 0.7);
		font-weight: 500;
	}

	.save-dot {
		width: 6px;
		height: 6px;
		background: #00ff88;
		border-radius: 50%;
		animation: save-pulse 2s ease-in-out infinite;
		box-shadow: 0 0 6px rgba(0, 255, 136, 0.6);
	}

	.file-count {
		display: flex;
		align-items: center;
		gap: 4px;
		background: rgba(255, 255, 255, 0.05);
		padding: 4px 8px;
		border-radius: 8px;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.count-number {
		font-size: 0.75rem;
		font-weight: 700;
		color: rgba(255, 255, 255, 0.9);
		font-variant-numeric: tabular-nums;
	}

	.count-label {
		font-size: 0.65rem;
		color: rgba(255, 255, 255, 0.6);
	}

	.files-marquee {
		flex: 1;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: 4px 0;
		mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
	}

	.file-card {
		position: relative;
		display: flex;
		align-items: flex-start;
		gap: 12px;
		padding: 12px;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		animation: file-fade-in 0.5s ease;
		animation-delay: var(--card-delay);
		cursor: pointer;
	}

	.file-card:hover {
		background: rgba(255, 255, 255, 0.05);
		border-color: rgba(255, 255, 255, 0.2);
		transform: translateX(4px) scale(1.01);
	}

	.file-card.saving {
		border-color: rgba(255, 165, 0, 0.4);
		background: radial-gradient(circle at left, rgba(255, 165, 0, 0.08) 0%, transparent 60%);
		animation: saving-glow 2s ease-in-out infinite;
	}

	.file-card.processing {
		border-color: rgba(0, 123, 255, 0.4);
		background: radial-gradient(circle at left, rgba(0, 123, 255, 0.08) 0%, transparent 60%);
		animation: processing-glow 2s ease-in-out infinite;
	}

	.file-icon-container {
		position: relative;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 6px;
		flex-shrink: 0;
	}

	.file-icon {
		font-size: 1.2rem;
		filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.2));
	}

	.save-spinner {
		position: absolute;
		inset: -2px;
		border: 2px solid transparent;
		border-top: 2px solid #ffa500;
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	.file-content {
		flex: 1;
		min-width: 0;
	}

	.file-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 4px;
	}

	.file-name {
		font-size: 0.75rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.9);
		truncate: true;
	}

	.saving-badge {
		font-size: 0.6rem;
		color: #ffa500;
		background: rgba(255, 165, 0, 0.1);
		padding: 2px 6px;
		border-radius: 4px;
		border: 1px solid rgba(255, 165, 0, 0.3);
		text-transform: uppercase;
		font-weight: 600;
		letter-spacing: 0.05em;
	}

	.processing-badge {
		font-size: 0.6rem;
		color: #007bff;
		background: rgba(0, 123, 255, 0.1);
		padding: 2px 6px;
		border-radius: 4px;
		border: 1px solid rgba(0, 123, 255, 0.3);
		text-transform: uppercase;
		font-weight: 600;
		letter-spacing: 0.05em;
		animation: processing-pulse 1.5s ease-in-out infinite;
	}

	.file-description {
		font-size: 0.65rem;
		color: rgba(255, 255, 255, 0.6);
		line-height: 1.4;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		margin-bottom: 6px;
	}

	.file-meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 8px;
		padding: 4px 0;
		border-top: 1px solid rgba(255, 255, 255, 0.05);
	}

	.file-size {
		font-size: 0.6rem;
		color: rgba(255, 255, 255, 0.8);
		font-weight: 600;
		background: rgba(255, 255, 255, 0.05);
		padding: 2px 6px;
		border-radius: 4px;
	}

	.file-timestamp {
		font-size: 0.6rem;
		color: rgba(255, 255, 255, 0.5);
		font-style: italic;
	}

	.progress-container {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.progress-bar {
		flex: 1;
		height: 3px;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 2px;
		overflow: hidden;
	}

	.progress-fill {
		height: 100%;
		background: linear-gradient(90deg, #ffa500, #ffb347);
		border-radius: 2px;
		transition: width 0.2s ease;
		animation: progress-shimmer 2s ease-in-out infinite;
	}

	.progress-fill.processing {
		background: linear-gradient(90deg, #007bff, #4da6ff);
		animation: processing-bar-shimmer 1.5s ease-in-out infinite;
	}

	.progress-text {
		font-size: 0.6rem;
		font-weight: 600;
		color: #ffa500;
		min-width: 30px;
		text-align: right;
		font-variant-numeric: tabular-nums;
	}

	.file-status {
		width: 20px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.status-icon {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
	}

	.status-icon.saving {
		background: rgba(255, 165, 0, 0.2);
		animation: status-pulse 1.5s ease-in-out infinite;
	}

	.status-icon.saved {
		background: rgba(0, 255, 136, 0.2);
		animation: success-pop 0.3s ease;
	}

	.storage-info {
		padding-top: 8px;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.storage-bar {
		width: 100%;
		height: 4px;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 2px;
		overflow: hidden;
		margin-bottom: 4px;
	}

	.storage-used {
		width: 16%;
		height: 100%;
		background: linear-gradient(90deg, #00ff88, #00cc6a);
		border-radius: 2px;
		animation: storage-fill 3s ease-in-out;
	}

	.storage-text {
		display: flex;
		justify-content: space-between;
		font-size: 0.6rem;
		color: rgba(255, 255, 255, 0.6);
	}

	/* Animations */
	@keyframes save-pulse {
		0%, 100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.6;
			transform: scale(1.2);
		}
	}

	@keyframes file-fade-in {
		0% {
			opacity: 0;
			transform: translateY(20px) blur(4px);
		}
		100% {
			opacity: 1;
			transform: translateY(0) blur(0);
		}
	}

	@keyframes saving-glow {
		0%, 100% {
			box-shadow: 0 0 0 rgba(255, 165, 0, 0);
		}
		50% {
			box-shadow: 0 0 20px rgba(255, 165, 0, 0.3);
		}
	}

	@keyframes processing-glow {
		0%, 100% {
			box-shadow: 0 0 0 rgba(0, 123, 255, 0);
		}
		50% {
			box-shadow: 0 0 20px rgba(0, 123, 255, 0.3);
		}
	}

	@keyframes processing-pulse {
		0%, 100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.8;
			transform: scale(1.05);
		}
	}

	@keyframes processing-bar-shimmer {
		0%, 100% {
			opacity: 1;
		}
		50% {
			opacity: 0.7;
		}
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes progress-shimmer {
		0%, 100% {
			opacity: 1;
		}
		50% {
			opacity: 0.8;
		}
	}

	@keyframes status-pulse {
		0%, 100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
	}

	@keyframes success-pop {
		0% {
			transform: scale(0);
		}
		80% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(1);
		}
	}

	@keyframes storage-fill {
		0% {
			width: 0%;
		}
		100% {
			width: 16%;
		}
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.file-card {
			padding: 10px;
		}

		.file-name {
			font-size: 0.7rem;
		}

		.file-description {
			font-size: 0.6rem;
			-webkit-line-clamp: 1;
		}
	}
</style>