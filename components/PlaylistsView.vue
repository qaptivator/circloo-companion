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
						:options="searchModeOptions"
						id="searchMode-select"
						optionLabel="label"
						placeholder="Search"
						class="!min-w-20"
					/>
				</InputGroupAddon>
			</InputGroup>
		</div>
	</div>
</template>
<script setup lang="ts">
const router = useRouter()
const route = useRoute()

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
const searchQuery: Ref<string> = ref('')

const searchModeOptions: Ref<SelectOptions> = ref([
	{ label: 'Name', value: 'name' },
	{ label: 'Creator', value: 'creator' },
	{ label: 'ID', value: 'id' },
])
const searchMode: Ref<SelectOption> = ref({ label: 'Name', value: 'name' })

onMounted(() => {
	/*console.log(
		playlistToQuery({
			name: 'hello world',
			creator: 'the guy',
			color: 231,
			levels: ['2afujiqaw', '12qwsdjuf', 'a1281221'],
		})
	)*/
})
</script>
<style scoped lang="css"></style>
