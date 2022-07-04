<script setup>
import { ref } from "vue"
import Menu from "@/components/Menu.vue"

const show = ref(true)
</script>

<template>
	<div>
		<h1>Transition</h1>
		<button @click="show = !show">Menu</button>

		<transition name="fade">
			<Menu v-show="show" />
		</transition>
	</div>
</template>
