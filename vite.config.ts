import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		host: true,
		allowedHosts: [
			'c70e6d320006.ngrok-free.app',
			'66720ecc68a6.ngrok-free.app',
			'afd489296264.ngrok-free.app'
		]
	}
});
