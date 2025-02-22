<template>
	<div
		class="w-full flex flex-col items-center justify-center space-y-4 h-full"
	>
		<Tabs
			value="0"
			class="!w-full !h-full"
		>
			<TabList
				:pt="{
					tablist: '!justify-center !rounded-t-xl',
				}"
			>
				<Tab value="0">Search</Tab>
				<Tab value="1">Playlists</Tab>
				<Tab value="2">Custom Playlists</Tab>
				<Tab
					value="3"
					disabled
					>Yours (WIP)</Tab
				>
			</TabList>
			<TabPanels
				:pt="{
					root: '!rounded-b-xl !h-full',
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
<script setup lang="ts">
/*import axios from 'axios'
function test() {
	axios({
		method: 'GET',
		url: 'https://circloo-api-vercel.vercel.app/api/GetLevelsDaily',
		params: {
			version: 8,
			deviceID: 0,
		},
	}).then((res) => {
		console.log(res.data)
	})
}
function test2() {
	axios({
		method: 'POST',
		url: 'https://circloo-api-vercel.vercel.app/api/GetLevels',
		// params or data?
		params: {
			sortMode: 'latest',
			deviceID: 0,
			page: 0,
			itemsPerPage: 10,
			spec: 'modded',
			query: 'sort:newest',
			version: 8,
			supportsCollections: 2,
		},
	}).then((res) => {
		console.log(res.data)
	})
}*/
</script>
<style scoped lang="css"></style>
