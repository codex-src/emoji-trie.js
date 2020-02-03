import babel from "rollup-plugin-babel"
import json from "@rollup/plugin-json"

// https://github.com/rollup/plugins/tree/master/packages/json
const config = {
	input:   "src/index.js",
	output:  { file: "build/index.js", format: "cjs" },
	plugins: [babel({ exclude: "node_modules/**" }), json()],
}

export default config
