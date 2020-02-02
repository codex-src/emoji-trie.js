// 0x1F9D1 0x200D 0x1F52C                           ; fully-qualified     # 🧑‍🔬 E12.1 scientist
// 0x1F9D1 0x1F3FB 0x200D 0x1F52C                     ; fully-qualified     # 🧑🏻‍🔬 E12.1 scientist: light skin tone
// 0x1F9D1 0x1F3FC 0x200D 0x1F52C                     ; fully-qualified     # 🧑🏼‍🔬 E12.1 scientist: medium-light skin tone
// 0x1F9D1 0x1F3FD 0x200D 0x1F52C                     ; fully-qualified     # 🧑🏽‍🔬 E12.1 scientist: medium skin tone
// 0x1F9D1 0x1F3FE 0x200D 0x1F52C                     ; fully-qualified     # 🧑🏾‍🔬 E12.1 scientist: medium-dark skin tone
// 0x1F9D1 0x1F3FF 0x200D 0x1F52C                     ; fully-qualified     # 🧑🏿‍🔬 E12.1 scientist: dark skin tone
// 0x1F468 0x200D 0x1F52C                           ; fully-qualified     # 👨‍🔬 E4.0 man scientist
// 0x1F468 0x1F3FB 0x200D 0x1F52C                     ; fully-qualified     # 👨🏻‍🔬 E4.0 man scientist: light skin tone
// 0x1F468 0x1F3FC 0x200D 0x1F52C                     ; fully-qualified     # 👨🏼‍🔬 E4.0 man scientist: medium-light skin tone
// 0x1F468 0x1F3FD 0x200D 0x1F52C                     ; fully-qualified     # 👨🏽‍🔬 E4.0 man scientist: medium skin tone
// 0x1F468 0x1F3FE 0x200D 0x1F52C                     ; fully-qualified     # 👨🏾‍🔬 E4.0 man scientist: medium-dark skin tone
// 0x1F468 0x1F3FF 0x200D 0x1F52C                     ; fully-qualified     # 👨🏿‍🔬 E4.0 man scientist: dark skin tone
// 0x1F469 0x200D 0x1F52C                           ; fully-qualified     # 👩‍🔬 E4.0 woman scientist
// 0x1F469 0x1F3FB 0x200D 0x1F52C                     ; fully-qualified     # 👩🏻‍🔬 E4.0 woman scientist: light skin tone
// 0x1F469 0x1F3FC 0x200D 0x1F52C                     ; fully-qualified     # 👩🏼‍🔬 E4.0 woman scientist: medium-light skin tone
// 0x1F469 0x1F3FD 0x200D 0x1F52C                     ; fully-qualified     # 👩🏽‍🔬 E4.0 woman scientist: medium skin tone
// 0x1F469 0x1F3FE 0x200D 0x1F52C                     ; fully-qualified     # 👩🏾‍🔬 E4.0 woman scientist: medium-dark skin tone
// 0x1F469 0x1F3FF 0x200D 0x1F52C                     ; fully-qualified     # 👩🏿‍🔬 E4.0 woman scientist: dark skin tone
// 0x1F9D1 0x200D 0x1F4BB                           ; fully-qualified     # 🧑‍💻 E12.1 technologist
// 0x1F9D1 0x1F3FB 0x200D 0x1F4BB                     ; fully-qualified     # 🧑🏻‍💻 E12.1 technologist: light skin tone
// 0x1F9D1 0x1F3FC 0x200D 0x1F4BB                     ; fully-qualified     # 🧑🏼‍💻 E12.1 technologist: medium-light skin tone
// 0x1F9D1 0x1F3FD 0x200D 0x1F4BB                     ; fully-qualified     # 🧑🏽‍💻 E12.1 technologist: medium skin tone
// 0x1F9D1 0x1F3FE 0x200D 0x1F4BB                     ; fully-qualified     # 🧑🏾‍💻 E12.1 technologist: medium-dark skin tone
// 0x1F9D1 0x1F3FF 0x200D 0x1F4BB                     ; fully-qualified     # 🧑🏿‍💻 E12.1 technologist: dark skin tone

// const trie = {}
// for (let y = 0; y < dataset.length; y++) {
// 	let ref = trie
// 	for (let x = 0; x < dataset[y].length; x++) {
// 		const atEnd = x + 1 === dataset[y].length
// 		if (!atEnd) {
// 			// Do not overwrite path:
// 			if (!ref[dataset[y][x]]) {
// 				ref[dataset[y][x]] = {}
// 			}
// 		} else {
// 			if (ref[dataset[y][x]]) {
// 				throw new Error("FIXME")
// 			}
// 			ref[dataset[y][x]] = { data: String.fromCodePoint(...dataset[y]) }
// 		}
// 		ref = ref[dataset[y][x]]
// 	}
// }
// console.log(trie)

