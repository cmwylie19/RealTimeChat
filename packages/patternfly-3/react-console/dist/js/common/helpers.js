'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.child = exports.debounce = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Implementation of the debounce function */
var debounce = exports.debounce = function debounce(func, wait) {
  var timeout = void 0;
  function innerFunc() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return func.apply(context, args);
    }, wait);
  }
  return innerFunc;
};

var child = exports.child = function child(children, index) {
  var childrenArray = _react2.default.Children.toArray(children);
  return childrenArray && childrenArray.length > index && childrenArray[index] || null;
};