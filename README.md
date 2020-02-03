🚧 WIP 🚧

# EmojiTrie

This repo was originally built for handling emoji in the [Codex editor](https://github.com/codex-src/codex-app), specifically because (at the time of this writing) backspace on an emoji in Firefox is not well behaved. You may have even encountered this in other editors in one form or other, where editors render an emoji as multiple component emojis, or deleting an emoji requires multiple backspaces. This is, for example, observable in the Medium editor. This happens emojis are far more complex than single-byte ASCII characters like `a`, `b`, `1`, `2`, etc.

> How do I use this?

You can’t, just yet, but soon you’ll be able to import this package like so:

```yarn add emoji-trie```

```js
import emojiTrie from "emoji-trie"

emojiTrie.getNext("👩🏽‍🔬 Hello, world!") // 👩🏽‍🔬
emojiTrie.getPrev("Hello, world! 👩🏽‍🔬") // 👩🏽‍🔬
```

_If you’re not using ES6 Imports, try `const emojiTrie = require("emoji-trie")`._

That’s it!

> _What is a trie?_

In computer science, a trie is a unidirectional tree where all child nodes can only ever point to more child nodes. This might sound confusing, but you can imagine a trie as a kind of nested switch statement expression:

```js
switch (v1) {
case 1:
	switch (v2) {
	case 2:
		switch (v3) {
		case 3:
			// ...
		case 4:
			// ...
		case 5:
			// ...
		default:
			// ...
		}
	case 3:
		// ...
	case 4:
		// ...
	default:
		// ...
	}
case 2:
	// ...
case 3:
	// ...
default:
	// ...
}
```

Yes, this is maddening but *does* demonstrate the use case for tries -- logical expressions modeled as a data structure _instead of_ statements. The trade off, of course, is memory (instead of syntax).

The purpose of this package is to make accessing the next and previous emoji -- **any emoji** (>4000 emojis at the time of this writing) -- as simple and fast as possible.

> _Why are emojis special?_

You may be surprised to learn that for computers, emojis are not one byte; [`"💩".length === 2`](https://mathiasbynens.be/notes/javascript-unicode#counting-symbols), for example. This is because emojis are represented in *code points*, and code points **do not** correspond to bytes.

Other alternatives that solve for this problem **do** exist, using one technique or another, such as [regex](https://github.com/mathiasbynens/emoji-regex) and the [UAX #29](https://unicode.org/reports/tr29/) algorithm, but I argue that such implementations are heavy-handed and convolute the problem space.