const dataset = [
	[0x1F9D1, 0x200D, 0x1F52C],
	[0x1F9D1, 0x1F3FB, 0x200D, 0x1F52C],
	[0x1F9D1, 0x1F3FC, 0x200D, 0x1F52C],
	[0x1F9D1, 0x1F3FD, 0x200D, 0x1F52C],
	[0x1F9D1, 0x1F3FE, 0x200D, 0x1F52C],
	[0x1F9D1, 0x1F3FF, 0x200D, 0x1F52C],
	[0x1F468, 0x200D, 0x1F52C],
	[0x1F468, 0x1F3FB, 0x200D, 0x1F52C],
	[0x1F468, 0x1F3FC, 0x200D, 0x1F52C],
	[0x1F468, 0x1F3FD, 0x200D, 0x1F52C],
	[0x1F468, 0x1F3FE, 0x200D, 0x1F52C],
	[0x1F468, 0x1F3FF, 0x200D, 0x1F52C],
	[0x1F469, 0x200D, 0x1F52C],
	[0x1F469, 0x1F3FB, 0x200D, 0x1F52C],
	[0x1F469, 0x1F3FC, 0x200D, 0x1F52C],
	[0x1F469, 0x1F3FD, 0x200D, 0x1F52C],
	[0x1F469, 0x1F3FE, 0x200D, 0x1F52C],
	[0x1F469, 0x1F3FF, 0x200D, 0x1F52C],
	[0x1F9D1, 0x200D, 0x1F4BB],
	[0x1F9D1, 0x1F3FB, 0x200D, 0x1F4BB],
	[0x1F9D1, 0x1F3FC, 0x200D, 0x1F4BB],
	[0x1F9D1, 0x1F3FD, 0x200D, 0x1F4BB],
	[0x1F9D1, 0x1F3FE, 0x200D, 0x1F4BB],
	[0x1F9D1, 0x1F3FF, 0x200D, 0x1F4BB],
]

// TODO: Add string
class CodePointTrie {
	constructor(dataset) {
		const trie = {}
		for (let y = 0; y < dataset.length; y++) {
			let ref = trie
			for (let x = 0; x < dataset[y].length; x++) {
				const atEnd = x + 1 === dataset[y].length
				if (!atEnd) {
					// Do not overwrite path:
					if (!ref[dataset[y][x]]) {
						ref[dataset[y][x]] = {}
					}
				} else {
					if (ref[dataset[y][x]]) {
						throw new Error("FIXME")
					}
					ref[dataset[y][x]] = String.fromCodePoint(...dataset[y])
				}
				ref = ref[dataset[y][x]]
			}
		}
		Object.assign(this, {
			trie,
		})
	}
	matches(...codePoints) {
		let ref = this.trie
		for (let index = 0; index < codePoints.length; index++) {
			const res = ref[codePoints[index]]
			if (!res || typeof res === "string") {
				return res
			}
			if (typeof res !== "object") {
				throw new Error("FIXME")
			}
			ref = res
		}
		return ""
	}
}

const emojiTrie = new CodePointTrie(dataset)

const EmojiTrie = new CodePointTrie(dataset)
// const EmojiTrieReversed = new CodePointTrie(datasetReversed)

// Gets code points from a string.
function getCodePointsFromString(substr) {
	const codePoints = [...substr.slice(0, 32)].map(each => each.codePointAt(0))
	return codePoints
}

// Gets the next emoji.
//
// NOTE: As of Unicode 12.1, the longest emoji sequence is
// 14 bytes and 8 code points; substr does not need to be
// more than 14 bytes -- can use 16 or 32 to be safe
//
// https://unicode.org/Public/emoji/12.1/emoji-test.txt
function getNextEmoji(substr) {
	const codePoints = getCodePointsFromString(substr)
	console.log(codePoints)
	return EmojiTrie.matches(...codePoints)
}

// // Gets the previous emoji.
// function getPrevEmoji(substr) {
// 	const codePoints = getCodePointsFromString(substr)
// 	codePoints.reverse()
// 	return EmojiTrieReversed.matches(codePoints)
// }

console.log(getNextEmoji("👨‍🔬 hello, world!"))
