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
				<Tab
					value="1"
					disabled
					>Playlists (WIP)</Tab
				>
				<Tab
					value="2"
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
					<p class="m-0">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
						aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
						eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
						velit, sed quia non numquam eius modi.
					</p>
				</TabPanel>
				<TabPanel value="2">
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
import axios from 'axios'
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
}
</script>
<style scoped lang="css"></style>
