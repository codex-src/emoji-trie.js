import {
	atEnd,
	atStart,
} from "../index"

const EOF = ""

// Creates a new string iterator; iterates up to one emoji
// or byte at a time.
function newIterator(str) {
	let index = 0
	const iter = () => {
		if (index === str.length) {
			return EOF
		}
		let emoji = atStart(str.slice(index))
		if (!emoji) {
			emoji = str[index]
		}
		index += emoji.length
		return emoji
	}
	return iter
}

// Creates a new reverse string iterator; iterates up to one
// emoji or byte at a time.
function newReverseIterator(str) {
	let index = str.length - 1
	const iter = () => {
		if (index === -1) {
			return EOF
		}
		let emoji = atEnd(str.slice(0, index + 1))
		if (!emoji) {
			emoji = str[index]
		}
		index -= emoji.length
		return emoji
	}
	return iter
}

const helloWorld = "hello, world! 😀"

test("hello, world! (1 of 2)", () => {
	const iter = newIterator(helloWorld)
	expect(iter()).toBe("h")
	expect(iter()).toBe("e")
	expect(iter()).toBe("l")
	expect(iter()).toBe("l")
	expect(iter()).toBe("o")
	expect(iter()).toBe(",")
	expect(iter()).toBe(" ")
	expect(iter()).toBe("w")
	expect(iter()).toBe("o")
	expect(iter()).toBe("r")
	expect(iter()).toBe("l")
	expect(iter()).toBe("d")
	expect(iter()).toBe("!")
	expect(iter()).toBe(" ")
	expect(iter()).toBe("😀")
	expect(iter()).toBe(EOF)
})

test("hello, world! (2 of 2)", () => {
	const iter = newReverseIterator(helloWorld)
	expect(iter()).toBe("😀")
	expect(iter()).toBe(" ")
	expect(iter()).toBe("!")
	expect(iter()).toBe("d")
	expect(iter()).toBe("l")
	expect(iter()).toBe("r")
	expect(iter()).toBe("o")
	expect(iter()).toBe("w")
	expect(iter()).toBe(" ")
	expect(iter()).toBe(",")
	expect(iter()).toBe("o")
	expect(iter()).toBe("l")
	expect(iter()).toBe("l")
	expect(iter()).toBe("e")
	expect(iter()).toBe("h")
	expect(iter()).toBe(EOF)
})

// # subgroup: face-smiling
//
// 1F600 ; fully-qualified # 😀 E1.0 grinning face
// 1F603 ; fully-qualified # 😃 E0.6 grinning face with big eyes
// 1F604 ; fully-qualified # 😄 E0.6 grinning face with smiling eyes
// 1F601 ; fully-qualified # 😁 E0.6 beaming face with smiling eyes
// 1F606 ; fully-qualified # 😆 E0.6 grinning squinting face
// 1F605 ; fully-qualified # 😅 E0.6 grinning face with sweat
// 1F923 ; fully-qualified # 🤣 E3.0 rolling on the floor laughing
// 1F602 ; fully-qualified # 😂 E0.6 face with tears of joy
// 1F642 ; fully-qualified # 🙂 E1.0 slightly smiling face
// 1F643 ; fully-qualified # 🙃 E1.0 upside-down face
// 1F609 ; fully-qualified # 😉 E0.6 winking face
// 1F60A ; fully-qualified # 😊 E0.6 smiling face with smiling eyes
// 1F607 ; fully-qualified # 😇 E1.0 smiling face with halo
//
const smileys = "😀😃😄😁😆😅🤣😂🙂🙃😉😊😇"

test("smileys (1 of 2)", () => {
	const iter = newIterator(smileys)
	expect(iter()).toBe("😀")
	expect(iter()).toBe("😃")
	expect(iter()).toBe("😄")
	expect(iter()).toBe("😁")
	expect(iter()).toBe("😆")
	expect(iter()).toBe("😅")
	expect(iter()).toBe("🤣")
	expect(iter()).toBe("😂")
	expect(iter()).toBe("🙂")
	expect(iter()).toBe("🙃")
	expect(iter()).toBe("😉")
	expect(iter()).toBe("😊")
	expect(iter()).toBe("😇")
	expect(iter()).toBe(EOF)
})

