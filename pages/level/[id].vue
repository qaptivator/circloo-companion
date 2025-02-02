<template>
	<div class="w-full h-full">
		<div
			v-if="loading && !notFound"
			class="flex space-x-8 w-full h-full"
		>
			<Skeleton
				shape="circle"
				size="24rem"
			/>
			<Skeleton
				width="70rem"
				height="55rem"
				borderRadius="16px"
			/>
		</div>
		<div
			v-if="!loading && notFound"
			class="flex flex-col items-center justify-center h-full"
		>
			<h1 class="text-4xl mb-4">Level not found</h1>
			<Button
				as="router-link"
				label="Go back"
				to="/browse"
			></Button>
		</div>
		<div
			v-if="!loading && !notFound"
			class="flex flex-col lg:flex-row gap-8 w-full h-full"
		>
			<LevelThumbnail
				:level="level"
				class="!w-96 !h-96"
			/>
			<div
				class="flex flex-col rounded-xl dark:bg-surface-900 bg-gray-100 w-full h-full p-8 text-sm lg:text-xl"
			>
				<h1 class="font-bold text-3xl">{{ level?.name }}</h1>
				<h2 class="opacity-50">by {{ level?.creator }}</h2>
				<p
					v-if="level?.description"
					class="mt-8"
				>
					{{ level?.description }}
				</p>
				<p
					v-if="level?.walkthroughLink"
					class="mt-8 text-md"
				>
					Walkthrough link:
					<a
						:href="level?.walkthroughLink"
						target="_blank"
						title="Walkthrough link"
						rel="noopener noreferrer"
						>{{ level?.walkthroughLink }}</a
					>
				</p>
				<!-- TODO: add the download thumbnail button -->
				<!-- TODO: add the download button with an api check for blacklisted levels (requested by creator) -->
				<!-- TODO: add the leaderboard -->
				<!-- TODO: add the "more levels by <creator>" button. for that i need to handle params in browse.vue -->
				<div
					class="mt-8 grid grid-rows-3 lg:grid-rows-2 grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8 w-fit"
				>
					<section>
						<span class="flex font-bold items-center">
							<!-- we dont need it here, i think -->
							<i class="pi pi-play"></i>
							Finishers
						</span>
						<div class="text-3xl">{{ level?.plays }}</div>
					</section>
					<section>
						<span class="flex font-bold items-center">
							<i class="pi pi-circle mr-1"></i>
							Completions
						</span>
						<div class="text-3xl">{{ level?.totalCompletions }}</div>
					</section>
					<section>
						<span class="flex font-bold items-center">
							<i class="pi pi-clock mr-1"></i>
							Average Time
						</span>
						<div class="text-3xl">
							{{ averageDuration }}
						</div>
					</section>
					<section>
						<span class="flex font-bold items-center">
							<!-- we dont need it here, i think -->
							<i class="pi pi-user mr-1"></i>
							Players
						</span>
						<div class="text-3xl">{{ level?.starts }}</div>
					</section>
					<section>
						<span class="flex font-bold items-center">
							<i class="pi pi-star mr-1"></i>
							Stars
						</span>
						<div class="text-3xl">{{ level?.stars }}</div>
					</section>
					<section>
						<span class="flex font-bold items-center">
							<i class="pi pi-percentage mr-1"></i>
							Clear Rate (CR)
						</span>
						<div class="text-3xl">{{ clearRate }}%</div>
					</section>
				</div>
				<Fieldset
					legend="Explanation"
					:toggleable="true"
					:collapsed="true"
					class="!mt-4 !text-sm !opacity-50 !w-min !text-nowrap"
				>
					<footer class="m-0">
						Completions is amount of times your level was completed (also counts
						completions by the same person).<br />
						Finishers is amount of people completed the level.<br />
						Players is amount of people who started the level, but not
						necessarily completed the level.<br />
						Clear rate is finishers divided by players. This show the
						approximate difficulty of the level.<br />The lower the clear rate,
						the harder the level.
					</footer>
				</Fieldset>
				<div class="mt-8 flex items-center">
					<span
						>Uploaded on
						{{
							level?.creationTime ? formatDate(level?.creationTime) : 'unknown'
						}}</span
					>
					<Button
						@click="copyCreationTime"
						class="!ml-4"
						icon="pi pi-copy"
						size="small"
						variant="outlined"
						severity="contrast"
					></Button>
				</div>
				<div class="mt-4 flex items-center opacity-50">
					<span>Level ID: {{ level?.id ? level?.id : 'unknown' }}</span>
					<Button
						@click="copyId"
						class="!ml-4"
						icon="pi pi-copy"
						size="small"
						variant="outlined"
						severity="contrast"
					></Button>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
const route = useRoute()

const loading = ref(true)
const notFound = ref(false)
const level: Ref<Level | undefined> = ref()

onMounted(async () => {
	let levelId = route.params.id
	if (Array.isArray(levelId)) {
		levelId = levelId[0]
	}

	// im turning it from "definitely string" or "possibly an array" into "definitely an array" lol
	const levels = await getLevelsById([levelId])

	loading.value = false
	if (levels.length > 0) {
		level.value = levels[0]
	} else {
		notFound.value = true
	}
})

function formatDuration(seconds: number): string {
	const minutes = Math.floor(seconds / 60)
	const remainingSeconds = Math.floor(seconds % 60)
	const milliseconds = Math.floor((seconds % 1) * 100)
	return `${minutes}:${remainingSeconds
		.toString()
		.padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`
}

const averageDuration = computed(() => {
	const seconds = roundDecimalPlace(
		(level.value ? calculateAverageDuration(level.value) : -1) / 60,
		2
	)
	return formatDuration(seconds)
})

const clearRate = computed(() => {
	if (level.value) {
		return roundDecimalPlace((level.value.plays / level.value.starts) * 100)
	} else {
		return -1
	}
})

function formatDate(date: Date): string {
	const readableDate = new Intl.DateTimeFormat('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: true,
	}).format(date)
	const ingameDate = new Intl.DateTimeFormat('en-US', {
		month: 'numeric',
		day: 'numeric',
		year: 'numeric',
	}).format(date)
	return `${readableDate} (${ingameDate})`
}

function copyToClipboard(text: string) {
	navigator.clipboard.writeText(text)
}

function copyCreationTime() {
	if (level.value?.creationTime)
		copyToClipboard(level.value?.creationTime.getTime().toString())
}

function copyId() {
	if (level.value?.id) copyToClipboard(level.value?.id)
}
</script>
<style scoped lang="css"></style>
