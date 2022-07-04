import { defineStore } from "pinia"

export const useExampleStore = defineStore({
	id: "example",
	state: () => ({
		message: "Hello World!",
	}),
	getters: {
		getMessage: state => state.message,
	},
	actions: {
		setMessage: (message) => {
			this.message = message
		}
	},
})
