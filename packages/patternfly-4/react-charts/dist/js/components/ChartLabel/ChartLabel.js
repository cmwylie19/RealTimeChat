"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartLabel = exports.ChartLabelPlacement = exports.ChartLabelDirection = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _lodash = require("lodash");

var _victory = require("victory");

var _ChartTheme = require("../ChartTheme");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ChartLabelDirection;
exports.ChartLabelDirection = ChartLabelDirection;

(function (ChartLabelDirection) {
  ChartLabelDirection["rtl"] = "rtl";
  ChartLabelDirection["ltr"] = "ltr";
  ChartLabelDirection["inherit"] = "inherit";
})(ChartLabelDirection || (exports.ChartLabelDirection = ChartLabelDirection = {}));

var ChartLabelPlacement;
exports.ChartLabelPlacement = ChartLabelPlacement;

(function (ChartLabelPlacement) {
  ChartLabelPlacement["parallel"] = "parallel";
  ChartLabelPlacement["perpendicular"] = "perpendicular";
  ChartLabelPlacement["vertical"] = "vertical";
})(ChartLabelPlacement || (exports.ChartLabelPlacement = ChartLabelPlacement = {}));

var ChartLabel = function ChartLabel(_ref) {
  var style = _ref.style,
      rest = _objectWithoutProperties(_ref, ["style"]);

  var applyDefaultStyle = function applyDefaultStyle(customStyle) {
    return (0, _lodash.defaults)(customStyle, {
      fontFamily: _ChartTheme.ChartCommonStyles.label.fontFamily,
      fontSize: _ChartTheme.ChartCommonStyles.label.fontSize,
      letterSpacing: _ChartTheme.ChartCommonStyles.label.letterSpacing
    });
  };

  var newStyle = Array.isArray(style) ? style.map(applyDefaultStyle) : applyDefaultStyle(style);
  return React.createElement(_victory.VictoryLabel, _extends({
    style: newStyle
  }, rest));
}; // Note: VictoryLabel.role must be hoisted


exports.ChartLabel = ChartLabel;
ChartLabel.propTypes = {
  active: _propTypes["default"].bool,
  angle: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  capHeight: _propTypes["default"].any,
  children: _propTypes["default"].any,
  className: _propTypes["default"].string,
  data: _propTypes["default"].arrayOf(_propTypes["default"].any),
  datum: _propTypes["default"].object,
  desc: _propTypes["default"].string,
  direction: _propTypes["default"].oneOf(['rtl', 'ltr', 'inherit']),
  dx: _propTypes["default"].any,
  dy: _propTypes["default"].any,
  events: _propTypes["default"].any,
  index: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  labelPlacement: _propTypes["default"].oneOf(['parallel', 'perpendicular', 'vertical']),
  lineHeight: _propTypes["default"].any,
  origin: _propTypes["default"].shape({
    x: _propTypes["default"].number.isRequired,
    y: _propTypes["default"].number.isRequired
  }),
  polar: _propTypes["default"].bool,
  renderInPortal: _propTypes["default"].bool,
  scale: _propTypes["default"].shape({
    x: _propTypes["default"].any,
    y: _propTypes["default"].any
  }),
  style: _propTypes["default"].oneOfType([_propTypes["default"].any, _propTypes["default"].arrayOf(_propTypes["default"].any)]),
  text: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].any]),
  x: _propTypes["default"].number,
  y: _propTypes["default"].number
};
(0, _hoistNonReactStatics["default"])(ChartLabel, _victory.VictoryLabel);
//# sourceMappingURL=ChartLabel.js.map