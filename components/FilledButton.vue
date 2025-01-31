<template>
	<button
		type="button"
		:class="[
			'flex transition-all items-center space-x-2 p-3 hover:brightness-95 rounded-lg w-full bg-inherit disabled:opacity-50 disabled:pointer-events-none',
			{ 'justify-center': center },
		]"
	>
		<slot />
	</button>
</template>
<script setup lang="ts">
const props = defineProps<{
	center?: boolean
}>()
</script>
<style scoped lang="css"></style>
