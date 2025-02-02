<template>
	<div class="flex min-h-screen">
		<aside class="w-64 text-white p-4 flex flex-col space-y-4 bg-primary-400">
			<!-- should i make the sidebar bg-primary-400? edit: yes i do, or else the buttons just disappear in light mode -->
			<!-- class="... border-r" style="border-color: var(--p-form-field-border-color)" -->
			<h1
				class="flex items-center space-x-4 text-xl font-bold w-full cursor-pointer"
			>
				<!-- TODO: make this an svg instead of png -->
				<img
					src="@/assets/images/icon-white.png"
					alt="Logo"
					class="!h-12 !w-12"
				/>
				<span v-if="isMaximized"
					>circloO<br />
					companion</span
				>
				<TransparentButton
					class="!m-0"
					@click="isMaximized = !isMaximized"
				>
					<i
						v-if="isMaximized"
						class="pi pi-chevron-left"
					></i>
					<i
						v-else
						class="pi pi-chevron-right"
					></i>
				</TransparentButton>
			</h1>
			<div
				v-if="!isOnline"
				class="font-bold text-red-700"
			>
				⚠️ You are offline. Some features may not work.
			</div>
			<ul class="text-2xl list-none !bg-inherit">
				<li class="!bg-inherit">
					<!-- i just had to use my component here, im sorry -->
					<TransparentButton>
						<i class="pi pi-globe"></i>
						<span v-if="isMaximized">Browse</span>
						<!--<NuxtLink
							to="/browse"
							class="text-nowrap text-white"
							>Browse</NuxtLink
						>-->
					</TransparentButton>
					<!-- todo: make this somehow use primevue components -->
					<!--<Button
						label="Browse"
						icon="pi pi-globe"
						variant="text"
						as="router-link"
						to="/browse"
						fluid
					></Button>-->
				</li>
				<li class="bg-inherit">
					<TransparentButton disabled>
						<i class="pi pi-star"></i>
						<span v-if="isMaximized">Favorited (WIP)</span>
						<!--<NuxtLink
							to="/favorite"
							class="text-nowrap text-white"
							>Favorited (WIP)</NuxtLink
						>-->
					</TransparentButton>
				</li>
				<li class="bg-inherit">
					<TransparentButton disabled>
						<i class="pi pi-code"></i>
						<span v-if="isMaximized">Scripts (WIP)</span>
						<!--<NuxtLink
							to="/scripts"
							class="text-nowrap text-white"
							>Scripts (WIP)</NuxtLink
						>-->
					</TransparentButton>
				</li>
			</ul>
		</aside>
		<main class="flex-1 p-8">
			<slot />
		</main>
	</div>
</template>
<script setup lang="ts">
const { isOnline } = useNetworkStatus()
const isMaximized = ref(true)

// i hate the fact that the media matching code is copied here and there...
const isDesktop = ref(window.matchMedia('(min-width: 1024px)').matches)
const updateIsDesktop = () => {
	isDesktop.value = window.matchMedia('(min-width: 1024px)').matches
}

onMounted(() => {
	//updateIsDesktop()
	if (!isDesktop.value) {
		isMaximized.value = false // minimize by default
	} else {
		isMaximized.value = true
	}
	window.addEventListener('resize', updateIsDesktop)
})

onUnmounted(() => {
	window.removeEventListener('resize', updateIsDesktop)
})

/*
Breakpoint prefix	Minimum width	CSS
sm	40rem (640px)	@media (width >= 40rem) { ... }
md	48rem (768px)	@media (width >= 48rem) { ... }
lg	64rem (1024px)	@media (width >= 64rem) { ... }
xl	80rem (1280px)	@media (width >= 80rem) { ... }
2xl	96rem (1536px)	@media (width >= 96rem) { ... }
*/
onMounted(() => {})
</script>
<style scoped lang="css"></style>
