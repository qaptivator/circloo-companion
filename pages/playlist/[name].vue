<template>
	<div class="w-full h-full">
		<div v-if="loading && !invalid"></div>
		<div
			v-if="!loading && invalid"
			class="flex flex-col items-center justify-center h-full"
		>
			<h1 class="text-4xl mb-4">Playlist is invalid</h1>
			<Button
				as="router-link"
				label="Go back"
				to="/browse"
			></Button>
		</div>
		<!-- v-show just doesnt render the element, but it is still processed -->
		<!-- TODO: add AdvancedLevelInfo stats somewhere in the ui (that includes the leaderboard) -->
		<div
			v-show="!loading && !invalid"
			class="flex flex-col rounded-xl dark:bg-surface-900 bg-gray-100 w-full h-full p-8 text-sm lg:text-xl"
		>
			<div
				class="w-full h-32 rounded-t-xl"
				:style="{
					'background-color': backgroundColor,
				}"
			></div>
			<h1 class="font-bold text-3xl">{{ playlist?.name }}</h1>
			<h2 class="opacity-50">by {{ playlist?.creator }}</h2>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useToast } from 'primevue/usetoast'

const route = useRoute()
const toast = useToast()

const loading = ref(true)
const invalid = ref(false)
const playlist: Ref<Playlist | undefined> = ref()

onMounted(async () => {
	let playlistString = route.query.d
	if (typeof playlistString !== 'string') {
		invalid.value = true
		return
	}

	playlist.value = queryToPlaylist(playlistString)

	if (!playlist.value) {
		invalid.value = true
	}
	loading.value = false
})

const backgroundColor = computed(() => {
	if (playlist.value) {
		const bg = getColorPaletteRaw(playlist.value.color).background
		return `rgb(${bg.x},${bg.y},${bg.z})`
	} else {
		// default playlist color here
		return 'rgb(0,0,0)'
	}
})
</script>
<style scoped lang="css"></style>
