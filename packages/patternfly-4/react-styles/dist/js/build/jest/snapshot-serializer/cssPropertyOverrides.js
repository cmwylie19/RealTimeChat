"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addOverrides = addOverrides;

var _cssstyle = require("cssstyle");

var _camelCase = _interopRequireDefault(require("camel-case"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var properties = ['grid', 'grid-area', 'grid-auto-columns', 'grid-auto-flow', 'grid-auto-rows', 'grid-column', 'grid-column-end', 'grid-column-gap', 'grid-column-start', 'grid-gap', 'grid-row', 'grid-row-end', 'grid-row-gap', 'grid-row-start', 'grid-template', 'grid-template-areas', 'grid-template-columns', 'grid-template-rows'];

function createOverride(key) {
  return {
    set: function set(v) {
      this._setProperty(key, v);
    },
    get: function get() {
      return this.getPropertyValue(key);
    },
    enumerable: true,
    configurable: true
  };
}

function addOverrides() {
  var overrides = properties.reduce(function (acc, property) {
    var _objectSpread2;

    return _objectSpread({}, acc, (_objectSpread2 = {}, _defineProperty(_objectSpread2, property, createOverride(property)), _defineProperty(_objectSpread2, (0, _camelCase["default"])(property), createOverride(property)), _objectSpread2));
  }, {});
  Object.defineProperties(_cssstyle.CSSStyleDeclaration.prototype, overrides);
}
//# sourceMappingURL=cssPropertyOverrides.js.map