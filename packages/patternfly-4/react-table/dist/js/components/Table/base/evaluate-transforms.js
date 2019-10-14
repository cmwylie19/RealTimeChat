"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.evaluateTransforms = evaluateTransforms;

var _lodash = require("lodash");

var _mergeProps = require("./merge-props");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function evaluateTransforms() {
  var transforms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = arguments.length > 1 ? arguments[1] : undefined;
  var extraParameters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (process.env.NODE_ENV !== 'production') {
    if (!transforms.every(_lodash.isFunction)) {
      throw new Error('All transforms weren\'t functions!');
    }
  }

  if (transforms.length === 0) {
    return {};
  }

  return _mergeProps.mergeProps.apply(void 0, _toConsumableArray(transforms.map(function (transform) {
    return transform(value, extraParameters);
  })));
}
//# sourceMappingURL=evaluate-transforms.js.map