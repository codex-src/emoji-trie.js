class CodePointTrie {
	constructor(dataset) {
		const trie = {}
		for (let y = 0; y < dataset.length; y++) {
			let ref = trie
			for (let x = 0; x < dataset[y].length; x++) {
				const atEnd = x + 1 === dataset[y].length
				if (!atEnd) {
					// Do not overwrite sequence paths:
					if (!ref[dataset[y][x]]) {
						ref[dataset[y][x]] = {}
					}
				} else {
					// Throw on repeat sequences:
					if (ref[dataset[y][x]] && ref[dataset[y][x]].match) {
						throw new Error("CodePointTrie: An unexpected repeat sequence occurred.")
					}
					const match = String.fromCodePoint(...dataset[y])
					ref[dataset[y][x]] = { match }
				}
				ref = ref[dataset[y][x]]
			}
		}
		Object.assign(this, {
			trie,
		})
	}
	getMatch(codePoints) { // Expects an array of numbers
		let ref = this.trie
		let match = ""
		for (let index = 0; index < codePoints.length; index++) {
			const res = ref[codePoints[index]]
			// If no reference, return eager match or no match:
			if (!res) {
				return match
			}
			// If the current reference has a match, update the
			// current match:
			if (res.match) {
				match = res.match // eslint-disable-line prefer-destructuring
			}
			ref = res
		}
		return match
	}
}

export default CodePointTrie
