"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClientWindowDimensions = exports.getBoundingClientRect = exports.shallowLeftSideEquals = exports.combineFunctions = exports.showIdWarnings = void 0;
var requiredElements = ['INPUT', 'BUTTON'];
var warningCompleted = false;

var showIdWarnings = function showIdWarnings(row, target) {
  if ((row.isEditing || row.isTableEditing) && requiredElements.indexOf(target.tagName) >= 0 && !warningCompleted) {
    warningCompleted = true; // eslint-disable-next-line no-console

    console.warn("".concat(requiredElements.join(', '), " elements are required to have an id for editing to work properly."));
  }
};

exports.showIdWarnings = showIdWarnings;

var combineFunctions = function combineFunctions() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  var realFunctions = functions.filter(function (f) {
    return typeof f === 'function';
  });

  if (realFunctions.length === 1) {
    return realFunctions[0];
  }

  if (realFunctions.length > 1) {
    return function () {
      for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        params[_key2] = arguments[_key2];
      }

      realFunctions.forEach(function (f) {
        return f.apply(void 0, params);
      });
    };
  }

  return undefined;
};

exports.combineFunctions = combineFunctions;

var shallowLeftSideEquals = function shallowLeftSideEquals(newObject, oldObject) {
  return !Object.keys(newObject).find(function (key) {
    return newObject[key] !== oldObject[key];
  });
};

exports.shallowLeftSideEquals = shallowLeftSideEquals;

var getBoundingClientRect = function getBoundingClientRect(element) {
  var _element$getBoundingC = element.getBoundingClientRect(),
      top = _element$getBoundingC.top,
      right = _element$getBoundingC.right,
      bottom = _element$getBoundingC.bottom,
      left = _element$getBoundingC.left,
      width = _element$getBoundingC.width,
      height = _element$getBoundingC.height,
      x = _element$getBoundingC.x,
      y = _element$getBoundingC.y;

  return {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    width: width,
    height: height,
    x: x,
    y: y
  };
};

exports.getBoundingClientRect = getBoundingClientRect;

var getClientWindowDimensions = function getClientWindowDimensions() {
  var _document$documentEle = document.documentElement,
      clientWidth = _document$documentEle.clientWidth,
      clientHeight = _document$documentEle.clientHeight;
  return {
    width: clientWidth,
    height: clientHeight
  };
};

exports.getClientWindowDimensions = getClientWindowDimensions;
//# sourceMappingURL=utils.js.map