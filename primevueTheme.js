import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'
import colors from 'tailwindcss/colors.js'

const MyPreset = definePreset(Aura, {
	semantic: {
		primary: colors.blue,
	},
})

export default {
	preset: MyPreset,
	//options: {
	//    darkModeSelector: '.p-dark'
	//}
}
