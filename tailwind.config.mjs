/** @type {import('tailwindcss').Config} */
import starlightPlugin from '@astrojs/starlight-tailwind';
const { nextui } = require("@nextui-org/react");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
	theme: {
		extend: {},
	},
	plugins: [starlightPlugin()],
	darkMode: "class",
  plugins: [nextui()]
}
