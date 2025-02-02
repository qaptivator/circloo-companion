<template>
	<img
		class="w-32 h-32 rounded-full"
		:src="thumbnail"
		:style="{
			'background-color': backgroundColor,
			'border-color': borderColor,
		}"
	/>
</template>
<script setup lang="ts">
//import type { ModelRef } from 'vue'
//const level: ModelRef<Level | undefined> = defineModel()

const props = defineProps<{
	level: Level | undefined
}>()

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
		const bg = getColorPalette(props.level).background
		//const bg = invertColor(props.level.color)
		//const bg = props.level.color
		return `rgb(${bg.x},${bg.y},${bg.z})`
	} else {
		// default level color here
		return 'rgb(0,0,0)'
	}
})

// TODO: add a way to detect completed levels (possibly requires a local application)
const borderColor = computed(() => {
	if (props.level) {
		const bg = getColorPalette(props.level).main
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
