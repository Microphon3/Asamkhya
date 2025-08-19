<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let number: number = 20;

	let meteors: Array<{ id: number; left: string; animationDelay: string; animationDuration: string }> = [];

	onMount(() => {
		if (!browser) return;

		meteors = Array.from({ length: number }, (_, i) => ({
			id: i,
			left: Math.floor(Math.random() * 100) + '%',
			animationDelay: Math.random() * 5 + 's',
			animationDuration: Math.floor(Math.random() * (15 - 8) + 8) + 's'
		}));
	});
</script>

{#each meteors as meteor (meteor.id)}
	<span
		class="animate-meteor-effect absolute h-2 w-2 rounded-[9999px] rotate-[215deg]"
		style="top: -50px; left: {meteor.left}; animation-delay: {meteor.animationDelay}; animation-duration: {meteor.animationDuration};"
	>
		<div class="pointer-events-none absolute top-1/2 left-1/2 h-[3px] w-[120px] -translate-y-1/2 -translate-x-1/2" />
	</span>
{/each}

<style>
	@keyframes meteor-effect {
		0% {
			transform: rotate(215deg) translateX(0);
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		80% {
			opacity: 1;
		}
		100% {
			transform: rotate(215deg) translateX(-800px);
			opacity: 0;
		}
	}

	.animate-meteor-effect {
		animation: meteor-effect linear infinite;
		background: #00d4ff !important;
		box-shadow: 0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 60px #00d4ff !important;
		opacity: 0.9 !important;
	}

	.animate-meteor-effect div {
		background: linear-gradient(to right, #00d4ff, rgba(0, 212, 255, 0.4), transparent) !important;
		opacity: 0.8 !important;
	}
</style>