<template>
	<div
		class="w-32 h-32 rounded-full cursor-pointer"
		:style="{
			'background-color': backgroundColor,
		}"
	></div>
</template>
<script setup lang="ts">
const props = defineProps<{
	playlist: Playlist | undefined
}>()

const color = computed(() => {
	if (props.playlist?.color) {
		return getColorPaletteRaw(props.playlist?.color)
	} else {
		return ZeroColorPalette
	}
})

const backgroundColor = computed(() => {
	return `rgb(${color.value.main.x},${color.value.background.y},${color.value.background.z})`
})
</script>
<style scoped lang="css"></style>
