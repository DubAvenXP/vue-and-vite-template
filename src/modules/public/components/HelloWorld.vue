<script setup>
import { useOptionStore } from "@/stores"

const optionStore = useOptionStore()
</script>

<template>
	<h1>{{ optionStore.name }}</h1>
	<h2>{{ optionStore.doubleCount }}</h2>
	<button @click="optionStore.increment">Multiply by 2</button>
</template>

<style lang="sass" scoped>
h1
	color: red
</style>
