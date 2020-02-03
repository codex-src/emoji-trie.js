const fetch = require("node-fetch")
const fs = require("fs")

// Update as needed:
const VERSION = "13.0" // 2020-01-21
const URL = `https://unicode.org/Public/emoji/${VERSION}/emoji-test.txt`

;(async function main() {
	const t1 = Date.now()
	// Get the data:
	let resp = null
	let text = ""
	try {
		resp = await fetch(URL)
		text = await resp.text()
	} catch (e) {
		throw new Error(`await fetch(URL)…await resp.text(): ${e}`)
	}
	// Get the non-commented data:
	const rows = text.split("\n").filter(each => {
		const ok = (
			each.length &&
			each[0] !== "#"
		)
		return ok
	})
	// Parse the dataset:
	const dataset = rows.map(each => {
		// 263A FE0F ; fully-qualified # ☺️ E0.6 smiling face
		// -> [9786, 65039]
		const codePoints = each
			.split(";")[0]                   // -> "263A FE0F ;"
			.split(/\s+/)                    // -> ["263A", "FE0F", ""]
			.filter(Boolean)                 // -> ["263A", "FE0F"]
			.map(each => parseInt(each, 16)) // -> [9786, 65039]
		return codePoints
	})
	// Save the dataset:
	const name = `UNICODE_${VERSION.replace(".", "-")}_DO-NOT-EDIT.generated.json`
	const data = JSON.stringify({ dataset })
	try {
		fs.writeFileSync(`./script/${name}`, `${data}\n`) // EOF
	} catch (e) {
		throw new Error(`fs.writeFile: ${e}`)
	}
	const t2 = Date.now()
	const secs = (t2 - t1) / 1e3
	console.log(`done (${secs}s)`)
})()
