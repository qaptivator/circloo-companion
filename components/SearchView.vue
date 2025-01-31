<template>
	<div class="flex flex-col space-y-4 items-center">
		<!-- search query -->
		<div class="flex space-x-4 justify-center">
			<InputGroup class="!w-[500px]">
				<InputText
					v-model="searchQuery"
					placeholder="Level name, creator, ID..."
				/>
				<InputGroupAddon>
					<Select
						v-model="searchMode"
						id="searchMode-select"
						:options="[
							{ label: 'Name', value: 'name' },
							{ label: 'Creator', value: 'creator' },
							{ label: 'ID', value: 'id' },
						]"
						optionLabel="label"
						placeholder="Search"
						class="!min-w-20"
					/>
				</InputGroupAddon>
				<!--<InputGroupAddon>
					<Button
						@click="showAdvanced = !showAdvanced"
						icon="pi pi-cog"
						variant="outlined"
						severity="contrast"
					></Button>
				</InputGroupAddon>-->
				<!--<InputGroupAddon>
					<i class="pi pi-search"> </i>
				</InputGroupAddon>-->
			</InputGroup>
			<!--<InputGroup>
				<InputGroupAddon>
					<Button
						@click="showAdvanced = !showAdvanced"
						icon="pi pi-cog"
						variant="outlined"
						severity="contrast"
					></Button>
				</InputGroupAddon>
				<InputGroupAddon>
					<Button
						@click="showAdvanced = !showAdvanced"
						icon="pi pi-cog"
						variant="outlined"
						severity="contrast"
					></Button>
				</InputGroupAddon>
			</InputGroup>-->
		</div>

		<!-- filters and stuff -->
		<div class="flex space-x-4 justify-center">
			<!-- TODO: add "search by creator" option, which just prepends "Levels by " to the search query -->
			<FloatLabel variant="on">
				<Select
					v-model="sortMode"
					id="sortMode-select"
					:options="[
						{ label: 'Newest', value: 'newest' },
						{ label: 'Oldest', value: 'oldest' },
						{ label: 'Stars', value: 'stars' },
						{ label: 'Plays', value: 'plays' },
					]"
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
					id="filterMode-select"
					:options="[
						{ label: 'Featured', value: 'featured' },
						{ label: 'Highly Rated', value: 'highly-rated' },
						{ label: 'Recent', value: 'recent' },
					]"
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
					id="duration-select"
					:options="[
						{ label: 'None', value: 'none' },
						{ label: 'XS (<20s)', value: 'xs' },
						{ label: 'Short (20-60s)', value: 'short' },
						{ label: 'Medium (60-180s)', value: 'medium' },
						{ label: 'Long (180-600s)', value: 'long' },
						{ label: 'XL (>600s)', value: 'xl' },
					]"
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
			v-if="showAdvanced"
			class="flex space-x-4 justify-center"
		>
			<!-- todo: add more options such as "show all levels" or "version number" -->
			<div class="flex items-center gap-2">
				<Checkbox
					v-model="showAllLevels"
					id="showAllLevels-select"
					binary
				/>
				<label for="showAllLevels-select"
					>Show all levels (even unmodded ones)</label
				>
			</div>
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
				/>
				<label for="itemsPerPage-select">Items per page</label>
			</FloatLabel>
		</div>

		<!-- page selector 
		 oops i cant use the paginator component because i have no idea how many pages i have -->
		<!--<Paginator
			:template="{
				default: 'FirstPageLink PrevPageLink JumpToPageInput NextPageLink',
			}"
			:rows="10"
			:totalRecords="120"
		>
			<template #start="slotProps">
				Page: {{ slotProps.state.page }} First:
				{{ slotProps.state.first }} Rows: {{ slotProps.state.rows }}
			</template>
		</Paginator>-->

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
					><template #incrementicon>
						<span class="pi pi-chevron-right" />
					</template>
					<template #decrementicon>
						<span class="pi pi pi-chevron-left" /> </template
				></InputNumber>
				<label for="page-select">Page</label>
			</FloatLabel>
		</div>

		<!-- the actual levels -->
		<!-- todo: handle level previews overflowing on smaller devices -->
		<div class="grid grid-rows-2 grid-cols-5 gap-4 relative">
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
		<div v-if="fetchedLevels.length === 0">
			No results found (or you're offline)
		</div>
	</div>
</template>
<script setup lang="ts">
// TODO: add types here
const searchQuery: Ref<string> = ref('')

// what the hell is this :skull:
const searchMode: Ref<
	| {
			label: string
			value: string
	  }
	| undefined
> = ref({ label: 'Name', value: 'name' })

const sortMode: Ref<
	| {
			label: string
			value: string
	  }
	| undefined
> = ref({ label: 'Newest', value: 'newest' })

const filterMode: Ref<
	| {
			label: string
			value: string
	  }[]
	| undefined
> = ref([{ label: 'Featured', value: 'featured' }])

const duration: Ref<
	| {
			label: string
			value: string
	  }
	| undefined
> = ref({ label: 'None', value: 'none' })

const page: Ref<number> = ref(1)
const realPage = computed(() => page.value - 1)
const itemsPerPage: Ref<number> = ref(10)
const showAllLevels: Ref<boolean> = ref(false)

const fetchedLevels: Ref<Level[]> = ref([])
const showAdvanced: Ref<boolean> = ref(false)

watch(searchMode, fetchLevels)
watch(searchQuery, fetchLevels) // todo: add timeout for this
watch(sortMode, fetchLevels)
watch(filterMode, fetchLevels)
watch(duration, fetchLevels)
watch(page, fetchLevels)
watch(itemsPerPage, fetchLevels)
watch(showAllLevels, fetchLevels)

onMounted(() => {
	//sortMode.value = { label: 'Newest', value: 'newest' }
	//duration.value = { label: 'None', value: 'none' }
	fetchLevels()
})

function modifyPage(val: number) {
	const newPage = page.value + val
	if (newPage > 0) {
		page.value = newPage
		return true
	} else {
		return false
	}
}

async function fetchLevels() {
	//fetchedLevels.value = []
	//fetchedLevels.value = await getLevels(sortMode)

	let query = ''

	// sortMode
	// these checks for value in refs are probably useless but whatever
	// this looks so cursed lol (ref.value.value)
	if (sortMode.value && sortMode.value?.value) {
		switch (sortMode.value.value) {
			//case 'newest':
			// apparently newest doesnt have sort:newest
			//query += 'sort:newest '
			//	break
			case 'oldest':
				query += 'sort:oldest '
				break
			case 'stars':
				query += 'sort:stars '
				break
			case 'plays':
				query += 'sort:plays '
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
		query += SORT_MODE_LOOKUP[sortMode.value?.value] ?? ''
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
	if (filters && filters.length > 0) {
		query += `filter:${filters.join(',')} `
	}

	// searchQuery
	if (searchQuery.value) {
		if (searchMode.value?.value === 'creator') {
			query += `Levels by ${searchQuery.value}`
		} else {
			// rookie mistake 2: append just the ref instead of its value
			query += searchQuery.value
		}
	}

	let levels: Level[] = []

	console.log('query:', query)

	if (
		searchMode.value?.value === 'name' ||
		searchMode.value?.value === 'creator'
	) {
		levels = await getLevels(
			SortMode.Search,
			realPage.value,
			itemsPerPage.value > 0 ? itemsPerPage.value ?? 10 : 10,
			showAllLevels.value ? Spec.All : Spec.Modded,
			query
		)
	} else if (searchMode.value?.value === 'id') {
		levels = await getLevelsById([query])
	}

	/* oops, this just prevents any levels from showing if results are not found
	if (levels.length > 0) {
		fetchedLevels.value = levels
	}*/
	fetchedLevels.value = levels
}

// todo: add "showClear" to MultiSelect to add a selection clearing bubtton (unfortunately the button just clips inside your selections)
</script>
<style scoped lang="css"></style>
