'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

var CodePointTrie = require("./CodePointTrie");

var dataset = require("../scripts/UNICODE_13-0_DO-NOT-EDIT.generated.json");

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