test("smileys (2 of 2)", () => {
	const iter = newReverseIterator(smileys)
	expect(iter()).toBe("😇")
	expect(iter()).toBe("😊")
	expect(iter()).toBe("😉")
	expect(iter()).toBe("🙃")
	expect(iter()).toBe("🙂")
	expect(iter()).toBe("😂")
	expect(iter()).toBe("🤣")
	expect(iter()).toBe("😅")
	expect(iter()).toBe("😆")
	expect(iter()).toBe("😁")
	expect(iter()).toBe("😄")
	expect(iter()).toBe("😃")
	expect(iter()).toBe("😀")
	expect(iter()).toBe(EOF)
})

// # subgroup: family
//
// 1F9D1 200D 1F91D 200D 1F9D1             ; fully-qualified # 🧑‍🤝‍🧑 E12.0 people holding hands
// 1F9D1 1F3FB 200D 1F91D 200D 1F9D1 1F3FB ; fully-qualified # 🧑🏻‍🤝‍🧑🏻 E12.0 people holding hands: light skin tone
// 1F9D1 1F3FB 200D 1F91D 200D 1F9D1 1F3FC ; fully-qualified # 🧑🏻‍🤝‍🧑🏼 E12.1 people holding hands: light skin tone, medium-light skin tone
// 1F9D1 1F3FB 200D 1F91D 200D 1F9D1 1F3FD ; fully-qualified # 🧑🏻‍🤝‍🧑🏽 E12.1 people holding hands: light skin tone, medium skin tone
// 1F9D1 1F3FB 200D 1F91D 200D 1F9D1 1F3FE ; fully-qualified # 🧑🏻‍🤝‍🧑🏾 E12.1 people holding hands: light skin tone, medium-dark skin tone
// 1F9D1 1F3FB 200D 1F91D 200D 1F9D1 1F3FF ; fully-qualified # 🧑🏻‍🤝‍🧑🏿 E12.1 people holding hands: light skin tone, dark skin tone
// 1F9D1 1F3FC 200D 1F91D 200D 1F9D1 1F3FB ; fully-qualified # 🧑🏼‍🤝‍🧑🏻 E12.0 people holding hands: medium-light skin tone, light skin tone
// 1F9D1 1F3FC 200D 1F91D 200D 1F9D1 1F3FC ; fully-qualified # 🧑🏼‍🤝‍🧑🏼 E12.0 people holding hands: medium-light skin tone
// 1F9D1 1F3FC 200D 1F91D 200D 1F9D1 1F3FD ; fully-qualified # 🧑🏼‍🤝‍🧑🏽 E12.1 people holding hands: medium-light skin tone, medium skin tone
// 1F9D1 1F3FC 200D 1F91D 200D 1F9D1 1F3FE ; fully-qualified # 🧑🏼‍🤝‍🧑🏾 E12.1 people holding hands: medium-light skin tone, medium-dark skin tone
// 1F9D1 1F3FC 200D 1F91D 200D 1F9D1 1F3FF ; fully-qualified # 🧑🏼‍🤝‍🧑🏿 E12.1 people holding hands: medium-light skin tone, dark skin tone
// 1F9D1 1F3FD 200D 1F91D 200D 1F9D1 1F3FB ; fully-qualified # 🧑🏽‍🤝‍🧑🏻 E12.0 people holding hands: medium skin tone, light skin tone
// 1F9D1 1F3FD 200D 1F91D 200D 1F9D1 1F3FC ; fully-qualified # 🧑🏽‍🤝‍🧑🏼 E12.0 people holding hands: medium skin tone, medium-light skin tone
// 1F9D1 1F3FD 200D 1F91D 200D 1F9D1 1F3FD ; fully-qualified # 🧑🏽‍🤝‍🧑🏽 E12.0 people holding hands: medium skin tone
// 1F9D1 1F3FD 200D 1F91D 200D 1F9D1 1F3FE ; fully-qualified # 🧑🏽‍🤝‍🧑🏾 E12.1 people holding hands: medium skin tone, medium-dark skin tone
// 1F9D1 1F3FD 200D 1F91D 200D 1F9D1 1F3FF ; fully-qualified # 🧑🏽‍🤝‍🧑🏿 E12.1 people holding hands: medium skin tone, dark skin tone
// 1F9D1 1F3FE 200D 1F91D 200D 1F9D1 1F3FB ; fully-qualified # 🧑🏾‍🤝‍🧑🏻 E12.0 people holding hands: medium-dark skin tone, light skin tone
// 1F9D1 1F3FE 200D 1F91D 200D 1F9D1 1F3FC ; fully-qualified # 🧑🏾‍🤝‍🧑🏼 E12.0 people holding hands: medium-dark skin tone, medium-light skin tone
// 1F9D1 1F3FE 200D 1F91D 200D 1F9D1 1F3FD ; fully-qualified # 🧑🏾‍🤝‍🧑🏽 E12.0 people holding hands: medium-dark skin tone, medium skin tone
// 1F9D1 1F3FE 200D 1F91D 200D 1F9D1 1F3FE ; fully-qualified # 🧑🏾‍🤝‍🧑🏾 E12.0 people holding hands: medium-dark skin tone
// 1F9D1 1F3FE 200D 1F91D 200D 1F9D1 1F3FF ; fully-qualified # 🧑🏾‍🤝‍🧑🏿 E12.1 people holding hands: medium-dark skin tone, dark skin tone
// 1F9D1 1F3FF 200D 1F91D 200D 1F9D1 1F3FB ; fully-qualified # 🧑🏿‍🤝‍🧑🏻 E12.0 people holding hands: dark skin tone, light skin tone
// 1F9D1 1F3FF 200D 1F91D 200D 1F9D1 1F3FC ; fully-qualified # 🧑🏿‍🤝‍🧑🏼 E12.0 people holding hands: dark skin tone, medium-light skin tone
// 1F9D1 1F3FF 200D 1F91D 200D 1F9D1 1F3FD ; fully-qualified # 🧑🏿‍🤝‍🧑🏽 E12.0 people holding hands: dark skin tone, medium skin tone
// 1F9D1 1F3FF 200D 1F91D 200D 1F9D1 1F3FE ; fully-qualified # 🧑🏿‍🤝‍🧑🏾 E12.0 people holding hands: dark skin tone, medium-dark skin tone
// 1F9D1 1F3FF 200D 1F91D 200D 1F9D1 1F3FF ; fully-qualified # 🧑🏿‍🤝‍🧑🏿 E12.0 people holding hands: dark skin tone
//
const holdingHands = "🧑‍🤝‍🧑🧑🏻‍🤝‍🧑🏻🧑🏻‍🤝‍🧑🏼🧑🏻‍🤝‍🧑🏽🧑🏻‍🤝‍🧑🏾🧑🏻‍🤝‍🧑🏿🧑🏼‍🤝‍🧑🏻🧑🏼‍🤝‍🧑🏼🧑🏼‍🤝‍🧑🏽🧑🏼‍🤝‍🧑🏾🧑🏼‍🤝‍🧑🏿🧑🏽‍🤝‍🧑🏻🧑🏽‍🤝‍🧑🏼🧑🏽‍🤝‍🧑🏽🧑🏽‍🤝‍🧑🏾🧑🏽‍🤝‍🧑🏿🧑🏾‍🤝‍🧑🏻🧑🏾‍🤝‍🧑🏼🧑🏾‍🤝‍🧑🏽🧑🏾‍🤝‍🧑🏾🧑🏾‍🤝‍🧑🏿🧑🏿‍🤝‍🧑🏻🧑🏿‍🤝‍🧑🏼🧑🏿‍🤝‍🧑🏽🧑🏿‍🤝‍🧑🏾🧑🏿‍🤝‍🧑🏿"

