const CodePointTrie = require("./CodePointTrie")
const { dataset } = require("../script/UNICODE_13-0_DO-NOT-EDIT.generated.json")

const EmojiTrie = new CodePointTrie(dataset)
const ReversedEmojiTrie = new CodePointTrie(dataset.map(each => each.slice().reverse()))

// Gets code points from a string.
function getCodePointsFromString(str) {
	return [...str].map(each => each.codePointAt(0))
}

// Gets the next emoji (from the start of a string)
function atStart(substr) {
 	// Scope substr to the current paragraph:
	const arr = substr.split("\n")
	substr = arr[0] // Start
	const codePoints = getCodePointsFromString(substr)
	const match = EmojiTrie.getMatch(codePoints)
	// Not found:
	if (!match) {
		return ""
	}
	// Found:
	return match
}

// Gets the previous emoji (from the end of a string)
function atEnd(substr) {
 	// Scope substr to the current paragraph:
	const arr = substr.split("\n")
	substr = arr[arr.length - 1] // End
	const reversedCodePoints = getCodePointsFromString(substr).reverse()
	let match = ReversedEmojiTrie.getMatch(reversedCodePoints)
	// Not found:
	if (!match) {
		return ""
	}
	// Found:
	const codePoints = getCodePointsFromString(match).reverse()
	match = String.fromCodePoint(...codePoints)
	return match
}

console.log(atStart("👩‍❤️‍💋‍👩 hello, world!"))
console.log(atEnd("hello, world! 👩‍❤️‍💋‍👩"))
