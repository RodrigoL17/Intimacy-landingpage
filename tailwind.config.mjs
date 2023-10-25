/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ['Noto Serif Display', 'serif'],
				secondary: ['Taviraj', 'serif'],
				tertiary: ['Oooh Baby', 'cursive'],
			}
		},
	},
	plugins: [],
}
