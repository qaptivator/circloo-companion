// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura'

export default defineNuxtConfig({
	ssr: false, // github pages requires this

	devServer: {
		port: 3001, // default: 3000
	},

	app: {
		head: {
			title: 'circloO companion',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					hid: 'description',
					name: 'description',
					content: 'external circloo level browser and toolkit',
				},
			],
			link: [
				{ rel: 'shortcut icon', type: 'image/x-icon', href: 'favicon.ico' },
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
					crossorigin: 'anonymous',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap',
				},
			],
		},
		baseURL: '/circloo-companion/',
		buildAssetsDir: 'assets',
	},

	// "@nuxt/test-utils/module"
	modules: ['@nuxtjs/tailwindcss', '@primevue/nuxt-module'],

	css: ['~/assets/css/main.css'],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	// thank you our lord and saviour (@ts-ignore)
	// @ts-ignore
	primevue: {
		importTheme: { from: '@/primevueTheme.js' },
		/*options: {
			theme: {
				preset: Aura,
			},
		},*/
	},

	compatibilityDate: '2025-01-26',
})
