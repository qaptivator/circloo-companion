<template>
	<div class="flex flex-col space-y-4 items-center">
		<div v-if="bookmarks.length === 0">
			You have no bookmarks yet. Go to the browse page to bookmark levels.
		</div>
		<div
			v-else
			class="grid grid-rows-5 grid-cols-2 md:grid-rows-2 md:grid-cols-5 gap-4 relative"
		>
			<div v-for="level in levels">
				<LevelPreview :level="level" />
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
const bookmarks = ref<LevelMetadata[]>([])
const levels = ref<Level[]>([])

onMounted(async () => {
	const metadatas = getAllLevelMetadata()
	bookmarks.value = metadatas.filter((metadata) => metadata.bookmarked)
	if (bookmarks.value.length > 0) {
		levels.value = await getLevelsById(
			bookmarks.value.map((metadata) => metadata.id)
		)
	} else {
		levels.value = []
	}
})
</script>
<style scoped lang="css"></style>
