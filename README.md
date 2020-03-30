<!-- https://github.com/streamich/react-use/blob/master/README.md -->
<div align="center">
  <h1>
    <br>
    <br>
    emoji-trie.js 🌳
    <br>
    <br>
    <br>
    <br>
  </h1>
</div>

![](https://img.shields.io/badge/eslint-passing-brightgreen) ![](https://img.shields.io/badge/jest-passing-brightgreen)

<br>

**emoji-trie.js makes querying the next or previous emoji in a string possible — that’s 4,168 emojis as of Unicode 13.0.** This package does not rely on regex — emoji-trie.js uses two internal data structures that hierarchically map _all_ emoji code points in both descending _and_ ascending order, enabling querying for emojis _forwards_ and _backwards_.

## Installation

You can import this package like so:

`yarn add https://github.com/codex-src/emoji-trie.js` or `npm add ...`

_This package is not currently published to NPM._

```js
import emojiTrie from "emoji-trie"

emojiTrie.atStart("👩🏽‍🔬 Hello, world!")
// {
//   "group": "People & Body",
//   "subgroup": "person-role",
//   "codePoints": [
//     128105,
//     127997,
//     8205,
//     128300
//   ],
//   "status": "fully-qualified",
//   "emoji": "👩🏽‍🔬",
//   "tag": "E4.0",
//   "description": "woman scientist: medium skin tone"
// }
```

Or using CommonJS:

```js
const emojiTrie = require("emoji-trie")

emojiTrie.atStart("👩🏽‍🔬 Hello, world!")
```

## How does emoji-trie.js work?

First, let’s answer the question, _What is a trie?_

> In computer science, a trie, also called digital tree or prefix tree, is a kind of search tree—an ordered tree data structure used to store a dynamic set or associative array where the keys are usually strings.
>
> [Wikipedia](https://en.wikipedia.org/wiki/Trie)

And in simpler terms: A deeply nested hash map.

Time for an example! Here’s a slice of one of the internal data structures emoji-trie.js uses to query an emoji:

```js
{
  127995: {
    8205: {
      9792: {
        65039: {
          match: {
            group: "People & Body",
            subgroup: "person-fantasy",
            codePoints: [
              129500,
              127995,
              8205,
              9792,
              65039
            ],
            status: "fully-qualified",
            emoji: "🧜🏻‍♀️",
            tag: "E5.0",
            description: "mermaid: light skin tone"
          }
        },
      },
    },
  },
}
```

Can you see what’s going on here? Every emoji can be dissected into its constituent code points, and emojis can be anywhere from 1-8 code points (as of Unicode 13.0). So how `emojiTrie.atStart` works is by traversing the descending order data structure for a `match`, and `emojiTrie.atEnd` works _inversely_; by traversing the ascending order data structure for a `match`.
