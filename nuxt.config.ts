// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura'

export default defineNuxtConfig({
	ssr: false, // github pages requires this

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
