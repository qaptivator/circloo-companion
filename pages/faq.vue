<template>
	<div class="flex flex-col gap-8 items-center">
		<h1 class="font-bold text-4xl">Frequently Asked Questions (FAQ)</h1>
		<div>
			<span class="font-bold text-xl">What is circloO?</span>
			<p class="ml-5">
				It is a 2D physics-based game (or shall I say "platformer"),<br />
				where you control a circle rolling around in circular levels.<br />
				This website was made for more advanced people,<br />who seek to know
				more about the game, and who wants to push the limits.
			</p>
		</div>
		<div>
			<span class="font-bold text-xl"
				>Where can I join Florian's Games Discord server?</span
			>
			<p class="ml-5">
				The invite link to the discord server (13+):
				<NuxtLink
					to="https://discord.gg/r4H25JM"
					target="_blank"
					>Florian's Games</NuxtLink
				>
			</p>
		</div>
		<div>
			<span class="font-bold text-xl"
				>How can I request my level to be blacklisted from downloading?</span
			>
			<p class="ml-5">
				Add the special tag "{{ NO_DOWNLOAD_TAG }}" to your leve's description
				and it will not be available for download in this website.
				<!--Contact "captivator" at Discord. You can also talk to him directly in
				Florian's Games discord server.-->
			</p>
		</div>
	</div>
</template>
<script setup lang="ts"></script>
<style scoped lang="css"></style>
