<template>
	<div>
		<div class="w-32 h-32 relative">
			<img
				class="w-32 h-32 rounded-full"
				:src="thumbnail"
				:style="{
					'background-color': backgroundColor,
					'border-color': borderColor,
				}"
			/>
			<div
				class="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center text-black text-sm"
			>
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
	</div>
</template>
<script setup lang="ts">
//import type { ModelRef } from 'vue'
//const level: ModelRef<Level | undefined> = defineModel()

const props = defineProps<{
	level: Level | undefined
}>()

// TODO: make a computed "level" for "props.level"

function roundDecimalPlace(v: number) {
	return Math.round(v * 10) / 10
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

function invertColor(color: Vector3): Vector3 {
	return {
		x: 255 - color.x,
		y: 255 - color.y,
		z: 255 - color.z,
	}
}

const backgroundColor = computed(() => {
	if (props.level) {
		const bg = getColorPallete(props.level).background
		//const bg = invertColor(props.level.color)
		//const bg = props.level.color
		return `rgb(${bg.x},${bg.y},${bg.z})`
	} else {
		// default level color here
		return 'rgb(255,255,0)'
	}
})

// TODO: add a way to detect completed levels (possibly requires a local application)
const borderColor = computed(() => {
	if (props.level) {
		const bg = getColorPallete(props.level).main
		//const bg = invertColor(props.level.color)
		//const bg = props.level.color
		return `rgb(${bg.x},${bg.y},${bg.z})`
	} else {
		// default level color here
		return 'rgb(255,255,0)'
	}
})
</script>
<style scoped lang="css"></style>
