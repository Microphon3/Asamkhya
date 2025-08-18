import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: 'warn',
			handleMissingId: 'warn',
			entries: ['/', '/asamkhya', '/asamkhya/assessment', '/asamkhya/about', '/asamkhya/contact']
		}
	}
};

export default config;
