<template>
	<div class="flex flex-col space-y-4 items-center">
		<div
			v-if="!loading"
			class="grid grid-rows-5 grid-cols-2 md:grid-rows-2 md:grid-cols-5 gap-4 relative"
		>
			<div v-for="level in levels">
				<LevelPreview :level="level" />
			</div>
		</div>
		<div v-if="loading">
			<i
				class="pi pi-spin pi-spinner"
				style="font-size: 2rem"
			></i>
		</div>
		<div
			v-else-if="errorOccurred"
			class="text-red-400"
		>
			An error occurred while fetching levels. See the console for further
			details.
		</div>
		<div v-else-if="bookmarks.length === 0">
			You have no bookmarks yet. Go to the browse page to bookmark levels.
		</div>
	</div>
</template>
<script setup lang="ts">
const bookmarks = ref<LevelMetadata[]>([])
const levels = ref<Level[]>([])
const loading = ref(false)
const errorOccurred = ref(false)

// TODO: add pagination here for the bookmarked levels (im just lazy rn)
onMounted(async () => {
	const metadatas = getAllLevelMetadata()
	bookmarks.value = metadatas.filter((metadata) => metadata.bookmarked)
	if (bookmarks.value.length > 0) {
		errorOccurred.value = false
		loading.value = true
		try {
			levels.value = await getLevelsById(
				bookmarks.value.map((metadata) => metadata.id)
			)
		} catch (error) {
			errorOccurred.value = true
			console.error('Error fetching bookmarked levels:', error)
			levels.value = []
		} finally {
			loading.value = false
		}
	} else {
		levels.value = []
	}
})
</script>
<style scoped lang="css"></style>
