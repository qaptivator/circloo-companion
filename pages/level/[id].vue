<template>
	<div class="w-full h-full">
		<div
			v-if="loading && !invalid"
			class="flex flex-col xl:flex-row gap-8 w-full h-full"
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
			v-if="!loading && invalid"
			class="flex flex-col items-center justify-center h-full"
		>
			<h1 class="text-4xl mb-4">Level not found</h1>
			<Button
				@click="$router.back()"
				as="router-link"
				label="Go back"
			></Button>
		</div>
		<!-- v-show just doesnt render the element, but it is still processed -->
		<!-- TODO: add AdvancedLevelInfo stats somewhere in the ui (that includes the leaderboard) -->
		<div
			v-show="!loading && !invalid"
			class="flex flex-col xl:flex-row gap-8 w-full h-full"
		>
			<client-only>
				<LevelThumbnail
					ref="thumbnailRef"
					:level="level"
					class="!w-96 !h-96"
				/>
			</client-only>

			<div
				class="flex flex-col rounded-xl dark:bg-surface-900 bg-gray-100 w-full h-full p-4 md:p-8 text-sm lg:text-xl"
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
				<div class="flex flex-col xl:flex-row xl:justify-between">
					<div
						class="mt-8 grid grid-rows-3 lg:grid-rows-2 grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8 w-fit"
					>
						<LevelDetailsGrid>
							<template #title>
								<i class="pi pi-play"></i>
								Finishers
							</template>
							<template #value>
								{{ level?.plays }}
							</template>
						</LevelDetailsGrid>
						<LevelDetailsGrid>
							<template #title>
								<i class="pi pi-circle mr-1"></i>
								Completions
							</template>
							<template #value>
								{{ level?.totalCompletions }}
							</template>
						</LevelDetailsGrid>
						<LevelDetailsGrid>
							<template #title>
								<i class="pi pi-clock mr-1"></i>
								Average Time
							</template>
							<template #value>
								{{ averageDuration }}
							</template>
						</LevelDetailsGrid>
						<LevelDetailsGrid>
							<template #title>
								<i class="pi pi-user mr-1"></i>
								Players
							</template>
							<template #value>
								{{ level?.starts }}
							</template>
						</LevelDetailsGrid>
						<LevelDetailsGrid>
							<template #title>
								<i class="pi pi-star mr-1"></i>
								Stars
							</template>
							<template #value>
								{{ level?.stars }}
							</template>
						</LevelDetailsGrid>
						<LevelDetailsGrid>
							<template #title>
								<i class="pi pi-percentage mr-1"></i>
								Clear Rate (CR)
							</template>
							<template #value> {{ clearRate }}% </template>
						</LevelDetailsGrid>
					</div>
					<div
						class="rounded-lg dark:bg-black bg-white flex flex-col w-fit mt-4 xl:mt-0"
					>
						<span class="p-2 text-xl font-bold"> Leaderboard </span>
						<div
							v-if="!advInfo?.leaderboard"
							class="flex p-2"
						>
							No Leaderboard Entries
						</div>
						<div
							v-for="(entry, index) in advInfo?.leaderboard"
							class="flex justify-between p-2"
							:key="index"
							:style="{
								color:
									index === 0
										? '#fcb103'
										: index === 1
										? '#b3b3b3'
										: index === 2
										? '#cd7f32'
										: 'inherit',
							}"
						>
							<span class="font-semibold mr-10">
								{{ index + 1 }}: {{ entry.name }}
							</span>
							<span>
								{{ formatScore(entry.score) }}
							</span>
						</div>
					</div>
				</div>

				<Fieldset
					legend="Explanation"
					:toggleable="true"
					:collapsed="true"
					class="!mt-4 !text-sm !opacity-50 !w-min !text-nowrap"
				>
					<footer class="m-0">
						Completions is the amount of times your level was completed (also
						counts completions by the same person).<br />
						Finishers is amount of people who completed the level.<br />
						Players is amount of people who started the level, but not
						necessarily completed it.<br />
						Clear rate is finishers divided by players, shown as a percentage.
						This shows the approximate difficulty of a level.<br />The lower the
						clear rate, the harder the level.
					</footer>
				</Fieldset>
				<div class="mt-8 flex flex-col">
					<!-- TODO: abstract these into a component -->
					<!-- TODO: make this work somehow without tabindex="0" -->
					<!-- TODO: make this text aligned to the left -->
					<InputGroup class="!w-80">
						<InputGroupAddon class="!rounded-b-none !w-36"
							>Background</InputGroupAddon
						>
						<InputText
							tabindex="0"
							@focus="selectAllOnFocus"
							:modelValue="vector3ToRgb(colorPalette.background)"
							placeholder="RGB Color"
							readonly
						/>
						<InputGroupAddon
							class="!w-10 !rounded-b-none"
							:style="{
								'background-color': vector3ToStyle(colorPalette.background),
							}"
						></InputGroupAddon>
					</InputGroup>
					<InputGroup class="!w-80">
						<InputGroupAddon class="!rounded-none !w-36"
							>Objects</InputGroupAddon
						>
						<InputText
							tabindex="0"
							@focus="selectAllOnFocus"
							:modelValue="vector3ToRgb(colorPalette.main)"
							placeholder="RGB Color"
							readonly
						/>
						<InputGroupAddon
							class="!w-10 !rounded-none"
							:style="{
								'background-color': vector3ToStyle(colorPalette.main),
							}"
						></InputGroupAddon>
					</InputGroup>
					<InputGroup class="!w-80">
						<InputGroupAddon class="!rounded-none !w-36"
							>Player</InputGroupAddon
						>
						<InputText
							tabindex="0"
							@focus="selectAllOnFocus"
							:modelValue="vector3ToRgb(colorPalette.player)"
							placeholder="RGB Color"
							readonly
						/>
						<InputGroupAddon
							class="!w-10 !rounded-none"
							:style="{
								'background-color': vector3ToStyle(colorPalette.player),
							}"
						></InputGroupAddon>
					</InputGroup>
					<InputGroup class="!w-80">
						<InputGroupAddon class="!rounded-t-none !w-36"
							>Editor hue</InputGroupAddon
						>
						<InputText
							class="!rounded-t-none"
							tabindex="0"
							@focus="selectAllOnFocus"
							:modelValue="(level?.color || 0).toString()"
							placeholder="Hue Number"
							readonly
						/>
					</InputGroup>
				</div>
				<!-- wait, i think its actually better to use gap instead of space in flexboxes and grids. edit: i eventually just ended up using gap lol -->
				<div class="mt-8 flex flex-wrap gap-4">
					<Button
						@click="bookmarkLevel"
						:label="
							levelMetadata?.bookmarked ? 'Unbookmark level' : 'Bookmark level'
						"
						:variant="levelMetadata?.bookmarked ? undefined : 'outlined'"
					></Button>
					<Button
						@click="moreLevelsByCreator"
						:label="`More levels by ${level?.creator}`"
					></Button>
					<Button
						@click="shareLevel"
						label="Share level"
					></Button>
					<Button
						@click="$router.back()"
						label="Go back"
					></Button>

					<Button
						@click="downloadThumbnail"
						label="Download thumbnail as PNG"
						severity="secondary"
					></Button>
					<Button
						@click="downloadRawThumbnail"
						label="Download thumbnail only with borders"
						severity="secondary"
					></Button>
					<Button
						@click="downloadLevel"
						:disabled="!level?.content"
						label="Download level content"
						severity="secondary"
					></Button>
				</div>
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
				<span
					>Moderation status:
					{{ level?.moderationStatus ?? ModerationStatus.Unknown }}
				</span>
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
//import html2canvas from 'html2canvas'
import imageSize from '@coderosh/image-size'
import { useToast } from 'primevue/usetoast'

