<script setup>
import { useExampleStore } from "@/stores"

const store = useExampleStore()
</script>

<template>
	<h1>{{ store.getMessage }}</h1>
</template>
