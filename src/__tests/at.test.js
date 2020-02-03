import {
	atEnd,
	atStart,
} from "../at"

// Creates a new string iterator; iterates one emoji or byte
// at a time.
function newIterator(str) {
	let index = 0
	const iter = () => {
		const emoji = atStart(str.slice(index))
		index += emoji.length || 1
		return emoji
	}
	return iter
}

test("smileys", () => {
	const smileys = "😀😃😄"
	const iter = newIterator(smileys)
	expect(iter()).toBe("😀")
	expect(iter()).toBe("😃")
	expect(iter()).toBe("😄")
})