const route = useRoute()
const toast = useToast()

const loading = ref(true)
const invalid = ref(false)
const failedFetchingLeaderboard = ref(false)
const level: Ref<Level | undefined> = ref()
const advInfo: Ref<AdvancedLevelInfo | undefined> = ref()

onMounted(async () => {
	let levelId = route.params.id
	if (Array.isArray(levelId)) {
		levelId = levelId[0]
	}

	// im turning it from "definitely string" or "possibly an array" into "definitely an array" lol
	const _levels = await getLevelsById([levelId])
	const _advInfo = await getLevelAdvancedInfo(levelId)

	if (_levels.length > 0) {
		level.value = _levels[0]
		levelMetadata.value = getLevelMetadata(level.value)
	} else {
		invalid.value = true
	}

	if (_advInfo) {
		advInfo.value = _advInfo
	} else {
		failedFetchingLeaderboard.value = true
	}

	loading.value = false
})

function downloadLevel() {
	if (level.value?.content) {
		copyToClipboard(level.value?.content)
		toast.add({
			severity: 'success',
			summary: 'Successfully copied level content',
			life: 3000,
		})
	} else {
		toast.add({
			severity: 'error',
			summary: 'This level is not downloadable!',
			life: 3000,
		})
	}
}

/*const thumbnailRef = ref()
function downloadThumbnail() {
	if (level.value && thumbnailRef.value) {
		html2canvas(thumbnailRef.value)
			.then((canvas) => {
				const image = canvas.toDataURL('image/png')
				if (level.value) {
					downloadFile(image, `${level.value.name}-thumbnail.png`)
				} else {
					toast.add({
						severity: 'error',
						summary: 'Failed to download thumbnail',
						detail:
							'Contact the developer so that they will fix the issue. Error: level.value is undefined',
						life: 3000,
					})
				}
			})
			.catch((error) => {
				toast.add({
					severity: 'error',
					summary: 'Failed to download thumbnail',
					detail: `Contact the developer so that they will fix the issue. Error: ${error}`,
					life: 3000,
				})
			})
	} else {
		toast.add({
			severity: 'error',
			summary: 'Failed to download thumbnail',
			detail:
				'Contact the developer so that they will fix the issue. Error: level.value or thumbnailRef.value is undefined',
			life: 3000,
		})
	}
}*/

