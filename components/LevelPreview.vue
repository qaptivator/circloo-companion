<template>
	<div
		@click="clicked"
		class="w-32 h-32 relative cursor-pointer"
	>
		<LevelThumbnail
			:level="props.level"
			class="!w-32 !h-32"
		/>
		<i
			v-if="props.level?.moderationStatus === ModerationStatus.Unmodded"
			class="pi pi-lock absolute top-0 left-0 opacity-20 text-black dark:text-white"
		></i>
		<div
			class="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center text-black text-sm"
		>
			<!-- TODO: fix the name overflowing -->
			<h1 class="font-bold">{{ props.level?.name }}</h1>
			<!-- TODO: make this text smaller -->
			<span>{{ props.level?.creator }}</span>
			<span class="flex space-x-2">
				<div class="flex">
					<i class="pi pi-play"></i>
					{{ props.level?.plays }}
				</div>
				<div class="flex">
					<i class="pi pi-star"></i>
					{{ props.level?.stars }}
				</div>
			</span>
			<div class="flex">
				<i class="pi pi-percentage"></i>
				{{ clearRate }}
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
//import type { ModelRef } from 'vue'
//const level: ModelRef<Level | undefined> = defineModel()

import LevelThumbnail from './LevelThumbnail.vue'

const props = defineProps<{
	level: Level | undefined
}>()

// TODO: make a computed "level" for "props.level"

function clicked() {
	/*console.log(
		'name:',
		props.level?.name,
		'moderationStatus:',
		props.level?.moderationStatus,
		'isModerated:',
		props.level?.moderationStatus !== undefined &&
			props.level.moderationStatus === ModerationStatus.Unmodded
		// why do i have to use such shenanigans in typescript to just compare two values of an enum? thats weird...
	)*/
	if (props.level?.id) navigateTo(`/level/${props.level?.id}`)
}

const clearRate = computed(() => {
	if (props.level) {
		return roundDecimalPlace((props.level.plays / props.level.starts) * 100)
	} else {
		return -1
	}
})

const thumbnail = computed(() => {
	if (props.level?.imageURI) {
		return URL.createObjectURL(props.level.imageURI)
	} else {
		// default level thumbnail here
		return ''
	}
})
</script>
<style scoped lang="css"></style>
