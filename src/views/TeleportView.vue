<script setup>
import Modal from "@/components/Modal.vue"
</script>

<template>
	<div>
		<Modal>
			<template #header>
				<h1>Modal</h1>
			</template>
			<template #body>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec euismod, nisl eget consectetur sagittis, nisl
					lobortis nisi, euismod nisl nisl euismod nisl.
				</p>
			</template>
			<template #actions>
				<button>Delete</button>
				<button>Edit</button>
				<button>Create</button>
			</template>
		</Modal>
	</div>
</template>
