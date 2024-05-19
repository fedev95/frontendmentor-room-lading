/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        "cc-gray": "hsl(0, 0%, 63%)",
        "cc-very-dark": "hsl(0, 0%, 27%)",
      }
    },
	},
	plugins: [],
}
