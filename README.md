<!-- https://github.com/streamich/react-use/blob/master/README.md -->
<div align="center">
  <h1>
    <br>
    <br>
    emoji-trie 🌳
    <br>
    <br>
    <br>
    <br>
  </h1>
</div>

![](https://img.shields.io/badge/eslint-passing-brightgreen) ![](https://img.shields.io/badge/jest-passing-brightgreen)

<br>

emoji-trie makes accessing the next and previous emoji -- any emoji (>4000 emojis at the time of this writing) -- as simple and fast as possible.

This repo was originally built for handling emoji in the [Codex editor](https://github.com/codex-src/codex-app), specifically because (at the time of this writing) [backspace on an emoji in Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=1198292) is not well behaved. You may have even encountered this in other editors in one form or other, where editors render an emoji as multiple component emojis, or deleting an emoji requires multiple backspaces. This is, for example, observable in the Medium editor. This is because handling emojis are far more complex than ASCII-only characters like `a-z`, `0-9`, etc.

> _How do I use this?_

You can import this package like so:

`yarn add https://github.com/codex-src/emoji-trie.js` or `npm add ...`

_This package is not currently published to NPM._

```js
import emojiTrie from "emoji-trie"

emojiTrie.atStart("👩🏽‍🔬 Hello, world!") // 👩🏽‍🔬
emojiTrie.atEnd("Hello, world! 👩🏽‍🔬")   // 👩🏽‍🔬
```

_If you’re not using ES6 Imports, use `const emojiTrie = require("emoji-trie")`._

That’s it!

> _What is a trie?_
>
> In computer science, a trie, also called digital tree or prefix tree, is a kind of search tree—an ordered tree data structure used to store a dynamic set or associative array where the keys are usually strings.
>
> [Wikipedia](https://en.wikipedia.org/wiki/Trie)

So what are tries good for? Instead of modeling logic using statements, like `if` and `switch`, you can model your logic as data structure to achieve much the same with less effort.

In order to match all emojis *and* emoji combinations (efficiently, I might add), you *could* write a series of nested `switch` statements to match all possible emoji code point sequences in order:

```js
switch (codePoints[0]) {
case 0x...:
	switch (codePoints[1]) {
	case 0x...:
		switch (codePoints[2]) {
		case 0x...:
			// ...
		case 0x...:
			// ...
		case 0x...:
			// ...
		default:
			// ...
		}
	case 0x...:
		// ...
	case 0x...:
		// ...
	default:
		// ...
	}
case 0x...:
	// ...
case 0x...:
	// ...
default:
	// ...
}
```

Yes, this is maddening but does demonstrate the use case for tries; modelling logic in terms of a data structure _instead of_ statements. The trade off, of course, is memory.

> _Why are emojis special?_

You may be surprised to learn that emojis are not single-byte characters. The most famous example of this is [`"💩".length === 2`](https://mathiasbynens.be/notes/javascript-unicode#counting-symbols). This is because JavaScript’s `.length` accessor returns the byte-length, *not* the number of code points. And an emoji (as of Unicode 13.0) can be represented in 1 to 8(!) code points.

Other alternatives that solve for this problem **do** exist, using one technique or another, such as [regex](https://github.com/mathiasbynens/emoji-regex) and the [UAX #29](https://unicode.org/reports/tr29/) algorithm, but I argue that such implementations are heavy-handed and convolute the problem space.

<!--

{
  "127995": {
    "8205": {
      "9792": {
        "65039": {
          "match": {
            "group": "People & Body",
            "subgroup": "person-fantasy",
            "codePoints": [
              129500,
              127995,
              8205,
              9792,
              65039
            ],
            "status": "fully-qualified",
            "emoji": "🧜🏻‍♀️",
            "tag": "E5.0",
            "description": "mermaid: light skin tone"
          }
        },
        // ...
      },
      // ...
    },
    // ...
  },
  // ...
}

-->
