import { defineStore } from "pinia"

export const useOptionStore = defineStore("option.store", {
	state: () => ({ count: 0, name: "Eduardo" }),
	getters: {
		doubleCount: (state) => state.count * 2,
	},
	actions: {
		increment() {
			this.count++
		},
	},
})
