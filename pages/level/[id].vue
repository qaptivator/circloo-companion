<template>
	<div class="flex space-x-8 w-full h-full">
		<LevelThumbnail
			:level="level"
			class="!w-96 !h-96"
		/>
		<div
			class="flex flex-col rounded-xl dark:bg-surface-900 bg-gray-200 w-full h-full p-8 text-xl"
		>
			<h1 class="font-bold text-3xl">{{ level?.name }}</h1>
			<h2 class="opacity-50">{{ level?.creator }}</h2>
			<p class="mt-8">{{ level?.description }}</p>
			<p class="mt-8 text-md">
				Walkthrough link: <a>{{ level?.walkthroughLink }}</a>
			</p>
		</div>
	</div>
</template>
<script setup lang="ts">
const route = useRoute()

const loading = ref(true)
const notFound = ref(false)
const level: Ref<Level | undefined> = ref()

onMounted(async () => {
	let levelId = route.params.id
	if (Array.isArray(levelId)) {
		levelId = levelId[0]
	}
	// im turning it from "definitely string" or "possibly an array" into "definitely an array" lol
	const levels = await getLevelsById([levelId])

	loading.value = false
	if (levels.length > 0) {
		level.value = levels[0]
	} else {
		notFound.value = true
	}
})
</script>
<style scoped lang="css"></style>
