<script setup>
import { ref } from "vue"

const show = ref(false)

const toggle = () => {
	show.value = !show.value
}
</script>

<template>
	<div>
		<button @click="toggle">Modal</button>
		<teleport to="body">
			<transition name="fade">
				<div v-show="show" class="container">
					<div class="modal">
						<div class="header">
							<slot name="header"> </slot>
							<div>
								<button @click="toggle">X</button>
							</div>
						</div>
						<slot class="body" name="body"> </slot>
						<slot class="actions" name="actions"> </slot>
					</div>
				</div>
			</transition>
		</teleport>
	</div>
</template>

<style scoped>
.container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 9999;
	display: flex;
	align-items: center;
	justify-content: center;
}

.modal {
	width: 50%;
	height: 50%;
	background: white;
	border-radius: 5px;
	padding: 2rem;
}
.header {
	font-size: 1.2rem;
	font-weight: 500;
	margin-bottom: 0.4rem;
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.body {
	font-size: 1rem;
	margin-bottom: 2rem;
}

.actions {
	display: flex;
	justify-content: flex-end;
	margin-top: 2rem;
}
</style>
