"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartLine = exports.ChartLineSortOrder = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _victory = require("victory");

var _ChartContainer = require("../ChartContainer");

var _ChartUtils = require("../ChartUtils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ChartLineSortOrder;
/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */

exports.ChartLineSortOrder = ChartLineSortOrder;

(function (ChartLineSortOrder) {
  ChartLineSortOrder["ascending"] = "ascending";
  ChartLineSortOrder["descending"] = "descending";
})(ChartLineSortOrder || (exports.ChartLineSortOrder = ChartLineSortOrder = {}));

var ChartLine = function ChartLine(_ref) {
  var _ref$containerCompone = _ref.containerComponent,
      containerComponent = _ref$containerCompone === void 0 ? React.createElement(_ChartContainer.ChartContainer, null) : _ref$containerCompone,
      themeColor = _ref.themeColor,
      themeVariant = _ref.themeVariant,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? (0, _ChartUtils.getTheme)(themeColor, themeVariant) : _ref$theme,
      rest = _objectWithoutProperties(_ref, ["containerComponent", "themeColor", "themeVariant", "theme"]);

  // Clone so users can override container props
  var container = React.cloneElement(containerComponent, _objectSpread({
    theme: theme
  }, containerComponent.props));
  return React.createElement(_victory.VictoryLine, _extends({
    containerComponent: container,
    theme: theme
  }, rest));
}; // Note: VictoryLine.role must be hoisted


exports.ChartLine = ChartLine;
ChartLine.propTypes = {
  animate: _propTypes["default"].any,
  categories: _propTypes["default"].any,
  containerComponent: _propTypes["default"].element,
  data: _propTypes["default"].arrayOf(_propTypes["default"].any),
  dataComponent: _propTypes["default"].element,
  domain: _propTypes["default"].any,
  domainPadding: _propTypes["default"].any,
  eventKey: _propTypes["default"].any,
  events: _propTypes["default"].arrayOf(_propTypes["default"].any),
  externalEventMutations: _propTypes["default"].arrayOf(_propTypes["default"].any),
  groupComponent: _propTypes["default"].element,
  height: _propTypes["default"].number,
  horizontal: _propTypes["default"].bool,
  interpolation: _propTypes["default"].any,
  labelComponent: _propTypes["default"].element,
  labels: _propTypes["default"].oneOfType([_propTypes["default"].any, _propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].arrayOf(_propTypes["default"].number)]),
  maxDomain: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].shape({
    x: _propTypes["default"].number,
    y: _propTypes["default"].number
  })]),
  minDomain: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].shape({
    x: _propTypes["default"].number,
    y: _propTypes["default"].number
  })]),
  name: _propTypes["default"].string,
  origin: _propTypes["default"].shape({
    x: _propTypes["default"].number.isRequired,
    y: _propTypes["default"].number.isRequired
  }),
  padding: _propTypes["default"].any,
  polar: _propTypes["default"].bool,
  range: _propTypes["default"].oneOfType([_propTypes["default"].shape({})]),
  samples: _propTypes["default"].number,
  scale: _propTypes["default"].oneOfType([_propTypes["default"].any, _propTypes["default"].any, _propTypes["default"].shape({
    x: _propTypes["default"].oneOfType([_propTypes["default"].any, _propTypes["default"].any]),
    y: _propTypes["default"].oneOfType([_propTypes["default"].any, _propTypes["default"].any])
  })])
};
(0, _hoistNonReactStatics["default"])(ChartLine, _victory.VictoryLine);
//# sourceMappingURL=ChartLine.js.map