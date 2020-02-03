import {
	atEnd,
	atStart,
} from "../at"

// Creates a new string iterator; iterates up to one emoji
// or byte at a time.
function newIterator(str) {
	let index = 0
	const iter = () => {
		const emoji = atStart(str.slice(index))
		index += emoji.length || 1
		return emoji
	}
	return iter
}

// Creates a new reverse string iterator; iterates up to one
// emoji or byte at a time.
function newReverseIterator(str) {
	let index = 0
	const iter = () => {
		const emoji = atEnd(str.slice(0, str.length - index))
		index += emoji.length || 1
		return emoji
	}
	return iter
}

test("smileys (1 of 2)", () => {
	const smileys = "😀😃😄"
	const iter = newIterator(smileys)
	expect(iter()).toBe("😀")
	expect(iter()).toBe("😃")
	expect(iter()).toBe("😄")
})

test("smileys (2 of 2)", () => {
	const smileys = "😀😃😄"
	const iter = newReverseIterator(smileys)
	expect(iter()).toBe("😄")
	expect(iter()).toBe("😃")
	expect(iter()).toBe("😀")
})
