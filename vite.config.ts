import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import { defineConfig } from 'vitest/config';

const QUALITY = 2;
const toImgSizes = (size: string) => {
	const sizes = [...new Array(QUALITY)].fill(0).map((_, i) => i + 1);
	return sizes.map((n) => n * parseInt(size)).join(';');
};

export default defineConfig({
	plugins: [
		sveltekit(),
		imagetools({
			// https://github.com/JonasKruckenberg/imagetools/tree/main/packages/vite
			defaultDirectives: ({ searchParams }) => {
				return new URLSearchParams({
					...(searchParams.has('as-picture') && {
						format: 'avif;webp;png',
						as: 'picture'
					}),
					...(searchParams.get('1x') && {
						w: `${toImgSizes(searchParams.get('1x') || '')}`
					})
				});
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
