<script lang="ts">
	export let iconType: string;
	export let size = 24;
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	{#if iconType === 'booking'}
		<!-- Booking Management Agent -->
		<path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" stroke="currentColor" stroke-width="2"/>
	{:else if iconType === 'payment'}
		<!-- Payment Processing Agent -->
		<path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" stroke="currentColor" stroke-width="2"/>
	{:else if iconType === 'guest'}
		<!-- Guest Communication Agent -->
		<path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" stroke="currentColor" stroke-width="2"/>
	{:else if iconType === 'maintenance'}
		<!-- Maintenance Coordination Agent -->
		<path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" stroke="currentColor" stroke-width="2"/>
	{:else if iconType === 'security'}
		<!-- Security & Verification Agent -->
		<path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" stroke="currentColor" stroke-width="2"/>
	{:else if iconType === 'vendor'}
		<!-- Vendor Management Agent -->
		<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" stroke-width="2"/>
	{:else if iconType === 'analytics'}
		<!-- Analytics & Reporting Agent -->
		<path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" stroke="currentColor" stroke-width="2"/>
	{:else if iconType === 'inventory'}
		<!-- Inventory Management Agent -->
		<path d="M7 4V2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2h4v2h-1v13c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6H3V4h4zM9 3v1h6V3H9zm7 3H8v11h8V6z" stroke="currentColor" stroke-width="2"/>
	{:else if iconType === 'escalation'}
		<!-- Escalation Handling Agent -->
		<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2zm0 4.5L10.18 10l-3.77.55 2.72 2.65-.64 3.78L12 15.5l3.51 1.48-.64-3.78L17.59 10.55 13.82 10 12 6.5z" stroke="currentColor" stroke-width="2"/>
	{:else if iconType === 'ota'}
		<!-- OTA Synchronization Agent -->
		<path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" stroke="currentColor" stroke-width="2"/>
	{:else if iconType === 'feedback'}
		<!-- Feedback Processing Agent -->
		<path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z" stroke="currentColor" stroke-width="2"/>
	{:else if iconType === 'compliance'}
		<!-- Compliance Monitoring Agent -->
		<path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" stroke="currentColor" stroke-width="2"/>
	{:else if iconType === 'mrkey'}
		<!-- Mr. Key - Central Orchestrator -->
		<path d="M12.65,10C11.83,7.67 9.61,6 7,6A6,6 0 0,0 1,12A6,6 0 0,0 7,18C9.61,18 11.83,16.33 12.65,14H17V18H21V14H23V10H12.65M7,14A2,2 0 0,1 5,12A2,2 0 0,1 7,10A2,2 0 0,1 9,12A2,2 0 0,1 7,14Z" stroke="currentColor" stroke-width="2" fill="currentColor"/>
	{/if}
</svg>

<style>
	svg {
		display: block;
	}
</style>