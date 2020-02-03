'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var CodePointTrie =
/*#__PURE__*/
function () {
  function CodePointTrie(dataset) {
    _classCallCheck(this, CodePointTrie);

    var trie = {};

    for (var y = 0; y < dataset.length; y++) {
      var ref = trie;

      for (var x = 0; x < dataset[y].length; x++) {
        var atEnd = x + 1 === dataset[y].length;

        if (!atEnd) {
          // Do not overwrite sequence paths:
          if (!ref[dataset[y][x]]) {
            ref[dataset[y][x]] = {};
          }
        } else {
          // Throw on repeat sequences:
          if (ref[dataset[y][x]] && ref[dataset[y][x]].match) {
            throw new Error("CodePointTrie: An unexpected repeat sequence occurred.");
          }

          var match = String.fromCodePoint.apply(String, _toConsumableArray(dataset[y]));

          if (!ref[dataset[y][x]]) {
            ref[dataset[y][x]] = {
              match: match
            };
          } else {
            ref[dataset[y][x]].match = match;
          }
        }

        ref = ref[dataset[y][x]];
      }
    }

    Object.assign(this, {
      trie: trie
    });
  }

  _createClass(CodePointTrie, [{
    key: "getMatch",
    value: function getMatch(codePoints) {
      // Expects an array of numbers
      var ref = this.trie;
      var match = "";

      for (var index = 0; index < codePoints.length; index++) {
        var res = ref[codePoints[index]]; // If no reference, return eager match or no match:

        if (!res) {
          return match;
        } // If the current reference has a match, update the
        // current match:


        if (res.match) {
          match = res.match; // eslint-disable-line prefer-destructuring
        }

        ref = res;
      }

      return match;
    }
  }]);

  return CodePointTrie;
}();

var dataset = [[0x1F3FF], // 🏿
[0x1F9D1, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FF] // 🧑🏿‍🤝‍🧑🏿
];
var EmojiTrie = new CodePointTrie(dataset);
var ReversedEmojiTrie = new CodePointTrie(dataset.map(function (each) {
  return each.slice().reverse();
}));
console.log(JSON.stringify(ReversedEmojiTrie.trie, null, "\t")); // Gets code points from a string.

function getCodePointsFromString(str) {
  return _toConsumableArray(str).map(function (each) {
    return each.codePointAt(0);
  });
} // Gets the next emoji (from the start of a string)


function atStart(substr) {
  // Scope substr to the current paragraph:
  var arr = substr.split("\n");
  substr = arr[0]; // Start

  var codePoints = getCodePointsFromString(substr);
  var match = EmojiTrie.getMatch(codePoints); // Not found:

  if (!match) {
    return "";
  } // Found:


  return match;
} // Gets the previous emoji (from the end of a string)

function atEnd(substr) {
  // Scope substr to the current paragraph:
  var arr = substr.split("\n");
  substr = arr[arr.length - 1]; // End

  var reversedCodePoints = getCodePointsFromString(substr).reverse();
  var match = ReversedEmojiTrie.getMatch(reversedCodePoints); // Not found:

  if (!match) {
    return "";
  } // Found:


  var codePoints = getCodePointsFromString(match).reverse();
  match = String.fromCodePoint.apply(String, _toConsumableArray(codePoints));
  return match;
}

var exports$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  atStart: atStart,
  atEnd: atEnd
});

module.exports = exports$1;
