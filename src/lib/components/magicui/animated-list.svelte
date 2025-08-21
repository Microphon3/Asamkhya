<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let className = '';
	export let notifications: Array<{
		id: number;
		agent: string;
		message: string;
		time: string;
		status: string;
	}> = [];

	let containerRef: HTMLDivElement;
	let visibleNotifications: typeof notifications = [];

	onMount(() => {
		if (!browser) return;

		// Show notifications one by one with staggered animation
		notifications.forEach((notification, index) => {
			setTimeout(() => {
				visibleNotifications = [...visibleNotifications, notification];
			}, index * 500);
		});
	});
</script>

<div 
	bind:this={containerRef}
	class="animated-list {className}"
>
	<div class="notifications-container">
		{#each visibleNotifications as notification, index (notification.id)}
			<div 
				class="notification-item status-{notification.status}"
				style="animation-delay: {index * 0.1}s"
			>
				<div class="notification-content">
					<div class="notification-header">
						<span class="agent-name">{notification.agent}</span>
						<span class="notification-time">{notification.time}</span>
					</div>
					<p class="notification-message">{notification.message}</p>
				</div>
				<div class="status-indicator"></div>
			</div>
		{/each}
	</div>
</div>

<style>
	.animated-list {
		height: 100%;
		overflow: hidden;
	}

	.notifications-container {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 1rem;
		height: 100%;
		overflow-y: auto;
	}

	.notification-item {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		padding: 0.875rem;
		background: var(--bg-primary);
		border: 1px solid var(--border-subtle);
		border-radius: 6px;
		position: relative;
		opacity: 0;
		animation: slideIn 0.5s ease-out forwards;
		transform: translateX(20px);
	}

	@keyframes slideIn {
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.notification-content {
		flex: 1;
	}

	.notification-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 0.375rem;
	}

	.agent-name {
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--neon-green);
	}

	.notification-time {
		font-size: 0.75rem;
		color: var(--text-tertiary);
	}

	.notification-message {
		font-size: 0.8125rem;
		color: var(--text-secondary);
		line-height: 1.4;
		margin: 0;
	}

	.status-indicator {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		flex-shrink: 0;
		margin-top: 0.25rem;
	}

	.notification-item.status-success .status-indicator {
		background: #10b981;
		box-shadow: 0 0 6px rgba(16, 185, 129, 0.4);
	}

	.notification-item.status-resolved .status-indicator {
		background: var(--neon-green);
		box-shadow: 0 0 6px rgba(0, 212, 255, 0.4);
	}

	.notification-item.status-active .status-indicator {
		background: #f59e0b;
		box-shadow: 0 0 6px rgba(245, 158, 11, 0.4);
	}

	.notification-item.status-pending .status-indicator {
		background: #6366f1;
		box-shadow: 0 0 6px rgba(99, 102, 241, 0.4);
	}

	.notification-item.status-urgent .status-indicator {
		background: #ef4444;
		box-shadow: 0 0 6px rgba(239, 68, 68, 0.4);
	}

	.notification-item.status-synced .status-indicator {
		background: #8b5cf6;
		box-shadow: 0 0 6px rgba(139, 92, 246, 0.4);
	}

	.notification-item.status-human .status-indicator {
		background: #ec4899;
		box-shadow: 0 0 6px rgba(236, 72, 153, 0.4);
	}

	.notification-item.status-completed .status-indicator {
		background: #059669;
		box-shadow: 0 0 6px rgba(5, 150, 105, 0.4);
	}

	.notification-item.status-assigned .status-indicator {
		background: #0ea5e9;
		box-shadow: 0 0 6px rgba(14, 165, 233, 0.4);
	}
</style>