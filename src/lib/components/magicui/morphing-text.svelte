<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	export let texts: string[] = [];
	export let className = '';
	export let duration = 2000; // Duration for each text
	export let morphDuration = 800; // Duration of morphing animation

	let mounted = false;
	let currentIndex = 0;
	let displayText = '';
	let isAnimating = false;
	let intervalId: number;

	onMount(() => {
		mounted = true;
		if (browser && texts.length > 0) {
			displayText = texts[0];
			startMorphing();
		}
	});

	onDestroy(() => {
		if (browser && intervalId) {
			clearInterval(intervalId);
		}
	});

	function startMorphing() {
		intervalId = setInterval(() => {
			morphToNext();
		}, duration);
	}

	async function morphToNext() {
		if (isAnimating || texts.length <= 1) return;
		
		isAnimating = true;
		const currentText = texts[currentIndex];
		const nextIndex = (currentIndex + 1) % texts.length;
		const nextText = texts[nextIndex];

		// Morphing animation
		await morphText(currentText, nextText);
		
		currentIndex = nextIndex;
		isAnimating = false;
	}

	async function morphText(from: string, to: string) {
		const steps = 20;
		const stepDuration = morphDuration / steps;
		
		for (let i = 0; i <= steps; i++) {
			const progress = i / steps;
			displayText = generateMorphedText(from, to, progress);
			await sleep(stepDuration);
		}
		
		displayText = to;
	}

	function generateMorphedText(from: string, to: string, progress: number): string {
		const maxLength = Math.max(from.length, to.length);
		let result = '';
		
		for (let i = 0; i < maxLength; i++) {
			const fromChar = from[i] || '';
			const toChar = to[i] || '';
			
			if (progress < 0.5) {
				// First half: gradually scramble the original text
				if (Math.random() < progress * 2) {
					result += getRandomChar();
				} else {
					result += fromChar;
				}
			} else {
				// Second half: gradually reveal the target text
				if (Math.random() < (progress - 0.5) * 2) {
					result += toChar;
				} else {
					result += getRandomChar();
				}
			}
		}
		
		return result;
	}

	function getRandomChar(): string {
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
		return chars[Math.floor(Math.random() * chars.length)];
	}

	function sleep(ms: number): Promise<void> {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
</script>

{#if mounted}
	<span class="morphing-text {className}">{displayText}</span>
{:else}
	<span class="morphing-text {className}">{texts[0] || ''}</span>
{/if}

<style>
	.morphing-text {
		display: inline-block;
		font-family: inherit;
		white-space: nowrap;
		transition: all 0.1s ease;
		will-change: contents;
	}
</style>