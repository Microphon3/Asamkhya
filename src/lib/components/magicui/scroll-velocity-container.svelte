<script lang="ts">
	export let className = '';
</script>

<div class="scroll-velocity-container {className}">
	<slot />
</div>

<style>
	.scroll-velocity-container {
		position: relative;
		width: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>