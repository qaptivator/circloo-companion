import { defineConfig } from 'vitest/config'
//import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineConfig({
	test: {
		globals: true,
		//environment: 'nuxt',
		environment: 'jsdom',
	},
})
