<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let notifications: Array<{
		id: number;
		agent: string;
		message: string;
		time: string;
		status: string;
	}> = [];
	export let className = '';

	let mounted = false;
	let visibleNotifications: typeof notifications = [];
	let typingText = '';
	let currentNotificationIndex = 0;

	onMount(() => {
		if (browser) {
			mounted = true;
			startNotificationAnimation();
		}
	});

	function startNotificationAnimation() {
		// Show ALL 4 notifications immediately with staggered animation
		visibleNotifications = notifications.map((notification, index) => ({
			...notification,
			typing: false,
			animationDelay: index * 0.2 // Stagger the entrance animations
		}));
	}

	function addNotificationWithTyping() {
		const newNotification = notifications[currentNotificationIndex];
		
		// Create placeholder with typing effect
		const placeholder = {
			...newNotification,
			message: '',
			typing: true
		};
		
		// Remove oldest and add typing placeholder (keep 5 notifications)
		visibleNotifications = [placeholder, ...visibleNotifications.slice(0, 4)];
		
		// Type out message character by character
		let charIndex = 0;
		const typeInterval = setInterval(() => {
			if (charIndex < newNotification.message.length) {
				placeholder.message += newNotification.message[charIndex];
				charIndex++;
				visibleNotifications = [...visibleNotifications]; // Trigger reactivity
			} else {
				placeholder.typing = false;
				clearInterval(typeInterval);
				visibleNotifications = [...visibleNotifications]; // Final update
			}
		}, 50);
	}

	function getTimeString() {
		const now = new Date();
		return now.toLocaleTimeString('en-US', { 
			hour12: false, 
			hour: '2-digit', 
			minute: '2-digit' 
		});
	}
</script>

