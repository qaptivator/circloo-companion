<template>
	<div
		class="w-full flex flex-col items-center justify-center space-y-4 h-full overflow-y-auto"
	>
		<div
			class="dark:!bg-surface-900 !bg-gray-100 rounded-xl flex flex-col items-center p-4"
		>
			<h1 class="mb-2 text-xl">Bookmarked levels</h1>
			<BookmarksView />
		</div>
	</div>
</template>
<script setup lang="ts"></script>
<style scoped lang="css"></style>
