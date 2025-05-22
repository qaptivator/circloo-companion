<template>
	<div
		class="flex flex-col justify-center items-center text-2xl space-y-4 overflow-y-auto"
	>
		<h1 style="font-size: 2.75rem; line-height: 3rem">
			circloO companion is your <span class="font-bold">ultimate tool</span> for
			circloO
		</h1>
		<p>using this website, you are able to:</p>
		<ul class="list-disc flex flex-col text-xl gap-2">
			<li>/// browse the player created levels library</li>
			<li>/// see advanced info about levels such as clear rates</li>
			<li>/// download level thumbnail and content*</li>
			<li class="line-through">
				/// bookmark your favorite levels and view them later (WORK IN PROGRESS)
			</li>
			<li class="line-through">
				/// view comunity made playlists, which will include useful template
				levels to creators (WORK IN PROGRESS)
			</li>
			<li class="line-through">
				/// run automated scripts on your levels such as image generators,
				without installing anything (WORK IN PROGRESS)
			</li>
		</ul>
		<span class="text-sm opacity-50"
			>* Not all levels can be downloaded. The level creator can request their
			level to be non-downloadable, putting it in a blacklist.
		</span>
		<Button
			class="!mt-8 !w-64"
			as="router-link"
			to="/browse"
			label="Lets go!"
		></Button>
		<Card
			style="width: 30rem; overflow: hidden; margin-top: 2rem; cursor: pointer"
			@click="openRepo"
		>
			<template #header>
				<img
					class="w-full"
					alt="star button github"
					src="/assets/images/star-button-github.png"
				/>
			</template>
			<template #title
				><h1 class="!text-xl">
					To support the creator, please star the GitHub repository
				</h1></template
			>
			<template #content>
				<p class="m-0 !text-sm">
					I am captivator. I have poured several weeks into making this
					website,<br />
					and I will be grateful if you leave a star on the GitHub repository!
					Thanks for using this! (this is clickable by the way)
				</p>
			</template>
		</Card>
		<!--<div class="!mt-8 flex rounded-xl dark:bg-surface-900 bg-gray-100">
			<div class="p-4">
				<h1>To support the creator, please star the GitHub repository</h1>
				<p>
					I am captivator. I have poured several weeks into making this
					website,<br />
					and I will be grateful if you leave a star on the GitHub repository!
					Thanks for using this!
				</p>
			</div>
		</div>-->
		<footer
			class="w-full dark:bg-surface-900 bg-gray-100 text-gray-400 dark:text-surface-600 p-4 text-sm rounded-xl !mt-10"
		>
			This website is not affiliated with circloO nor Florian van Strien.
			Licensed under GPL-3.0. Static website hosted on GitHub Pages. Backend
			hosted on Vercel. CircloO API version {{ LATEST_VERSION }}.
		</footer>
	</div>
</template>
<script setup lang="ts">
function openRepo() {
	window.open(
		'https://github.com/qaptivator/circloo-companion',
		'_blank',
		'noopener noreferrer'
	)
}
</script>
<style scoped lang="css"></style>
