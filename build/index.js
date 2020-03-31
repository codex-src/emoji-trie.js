'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
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

      for (var x = 0; x < dataset[y].codePoints.length; x++) {
        var atEnd = x + 1 === dataset[y].codePoints.length;

        if (!atEnd) {
          // Do not overwrite sequence paths:
          if (!ref[dataset[y].codePoints[x]]) {
            ref[dataset[y].codePoints[x]] = {};
          }
        } else {
          // Throw on repeat sequences:
          if (ref[dataset[y].codePoints[x]] && ref[dataset[y].codePoints[x]].match) {
            throw new Error("CodePointTrie: An unexpected repeat sequence occurred.");
          } // const match = String.fromCodePoint(...dataset[y].codePoints)


          var match = dataset[y]; // Create a new sequence path:

          if (!ref[dataset[y].codePoints[x]]) {
            ref[dataset[y].codePoints[x]] = {
              match: match
            }; // Do not overwrite sequence paths:
          } else {
            ref[dataset[y].codePoints[x]].match = match;
          }
        }

        ref = ref[dataset[y].codePoints[x]];
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
      var match = null;

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

var dataset = [
	{
		group: "Smileys & Emotion",
		subgroup: "face-smiling",
		codePoints: [
			128512
		],
		status: "fully-qualified",
		emoji: "😀",
		tag: "E1.0",
		description: "grinning face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-smiling",
		codePoints: [
			128515
		],
		status: "fully-qualified",
		emoji: "😃",
		tag: "E0.6",
		description: "grinning face with big eyes"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-smiling",
		codePoints: [
			128516
		],
		status: "fully-qualified",
		emoji: "😄",
		tag: "E0.6",
		description: "grinning face with smiling eyes"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-smiling",
		codePoints: [
			128513
		],
		status: "fully-qualified",
		emoji: "😁",
		tag: "E0.6",
		description: "beaming face with smiling eyes"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-smiling",
		codePoints: [
			128518
		],
		status: "fully-qualified",
		emoji: "😆",
		tag: "E0.6",
		description: "grinning squinting face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-smiling",
		codePoints: [
			128517
		],
		status: "fully-qualified",
		emoji: "😅",
		tag: "E0.6",
		description: "grinning face with sweat"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-smiling",
		codePoints: [
			129315
		],
		status: "fully-qualified",
		emoji: "🤣",
		tag: "E3.0",
		description: "rolling on the floor laughing"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-smiling",
		codePoints: [
			128514
		],
		status: "fully-qualified",
		emoji: "😂",
		tag: "E0.6",
		description: "face with tears of joy"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-smiling",
		codePoints: [
			128578
		],
		status: "fully-qualified",
		emoji: "🙂",
		tag: "E1.0",
		description: "slightly smiling face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-smiling",
		codePoints: [
			128579
		],
		status: "fully-qualified",
		emoji: "🙃",
		tag: "E1.0",
		description: "upside-down face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-smiling",
		codePoints: [
			128521
		],
		status: "fully-qualified",
		emoji: "😉",
		tag: "E0.6",
		description: "winking face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-smiling",
		codePoints: [
			128522
		],
		status: "fully-qualified",
		emoji: "😊",
		tag: "E0.6",
		description: "smiling face with smiling eyes"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-smiling",
		codePoints: [
			128519
		],
		status: "fully-qualified",
		emoji: "😇",
		tag: "E1.0",
		description: "smiling face with halo"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-affection",
		codePoints: [
			129392
		],
		status: "fully-qualified",
		emoji: "🥰",
		tag: "E11.0",
		description: "smiling face with hearts"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-affection",
		codePoints: [
			128525
		],
		status: "fully-qualified",
		emoji: "😍",
		tag: "E0.6",
		description: "smiling face with heart-eyes"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-affection",
		codePoints: [
			129321
		],
		status: "fully-qualified",
		emoji: "🤩",
		tag: "E5.0",
		description: "star-struck"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-affection",
		codePoints: [
			128536
		],
		status: "fully-qualified",
		emoji: "😘",
		tag: "E0.6",
		description: "face blowing a kiss"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-affection",
		codePoints: [
			128535
		],
		status: "fully-qualified",
		emoji: "😗",
		tag: "E1.0",
		description: "kissing face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-affection",
		codePoints: [
			9786,
			65039
		],
		status: "fully-qualified",
		emoji: "☺️",
		tag: "E0.6",
		description: "smiling face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-affection",
		codePoints: [
			9786
		],
		status: "unqualified",
		emoji: "☺",
		tag: "E0.6",
		description: "smiling face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-affection",
		codePoints: [
			128538
		],
		status: "fully-qualified",
		emoji: "😚",
		tag: "E0.6",
		description: "kissing face with closed eyes"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-affection",
		codePoints: [
			128537
		],
		status: "fully-qualified",
		emoji: "😙",
		tag: "E1.0",
		description: "kissing face with smiling eyes"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-affection",
		codePoints: [
			129394
		],
		status: "fully-qualified",
		emoji: "🥲",
		tag: "E13.0",
		description: "smiling face with tear"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-tongue",
		codePoints: [
			128523
		],
		status: "fully-qualified",
		emoji: "😋",
		tag: "E0.6",
		description: "face savoring food"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-tongue",
		codePoints: [
			128539
		],
		status: "fully-qualified",
		emoji: "😛",
		tag: "E1.0",
		description: "face with tongue"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-tongue",
		codePoints: [
			128540
		],
		status: "fully-qualified",
		emoji: "😜",
		tag: "E0.6",
		description: "winking face with tongue"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-tongue",
		codePoints: [
			129322
		],
		status: "fully-qualified",
		emoji: "🤪",
		tag: "E5.0",
		description: "zany face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-tongue",
		codePoints: [
			128541
		],
		status: "fully-qualified",
		emoji: "😝",
		tag: "E0.6",
		description: "squinting face with tongue"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-tongue",
		codePoints: [
			129297
		],
		status: "fully-qualified",
		emoji: "🤑",
		tag: "E1.0",
		description: "money-mouth face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-hand",
		codePoints: [
			129303
		],
		status: "fully-qualified",
		emoji: "🤗",
		tag: "E1.0",
		description: "hugging face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-hand",
		codePoints: [
			129325
		],
		status: "fully-qualified",
		emoji: "🤭",
		tag: "E5.0",
		description: "face with hand over mouth"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-hand",
		codePoints: [
			129323
		],
		status: "fully-qualified",
		emoji: "🤫",
		tag: "E5.0",
		description: "shushing face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-hand",
		codePoints: [
			129300
		],
		status: "fully-qualified",
		emoji: "🤔",
		tag: "E1.0",
		description: "thinking face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-neutral-skeptical",
		codePoints: [
			129296
		],
		status: "fully-qualified",
		emoji: "🤐",
		tag: "E1.0",
		description: "zipper-mouth face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-neutral-skeptical",
		codePoints: [
			129320
		],
		status: "fully-qualified",
		emoji: "🤨",
		tag: "E5.0",
		description: "face with raised eyebrow"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-neutral-skeptical",
		codePoints: [
			128528
		],
		status: "fully-qualified",
		emoji: "😐",
		tag: "E0.7",
		description: "neutral face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-neutral-skeptical",
		codePoints: [
			128529
		],
		status: "fully-qualified",
		emoji: "😑",
		tag: "E1.0",
		description: "expressionless face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-neutral-skeptical",
		codePoints: [
			128566
		],
		status: "fully-qualified",
		emoji: "😶",
		tag: "E1.0",
		description: "face without mouth"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-neutral-skeptical",
		codePoints: [
			128527
		],
		status: "fully-qualified",
		emoji: "😏",
		tag: "E0.6",
		description: "smirking face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-neutral-skeptical",
		codePoints: [
			128530
		],
		status: "fully-qualified",
		emoji: "😒",
		tag: "E0.6",
		description: "unamused face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-neutral-skeptical",
		codePoints: [
			128580
		],
		status: "fully-qualified",
		emoji: "🙄",
		tag: "E1.0",
		description: "face with rolling eyes"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-neutral-skeptical",
		codePoints: [
			128556
		],
		status: "fully-qualified",
		emoji: "😬",
		tag: "E1.0",
		description: "grimacing face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-neutral-skeptical",
		codePoints: [
			129317
		],
		status: "fully-qualified",
		emoji: "🤥",
		tag: "E3.0",
		description: "lying face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-sleepy",
		codePoints: [
			128524
		],
		status: "fully-qualified",
		emoji: "😌",
		tag: "E0.6",
		description: "relieved face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-sleepy",
		codePoints: [
			128532
		],
		status: "fully-qualified",
		emoji: "😔",
		tag: "E0.6",
		description: "pensive face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-sleepy",
		codePoints: [
			128554
		],
		status: "fully-qualified",
		emoji: "😪",
		tag: "E0.6",
		description: "sleepy face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-sleepy",
		codePoints: [
			129316
		],
		status: "fully-qualified",
		emoji: "🤤",
		tag: "E3.0",
		description: "drooling face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-sleepy",
		codePoints: [
			128564
		],
		status: "fully-qualified",
		emoji: "😴",
		tag: "E1.0",
		description: "sleeping face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-unwell",
		codePoints: [
			128567
		],
		status: "fully-qualified",
		emoji: "😷",
		tag: "E0.6",
		description: "face with medical mask"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-unwell",
		codePoints: [
			129298
		],
		status: "fully-qualified",
		emoji: "🤒",
		tag: "E1.0",
		description: "face with thermometer"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-unwell",
		codePoints: [
			129301
		],
		status: "fully-qualified",
		emoji: "🤕",
		tag: "E1.0",
		description: "face with head-bandage"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-unwell",
		codePoints: [
			129314
		],
		status: "fully-qualified",
		emoji: "🤢",
		tag: "E3.0",
		description: "nauseated face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-unwell",
		codePoints: [
			129326
		],
		status: "fully-qualified",
		emoji: "🤮",
		tag: "E5.0",
		description: "face vomiting"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-unwell",
		codePoints: [
			129319
		],
		status: "fully-qualified",
		emoji: "🤧",
		tag: "E3.0",
		description: "sneezing face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-unwell",
		codePoints: [
			129397
		],
		status: "fully-qualified",
		emoji: "🥵",
		tag: "E11.0",
		description: "hot face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-unwell",
		codePoints: [
			129398
		],
		status: "fully-qualified",
		emoji: "🥶",
		tag: "E11.0",
		description: "cold face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-unwell",
		codePoints: [
			129396
		],
		status: "fully-qualified",
		emoji: "🥴",
		tag: "E11.0",
		description: "woozy face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-unwell",
		codePoints: [
			128565
		],
		status: "fully-qualified",
		emoji: "😵",
		tag: "E0.6",
		description: "dizzy face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-unwell",
		codePoints: [
			129327
		],
		status: "fully-qualified",
		emoji: "🤯",
		tag: "E5.0",
		description: "exploding head"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-hat",
		codePoints: [
			129312
		],
		status: "fully-qualified",
		emoji: "🤠",
		tag: "E3.0",
		description: "cowboy hat face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-hat",
		codePoints: [
			129395
		],
		status: "fully-qualified",
		emoji: "🥳",
		tag: "E11.0",
		description: "partying face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-hat",
		codePoints: [
			129400
		],
		status: "fully-qualified",
		emoji: "🥸",
		tag: "E13.0",
		description: "disguised face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-glasses",
		codePoints: [
			128526
		],
		status: "fully-qualified",
		emoji: "😎",
		tag: "E1.0",
		description: "smiling face with sunglasses"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-glasses",
		codePoints: [
			129299
		],
		status: "fully-qualified",
		emoji: "🤓",
		tag: "E1.0",
		description: "nerd face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-glasses",
		codePoints: [
			129488
		],
		status: "fully-qualified",
		emoji: "🧐",
		tag: "E5.0",
		description: "face with monocle"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			128533
		],
		status: "fully-qualified",
		emoji: "😕",
		tag: "E1.0",
		description: "confused face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			128543
		],
		status: "fully-qualified",
		emoji: "😟",
		tag: "E1.0",
		description: "worried face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			128577
		],
		status: "fully-qualified",
		emoji: "🙁",
		tag: "E1.0",
		description: "slightly frowning face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			9785,
			65039
		],
		status: "fully-qualified",
		emoji: "☹️",
		tag: "E0.7",
		description: "frowning face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			9785
		],
		status: "unqualified",
		emoji: "☹",
		tag: "E0.7",
		description: "frowning face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			128558
		],
		status: "fully-qualified",
		emoji: "😮",
		tag: "E1.0",
		description: "face with open mouth"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			128559
		],
		status: "fully-qualified",
		emoji: "😯",
		tag: "E1.0",
		description: "hushed face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			128562
		],
		status: "fully-qualified",
		emoji: "😲",
		tag: "E0.6",
		description: "astonished face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			128563
		],
		status: "fully-qualified",
		emoji: "😳",
		tag: "E0.6",
		description: "flushed face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			129402
		],
		status: "fully-qualified",
		emoji: "🥺",
		tag: "E11.0",
		description: "pleading face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			128550
		],
		status: "fully-qualified",
		emoji: "😦",
		tag: "E1.0",
		description: "frowning face with open mouth"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			128551
		],
		status: "fully-qualified",
		emoji: "😧",
		tag: "E1.0",
		description: "anguished face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			128552
		],
		status: "fully-qualified",
		emoji: "😨",
		tag: "E0.6",
		description: "fearful face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			128560
		],
		status: "fully-qualified",
		emoji: "😰",
		tag: "E0.6",
		description: "anxious face with sweat"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			128549
		],
		status: "fully-qualified",
		emoji: "😥",
		tag: "E0.6",
		description: "sad but relieved face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			128546
		],
		status: "fully-qualified",
		emoji: "😢",
		tag: "E0.6",
		description: "crying face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			128557
		],
		status: "fully-qualified",
		emoji: "😭",
		tag: "E0.6",
		description: "loudly crying face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			128561
		],
		status: "fully-qualified",
		emoji: "😱",
		tag: "E0.6",
		description: "face screaming in fear"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			128534
		],
		status: "fully-qualified",
		emoji: "😖",
		tag: "E0.6",
		description: "confounded face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			128547
		],
		status: "fully-qualified",
		emoji: "😣",
		tag: "E0.6",
		description: "persevering face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			128542
		],
		status: "fully-qualified",
		emoji: "😞",
		tag: "E0.6",
		description: "disappointed face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			128531
		],
		status: "fully-qualified",
		emoji: "😓",
		tag: "E0.6",
		description: "downcast face with sweat"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			128553
		],
		status: "fully-qualified",
		emoji: "😩",
		tag: "E0.6",
		description: "weary face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			128555
		],
		status: "fully-qualified",
		emoji: "😫",
		tag: "E0.6",
		description: "tired face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-concerned",
		codePoints: [
			129393
		],
		status: "fully-qualified",
		emoji: "🥱",
		tag: "E12.0",
		description: "yawning face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-negative",
		codePoints: [
			128548
		],
		status: "fully-qualified",
		emoji: "😤",
		tag: "E0.6",
		description: "face with steam from nose"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-negative",
		codePoints: [
			128545
		],
		status: "fully-qualified",
		emoji: "😡",
		tag: "E0.6",
		description: "pouting face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-negative",
		codePoints: [
			128544
		],
		status: "fully-qualified",
		emoji: "😠",
		tag: "E0.6",
		description: "angry face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-negative",
		codePoints: [
			129324
		],
		status: "fully-qualified",
		emoji: "🤬",
		tag: "E5.0",
		description: "face with symbols on mouth"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-negative",
		codePoints: [
			128520
		],
		status: "fully-qualified",
		emoji: "😈",
		tag: "E1.0",
		description: "smiling face with horns"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-negative",
		codePoints: [
			128127
		],
		status: "fully-qualified",
		emoji: "👿",
		tag: "E0.6",
		description: "angry face with horns"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-negative",
		codePoints: [
			128128
		],
		status: "fully-qualified",
		emoji: "💀",
		tag: "E0.6",
		description: "skull"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-negative",
		codePoints: [
			9760,
			65039
		],
		status: "fully-qualified",
		emoji: "☠️",
		tag: "E1.0",
		description: "skull and crossbones"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-negative",
		codePoints: [
			9760
		],
		status: "unqualified",
		emoji: "☠",
		tag: "E1.0",
		description: "skull and crossbones"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-costume",
		codePoints: [
			128169
		],
		status: "fully-qualified",
		emoji: "💩",
		tag: "E0.6",
		description: "pile of poo"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-costume",
		codePoints: [
			129313
		],
		status: "fully-qualified",
		emoji: "🤡",
		tag: "E3.0",
		description: "clown face"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-costume",
		codePoints: [
			128121
		],
		status: "fully-qualified",
		emoji: "👹",
		tag: "E0.6",
		description: "ogre"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-costume",
		codePoints: [
			128122
		],
		status: "fully-qualified",
		emoji: "👺",
		tag: "E0.6",
		description: "goblin"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-costume",
		codePoints: [
			128123
		],
		status: "fully-qualified",
		emoji: "👻",
		tag: "E0.6",
		description: "ghost"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-costume",
		codePoints: [
			128125
		],
		status: "fully-qualified",
		emoji: "👽",
		tag: "E0.6",
		description: "alien"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-costume",
		codePoints: [
			128126
		],
		status: "fully-qualified",
		emoji: "👾",
		tag: "E0.6",
		description: "alien monster"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "face-costume",
		codePoints: [
			129302
		],
		status: "fully-qualified",
		emoji: "🤖",
		tag: "E1.0",
		description: "robot"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "cat-face",
		codePoints: [
			128570
		],
		status: "fully-qualified",
		emoji: "😺",
		tag: "E0.6",
		description: "grinning cat"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "cat-face",
		codePoints: [
			128568
		],
		status: "fully-qualified",
		emoji: "😸",
		tag: "E0.6",
		description: "grinning cat with smiling eyes"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "cat-face",
		codePoints: [
			128569
		],
		status: "fully-qualified",
		emoji: "😹",
		tag: "E0.6",
		description: "cat with tears of joy"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "cat-face",
		codePoints: [
			128571
		],
		status: "fully-qualified",
		emoji: "😻",
		tag: "E0.6",
		description: "smiling cat with heart-eyes"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "cat-face",
		codePoints: [
			128572
		],
		status: "fully-qualified",
		emoji: "😼",
		tag: "E0.6",
		description: "cat with wry smile"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "cat-face",
		codePoints: [
			128573
		],
		status: "fully-qualified",
		emoji: "😽",
		tag: "E0.6",
		description: "kissing cat"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "cat-face",
		codePoints: [
			128576
		],
		status: "fully-qualified",
		emoji: "🙀",
		tag: "E0.6",
		description: "weary cat"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "cat-face",
		codePoints: [
			128575
		],
		status: "fully-qualified",
		emoji: "😿",
		tag: "E0.6",
		description: "crying cat"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "cat-face",
		codePoints: [
			128574
		],
		status: "fully-qualified",
		emoji: "😾",
		tag: "E0.6",
		description: "pouting cat"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "monkey-face",
		codePoints: [
			128584
		],
		status: "fully-qualified",
		emoji: "🙈",
		tag: "E0.6",
		description: "see-no-evil monkey"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "monkey-face",
		codePoints: [
			128585
		],
		status: "fully-qualified",
		emoji: "🙉",
		tag: "E0.6",
		description: "hear-no-evil monkey"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "monkey-face",
		codePoints: [
			128586
		],
		status: "fully-qualified",
		emoji: "🙊",
		tag: "E0.6",
		description: "speak-no-evil monkey"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128139
		],
		status: "fully-qualified",
		emoji: "💋",
		tag: "E0.6",
		description: "kiss mark"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128140
		],
		status: "fully-qualified",
		emoji: "💌",
		tag: "E0.6",
		description: "love letter"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128152
		],
		status: "fully-qualified",
		emoji: "💘",
		tag: "E0.6",
		description: "heart with arrow"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128157
		],
		status: "fully-qualified",
		emoji: "💝",
		tag: "E0.6",
		description: "heart with ribbon"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128150
		],
		status: "fully-qualified",
		emoji: "💖",
		tag: "E0.6",
		description: "sparkling heart"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128151
		],
		status: "fully-qualified",
		emoji: "💗",
		tag: "E0.6",
		description: "growing heart"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128147
		],
		status: "fully-qualified",
		emoji: "💓",
		tag: "E0.6",
		description: "beating heart"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128158
		],
		status: "fully-qualified",
		emoji: "💞",
		tag: "E0.6",
		description: "revolving hearts"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128149
		],
		status: "fully-qualified",
		emoji: "💕",
		tag: "E0.6",
		description: "two hearts"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128159
		],
		status: "fully-qualified",
		emoji: "💟",
		tag: "E0.6",
		description: "heart decoration"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			10083,
			65039
		],
		status: "fully-qualified",
		emoji: "❣️",
		tag: "E1.0",
		description: "heart exclamation"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			10083
		],
		status: "unqualified",
		emoji: "❣",
		tag: "E1.0",
		description: "heart exclamation"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128148
		],
		status: "fully-qualified",
		emoji: "💔",
		tag: "E0.6",
		description: "broken heart"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			10084,
			65039
		],
		status: "fully-qualified",
		emoji: "❤️",
		tag: "E0.6",
		description: "red heart"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			10084
		],
		status: "unqualified",
		emoji: "❤",
		tag: "E0.6",
		description: "red heart"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			129505
		],
		status: "fully-qualified",
		emoji: "🧡",
		tag: "E5.0",
		description: "orange heart"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128155
		],
		status: "fully-qualified",
		emoji: "💛",
		tag: "E0.6",
		description: "yellow heart"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128154
		],
		status: "fully-qualified",
		emoji: "💚",
		tag: "E0.6",
		description: "green heart"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128153
		],
		status: "fully-qualified",
		emoji: "💙",
		tag: "E0.6",
		description: "blue heart"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128156
		],
		status: "fully-qualified",
		emoji: "💜",
		tag: "E0.6",
		description: "purple heart"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			129294
		],
		status: "fully-qualified",
		emoji: "🤎",
		tag: "E12.0",
		description: "brown heart"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128420
		],
		status: "fully-qualified",
		emoji: "🖤",
		tag: "E3.0",
		description: "black heart"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			129293
		],
		status: "fully-qualified",
		emoji: "🤍",
		tag: "E12.0",
		description: "white heart"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128175
		],
		status: "fully-qualified",
		emoji: "💯",
		tag: "E0.6",
		description: "hundred points"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128162
		],
		status: "fully-qualified",
		emoji: "💢",
		tag: "E0.6",
		description: "anger symbol"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128165
		],
		status: "fully-qualified",
		emoji: "💥",
		tag: "E0.6",
		description: "collision"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128171
		],
		status: "fully-qualified",
		emoji: "💫",
		tag: "E0.6",
		description: "dizzy"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128166
		],
		status: "fully-qualified",
		emoji: "💦",
		tag: "E0.6",
		description: "sweat droplets"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128168
		],
		status: "fully-qualified",
		emoji: "💨",
		tag: "E0.6",
		description: "dashing away"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128371,
			65039
		],
		status: "fully-qualified",
		emoji: "🕳️",
		tag: "E0.7",
		description: "hole"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128371
		],
		status: "unqualified",
		emoji: "🕳",
		tag: "E0.7",
		description: "hole"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128163
		],
		status: "fully-qualified",
		emoji: "💣",
		tag: "E0.6",
		description: "bomb"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128172
		],
		status: "fully-qualified",
		emoji: "💬",
		tag: "E0.6",
		description: "speech balloon"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128065,
			65039,
			8205,
			128488,
			65039
		],
		status: "fully-qualified",
		emoji: "👁️‍🗨️",
		tag: "E2.0",
		description: "eye in speech bubble"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128065,
			8205,
			128488,
			65039
		],
		status: "unqualified",
		emoji: "👁‍🗨️",
		tag: "E2.0",
		description: "eye in speech bubble"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128065,
			65039,
			8205,
			128488
		],
		status: "unqualified",
		emoji: "👁️‍🗨",
		tag: "E2.0",
		description: "eye in speech bubble"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128065,
			8205,
			128488
		],
		status: "unqualified",
		emoji: "👁‍🗨",
		tag: "E2.0",
		description: "eye in speech bubble"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128488,
			65039
		],
		status: "fully-qualified",
		emoji: "🗨️",
		tag: "E2.0",
		description: "left speech bubble"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128488
		],
		status: "unqualified",
		emoji: "🗨",
		tag: "E2.0",
		description: "left speech bubble"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128495,
			65039
		],
		status: "fully-qualified",
		emoji: "🗯️",
		tag: "E0.7",
		description: "right anger bubble"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128495
		],
		status: "unqualified",
		emoji: "🗯",
		tag: "E0.7",
		description: "right anger bubble"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128173
		],
		status: "fully-qualified",
		emoji: "💭",
		tag: "E1.0",
		description: "thought balloon"
	},
	{
		group: "Smileys & Emotion",
		subgroup: "emotion",
		codePoints: [
			128164
		],
		status: "fully-qualified",
		emoji: "💤",
		tag: "E0.6",
		description: "zzz"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			128075
		],
		status: "fully-qualified",
		emoji: "👋",
		tag: "E0.6",
		description: "waving hand"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			128075,
			127995
		],
		status: "fully-qualified",
		emoji: "👋🏻",
		tag: "E1.0",
		description: "waving hand: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			128075,
			127996
		],
		status: "fully-qualified",
		emoji: "👋🏼",
		tag: "E1.0",
		description: "waving hand: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			128075,
			127997
		],
		status: "fully-qualified",
		emoji: "👋🏽",
		tag: "E1.0",
		description: "waving hand: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			128075,
			127998
		],
		status: "fully-qualified",
		emoji: "👋🏾",
		tag: "E1.0",
		description: "waving hand: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			128075,
			127999
		],
		status: "fully-qualified",
		emoji: "👋🏿",
		tag: "E1.0",
		description: "waving hand: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			129306
		],
		status: "fully-qualified",
		emoji: "🤚",
		tag: "E3.0",
		description: "raised back of hand"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			129306,
			127995
		],
		status: "fully-qualified",
		emoji: "🤚🏻",
		tag: "E3.0",
		description: "raised back of hand: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			129306,
			127996
		],
		status: "fully-qualified",
		emoji: "🤚🏼",
		tag: "E3.0",
		description: "raised back of hand: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			129306,
			127997
		],
		status: "fully-qualified",
		emoji: "🤚🏽",
		tag: "E3.0",
		description: "raised back of hand: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			129306,
			127998
		],
		status: "fully-qualified",
		emoji: "🤚🏾",
		tag: "E3.0",
		description: "raised back of hand: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			129306,
			127999
		],
		status: "fully-qualified",
		emoji: "🤚🏿",
		tag: "E3.0",
		description: "raised back of hand: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			128400,
			65039
		],
		status: "fully-qualified",
		emoji: "🖐️",
		tag: "E0.7",
		description: "hand with fingers splayed"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			128400
		],
		status: "unqualified",
		emoji: "🖐",
		tag: "E0.7",
		description: "hand with fingers splayed"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			128400,
			127995
		],
		status: "fully-qualified",
		emoji: "🖐🏻",
		tag: "E1.0",
		description: "hand with fingers splayed: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			128400,
			127996
		],
		status: "fully-qualified",
		emoji: "🖐🏼",
		tag: "E1.0",
		description: "hand with fingers splayed: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			128400,
			127997
		],
		status: "fully-qualified",
		emoji: "🖐🏽",
		tag: "E1.0",
		description: "hand with fingers splayed: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			128400,
			127998
		],
		status: "fully-qualified",
		emoji: "🖐🏾",
		tag: "E1.0",
		description: "hand with fingers splayed: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			128400,
			127999
		],
		status: "fully-qualified",
		emoji: "🖐🏿",
		tag: "E1.0",
		description: "hand with fingers splayed: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			9995
		],
		status: "fully-qualified",
		emoji: "✋",
		tag: "E0.6",
		description: "raised hand"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			9995,
			127995
		],
		status: "fully-qualified",
		emoji: "✋🏻",
		tag: "E1.0",
		description: "raised hand: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			9995,
			127996
		],
		status: "fully-qualified",
		emoji: "✋🏼",
		tag: "E1.0",
		description: "raised hand: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			9995,
			127997
		],
		status: "fully-qualified",
		emoji: "✋🏽",
		tag: "E1.0",
		description: "raised hand: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			9995,
			127998
		],
		status: "fully-qualified",
		emoji: "✋🏾",
		tag: "E1.0",
		description: "raised hand: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			9995,
			127999
		],
		status: "fully-qualified",
		emoji: "✋🏿",
		tag: "E1.0",
		description: "raised hand: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			128406
		],
		status: "fully-qualified",
		emoji: "🖖",
		tag: "E1.0",
		description: "vulcan salute"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			128406,
			127995
		],
		status: "fully-qualified",
		emoji: "🖖🏻",
		tag: "E1.0",
		description: "vulcan salute: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			128406,
			127996
		],
		status: "fully-qualified",
		emoji: "🖖🏼",
		tag: "E1.0",
		description: "vulcan salute: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			128406,
			127997
		],
		status: "fully-qualified",
		emoji: "🖖🏽",
		tag: "E1.0",
		description: "vulcan salute: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			128406,
			127998
		],
		status: "fully-qualified",
		emoji: "🖖🏾",
		tag: "E1.0",
		description: "vulcan salute: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-open",
		codePoints: [
			128406,
			127999
		],
		status: "fully-qualified",
		emoji: "🖖🏿",
		tag: "E1.0",
		description: "vulcan salute: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			128076
		],
		status: "fully-qualified",
		emoji: "👌",
		tag: "E0.6",
		description: "OK hand"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			128076,
			127995
		],
		status: "fully-qualified",
		emoji: "👌🏻",
		tag: "E1.0",
		description: "OK hand: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			128076,
			127996
		],
		status: "fully-qualified",
		emoji: "👌🏼",
		tag: "E1.0",
		description: "OK hand: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			128076,
			127997
		],
		status: "fully-qualified",
		emoji: "👌🏽",
		tag: "E1.0",
		description: "OK hand: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			128076,
			127998
		],
		status: "fully-qualified",
		emoji: "👌🏾",
		tag: "E1.0",
		description: "OK hand: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			128076,
			127999
		],
		status: "fully-qualified",
		emoji: "👌🏿",
		tag: "E1.0",
		description: "OK hand: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129292
		],
		status: "fully-qualified",
		emoji: "🤌",
		tag: "E13.0",
		description: "pinched fingers"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129292,
			127995
		],
		status: "fully-qualified",
		emoji: "🤌🏻",
		tag: "E13.0",
		description: "pinched fingers: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129292,
			127996
		],
		status: "fully-qualified",
		emoji: "🤌🏼",
		tag: "E13.0",
		description: "pinched fingers: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129292,
			127997
		],
		status: "fully-qualified",
		emoji: "🤌🏽",
		tag: "E13.0",
		description: "pinched fingers: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129292,
			127998
		],
		status: "fully-qualified",
		emoji: "🤌🏾",
		tag: "E13.0",
		description: "pinched fingers: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129292,
			127999
		],
		status: "fully-qualified",
		emoji: "🤌🏿",
		tag: "E13.0",
		description: "pinched fingers: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129295
		],
		status: "fully-qualified",
		emoji: "🤏",
		tag: "E12.0",
		description: "pinching hand"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129295,
			127995
		],
		status: "fully-qualified",
		emoji: "🤏🏻",
		tag: "E12.0",
		description: "pinching hand: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129295,
			127996
		],
		status: "fully-qualified",
		emoji: "🤏🏼",
		tag: "E12.0",
		description: "pinching hand: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129295,
			127997
		],
		status: "fully-qualified",
		emoji: "🤏🏽",
		tag: "E12.0",
		description: "pinching hand: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129295,
			127998
		],
		status: "fully-qualified",
		emoji: "🤏🏾",
		tag: "E12.0",
		description: "pinching hand: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129295,
			127999
		],
		status: "fully-qualified",
		emoji: "🤏🏿",
		tag: "E12.0",
		description: "pinching hand: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			9996,
			65039
		],
		status: "fully-qualified",
		emoji: "✌️",
		tag: "E0.6",
		description: "victory hand"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			9996
		],
		status: "unqualified",
		emoji: "✌",
		tag: "E0.6",
		description: "victory hand"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			9996,
			127995
		],
		status: "fully-qualified",
		emoji: "✌🏻",
		tag: "E1.0",
		description: "victory hand: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			9996,
			127996
		],
		status: "fully-qualified",
		emoji: "✌🏼",
		tag: "E1.0",
		description: "victory hand: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			9996,
			127997
		],
		status: "fully-qualified",
		emoji: "✌🏽",
		tag: "E1.0",
		description: "victory hand: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			9996,
			127998
		],
		status: "fully-qualified",
		emoji: "✌🏾",
		tag: "E1.0",
		description: "victory hand: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			9996,
			127999
		],
		status: "fully-qualified",
		emoji: "✌🏿",
		tag: "E1.0",
		description: "victory hand: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129310
		],
		status: "fully-qualified",
		emoji: "🤞",
		tag: "E3.0",
		description: "crossed fingers"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129310,
			127995
		],
		status: "fully-qualified",
		emoji: "🤞🏻",
		tag: "E3.0",
		description: "crossed fingers: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129310,
			127996
		],
		status: "fully-qualified",
		emoji: "🤞🏼",
		tag: "E3.0",
		description: "crossed fingers: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129310,
			127997
		],
		status: "fully-qualified",
		emoji: "🤞🏽",
		tag: "E3.0",
		description: "crossed fingers: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129310,
			127998
		],
		status: "fully-qualified",
		emoji: "🤞🏾",
		tag: "E3.0",
		description: "crossed fingers: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129310,
			127999
		],
		status: "fully-qualified",
		emoji: "🤞🏿",
		tag: "E3.0",
		description: "crossed fingers: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129311
		],
		status: "fully-qualified",
		emoji: "🤟",
		tag: "E5.0",
		description: "love-you gesture"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129311,
			127995
		],
		status: "fully-qualified",
		emoji: "🤟🏻",
		tag: "E5.0",
		description: "love-you gesture: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129311,
			127996
		],
		status: "fully-qualified",
		emoji: "🤟🏼",
		tag: "E5.0",
		description: "love-you gesture: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129311,
			127997
		],
		status: "fully-qualified",
		emoji: "🤟🏽",
		tag: "E5.0",
		description: "love-you gesture: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129311,
			127998
		],
		status: "fully-qualified",
		emoji: "🤟🏾",
		tag: "E5.0",
		description: "love-you gesture: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129311,
			127999
		],
		status: "fully-qualified",
		emoji: "🤟🏿",
		tag: "E5.0",
		description: "love-you gesture: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129304
		],
		status: "fully-qualified",
		emoji: "🤘",
		tag: "E1.0",
		description: "sign of the horns"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129304,
			127995
		],
		status: "fully-qualified",
		emoji: "🤘🏻",
		tag: "E1.0",
		description: "sign of the horns: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129304,
			127996
		],
		status: "fully-qualified",
		emoji: "🤘🏼",
		tag: "E1.0",
		description: "sign of the horns: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129304,
			127997
		],
		status: "fully-qualified",
		emoji: "🤘🏽",
		tag: "E1.0",
		description: "sign of the horns: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129304,
			127998
		],
		status: "fully-qualified",
		emoji: "🤘🏾",
		tag: "E1.0",
		description: "sign of the horns: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129304,
			127999
		],
		status: "fully-qualified",
		emoji: "🤘🏿",
		tag: "E1.0",
		description: "sign of the horns: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129305
		],
		status: "fully-qualified",
		emoji: "🤙",
		tag: "E3.0",
		description: "call me hand"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129305,
			127995
		],
		status: "fully-qualified",
		emoji: "🤙🏻",
		tag: "E3.0",
		description: "call me hand: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129305,
			127996
		],
		status: "fully-qualified",
		emoji: "🤙🏼",
		tag: "E3.0",
		description: "call me hand: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129305,
			127997
		],
		status: "fully-qualified",
		emoji: "🤙🏽",
		tag: "E3.0",
		description: "call me hand: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129305,
			127998
		],
		status: "fully-qualified",
		emoji: "🤙🏾",
		tag: "E3.0",
		description: "call me hand: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-partial",
		codePoints: [
			129305,
			127999
		],
		status: "fully-qualified",
		emoji: "🤙🏿",
		tag: "E3.0",
		description: "call me hand: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128072
		],
		status: "fully-qualified",
		emoji: "👈",
		tag: "E0.6",
		description: "backhand index pointing left"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128072,
			127995
		],
		status: "fully-qualified",
		emoji: "👈🏻",
		tag: "E1.0",
		description: "backhand index pointing left: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128072,
			127996
		],
		status: "fully-qualified",
		emoji: "👈🏼",
		tag: "E1.0",
		description: "backhand index pointing left: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128072,
			127997
		],
		status: "fully-qualified",
		emoji: "👈🏽",
		tag: "E1.0",
		description: "backhand index pointing left: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128072,
			127998
		],
		status: "fully-qualified",
		emoji: "👈🏾",
		tag: "E1.0",
		description: "backhand index pointing left: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128072,
			127999
		],
		status: "fully-qualified",
		emoji: "👈🏿",
		tag: "E1.0",
		description: "backhand index pointing left: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128073
		],
		status: "fully-qualified",
		emoji: "👉",
		tag: "E0.6",
		description: "backhand index pointing right"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128073,
			127995
		],
		status: "fully-qualified",
		emoji: "👉🏻",
		tag: "E1.0",
		description: "backhand index pointing right: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128073,
			127996
		],
		status: "fully-qualified",
		emoji: "👉🏼",
		tag: "E1.0",
		description: "backhand index pointing right: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128073,
			127997
		],
		status: "fully-qualified",
		emoji: "👉🏽",
		tag: "E1.0",
		description: "backhand index pointing right: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128073,
			127998
		],
		status: "fully-qualified",
		emoji: "👉🏾",
		tag: "E1.0",
		description: "backhand index pointing right: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128073,
			127999
		],
		status: "fully-qualified",
		emoji: "👉🏿",
		tag: "E1.0",
		description: "backhand index pointing right: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128070
		],
		status: "fully-qualified",
		emoji: "👆",
		tag: "E0.6",
		description: "backhand index pointing up"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128070,
			127995
		],
		status: "fully-qualified",
		emoji: "👆🏻",
		tag: "E1.0",
		description: "backhand index pointing up: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128070,
			127996
		],
		status: "fully-qualified",
		emoji: "👆🏼",
		tag: "E1.0",
		description: "backhand index pointing up: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128070,
			127997
		],
		status: "fully-qualified",
		emoji: "👆🏽",
		tag: "E1.0",
		description: "backhand index pointing up: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128070,
			127998
		],
		status: "fully-qualified",
		emoji: "👆🏾",
		tag: "E1.0",
		description: "backhand index pointing up: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128070,
			127999
		],
		status: "fully-qualified",
		emoji: "👆🏿",
		tag: "E1.0",
		description: "backhand index pointing up: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128405
		],
		status: "fully-qualified",
		emoji: "🖕",
		tag: "E1.0",
		description: "middle finger"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128405,
			127995
		],
		status: "fully-qualified",
		emoji: "🖕🏻",
		tag: "E1.0",
		description: "middle finger: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128405,
			127996
		],
		status: "fully-qualified",
		emoji: "🖕🏼",
		tag: "E1.0",
		description: "middle finger: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128405,
			127997
		],
		status: "fully-qualified",
		emoji: "🖕🏽",
		tag: "E1.0",
		description: "middle finger: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128405,
			127998
		],
		status: "fully-qualified",
		emoji: "🖕🏾",
		tag: "E1.0",
		description: "middle finger: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128405,
			127999
		],
		status: "fully-qualified",
		emoji: "🖕🏿",
		tag: "E1.0",
		description: "middle finger: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128071
		],
		status: "fully-qualified",
		emoji: "👇",
		tag: "E0.6",
		description: "backhand index pointing down"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128071,
			127995
		],
		status: "fully-qualified",
		emoji: "👇🏻",
		tag: "E1.0",
		description: "backhand index pointing down: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128071,
			127996
		],
		status: "fully-qualified",
		emoji: "👇🏼",
		tag: "E1.0",
		description: "backhand index pointing down: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128071,
			127997
		],
		status: "fully-qualified",
		emoji: "👇🏽",
		tag: "E1.0",
		description: "backhand index pointing down: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128071,
			127998
		],
		status: "fully-qualified",
		emoji: "👇🏾",
		tag: "E1.0",
		description: "backhand index pointing down: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			128071,
			127999
		],
		status: "fully-qualified",
		emoji: "👇🏿",
		tag: "E1.0",
		description: "backhand index pointing down: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			9757,
			65039
		],
		status: "fully-qualified",
		emoji: "☝️",
		tag: "E0.6",
		description: "index pointing up"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			9757
		],
		status: "unqualified",
		emoji: "☝",
		tag: "E0.6",
		description: "index pointing up"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			9757,
			127995
		],
		status: "fully-qualified",
		emoji: "☝🏻",
		tag: "E1.0",
		description: "index pointing up: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			9757,
			127996
		],
		status: "fully-qualified",
		emoji: "☝🏼",
		tag: "E1.0",
		description: "index pointing up: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			9757,
			127997
		],
		status: "fully-qualified",
		emoji: "☝🏽",
		tag: "E1.0",
		description: "index pointing up: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			9757,
			127998
		],
		status: "fully-qualified",
		emoji: "☝🏾",
		tag: "E1.0",
		description: "index pointing up: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-single-finger",
		codePoints: [
			9757,
			127999
		],
		status: "fully-qualified",
		emoji: "☝🏿",
		tag: "E1.0",
		description: "index pointing up: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			128077
		],
		status: "fully-qualified",
		emoji: "👍",
		tag: "E0.6",
		description: "thumbs up"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			128077,
			127995
		],
		status: "fully-qualified",
		emoji: "👍🏻",
		tag: "E1.0",
		description: "thumbs up: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			128077,
			127996
		],
		status: "fully-qualified",
		emoji: "👍🏼",
		tag: "E1.0",
		description: "thumbs up: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			128077,
			127997
		],
		status: "fully-qualified",
		emoji: "👍🏽",
		tag: "E1.0",
		description: "thumbs up: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			128077,
			127998
		],
		status: "fully-qualified",
		emoji: "👍🏾",
		tag: "E1.0",
		description: "thumbs up: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			128077,
			127999
		],
		status: "fully-qualified",
		emoji: "👍🏿",
		tag: "E1.0",
		description: "thumbs up: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			128078
		],
		status: "fully-qualified",
		emoji: "👎",
		tag: "E0.6",
		description: "thumbs down"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			128078,
			127995
		],
		status: "fully-qualified",
		emoji: "👎🏻",
		tag: "E1.0",
		description: "thumbs down: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			128078,
			127996
		],
		status: "fully-qualified",
		emoji: "👎🏼",
		tag: "E1.0",
		description: "thumbs down: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			128078,
			127997
		],
		status: "fully-qualified",
		emoji: "👎🏽",
		tag: "E1.0",
		description: "thumbs down: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			128078,
			127998
		],
		status: "fully-qualified",
		emoji: "👎🏾",
		tag: "E1.0",
		description: "thumbs down: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			128078,
			127999
		],
		status: "fully-qualified",
		emoji: "👎🏿",
		tag: "E1.0",
		description: "thumbs down: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			9994
		],
		status: "fully-qualified",
		emoji: "✊",
		tag: "E0.6",
		description: "raised fist"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			9994,
			127995
		],
		status: "fully-qualified",
		emoji: "✊🏻",
		tag: "E1.0",
		description: "raised fist: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			9994,
			127996
		],
		status: "fully-qualified",
		emoji: "✊🏼",
		tag: "E1.0",
		description: "raised fist: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			9994,
			127997
		],
		status: "fully-qualified",
		emoji: "✊🏽",
		tag: "E1.0",
		description: "raised fist: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			9994,
			127998
		],
		status: "fully-qualified",
		emoji: "✊🏾",
		tag: "E1.0",
		description: "raised fist: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			9994,
			127999
		],
		status: "fully-qualified",
		emoji: "✊🏿",
		tag: "E1.0",
		description: "raised fist: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			128074
		],
		status: "fully-qualified",
		emoji: "👊",
		tag: "E0.6",
		description: "oncoming fist"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			128074,
			127995
		],
		status: "fully-qualified",
		emoji: "👊🏻",
		tag: "E1.0",
		description: "oncoming fist: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			128074,
			127996
		],
		status: "fully-qualified",
		emoji: "👊🏼",
		tag: "E1.0",
		description: "oncoming fist: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			128074,
			127997
		],
		status: "fully-qualified",
		emoji: "👊🏽",
		tag: "E1.0",
		description: "oncoming fist: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			128074,
			127998
		],
		status: "fully-qualified",
		emoji: "👊🏾",
		tag: "E1.0",
		description: "oncoming fist: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			128074,
			127999
		],
		status: "fully-qualified",
		emoji: "👊🏿",
		tag: "E1.0",
		description: "oncoming fist: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			129307
		],
		status: "fully-qualified",
		emoji: "🤛",
		tag: "E3.0",
		description: "left-facing fist"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			129307,
			127995
		],
		status: "fully-qualified",
		emoji: "🤛🏻",
		tag: "E3.0",
		description: "left-facing fist: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			129307,
			127996
		],
		status: "fully-qualified",
		emoji: "🤛🏼",
		tag: "E3.0",
		description: "left-facing fist: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			129307,
			127997
		],
		status: "fully-qualified",
		emoji: "🤛🏽",
		tag: "E3.0",
		description: "left-facing fist: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			129307,
			127998
		],
		status: "fully-qualified",
		emoji: "🤛🏾",
		tag: "E3.0",
		description: "left-facing fist: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			129307,
			127999
		],
		status: "fully-qualified",
		emoji: "🤛🏿",
		tag: "E3.0",
		description: "left-facing fist: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			129308
		],
		status: "fully-qualified",
		emoji: "🤜",
		tag: "E3.0",
		description: "right-facing fist"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			129308,
			127995
		],
		status: "fully-qualified",
		emoji: "🤜🏻",
		tag: "E3.0",
		description: "right-facing fist: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			129308,
			127996
		],
		status: "fully-qualified",
		emoji: "🤜🏼",
		tag: "E3.0",
		description: "right-facing fist: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			129308,
			127997
		],
		status: "fully-qualified",
		emoji: "🤜🏽",
		tag: "E3.0",
		description: "right-facing fist: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			129308,
			127998
		],
		status: "fully-qualified",
		emoji: "🤜🏾",
		tag: "E3.0",
		description: "right-facing fist: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-fingers-closed",
		codePoints: [
			129308,
			127999
		],
		status: "fully-qualified",
		emoji: "🤜🏿",
		tag: "E3.0",
		description: "right-facing fist: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128079
		],
		status: "fully-qualified",
		emoji: "👏",
		tag: "E0.6",
		description: "clapping hands"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128079,
			127995
		],
		status: "fully-qualified",
		emoji: "👏🏻",
		tag: "E1.0",
		description: "clapping hands: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128079,
			127996
		],
		status: "fully-qualified",
		emoji: "👏🏼",
		tag: "E1.0",
		description: "clapping hands: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128079,
			127997
		],
		status: "fully-qualified",
		emoji: "👏🏽",
		tag: "E1.0",
		description: "clapping hands: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128079,
			127998
		],
		status: "fully-qualified",
		emoji: "👏🏾",
		tag: "E1.0",
		description: "clapping hands: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128079,
			127999
		],
		status: "fully-qualified",
		emoji: "👏🏿",
		tag: "E1.0",
		description: "clapping hands: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128588
		],
		status: "fully-qualified",
		emoji: "🙌",
		tag: "E0.6",
		description: "raising hands"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128588,
			127995
		],
		status: "fully-qualified",
		emoji: "🙌🏻",
		tag: "E1.0",
		description: "raising hands: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128588,
			127996
		],
		status: "fully-qualified",
		emoji: "🙌🏼",
		tag: "E1.0",
		description: "raising hands: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128588,
			127997
		],
		status: "fully-qualified",
		emoji: "🙌🏽",
		tag: "E1.0",
		description: "raising hands: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128588,
			127998
		],
		status: "fully-qualified",
		emoji: "🙌🏾",
		tag: "E1.0",
		description: "raising hands: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128588,
			127999
		],
		status: "fully-qualified",
		emoji: "🙌🏿",
		tag: "E1.0",
		description: "raising hands: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128080
		],
		status: "fully-qualified",
		emoji: "👐",
		tag: "E0.6",
		description: "open hands"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128080,
			127995
		],
		status: "fully-qualified",
		emoji: "👐🏻",
		tag: "E1.0",
		description: "open hands: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128080,
			127996
		],
		status: "fully-qualified",
		emoji: "👐🏼",
		tag: "E1.0",
		description: "open hands: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128080,
			127997
		],
		status: "fully-qualified",
		emoji: "👐🏽",
		tag: "E1.0",
		description: "open hands: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128080,
			127998
		],
		status: "fully-qualified",
		emoji: "👐🏾",
		tag: "E1.0",
		description: "open hands: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128080,
			127999
		],
		status: "fully-qualified",
		emoji: "👐🏿",
		tag: "E1.0",
		description: "open hands: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			129330
		],
		status: "fully-qualified",
		emoji: "🤲",
		tag: "E5.0",
		description: "palms up together"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			129330,
			127995
		],
		status: "fully-qualified",
		emoji: "🤲🏻",
		tag: "E5.0",
		description: "palms up together: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			129330,
			127996
		],
		status: "fully-qualified",
		emoji: "🤲🏼",
		tag: "E5.0",
		description: "palms up together: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			129330,
			127997
		],
		status: "fully-qualified",
		emoji: "🤲🏽",
		tag: "E5.0",
		description: "palms up together: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			129330,
			127998
		],
		status: "fully-qualified",
		emoji: "🤲🏾",
		tag: "E5.0",
		description: "palms up together: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			129330,
			127999
		],
		status: "fully-qualified",
		emoji: "🤲🏿",
		tag: "E5.0",
		description: "palms up together: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			129309
		],
		status: "fully-qualified",
		emoji: "🤝",
		tag: "E3.0",
		description: "handshake"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128591
		],
		status: "fully-qualified",
		emoji: "🙏",
		tag: "E0.6",
		description: "folded hands"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128591,
			127995
		],
		status: "fully-qualified",
		emoji: "🙏🏻",
		tag: "E1.0",
		description: "folded hands: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128591,
			127996
		],
		status: "fully-qualified",
		emoji: "🙏🏼",
		tag: "E1.0",
		description: "folded hands: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128591,
			127997
		],
		status: "fully-qualified",
		emoji: "🙏🏽",
		tag: "E1.0",
		description: "folded hands: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128591,
			127998
		],
		status: "fully-qualified",
		emoji: "🙏🏾",
		tag: "E1.0",
		description: "folded hands: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hands",
		codePoints: [
			128591,
			127999
		],
		status: "fully-qualified",
		emoji: "🙏🏿",
		tag: "E1.0",
		description: "folded hands: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-prop",
		codePoints: [
			9997,
			65039
		],
		status: "fully-qualified",
		emoji: "✍️",
		tag: "E0.7",
		description: "writing hand"
	},
	{
		group: "People & Body",
		subgroup: "hand-prop",
		codePoints: [
			9997
		],
		status: "unqualified",
		emoji: "✍",
		tag: "E0.7",
		description: "writing hand"
	},
	{
		group: "People & Body",
		subgroup: "hand-prop",
		codePoints: [
			9997,
			127995
		],
		status: "fully-qualified",
		emoji: "✍🏻",
		tag: "E1.0",
		description: "writing hand: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-prop",
		codePoints: [
			9997,
			127996
		],
		status: "fully-qualified",
		emoji: "✍🏼",
		tag: "E1.0",
		description: "writing hand: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-prop",
		codePoints: [
			9997,
			127997
		],
		status: "fully-qualified",
		emoji: "✍🏽",
		tag: "E1.0",
		description: "writing hand: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-prop",
		codePoints: [
			9997,
			127998
		],
		status: "fully-qualified",
		emoji: "✍🏾",
		tag: "E1.0",
		description: "writing hand: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-prop",
		codePoints: [
			9997,
			127999
		],
		status: "fully-qualified",
		emoji: "✍🏿",
		tag: "E1.0",
		description: "writing hand: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-prop",
		codePoints: [
			128133
		],
		status: "fully-qualified",
		emoji: "💅",
		tag: "E0.6",
		description: "nail polish"
	},
	{
		group: "People & Body",
		subgroup: "hand-prop",
		codePoints: [
			128133,
			127995
		],
		status: "fully-qualified",
		emoji: "💅🏻",
		tag: "E1.0",
		description: "nail polish: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-prop",
		codePoints: [
			128133,
			127996
		],
		status: "fully-qualified",
		emoji: "💅🏼",
		tag: "E1.0",
		description: "nail polish: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-prop",
		codePoints: [
			128133,
			127997
		],
		status: "fully-qualified",
		emoji: "💅🏽",
		tag: "E1.0",
		description: "nail polish: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-prop",
		codePoints: [
			128133,
			127998
		],
		status: "fully-qualified",
		emoji: "💅🏾",
		tag: "E1.0",
		description: "nail polish: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-prop",
		codePoints: [
			128133,
			127999
		],
		status: "fully-qualified",
		emoji: "💅🏿",
		tag: "E1.0",
		description: "nail polish: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-prop",
		codePoints: [
			129331
		],
		status: "fully-qualified",
		emoji: "🤳",
		tag: "E3.0",
		description: "selfie"
	},
	{
		group: "People & Body",
		subgroup: "hand-prop",
		codePoints: [
			129331,
			127995
		],
		status: "fully-qualified",
		emoji: "🤳🏻",
		tag: "E3.0",
		description: "selfie: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-prop",
		codePoints: [
			129331,
			127996
		],
		status: "fully-qualified",
		emoji: "🤳🏼",
		tag: "E3.0",
		description: "selfie: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-prop",
		codePoints: [
			129331,
			127997
		],
		status: "fully-qualified",
		emoji: "🤳🏽",
		tag: "E3.0",
		description: "selfie: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-prop",
		codePoints: [
			129331,
			127998
		],
		status: "fully-qualified",
		emoji: "🤳🏾",
		tag: "E3.0",
		description: "selfie: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "hand-prop",
		codePoints: [
			129331,
			127999
		],
		status: "fully-qualified",
		emoji: "🤳🏿",
		tag: "E3.0",
		description: "selfie: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128170
		],
		status: "fully-qualified",
		emoji: "💪",
		tag: "E0.6",
		description: "flexed biceps"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128170,
			127995
		],
		status: "fully-qualified",
		emoji: "💪🏻",
		tag: "E1.0",
		description: "flexed biceps: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128170,
			127996
		],
		status: "fully-qualified",
		emoji: "💪🏼",
		tag: "E1.0",
		description: "flexed biceps: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128170,
			127997
		],
		status: "fully-qualified",
		emoji: "💪🏽",
		tag: "E1.0",
		description: "flexed biceps: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128170,
			127998
		],
		status: "fully-qualified",
		emoji: "💪🏾",
		tag: "E1.0",
		description: "flexed biceps: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128170,
			127999
		],
		status: "fully-qualified",
		emoji: "💪🏿",
		tag: "E1.0",
		description: "flexed biceps: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129470
		],
		status: "fully-qualified",
		emoji: "🦾",
		tag: "E12.0",
		description: "mechanical arm"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129471
		],
		status: "fully-qualified",
		emoji: "🦿",
		tag: "E12.0",
		description: "mechanical leg"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129461
		],
		status: "fully-qualified",
		emoji: "🦵",
		tag: "E11.0",
		description: "leg"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129461,
			127995
		],
		status: "fully-qualified",
		emoji: "🦵🏻",
		tag: "E11.0",
		description: "leg: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129461,
			127996
		],
		status: "fully-qualified",
		emoji: "🦵🏼",
		tag: "E11.0",
		description: "leg: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129461,
			127997
		],
		status: "fully-qualified",
		emoji: "🦵🏽",
		tag: "E11.0",
		description: "leg: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129461,
			127998
		],
		status: "fully-qualified",
		emoji: "🦵🏾",
		tag: "E11.0",
		description: "leg: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129461,
			127999
		],
		status: "fully-qualified",
		emoji: "🦵🏿",
		tag: "E11.0",
		description: "leg: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129462
		],
		status: "fully-qualified",
		emoji: "🦶",
		tag: "E11.0",
		description: "foot"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129462,
			127995
		],
		status: "fully-qualified",
		emoji: "🦶🏻",
		tag: "E11.0",
		description: "foot: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129462,
			127996
		],
		status: "fully-qualified",
		emoji: "🦶🏼",
		tag: "E11.0",
		description: "foot: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129462,
			127997
		],
		status: "fully-qualified",
		emoji: "🦶🏽",
		tag: "E11.0",
		description: "foot: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129462,
			127998
		],
		status: "fully-qualified",
		emoji: "🦶🏾",
		tag: "E11.0",
		description: "foot: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129462,
			127999
		],
		status: "fully-qualified",
		emoji: "🦶🏿",
		tag: "E11.0",
		description: "foot: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128066
		],
		status: "fully-qualified",
		emoji: "👂",
		tag: "E0.6",
		description: "ear"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128066,
			127995
		],
		status: "fully-qualified",
		emoji: "👂🏻",
		tag: "E1.0",
		description: "ear: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128066,
			127996
		],
		status: "fully-qualified",
		emoji: "👂🏼",
		tag: "E1.0",
		description: "ear: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128066,
			127997
		],
		status: "fully-qualified",
		emoji: "👂🏽",
		tag: "E1.0",
		description: "ear: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128066,
			127998
		],
		status: "fully-qualified",
		emoji: "👂🏾",
		tag: "E1.0",
		description: "ear: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128066,
			127999
		],
		status: "fully-qualified",
		emoji: "👂🏿",
		tag: "E1.0",
		description: "ear: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129467
		],
		status: "fully-qualified",
		emoji: "🦻",
		tag: "E12.0",
		description: "ear with hearing aid"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129467,
			127995
		],
		status: "fully-qualified",
		emoji: "🦻🏻",
		tag: "E12.0",
		description: "ear with hearing aid: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129467,
			127996
		],
		status: "fully-qualified",
		emoji: "🦻🏼",
		tag: "E12.0",
		description: "ear with hearing aid: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129467,
			127997
		],
		status: "fully-qualified",
		emoji: "🦻🏽",
		tag: "E12.0",
		description: "ear with hearing aid: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129467,
			127998
		],
		status: "fully-qualified",
		emoji: "🦻🏾",
		tag: "E12.0",
		description: "ear with hearing aid: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129467,
			127999
		],
		status: "fully-qualified",
		emoji: "🦻🏿",
		tag: "E12.0",
		description: "ear with hearing aid: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128067
		],
		status: "fully-qualified",
		emoji: "👃",
		tag: "E0.6",
		description: "nose"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128067,
			127995
		],
		status: "fully-qualified",
		emoji: "👃🏻",
		tag: "E1.0",
		description: "nose: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128067,
			127996
		],
		status: "fully-qualified",
		emoji: "👃🏼",
		tag: "E1.0",
		description: "nose: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128067,
			127997
		],
		status: "fully-qualified",
		emoji: "👃🏽",
		tag: "E1.0",
		description: "nose: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128067,
			127998
		],
		status: "fully-qualified",
		emoji: "👃🏾",
		tag: "E1.0",
		description: "nose: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128067,
			127999
		],
		status: "fully-qualified",
		emoji: "👃🏿",
		tag: "E1.0",
		description: "nose: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129504
		],
		status: "fully-qualified",
		emoji: "🧠",
		tag: "E5.0",
		description: "brain"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129728
		],
		status: "fully-qualified",
		emoji: "🫀",
		tag: "E13.0",
		description: "anatomical heart"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129729
		],
		status: "fully-qualified",
		emoji: "🫁",
		tag: "E13.0",
		description: "lungs"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129463
		],
		status: "fully-qualified",
		emoji: "🦷",
		tag: "E11.0",
		description: "tooth"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			129460
		],
		status: "fully-qualified",
		emoji: "🦴",
		tag: "E11.0",
		description: "bone"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128064
		],
		status: "fully-qualified",
		emoji: "👀",
		tag: "E0.6",
		description: "eyes"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128065,
			65039
		],
		status: "fully-qualified",
		emoji: "👁️",
		tag: "E0.7",
		description: "eye"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128065
		],
		status: "unqualified",
		emoji: "👁",
		tag: "E0.7",
		description: "eye"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128069
		],
		status: "fully-qualified",
		emoji: "👅",
		tag: "E0.6",
		description: "tongue"
	},
	{
		group: "People & Body",
		subgroup: "body-parts",
		codePoints: [
			128068
		],
		status: "fully-qualified",
		emoji: "👄",
		tag: "E0.6",
		description: "mouth"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128118
		],
		status: "fully-qualified",
		emoji: "👶",
		tag: "E0.6",
		description: "baby"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128118,
			127995
		],
		status: "fully-qualified",
		emoji: "👶🏻",
		tag: "E1.0",
		description: "baby: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128118,
			127996
		],
		status: "fully-qualified",
		emoji: "👶🏼",
		tag: "E1.0",
		description: "baby: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128118,
			127997
		],
		status: "fully-qualified",
		emoji: "👶🏽",
		tag: "E1.0",
		description: "baby: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128118,
			127998
		],
		status: "fully-qualified",
		emoji: "👶🏾",
		tag: "E1.0",
		description: "baby: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128118,
			127999
		],
		status: "fully-qualified",
		emoji: "👶🏿",
		tag: "E1.0",
		description: "baby: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129490
		],
		status: "fully-qualified",
		emoji: "🧒",
		tag: "E5.0",
		description: "child"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129490,
			127995
		],
		status: "fully-qualified",
		emoji: "🧒🏻",
		tag: "E5.0",
		description: "child: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129490,
			127996
		],
		status: "fully-qualified",
		emoji: "🧒🏼",
		tag: "E5.0",
		description: "child: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129490,
			127997
		],
		status: "fully-qualified",
		emoji: "🧒🏽",
		tag: "E5.0",
		description: "child: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129490,
			127998
		],
		status: "fully-qualified",
		emoji: "🧒🏾",
		tag: "E5.0",
		description: "child: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129490,
			127999
		],
		status: "fully-qualified",
		emoji: "🧒🏿",
		tag: "E5.0",
		description: "child: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128102
		],
		status: "fully-qualified",
		emoji: "👦",
		tag: "E0.6",
		description: "boy"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128102,
			127995
		],
		status: "fully-qualified",
		emoji: "👦🏻",
		tag: "E1.0",
		description: "boy: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128102,
			127996
		],
		status: "fully-qualified",
		emoji: "👦🏼",
		tag: "E1.0",
		description: "boy: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128102,
			127997
		],
		status: "fully-qualified",
		emoji: "👦🏽",
		tag: "E1.0",
		description: "boy: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128102,
			127998
		],
		status: "fully-qualified",
		emoji: "👦🏾",
		tag: "E1.0",
		description: "boy: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128102,
			127999
		],
		status: "fully-qualified",
		emoji: "👦🏿",
		tag: "E1.0",
		description: "boy: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128103
		],
		status: "fully-qualified",
		emoji: "👧",
		tag: "E0.6",
		description: "girl"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128103,
			127995
		],
		status: "fully-qualified",
		emoji: "👧🏻",
		tag: "E1.0",
		description: "girl: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128103,
			127996
		],
		status: "fully-qualified",
		emoji: "👧🏼",
		tag: "E1.0",
		description: "girl: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128103,
			127997
		],
		status: "fully-qualified",
		emoji: "👧🏽",
		tag: "E1.0",
		description: "girl: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128103,
			127998
		],
		status: "fully-qualified",
		emoji: "👧🏾",
		tag: "E1.0",
		description: "girl: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128103,
			127999
		],
		status: "fully-qualified",
		emoji: "👧🏿",
		tag: "E1.0",
		description: "girl: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489
		],
		status: "fully-qualified",
		emoji: "🧑",
		tag: "E5.0",
		description: "person"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127995
		],
		status: "fully-qualified",
		emoji: "🧑🏻",
		tag: "E5.0",
		description: "person: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127996
		],
		status: "fully-qualified",
		emoji: "🧑🏼",
		tag: "E5.0",
		description: "person: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127997
		],
		status: "fully-qualified",
		emoji: "🧑🏽",
		tag: "E5.0",
		description: "person: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127998
		],
		status: "fully-qualified",
		emoji: "🧑🏾",
		tag: "E5.0",
		description: "person: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127999
		],
		status: "fully-qualified",
		emoji: "🧑🏿",
		tag: "E5.0",
		description: "person: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113
		],
		status: "fully-qualified",
		emoji: "👱",
		tag: "E0.6",
		description: "person: blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127995
		],
		status: "fully-qualified",
		emoji: "👱🏻",
		tag: "E1.0",
		description: "person: light skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127996
		],
		status: "fully-qualified",
		emoji: "👱🏼",
		tag: "E1.0",
		description: "person: medium-light skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127997
		],
		status: "fully-qualified",
		emoji: "👱🏽",
		tag: "E1.0",
		description: "person: medium skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127998
		],
		status: "fully-qualified",
		emoji: "👱🏾",
		tag: "E1.0",
		description: "person: medium-dark skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127999
		],
		status: "fully-qualified",
		emoji: "👱🏿",
		tag: "E1.0",
		description: "person: dark skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104
		],
		status: "fully-qualified",
		emoji: "👨",
		tag: "E0.6",
		description: "man"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127995
		],
		status: "fully-qualified",
		emoji: "👨🏻",
		tag: "E1.0",
		description: "man: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127996
		],
		status: "fully-qualified",
		emoji: "👨🏼",
		tag: "E1.0",
		description: "man: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127997
		],
		status: "fully-qualified",
		emoji: "👨🏽",
		tag: "E1.0",
		description: "man: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127998
		],
		status: "fully-qualified",
		emoji: "👨🏾",
		tag: "E1.0",
		description: "man: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127999
		],
		status: "fully-qualified",
		emoji: "👨🏿",
		tag: "E1.0",
		description: "man: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129492
		],
		status: "fully-qualified",
		emoji: "🧔",
		tag: "E5.0",
		description: "man: beard"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129492,
			127995
		],
		status: "fully-qualified",
		emoji: "🧔🏻",
		tag: "E5.0",
		description: "man: light skin tone, beard"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129492,
			127996
		],
		status: "fully-qualified",
		emoji: "🧔🏼",
		tag: "E5.0",
		description: "man: medium-light skin tone, beard"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129492,
			127997
		],
		status: "fully-qualified",
		emoji: "🧔🏽",
		tag: "E5.0",
		description: "man: medium skin tone, beard"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129492,
			127998
		],
		status: "fully-qualified",
		emoji: "🧔🏾",
		tag: "E5.0",
		description: "man: medium-dark skin tone, beard"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129492,
			127999
		],
		status: "fully-qualified",
		emoji: "🧔🏿",
		tag: "E5.0",
		description: "man: dark skin tone, beard"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			8205,
			129456
		],
		status: "fully-qualified",
		emoji: "👨‍🦰",
		tag: "E11.0",
		description: "man: red hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127995,
			8205,
			129456
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🦰",
		tag: "E11.0",
		description: "man: light skin tone, red hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127996,
			8205,
			129456
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🦰",
		tag: "E11.0",
		description: "man: medium-light skin tone, red hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127997,
			8205,
			129456
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🦰",
		tag: "E11.0",
		description: "man: medium skin tone, red hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127998,
			8205,
			129456
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🦰",
		tag: "E11.0",
		description: "man: medium-dark skin tone, red hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127999,
			8205,
			129456
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🦰",
		tag: "E11.0",
		description: "man: dark skin tone, red hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			8205,
			129457
		],
		status: "fully-qualified",
		emoji: "👨‍🦱",
		tag: "E11.0",
		description: "man: curly hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127995,
			8205,
			129457
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🦱",
		tag: "E11.0",
		description: "man: light skin tone, curly hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127996,
			8205,
			129457
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🦱",
		tag: "E11.0",
		description: "man: medium-light skin tone, curly hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127997,
			8205,
			129457
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🦱",
		tag: "E11.0",
		description: "man: medium skin tone, curly hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127998,
			8205,
			129457
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🦱",
		tag: "E11.0",
		description: "man: medium-dark skin tone, curly hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127999,
			8205,
			129457
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🦱",
		tag: "E11.0",
		description: "man: dark skin tone, curly hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			8205,
			129459
		],
		status: "fully-qualified",
		emoji: "👨‍🦳",
		tag: "E11.0",
		description: "man: white hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127995,
			8205,
			129459
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🦳",
		tag: "E11.0",
		description: "man: light skin tone, white hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127996,
			8205,
			129459
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🦳",
		tag: "E11.0",
		description: "man: medium-light skin tone, white hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127997,
			8205,
			129459
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🦳",
		tag: "E11.0",
		description: "man: medium skin tone, white hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127998,
			8205,
			129459
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🦳",
		tag: "E11.0",
		description: "man: medium-dark skin tone, white hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127999,
			8205,
			129459
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🦳",
		tag: "E11.0",
		description: "man: dark skin tone, white hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			8205,
			129458
		],
		status: "fully-qualified",
		emoji: "👨‍🦲",
		tag: "E11.0",
		description: "man: bald"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127995,
			8205,
			129458
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🦲",
		tag: "E11.0",
		description: "man: light skin tone, bald"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127996,
			8205,
			129458
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🦲",
		tag: "E11.0",
		description: "man: medium-light skin tone, bald"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127997,
			8205,
			129458
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🦲",
		tag: "E11.0",
		description: "man: medium skin tone, bald"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127998,
			8205,
			129458
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🦲",
		tag: "E11.0",
		description: "man: medium-dark skin tone, bald"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128104,
			127999,
			8205,
			129458
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🦲",
		tag: "E11.0",
		description: "man: dark skin tone, bald"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105
		],
		status: "fully-qualified",
		emoji: "👩",
		tag: "E0.6",
		description: "woman"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127995
		],
		status: "fully-qualified",
		emoji: "👩🏻",
		tag: "E1.0",
		description: "woman: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127996
		],
		status: "fully-qualified",
		emoji: "👩🏼",
		tag: "E1.0",
		description: "woman: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127997
		],
		status: "fully-qualified",
		emoji: "👩🏽",
		tag: "E1.0",
		description: "woman: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127998
		],
		status: "fully-qualified",
		emoji: "👩🏾",
		tag: "E1.0",
		description: "woman: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127999
		],
		status: "fully-qualified",
		emoji: "👩🏿",
		tag: "E1.0",
		description: "woman: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			8205,
			129456
		],
		status: "fully-qualified",
		emoji: "👩‍🦰",
		tag: "E11.0",
		description: "woman: red hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127995,
			8205,
			129456
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🦰",
		tag: "E11.0",
		description: "woman: light skin tone, red hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127996,
			8205,
			129456
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🦰",
		tag: "E11.0",
		description: "woman: medium-light skin tone, red hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127997,
			8205,
			129456
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🦰",
		tag: "E11.0",
		description: "woman: medium skin tone, red hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127998,
			8205,
			129456
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🦰",
		tag: "E11.0",
		description: "woman: medium-dark skin tone, red hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127999,
			8205,
			129456
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🦰",
		tag: "E11.0",
		description: "woman: dark skin tone, red hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			8205,
			129456
		],
		status: "fully-qualified",
		emoji: "🧑‍🦰",
		tag: "E12.1",
		description: "person: red hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127995,
			8205,
			129456
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🦰",
		tag: "E12.1",
		description: "person: light skin tone, red hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127996,
			8205,
			129456
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🦰",
		tag: "E12.1",
		description: "person: medium-light skin tone, red hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127997,
			8205,
			129456
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🦰",
		tag: "E12.1",
		description: "person: medium skin tone, red hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127998,
			8205,
			129456
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🦰",
		tag: "E12.1",
		description: "person: medium-dark skin tone, red hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127999,
			8205,
			129456
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🦰",
		tag: "E12.1",
		description: "person: dark skin tone, red hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			8205,
			129457
		],
		status: "fully-qualified",
		emoji: "👩‍🦱",
		tag: "E11.0",
		description: "woman: curly hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127995,
			8205,
			129457
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🦱",
		tag: "E11.0",
		description: "woman: light skin tone, curly hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127996,
			8205,
			129457
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🦱",
		tag: "E11.0",
		description: "woman: medium-light skin tone, curly hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127997,
			8205,
			129457
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🦱",
		tag: "E11.0",
		description: "woman: medium skin tone, curly hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127998,
			8205,
			129457
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🦱",
		tag: "E11.0",
		description: "woman: medium-dark skin tone, curly hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127999,
			8205,
			129457
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🦱",
		tag: "E11.0",
		description: "woman: dark skin tone, curly hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			8205,
			129457
		],
		status: "fully-qualified",
		emoji: "🧑‍🦱",
		tag: "E12.1",
		description: "person: curly hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127995,
			8205,
			129457
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🦱",
		tag: "E12.1",
		description: "person: light skin tone, curly hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127996,
			8205,
			129457
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🦱",
		tag: "E12.1",
		description: "person: medium-light skin tone, curly hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127997,
			8205,
			129457
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🦱",
		tag: "E12.1",
		description: "person: medium skin tone, curly hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127998,
			8205,
			129457
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🦱",
		tag: "E12.1",
		description: "person: medium-dark skin tone, curly hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127999,
			8205,
			129457
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🦱",
		tag: "E12.1",
		description: "person: dark skin tone, curly hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			8205,
			129459
		],
		status: "fully-qualified",
		emoji: "👩‍🦳",
		tag: "E11.0",
		description: "woman: white hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127995,
			8205,
			129459
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🦳",
		tag: "E11.0",
		description: "woman: light skin tone, white hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127996,
			8205,
			129459
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🦳",
		tag: "E11.0",
		description: "woman: medium-light skin tone, white hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127997,
			8205,
			129459
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🦳",
		tag: "E11.0",
		description: "woman: medium skin tone, white hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127998,
			8205,
			129459
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🦳",
		tag: "E11.0",
		description: "woman: medium-dark skin tone, white hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127999,
			8205,
			129459
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🦳",
		tag: "E11.0",
		description: "woman: dark skin tone, white hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			8205,
			129459
		],
		status: "fully-qualified",
		emoji: "🧑‍🦳",
		tag: "E12.1",
		description: "person: white hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127995,
			8205,
			129459
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🦳",
		tag: "E12.1",
		description: "person: light skin tone, white hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127996,
			8205,
			129459
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🦳",
		tag: "E12.1",
		description: "person: medium-light skin tone, white hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127997,
			8205,
			129459
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🦳",
		tag: "E12.1",
		description: "person: medium skin tone, white hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127998,
			8205,
			129459
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🦳",
		tag: "E12.1",
		description: "person: medium-dark skin tone, white hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127999,
			8205,
			129459
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🦳",
		tag: "E12.1",
		description: "person: dark skin tone, white hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			8205,
			129458
		],
		status: "fully-qualified",
		emoji: "👩‍🦲",
		tag: "E11.0",
		description: "woman: bald"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127995,
			8205,
			129458
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🦲",
		tag: "E11.0",
		description: "woman: light skin tone, bald"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127996,
			8205,
			129458
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🦲",
		tag: "E11.0",
		description: "woman: medium-light skin tone, bald"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127997,
			8205,
			129458
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🦲",
		tag: "E11.0",
		description: "woman: medium skin tone, bald"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127998,
			8205,
			129458
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🦲",
		tag: "E11.0",
		description: "woman: medium-dark skin tone, bald"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128105,
			127999,
			8205,
			129458
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🦲",
		tag: "E11.0",
		description: "woman: dark skin tone, bald"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			8205,
			129458
		],
		status: "fully-qualified",
		emoji: "🧑‍🦲",
		tag: "E12.1",
		description: "person: bald"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127995,
			8205,
			129458
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🦲",
		tag: "E12.1",
		description: "person: light skin tone, bald"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127996,
			8205,
			129458
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🦲",
		tag: "E12.1",
		description: "person: medium-light skin tone, bald"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127997,
			8205,
			129458
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🦲",
		tag: "E12.1",
		description: "person: medium skin tone, bald"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127998,
			8205,
			129458
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🦲",
		tag: "E12.1",
		description: "person: medium-dark skin tone, bald"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129489,
			127999,
			8205,
			129458
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🦲",
		tag: "E12.1",
		description: "person: dark skin tone, bald"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👱‍♀️",
		tag: "E4.0",
		description: "woman: blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👱‍♀",
		tag: "E4.0",
		description: "woman: blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👱🏻‍♀️",
		tag: "E4.0",
		description: "woman: light skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👱🏻‍♀",
		tag: "E4.0",
		description: "woman: light skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👱🏼‍♀️",
		tag: "E4.0",
		description: "woman: medium-light skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👱🏼‍♀",
		tag: "E4.0",
		description: "woman: medium-light skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👱🏽‍♀️",
		tag: "E4.0",
		description: "woman: medium skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👱🏽‍♀",
		tag: "E4.0",
		description: "woman: medium skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👱🏾‍♀️",
		tag: "E4.0",
		description: "woman: medium-dark skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👱🏾‍♀",
		tag: "E4.0",
		description: "woman: medium-dark skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👱🏿‍♀️",
		tag: "E4.0",
		description: "woman: dark skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👱🏿‍♀",
		tag: "E4.0",
		description: "woman: dark skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👱‍♂️",
		tag: "E4.0",
		description: "man: blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👱‍♂",
		tag: "E4.0",
		description: "man: blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👱🏻‍♂️",
		tag: "E4.0",
		description: "man: light skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👱🏻‍♂",
		tag: "E4.0",
		description: "man: light skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👱🏼‍♂️",
		tag: "E4.0",
		description: "man: medium-light skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👱🏼‍♂",
		tag: "E4.0",
		description: "man: medium-light skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👱🏽‍♂️",
		tag: "E4.0",
		description: "man: medium skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👱🏽‍♂",
		tag: "E4.0",
		description: "man: medium skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👱🏾‍♂️",
		tag: "E4.0",
		description: "man: medium-dark skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👱🏾‍♂",
		tag: "E4.0",
		description: "man: medium-dark skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👱🏿‍♂️",
		tag: "E4.0",
		description: "man: dark skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128113,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👱🏿‍♂",
		tag: "E4.0",
		description: "man: dark skin tone, blond hair"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129491
		],
		status: "fully-qualified",
		emoji: "🧓",
		tag: "E5.0",
		description: "older person"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129491,
			127995
		],
		status: "fully-qualified",
		emoji: "🧓🏻",
		tag: "E5.0",
		description: "older person: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129491,
			127996
		],
		status: "fully-qualified",
		emoji: "🧓🏼",
		tag: "E5.0",
		description: "older person: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129491,
			127997
		],
		status: "fully-qualified",
		emoji: "🧓🏽",
		tag: "E5.0",
		description: "older person: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129491,
			127998
		],
		status: "fully-qualified",
		emoji: "🧓🏾",
		tag: "E5.0",
		description: "older person: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			129491,
			127999
		],
		status: "fully-qualified",
		emoji: "🧓🏿",
		tag: "E5.0",
		description: "older person: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128116
		],
		status: "fully-qualified",
		emoji: "👴",
		tag: "E0.6",
		description: "old man"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128116,
			127995
		],
		status: "fully-qualified",
		emoji: "👴🏻",
		tag: "E1.0",
		description: "old man: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128116,
			127996
		],
		status: "fully-qualified",
		emoji: "👴🏼",
		tag: "E1.0",
		description: "old man: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128116,
			127997
		],
		status: "fully-qualified",
		emoji: "👴🏽",
		tag: "E1.0",
		description: "old man: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128116,
			127998
		],
		status: "fully-qualified",
		emoji: "👴🏾",
		tag: "E1.0",
		description: "old man: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128116,
			127999
		],
		status: "fully-qualified",
		emoji: "👴🏿",
		tag: "E1.0",
		description: "old man: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128117
		],
		status: "fully-qualified",
		emoji: "👵",
		tag: "E0.6",
		description: "old woman"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128117,
			127995
		],
		status: "fully-qualified",
		emoji: "👵🏻",
		tag: "E1.0",
		description: "old woman: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128117,
			127996
		],
		status: "fully-qualified",
		emoji: "👵🏼",
		tag: "E1.0",
		description: "old woman: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128117,
			127997
		],
		status: "fully-qualified",
		emoji: "👵🏽",
		tag: "E1.0",
		description: "old woman: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128117,
			127998
		],
		status: "fully-qualified",
		emoji: "👵🏾",
		tag: "E1.0",
		description: "old woman: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person",
		codePoints: [
			128117,
			127999
		],
		status: "fully-qualified",
		emoji: "👵🏿",
		tag: "E1.0",
		description: "old woman: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589
		],
		status: "fully-qualified",
		emoji: "🙍",
		tag: "E0.6",
		description: "person frowning"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127995
		],
		status: "fully-qualified",
		emoji: "🙍🏻",
		tag: "E1.0",
		description: "person frowning: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127996
		],
		status: "fully-qualified",
		emoji: "🙍🏼",
		tag: "E1.0",
		description: "person frowning: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127997
		],
		status: "fully-qualified",
		emoji: "🙍🏽",
		tag: "E1.0",
		description: "person frowning: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127998
		],
		status: "fully-qualified",
		emoji: "🙍🏾",
		tag: "E1.0",
		description: "person frowning: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127999
		],
		status: "fully-qualified",
		emoji: "🙍🏿",
		tag: "E1.0",
		description: "person frowning: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙍‍♂️",
		tag: "E4.0",
		description: "man frowning"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙍‍♂",
		tag: "E4.0",
		description: "man frowning"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙍🏻‍♂️",
		tag: "E4.0",
		description: "man frowning: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙍🏻‍♂",
		tag: "E4.0",
		description: "man frowning: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙍🏼‍♂️",
		tag: "E4.0",
		description: "man frowning: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙍🏼‍♂",
		tag: "E4.0",
		description: "man frowning: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙍🏽‍♂️",
		tag: "E4.0",
		description: "man frowning: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙍🏽‍♂",
		tag: "E4.0",
		description: "man frowning: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙍🏾‍♂️",
		tag: "E4.0",
		description: "man frowning: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙍🏾‍♂",
		tag: "E4.0",
		description: "man frowning: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙍🏿‍♂️",
		tag: "E4.0",
		description: "man frowning: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙍🏿‍♂",
		tag: "E4.0",
		description: "man frowning: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙍‍♀️",
		tag: "E4.0",
		description: "woman frowning"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙍‍♀",
		tag: "E4.0",
		description: "woman frowning"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙍🏻‍♀️",
		tag: "E4.0",
		description: "woman frowning: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙍🏻‍♀",
		tag: "E4.0",
		description: "woman frowning: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙍🏼‍♀️",
		tag: "E4.0",
		description: "woman frowning: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙍🏼‍♀",
		tag: "E4.0",
		description: "woman frowning: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙍🏽‍♀️",
		tag: "E4.0",
		description: "woman frowning: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙍🏽‍♀",
		tag: "E4.0",
		description: "woman frowning: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙍🏾‍♀️",
		tag: "E4.0",
		description: "woman frowning: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙍🏾‍♀",
		tag: "E4.0",
		description: "woman frowning: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙍🏿‍♀️",
		tag: "E4.0",
		description: "woman frowning: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128589,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙍🏿‍♀",
		tag: "E4.0",
		description: "woman frowning: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590
		],
		status: "fully-qualified",
		emoji: "🙎",
		tag: "E0.6",
		description: "person pouting"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127995
		],
		status: "fully-qualified",
		emoji: "🙎🏻",
		tag: "E1.0",
		description: "person pouting: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127996
		],
		status: "fully-qualified",
		emoji: "🙎🏼",
		tag: "E1.0",
		description: "person pouting: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127997
		],
		status: "fully-qualified",
		emoji: "🙎🏽",
		tag: "E1.0",
		description: "person pouting: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127998
		],
		status: "fully-qualified",
		emoji: "🙎🏾",
		tag: "E1.0",
		description: "person pouting: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127999
		],
		status: "fully-qualified",
		emoji: "🙎🏿",
		tag: "E1.0",
		description: "person pouting: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙎‍♂️",
		tag: "E4.0",
		description: "man pouting"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙎‍♂",
		tag: "E4.0",
		description: "man pouting"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙎🏻‍♂️",
		tag: "E4.0",
		description: "man pouting: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙎🏻‍♂",
		tag: "E4.0",
		description: "man pouting: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙎🏼‍♂️",
		tag: "E4.0",
		description: "man pouting: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙎🏼‍♂",
		tag: "E4.0",
		description: "man pouting: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙎🏽‍♂️",
		tag: "E4.0",
		description: "man pouting: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙎🏽‍♂",
		tag: "E4.0",
		description: "man pouting: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙎🏾‍♂️",
		tag: "E4.0",
		description: "man pouting: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙎🏾‍♂",
		tag: "E4.0",
		description: "man pouting: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙎🏿‍♂️",
		tag: "E4.0",
		description: "man pouting: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙎🏿‍♂",
		tag: "E4.0",
		description: "man pouting: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙎‍♀️",
		tag: "E4.0",
		description: "woman pouting"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙎‍♀",
		tag: "E4.0",
		description: "woman pouting"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙎🏻‍♀️",
		tag: "E4.0",
		description: "woman pouting: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙎🏻‍♀",
		tag: "E4.0",
		description: "woman pouting: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙎🏼‍♀️",
		tag: "E4.0",
		description: "woman pouting: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙎🏼‍♀",
		tag: "E4.0",
		description: "woman pouting: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙎🏽‍♀️",
		tag: "E4.0",
		description: "woman pouting: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙎🏽‍♀",
		tag: "E4.0",
		description: "woman pouting: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙎🏾‍♀️",
		tag: "E4.0",
		description: "woman pouting: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙎🏾‍♀",
		tag: "E4.0",
		description: "woman pouting: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙎🏿‍♀️",
		tag: "E4.0",
		description: "woman pouting: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128590,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙎🏿‍♀",
		tag: "E4.0",
		description: "woman pouting: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581
		],
		status: "fully-qualified",
		emoji: "🙅",
		tag: "E0.6",
		description: "person gesturing NO"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127995
		],
		status: "fully-qualified",
		emoji: "🙅🏻",
		tag: "E1.0",
		description: "person gesturing NO: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127996
		],
		status: "fully-qualified",
		emoji: "🙅🏼",
		tag: "E1.0",
		description: "person gesturing NO: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127997
		],
		status: "fully-qualified",
		emoji: "🙅🏽",
		tag: "E1.0",
		description: "person gesturing NO: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127998
		],
		status: "fully-qualified",
		emoji: "🙅🏾",
		tag: "E1.0",
		description: "person gesturing NO: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127999
		],
		status: "fully-qualified",
		emoji: "🙅🏿",
		tag: "E1.0",
		description: "person gesturing NO: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙅‍♂️",
		tag: "E4.0",
		description: "man gesturing NO"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙅‍♂",
		tag: "E4.0",
		description: "man gesturing NO"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙅🏻‍♂️",
		tag: "E4.0",
		description: "man gesturing NO: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙅🏻‍♂",
		tag: "E4.0",
		description: "man gesturing NO: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙅🏼‍♂️",
		tag: "E4.0",
		description: "man gesturing NO: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙅🏼‍♂",
		tag: "E4.0",
		description: "man gesturing NO: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙅🏽‍♂️",
		tag: "E4.0",
		description: "man gesturing NO: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙅🏽‍♂",
		tag: "E4.0",
		description: "man gesturing NO: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙅🏾‍♂️",
		tag: "E4.0",
		description: "man gesturing NO: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙅🏾‍♂",
		tag: "E4.0",
		description: "man gesturing NO: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙅🏿‍♂️",
		tag: "E4.0",
		description: "man gesturing NO: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙅🏿‍♂",
		tag: "E4.0",
		description: "man gesturing NO: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙅‍♀️",
		tag: "E4.0",
		description: "woman gesturing NO"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙅‍♀",
		tag: "E4.0",
		description: "woman gesturing NO"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙅🏻‍♀️",
		tag: "E4.0",
		description: "woman gesturing NO: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙅🏻‍♀",
		tag: "E4.0",
		description: "woman gesturing NO: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙅🏼‍♀️",
		tag: "E4.0",
		description: "woman gesturing NO: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙅🏼‍♀",
		tag: "E4.0",
		description: "woman gesturing NO: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙅🏽‍♀️",
		tag: "E4.0",
		description: "woman gesturing NO: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙅🏽‍♀",
		tag: "E4.0",
		description: "woman gesturing NO: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙅🏾‍♀️",
		tag: "E4.0",
		description: "woman gesturing NO: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙅🏾‍♀",
		tag: "E4.0",
		description: "woman gesturing NO: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙅🏿‍♀️",
		tag: "E4.0",
		description: "woman gesturing NO: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128581,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙅🏿‍♀",
		tag: "E4.0",
		description: "woman gesturing NO: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582
		],
		status: "fully-qualified",
		emoji: "🙆",
		tag: "E0.6",
		description: "person gesturing OK"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127995
		],
		status: "fully-qualified",
		emoji: "🙆🏻",
		tag: "E1.0",
		description: "person gesturing OK: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127996
		],
		status: "fully-qualified",
		emoji: "🙆🏼",
		tag: "E1.0",
		description: "person gesturing OK: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127997
		],
		status: "fully-qualified",
		emoji: "🙆🏽",
		tag: "E1.0",
		description: "person gesturing OK: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127998
		],
		status: "fully-qualified",
		emoji: "🙆🏾",
		tag: "E1.0",
		description: "person gesturing OK: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127999
		],
		status: "fully-qualified",
		emoji: "🙆🏿",
		tag: "E1.0",
		description: "person gesturing OK: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙆‍♂️",
		tag: "E4.0",
		description: "man gesturing OK"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙆‍♂",
		tag: "E4.0",
		description: "man gesturing OK"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙆🏻‍♂️",
		tag: "E4.0",
		description: "man gesturing OK: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙆🏻‍♂",
		tag: "E4.0",
		description: "man gesturing OK: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙆🏼‍♂️",
		tag: "E4.0",
		description: "man gesturing OK: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙆🏼‍♂",
		tag: "E4.0",
		description: "man gesturing OK: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙆🏽‍♂️",
		tag: "E4.0",
		description: "man gesturing OK: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙆🏽‍♂",
		tag: "E4.0",
		description: "man gesturing OK: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙆🏾‍♂️",
		tag: "E4.0",
		description: "man gesturing OK: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙆🏾‍♂",
		tag: "E4.0",
		description: "man gesturing OK: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙆🏿‍♂️",
		tag: "E4.0",
		description: "man gesturing OK: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙆🏿‍♂",
		tag: "E4.0",
		description: "man gesturing OK: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙆‍♀️",
		tag: "E4.0",
		description: "woman gesturing OK"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙆‍♀",
		tag: "E4.0",
		description: "woman gesturing OK"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙆🏻‍♀️",
		tag: "E4.0",
		description: "woman gesturing OK: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙆🏻‍♀",
		tag: "E4.0",
		description: "woman gesturing OK: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙆🏼‍♀️",
		tag: "E4.0",
		description: "woman gesturing OK: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙆🏼‍♀",
		tag: "E4.0",
		description: "woman gesturing OK: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙆🏽‍♀️",
		tag: "E4.0",
		description: "woman gesturing OK: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙆🏽‍♀",
		tag: "E4.0",
		description: "woman gesturing OK: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙆🏾‍♀️",
		tag: "E4.0",
		description: "woman gesturing OK: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙆🏾‍♀",
		tag: "E4.0",
		description: "woman gesturing OK: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙆🏿‍♀️",
		tag: "E4.0",
		description: "woman gesturing OK: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128582,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙆🏿‍♀",
		tag: "E4.0",
		description: "woman gesturing OK: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129
		],
		status: "fully-qualified",
		emoji: "💁",
		tag: "E0.6",
		description: "person tipping hand"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127995
		],
		status: "fully-qualified",
		emoji: "💁🏻",
		tag: "E1.0",
		description: "person tipping hand: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127996
		],
		status: "fully-qualified",
		emoji: "💁🏼",
		tag: "E1.0",
		description: "person tipping hand: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127997
		],
		status: "fully-qualified",
		emoji: "💁🏽",
		tag: "E1.0",
		description: "person tipping hand: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127998
		],
		status: "fully-qualified",
		emoji: "💁🏾",
		tag: "E1.0",
		description: "person tipping hand: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127999
		],
		status: "fully-qualified",
		emoji: "💁🏿",
		tag: "E1.0",
		description: "person tipping hand: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💁‍♂️",
		tag: "E4.0",
		description: "man tipping hand"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💁‍♂",
		tag: "E4.0",
		description: "man tipping hand"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💁🏻‍♂️",
		tag: "E4.0",
		description: "man tipping hand: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💁🏻‍♂",
		tag: "E4.0",
		description: "man tipping hand: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💁🏼‍♂️",
		tag: "E4.0",
		description: "man tipping hand: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💁🏼‍♂",
		tag: "E4.0",
		description: "man tipping hand: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💁🏽‍♂️",
		tag: "E4.0",
		description: "man tipping hand: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💁🏽‍♂",
		tag: "E4.0",
		description: "man tipping hand: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💁🏾‍♂️",
		tag: "E4.0",
		description: "man tipping hand: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💁🏾‍♂",
		tag: "E4.0",
		description: "man tipping hand: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💁🏿‍♂️",
		tag: "E4.0",
		description: "man tipping hand: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💁🏿‍♂",
		tag: "E4.0",
		description: "man tipping hand: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💁‍♀️",
		tag: "E4.0",
		description: "woman tipping hand"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💁‍♀",
		tag: "E4.0",
		description: "woman tipping hand"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💁🏻‍♀️",
		tag: "E4.0",
		description: "woman tipping hand: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💁🏻‍♀",
		tag: "E4.0",
		description: "woman tipping hand: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💁🏼‍♀️",
		tag: "E4.0",
		description: "woman tipping hand: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💁🏼‍♀",
		tag: "E4.0",
		description: "woman tipping hand: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💁🏽‍♀️",
		tag: "E4.0",
		description: "woman tipping hand: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💁🏽‍♀",
		tag: "E4.0",
		description: "woman tipping hand: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💁🏾‍♀️",
		tag: "E4.0",
		description: "woman tipping hand: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💁🏾‍♀",
		tag: "E4.0",
		description: "woman tipping hand: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💁🏿‍♀️",
		tag: "E4.0",
		description: "woman tipping hand: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128129,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💁🏿‍♀",
		tag: "E4.0",
		description: "woman tipping hand: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587
		],
		status: "fully-qualified",
		emoji: "🙋",
		tag: "E0.6",
		description: "person raising hand"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127995
		],
		status: "fully-qualified",
		emoji: "🙋🏻",
		tag: "E1.0",
		description: "person raising hand: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127996
		],
		status: "fully-qualified",
		emoji: "🙋🏼",
		tag: "E1.0",
		description: "person raising hand: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127997
		],
		status: "fully-qualified",
		emoji: "🙋🏽",
		tag: "E1.0",
		description: "person raising hand: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127998
		],
		status: "fully-qualified",
		emoji: "🙋🏾",
		tag: "E1.0",
		description: "person raising hand: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127999
		],
		status: "fully-qualified",
		emoji: "🙋🏿",
		tag: "E1.0",
		description: "person raising hand: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙋‍♂️",
		tag: "E4.0",
		description: "man raising hand"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙋‍♂",
		tag: "E4.0",
		description: "man raising hand"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙋🏻‍♂️",
		tag: "E4.0",
		description: "man raising hand: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙋🏻‍♂",
		tag: "E4.0",
		description: "man raising hand: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙋🏼‍♂️",
		tag: "E4.0",
		description: "man raising hand: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙋🏼‍♂",
		tag: "E4.0",
		description: "man raising hand: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙋🏽‍♂️",
		tag: "E4.0",
		description: "man raising hand: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙋🏽‍♂",
		tag: "E4.0",
		description: "man raising hand: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙋🏾‍♂️",
		tag: "E4.0",
		description: "man raising hand: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙋🏾‍♂",
		tag: "E4.0",
		description: "man raising hand: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙋🏿‍♂️",
		tag: "E4.0",
		description: "man raising hand: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙋🏿‍♂",
		tag: "E4.0",
		description: "man raising hand: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙋‍♀️",
		tag: "E4.0",
		description: "woman raising hand"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙋‍♀",
		tag: "E4.0",
		description: "woman raising hand"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙋🏻‍♀️",
		tag: "E4.0",
		description: "woman raising hand: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙋🏻‍♀",
		tag: "E4.0",
		description: "woman raising hand: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙋🏼‍♀️",
		tag: "E4.0",
		description: "woman raising hand: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙋🏼‍♀",
		tag: "E4.0",
		description: "woman raising hand: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙋🏽‍♀️",
		tag: "E4.0",
		description: "woman raising hand: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙋🏽‍♀",
		tag: "E4.0",
		description: "woman raising hand: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙋🏾‍♀️",
		tag: "E4.0",
		description: "woman raising hand: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙋🏾‍♀",
		tag: "E4.0",
		description: "woman raising hand: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙋🏿‍♀️",
		tag: "E4.0",
		description: "woman raising hand: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128587,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙋🏿‍♀",
		tag: "E4.0",
		description: "woman raising hand: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487
		],
		status: "fully-qualified",
		emoji: "🧏",
		tag: "E12.0",
		description: "deaf person"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127995
		],
		status: "fully-qualified",
		emoji: "🧏🏻",
		tag: "E12.0",
		description: "deaf person: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127996
		],
		status: "fully-qualified",
		emoji: "🧏🏼",
		tag: "E12.0",
		description: "deaf person: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127997
		],
		status: "fully-qualified",
		emoji: "🧏🏽",
		tag: "E12.0",
		description: "deaf person: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127998
		],
		status: "fully-qualified",
		emoji: "🧏🏾",
		tag: "E12.0",
		description: "deaf person: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127999
		],
		status: "fully-qualified",
		emoji: "🧏🏿",
		tag: "E12.0",
		description: "deaf person: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧏‍♂️",
		tag: "E12.0",
		description: "deaf man"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧏‍♂",
		tag: "E12.0",
		description: "deaf man"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧏🏻‍♂️",
		tag: "E12.0",
		description: "deaf man: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧏🏻‍♂",
		tag: "E12.0",
		description: "deaf man: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧏🏼‍♂️",
		tag: "E12.0",
		description: "deaf man: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧏🏼‍♂",
		tag: "E12.0",
		description: "deaf man: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧏🏽‍♂️",
		tag: "E12.0",
		description: "deaf man: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧏🏽‍♂",
		tag: "E12.0",
		description: "deaf man: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧏🏾‍♂️",
		tag: "E12.0",
		description: "deaf man: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧏🏾‍♂",
		tag: "E12.0",
		description: "deaf man: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧏🏿‍♂️",
		tag: "E12.0",
		description: "deaf man: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧏🏿‍♂",
		tag: "E12.0",
		description: "deaf man: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧏‍♀️",
		tag: "E12.0",
		description: "deaf woman"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧏‍♀",
		tag: "E12.0",
		description: "deaf woman"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧏🏻‍♀️",
		tag: "E12.0",
		description: "deaf woman: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧏🏻‍♀",
		tag: "E12.0",
		description: "deaf woman: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧏🏼‍♀️",
		tag: "E12.0",
		description: "deaf woman: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧏🏼‍♀",
		tag: "E12.0",
		description: "deaf woman: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧏🏽‍♀️",
		tag: "E12.0",
		description: "deaf woman: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧏🏽‍♀",
		tag: "E12.0",
		description: "deaf woman: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧏🏾‍♀️",
		tag: "E12.0",
		description: "deaf woman: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧏🏾‍♀",
		tag: "E12.0",
		description: "deaf woman: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧏🏿‍♀️",
		tag: "E12.0",
		description: "deaf woman: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129487,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧏🏿‍♀",
		tag: "E12.0",
		description: "deaf woman: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583
		],
		status: "fully-qualified",
		emoji: "🙇",
		tag: "E0.6",
		description: "person bowing"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127995
		],
		status: "fully-qualified",
		emoji: "🙇🏻",
		tag: "E1.0",
		description: "person bowing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127996
		],
		status: "fully-qualified",
		emoji: "🙇🏼",
		tag: "E1.0",
		description: "person bowing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127997
		],
		status: "fully-qualified",
		emoji: "🙇🏽",
		tag: "E1.0",
		description: "person bowing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127998
		],
		status: "fully-qualified",
		emoji: "🙇🏾",
		tag: "E1.0",
		description: "person bowing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127999
		],
		status: "fully-qualified",
		emoji: "🙇🏿",
		tag: "E1.0",
		description: "person bowing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙇‍♂️",
		tag: "E4.0",
		description: "man bowing"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙇‍♂",
		tag: "E4.0",
		description: "man bowing"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙇🏻‍♂️",
		tag: "E4.0",
		description: "man bowing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙇🏻‍♂",
		tag: "E4.0",
		description: "man bowing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙇🏼‍♂️",
		tag: "E4.0",
		description: "man bowing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙇🏼‍♂",
		tag: "E4.0",
		description: "man bowing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙇🏽‍♂️",
		tag: "E4.0",
		description: "man bowing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙇🏽‍♂",
		tag: "E4.0",
		description: "man bowing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙇🏾‍♂️",
		tag: "E4.0",
		description: "man bowing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙇🏾‍♂",
		tag: "E4.0",
		description: "man bowing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🙇🏿‍♂️",
		tag: "E4.0",
		description: "man bowing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🙇🏿‍♂",
		tag: "E4.0",
		description: "man bowing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙇‍♀️",
		tag: "E4.0",
		description: "woman bowing"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙇‍♀",
		tag: "E4.0",
		description: "woman bowing"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙇🏻‍♀️",
		tag: "E4.0",
		description: "woman bowing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙇🏻‍♀",
		tag: "E4.0",
		description: "woman bowing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙇🏼‍♀️",
		tag: "E4.0",
		description: "woman bowing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙇🏼‍♀",
		tag: "E4.0",
		description: "woman bowing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙇🏽‍♀️",
		tag: "E4.0",
		description: "woman bowing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙇🏽‍♀",
		tag: "E4.0",
		description: "woman bowing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙇🏾‍♀️",
		tag: "E4.0",
		description: "woman bowing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙇🏾‍♀",
		tag: "E4.0",
		description: "woman bowing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🙇🏿‍♀️",
		tag: "E4.0",
		description: "woman bowing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			128583,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🙇🏿‍♀",
		tag: "E4.0",
		description: "woman bowing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318
		],
		status: "fully-qualified",
		emoji: "🤦",
		tag: "E3.0",
		description: "person facepalming"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127995
		],
		status: "fully-qualified",
		emoji: "🤦🏻",
		tag: "E3.0",
		description: "person facepalming: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127996
		],
		status: "fully-qualified",
		emoji: "🤦🏼",
		tag: "E3.0",
		description: "person facepalming: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127997
		],
		status: "fully-qualified",
		emoji: "🤦🏽",
		tag: "E3.0",
		description: "person facepalming: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127998
		],
		status: "fully-qualified",
		emoji: "🤦🏾",
		tag: "E3.0",
		description: "person facepalming: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127999
		],
		status: "fully-qualified",
		emoji: "🤦🏿",
		tag: "E3.0",
		description: "person facepalming: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤦‍♂️",
		tag: "E4.0",
		description: "man facepalming"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤦‍♂",
		tag: "E4.0",
		description: "man facepalming"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤦🏻‍♂️",
		tag: "E4.0",
		description: "man facepalming: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤦🏻‍♂",
		tag: "E4.0",
		description: "man facepalming: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤦🏼‍♂️",
		tag: "E4.0",
		description: "man facepalming: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤦🏼‍♂",
		tag: "E4.0",
		description: "man facepalming: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤦🏽‍♂️",
		tag: "E4.0",
		description: "man facepalming: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤦🏽‍♂",
		tag: "E4.0",
		description: "man facepalming: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤦🏾‍♂️",
		tag: "E4.0",
		description: "man facepalming: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤦🏾‍♂",
		tag: "E4.0",
		description: "man facepalming: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤦🏿‍♂️",
		tag: "E4.0",
		description: "man facepalming: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤦🏿‍♂",
		tag: "E4.0",
		description: "man facepalming: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤦‍♀️",
		tag: "E4.0",
		description: "woman facepalming"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤦‍♀",
		tag: "E4.0",
		description: "woman facepalming"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤦🏻‍♀️",
		tag: "E4.0",
		description: "woman facepalming: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤦🏻‍♀",
		tag: "E4.0",
		description: "woman facepalming: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤦🏼‍♀️",
		tag: "E4.0",
		description: "woman facepalming: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤦🏼‍♀",
		tag: "E4.0",
		description: "woman facepalming: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤦🏽‍♀️",
		tag: "E4.0",
		description: "woman facepalming: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤦🏽‍♀",
		tag: "E4.0",
		description: "woman facepalming: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤦🏾‍♀️",
		tag: "E4.0",
		description: "woman facepalming: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤦🏾‍♀",
		tag: "E4.0",
		description: "woman facepalming: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤦🏿‍♀️",
		tag: "E4.0",
		description: "woman facepalming: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129318,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤦🏿‍♀",
		tag: "E4.0",
		description: "woman facepalming: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335
		],
		status: "fully-qualified",
		emoji: "🤷",
		tag: "E3.0",
		description: "person shrugging"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127995
		],
		status: "fully-qualified",
		emoji: "🤷🏻",
		tag: "E3.0",
		description: "person shrugging: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127996
		],
		status: "fully-qualified",
		emoji: "🤷🏼",
		tag: "E3.0",
		description: "person shrugging: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127997
		],
		status: "fully-qualified",
		emoji: "🤷🏽",
		tag: "E3.0",
		description: "person shrugging: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127998
		],
		status: "fully-qualified",
		emoji: "🤷🏾",
		tag: "E3.0",
		description: "person shrugging: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127999
		],
		status: "fully-qualified",
		emoji: "🤷🏿",
		tag: "E3.0",
		description: "person shrugging: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤷‍♂️",
		tag: "E4.0",
		description: "man shrugging"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤷‍♂",
		tag: "E4.0",
		description: "man shrugging"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤷🏻‍♂️",
		tag: "E4.0",
		description: "man shrugging: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤷🏻‍♂",
		tag: "E4.0",
		description: "man shrugging: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤷🏼‍♂️",
		tag: "E4.0",
		description: "man shrugging: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤷🏼‍♂",
		tag: "E4.0",
		description: "man shrugging: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤷🏽‍♂️",
		tag: "E4.0",
		description: "man shrugging: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤷🏽‍♂",
		tag: "E4.0",
		description: "man shrugging: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤷🏾‍♂️",
		tag: "E4.0",
		description: "man shrugging: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤷🏾‍♂",
		tag: "E4.0",
		description: "man shrugging: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤷🏿‍♂️",
		tag: "E4.0",
		description: "man shrugging: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤷🏿‍♂",
		tag: "E4.0",
		description: "man shrugging: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤷‍♀️",
		tag: "E4.0",
		description: "woman shrugging"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤷‍♀",
		tag: "E4.0",
		description: "woman shrugging"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤷🏻‍♀️",
		tag: "E4.0",
		description: "woman shrugging: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤷🏻‍♀",
		tag: "E4.0",
		description: "woman shrugging: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤷🏼‍♀️",
		tag: "E4.0",
		description: "woman shrugging: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤷🏼‍♀",
		tag: "E4.0",
		description: "woman shrugging: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤷🏽‍♀️",
		tag: "E4.0",
		description: "woman shrugging: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤷🏽‍♀",
		tag: "E4.0",
		description: "woman shrugging: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤷🏾‍♀️",
		tag: "E4.0",
		description: "woman shrugging: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤷🏾‍♀",
		tag: "E4.0",
		description: "woman shrugging: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤷🏿‍♀️",
		tag: "E4.0",
		description: "woman shrugging: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-gesture",
		codePoints: [
			129335,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤷🏿‍♀",
		tag: "E4.0",
		description: "woman shrugging: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			8205,
			9877,
			65039
		],
		status: "fully-qualified",
		emoji: "🧑‍⚕️",
		tag: "E12.1",
		description: "health worker"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			8205,
			9877
		],
		status: "minimally-qualified",
		emoji: "🧑‍⚕",
		tag: "E12.1",
		description: "health worker"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127995,
			8205,
			9877,
			65039
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍⚕️",
		tag: "E12.1",
		description: "health worker: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127995,
			8205,
			9877
		],
		status: "minimally-qualified",
		emoji: "🧑🏻‍⚕",
		tag: "E12.1",
		description: "health worker: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127996,
			8205,
			9877,
			65039
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍⚕️",
		tag: "E12.1",
		description: "health worker: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127996,
			8205,
			9877
		],
		status: "minimally-qualified",
		emoji: "🧑🏼‍⚕",
		tag: "E12.1",
		description: "health worker: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127997,
			8205,
			9877,
			65039
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍⚕️",
		tag: "E12.1",
		description: "health worker: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127997,
			8205,
			9877
		],
		status: "minimally-qualified",
		emoji: "🧑🏽‍⚕",
		tag: "E12.1",
		description: "health worker: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127998,
			8205,
			9877,
			65039
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍⚕️",
		tag: "E12.1",
		description: "health worker: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127998,
			8205,
			9877
		],
		status: "minimally-qualified",
		emoji: "🧑🏾‍⚕",
		tag: "E12.1",
		description: "health worker: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127999,
			8205,
			9877,
			65039
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍⚕️",
		tag: "E12.1",
		description: "health worker: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127999,
			8205,
			9877
		],
		status: "minimally-qualified",
		emoji: "🧑🏿‍⚕",
		tag: "E12.1",
		description: "health worker: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			8205,
			9877,
			65039
		],
		status: "fully-qualified",
		emoji: "👨‍⚕️",
		tag: "E4.0",
		description: "man health worker"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			8205,
			9877
		],
		status: "minimally-qualified",
		emoji: "👨‍⚕",
		tag: "E4.0",
		description: "man health worker"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127995,
			8205,
			9877,
			65039
		],
		status: "fully-qualified",
		emoji: "👨🏻‍⚕️",
		tag: "E4.0",
		description: "man health worker: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127995,
			8205,
			9877
		],
		status: "minimally-qualified",
		emoji: "👨🏻‍⚕",
		tag: "E4.0",
		description: "man health worker: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127996,
			8205,
			9877,
			65039
		],
		status: "fully-qualified",
		emoji: "👨🏼‍⚕️",
		tag: "E4.0",
		description: "man health worker: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127996,
			8205,
			9877
		],
		status: "minimally-qualified",
		emoji: "👨🏼‍⚕",
		tag: "E4.0",
		description: "man health worker: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127997,
			8205,
			9877,
			65039
		],
		status: "fully-qualified",
		emoji: "👨🏽‍⚕️",
		tag: "E4.0",
		description: "man health worker: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127997,
			8205,
			9877
		],
		status: "minimally-qualified",
		emoji: "👨🏽‍⚕",
		tag: "E4.0",
		description: "man health worker: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127998,
			8205,
			9877,
			65039
		],
		status: "fully-qualified",
		emoji: "👨🏾‍⚕️",
		tag: "E4.0",
		description: "man health worker: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127998,
			8205,
			9877
		],
		status: "minimally-qualified",
		emoji: "👨🏾‍⚕",
		tag: "E4.0",
		description: "man health worker: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127999,
			8205,
			9877,
			65039
		],
		status: "fully-qualified",
		emoji: "👨🏿‍⚕️",
		tag: "E4.0",
		description: "man health worker: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127999,
			8205,
			9877
		],
		status: "minimally-qualified",
		emoji: "👨🏿‍⚕",
		tag: "E4.0",
		description: "man health worker: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			8205,
			9877,
			65039
		],
		status: "fully-qualified",
		emoji: "👩‍⚕️",
		tag: "E4.0",
		description: "woman health worker"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			8205,
			9877
		],
		status: "minimally-qualified",
		emoji: "👩‍⚕",
		tag: "E4.0",
		description: "woman health worker"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127995,
			8205,
			9877,
			65039
		],
		status: "fully-qualified",
		emoji: "👩🏻‍⚕️",
		tag: "E4.0",
		description: "woman health worker: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127995,
			8205,
			9877
		],
		status: "minimally-qualified",
		emoji: "👩🏻‍⚕",
		tag: "E4.0",
		description: "woman health worker: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127996,
			8205,
			9877,
			65039
		],
		status: "fully-qualified",
		emoji: "👩🏼‍⚕️",
		tag: "E4.0",
		description: "woman health worker: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127996,
			8205,
			9877
		],
		status: "minimally-qualified",
		emoji: "👩🏼‍⚕",
		tag: "E4.0",
		description: "woman health worker: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127997,
			8205,
			9877,
			65039
		],
		status: "fully-qualified",
		emoji: "👩🏽‍⚕️",
		tag: "E4.0",
		description: "woman health worker: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127997,
			8205,
			9877
		],
		status: "minimally-qualified",
		emoji: "👩🏽‍⚕",
		tag: "E4.0",
		description: "woman health worker: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127998,
			8205,
			9877,
			65039
		],
		status: "fully-qualified",
		emoji: "👩🏾‍⚕️",
		tag: "E4.0",
		description: "woman health worker: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127998,
			8205,
			9877
		],
		status: "minimally-qualified",
		emoji: "👩🏾‍⚕",
		tag: "E4.0",
		description: "woman health worker: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127999,
			8205,
			9877,
			65039
		],
		status: "fully-qualified",
		emoji: "👩🏿‍⚕️",
		tag: "E4.0",
		description: "woman health worker: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127999,
			8205,
			9877
		],
		status: "minimally-qualified",
		emoji: "👩🏿‍⚕",
		tag: "E4.0",
		description: "woman health worker: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			8205,
			127891
		],
		status: "fully-qualified",
		emoji: "🧑‍🎓",
		tag: "E12.1",
		description: "student"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127995,
			8205,
			127891
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🎓",
		tag: "E12.1",
		description: "student: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127996,
			8205,
			127891
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🎓",
		tag: "E12.1",
		description: "student: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127997,
			8205,
			127891
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🎓",
		tag: "E12.1",
		description: "student: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127998,
			8205,
			127891
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🎓",
		tag: "E12.1",
		description: "student: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127999,
			8205,
			127891
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🎓",
		tag: "E12.1",
		description: "student: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			8205,
			127891
		],
		status: "fully-qualified",
		emoji: "👨‍🎓",
		tag: "E4.0",
		description: "man student"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127995,
			8205,
			127891
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🎓",
		tag: "E4.0",
		description: "man student: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127996,
			8205,
			127891
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🎓",
		tag: "E4.0",
		description: "man student: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127997,
			8205,
			127891
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🎓",
		tag: "E4.0",
		description: "man student: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127998,
			8205,
			127891
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🎓",
		tag: "E4.0",
		description: "man student: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127999,
			8205,
			127891
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🎓",
		tag: "E4.0",
		description: "man student: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			8205,
			127891
		],
		status: "fully-qualified",
		emoji: "👩‍🎓",
		tag: "E4.0",
		description: "woman student"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127995,
			8205,
			127891
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🎓",
		tag: "E4.0",
		description: "woman student: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127996,
			8205,
			127891
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🎓",
		tag: "E4.0",
		description: "woman student: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127997,
			8205,
			127891
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🎓",
		tag: "E4.0",
		description: "woman student: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127998,
			8205,
			127891
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🎓",
		tag: "E4.0",
		description: "woman student: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127999,
			8205,
			127891
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🎓",
		tag: "E4.0",
		description: "woman student: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			8205,
			127979
		],
		status: "fully-qualified",
		emoji: "🧑‍🏫",
		tag: "E12.1",
		description: "teacher"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127995,
			8205,
			127979
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🏫",
		tag: "E12.1",
		description: "teacher: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127996,
			8205,
			127979
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🏫",
		tag: "E12.1",
		description: "teacher: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127997,
			8205,
			127979
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🏫",
		tag: "E12.1",
		description: "teacher: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127998,
			8205,
			127979
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🏫",
		tag: "E12.1",
		description: "teacher: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127999,
			8205,
			127979
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🏫",
		tag: "E12.1",
		description: "teacher: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			8205,
			127979
		],
		status: "fully-qualified",
		emoji: "👨‍🏫",
		tag: "E4.0",
		description: "man teacher"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127995,
			8205,
			127979
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🏫",
		tag: "E4.0",
		description: "man teacher: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127996,
			8205,
			127979
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🏫",
		tag: "E4.0",
		description: "man teacher: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127997,
			8205,
			127979
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🏫",
		tag: "E4.0",
		description: "man teacher: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127998,
			8205,
			127979
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🏫",
		tag: "E4.0",
		description: "man teacher: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127999,
			8205,
			127979
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🏫",
		tag: "E4.0",
		description: "man teacher: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			8205,
			127979
		],
		status: "fully-qualified",
		emoji: "👩‍🏫",
		tag: "E4.0",
		description: "woman teacher"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127995,
			8205,
			127979
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🏫",
		tag: "E4.0",
		description: "woman teacher: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127996,
			8205,
			127979
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🏫",
		tag: "E4.0",
		description: "woman teacher: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127997,
			8205,
			127979
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🏫",
		tag: "E4.0",
		description: "woman teacher: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127998,
			8205,
			127979
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🏫",
		tag: "E4.0",
		description: "woman teacher: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127999,
			8205,
			127979
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🏫",
		tag: "E4.0",
		description: "woman teacher: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			8205,
			9878,
			65039
		],
		status: "fully-qualified",
		emoji: "🧑‍⚖️",
		tag: "E12.1",
		description: "judge"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			8205,
			9878
		],
		status: "minimally-qualified",
		emoji: "🧑‍⚖",
		tag: "E12.1",
		description: "judge"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127995,
			8205,
			9878,
			65039
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍⚖️",
		tag: "E12.1",
		description: "judge: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127995,
			8205,
			9878
		],
		status: "minimally-qualified",
		emoji: "🧑🏻‍⚖",
		tag: "E12.1",
		description: "judge: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127996,
			8205,
			9878,
			65039
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍⚖️",
		tag: "E12.1",
		description: "judge: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127996,
			8205,
			9878
		],
		status: "minimally-qualified",
		emoji: "🧑🏼‍⚖",
		tag: "E12.1",
		description: "judge: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127997,
			8205,
			9878,
			65039
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍⚖️",
		tag: "E12.1",
		description: "judge: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127997,
			8205,
			9878
		],
		status: "minimally-qualified",
		emoji: "🧑🏽‍⚖",
		tag: "E12.1",
		description: "judge: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127998,
			8205,
			9878,
			65039
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍⚖️",
		tag: "E12.1",
		description: "judge: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127998,
			8205,
			9878
		],
		status: "minimally-qualified",
		emoji: "🧑🏾‍⚖",
		tag: "E12.1",
		description: "judge: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127999,
			8205,
			9878,
			65039
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍⚖️",
		tag: "E12.1",
		description: "judge: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127999,
			8205,
			9878
		],
		status: "minimally-qualified",
		emoji: "🧑🏿‍⚖",
		tag: "E12.1",
		description: "judge: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			8205,
			9878,
			65039
		],
		status: "fully-qualified",
		emoji: "👨‍⚖️",
		tag: "E4.0",
		description: "man judge"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			8205,
			9878
		],
		status: "minimally-qualified",
		emoji: "👨‍⚖",
		tag: "E4.0",
		description: "man judge"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127995,
			8205,
			9878,
			65039
		],
		status: "fully-qualified",
		emoji: "👨🏻‍⚖️",
		tag: "E4.0",
		description: "man judge: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127995,
			8205,
			9878
		],
		status: "minimally-qualified",
		emoji: "👨🏻‍⚖",
		tag: "E4.0",
		description: "man judge: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127996,
			8205,
			9878,
			65039
		],
		status: "fully-qualified",
		emoji: "👨🏼‍⚖️",
		tag: "E4.0",
		description: "man judge: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127996,
			8205,
			9878
		],
		status: "minimally-qualified",
		emoji: "👨🏼‍⚖",
		tag: "E4.0",
		description: "man judge: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127997,
			8205,
			9878,
			65039
		],
		status: "fully-qualified",
		emoji: "👨🏽‍⚖️",
		tag: "E4.0",
		description: "man judge: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127997,
			8205,
			9878
		],
		status: "minimally-qualified",
		emoji: "👨🏽‍⚖",
		tag: "E4.0",
		description: "man judge: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127998,
			8205,
			9878,
			65039
		],
		status: "fully-qualified",
		emoji: "👨🏾‍⚖️",
		tag: "E4.0",
		description: "man judge: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127998,
			8205,
			9878
		],
		status: "minimally-qualified",
		emoji: "👨🏾‍⚖",
		tag: "E4.0",
		description: "man judge: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127999,
			8205,
			9878,
			65039
		],
		status: "fully-qualified",
		emoji: "👨🏿‍⚖️",
		tag: "E4.0",
		description: "man judge: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127999,
			8205,
			9878
		],
		status: "minimally-qualified",
		emoji: "👨🏿‍⚖",
		tag: "E4.0",
		description: "man judge: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			8205,
			9878,
			65039
		],
		status: "fully-qualified",
		emoji: "👩‍⚖️",
		tag: "E4.0",
		description: "woman judge"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			8205,
			9878
		],
		status: "minimally-qualified",
		emoji: "👩‍⚖",
		tag: "E4.0",
		description: "woman judge"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127995,
			8205,
			9878,
			65039
		],
		status: "fully-qualified",
		emoji: "👩🏻‍⚖️",
		tag: "E4.0",
		description: "woman judge: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127995,
			8205,
			9878
		],
		status: "minimally-qualified",
		emoji: "👩🏻‍⚖",
		tag: "E4.0",
		description: "woman judge: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127996,
			8205,
			9878,
			65039
		],
		status: "fully-qualified",
		emoji: "👩🏼‍⚖️",
		tag: "E4.0",
		description: "woman judge: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127996,
			8205,
			9878
		],
		status: "minimally-qualified",
		emoji: "👩🏼‍⚖",
		tag: "E4.0",
		description: "woman judge: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127997,
			8205,
			9878,
			65039
		],
		status: "fully-qualified",
		emoji: "👩🏽‍⚖️",
		tag: "E4.0",
		description: "woman judge: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127997,
			8205,
			9878
		],
		status: "minimally-qualified",
		emoji: "👩🏽‍⚖",
		tag: "E4.0",
		description: "woman judge: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127998,
			8205,
			9878,
			65039
		],
		status: "fully-qualified",
		emoji: "👩🏾‍⚖️",
		tag: "E4.0",
		description: "woman judge: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127998,
			8205,
			9878
		],
		status: "minimally-qualified",
		emoji: "👩🏾‍⚖",
		tag: "E4.0",
		description: "woman judge: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127999,
			8205,
			9878,
			65039
		],
		status: "fully-qualified",
		emoji: "👩🏿‍⚖️",
		tag: "E4.0",
		description: "woman judge: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127999,
			8205,
			9878
		],
		status: "minimally-qualified",
		emoji: "👩🏿‍⚖",
		tag: "E4.0",
		description: "woman judge: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			8205,
			127806
		],
		status: "fully-qualified",
		emoji: "🧑‍🌾",
		tag: "E12.1",
		description: "farmer"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127995,
			8205,
			127806
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🌾",
		tag: "E12.1",
		description: "farmer: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127996,
			8205,
			127806
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🌾",
		tag: "E12.1",
		description: "farmer: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127997,
			8205,
			127806
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🌾",
		tag: "E12.1",
		description: "farmer: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127998,
			8205,
			127806
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🌾",
		tag: "E12.1",
		description: "farmer: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127999,
			8205,
			127806
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🌾",
		tag: "E12.1",
		description: "farmer: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			8205,
			127806
		],
		status: "fully-qualified",
		emoji: "👨‍🌾",
		tag: "E4.0",
		description: "man farmer"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127995,
			8205,
			127806
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🌾",
		tag: "E4.0",
		description: "man farmer: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127996,
			8205,
			127806
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🌾",
		tag: "E4.0",
		description: "man farmer: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127997,
			8205,
			127806
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🌾",
		tag: "E4.0",
		description: "man farmer: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127998,
			8205,
			127806
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🌾",
		tag: "E4.0",
		description: "man farmer: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127999,
			8205,
			127806
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🌾",
		tag: "E4.0",
		description: "man farmer: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			8205,
			127806
		],
		status: "fully-qualified",
		emoji: "👩‍🌾",
		tag: "E4.0",
		description: "woman farmer"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127995,
			8205,
			127806
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🌾",
		tag: "E4.0",
		description: "woman farmer: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127996,
			8205,
			127806
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🌾",
		tag: "E4.0",
		description: "woman farmer: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127997,
			8205,
			127806
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🌾",
		tag: "E4.0",
		description: "woman farmer: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127998,
			8205,
			127806
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🌾",
		tag: "E4.0",
		description: "woman farmer: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127999,
			8205,
			127806
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🌾",
		tag: "E4.0",
		description: "woman farmer: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			8205,
			127859
		],
		status: "fully-qualified",
		emoji: "🧑‍🍳",
		tag: "E12.1",
		description: "cook"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127995,
			8205,
			127859
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🍳",
		tag: "E12.1",
		description: "cook: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127996,
			8205,
			127859
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🍳",
		tag: "E12.1",
		description: "cook: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127997,
			8205,
			127859
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🍳",
		tag: "E12.1",
		description: "cook: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127998,
			8205,
			127859
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🍳",
		tag: "E12.1",
		description: "cook: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127999,
			8205,
			127859
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🍳",
		tag: "E12.1",
		description: "cook: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			8205,
			127859
		],
		status: "fully-qualified",
		emoji: "👨‍🍳",
		tag: "E4.0",
		description: "man cook"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127995,
			8205,
			127859
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🍳",
		tag: "E4.0",
		description: "man cook: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127996,
			8205,
			127859
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🍳",
		tag: "E4.0",
		description: "man cook: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127997,
			8205,
			127859
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🍳",
		tag: "E4.0",
		description: "man cook: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127998,
			8205,
			127859
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🍳",
		tag: "E4.0",
		description: "man cook: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127999,
			8205,
			127859
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🍳",
		tag: "E4.0",
		description: "man cook: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			8205,
			127859
		],
		status: "fully-qualified",
		emoji: "👩‍🍳",
		tag: "E4.0",
		description: "woman cook"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127995,
			8205,
			127859
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🍳",
		tag: "E4.0",
		description: "woman cook: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127996,
			8205,
			127859
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🍳",
		tag: "E4.0",
		description: "woman cook: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127997,
			8205,
			127859
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🍳",
		tag: "E4.0",
		description: "woman cook: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127998,
			8205,
			127859
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🍳",
		tag: "E4.0",
		description: "woman cook: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127999,
			8205,
			127859
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🍳",
		tag: "E4.0",
		description: "woman cook: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			8205,
			128295
		],
		status: "fully-qualified",
		emoji: "🧑‍🔧",
		tag: "E12.1",
		description: "mechanic"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127995,
			8205,
			128295
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🔧",
		tag: "E12.1",
		description: "mechanic: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127996,
			8205,
			128295
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🔧",
		tag: "E12.1",
		description: "mechanic: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127997,
			8205,
			128295
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🔧",
		tag: "E12.1",
		description: "mechanic: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127998,
			8205,
			128295
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🔧",
		tag: "E12.1",
		description: "mechanic: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127999,
			8205,
			128295
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🔧",
		tag: "E12.1",
		description: "mechanic: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			8205,
			128295
		],
		status: "fully-qualified",
		emoji: "👨‍🔧",
		tag: "E4.0",
		description: "man mechanic"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127995,
			8205,
			128295
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🔧",
		tag: "E4.0",
		description: "man mechanic: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127996,
			8205,
			128295
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🔧",
		tag: "E4.0",
		description: "man mechanic: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127997,
			8205,
			128295
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🔧",
		tag: "E4.0",
		description: "man mechanic: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127998,
			8205,
			128295
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🔧",
		tag: "E4.0",
		description: "man mechanic: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127999,
			8205,
			128295
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🔧",
		tag: "E4.0",
		description: "man mechanic: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			8205,
			128295
		],
		status: "fully-qualified",
		emoji: "👩‍🔧",
		tag: "E4.0",
		description: "woman mechanic"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127995,
			8205,
			128295
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🔧",
		tag: "E4.0",
		description: "woman mechanic: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127996,
			8205,
			128295
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🔧",
		tag: "E4.0",
		description: "woman mechanic: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127997,
			8205,
			128295
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🔧",
		tag: "E4.0",
		description: "woman mechanic: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127998,
			8205,
			128295
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🔧",
		tag: "E4.0",
		description: "woman mechanic: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127999,
			8205,
			128295
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🔧",
		tag: "E4.0",
		description: "woman mechanic: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			8205,
			127981
		],
		status: "fully-qualified",
		emoji: "🧑‍🏭",
		tag: "E12.1",
		description: "factory worker"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127995,
			8205,
			127981
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🏭",
		tag: "E12.1",
		description: "factory worker: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127996,
			8205,
			127981
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🏭",
		tag: "E12.1",
		description: "factory worker: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127997,
			8205,
			127981
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🏭",
		tag: "E12.1",
		description: "factory worker: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127998,
			8205,
			127981
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🏭",
		tag: "E12.1",
		description: "factory worker: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127999,
			8205,
			127981
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🏭",
		tag: "E12.1",
		description: "factory worker: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			8205,
			127981
		],
		status: "fully-qualified",
		emoji: "👨‍🏭",
		tag: "E4.0",
		description: "man factory worker"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127995,
			8205,
			127981
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🏭",
		tag: "E4.0",
		description: "man factory worker: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127996,
			8205,
			127981
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🏭",
		tag: "E4.0",
		description: "man factory worker: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127997,
			8205,
			127981
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🏭",
		tag: "E4.0",
		description: "man factory worker: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127998,
			8205,
			127981
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🏭",
		tag: "E4.0",
		description: "man factory worker: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127999,
			8205,
			127981
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🏭",
		tag: "E4.0",
		description: "man factory worker: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			8205,
			127981
		],
		status: "fully-qualified",
		emoji: "👩‍🏭",
		tag: "E4.0",
		description: "woman factory worker"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127995,
			8205,
			127981
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🏭",
		tag: "E4.0",
		description: "woman factory worker: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127996,
			8205,
			127981
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🏭",
		tag: "E4.0",
		description: "woman factory worker: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127997,
			8205,
			127981
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🏭",
		tag: "E4.0",
		description: "woman factory worker: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127998,
			8205,
			127981
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🏭",
		tag: "E4.0",
		description: "woman factory worker: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127999,
			8205,
			127981
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🏭",
		tag: "E4.0",
		description: "woman factory worker: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			8205,
			128188
		],
		status: "fully-qualified",
		emoji: "🧑‍💼",
		tag: "E12.1",
		description: "office worker"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127995,
			8205,
			128188
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍💼",
		tag: "E12.1",
		description: "office worker: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127996,
			8205,
			128188
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍💼",
		tag: "E12.1",
		description: "office worker: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127997,
			8205,
			128188
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍💼",
		tag: "E12.1",
		description: "office worker: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127998,
			8205,
			128188
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍💼",
		tag: "E12.1",
		description: "office worker: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127999,
			8205,
			128188
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍💼",
		tag: "E12.1",
		description: "office worker: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			8205,
			128188
		],
		status: "fully-qualified",
		emoji: "👨‍💼",
		tag: "E4.0",
		description: "man office worker"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127995,
			8205,
			128188
		],
		status: "fully-qualified",
		emoji: "👨🏻‍💼",
		tag: "E4.0",
		description: "man office worker: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127996,
			8205,
			128188
		],
		status: "fully-qualified",
		emoji: "👨🏼‍💼",
		tag: "E4.0",
		description: "man office worker: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127997,
			8205,
			128188
		],
		status: "fully-qualified",
		emoji: "👨🏽‍💼",
		tag: "E4.0",
		description: "man office worker: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127998,
			8205,
			128188
		],
		status: "fully-qualified",
		emoji: "👨🏾‍💼",
		tag: "E4.0",
		description: "man office worker: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127999,
			8205,
			128188
		],
		status: "fully-qualified",
		emoji: "👨🏿‍💼",
		tag: "E4.0",
		description: "man office worker: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			8205,
			128188
		],
		status: "fully-qualified",
		emoji: "👩‍💼",
		tag: "E4.0",
		description: "woman office worker"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127995,
			8205,
			128188
		],
		status: "fully-qualified",
		emoji: "👩🏻‍💼",
		tag: "E4.0",
		description: "woman office worker: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127996,
			8205,
			128188
		],
		status: "fully-qualified",
		emoji: "👩🏼‍💼",
		tag: "E4.0",
		description: "woman office worker: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127997,
			8205,
			128188
		],
		status: "fully-qualified",
		emoji: "👩🏽‍💼",
		tag: "E4.0",
		description: "woman office worker: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127998,
			8205,
			128188
		],
		status: "fully-qualified",
		emoji: "👩🏾‍💼",
		tag: "E4.0",
		description: "woman office worker: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127999,
			8205,
			128188
		],
		status: "fully-qualified",
		emoji: "👩🏿‍💼",
		tag: "E4.0",
		description: "woman office worker: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			8205,
			128300
		],
		status: "fully-qualified",
		emoji: "🧑‍🔬",
		tag: "E12.1",
		description: "scientist"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127995,
			8205,
			128300
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🔬",
		tag: "E12.1",
		description: "scientist: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127996,
			8205,
			128300
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🔬",
		tag: "E12.1",
		description: "scientist: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127997,
			8205,
			128300
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🔬",
		tag: "E12.1",
		description: "scientist: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127998,
			8205,
			128300
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🔬",
		tag: "E12.1",
		description: "scientist: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127999,
			8205,
			128300
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🔬",
		tag: "E12.1",
		description: "scientist: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			8205,
			128300
		],
		status: "fully-qualified",
		emoji: "👨‍🔬",
		tag: "E4.0",
		description: "man scientist"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127995,
			8205,
			128300
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🔬",
		tag: "E4.0",
		description: "man scientist: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127996,
			8205,
			128300
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🔬",
		tag: "E4.0",
		description: "man scientist: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127997,
			8205,
			128300
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🔬",
		tag: "E4.0",
		description: "man scientist: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127998,
			8205,
			128300
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🔬",
		tag: "E4.0",
		description: "man scientist: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127999,
			8205,
			128300
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🔬",
		tag: "E4.0",
		description: "man scientist: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			8205,
			128300
		],
		status: "fully-qualified",
		emoji: "👩‍🔬",
		tag: "E4.0",
		description: "woman scientist"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127995,
			8205,
			128300
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🔬",
		tag: "E4.0",
		description: "woman scientist: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127996,
			8205,
			128300
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🔬",
		tag: "E4.0",
		description: "woman scientist: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127997,
			8205,
			128300
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🔬",
		tag: "E4.0",
		description: "woman scientist: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127998,
			8205,
			128300
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🔬",
		tag: "E4.0",
		description: "woman scientist: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127999,
			8205,
			128300
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🔬",
		tag: "E4.0",
		description: "woman scientist: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			8205,
			128187
		],
		status: "fully-qualified",
		emoji: "🧑‍💻",
		tag: "E12.1",
		description: "technologist"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127995,
			8205,
			128187
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍💻",
		tag: "E12.1",
		description: "technologist: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127996,
			8205,
			128187
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍💻",
		tag: "E12.1",
		description: "technologist: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127997,
			8205,
			128187
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍💻",
		tag: "E12.1",
		description: "technologist: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127998,
			8205,
			128187
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍💻",
		tag: "E12.1",
		description: "technologist: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127999,
			8205,
			128187
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍💻",
		tag: "E12.1",
		description: "technologist: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			8205,
			128187
		],
		status: "fully-qualified",
		emoji: "👨‍💻",
		tag: "E4.0",
		description: "man technologist"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127995,
			8205,
			128187
		],
		status: "fully-qualified",
		emoji: "👨🏻‍💻",
		tag: "E4.0",
		description: "man technologist: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127996,
			8205,
			128187
		],
		status: "fully-qualified",
		emoji: "👨🏼‍💻",
		tag: "E4.0",
		description: "man technologist: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127997,
			8205,
			128187
		],
		status: "fully-qualified",
		emoji: "👨🏽‍💻",
		tag: "E4.0",
		description: "man technologist: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127998,
			8205,
			128187
		],
		status: "fully-qualified",
		emoji: "👨🏾‍💻",
		tag: "E4.0",
		description: "man technologist: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127999,
			8205,
			128187
		],
		status: "fully-qualified",
		emoji: "👨🏿‍💻",
		tag: "E4.0",
		description: "man technologist: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			8205,
			128187
		],
		status: "fully-qualified",
		emoji: "👩‍💻",
		tag: "E4.0",
		description: "woman technologist"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127995,
			8205,
			128187
		],
		status: "fully-qualified",
		emoji: "👩🏻‍💻",
		tag: "E4.0",
		description: "woman technologist: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127996,
			8205,
			128187
		],
		status: "fully-qualified",
		emoji: "👩🏼‍💻",
		tag: "E4.0",
		description: "woman technologist: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127997,
			8205,
			128187
		],
		status: "fully-qualified",
		emoji: "👩🏽‍💻",
		tag: "E4.0",
		description: "woman technologist: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127998,
			8205,
			128187
		],
		status: "fully-qualified",
		emoji: "👩🏾‍💻",
		tag: "E4.0",
		description: "woman technologist: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127999,
			8205,
			128187
		],
		status: "fully-qualified",
		emoji: "👩🏿‍💻",
		tag: "E4.0",
		description: "woman technologist: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			8205,
			127908
		],
		status: "fully-qualified",
		emoji: "🧑‍🎤",
		tag: "E12.1",
		description: "singer"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127995,
			8205,
			127908
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🎤",
		tag: "E12.1",
		description: "singer: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127996,
			8205,
			127908
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🎤",
		tag: "E12.1",
		description: "singer: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127997,
			8205,
			127908
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🎤",
		tag: "E12.1",
		description: "singer: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127998,
			8205,
			127908
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🎤",
		tag: "E12.1",
		description: "singer: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127999,
			8205,
			127908
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🎤",
		tag: "E12.1",
		description: "singer: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			8205,
			127908
		],
		status: "fully-qualified",
		emoji: "👨‍🎤",
		tag: "E4.0",
		description: "man singer"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127995,
			8205,
			127908
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🎤",
		tag: "E4.0",
		description: "man singer: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127996,
			8205,
			127908
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🎤",
		tag: "E4.0",
		description: "man singer: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127997,
			8205,
			127908
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🎤",
		tag: "E4.0",
		description: "man singer: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127998,
			8205,
			127908
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🎤",
		tag: "E4.0",
		description: "man singer: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127999,
			8205,
			127908
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🎤",
		tag: "E4.0",
		description: "man singer: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			8205,
			127908
		],
		status: "fully-qualified",
		emoji: "👩‍🎤",
		tag: "E4.0",
		description: "woman singer"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127995,
			8205,
			127908
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🎤",
		tag: "E4.0",
		description: "woman singer: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127996,
			8205,
			127908
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🎤",
		tag: "E4.0",
		description: "woman singer: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127997,
			8205,
			127908
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🎤",
		tag: "E4.0",
		description: "woman singer: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127998,
			8205,
			127908
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🎤",
		tag: "E4.0",
		description: "woman singer: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127999,
			8205,
			127908
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🎤",
		tag: "E4.0",
		description: "woman singer: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			8205,
			127912
		],
		status: "fully-qualified",
		emoji: "🧑‍🎨",
		tag: "E12.1",
		description: "artist"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127995,
			8205,
			127912
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🎨",
		tag: "E12.1",
		description: "artist: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127996,
			8205,
			127912
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🎨",
		tag: "E12.1",
		description: "artist: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127997,
			8205,
			127912
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🎨",
		tag: "E12.1",
		description: "artist: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127998,
			8205,
			127912
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🎨",
		tag: "E12.1",
		description: "artist: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127999,
			8205,
			127912
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🎨",
		tag: "E12.1",
		description: "artist: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			8205,
			127912
		],
		status: "fully-qualified",
		emoji: "👨‍🎨",
		tag: "E4.0",
		description: "man artist"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127995,
			8205,
			127912
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🎨",
		tag: "E4.0",
		description: "man artist: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127996,
			8205,
			127912
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🎨",
		tag: "E4.0",
		description: "man artist: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127997,
			8205,
			127912
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🎨",
		tag: "E4.0",
		description: "man artist: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127998,
			8205,
			127912
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🎨",
		tag: "E4.0",
		description: "man artist: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127999,
			8205,
			127912
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🎨",
		tag: "E4.0",
		description: "man artist: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			8205,
			127912
		],
		status: "fully-qualified",
		emoji: "👩‍🎨",
		tag: "E4.0",
		description: "woman artist"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127995,
			8205,
			127912
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🎨",
		tag: "E4.0",
		description: "woman artist: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127996,
			8205,
			127912
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🎨",
		tag: "E4.0",
		description: "woman artist: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127997,
			8205,
			127912
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🎨",
		tag: "E4.0",
		description: "woman artist: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127998,
			8205,
			127912
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🎨",
		tag: "E4.0",
		description: "woman artist: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127999,
			8205,
			127912
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🎨",
		tag: "E4.0",
		description: "woman artist: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			8205,
			9992,
			65039
		],
		status: "fully-qualified",
		emoji: "🧑‍✈️",
		tag: "E12.1",
		description: "pilot"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			8205,
			9992
		],
		status: "minimally-qualified",
		emoji: "🧑‍✈",
		tag: "E12.1",
		description: "pilot"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127995,
			8205,
			9992,
			65039
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍✈️",
		tag: "E12.1",
		description: "pilot: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127995,
			8205,
			9992
		],
		status: "minimally-qualified",
		emoji: "🧑🏻‍✈",
		tag: "E12.1",
		description: "pilot: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127996,
			8205,
			9992,
			65039
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍✈️",
		tag: "E12.1",
		description: "pilot: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127996,
			8205,
			9992
		],
		status: "minimally-qualified",
		emoji: "🧑🏼‍✈",
		tag: "E12.1",
		description: "pilot: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127997,
			8205,
			9992,
			65039
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍✈️",
		tag: "E12.1",
		description: "pilot: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127997,
			8205,
			9992
		],
		status: "minimally-qualified",
		emoji: "🧑🏽‍✈",
		tag: "E12.1",
		description: "pilot: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127998,
			8205,
			9992,
			65039
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍✈️",
		tag: "E12.1",
		description: "pilot: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127998,
			8205,
			9992
		],
		status: "minimally-qualified",
		emoji: "🧑🏾‍✈",
		tag: "E12.1",
		description: "pilot: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127999,
			8205,
			9992,
			65039
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍✈️",
		tag: "E12.1",
		description: "pilot: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127999,
			8205,
			9992
		],
		status: "minimally-qualified",
		emoji: "🧑🏿‍✈",
		tag: "E12.1",
		description: "pilot: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			8205,
			9992,
			65039
		],
		status: "fully-qualified",
		emoji: "👨‍✈️",
		tag: "E4.0",
		description: "man pilot"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			8205,
			9992
		],
		status: "minimally-qualified",
		emoji: "👨‍✈",
		tag: "E4.0",
		description: "man pilot"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127995,
			8205,
			9992,
			65039
		],
		status: "fully-qualified",
		emoji: "👨🏻‍✈️",
		tag: "E4.0",
		description: "man pilot: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127995,
			8205,
			9992
		],
		status: "minimally-qualified",
		emoji: "👨🏻‍✈",
		tag: "E4.0",
		description: "man pilot: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127996,
			8205,
			9992,
			65039
		],
		status: "fully-qualified",
		emoji: "👨🏼‍✈️",
		tag: "E4.0",
		description: "man pilot: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127996,
			8205,
			9992
		],
		status: "minimally-qualified",
		emoji: "👨🏼‍✈",
		tag: "E4.0",
		description: "man pilot: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127997,
			8205,
			9992,
			65039
		],
		status: "fully-qualified",
		emoji: "👨🏽‍✈️",
		tag: "E4.0",
		description: "man pilot: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127997,
			8205,
			9992
		],
		status: "minimally-qualified",
		emoji: "👨🏽‍✈",
		tag: "E4.0",
		description: "man pilot: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127998,
			8205,
			9992,
			65039
		],
		status: "fully-qualified",
		emoji: "👨🏾‍✈️",
		tag: "E4.0",
		description: "man pilot: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127998,
			8205,
			9992
		],
		status: "minimally-qualified",
		emoji: "👨🏾‍✈",
		tag: "E4.0",
		description: "man pilot: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127999,
			8205,
			9992,
			65039
		],
		status: "fully-qualified",
		emoji: "👨🏿‍✈️",
		tag: "E4.0",
		description: "man pilot: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127999,
			8205,
			9992
		],
		status: "minimally-qualified",
		emoji: "👨🏿‍✈",
		tag: "E4.0",
		description: "man pilot: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			8205,
			9992,
			65039
		],
		status: "fully-qualified",
		emoji: "👩‍✈️",
		tag: "E4.0",
		description: "woman pilot"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			8205,
			9992
		],
		status: "minimally-qualified",
		emoji: "👩‍✈",
		tag: "E4.0",
		description: "woman pilot"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127995,
			8205,
			9992,
			65039
		],
		status: "fully-qualified",
		emoji: "👩🏻‍✈️",
		tag: "E4.0",
		description: "woman pilot: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127995,
			8205,
			9992
		],
		status: "minimally-qualified",
		emoji: "👩🏻‍✈",
		tag: "E4.0",
		description: "woman pilot: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127996,
			8205,
			9992,
			65039
		],
		status: "fully-qualified",
		emoji: "👩🏼‍✈️",
		tag: "E4.0",
		description: "woman pilot: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127996,
			8205,
			9992
		],
		status: "minimally-qualified",
		emoji: "👩🏼‍✈",
		tag: "E4.0",
		description: "woman pilot: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127997,
			8205,
			9992,
			65039
		],
		status: "fully-qualified",
		emoji: "👩🏽‍✈️",
		tag: "E4.0",
		description: "woman pilot: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127997,
			8205,
			9992
		],
		status: "minimally-qualified",
		emoji: "👩🏽‍✈",
		tag: "E4.0",
		description: "woman pilot: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127998,
			8205,
			9992,
			65039
		],
		status: "fully-qualified",
		emoji: "👩🏾‍✈️",
		tag: "E4.0",
		description: "woman pilot: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127998,
			8205,
			9992
		],
		status: "minimally-qualified",
		emoji: "👩🏾‍✈",
		tag: "E4.0",
		description: "woman pilot: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127999,
			8205,
			9992,
			65039
		],
		status: "fully-qualified",
		emoji: "👩🏿‍✈️",
		tag: "E4.0",
		description: "woman pilot: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127999,
			8205,
			9992
		],
		status: "minimally-qualified",
		emoji: "👩🏿‍✈",
		tag: "E4.0",
		description: "woman pilot: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			8205,
			128640
		],
		status: "fully-qualified",
		emoji: "🧑‍🚀",
		tag: "E12.1",
		description: "astronaut"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127995,
			8205,
			128640
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🚀",
		tag: "E12.1",
		description: "astronaut: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127996,
			8205,
			128640
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🚀",
		tag: "E12.1",
		description: "astronaut: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127997,
			8205,
			128640
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🚀",
		tag: "E12.1",
		description: "astronaut: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127998,
			8205,
			128640
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🚀",
		tag: "E12.1",
		description: "astronaut: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127999,
			8205,
			128640
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🚀",
		tag: "E12.1",
		description: "astronaut: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			8205,
			128640
		],
		status: "fully-qualified",
		emoji: "👨‍🚀",
		tag: "E4.0",
		description: "man astronaut"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127995,
			8205,
			128640
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🚀",
		tag: "E4.0",
		description: "man astronaut: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127996,
			8205,
			128640
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🚀",
		tag: "E4.0",
		description: "man astronaut: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127997,
			8205,
			128640
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🚀",
		tag: "E4.0",
		description: "man astronaut: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127998,
			8205,
			128640
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🚀",
		tag: "E4.0",
		description: "man astronaut: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127999,
			8205,
			128640
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🚀",
		tag: "E4.0",
		description: "man astronaut: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			8205,
			128640
		],
		status: "fully-qualified",
		emoji: "👩‍🚀",
		tag: "E4.0",
		description: "woman astronaut"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127995,
			8205,
			128640
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🚀",
		tag: "E4.0",
		description: "woman astronaut: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127996,
			8205,
			128640
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🚀",
		tag: "E4.0",
		description: "woman astronaut: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127997,
			8205,
			128640
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🚀",
		tag: "E4.0",
		description: "woman astronaut: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127998,
			8205,
			128640
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🚀",
		tag: "E4.0",
		description: "woman astronaut: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127999,
			8205,
			128640
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🚀",
		tag: "E4.0",
		description: "woman astronaut: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			8205,
			128658
		],
		status: "fully-qualified",
		emoji: "🧑‍🚒",
		tag: "E12.1",
		description: "firefighter"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127995,
			8205,
			128658
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🚒",
		tag: "E12.1",
		description: "firefighter: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127996,
			8205,
			128658
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🚒",
		tag: "E12.1",
		description: "firefighter: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127997,
			8205,
			128658
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🚒",
		tag: "E12.1",
		description: "firefighter: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127998,
			8205,
			128658
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🚒",
		tag: "E12.1",
		description: "firefighter: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127999,
			8205,
			128658
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🚒",
		tag: "E12.1",
		description: "firefighter: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			8205,
			128658
		],
		status: "fully-qualified",
		emoji: "👨‍🚒",
		tag: "E4.0",
		description: "man firefighter"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127995,
			8205,
			128658
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🚒",
		tag: "E4.0",
		description: "man firefighter: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127996,
			8205,
			128658
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🚒",
		tag: "E4.0",
		description: "man firefighter: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127997,
			8205,
			128658
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🚒",
		tag: "E4.0",
		description: "man firefighter: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127998,
			8205,
			128658
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🚒",
		tag: "E4.0",
		description: "man firefighter: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127999,
			8205,
			128658
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🚒",
		tag: "E4.0",
		description: "man firefighter: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			8205,
			128658
		],
		status: "fully-qualified",
		emoji: "👩‍🚒",
		tag: "E4.0",
		description: "woman firefighter"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127995,
			8205,
			128658
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🚒",
		tag: "E4.0",
		description: "woman firefighter: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127996,
			8205,
			128658
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🚒",
		tag: "E4.0",
		description: "woman firefighter: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127997,
			8205,
			128658
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🚒",
		tag: "E4.0",
		description: "woman firefighter: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127998,
			8205,
			128658
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🚒",
		tag: "E4.0",
		description: "woman firefighter: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127999,
			8205,
			128658
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🚒",
		tag: "E4.0",
		description: "woman firefighter: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110
		],
		status: "fully-qualified",
		emoji: "👮",
		tag: "E0.6",
		description: "police officer"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127995
		],
		status: "fully-qualified",
		emoji: "👮🏻",
		tag: "E1.0",
		description: "police officer: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127996
		],
		status: "fully-qualified",
		emoji: "👮🏼",
		tag: "E1.0",
		description: "police officer: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127997
		],
		status: "fully-qualified",
		emoji: "👮🏽",
		tag: "E1.0",
		description: "police officer: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127998
		],
		status: "fully-qualified",
		emoji: "👮🏾",
		tag: "E1.0",
		description: "police officer: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127999
		],
		status: "fully-qualified",
		emoji: "👮🏿",
		tag: "E1.0",
		description: "police officer: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👮‍♂️",
		tag: "E4.0",
		description: "man police officer"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👮‍♂",
		tag: "E4.0",
		description: "man police officer"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👮🏻‍♂️",
		tag: "E4.0",
		description: "man police officer: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👮🏻‍♂",
		tag: "E4.0",
		description: "man police officer: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👮🏼‍♂️",
		tag: "E4.0",
		description: "man police officer: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👮🏼‍♂",
		tag: "E4.0",
		description: "man police officer: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👮🏽‍♂️",
		tag: "E4.0",
		description: "man police officer: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👮🏽‍♂",
		tag: "E4.0",
		description: "man police officer: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👮🏾‍♂️",
		tag: "E4.0",
		description: "man police officer: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👮🏾‍♂",
		tag: "E4.0",
		description: "man police officer: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👮🏿‍♂️",
		tag: "E4.0",
		description: "man police officer: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👮🏿‍♂",
		tag: "E4.0",
		description: "man police officer: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👮‍♀️",
		tag: "E4.0",
		description: "woman police officer"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👮‍♀",
		tag: "E4.0",
		description: "woman police officer"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👮🏻‍♀️",
		tag: "E4.0",
		description: "woman police officer: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👮🏻‍♀",
		tag: "E4.0",
		description: "woman police officer: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👮🏼‍♀️",
		tag: "E4.0",
		description: "woman police officer: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👮🏼‍♀",
		tag: "E4.0",
		description: "woman police officer: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👮🏽‍♀️",
		tag: "E4.0",
		description: "woman police officer: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👮🏽‍♀",
		tag: "E4.0",
		description: "woman police officer: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👮🏾‍♀️",
		tag: "E4.0",
		description: "woman police officer: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👮🏾‍♀",
		tag: "E4.0",
		description: "woman police officer: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👮🏿‍♀️",
		tag: "E4.0",
		description: "woman police officer: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128110,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👮🏿‍♀",
		tag: "E4.0",
		description: "woman police officer: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			65039
		],
		status: "fully-qualified",
		emoji: "🕵️",
		tag: "E0.7",
		description: "detective"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373
		],
		status: "unqualified",
		emoji: "🕵",
		tag: "E0.7",
		description: "detective"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127995
		],
		status: "fully-qualified",
		emoji: "🕵🏻",
		tag: "E2.0",
		description: "detective: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127996
		],
		status: "fully-qualified",
		emoji: "🕵🏼",
		tag: "E2.0",
		description: "detective: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127997
		],
		status: "fully-qualified",
		emoji: "🕵🏽",
		tag: "E2.0",
		description: "detective: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127998
		],
		status: "fully-qualified",
		emoji: "🕵🏾",
		tag: "E2.0",
		description: "detective: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127999
		],
		status: "fully-qualified",
		emoji: "🕵🏿",
		tag: "E2.0",
		description: "detective: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			65039,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🕵️‍♂️",
		tag: "E4.0",
		description: "man detective"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			8205,
			9794,
			65039
		],
		status: "unqualified",
		emoji: "🕵‍♂️",
		tag: "E4.0",
		description: "man detective"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			65039,
			8205,
			9794
		],
		status: "unqualified",
		emoji: "🕵️‍♂",
		tag: "E4.0",
		description: "man detective"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			8205,
			9794
		],
		status: "unqualified",
		emoji: "🕵‍♂",
		tag: "E4.0",
		description: "man detective"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🕵🏻‍♂️",
		tag: "E4.0",
		description: "man detective: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🕵🏻‍♂",
		tag: "E4.0",
		description: "man detective: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🕵🏼‍♂️",
		tag: "E4.0",
		description: "man detective: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🕵🏼‍♂",
		tag: "E4.0",
		description: "man detective: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🕵🏽‍♂️",
		tag: "E4.0",
		description: "man detective: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🕵🏽‍♂",
		tag: "E4.0",
		description: "man detective: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🕵🏾‍♂️",
		tag: "E4.0",
		description: "man detective: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🕵🏾‍♂",
		tag: "E4.0",
		description: "man detective: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🕵🏿‍♂️",
		tag: "E4.0",
		description: "man detective: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🕵🏿‍♂",
		tag: "E4.0",
		description: "man detective: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			65039,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🕵️‍♀️",
		tag: "E4.0",
		description: "woman detective"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			8205,
			9792,
			65039
		],
		status: "unqualified",
		emoji: "🕵‍♀️",
		tag: "E4.0",
		description: "woman detective"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			65039,
			8205,
			9792
		],
		status: "unqualified",
		emoji: "🕵️‍♀",
		tag: "E4.0",
		description: "woman detective"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			8205,
			9792
		],
		status: "unqualified",
		emoji: "🕵‍♀",
		tag: "E4.0",
		description: "woman detective"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🕵🏻‍♀️",
		tag: "E4.0",
		description: "woman detective: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🕵🏻‍♀",
		tag: "E4.0",
		description: "woman detective: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🕵🏼‍♀️",
		tag: "E4.0",
		description: "woman detective: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🕵🏼‍♀",
		tag: "E4.0",
		description: "woman detective: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🕵🏽‍♀️",
		tag: "E4.0",
		description: "woman detective: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🕵🏽‍♀",
		tag: "E4.0",
		description: "woman detective: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🕵🏾‍♀️",
		tag: "E4.0",
		description: "woman detective: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🕵🏾‍♀",
		tag: "E4.0",
		description: "woman detective: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🕵🏿‍♀️",
		tag: "E4.0",
		description: "woman detective: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128373,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🕵🏿‍♀",
		tag: "E4.0",
		description: "woman detective: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130
		],
		status: "fully-qualified",
		emoji: "💂",
		tag: "E0.6",
		description: "guard"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127995
		],
		status: "fully-qualified",
		emoji: "💂🏻",
		tag: "E1.0",
		description: "guard: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127996
		],
		status: "fully-qualified",
		emoji: "💂🏼",
		tag: "E1.0",
		description: "guard: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127997
		],
		status: "fully-qualified",
		emoji: "💂🏽",
		tag: "E1.0",
		description: "guard: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127998
		],
		status: "fully-qualified",
		emoji: "💂🏾",
		tag: "E1.0",
		description: "guard: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127999
		],
		status: "fully-qualified",
		emoji: "💂🏿",
		tag: "E1.0",
		description: "guard: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💂‍♂️",
		tag: "E4.0",
		description: "man guard"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💂‍♂",
		tag: "E4.0",
		description: "man guard"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💂🏻‍♂️",
		tag: "E4.0",
		description: "man guard: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💂🏻‍♂",
		tag: "E4.0",
		description: "man guard: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💂🏼‍♂️",
		tag: "E4.0",
		description: "man guard: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💂🏼‍♂",
		tag: "E4.0",
		description: "man guard: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💂🏽‍♂️",
		tag: "E4.0",
		description: "man guard: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💂🏽‍♂",
		tag: "E4.0",
		description: "man guard: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💂🏾‍♂️",
		tag: "E4.0",
		description: "man guard: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💂🏾‍♂",
		tag: "E4.0",
		description: "man guard: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💂🏿‍♂️",
		tag: "E4.0",
		description: "man guard: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💂🏿‍♂",
		tag: "E4.0",
		description: "man guard: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💂‍♀️",
		tag: "E4.0",
		description: "woman guard"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💂‍♀",
		tag: "E4.0",
		description: "woman guard"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💂🏻‍♀️",
		tag: "E4.0",
		description: "woman guard: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💂🏻‍♀",
		tag: "E4.0",
		description: "woman guard: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💂🏼‍♀️",
		tag: "E4.0",
		description: "woman guard: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💂🏼‍♀",
		tag: "E4.0",
		description: "woman guard: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💂🏽‍♀️",
		tag: "E4.0",
		description: "woman guard: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💂🏽‍♀",
		tag: "E4.0",
		description: "woman guard: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💂🏾‍♀️",
		tag: "E4.0",
		description: "woman guard: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💂🏾‍♀",
		tag: "E4.0",
		description: "woman guard: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💂🏿‍♀️",
		tag: "E4.0",
		description: "woman guard: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128130,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💂🏿‍♀",
		tag: "E4.0",
		description: "woman guard: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129399
		],
		status: "fully-qualified",
		emoji: "🥷",
		tag: "E13.0",
		description: "ninja"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129399,
			127995
		],
		status: "fully-qualified",
		emoji: "🥷🏻",
		tag: "E13.0",
		description: "ninja: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129399,
			127996
		],
		status: "fully-qualified",
		emoji: "🥷🏼",
		tag: "E13.0",
		description: "ninja: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129399,
			127997
		],
		status: "fully-qualified",
		emoji: "🥷🏽",
		tag: "E13.0",
		description: "ninja: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129399,
			127998
		],
		status: "fully-qualified",
		emoji: "🥷🏾",
		tag: "E13.0",
		description: "ninja: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129399,
			127999
		],
		status: "fully-qualified",
		emoji: "🥷🏿",
		tag: "E13.0",
		description: "ninja: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119
		],
		status: "fully-qualified",
		emoji: "👷",
		tag: "E0.6",
		description: "construction worker"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127995
		],
		status: "fully-qualified",
		emoji: "👷🏻",
		tag: "E1.0",
		description: "construction worker: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127996
		],
		status: "fully-qualified",
		emoji: "👷🏼",
		tag: "E1.0",
		description: "construction worker: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127997
		],
		status: "fully-qualified",
		emoji: "👷🏽",
		tag: "E1.0",
		description: "construction worker: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127998
		],
		status: "fully-qualified",
		emoji: "👷🏾",
		tag: "E1.0",
		description: "construction worker: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127999
		],
		status: "fully-qualified",
		emoji: "👷🏿",
		tag: "E1.0",
		description: "construction worker: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👷‍♂️",
		tag: "E4.0",
		description: "man construction worker"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👷‍♂",
		tag: "E4.0",
		description: "man construction worker"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👷🏻‍♂️",
		tag: "E4.0",
		description: "man construction worker: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👷🏻‍♂",
		tag: "E4.0",
		description: "man construction worker: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👷🏼‍♂️",
		tag: "E4.0",
		description: "man construction worker: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👷🏼‍♂",
		tag: "E4.0",
		description: "man construction worker: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👷🏽‍♂️",
		tag: "E4.0",
		description: "man construction worker: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👷🏽‍♂",
		tag: "E4.0",
		description: "man construction worker: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👷🏾‍♂️",
		tag: "E4.0",
		description: "man construction worker: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👷🏾‍♂",
		tag: "E4.0",
		description: "man construction worker: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👷🏿‍♂️",
		tag: "E4.0",
		description: "man construction worker: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👷🏿‍♂",
		tag: "E4.0",
		description: "man construction worker: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👷‍♀️",
		tag: "E4.0",
		description: "woman construction worker"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👷‍♀",
		tag: "E4.0",
		description: "woman construction worker"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👷🏻‍♀️",
		tag: "E4.0",
		description: "woman construction worker: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👷🏻‍♀",
		tag: "E4.0",
		description: "woman construction worker: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👷🏼‍♀️",
		tag: "E4.0",
		description: "woman construction worker: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👷🏼‍♀",
		tag: "E4.0",
		description: "woman construction worker: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👷🏽‍♀️",
		tag: "E4.0",
		description: "woman construction worker: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👷🏽‍♀",
		tag: "E4.0",
		description: "woman construction worker: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👷🏾‍♀️",
		tag: "E4.0",
		description: "woman construction worker: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👷🏾‍♀",
		tag: "E4.0",
		description: "woman construction worker: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👷🏿‍♀️",
		tag: "E4.0",
		description: "woman construction worker: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128119,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👷🏿‍♀",
		tag: "E4.0",
		description: "woman construction worker: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129332
		],
		status: "fully-qualified",
		emoji: "🤴",
		tag: "E3.0",
		description: "prince"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129332,
			127995
		],
		status: "fully-qualified",
		emoji: "🤴🏻",
		tag: "E3.0",
		description: "prince: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129332,
			127996
		],
		status: "fully-qualified",
		emoji: "🤴🏼",
		tag: "E3.0",
		description: "prince: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129332,
			127997
		],
		status: "fully-qualified",
		emoji: "🤴🏽",
		tag: "E3.0",
		description: "prince: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129332,
			127998
		],
		status: "fully-qualified",
		emoji: "🤴🏾",
		tag: "E3.0",
		description: "prince: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129332,
			127999
		],
		status: "fully-qualified",
		emoji: "🤴🏿",
		tag: "E3.0",
		description: "prince: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128120
		],
		status: "fully-qualified",
		emoji: "👸",
		tag: "E0.6",
		description: "princess"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128120,
			127995
		],
		status: "fully-qualified",
		emoji: "👸🏻",
		tag: "E1.0",
		description: "princess: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128120,
			127996
		],
		status: "fully-qualified",
		emoji: "👸🏼",
		tag: "E1.0",
		description: "princess: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128120,
			127997
		],
		status: "fully-qualified",
		emoji: "👸🏽",
		tag: "E1.0",
		description: "princess: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128120,
			127998
		],
		status: "fully-qualified",
		emoji: "👸🏾",
		tag: "E1.0",
		description: "princess: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128120,
			127999
		],
		status: "fully-qualified",
		emoji: "👸🏿",
		tag: "E1.0",
		description: "princess: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115
		],
		status: "fully-qualified",
		emoji: "👳",
		tag: "E0.6",
		description: "person wearing turban"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127995
		],
		status: "fully-qualified",
		emoji: "👳🏻",
		tag: "E1.0",
		description: "person wearing turban: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127996
		],
		status: "fully-qualified",
		emoji: "👳🏼",
		tag: "E1.0",
		description: "person wearing turban: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127997
		],
		status: "fully-qualified",
		emoji: "👳🏽",
		tag: "E1.0",
		description: "person wearing turban: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127998
		],
		status: "fully-qualified",
		emoji: "👳🏾",
		tag: "E1.0",
		description: "person wearing turban: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127999
		],
		status: "fully-qualified",
		emoji: "👳🏿",
		tag: "E1.0",
		description: "person wearing turban: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👳‍♂️",
		tag: "E4.0",
		description: "man wearing turban"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👳‍♂",
		tag: "E4.0",
		description: "man wearing turban"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👳🏻‍♂️",
		tag: "E4.0",
		description: "man wearing turban: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👳🏻‍♂",
		tag: "E4.0",
		description: "man wearing turban: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👳🏼‍♂️",
		tag: "E4.0",
		description: "man wearing turban: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👳🏼‍♂",
		tag: "E4.0",
		description: "man wearing turban: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👳🏽‍♂️",
		tag: "E4.0",
		description: "man wearing turban: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👳🏽‍♂",
		tag: "E4.0",
		description: "man wearing turban: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👳🏾‍♂️",
		tag: "E4.0",
		description: "man wearing turban: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👳🏾‍♂",
		tag: "E4.0",
		description: "man wearing turban: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👳🏿‍♂️",
		tag: "E4.0",
		description: "man wearing turban: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👳🏿‍♂",
		tag: "E4.0",
		description: "man wearing turban: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👳‍♀️",
		tag: "E4.0",
		description: "woman wearing turban"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👳‍♀",
		tag: "E4.0",
		description: "woman wearing turban"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👳🏻‍♀️",
		tag: "E4.0",
		description: "woman wearing turban: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👳🏻‍♀",
		tag: "E4.0",
		description: "woman wearing turban: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👳🏼‍♀️",
		tag: "E4.0",
		description: "woman wearing turban: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👳🏼‍♀",
		tag: "E4.0",
		description: "woman wearing turban: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👳🏽‍♀️",
		tag: "E4.0",
		description: "woman wearing turban: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👳🏽‍♀",
		tag: "E4.0",
		description: "woman wearing turban: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👳🏾‍♀️",
		tag: "E4.0",
		description: "woman wearing turban: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👳🏾‍♀",
		tag: "E4.0",
		description: "woman wearing turban: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👳🏿‍♀️",
		tag: "E4.0",
		description: "woman wearing turban: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128115,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👳🏿‍♀",
		tag: "E4.0",
		description: "woman wearing turban: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128114
		],
		status: "fully-qualified",
		emoji: "👲",
		tag: "E0.6",
		description: "person with skullcap"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128114,
			127995
		],
		status: "fully-qualified",
		emoji: "👲🏻",
		tag: "E1.0",
		description: "person with skullcap: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128114,
			127996
		],
		status: "fully-qualified",
		emoji: "👲🏼",
		tag: "E1.0",
		description: "person with skullcap: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128114,
			127997
		],
		status: "fully-qualified",
		emoji: "👲🏽",
		tag: "E1.0",
		description: "person with skullcap: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128114,
			127998
		],
		status: "fully-qualified",
		emoji: "👲🏾",
		tag: "E1.0",
		description: "person with skullcap: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128114,
			127999
		],
		status: "fully-qualified",
		emoji: "👲🏿",
		tag: "E1.0",
		description: "person with skullcap: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129493
		],
		status: "fully-qualified",
		emoji: "🧕",
		tag: "E5.0",
		description: "woman with headscarf"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129493,
			127995
		],
		status: "fully-qualified",
		emoji: "🧕🏻",
		tag: "E5.0",
		description: "woman with headscarf: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129493,
			127996
		],
		status: "fully-qualified",
		emoji: "🧕🏼",
		tag: "E5.0",
		description: "woman with headscarf: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129493,
			127997
		],
		status: "fully-qualified",
		emoji: "🧕🏽",
		tag: "E5.0",
		description: "woman with headscarf: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129493,
			127998
		],
		status: "fully-qualified",
		emoji: "🧕🏾",
		tag: "E5.0",
		description: "woman with headscarf: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129493,
			127999
		],
		status: "fully-qualified",
		emoji: "🧕🏿",
		tag: "E5.0",
		description: "woman with headscarf: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333
		],
		status: "fully-qualified",
		emoji: "🤵",
		tag: "E3.0",
		description: "person in tuxedo"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127995
		],
		status: "fully-qualified",
		emoji: "🤵🏻",
		tag: "E3.0",
		description: "person in tuxedo: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127996
		],
		status: "fully-qualified",
		emoji: "🤵🏼",
		tag: "E3.0",
		description: "person in tuxedo: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127997
		],
		status: "fully-qualified",
		emoji: "🤵🏽",
		tag: "E3.0",
		description: "person in tuxedo: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127998
		],
		status: "fully-qualified",
		emoji: "🤵🏾",
		tag: "E3.0",
		description: "person in tuxedo: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127999
		],
		status: "fully-qualified",
		emoji: "🤵🏿",
		tag: "E3.0",
		description: "person in tuxedo: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤵‍♂️",
		tag: "E13.0",
		description: "man in tuxedo"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤵‍♂",
		tag: "E13.0",
		description: "man in tuxedo"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤵🏻‍♂️",
		tag: "E13.0",
		description: "man in tuxedo: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤵🏻‍♂",
		tag: "E13.0",
		description: "man in tuxedo: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤵🏼‍♂️",
		tag: "E13.0",
		description: "man in tuxedo: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤵🏼‍♂",
		tag: "E13.0",
		description: "man in tuxedo: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤵🏽‍♂️",
		tag: "E13.0",
		description: "man in tuxedo: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤵🏽‍♂",
		tag: "E13.0",
		description: "man in tuxedo: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤵🏾‍♂️",
		tag: "E13.0",
		description: "man in tuxedo: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤵🏾‍♂",
		tag: "E13.0",
		description: "man in tuxedo: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤵🏿‍♂️",
		tag: "E13.0",
		description: "man in tuxedo: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤵🏿‍♂",
		tag: "E13.0",
		description: "man in tuxedo: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤵‍♀️",
		tag: "E13.0",
		description: "woman in tuxedo"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤵‍♀",
		tag: "E13.0",
		description: "woman in tuxedo"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤵🏻‍♀️",
		tag: "E13.0",
		description: "woman in tuxedo: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤵🏻‍♀",
		tag: "E13.0",
		description: "woman in tuxedo: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤵🏼‍♀️",
		tag: "E13.0",
		description: "woman in tuxedo: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤵🏼‍♀",
		tag: "E13.0",
		description: "woman in tuxedo: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤵🏽‍♀️",
		tag: "E13.0",
		description: "woman in tuxedo: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤵🏽‍♀",
		tag: "E13.0",
		description: "woman in tuxedo: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤵🏾‍♀️",
		tag: "E13.0",
		description: "woman in tuxedo: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤵🏾‍♀",
		tag: "E13.0",
		description: "woman in tuxedo: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤵🏿‍♀️",
		tag: "E13.0",
		description: "woman in tuxedo: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129333,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤵🏿‍♀",
		tag: "E13.0",
		description: "woman in tuxedo: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112
		],
		status: "fully-qualified",
		emoji: "👰",
		tag: "E0.6",
		description: "person with veil"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127995
		],
		status: "fully-qualified",
		emoji: "👰🏻",
		tag: "E1.0",
		description: "person with veil: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127996
		],
		status: "fully-qualified",
		emoji: "👰🏼",
		tag: "E1.0",
		description: "person with veil: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127997
		],
		status: "fully-qualified",
		emoji: "👰🏽",
		tag: "E1.0",
		description: "person with veil: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127998
		],
		status: "fully-qualified",
		emoji: "👰🏾",
		tag: "E1.0",
		description: "person with veil: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127999
		],
		status: "fully-qualified",
		emoji: "👰🏿",
		tag: "E1.0",
		description: "person with veil: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👰‍♂️",
		tag: "E13.0",
		description: "man with veil"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👰‍♂",
		tag: "E13.0",
		description: "man with veil"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👰🏻‍♂️",
		tag: "E13.0",
		description: "man with veil: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👰🏻‍♂",
		tag: "E13.0",
		description: "man with veil: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👰🏼‍♂️",
		tag: "E13.0",
		description: "man with veil: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👰🏼‍♂",
		tag: "E13.0",
		description: "man with veil: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👰🏽‍♂️",
		tag: "E13.0",
		description: "man with veil: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👰🏽‍♂",
		tag: "E13.0",
		description: "man with veil: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👰🏾‍♂️",
		tag: "E13.0",
		description: "man with veil: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👰🏾‍♂",
		tag: "E13.0",
		description: "man with veil: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👰🏿‍♂️",
		tag: "E13.0",
		description: "man with veil: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👰🏿‍♂",
		tag: "E13.0",
		description: "man with veil: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👰‍♀️",
		tag: "E13.0",
		description: "woman with veil"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👰‍♀",
		tag: "E13.0",
		description: "woman with veil"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👰🏻‍♀️",
		tag: "E13.0",
		description: "woman with veil: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👰🏻‍♀",
		tag: "E13.0",
		description: "woman with veil: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👰🏼‍♀️",
		tag: "E13.0",
		description: "woman with veil: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👰🏼‍♀",
		tag: "E13.0",
		description: "woman with veil: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👰🏽‍♀️",
		tag: "E13.0",
		description: "woman with veil: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👰🏽‍♀",
		tag: "E13.0",
		description: "woman with veil: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👰🏾‍♀️",
		tag: "E13.0",
		description: "woman with veil: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👰🏾‍♀",
		tag: "E13.0",
		description: "woman with veil: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👰🏿‍♀️",
		tag: "E13.0",
		description: "woman with veil: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128112,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👰🏿‍♀",
		tag: "E13.0",
		description: "woman with veil: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129328
		],
		status: "fully-qualified",
		emoji: "🤰",
		tag: "E3.0",
		description: "pregnant woman"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129328,
			127995
		],
		status: "fully-qualified",
		emoji: "🤰🏻",
		tag: "E3.0",
		description: "pregnant woman: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129328,
			127996
		],
		status: "fully-qualified",
		emoji: "🤰🏼",
		tag: "E3.0",
		description: "pregnant woman: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129328,
			127997
		],
		status: "fully-qualified",
		emoji: "🤰🏽",
		tag: "E3.0",
		description: "pregnant woman: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129328,
			127998
		],
		status: "fully-qualified",
		emoji: "🤰🏾",
		tag: "E3.0",
		description: "pregnant woman: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129328,
			127999
		],
		status: "fully-qualified",
		emoji: "🤰🏿",
		tag: "E3.0",
		description: "pregnant woman: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129329
		],
		status: "fully-qualified",
		emoji: "🤱",
		tag: "E5.0",
		description: "breast-feeding"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129329,
			127995
		],
		status: "fully-qualified",
		emoji: "🤱🏻",
		tag: "E5.0",
		description: "breast-feeding: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129329,
			127996
		],
		status: "fully-qualified",
		emoji: "🤱🏼",
		tag: "E5.0",
		description: "breast-feeding: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129329,
			127997
		],
		status: "fully-qualified",
		emoji: "🤱🏽",
		tag: "E5.0",
		description: "breast-feeding: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129329,
			127998
		],
		status: "fully-qualified",
		emoji: "🤱🏾",
		tag: "E5.0",
		description: "breast-feeding: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129329,
			127999
		],
		status: "fully-qualified",
		emoji: "🤱🏿",
		tag: "E5.0",
		description: "breast-feeding: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			8205,
			127868
		],
		status: "fully-qualified",
		emoji: "👩‍🍼",
		tag: "E13.0",
		description: "woman feeding baby"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127995,
			8205,
			127868
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🍼",
		tag: "E13.0",
		description: "woman feeding baby: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127996,
			8205,
			127868
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🍼",
		tag: "E13.0",
		description: "woman feeding baby: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127997,
			8205,
			127868
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🍼",
		tag: "E13.0",
		description: "woman feeding baby: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127998,
			8205,
			127868
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🍼",
		tag: "E13.0",
		description: "woman feeding baby: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128105,
			127999,
			8205,
			127868
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🍼",
		tag: "E13.0",
		description: "woman feeding baby: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			8205,
			127868
		],
		status: "fully-qualified",
		emoji: "👨‍🍼",
		tag: "E13.0",
		description: "man feeding baby"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127995,
			8205,
			127868
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🍼",
		tag: "E13.0",
		description: "man feeding baby: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127996,
			8205,
			127868
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🍼",
		tag: "E13.0",
		description: "man feeding baby: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127997,
			8205,
			127868
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🍼",
		tag: "E13.0",
		description: "man feeding baby: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127998,
			8205,
			127868
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🍼",
		tag: "E13.0",
		description: "man feeding baby: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			128104,
			127999,
			8205,
			127868
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🍼",
		tag: "E13.0",
		description: "man feeding baby: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			8205,
			127868
		],
		status: "fully-qualified",
		emoji: "🧑‍🍼",
		tag: "E13.0",
		description: "person feeding baby"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127995,
			8205,
			127868
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🍼",
		tag: "E13.0",
		description: "person feeding baby: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127996,
			8205,
			127868
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🍼",
		tag: "E13.0",
		description: "person feeding baby: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127997,
			8205,
			127868
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🍼",
		tag: "E13.0",
		description: "person feeding baby: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127998,
			8205,
			127868
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🍼",
		tag: "E13.0",
		description: "person feeding baby: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-role",
		codePoints: [
			129489,
			127999,
			8205,
			127868
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🍼",
		tag: "E13.0",
		description: "person feeding baby: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			128124
		],
		status: "fully-qualified",
		emoji: "👼",
		tag: "E0.6",
		description: "baby angel"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			128124,
			127995
		],
		status: "fully-qualified",
		emoji: "👼🏻",
		tag: "E1.0",
		description: "baby angel: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			128124,
			127996
		],
		status: "fully-qualified",
		emoji: "👼🏼",
		tag: "E1.0",
		description: "baby angel: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			128124,
			127997
		],
		status: "fully-qualified",
		emoji: "👼🏽",
		tag: "E1.0",
		description: "baby angel: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			128124,
			127998
		],
		status: "fully-qualified",
		emoji: "👼🏾",
		tag: "E1.0",
		description: "baby angel: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			128124,
			127999
		],
		status: "fully-qualified",
		emoji: "👼🏿",
		tag: "E1.0",
		description: "baby angel: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			127877
		],
		status: "fully-qualified",
		emoji: "🎅",
		tag: "E0.6",
		description: "Santa Claus"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			127877,
			127995
		],
		status: "fully-qualified",
		emoji: "🎅🏻",
		tag: "E1.0",
		description: "Santa Claus: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			127877,
			127996
		],
		status: "fully-qualified",
		emoji: "🎅🏼",
		tag: "E1.0",
		description: "Santa Claus: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			127877,
			127997
		],
		status: "fully-qualified",
		emoji: "🎅🏽",
		tag: "E1.0",
		description: "Santa Claus: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			127877,
			127998
		],
		status: "fully-qualified",
		emoji: "🎅🏾",
		tag: "E1.0",
		description: "Santa Claus: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			127877,
			127999
		],
		status: "fully-qualified",
		emoji: "🎅🏿",
		tag: "E1.0",
		description: "Santa Claus: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129334
		],
		status: "fully-qualified",
		emoji: "🤶",
		tag: "E3.0",
		description: "Mrs. Claus"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129334,
			127995
		],
		status: "fully-qualified",
		emoji: "🤶🏻",
		tag: "E3.0",
		description: "Mrs. Claus: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129334,
			127996
		],
		status: "fully-qualified",
		emoji: "🤶🏼",
		tag: "E3.0",
		description: "Mrs. Claus: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129334,
			127997
		],
		status: "fully-qualified",
		emoji: "🤶🏽",
		tag: "E3.0",
		description: "Mrs. Claus: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129334,
			127998
		],
		status: "fully-qualified",
		emoji: "🤶🏾",
		tag: "E3.0",
		description: "Mrs. Claus: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129334,
			127999
		],
		status: "fully-qualified",
		emoji: "🤶🏿",
		tag: "E3.0",
		description: "Mrs. Claus: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129489,
			8205,
			127876
		],
		status: "fully-qualified",
		emoji: "🧑‍🎄",
		tag: "E13.0",
		description: "mx claus"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129489,
			127995,
			8205,
			127876
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🎄",
		tag: "E13.0",
		description: "mx claus: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129489,
			127996,
			8205,
			127876
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🎄",
		tag: "E13.0",
		description: "mx claus: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129489,
			127997,
			8205,
			127876
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🎄",
		tag: "E13.0",
		description: "mx claus: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129489,
			127998,
			8205,
			127876
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🎄",
		tag: "E13.0",
		description: "mx claus: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129489,
			127999,
			8205,
			127876
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🎄",
		tag: "E13.0",
		description: "mx claus: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464
		],
		status: "fully-qualified",
		emoji: "🦸",
		tag: "E11.0",
		description: "superhero"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127995
		],
		status: "fully-qualified",
		emoji: "🦸🏻",
		tag: "E11.0",
		description: "superhero: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127996
		],
		status: "fully-qualified",
		emoji: "🦸🏼",
		tag: "E11.0",
		description: "superhero: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127997
		],
		status: "fully-qualified",
		emoji: "🦸🏽",
		tag: "E11.0",
		description: "superhero: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127998
		],
		status: "fully-qualified",
		emoji: "🦸🏾",
		tag: "E11.0",
		description: "superhero: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127999
		],
		status: "fully-qualified",
		emoji: "🦸🏿",
		tag: "E11.0",
		description: "superhero: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🦸‍♂️",
		tag: "E11.0",
		description: "man superhero"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🦸‍♂",
		tag: "E11.0",
		description: "man superhero"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🦸🏻‍♂️",
		tag: "E11.0",
		description: "man superhero: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🦸🏻‍♂",
		tag: "E11.0",
		description: "man superhero: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🦸🏼‍♂️",
		tag: "E11.0",
		description: "man superhero: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🦸🏼‍♂",
		tag: "E11.0",
		description: "man superhero: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🦸🏽‍♂️",
		tag: "E11.0",
		description: "man superhero: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🦸🏽‍♂",
		tag: "E11.0",
		description: "man superhero: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🦸🏾‍♂️",
		tag: "E11.0",
		description: "man superhero: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🦸🏾‍♂",
		tag: "E11.0",
		description: "man superhero: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🦸🏿‍♂️",
		tag: "E11.0",
		description: "man superhero: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🦸🏿‍♂",
		tag: "E11.0",
		description: "man superhero: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🦸‍♀️",
		tag: "E11.0",
		description: "woman superhero"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🦸‍♀",
		tag: "E11.0",
		description: "woman superhero"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🦸🏻‍♀️",
		tag: "E11.0",
		description: "woman superhero: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🦸🏻‍♀",
		tag: "E11.0",
		description: "woman superhero: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🦸🏼‍♀️",
		tag: "E11.0",
		description: "woman superhero: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🦸🏼‍♀",
		tag: "E11.0",
		description: "woman superhero: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🦸🏽‍♀️",
		tag: "E11.0",
		description: "woman superhero: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🦸🏽‍♀",
		tag: "E11.0",
		description: "woman superhero: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🦸🏾‍♀️",
		tag: "E11.0",
		description: "woman superhero: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🦸🏾‍♀",
		tag: "E11.0",
		description: "woman superhero: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🦸🏿‍♀️",
		tag: "E11.0",
		description: "woman superhero: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129464,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🦸🏿‍♀",
		tag: "E11.0",
		description: "woman superhero: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465
		],
		status: "fully-qualified",
		emoji: "🦹",
		tag: "E11.0",
		description: "supervillain"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127995
		],
		status: "fully-qualified",
		emoji: "🦹🏻",
		tag: "E11.0",
		description: "supervillain: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127996
		],
		status: "fully-qualified",
		emoji: "🦹🏼",
		tag: "E11.0",
		description: "supervillain: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127997
		],
		status: "fully-qualified",
		emoji: "🦹🏽",
		tag: "E11.0",
		description: "supervillain: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127998
		],
		status: "fully-qualified",
		emoji: "🦹🏾",
		tag: "E11.0",
		description: "supervillain: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127999
		],
		status: "fully-qualified",
		emoji: "🦹🏿",
		tag: "E11.0",
		description: "supervillain: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🦹‍♂️",
		tag: "E11.0",
		description: "man supervillain"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🦹‍♂",
		tag: "E11.0",
		description: "man supervillain"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🦹🏻‍♂️",
		tag: "E11.0",
		description: "man supervillain: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🦹🏻‍♂",
		tag: "E11.0",
		description: "man supervillain: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🦹🏼‍♂️",
		tag: "E11.0",
		description: "man supervillain: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🦹🏼‍♂",
		tag: "E11.0",
		description: "man supervillain: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🦹🏽‍♂️",
		tag: "E11.0",
		description: "man supervillain: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🦹🏽‍♂",
		tag: "E11.0",
		description: "man supervillain: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🦹🏾‍♂️",
		tag: "E11.0",
		description: "man supervillain: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🦹🏾‍♂",
		tag: "E11.0",
		description: "man supervillain: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🦹🏿‍♂️",
		tag: "E11.0",
		description: "man supervillain: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🦹🏿‍♂",
		tag: "E11.0",
		description: "man supervillain: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🦹‍♀️",
		tag: "E11.0",
		description: "woman supervillain"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🦹‍♀",
		tag: "E11.0",
		description: "woman supervillain"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🦹🏻‍♀️",
		tag: "E11.0",
		description: "woman supervillain: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🦹🏻‍♀",
		tag: "E11.0",
		description: "woman supervillain: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🦹🏼‍♀️",
		tag: "E11.0",
		description: "woman supervillain: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🦹🏼‍♀",
		tag: "E11.0",
		description: "woman supervillain: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🦹🏽‍♀️",
		tag: "E11.0",
		description: "woman supervillain: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🦹🏽‍♀",
		tag: "E11.0",
		description: "woman supervillain: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🦹🏾‍♀️",
		tag: "E11.0",
		description: "woman supervillain: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🦹🏾‍♀",
		tag: "E11.0",
		description: "woman supervillain: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🦹🏿‍♀️",
		tag: "E11.0",
		description: "woman supervillain: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129465,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🦹🏿‍♀",
		tag: "E11.0",
		description: "woman supervillain: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497
		],
		status: "fully-qualified",
		emoji: "🧙",
		tag: "E5.0",
		description: "mage"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127995
		],
		status: "fully-qualified",
		emoji: "🧙🏻",
		tag: "E5.0",
		description: "mage: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127996
		],
		status: "fully-qualified",
		emoji: "🧙🏼",
		tag: "E5.0",
		description: "mage: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127997
		],
		status: "fully-qualified",
		emoji: "🧙🏽",
		tag: "E5.0",
		description: "mage: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127998
		],
		status: "fully-qualified",
		emoji: "🧙🏾",
		tag: "E5.0",
		description: "mage: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127999
		],
		status: "fully-qualified",
		emoji: "🧙🏿",
		tag: "E5.0",
		description: "mage: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧙‍♂️",
		tag: "E5.0",
		description: "man mage"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧙‍♂",
		tag: "E5.0",
		description: "man mage"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧙🏻‍♂️",
		tag: "E5.0",
		description: "man mage: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧙🏻‍♂",
		tag: "E5.0",
		description: "man mage: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧙🏼‍♂️",
		tag: "E5.0",
		description: "man mage: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧙🏼‍♂",
		tag: "E5.0",
		description: "man mage: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧙🏽‍♂️",
		tag: "E5.0",
		description: "man mage: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧙🏽‍♂",
		tag: "E5.0",
		description: "man mage: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧙🏾‍♂️",
		tag: "E5.0",
		description: "man mage: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧙🏾‍♂",
		tag: "E5.0",
		description: "man mage: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧙🏿‍♂️",
		tag: "E5.0",
		description: "man mage: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧙🏿‍♂",
		tag: "E5.0",
		description: "man mage: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧙‍♀️",
		tag: "E5.0",
		description: "woman mage"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧙‍♀",
		tag: "E5.0",
		description: "woman mage"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧙🏻‍♀️",
		tag: "E5.0",
		description: "woman mage: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧙🏻‍♀",
		tag: "E5.0",
		description: "woman mage: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧙🏼‍♀️",
		tag: "E5.0",
		description: "woman mage: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧙🏼‍♀",
		tag: "E5.0",
		description: "woman mage: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧙🏽‍♀️",
		tag: "E5.0",
		description: "woman mage: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧙🏽‍♀",
		tag: "E5.0",
		description: "woman mage: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧙🏾‍♀️",
		tag: "E5.0",
		description: "woman mage: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧙🏾‍♀",
		tag: "E5.0",
		description: "woman mage: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧙🏿‍♀️",
		tag: "E5.0",
		description: "woman mage: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129497,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧙🏿‍♀",
		tag: "E5.0",
		description: "woman mage: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498
		],
		status: "fully-qualified",
		emoji: "🧚",
		tag: "E5.0",
		description: "fairy"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127995
		],
		status: "fully-qualified",
		emoji: "🧚🏻",
		tag: "E5.0",
		description: "fairy: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127996
		],
		status: "fully-qualified",
		emoji: "🧚🏼",
		tag: "E5.0",
		description: "fairy: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127997
		],
		status: "fully-qualified",
		emoji: "🧚🏽",
		tag: "E5.0",
		description: "fairy: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127998
		],
		status: "fully-qualified",
		emoji: "🧚🏾",
		tag: "E5.0",
		description: "fairy: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127999
		],
		status: "fully-qualified",
		emoji: "🧚🏿",
		tag: "E5.0",
		description: "fairy: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧚‍♂️",
		tag: "E5.0",
		description: "man fairy"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧚‍♂",
		tag: "E5.0",
		description: "man fairy"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧚🏻‍♂️",
		tag: "E5.0",
		description: "man fairy: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧚🏻‍♂",
		tag: "E5.0",
		description: "man fairy: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧚🏼‍♂️",
		tag: "E5.0",
		description: "man fairy: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧚🏼‍♂",
		tag: "E5.0",
		description: "man fairy: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧚🏽‍♂️",
		tag: "E5.0",
		description: "man fairy: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧚🏽‍♂",
		tag: "E5.0",
		description: "man fairy: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧚🏾‍♂️",
		tag: "E5.0",
		description: "man fairy: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧚🏾‍♂",
		tag: "E5.0",
		description: "man fairy: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧚🏿‍♂️",
		tag: "E5.0",
		description: "man fairy: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧚🏿‍♂",
		tag: "E5.0",
		description: "man fairy: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧚‍♀️",
		tag: "E5.0",
		description: "woman fairy"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧚‍♀",
		tag: "E5.0",
		description: "woman fairy"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧚🏻‍♀️",
		tag: "E5.0",
		description: "woman fairy: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧚🏻‍♀",
		tag: "E5.0",
		description: "woman fairy: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧚🏼‍♀️",
		tag: "E5.0",
		description: "woman fairy: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧚🏼‍♀",
		tag: "E5.0",
		description: "woman fairy: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧚🏽‍♀️",
		tag: "E5.0",
		description: "woman fairy: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧚🏽‍♀",
		tag: "E5.0",
		description: "woman fairy: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧚🏾‍♀️",
		tag: "E5.0",
		description: "woman fairy: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧚🏾‍♀",
		tag: "E5.0",
		description: "woman fairy: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧚🏿‍♀️",
		tag: "E5.0",
		description: "woman fairy: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129498,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧚🏿‍♀",
		tag: "E5.0",
		description: "woman fairy: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499
		],
		status: "fully-qualified",
		emoji: "🧛",
		tag: "E5.0",
		description: "vampire"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127995
		],
		status: "fully-qualified",
		emoji: "🧛🏻",
		tag: "E5.0",
		description: "vampire: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127996
		],
		status: "fully-qualified",
		emoji: "🧛🏼",
		tag: "E5.0",
		description: "vampire: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127997
		],
		status: "fully-qualified",
		emoji: "🧛🏽",
		tag: "E5.0",
		description: "vampire: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127998
		],
		status: "fully-qualified",
		emoji: "🧛🏾",
		tag: "E5.0",
		description: "vampire: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127999
		],
		status: "fully-qualified",
		emoji: "🧛🏿",
		tag: "E5.0",
		description: "vampire: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧛‍♂️",
		tag: "E5.0",
		description: "man vampire"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧛‍♂",
		tag: "E5.0",
		description: "man vampire"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧛🏻‍♂️",
		tag: "E5.0",
		description: "man vampire: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧛🏻‍♂",
		tag: "E5.0",
		description: "man vampire: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧛🏼‍♂️",
		tag: "E5.0",
		description: "man vampire: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧛🏼‍♂",
		tag: "E5.0",
		description: "man vampire: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧛🏽‍♂️",
		tag: "E5.0",
		description: "man vampire: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧛🏽‍♂",
		tag: "E5.0",
		description: "man vampire: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧛🏾‍♂️",
		tag: "E5.0",
		description: "man vampire: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧛🏾‍♂",
		tag: "E5.0",
		description: "man vampire: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧛🏿‍♂️",
		tag: "E5.0",
		description: "man vampire: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧛🏿‍♂",
		tag: "E5.0",
		description: "man vampire: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧛‍♀️",
		tag: "E5.0",
		description: "woman vampire"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧛‍♀",
		tag: "E5.0",
		description: "woman vampire"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧛🏻‍♀️",
		tag: "E5.0",
		description: "woman vampire: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧛🏻‍♀",
		tag: "E5.0",
		description: "woman vampire: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧛🏼‍♀️",
		tag: "E5.0",
		description: "woman vampire: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧛🏼‍♀",
		tag: "E5.0",
		description: "woman vampire: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧛🏽‍♀️",
		tag: "E5.0",
		description: "woman vampire: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧛🏽‍♀",
		tag: "E5.0",
		description: "woman vampire: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧛🏾‍♀️",
		tag: "E5.0",
		description: "woman vampire: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧛🏾‍♀",
		tag: "E5.0",
		description: "woman vampire: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧛🏿‍♀️",
		tag: "E5.0",
		description: "woman vampire: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129499,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧛🏿‍♀",
		tag: "E5.0",
		description: "woman vampire: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500
		],
		status: "fully-qualified",
		emoji: "🧜",
		tag: "E5.0",
		description: "merperson"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127995
		],
		status: "fully-qualified",
		emoji: "🧜🏻",
		tag: "E5.0",
		description: "merperson: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127996
		],
		status: "fully-qualified",
		emoji: "🧜🏼",
		tag: "E5.0",
		description: "merperson: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127997
		],
		status: "fully-qualified",
		emoji: "🧜🏽",
		tag: "E5.0",
		description: "merperson: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127998
		],
		status: "fully-qualified",
		emoji: "🧜🏾",
		tag: "E5.0",
		description: "merperson: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127999
		],
		status: "fully-qualified",
		emoji: "🧜🏿",
		tag: "E5.0",
		description: "merperson: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧜‍♂️",
		tag: "E5.0",
		description: "merman"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧜‍♂",
		tag: "E5.0",
		description: "merman"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧜🏻‍♂️",
		tag: "E5.0",
		description: "merman: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧜🏻‍♂",
		tag: "E5.0",
		description: "merman: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧜🏼‍♂️",
		tag: "E5.0",
		description: "merman: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧜🏼‍♂",
		tag: "E5.0",
		description: "merman: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧜🏽‍♂️",
		tag: "E5.0",
		description: "merman: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧜🏽‍♂",
		tag: "E5.0",
		description: "merman: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧜🏾‍♂️",
		tag: "E5.0",
		description: "merman: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧜🏾‍♂",
		tag: "E5.0",
		description: "merman: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧜🏿‍♂️",
		tag: "E5.0",
		description: "merman: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧜🏿‍♂",
		tag: "E5.0",
		description: "merman: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧜‍♀️",
		tag: "E5.0",
		description: "mermaid"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧜‍♀",
		tag: "E5.0",
		description: "mermaid"
	},
	{
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
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧜🏻‍♀",
		tag: "E5.0",
		description: "mermaid: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧜🏼‍♀️",
		tag: "E5.0",
		description: "mermaid: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧜🏼‍♀",
		tag: "E5.0",
		description: "mermaid: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧜🏽‍♀️",
		tag: "E5.0",
		description: "mermaid: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧜🏽‍♀",
		tag: "E5.0",
		description: "mermaid: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧜🏾‍♀️",
		tag: "E5.0",
		description: "mermaid: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧜🏾‍♀",
		tag: "E5.0",
		description: "mermaid: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧜🏿‍♀️",
		tag: "E5.0",
		description: "mermaid: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129500,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧜🏿‍♀",
		tag: "E5.0",
		description: "mermaid: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501
		],
		status: "fully-qualified",
		emoji: "🧝",
		tag: "E5.0",
		description: "elf"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127995
		],
		status: "fully-qualified",
		emoji: "🧝🏻",
		tag: "E5.0",
		description: "elf: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127996
		],
		status: "fully-qualified",
		emoji: "🧝🏼",
		tag: "E5.0",
		description: "elf: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127997
		],
		status: "fully-qualified",
		emoji: "🧝🏽",
		tag: "E5.0",
		description: "elf: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127998
		],
		status: "fully-qualified",
		emoji: "🧝🏾",
		tag: "E5.0",
		description: "elf: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127999
		],
		status: "fully-qualified",
		emoji: "🧝🏿",
		tag: "E5.0",
		description: "elf: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧝‍♂️",
		tag: "E5.0",
		description: "man elf"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧝‍♂",
		tag: "E5.0",
		description: "man elf"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧝🏻‍♂️",
		tag: "E5.0",
		description: "man elf: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧝🏻‍♂",
		tag: "E5.0",
		description: "man elf: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧝🏼‍♂️",
		tag: "E5.0",
		description: "man elf: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧝🏼‍♂",
		tag: "E5.0",
		description: "man elf: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧝🏽‍♂️",
		tag: "E5.0",
		description: "man elf: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧝🏽‍♂",
		tag: "E5.0",
		description: "man elf: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧝🏾‍♂️",
		tag: "E5.0",
		description: "man elf: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧝🏾‍♂",
		tag: "E5.0",
		description: "man elf: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧝🏿‍♂️",
		tag: "E5.0",
		description: "man elf: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧝🏿‍♂",
		tag: "E5.0",
		description: "man elf: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧝‍♀️",
		tag: "E5.0",
		description: "woman elf"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧝‍♀",
		tag: "E5.0",
		description: "woman elf"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧝🏻‍♀️",
		tag: "E5.0",
		description: "woman elf: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧝🏻‍♀",
		tag: "E5.0",
		description: "woman elf: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧝🏼‍♀️",
		tag: "E5.0",
		description: "woman elf: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧝🏼‍♀",
		tag: "E5.0",
		description: "woman elf: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧝🏽‍♀️",
		tag: "E5.0",
		description: "woman elf: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧝🏽‍♀",
		tag: "E5.0",
		description: "woman elf: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧝🏾‍♀️",
		tag: "E5.0",
		description: "woman elf: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧝🏾‍♀",
		tag: "E5.0",
		description: "woman elf: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧝🏿‍♀️",
		tag: "E5.0",
		description: "woman elf: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129501,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧝🏿‍♀",
		tag: "E5.0",
		description: "woman elf: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129502
		],
		status: "fully-qualified",
		emoji: "🧞",
		tag: "E5.0",
		description: "genie"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129502,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧞‍♂️",
		tag: "E5.0",
		description: "man genie"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129502,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧞‍♂",
		tag: "E5.0",
		description: "man genie"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129502,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧞‍♀️",
		tag: "E5.0",
		description: "woman genie"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129502,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧞‍♀",
		tag: "E5.0",
		description: "woman genie"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129503
		],
		status: "fully-qualified",
		emoji: "🧟",
		tag: "E5.0",
		description: "zombie"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129503,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧟‍♂️",
		tag: "E5.0",
		description: "man zombie"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129503,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧟‍♂",
		tag: "E5.0",
		description: "man zombie"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129503,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧟‍♀️",
		tag: "E5.0",
		description: "woman zombie"
	},
	{
		group: "People & Body",
		subgroup: "person-fantasy",
		codePoints: [
			129503,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧟‍♀",
		tag: "E5.0",
		description: "woman zombie"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134
		],
		status: "fully-qualified",
		emoji: "💆",
		tag: "E0.6",
		description: "person getting massage"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127995
		],
		status: "fully-qualified",
		emoji: "💆🏻",
		tag: "E1.0",
		description: "person getting massage: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127996
		],
		status: "fully-qualified",
		emoji: "💆🏼",
		tag: "E1.0",
		description: "person getting massage: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127997
		],
		status: "fully-qualified",
		emoji: "💆🏽",
		tag: "E1.0",
		description: "person getting massage: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127998
		],
		status: "fully-qualified",
		emoji: "💆🏾",
		tag: "E1.0",
		description: "person getting massage: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127999
		],
		status: "fully-qualified",
		emoji: "💆🏿",
		tag: "E1.0",
		description: "person getting massage: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💆‍♂️",
		tag: "E4.0",
		description: "man getting massage"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💆‍♂",
		tag: "E4.0",
		description: "man getting massage"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💆🏻‍♂️",
		tag: "E4.0",
		description: "man getting massage: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💆🏻‍♂",
		tag: "E4.0",
		description: "man getting massage: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💆🏼‍♂️",
		tag: "E4.0",
		description: "man getting massage: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💆🏼‍♂",
		tag: "E4.0",
		description: "man getting massage: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💆🏽‍♂️",
		tag: "E4.0",
		description: "man getting massage: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💆🏽‍♂",
		tag: "E4.0",
		description: "man getting massage: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💆🏾‍♂️",
		tag: "E4.0",
		description: "man getting massage: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💆🏾‍♂",
		tag: "E4.0",
		description: "man getting massage: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💆🏿‍♂️",
		tag: "E4.0",
		description: "man getting massage: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💆🏿‍♂",
		tag: "E4.0",
		description: "man getting massage: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💆‍♀️",
		tag: "E4.0",
		description: "woman getting massage"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💆‍♀",
		tag: "E4.0",
		description: "woman getting massage"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💆🏻‍♀️",
		tag: "E4.0",
		description: "woman getting massage: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💆🏻‍♀",
		tag: "E4.0",
		description: "woman getting massage: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💆🏼‍♀️",
		tag: "E4.0",
		description: "woman getting massage: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💆🏼‍♀",
		tag: "E4.0",
		description: "woman getting massage: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💆🏽‍♀️",
		tag: "E4.0",
		description: "woman getting massage: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💆🏽‍♀",
		tag: "E4.0",
		description: "woman getting massage: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💆🏾‍♀️",
		tag: "E4.0",
		description: "woman getting massage: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💆🏾‍♀",
		tag: "E4.0",
		description: "woman getting massage: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💆🏿‍♀️",
		tag: "E4.0",
		description: "woman getting massage: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128134,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💆🏿‍♀",
		tag: "E4.0",
		description: "woman getting massage: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135
		],
		status: "fully-qualified",
		emoji: "💇",
		tag: "E0.6",
		description: "person getting haircut"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127995
		],
		status: "fully-qualified",
		emoji: "💇🏻",
		tag: "E1.0",
		description: "person getting haircut: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127996
		],
		status: "fully-qualified",
		emoji: "💇🏼",
		tag: "E1.0",
		description: "person getting haircut: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127997
		],
		status: "fully-qualified",
		emoji: "💇🏽",
		tag: "E1.0",
		description: "person getting haircut: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127998
		],
		status: "fully-qualified",
		emoji: "💇🏾",
		tag: "E1.0",
		description: "person getting haircut: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127999
		],
		status: "fully-qualified",
		emoji: "💇🏿",
		tag: "E1.0",
		description: "person getting haircut: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💇‍♂️",
		tag: "E4.0",
		description: "man getting haircut"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💇‍♂",
		tag: "E4.0",
		description: "man getting haircut"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💇🏻‍♂️",
		tag: "E4.0",
		description: "man getting haircut: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💇🏻‍♂",
		tag: "E4.0",
		description: "man getting haircut: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💇🏼‍♂️",
		tag: "E4.0",
		description: "man getting haircut: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💇🏼‍♂",
		tag: "E4.0",
		description: "man getting haircut: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💇🏽‍♂️",
		tag: "E4.0",
		description: "man getting haircut: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💇🏽‍♂",
		tag: "E4.0",
		description: "man getting haircut: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💇🏾‍♂️",
		tag: "E4.0",
		description: "man getting haircut: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💇🏾‍♂",
		tag: "E4.0",
		description: "man getting haircut: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "💇🏿‍♂️",
		tag: "E4.0",
		description: "man getting haircut: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "💇🏿‍♂",
		tag: "E4.0",
		description: "man getting haircut: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💇‍♀️",
		tag: "E4.0",
		description: "woman getting haircut"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💇‍♀",
		tag: "E4.0",
		description: "woman getting haircut"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💇🏻‍♀️",
		tag: "E4.0",
		description: "woman getting haircut: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💇🏻‍♀",
		tag: "E4.0",
		description: "woman getting haircut: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💇🏼‍♀️",
		tag: "E4.0",
		description: "woman getting haircut: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💇🏼‍♀",
		tag: "E4.0",
		description: "woman getting haircut: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💇🏽‍♀️",
		tag: "E4.0",
		description: "woman getting haircut: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💇🏽‍♀",
		tag: "E4.0",
		description: "woman getting haircut: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💇🏾‍♀️",
		tag: "E4.0",
		description: "woman getting haircut: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💇🏾‍♀",
		tag: "E4.0",
		description: "woman getting haircut: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "💇🏿‍♀️",
		tag: "E4.0",
		description: "woman getting haircut: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128135,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "💇🏿‍♀",
		tag: "E4.0",
		description: "woman getting haircut: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694
		],
		status: "fully-qualified",
		emoji: "🚶",
		tag: "E0.6",
		description: "person walking"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127995
		],
		status: "fully-qualified",
		emoji: "🚶🏻",
		tag: "E1.0",
		description: "person walking: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127996
		],
		status: "fully-qualified",
		emoji: "🚶🏼",
		tag: "E1.0",
		description: "person walking: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127997
		],
		status: "fully-qualified",
		emoji: "🚶🏽",
		tag: "E1.0",
		description: "person walking: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127998
		],
		status: "fully-qualified",
		emoji: "🚶🏾",
		tag: "E1.0",
		description: "person walking: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127999
		],
		status: "fully-qualified",
		emoji: "🚶🏿",
		tag: "E1.0",
		description: "person walking: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚶‍♂️",
		tag: "E4.0",
		description: "man walking"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚶‍♂",
		tag: "E4.0",
		description: "man walking"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚶🏻‍♂️",
		tag: "E4.0",
		description: "man walking: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚶🏻‍♂",
		tag: "E4.0",
		description: "man walking: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚶🏼‍♂️",
		tag: "E4.0",
		description: "man walking: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚶🏼‍♂",
		tag: "E4.0",
		description: "man walking: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚶🏽‍♂️",
		tag: "E4.0",
		description: "man walking: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚶🏽‍♂",
		tag: "E4.0",
		description: "man walking: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚶🏾‍♂️",
		tag: "E4.0",
		description: "man walking: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚶🏾‍♂",
		tag: "E4.0",
		description: "man walking: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚶🏿‍♂️",
		tag: "E4.0",
		description: "man walking: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚶🏿‍♂",
		tag: "E4.0",
		description: "man walking: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚶‍♀️",
		tag: "E4.0",
		description: "woman walking"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚶‍♀",
		tag: "E4.0",
		description: "woman walking"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚶🏻‍♀️",
		tag: "E4.0",
		description: "woman walking: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚶🏻‍♀",
		tag: "E4.0",
		description: "woman walking: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚶🏼‍♀️",
		tag: "E4.0",
		description: "woman walking: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚶🏼‍♀",
		tag: "E4.0",
		description: "woman walking: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚶🏽‍♀️",
		tag: "E4.0",
		description: "woman walking: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚶🏽‍♀",
		tag: "E4.0",
		description: "woman walking: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚶🏾‍♀️",
		tag: "E4.0",
		description: "woman walking: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚶🏾‍♀",
		tag: "E4.0",
		description: "woman walking: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚶🏿‍♀️",
		tag: "E4.0",
		description: "woman walking: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128694,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚶🏿‍♀",
		tag: "E4.0",
		description: "woman walking: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485
		],
		status: "fully-qualified",
		emoji: "🧍",
		tag: "E12.0",
		description: "person standing"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127995
		],
		status: "fully-qualified",
		emoji: "🧍🏻",
		tag: "E12.0",
		description: "person standing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127996
		],
		status: "fully-qualified",
		emoji: "🧍🏼",
		tag: "E12.0",
		description: "person standing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127997
		],
		status: "fully-qualified",
		emoji: "🧍🏽",
		tag: "E12.0",
		description: "person standing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127998
		],
		status: "fully-qualified",
		emoji: "🧍🏾",
		tag: "E12.0",
		description: "person standing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127999
		],
		status: "fully-qualified",
		emoji: "🧍🏿",
		tag: "E12.0",
		description: "person standing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧍‍♂️",
		tag: "E12.0",
		description: "man standing"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧍‍♂",
		tag: "E12.0",
		description: "man standing"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧍🏻‍♂️",
		tag: "E12.0",
		description: "man standing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧍🏻‍♂",
		tag: "E12.0",
		description: "man standing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧍🏼‍♂️",
		tag: "E12.0",
		description: "man standing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧍🏼‍♂",
		tag: "E12.0",
		description: "man standing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧍🏽‍♂️",
		tag: "E12.0",
		description: "man standing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧍🏽‍♂",
		tag: "E12.0",
		description: "man standing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧍🏾‍♂️",
		tag: "E12.0",
		description: "man standing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧍🏾‍♂",
		tag: "E12.0",
		description: "man standing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧍🏿‍♂️",
		tag: "E12.0",
		description: "man standing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧍🏿‍♂",
		tag: "E12.0",
		description: "man standing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧍‍♀️",
		tag: "E12.0",
		description: "woman standing"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧍‍♀",
		tag: "E12.0",
		description: "woman standing"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧍🏻‍♀️",
		tag: "E12.0",
		description: "woman standing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧍🏻‍♀",
		tag: "E12.0",
		description: "woman standing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧍🏼‍♀️",
		tag: "E12.0",
		description: "woman standing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧍🏼‍♀",
		tag: "E12.0",
		description: "woman standing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧍🏽‍♀️",
		tag: "E12.0",
		description: "woman standing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧍🏽‍♀",
		tag: "E12.0",
		description: "woman standing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧍🏾‍♀️",
		tag: "E12.0",
		description: "woman standing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧍🏾‍♀",
		tag: "E12.0",
		description: "woman standing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧍🏿‍♀️",
		tag: "E12.0",
		description: "woman standing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129485,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧍🏿‍♀",
		tag: "E12.0",
		description: "woman standing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486
		],
		status: "fully-qualified",
		emoji: "🧎",
		tag: "E12.0",
		description: "person kneeling"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127995
		],
		status: "fully-qualified",
		emoji: "🧎🏻",
		tag: "E12.0",
		description: "person kneeling: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127996
		],
		status: "fully-qualified",
		emoji: "🧎🏼",
		tag: "E12.0",
		description: "person kneeling: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127997
		],
		status: "fully-qualified",
		emoji: "🧎🏽",
		tag: "E12.0",
		description: "person kneeling: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127998
		],
		status: "fully-qualified",
		emoji: "🧎🏾",
		tag: "E12.0",
		description: "person kneeling: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127999
		],
		status: "fully-qualified",
		emoji: "🧎🏿",
		tag: "E12.0",
		description: "person kneeling: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧎‍♂️",
		tag: "E12.0",
		description: "man kneeling"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧎‍♂",
		tag: "E12.0",
		description: "man kneeling"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧎🏻‍♂️",
		tag: "E12.0",
		description: "man kneeling: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧎🏻‍♂",
		tag: "E12.0",
		description: "man kneeling: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧎🏼‍♂️",
		tag: "E12.0",
		description: "man kneeling: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧎🏼‍♂",
		tag: "E12.0",
		description: "man kneeling: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧎🏽‍♂️",
		tag: "E12.0",
		description: "man kneeling: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧎🏽‍♂",
		tag: "E12.0",
		description: "man kneeling: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧎🏾‍♂️",
		tag: "E12.0",
		description: "man kneeling: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧎🏾‍♂",
		tag: "E12.0",
		description: "man kneeling: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧎🏿‍♂️",
		tag: "E12.0",
		description: "man kneeling: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧎🏿‍♂",
		tag: "E12.0",
		description: "man kneeling: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧎‍♀️",
		tag: "E12.0",
		description: "woman kneeling"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧎‍♀",
		tag: "E12.0",
		description: "woman kneeling"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧎🏻‍♀️",
		tag: "E12.0",
		description: "woman kneeling: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧎🏻‍♀",
		tag: "E12.0",
		description: "woman kneeling: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧎🏼‍♀️",
		tag: "E12.0",
		description: "woman kneeling: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧎🏼‍♀",
		tag: "E12.0",
		description: "woman kneeling: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧎🏽‍♀️",
		tag: "E12.0",
		description: "woman kneeling: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧎🏽‍♀",
		tag: "E12.0",
		description: "woman kneeling: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧎🏾‍♀️",
		tag: "E12.0",
		description: "woman kneeling: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧎🏾‍♀",
		tag: "E12.0",
		description: "woman kneeling: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧎🏿‍♀️",
		tag: "E12.0",
		description: "woman kneeling: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129486,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧎🏿‍♀",
		tag: "E12.0",
		description: "woman kneeling: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129489,
			8205,
			129455
		],
		status: "fully-qualified",
		emoji: "🧑‍🦯",
		tag: "E12.1",
		description: "person with white cane"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129489,
			127995,
			8205,
			129455
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🦯",
		tag: "E12.1",
		description: "person with white cane: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129489,
			127996,
			8205,
			129455
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🦯",
		tag: "E12.1",
		description: "person with white cane: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129489,
			127997,
			8205,
			129455
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🦯",
		tag: "E12.1",
		description: "person with white cane: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129489,
			127998,
			8205,
			129455
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🦯",
		tag: "E12.1",
		description: "person with white cane: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129489,
			127999,
			8205,
			129455
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🦯",
		tag: "E12.1",
		description: "person with white cane: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128104,
			8205,
			129455
		],
		status: "fully-qualified",
		emoji: "👨‍🦯",
		tag: "E12.0",
		description: "man with white cane"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128104,
			127995,
			8205,
			129455
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🦯",
		tag: "E12.0",
		description: "man with white cane: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128104,
			127996,
			8205,
			129455
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🦯",
		tag: "E12.0",
		description: "man with white cane: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128104,
			127997,
			8205,
			129455
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🦯",
		tag: "E12.0",
		description: "man with white cane: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128104,
			127998,
			8205,
			129455
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🦯",
		tag: "E12.0",
		description: "man with white cane: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128104,
			127999,
			8205,
			129455
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🦯",
		tag: "E12.0",
		description: "man with white cane: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128105,
			8205,
			129455
		],
		status: "fully-qualified",
		emoji: "👩‍🦯",
		tag: "E12.0",
		description: "woman with white cane"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128105,
			127995,
			8205,
			129455
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🦯",
		tag: "E12.0",
		description: "woman with white cane: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128105,
			127996,
			8205,
			129455
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🦯",
		tag: "E12.0",
		description: "woman with white cane: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128105,
			127997,
			8205,
			129455
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🦯",
		tag: "E12.0",
		description: "woman with white cane: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128105,
			127998,
			8205,
			129455
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🦯",
		tag: "E12.0",
		description: "woman with white cane: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128105,
			127999,
			8205,
			129455
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🦯",
		tag: "E12.0",
		description: "woman with white cane: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129489,
			8205,
			129468
		],
		status: "fully-qualified",
		emoji: "🧑‍🦼",
		tag: "E12.1",
		description: "person in motorized wheelchair"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129489,
			127995,
			8205,
			129468
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🦼",
		tag: "E12.1",
		description: "person in motorized wheelchair: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129489,
			127996,
			8205,
			129468
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🦼",
		tag: "E12.1",
		description: "person in motorized wheelchair: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129489,
			127997,
			8205,
			129468
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🦼",
		tag: "E12.1",
		description: "person in motorized wheelchair: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129489,
			127998,
			8205,
			129468
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🦼",
		tag: "E12.1",
		description: "person in motorized wheelchair: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129489,
			127999,
			8205,
			129468
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🦼",
		tag: "E12.1",
		description: "person in motorized wheelchair: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128104,
			8205,
			129468
		],
		status: "fully-qualified",
		emoji: "👨‍🦼",
		tag: "E12.0",
		description: "man in motorized wheelchair"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128104,
			127995,
			8205,
			129468
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🦼",
		tag: "E12.0",
		description: "man in motorized wheelchair: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128104,
			127996,
			8205,
			129468
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🦼",
		tag: "E12.0",
		description: "man in motorized wheelchair: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128104,
			127997,
			8205,
			129468
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🦼",
		tag: "E12.0",
		description: "man in motorized wheelchair: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128104,
			127998,
			8205,
			129468
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🦼",
		tag: "E12.0",
		description: "man in motorized wheelchair: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128104,
			127999,
			8205,
			129468
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🦼",
		tag: "E12.0",
		description: "man in motorized wheelchair: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128105,
			8205,
			129468
		],
		status: "fully-qualified",
		emoji: "👩‍🦼",
		tag: "E12.0",
		description: "woman in motorized wheelchair"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128105,
			127995,
			8205,
			129468
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🦼",
		tag: "E12.0",
		description: "woman in motorized wheelchair: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128105,
			127996,
			8205,
			129468
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🦼",
		tag: "E12.0",
		description: "woman in motorized wheelchair: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128105,
			127997,
			8205,
			129468
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🦼",
		tag: "E12.0",
		description: "woman in motorized wheelchair: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128105,
			127998,
			8205,
			129468
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🦼",
		tag: "E12.0",
		description: "woman in motorized wheelchair: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128105,
			127999,
			8205,
			129468
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🦼",
		tag: "E12.0",
		description: "woman in motorized wheelchair: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129489,
			8205,
			129469
		],
		status: "fully-qualified",
		emoji: "🧑‍🦽",
		tag: "E12.1",
		description: "person in manual wheelchair"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129489,
			127995,
			8205,
			129469
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🦽",
		tag: "E12.1",
		description: "person in manual wheelchair: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129489,
			127996,
			8205,
			129469
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🦽",
		tag: "E12.1",
		description: "person in manual wheelchair: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129489,
			127997,
			8205,
			129469
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🦽",
		tag: "E12.1",
		description: "person in manual wheelchair: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129489,
			127998,
			8205,
			129469
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🦽",
		tag: "E12.1",
		description: "person in manual wheelchair: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129489,
			127999,
			8205,
			129469
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🦽",
		tag: "E12.1",
		description: "person in manual wheelchair: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128104,
			8205,
			129469
		],
		status: "fully-qualified",
		emoji: "👨‍🦽",
		tag: "E12.0",
		description: "man in manual wheelchair"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128104,
			127995,
			8205,
			129469
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🦽",
		tag: "E12.0",
		description: "man in manual wheelchair: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128104,
			127996,
			8205,
			129469
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🦽",
		tag: "E12.0",
		description: "man in manual wheelchair: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128104,
			127997,
			8205,
			129469
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🦽",
		tag: "E12.0",
		description: "man in manual wheelchair: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128104,
			127998,
			8205,
			129469
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🦽",
		tag: "E12.0",
		description: "man in manual wheelchair: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128104,
			127999,
			8205,
			129469
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🦽",
		tag: "E12.0",
		description: "man in manual wheelchair: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128105,
			8205,
			129469
		],
		status: "fully-qualified",
		emoji: "👩‍🦽",
		tag: "E12.0",
		description: "woman in manual wheelchair"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128105,
			127995,
			8205,
			129469
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🦽",
		tag: "E12.0",
		description: "woman in manual wheelchair: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128105,
			127996,
			8205,
			129469
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🦽",
		tag: "E12.0",
		description: "woman in manual wheelchair: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128105,
			127997,
			8205,
			129469
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🦽",
		tag: "E12.0",
		description: "woman in manual wheelchair: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128105,
			127998,
			8205,
			129469
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🦽",
		tag: "E12.0",
		description: "woman in manual wheelchair: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128105,
			127999,
			8205,
			129469
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🦽",
		tag: "E12.0",
		description: "woman in manual wheelchair: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939
		],
		status: "fully-qualified",
		emoji: "🏃",
		tag: "E0.6",
		description: "person running"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127995
		],
		status: "fully-qualified",
		emoji: "🏃🏻",
		tag: "E1.0",
		description: "person running: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127996
		],
		status: "fully-qualified",
		emoji: "🏃🏼",
		tag: "E1.0",
		description: "person running: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127997
		],
		status: "fully-qualified",
		emoji: "🏃🏽",
		tag: "E1.0",
		description: "person running: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127998
		],
		status: "fully-qualified",
		emoji: "🏃🏾",
		tag: "E1.0",
		description: "person running: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127999
		],
		status: "fully-qualified",
		emoji: "🏃🏿",
		tag: "E1.0",
		description: "person running: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏃‍♂️",
		tag: "E4.0",
		description: "man running"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏃‍♂",
		tag: "E4.0",
		description: "man running"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏃🏻‍♂️",
		tag: "E4.0",
		description: "man running: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏃🏻‍♂",
		tag: "E4.0",
		description: "man running: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏃🏼‍♂️",
		tag: "E4.0",
		description: "man running: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏃🏼‍♂",
		tag: "E4.0",
		description: "man running: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏃🏽‍♂️",
		tag: "E4.0",
		description: "man running: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏃🏽‍♂",
		tag: "E4.0",
		description: "man running: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏃🏾‍♂️",
		tag: "E4.0",
		description: "man running: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏃🏾‍♂",
		tag: "E4.0",
		description: "man running: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏃🏿‍♂️",
		tag: "E4.0",
		description: "man running: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏃🏿‍♂",
		tag: "E4.0",
		description: "man running: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏃‍♀️",
		tag: "E4.0",
		description: "woman running"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏃‍♀",
		tag: "E4.0",
		description: "woman running"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏃🏻‍♀️",
		tag: "E4.0",
		description: "woman running: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏃🏻‍♀",
		tag: "E4.0",
		description: "woman running: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏃🏼‍♀️",
		tag: "E4.0",
		description: "woman running: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏃🏼‍♀",
		tag: "E4.0",
		description: "woman running: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏃🏽‍♀️",
		tag: "E4.0",
		description: "woman running: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏃🏽‍♀",
		tag: "E4.0",
		description: "woman running: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏃🏾‍♀️",
		tag: "E4.0",
		description: "woman running: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏃🏾‍♀",
		tag: "E4.0",
		description: "woman running: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏃🏿‍♀️",
		tag: "E4.0",
		description: "woman running: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			127939,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏃🏿‍♀",
		tag: "E4.0",
		description: "woman running: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128131
		],
		status: "fully-qualified",
		emoji: "💃",
		tag: "E0.6",
		description: "woman dancing"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128131,
			127995
		],
		status: "fully-qualified",
		emoji: "💃🏻",
		tag: "E1.0",
		description: "woman dancing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128131,
			127996
		],
		status: "fully-qualified",
		emoji: "💃🏼",
		tag: "E1.0",
		description: "woman dancing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128131,
			127997
		],
		status: "fully-qualified",
		emoji: "💃🏽",
		tag: "E1.0",
		description: "woman dancing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128131,
			127998
		],
		status: "fully-qualified",
		emoji: "💃🏾",
		tag: "E1.0",
		description: "woman dancing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128131,
			127999
		],
		status: "fully-qualified",
		emoji: "💃🏿",
		tag: "E1.0",
		description: "woman dancing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128378
		],
		status: "fully-qualified",
		emoji: "🕺",
		tag: "E3.0",
		description: "man dancing"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128378,
			127995
		],
		status: "fully-qualified",
		emoji: "🕺🏻",
		tag: "E3.0",
		description: "man dancing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128378,
			127996
		],
		status: "fully-qualified",
		emoji: "🕺🏼",
		tag: "E3.0",
		description: "man dancing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128378,
			127997
		],
		status: "fully-qualified",
		emoji: "🕺🏽",
		tag: "E3.0",
		description: "man dancing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128378,
			127998
		],
		status: "fully-qualified",
		emoji: "🕺🏾",
		tag: "E3.0",
		description: "man dancing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128378,
			127999
		],
		status: "fully-qualified",
		emoji: "🕺🏿",
		tag: "E3.0",
		description: "man dancing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128372,
			65039
		],
		status: "fully-qualified",
		emoji: "🕴️",
		tag: "E0.7",
		description: "person in suit levitating"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128372
		],
		status: "unqualified",
		emoji: "🕴",
		tag: "E0.7",
		description: "person in suit levitating"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128372,
			127995
		],
		status: "fully-qualified",
		emoji: "🕴🏻",
		tag: "E4.0",
		description: "person in suit levitating: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128372,
			127996
		],
		status: "fully-qualified",
		emoji: "🕴🏼",
		tag: "E4.0",
		description: "person in suit levitating: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128372,
			127997
		],
		status: "fully-qualified",
		emoji: "🕴🏽",
		tag: "E4.0",
		description: "person in suit levitating: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128372,
			127998
		],
		status: "fully-qualified",
		emoji: "🕴🏾",
		tag: "E4.0",
		description: "person in suit levitating: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128372,
			127999
		],
		status: "fully-qualified",
		emoji: "🕴🏿",
		tag: "E4.0",
		description: "person in suit levitating: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128111
		],
		status: "fully-qualified",
		emoji: "👯",
		tag: "E0.6",
		description: "people with bunny ears"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128111,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "👯‍♂️",
		tag: "E4.0",
		description: "men with bunny ears"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128111,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "👯‍♂",
		tag: "E4.0",
		description: "men with bunny ears"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128111,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "👯‍♀️",
		tag: "E4.0",
		description: "women with bunny ears"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			128111,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "👯‍♀",
		tag: "E4.0",
		description: "women with bunny ears"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494
		],
		status: "fully-qualified",
		emoji: "🧖",
		tag: "E5.0",
		description: "person in steamy room"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127995
		],
		status: "fully-qualified",
		emoji: "🧖🏻",
		tag: "E5.0",
		description: "person in steamy room: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127996
		],
		status: "fully-qualified",
		emoji: "🧖🏼",
		tag: "E5.0",
		description: "person in steamy room: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127997
		],
		status: "fully-qualified",
		emoji: "🧖🏽",
		tag: "E5.0",
		description: "person in steamy room: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127998
		],
		status: "fully-qualified",
		emoji: "🧖🏾",
		tag: "E5.0",
		description: "person in steamy room: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127999
		],
		status: "fully-qualified",
		emoji: "🧖🏿",
		tag: "E5.0",
		description: "person in steamy room: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧖‍♂️",
		tag: "E5.0",
		description: "man in steamy room"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧖‍♂",
		tag: "E5.0",
		description: "man in steamy room"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧖🏻‍♂️",
		tag: "E5.0",
		description: "man in steamy room: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧖🏻‍♂",
		tag: "E5.0",
		description: "man in steamy room: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧖🏼‍♂️",
		tag: "E5.0",
		description: "man in steamy room: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧖🏼‍♂",
		tag: "E5.0",
		description: "man in steamy room: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧖🏽‍♂️",
		tag: "E5.0",
		description: "man in steamy room: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧖🏽‍♂",
		tag: "E5.0",
		description: "man in steamy room: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧖🏾‍♂️",
		tag: "E5.0",
		description: "man in steamy room: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧖🏾‍♂",
		tag: "E5.0",
		description: "man in steamy room: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧖🏿‍♂️",
		tag: "E5.0",
		description: "man in steamy room: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧖🏿‍♂",
		tag: "E5.0",
		description: "man in steamy room: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧖‍♀️",
		tag: "E5.0",
		description: "woman in steamy room"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧖‍♀",
		tag: "E5.0",
		description: "woman in steamy room"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧖🏻‍♀️",
		tag: "E5.0",
		description: "woman in steamy room: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧖🏻‍♀",
		tag: "E5.0",
		description: "woman in steamy room: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧖🏼‍♀️",
		tag: "E5.0",
		description: "woman in steamy room: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧖🏼‍♀",
		tag: "E5.0",
		description: "woman in steamy room: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧖🏽‍♀️",
		tag: "E5.0",
		description: "woman in steamy room: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧖🏽‍♀",
		tag: "E5.0",
		description: "woman in steamy room: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧖🏾‍♀️",
		tag: "E5.0",
		description: "woman in steamy room: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧖🏾‍♀",
		tag: "E5.0",
		description: "woman in steamy room: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧖🏿‍♀️",
		tag: "E5.0",
		description: "woman in steamy room: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129494,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧖🏿‍♀",
		tag: "E5.0",
		description: "woman in steamy room: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495
		],
		status: "fully-qualified",
		emoji: "🧗",
		tag: "E5.0",
		description: "person climbing"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127995
		],
		status: "fully-qualified",
		emoji: "🧗🏻",
		tag: "E5.0",
		description: "person climbing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127996
		],
		status: "fully-qualified",
		emoji: "🧗🏼",
		tag: "E5.0",
		description: "person climbing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127997
		],
		status: "fully-qualified",
		emoji: "🧗🏽",
		tag: "E5.0",
		description: "person climbing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127998
		],
		status: "fully-qualified",
		emoji: "🧗🏾",
		tag: "E5.0",
		description: "person climbing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127999
		],
		status: "fully-qualified",
		emoji: "🧗🏿",
		tag: "E5.0",
		description: "person climbing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧗‍♂️",
		tag: "E5.0",
		description: "man climbing"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧗‍♂",
		tag: "E5.0",
		description: "man climbing"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧗🏻‍♂️",
		tag: "E5.0",
		description: "man climbing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧗🏻‍♂",
		tag: "E5.0",
		description: "man climbing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧗🏼‍♂️",
		tag: "E5.0",
		description: "man climbing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧗🏼‍♂",
		tag: "E5.0",
		description: "man climbing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧗🏽‍♂️",
		tag: "E5.0",
		description: "man climbing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧗🏽‍♂",
		tag: "E5.0",
		description: "man climbing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧗🏾‍♂️",
		tag: "E5.0",
		description: "man climbing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧗🏾‍♂",
		tag: "E5.0",
		description: "man climbing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧗🏿‍♂️",
		tag: "E5.0",
		description: "man climbing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧗🏿‍♂",
		tag: "E5.0",
		description: "man climbing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧗‍♀️",
		tag: "E5.0",
		description: "woman climbing"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧗‍♀",
		tag: "E5.0",
		description: "woman climbing"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧗🏻‍♀️",
		tag: "E5.0",
		description: "woman climbing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧗🏻‍♀",
		tag: "E5.0",
		description: "woman climbing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧗🏼‍♀️",
		tag: "E5.0",
		description: "woman climbing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧗🏼‍♀",
		tag: "E5.0",
		description: "woman climbing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧗🏽‍♀️",
		tag: "E5.0",
		description: "woman climbing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧗🏽‍♀",
		tag: "E5.0",
		description: "woman climbing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧗🏾‍♀️",
		tag: "E5.0",
		description: "woman climbing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧗🏾‍♀",
		tag: "E5.0",
		description: "woman climbing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧗🏿‍♀️",
		tag: "E5.0",
		description: "woman climbing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-activity",
		codePoints: [
			129495,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧗🏿‍♀",
		tag: "E5.0",
		description: "woman climbing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129338
		],
		status: "fully-qualified",
		emoji: "🤺",
		tag: "E3.0",
		description: "person fencing"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127943
		],
		status: "fully-qualified",
		emoji: "🏇",
		tag: "E1.0",
		description: "horse racing"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127943,
			127995
		],
		status: "fully-qualified",
		emoji: "🏇🏻",
		tag: "E1.0",
		description: "horse racing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127943,
			127996
		],
		status: "fully-qualified",
		emoji: "🏇🏼",
		tag: "E1.0",
		description: "horse racing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127943,
			127997
		],
		status: "fully-qualified",
		emoji: "🏇🏽",
		tag: "E1.0",
		description: "horse racing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127943,
			127998
		],
		status: "fully-qualified",
		emoji: "🏇🏾",
		tag: "E1.0",
		description: "horse racing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127943,
			127999
		],
		status: "fully-qualified",
		emoji: "🏇🏿",
		tag: "E1.0",
		description: "horse racing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9975,
			65039
		],
		status: "fully-qualified",
		emoji: "⛷️",
		tag: "E0.7",
		description: "skier"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9975
		],
		status: "unqualified",
		emoji: "⛷",
		tag: "E0.7",
		description: "skier"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127938
		],
		status: "fully-qualified",
		emoji: "🏂",
		tag: "E0.6",
		description: "snowboarder"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127938,
			127995
		],
		status: "fully-qualified",
		emoji: "🏂🏻",
		tag: "E1.0",
		description: "snowboarder: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127938,
			127996
		],
		status: "fully-qualified",
		emoji: "🏂🏼",
		tag: "E1.0",
		description: "snowboarder: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127938,
			127997
		],
		status: "fully-qualified",
		emoji: "🏂🏽",
		tag: "E1.0",
		description: "snowboarder: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127938,
			127998
		],
		status: "fully-qualified",
		emoji: "🏂🏾",
		tag: "E1.0",
		description: "snowboarder: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127938,
			127999
		],
		status: "fully-qualified",
		emoji: "🏂🏿",
		tag: "E1.0",
		description: "snowboarder: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			65039
		],
		status: "fully-qualified",
		emoji: "🏌️",
		tag: "E0.7",
		description: "person golfing"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948
		],
		status: "unqualified",
		emoji: "🏌",
		tag: "E0.7",
		description: "person golfing"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127995
		],
		status: "fully-qualified",
		emoji: "🏌🏻",
		tag: "E4.0",
		description: "person golfing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127996
		],
		status: "fully-qualified",
		emoji: "🏌🏼",
		tag: "E4.0",
		description: "person golfing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127997
		],
		status: "fully-qualified",
		emoji: "🏌🏽",
		tag: "E4.0",
		description: "person golfing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127998
		],
		status: "fully-qualified",
		emoji: "🏌🏾",
		tag: "E4.0",
		description: "person golfing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127999
		],
		status: "fully-qualified",
		emoji: "🏌🏿",
		tag: "E4.0",
		description: "person golfing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			65039,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏌️‍♂️",
		tag: "E4.0",
		description: "man golfing"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			8205,
			9794,
			65039
		],
		status: "unqualified",
		emoji: "🏌‍♂️",
		tag: "E4.0",
		description: "man golfing"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			65039,
			8205,
			9794
		],
		status: "unqualified",
		emoji: "🏌️‍♂",
		tag: "E4.0",
		description: "man golfing"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			8205,
			9794
		],
		status: "unqualified",
		emoji: "🏌‍♂",
		tag: "E4.0",
		description: "man golfing"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏌🏻‍♂️",
		tag: "E4.0",
		description: "man golfing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏌🏻‍♂",
		tag: "E4.0",
		description: "man golfing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏌🏼‍♂️",
		tag: "E4.0",
		description: "man golfing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏌🏼‍♂",
		tag: "E4.0",
		description: "man golfing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏌🏽‍♂️",
		tag: "E4.0",
		description: "man golfing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏌🏽‍♂",
		tag: "E4.0",
		description: "man golfing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏌🏾‍♂️",
		tag: "E4.0",
		description: "man golfing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏌🏾‍♂",
		tag: "E4.0",
		description: "man golfing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏌🏿‍♂️",
		tag: "E4.0",
		description: "man golfing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏌🏿‍♂",
		tag: "E4.0",
		description: "man golfing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			65039,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏌️‍♀️",
		tag: "E4.0",
		description: "woman golfing"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			8205,
			9792,
			65039
		],
		status: "unqualified",
		emoji: "🏌‍♀️",
		tag: "E4.0",
		description: "woman golfing"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			65039,
			8205,
			9792
		],
		status: "unqualified",
		emoji: "🏌️‍♀",
		tag: "E4.0",
		description: "woman golfing"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			8205,
			9792
		],
		status: "unqualified",
		emoji: "🏌‍♀",
		tag: "E4.0",
		description: "woman golfing"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏌🏻‍♀️",
		tag: "E4.0",
		description: "woman golfing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏌🏻‍♀",
		tag: "E4.0",
		description: "woman golfing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏌🏼‍♀️",
		tag: "E4.0",
		description: "woman golfing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏌🏼‍♀",
		tag: "E4.0",
		description: "woman golfing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏌🏽‍♀️",
		tag: "E4.0",
		description: "woman golfing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏌🏽‍♀",
		tag: "E4.0",
		description: "woman golfing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏌🏾‍♀️",
		tag: "E4.0",
		description: "woman golfing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏌🏾‍♀",
		tag: "E4.0",
		description: "woman golfing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏌🏿‍♀️",
		tag: "E4.0",
		description: "woman golfing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127948,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏌🏿‍♀",
		tag: "E4.0",
		description: "woman golfing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940
		],
		status: "fully-qualified",
		emoji: "🏄",
		tag: "E0.6",
		description: "person surfing"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127995
		],
		status: "fully-qualified",
		emoji: "🏄🏻",
		tag: "E1.0",
		description: "person surfing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127996
		],
		status: "fully-qualified",
		emoji: "🏄🏼",
		tag: "E1.0",
		description: "person surfing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127997
		],
		status: "fully-qualified",
		emoji: "🏄🏽",
		tag: "E1.0",
		description: "person surfing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127998
		],
		status: "fully-qualified",
		emoji: "🏄🏾",
		tag: "E1.0",
		description: "person surfing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127999
		],
		status: "fully-qualified",
		emoji: "🏄🏿",
		tag: "E1.0",
		description: "person surfing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏄‍♂️",
		tag: "E4.0",
		description: "man surfing"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏄‍♂",
		tag: "E4.0",
		description: "man surfing"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏄🏻‍♂️",
		tag: "E4.0",
		description: "man surfing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏄🏻‍♂",
		tag: "E4.0",
		description: "man surfing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏄🏼‍♂️",
		tag: "E4.0",
		description: "man surfing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏄🏼‍♂",
		tag: "E4.0",
		description: "man surfing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏄🏽‍♂️",
		tag: "E4.0",
		description: "man surfing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏄🏽‍♂",
		tag: "E4.0",
		description: "man surfing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏄🏾‍♂️",
		tag: "E4.0",
		description: "man surfing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏄🏾‍♂",
		tag: "E4.0",
		description: "man surfing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏄🏿‍♂️",
		tag: "E4.0",
		description: "man surfing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏄🏿‍♂",
		tag: "E4.0",
		description: "man surfing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏄‍♀️",
		tag: "E4.0",
		description: "woman surfing"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏄‍♀",
		tag: "E4.0",
		description: "woman surfing"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏄🏻‍♀️",
		tag: "E4.0",
		description: "woman surfing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏄🏻‍♀",
		tag: "E4.0",
		description: "woman surfing: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏄🏼‍♀️",
		tag: "E4.0",
		description: "woman surfing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏄🏼‍♀",
		tag: "E4.0",
		description: "woman surfing: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏄🏽‍♀️",
		tag: "E4.0",
		description: "woman surfing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏄🏽‍♀",
		tag: "E4.0",
		description: "woman surfing: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏄🏾‍♀️",
		tag: "E4.0",
		description: "woman surfing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏄🏾‍♀",
		tag: "E4.0",
		description: "woman surfing: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏄🏿‍♀️",
		tag: "E4.0",
		description: "woman surfing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127940,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏄🏿‍♀",
		tag: "E4.0",
		description: "woman surfing: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675
		],
		status: "fully-qualified",
		emoji: "🚣",
		tag: "E1.0",
		description: "person rowing boat"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127995
		],
		status: "fully-qualified",
		emoji: "🚣🏻",
		tag: "E1.0",
		description: "person rowing boat: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127996
		],
		status: "fully-qualified",
		emoji: "🚣🏼",
		tag: "E1.0",
		description: "person rowing boat: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127997
		],
		status: "fully-qualified",
		emoji: "🚣🏽",
		tag: "E1.0",
		description: "person rowing boat: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127998
		],
		status: "fully-qualified",
		emoji: "🚣🏾",
		tag: "E1.0",
		description: "person rowing boat: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127999
		],
		status: "fully-qualified",
		emoji: "🚣🏿",
		tag: "E1.0",
		description: "person rowing boat: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚣‍♂️",
		tag: "E4.0",
		description: "man rowing boat"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚣‍♂",
		tag: "E4.0",
		description: "man rowing boat"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚣🏻‍♂️",
		tag: "E4.0",
		description: "man rowing boat: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚣🏻‍♂",
		tag: "E4.0",
		description: "man rowing boat: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚣🏼‍♂️",
		tag: "E4.0",
		description: "man rowing boat: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚣🏼‍♂",
		tag: "E4.0",
		description: "man rowing boat: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚣🏽‍♂️",
		tag: "E4.0",
		description: "man rowing boat: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚣🏽‍♂",
		tag: "E4.0",
		description: "man rowing boat: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚣🏾‍♂️",
		tag: "E4.0",
		description: "man rowing boat: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚣🏾‍♂",
		tag: "E4.0",
		description: "man rowing boat: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚣🏿‍♂️",
		tag: "E4.0",
		description: "man rowing boat: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚣🏿‍♂",
		tag: "E4.0",
		description: "man rowing boat: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚣‍♀️",
		tag: "E4.0",
		description: "woman rowing boat"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚣‍♀",
		tag: "E4.0",
		description: "woman rowing boat"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚣🏻‍♀️",
		tag: "E4.0",
		description: "woman rowing boat: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚣🏻‍♀",
		tag: "E4.0",
		description: "woman rowing boat: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚣🏼‍♀️",
		tag: "E4.0",
		description: "woman rowing boat: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚣🏼‍♀",
		tag: "E4.0",
		description: "woman rowing boat: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚣🏽‍♀️",
		tag: "E4.0",
		description: "woman rowing boat: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚣🏽‍♀",
		tag: "E4.0",
		description: "woman rowing boat: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚣🏾‍♀️",
		tag: "E4.0",
		description: "woman rowing boat: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚣🏾‍♀",
		tag: "E4.0",
		description: "woman rowing boat: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚣🏿‍♀️",
		tag: "E4.0",
		description: "woman rowing boat: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128675,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚣🏿‍♀",
		tag: "E4.0",
		description: "woman rowing boat: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946
		],
		status: "fully-qualified",
		emoji: "🏊",
		tag: "E0.6",
		description: "person swimming"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127995
		],
		status: "fully-qualified",
		emoji: "🏊🏻",
		tag: "E1.0",
		description: "person swimming: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127996
		],
		status: "fully-qualified",
		emoji: "🏊🏼",
		tag: "E1.0",
		description: "person swimming: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127997
		],
		status: "fully-qualified",
		emoji: "🏊🏽",
		tag: "E1.0",
		description: "person swimming: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127998
		],
		status: "fully-qualified",
		emoji: "🏊🏾",
		tag: "E1.0",
		description: "person swimming: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127999
		],
		status: "fully-qualified",
		emoji: "🏊🏿",
		tag: "E1.0",
		description: "person swimming: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏊‍♂️",
		tag: "E4.0",
		description: "man swimming"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏊‍♂",
		tag: "E4.0",
		description: "man swimming"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏊🏻‍♂️",
		tag: "E4.0",
		description: "man swimming: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏊🏻‍♂",
		tag: "E4.0",
		description: "man swimming: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏊🏼‍♂️",
		tag: "E4.0",
		description: "man swimming: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏊🏼‍♂",
		tag: "E4.0",
		description: "man swimming: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏊🏽‍♂️",
		tag: "E4.0",
		description: "man swimming: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏊🏽‍♂",
		tag: "E4.0",
		description: "man swimming: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏊🏾‍♂️",
		tag: "E4.0",
		description: "man swimming: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏊🏾‍♂",
		tag: "E4.0",
		description: "man swimming: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏊🏿‍♂️",
		tag: "E4.0",
		description: "man swimming: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏊🏿‍♂",
		tag: "E4.0",
		description: "man swimming: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏊‍♀️",
		tag: "E4.0",
		description: "woman swimming"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏊‍♀",
		tag: "E4.0",
		description: "woman swimming"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏊🏻‍♀️",
		tag: "E4.0",
		description: "woman swimming: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏊🏻‍♀",
		tag: "E4.0",
		description: "woman swimming: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏊🏼‍♀️",
		tag: "E4.0",
		description: "woman swimming: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏊🏼‍♀",
		tag: "E4.0",
		description: "woman swimming: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏊🏽‍♀️",
		tag: "E4.0",
		description: "woman swimming: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏊🏽‍♀",
		tag: "E4.0",
		description: "woman swimming: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏊🏾‍♀️",
		tag: "E4.0",
		description: "woman swimming: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏊🏾‍♀",
		tag: "E4.0",
		description: "woman swimming: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏊🏿‍♀️",
		tag: "E4.0",
		description: "woman swimming: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127946,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏊🏿‍♀",
		tag: "E4.0",
		description: "woman swimming: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			65039
		],
		status: "fully-qualified",
		emoji: "⛹️",
		tag: "E0.7",
		description: "person bouncing ball"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977
		],
		status: "unqualified",
		emoji: "⛹",
		tag: "E0.7",
		description: "person bouncing ball"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127995
		],
		status: "fully-qualified",
		emoji: "⛹🏻",
		tag: "E2.0",
		description: "person bouncing ball: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127996
		],
		status: "fully-qualified",
		emoji: "⛹🏼",
		tag: "E2.0",
		description: "person bouncing ball: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127997
		],
		status: "fully-qualified",
		emoji: "⛹🏽",
		tag: "E2.0",
		description: "person bouncing ball: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127998
		],
		status: "fully-qualified",
		emoji: "⛹🏾",
		tag: "E2.0",
		description: "person bouncing ball: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127999
		],
		status: "fully-qualified",
		emoji: "⛹🏿",
		tag: "E2.0",
		description: "person bouncing ball: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			65039,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "⛹️‍♂️",
		tag: "E4.0",
		description: "man bouncing ball"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			8205,
			9794,
			65039
		],
		status: "unqualified",
		emoji: "⛹‍♂️",
		tag: "E4.0",
		description: "man bouncing ball"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			65039,
			8205,
			9794
		],
		status: "unqualified",
		emoji: "⛹️‍♂",
		tag: "E4.0",
		description: "man bouncing ball"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			8205,
			9794
		],
		status: "unqualified",
		emoji: "⛹‍♂",
		tag: "E4.0",
		description: "man bouncing ball"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "⛹🏻‍♂️",
		tag: "E4.0",
		description: "man bouncing ball: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "⛹🏻‍♂",
		tag: "E4.0",
		description: "man bouncing ball: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "⛹🏼‍♂️",
		tag: "E4.0",
		description: "man bouncing ball: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "⛹🏼‍♂",
		tag: "E4.0",
		description: "man bouncing ball: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "⛹🏽‍♂️",
		tag: "E4.0",
		description: "man bouncing ball: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "⛹🏽‍♂",
		tag: "E4.0",
		description: "man bouncing ball: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "⛹🏾‍♂️",
		tag: "E4.0",
		description: "man bouncing ball: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "⛹🏾‍♂",
		tag: "E4.0",
		description: "man bouncing ball: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "⛹🏿‍♂️",
		tag: "E4.0",
		description: "man bouncing ball: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "⛹🏿‍♂",
		tag: "E4.0",
		description: "man bouncing ball: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			65039,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "⛹️‍♀️",
		tag: "E4.0",
		description: "woman bouncing ball"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			8205,
			9792,
			65039
		],
		status: "unqualified",
		emoji: "⛹‍♀️",
		tag: "E4.0",
		description: "woman bouncing ball"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			65039,
			8205,
			9792
		],
		status: "unqualified",
		emoji: "⛹️‍♀",
		tag: "E4.0",
		description: "woman bouncing ball"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			8205,
			9792
		],
		status: "unqualified",
		emoji: "⛹‍♀",
		tag: "E4.0",
		description: "woman bouncing ball"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "⛹🏻‍♀️",
		tag: "E4.0",
		description: "woman bouncing ball: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "⛹🏻‍♀",
		tag: "E4.0",
		description: "woman bouncing ball: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "⛹🏼‍♀️",
		tag: "E4.0",
		description: "woman bouncing ball: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "⛹🏼‍♀",
		tag: "E4.0",
		description: "woman bouncing ball: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "⛹🏽‍♀️",
		tag: "E4.0",
		description: "woman bouncing ball: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "⛹🏽‍♀",
		tag: "E4.0",
		description: "woman bouncing ball: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "⛹🏾‍♀️",
		tag: "E4.0",
		description: "woman bouncing ball: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "⛹🏾‍♀",
		tag: "E4.0",
		description: "woman bouncing ball: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "⛹🏿‍♀️",
		tag: "E4.0",
		description: "woman bouncing ball: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			9977,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "⛹🏿‍♀",
		tag: "E4.0",
		description: "woman bouncing ball: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			65039
		],
		status: "fully-qualified",
		emoji: "🏋️",
		tag: "E0.7",
		description: "person lifting weights"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947
		],
		status: "unqualified",
		emoji: "🏋",
		tag: "E0.7",
		description: "person lifting weights"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127995
		],
		status: "fully-qualified",
		emoji: "🏋🏻",
		tag: "E2.0",
		description: "person lifting weights: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127996
		],
		status: "fully-qualified",
		emoji: "🏋🏼",
		tag: "E2.0",
		description: "person lifting weights: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127997
		],
		status: "fully-qualified",
		emoji: "🏋🏽",
		tag: "E2.0",
		description: "person lifting weights: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127998
		],
		status: "fully-qualified",
		emoji: "🏋🏾",
		tag: "E2.0",
		description: "person lifting weights: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127999
		],
		status: "fully-qualified",
		emoji: "🏋🏿",
		tag: "E2.0",
		description: "person lifting weights: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			65039,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏋️‍♂️",
		tag: "E4.0",
		description: "man lifting weights"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			8205,
			9794,
			65039
		],
		status: "unqualified",
		emoji: "🏋‍♂️",
		tag: "E4.0",
		description: "man lifting weights"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			65039,
			8205,
			9794
		],
		status: "unqualified",
		emoji: "🏋️‍♂",
		tag: "E4.0",
		description: "man lifting weights"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			8205,
			9794
		],
		status: "unqualified",
		emoji: "🏋‍♂",
		tag: "E4.0",
		description: "man lifting weights"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏋🏻‍♂️",
		tag: "E4.0",
		description: "man lifting weights: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏋🏻‍♂",
		tag: "E4.0",
		description: "man lifting weights: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏋🏼‍♂️",
		tag: "E4.0",
		description: "man lifting weights: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏋🏼‍♂",
		tag: "E4.0",
		description: "man lifting weights: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏋🏽‍♂️",
		tag: "E4.0",
		description: "man lifting weights: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏋🏽‍♂",
		tag: "E4.0",
		description: "man lifting weights: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏋🏾‍♂️",
		tag: "E4.0",
		description: "man lifting weights: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏋🏾‍♂",
		tag: "E4.0",
		description: "man lifting weights: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🏋🏿‍♂️",
		tag: "E4.0",
		description: "man lifting weights: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🏋🏿‍♂",
		tag: "E4.0",
		description: "man lifting weights: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			65039,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏋️‍♀️",
		tag: "E4.0",
		description: "woman lifting weights"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			8205,
			9792,
			65039
		],
		status: "unqualified",
		emoji: "🏋‍♀️",
		tag: "E4.0",
		description: "woman lifting weights"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			65039,
			8205,
			9792
		],
		status: "unqualified",
		emoji: "🏋️‍♀",
		tag: "E4.0",
		description: "woman lifting weights"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			8205,
			9792
		],
		status: "unqualified",
		emoji: "🏋‍♀",
		tag: "E4.0",
		description: "woman lifting weights"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏋🏻‍♀️",
		tag: "E4.0",
		description: "woman lifting weights: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏋🏻‍♀",
		tag: "E4.0",
		description: "woman lifting weights: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏋🏼‍♀️",
		tag: "E4.0",
		description: "woman lifting weights: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏋🏼‍♀",
		tag: "E4.0",
		description: "woman lifting weights: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏋🏽‍♀️",
		tag: "E4.0",
		description: "woman lifting weights: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏋🏽‍♀",
		tag: "E4.0",
		description: "woman lifting weights: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏋🏾‍♀️",
		tag: "E4.0",
		description: "woman lifting weights: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏋🏾‍♀",
		tag: "E4.0",
		description: "woman lifting weights: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🏋🏿‍♀️",
		tag: "E4.0",
		description: "woman lifting weights: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			127947,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🏋🏿‍♀",
		tag: "E4.0",
		description: "woman lifting weights: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692
		],
		status: "fully-qualified",
		emoji: "🚴",
		tag: "E1.0",
		description: "person biking"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127995
		],
		status: "fully-qualified",
		emoji: "🚴🏻",
		tag: "E1.0",
		description: "person biking: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127996
		],
		status: "fully-qualified",
		emoji: "🚴🏼",
		tag: "E1.0",
		description: "person biking: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127997
		],
		status: "fully-qualified",
		emoji: "🚴🏽",
		tag: "E1.0",
		description: "person biking: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127998
		],
		status: "fully-qualified",
		emoji: "🚴🏾",
		tag: "E1.0",
		description: "person biking: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127999
		],
		status: "fully-qualified",
		emoji: "🚴🏿",
		tag: "E1.0",
		description: "person biking: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚴‍♂️",
		tag: "E4.0",
		description: "man biking"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚴‍♂",
		tag: "E4.0",
		description: "man biking"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚴🏻‍♂️",
		tag: "E4.0",
		description: "man biking: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚴🏻‍♂",
		tag: "E4.0",
		description: "man biking: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚴🏼‍♂️",
		tag: "E4.0",
		description: "man biking: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚴🏼‍♂",
		tag: "E4.0",
		description: "man biking: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚴🏽‍♂️",
		tag: "E4.0",
		description: "man biking: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚴🏽‍♂",
		tag: "E4.0",
		description: "man biking: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚴🏾‍♂️",
		tag: "E4.0",
		description: "man biking: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚴🏾‍♂",
		tag: "E4.0",
		description: "man biking: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚴🏿‍♂️",
		tag: "E4.0",
		description: "man biking: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚴🏿‍♂",
		tag: "E4.0",
		description: "man biking: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚴‍♀️",
		tag: "E4.0",
		description: "woman biking"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚴‍♀",
		tag: "E4.0",
		description: "woman biking"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚴🏻‍♀️",
		tag: "E4.0",
		description: "woman biking: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚴🏻‍♀",
		tag: "E4.0",
		description: "woman biking: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚴🏼‍♀️",
		tag: "E4.0",
		description: "woman biking: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚴🏼‍♀",
		tag: "E4.0",
		description: "woman biking: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚴🏽‍♀️",
		tag: "E4.0",
		description: "woman biking: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚴🏽‍♀",
		tag: "E4.0",
		description: "woman biking: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚴🏾‍♀️",
		tag: "E4.0",
		description: "woman biking: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚴🏾‍♀",
		tag: "E4.0",
		description: "woman biking: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚴🏿‍♀️",
		tag: "E4.0",
		description: "woman biking: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128692,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚴🏿‍♀",
		tag: "E4.0",
		description: "woman biking: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693
		],
		status: "fully-qualified",
		emoji: "🚵",
		tag: "E1.0",
		description: "person mountain biking"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127995
		],
		status: "fully-qualified",
		emoji: "🚵🏻",
		tag: "E1.0",
		description: "person mountain biking: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127996
		],
		status: "fully-qualified",
		emoji: "🚵🏼",
		tag: "E1.0",
		description: "person mountain biking: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127997
		],
		status: "fully-qualified",
		emoji: "🚵🏽",
		tag: "E1.0",
		description: "person mountain biking: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127998
		],
		status: "fully-qualified",
		emoji: "🚵🏾",
		tag: "E1.0",
		description: "person mountain biking: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127999
		],
		status: "fully-qualified",
		emoji: "🚵🏿",
		tag: "E1.0",
		description: "person mountain biking: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚵‍♂️",
		tag: "E4.0",
		description: "man mountain biking"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚵‍♂",
		tag: "E4.0",
		description: "man mountain biking"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚵🏻‍♂️",
		tag: "E4.0",
		description: "man mountain biking: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚵🏻‍♂",
		tag: "E4.0",
		description: "man mountain biking: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚵🏼‍♂️",
		tag: "E4.0",
		description: "man mountain biking: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚵🏼‍♂",
		tag: "E4.0",
		description: "man mountain biking: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚵🏽‍♂️",
		tag: "E4.0",
		description: "man mountain biking: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚵🏽‍♂",
		tag: "E4.0",
		description: "man mountain biking: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚵🏾‍♂️",
		tag: "E4.0",
		description: "man mountain biking: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚵🏾‍♂",
		tag: "E4.0",
		description: "man mountain biking: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🚵🏿‍♂️",
		tag: "E4.0",
		description: "man mountain biking: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🚵🏿‍♂",
		tag: "E4.0",
		description: "man mountain biking: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚵‍♀️",
		tag: "E4.0",
		description: "woman mountain biking"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚵‍♀",
		tag: "E4.0",
		description: "woman mountain biking"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚵🏻‍♀️",
		tag: "E4.0",
		description: "woman mountain biking: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚵🏻‍♀",
		tag: "E4.0",
		description: "woman mountain biking: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚵🏼‍♀️",
		tag: "E4.0",
		description: "woman mountain biking: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚵🏼‍♀",
		tag: "E4.0",
		description: "woman mountain biking: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚵🏽‍♀️",
		tag: "E4.0",
		description: "woman mountain biking: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚵🏽‍♀",
		tag: "E4.0",
		description: "woman mountain biking: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚵🏾‍♀️",
		tag: "E4.0",
		description: "woman mountain biking: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚵🏾‍♀",
		tag: "E4.0",
		description: "woman mountain biking: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🚵🏿‍♀️",
		tag: "E4.0",
		description: "woman mountain biking: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			128693,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🚵🏿‍♀",
		tag: "E4.0",
		description: "woman mountain biking: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336
		],
		status: "fully-qualified",
		emoji: "🤸",
		tag: "E3.0",
		description: "person cartwheeling"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127995
		],
		status: "fully-qualified",
		emoji: "🤸🏻",
		tag: "E3.0",
		description: "person cartwheeling: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127996
		],
		status: "fully-qualified",
		emoji: "🤸🏼",
		tag: "E3.0",
		description: "person cartwheeling: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127997
		],
		status: "fully-qualified",
		emoji: "🤸🏽",
		tag: "E3.0",
		description: "person cartwheeling: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127998
		],
		status: "fully-qualified",
		emoji: "🤸🏾",
		tag: "E3.0",
		description: "person cartwheeling: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127999
		],
		status: "fully-qualified",
		emoji: "🤸🏿",
		tag: "E3.0",
		description: "person cartwheeling: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤸‍♂️",
		tag: "E4.0",
		description: "man cartwheeling"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤸‍♂",
		tag: "E4.0",
		description: "man cartwheeling"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤸🏻‍♂️",
		tag: "E4.0",
		description: "man cartwheeling: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤸🏻‍♂",
		tag: "E4.0",
		description: "man cartwheeling: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤸🏼‍♂️",
		tag: "E4.0",
		description: "man cartwheeling: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤸🏼‍♂",
		tag: "E4.0",
		description: "man cartwheeling: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤸🏽‍♂️",
		tag: "E4.0",
		description: "man cartwheeling: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤸🏽‍♂",
		tag: "E4.0",
		description: "man cartwheeling: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤸🏾‍♂️",
		tag: "E4.0",
		description: "man cartwheeling: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤸🏾‍♂",
		tag: "E4.0",
		description: "man cartwheeling: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤸🏿‍♂️",
		tag: "E4.0",
		description: "man cartwheeling: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤸🏿‍♂",
		tag: "E4.0",
		description: "man cartwheeling: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤸‍♀️",
		tag: "E4.0",
		description: "woman cartwheeling"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤸‍♀",
		tag: "E4.0",
		description: "woman cartwheeling"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤸🏻‍♀️",
		tag: "E4.0",
		description: "woman cartwheeling: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤸🏻‍♀",
		tag: "E4.0",
		description: "woman cartwheeling: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤸🏼‍♀️",
		tag: "E4.0",
		description: "woman cartwheeling: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤸🏼‍♀",
		tag: "E4.0",
		description: "woman cartwheeling: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤸🏽‍♀️",
		tag: "E4.0",
		description: "woman cartwheeling: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤸🏽‍♀",
		tag: "E4.0",
		description: "woman cartwheeling: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤸🏾‍♀️",
		tag: "E4.0",
		description: "woman cartwheeling: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤸🏾‍♀",
		tag: "E4.0",
		description: "woman cartwheeling: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤸🏿‍♀️",
		tag: "E4.0",
		description: "woman cartwheeling: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129336,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤸🏿‍♀",
		tag: "E4.0",
		description: "woman cartwheeling: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129340
		],
		status: "fully-qualified",
		emoji: "🤼",
		tag: "E3.0",
		description: "people wrestling"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129340,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤼‍♂️",
		tag: "E4.0",
		description: "men wrestling"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129340,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤼‍♂",
		tag: "E4.0",
		description: "men wrestling"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129340,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤼‍♀️",
		tag: "E4.0",
		description: "women wrestling"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129340,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤼‍♀",
		tag: "E4.0",
		description: "women wrestling"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341
		],
		status: "fully-qualified",
		emoji: "🤽",
		tag: "E3.0",
		description: "person playing water polo"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127995
		],
		status: "fully-qualified",
		emoji: "🤽🏻",
		tag: "E3.0",
		description: "person playing water polo: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127996
		],
		status: "fully-qualified",
		emoji: "🤽🏼",
		tag: "E3.0",
		description: "person playing water polo: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127997
		],
		status: "fully-qualified",
		emoji: "🤽🏽",
		tag: "E3.0",
		description: "person playing water polo: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127998
		],
		status: "fully-qualified",
		emoji: "🤽🏾",
		tag: "E3.0",
		description: "person playing water polo: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127999
		],
		status: "fully-qualified",
		emoji: "🤽🏿",
		tag: "E3.0",
		description: "person playing water polo: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤽‍♂️",
		tag: "E4.0",
		description: "man playing water polo"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤽‍♂",
		tag: "E4.0",
		description: "man playing water polo"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤽🏻‍♂️",
		tag: "E4.0",
		description: "man playing water polo: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤽🏻‍♂",
		tag: "E4.0",
		description: "man playing water polo: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤽🏼‍♂️",
		tag: "E4.0",
		description: "man playing water polo: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤽🏼‍♂",
		tag: "E4.0",
		description: "man playing water polo: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤽🏽‍♂️",
		tag: "E4.0",
		description: "man playing water polo: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤽🏽‍♂",
		tag: "E4.0",
		description: "man playing water polo: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤽🏾‍♂️",
		tag: "E4.0",
		description: "man playing water polo: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤽🏾‍♂",
		tag: "E4.0",
		description: "man playing water polo: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤽🏿‍♂️",
		tag: "E4.0",
		description: "man playing water polo: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤽🏿‍♂",
		tag: "E4.0",
		description: "man playing water polo: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤽‍♀️",
		tag: "E4.0",
		description: "woman playing water polo"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤽‍♀",
		tag: "E4.0",
		description: "woman playing water polo"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤽🏻‍♀️",
		tag: "E4.0",
		description: "woman playing water polo: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤽🏻‍♀",
		tag: "E4.0",
		description: "woman playing water polo: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤽🏼‍♀️",
		tag: "E4.0",
		description: "woman playing water polo: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤽🏼‍♀",
		tag: "E4.0",
		description: "woman playing water polo: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤽🏽‍♀️",
		tag: "E4.0",
		description: "woman playing water polo: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤽🏽‍♀",
		tag: "E4.0",
		description: "woman playing water polo: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤽🏾‍♀️",
		tag: "E4.0",
		description: "woman playing water polo: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤽🏾‍♀",
		tag: "E4.0",
		description: "woman playing water polo: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤽🏿‍♀️",
		tag: "E4.0",
		description: "woman playing water polo: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129341,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤽🏿‍♀",
		tag: "E4.0",
		description: "woman playing water polo: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342
		],
		status: "fully-qualified",
		emoji: "🤾",
		tag: "E3.0",
		description: "person playing handball"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127995
		],
		status: "fully-qualified",
		emoji: "🤾🏻",
		tag: "E3.0",
		description: "person playing handball: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127996
		],
		status: "fully-qualified",
		emoji: "🤾🏼",
		tag: "E3.0",
		description: "person playing handball: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127997
		],
		status: "fully-qualified",
		emoji: "🤾🏽",
		tag: "E3.0",
		description: "person playing handball: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127998
		],
		status: "fully-qualified",
		emoji: "🤾🏾",
		tag: "E3.0",
		description: "person playing handball: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127999
		],
		status: "fully-qualified",
		emoji: "🤾🏿",
		tag: "E3.0",
		description: "person playing handball: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤾‍♂️",
		tag: "E4.0",
		description: "man playing handball"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤾‍♂",
		tag: "E4.0",
		description: "man playing handball"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤾🏻‍♂️",
		tag: "E4.0",
		description: "man playing handball: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤾🏻‍♂",
		tag: "E4.0",
		description: "man playing handball: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤾🏼‍♂️",
		tag: "E4.0",
		description: "man playing handball: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤾🏼‍♂",
		tag: "E4.0",
		description: "man playing handball: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤾🏽‍♂️",
		tag: "E4.0",
		description: "man playing handball: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤾🏽‍♂",
		tag: "E4.0",
		description: "man playing handball: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤾🏾‍♂️",
		tag: "E4.0",
		description: "man playing handball: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤾🏾‍♂",
		tag: "E4.0",
		description: "man playing handball: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤾🏿‍♂️",
		tag: "E4.0",
		description: "man playing handball: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤾🏿‍♂",
		tag: "E4.0",
		description: "man playing handball: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤾‍♀️",
		tag: "E4.0",
		description: "woman playing handball"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤾‍♀",
		tag: "E4.0",
		description: "woman playing handball"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤾🏻‍♀️",
		tag: "E4.0",
		description: "woman playing handball: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤾🏻‍♀",
		tag: "E4.0",
		description: "woman playing handball: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤾🏼‍♀️",
		tag: "E4.0",
		description: "woman playing handball: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤾🏼‍♀",
		tag: "E4.0",
		description: "woman playing handball: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤾🏽‍♀️",
		tag: "E4.0",
		description: "woman playing handball: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤾🏽‍♀",
		tag: "E4.0",
		description: "woman playing handball: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤾🏾‍♀️",
		tag: "E4.0",
		description: "woman playing handball: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤾🏾‍♀",
		tag: "E4.0",
		description: "woman playing handball: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤾🏿‍♀️",
		tag: "E4.0",
		description: "woman playing handball: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129342,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤾🏿‍♀",
		tag: "E4.0",
		description: "woman playing handball: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337
		],
		status: "fully-qualified",
		emoji: "🤹",
		tag: "E3.0",
		description: "person juggling"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127995
		],
		status: "fully-qualified",
		emoji: "🤹🏻",
		tag: "E3.0",
		description: "person juggling: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127996
		],
		status: "fully-qualified",
		emoji: "🤹🏼",
		tag: "E3.0",
		description: "person juggling: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127997
		],
		status: "fully-qualified",
		emoji: "🤹🏽",
		tag: "E3.0",
		description: "person juggling: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127998
		],
		status: "fully-qualified",
		emoji: "🤹🏾",
		tag: "E3.0",
		description: "person juggling: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127999
		],
		status: "fully-qualified",
		emoji: "🤹🏿",
		tag: "E3.0",
		description: "person juggling: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤹‍♂️",
		tag: "E4.0",
		description: "man juggling"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤹‍♂",
		tag: "E4.0",
		description: "man juggling"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤹🏻‍♂️",
		tag: "E4.0",
		description: "man juggling: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤹🏻‍♂",
		tag: "E4.0",
		description: "man juggling: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤹🏼‍♂️",
		tag: "E4.0",
		description: "man juggling: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤹🏼‍♂",
		tag: "E4.0",
		description: "man juggling: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤹🏽‍♂️",
		tag: "E4.0",
		description: "man juggling: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤹🏽‍♂",
		tag: "E4.0",
		description: "man juggling: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤹🏾‍♂️",
		tag: "E4.0",
		description: "man juggling: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤹🏾‍♂",
		tag: "E4.0",
		description: "man juggling: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🤹🏿‍♂️",
		tag: "E4.0",
		description: "man juggling: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🤹🏿‍♂",
		tag: "E4.0",
		description: "man juggling: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤹‍♀️",
		tag: "E4.0",
		description: "woman juggling"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤹‍♀",
		tag: "E4.0",
		description: "woman juggling"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤹🏻‍♀️",
		tag: "E4.0",
		description: "woman juggling: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤹🏻‍♀",
		tag: "E4.0",
		description: "woman juggling: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤹🏼‍♀️",
		tag: "E4.0",
		description: "woman juggling: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤹🏼‍♀",
		tag: "E4.0",
		description: "woman juggling: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤹🏽‍♀️",
		tag: "E4.0",
		description: "woman juggling: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤹🏽‍♀",
		tag: "E4.0",
		description: "woman juggling: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤹🏾‍♀️",
		tag: "E4.0",
		description: "woman juggling: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤹🏾‍♀",
		tag: "E4.0",
		description: "woman juggling: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🤹🏿‍♀️",
		tag: "E4.0",
		description: "woman juggling: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-sport",
		codePoints: [
			129337,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🤹🏿‍♀",
		tag: "E4.0",
		description: "woman juggling: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496
		],
		status: "fully-qualified",
		emoji: "🧘",
		tag: "E5.0",
		description: "person in lotus position"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127995
		],
		status: "fully-qualified",
		emoji: "🧘🏻",
		tag: "E5.0",
		description: "person in lotus position: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127996
		],
		status: "fully-qualified",
		emoji: "🧘🏼",
		tag: "E5.0",
		description: "person in lotus position: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127997
		],
		status: "fully-qualified",
		emoji: "🧘🏽",
		tag: "E5.0",
		description: "person in lotus position: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127998
		],
		status: "fully-qualified",
		emoji: "🧘🏾",
		tag: "E5.0",
		description: "person in lotus position: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127999
		],
		status: "fully-qualified",
		emoji: "🧘🏿",
		tag: "E5.0",
		description: "person in lotus position: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧘‍♂️",
		tag: "E5.0",
		description: "man in lotus position"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧘‍♂",
		tag: "E5.0",
		description: "man in lotus position"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127995,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧘🏻‍♂️",
		tag: "E5.0",
		description: "man in lotus position: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127995,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧘🏻‍♂",
		tag: "E5.0",
		description: "man in lotus position: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127996,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧘🏼‍♂️",
		tag: "E5.0",
		description: "man in lotus position: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127996,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧘🏼‍♂",
		tag: "E5.0",
		description: "man in lotus position: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127997,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧘🏽‍♂️",
		tag: "E5.0",
		description: "man in lotus position: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127997,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧘🏽‍♂",
		tag: "E5.0",
		description: "man in lotus position: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127998,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧘🏾‍♂️",
		tag: "E5.0",
		description: "man in lotus position: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127998,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧘🏾‍♂",
		tag: "E5.0",
		description: "man in lotus position: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127999,
			8205,
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "🧘🏿‍♂️",
		tag: "E5.0",
		description: "man in lotus position: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127999,
			8205,
			9794
		],
		status: "minimally-qualified",
		emoji: "🧘🏿‍♂",
		tag: "E5.0",
		description: "man in lotus position: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧘‍♀️",
		tag: "E5.0",
		description: "woman in lotus position"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧘‍♀",
		tag: "E5.0",
		description: "woman in lotus position"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127995,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧘🏻‍♀️",
		tag: "E5.0",
		description: "woman in lotus position: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127995,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧘🏻‍♀",
		tag: "E5.0",
		description: "woman in lotus position: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127996,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧘🏼‍♀️",
		tag: "E5.0",
		description: "woman in lotus position: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127996,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧘🏼‍♀",
		tag: "E5.0",
		description: "woman in lotus position: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127997,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧘🏽‍♀️",
		tag: "E5.0",
		description: "woman in lotus position: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127997,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧘🏽‍♀",
		tag: "E5.0",
		description: "woman in lotus position: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127998,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧘🏾‍♀️",
		tag: "E5.0",
		description: "woman in lotus position: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127998,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧘🏾‍♀",
		tag: "E5.0",
		description: "woman in lotus position: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127999,
			8205,
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "🧘🏿‍♀️",
		tag: "E5.0",
		description: "woman in lotus position: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			129496,
			127999,
			8205,
			9792
		],
		status: "minimally-qualified",
		emoji: "🧘🏿‍♀",
		tag: "E5.0",
		description: "woman in lotus position: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			128704
		],
		status: "fully-qualified",
		emoji: "🛀",
		tag: "E0.6",
		description: "person taking bath"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			128704,
			127995
		],
		status: "fully-qualified",
		emoji: "🛀🏻",
		tag: "E1.0",
		description: "person taking bath: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			128704,
			127996
		],
		status: "fully-qualified",
		emoji: "🛀🏼",
		tag: "E1.0",
		description: "person taking bath: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			128704,
			127997
		],
		status: "fully-qualified",
		emoji: "🛀🏽",
		tag: "E1.0",
		description: "person taking bath: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			128704,
			127998
		],
		status: "fully-qualified",
		emoji: "🛀🏾",
		tag: "E1.0",
		description: "person taking bath: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			128704,
			127999
		],
		status: "fully-qualified",
		emoji: "🛀🏿",
		tag: "E1.0",
		description: "person taking bath: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			128716
		],
		status: "fully-qualified",
		emoji: "🛌",
		tag: "E1.0",
		description: "person in bed"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			128716,
			127995
		],
		status: "fully-qualified",
		emoji: "🛌🏻",
		tag: "E4.0",
		description: "person in bed: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			128716,
			127996
		],
		status: "fully-qualified",
		emoji: "🛌🏼",
		tag: "E4.0",
		description: "person in bed: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			128716,
			127997
		],
		status: "fully-qualified",
		emoji: "🛌🏽",
		tag: "E4.0",
		description: "person in bed: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			128716,
			127998
		],
		status: "fully-qualified",
		emoji: "🛌🏾",
		tag: "E4.0",
		description: "person in bed: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "person-resting",
		codePoints: [
			128716,
			127999
		],
		status: "fully-qualified",
		emoji: "🛌🏿",
		tag: "E4.0",
		description: "person in bed: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			8205,
			129309,
			8205,
			129489
		],
		status: "fully-qualified",
		emoji: "🧑‍🤝‍🧑",
		tag: "E12.0",
		description: "people holding hands"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127995,
			8205,
			129309,
			8205,
			129489,
			127995
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🤝‍🧑🏻",
		tag: "E12.0",
		description: "people holding hands: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127995,
			8205,
			129309,
			8205,
			129489,
			127996
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🤝‍🧑🏼",
		tag: "E12.1",
		description: "people holding hands: light skin tone, medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127995,
			8205,
			129309,
			8205,
			129489,
			127997
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🤝‍🧑🏽",
		tag: "E12.1",
		description: "people holding hands: light skin tone, medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127995,
			8205,
			129309,
			8205,
			129489,
			127998
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🤝‍🧑🏾",
		tag: "E12.1",
		description: "people holding hands: light skin tone, medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127995,
			8205,
			129309,
			8205,
			129489,
			127999
		],
		status: "fully-qualified",
		emoji: "🧑🏻‍🤝‍🧑🏿",
		tag: "E12.1",
		description: "people holding hands: light skin tone, dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127996,
			8205,
			129309,
			8205,
			129489,
			127995
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🤝‍🧑🏻",
		tag: "E12.0",
		description: "people holding hands: medium-light skin tone, light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127996,
			8205,
			129309,
			8205,
			129489,
			127996
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🤝‍🧑🏼",
		tag: "E12.0",
		description: "people holding hands: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127996,
			8205,
			129309,
			8205,
			129489,
			127997
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🤝‍🧑🏽",
		tag: "E12.1",
		description: "people holding hands: medium-light skin tone, medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127996,
			8205,
			129309,
			8205,
			129489,
			127998
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🤝‍🧑🏾",
		tag: "E12.1",
		description: "people holding hands: medium-light skin tone, medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127996,
			8205,
			129309,
			8205,
			129489,
			127999
		],
		status: "fully-qualified",
		emoji: "🧑🏼‍🤝‍🧑🏿",
		tag: "E12.1",
		description: "people holding hands: medium-light skin tone, dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127997,
			8205,
			129309,
			8205,
			129489,
			127995
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🤝‍🧑🏻",
		tag: "E12.0",
		description: "people holding hands: medium skin tone, light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127997,
			8205,
			129309,
			8205,
			129489,
			127996
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🤝‍🧑🏼",
		tag: "E12.0",
		description: "people holding hands: medium skin tone, medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127997,
			8205,
			129309,
			8205,
			129489,
			127997
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🤝‍🧑🏽",
		tag: "E12.0",
		description: "people holding hands: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127997,
			8205,
			129309,
			8205,
			129489,
			127998
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🤝‍🧑🏾",
		tag: "E12.1",
		description: "people holding hands: medium skin tone, medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127997,
			8205,
			129309,
			8205,
			129489,
			127999
		],
		status: "fully-qualified",
		emoji: "🧑🏽‍🤝‍🧑🏿",
		tag: "E12.1",
		description: "people holding hands: medium skin tone, dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127998,
			8205,
			129309,
			8205,
			129489,
			127995
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🤝‍🧑🏻",
		tag: "E12.0",
		description: "people holding hands: medium-dark skin tone, light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127998,
			8205,
			129309,
			8205,
			129489,
			127996
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🤝‍🧑🏼",
		tag: "E12.0",
		description: "people holding hands: medium-dark skin tone, medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127998,
			8205,
			129309,
			8205,
			129489,
			127997
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🤝‍🧑🏽",
		tag: "E12.0",
		description: "people holding hands: medium-dark skin tone, medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127998,
			8205,
			129309,
			8205,
			129489,
			127998
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🤝‍🧑🏾",
		tag: "E12.0",
		description: "people holding hands: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127998,
			8205,
			129309,
			8205,
			129489,
			127999
		],
		status: "fully-qualified",
		emoji: "🧑🏾‍🤝‍🧑🏿",
		tag: "E12.1",
		description: "people holding hands: medium-dark skin tone, dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127999,
			8205,
			129309,
			8205,
			129489,
			127995
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🤝‍🧑🏻",
		tag: "E12.0",
		description: "people holding hands: dark skin tone, light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127999,
			8205,
			129309,
			8205,
			129489,
			127996
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🤝‍🧑🏼",
		tag: "E12.0",
		description: "people holding hands: dark skin tone, medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127999,
			8205,
			129309,
			8205,
			129489,
			127997
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🤝‍🧑🏽",
		tag: "E12.0",
		description: "people holding hands: dark skin tone, medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127999,
			8205,
			129309,
			8205,
			129489,
			127998
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🤝‍🧑🏾",
		tag: "E12.0",
		description: "people holding hands: dark skin tone, medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			129489,
			127999,
			8205,
			129309,
			8205,
			129489,
			127999
		],
		status: "fully-qualified",
		emoji: "🧑🏿‍🤝‍🧑🏿",
		tag: "E12.0",
		description: "people holding hands: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128109
		],
		status: "fully-qualified",
		emoji: "👭",
		tag: "E1.0",
		description: "women holding hands"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128109,
			127995
		],
		status: "fully-qualified",
		emoji: "👭🏻",
		tag: "E12.0",
		description: "women holding hands: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127995,
			8205,
			129309,
			8205,
			128105,
			127996
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🤝‍👩🏼",
		tag: "E12.1",
		description: "women holding hands: light skin tone, medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127995,
			8205,
			129309,
			8205,
			128105,
			127997
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🤝‍👩🏽",
		tag: "E12.1",
		description: "women holding hands: light skin tone, medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127995,
			8205,
			129309,
			8205,
			128105,
			127998
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🤝‍👩🏾",
		tag: "E12.1",
		description: "women holding hands: light skin tone, medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127995,
			8205,
			129309,
			8205,
			128105,
			127999
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🤝‍👩🏿",
		tag: "E12.1",
		description: "women holding hands: light skin tone, dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127996,
			8205,
			129309,
			8205,
			128105,
			127995
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🤝‍👩🏻",
		tag: "E12.0",
		description: "women holding hands: medium-light skin tone, light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128109,
			127996
		],
		status: "fully-qualified",
		emoji: "👭🏼",
		tag: "E12.0",
		description: "women holding hands: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127996,
			8205,
			129309,
			8205,
			128105,
			127997
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🤝‍👩🏽",
		tag: "E12.1",
		description: "women holding hands: medium-light skin tone, medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127996,
			8205,
			129309,
			8205,
			128105,
			127998
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🤝‍👩🏾",
		tag: "E12.1",
		description: "women holding hands: medium-light skin tone, medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127996,
			8205,
			129309,
			8205,
			128105,
			127999
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🤝‍👩🏿",
		tag: "E12.1",
		description: "women holding hands: medium-light skin tone, dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127997,
			8205,
			129309,
			8205,
			128105,
			127995
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🤝‍👩🏻",
		tag: "E12.0",
		description: "women holding hands: medium skin tone, light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127997,
			8205,
			129309,
			8205,
			128105,
			127996
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🤝‍👩🏼",
		tag: "E12.0",
		description: "women holding hands: medium skin tone, medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128109,
			127997
		],
		status: "fully-qualified",
		emoji: "👭🏽",
		tag: "E12.0",
		description: "women holding hands: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127997,
			8205,
			129309,
			8205,
			128105,
			127998
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🤝‍👩🏾",
		tag: "E12.1",
		description: "women holding hands: medium skin tone, medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127997,
			8205,
			129309,
			8205,
			128105,
			127999
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🤝‍👩🏿",
		tag: "E12.1",
		description: "women holding hands: medium skin tone, dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127998,
			8205,
			129309,
			8205,
			128105,
			127995
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🤝‍👩🏻",
		tag: "E12.0",
		description: "women holding hands: medium-dark skin tone, light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127998,
			8205,
			129309,
			8205,
			128105,
			127996
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🤝‍👩🏼",
		tag: "E12.0",
		description: "women holding hands: medium-dark skin tone, medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127998,
			8205,
			129309,
			8205,
			128105,
			127997
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🤝‍👩🏽",
		tag: "E12.0",
		description: "women holding hands: medium-dark skin tone, medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128109,
			127998
		],
		status: "fully-qualified",
		emoji: "👭🏾",
		tag: "E12.0",
		description: "women holding hands: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127998,
			8205,
			129309,
			8205,
			128105,
			127999
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🤝‍👩🏿",
		tag: "E12.1",
		description: "women holding hands: medium-dark skin tone, dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127999,
			8205,
			129309,
			8205,
			128105,
			127995
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🤝‍👩🏻",
		tag: "E12.0",
		description: "women holding hands: dark skin tone, light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127999,
			8205,
			129309,
			8205,
			128105,
			127996
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🤝‍👩🏼",
		tag: "E12.0",
		description: "women holding hands: dark skin tone, medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127999,
			8205,
			129309,
			8205,
			128105,
			127997
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🤝‍👩🏽",
		tag: "E12.0",
		description: "women holding hands: dark skin tone, medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127999,
			8205,
			129309,
			8205,
			128105,
			127998
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🤝‍👩🏾",
		tag: "E12.0",
		description: "women holding hands: dark skin tone, medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128109,
			127999
		],
		status: "fully-qualified",
		emoji: "👭🏿",
		tag: "E12.0",
		description: "women holding hands: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128107
		],
		status: "fully-qualified",
		emoji: "👫",
		tag: "E0.6",
		description: "woman and man holding hands"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128107,
			127995
		],
		status: "fully-qualified",
		emoji: "👫🏻",
		tag: "E12.0",
		description: "woman and man holding hands: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127995,
			8205,
			129309,
			8205,
			128104,
			127996
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🤝‍👨🏼",
		tag: "E12.0",
		description: "woman and man holding hands: light skin tone, medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127995,
			8205,
			129309,
			8205,
			128104,
			127997
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🤝‍👨🏽",
		tag: "E12.0",
		description: "woman and man holding hands: light skin tone, medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127995,
			8205,
			129309,
			8205,
			128104,
			127998
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🤝‍👨🏾",
		tag: "E12.0",
		description: "woman and man holding hands: light skin tone, medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127995,
			8205,
			129309,
			8205,
			128104,
			127999
		],
		status: "fully-qualified",
		emoji: "👩🏻‍🤝‍👨🏿",
		tag: "E12.0",
		description: "woman and man holding hands: light skin tone, dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127996,
			8205,
			129309,
			8205,
			128104,
			127995
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🤝‍👨🏻",
		tag: "E12.0",
		description: "woman and man holding hands: medium-light skin tone, light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128107,
			127996
		],
		status: "fully-qualified",
		emoji: "👫🏼",
		tag: "E12.0",
		description: "woman and man holding hands: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127996,
			8205,
			129309,
			8205,
			128104,
			127997
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🤝‍👨🏽",
		tag: "E12.0",
		description: "woman and man holding hands: medium-light skin tone, medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127996,
			8205,
			129309,
			8205,
			128104,
			127998
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🤝‍👨🏾",
		tag: "E12.0",
		description: "woman and man holding hands: medium-light skin tone, medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127996,
			8205,
			129309,
			8205,
			128104,
			127999
		],
		status: "fully-qualified",
		emoji: "👩🏼‍🤝‍👨🏿",
		tag: "E12.0",
		description: "woman and man holding hands: medium-light skin tone, dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127997,
			8205,
			129309,
			8205,
			128104,
			127995
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🤝‍👨🏻",
		tag: "E12.0",
		description: "woman and man holding hands: medium skin tone, light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127997,
			8205,
			129309,
			8205,
			128104,
			127996
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🤝‍👨🏼",
		tag: "E12.0",
		description: "woman and man holding hands: medium skin tone, medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128107,
			127997
		],
		status: "fully-qualified",
		emoji: "👫🏽",
		tag: "E12.0",
		description: "woman and man holding hands: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127997,
			8205,
			129309,
			8205,
			128104,
			127998
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🤝‍👨🏾",
		tag: "E12.0",
		description: "woman and man holding hands: medium skin tone, medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127997,
			8205,
			129309,
			8205,
			128104,
			127999
		],
		status: "fully-qualified",
		emoji: "👩🏽‍🤝‍👨🏿",
		tag: "E12.0",
		description: "woman and man holding hands: medium skin tone, dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127998,
			8205,
			129309,
			8205,
			128104,
			127995
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🤝‍👨🏻",
		tag: "E12.0",
		description: "woman and man holding hands: medium-dark skin tone, light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127998,
			8205,
			129309,
			8205,
			128104,
			127996
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🤝‍👨🏼",
		tag: "E12.0",
		description: "woman and man holding hands: medium-dark skin tone, medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127998,
			8205,
			129309,
			8205,
			128104,
			127997
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🤝‍👨🏽",
		tag: "E12.0",
		description: "woman and man holding hands: medium-dark skin tone, medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128107,
			127998
		],
		status: "fully-qualified",
		emoji: "👫🏾",
		tag: "E12.0",
		description: "woman and man holding hands: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127998,
			8205,
			129309,
			8205,
			128104,
			127999
		],
		status: "fully-qualified",
		emoji: "👩🏾‍🤝‍👨🏿",
		tag: "E12.0",
		description: "woman and man holding hands: medium-dark skin tone, dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127999,
			8205,
			129309,
			8205,
			128104,
			127995
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🤝‍👨🏻",
		tag: "E12.0",
		description: "woman and man holding hands: dark skin tone, light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127999,
			8205,
			129309,
			8205,
			128104,
			127996
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🤝‍👨🏼",
		tag: "E12.0",
		description: "woman and man holding hands: dark skin tone, medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127999,
			8205,
			129309,
			8205,
			128104,
			127997
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🤝‍👨🏽",
		tag: "E12.0",
		description: "woman and man holding hands: dark skin tone, medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			127999,
			8205,
			129309,
			8205,
			128104,
			127998
		],
		status: "fully-qualified",
		emoji: "👩🏿‍🤝‍👨🏾",
		tag: "E12.0",
		description: "woman and man holding hands: dark skin tone, medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128107,
			127999
		],
		status: "fully-qualified",
		emoji: "👫🏿",
		tag: "E12.0",
		description: "woman and man holding hands: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128108
		],
		status: "fully-qualified",
		emoji: "👬",
		tag: "E1.0",
		description: "men holding hands"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128108,
			127995
		],
		status: "fully-qualified",
		emoji: "👬🏻",
		tag: "E12.0",
		description: "men holding hands: light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			127995,
			8205,
			129309,
			8205,
			128104,
			127996
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🤝‍👨🏼",
		tag: "E12.1",
		description: "men holding hands: light skin tone, medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			127995,
			8205,
			129309,
			8205,
			128104,
			127997
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🤝‍👨🏽",
		tag: "E12.1",
		description: "men holding hands: light skin tone, medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			127995,
			8205,
			129309,
			8205,
			128104,
			127998
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🤝‍👨🏾",
		tag: "E12.1",
		description: "men holding hands: light skin tone, medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			127995,
			8205,
			129309,
			8205,
			128104,
			127999
		],
		status: "fully-qualified",
		emoji: "👨🏻‍🤝‍👨🏿",
		tag: "E12.1",
		description: "men holding hands: light skin tone, dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			127996,
			8205,
			129309,
			8205,
			128104,
			127995
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🤝‍👨🏻",
		tag: "E12.0",
		description: "men holding hands: medium-light skin tone, light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128108,
			127996
		],
		status: "fully-qualified",
		emoji: "👬🏼",
		tag: "E12.0",
		description: "men holding hands: medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			127996,
			8205,
			129309,
			8205,
			128104,
			127997
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🤝‍👨🏽",
		tag: "E12.1",
		description: "men holding hands: medium-light skin tone, medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			127996,
			8205,
			129309,
			8205,
			128104,
			127998
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🤝‍👨🏾",
		tag: "E12.1",
		description: "men holding hands: medium-light skin tone, medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			127996,
			8205,
			129309,
			8205,
			128104,
			127999
		],
		status: "fully-qualified",
		emoji: "👨🏼‍🤝‍👨🏿",
		tag: "E12.1",
		description: "men holding hands: medium-light skin tone, dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			127997,
			8205,
			129309,
			8205,
			128104,
			127995
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🤝‍👨🏻",
		tag: "E12.0",
		description: "men holding hands: medium skin tone, light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			127997,
			8205,
			129309,
			8205,
			128104,
			127996
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🤝‍👨🏼",
		tag: "E12.0",
		description: "men holding hands: medium skin tone, medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128108,
			127997
		],
		status: "fully-qualified",
		emoji: "👬🏽",
		tag: "E12.0",
		description: "men holding hands: medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			127997,
			8205,
			129309,
			8205,
			128104,
			127998
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🤝‍👨🏾",
		tag: "E12.1",
		description: "men holding hands: medium skin tone, medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			127997,
			8205,
			129309,
			8205,
			128104,
			127999
		],
		status: "fully-qualified",
		emoji: "👨🏽‍🤝‍👨🏿",
		tag: "E12.1",
		description: "men holding hands: medium skin tone, dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			127998,
			8205,
			129309,
			8205,
			128104,
			127995
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🤝‍👨🏻",
		tag: "E12.0",
		description: "men holding hands: medium-dark skin tone, light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			127998,
			8205,
			129309,
			8205,
			128104,
			127996
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🤝‍👨🏼",
		tag: "E12.0",
		description: "men holding hands: medium-dark skin tone, medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			127998,
			8205,
			129309,
			8205,
			128104,
			127997
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🤝‍👨🏽",
		tag: "E12.0",
		description: "men holding hands: medium-dark skin tone, medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128108,
			127998
		],
		status: "fully-qualified",
		emoji: "👬🏾",
		tag: "E12.0",
		description: "men holding hands: medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			127998,
			8205,
			129309,
			8205,
			128104,
			127999
		],
		status: "fully-qualified",
		emoji: "👨🏾‍🤝‍👨🏿",
		tag: "E12.1",
		description: "men holding hands: medium-dark skin tone, dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			127999,
			8205,
			129309,
			8205,
			128104,
			127995
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🤝‍👨🏻",
		tag: "E12.0",
		description: "men holding hands: dark skin tone, light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			127999,
			8205,
			129309,
			8205,
			128104,
			127996
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🤝‍👨🏼",
		tag: "E12.0",
		description: "men holding hands: dark skin tone, medium-light skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			127999,
			8205,
			129309,
			8205,
			128104,
			127997
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🤝‍👨🏽",
		tag: "E12.0",
		description: "men holding hands: dark skin tone, medium skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			127999,
			8205,
			129309,
			8205,
			128104,
			127998
		],
		status: "fully-qualified",
		emoji: "👨🏿‍🤝‍👨🏾",
		tag: "E12.0",
		description: "men holding hands: dark skin tone, medium-dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128108,
			127999
		],
		status: "fully-qualified",
		emoji: "👬🏿",
		tag: "E12.0",
		description: "men holding hands: dark skin tone"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128143
		],
		status: "fully-qualified",
		emoji: "💏",
		tag: "E0.6",
		description: "kiss"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			8205,
			10084,
			65039,
			8205,
			128139,
			8205,
			128104
		],
		status: "fully-qualified",
		emoji: "👩‍❤️‍💋‍👨",
		tag: "E2.0",
		description: "kiss: woman, man"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			8205,
			10084,
			8205,
			128139,
			8205,
			128104
		],
		status: "minimally-qualified",
		emoji: "👩‍❤‍💋‍👨",
		tag: "E2.0",
		description: "kiss: woman, man"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			8205,
			10084,
			65039,
			8205,
			128139,
			8205,
			128104
		],
		status: "fully-qualified",
		emoji: "👨‍❤️‍💋‍👨",
		tag: "E2.0",
		description: "kiss: man, man"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			8205,
			10084,
			8205,
			128139,
			8205,
			128104
		],
		status: "minimally-qualified",
		emoji: "👨‍❤‍💋‍👨",
		tag: "E2.0",
		description: "kiss: man, man"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			8205,
			10084,
			65039,
			8205,
			128139,
			8205,
			128105
		],
		status: "fully-qualified",
		emoji: "👩‍❤️‍💋‍👩",
		tag: "E2.0",
		description: "kiss: woman, woman"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			8205,
			10084,
			8205,
			128139,
			8205,
			128105
		],
		status: "minimally-qualified",
		emoji: "👩‍❤‍💋‍👩",
		tag: "E2.0",
		description: "kiss: woman, woman"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128145
		],
		status: "fully-qualified",
		emoji: "💑",
		tag: "E0.6",
		description: "couple with heart"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			8205,
			10084,
			65039,
			8205,
			128104
		],
		status: "fully-qualified",
		emoji: "👩‍❤️‍👨",
		tag: "E2.0",
		description: "couple with heart: woman, man"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			8205,
			10084,
			8205,
			128104
		],
		status: "minimally-qualified",
		emoji: "👩‍❤‍👨",
		tag: "E2.0",
		description: "couple with heart: woman, man"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			8205,
			10084,
			65039,
			8205,
			128104
		],
		status: "fully-qualified",
		emoji: "👨‍❤️‍👨",
		tag: "E2.0",
		description: "couple with heart: man, man"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			8205,
			10084,
			8205,
			128104
		],
		status: "minimally-qualified",
		emoji: "👨‍❤‍👨",
		tag: "E2.0",
		description: "couple with heart: man, man"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			8205,
			10084,
			65039,
			8205,
			128105
		],
		status: "fully-qualified",
		emoji: "👩‍❤️‍👩",
		tag: "E2.0",
		description: "couple with heart: woman, woman"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			8205,
			10084,
			8205,
			128105
		],
		status: "minimally-qualified",
		emoji: "👩‍❤‍👩",
		tag: "E2.0",
		description: "couple with heart: woman, woman"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128106
		],
		status: "fully-qualified",
		emoji: "👪",
		tag: "E0.6",
		description: "family"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			8205,
			128105,
			8205,
			128102
		],
		status: "fully-qualified",
		emoji: "👨‍👩‍👦",
		tag: "E2.0",
		description: "family: man, woman, boy"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			8205,
			128105,
			8205,
			128103
		],
		status: "fully-qualified",
		emoji: "👨‍👩‍👧",
		tag: "E2.0",
		description: "family: man, woman, girl"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			8205,
			128105,
			8205,
			128103,
			8205,
			128102
		],
		status: "fully-qualified",
		emoji: "👨‍👩‍👧‍👦",
		tag: "E2.0",
		description: "family: man, woman, girl, boy"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			8205,
			128105,
			8205,
			128102,
			8205,
			128102
		],
		status: "fully-qualified",
		emoji: "👨‍👩‍👦‍👦",
		tag: "E2.0",
		description: "family: man, woman, boy, boy"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			8205,
			128105,
			8205,
			128103,
			8205,
			128103
		],
		status: "fully-qualified",
		emoji: "👨‍👩‍👧‍👧",
		tag: "E2.0",
		description: "family: man, woman, girl, girl"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			8205,
			128104,
			8205,
			128102
		],
		status: "fully-qualified",
		emoji: "👨‍👨‍👦",
		tag: "E2.0",
		description: "family: man, man, boy"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			8205,
			128104,
			8205,
			128103
		],
		status: "fully-qualified",
		emoji: "👨‍👨‍👧",
		tag: "E2.0",
		description: "family: man, man, girl"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			8205,
			128104,
			8205,
			128103,
			8205,
			128102
		],
		status: "fully-qualified",
		emoji: "👨‍👨‍👧‍👦",
		tag: "E2.0",
		description: "family: man, man, girl, boy"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			8205,
			128104,
			8205,
			128102,
			8205,
			128102
		],
		status: "fully-qualified",
		emoji: "👨‍👨‍👦‍👦",
		tag: "E2.0",
		description: "family: man, man, boy, boy"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			8205,
			128104,
			8205,
			128103,
			8205,
			128103
		],
		status: "fully-qualified",
		emoji: "👨‍👨‍👧‍👧",
		tag: "E2.0",
		description: "family: man, man, girl, girl"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			8205,
			128105,
			8205,
			128102
		],
		status: "fully-qualified",
		emoji: "👩‍👩‍👦",
		tag: "E2.0",
		description: "family: woman, woman, boy"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			8205,
			128105,
			8205,
			128103
		],
		status: "fully-qualified",
		emoji: "👩‍👩‍👧",
		tag: "E2.0",
		description: "family: woman, woman, girl"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			8205,
			128105,
			8205,
			128103,
			8205,
			128102
		],
		status: "fully-qualified",
		emoji: "👩‍👩‍👧‍👦",
		tag: "E2.0",
		description: "family: woman, woman, girl, boy"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			8205,
			128105,
			8205,
			128102,
			8205,
			128102
		],
		status: "fully-qualified",
		emoji: "👩‍👩‍👦‍👦",
		tag: "E2.0",
		description: "family: woman, woman, boy, boy"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			8205,
			128105,
			8205,
			128103,
			8205,
			128103
		],
		status: "fully-qualified",
		emoji: "👩‍👩‍👧‍👧",
		tag: "E2.0",
		description: "family: woman, woman, girl, girl"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			8205,
			128102
		],
		status: "fully-qualified",
		emoji: "👨‍👦",
		tag: "E4.0",
		description: "family: man, boy"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			8205,
			128102,
			8205,
			128102
		],
		status: "fully-qualified",
		emoji: "👨‍👦‍👦",
		tag: "E4.0",
		description: "family: man, boy, boy"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			8205,
			128103
		],
		status: "fully-qualified",
		emoji: "👨‍👧",
		tag: "E4.0",
		description: "family: man, girl"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			8205,
			128103,
			8205,
			128102
		],
		status: "fully-qualified",
		emoji: "👨‍👧‍👦",
		tag: "E4.0",
		description: "family: man, girl, boy"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128104,
			8205,
			128103,
			8205,
			128103
		],
		status: "fully-qualified",
		emoji: "👨‍👧‍👧",
		tag: "E4.0",
		description: "family: man, girl, girl"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			8205,
			128102
		],
		status: "fully-qualified",
		emoji: "👩‍👦",
		tag: "E4.0",
		description: "family: woman, boy"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			8205,
			128102,
			8205,
			128102
		],
		status: "fully-qualified",
		emoji: "👩‍👦‍👦",
		tag: "E4.0",
		description: "family: woman, boy, boy"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			8205,
			128103
		],
		status: "fully-qualified",
		emoji: "👩‍👧",
		tag: "E4.0",
		description: "family: woman, girl"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			8205,
			128103,
			8205,
			128102
		],
		status: "fully-qualified",
		emoji: "👩‍👧‍👦",
		tag: "E4.0",
		description: "family: woman, girl, boy"
	},
	{
		group: "People & Body",
		subgroup: "family",
		codePoints: [
			128105,
			8205,
			128103,
			8205,
			128103
		],
		status: "fully-qualified",
		emoji: "👩‍👧‍👧",
		tag: "E4.0",
		description: "family: woman, girl, girl"
	},
	{
		group: "People & Body",
		subgroup: "person-symbol",
		codePoints: [
			128483,
			65039
		],
		status: "fully-qualified",
		emoji: "🗣️",
		tag: "E0.7",
		description: "speaking head"
	},
	{
		group: "People & Body",
		subgroup: "person-symbol",
		codePoints: [
			128483
		],
		status: "unqualified",
		emoji: "🗣",
		tag: "E0.7",
		description: "speaking head"
	},
	{
		group: "People & Body",
		subgroup: "person-symbol",
		codePoints: [
			128100
		],
		status: "fully-qualified",
		emoji: "👤",
		tag: "E0.6",
		description: "bust in silhouette"
	},
	{
		group: "People & Body",
		subgroup: "person-symbol",
		codePoints: [
			128101
		],
		status: "fully-qualified",
		emoji: "👥",
		tag: "E1.0",
		description: "busts in silhouette"
	},
	{
		group: "People & Body",
		subgroup: "person-symbol",
		codePoints: [
			129730
		],
		status: "fully-qualified",
		emoji: "🫂",
		tag: "E13.0",
		description: "people hugging"
	},
	{
		group: "People & Body",
		subgroup: "person-symbol",
		codePoints: [
			128099
		],
		status: "fully-qualified",
		emoji: "👣",
		tag: "E0.6",
		description: "footprints"
	},
	{
		group: "Component",
		subgroup: "skin-tone",
		codePoints: [
			127995
		],
		status: "component",
		emoji: "🏻",
		tag: "E1.0",
		description: "light skin tone"
	},
	{
		group: "Component",
		subgroup: "skin-tone",
		codePoints: [
			127996
		],
		status: "component",
		emoji: "🏼",
		tag: "E1.0",
		description: "medium-light skin tone"
	},
	{
		group: "Component",
		subgroup: "skin-tone",
		codePoints: [
			127997
		],
		status: "component",
		emoji: "🏽",
		tag: "E1.0",
		description: "medium skin tone"
	},
	{
		group: "Component",
		subgroup: "skin-tone",
		codePoints: [
			127998
		],
		status: "component",
		emoji: "🏾",
		tag: "E1.0",
		description: "medium-dark skin tone"
	},
	{
		group: "Component",
		subgroup: "skin-tone",
		codePoints: [
			127999
		],
		status: "component",
		emoji: "🏿",
		tag: "E1.0",
		description: "dark skin tone"
	},
	{
		group: "Component",
		subgroup: "hair-style",
		codePoints: [
			129456
		],
		status: "component",
		emoji: "🦰",
		tag: "E11.0",
		description: "red hair"
	},
	{
		group: "Component",
		subgroup: "hair-style",
		codePoints: [
			129457
		],
		status: "component",
		emoji: "🦱",
		tag: "E11.0",
		description: "curly hair"
	},
	{
		group: "Component",
		subgroup: "hair-style",
		codePoints: [
			129459
		],
		status: "component",
		emoji: "🦳",
		tag: "E11.0",
		description: "white hair"
	},
	{
		group: "Component",
		subgroup: "hair-style",
		codePoints: [
			129458
		],
		status: "component",
		emoji: "🦲",
		tag: "E11.0",
		description: "bald"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128053
		],
		status: "fully-qualified",
		emoji: "🐵",
		tag: "E0.6",
		description: "monkey face"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128018
		],
		status: "fully-qualified",
		emoji: "🐒",
		tag: "E0.6",
		description: "monkey"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129421
		],
		status: "fully-qualified",
		emoji: "🦍",
		tag: "E3.0",
		description: "gorilla"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129447
		],
		status: "fully-qualified",
		emoji: "🦧",
		tag: "E12.0",
		description: "orangutan"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128054
		],
		status: "fully-qualified",
		emoji: "🐶",
		tag: "E0.6",
		description: "dog face"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128021
		],
		status: "fully-qualified",
		emoji: "🐕",
		tag: "E0.7",
		description: "dog"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129454
		],
		status: "fully-qualified",
		emoji: "🦮",
		tag: "E12.0",
		description: "guide dog"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128021,
			8205,
			129466
		],
		status: "fully-qualified",
		emoji: "🐕‍🦺",
		tag: "E12.0",
		description: "service dog"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128041
		],
		status: "fully-qualified",
		emoji: "🐩",
		tag: "E0.6",
		description: "poodle"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128058
		],
		status: "fully-qualified",
		emoji: "🐺",
		tag: "E0.6",
		description: "wolf"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129418
		],
		status: "fully-qualified",
		emoji: "🦊",
		tag: "E3.0",
		description: "fox"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129437
		],
		status: "fully-qualified",
		emoji: "🦝",
		tag: "E11.0",
		description: "raccoon"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128049
		],
		status: "fully-qualified",
		emoji: "🐱",
		tag: "E0.6",
		description: "cat face"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128008
		],
		status: "fully-qualified",
		emoji: "🐈",
		tag: "E0.7",
		description: "cat"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128008,
			8205,
			11035
		],
		status: "fully-qualified",
		emoji: "🐈‍⬛",
		tag: "E13.0",
		description: "black cat"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129409
		],
		status: "fully-qualified",
		emoji: "🦁",
		tag: "E1.0",
		description: "lion"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128047
		],
		status: "fully-qualified",
		emoji: "🐯",
		tag: "E0.6",
		description: "tiger face"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128005
		],
		status: "fully-qualified",
		emoji: "🐅",
		tag: "E1.0",
		description: "tiger"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128006
		],
		status: "fully-qualified",
		emoji: "🐆",
		tag: "E1.0",
		description: "leopard"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128052
		],
		status: "fully-qualified",
		emoji: "🐴",
		tag: "E0.6",
		description: "horse face"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128014
		],
		status: "fully-qualified",
		emoji: "🐎",
		tag: "E0.6",
		description: "horse"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129412
		],
		status: "fully-qualified",
		emoji: "🦄",
		tag: "E1.0",
		description: "unicorn"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129427
		],
		status: "fully-qualified",
		emoji: "🦓",
		tag: "E5.0",
		description: "zebra"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129420
		],
		status: "fully-qualified",
		emoji: "🦌",
		tag: "E3.0",
		description: "deer"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129452
		],
		status: "fully-qualified",
		emoji: "🦬",
		tag: "E13.0",
		description: "bison"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128046
		],
		status: "fully-qualified",
		emoji: "🐮",
		tag: "E0.6",
		description: "cow face"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128002
		],
		status: "fully-qualified",
		emoji: "🐂",
		tag: "E1.0",
		description: "ox"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128003
		],
		status: "fully-qualified",
		emoji: "🐃",
		tag: "E1.0",
		description: "water buffalo"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128004
		],
		status: "fully-qualified",
		emoji: "🐄",
		tag: "E1.0",
		description: "cow"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128055
		],
		status: "fully-qualified",
		emoji: "🐷",
		tag: "E0.6",
		description: "pig face"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128022
		],
		status: "fully-qualified",
		emoji: "🐖",
		tag: "E1.0",
		description: "pig"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128023
		],
		status: "fully-qualified",
		emoji: "🐗",
		tag: "E0.6",
		description: "boar"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128061
		],
		status: "fully-qualified",
		emoji: "🐽",
		tag: "E0.6",
		description: "pig nose"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128015
		],
		status: "fully-qualified",
		emoji: "🐏",
		tag: "E1.0",
		description: "ram"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128017
		],
		status: "fully-qualified",
		emoji: "🐑",
		tag: "E0.6",
		description: "ewe"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128016
		],
		status: "fully-qualified",
		emoji: "🐐",
		tag: "E1.0",
		description: "goat"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128042
		],
		status: "fully-qualified",
		emoji: "🐪",
		tag: "E1.0",
		description: "camel"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128043
		],
		status: "fully-qualified",
		emoji: "🐫",
		tag: "E0.6",
		description: "two-hump camel"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129433
		],
		status: "fully-qualified",
		emoji: "🦙",
		tag: "E11.0",
		description: "llama"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129426
		],
		status: "fully-qualified",
		emoji: "🦒",
		tag: "E5.0",
		description: "giraffe"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128024
		],
		status: "fully-qualified",
		emoji: "🐘",
		tag: "E0.6",
		description: "elephant"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129443
		],
		status: "fully-qualified",
		emoji: "🦣",
		tag: "E13.0",
		description: "mammoth"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129423
		],
		status: "fully-qualified",
		emoji: "🦏",
		tag: "E3.0",
		description: "rhinoceros"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129435
		],
		status: "fully-qualified",
		emoji: "🦛",
		tag: "E11.0",
		description: "hippopotamus"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128045
		],
		status: "fully-qualified",
		emoji: "🐭",
		tag: "E0.6",
		description: "mouse face"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128001
		],
		status: "fully-qualified",
		emoji: "🐁",
		tag: "E1.0",
		description: "mouse"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128000
		],
		status: "fully-qualified",
		emoji: "🐀",
		tag: "E1.0",
		description: "rat"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128057
		],
		status: "fully-qualified",
		emoji: "🐹",
		tag: "E0.6",
		description: "hamster"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128048
		],
		status: "fully-qualified",
		emoji: "🐰",
		tag: "E0.6",
		description: "rabbit face"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128007
		],
		status: "fully-qualified",
		emoji: "🐇",
		tag: "E1.0",
		description: "rabbit"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128063,
			65039
		],
		status: "fully-qualified",
		emoji: "🐿️",
		tag: "E0.7",
		description: "chipmunk"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128063
		],
		status: "unqualified",
		emoji: "🐿",
		tag: "E0.7",
		description: "chipmunk"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129451
		],
		status: "fully-qualified",
		emoji: "🦫",
		tag: "E13.0",
		description: "beaver"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129428
		],
		status: "fully-qualified",
		emoji: "🦔",
		tag: "E5.0",
		description: "hedgehog"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129415
		],
		status: "fully-qualified",
		emoji: "🦇",
		tag: "E3.0",
		description: "bat"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128059
		],
		status: "fully-qualified",
		emoji: "🐻",
		tag: "E0.6",
		description: "bear"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128059,
			8205,
			10052,
			65039
		],
		status: "fully-qualified",
		emoji: "🐻‍❄️",
		tag: "E13.0",
		description: "polar bear"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128059,
			8205,
			10052
		],
		status: "minimally-qualified",
		emoji: "🐻‍❄",
		tag: "E13.0",
		description: "polar bear"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128040
		],
		status: "fully-qualified",
		emoji: "🐨",
		tag: "E0.6",
		description: "koala"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128060
		],
		status: "fully-qualified",
		emoji: "🐼",
		tag: "E0.6",
		description: "panda"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129445
		],
		status: "fully-qualified",
		emoji: "🦥",
		tag: "E12.0",
		description: "sloth"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129446
		],
		status: "fully-qualified",
		emoji: "🦦",
		tag: "E12.0",
		description: "otter"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129448
		],
		status: "fully-qualified",
		emoji: "🦨",
		tag: "E12.0",
		description: "skunk"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129432
		],
		status: "fully-qualified",
		emoji: "🦘",
		tag: "E11.0",
		description: "kangaroo"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			129441
		],
		status: "fully-qualified",
		emoji: "🦡",
		tag: "E11.0",
		description: "badger"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-mammal",
		codePoints: [
			128062
		],
		status: "fully-qualified",
		emoji: "🐾",
		tag: "E0.6",
		description: "paw prints"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bird",
		codePoints: [
			129411
		],
		status: "fully-qualified",
		emoji: "🦃",
		tag: "E1.0",
		description: "turkey"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bird",
		codePoints: [
			128020
		],
		status: "fully-qualified",
		emoji: "🐔",
		tag: "E0.6",
		description: "chicken"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bird",
		codePoints: [
			128019
		],
		status: "fully-qualified",
		emoji: "🐓",
		tag: "E1.0",
		description: "rooster"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bird",
		codePoints: [
			128035
		],
		status: "fully-qualified",
		emoji: "🐣",
		tag: "E0.6",
		description: "hatching chick"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bird",
		codePoints: [
			128036
		],
		status: "fully-qualified",
		emoji: "🐤",
		tag: "E0.6",
		description: "baby chick"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bird",
		codePoints: [
			128037
		],
		status: "fully-qualified",
		emoji: "🐥",
		tag: "E0.6",
		description: "front-facing baby chick"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bird",
		codePoints: [
			128038
		],
		status: "fully-qualified",
		emoji: "🐦",
		tag: "E0.6",
		description: "bird"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bird",
		codePoints: [
			128039
		],
		status: "fully-qualified",
		emoji: "🐧",
		tag: "E0.6",
		description: "penguin"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bird",
		codePoints: [
			128330,
			65039
		],
		status: "fully-qualified",
		emoji: "🕊️",
		tag: "E0.7",
		description: "dove"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bird",
		codePoints: [
			128330
		],
		status: "unqualified",
		emoji: "🕊",
		tag: "E0.7",
		description: "dove"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bird",
		codePoints: [
			129413
		],
		status: "fully-qualified",
		emoji: "🦅",
		tag: "E3.0",
		description: "eagle"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bird",
		codePoints: [
			129414
		],
		status: "fully-qualified",
		emoji: "🦆",
		tag: "E3.0",
		description: "duck"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bird",
		codePoints: [
			129442
		],
		status: "fully-qualified",
		emoji: "🦢",
		tag: "E11.0",
		description: "swan"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bird",
		codePoints: [
			129417
		],
		status: "fully-qualified",
		emoji: "🦉",
		tag: "E3.0",
		description: "owl"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bird",
		codePoints: [
			129444
		],
		status: "fully-qualified",
		emoji: "🦤",
		tag: "E13.0",
		description: "dodo"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bird",
		codePoints: [
			129718
		],
		status: "fully-qualified",
		emoji: "🪶",
		tag: "E13.0",
		description: "feather"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bird",
		codePoints: [
			129449
		],
		status: "fully-qualified",
		emoji: "🦩",
		tag: "E12.0",
		description: "flamingo"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bird",
		codePoints: [
			129434
		],
		status: "fully-qualified",
		emoji: "🦚",
		tag: "E11.0",
		description: "peacock"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bird",
		codePoints: [
			129436
		],
		status: "fully-qualified",
		emoji: "🦜",
		tag: "E11.0",
		description: "parrot"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-amphibian",
		codePoints: [
			128056
		],
		status: "fully-qualified",
		emoji: "🐸",
		tag: "E0.6",
		description: "frog"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-reptile",
		codePoints: [
			128010
		],
		status: "fully-qualified",
		emoji: "🐊",
		tag: "E1.0",
		description: "crocodile"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-reptile",
		codePoints: [
			128034
		],
		status: "fully-qualified",
		emoji: "🐢",
		tag: "E0.6",
		description: "turtle"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-reptile",
		codePoints: [
			129422
		],
		status: "fully-qualified",
		emoji: "🦎",
		tag: "E3.0",
		description: "lizard"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-reptile",
		codePoints: [
			128013
		],
		status: "fully-qualified",
		emoji: "🐍",
		tag: "E0.6",
		description: "snake"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-reptile",
		codePoints: [
			128050
		],
		status: "fully-qualified",
		emoji: "🐲",
		tag: "E0.6",
		description: "dragon face"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-reptile",
		codePoints: [
			128009
		],
		status: "fully-qualified",
		emoji: "🐉",
		tag: "E1.0",
		description: "dragon"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-reptile",
		codePoints: [
			129429
		],
		status: "fully-qualified",
		emoji: "🦕",
		tag: "E5.0",
		description: "sauropod"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-reptile",
		codePoints: [
			129430
		],
		status: "fully-qualified",
		emoji: "🦖",
		tag: "E5.0",
		description: "T-Rex"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-marine",
		codePoints: [
			128051
		],
		status: "fully-qualified",
		emoji: "🐳",
		tag: "E0.6",
		description: "spouting whale"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-marine",
		codePoints: [
			128011
		],
		status: "fully-qualified",
		emoji: "🐋",
		tag: "E1.0",
		description: "whale"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-marine",
		codePoints: [
			128044
		],
		status: "fully-qualified",
		emoji: "🐬",
		tag: "E0.6",
		description: "dolphin"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-marine",
		codePoints: [
			129453
		],
		status: "fully-qualified",
		emoji: "🦭",
		tag: "E13.0",
		description: "seal"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-marine",
		codePoints: [
			128031
		],
		status: "fully-qualified",
		emoji: "🐟",
		tag: "E0.6",
		description: "fish"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-marine",
		codePoints: [
			128032
		],
		status: "fully-qualified",
		emoji: "🐠",
		tag: "E0.6",
		description: "tropical fish"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-marine",
		codePoints: [
			128033
		],
		status: "fully-qualified",
		emoji: "🐡",
		tag: "E0.6",
		description: "blowfish"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-marine",
		codePoints: [
			129416
		],
		status: "fully-qualified",
		emoji: "🦈",
		tag: "E3.0",
		description: "shark"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-marine",
		codePoints: [
			128025
		],
		status: "fully-qualified",
		emoji: "🐙",
		tag: "E0.6",
		description: "octopus"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-marine",
		codePoints: [
			128026
		],
		status: "fully-qualified",
		emoji: "🐚",
		tag: "E0.6",
		description: "spiral shell"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bug",
		codePoints: [
			128012
		],
		status: "fully-qualified",
		emoji: "🐌",
		tag: "E0.6",
		description: "snail"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bug",
		codePoints: [
			129419
		],
		status: "fully-qualified",
		emoji: "🦋",
		tag: "E3.0",
		description: "butterfly"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bug",
		codePoints: [
			128027
		],
		status: "fully-qualified",
		emoji: "🐛",
		tag: "E0.6",
		description: "bug"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bug",
		codePoints: [
			128028
		],
		status: "fully-qualified",
		emoji: "🐜",
		tag: "E0.6",
		description: "ant"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bug",
		codePoints: [
			128029
		],
		status: "fully-qualified",
		emoji: "🐝",
		tag: "E0.6",
		description: "honeybee"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bug",
		codePoints: [
			129714
		],
		status: "fully-qualified",
		emoji: "🪲",
		tag: "E13.0",
		description: "beetle"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bug",
		codePoints: [
			128030
		],
		status: "fully-qualified",
		emoji: "🐞",
		tag: "E0.6",
		description: "lady beetle"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bug",
		codePoints: [
			129431
		],
		status: "fully-qualified",
		emoji: "🦗",
		tag: "E5.0",
		description: "cricket"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bug",
		codePoints: [
			129715
		],
		status: "fully-qualified",
		emoji: "🪳",
		tag: "E13.0",
		description: "cockroach"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bug",
		codePoints: [
			128375,
			65039
		],
		status: "fully-qualified",
		emoji: "🕷️",
		tag: "E0.7",
		description: "spider"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bug",
		codePoints: [
			128375
		],
		status: "unqualified",
		emoji: "🕷",
		tag: "E0.7",
		description: "spider"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bug",
		codePoints: [
			128376,
			65039
		],
		status: "fully-qualified",
		emoji: "🕸️",
		tag: "E0.7",
		description: "spider web"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bug",
		codePoints: [
			128376
		],
		status: "unqualified",
		emoji: "🕸",
		tag: "E0.7",
		description: "spider web"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bug",
		codePoints: [
			129410
		],
		status: "fully-qualified",
		emoji: "🦂",
		tag: "E1.0",
		description: "scorpion"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bug",
		codePoints: [
			129439
		],
		status: "fully-qualified",
		emoji: "🦟",
		tag: "E11.0",
		description: "mosquito"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bug",
		codePoints: [
			129712
		],
		status: "fully-qualified",
		emoji: "🪰",
		tag: "E13.0",
		description: "fly"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bug",
		codePoints: [
			129713
		],
		status: "fully-qualified",
		emoji: "🪱",
		tag: "E13.0",
		description: "worm"
	},
	{
		group: "Animals & Nature",
		subgroup: "animal-bug",
		codePoints: [
			129440
		],
		status: "fully-qualified",
		emoji: "🦠",
		tag: "E11.0",
		description: "microbe"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-flower",
		codePoints: [
			128144
		],
		status: "fully-qualified",
		emoji: "💐",
		tag: "E0.6",
		description: "bouquet"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-flower",
		codePoints: [
			127800
		],
		status: "fully-qualified",
		emoji: "🌸",
		tag: "E0.6",
		description: "cherry blossom"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-flower",
		codePoints: [
			128174
		],
		status: "fully-qualified",
		emoji: "💮",
		tag: "E0.6",
		description: "white flower"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-flower",
		codePoints: [
			127989,
			65039
		],
		status: "fully-qualified",
		emoji: "🏵️",
		tag: "E0.7",
		description: "rosette"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-flower",
		codePoints: [
			127989
		],
		status: "unqualified",
		emoji: "🏵",
		tag: "E0.7",
		description: "rosette"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-flower",
		codePoints: [
			127801
		],
		status: "fully-qualified",
		emoji: "🌹",
		tag: "E0.6",
		description: "rose"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-flower",
		codePoints: [
			129344
		],
		status: "fully-qualified",
		emoji: "🥀",
		tag: "E3.0",
		description: "wilted flower"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-flower",
		codePoints: [
			127802
		],
		status: "fully-qualified",
		emoji: "🌺",
		tag: "E0.6",
		description: "hibiscus"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-flower",
		codePoints: [
			127803
		],
		status: "fully-qualified",
		emoji: "🌻",
		tag: "E0.6",
		description: "sunflower"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-flower",
		codePoints: [
			127804
		],
		status: "fully-qualified",
		emoji: "🌼",
		tag: "E0.6",
		description: "blossom"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-flower",
		codePoints: [
			127799
		],
		status: "fully-qualified",
		emoji: "🌷",
		tag: "E0.6",
		description: "tulip"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-other",
		codePoints: [
			127793
		],
		status: "fully-qualified",
		emoji: "🌱",
		tag: "E0.6",
		description: "seedling"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-other",
		codePoints: [
			129716
		],
		status: "fully-qualified",
		emoji: "🪴",
		tag: "E13.0",
		description: "potted plant"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-other",
		codePoints: [
			127794
		],
		status: "fully-qualified",
		emoji: "🌲",
		tag: "E1.0",
		description: "evergreen tree"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-other",
		codePoints: [
			127795
		],
		status: "fully-qualified",
		emoji: "🌳",
		tag: "E1.0",
		description: "deciduous tree"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-other",
		codePoints: [
			127796
		],
		status: "fully-qualified",
		emoji: "🌴",
		tag: "E0.6",
		description: "palm tree"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-other",
		codePoints: [
			127797
		],
		status: "fully-qualified",
		emoji: "🌵",
		tag: "E0.6",
		description: "cactus"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-other",
		codePoints: [
			127806
		],
		status: "fully-qualified",
		emoji: "🌾",
		tag: "E0.6",
		description: "sheaf of rice"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-other",
		codePoints: [
			127807
		],
		status: "fully-qualified",
		emoji: "🌿",
		tag: "E0.6",
		description: "herb"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-other",
		codePoints: [
			9752,
			65039
		],
		status: "fully-qualified",
		emoji: "☘️",
		tag: "E1.0",
		description: "shamrock"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-other",
		codePoints: [
			9752
		],
		status: "unqualified",
		emoji: "☘",
		tag: "E1.0",
		description: "shamrock"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-other",
		codePoints: [
			127808
		],
		status: "fully-qualified",
		emoji: "🍀",
		tag: "E0.6",
		description: "four leaf clover"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-other",
		codePoints: [
			127809
		],
		status: "fully-qualified",
		emoji: "🍁",
		tag: "E0.6",
		description: "maple leaf"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-other",
		codePoints: [
			127810
		],
		status: "fully-qualified",
		emoji: "🍂",
		tag: "E0.6",
		description: "fallen leaf"
	},
	{
		group: "Animals & Nature",
		subgroup: "plant-other",
		codePoints: [
			127811
		],
		status: "fully-qualified",
		emoji: "🍃",
		tag: "E0.6",
		description: "leaf fluttering in wind"
	},
	{
		group: "Food & Drink",
		subgroup: "food-fruit",
		codePoints: [
			127815
		],
		status: "fully-qualified",
		emoji: "🍇",
		tag: "E0.6",
		description: "grapes"
	},
	{
		group: "Food & Drink",
		subgroup: "food-fruit",
		codePoints: [
			127816
		],
		status: "fully-qualified",
		emoji: "🍈",
		tag: "E0.6",
		description: "melon"
	},
	{
		group: "Food & Drink",
		subgroup: "food-fruit",
		codePoints: [
			127817
		],
		status: "fully-qualified",
		emoji: "🍉",
		tag: "E0.6",
		description: "watermelon"
	},
	{
		group: "Food & Drink",
		subgroup: "food-fruit",
		codePoints: [
			127818
		],
		status: "fully-qualified",
		emoji: "🍊",
		tag: "E0.6",
		description: "tangerine"
	},
	{
		group: "Food & Drink",
		subgroup: "food-fruit",
		codePoints: [
			127819
		],
		status: "fully-qualified",
		emoji: "🍋",
		tag: "E1.0",
		description: "lemon"
	},
	{
		group: "Food & Drink",
		subgroup: "food-fruit",
		codePoints: [
			127820
		],
		status: "fully-qualified",
		emoji: "🍌",
		tag: "E0.6",
		description: "banana"
	},
	{
		group: "Food & Drink",
		subgroup: "food-fruit",
		codePoints: [
			127821
		],
		status: "fully-qualified",
		emoji: "🍍",
		tag: "E0.6",
		description: "pineapple"
	},
	{
		group: "Food & Drink",
		subgroup: "food-fruit",
		codePoints: [
			129389
		],
		status: "fully-qualified",
		emoji: "🥭",
		tag: "E11.0",
		description: "mango"
	},
	{
		group: "Food & Drink",
		subgroup: "food-fruit",
		codePoints: [
			127822
		],
		status: "fully-qualified",
		emoji: "🍎",
		tag: "E0.6",
		description: "red apple"
	},
	{
		group: "Food & Drink",
		subgroup: "food-fruit",
		codePoints: [
			127823
		],
		status: "fully-qualified",
		emoji: "🍏",
		tag: "E0.6",
		description: "green apple"
	},
	{
		group: "Food & Drink",
		subgroup: "food-fruit",
		codePoints: [
			127824
		],
		status: "fully-qualified",
		emoji: "🍐",
		tag: "E1.0",
		description: "pear"
	},
	{
		group: "Food & Drink",
		subgroup: "food-fruit",
		codePoints: [
			127825
		],
		status: "fully-qualified",
		emoji: "🍑",
		tag: "E0.6",
		description: "peach"
	},
	{
		group: "Food & Drink",
		subgroup: "food-fruit",
		codePoints: [
			127826
		],
		status: "fully-qualified",
		emoji: "🍒",
		tag: "E0.6",
		description: "cherries"
	},
	{
		group: "Food & Drink",
		subgroup: "food-fruit",
		codePoints: [
			127827
		],
		status: "fully-qualified",
		emoji: "🍓",
		tag: "E0.6",
		description: "strawberry"
	},
	{
		group: "Food & Drink",
		subgroup: "food-fruit",
		codePoints: [
			129744
		],
		status: "fully-qualified",
		emoji: "🫐",
		tag: "E13.0",
		description: "blueberries"
	},
	{
		group: "Food & Drink",
		subgroup: "food-fruit",
		codePoints: [
			129373
		],
		status: "fully-qualified",
		emoji: "🥝",
		tag: "E3.0",
		description: "kiwi fruit"
	},
	{
		group: "Food & Drink",
		subgroup: "food-fruit",
		codePoints: [
			127813
		],
		status: "fully-qualified",
		emoji: "🍅",
		tag: "E0.6",
		description: "tomato"
	},
	{
		group: "Food & Drink",
		subgroup: "food-fruit",
		codePoints: [
			129746
		],
		status: "fully-qualified",
		emoji: "🫒",
		tag: "E13.0",
		description: "olive"
	},
	{
		group: "Food & Drink",
		subgroup: "food-fruit",
		codePoints: [
			129381
		],
		status: "fully-qualified",
		emoji: "🥥",
		tag: "E5.0",
		description: "coconut"
	},
	{
		group: "Food & Drink",
		subgroup: "food-vegetable",
		codePoints: [
			129361
		],
		status: "fully-qualified",
		emoji: "🥑",
		tag: "E3.0",
		description: "avocado"
	},
	{
		group: "Food & Drink",
		subgroup: "food-vegetable",
		codePoints: [
			127814
		],
		status: "fully-qualified",
		emoji: "🍆",
		tag: "E0.6",
		description: "eggplant"
	},
	{
		group: "Food & Drink",
		subgroup: "food-vegetable",
		codePoints: [
			129364
		],
		status: "fully-qualified",
		emoji: "🥔",
		tag: "E3.0",
		description: "potato"
	},
	{
		group: "Food & Drink",
		subgroup: "food-vegetable",
		codePoints: [
			129365
		],
		status: "fully-qualified",
		emoji: "🥕",
		tag: "E3.0",
		description: "carrot"
	},
	{
		group: "Food & Drink",
		subgroup: "food-vegetable",
		codePoints: [
			127805
		],
		status: "fully-qualified",
		emoji: "🌽",
		tag: "E0.6",
		description: "ear of corn"
	},
	{
		group: "Food & Drink",
		subgroup: "food-vegetable",
		codePoints: [
			127798,
			65039
		],
		status: "fully-qualified",
		emoji: "🌶️",
		tag: "E0.7",
		description: "hot pepper"
	},
	{
		group: "Food & Drink",
		subgroup: "food-vegetable",
		codePoints: [
			127798
		],
		status: "unqualified",
		emoji: "🌶",
		tag: "E0.7",
		description: "hot pepper"
	},
	{
		group: "Food & Drink",
		subgroup: "food-vegetable",
		codePoints: [
			129745
		],
		status: "fully-qualified",
		emoji: "🫑",
		tag: "E13.0",
		description: "bell pepper"
	},
	{
		group: "Food & Drink",
		subgroup: "food-vegetable",
		codePoints: [
			129362
		],
		status: "fully-qualified",
		emoji: "🥒",
		tag: "E3.0",
		description: "cucumber"
	},
	{
		group: "Food & Drink",
		subgroup: "food-vegetable",
		codePoints: [
			129388
		],
		status: "fully-qualified",
		emoji: "🥬",
		tag: "E11.0",
		description: "leafy green"
	},
	{
		group: "Food & Drink",
		subgroup: "food-vegetable",
		codePoints: [
			129382
		],
		status: "fully-qualified",
		emoji: "🥦",
		tag: "E5.0",
		description: "broccoli"
	},
	{
		group: "Food & Drink",
		subgroup: "food-vegetable",
		codePoints: [
			129476
		],
		status: "fully-qualified",
		emoji: "🧄",
		tag: "E12.0",
		description: "garlic"
	},
	{
		group: "Food & Drink",
		subgroup: "food-vegetable",
		codePoints: [
			129477
		],
		status: "fully-qualified",
		emoji: "🧅",
		tag: "E12.0",
		description: "onion"
	},
	{
		group: "Food & Drink",
		subgroup: "food-vegetable",
		codePoints: [
			127812
		],
		status: "fully-qualified",
		emoji: "🍄",
		tag: "E0.6",
		description: "mushroom"
	},
	{
		group: "Food & Drink",
		subgroup: "food-vegetable",
		codePoints: [
			129372
		],
		status: "fully-qualified",
		emoji: "🥜",
		tag: "E3.0",
		description: "peanuts"
	},
	{
		group: "Food & Drink",
		subgroup: "food-vegetable",
		codePoints: [
			127792
		],
		status: "fully-qualified",
		emoji: "🌰",
		tag: "E0.6",
		description: "chestnut"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			127838
		],
		status: "fully-qualified",
		emoji: "🍞",
		tag: "E0.6",
		description: "bread"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			129360
		],
		status: "fully-qualified",
		emoji: "🥐",
		tag: "E3.0",
		description: "croissant"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			129366
		],
		status: "fully-qualified",
		emoji: "🥖",
		tag: "E3.0",
		description: "baguette bread"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			129747
		],
		status: "fully-qualified",
		emoji: "🫓",
		tag: "E13.0",
		description: "flatbread"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			129384
		],
		status: "fully-qualified",
		emoji: "🥨",
		tag: "E5.0",
		description: "pretzel"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			129391
		],
		status: "fully-qualified",
		emoji: "🥯",
		tag: "E11.0",
		description: "bagel"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			129374
		],
		status: "fully-qualified",
		emoji: "🥞",
		tag: "E3.0",
		description: "pancakes"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			129479
		],
		status: "fully-qualified",
		emoji: "🧇",
		tag: "E12.0",
		description: "waffle"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			129472
		],
		status: "fully-qualified",
		emoji: "🧀",
		tag: "E1.0",
		description: "cheese wedge"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			127830
		],
		status: "fully-qualified",
		emoji: "🍖",
		tag: "E0.6",
		description: "meat on bone"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			127831
		],
		status: "fully-qualified",
		emoji: "🍗",
		tag: "E0.6",
		description: "poultry leg"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			129385
		],
		status: "fully-qualified",
		emoji: "🥩",
		tag: "E5.0",
		description: "cut of meat"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			129363
		],
		status: "fully-qualified",
		emoji: "🥓",
		tag: "E3.0",
		description: "bacon"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			127828
		],
		status: "fully-qualified",
		emoji: "🍔",
		tag: "E0.6",
		description: "hamburger"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			127839
		],
		status: "fully-qualified",
		emoji: "🍟",
		tag: "E0.6",
		description: "french fries"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			127829
		],
		status: "fully-qualified",
		emoji: "🍕",
		tag: "E0.6",
		description: "pizza"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			127789
		],
		status: "fully-qualified",
		emoji: "🌭",
		tag: "E1.0",
		description: "hot dog"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			129386
		],
		status: "fully-qualified",
		emoji: "🥪",
		tag: "E5.0",
		description: "sandwich"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			127790
		],
		status: "fully-qualified",
		emoji: "🌮",
		tag: "E1.0",
		description: "taco"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			127791
		],
		status: "fully-qualified",
		emoji: "🌯",
		tag: "E1.0",
		description: "burrito"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			129748
		],
		status: "fully-qualified",
		emoji: "🫔",
		tag: "E13.0",
		description: "tamale"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			129369
		],
		status: "fully-qualified",
		emoji: "🥙",
		tag: "E3.0",
		description: "stuffed flatbread"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			129478
		],
		status: "fully-qualified",
		emoji: "🧆",
		tag: "E12.0",
		description: "falafel"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			129370
		],
		status: "fully-qualified",
		emoji: "🥚",
		tag: "E3.0",
		description: "egg"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			127859
		],
		status: "fully-qualified",
		emoji: "🍳",
		tag: "E0.6",
		description: "cooking"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			129368
		],
		status: "fully-qualified",
		emoji: "🥘",
		tag: "E3.0",
		description: "shallow pan of food"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			127858
		],
		status: "fully-qualified",
		emoji: "🍲",
		tag: "E0.6",
		description: "pot of food"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			129749
		],
		status: "fully-qualified",
		emoji: "🫕",
		tag: "E13.0",
		description: "fondue"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			129379
		],
		status: "fully-qualified",
		emoji: "🥣",
		tag: "E5.0",
		description: "bowl with spoon"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			129367
		],
		status: "fully-qualified",
		emoji: "🥗",
		tag: "E3.0",
		description: "green salad"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			127871
		],
		status: "fully-qualified",
		emoji: "🍿",
		tag: "E1.0",
		description: "popcorn"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			129480
		],
		status: "fully-qualified",
		emoji: "🧈",
		tag: "E12.0",
		description: "butter"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			129474
		],
		status: "fully-qualified",
		emoji: "🧂",
		tag: "E11.0",
		description: "salt"
	},
	{
		group: "Food & Drink",
		subgroup: "food-prepared",
		codePoints: [
			129387
		],
		status: "fully-qualified",
		emoji: "🥫",
		tag: "E5.0",
		description: "canned food"
	},
	{
		group: "Food & Drink",
		subgroup: "food-asian",
		codePoints: [
			127857
		],
		status: "fully-qualified",
		emoji: "🍱",
		tag: "E0.6",
		description: "bento box"
	},
	{
		group: "Food & Drink",
		subgroup: "food-asian",
		codePoints: [
			127832
		],
		status: "fully-qualified",
		emoji: "🍘",
		tag: "E0.6",
		description: "rice cracker"
	},
	{
		group: "Food & Drink",
		subgroup: "food-asian",
		codePoints: [
			127833
		],
		status: "fully-qualified",
		emoji: "🍙",
		tag: "E0.6",
		description: "rice ball"
	},
	{
		group: "Food & Drink",
		subgroup: "food-asian",
		codePoints: [
			127834
		],
		status: "fully-qualified",
		emoji: "🍚",
		tag: "E0.6",
		description: "cooked rice"
	},
	{
		group: "Food & Drink",
		subgroup: "food-asian",
		codePoints: [
			127835
		],
		status: "fully-qualified",
		emoji: "🍛",
		tag: "E0.6",
		description: "curry rice"
	},
	{
		group: "Food & Drink",
		subgroup: "food-asian",
		codePoints: [
			127836
		],
		status: "fully-qualified",
		emoji: "🍜",
		tag: "E0.6",
		description: "steaming bowl"
	},
	{
		group: "Food & Drink",
		subgroup: "food-asian",
		codePoints: [
			127837
		],
		status: "fully-qualified",
		emoji: "🍝",
		tag: "E0.6",
		description: "spaghetti"
	},
	{
		group: "Food & Drink",
		subgroup: "food-asian",
		codePoints: [
			127840
		],
		status: "fully-qualified",
		emoji: "🍠",
		tag: "E0.6",
		description: "roasted sweet potato"
	},
	{
		group: "Food & Drink",
		subgroup: "food-asian",
		codePoints: [
			127842
		],
		status: "fully-qualified",
		emoji: "🍢",
		tag: "E0.6",
		description: "oden"
	},
	{
		group: "Food & Drink",
		subgroup: "food-asian",
		codePoints: [
			127843
		],
		status: "fully-qualified",
		emoji: "🍣",
		tag: "E0.6",
		description: "sushi"
	},
	{
		group: "Food & Drink",
		subgroup: "food-asian",
		codePoints: [
			127844
		],
		status: "fully-qualified",
		emoji: "🍤",
		tag: "E0.6",
		description: "fried shrimp"
	},
	{
		group: "Food & Drink",
		subgroup: "food-asian",
		codePoints: [
			127845
		],
		status: "fully-qualified",
		emoji: "🍥",
		tag: "E0.6",
		description: "fish cake with swirl"
	},
	{
		group: "Food & Drink",
		subgroup: "food-asian",
		codePoints: [
			129390
		],
		status: "fully-qualified",
		emoji: "🥮",
		tag: "E11.0",
		description: "moon cake"
	},
	{
		group: "Food & Drink",
		subgroup: "food-asian",
		codePoints: [
			127841
		],
		status: "fully-qualified",
		emoji: "🍡",
		tag: "E0.6",
		description: "dango"
	},
	{
		group: "Food & Drink",
		subgroup: "food-asian",
		codePoints: [
			129375
		],
		status: "fully-qualified",
		emoji: "🥟",
		tag: "E5.0",
		description: "dumpling"
	},
	{
		group: "Food & Drink",
		subgroup: "food-asian",
		codePoints: [
			129376
		],
		status: "fully-qualified",
		emoji: "🥠",
		tag: "E5.0",
		description: "fortune cookie"
	},
	{
		group: "Food & Drink",
		subgroup: "food-asian",
		codePoints: [
			129377
		],
		status: "fully-qualified",
		emoji: "🥡",
		tag: "E5.0",
		description: "takeout box"
	},
	{
		group: "Food & Drink",
		subgroup: "food-marine",
		codePoints: [
			129408
		],
		status: "fully-qualified",
		emoji: "🦀",
		tag: "E1.0",
		description: "crab"
	},
	{
		group: "Food & Drink",
		subgroup: "food-marine",
		codePoints: [
			129438
		],
		status: "fully-qualified",
		emoji: "🦞",
		tag: "E11.0",
		description: "lobster"
	},
	{
		group: "Food & Drink",
		subgroup: "food-marine",
		codePoints: [
			129424
		],
		status: "fully-qualified",
		emoji: "🦐",
		tag: "E3.0",
		description: "shrimp"
	},
	{
		group: "Food & Drink",
		subgroup: "food-marine",
		codePoints: [
			129425
		],
		status: "fully-qualified",
		emoji: "🦑",
		tag: "E3.0",
		description: "squid"
	},
	{
		group: "Food & Drink",
		subgroup: "food-marine",
		codePoints: [
			129450
		],
		status: "fully-qualified",
		emoji: "🦪",
		tag: "E12.0",
		description: "oyster"
	},
	{
		group: "Food & Drink",
		subgroup: "food-sweet",
		codePoints: [
			127846
		],
		status: "fully-qualified",
		emoji: "🍦",
		tag: "E0.6",
		description: "soft ice cream"
	},
	{
		group: "Food & Drink",
		subgroup: "food-sweet",
		codePoints: [
			127847
		],
		status: "fully-qualified",
		emoji: "🍧",
		tag: "E0.6",
		description: "shaved ice"
	},
	{
		group: "Food & Drink",
		subgroup: "food-sweet",
		codePoints: [
			127848
		],
		status: "fully-qualified",
		emoji: "🍨",
		tag: "E0.6",
		description: "ice cream"
	},
	{
		group: "Food & Drink",
		subgroup: "food-sweet",
		codePoints: [
			127849
		],
		status: "fully-qualified",
		emoji: "🍩",
		tag: "E0.6",
		description: "doughnut"
	},
	{
		group: "Food & Drink",
		subgroup: "food-sweet",
		codePoints: [
			127850
		],
		status: "fully-qualified",
		emoji: "🍪",
		tag: "E0.6",
		description: "cookie"
	},
	{
		group: "Food & Drink",
		subgroup: "food-sweet",
		codePoints: [
			127874
		],
		status: "fully-qualified",
		emoji: "🎂",
		tag: "E0.6",
		description: "birthday cake"
	},
	{
		group: "Food & Drink",
		subgroup: "food-sweet",
		codePoints: [
			127856
		],
		status: "fully-qualified",
		emoji: "🍰",
		tag: "E0.6",
		description: "shortcake"
	},
	{
		group: "Food & Drink",
		subgroup: "food-sweet",
		codePoints: [
			129473
		],
		status: "fully-qualified",
		emoji: "🧁",
		tag: "E11.0",
		description: "cupcake"
	},
	{
		group: "Food & Drink",
		subgroup: "food-sweet",
		codePoints: [
			129383
		],
		status: "fully-qualified",
		emoji: "🥧",
		tag: "E5.0",
		description: "pie"
	},
	{
		group: "Food & Drink",
		subgroup: "food-sweet",
		codePoints: [
			127851
		],
		status: "fully-qualified",
		emoji: "🍫",
		tag: "E0.6",
		description: "chocolate bar"
	},
	{
		group: "Food & Drink",
		subgroup: "food-sweet",
		codePoints: [
			127852
		],
		status: "fully-qualified",
		emoji: "🍬",
		tag: "E0.6",
		description: "candy"
	},
	{
		group: "Food & Drink",
		subgroup: "food-sweet",
		codePoints: [
			127853
		],
		status: "fully-qualified",
		emoji: "🍭",
		tag: "E0.6",
		description: "lollipop"
	},
	{
		group: "Food & Drink",
		subgroup: "food-sweet",
		codePoints: [
			127854
		],
		status: "fully-qualified",
		emoji: "🍮",
		tag: "E0.6",
		description: "custard"
	},
	{
		group: "Food & Drink",
		subgroup: "food-sweet",
		codePoints: [
			127855
		],
		status: "fully-qualified",
		emoji: "🍯",
		tag: "E0.6",
		description: "honey pot"
	},
	{
		group: "Food & Drink",
		subgroup: "drink",
		codePoints: [
			127868
		],
		status: "fully-qualified",
		emoji: "🍼",
		tag: "E1.0",
		description: "baby bottle"
	},
	{
		group: "Food & Drink",
		subgroup: "drink",
		codePoints: [
			129371
		],
		status: "fully-qualified",
		emoji: "🥛",
		tag: "E3.0",
		description: "glass of milk"
	},
	{
		group: "Food & Drink",
		subgroup: "drink",
		codePoints: [
			9749
		],
		status: "fully-qualified",
		emoji: "☕",
		tag: "E0.6",
		description: "hot beverage"
	},
	{
		group: "Food & Drink",
		subgroup: "drink",
		codePoints: [
			129750
		],
		status: "fully-qualified",
		emoji: "🫖",
		tag: "E13.0",
		description: "teapot"
	},
	{
		group: "Food & Drink",
		subgroup: "drink",
		codePoints: [
			127861
		],
		status: "fully-qualified",
		emoji: "🍵",
		tag: "E0.6",
		description: "teacup without handle"
	},
	{
		group: "Food & Drink",
		subgroup: "drink",
		codePoints: [
			127862
		],
		status: "fully-qualified",
		emoji: "🍶",
		tag: "E0.6",
		description: "sake"
	},
	{
		group: "Food & Drink",
		subgroup: "drink",
		codePoints: [
			127870
		],
		status: "fully-qualified",
		emoji: "🍾",
		tag: "E1.0",
		description: "bottle with popping cork"
	},
	{
		group: "Food & Drink",
		subgroup: "drink",
		codePoints: [
			127863
		],
		status: "fully-qualified",
		emoji: "🍷",
		tag: "E0.6",
		description: "wine glass"
	},
	{
		group: "Food & Drink",
		subgroup: "drink",
		codePoints: [
			127864
		],
		status: "fully-qualified",
		emoji: "🍸",
		tag: "E0.6",
		description: "cocktail glass"
	},
	{
		group: "Food & Drink",
		subgroup: "drink",
		codePoints: [
			127865
		],
		status: "fully-qualified",
		emoji: "🍹",
		tag: "E0.6",
		description: "tropical drink"
	},
	{
		group: "Food & Drink",
		subgroup: "drink",
		codePoints: [
			127866
		],
		status: "fully-qualified",
		emoji: "🍺",
		tag: "E0.6",
		description: "beer mug"
	},
	{
		group: "Food & Drink",
		subgroup: "drink",
		codePoints: [
			127867
		],
		status: "fully-qualified",
		emoji: "🍻",
		tag: "E0.6",
		description: "clinking beer mugs"
	},
	{
		group: "Food & Drink",
		subgroup: "drink",
		codePoints: [
			129346
		],
		status: "fully-qualified",
		emoji: "🥂",
		tag: "E3.0",
		description: "clinking glasses"
	},
	{
		group: "Food & Drink",
		subgroup: "drink",
		codePoints: [
			129347
		],
		status: "fully-qualified",
		emoji: "🥃",
		tag: "E3.0",
		description: "tumbler glass"
	},
	{
		group: "Food & Drink",
		subgroup: "drink",
		codePoints: [
			129380
		],
		status: "fully-qualified",
		emoji: "🥤",
		tag: "E5.0",
		description: "cup with straw"
	},
	{
		group: "Food & Drink",
		subgroup: "drink",
		codePoints: [
			129483
		],
		status: "fully-qualified",
		emoji: "🧋",
		tag: "E13.0",
		description: "bubble tea"
	},
	{
		group: "Food & Drink",
		subgroup: "drink",
		codePoints: [
			129475
		],
		status: "fully-qualified",
		emoji: "🧃",
		tag: "E12.0",
		description: "beverage box"
	},
	{
		group: "Food & Drink",
		subgroup: "drink",
		codePoints: [
			129481
		],
		status: "fully-qualified",
		emoji: "🧉",
		tag: "E12.0",
		description: "mate"
	},
	{
		group: "Food & Drink",
		subgroup: "drink",
		codePoints: [
			129482
		],
		status: "fully-qualified",
		emoji: "🧊",
		tag: "E12.0",
		description: "ice"
	},
	{
		group: "Food & Drink",
		subgroup: "dishware",
		codePoints: [
			129378
		],
		status: "fully-qualified",
		emoji: "🥢",
		tag: "E5.0",
		description: "chopsticks"
	},
	{
		group: "Food & Drink",
		subgroup: "dishware",
		codePoints: [
			127869,
			65039
		],
		status: "fully-qualified",
		emoji: "🍽️",
		tag: "E0.7",
		description: "fork and knife with plate"
	},
	{
		group: "Food & Drink",
		subgroup: "dishware",
		codePoints: [
			127869
		],
		status: "unqualified",
		emoji: "🍽",
		tag: "E0.7",
		description: "fork and knife with plate"
	},
	{
		group: "Food & Drink",
		subgroup: "dishware",
		codePoints: [
			127860
		],
		status: "fully-qualified",
		emoji: "🍴",
		tag: "E0.6",
		description: "fork and knife"
	},
	{
		group: "Food & Drink",
		subgroup: "dishware",
		codePoints: [
			129348
		],
		status: "fully-qualified",
		emoji: "🥄",
		tag: "E3.0",
		description: "spoon"
	},
	{
		group: "Food & Drink",
		subgroup: "dishware",
		codePoints: [
			128298
		],
		status: "fully-qualified",
		emoji: "🔪",
		tag: "E0.6",
		description: "kitchen knife"
	},
	{
		group: "Food & Drink",
		subgroup: "dishware",
		codePoints: [
			127994
		],
		status: "fully-qualified",
		emoji: "🏺",
		tag: "E1.0",
		description: "amphora"
	},
	{
		group: "Travel & Places",
		subgroup: "place-map",
		codePoints: [
			127757
		],
		status: "fully-qualified",
		emoji: "🌍",
		tag: "E0.7",
		description: "globe showing Europe-Africa"
	},
	{
		group: "Travel & Places",
		subgroup: "place-map",
		codePoints: [
			127758
		],
		status: "fully-qualified",
		emoji: "🌎",
		tag: "E0.7",
		description: "globe showing Americas"
	},
	{
		group: "Travel & Places",
		subgroup: "place-map",
		codePoints: [
			127759
		],
		status: "fully-qualified",
		emoji: "🌏",
		tag: "E0.6",
		description: "globe showing Asia-Australia"
	},
	{
		group: "Travel & Places",
		subgroup: "place-map",
		codePoints: [
			127760
		],
		status: "fully-qualified",
		emoji: "🌐",
		tag: "E1.0",
		description: "globe with meridians"
	},
	{
		group: "Travel & Places",
		subgroup: "place-map",
		codePoints: [
			128506,
			65039
		],
		status: "fully-qualified",
		emoji: "🗺️",
		tag: "E0.7",
		description: "world map"
	},
	{
		group: "Travel & Places",
		subgroup: "place-map",
		codePoints: [
			128506
		],
		status: "unqualified",
		emoji: "🗺",
		tag: "E0.7",
		description: "world map"
	},
	{
		group: "Travel & Places",
		subgroup: "place-map",
		codePoints: [
			128510
		],
		status: "fully-qualified",
		emoji: "🗾",
		tag: "E0.6",
		description: "map of Japan"
	},
	{
		group: "Travel & Places",
		subgroup: "place-map",
		codePoints: [
			129517
		],
		status: "fully-qualified",
		emoji: "🧭",
		tag: "E11.0",
		description: "compass"
	},
	{
		group: "Travel & Places",
		subgroup: "place-geographic",
		codePoints: [
			127956,
			65039
		],
		status: "fully-qualified",
		emoji: "🏔️",
		tag: "E0.7",
		description: "snow-capped mountain"
	},
	{
		group: "Travel & Places",
		subgroup: "place-geographic",
		codePoints: [
			127956
		],
		status: "unqualified",
		emoji: "🏔",
		tag: "E0.7",
		description: "snow-capped mountain"
	},
	{
		group: "Travel & Places",
		subgroup: "place-geographic",
		codePoints: [
			9968,
			65039
		],
		status: "fully-qualified",
		emoji: "⛰️",
		tag: "E0.7",
		description: "mountain"
	},
	{
		group: "Travel & Places",
		subgroup: "place-geographic",
		codePoints: [
			9968
		],
		status: "unqualified",
		emoji: "⛰",
		tag: "E0.7",
		description: "mountain"
	},
	{
		group: "Travel & Places",
		subgroup: "place-geographic",
		codePoints: [
			127755
		],
		status: "fully-qualified",
		emoji: "🌋",
		tag: "E0.6",
		description: "volcano"
	},
	{
		group: "Travel & Places",
		subgroup: "place-geographic",
		codePoints: [
			128507
		],
		status: "fully-qualified",
		emoji: "🗻",
		tag: "E0.6",
		description: "mount fuji"
	},
	{
		group: "Travel & Places",
		subgroup: "place-geographic",
		codePoints: [
			127957,
			65039
		],
		status: "fully-qualified",
		emoji: "🏕️",
		tag: "E0.7",
		description: "camping"
	},
	{
		group: "Travel & Places",
		subgroup: "place-geographic",
		codePoints: [
			127957
		],
		status: "unqualified",
		emoji: "🏕",
		tag: "E0.7",
		description: "camping"
	},
	{
		group: "Travel & Places",
		subgroup: "place-geographic",
		codePoints: [
			127958,
			65039
		],
		status: "fully-qualified",
		emoji: "🏖️",
		tag: "E0.7",
		description: "beach with umbrella"
	},
	{
		group: "Travel & Places",
		subgroup: "place-geographic",
		codePoints: [
			127958
		],
		status: "unqualified",
		emoji: "🏖",
		tag: "E0.7",
		description: "beach with umbrella"
	},
	{
		group: "Travel & Places",
		subgroup: "place-geographic",
		codePoints: [
			127964,
			65039
		],
		status: "fully-qualified",
		emoji: "🏜️",
		tag: "E0.7",
		description: "desert"
	},
	{
		group: "Travel & Places",
		subgroup: "place-geographic",
		codePoints: [
			127964
		],
		status: "unqualified",
		emoji: "🏜",
		tag: "E0.7",
		description: "desert"
	},
	{
		group: "Travel & Places",
		subgroup: "place-geographic",
		codePoints: [
			127965,
			65039
		],
		status: "fully-qualified",
		emoji: "🏝️",
		tag: "E0.7",
		description: "desert island"
	},
	{
		group: "Travel & Places",
		subgroup: "place-geographic",
		codePoints: [
			127965
		],
		status: "unqualified",
		emoji: "🏝",
		tag: "E0.7",
		description: "desert island"
	},
	{
		group: "Travel & Places",
		subgroup: "place-geographic",
		codePoints: [
			127966,
			65039
		],
		status: "fully-qualified",
		emoji: "🏞️",
		tag: "E0.7",
		description: "national park"
	},
	{
		group: "Travel & Places",
		subgroup: "place-geographic",
		codePoints: [
			127966
		],
		status: "unqualified",
		emoji: "🏞",
		tag: "E0.7",
		description: "national park"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127967,
			65039
		],
		status: "fully-qualified",
		emoji: "🏟️",
		tag: "E0.7",
		description: "stadium"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127967
		],
		status: "unqualified",
		emoji: "🏟",
		tag: "E0.7",
		description: "stadium"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127963,
			65039
		],
		status: "fully-qualified",
		emoji: "🏛️",
		tag: "E0.7",
		description: "classical building"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127963
		],
		status: "unqualified",
		emoji: "🏛",
		tag: "E0.7",
		description: "classical building"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127959,
			65039
		],
		status: "fully-qualified",
		emoji: "🏗️",
		tag: "E0.7",
		description: "building construction"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127959
		],
		status: "unqualified",
		emoji: "🏗",
		tag: "E0.7",
		description: "building construction"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			129521
		],
		status: "fully-qualified",
		emoji: "🧱",
		tag: "E11.0",
		description: "brick"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			129704
		],
		status: "fully-qualified",
		emoji: "🪨",
		tag: "E13.0",
		description: "rock"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			129717
		],
		status: "fully-qualified",
		emoji: "🪵",
		tag: "E13.0",
		description: "wood"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			128726
		],
		status: "fully-qualified",
		emoji: "🛖",
		tag: "E13.0",
		description: "hut"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127960,
			65039
		],
		status: "fully-qualified",
		emoji: "🏘️",
		tag: "E0.7",
		description: "houses"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127960
		],
		status: "unqualified",
		emoji: "🏘",
		tag: "E0.7",
		description: "houses"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127962,
			65039
		],
		status: "fully-qualified",
		emoji: "🏚️",
		tag: "E0.7",
		description: "derelict house"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127962
		],
		status: "unqualified",
		emoji: "🏚",
		tag: "E0.7",
		description: "derelict house"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127968
		],
		status: "fully-qualified",
		emoji: "🏠",
		tag: "E0.6",
		description: "house"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127969
		],
		status: "fully-qualified",
		emoji: "🏡",
		tag: "E0.6",
		description: "house with garden"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127970
		],
		status: "fully-qualified",
		emoji: "🏢",
		tag: "E0.6",
		description: "office building"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127971
		],
		status: "fully-qualified",
		emoji: "🏣",
		tag: "E0.6",
		description: "Japanese post office"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127972
		],
		status: "fully-qualified",
		emoji: "🏤",
		tag: "E1.0",
		description: "post office"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127973
		],
		status: "fully-qualified",
		emoji: "🏥",
		tag: "E0.6",
		description: "hospital"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127974
		],
		status: "fully-qualified",
		emoji: "🏦",
		tag: "E0.6",
		description: "bank"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127976
		],
		status: "fully-qualified",
		emoji: "🏨",
		tag: "E0.6",
		description: "hotel"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127977
		],
		status: "fully-qualified",
		emoji: "🏩",
		tag: "E0.6",
		description: "love hotel"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127978
		],
		status: "fully-qualified",
		emoji: "🏪",
		tag: "E0.6",
		description: "convenience store"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127979
		],
		status: "fully-qualified",
		emoji: "🏫",
		tag: "E0.6",
		description: "school"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127980
		],
		status: "fully-qualified",
		emoji: "🏬",
		tag: "E0.6",
		description: "department store"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127981
		],
		status: "fully-qualified",
		emoji: "🏭",
		tag: "E0.6",
		description: "factory"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127983
		],
		status: "fully-qualified",
		emoji: "🏯",
		tag: "E0.6",
		description: "Japanese castle"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			127984
		],
		status: "fully-qualified",
		emoji: "🏰",
		tag: "E0.6",
		description: "castle"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			128146
		],
		status: "fully-qualified",
		emoji: "💒",
		tag: "E0.6",
		description: "wedding"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			128508
		],
		status: "fully-qualified",
		emoji: "🗼",
		tag: "E0.6",
		description: "Tokyo tower"
	},
	{
		group: "Travel & Places",
		subgroup: "place-building",
		codePoints: [
			128509
		],
		status: "fully-qualified",
		emoji: "🗽",
		tag: "E0.6",
		description: "Statue of Liberty"
	},
	{
		group: "Travel & Places",
		subgroup: "place-religious",
		codePoints: [
			9962
		],
		status: "fully-qualified",
		emoji: "⛪",
		tag: "E0.6",
		description: "church"
	},
	{
		group: "Travel & Places",
		subgroup: "place-religious",
		codePoints: [
			128332
		],
		status: "fully-qualified",
		emoji: "🕌",
		tag: "E1.0",
		description: "mosque"
	},
	{
		group: "Travel & Places",
		subgroup: "place-religious",
		codePoints: [
			128725
		],
		status: "fully-qualified",
		emoji: "🛕",
		tag: "E12.0",
		description: "hindu temple"
	},
	{
		group: "Travel & Places",
		subgroup: "place-religious",
		codePoints: [
			128333
		],
		status: "fully-qualified",
		emoji: "🕍",
		tag: "E1.0",
		description: "synagogue"
	},
	{
		group: "Travel & Places",
		subgroup: "place-religious",
		codePoints: [
			9961,
			65039
		],
		status: "fully-qualified",
		emoji: "⛩️",
		tag: "E0.7",
		description: "shinto shrine"
	},
	{
		group: "Travel & Places",
		subgroup: "place-religious",
		codePoints: [
			9961
		],
		status: "unqualified",
		emoji: "⛩",
		tag: "E0.7",
		description: "shinto shrine"
	},
	{
		group: "Travel & Places",
		subgroup: "place-religious",
		codePoints: [
			128331
		],
		status: "fully-qualified",
		emoji: "🕋",
		tag: "E1.0",
		description: "kaaba"
	},
	{
		group: "Travel & Places",
		subgroup: "place-other",
		codePoints: [
			9970
		],
		status: "fully-qualified",
		emoji: "⛲",
		tag: "E0.6",
		description: "fountain"
	},
	{
		group: "Travel & Places",
		subgroup: "place-other",
		codePoints: [
			9978
		],
		status: "fully-qualified",
		emoji: "⛺",
		tag: "E0.6",
		description: "tent"
	},
	{
		group: "Travel & Places",
		subgroup: "place-other",
		codePoints: [
			127745
		],
		status: "fully-qualified",
		emoji: "🌁",
		tag: "E0.6",
		description: "foggy"
	},
	{
		group: "Travel & Places",
		subgroup: "place-other",
		codePoints: [
			127747
		],
		status: "fully-qualified",
		emoji: "🌃",
		tag: "E0.6",
		description: "night with stars"
	},
	{
		group: "Travel & Places",
		subgroup: "place-other",
		codePoints: [
			127961,
			65039
		],
		status: "fully-qualified",
		emoji: "🏙️",
		tag: "E0.7",
		description: "cityscape"
	},
	{
		group: "Travel & Places",
		subgroup: "place-other",
		codePoints: [
			127961
		],
		status: "unqualified",
		emoji: "🏙",
		tag: "E0.7",
		description: "cityscape"
	},
	{
		group: "Travel & Places",
		subgroup: "place-other",
		codePoints: [
			127748
		],
		status: "fully-qualified",
		emoji: "🌄",
		tag: "E0.6",
		description: "sunrise over mountains"
	},
	{
		group: "Travel & Places",
		subgroup: "place-other",
		codePoints: [
			127749
		],
		status: "fully-qualified",
		emoji: "🌅",
		tag: "E0.6",
		description: "sunrise"
	},
	{
		group: "Travel & Places",
		subgroup: "place-other",
		codePoints: [
			127750
		],
		status: "fully-qualified",
		emoji: "🌆",
		tag: "E0.6",
		description: "cityscape at dusk"
	},
	{
		group: "Travel & Places",
		subgroup: "place-other",
		codePoints: [
			127751
		],
		status: "fully-qualified",
		emoji: "🌇",
		tag: "E0.6",
		description: "sunset"
	},
	{
		group: "Travel & Places",
		subgroup: "place-other",
		codePoints: [
			127753
		],
		status: "fully-qualified",
		emoji: "🌉",
		tag: "E0.6",
		description: "bridge at night"
	},
	{
		group: "Travel & Places",
		subgroup: "place-other",
		codePoints: [
			9832,
			65039
		],
		status: "fully-qualified",
		emoji: "♨️",
		tag: "E0.6",
		description: "hot springs"
	},
	{
		group: "Travel & Places",
		subgroup: "place-other",
		codePoints: [
			9832
		],
		status: "unqualified",
		emoji: "♨",
		tag: "E0.6",
		description: "hot springs"
	},
	{
		group: "Travel & Places",
		subgroup: "place-other",
		codePoints: [
			127904
		],
		status: "fully-qualified",
		emoji: "🎠",
		tag: "E0.6",
		description: "carousel horse"
	},
	{
		group: "Travel & Places",
		subgroup: "place-other",
		codePoints: [
			127905
		],
		status: "fully-qualified",
		emoji: "🎡",
		tag: "E0.6",
		description: "ferris wheel"
	},
	{
		group: "Travel & Places",
		subgroup: "place-other",
		codePoints: [
			127906
		],
		status: "fully-qualified",
		emoji: "🎢",
		tag: "E0.6",
		description: "roller coaster"
	},
	{
		group: "Travel & Places",
		subgroup: "place-other",
		codePoints: [
			128136
		],
		status: "fully-qualified",
		emoji: "💈",
		tag: "E0.6",
		description: "barber pole"
	},
	{
		group: "Travel & Places",
		subgroup: "place-other",
		codePoints: [
			127914
		],
		status: "fully-qualified",
		emoji: "🎪",
		tag: "E0.6",
		description: "circus tent"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128642
		],
		status: "fully-qualified",
		emoji: "🚂",
		tag: "E1.0",
		description: "locomotive"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128643
		],
		status: "fully-qualified",
		emoji: "🚃",
		tag: "E0.6",
		description: "railway car"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128644
		],
		status: "fully-qualified",
		emoji: "🚄",
		tag: "E0.6",
		description: "high-speed train"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128645
		],
		status: "fully-qualified",
		emoji: "🚅",
		tag: "E0.6",
		description: "bullet train"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128646
		],
		status: "fully-qualified",
		emoji: "🚆",
		tag: "E1.0",
		description: "train"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128647
		],
		status: "fully-qualified",
		emoji: "🚇",
		tag: "E0.6",
		description: "metro"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128648
		],
		status: "fully-qualified",
		emoji: "🚈",
		tag: "E1.0",
		description: "light rail"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128649
		],
		status: "fully-qualified",
		emoji: "🚉",
		tag: "E0.6",
		description: "station"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128650
		],
		status: "fully-qualified",
		emoji: "🚊",
		tag: "E1.0",
		description: "tram"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128669
		],
		status: "fully-qualified",
		emoji: "🚝",
		tag: "E1.0",
		description: "monorail"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128670
		],
		status: "fully-qualified",
		emoji: "🚞",
		tag: "E1.0",
		description: "mountain railway"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128651
		],
		status: "fully-qualified",
		emoji: "🚋",
		tag: "E1.0",
		description: "tram car"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128652
		],
		status: "fully-qualified",
		emoji: "🚌",
		tag: "E0.6",
		description: "bus"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128653
		],
		status: "fully-qualified",
		emoji: "🚍",
		tag: "E0.7",
		description: "oncoming bus"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128654
		],
		status: "fully-qualified",
		emoji: "🚎",
		tag: "E1.0",
		description: "trolleybus"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128656
		],
		status: "fully-qualified",
		emoji: "🚐",
		tag: "E1.0",
		description: "minibus"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128657
		],
		status: "fully-qualified",
		emoji: "🚑",
		tag: "E0.6",
		description: "ambulance"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128658
		],
		status: "fully-qualified",
		emoji: "🚒",
		tag: "E0.6",
		description: "fire engine"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128659
		],
		status: "fully-qualified",
		emoji: "🚓",
		tag: "E0.6",
		description: "police car"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128660
		],
		status: "fully-qualified",
		emoji: "🚔",
		tag: "E0.7",
		description: "oncoming police car"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128661
		],
		status: "fully-qualified",
		emoji: "🚕",
		tag: "E0.6",
		description: "taxi"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128662
		],
		status: "fully-qualified",
		emoji: "🚖",
		tag: "E1.0",
		description: "oncoming taxi"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128663
		],
		status: "fully-qualified",
		emoji: "🚗",
		tag: "E0.6",
		description: "automobile"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128664
		],
		status: "fully-qualified",
		emoji: "🚘",
		tag: "E0.7",
		description: "oncoming automobile"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128665
		],
		status: "fully-qualified",
		emoji: "🚙",
		tag: "E0.6",
		description: "sport utility vehicle"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128763
		],
		status: "fully-qualified",
		emoji: "🛻",
		tag: "E13.0",
		description: "pickup truck"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128666
		],
		status: "fully-qualified",
		emoji: "🚚",
		tag: "E0.6",
		description: "delivery truck"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128667
		],
		status: "fully-qualified",
		emoji: "🚛",
		tag: "E1.0",
		description: "articulated lorry"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128668
		],
		status: "fully-qualified",
		emoji: "🚜",
		tag: "E1.0",
		description: "tractor"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			127950,
			65039
		],
		status: "fully-qualified",
		emoji: "🏎️",
		tag: "E0.7",
		description: "racing car"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			127950
		],
		status: "unqualified",
		emoji: "🏎",
		tag: "E0.7",
		description: "racing car"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			127949,
			65039
		],
		status: "fully-qualified",
		emoji: "🏍️",
		tag: "E0.7",
		description: "motorcycle"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			127949
		],
		status: "unqualified",
		emoji: "🏍",
		tag: "E0.7",
		description: "motorcycle"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128757
		],
		status: "fully-qualified",
		emoji: "🛵",
		tag: "E3.0",
		description: "motor scooter"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			129469
		],
		status: "fully-qualified",
		emoji: "🦽",
		tag: "E12.0",
		description: "manual wheelchair"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			129468
		],
		status: "fully-qualified",
		emoji: "🦼",
		tag: "E12.0",
		description: "motorized wheelchair"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128762
		],
		status: "fully-qualified",
		emoji: "🛺",
		tag: "E12.0",
		description: "auto rickshaw"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128690
		],
		status: "fully-qualified",
		emoji: "🚲",
		tag: "E0.6",
		description: "bicycle"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128756
		],
		status: "fully-qualified",
		emoji: "🛴",
		tag: "E3.0",
		description: "kick scooter"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128761
		],
		status: "fully-qualified",
		emoji: "🛹",
		tag: "E11.0",
		description: "skateboard"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128764
		],
		status: "fully-qualified",
		emoji: "🛼",
		tag: "E13.0",
		description: "roller skate"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128655
		],
		status: "fully-qualified",
		emoji: "🚏",
		tag: "E0.6",
		description: "bus stop"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128739,
			65039
		],
		status: "fully-qualified",
		emoji: "🛣️",
		tag: "E0.7",
		description: "motorway"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128739
		],
		status: "unqualified",
		emoji: "🛣",
		tag: "E0.7",
		description: "motorway"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128740,
			65039
		],
		status: "fully-qualified",
		emoji: "🛤️",
		tag: "E0.7",
		description: "railway track"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128740
		],
		status: "unqualified",
		emoji: "🛤",
		tag: "E0.7",
		description: "railway track"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128738,
			65039
		],
		status: "fully-qualified",
		emoji: "🛢️",
		tag: "E0.7",
		description: "oil drum"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128738
		],
		status: "unqualified",
		emoji: "🛢",
		tag: "E0.7",
		description: "oil drum"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			9981
		],
		status: "fully-qualified",
		emoji: "⛽",
		tag: "E0.6",
		description: "fuel pump"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128680
		],
		status: "fully-qualified",
		emoji: "🚨",
		tag: "E0.6",
		description: "police car light"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128677
		],
		status: "fully-qualified",
		emoji: "🚥",
		tag: "E0.6",
		description: "horizontal traffic light"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128678
		],
		status: "fully-qualified",
		emoji: "🚦",
		tag: "E1.0",
		description: "vertical traffic light"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128721
		],
		status: "fully-qualified",
		emoji: "🛑",
		tag: "E3.0",
		description: "stop sign"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-ground",
		codePoints: [
			128679
		],
		status: "fully-qualified",
		emoji: "🚧",
		tag: "E0.6",
		description: "construction"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-water",
		codePoints: [
			9875
		],
		status: "fully-qualified",
		emoji: "⚓",
		tag: "E0.6",
		description: "anchor"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-water",
		codePoints: [
			9973
		],
		status: "fully-qualified",
		emoji: "⛵",
		tag: "E0.6",
		description: "sailboat"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-water",
		codePoints: [
			128758
		],
		status: "fully-qualified",
		emoji: "🛶",
		tag: "E3.0",
		description: "canoe"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-water",
		codePoints: [
			128676
		],
		status: "fully-qualified",
		emoji: "🚤",
		tag: "E0.6",
		description: "speedboat"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-water",
		codePoints: [
			128755,
			65039
		],
		status: "fully-qualified",
		emoji: "🛳️",
		tag: "E0.7",
		description: "passenger ship"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-water",
		codePoints: [
			128755
		],
		status: "unqualified",
		emoji: "🛳",
		tag: "E0.7",
		description: "passenger ship"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-water",
		codePoints: [
			9972,
			65039
		],
		status: "fully-qualified",
		emoji: "⛴️",
		tag: "E0.7",
		description: "ferry"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-water",
		codePoints: [
			9972
		],
		status: "unqualified",
		emoji: "⛴",
		tag: "E0.7",
		description: "ferry"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-water",
		codePoints: [
			128741,
			65039
		],
		status: "fully-qualified",
		emoji: "🛥️",
		tag: "E0.7",
		description: "motor boat"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-water",
		codePoints: [
			128741
		],
		status: "unqualified",
		emoji: "🛥",
		tag: "E0.7",
		description: "motor boat"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-water",
		codePoints: [
			128674
		],
		status: "fully-qualified",
		emoji: "🚢",
		tag: "E0.6",
		description: "ship"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-air",
		codePoints: [
			9992,
			65039
		],
		status: "fully-qualified",
		emoji: "✈️",
		tag: "E0.6",
		description: "airplane"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-air",
		codePoints: [
			9992
		],
		status: "unqualified",
		emoji: "✈",
		tag: "E0.6",
		description: "airplane"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-air",
		codePoints: [
			128745,
			65039
		],
		status: "fully-qualified",
		emoji: "🛩️",
		tag: "E0.7",
		description: "small airplane"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-air",
		codePoints: [
			128745
		],
		status: "unqualified",
		emoji: "🛩",
		tag: "E0.7",
		description: "small airplane"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-air",
		codePoints: [
			128747
		],
		status: "fully-qualified",
		emoji: "🛫",
		tag: "E1.0",
		description: "airplane departure"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-air",
		codePoints: [
			128748
		],
		status: "fully-qualified",
		emoji: "🛬",
		tag: "E1.0",
		description: "airplane arrival"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-air",
		codePoints: [
			129666
		],
		status: "fully-qualified",
		emoji: "🪂",
		tag: "E12.0",
		description: "parachute"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-air",
		codePoints: [
			128186
		],
		status: "fully-qualified",
		emoji: "💺",
		tag: "E0.6",
		description: "seat"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-air",
		codePoints: [
			128641
		],
		status: "fully-qualified",
		emoji: "🚁",
		tag: "E1.0",
		description: "helicopter"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-air",
		codePoints: [
			128671
		],
		status: "fully-qualified",
		emoji: "🚟",
		tag: "E1.0",
		description: "suspension railway"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-air",
		codePoints: [
			128672
		],
		status: "fully-qualified",
		emoji: "🚠",
		tag: "E1.0",
		description: "mountain cableway"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-air",
		codePoints: [
			128673
		],
		status: "fully-qualified",
		emoji: "🚡",
		tag: "E1.0",
		description: "aerial tramway"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-air",
		codePoints: [
			128752,
			65039
		],
		status: "fully-qualified",
		emoji: "🛰️",
		tag: "E0.7",
		description: "satellite"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-air",
		codePoints: [
			128752
		],
		status: "unqualified",
		emoji: "🛰",
		tag: "E0.7",
		description: "satellite"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-air",
		codePoints: [
			128640
		],
		status: "fully-qualified",
		emoji: "🚀",
		tag: "E0.6",
		description: "rocket"
	},
	{
		group: "Travel & Places",
		subgroup: "transport-air",
		codePoints: [
			128760
		],
		status: "fully-qualified",
		emoji: "🛸",
		tag: "E5.0",
		description: "flying saucer"
	},
	{
		group: "Travel & Places",
		subgroup: "hotel",
		codePoints: [
			128718,
			65039
		],
		status: "fully-qualified",
		emoji: "🛎️",
		tag: "E0.7",
		description: "bellhop bell"
	},
	{
		group: "Travel & Places",
		subgroup: "hotel",
		codePoints: [
			128718
		],
		status: "unqualified",
		emoji: "🛎",
		tag: "E0.7",
		description: "bellhop bell"
	},
	{
		group: "Travel & Places",
		subgroup: "hotel",
		codePoints: [
			129523
		],
		status: "fully-qualified",
		emoji: "🧳",
		tag: "E11.0",
		description: "luggage"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			8987
		],
		status: "fully-qualified",
		emoji: "⌛",
		tag: "E0.6",
		description: "hourglass done"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			9203
		],
		status: "fully-qualified",
		emoji: "⏳",
		tag: "E0.6",
		description: "hourglass not done"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			8986
		],
		status: "fully-qualified",
		emoji: "⌚",
		tag: "E0.6",
		description: "watch"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			9200
		],
		status: "fully-qualified",
		emoji: "⏰",
		tag: "E0.6",
		description: "alarm clock"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			9201,
			65039
		],
		status: "fully-qualified",
		emoji: "⏱️",
		tag: "E1.0",
		description: "stopwatch"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			9201
		],
		status: "unqualified",
		emoji: "⏱",
		tag: "E1.0",
		description: "stopwatch"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			9202,
			65039
		],
		status: "fully-qualified",
		emoji: "⏲️",
		tag: "E1.0",
		description: "timer clock"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			9202
		],
		status: "unqualified",
		emoji: "⏲",
		tag: "E1.0",
		description: "timer clock"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128368,
			65039
		],
		status: "fully-qualified",
		emoji: "🕰️",
		tag: "E0.7",
		description: "mantelpiece clock"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128368
		],
		status: "unqualified",
		emoji: "🕰",
		tag: "E0.7",
		description: "mantelpiece clock"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128347
		],
		status: "fully-qualified",
		emoji: "🕛",
		tag: "E0.6",
		description: "twelve o’clock"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128359
		],
		status: "fully-qualified",
		emoji: "🕧",
		tag: "E0.7",
		description: "twelve-thirty"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128336
		],
		status: "fully-qualified",
		emoji: "🕐",
		tag: "E0.6",
		description: "one o’clock"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128348
		],
		status: "fully-qualified",
		emoji: "🕜",
		tag: "E0.7",
		description: "one-thirty"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128337
		],
		status: "fully-qualified",
		emoji: "🕑",
		tag: "E0.6",
		description: "two o’clock"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128349
		],
		status: "fully-qualified",
		emoji: "🕝",
		tag: "E0.7",
		description: "two-thirty"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128338
		],
		status: "fully-qualified",
		emoji: "🕒",
		tag: "E0.6",
		description: "three o’clock"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128350
		],
		status: "fully-qualified",
		emoji: "🕞",
		tag: "E0.7",
		description: "three-thirty"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128339
		],
		status: "fully-qualified",
		emoji: "🕓",
		tag: "E0.6",
		description: "four o’clock"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128351
		],
		status: "fully-qualified",
		emoji: "🕟",
		tag: "E0.7",
		description: "four-thirty"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128340
		],
		status: "fully-qualified",
		emoji: "🕔",
		tag: "E0.6",
		description: "five o’clock"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128352
		],
		status: "fully-qualified",
		emoji: "🕠",
		tag: "E0.7",
		description: "five-thirty"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128341
		],
		status: "fully-qualified",
		emoji: "🕕",
		tag: "E0.6",
		description: "six o’clock"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128353
		],
		status: "fully-qualified",
		emoji: "🕡",
		tag: "E0.7",
		description: "six-thirty"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128342
		],
		status: "fully-qualified",
		emoji: "🕖",
		tag: "E0.6",
		description: "seven o’clock"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128354
		],
		status: "fully-qualified",
		emoji: "🕢",
		tag: "E0.7",
		description: "seven-thirty"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128343
		],
		status: "fully-qualified",
		emoji: "🕗",
		tag: "E0.6",
		description: "eight o’clock"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128355
		],
		status: "fully-qualified",
		emoji: "🕣",
		tag: "E0.7",
		description: "eight-thirty"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128344
		],
		status: "fully-qualified",
		emoji: "🕘",
		tag: "E0.6",
		description: "nine o’clock"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128356
		],
		status: "fully-qualified",
		emoji: "🕤",
		tag: "E0.7",
		description: "nine-thirty"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128345
		],
		status: "fully-qualified",
		emoji: "🕙",
		tag: "E0.6",
		description: "ten o’clock"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128357
		],
		status: "fully-qualified",
		emoji: "🕥",
		tag: "E0.7",
		description: "ten-thirty"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128346
		],
		status: "fully-qualified",
		emoji: "🕚",
		tag: "E0.6",
		description: "eleven o’clock"
	},
	{
		group: "Travel & Places",
		subgroup: "time",
		codePoints: [
			128358
		],
		status: "fully-qualified",
		emoji: "🕦",
		tag: "E0.7",
		description: "eleven-thirty"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127761
		],
		status: "fully-qualified",
		emoji: "🌑",
		tag: "E0.6",
		description: "new moon"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127762
		],
		status: "fully-qualified",
		emoji: "🌒",
		tag: "E1.0",
		description: "waxing crescent moon"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127763
		],
		status: "fully-qualified",
		emoji: "🌓",
		tag: "E0.6",
		description: "first quarter moon"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127764
		],
		status: "fully-qualified",
		emoji: "🌔",
		tag: "E0.6",
		description: "waxing gibbous moon"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127765
		],
		status: "fully-qualified",
		emoji: "🌕",
		tag: "E0.6",
		description: "full moon"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127766
		],
		status: "fully-qualified",
		emoji: "🌖",
		tag: "E1.0",
		description: "waning gibbous moon"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127767
		],
		status: "fully-qualified",
		emoji: "🌗",
		tag: "E1.0",
		description: "last quarter moon"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127768
		],
		status: "fully-qualified",
		emoji: "🌘",
		tag: "E1.0",
		description: "waning crescent moon"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127769
		],
		status: "fully-qualified",
		emoji: "🌙",
		tag: "E0.6",
		description: "crescent moon"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127770
		],
		status: "fully-qualified",
		emoji: "🌚",
		tag: "E1.0",
		description: "new moon face"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127771
		],
		status: "fully-qualified",
		emoji: "🌛",
		tag: "E0.6",
		description: "first quarter moon face"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127772
		],
		status: "fully-qualified",
		emoji: "🌜",
		tag: "E0.7",
		description: "last quarter moon face"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127777,
			65039
		],
		status: "fully-qualified",
		emoji: "🌡️",
		tag: "E0.7",
		description: "thermometer"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127777
		],
		status: "unqualified",
		emoji: "🌡",
		tag: "E0.7",
		description: "thermometer"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			9728,
			65039
		],
		status: "fully-qualified",
		emoji: "☀️",
		tag: "E0.6",
		description: "sun"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			9728
		],
		status: "unqualified",
		emoji: "☀",
		tag: "E0.6",
		description: "sun"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127773
		],
		status: "fully-qualified",
		emoji: "🌝",
		tag: "E1.0",
		description: "full moon face"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127774
		],
		status: "fully-qualified",
		emoji: "🌞",
		tag: "E1.0",
		description: "sun with face"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			129680
		],
		status: "fully-qualified",
		emoji: "🪐",
		tag: "E12.0",
		description: "ringed planet"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			11088
		],
		status: "fully-qualified",
		emoji: "⭐",
		tag: "E0.6",
		description: "star"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127775
		],
		status: "fully-qualified",
		emoji: "🌟",
		tag: "E0.6",
		description: "glowing star"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127776
		],
		status: "fully-qualified",
		emoji: "🌠",
		tag: "E0.6",
		description: "shooting star"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127756
		],
		status: "fully-qualified",
		emoji: "🌌",
		tag: "E0.6",
		description: "milky way"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			9729,
			65039
		],
		status: "fully-qualified",
		emoji: "☁️",
		tag: "E0.6",
		description: "cloud"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			9729
		],
		status: "unqualified",
		emoji: "☁",
		tag: "E0.6",
		description: "cloud"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			9925
		],
		status: "fully-qualified",
		emoji: "⛅",
		tag: "E0.6",
		description: "sun behind cloud"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			9928,
			65039
		],
		status: "fully-qualified",
		emoji: "⛈️",
		tag: "E0.7",
		description: "cloud with lightning and rain"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			9928
		],
		status: "unqualified",
		emoji: "⛈",
		tag: "E0.7",
		description: "cloud with lightning and rain"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127780,
			65039
		],
		status: "fully-qualified",
		emoji: "🌤️",
		tag: "E0.7",
		description: "sun behind small cloud"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127780
		],
		status: "unqualified",
		emoji: "🌤",
		tag: "E0.7",
		description: "sun behind small cloud"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127781,
			65039
		],
		status: "fully-qualified",
		emoji: "🌥️",
		tag: "E0.7",
		description: "sun behind large cloud"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127781
		],
		status: "unqualified",
		emoji: "🌥",
		tag: "E0.7",
		description: "sun behind large cloud"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127782,
			65039
		],
		status: "fully-qualified",
		emoji: "🌦️",
		tag: "E0.7",
		description: "sun behind rain cloud"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127782
		],
		status: "unqualified",
		emoji: "🌦",
		tag: "E0.7",
		description: "sun behind rain cloud"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127783,
			65039
		],
		status: "fully-qualified",
		emoji: "🌧️",
		tag: "E0.7",
		description: "cloud with rain"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127783
		],
		status: "unqualified",
		emoji: "🌧",
		tag: "E0.7",
		description: "cloud with rain"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127784,
			65039
		],
		status: "fully-qualified",
		emoji: "🌨️",
		tag: "E0.7",
		description: "cloud with snow"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127784
		],
		status: "unqualified",
		emoji: "🌨",
		tag: "E0.7",
		description: "cloud with snow"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127785,
			65039
		],
		status: "fully-qualified",
		emoji: "🌩️",
		tag: "E0.7",
		description: "cloud with lightning"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127785
		],
		status: "unqualified",
		emoji: "🌩",
		tag: "E0.7",
		description: "cloud with lightning"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127786,
			65039
		],
		status: "fully-qualified",
		emoji: "🌪️",
		tag: "E0.7",
		description: "tornado"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127786
		],
		status: "unqualified",
		emoji: "🌪",
		tag: "E0.7",
		description: "tornado"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127787,
			65039
		],
		status: "fully-qualified",
		emoji: "🌫️",
		tag: "E0.7",
		description: "fog"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127787
		],
		status: "unqualified",
		emoji: "🌫",
		tag: "E0.7",
		description: "fog"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127788,
			65039
		],
		status: "fully-qualified",
		emoji: "🌬️",
		tag: "E0.7",
		description: "wind face"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127788
		],
		status: "unqualified",
		emoji: "🌬",
		tag: "E0.7",
		description: "wind face"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127744
		],
		status: "fully-qualified",
		emoji: "🌀",
		tag: "E0.6",
		description: "cyclone"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127752
		],
		status: "fully-qualified",
		emoji: "🌈",
		tag: "E0.6",
		description: "rainbow"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127746
		],
		status: "fully-qualified",
		emoji: "🌂",
		tag: "E0.6",
		description: "closed umbrella"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			9730,
			65039
		],
		status: "fully-qualified",
		emoji: "☂️",
		tag: "E0.7",
		description: "umbrella"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			9730
		],
		status: "unqualified",
		emoji: "☂",
		tag: "E0.7",
		description: "umbrella"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			9748
		],
		status: "fully-qualified",
		emoji: "☔",
		tag: "E0.6",
		description: "umbrella with rain drops"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			9969,
			65039
		],
		status: "fully-qualified",
		emoji: "⛱️",
		tag: "E0.7",
		description: "umbrella on ground"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			9969
		],
		status: "unqualified",
		emoji: "⛱",
		tag: "E0.7",
		description: "umbrella on ground"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			9889
		],
		status: "fully-qualified",
		emoji: "⚡",
		tag: "E0.6",
		description: "high voltage"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			10052,
			65039
		],
		status: "fully-qualified",
		emoji: "❄️",
		tag: "E0.6",
		description: "snowflake"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			10052
		],
		status: "unqualified",
		emoji: "❄",
		tag: "E0.6",
		description: "snowflake"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			9731,
			65039
		],
		status: "fully-qualified",
		emoji: "☃️",
		tag: "E0.7",
		description: "snowman"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			9731
		],
		status: "unqualified",
		emoji: "☃",
		tag: "E0.7",
		description: "snowman"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			9924
		],
		status: "fully-qualified",
		emoji: "⛄",
		tag: "E0.6",
		description: "snowman without snow"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			9732,
			65039
		],
		status: "fully-qualified",
		emoji: "☄️",
		tag: "E1.0",
		description: "comet"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			9732
		],
		status: "unqualified",
		emoji: "☄",
		tag: "E1.0",
		description: "comet"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			128293
		],
		status: "fully-qualified",
		emoji: "🔥",
		tag: "E0.6",
		description: "fire"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			128167
		],
		status: "fully-qualified",
		emoji: "💧",
		tag: "E0.6",
		description: "droplet"
	},
	{
		group: "Travel & Places",
		subgroup: "sky & weather",
		codePoints: [
			127754
		],
		status: "fully-qualified",
		emoji: "🌊",
		tag: "E0.6",
		description: "water wave"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			127875
		],
		status: "fully-qualified",
		emoji: "🎃",
		tag: "E0.6",
		description: "jack-o-lantern"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			127876
		],
		status: "fully-qualified",
		emoji: "🎄",
		tag: "E0.6",
		description: "Christmas tree"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			127878
		],
		status: "fully-qualified",
		emoji: "🎆",
		tag: "E0.6",
		description: "fireworks"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			127879
		],
		status: "fully-qualified",
		emoji: "🎇",
		tag: "E0.6",
		description: "sparkler"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			129512
		],
		status: "fully-qualified",
		emoji: "🧨",
		tag: "E11.0",
		description: "firecracker"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			10024
		],
		status: "fully-qualified",
		emoji: "✨",
		tag: "E0.6",
		description: "sparkles"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			127880
		],
		status: "fully-qualified",
		emoji: "🎈",
		tag: "E0.6",
		description: "balloon"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			127881
		],
		status: "fully-qualified",
		emoji: "🎉",
		tag: "E0.6",
		description: "party popper"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			127882
		],
		status: "fully-qualified",
		emoji: "🎊",
		tag: "E0.6",
		description: "confetti ball"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			127883
		],
		status: "fully-qualified",
		emoji: "🎋",
		tag: "E0.6",
		description: "tanabata tree"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			127885
		],
		status: "fully-qualified",
		emoji: "🎍",
		tag: "E0.6",
		description: "pine decoration"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			127886
		],
		status: "fully-qualified",
		emoji: "🎎",
		tag: "E0.6",
		description: "Japanese dolls"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			127887
		],
		status: "fully-qualified",
		emoji: "🎏",
		tag: "E0.6",
		description: "carp streamer"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			127888
		],
		status: "fully-qualified",
		emoji: "🎐",
		tag: "E0.6",
		description: "wind chime"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			127889
		],
		status: "fully-qualified",
		emoji: "🎑",
		tag: "E0.6",
		description: "moon viewing ceremony"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			129511
		],
		status: "fully-qualified",
		emoji: "🧧",
		tag: "E11.0",
		description: "red envelope"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			127872
		],
		status: "fully-qualified",
		emoji: "🎀",
		tag: "E0.6",
		description: "ribbon"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			127873
		],
		status: "fully-qualified",
		emoji: "🎁",
		tag: "E0.6",
		description: "wrapped gift"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			127895,
			65039
		],
		status: "fully-qualified",
		emoji: "🎗️",
		tag: "E0.7",
		description: "reminder ribbon"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			127895
		],
		status: "unqualified",
		emoji: "🎗",
		tag: "E0.7",
		description: "reminder ribbon"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			127903,
			65039
		],
		status: "fully-qualified",
		emoji: "🎟️",
		tag: "E0.7",
		description: "admission tickets"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			127903
		],
		status: "unqualified",
		emoji: "🎟",
		tag: "E0.7",
		description: "admission tickets"
	},
	{
		group: "Activities",
		subgroup: "event",
		codePoints: [
			127915
		],
		status: "fully-qualified",
		emoji: "🎫",
		tag: "E0.6",
		description: "ticket"
	},
	{
		group: "Activities",
		subgroup: "award-medal",
		codePoints: [
			127894,
			65039
		],
		status: "fully-qualified",
		emoji: "🎖️",
		tag: "E0.7",
		description: "military medal"
	},
	{
		group: "Activities",
		subgroup: "award-medal",
		codePoints: [
			127894
		],
		status: "unqualified",
		emoji: "🎖",
		tag: "E0.7",
		description: "military medal"
	},
	{
		group: "Activities",
		subgroup: "award-medal",
		codePoints: [
			127942
		],
		status: "fully-qualified",
		emoji: "🏆",
		tag: "E0.6",
		description: "trophy"
	},
	{
		group: "Activities",
		subgroup: "award-medal",
		codePoints: [
			127941
		],
		status: "fully-qualified",
		emoji: "🏅",
		tag: "E1.0",
		description: "sports medal"
	},
	{
		group: "Activities",
		subgroup: "award-medal",
		codePoints: [
			129351
		],
		status: "fully-qualified",
		emoji: "🥇",
		tag: "E3.0",
		description: "1st place medal"
	},
	{
		group: "Activities",
		subgroup: "award-medal",
		codePoints: [
			129352
		],
		status: "fully-qualified",
		emoji: "🥈",
		tag: "E3.0",
		description: "2nd place medal"
	},
	{
		group: "Activities",
		subgroup: "award-medal",
		codePoints: [
			129353
		],
		status: "fully-qualified",
		emoji: "🥉",
		tag: "E3.0",
		description: "3rd place medal"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			9917
		],
		status: "fully-qualified",
		emoji: "⚽",
		tag: "E0.6",
		description: "soccer ball"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			9918
		],
		status: "fully-qualified",
		emoji: "⚾",
		tag: "E0.6",
		description: "baseball"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			129358
		],
		status: "fully-qualified",
		emoji: "🥎",
		tag: "E11.0",
		description: "softball"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			127936
		],
		status: "fully-qualified",
		emoji: "🏀",
		tag: "E0.6",
		description: "basketball"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			127952
		],
		status: "fully-qualified",
		emoji: "🏐",
		tag: "E1.0",
		description: "volleyball"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			127944
		],
		status: "fully-qualified",
		emoji: "🏈",
		tag: "E0.6",
		description: "american football"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			127945
		],
		status: "fully-qualified",
		emoji: "🏉",
		tag: "E1.0",
		description: "rugby football"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			127934
		],
		status: "fully-qualified",
		emoji: "🎾",
		tag: "E0.6",
		description: "tennis"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			129359
		],
		status: "fully-qualified",
		emoji: "🥏",
		tag: "E11.0",
		description: "flying disc"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			127923
		],
		status: "fully-qualified",
		emoji: "🎳",
		tag: "E0.6",
		description: "bowling"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			127951
		],
		status: "fully-qualified",
		emoji: "🏏",
		tag: "E1.0",
		description: "cricket game"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			127953
		],
		status: "fully-qualified",
		emoji: "🏑",
		tag: "E1.0",
		description: "field hockey"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			127954
		],
		status: "fully-qualified",
		emoji: "🏒",
		tag: "E1.0",
		description: "ice hockey"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			129357
		],
		status: "fully-qualified",
		emoji: "🥍",
		tag: "E11.0",
		description: "lacrosse"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			127955
		],
		status: "fully-qualified",
		emoji: "🏓",
		tag: "E1.0",
		description: "ping pong"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			127992
		],
		status: "fully-qualified",
		emoji: "🏸",
		tag: "E1.0",
		description: "badminton"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			129354
		],
		status: "fully-qualified",
		emoji: "🥊",
		tag: "E3.0",
		description: "boxing glove"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			129355
		],
		status: "fully-qualified",
		emoji: "🥋",
		tag: "E3.0",
		description: "martial arts uniform"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			129349
		],
		status: "fully-qualified",
		emoji: "🥅",
		tag: "E3.0",
		description: "goal net"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			9971
		],
		status: "fully-qualified",
		emoji: "⛳",
		tag: "E0.6",
		description: "flag in hole"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			9976,
			65039
		],
		status: "fully-qualified",
		emoji: "⛸️",
		tag: "E0.7",
		description: "ice skate"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			9976
		],
		status: "unqualified",
		emoji: "⛸",
		tag: "E0.7",
		description: "ice skate"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			127907
		],
		status: "fully-qualified",
		emoji: "🎣",
		tag: "E0.6",
		description: "fishing pole"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			129343
		],
		status: "fully-qualified",
		emoji: "🤿",
		tag: "E12.0",
		description: "diving mask"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			127933
		],
		status: "fully-qualified",
		emoji: "🎽",
		tag: "E0.6",
		description: "running shirt"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			127935
		],
		status: "fully-qualified",
		emoji: "🎿",
		tag: "E0.6",
		description: "skis"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			128759
		],
		status: "fully-qualified",
		emoji: "🛷",
		tag: "E5.0",
		description: "sled"
	},
	{
		group: "Activities",
		subgroup: "sport",
		codePoints: [
			129356
		],
		status: "fully-qualified",
		emoji: "🥌",
		tag: "E5.0",
		description: "curling stone"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			127919
		],
		status: "fully-qualified",
		emoji: "🎯",
		tag: "E0.6",
		description: "direct hit"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			129664
		],
		status: "fully-qualified",
		emoji: "🪀",
		tag: "E12.0",
		description: "yo-yo"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			129665
		],
		status: "fully-qualified",
		emoji: "🪁",
		tag: "E12.0",
		description: "kite"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			127921
		],
		status: "fully-qualified",
		emoji: "🎱",
		tag: "E0.6",
		description: "pool 8 ball"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			128302
		],
		status: "fully-qualified",
		emoji: "🔮",
		tag: "E0.6",
		description: "crystal ball"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			129668
		],
		status: "fully-qualified",
		emoji: "🪄",
		tag: "E13.0",
		description: "magic wand"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			129535
		],
		status: "fully-qualified",
		emoji: "🧿",
		tag: "E11.0",
		description: "nazar amulet"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			127918
		],
		status: "fully-qualified",
		emoji: "🎮",
		tag: "E0.6",
		description: "video game"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			128377,
			65039
		],
		status: "fully-qualified",
		emoji: "🕹️",
		tag: "E0.7",
		description: "joystick"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			128377
		],
		status: "unqualified",
		emoji: "🕹",
		tag: "E0.7",
		description: "joystick"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			127920
		],
		status: "fully-qualified",
		emoji: "🎰",
		tag: "E0.6",
		description: "slot machine"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			127922
		],
		status: "fully-qualified",
		emoji: "🎲",
		tag: "E0.6",
		description: "game die"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			129513
		],
		status: "fully-qualified",
		emoji: "🧩",
		tag: "E11.0",
		description: "puzzle piece"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			129528
		],
		status: "fully-qualified",
		emoji: "🧸",
		tag: "E11.0",
		description: "teddy bear"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			129669
		],
		status: "fully-qualified",
		emoji: "🪅",
		tag: "E13.0",
		description: "piñata"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			129670
		],
		status: "fully-qualified",
		emoji: "🪆",
		tag: "E13.0",
		description: "nesting dolls"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			9824,
			65039
		],
		status: "fully-qualified",
		emoji: "♠️",
		tag: "E0.6",
		description: "spade suit"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			9824
		],
		status: "unqualified",
		emoji: "♠",
		tag: "E0.6",
		description: "spade suit"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			9829,
			65039
		],
		status: "fully-qualified",
		emoji: "♥️",
		tag: "E0.6",
		description: "heart suit"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			9829
		],
		status: "unqualified",
		emoji: "♥",
		tag: "E0.6",
		description: "heart suit"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			9830,
			65039
		],
		status: "fully-qualified",
		emoji: "♦️",
		tag: "E0.6",
		description: "diamond suit"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			9830
		],
		status: "unqualified",
		emoji: "♦",
		tag: "E0.6",
		description: "diamond suit"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			9827,
			65039
		],
		status: "fully-qualified",
		emoji: "♣️",
		tag: "E0.6",
		description: "club suit"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			9827
		],
		status: "unqualified",
		emoji: "♣",
		tag: "E0.6",
		description: "club suit"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			9823,
			65039
		],
		status: "fully-qualified",
		emoji: "♟️",
		tag: "E11.0",
		description: "chess pawn"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			9823
		],
		status: "unqualified",
		emoji: "♟",
		tag: "E11.0",
		description: "chess pawn"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			127183
		],
		status: "fully-qualified",
		emoji: "🃏",
		tag: "E0.6",
		description: "joker"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			126980
		],
		status: "fully-qualified",
		emoji: "🀄",
		tag: "E0.6",
		description: "mahjong red dragon"
	},
	{
		group: "Activities",
		subgroup: "game",
		codePoints: [
			127924
		],
		status: "fully-qualified",
		emoji: "🎴",
		tag: "E0.6",
		description: "flower playing cards"
	},
	{
		group: "Activities",
		subgroup: "arts & crafts",
		codePoints: [
			127917
		],
		status: "fully-qualified",
		emoji: "🎭",
		tag: "E0.6",
		description: "performing arts"
	},
	{
		group: "Activities",
		subgroup: "arts & crafts",
		codePoints: [
			128444,
			65039
		],
		status: "fully-qualified",
		emoji: "🖼️",
		tag: "E0.7",
		description: "framed picture"
	},
	{
		group: "Activities",
		subgroup: "arts & crafts",
		codePoints: [
			128444
		],
		status: "unqualified",
		emoji: "🖼",
		tag: "E0.7",
		description: "framed picture"
	},
	{
		group: "Activities",
		subgroup: "arts & crafts",
		codePoints: [
			127912
		],
		status: "fully-qualified",
		emoji: "🎨",
		tag: "E0.6",
		description: "artist palette"
	},
	{
		group: "Activities",
		subgroup: "arts & crafts",
		codePoints: [
			129525
		],
		status: "fully-qualified",
		emoji: "🧵",
		tag: "E11.0",
		description: "thread"
	},
	{
		group: "Activities",
		subgroup: "arts & crafts",
		codePoints: [
			129697
		],
		status: "fully-qualified",
		emoji: "🪡",
		tag: "E13.0",
		description: "sewing needle"
	},
	{
		group: "Activities",
		subgroup: "arts & crafts",
		codePoints: [
			129526
		],
		status: "fully-qualified",
		emoji: "🧶",
		tag: "E11.0",
		description: "yarn"
	},
	{
		group: "Activities",
		subgroup: "arts & crafts",
		codePoints: [
			129698
		],
		status: "fully-qualified",
		emoji: "🪢",
		tag: "E13.0",
		description: "knot"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128083
		],
		status: "fully-qualified",
		emoji: "👓",
		tag: "E0.6",
		description: "glasses"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128374,
			65039
		],
		status: "fully-qualified",
		emoji: "🕶️",
		tag: "E0.7",
		description: "sunglasses"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128374
		],
		status: "unqualified",
		emoji: "🕶",
		tag: "E0.7",
		description: "sunglasses"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			129405
		],
		status: "fully-qualified",
		emoji: "🥽",
		tag: "E11.0",
		description: "goggles"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			129404
		],
		status: "fully-qualified",
		emoji: "🥼",
		tag: "E11.0",
		description: "lab coat"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			129466
		],
		status: "fully-qualified",
		emoji: "🦺",
		tag: "E12.0",
		description: "safety vest"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128084
		],
		status: "fully-qualified",
		emoji: "👔",
		tag: "E0.6",
		description: "necktie"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128085
		],
		status: "fully-qualified",
		emoji: "👕",
		tag: "E0.6",
		description: "t-shirt"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128086
		],
		status: "fully-qualified",
		emoji: "👖",
		tag: "E0.6",
		description: "jeans"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			129507
		],
		status: "fully-qualified",
		emoji: "🧣",
		tag: "E5.0",
		description: "scarf"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			129508
		],
		status: "fully-qualified",
		emoji: "🧤",
		tag: "E5.0",
		description: "gloves"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			129509
		],
		status: "fully-qualified",
		emoji: "🧥",
		tag: "E5.0",
		description: "coat"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			129510
		],
		status: "fully-qualified",
		emoji: "🧦",
		tag: "E5.0",
		description: "socks"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128087
		],
		status: "fully-qualified",
		emoji: "👗",
		tag: "E0.6",
		description: "dress"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128088
		],
		status: "fully-qualified",
		emoji: "👘",
		tag: "E0.6",
		description: "kimono"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			129403
		],
		status: "fully-qualified",
		emoji: "🥻",
		tag: "E12.0",
		description: "sari"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			129649
		],
		status: "fully-qualified",
		emoji: "🩱",
		tag: "E12.0",
		description: "one-piece swimsuit"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			129650
		],
		status: "fully-qualified",
		emoji: "🩲",
		tag: "E12.0",
		description: "briefs"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			129651
		],
		status: "fully-qualified",
		emoji: "🩳",
		tag: "E12.0",
		description: "shorts"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128089
		],
		status: "fully-qualified",
		emoji: "👙",
		tag: "E0.6",
		description: "bikini"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128090
		],
		status: "fully-qualified",
		emoji: "👚",
		tag: "E0.6",
		description: "woman’s clothes"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128091
		],
		status: "fully-qualified",
		emoji: "👛",
		tag: "E0.6",
		description: "purse"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128092
		],
		status: "fully-qualified",
		emoji: "👜",
		tag: "E0.6",
		description: "handbag"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128093
		],
		status: "fully-qualified",
		emoji: "👝",
		tag: "E0.6",
		description: "clutch bag"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128717,
			65039
		],
		status: "fully-qualified",
		emoji: "🛍️",
		tag: "E0.7",
		description: "shopping bags"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128717
		],
		status: "unqualified",
		emoji: "🛍",
		tag: "E0.7",
		description: "shopping bags"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			127890
		],
		status: "fully-qualified",
		emoji: "🎒",
		tag: "E0.6",
		description: "backpack"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			129652
		],
		status: "fully-qualified",
		emoji: "🩴",
		tag: "E13.0",
		description: "thong sandal"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128094
		],
		status: "fully-qualified",
		emoji: "👞",
		tag: "E0.6",
		description: "man’s shoe"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128095
		],
		status: "fully-qualified",
		emoji: "👟",
		tag: "E0.6",
		description: "running shoe"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			129406
		],
		status: "fully-qualified",
		emoji: "🥾",
		tag: "E11.0",
		description: "hiking boot"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			129407
		],
		status: "fully-qualified",
		emoji: "🥿",
		tag: "E11.0",
		description: "flat shoe"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128096
		],
		status: "fully-qualified",
		emoji: "👠",
		tag: "E0.6",
		description: "high-heeled shoe"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128097
		],
		status: "fully-qualified",
		emoji: "👡",
		tag: "E0.6",
		description: "woman’s sandal"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			129648
		],
		status: "fully-qualified",
		emoji: "🩰",
		tag: "E12.0",
		description: "ballet shoes"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128098
		],
		status: "fully-qualified",
		emoji: "👢",
		tag: "E0.6",
		description: "woman’s boot"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128081
		],
		status: "fully-qualified",
		emoji: "👑",
		tag: "E0.6",
		description: "crown"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128082
		],
		status: "fully-qualified",
		emoji: "👒",
		tag: "E0.6",
		description: "woman’s hat"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			127913
		],
		status: "fully-qualified",
		emoji: "🎩",
		tag: "E0.6",
		description: "top hat"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			127891
		],
		status: "fully-qualified",
		emoji: "🎓",
		tag: "E0.6",
		description: "graduation cap"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			129506
		],
		status: "fully-qualified",
		emoji: "🧢",
		tag: "E5.0",
		description: "billed cap"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			129686
		],
		status: "fully-qualified",
		emoji: "🪖",
		tag: "E13.0",
		description: "military helmet"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			9937,
			65039
		],
		status: "fully-qualified",
		emoji: "⛑️",
		tag: "E0.7",
		description: "rescue worker’s helmet"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			9937
		],
		status: "unqualified",
		emoji: "⛑",
		tag: "E0.7",
		description: "rescue worker’s helmet"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128255
		],
		status: "fully-qualified",
		emoji: "📿",
		tag: "E1.0",
		description: "prayer beads"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128132
		],
		status: "fully-qualified",
		emoji: "💄",
		tag: "E0.6",
		description: "lipstick"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128141
		],
		status: "fully-qualified",
		emoji: "💍",
		tag: "E0.6",
		description: "ring"
	},
	{
		group: "Objects",
		subgroup: "clothing",
		codePoints: [
			128142
		],
		status: "fully-qualified",
		emoji: "💎",
		tag: "E0.6",
		description: "gem stone"
	},
	{
		group: "Objects",
		subgroup: "sound",
		codePoints: [
			128263
		],
		status: "fully-qualified",
		emoji: "🔇",
		tag: "E1.0",
		description: "muted speaker"
	},
	{
		group: "Objects",
		subgroup: "sound",
		codePoints: [
			128264
		],
		status: "fully-qualified",
		emoji: "🔈",
		tag: "E0.7",
		description: "speaker low volume"
	},
	{
		group: "Objects",
		subgroup: "sound",
		codePoints: [
			128265
		],
		status: "fully-qualified",
		emoji: "🔉",
		tag: "E1.0",
		description: "speaker medium volume"
	},
	{
		group: "Objects",
		subgroup: "sound",
		codePoints: [
			128266
		],
		status: "fully-qualified",
		emoji: "🔊",
		tag: "E0.6",
		description: "speaker high volume"
	},
	{
		group: "Objects",
		subgroup: "sound",
		codePoints: [
			128226
		],
		status: "fully-qualified",
		emoji: "📢",
		tag: "E0.6",
		description: "loudspeaker"
	},
	{
		group: "Objects",
		subgroup: "sound",
		codePoints: [
			128227
		],
		status: "fully-qualified",
		emoji: "📣",
		tag: "E0.6",
		description: "megaphone"
	},
	{
		group: "Objects",
		subgroup: "sound",
		codePoints: [
			128239
		],
		status: "fully-qualified",
		emoji: "📯",
		tag: "E1.0",
		description: "postal horn"
	},
	{
		group: "Objects",
		subgroup: "sound",
		codePoints: [
			128276
		],
		status: "fully-qualified",
		emoji: "🔔",
		tag: "E0.6",
		description: "bell"
	},
	{
		group: "Objects",
		subgroup: "sound",
		codePoints: [
			128277
		],
		status: "fully-qualified",
		emoji: "🔕",
		tag: "E1.0",
		description: "bell with slash"
	},
	{
		group: "Objects",
		subgroup: "music",
		codePoints: [
			127932
		],
		status: "fully-qualified",
		emoji: "🎼",
		tag: "E0.6",
		description: "musical score"
	},
	{
		group: "Objects",
		subgroup: "music",
		codePoints: [
			127925
		],
		status: "fully-qualified",
		emoji: "🎵",
		tag: "E0.6",
		description: "musical note"
	},
	{
		group: "Objects",
		subgroup: "music",
		codePoints: [
			127926
		],
		status: "fully-qualified",
		emoji: "🎶",
		tag: "E0.6",
		description: "musical notes"
	},
	{
		group: "Objects",
		subgroup: "music",
		codePoints: [
			127897,
			65039
		],
		status: "fully-qualified",
		emoji: "🎙️",
		tag: "E0.7",
		description: "studio microphone"
	},
	{
		group: "Objects",
		subgroup: "music",
		codePoints: [
			127897
		],
		status: "unqualified",
		emoji: "🎙",
		tag: "E0.7",
		description: "studio microphone"
	},
	{
		group: "Objects",
		subgroup: "music",
		codePoints: [
			127898,
			65039
		],
		status: "fully-qualified",
		emoji: "🎚️",
		tag: "E0.7",
		description: "level slider"
	},
	{
		group: "Objects",
		subgroup: "music",
		codePoints: [
			127898
		],
		status: "unqualified",
		emoji: "🎚",
		tag: "E0.7",
		description: "level slider"
	},
	{
		group: "Objects",
		subgroup: "music",
		codePoints: [
			127899,
			65039
		],
		status: "fully-qualified",
		emoji: "🎛️",
		tag: "E0.7",
		description: "control knobs"
	},
	{
		group: "Objects",
		subgroup: "music",
		codePoints: [
			127899
		],
		status: "unqualified",
		emoji: "🎛",
		tag: "E0.7",
		description: "control knobs"
	},
	{
		group: "Objects",
		subgroup: "music",
		codePoints: [
			127908
		],
		status: "fully-qualified",
		emoji: "🎤",
		tag: "E0.6",
		description: "microphone"
	},
	{
		group: "Objects",
		subgroup: "music",
		codePoints: [
			127911
		],
		status: "fully-qualified",
		emoji: "🎧",
		tag: "E0.6",
		description: "headphone"
	},
	{
		group: "Objects",
		subgroup: "music",
		codePoints: [
			128251
		],
		status: "fully-qualified",
		emoji: "📻",
		tag: "E0.6",
		description: "radio"
	},
	{
		group: "Objects",
		subgroup: "musical-instrument",
		codePoints: [
			127927
		],
		status: "fully-qualified",
		emoji: "🎷",
		tag: "E0.6",
		description: "saxophone"
	},
	{
		group: "Objects",
		subgroup: "musical-instrument",
		codePoints: [
			129687
		],
		status: "fully-qualified",
		emoji: "🪗",
		tag: "E13.0",
		description: "accordion"
	},
	{
		group: "Objects",
		subgroup: "musical-instrument",
		codePoints: [
			127928
		],
		status: "fully-qualified",
		emoji: "🎸",
		tag: "E0.6",
		description: "guitar"
	},
	{
		group: "Objects",
		subgroup: "musical-instrument",
		codePoints: [
			127929
		],
		status: "fully-qualified",
		emoji: "🎹",
		tag: "E0.6",
		description: "musical keyboard"
	},
	{
		group: "Objects",
		subgroup: "musical-instrument",
		codePoints: [
			127930
		],
		status: "fully-qualified",
		emoji: "🎺",
		tag: "E0.6",
		description: "trumpet"
	},
	{
		group: "Objects",
		subgroup: "musical-instrument",
		codePoints: [
			127931
		],
		status: "fully-qualified",
		emoji: "🎻",
		tag: "E0.6",
		description: "violin"
	},
	{
		group: "Objects",
		subgroup: "musical-instrument",
		codePoints: [
			129685
		],
		status: "fully-qualified",
		emoji: "🪕",
		tag: "E12.0",
		description: "banjo"
	},
	{
		group: "Objects",
		subgroup: "musical-instrument",
		codePoints: [
			129345
		],
		status: "fully-qualified",
		emoji: "🥁",
		tag: "E3.0",
		description: "drum"
	},
	{
		group: "Objects",
		subgroup: "musical-instrument",
		codePoints: [
			129688
		],
		status: "fully-qualified",
		emoji: "🪘",
		tag: "E13.0",
		description: "long drum"
	},
	{
		group: "Objects",
		subgroup: "phone",
		codePoints: [
			128241
		],
		status: "fully-qualified",
		emoji: "📱",
		tag: "E0.6",
		description: "mobile phone"
	},
	{
		group: "Objects",
		subgroup: "phone",
		codePoints: [
			128242
		],
		status: "fully-qualified",
		emoji: "📲",
		tag: "E0.6",
		description: "mobile phone with arrow"
	},
	{
		group: "Objects",
		subgroup: "phone",
		codePoints: [
			9742,
			65039
		],
		status: "fully-qualified",
		emoji: "☎️",
		tag: "E0.6",
		description: "telephone"
	},
	{
		group: "Objects",
		subgroup: "phone",
		codePoints: [
			9742
		],
		status: "unqualified",
		emoji: "☎",
		tag: "E0.6",
		description: "telephone"
	},
	{
		group: "Objects",
		subgroup: "phone",
		codePoints: [
			128222
		],
		status: "fully-qualified",
		emoji: "📞",
		tag: "E0.6",
		description: "telephone receiver"
	},
	{
		group: "Objects",
		subgroup: "phone",
		codePoints: [
			128223
		],
		status: "fully-qualified",
		emoji: "📟",
		tag: "E0.6",
		description: "pager"
	},
	{
		group: "Objects",
		subgroup: "phone",
		codePoints: [
			128224
		],
		status: "fully-qualified",
		emoji: "📠",
		tag: "E0.6",
		description: "fax machine"
	},
	{
		group: "Objects",
		subgroup: "computer",
		codePoints: [
			128267
		],
		status: "fully-qualified",
		emoji: "🔋",
		tag: "E0.6",
		description: "battery"
	},
	{
		group: "Objects",
		subgroup: "computer",
		codePoints: [
			128268
		],
		status: "fully-qualified",
		emoji: "🔌",
		tag: "E0.6",
		description: "electric plug"
	},
	{
		group: "Objects",
		subgroup: "computer",
		codePoints: [
			128187
		],
		status: "fully-qualified",
		emoji: "💻",
		tag: "E0.6",
		description: "laptop"
	},
	{
		group: "Objects",
		subgroup: "computer",
		codePoints: [
			128421,
			65039
		],
		status: "fully-qualified",
		emoji: "🖥️",
		tag: "E0.7",
		description: "desktop computer"
	},
	{
		group: "Objects",
		subgroup: "computer",
		codePoints: [
			128421
		],
		status: "unqualified",
		emoji: "🖥",
		tag: "E0.7",
		description: "desktop computer"
	},
	{
		group: "Objects",
		subgroup: "computer",
		codePoints: [
			128424,
			65039
		],
		status: "fully-qualified",
		emoji: "🖨️",
		tag: "E0.7",
		description: "printer"
	},
	{
		group: "Objects",
		subgroup: "computer",
		codePoints: [
			128424
		],
		status: "unqualified",
		emoji: "🖨",
		tag: "E0.7",
		description: "printer"
	},
	{
		group: "Objects",
		subgroup: "computer",
		codePoints: [
			9000,
			65039
		],
		status: "fully-qualified",
		emoji: "⌨️",
		tag: "E1.0",
		description: "keyboard"
	},
	{
		group: "Objects",
		subgroup: "computer",
		codePoints: [
			9000
		],
		status: "unqualified",
		emoji: "⌨",
		tag: "E1.0",
		description: "keyboard"
	},
	{
		group: "Objects",
		subgroup: "computer",
		codePoints: [
			128433,
			65039
		],
		status: "fully-qualified",
		emoji: "🖱️",
		tag: "E0.7",
		description: "computer mouse"
	},
	{
		group: "Objects",
		subgroup: "computer",
		codePoints: [
			128433
		],
		status: "unqualified",
		emoji: "🖱",
		tag: "E0.7",
		description: "computer mouse"
	},
	{
		group: "Objects",
		subgroup: "computer",
		codePoints: [
			128434,
			65039
		],
		status: "fully-qualified",
		emoji: "🖲️",
		tag: "E0.7",
		description: "trackball"
	},
	{
		group: "Objects",
		subgroup: "computer",
		codePoints: [
			128434
		],
		status: "unqualified",
		emoji: "🖲",
		tag: "E0.7",
		description: "trackball"
	},
	{
		group: "Objects",
		subgroup: "computer",
		codePoints: [
			128189
		],
		status: "fully-qualified",
		emoji: "💽",
		tag: "E0.6",
		description: "computer disk"
	},
	{
		group: "Objects",
		subgroup: "computer",
		codePoints: [
			128190
		],
		status: "fully-qualified",
		emoji: "💾",
		tag: "E0.6",
		description: "floppy disk"
	},
	{
		group: "Objects",
		subgroup: "computer",
		codePoints: [
			128191
		],
		status: "fully-qualified",
		emoji: "💿",
		tag: "E0.6",
		description: "optical disk"
	},
	{
		group: "Objects",
		subgroup: "computer",
		codePoints: [
			128192
		],
		status: "fully-qualified",
		emoji: "📀",
		tag: "E0.6",
		description: "dvd"
	},
	{
		group: "Objects",
		subgroup: "computer",
		codePoints: [
			129518
		],
		status: "fully-qualified",
		emoji: "🧮",
		tag: "E11.0",
		description: "abacus"
	},
	{
		group: "Objects",
		subgroup: "light & video",
		codePoints: [
			127909
		],
		status: "fully-qualified",
		emoji: "🎥",
		tag: "E0.6",
		description: "movie camera"
	},
	{
		group: "Objects",
		subgroup: "light & video",
		codePoints: [
			127902,
			65039
		],
		status: "fully-qualified",
		emoji: "🎞️",
		tag: "E0.7",
		description: "film frames"
	},
	{
		group: "Objects",
		subgroup: "light & video",
		codePoints: [
			127902
		],
		status: "unqualified",
		emoji: "🎞",
		tag: "E0.7",
		description: "film frames"
	},
	{
		group: "Objects",
		subgroup: "light & video",
		codePoints: [
			128253,
			65039
		],
		status: "fully-qualified",
		emoji: "📽️",
		tag: "E0.7",
		description: "film projector"
	},
	{
		group: "Objects",
		subgroup: "light & video",
		codePoints: [
			128253
		],
		status: "unqualified",
		emoji: "📽",
		tag: "E0.7",
		description: "film projector"
	},
	{
		group: "Objects",
		subgroup: "light & video",
		codePoints: [
			127916
		],
		status: "fully-qualified",
		emoji: "🎬",
		tag: "E0.6",
		description: "clapper board"
	},
	{
		group: "Objects",
		subgroup: "light & video",
		codePoints: [
			128250
		],
		status: "fully-qualified",
		emoji: "📺",
		tag: "E0.6",
		description: "television"
	},
	{
		group: "Objects",
		subgroup: "light & video",
		codePoints: [
			128247
		],
		status: "fully-qualified",
		emoji: "📷",
		tag: "E0.6",
		description: "camera"
	},
	{
		group: "Objects",
		subgroup: "light & video",
		codePoints: [
			128248
		],
		status: "fully-qualified",
		emoji: "📸",
		tag: "E1.0",
		description: "camera with flash"
	},
	{
		group: "Objects",
		subgroup: "light & video",
		codePoints: [
			128249
		],
		status: "fully-qualified",
		emoji: "📹",
		tag: "E0.6",
		description: "video camera"
	},
	{
		group: "Objects",
		subgroup: "light & video",
		codePoints: [
			128252
		],
		status: "fully-qualified",
		emoji: "📼",
		tag: "E0.6",
		description: "videocassette"
	},
	{
		group: "Objects",
		subgroup: "light & video",
		codePoints: [
			128269
		],
		status: "fully-qualified",
		emoji: "🔍",
		tag: "E0.6",
		description: "magnifying glass tilted left"
	},
	{
		group: "Objects",
		subgroup: "light & video",
		codePoints: [
			128270
		],
		status: "fully-qualified",
		emoji: "🔎",
		tag: "E0.6",
		description: "magnifying glass tilted right"
	},
	{
		group: "Objects",
		subgroup: "light & video",
		codePoints: [
			128367,
			65039
		],
		status: "fully-qualified",
		emoji: "🕯️",
		tag: "E0.7",
		description: "candle"
	},
	{
		group: "Objects",
		subgroup: "light & video",
		codePoints: [
			128367
		],
		status: "unqualified",
		emoji: "🕯",
		tag: "E0.7",
		description: "candle"
	},
	{
		group: "Objects",
		subgroup: "light & video",
		codePoints: [
			128161
		],
		status: "fully-qualified",
		emoji: "💡",
		tag: "E0.6",
		description: "light bulb"
	},
	{
		group: "Objects",
		subgroup: "light & video",
		codePoints: [
			128294
		],
		status: "fully-qualified",
		emoji: "🔦",
		tag: "E0.6",
		description: "flashlight"
	},
	{
		group: "Objects",
		subgroup: "light & video",
		codePoints: [
			127982
		],
		status: "fully-qualified",
		emoji: "🏮",
		tag: "E0.6",
		description: "red paper lantern"
	},
	{
		group: "Objects",
		subgroup: "light & video",
		codePoints: [
			129684
		],
		status: "fully-qualified",
		emoji: "🪔",
		tag: "E12.0",
		description: "diya lamp"
	},
	{
		group: "Objects",
		subgroup: "book-paper",
		codePoints: [
			128212
		],
		status: "fully-qualified",
		emoji: "📔",
		tag: "E0.6",
		description: "notebook with decorative cover"
	},
	{
		group: "Objects",
		subgroup: "book-paper",
		codePoints: [
			128213
		],
		status: "fully-qualified",
		emoji: "📕",
		tag: "E0.6",
		description: "closed book"
	},
	{
		group: "Objects",
		subgroup: "book-paper",
		codePoints: [
			128214
		],
		status: "fully-qualified",
		emoji: "📖",
		tag: "E0.6",
		description: "open book"
	},
	{
		group: "Objects",
		subgroup: "book-paper",
		codePoints: [
			128215
		],
		status: "fully-qualified",
		emoji: "📗",
		tag: "E0.6",
		description: "green book"
	},
	{
		group: "Objects",
		subgroup: "book-paper",
		codePoints: [
			128216
		],
		status: "fully-qualified",
		emoji: "📘",
		tag: "E0.6",
		description: "blue book"
	},
	{
		group: "Objects",
		subgroup: "book-paper",
		codePoints: [
			128217
		],
		status: "fully-qualified",
		emoji: "📙",
		tag: "E0.6",
		description: "orange book"
	},
	{
		group: "Objects",
		subgroup: "book-paper",
		codePoints: [
			128218
		],
		status: "fully-qualified",
		emoji: "📚",
		tag: "E0.6",
		description: "books"
	},
	{
		group: "Objects",
		subgroup: "book-paper",
		codePoints: [
			128211
		],
		status: "fully-qualified",
		emoji: "📓",
		tag: "E0.6",
		description: "notebook"
	},
	{
		group: "Objects",
		subgroup: "book-paper",
		codePoints: [
			128210
		],
		status: "fully-qualified",
		emoji: "📒",
		tag: "E0.6",
		description: "ledger"
	},
	{
		group: "Objects",
		subgroup: "book-paper",
		codePoints: [
			128195
		],
		status: "fully-qualified",
		emoji: "📃",
		tag: "E0.6",
		description: "page with curl"
	},
	{
		group: "Objects",
		subgroup: "book-paper",
		codePoints: [
			128220
		],
		status: "fully-qualified",
		emoji: "📜",
		tag: "E0.6",
		description: "scroll"
	},
	{
		group: "Objects",
		subgroup: "book-paper",
		codePoints: [
			128196
		],
		status: "fully-qualified",
		emoji: "📄",
		tag: "E0.6",
		description: "page facing up"
	},
	{
		group: "Objects",
		subgroup: "book-paper",
		codePoints: [
			128240
		],
		status: "fully-qualified",
		emoji: "📰",
		tag: "E0.6",
		description: "newspaper"
	},
	{
		group: "Objects",
		subgroup: "book-paper",
		codePoints: [
			128478,
			65039
		],
		status: "fully-qualified",
		emoji: "🗞️",
		tag: "E0.7",
		description: "rolled-up newspaper"
	},
	{
		group: "Objects",
		subgroup: "book-paper",
		codePoints: [
			128478
		],
		status: "unqualified",
		emoji: "🗞",
		tag: "E0.7",
		description: "rolled-up newspaper"
	},
	{
		group: "Objects",
		subgroup: "book-paper",
		codePoints: [
			128209
		],
		status: "fully-qualified",
		emoji: "📑",
		tag: "E0.6",
		description: "bookmark tabs"
	},
	{
		group: "Objects",
		subgroup: "book-paper",
		codePoints: [
			128278
		],
		status: "fully-qualified",
		emoji: "🔖",
		tag: "E0.6",
		description: "bookmark"
	},
	{
		group: "Objects",
		subgroup: "book-paper",
		codePoints: [
			127991,
			65039
		],
		status: "fully-qualified",
		emoji: "🏷️",
		tag: "E0.7",
		description: "label"
	},
	{
		group: "Objects",
		subgroup: "book-paper",
		codePoints: [
			127991
		],
		status: "unqualified",
		emoji: "🏷",
		tag: "E0.7",
		description: "label"
	},
	{
		group: "Objects",
		subgroup: "money",
		codePoints: [
			128176
		],
		status: "fully-qualified",
		emoji: "💰",
		tag: "E0.6",
		description: "money bag"
	},
	{
		group: "Objects",
		subgroup: "money",
		codePoints: [
			129689
		],
		status: "fully-qualified",
		emoji: "🪙",
		tag: "E13.0",
		description: "coin"
	},
	{
		group: "Objects",
		subgroup: "money",
		codePoints: [
			128180
		],
		status: "fully-qualified",
		emoji: "💴",
		tag: "E0.6",
		description: "yen banknote"
	},
	{
		group: "Objects",
		subgroup: "money",
		codePoints: [
			128181
		],
		status: "fully-qualified",
		emoji: "💵",
		tag: "E0.6",
		description: "dollar banknote"
	},
	{
		group: "Objects",
		subgroup: "money",
		codePoints: [
			128182
		],
		status: "fully-qualified",
		emoji: "💶",
		tag: "E1.0",
		description: "euro banknote"
	},
	{
		group: "Objects",
		subgroup: "money",
		codePoints: [
			128183
		],
		status: "fully-qualified",
		emoji: "💷",
		tag: "E1.0",
		description: "pound banknote"
	},
	{
		group: "Objects",
		subgroup: "money",
		codePoints: [
			128184
		],
		status: "fully-qualified",
		emoji: "💸",
		tag: "E0.6",
		description: "money with wings"
	},
	{
		group: "Objects",
		subgroup: "money",
		codePoints: [
			128179
		],
		status: "fully-qualified",
		emoji: "💳",
		tag: "E0.6",
		description: "credit card"
	},
	{
		group: "Objects",
		subgroup: "money",
		codePoints: [
			129534
		],
		status: "fully-qualified",
		emoji: "🧾",
		tag: "E11.0",
		description: "receipt"
	},
	{
		group: "Objects",
		subgroup: "money",
		codePoints: [
			128185
		],
		status: "fully-qualified",
		emoji: "💹",
		tag: "E0.6",
		description: "chart increasing with yen"
	},
	{
		group: "Objects",
		subgroup: "mail",
		codePoints: [
			9993,
			65039
		],
		status: "fully-qualified",
		emoji: "✉️",
		tag: "E0.6",
		description: "envelope"
	},
	{
		group: "Objects",
		subgroup: "mail",
		codePoints: [
			9993
		],
		status: "unqualified",
		emoji: "✉",
		tag: "E0.6",
		description: "envelope"
	},
	{
		group: "Objects",
		subgroup: "mail",
		codePoints: [
			128231
		],
		status: "fully-qualified",
		emoji: "📧",
		tag: "E0.6",
		description: "e-mail"
	},
	{
		group: "Objects",
		subgroup: "mail",
		codePoints: [
			128232
		],
		status: "fully-qualified",
		emoji: "📨",
		tag: "E0.6",
		description: "incoming envelope"
	},
	{
		group: "Objects",
		subgroup: "mail",
		codePoints: [
			128233
		],
		status: "fully-qualified",
		emoji: "📩",
		tag: "E0.6",
		description: "envelope with arrow"
	},
	{
		group: "Objects",
		subgroup: "mail",
		codePoints: [
			128228
		],
		status: "fully-qualified",
		emoji: "📤",
		tag: "E0.6",
		description: "outbox tray"
	},
	{
		group: "Objects",
		subgroup: "mail",
		codePoints: [
			128229
		],
		status: "fully-qualified",
		emoji: "📥",
		tag: "E0.6",
		description: "inbox tray"
	},
	{
		group: "Objects",
		subgroup: "mail",
		codePoints: [
			128230
		],
		status: "fully-qualified",
		emoji: "📦",
		tag: "E0.6",
		description: "package"
	},
	{
		group: "Objects",
		subgroup: "mail",
		codePoints: [
			128235
		],
		status: "fully-qualified",
		emoji: "📫",
		tag: "E0.6",
		description: "closed mailbox with raised flag"
	},
	{
		group: "Objects",
		subgroup: "mail",
		codePoints: [
			128234
		],
		status: "fully-qualified",
		emoji: "📪",
		tag: "E0.6",
		description: "closed mailbox with lowered flag"
	},
	{
		group: "Objects",
		subgroup: "mail",
		codePoints: [
			128236
		],
		status: "fully-qualified",
		emoji: "📬",
		tag: "E0.7",
		description: "open mailbox with raised flag"
	},
	{
		group: "Objects",
		subgroup: "mail",
		codePoints: [
			128237
		],
		status: "fully-qualified",
		emoji: "📭",
		tag: "E0.7",
		description: "open mailbox with lowered flag"
	},
	{
		group: "Objects",
		subgroup: "mail",
		codePoints: [
			128238
		],
		status: "fully-qualified",
		emoji: "📮",
		tag: "E0.6",
		description: "postbox"
	},
	{
		group: "Objects",
		subgroup: "mail",
		codePoints: [
			128499,
			65039
		],
		status: "fully-qualified",
		emoji: "🗳️",
		tag: "E0.7",
		description: "ballot box with ballot"
	},
	{
		group: "Objects",
		subgroup: "mail",
		codePoints: [
			128499
		],
		status: "unqualified",
		emoji: "🗳",
		tag: "E0.7",
		description: "ballot box with ballot"
	},
	{
		group: "Objects",
		subgroup: "writing",
		codePoints: [
			9999,
			65039
		],
		status: "fully-qualified",
		emoji: "✏️",
		tag: "E0.6",
		description: "pencil"
	},
	{
		group: "Objects",
		subgroup: "writing",
		codePoints: [
			9999
		],
		status: "unqualified",
		emoji: "✏",
		tag: "E0.6",
		description: "pencil"
	},
	{
		group: "Objects",
		subgroup: "writing",
		codePoints: [
			10002,
			65039
		],
		status: "fully-qualified",
		emoji: "✒️",
		tag: "E0.6",
		description: "black nib"
	},
	{
		group: "Objects",
		subgroup: "writing",
		codePoints: [
			10002
		],
		status: "unqualified",
		emoji: "✒",
		tag: "E0.6",
		description: "black nib"
	},
	{
		group: "Objects",
		subgroup: "writing",
		codePoints: [
			128395,
			65039
		],
		status: "fully-qualified",
		emoji: "🖋️",
		tag: "E0.7",
		description: "fountain pen"
	},
	{
		group: "Objects",
		subgroup: "writing",
		codePoints: [
			128395
		],
		status: "unqualified",
		emoji: "🖋",
		tag: "E0.7",
		description: "fountain pen"
	},
	{
		group: "Objects",
		subgroup: "writing",
		codePoints: [
			128394,
			65039
		],
		status: "fully-qualified",
		emoji: "🖊️",
		tag: "E0.7",
		description: "pen"
	},
	{
		group: "Objects",
		subgroup: "writing",
		codePoints: [
			128394
		],
		status: "unqualified",
		emoji: "🖊",
		tag: "E0.7",
		description: "pen"
	},
	{
		group: "Objects",
		subgroup: "writing",
		codePoints: [
			128396,
			65039
		],
		status: "fully-qualified",
		emoji: "🖌️",
		tag: "E0.7",
		description: "paintbrush"
	},
	{
		group: "Objects",
		subgroup: "writing",
		codePoints: [
			128396
		],
		status: "unqualified",
		emoji: "🖌",
		tag: "E0.7",
		description: "paintbrush"
	},
	{
		group: "Objects",
		subgroup: "writing",
		codePoints: [
			128397,
			65039
		],
		status: "fully-qualified",
		emoji: "🖍️",
		tag: "E0.7",
		description: "crayon"
	},
	{
		group: "Objects",
		subgroup: "writing",
		codePoints: [
			128397
		],
		status: "unqualified",
		emoji: "🖍",
		tag: "E0.7",
		description: "crayon"
	},
	{
		group: "Objects",
		subgroup: "writing",
		codePoints: [
			128221
		],
		status: "fully-qualified",
		emoji: "📝",
		tag: "E0.6",
		description: "memo"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128188
		],
		status: "fully-qualified",
		emoji: "💼",
		tag: "E0.6",
		description: "briefcase"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128193
		],
		status: "fully-qualified",
		emoji: "📁",
		tag: "E0.6",
		description: "file folder"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128194
		],
		status: "fully-qualified",
		emoji: "📂",
		tag: "E0.6",
		description: "open file folder"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128450,
			65039
		],
		status: "fully-qualified",
		emoji: "🗂️",
		tag: "E0.7",
		description: "card index dividers"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128450
		],
		status: "unqualified",
		emoji: "🗂",
		tag: "E0.7",
		description: "card index dividers"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128197
		],
		status: "fully-qualified",
		emoji: "📅",
		tag: "E0.6",
		description: "calendar"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128198
		],
		status: "fully-qualified",
		emoji: "📆",
		tag: "E0.6",
		description: "tear-off calendar"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128466,
			65039
		],
		status: "fully-qualified",
		emoji: "🗒️",
		tag: "E0.7",
		description: "spiral notepad"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128466
		],
		status: "unqualified",
		emoji: "🗒",
		tag: "E0.7",
		description: "spiral notepad"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128467,
			65039
		],
		status: "fully-qualified",
		emoji: "🗓️",
		tag: "E0.7",
		description: "spiral calendar"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128467
		],
		status: "unqualified",
		emoji: "🗓",
		tag: "E0.7",
		description: "spiral calendar"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128199
		],
		status: "fully-qualified",
		emoji: "📇",
		tag: "E0.6",
		description: "card index"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128200
		],
		status: "fully-qualified",
		emoji: "📈",
		tag: "E0.6",
		description: "chart increasing"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128201
		],
		status: "fully-qualified",
		emoji: "📉",
		tag: "E0.6",
		description: "chart decreasing"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128202
		],
		status: "fully-qualified",
		emoji: "📊",
		tag: "E0.6",
		description: "bar chart"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128203
		],
		status: "fully-qualified",
		emoji: "📋",
		tag: "E0.6",
		description: "clipboard"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128204
		],
		status: "fully-qualified",
		emoji: "📌",
		tag: "E0.6",
		description: "pushpin"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128205
		],
		status: "fully-qualified",
		emoji: "📍",
		tag: "E0.6",
		description: "round pushpin"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128206
		],
		status: "fully-qualified",
		emoji: "📎",
		tag: "E0.6",
		description: "paperclip"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128391,
			65039
		],
		status: "fully-qualified",
		emoji: "🖇️",
		tag: "E0.7",
		description: "linked paperclips"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128391
		],
		status: "unqualified",
		emoji: "🖇",
		tag: "E0.7",
		description: "linked paperclips"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128207
		],
		status: "fully-qualified",
		emoji: "📏",
		tag: "E0.6",
		description: "straight ruler"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128208
		],
		status: "fully-qualified",
		emoji: "📐",
		tag: "E0.6",
		description: "triangular ruler"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			9986,
			65039
		],
		status: "fully-qualified",
		emoji: "✂️",
		tag: "E0.6",
		description: "scissors"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			9986
		],
		status: "unqualified",
		emoji: "✂",
		tag: "E0.6",
		description: "scissors"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128451,
			65039
		],
		status: "fully-qualified",
		emoji: "🗃️",
		tag: "E0.7",
		description: "card file box"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128451
		],
		status: "unqualified",
		emoji: "🗃",
		tag: "E0.7",
		description: "card file box"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128452,
			65039
		],
		status: "fully-qualified",
		emoji: "🗄️",
		tag: "E0.7",
		description: "file cabinet"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128452
		],
		status: "unqualified",
		emoji: "🗄",
		tag: "E0.7",
		description: "file cabinet"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128465,
			65039
		],
		status: "fully-qualified",
		emoji: "🗑️",
		tag: "E0.7",
		description: "wastebasket"
	},
	{
		group: "Objects",
		subgroup: "office",
		codePoints: [
			128465
		],
		status: "unqualified",
		emoji: "🗑",
		tag: "E0.7",
		description: "wastebasket"
	},
	{
		group: "Objects",
		subgroup: "lock",
		codePoints: [
			128274
		],
		status: "fully-qualified",
		emoji: "🔒",
		tag: "E0.6",
		description: "locked"
	},
	{
		group: "Objects",
		subgroup: "lock",
		codePoints: [
			128275
		],
		status: "fully-qualified",
		emoji: "🔓",
		tag: "E0.6",
		description: "unlocked"
	},
	{
		group: "Objects",
		subgroup: "lock",
		codePoints: [
			128271
		],
		status: "fully-qualified",
		emoji: "🔏",
		tag: "E0.6",
		description: "locked with pen"
	},
	{
		group: "Objects",
		subgroup: "lock",
		codePoints: [
			128272
		],
		status: "fully-qualified",
		emoji: "🔐",
		tag: "E0.6",
		description: "locked with key"
	},
	{
		group: "Objects",
		subgroup: "lock",
		codePoints: [
			128273
		],
		status: "fully-qualified",
		emoji: "🔑",
		tag: "E0.6",
		description: "key"
	},
	{
		group: "Objects",
		subgroup: "lock",
		codePoints: [
			128477,
			65039
		],
		status: "fully-qualified",
		emoji: "🗝️",
		tag: "E0.7",
		description: "old key"
	},
	{
		group: "Objects",
		subgroup: "lock",
		codePoints: [
			128477
		],
		status: "unqualified",
		emoji: "🗝",
		tag: "E0.7",
		description: "old key"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			128296
		],
		status: "fully-qualified",
		emoji: "🔨",
		tag: "E0.6",
		description: "hammer"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			129683
		],
		status: "fully-qualified",
		emoji: "🪓",
		tag: "E12.0",
		description: "axe"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			9935,
			65039
		],
		status: "fully-qualified",
		emoji: "⛏️",
		tag: "E0.7",
		description: "pick"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			9935
		],
		status: "unqualified",
		emoji: "⛏",
		tag: "E0.7",
		description: "pick"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			9874,
			65039
		],
		status: "fully-qualified",
		emoji: "⚒️",
		tag: "E1.0",
		description: "hammer and pick"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			9874
		],
		status: "unqualified",
		emoji: "⚒",
		tag: "E1.0",
		description: "hammer and pick"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			128736,
			65039
		],
		status: "fully-qualified",
		emoji: "🛠️",
		tag: "E0.7",
		description: "hammer and wrench"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			128736
		],
		status: "unqualified",
		emoji: "🛠",
		tag: "E0.7",
		description: "hammer and wrench"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			128481,
			65039
		],
		status: "fully-qualified",
		emoji: "🗡️",
		tag: "E0.7",
		description: "dagger"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			128481
		],
		status: "unqualified",
		emoji: "🗡",
		tag: "E0.7",
		description: "dagger"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			9876,
			65039
		],
		status: "fully-qualified",
		emoji: "⚔️",
		tag: "E1.0",
		description: "crossed swords"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			9876
		],
		status: "unqualified",
		emoji: "⚔",
		tag: "E1.0",
		description: "crossed swords"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			128299
		],
		status: "fully-qualified",
		emoji: "🔫",
		tag: "E0.6",
		description: "pistol"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			129667
		],
		status: "fully-qualified",
		emoji: "🪃",
		tag: "E13.0",
		description: "boomerang"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			127993
		],
		status: "fully-qualified",
		emoji: "🏹",
		tag: "E1.0",
		description: "bow and arrow"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			128737,
			65039
		],
		status: "fully-qualified",
		emoji: "🛡️",
		tag: "E0.7",
		description: "shield"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			128737
		],
		status: "unqualified",
		emoji: "🛡",
		tag: "E0.7",
		description: "shield"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			129690
		],
		status: "fully-qualified",
		emoji: "🪚",
		tag: "E13.0",
		description: "carpentry saw"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			128295
		],
		status: "fully-qualified",
		emoji: "🔧",
		tag: "E0.6",
		description: "wrench"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			129691
		],
		status: "fully-qualified",
		emoji: "🪛",
		tag: "E13.0",
		description: "screwdriver"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			128297
		],
		status: "fully-qualified",
		emoji: "🔩",
		tag: "E0.6",
		description: "nut and bolt"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			9881,
			65039
		],
		status: "fully-qualified",
		emoji: "⚙️",
		tag: "E1.0",
		description: "gear"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			9881
		],
		status: "unqualified",
		emoji: "⚙",
		tag: "E1.0",
		description: "gear"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			128476,
			65039
		],
		status: "fully-qualified",
		emoji: "🗜️",
		tag: "E0.7",
		description: "clamp"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			128476
		],
		status: "unqualified",
		emoji: "🗜",
		tag: "E0.7",
		description: "clamp"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			9878,
			65039
		],
		status: "fully-qualified",
		emoji: "⚖️",
		tag: "E1.0",
		description: "balance scale"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			9878
		],
		status: "unqualified",
		emoji: "⚖",
		tag: "E1.0",
		description: "balance scale"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			129455
		],
		status: "fully-qualified",
		emoji: "🦯",
		tag: "E12.0",
		description: "white cane"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			128279
		],
		status: "fully-qualified",
		emoji: "🔗",
		tag: "E0.6",
		description: "link"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			9939,
			65039
		],
		status: "fully-qualified",
		emoji: "⛓️",
		tag: "E0.7",
		description: "chains"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			9939
		],
		status: "unqualified",
		emoji: "⛓",
		tag: "E0.7",
		description: "chains"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			129693
		],
		status: "fully-qualified",
		emoji: "🪝",
		tag: "E13.0",
		description: "hook"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			129520
		],
		status: "fully-qualified",
		emoji: "🧰",
		tag: "E11.0",
		description: "toolbox"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			129522
		],
		status: "fully-qualified",
		emoji: "🧲",
		tag: "E11.0",
		description: "magnet"
	},
	{
		group: "Objects",
		subgroup: "tool",
		codePoints: [
			129692
		],
		status: "fully-qualified",
		emoji: "🪜",
		tag: "E13.0",
		description: "ladder"
	},
	{
		group: "Objects",
		subgroup: "science",
		codePoints: [
			9879,
			65039
		],
		status: "fully-qualified",
		emoji: "⚗️",
		tag: "E1.0",
		description: "alembic"
	},
	{
		group: "Objects",
		subgroup: "science",
		codePoints: [
			9879
		],
		status: "unqualified",
		emoji: "⚗",
		tag: "E1.0",
		description: "alembic"
	},
	{
		group: "Objects",
		subgroup: "science",
		codePoints: [
			129514
		],
		status: "fully-qualified",
		emoji: "🧪",
		tag: "E11.0",
		description: "test tube"
	},
	{
		group: "Objects",
		subgroup: "science",
		codePoints: [
			129515
		],
		status: "fully-qualified",
		emoji: "🧫",
		tag: "E11.0",
		description: "petri dish"
	},
	{
		group: "Objects",
		subgroup: "science",
		codePoints: [
			129516
		],
		status: "fully-qualified",
		emoji: "🧬",
		tag: "E11.0",
		description: "dna"
	},
	{
		group: "Objects",
		subgroup: "science",
		codePoints: [
			128300
		],
		status: "fully-qualified",
		emoji: "🔬",
		tag: "E1.0",
		description: "microscope"
	},
	{
		group: "Objects",
		subgroup: "science",
		codePoints: [
			128301
		],
		status: "fully-qualified",
		emoji: "🔭",
		tag: "E1.0",
		description: "telescope"
	},
	{
		group: "Objects",
		subgroup: "science",
		codePoints: [
			128225
		],
		status: "fully-qualified",
		emoji: "📡",
		tag: "E0.6",
		description: "satellite antenna"
	},
	{
		group: "Objects",
		subgroup: "medical",
		codePoints: [
			128137
		],
		status: "fully-qualified",
		emoji: "💉",
		tag: "E0.6",
		description: "syringe"
	},
	{
		group: "Objects",
		subgroup: "medical",
		codePoints: [
			129656
		],
		status: "fully-qualified",
		emoji: "🩸",
		tag: "E12.0",
		description: "drop of blood"
	},
	{
		group: "Objects",
		subgroup: "medical",
		codePoints: [
			128138
		],
		status: "fully-qualified",
		emoji: "💊",
		tag: "E0.6",
		description: "pill"
	},
	{
		group: "Objects",
		subgroup: "medical",
		codePoints: [
			129657
		],
		status: "fully-qualified",
		emoji: "🩹",
		tag: "E12.0",
		description: "adhesive bandage"
	},
	{
		group: "Objects",
		subgroup: "medical",
		codePoints: [
			129658
		],
		status: "fully-qualified",
		emoji: "🩺",
		tag: "E12.0",
		description: "stethoscope"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			128682
		],
		status: "fully-qualified",
		emoji: "🚪",
		tag: "E0.6",
		description: "door"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			128727
		],
		status: "fully-qualified",
		emoji: "🛗",
		tag: "E13.0",
		description: "elevator"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			129694
		],
		status: "fully-qualified",
		emoji: "🪞",
		tag: "E13.0",
		description: "mirror"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			129695
		],
		status: "fully-qualified",
		emoji: "🪟",
		tag: "E13.0",
		description: "window"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			128719,
			65039
		],
		status: "fully-qualified",
		emoji: "🛏️",
		tag: "E0.7",
		description: "bed"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			128719
		],
		status: "unqualified",
		emoji: "🛏",
		tag: "E0.7",
		description: "bed"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			128715,
			65039
		],
		status: "fully-qualified",
		emoji: "🛋️",
		tag: "E0.7",
		description: "couch and lamp"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			128715
		],
		status: "unqualified",
		emoji: "🛋",
		tag: "E0.7",
		description: "couch and lamp"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			129681
		],
		status: "fully-qualified",
		emoji: "🪑",
		tag: "E12.0",
		description: "chair"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			128701
		],
		status: "fully-qualified",
		emoji: "🚽",
		tag: "E0.6",
		description: "toilet"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			129696
		],
		status: "fully-qualified",
		emoji: "🪠",
		tag: "E13.0",
		description: "plunger"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			128703
		],
		status: "fully-qualified",
		emoji: "🚿",
		tag: "E1.0",
		description: "shower"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			128705
		],
		status: "fully-qualified",
		emoji: "🛁",
		tag: "E1.0",
		description: "bathtub"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			129700
		],
		status: "fully-qualified",
		emoji: "🪤",
		tag: "E13.0",
		description: "mouse trap"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			129682
		],
		status: "fully-qualified",
		emoji: "🪒",
		tag: "E12.0",
		description: "razor"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			129524
		],
		status: "fully-qualified",
		emoji: "🧴",
		tag: "E11.0",
		description: "lotion bottle"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			129527
		],
		status: "fully-qualified",
		emoji: "🧷",
		tag: "E11.0",
		description: "safety pin"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			129529
		],
		status: "fully-qualified",
		emoji: "🧹",
		tag: "E11.0",
		description: "broom"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			129530
		],
		status: "fully-qualified",
		emoji: "🧺",
		tag: "E11.0",
		description: "basket"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			129531
		],
		status: "fully-qualified",
		emoji: "🧻",
		tag: "E11.0",
		description: "roll of paper"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			129699
		],
		status: "fully-qualified",
		emoji: "🪣",
		tag: "E13.0",
		description: "bucket"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			129532
		],
		status: "fully-qualified",
		emoji: "🧼",
		tag: "E11.0",
		description: "soap"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			129701
		],
		status: "fully-qualified",
		emoji: "🪥",
		tag: "E13.0",
		description: "toothbrush"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			129533
		],
		status: "fully-qualified",
		emoji: "🧽",
		tag: "E11.0",
		description: "sponge"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			129519
		],
		status: "fully-qualified",
		emoji: "🧯",
		tag: "E11.0",
		description: "fire extinguisher"
	},
	{
		group: "Objects",
		subgroup: "household",
		codePoints: [
			128722
		],
		status: "fully-qualified",
		emoji: "🛒",
		tag: "E3.0",
		description: "shopping cart"
	},
	{
		group: "Objects",
		subgroup: "other-object",
		codePoints: [
			128684
		],
		status: "fully-qualified",
		emoji: "🚬",
		tag: "E0.6",
		description: "cigarette"
	},
	{
		group: "Objects",
		subgroup: "other-object",
		codePoints: [
			9904,
			65039
		],
		status: "fully-qualified",
		emoji: "⚰️",
		tag: "E1.0",
		description: "coffin"
	},
	{
		group: "Objects",
		subgroup: "other-object",
		codePoints: [
			9904
		],
		status: "unqualified",
		emoji: "⚰",
		tag: "E1.0",
		description: "coffin"
	},
	{
		group: "Objects",
		subgroup: "other-object",
		codePoints: [
			129702
		],
		status: "fully-qualified",
		emoji: "🪦",
		tag: "E13.0",
		description: "headstone"
	},
	{
		group: "Objects",
		subgroup: "other-object",
		codePoints: [
			9905,
			65039
		],
		status: "fully-qualified",
		emoji: "⚱️",
		tag: "E1.0",
		description: "funeral urn"
	},
	{
		group: "Objects",
		subgroup: "other-object",
		codePoints: [
			9905
		],
		status: "unqualified",
		emoji: "⚱",
		tag: "E1.0",
		description: "funeral urn"
	},
	{
		group: "Objects",
		subgroup: "other-object",
		codePoints: [
			128511
		],
		status: "fully-qualified",
		emoji: "🗿",
		tag: "E0.6",
		description: "moai"
	},
	{
		group: "Objects",
		subgroup: "other-object",
		codePoints: [
			129703
		],
		status: "fully-qualified",
		emoji: "🪧",
		tag: "E13.0",
		description: "placard"
	},
	{
		group: "Symbols",
		subgroup: "transport-sign",
		codePoints: [
			127975
		],
		status: "fully-qualified",
		emoji: "🏧",
		tag: "E0.6",
		description: "ATM sign"
	},
	{
		group: "Symbols",
		subgroup: "transport-sign",
		codePoints: [
			128686
		],
		status: "fully-qualified",
		emoji: "🚮",
		tag: "E1.0",
		description: "litter in bin sign"
	},
	{
		group: "Symbols",
		subgroup: "transport-sign",
		codePoints: [
			128688
		],
		status: "fully-qualified",
		emoji: "🚰",
		tag: "E1.0",
		description: "potable water"
	},
	{
		group: "Symbols",
		subgroup: "transport-sign",
		codePoints: [
			9855
		],
		status: "fully-qualified",
		emoji: "♿",
		tag: "E0.6",
		description: "wheelchair symbol"
	},
	{
		group: "Symbols",
		subgroup: "transport-sign",
		codePoints: [
			128697
		],
		status: "fully-qualified",
		emoji: "🚹",
		tag: "E0.6",
		description: "men’s room"
	},
	{
		group: "Symbols",
		subgroup: "transport-sign",
		codePoints: [
			128698
		],
		status: "fully-qualified",
		emoji: "🚺",
		tag: "E0.6",
		description: "women’s room"
	},
	{
		group: "Symbols",
		subgroup: "transport-sign",
		codePoints: [
			128699
		],
		status: "fully-qualified",
		emoji: "🚻",
		tag: "E0.6",
		description: "restroom"
	},
	{
		group: "Symbols",
		subgroup: "transport-sign",
		codePoints: [
			128700
		],
		status: "fully-qualified",
		emoji: "🚼",
		tag: "E0.6",
		description: "baby symbol"
	},
	{
		group: "Symbols",
		subgroup: "transport-sign",
		codePoints: [
			128702
		],
		status: "fully-qualified",
		emoji: "🚾",
		tag: "E0.6",
		description: "water closet"
	},
	{
		group: "Symbols",
		subgroup: "transport-sign",
		codePoints: [
			128706
		],
		status: "fully-qualified",
		emoji: "🛂",
		tag: "E1.0",
		description: "passport control"
	},
	{
		group: "Symbols",
		subgroup: "transport-sign",
		codePoints: [
			128707
		],
		status: "fully-qualified",
		emoji: "🛃",
		tag: "E1.0",
		description: "customs"
	},
	{
		group: "Symbols",
		subgroup: "transport-sign",
		codePoints: [
			128708
		],
		status: "fully-qualified",
		emoji: "🛄",
		tag: "E1.0",
		description: "baggage claim"
	},
	{
		group: "Symbols",
		subgroup: "transport-sign",
		codePoints: [
			128709
		],
		status: "fully-qualified",
		emoji: "🛅",
		tag: "E1.0",
		description: "left luggage"
	},
	{
		group: "Symbols",
		subgroup: "warning",
		codePoints: [
			9888,
			65039
		],
		status: "fully-qualified",
		emoji: "⚠️",
		tag: "E0.6",
		description: "warning"
	},
	{
		group: "Symbols",
		subgroup: "warning",
		codePoints: [
			9888
		],
		status: "unqualified",
		emoji: "⚠",
		tag: "E0.6",
		description: "warning"
	},
	{
		group: "Symbols",
		subgroup: "warning",
		codePoints: [
			128696
		],
		status: "fully-qualified",
		emoji: "🚸",
		tag: "E1.0",
		description: "children crossing"
	},
	{
		group: "Symbols",
		subgroup: "warning",
		codePoints: [
			9940
		],
		status: "fully-qualified",
		emoji: "⛔",
		tag: "E0.6",
		description: "no entry"
	},
	{
		group: "Symbols",
		subgroup: "warning",
		codePoints: [
			128683
		],
		status: "fully-qualified",
		emoji: "🚫",
		tag: "E0.6",
		description: "prohibited"
	},
	{
		group: "Symbols",
		subgroup: "warning",
		codePoints: [
			128691
		],
		status: "fully-qualified",
		emoji: "🚳",
		tag: "E1.0",
		description: "no bicycles"
	},
	{
		group: "Symbols",
		subgroup: "warning",
		codePoints: [
			128685
		],
		status: "fully-qualified",
		emoji: "🚭",
		tag: "E0.6",
		description: "no smoking"
	},
	{
		group: "Symbols",
		subgroup: "warning",
		codePoints: [
			128687
		],
		status: "fully-qualified",
		emoji: "🚯",
		tag: "E1.0",
		description: "no littering"
	},
	{
		group: "Symbols",
		subgroup: "warning",
		codePoints: [
			128689
		],
		status: "fully-qualified",
		emoji: "🚱",
		tag: "E1.0",
		description: "non-potable water"
	},
	{
		group: "Symbols",
		subgroup: "warning",
		codePoints: [
			128695
		],
		status: "fully-qualified",
		emoji: "🚷",
		tag: "E1.0",
		description: "no pedestrians"
	},
	{
		group: "Symbols",
		subgroup: "warning",
		codePoints: [
			128245
		],
		status: "fully-qualified",
		emoji: "📵",
		tag: "E1.0",
		description: "no mobile phones"
	},
	{
		group: "Symbols",
		subgroup: "warning",
		codePoints: [
			128286
		],
		status: "fully-qualified",
		emoji: "🔞",
		tag: "E0.6",
		description: "no one under eighteen"
	},
	{
		group: "Symbols",
		subgroup: "warning",
		codePoints: [
			9762,
			65039
		],
		status: "fully-qualified",
		emoji: "☢️",
		tag: "E1.0",
		description: "radioactive"
	},
	{
		group: "Symbols",
		subgroup: "warning",
		codePoints: [
			9762
		],
		status: "unqualified",
		emoji: "☢",
		tag: "E1.0",
		description: "radioactive"
	},
	{
		group: "Symbols",
		subgroup: "warning",
		codePoints: [
			9763,
			65039
		],
		status: "fully-qualified",
		emoji: "☣️",
		tag: "E1.0",
		description: "biohazard"
	},
	{
		group: "Symbols",
		subgroup: "warning",
		codePoints: [
			9763
		],
		status: "unqualified",
		emoji: "☣",
		tag: "E1.0",
		description: "biohazard"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			11014,
			65039
		],
		status: "fully-qualified",
		emoji: "⬆️",
		tag: "E0.6",
		description: "up arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			11014
		],
		status: "unqualified",
		emoji: "⬆",
		tag: "E0.6",
		description: "up arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			8599,
			65039
		],
		status: "fully-qualified",
		emoji: "↗️",
		tag: "E0.6",
		description: "up-right arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			8599
		],
		status: "unqualified",
		emoji: "↗",
		tag: "E0.6",
		description: "up-right arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			10145,
			65039
		],
		status: "fully-qualified",
		emoji: "➡️",
		tag: "E0.6",
		description: "right arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			10145
		],
		status: "unqualified",
		emoji: "➡",
		tag: "E0.6",
		description: "right arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			8600,
			65039
		],
		status: "fully-qualified",
		emoji: "↘️",
		tag: "E0.6",
		description: "down-right arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			8600
		],
		status: "unqualified",
		emoji: "↘",
		tag: "E0.6",
		description: "down-right arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			11015,
			65039
		],
		status: "fully-qualified",
		emoji: "⬇️",
		tag: "E0.6",
		description: "down arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			11015
		],
		status: "unqualified",
		emoji: "⬇",
		tag: "E0.6",
		description: "down arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			8601,
			65039
		],
		status: "fully-qualified",
		emoji: "↙️",
		tag: "E0.6",
		description: "down-left arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			8601
		],
		status: "unqualified",
		emoji: "↙",
		tag: "E0.6",
		description: "down-left arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			11013,
			65039
		],
		status: "fully-qualified",
		emoji: "⬅️",
		tag: "E0.6",
		description: "left arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			11013
		],
		status: "unqualified",
		emoji: "⬅",
		tag: "E0.6",
		description: "left arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			8598,
			65039
		],
		status: "fully-qualified",
		emoji: "↖️",
		tag: "E0.6",
		description: "up-left arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			8598
		],
		status: "unqualified",
		emoji: "↖",
		tag: "E0.6",
		description: "up-left arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			8597,
			65039
		],
		status: "fully-qualified",
		emoji: "↕️",
		tag: "E0.6",
		description: "up-down arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			8597
		],
		status: "unqualified",
		emoji: "↕",
		tag: "E0.6",
		description: "up-down arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			8596,
			65039
		],
		status: "fully-qualified",
		emoji: "↔️",
		tag: "E0.6",
		description: "left-right arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			8596
		],
		status: "unqualified",
		emoji: "↔",
		tag: "E0.6",
		description: "left-right arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			8617,
			65039
		],
		status: "fully-qualified",
		emoji: "↩️",
		tag: "E0.6",
		description: "right arrow curving left"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			8617
		],
		status: "unqualified",
		emoji: "↩",
		tag: "E0.6",
		description: "right arrow curving left"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			8618,
			65039
		],
		status: "fully-qualified",
		emoji: "↪️",
		tag: "E0.6",
		description: "left arrow curving right"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			8618
		],
		status: "unqualified",
		emoji: "↪",
		tag: "E0.6",
		description: "left arrow curving right"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			10548,
			65039
		],
		status: "fully-qualified",
		emoji: "⤴️",
		tag: "E0.6",
		description: "right arrow curving up"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			10548
		],
		status: "unqualified",
		emoji: "⤴",
		tag: "E0.6",
		description: "right arrow curving up"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			10549,
			65039
		],
		status: "fully-qualified",
		emoji: "⤵️",
		tag: "E0.6",
		description: "right arrow curving down"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			10549
		],
		status: "unqualified",
		emoji: "⤵",
		tag: "E0.6",
		description: "right arrow curving down"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			128259
		],
		status: "fully-qualified",
		emoji: "🔃",
		tag: "E0.6",
		description: "clockwise vertical arrows"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			128260
		],
		status: "fully-qualified",
		emoji: "🔄",
		tag: "E1.0",
		description: "counterclockwise arrows button"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			128281
		],
		status: "fully-qualified",
		emoji: "🔙",
		tag: "E0.6",
		description: "BACK arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			128282
		],
		status: "fully-qualified",
		emoji: "🔚",
		tag: "E0.6",
		description: "END arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			128283
		],
		status: "fully-qualified",
		emoji: "🔛",
		tag: "E0.6",
		description: "ON! arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			128284
		],
		status: "fully-qualified",
		emoji: "🔜",
		tag: "E0.6",
		description: "SOON arrow"
	},
	{
		group: "Symbols",
		subgroup: "arrow",
		codePoints: [
			128285
		],
		status: "fully-qualified",
		emoji: "🔝",
		tag: "E0.6",
		description: "TOP arrow"
	},
	{
		group: "Symbols",
		subgroup: "religion",
		codePoints: [
			128720
		],
		status: "fully-qualified",
		emoji: "🛐",
		tag: "E1.0",
		description: "place of worship"
	},
	{
		group: "Symbols",
		subgroup: "religion",
		codePoints: [
			9883,
			65039
		],
		status: "fully-qualified",
		emoji: "⚛️",
		tag: "E1.0",
		description: "atom symbol"
	},
	{
		group: "Symbols",
		subgroup: "religion",
		codePoints: [
			9883
		],
		status: "unqualified",
		emoji: "⚛",
		tag: "E1.0",
		description: "atom symbol"
	},
	{
		group: "Symbols",
		subgroup: "religion",
		codePoints: [
			128329,
			65039
		],
		status: "fully-qualified",
		emoji: "🕉️",
		tag: "E0.7",
		description: "om"
	},
	{
		group: "Symbols",
		subgroup: "religion",
		codePoints: [
			128329
		],
		status: "unqualified",
		emoji: "🕉",
		tag: "E0.7",
		description: "om"
	},
	{
		group: "Symbols",
		subgroup: "religion",
		codePoints: [
			10017,
			65039
		],
		status: "fully-qualified",
		emoji: "✡️",
		tag: "E0.7",
		description: "star of David"
	},
	{
		group: "Symbols",
		subgroup: "religion",
		codePoints: [
			10017
		],
		status: "unqualified",
		emoji: "✡",
		tag: "E0.7",
		description: "star of David"
	},
	{
		group: "Symbols",
		subgroup: "religion",
		codePoints: [
			9784,
			65039
		],
		status: "fully-qualified",
		emoji: "☸️",
		tag: "E0.7",
		description: "wheel of dharma"
	},
	{
		group: "Symbols",
		subgroup: "religion",
		codePoints: [
			9784
		],
		status: "unqualified",
		emoji: "☸",
		tag: "E0.7",
		description: "wheel of dharma"
	},
	{
		group: "Symbols",
		subgroup: "religion",
		codePoints: [
			9775,
			65039
		],
		status: "fully-qualified",
		emoji: "☯️",
		tag: "E0.7",
		description: "yin yang"
	},
	{
		group: "Symbols",
		subgroup: "religion",
		codePoints: [
			9775
		],
		status: "unqualified",
		emoji: "☯",
		tag: "E0.7",
		description: "yin yang"
	},
	{
		group: "Symbols",
		subgroup: "religion",
		codePoints: [
			10013,
			65039
		],
		status: "fully-qualified",
		emoji: "✝️",
		tag: "E0.7",
		description: "latin cross"
	},
	{
		group: "Symbols",
		subgroup: "religion",
		codePoints: [
			10013
		],
		status: "unqualified",
		emoji: "✝",
		tag: "E0.7",
		description: "latin cross"
	},
	{
		group: "Symbols",
		subgroup: "religion",
		codePoints: [
			9766,
			65039
		],
		status: "fully-qualified",
		emoji: "☦️",
		tag: "E1.0",
		description: "orthodox cross"
	},
	{
		group: "Symbols",
		subgroup: "religion",
		codePoints: [
			9766
		],
		status: "unqualified",
		emoji: "☦",
		tag: "E1.0",
		description: "orthodox cross"
	},
	{
		group: "Symbols",
		subgroup: "religion",
		codePoints: [
			9770,
			65039
		],
		status: "fully-qualified",
		emoji: "☪️",
		tag: "E0.7",
		description: "star and crescent"
	},
	{
		group: "Symbols",
		subgroup: "religion",
		codePoints: [
			9770
		],
		status: "unqualified",
		emoji: "☪",
		tag: "E0.7",
		description: "star and crescent"
	},
	{
		group: "Symbols",
		subgroup: "religion",
		codePoints: [
			9774,
			65039
		],
		status: "fully-qualified",
		emoji: "☮️",
		tag: "E1.0",
		description: "peace symbol"
	},
	{
		group: "Symbols",
		subgroup: "religion",
		codePoints: [
			9774
		],
		status: "unqualified",
		emoji: "☮",
		tag: "E1.0",
		description: "peace symbol"
	},
	{
		group: "Symbols",
		subgroup: "religion",
		codePoints: [
			128334
		],
		status: "fully-qualified",
		emoji: "🕎",
		tag: "E1.0",
		description: "menorah"
	},
	{
		group: "Symbols",
		subgroup: "religion",
		codePoints: [
			128303
		],
		status: "fully-qualified",
		emoji: "🔯",
		tag: "E0.6",
		description: "dotted six-pointed star"
	},
	{
		group: "Symbols",
		subgroup: "zodiac",
		codePoints: [
			9800
		],
		status: "fully-qualified",
		emoji: "♈",
		tag: "E0.6",
		description: "Aries"
	},
	{
		group: "Symbols",
		subgroup: "zodiac",
		codePoints: [
			9801
		],
		status: "fully-qualified",
		emoji: "♉",
		tag: "E0.6",
		description: "Taurus"
	},
	{
		group: "Symbols",
		subgroup: "zodiac",
		codePoints: [
			9802
		],
		status: "fully-qualified",
		emoji: "♊",
		tag: "E0.6",
		description: "Gemini"
	},
	{
		group: "Symbols",
		subgroup: "zodiac",
		codePoints: [
			9803
		],
		status: "fully-qualified",
		emoji: "♋",
		tag: "E0.6",
		description: "Cancer"
	},
	{
		group: "Symbols",
		subgroup: "zodiac",
		codePoints: [
			9804
		],
		status: "fully-qualified",
		emoji: "♌",
		tag: "E0.6",
		description: "Leo"
	},
	{
		group: "Symbols",
		subgroup: "zodiac",
		codePoints: [
			9805
		],
		status: "fully-qualified",
		emoji: "♍",
		tag: "E0.6",
		description: "Virgo"
	},
	{
		group: "Symbols",
		subgroup: "zodiac",
		codePoints: [
			9806
		],
		status: "fully-qualified",
		emoji: "♎",
		tag: "E0.6",
		description: "Libra"
	},
	{
		group: "Symbols",
		subgroup: "zodiac",
		codePoints: [
			9807
		],
		status: "fully-qualified",
		emoji: "♏",
		tag: "E0.6",
		description: "Scorpio"
	},
	{
		group: "Symbols",
		subgroup: "zodiac",
		codePoints: [
			9808
		],
		status: "fully-qualified",
		emoji: "♐",
		tag: "E0.6",
		description: "Sagittarius"
	},
	{
		group: "Symbols",
		subgroup: "zodiac",
		codePoints: [
			9809
		],
		status: "fully-qualified",
		emoji: "♑",
		tag: "E0.6",
		description: "Capricorn"
	},
	{
		group: "Symbols",
		subgroup: "zodiac",
		codePoints: [
			9810
		],
		status: "fully-qualified",
		emoji: "♒",
		tag: "E0.6",
		description: "Aquarius"
	},
	{
		group: "Symbols",
		subgroup: "zodiac",
		codePoints: [
			9811
		],
		status: "fully-qualified",
		emoji: "♓",
		tag: "E0.6",
		description: "Pisces"
	},
	{
		group: "Symbols",
		subgroup: "zodiac",
		codePoints: [
			9934
		],
		status: "fully-qualified",
		emoji: "⛎",
		tag: "E0.6",
		description: "Ophiuchus"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			128256
		],
		status: "fully-qualified",
		emoji: "🔀",
		tag: "E1.0",
		description: "shuffle tracks button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			128257
		],
		status: "fully-qualified",
		emoji: "🔁",
		tag: "E1.0",
		description: "repeat button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			128258
		],
		status: "fully-qualified",
		emoji: "🔂",
		tag: "E1.0",
		description: "repeat single button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			9654,
			65039
		],
		status: "fully-qualified",
		emoji: "▶️",
		tag: "E0.6",
		description: "play button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			9654
		],
		status: "unqualified",
		emoji: "▶",
		tag: "E0.6",
		description: "play button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			9193
		],
		status: "fully-qualified",
		emoji: "⏩",
		tag: "E0.6",
		description: "fast-forward button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			9197,
			65039
		],
		status: "fully-qualified",
		emoji: "⏭️",
		tag: "E0.7",
		description: "next track button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			9197
		],
		status: "unqualified",
		emoji: "⏭",
		tag: "E0.7",
		description: "next track button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			9199,
			65039
		],
		status: "fully-qualified",
		emoji: "⏯️",
		tag: "E1.0",
		description: "play or pause button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			9199
		],
		status: "unqualified",
		emoji: "⏯",
		tag: "E1.0",
		description: "play or pause button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			9664,
			65039
		],
		status: "fully-qualified",
		emoji: "◀️",
		tag: "E0.6",
		description: "reverse button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			9664
		],
		status: "unqualified",
		emoji: "◀",
		tag: "E0.6",
		description: "reverse button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			9194
		],
		status: "fully-qualified",
		emoji: "⏪",
		tag: "E0.6",
		description: "fast reverse button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			9198,
			65039
		],
		status: "fully-qualified",
		emoji: "⏮️",
		tag: "E0.7",
		description: "last track button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			9198
		],
		status: "unqualified",
		emoji: "⏮",
		tag: "E0.7",
		description: "last track button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			128316
		],
		status: "fully-qualified",
		emoji: "🔼",
		tag: "E0.6",
		description: "upwards button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			9195
		],
		status: "fully-qualified",
		emoji: "⏫",
		tag: "E0.6",
		description: "fast up button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			128317
		],
		status: "fully-qualified",
		emoji: "🔽",
		tag: "E0.6",
		description: "downwards button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			9196
		],
		status: "fully-qualified",
		emoji: "⏬",
		tag: "E0.6",
		description: "fast down button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			9208,
			65039
		],
		status: "fully-qualified",
		emoji: "⏸️",
		tag: "E0.7",
		description: "pause button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			9208
		],
		status: "unqualified",
		emoji: "⏸",
		tag: "E0.7",
		description: "pause button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			9209,
			65039
		],
		status: "fully-qualified",
		emoji: "⏹️",
		tag: "E0.7",
		description: "stop button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			9209
		],
		status: "unqualified",
		emoji: "⏹",
		tag: "E0.7",
		description: "stop button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			9210,
			65039
		],
		status: "fully-qualified",
		emoji: "⏺️",
		tag: "E0.7",
		description: "record button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			9210
		],
		status: "unqualified",
		emoji: "⏺",
		tag: "E0.7",
		description: "record button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			9167,
			65039
		],
		status: "fully-qualified",
		emoji: "⏏️",
		tag: "E1.0",
		description: "eject button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			9167
		],
		status: "unqualified",
		emoji: "⏏",
		tag: "E1.0",
		description: "eject button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			127910
		],
		status: "fully-qualified",
		emoji: "🎦",
		tag: "E0.6",
		description: "cinema"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			128261
		],
		status: "fully-qualified",
		emoji: "🔅",
		tag: "E1.0",
		description: "dim button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			128262
		],
		status: "fully-qualified",
		emoji: "🔆",
		tag: "E1.0",
		description: "bright button"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			128246
		],
		status: "fully-qualified",
		emoji: "📶",
		tag: "E0.6",
		description: "antenna bars"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			128243
		],
		status: "fully-qualified",
		emoji: "📳",
		tag: "E0.6",
		description: "vibration mode"
	},
	{
		group: "Symbols",
		subgroup: "av-symbol",
		codePoints: [
			128244
		],
		status: "fully-qualified",
		emoji: "📴",
		tag: "E0.6",
		description: "mobile phone off"
	},
	{
		group: "Symbols",
		subgroup: "gender",
		codePoints: [
			9792,
			65039
		],
		status: "fully-qualified",
		emoji: "♀️",
		tag: "E4.0",
		description: "female sign"
	},
	{
		group: "Symbols",
		subgroup: "gender",
		codePoints: [
			9792
		],
		status: "unqualified",
		emoji: "♀",
		tag: "E4.0",
		description: "female sign"
	},
	{
		group: "Symbols",
		subgroup: "gender",
		codePoints: [
			9794,
			65039
		],
		status: "fully-qualified",
		emoji: "♂️",
		tag: "E4.0",
		description: "male sign"
	},
	{
		group: "Symbols",
		subgroup: "gender",
		codePoints: [
			9794
		],
		status: "unqualified",
		emoji: "♂",
		tag: "E4.0",
		description: "male sign"
	},
	{
		group: "Symbols",
		subgroup: "gender",
		codePoints: [
			9895,
			65039
		],
		status: "fully-qualified",
		emoji: "⚧️",
		tag: "E13.0",
		description: "transgender symbol"
	},
	{
		group: "Symbols",
		subgroup: "gender",
		codePoints: [
			9895
		],
		status: "unqualified",
		emoji: "⚧",
		tag: "E13.0",
		description: "transgender symbol"
	},
	{
		group: "Symbols",
		subgroup: "math",
		codePoints: [
			10006,
			65039
		],
		status: "fully-qualified",
		emoji: "✖️",
		tag: "E0.6",
		description: "multiply"
	},
	{
		group: "Symbols",
		subgroup: "math",
		codePoints: [
			10006
		],
		status: "unqualified",
		emoji: "✖",
		tag: "E0.6",
		description: "multiply"
	},
	{
		group: "Symbols",
		subgroup: "math",
		codePoints: [
			10133
		],
		status: "fully-qualified",
		emoji: "➕",
		tag: "E0.6",
		description: "plus"
	},
	{
		group: "Symbols",
		subgroup: "math",
		codePoints: [
			10134
		],
		status: "fully-qualified",
		emoji: "➖",
		tag: "E0.6",
		description: "minus"
	},
	{
		group: "Symbols",
		subgroup: "math",
		codePoints: [
			10135
		],
		status: "fully-qualified",
		emoji: "➗",
		tag: "E0.6",
		description: "divide"
	},
	{
		group: "Symbols",
		subgroup: "math",
		codePoints: [
			9854,
			65039
		],
		status: "fully-qualified",
		emoji: "♾️",
		tag: "E11.0",
		description: "infinity"
	},
	{
		group: "Symbols",
		subgroup: "math",
		codePoints: [
			9854
		],
		status: "unqualified",
		emoji: "♾",
		tag: "E11.0",
		description: "infinity"
	},
	{
		group: "Symbols",
		subgroup: "punctuation",
		codePoints: [
			8252,
			65039
		],
		status: "fully-qualified",
		emoji: "‼️",
		tag: "E0.6",
		description: "double exclamation mark"
	},
	{
		group: "Symbols",
		subgroup: "punctuation",
		codePoints: [
			8252
		],
		status: "unqualified",
		emoji: "‼",
		tag: "E0.6",
		description: "double exclamation mark"
	},
	{
		group: "Symbols",
		subgroup: "punctuation",
		codePoints: [
			8265,
			65039
		],
		status: "fully-qualified",
		emoji: "⁉️",
		tag: "E0.6",
		description: "exclamation question mark"
	},
	{
		group: "Symbols",
		subgroup: "punctuation",
		codePoints: [
			8265
		],
		status: "unqualified",
		emoji: "⁉",
		tag: "E0.6",
		description: "exclamation question mark"
	},
	{
		group: "Symbols",
		subgroup: "punctuation",
		codePoints: [
			10067
		],
		status: "fully-qualified",
		emoji: "❓",
		tag: "E0.6",
		description: "question mark"
	},
	{
		group: "Symbols",
		subgroup: "punctuation",
		codePoints: [
			10068
		],
		status: "fully-qualified",
		emoji: "❔",
		tag: "E0.6",
		description: "white question mark"
	},
	{
		group: "Symbols",
		subgroup: "punctuation",
		codePoints: [
			10069
		],
		status: "fully-qualified",
		emoji: "❕",
		tag: "E0.6",
		description: "white exclamation mark"
	},
	{
		group: "Symbols",
		subgroup: "punctuation",
		codePoints: [
			10071
		],
		status: "fully-qualified",
		emoji: "❗",
		tag: "E0.6",
		description: "exclamation mark"
	},
	{
		group: "Symbols",
		subgroup: "punctuation",
		codePoints: [
			12336,
			65039
		],
		status: "fully-qualified",
		emoji: "〰️",
		tag: "E0.6",
		description: "wavy dash"
	},
	{
		group: "Symbols",
		subgroup: "punctuation",
		codePoints: [
			12336
		],
		status: "unqualified",
		emoji: "〰",
		tag: "E0.6",
		description: "wavy dash"
	},
	{
		group: "Symbols",
		subgroup: "currency",
		codePoints: [
			128177
		],
		status: "fully-qualified",
		emoji: "💱",
		tag: "E0.6",
		description: "currency exchange"
	},
	{
		group: "Symbols",
		subgroup: "currency",
		codePoints: [
			128178
		],
		status: "fully-qualified",
		emoji: "💲",
		tag: "E0.6",
		description: "heavy dollar sign"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			9877,
			65039
		],
		status: "fully-qualified",
		emoji: "⚕️",
		tag: "E4.0",
		description: "medical symbol"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			9877
		],
		status: "unqualified",
		emoji: "⚕",
		tag: "E4.0",
		description: "medical symbol"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			9851,
			65039
		],
		status: "fully-qualified",
		emoji: "♻️",
		tag: "E0.6",
		description: "recycling symbol"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			9851
		],
		status: "unqualified",
		emoji: "♻",
		tag: "E0.6",
		description: "recycling symbol"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			9884,
			65039
		],
		status: "fully-qualified",
		emoji: "⚜️",
		tag: "E1.0",
		description: "fleur-de-lis"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			9884
		],
		status: "unqualified",
		emoji: "⚜",
		tag: "E1.0",
		description: "fleur-de-lis"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			128305
		],
		status: "fully-qualified",
		emoji: "🔱",
		tag: "E0.6",
		description: "trident emblem"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			128219
		],
		status: "fully-qualified",
		emoji: "📛",
		tag: "E0.6",
		description: "name badge"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			128304
		],
		status: "fully-qualified",
		emoji: "🔰",
		tag: "E0.6",
		description: "Japanese symbol for beginner"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			11093
		],
		status: "fully-qualified",
		emoji: "⭕",
		tag: "E0.6",
		description: "hollow red circle"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			9989
		],
		status: "fully-qualified",
		emoji: "✅",
		tag: "E0.6",
		description: "check mark button"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			9745,
			65039
		],
		status: "fully-qualified",
		emoji: "☑️",
		tag: "E0.6",
		description: "check box with check"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			9745
		],
		status: "unqualified",
		emoji: "☑",
		tag: "E0.6",
		description: "check box with check"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			10004,
			65039
		],
		status: "fully-qualified",
		emoji: "✔️",
		tag: "E0.6",
		description: "check mark"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			10004
		],
		status: "unqualified",
		emoji: "✔",
		tag: "E0.6",
		description: "check mark"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			10060
		],
		status: "fully-qualified",
		emoji: "❌",
		tag: "E0.6",
		description: "cross mark"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			10062
		],
		status: "fully-qualified",
		emoji: "❎",
		tag: "E0.6",
		description: "cross mark button"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			10160
		],
		status: "fully-qualified",
		emoji: "➰",
		tag: "E0.6",
		description: "curly loop"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			10175
		],
		status: "fully-qualified",
		emoji: "➿",
		tag: "E1.0",
		description: "double curly loop"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			12349,
			65039
		],
		status: "fully-qualified",
		emoji: "〽️",
		tag: "E0.6",
		description: "part alternation mark"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			12349
		],
		status: "unqualified",
		emoji: "〽",
		tag: "E0.6",
		description: "part alternation mark"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			10035,
			65039
		],
		status: "fully-qualified",
		emoji: "✳️",
		tag: "E0.6",
		description: "eight-spoked asterisk"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			10035
		],
		status: "unqualified",
		emoji: "✳",
		tag: "E0.6",
		description: "eight-spoked asterisk"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			10036,
			65039
		],
		status: "fully-qualified",
		emoji: "✴️",
		tag: "E0.6",
		description: "eight-pointed star"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			10036
		],
		status: "unqualified",
		emoji: "✴",
		tag: "E0.6",
		description: "eight-pointed star"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			10055,
			65039
		],
		status: "fully-qualified",
		emoji: "❇️",
		tag: "E0.6",
		description: "sparkle"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			10055
		],
		status: "unqualified",
		emoji: "❇",
		tag: "E0.6",
		description: "sparkle"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			169,
			65039
		],
		status: "fully-qualified",
		emoji: "©️",
		tag: "E0.6",
		description: "copyright"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			169
		],
		status: "unqualified",
		emoji: "©",
		tag: "E0.6",
		description: "copyright"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			174,
			65039
		],
		status: "fully-qualified",
		emoji: "®️",
		tag: "E0.6",
		description: "registered"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			174
		],
		status: "unqualified",
		emoji: "®",
		tag: "E0.6",
		description: "registered"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			8482,
			65039
		],
		status: "fully-qualified",
		emoji: "™️",
		tag: "E0.6",
		description: "trade mark"
	},
	{
		group: "Symbols",
		subgroup: "other-symbol",
		codePoints: [
			8482
		],
		status: "unqualified",
		emoji: "™",
		tag: "E0.6",
		description: "trade mark"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			35,
			65039,
			8419
		],
		status: "fully-qualified",
		emoji: "#️⃣",
		tag: "E0.6",
		description: "keycap: #"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			35,
			8419
		],
		status: "unqualified",
		emoji: "#⃣",
		tag: "E0.6",
		description: "keycap: #"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			42,
			65039,
			8419
		],
		status: "fully-qualified",
		emoji: "*️⃣",
		tag: "E2.0",
		description: "keycap: *"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			42,
			8419
		],
		status: "unqualified",
		emoji: "*⃣",
		tag: "E2.0",
		description: "keycap: *"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			48,
			65039,
			8419
		],
		status: "fully-qualified",
		emoji: "0️⃣",
		tag: "E0.6",
		description: "keycap: 0"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			48,
			8419
		],
		status: "unqualified",
		emoji: "0⃣",
		tag: "E0.6",
		description: "keycap: 0"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			49,
			65039,
			8419
		],
		status: "fully-qualified",
		emoji: "1️⃣",
		tag: "E0.6",
		description: "keycap: 1"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			49,
			8419
		],
		status: "unqualified",
		emoji: "1⃣",
		tag: "E0.6",
		description: "keycap: 1"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			50,
			65039,
			8419
		],
		status: "fully-qualified",
		emoji: "2️⃣",
		tag: "E0.6",
		description: "keycap: 2"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			50,
			8419
		],
		status: "unqualified",
		emoji: "2⃣",
		tag: "E0.6",
		description: "keycap: 2"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			51,
			65039,
			8419
		],
		status: "fully-qualified",
		emoji: "3️⃣",
		tag: "E0.6",
		description: "keycap: 3"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			51,
			8419
		],
		status: "unqualified",
		emoji: "3⃣",
		tag: "E0.6",
		description: "keycap: 3"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			52,
			65039,
			8419
		],
		status: "fully-qualified",
		emoji: "4️⃣",
		tag: "E0.6",
		description: "keycap: 4"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			52,
			8419
		],
		status: "unqualified",
		emoji: "4⃣",
		tag: "E0.6",
		description: "keycap: 4"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			53,
			65039,
			8419
		],
		status: "fully-qualified",
		emoji: "5️⃣",
		tag: "E0.6",
		description: "keycap: 5"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			53,
			8419
		],
		status: "unqualified",
		emoji: "5⃣",
		tag: "E0.6",
		description: "keycap: 5"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			54,
			65039,
			8419
		],
		status: "fully-qualified",
		emoji: "6️⃣",
		tag: "E0.6",
		description: "keycap: 6"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			54,
			8419
		],
		status: "unqualified",
		emoji: "6⃣",
		tag: "E0.6",
		description: "keycap: 6"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			55,
			65039,
			8419
		],
		status: "fully-qualified",
		emoji: "7️⃣",
		tag: "E0.6",
		description: "keycap: 7"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			55,
			8419
		],
		status: "unqualified",
		emoji: "7⃣",
		tag: "E0.6",
		description: "keycap: 7"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			56,
			65039,
			8419
		],
		status: "fully-qualified",
		emoji: "8️⃣",
		tag: "E0.6",
		description: "keycap: 8"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			56,
			8419
		],
		status: "unqualified",
		emoji: "8⃣",
		tag: "E0.6",
		description: "keycap: 8"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			57,
			65039,
			8419
		],
		status: "fully-qualified",
		emoji: "9️⃣",
		tag: "E0.6",
		description: "keycap: 9"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			57,
			8419
		],
		status: "unqualified",
		emoji: "9⃣",
		tag: "E0.6",
		description: "keycap: 9"
	},
	{
		group: "Symbols",
		subgroup: "keycap",
		codePoints: [
			128287
		],
		status: "fully-qualified",
		emoji: "🔟",
		tag: "E0.6",
		description: "keycap: 10"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			128288
		],
		status: "fully-qualified",
		emoji: "🔠",
		tag: "E0.6",
		description: "input latin uppercase"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			128289
		],
		status: "fully-qualified",
		emoji: "🔡",
		tag: "E0.6",
		description: "input latin lowercase"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			128290
		],
		status: "fully-qualified",
		emoji: "🔢",
		tag: "E0.6",
		description: "input numbers"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			128291
		],
		status: "fully-qualified",
		emoji: "🔣",
		tag: "E0.6",
		description: "input symbols"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			128292
		],
		status: "fully-qualified",
		emoji: "🔤",
		tag: "E0.6",
		description: "input latin letters"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127344,
			65039
		],
		status: "fully-qualified",
		emoji: "🅰️",
		tag: "E0.6",
		description: "A button (blood type)"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127344
		],
		status: "unqualified",
		emoji: "🅰",
		tag: "E0.6",
		description: "A button (blood type)"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127374
		],
		status: "fully-qualified",
		emoji: "🆎",
		tag: "E0.6",
		description: "AB button (blood type)"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127345,
			65039
		],
		status: "fully-qualified",
		emoji: "🅱️",
		tag: "E0.6",
		description: "B button (blood type)"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127345
		],
		status: "unqualified",
		emoji: "🅱",
		tag: "E0.6",
		description: "B button (blood type)"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127377
		],
		status: "fully-qualified",
		emoji: "🆑",
		tag: "E0.6",
		description: "CL button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127378
		],
		status: "fully-qualified",
		emoji: "🆒",
		tag: "E0.6",
		description: "COOL button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127379
		],
		status: "fully-qualified",
		emoji: "🆓",
		tag: "E0.6",
		description: "FREE button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			8505,
			65039
		],
		status: "fully-qualified",
		emoji: "ℹ️",
		tag: "E0.6",
		description: "information"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			8505
		],
		status: "unqualified",
		emoji: "ℹ",
		tag: "E0.6",
		description: "information"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127380
		],
		status: "fully-qualified",
		emoji: "🆔",
		tag: "E0.6",
		description: "ID button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			9410,
			65039
		],
		status: "fully-qualified",
		emoji: "Ⓜ️",
		tag: "E0.6",
		description: "circled M"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			9410
		],
		status: "unqualified",
		emoji: "Ⓜ",
		tag: "E0.6",
		description: "circled M"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127381
		],
		status: "fully-qualified",
		emoji: "🆕",
		tag: "E0.6",
		description: "NEW button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127382
		],
		status: "fully-qualified",
		emoji: "🆖",
		tag: "E0.6",
		description: "NG button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127358,
			65039
		],
		status: "fully-qualified",
		emoji: "🅾️",
		tag: "E0.6",
		description: "O button (blood type)"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127358
		],
		status: "unqualified",
		emoji: "🅾",
		tag: "E0.6",
		description: "O button (blood type)"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127383
		],
		status: "fully-qualified",
		emoji: "🆗",
		tag: "E0.6",
		description: "OK button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127359,
			65039
		],
		status: "fully-qualified",
		emoji: "🅿️",
		tag: "E0.6",
		description: "P button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127359
		],
		status: "unqualified",
		emoji: "🅿",
		tag: "E0.6",
		description: "P button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127384
		],
		status: "fully-qualified",
		emoji: "🆘",
		tag: "E0.6",
		description: "SOS button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127385
		],
		status: "fully-qualified",
		emoji: "🆙",
		tag: "E0.6",
		description: "UP! button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127386
		],
		status: "fully-qualified",
		emoji: "🆚",
		tag: "E0.6",
		description: "VS button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127489
		],
		status: "fully-qualified",
		emoji: "🈁",
		tag: "E0.6",
		description: "Japanese “here” button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127490,
			65039
		],
		status: "fully-qualified",
		emoji: "🈂️",
		tag: "E0.6",
		description: "Japanese “service charge” button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127490
		],
		status: "unqualified",
		emoji: "🈂",
		tag: "E0.6",
		description: "Japanese “service charge” button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127543,
			65039
		],
		status: "fully-qualified",
		emoji: "🈷️",
		tag: "E0.6",
		description: "Japanese “monthly amount” button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127543
		],
		status: "unqualified",
		emoji: "🈷",
		tag: "E0.6",
		description: "Japanese “monthly amount” button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127542
		],
		status: "fully-qualified",
		emoji: "🈶",
		tag: "E0.6",
		description: "Japanese “not free of charge” button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127535
		],
		status: "fully-qualified",
		emoji: "🈯",
		tag: "E0.6",
		description: "Japanese “reserved” button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127568
		],
		status: "fully-qualified",
		emoji: "🉐",
		tag: "E0.6",
		description: "Japanese “bargain” button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127545
		],
		status: "fully-qualified",
		emoji: "🈹",
		tag: "E0.6",
		description: "Japanese “discount” button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127514
		],
		status: "fully-qualified",
		emoji: "🈚",
		tag: "E0.6",
		description: "Japanese “free of charge” button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127538
		],
		status: "fully-qualified",
		emoji: "🈲",
		tag: "E0.6",
		description: "Japanese “prohibited” button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127569
		],
		status: "fully-qualified",
		emoji: "🉑",
		tag: "E0.6",
		description: "Japanese “acceptable” button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127544
		],
		status: "fully-qualified",
		emoji: "🈸",
		tag: "E0.6",
		description: "Japanese “application” button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127540
		],
		status: "fully-qualified",
		emoji: "🈴",
		tag: "E0.6",
		description: "Japanese “passing grade” button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127539
		],
		status: "fully-qualified",
		emoji: "🈳",
		tag: "E0.6",
		description: "Japanese “vacancy” button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			12951,
			65039
		],
		status: "fully-qualified",
		emoji: "㊗️",
		tag: "E0.6",
		description: "Japanese “congratulations” button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			12951
		],
		status: "unqualified",
		emoji: "㊗",
		tag: "E0.6",
		description: "Japanese “congratulations” button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			12953,
			65039
		],
		status: "fully-qualified",
		emoji: "㊙️",
		tag: "E0.6",
		description: "Japanese “secret” button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			12953
		],
		status: "unqualified",
		emoji: "㊙",
		tag: "E0.6",
		description: "Japanese “secret” button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127546
		],
		status: "fully-qualified",
		emoji: "🈺",
		tag: "E0.6",
		description: "Japanese “open for business” button"
	},
	{
		group: "Symbols",
		subgroup: "alphanum",
		codePoints: [
			127541
		],
		status: "fully-qualified",
		emoji: "🈵",
		tag: "E0.6",
		description: "Japanese “no vacancy” button"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			128308
		],
		status: "fully-qualified",
		emoji: "🔴",
		tag: "E0.6",
		description: "red circle"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			128992
		],
		status: "fully-qualified",
		emoji: "🟠",
		tag: "E12.0",
		description: "orange circle"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			128993
		],
		status: "fully-qualified",
		emoji: "🟡",
		tag: "E12.0",
		description: "yellow circle"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			128994
		],
		status: "fully-qualified",
		emoji: "🟢",
		tag: "E12.0",
		description: "green circle"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			128309
		],
		status: "fully-qualified",
		emoji: "🔵",
		tag: "E0.6",
		description: "blue circle"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			128995
		],
		status: "fully-qualified",
		emoji: "🟣",
		tag: "E12.0",
		description: "purple circle"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			128996
		],
		status: "fully-qualified",
		emoji: "🟤",
		tag: "E12.0",
		description: "brown circle"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			9899
		],
		status: "fully-qualified",
		emoji: "⚫",
		tag: "E0.6",
		description: "black circle"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			9898
		],
		status: "fully-qualified",
		emoji: "⚪",
		tag: "E0.6",
		description: "white circle"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			128997
		],
		status: "fully-qualified",
		emoji: "🟥",
		tag: "E12.0",
		description: "red square"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			128999
		],
		status: "fully-qualified",
		emoji: "🟧",
		tag: "E12.0",
		description: "orange square"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			129000
		],
		status: "fully-qualified",
		emoji: "🟨",
		tag: "E12.0",
		description: "yellow square"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			129001
		],
		status: "fully-qualified",
		emoji: "🟩",
		tag: "E12.0",
		description: "green square"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			128998
		],
		status: "fully-qualified",
		emoji: "🟦",
		tag: "E12.0",
		description: "blue square"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			129002
		],
		status: "fully-qualified",
		emoji: "🟪",
		tag: "E12.0",
		description: "purple square"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			129003
		],
		status: "fully-qualified",
		emoji: "🟫",
		tag: "E12.0",
		description: "brown square"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			11035
		],
		status: "fully-qualified",
		emoji: "⬛",
		tag: "E0.6",
		description: "black large square"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			11036
		],
		status: "fully-qualified",
		emoji: "⬜",
		tag: "E0.6",
		description: "white large square"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			9724,
			65039
		],
		status: "fully-qualified",
		emoji: "◼️",
		tag: "E0.6",
		description: "black medium square"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			9724
		],
		status: "unqualified",
		emoji: "◼",
		tag: "E0.6",
		description: "black medium square"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			9723,
			65039
		],
		status: "fully-qualified",
		emoji: "◻️",
		tag: "E0.6",
		description: "white medium square"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			9723
		],
		status: "unqualified",
		emoji: "◻",
		tag: "E0.6",
		description: "white medium square"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			9726
		],
		status: "fully-qualified",
		emoji: "◾",
		tag: "E0.6",
		description: "black medium-small square"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			9725
		],
		status: "fully-qualified",
		emoji: "◽",
		tag: "E0.6",
		description: "white medium-small square"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			9642,
			65039
		],
		status: "fully-qualified",
		emoji: "▪️",
		tag: "E0.6",
		description: "black small square"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			9642
		],
		status: "unqualified",
		emoji: "▪",
		tag: "E0.6",
		description: "black small square"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			9643,
			65039
		],
		status: "fully-qualified",
		emoji: "▫️",
		tag: "E0.6",
		description: "white small square"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			9643
		],
		status: "unqualified",
		emoji: "▫",
		tag: "E0.6",
		description: "white small square"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			128310
		],
		status: "fully-qualified",
		emoji: "🔶",
		tag: "E0.6",
		description: "large orange diamond"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			128311
		],
		status: "fully-qualified",
		emoji: "🔷",
		tag: "E0.6",
		description: "large blue diamond"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			128312
		],
		status: "fully-qualified",
		emoji: "🔸",
		tag: "E0.6",
		description: "small orange diamond"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			128313
		],
		status: "fully-qualified",
		emoji: "🔹",
		tag: "E0.6",
		description: "small blue diamond"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			128314
		],
		status: "fully-qualified",
		emoji: "🔺",
		tag: "E0.6",
		description: "red triangle pointed up"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			128315
		],
		status: "fully-qualified",
		emoji: "🔻",
		tag: "E0.6",
		description: "red triangle pointed down"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			128160
		],
		status: "fully-qualified",
		emoji: "💠",
		tag: "E0.6",
		description: "diamond with a dot"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			128280
		],
		status: "fully-qualified",
		emoji: "🔘",
		tag: "E0.6",
		description: "radio button"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			128307
		],
		status: "fully-qualified",
		emoji: "🔳",
		tag: "E0.6",
		description: "white square button"
	},
	{
		group: "Symbols",
		subgroup: "geometric",
		codePoints: [
			128306
		],
		status: "fully-qualified",
		emoji: "🔲",
		tag: "E0.6",
		description: "black square button"
	},
	{
		group: "Flags",
		subgroup: "flag",
		codePoints: [
			127937
		],
		status: "fully-qualified",
		emoji: "🏁",
		tag: "E0.6",
		description: "chequered flag"
	},
	{
		group: "Flags",
		subgroup: "flag",
		codePoints: [
			128681
		],
		status: "fully-qualified",
		emoji: "🚩",
		tag: "E0.6",
		description: "triangular flag"
	},
	{
		group: "Flags",
		subgroup: "flag",
		codePoints: [
			127884
		],
		status: "fully-qualified",
		emoji: "🎌",
		tag: "E0.6",
		description: "crossed flags"
	},
	{
		group: "Flags",
		subgroup: "flag",
		codePoints: [
			127988
		],
		status: "fully-qualified",
		emoji: "🏴",
		tag: "E1.0",
		description: "black flag"
	},
	{
		group: "Flags",
		subgroup: "flag",
		codePoints: [
			127987,
			65039
		],
		status: "fully-qualified",
		emoji: "🏳️",
		tag: "E0.7",
		description: "white flag"
	},
	{
		group: "Flags",
		subgroup: "flag",
		codePoints: [
			127987
		],
		status: "unqualified",
		emoji: "🏳",
		tag: "E0.7",
		description: "white flag"
	},
	{
		group: "Flags",
		subgroup: "flag",
		codePoints: [
			127987,
			65039,
			8205,
			127752
		],
		status: "fully-qualified",
		emoji: "🏳️‍🌈",
		tag: "E4.0",
		description: "rainbow flag"
	},
	{
		group: "Flags",
		subgroup: "flag",
		codePoints: [
			127987,
			8205,
			127752
		],
		status: "unqualified",
		emoji: "🏳‍🌈",
		tag: "E4.0",
		description: "rainbow flag"
	},
	{
		group: "Flags",
		subgroup: "flag",
		codePoints: [
			127987,
			65039,
			8205,
			9895,
			65039
		],
		status: "fully-qualified",
		emoji: "🏳️‍⚧️",
		tag: "E13.0",
		description: "transgender flag"
	},
	{
		group: "Flags",
		subgroup: "flag",
		codePoints: [
			127987,
			8205,
			9895,
			65039
		],
		status: "unqualified",
		emoji: "🏳‍⚧️",
		tag: "E13.0",
		description: "transgender flag"
	},
	{
		group: "Flags",
		subgroup: "flag",
		codePoints: [
			127987,
			65039,
			8205,
			9895
		],
		status: "unqualified",
		emoji: "🏳️‍⚧",
		tag: "E13.0",
		description: "transgender flag"
	},
	{
		group: "Flags",
		subgroup: "flag",
		codePoints: [
			127987,
			8205,
			9895
		],
		status: "unqualified",
		emoji: "🏳‍⚧",
		tag: "E13.0",
		description: "transgender flag"
	},
	{
		group: "Flags",
		subgroup: "flag",
		codePoints: [
			127988,
			8205,
			9760,
			65039
		],
		status: "fully-qualified",
		emoji: "🏴‍☠️",
		tag: "E11.0",
		description: "pirate flag"
	},
	{
		group: "Flags",
		subgroup: "flag",
		codePoints: [
			127988,
			8205,
			9760
		],
		status: "minimally-qualified",
		emoji: "🏴‍☠",
		tag: "E11.0",
		description: "pirate flag"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127462,
			127464
		],
		status: "fully-qualified",
		emoji: "🇦🇨",
		tag: "E2.0",
		description: "flag: Ascension Island"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127462,
			127465
		],
		status: "fully-qualified",
		emoji: "🇦🇩",
		tag: "E2.0",
		description: "flag: Andorra"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127462,
			127466
		],
		status: "fully-qualified",
		emoji: "🇦🇪",
		tag: "E2.0",
		description: "flag: United Arab Emirates"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127462,
			127467
		],
		status: "fully-qualified",
		emoji: "🇦🇫",
		tag: "E2.0",
		description: "flag: Afghanistan"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127462,
			127468
		],
		status: "fully-qualified",
		emoji: "🇦🇬",
		tag: "E2.0",
		description: "flag: Antigua & Barbuda"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127462,
			127470
		],
		status: "fully-qualified",
		emoji: "🇦🇮",
		tag: "E2.0",
		description: "flag: Anguilla"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127462,
			127473
		],
		status: "fully-qualified",
		emoji: "🇦🇱",
		tag: "E2.0",
		description: "flag: Albania"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127462,
			127474
		],
		status: "fully-qualified",
		emoji: "🇦🇲",
		tag: "E2.0",
		description: "flag: Armenia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127462,
			127476
		],
		status: "fully-qualified",
		emoji: "🇦🇴",
		tag: "E2.0",
		description: "flag: Angola"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127462,
			127478
		],
		status: "fully-qualified",
		emoji: "🇦🇶",
		tag: "E2.0",
		description: "flag: Antarctica"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127462,
			127479
		],
		status: "fully-qualified",
		emoji: "🇦🇷",
		tag: "E2.0",
		description: "flag: Argentina"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127462,
			127480
		],
		status: "fully-qualified",
		emoji: "🇦🇸",
		tag: "E2.0",
		description: "flag: American Samoa"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127462,
			127481
		],
		status: "fully-qualified",
		emoji: "🇦🇹",
		tag: "E2.0",
		description: "flag: Austria"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127462,
			127482
		],
		status: "fully-qualified",
		emoji: "🇦🇺",
		tag: "E2.0",
		description: "flag: Australia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127462,
			127484
		],
		status: "fully-qualified",
		emoji: "🇦🇼",
		tag: "E2.0",
		description: "flag: Aruba"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127462,
			127485
		],
		status: "fully-qualified",
		emoji: "🇦🇽",
		tag: "E2.0",
		description: "flag: Åland Islands"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127462,
			127487
		],
		status: "fully-qualified",
		emoji: "🇦🇿",
		tag: "E2.0",
		description: "flag: Azerbaijan"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127463,
			127462
		],
		status: "fully-qualified",
		emoji: "🇧🇦",
		tag: "E2.0",
		description: "flag: Bosnia & Herzegovina"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127463,
			127463
		],
		status: "fully-qualified",
		emoji: "🇧🇧",
		tag: "E2.0",
		description: "flag: Barbados"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127463,
			127465
		],
		status: "fully-qualified",
		emoji: "🇧🇩",
		tag: "E2.0",
		description: "flag: Bangladesh"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127463,
			127466
		],
		status: "fully-qualified",
		emoji: "🇧🇪",
		tag: "E2.0",
		description: "flag: Belgium"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127463,
			127467
		],
		status: "fully-qualified",
		emoji: "🇧🇫",
		tag: "E2.0",
		description: "flag: Burkina Faso"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127463,
			127468
		],
		status: "fully-qualified",
		emoji: "🇧🇬",
		tag: "E2.0",
		description: "flag: Bulgaria"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127463,
			127469
		],
		status: "fully-qualified",
		emoji: "🇧🇭",
		tag: "E2.0",
		description: "flag: Bahrain"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127463,
			127470
		],
		status: "fully-qualified",
		emoji: "🇧🇮",
		tag: "E2.0",
		description: "flag: Burundi"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127463,
			127471
		],
		status: "fully-qualified",
		emoji: "🇧🇯",
		tag: "E2.0",
		description: "flag: Benin"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127463,
			127473
		],
		status: "fully-qualified",
		emoji: "🇧🇱",
		tag: "E2.0",
		description: "flag: St. Barthélemy"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127463,
			127474
		],
		status: "fully-qualified",
		emoji: "🇧🇲",
		tag: "E2.0",
		description: "flag: Bermuda"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127463,
			127475
		],
		status: "fully-qualified",
		emoji: "🇧🇳",
		tag: "E2.0",
		description: "flag: Brunei"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127463,
			127476
		],
		status: "fully-qualified",
		emoji: "🇧🇴",
		tag: "E2.0",
		description: "flag: Bolivia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127463,
			127478
		],
		status: "fully-qualified",
		emoji: "🇧🇶",
		tag: "E2.0",
		description: "flag: Caribbean Netherlands"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127463,
			127479
		],
		status: "fully-qualified",
		emoji: "🇧🇷",
		tag: "E2.0",
		description: "flag: Brazil"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127463,
			127480
		],
		status: "fully-qualified",
		emoji: "🇧🇸",
		tag: "E2.0",
		description: "flag: Bahamas"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127463,
			127481
		],
		status: "fully-qualified",
		emoji: "🇧🇹",
		tag: "E2.0",
		description: "flag: Bhutan"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127463,
			127483
		],
		status: "fully-qualified",
		emoji: "🇧🇻",
		tag: "E2.0",
		description: "flag: Bouvet Island"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127463,
			127484
		],
		status: "fully-qualified",
		emoji: "🇧🇼",
		tag: "E2.0",
		description: "flag: Botswana"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127463,
			127486
		],
		status: "fully-qualified",
		emoji: "🇧🇾",
		tag: "E2.0",
		description: "flag: Belarus"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127463,
			127487
		],
		status: "fully-qualified",
		emoji: "🇧🇿",
		tag: "E2.0",
		description: "flag: Belize"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127464,
			127462
		],
		status: "fully-qualified",
		emoji: "🇨🇦",
		tag: "E2.0",
		description: "flag: Canada"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127464,
			127464
		],
		status: "fully-qualified",
		emoji: "🇨🇨",
		tag: "E2.0",
		description: "flag: Cocos (Keeling) Islands"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127464,
			127465
		],
		status: "fully-qualified",
		emoji: "🇨🇩",
		tag: "E2.0",
		description: "flag: Congo - Kinshasa"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127464,
			127467
		],
		status: "fully-qualified",
		emoji: "🇨🇫",
		tag: "E2.0",
		description: "flag: Central African Republic"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127464,
			127468
		],
		status: "fully-qualified",
		emoji: "🇨🇬",
		tag: "E2.0",
		description: "flag: Congo - Brazzaville"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127464,
			127469
		],
		status: "fully-qualified",
		emoji: "🇨🇭",
		tag: "E2.0",
		description: "flag: Switzerland"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127464,
			127470
		],
		status: "fully-qualified",
		emoji: "🇨🇮",
		tag: "E2.0",
		description: "flag: Côte d’Ivoire"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127464,
			127472
		],
		status: "fully-qualified",
		emoji: "🇨🇰",
		tag: "E2.0",
		description: "flag: Cook Islands"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127464,
			127473
		],
		status: "fully-qualified",
		emoji: "🇨🇱",
		tag: "E2.0",
		description: "flag: Chile"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127464,
			127474
		],
		status: "fully-qualified",
		emoji: "🇨🇲",
		tag: "E2.0",
		description: "flag: Cameroon"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127464,
			127475
		],
		status: "fully-qualified",
		emoji: "🇨🇳",
		tag: "E0.6",
		description: "flag: China"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127464,
			127476
		],
		status: "fully-qualified",
		emoji: "🇨🇴",
		tag: "E2.0",
		description: "flag: Colombia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127464,
			127477
		],
		status: "fully-qualified",
		emoji: "🇨🇵",
		tag: "E2.0",
		description: "flag: Clipperton Island"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127464,
			127479
		],
		status: "fully-qualified",
		emoji: "🇨🇷",
		tag: "E2.0",
		description: "flag: Costa Rica"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127464,
			127482
		],
		status: "fully-qualified",
		emoji: "🇨🇺",
		tag: "E2.0",
		description: "flag: Cuba"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127464,
			127483
		],
		status: "fully-qualified",
		emoji: "🇨🇻",
		tag: "E2.0",
		description: "flag: Cape Verde"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127464,
			127484
		],
		status: "fully-qualified",
		emoji: "🇨🇼",
		tag: "E2.0",
		description: "flag: Curaçao"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127464,
			127485
		],
		status: "fully-qualified",
		emoji: "🇨🇽",
		tag: "E2.0",
		description: "flag: Christmas Island"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127464,
			127486
		],
		status: "fully-qualified",
		emoji: "🇨🇾",
		tag: "E2.0",
		description: "flag: Cyprus"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127464,
			127487
		],
		status: "fully-qualified",
		emoji: "🇨🇿",
		tag: "E2.0",
		description: "flag: Czechia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127465,
			127466
		],
		status: "fully-qualified",
		emoji: "🇩🇪",
		tag: "E0.6",
		description: "flag: Germany"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127465,
			127468
		],
		status: "fully-qualified",
		emoji: "🇩🇬",
		tag: "E2.0",
		description: "flag: Diego Garcia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127465,
			127471
		],
		status: "fully-qualified",
		emoji: "🇩🇯",
		tag: "E2.0",
		description: "flag: Djibouti"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127465,
			127472
		],
		status: "fully-qualified",
		emoji: "🇩🇰",
		tag: "E2.0",
		description: "flag: Denmark"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127465,
			127474
		],
		status: "fully-qualified",
		emoji: "🇩🇲",
		tag: "E2.0",
		description: "flag: Dominica"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127465,
			127476
		],
		status: "fully-qualified",
		emoji: "🇩🇴",
		tag: "E2.0",
		description: "flag: Dominican Republic"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127465,
			127487
		],
		status: "fully-qualified",
		emoji: "🇩🇿",
		tag: "E2.0",
		description: "flag: Algeria"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127466,
			127462
		],
		status: "fully-qualified",
		emoji: "🇪🇦",
		tag: "E2.0",
		description: "flag: Ceuta & Melilla"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127466,
			127464
		],
		status: "fully-qualified",
		emoji: "🇪🇨",
		tag: "E2.0",
		description: "flag: Ecuador"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127466,
			127466
		],
		status: "fully-qualified",
		emoji: "🇪🇪",
		tag: "E2.0",
		description: "flag: Estonia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127466,
			127468
		],
		status: "fully-qualified",
		emoji: "🇪🇬",
		tag: "E2.0",
		description: "flag: Egypt"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127466,
			127469
		],
		status: "fully-qualified",
		emoji: "🇪🇭",
		tag: "E2.0",
		description: "flag: Western Sahara"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127466,
			127479
		],
		status: "fully-qualified",
		emoji: "🇪🇷",
		tag: "E2.0",
		description: "flag: Eritrea"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127466,
			127480
		],
		status: "fully-qualified",
		emoji: "🇪🇸",
		tag: "E0.6",
		description: "flag: Spain"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127466,
			127481
		],
		status: "fully-qualified",
		emoji: "🇪🇹",
		tag: "E2.0",
		description: "flag: Ethiopia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127466,
			127482
		],
		status: "fully-qualified",
		emoji: "🇪🇺",
		tag: "E2.0",
		description: "flag: European Union"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127467,
			127470
		],
		status: "fully-qualified",
		emoji: "🇫🇮",
		tag: "E2.0",
		description: "flag: Finland"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127467,
			127471
		],
		status: "fully-qualified",
		emoji: "🇫🇯",
		tag: "E2.0",
		description: "flag: Fiji"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127467,
			127472
		],
		status: "fully-qualified",
		emoji: "🇫🇰",
		tag: "E2.0",
		description: "flag: Falkland Islands"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127467,
			127474
		],
		status: "fully-qualified",
		emoji: "🇫🇲",
		tag: "E2.0",
		description: "flag: Micronesia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127467,
			127476
		],
		status: "fully-qualified",
		emoji: "🇫🇴",
		tag: "E2.0",
		description: "flag: Faroe Islands"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127467,
			127479
		],
		status: "fully-qualified",
		emoji: "🇫🇷",
		tag: "E0.6",
		description: "flag: France"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127468,
			127462
		],
		status: "fully-qualified",
		emoji: "🇬🇦",
		tag: "E2.0",
		description: "flag: Gabon"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127468,
			127463
		],
		status: "fully-qualified",
		emoji: "🇬🇧",
		tag: "E0.6",
		description: "flag: United Kingdom"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127468,
			127465
		],
		status: "fully-qualified",
		emoji: "🇬🇩",
		tag: "E2.0",
		description: "flag: Grenada"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127468,
			127466
		],
		status: "fully-qualified",
		emoji: "🇬🇪",
		tag: "E2.0",
		description: "flag: Georgia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127468,
			127467
		],
		status: "fully-qualified",
		emoji: "🇬🇫",
		tag: "E2.0",
		description: "flag: French Guiana"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127468,
			127468
		],
		status: "fully-qualified",
		emoji: "🇬🇬",
		tag: "E2.0",
		description: "flag: Guernsey"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127468,
			127469
		],
		status: "fully-qualified",
		emoji: "🇬🇭",
		tag: "E2.0",
		description: "flag: Ghana"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127468,
			127470
		],
		status: "fully-qualified",
		emoji: "🇬🇮",
		tag: "E2.0",
		description: "flag: Gibraltar"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127468,
			127473
		],
		status: "fully-qualified",
		emoji: "🇬🇱",
		tag: "E2.0",
		description: "flag: Greenland"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127468,
			127474
		],
		status: "fully-qualified",
		emoji: "🇬🇲",
		tag: "E2.0",
		description: "flag: Gambia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127468,
			127475
		],
		status: "fully-qualified",
		emoji: "🇬🇳",
		tag: "E2.0",
		description: "flag: Guinea"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127468,
			127477
		],
		status: "fully-qualified",
		emoji: "🇬🇵",
		tag: "E2.0",
		description: "flag: Guadeloupe"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127468,
			127478
		],
		status: "fully-qualified",
		emoji: "🇬🇶",
		tag: "E2.0",
		description: "flag: Equatorial Guinea"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127468,
			127479
		],
		status: "fully-qualified",
		emoji: "🇬🇷",
		tag: "E2.0",
		description: "flag: Greece"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127468,
			127480
		],
		status: "fully-qualified",
		emoji: "🇬🇸",
		tag: "E2.0",
		description: "flag: South Georgia & South Sandwich Islands"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127468,
			127481
		],
		status: "fully-qualified",
		emoji: "🇬🇹",
		tag: "E2.0",
		description: "flag: Guatemala"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127468,
			127482
		],
		status: "fully-qualified",
		emoji: "🇬🇺",
		tag: "E2.0",
		description: "flag: Guam"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127468,
			127484
		],
		status: "fully-qualified",
		emoji: "🇬🇼",
		tag: "E2.0",
		description: "flag: Guinea-Bissau"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127468,
			127486
		],
		status: "fully-qualified",
		emoji: "🇬🇾",
		tag: "E2.0",
		description: "flag: Guyana"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127469,
			127472
		],
		status: "fully-qualified",
		emoji: "🇭🇰",
		tag: "E2.0",
		description: "flag: Hong Kong SAR China"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127469,
			127474
		],
		status: "fully-qualified",
		emoji: "🇭🇲",
		tag: "E2.0",
		description: "flag: Heard & McDonald Islands"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127469,
			127475
		],
		status: "fully-qualified",
		emoji: "🇭🇳",
		tag: "E2.0",
		description: "flag: Honduras"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127469,
			127479
		],
		status: "fully-qualified",
		emoji: "🇭🇷",
		tag: "E2.0",
		description: "flag: Croatia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127469,
			127481
		],
		status: "fully-qualified",
		emoji: "🇭🇹",
		tag: "E2.0",
		description: "flag: Haiti"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127469,
			127482
		],
		status: "fully-qualified",
		emoji: "🇭🇺",
		tag: "E2.0",
		description: "flag: Hungary"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127470,
			127464
		],
		status: "fully-qualified",
		emoji: "🇮🇨",
		tag: "E2.0",
		description: "flag: Canary Islands"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127470,
			127465
		],
		status: "fully-qualified",
		emoji: "🇮🇩",
		tag: "E2.0",
		description: "flag: Indonesia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127470,
			127466
		],
		status: "fully-qualified",
		emoji: "🇮🇪",
		tag: "E2.0",
		description: "flag: Ireland"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127470,
			127473
		],
		status: "fully-qualified",
		emoji: "🇮🇱",
		tag: "E2.0",
		description: "flag: Israel"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127470,
			127474
		],
		status: "fully-qualified",
		emoji: "🇮🇲",
		tag: "E2.0",
		description: "flag: Isle of Man"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127470,
			127475
		],
		status: "fully-qualified",
		emoji: "🇮🇳",
		tag: "E2.0",
		description: "flag: India"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127470,
			127476
		],
		status: "fully-qualified",
		emoji: "🇮🇴",
		tag: "E2.0",
		description: "flag: British Indian Ocean Territory"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127470,
			127478
		],
		status: "fully-qualified",
		emoji: "🇮🇶",
		tag: "E2.0",
		description: "flag: Iraq"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127470,
			127479
		],
		status: "fully-qualified",
		emoji: "🇮🇷",
		tag: "E2.0",
		description: "flag: Iran"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127470,
			127480
		],
		status: "fully-qualified",
		emoji: "🇮🇸",
		tag: "E2.0",
		description: "flag: Iceland"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127470,
			127481
		],
		status: "fully-qualified",
		emoji: "🇮🇹",
		tag: "E0.6",
		description: "flag: Italy"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127471,
			127466
		],
		status: "fully-qualified",
		emoji: "🇯🇪",
		tag: "E2.0",
		description: "flag: Jersey"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127471,
			127474
		],
		status: "fully-qualified",
		emoji: "🇯🇲",
		tag: "E2.0",
		description: "flag: Jamaica"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127471,
			127476
		],
		status: "fully-qualified",
		emoji: "🇯🇴",
		tag: "E2.0",
		description: "flag: Jordan"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127471,
			127477
		],
		status: "fully-qualified",
		emoji: "🇯🇵",
		tag: "E0.6",
		description: "flag: Japan"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127472,
			127466
		],
		status: "fully-qualified",
		emoji: "🇰🇪",
		tag: "E2.0",
		description: "flag: Kenya"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127472,
			127468
		],
		status: "fully-qualified",
		emoji: "🇰🇬",
		tag: "E2.0",
		description: "flag: Kyrgyzstan"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127472,
			127469
		],
		status: "fully-qualified",
		emoji: "🇰🇭",
		tag: "E2.0",
		description: "flag: Cambodia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127472,
			127470
		],
		status: "fully-qualified",
		emoji: "🇰🇮",
		tag: "E2.0",
		description: "flag: Kiribati"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127472,
			127474
		],
		status: "fully-qualified",
		emoji: "🇰🇲",
		tag: "E2.0",
		description: "flag: Comoros"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127472,
			127475
		],
		status: "fully-qualified",
		emoji: "🇰🇳",
		tag: "E2.0",
		description: "flag: St. Kitts & Nevis"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127472,
			127477
		],
		status: "fully-qualified",
		emoji: "🇰🇵",
		tag: "E2.0",
		description: "flag: North Korea"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127472,
			127479
		],
		status: "fully-qualified",
		emoji: "🇰🇷",
		tag: "E0.6",
		description: "flag: South Korea"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127472,
			127484
		],
		status: "fully-qualified",
		emoji: "🇰🇼",
		tag: "E2.0",
		description: "flag: Kuwait"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127472,
			127486
		],
		status: "fully-qualified",
		emoji: "🇰🇾",
		tag: "E2.0",
		description: "flag: Cayman Islands"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127472,
			127487
		],
		status: "fully-qualified",
		emoji: "🇰🇿",
		tag: "E2.0",
		description: "flag: Kazakhstan"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127473,
			127462
		],
		status: "fully-qualified",
		emoji: "🇱🇦",
		tag: "E2.0",
		description: "flag: Laos"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127473,
			127463
		],
		status: "fully-qualified",
		emoji: "🇱🇧",
		tag: "E2.0",
		description: "flag: Lebanon"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127473,
			127464
		],
		status: "fully-qualified",
		emoji: "🇱🇨",
		tag: "E2.0",
		description: "flag: St. Lucia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127473,
			127470
		],
		status: "fully-qualified",
		emoji: "🇱🇮",
		tag: "E2.0",
		description: "flag: Liechtenstein"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127473,
			127472
		],
		status: "fully-qualified",
		emoji: "🇱🇰",
		tag: "E2.0",
		description: "flag: Sri Lanka"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127473,
			127479
		],
		status: "fully-qualified",
		emoji: "🇱🇷",
		tag: "E2.0",
		description: "flag: Liberia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127473,
			127480
		],
		status: "fully-qualified",
		emoji: "🇱🇸",
		tag: "E2.0",
		description: "flag: Lesotho"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127473,
			127481
		],
		status: "fully-qualified",
		emoji: "🇱🇹",
		tag: "E2.0",
		description: "flag: Lithuania"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127473,
			127482
		],
		status: "fully-qualified",
		emoji: "🇱🇺",
		tag: "E2.0",
		description: "flag: Luxembourg"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127473,
			127483
		],
		status: "fully-qualified",
		emoji: "🇱🇻",
		tag: "E2.0",
		description: "flag: Latvia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127473,
			127486
		],
		status: "fully-qualified",
		emoji: "🇱🇾",
		tag: "E2.0",
		description: "flag: Libya"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127462
		],
		status: "fully-qualified",
		emoji: "🇲🇦",
		tag: "E2.0",
		description: "flag: Morocco"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127464
		],
		status: "fully-qualified",
		emoji: "🇲🇨",
		tag: "E2.0",
		description: "flag: Monaco"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127465
		],
		status: "fully-qualified",
		emoji: "🇲🇩",
		tag: "E2.0",
		description: "flag: Moldova"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127466
		],
		status: "fully-qualified",
		emoji: "🇲🇪",
		tag: "E2.0",
		description: "flag: Montenegro"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127467
		],
		status: "fully-qualified",
		emoji: "🇲🇫",
		tag: "E2.0",
		description: "flag: St. Martin"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127468
		],
		status: "fully-qualified",
		emoji: "🇲🇬",
		tag: "E2.0",
		description: "flag: Madagascar"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127469
		],
		status: "fully-qualified",
		emoji: "🇲🇭",
		tag: "E2.0",
		description: "flag: Marshall Islands"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127472
		],
		status: "fully-qualified",
		emoji: "🇲🇰",
		tag: "E2.0",
		description: "flag: North Macedonia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127473
		],
		status: "fully-qualified",
		emoji: "🇲🇱",
		tag: "E2.0",
		description: "flag: Mali"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127474
		],
		status: "fully-qualified",
		emoji: "🇲🇲",
		tag: "E2.0",
		description: "flag: Myanmar (Burma)"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127475
		],
		status: "fully-qualified",
		emoji: "🇲🇳",
		tag: "E2.0",
		description: "flag: Mongolia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127476
		],
		status: "fully-qualified",
		emoji: "🇲🇴",
		tag: "E2.0",
		description: "flag: Macao SAR China"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127477
		],
		status: "fully-qualified",
		emoji: "🇲🇵",
		tag: "E2.0",
		description: "flag: Northern Mariana Islands"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127478
		],
		status: "fully-qualified",
		emoji: "🇲🇶",
		tag: "E2.0",
		description: "flag: Martinique"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127479
		],
		status: "fully-qualified",
		emoji: "🇲🇷",
		tag: "E2.0",
		description: "flag: Mauritania"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127480
		],
		status: "fully-qualified",
		emoji: "🇲🇸",
		tag: "E2.0",
		description: "flag: Montserrat"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127481
		],
		status: "fully-qualified",
		emoji: "🇲🇹",
		tag: "E2.0",
		description: "flag: Malta"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127482
		],
		status: "fully-qualified",
		emoji: "🇲🇺",
		tag: "E2.0",
		description: "flag: Mauritius"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127483
		],
		status: "fully-qualified",
		emoji: "🇲🇻",
		tag: "E2.0",
		description: "flag: Maldives"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127484
		],
		status: "fully-qualified",
		emoji: "🇲🇼",
		tag: "E2.0",
		description: "flag: Malawi"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127485
		],
		status: "fully-qualified",
		emoji: "🇲🇽",
		tag: "E2.0",
		description: "flag: Mexico"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127486
		],
		status: "fully-qualified",
		emoji: "🇲🇾",
		tag: "E2.0",
		description: "flag: Malaysia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127474,
			127487
		],
		status: "fully-qualified",
		emoji: "🇲🇿",
		tag: "E2.0",
		description: "flag: Mozambique"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127475,
			127462
		],
		status: "fully-qualified",
		emoji: "🇳🇦",
		tag: "E2.0",
		description: "flag: Namibia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127475,
			127464
		],
		status: "fully-qualified",
		emoji: "🇳🇨",
		tag: "E2.0",
		description: "flag: New Caledonia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127475,
			127466
		],
		status: "fully-qualified",
		emoji: "🇳🇪",
		tag: "E2.0",
		description: "flag: Niger"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127475,
			127467
		],
		status: "fully-qualified",
		emoji: "🇳🇫",
		tag: "E2.0",
		description: "flag: Norfolk Island"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127475,
			127468
		],
		status: "fully-qualified",
		emoji: "🇳🇬",
		tag: "E2.0",
		description: "flag: Nigeria"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127475,
			127470
		],
		status: "fully-qualified",
		emoji: "🇳🇮",
		tag: "E2.0",
		description: "flag: Nicaragua"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127475,
			127473
		],
		status: "fully-qualified",
		emoji: "🇳🇱",
		tag: "E2.0",
		description: "flag: Netherlands"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127475,
			127476
		],
		status: "fully-qualified",
		emoji: "🇳🇴",
		tag: "E2.0",
		description: "flag: Norway"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127475,
			127477
		],
		status: "fully-qualified",
		emoji: "🇳🇵",
		tag: "E2.0",
		description: "flag: Nepal"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127475,
			127479
		],
		status: "fully-qualified",
		emoji: "🇳🇷",
		tag: "E2.0",
		description: "flag: Nauru"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127475,
			127482
		],
		status: "fully-qualified",
		emoji: "🇳🇺",
		tag: "E2.0",
		description: "flag: Niue"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127475,
			127487
		],
		status: "fully-qualified",
		emoji: "🇳🇿",
		tag: "E2.0",
		description: "flag: New Zealand"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127476,
			127474
		],
		status: "fully-qualified",
		emoji: "🇴🇲",
		tag: "E2.0",
		description: "flag: Oman"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127477,
			127462
		],
		status: "fully-qualified",
		emoji: "🇵🇦",
		tag: "E2.0",
		description: "flag: Panama"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127477,
			127466
		],
		status: "fully-qualified",
		emoji: "🇵🇪",
		tag: "E2.0",
		description: "flag: Peru"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127477,
			127467
		],
		status: "fully-qualified",
		emoji: "🇵🇫",
		tag: "E2.0",
		description: "flag: French Polynesia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127477,
			127468
		],
		status: "fully-qualified",
		emoji: "🇵🇬",
		tag: "E2.0",
		description: "flag: Papua New Guinea"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127477,
			127469
		],
		status: "fully-qualified",
		emoji: "🇵🇭",
		tag: "E2.0",
		description: "flag: Philippines"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127477,
			127472
		],
		status: "fully-qualified",
		emoji: "🇵🇰",
		tag: "E2.0",
		description: "flag: Pakistan"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127477,
			127473
		],
		status: "fully-qualified",
		emoji: "🇵🇱",
		tag: "E2.0",
		description: "flag: Poland"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127477,
			127474
		],
		status: "fully-qualified",
		emoji: "🇵🇲",
		tag: "E2.0",
		description: "flag: St. Pierre & Miquelon"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127477,
			127475
		],
		status: "fully-qualified",
		emoji: "🇵🇳",
		tag: "E2.0",
		description: "flag: Pitcairn Islands"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127477,
			127479
		],
		status: "fully-qualified",
		emoji: "🇵🇷",
		tag: "E2.0",
		description: "flag: Puerto Rico"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127477,
			127480
		],
		status: "fully-qualified",
		emoji: "🇵🇸",
		tag: "E2.0",
		description: "flag: Palestinian Territories"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127477,
			127481
		],
		status: "fully-qualified",
		emoji: "🇵🇹",
		tag: "E2.0",
		description: "flag: Portugal"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127477,
			127484
		],
		status: "fully-qualified",
		emoji: "🇵🇼",
		tag: "E2.0",
		description: "flag: Palau"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127477,
			127486
		],
		status: "fully-qualified",
		emoji: "🇵🇾",
		tag: "E2.0",
		description: "flag: Paraguay"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127478,
			127462
		],
		status: "fully-qualified",
		emoji: "🇶🇦",
		tag: "E2.0",
		description: "flag: Qatar"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127479,
			127466
		],
		status: "fully-qualified",
		emoji: "🇷🇪",
		tag: "E2.0",
		description: "flag: Réunion"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127479,
			127476
		],
		status: "fully-qualified",
		emoji: "🇷🇴",
		tag: "E2.0",
		description: "flag: Romania"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127479,
			127480
		],
		status: "fully-qualified",
		emoji: "🇷🇸",
		tag: "E2.0",
		description: "flag: Serbia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127479,
			127482
		],
		status: "fully-qualified",
		emoji: "🇷🇺",
		tag: "E0.6",
		description: "flag: Russia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127479,
			127484
		],
		status: "fully-qualified",
		emoji: "🇷🇼",
		tag: "E2.0",
		description: "flag: Rwanda"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127480,
			127462
		],
		status: "fully-qualified",
		emoji: "🇸🇦",
		tag: "E2.0",
		description: "flag: Saudi Arabia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127480,
			127463
		],
		status: "fully-qualified",
		emoji: "🇸🇧",
		tag: "E2.0",
		description: "flag: Solomon Islands"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127480,
			127464
		],
		status: "fully-qualified",
		emoji: "🇸🇨",
		tag: "E2.0",
		description: "flag: Seychelles"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127480,
			127465
		],
		status: "fully-qualified",
		emoji: "🇸🇩",
		tag: "E2.0",
		description: "flag: Sudan"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127480,
			127466
		],
		status: "fully-qualified",
		emoji: "🇸🇪",
		tag: "E2.0",
		description: "flag: Sweden"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127480,
			127468
		],
		status: "fully-qualified",
		emoji: "🇸🇬",
		tag: "E2.0",
		description: "flag: Singapore"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127480,
			127469
		],
		status: "fully-qualified",
		emoji: "🇸🇭",
		tag: "E2.0",
		description: "flag: St. Helena"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127480,
			127470
		],
		status: "fully-qualified",
		emoji: "🇸🇮",
		tag: "E2.0",
		description: "flag: Slovenia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127480,
			127471
		],
		status: "fully-qualified",
		emoji: "🇸🇯",
		tag: "E2.0",
		description: "flag: Svalbard & Jan Mayen"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127480,
			127472
		],
		status: "fully-qualified",
		emoji: "🇸🇰",
		tag: "E2.0",
		description: "flag: Slovakia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127480,
			127473
		],
		status: "fully-qualified",
		emoji: "🇸🇱",
		tag: "E2.0",
		description: "flag: Sierra Leone"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127480,
			127474
		],
		status: "fully-qualified",
		emoji: "🇸🇲",
		tag: "E2.0",
		description: "flag: San Marino"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127480,
			127475
		],
		status: "fully-qualified",
		emoji: "🇸🇳",
		tag: "E2.0",
		description: "flag: Senegal"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127480,
			127476
		],
		status: "fully-qualified",
		emoji: "🇸🇴",
		tag: "E2.0",
		description: "flag: Somalia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127480,
			127479
		],
		status: "fully-qualified",
		emoji: "🇸🇷",
		tag: "E2.0",
		description: "flag: Suriname"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127480,
			127480
		],
		status: "fully-qualified",
		emoji: "🇸🇸",
		tag: "E2.0",
		description: "flag: South Sudan"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127480,
			127481
		],
		status: "fully-qualified",
		emoji: "🇸🇹",
		tag: "E2.0",
		description: "flag: São Tomé & Príncipe"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127480,
			127483
		],
		status: "fully-qualified",
		emoji: "🇸🇻",
		tag: "E2.0",
		description: "flag: El Salvador"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127480,
			127485
		],
		status: "fully-qualified",
		emoji: "🇸🇽",
		tag: "E2.0",
		description: "flag: Sint Maarten"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127480,
			127486
		],
		status: "fully-qualified",
		emoji: "🇸🇾",
		tag: "E2.0",
		description: "flag: Syria"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127480,
			127487
		],
		status: "fully-qualified",
		emoji: "🇸🇿",
		tag: "E2.0",
		description: "flag: Eswatini"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127481,
			127462
		],
		status: "fully-qualified",
		emoji: "🇹🇦",
		tag: "E2.0",
		description: "flag: Tristan da Cunha"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127481,
			127464
		],
		status: "fully-qualified",
		emoji: "🇹🇨",
		tag: "E2.0",
		description: "flag: Turks & Caicos Islands"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127481,
			127465
		],
		status: "fully-qualified",
		emoji: "🇹🇩",
		tag: "E2.0",
		description: "flag: Chad"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127481,
			127467
		],
		status: "fully-qualified",
		emoji: "🇹🇫",
		tag: "E2.0",
		description: "flag: French Southern Territories"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127481,
			127468
		],
		status: "fully-qualified",
		emoji: "🇹🇬",
		tag: "E2.0",
		description: "flag: Togo"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127481,
			127469
		],
		status: "fully-qualified",
		emoji: "🇹🇭",
		tag: "E2.0",
		description: "flag: Thailand"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127481,
			127471
		],
		status: "fully-qualified",
		emoji: "🇹🇯",
		tag: "E2.0",
		description: "flag: Tajikistan"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127481,
			127472
		],
		status: "fully-qualified",
		emoji: "🇹🇰",
		tag: "E2.0",
		description: "flag: Tokelau"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127481,
			127473
		],
		status: "fully-qualified",
		emoji: "🇹🇱",
		tag: "E2.0",
		description: "flag: Timor-Leste"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127481,
			127474
		],
		status: "fully-qualified",
		emoji: "🇹🇲",
		tag: "E2.0",
		description: "flag: Turkmenistan"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127481,
			127475
		],
		status: "fully-qualified",
		emoji: "🇹🇳",
		tag: "E2.0",
		description: "flag: Tunisia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127481,
			127476
		],
		status: "fully-qualified",
		emoji: "🇹🇴",
		tag: "E2.0",
		description: "flag: Tonga"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127481,
			127479
		],
		status: "fully-qualified",
		emoji: "🇹🇷",
		tag: "E2.0",
		description: "flag: Turkey"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127481,
			127481
		],
		status: "fully-qualified",
		emoji: "🇹🇹",
		tag: "E2.0",
		description: "flag: Trinidad & Tobago"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127481,
			127483
		],
		status: "fully-qualified",
		emoji: "🇹🇻",
		tag: "E2.0",
		description: "flag: Tuvalu"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127481,
			127484
		],
		status: "fully-qualified",
		emoji: "🇹🇼",
		tag: "E2.0",
		description: "flag: Taiwan"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127481,
			127487
		],
		status: "fully-qualified",
		emoji: "🇹🇿",
		tag: "E2.0",
		description: "flag: Tanzania"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127482,
			127462
		],
		status: "fully-qualified",
		emoji: "🇺🇦",
		tag: "E2.0",
		description: "flag: Ukraine"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127482,
			127468
		],
		status: "fully-qualified",
		emoji: "🇺🇬",
		tag: "E2.0",
		description: "flag: Uganda"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127482,
			127474
		],
		status: "fully-qualified",
		emoji: "🇺🇲",
		tag: "E2.0",
		description: "flag: U.S. Outlying Islands"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127482,
			127475
		],
		status: "fully-qualified",
		emoji: "🇺🇳",
		tag: "E4.0",
		description: "flag: United Nations"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127482,
			127480
		],
		status: "fully-qualified",
		emoji: "🇺🇸",
		tag: "E0.6",
		description: "flag: United States"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127482,
			127486
		],
		status: "fully-qualified",
		emoji: "🇺🇾",
		tag: "E2.0",
		description: "flag: Uruguay"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127482,
			127487
		],
		status: "fully-qualified",
		emoji: "🇺🇿",
		tag: "E2.0",
		description: "flag: Uzbekistan"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127483,
			127462
		],
		status: "fully-qualified",
		emoji: "🇻🇦",
		tag: "E2.0",
		description: "flag: Vatican City"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127483,
			127464
		],
		status: "fully-qualified",
		emoji: "🇻🇨",
		tag: "E2.0",
		description: "flag: St. Vincent & Grenadines"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127483,
			127466
		],
		status: "fully-qualified",
		emoji: "🇻🇪",
		tag: "E2.0",
		description: "flag: Venezuela"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127483,
			127468
		],
		status: "fully-qualified",
		emoji: "🇻🇬",
		tag: "E2.0",
		description: "flag: British Virgin Islands"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127483,
			127470
		],
		status: "fully-qualified",
		emoji: "🇻🇮",
		tag: "E2.0",
		description: "flag: U.S. Virgin Islands"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127483,
			127475
		],
		status: "fully-qualified",
		emoji: "🇻🇳",
		tag: "E2.0",
		description: "flag: Vietnam"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127483,
			127482
		],
		status: "fully-qualified",
		emoji: "🇻🇺",
		tag: "E2.0",
		description: "flag: Vanuatu"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127484,
			127467
		],
		status: "fully-qualified",
		emoji: "🇼🇫",
		tag: "E2.0",
		description: "flag: Wallis & Futuna"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127484,
			127480
		],
		status: "fully-qualified",
		emoji: "🇼🇸",
		tag: "E2.0",
		description: "flag: Samoa"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127485,
			127472
		],
		status: "fully-qualified",
		emoji: "🇽🇰",
		tag: "E2.0",
		description: "flag: Kosovo"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127486,
			127466
		],
		status: "fully-qualified",
		emoji: "🇾🇪",
		tag: "E2.0",
		description: "flag: Yemen"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127486,
			127481
		],
		status: "fully-qualified",
		emoji: "🇾🇹",
		tag: "E2.0",
		description: "flag: Mayotte"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127487,
			127462
		],
		status: "fully-qualified",
		emoji: "🇿🇦",
		tag: "E2.0",
		description: "flag: South Africa"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127487,
			127474
		],
		status: "fully-qualified",
		emoji: "🇿🇲",
		tag: "E2.0",
		description: "flag: Zambia"
	},
	{
		group: "Flags",
		subgroup: "country-flag",
		codePoints: [
			127487,
			127484
		],
		status: "fully-qualified",
		emoji: "🇿🇼",
		tag: "E2.0",
		description: "flag: Zimbabwe"
	},
	{
		group: "Flags",
		subgroup: "subdivision-flag",
		codePoints: [
			127988,
			917607,
			917602,
			917605,
			917614,
			917607,
			917631
		],
		status: "fully-qualified",
		emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
		tag: "E5.0",
		description: "flag: England"
	},
	{
		group: "Flags",
		subgroup: "subdivision-flag",
		codePoints: [
			127988,
			917607,
			917602,
			917619,
			917603,
			917620,
			917631
		],
		status: "fully-qualified",
		emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
		tag: "E5.0",
		description: "flag: Scotland"
	},
	{
		group: "Flags",
		subgroup: "subdivision-flag",
		codePoints: [
			127988,
			917607,
			917602,
			917623,
			917612,
			917619,
			917631
		],
		status: "fully-qualified",
		emoji: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
		tag: "E5.0",
		description: "flag: Wales"
	}
];

var EmojiTrie = new CodePointTrie(dataset);
var ReversedEmojiTrie = new CodePointTrie(dataset.map(function (each) {
  return _objectSpread2({}, each, {
    codePoints: _toConsumableArray(each.codePoints).reverse()
  });
})); // Gets code points from a string.

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
  return EmojiTrie.getMatch(codePoints);
} // Gets the previous emoji (from the end of a string)

function atEnd(substr) {
  // Scope substr to the current paragraph:
  var arr = substr.split("\n");
  substr = arr[arr.length - 1]; // End

  var reversedCodePoints = getCodePointsFromString(substr).reverse();
  return ReversedEmojiTrie.getMatch(reversedCodePoints);
}

exports.atEnd = atEnd;
exports.atStart = atStart;
