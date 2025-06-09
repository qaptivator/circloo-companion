<template>
	<div
		class="w-full h-full flex flex-col items-center justify-center gap-4 bg-transparent"
	>
		<Tabs
			value="0"
			class="!w-full !h-full"
		>
			<TabList
				:pt="{
					tablist:
						'!justify-center !rounded-t-xl dark:!bg-surface-900 !bg-gray-100',
				}"
			>
				<Tab value="0">Search</Tab>
				<Tab
					value="2"
					disabled
					>Custom Playlists (WIP)</Tab
				>
				<Tab
					value="3"
					disabled
					>Yours (WIP)</Tab
				>
				<Tab
					value="1"
					disabled
					>Playlists (WIP)</Tab
				>
			</TabList>
			<TabPanels
				:pt="{
					root: '!rounded-b-xl !h-full dark:!bg-surface-900 !bg-gray-100',
				}"
			>
				<TabPanel value="0">
					<SearchView />
				</TabPanel>
				<TabPanel value="1">
					<PlaylistsView />
				</TabPanel>
				<TabPanel value="2">
					<PlaylistsView />
				</TabPanel>
				<TabPanel value="3">
					<p class="m-0">
						At vero eos et accusamus et iusto odio dignissimos ducimus qui
						blanditiis praesentium voluptatum deleniti atque corrupti quos
						dolores et quas molestias excepturi sint occaecati cupiditate non
						provident, similique sunt in culpa qui officia deserunt mollitia
						animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
						est et expedita distinctio. Nam libero tempore, cum soluta nobis est
						eligendi optio cumque nihil impedit quo minus.
					</p>
				</TabPanel>
			</TabPanels>
		</Tabs>
	</div>
</template>
<script setup lang="ts"></script>
<style scoped lang="css"></style>
