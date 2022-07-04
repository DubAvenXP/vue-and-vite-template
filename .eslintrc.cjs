/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
	root: true,
	extends: [
		"plugin:vue/vue3-essential",
		// "eslint:recommended",
		"@vue/eslint-config-prettier",
	],
	rules: {
		// four-space indentation with tabs
		indent: ["error", "tab"],
		// no trailing whitespace
		"no-trailing-spaces": "error",
		// no trailing commas
		"comma-dangle": ["error", "always-multiline"],
		// no spaces between function name and parentheses
		"space-before-function-paren": ["error", "never"],
		// no spaces between parentheses
		"space-in-parens": ["error", "never"],
		// no spaces between arguments
		"space-infix-ops": ["error", { internal: false }],
		// no semicolon at the end of the line
		semi: ["error", "always"],
	},
}
