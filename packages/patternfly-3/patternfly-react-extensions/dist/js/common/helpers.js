'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.helpers = exports.noop = exports.hasDisplayName = exports.childrenToArray = exports.excludeKeys = exports.filterKeys = exports.selectKeys = exports.debounce = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/** Returns a subset of the given object including only the given keys, with values optionally replaced by a fn. */
var selectKeys = exports.selectKeys = function selectKeys(obj, keys) {
  var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (val) {
    return val;
  };
  return keys.reduce(function (values, key) {
    return _extends({}, values, _defineProperty({}, key, fn(obj[key])));
  }, {});
};

/** Returns a subset of the given object with a validator function applied to its keys. */
var filterKeys = exports.filterKeys = function filterKeys(obj, validator) {
  return selectKeys(obj, Object.keys(obj).filter(validator));
};

/** Returns a subset of the given object with the given keys left out. */
var excludeKeys = exports.excludeKeys = function excludeKeys(obj, keys) {
  return filterKeys(obj, function (key) {
    return !keys.includes(key);
  });
};

/** Returns the given React children prop as a regular array of React nodes. */
var childrenToArray = exports.childrenToArray = function childrenToArray(children) {
  return children && _react2.default.Children.count(children) > 0 && _react2.default.Children.toArray(children);
};

/** Returns true if the component has the desired displayName value */
var hasDisplayName = exports.hasDisplayName = function hasDisplayName(component, displayName) {
  return component && component.type && component.type.displayName === displayName;
};

var noop = exports.noop = Function.prototype;

var helpers = exports.helpers = {
  debounce: debounce,
  selectKeys: selectKeys,
  filterKeys: filterKeys,
  excludeKeys: excludeKeys,
  childrenToArray: childrenToArray,
  hasDisplayName: hasDisplayName,
  noop: noop
};

exports.default = helpers;