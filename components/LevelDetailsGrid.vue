<template>
	<section>
		<span class="flex font-bold items-center text-xs md:text-base text-nowrap">
			<slot name="title" />
		</span>
		<div class="text-xl md:text-3xl text-nowrap"><slot name="value" /></div>
	</section>
</template>
