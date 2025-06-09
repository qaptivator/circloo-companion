<template>
	<div class="flex flex-col space-y-4 items-center">
		<!-- search query -->
		<div class="flex space-x-4 justify-center">
			<InputGroup class="!w-[300px] md:!w-[500px]">
				<InputText
					v-model="searchQuery"
					placeholder="Level name, creator, ID..."
				/>
				<InputGroupAddon>
					<Select
						v-model="searchMode"
						:options="searchModeOptions"
						id="searchMode-select"
						optionLabel="label"
						placeholder="Search"
						class="!min-w-20"
					/>
				</InputGroupAddon>
			</InputGroup>
		</div>

		<!-- filters and stuff -->
		<div
			v-if="showFetchOptions"
			class="flex flex-wrap md:flex-nowrap gap-4 justify-center"
		>
			<FloatLabel variant="on">
				<Select
					v-model="sortMode"
					:options="sortModeOptions"
					id="sortMode-select"
					optionLabel="label"
					placeholder="Sort by..."
					class="!min-w-48"
				/>
				<label for="sortMode-select">Sort</label>
			</FloatLabel>

			<FloatLabel variant="on">
				<!-- fixme: FloatLabel appears on top of MultiSelect's placeholder when not focused. FIXED by adding p-inputwrapper-filled" into classes -->
				<MultiSelect
					v-model="filterMode"
					:options="filterModeOptions"
					id="filterMode-select"
					optionLabel="label"
					placeholder="Filter by..."
					filter
					class="!min-w-48 p-inputwrapper-filled"
				/>
				<label for="filterMode-select">Filter</label>
			</FloatLabel>

			<!-- add some sort of "advanced mode" which makes this a multi select. edit: adding multiple durations breaks the api womp womp -->
			<FloatLabel variant="on">
				<Select
					v-model="duration"
					:options="durationOptions"
					id="duration-select"
					optionLabel="label"
					placeholder="Avg duration..."
					class="!min-w-48"
				/>
				<label for="duration-select">Avg duration</label>
			</FloatLabel>

			<Button
				@click="showAdvanced = !showAdvanced"
				icon="pi pi-cog"
				variant="outlined"
				severity="contrast"
			></Button>
		</div>

		<!-- other settings-->
		<div
			v-if="showAdvanced || !showFetchOptions"
			class="flex space-x-4 justify-center"
		>
			<!-- todo: add more options such as "show all levels" or "version number" -->
			<!--<div class="flex items-center gap-2">
				<ToggleSwitch
					v-model="showAllLevels"
					id="showAllLevels-select"
				/>
				<label for="showAllLevels-select"
					>Show all levels (even unmodded ones)</label
				>
			</div>-->
			<!-- TODO: finish version selection -->
			<!--FloatLabel variant="on">
				<InputNumber
					v-model="versionNumber"
					id="versionNumber-select"
					inputId="minmax"
					:useGrouping="false"
					:min="0"
					:max="LATEST_VERSION"
				>
				</InputNumber>
				<label for="versionNumber-select">Version</label>
			</FloatLabel>-->
			<FloatLabel variant="on">
				<InputNumber
					v-model="itemsPerPage"
					id="itemsPerPage-select"
					inputId="minmax"
					:useGrouping="false"
					:min="1"
					:max="20"
					showButtons
					buttonLayout="horizontal"
				>
					<template #incrementicon>
						<span class="pi pi-chevron-right" />
					</template>
					<template #decrementicon>
						<span class="pi pi pi-chevron-left" />
					</template>
				</InputNumber>
				<label for="itemsPerPage-select">Items per page</label>
			</FloatLabel>
			<Button
				@click="resetOptions"
				variant="outlined"
				severity="contrast"
				label="Reset options"
			></Button>
		</div>

		<!-- the ACTUAL page selector -->
		<!-- todo: make the InputNumber's smaller for gods sake. i cant figure out how to make them smaller, even with passthrough... -->
		<div>
			<FloatLabel variant="on">
				<InputNumber
					v-model="page"
					id="page-select"
					inputId="minmax"
					:useGrouping="false"
					:min="1"
					showButtons
					buttonLayout="horizontal"
				>
					<template #incrementicon>
						<span class="pi pi-chevron-right" />
					</template>
					<template #decrementicon>
						<span class="pi pi pi-chevron-left" />
					</template>
				</InputNumber>
				<label for="page-select">Page</label>
			</FloatLabel>
		</div>

		<!-- the actual levels -->
		<!-- todo: handle level previews overflowing on smaller devices -->
		<div
			v-if="!loading"
			class="grid grid-rows-5 grid-cols-2 md:grid-rows-2 md:grid-cols-5 gap-4 relative"
		>
			<div v-for="level in fetchedLevels">
				<!--{{ level.name }}-->
				<LevelPreview :level="level" />
			</div>
			<!--<Button
				@click="modifyPage(-1)"
				class="!absolute !top-1/2 !-left-20"
				icon="pi pi-chevron-left"
			></Button>
			<Button
				@click="modifyPage(1)"
				class="!absolute !top-1/2 !-right-20"
				icon="pi pi-chevron-right"
			></Button>-->
		</div>
		<div v-if="loading">
			<i
				class="pi pi-spin pi-spinner"
				style="font-size: 2rem"
			></i>
		</div>
		<div
			v-else-if="errorOccurred"
			class="text-red-400"
		>
			An error occurred while fetching levels. See the console for further
			details.
		</div>
		<div v-else-if="fetchedLevels.length === 0">
			No results found (or you're offline)
		</div>
	</div>
</template>
<script setup lang="ts">
import { expect } from 'vitest'

const router = useRouter()
const route = useRoute()

const SEARCH_QUERY_TIMEOUT_MS = 500
const loading = ref(false)
const errorOccurred = ref(true)

type SelectOption =
	| {
			label: string
			value: string
	  }
	| undefined
type SelectOptions = {
	label: string
	value: string
}[]

// TODO: add types here
const searchQuery: Ref<string> = ref('')

// what the hell is this :skull:
const searchModeOptions: Ref<SelectOptions> = ref([
	{ label: 'Name', value: 'name' },
	{ label: 'Creator', value: 'creator' },
	{ label: 'ID', value: 'id' },
])
const searchMode: Ref<SelectOption> = ref({ label: 'Name', value: 'name' })

const sortModeOptions: Ref<SelectOptions> = ref([
	{ label: 'Newest', value: 'newest' },
	{ label: 'Oldest', value: 'oldest' },
	{ label: 'Stars', value: 'stars' },
	{ label: 'Plays', value: 'plays' },
])
const sortMode: Ref<SelectOption> = ref({ label: 'Newest', value: 'newest' })

const filterModeOptions: Ref<SelectOptions> = ref([
	{ label: 'Featured', value: 'featured' },
	{ label: 'Highly Rated', value: 'highly-rated' },
	{ label: 'Recent', value: 'recent' },
])
const filterMode: Ref<
	| {
			label: string
			value: string
	  }[]
	| undefined
> = ref([{ label: 'Featured', value: 'featured' }]) // it is a MultiSelect, not Select

const durationOptions: Ref<SelectOptions> = ref([
	{ label: 'None', value: 'none' },
	{ label: 'XS (<20s)', value: 'xs' },
	{ label: 'Short (20-60s)', value: 'short' },
	{ label: 'Medium (60-180s)', value: 'medium' },
	{ label: 'Long (180-600s)', value: 'long' },
	{ label: 'XL (>600s)', value: 'xl' },
])
const duration: Ref<SelectOption> = ref({ label: 'None', value: 'none' })

const page: Ref<number> = ref(1)
const realPage = computed(() => page.value - 1)
const itemsPerPage: Ref<number> = ref(10)
//const showAllLevels: Ref<boolean> = ref(false)
const versionNumber: Ref<number> = ref(LATEST_VERSION)

const fetchedLevels: Ref<Level[]> = ref([])
const showAdvanced: Ref<boolean> = ref(false)
const showFetchOptions = computed(() => searchMode.value?.value === 'name')

const haveSearchQueryChanges = ref(false)
let searchQueryTimeout: NodeJS.Timeout | undefined
watch(searchQuery, () => {
	if (!haveSearchQueryChanges.value) haveSearchQueryChanges.value = true
	if (searchQueryTimeout) clearTimeout(searchQueryTimeout)
	searchQueryTimeout = setTimeout(() => {
		if (haveSearchQueryChanges.value) {
			haveSearchQueryChanges.value = false
			fetchLevels()
		}
	}, SEARCH_QUERY_TIMEOUT_MS)
})
watch(searchMode, fetchLevels)
watch(sortMode, fetchLevels)
watch(filterMode, fetchLevels)
watch(duration, fetchLevels)
watch(page, fetchLevels)
watch(itemsPerPage, fetchLevels)
//watch(showAllLevels, fetchLevels)

function resetOptions() {
	sortMode.value = { label: 'Newest', value: 'newest' }
	duration.value = { label: 'None', value: 'none' }
	filterMode.value = [{ label: 'Featured', value: 'featured' }]
}

type PageParamsQuery = {
	searchQuery?: string
	searchMode?: string
	sortMode?: string
	filterMode?: string[]
	duration?: string
	page?: number
	itemsPerPage?: number
	//showAllLevels?: number // undefined for false, 1 for true. booleans are not supported in url queries
}

onMounted(() => {
	//sortMode.value = { label: 'Newest', value: 'newest' }
	//duration.value = { label: 'None', value: 'none' }
	fetchLevels()
	recoverParamsFromRoute()
})

const silenceWatchers = ref(false)
function recoverParamsFromRoute() {
	silenceWatchers.value = true

	const _createLookupTable = (arr: SelectOptions) => {
		return arr.reduce((acc, obj) => {
			acc[obj.value] = obj.label
			return acc
		}, {} as { [key: string]: string })
	}

	const query: PageParamsQuery = route.query

	if (query.searchQuery) searchQuery.value = query.searchQuery

	const _searchModeLookup = _createLookupTable(searchModeOptions.value)
	if (query.searchMode)
		searchMode.value = {
			label: _searchModeLookup[query.searchMode],
			value: query.searchMode,
		}

	const _sortModeLookup = _createLookupTable(sortModeOptions.value)
	if (query.sortMode)
		sortMode.value = {
			label: _sortModeLookup[query.sortMode],
			value: query.sortMode,
		}

	// oh, i need to specify the type of the key...
	/*const filterModeLookup: { [key: string]: string } = {
		featured: 'Featured',
		'highly-rated': 'Highly rated',
		recent: 'Recent',
	}*/
	const _filterModeLookup = _createLookupTable(filterModeOptions.value)
	if (query.filterMode) {
		if (Array.isArray(query.filterMode)) {
			filterMode.value = query.filterMode.map((v) => {
				return { label: _filterModeLookup[v], value: v }
			})
		} else {
			filterMode.value = [
				{
					label: _filterModeLookup[query.filterMode],
					value: query.filterMode,
				},
			]
		}
		//console.log('filterMode.value', filterMode.value)
	}

	// i honestly quite hate this piece of code
	/*filterMode.value = query.filterMode.map((v) => ({
			label:
				filterModeOptions.value?.find((q) => {
					q.value === v
				})?.label ?? v,
			value: v,
		}))*/

	const _durationookup = _createLookupTable(durationOptions.value)
	if (query.duration)
		duration.value = {
			label: _durationookup[query.duration],
			value: query.duration,
		}

	if (query.page) page.value = query.page

	if (query.itemsPerPage) itemsPerPage.value = query.itemsPerPage

	//if (query.showAllLevels) showAllLevels.value = query.showAllLevels === 1

	silenceWatchers.value = false
}

async function fetchLevels() {
	if (silenceWatchers.value) return
	//fetchedLevels.value = []
	//fetchedLevels.value = await getLevels(sortMode)

	// --- router ---

	let routerQuery: PageParamsQuery = {}

	if (searchQuery.value) routerQuery.searchQuery = searchQuery.value

	if (
		searchMode.value &&
		searchMode.value?.value /*&&
		searchMode.value.value !== 'name'*/
	)
		routerQuery.searchMode = searchMode.value.value

	if (
		sortMode.value &&
		sortMode.value?.value /*&&
		sortMode.value.value !== 'newest'*/
	)
		routerQuery.sortMode = sortMode.value.value

	if (filterMode.value /*&& filterMode.value[0].value !== 'featured'*/)
		routerQuery.filterMode = filterMode.value.map((v) => v.value)

	if (
		duration.value &&
		duration.value?.value /*&&
		duration.value.value !== 'none'*/
	)
		routerQuery.duration = duration.value.value

	if (page.value /*&& page.value !== 1*/) routerQuery.page = page.value

	if (itemsPerPage.value /*&& itemsPerPage.value !== 10*/)
		routerQuery.itemsPerPage = itemsPerPage.value

	//if (showAllLevels.value) routerQuery.showAllLevels = 1

	router.replace({
		path: route.path,
		query: routerQuery,
	})

	// --- fetching ---

	let fetchQuery = ''

	// sortMode
	// these checks for value in refs are probably useless but whatever
	// this looks so cursed lol (ref.value.value)
	if (
		sortMode.value &&
		sortMode.value?.value &&
		searchMode.value?.value !== 'id'
	) {
		switch (sortMode.value.value) {
			//case 'newest':
			// apparently newest doesnt have sort:newest
			//query += 'sort:newest '
			//	break
			case 'oldest':
				fetchQuery += 'sort:oldest '
				break
			case 'stars':
				fetchQuery += 'sort:stars '
				break
			case 'plays':
				fetchQuery += 'sort:plays '
				break
		}
	}

	/*if (
		sortMode.value &&
		sortMode.value?.value &&
		// @ts-ignore
		SORT_MODE_LOOKUP[sortMode.value?.value]
	) {
		// @ts-ignore
		fetchQuery += SORT_MODE_LOOKUP[sortMode.value?.value] ?? ''
	}*/

	// filterMode and duration
	let filters = []
	if (filterMode.value) {
		for (const _mode of filterMode.value) {
			if (_mode && _mode.value) {
				filters.push(_mode.value)
			}
		}
	}
	if (
		duration.value &&
		duration.value?.value &&
		duration.value.value !== 'none'
	) {
		filters.push(duration.value?.value)
	}
	if (filters && filters.length > 0 && searchMode.value?.value !== 'id') {
		fetchQuery += `filter:${filters.join(',')} `
	}

	// searchQuery
	if (searchQuery.value) {
		if (searchMode.value?.value === 'creator') {
			// filters dont work here
			// todo: add a notice that filters dont work with creator and id
			fetchQuery = `Levels by ${searchQuery.value}`
		} else {
			// rookie mistake 2: append just the ref instead of its value
			fetchQuery += searchQuery.value
		}
	}

	errorOccurred.value = false
	loading.value = true
	try {
		let levels: Level[] = []
		if (
			searchMode.value?.value === 'name' ||
			searchMode.value?.value === 'creator'
		) {
			levels = await getLevels(
				SortMode.Search,
				realPage.value,
				itemsPerPage.value > 0 ? itemsPerPage.value ?? 10 : 10,
				Spec.Modded,
				//showAllLevels.value ? Spec.All : Spec.Modded,
				fetchQuery
				// versionNumber.value
			)
		} else if (searchMode.value?.value === 'id') {
			levels = await getLevelsById([fetchQuery])
		}

		/* oops, this just prevents any levels from showing if results are not found
		if (levels.length > 0) {
			fetchedLevels.value = levels
		}*/
		fetchedLevels.value = levels
	} catch (error) {
		errorOccurred.value = true
		console.error('Error fetching levels:', error)
		fetchedLevels.value = []
	} finally {
		loading.value = false
	}
}

function modifyPage(val: number) {
	const newPage = page.value + val
	if (newPage > 0) {
		page.value = newPage
		return true
	} else {
		return false
	}
}

// todo: add "showClear" to MultiSelect to add a selection clearing bubtton (unfortunately the button just clips inside your selections)
</script>
<style scoped lang="css"></style>