async function drawThumbnail(color: Vector3, thumbnailBorders: Blob) {
	return new Promise<string>((resolve, reject) => {
		const img = new Image()

		// gosh i hate js for these legacy event listeners
		// just use promises for the love of god
		img.onload = async function () {
			const arrayBuffer = await thumbnailBorders.arrayBuffer()
			const size = await imageSize(arrayBuffer)
			if (size.width !== size.height) {
				toast.add({
					severity: 'error',
					summary: 'Failed to download thumbnail',
					detail:
						'Contact the developer so that they will fix the issue. Error: thumbnail blob is not a square (width != height)',
					life: 3000,
				})
				reject('thumbnail blob is not a square (width != height)')
				return
			}

			const canvas = document.createElement('canvas')
			canvas.width = size.width
			canvas.height = size.height

			// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-
			const ctx = canvas.getContext('2d')
			//ctx.clearRect(0, 0, canvas.width, canvas.height)
			if (!ctx) {
				toast.add({
					severity: 'error',
					summary: 'Failed to download thumbnail',
					detail:
						'Contact the developer so that they will fix the issue. Error: canvas ctx is not CanvasRenderingContext2D, it is null',
					life: 3000,
				})
				// ts REALLY wants me to have that unreachable return...
				reject('canvas ctx is not CanvasRenderingContext2D, it is null')
				return
			}

			// im reusing methods omggg theyre finally useful
			ctx.fillStyle = vector3ToHex(color)
			ctx.beginPath()
			ctx.arc(size.width / 2, size.width / 2, size.width / 2, 0, Math.PI * 2)
			ctx.fill()
			ctx.drawImage(img, 0, 0)

			const imageUrl = canvas.toDataURL('image/png')
			canvas.remove()
			resolve(imageUrl)
		}

		img.src = URL.createObjectURL(thumbnailBorders)
	})
}

