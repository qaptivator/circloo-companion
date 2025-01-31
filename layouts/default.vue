<template>
	<div class="flex min-h-screen">
		<aside class="w-64 text-white p-4 flex flex-col space-y-4 bg-primary-400">
			<!-- should i make the sidebar bg-primary-400? edit: yes i do, or else the buttons just disappear in light mode -->
			<!-- class="... border-r" style="border-color: var(--p-form-field-border-color)" -->
			<h1
				class="flex items-center space-x-4 text-xl font-bold w-full cursor-pointer"
			>
				<img
					src="@/assets/images/icon-white.png"
					alt="Logo"
					class="h-12 w-12"
				/>
				<span
					>circloO<br />
					companion</span
				>
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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
							/>
						</svg>
						<NuxtLink to="/browse">Browse</NuxtLink>
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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
							/>
						</svg>
						<NuxtLink to="/favorite">Favorited (WIP)</NuxtLink>
					</TransparentButton>
				</li>
				<li class="bg-inherit">
					<TransparentButton disabled>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
							/>
						</svg>

						<NuxtLink to="/scripts">Scripts (WIP)</NuxtLink>
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
</script>
<style scoped lang="css"></style>
