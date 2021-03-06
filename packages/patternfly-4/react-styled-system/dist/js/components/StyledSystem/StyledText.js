"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _styledSystem = require("styled-system");

var _StyledBox = _interopRequireWildcard(require("./StyledBox"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledTextBase = (0, _reactEmotion["default"])(_StyledBox.StyledBoxBase)( // theme key: fonts
_styledSystem.fontFamily, // theme key: fontWeights
_styledSystem.fontWeight, // theme key: lineHeights
_styledSystem.lineHeight, // theme key: letterSpacings
_styledSystem.letterSpacing, // no theme keys
_styledSystem.textAlign);
/**
 * StyledText inherits all the props from the StyledBox component.
 */

var StyledText = function StyledText(_ref) {
  var className = _ref.className,
      children = _ref.children,
      component = _ref.component,
      props = _objectWithoutProperties(_ref, ["className", "children", "component"]);

  var StyledTextBaseWithComponent = StyledTextBase.withComponent(component);
  return _react["default"].createElement(StyledTextBaseWithComponent, _extends({}, props, {
    className: (0, _reactStyles.css)(className)
  }), children);
};

StyledText.propTypes = _objectSpread({}, _StyledBox["default"].propTypes, {
  /** font-family - Maps with Maps with StyledConstants.fonts */
  fontFamily: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** font-weight - Maps with Maps with StyledConstants.fontWeights */
  fontWeight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** line-height - Maps with Maps with StyledConstants.lineHeights */
  lineHeight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** letter-spacing */
  letterSpacing: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** text-align */
  textAlign: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array])
});
StyledText.defaultProps = _objectSpread({}, _StyledBox["default"].defaultProps, {
  fontFamily: null,
  fontWeight: null,
  lineHeight: null,
  letterSpacing: null,
  textAlign: null
});
var _default = StyledText;
exports["default"] = _default;
//# sourceMappingURL=StyledText.js.map