test("holding hands (1 of 2)", () => {
	const iter = newIterator(holdingHands)
	expect(iter()).toBe("🧑‍🤝‍🧑")
	expect(iter()).toBe("🧑🏻‍🤝‍🧑🏻")
	expect(iter()).toBe("🧑🏻‍🤝‍🧑🏼")
	expect(iter()).toBe("🧑🏻‍🤝‍🧑🏽")
	expect(iter()).toBe("🧑🏻‍🤝‍🧑🏾")
	expect(iter()).toBe("🧑🏻‍🤝‍🧑🏿")
	expect(iter()).toBe("🧑🏼‍🤝‍🧑🏻")
	expect(iter()).toBe("🧑🏼‍🤝‍🧑🏼")
	expect(iter()).toBe("🧑🏼‍🤝‍🧑🏽")
	expect(iter()).toBe("🧑🏼‍🤝‍🧑🏾")
	expect(iter()).toBe("🧑🏼‍🤝‍🧑🏿")
	expect(iter()).toBe("🧑🏽‍🤝‍🧑🏻")
	expect(iter()).toBe("🧑🏽‍🤝‍🧑🏼")
	expect(iter()).toBe("🧑🏽‍🤝‍🧑🏽")
	expect(iter()).toBe("🧑🏽‍🤝‍🧑🏾")
	expect(iter()).toBe("🧑🏽‍🤝‍🧑🏿")
	expect(iter()).toBe("🧑🏾‍🤝‍🧑🏻")
	expect(iter()).toBe("🧑🏾‍🤝‍🧑🏼")
	expect(iter()).toBe("🧑🏾‍🤝‍🧑🏽")
	expect(iter()).toBe("🧑🏾‍🤝‍🧑🏾")
	expect(iter()).toBe("🧑🏾‍🤝‍🧑🏿")
	expect(iter()).toBe("🧑🏿‍🤝‍🧑🏻")
	expect(iter()).toBe("🧑🏿‍🤝‍🧑🏼")
	expect(iter()).toBe("🧑🏿‍🤝‍🧑🏽")
	expect(iter()).toBe("🧑🏿‍🤝‍🧑🏾")
	expect(iter()).toBe("🧑🏿‍🤝‍🧑🏿")
	expect(iter()).toBe(EOF)
})