{#if mounted}
<div class="premium-notifications {className}">
	<div class="notifications-header">
		<div class="header-badge">
			<div class="live-indicator"></div>
			<span>Live Activity</span>
		</div>
		<div class="notification-count">{visibleNotifications.length}</div>
	</div>
	
	<div class="notifications-list">
		{#each visibleNotifications as notification, i (notification.id)}
			<div 
				class="notification-item" 
				class:typing={notification.typing}
				style="--delay: {notification.animationDelay || (i * 0.1)}s; --index: {i};"
			>
				<div class="notification-avatar">
					<div class="agent-icon {notification.status}">
						<div class="pulse-dot"></div>
					</div>
				</div>
				
				<div class="notification-content">
					<div class="notification-header">
						<span class="agent-name">{notification.agent}</span>
						<div class="status-indicator {notification.status}"></div>
					</div>
					
					<div class="notification-message">
						{notification.message}
						{#if notification.typing}
							<span class="typing-cursor">|</span>
						{/if}
					</div>
					
					<div class="notification-timestamp">
						<span class="timestamp-text">{notification.time}</span>
						<div class="green-pulse"></div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
{/if}

<style>
	.premium-notifications {
		position: absolute;
		top: 140px;
		right: 20px;
		left: 20px;
		bottom: 20px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		pointer-events: auto;
		overflow: hidden;
	}

	.notifications-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 8px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.header-badge {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 0.75rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.9);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.live-indicator {
		width: 8px;
		height: 8px;
		background: #00ff88;
		border-radius: 50%;
		animation: pulse-live 2s ease-in-out infinite;
		box-shadow: 0 0 8px rgba(0, 255, 136, 0.6);
	}

	.notification-count {
		background: rgba(0, 255, 136, 0.2);
		color: #00ff88;
		padding: 4px 8px;
		border-radius: 12px;
		font-size: 0.7rem;
		font-weight: 700;
		border: 1px solid rgba(0, 255, 136, 0.3);
	}

	.notifications-list {
		display: flex;
		flex-direction: column;
		gap: 8px;
		overflow: visible;
		height: auto;
		min-height: auto;
		max-height: none;
		padding-bottom: 12px;
		padding-right: 0;
	}

	/* Removed scrollbar styles - no scrolling needed */
	.notifications-list::-webkit-scrollbar {
		display: none;
	}

	.notification-item {
		display: flex;
		gap: 12px;
		padding: 12px 16px;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 10px;
		backdrop-filter: blur(10px);
		animation: slide-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		animation-delay: var(--delay);
		transform: translateX(100%);
		opacity: 0;
		transition: all 0.3s ease;
		min-height: 65px;
		flex-shrink: 0;
		margin-right: 0;
	}

	.notification-item:hover {
		background: rgba(255, 255, 255, 0.05);
		border-color: rgba(0, 255, 136, 0.3);
		transform: translateX(0) scale(1.02);
	}

	.notification-item.typing {
		border-color: rgba(0, 255, 136, 0.4);
		box-shadow: 0 0 20px rgba(0, 255, 136, 0.2);
	}

	.notification-avatar {
		position: relative;
		width: 40px;
		height: 40px;
		flex-shrink: 0;
	}

	.agent-icon {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
		border: 2px solid rgba(255, 255, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
	}

	.agent-icon.success {
		border-color: rgba(0, 255, 136, 0.6);
		background: radial-gradient(circle, rgba(0, 255, 136, 0.2) 0%, rgba(0, 255, 136, 0.05) 100%);
	}

	.agent-icon.pending {
		border-color: rgba(255, 165, 0, 0.6);
		background: radial-gradient(circle, rgba(255, 165, 0, 0.2) 0%, rgba(255, 165, 0, 0.05) 100%);
	}

	.agent-icon.scheduled {
		border-color: rgba(54, 162, 235, 0.6);
		background: radial-gradient(circle, rgba(54, 162, 235, 0.2) 0%, rgba(54, 162, 235, 0.05) 100%);
	}

	.agent-icon.processing {
		border-color: rgba(156, 39, 176, 0.6);
		background: radial-gradient(circle, rgba(156, 39, 176, 0.2) 0%, rgba(156, 39, 176, 0.05) 100%);
	}

	.pulse-dot {
		position: absolute;
		top: -2px;
		right: -2px;
		width: 12px;
		height: 12px;
		background: #00ff88;
		border-radius: 50%;
		border: 2px solid rgba(0, 0, 0, 0.5);
		animation: pulse-dot 2s ease-in-out infinite;
	}

	.notification-content {
		flex: 1;
		min-width: 0;
	}

	.notification-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 4px;
	}

	.agent-name {
		font-size: 0.75rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.9);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.status-indicator {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #00ff88;
		animation: status-pulse 1.5s ease-in-out infinite;
	}

	.status-indicator.pending {
		background: #ffa500;
	}

	.status-indicator.scheduled {
		background: #36a2eb;
		animation: scheduled-pulse 2s ease-in-out infinite;
	}

	.status-indicator.processing {
		background: #9c27b0;
		animation: processing-pulse 1.5s ease-in-out infinite;
	}

	.notification-message {
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.8);
		line-height: 1.4;
		margin-bottom: 8px;
		word-wrap: break-word;
		overflow-wrap: break-word;
		white-space: normal;
		text-overflow: clip;
	}

	.typing-cursor {
		color: #00ff88;
		animation: cursor-blink 1s infinite;
		font-weight: bold;
	}

	.notification-timestamp {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.timestamp-text {
		font-size: 0.65rem;
		color: rgba(255, 255, 255, 0.5);
		font-variant-numeric: tabular-nums;
	}

	.green-pulse {
		width: 4px;
		height: 4px;
		background: #00ff88;
		border-radius: 50%;
		animation: green-pulse-animation 2s ease-in-out infinite;
	}

	/* Animations */
	@keyframes slide-in {
		0% {
			transform: translateX(100%);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@keyframes pulse-live {
		0%, 100% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(1.2);
			opacity: 0.7;
		}
	}

	@keyframes pulse-dot {
		0%, 100% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(1.3);
			opacity: 0.8;
		}
	}

	@keyframes status-pulse {
		0%, 100% {
			opacity: 1;
		}
		50% {
			opacity: 0.4;
		}
	}

	@keyframes cursor-blink {
		0%, 50% {
			opacity: 1;
		}
		51%, 100% {
			opacity: 0;
		}
	}

	@keyframes green-pulse-animation {
		0%, 100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.3;
			transform: scale(1.5);
		}
	}

	@keyframes scheduled-pulse {
		0%, 100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.6;
			transform: scale(1.2);
		}
	}

	@keyframes processing-pulse {
		0%, 100% {
			opacity: 1;
			transform: scale(1) rotate(0deg);
		}
		50% {
			opacity: 0.7;
			transform: scale(1.1) rotate(180deg);
		}
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.premium-notifications {
			top: 10px;
			right: 10px;
			left: 10px;
			bottom: 10px;
		}

		.notification-item {
			padding: 8px 12px;
		}

		.notification-message {
			font-size: 0.75rem;
		}
	}
</style>