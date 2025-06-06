<template>
	<div class="w-full h-screen flex flex-col">
		<div
			v-if="!isOnline"
			class="font-bold text-white bg-red-700 p-2 w-full"
		>
			⚠️ You are offline. Some features may not work.
		</div>
		<div class="flex h-full">
			<!--w-64-->
			<!-- TODO: make this a top bar instead of sidebar -->
			<aside
				class="w-16 lg:w-64 h-full text-white p-4 flex flex-col space-y-4 bg-primary-400"
			>
				<!-- should i make the sidebar bg-primary-400? edit: yes i do, or else the buttons just disappear in light mode -->
				<!-- class="... border-r" style="border-color: var(--p-form-field-border-color)" -->
				<h1
					@click="navigateTo('/')"
					class="flex items-center justify-center space-x-4 text-xl font-bold w-full cursor-pointer"
					:class="{ '!p-0': isDesktop }"
				>
					<!-- TODO: make this an svg instead of png -->
					<!-- TODO: fix this image being wrong height when in mobile view -->
					<img
						src="@/assets/images/icon-white.png"
						alt="Logo"
						class="w-6 h-6 lg:w-12 lg:h-12"
					/>
					<span v-if="isDesktop"
						>circloO<br />
						companion</span
					>
					<!--<TransparentButton
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
				</TransparentButton>-->
				</h1>
				<ul class="text-2xl list-none !bg-inherit">
					<li class="!bg-inherit">
						<!-- i just had to use my component here, im sorry -->
						<NuxtLink to="/browse">
							<TransparentButton class="!text-white">
								<i class="pi pi-globe"></i>
								<span v-if="isDesktop">Browse</span>
							</TransparentButton>
						</NuxtLink>

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
						<NuxtLink to="/bookmarks">
							<TransparentButton class="!text-white">
								<i class="pi pi-bookmark"></i>
								<span v-if="isDesktop">Bookmarks</span>
							</TransparentButton>
						</NuxtLink>
					</li>
					<li class="bg-inherit">
						<NuxtLink to="/faq">
							<TransparentButton class="!text-white">
								<i class="pi pi-question-circle"></i>
								<span v-if="isDesktop">FAQ</span>
							</TransparentButton>
						</NuxtLink>
					</li>
					<li class="bg-inherit">
						<TransparentButton disabled>
							<i class="pi pi-code"></i>
							<span v-if="isDesktop">Scripts (WIP)</span>
							<!--<NuxtLink
							to="/scripts"
							class="text-nowrap text-white"
							>Scripts (WIP)</NuxtLink
						>-->
						</TransparentButton>
					</li>
				</ul>
			</aside>
			<main class="flex-1 overflow-y-auto h-full p-8">
				<slot />
			</main>
		</div>
	</div>
</template>
<script setup lang="ts">
const { isOnline } = useNetworkStatus()
//const isMaximized = ref(true)

// i hate the fact that the media matching code is copied here and there...
const isDesktop = ref(window.matchMedia('(min-width: 1024px)').matches)
const updateIsDesktop = () => {
	isDesktop.value = window.matchMedia('(min-width: 1024px)').matches
}

onMounted(() => {
	//updateIsDesktop()
	/*if (!isDesktop.value) {
		isMaximized.value = false // minimize by default
	} else {
		isMaximized.value = true
	}*/
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