test("holding hands (2 of 2)", () => {
	const iter = newReverseIterator(holdingHands)
	expect(iter()).toBe("🧑🏿‍🤝‍🧑🏿")
	expect(iter()).toBe("🧑🏿‍🤝‍🧑🏾")
	expect(iter()).toBe("🧑🏿‍🤝‍🧑🏽")
	expect(iter()).toBe("🧑🏿‍🤝‍🧑🏼")
	expect(iter()).toBe("🧑🏿‍🤝‍🧑🏻")
	expect(iter()).toBe("🧑🏾‍🤝‍🧑🏿")
	expect(iter()).toBe("🧑🏾‍🤝‍🧑🏾")
	expect(iter()).toBe("🧑🏾‍🤝‍🧑🏽")
	expect(iter()).toBe("🧑🏾‍🤝‍🧑🏼")
	expect(iter()).toBe("🧑🏾‍🤝‍🧑🏻")
	expect(iter()).toBe("🧑🏽‍🤝‍🧑🏿")
	expect(iter()).toBe("🧑🏽‍🤝‍🧑🏾")
	expect(iter()).toBe("🧑🏽‍🤝‍🧑🏽")
	expect(iter()).toBe("🧑🏽‍🤝‍🧑🏼")
	expect(iter()).toBe("🧑🏽‍🤝‍🧑🏻")
	expect(iter()).toBe("🧑🏼‍🤝‍🧑🏿")
	expect(iter()).toBe("🧑🏼‍🤝‍🧑🏾")
	expect(iter()).toBe("🧑🏼‍🤝‍🧑🏽")
	expect(iter()).toBe("🧑🏼‍🤝‍🧑🏼")
	expect(iter()).toBe("🧑🏼‍🤝‍🧑🏻")
	expect(iter()).toBe("🧑🏻‍🤝‍🧑🏿")
	expect(iter()).toBe("🧑🏻‍🤝‍🧑🏾")
	expect(iter()).toBe("🧑🏻‍🤝‍🧑🏽")
	expect(iter()).toBe("🧑🏻‍🤝‍🧑🏼")
	expect(iter()).toBe("🧑🏻‍🤝‍🧑🏻")
	expect(iter()).toBe("🧑‍🤝‍🧑")
	expect(iter()).toBe(EOF)
})

// # subgroup: subdivision-flag
//
// 1F3F4 E0067 E0062 E0065 E006E E0067 E007F ; fully-qualified # 🏴󠁧󠁢󠁥󠁮󠁧󠁿 E5.0 flag: England
// 1F3F4 E0067 E0062 E0073 E0063 E0074 E007F ; fully-qualified # 🏴󠁧󠁢󠁳󠁣󠁴󠁿 E5.0 flag: Scotland
// 1F3F4 E0067 E0062 E0077 E006C E0073 E007F ; fully-qualified # 🏴󠁧󠁢󠁷󠁬󠁳󠁿 E5.0 flag: Wales
//
const flags = "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}"

test("flags (1 of 2)", () => {
	const iter = newIterator(flags)
	expect(iter()).toBe("\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}")
	expect(iter()).toBe("\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}")
	expect(iter()).toBe("\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}")
	expect(iter()).toBe(EOF)
})

test("flags (2 of 2)", () => {
	const iter = newReverseIterator(flags)
	expect(iter()).toBe("\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}")
	expect(iter()).toBe("\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}")
	expect(iter()).toBe("\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}")
	expect(iter()).toBe(EOF)
})