async function downloadThumbnail() {
	if (level.value) {
		const drawnThumbnail = await drawThumbnail(
			getColorPalette(level.value).background,
			level.value.imageURI
		)
		downloadFile(drawnThumbnail, `${level.value.name}-thumbnail.png`)
		toast.add({
			severity: 'success',
			summary: 'Successfully downloaded thumbnail',
			life: 3000,
		})
	} else {
		toast.add({
			severity: 'error',
			summary: 'Failed to download thumbnail',
			detail:
				'Contact the developer so that they will fix the issue. Error: level.value is undefined',
			life: 3000,
		})
	}
}

function downloadRawThumbnail() {
	if (level.value) {
		downloadFile(
			level.value.imageURI,
			`${level.value.name}-thumbnail-borders.png`
		)
		toast.add({
			severity: 'success',
			summary: 'Successfully downloaded thumbnail',
			life: 3000,
		})
	} else {
		toast.add({
			severity: 'error',
			summary: 'Failed to download thumbnail only with borders',
			detail:
				'Contact the developer so that they will fix the issue. Error: level.value is undefined',
			life: 3000,
		})
	}
}

function selectAllOnFocus(e: Event) {
	const target = e.target as HTMLInputElement
	target.select()
}

function vector3ToHex(v: Vector3): string {
	const r = v.x.toString(16).padStart(2, '0')
	const g = v.y.toString(16).padStart(2, '0')
	const b = v.z.toString(16).padStart(2, '0')
	return `#${r}${g}${b}`
}

function vector3ToRgb(v: Vector3): string {
	return `${v.x}, ${v.y}, ${v.z}`
}

function vector3ToStyle(v: Vector3): string {
	return `rgb(${v.x},${v.y},${v.z})`
}

const colorPalette: ComputedRef<LevelColorPalette> = computed(() => {
	const _ZERO = {
		x: 0,
		y: 0,
		z: 0,
	}
	if (level.value) {
		return getColorPalette(level.value)
	} else {
		return {
			background: _ZERO,
			main: _ZERO,
			player: _ZERO,
		}
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
	if (level.value?.creationTime) {
		copyToClipboard(level.value?.creationTime.getTime().toString())
		toast.add({
			severity: 'success',
			summary: 'Successfully copied the creation time (in unix time)',
			life: 3000,
		})
	}
}

function copyId() {
	if (level.value?.id) {
		copyToClipboard(level.value?.id)
		toast.add({
			severity: 'success',
			summary: 'Successfully copied the level ID',
			life: 3000,
		})
	}
}

function shareLevel() {
	copyToClipboard(
		window.location.origin + '/circloo-companion' + route.fullPath
	)
	toast.add({
		severity: 'success',
		summary: 'Successfully copied the URL to this level',
		life: 3000,
	})
}

function moreLevelsByCreator() {
	navigateTo(
		`/browse?searchMode=creator&searchQuery=${level.value?.creator}&sortMode=newest&filterMode=featured&duration=none&page=1&itemsPerPage=10`
	)
}

const levelMetadata = ref<LevelMetadata>()
function bookmarkLevel() {
	if (!level.value) return

	const metadata = getLevelMetadata(level.value)
	metadata.bookmarked = !metadata.bookmarked
	levelMetadata.value = metadata
	setLevelMetadata(level.value, metadata)

	toast.add({
		severity: 'success',
		summary: metadata.bookmarked
			? 'Successfully bookmarked the level'
			: 'Successfully unbookmarked the level',
		life: 3000,
	})
}
</script>
<style scoped lang="css"></style>
