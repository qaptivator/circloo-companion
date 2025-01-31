/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		extend: {
			/*colors: {
				primary: colors.blue,
				secondary: colors.gray,
				surface: colors.slate,
			},*/
		},
	},
	plugins: [
		require('tailwindcss-primeui'),
		function ({ addVariant }) {
			addVariant('child', '& > *')
			addVariant('child-hover', '& > *:hover')
		},
	],
}
