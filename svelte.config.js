import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		prerender: {
			handleHttpError: 'warn',
			handleMissingId: 'warn',
			entries: [
				'/', 
				'/asamkhya', 
				'/asamkhya/assessment', 
				'/asamkhya/about', 
				'/asamkhya/contact',
				'/asamkhya/website',
				'/asamkhya/heyfrontdesk',
				'/asamkhya/ai-course',
				'/asamkhya/ai-course/about',
				'/asamkhya/ai-course/apply',
				'/asamkhya/ai-course/assessment',
				'/asamkhya/ai-course/contact',
				'/asamkhya/ai-course/programs',
				'/asamkhya/programs',
				'/asamkhya/apply'
			]
		}
	}
};

export default config;
