const CodePointTrie = require("./CodePointTrie")
const { dataset } = require("../script/UNICODE_13-0_DO-NOT-EDIT.generated.json")

// https://golang.org/pkg/unicode/utf8/#pkg-constants
const MaxBytesPerUTF8CodePoint = 4
const MaxUTF8CodePoints = 8 // As of 13.0

const EmojiTrie = new CodePointTrie(dataset)
// // const ReversedEmojiTrie = new CodePointTrie(dataset.map(each => each.slice().reverse()))

// Gets code points from a string.
function getCodePointsFromString(substr) {
	const codePoints = [...substr.slice(0, MaxUTF8CodePoints * MaxBytesPerUTF8CodePoint)] // UTF-8 destructure
		.map(each => each.codePointAt(0))
	return codePoints
}

// Gets the emoji at the start of a string.
function getEmojiAtStartOfString(substr) {
	const codePoints = getCodePointsFromString(substr)
	return EmojiTrie.matches(codePoints)
}

// console.log(JSON.stringify(EmojiTrie.trie, null, "\t"))
console.log(getEmojiAtStartOfString("👨‍🔬 hello, world!"))

// // Gets the emoji at the end of a string.
// export function getEmojiAtEndOfString(substr) {
// 	const codePoints = getCodePointsFromString(substr)
// 	codePoints.reverse()
// 	return EmojiTrieReversed.matches(codePoints)
// }
//
// // 0x1F9D1 0x200D 0x1F52C                           ; fully-qualified     # 🧑‍🔬 E12.1 scientist
// // 0x1F9D1 0x1F3FB 0x200D 0x1F52C                     ; fully-qualified     # 🧑🏻‍🔬 E12.1 scientist: light skin tone
// // 0x1F9D1 0x1F3FC 0x200D 0x1F52C                     ; fully-qualified     # 🧑🏼‍🔬 E12.1 scientist: medium-light skin tone
// // 0x1F9D1 0x1F3FD 0x200D 0x1F52C                     ; fully-qualified     # 🧑🏽‍🔬 E12.1 scientist: medium skin tone
// // 0x1F9D1 0x1F3FE 0x200D 0x1F52C                     ; fully-qualified     # 🧑🏾‍🔬 E12.1 scientist: medium-dark skin tone
// // 0x1F9D1 0x1F3FF 0x200D 0x1F52C                     ; fully-qualified     # 🧑🏿‍🔬 E12.1 scientist: dark skin tone
// // 0x1F468 0x200D 0x1F52C                           ; fully-qualified     # 👨‍🔬 E4.0 man scientist
// // 0x1F468 0x1F3FB 0x200D 0x1F52C                     ; fully-qualified     # 👨🏻‍🔬 E4.0 man scientist: light skin tone
// // 0x1F468 0x1F3FC 0x200D 0x1F52C                     ; fully-qualified     # 👨🏼‍🔬 E4.0 man scientist: medium-light skin tone
// // 0x1F468 0x1F3FD 0x200D 0x1F52C                     ; fully-qualified     # 👨🏽‍🔬 E4.0 man scientist: medium skin tone
// // 0x1F468 0x1F3FE 0x200D 0x1F52C                     ; fully-qualified     # 👨🏾‍🔬 E4.0 man scientist: medium-dark skin tone
// // 0x1F468 0x1F3FF 0x200D 0x1F52C                     ; fully-qualified     # 👨🏿‍🔬 E4.0 man scientist: dark skin tone
// // 0x1F469 0x200D 0x1F52C                           ; fully-qualified     # 👩‍🔬 E4.0 woman scientist
// // 0x1F469 0x1F3FB 0x200D 0x1F52C                     ; fully-qualified     # 👩🏻‍🔬 E4.0 woman scientist: light skin tone
// // 0x1F469 0x1F3FC 0x200D 0x1F52C                     ; fully-qualified     # 👩🏼‍🔬 E4.0 woman scientist: medium-light skin tone
// // 0x1F469 0x1F3FD 0x200D 0x1F52C                     ; fully-qualified     # 👩🏽‍🔬 E4.0 woman scientist: medium skin tone
// // 0x1F469 0x1F3FE 0x200D 0x1F52C                     ; fully-qualified     # 👩🏾‍🔬 E4.0 woman scientist: medium-dark skin tone
// // 0x1F469 0x1F3FF 0x200D 0x1F52C                     ; fully-qualified     # 👩🏿‍🔬 E4.0 woman scientist: dark skin tone
// // 0x1F9D1 0x200D 0x1F4BB                           ; fully-qualified     # 🧑‍💻 E12.1 technologist
// // 0x1F9D1 0x1F3FB 0x200D 0x1F4BB                     ; fully-qualified     # 🧑🏻‍💻 E12.1 technologist: light skin tone
// // 0x1F9D1 0x1F3FC 0x200D 0x1F4BB                     ; fully-qualified     # 🧑🏼‍💻 E12.1 technologist: medium-light skin tone
// // 0x1F9D1 0x1F3FD 0x200D 0x1F4BB                     ; fully-qualified     # 🧑🏽‍💻 E12.1 technologist: medium skin tone
// // 0x1F9D1 0x1F3FE 0x200D 0x1F4BB                     ; fully-qualified     # 🧑🏾‍💻 E12.1 technologist: medium-dark skin tone
// // 0x1F9D1 0x1F3FF 0x200D 0x1F4BB                     ; fully-qualified     # 🧑🏿‍💻 E12.1 technologist: dark skin tone
//
