const CodePointTrie = require("./CodePointTrie")
const { dataset } = require("../script/UNICODE_13-0_DO-NOT-EDIT.generated.json")

// const dataset = [
// 	[128104, 8205, 128300],         // 👨‍🔬			man scientist
// 	[128104, 127995, 8205, 128300], // 👨🏻‍🔬	man scientist: light skin tone
// 	[128104, 127996, 8205, 128300], // 👨🏼‍🔬	man scientist: medium-light skin tone
// 	[128104, 127997, 8205, 128300], // 👨🏽‍🔬	man scientist: medium skin tone
// 	[128104, 127998, 8205, 128300], // 👨🏾‍🔬	man scientist: medium-dark skin tone
// 	[128104, 127999, 8205, 128300], // 👨🏿‍🔬	man scientist: dark skin tone
// ]

const EmojiTrie = new CodePointTrie(dataset)
const ReversedEmojiTrie = new CodePointTrie(dataset.map(each => each.slice().reverse()))

// Gets code points from a string.
function getCodePointsFromString(str) {
	return [...str].map(each => each.codePointAt(0))
}

// Gets the next emoji (from the start of a string)
function getNextEmoji(substr) {
 	// Scope substr to the current paragraph:
	const arr = substr.split("\n")
	substr = arr[0] // Start
	const codePoints = getCodePointsFromString(substr)
	const match = EmojiTrie.matches(codePoints)
	// Not found:
	if (!match) {
		return ""
	}
	// Found:
	return match
}

// Gets the previous emoji (from the end of a string)
function getPrevEmoji(substr) {
 	// Scope substr to the current paragraph:
	const arr = substr.split("\n")
	substr = arr[arr.length - 1] // End
	const reversedCodePoints = getCodePointsFromString(substr).reverse()
	let match = ReversedEmojiTrie.matches(reversedCodePoints)
	// Not found:
	if (!match) {
		return ""
	}
	// Found:
	//
	// Re-reverse code points:
	const codePoints = getCodePointsFromString(match).reverse()
	match = String.fromCodePoint(...codePoints)
	return match
}

console.log(getNextEmoji("👩‍❤️‍💋‍👩 hello, world!"))
console.log(getPrevEmoji("hello, world! 👩‍❤️‍💋‍👩"))
