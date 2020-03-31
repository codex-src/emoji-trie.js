import CodePointTrie from "./CodePointTrie"
import dataset from "../scripts/UNICODE_13-0_DO-NOT-EDIT.generated.json"

const EmojiTrie = new CodePointTrie(dataset)
const ReversedEmojiTrie = new CodePointTrie(dataset.map(each => ({ ...each, codePoints: [...each.codePoints].reverse() })))

// Gets code points from a string.
function getCodePointsFromString(str) {
	return [...str].map(each => each.codePointAt(0))
}

// Gets the next emoji (from the start of a string)
export function atStart(substr) {
	// Scope substr to the current paragraph:
	const arr = substr.split("\n")
	substr = arr[0] // Start
	const codePoints = getCodePointsFromString(substr)
	return EmojiTrie.getMatch(codePoints)
}

// Gets the previous emoji (from the end of a string)
export function atEnd(substr) {
	// Scope substr to the current paragraph:
	const arr = substr.split("\n")
	substr = arr[arr.length - 1] // End
	const reversedCodePoints = getCodePointsFromString(substr).reverse()
	return ReversedEmojiTrie.getMatch(reversedCodePoints)
}
