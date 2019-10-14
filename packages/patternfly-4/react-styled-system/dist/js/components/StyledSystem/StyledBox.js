"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StyledBoxBase = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Custom additions
var zIndex = (0, _styledSystem.style)({
  prop: 'zIndex',
  key: 'zIndices'
});
var StyledBoxBase = (0, _reactEmotion["default"])('div')( // theme key: space
_styledSystem.space, // theme key: maxWidths
_styledSystem.maxWidth, // theme key: minWidths
_styledSystem.minWidth, // theme key: heights
_styledSystem.height, // theme key: maxHeights
_styledSystem.maxHeight, // theme key: minHeights
_styledSystem.minHeight, // theme key: fontSizes
_styledSystem.fontSize, // theme key: colors
_styledSystem.color, // theme key: borders
_styledSystem.borders, // theme key: colors
_styledSystem.borderColor, // theme key: radii
_styledSystem.borderRadius, // theme key: shadows
_styledSystem.boxShadow, // no theme keys
_styledSystem.display, _styledSystem.width, _styledSystem.verticalAlign, _styledSystem.opacity, _styledSystem.overflow, _styledSystem.ratio, // flex child props
_styledSystem.flex, _styledSystem.flexBasis, _styledSystem.order, _styledSystem.alignSelf, // background props
_styledSystem.background, _styledSystem.backgroundImage, _styledSystem.backgroundSize, _styledSystem.backgroundPosition, _styledSystem.backgroundRepeat, // position props
_styledSystem.position, // theme key: zIndices
zIndex, _styledSystem.left, _styledSystem.top, _styledSystem.right, _styledSystem.bottom);
exports.StyledBoxBase = StyledBoxBase;

var StyledBox = function StyledBox(_ref) {
  var className = _ref.className,
      children = _ref.children,
      component = _ref.component,
      props = _objectWithoutProperties(_ref, ["className", "children", "component"]);

  var StyledBoxBaseWithComponent = StyledBoxBase.withComponent(component);
  return _react["default"].createElement(StyledBoxBaseWithComponent, _extends({}, props, {
    className: (0, _reactStyles.css)(className)
  }), children);
};

StyledBox.propTypes = {
  /** Additional classes that are passed into the Styled component */
  className: _propTypes["default"].string,

  /** Anything that can be rendered inside the Styled component */
  children: _propTypes["default"].node,

  /** HTML element to render as */
  component: _propTypes["default"].string,
  // ...space.propTypes

  /** margin - Maps with StyledConstants.space */
  m: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** margin-bottom - Maps with StyledConstants.space */
  mb: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** margin-left - Maps with StyledConstants.space */
  ml: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** margin-right - Maps with StyledConstants.space */
  mr: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** margin-top - Maps with StyledConstants.space */
  mt: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** margin-left and margin-right - Maps with StyledConstants.space */
  mx: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** margin-top and margin-bottom - Maps with StyledConstants.space */
  my: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** padding - Maps with StyledConstants.space */
  p: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** padding-bottom - Maps with StyledConstants.space */
  pb: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** padding-left - Maps with StyledConstants.space */
  pl: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** padding-right - Maps with StyledConstants.space */
  pr: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** padding-top - Maps with StyledConstants.space */
  pt: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** padding-left and padding-right - Maps with StyledConstants.space */
  px: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** padding-top and padding-bottom - Maps with StyledConstants.space */
  py: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),
  // ...borders.propTypes

  /** border - Maps with StyledConstants.borders */
  border: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** border-bottom - Maps with StyledConstants.borders */
  borderBottom: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** border-left - Maps with StyledConstants.borders */
  borderLeft: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** border-right - Maps with StyledConstants.borders */
  borderRight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** border-top - Maps with StyledConstants.borders */
  borderTop: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),
  // ...color.propTypes

  /** background-color - Maps with StyledConstants.colors */
  bg: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** color: Maps with StyledConstants.colors */
  color: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** height */
  height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** width */
  width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** font-size */
  fontSize: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** flex */
  flex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** order */
  order: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** align-self */
  alignSelf: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** border-color */
  borderColor: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** border-radius */
  borderRadius: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** box-shadow */
  boxShadow: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** max-width */
  maxWidth: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** min-width */
  minWidth: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** max-height */
  maxHeight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** min-height */
  minHeight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** display */
  display: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** vertical-align */
  verticalAlign: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** opacity */
  opacity: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** overflow */
  overflow: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** ratio */
  ratio: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** flex-basis */
  flexBasis: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** background */
  background: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** background-image */
  backgroundImage: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** background-size */
  backgroundSize: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** background-position */
  backgroundPosition: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** background-repeat */
  backgroundRepeat: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** position */
  position: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** z-index */
  zIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** left */
  left: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** top */
  top: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** right */
  right: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array]),

  /** bottom */
  bottom: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].array])
};
StyledBox.defaultProps = {
  className: '',
  children: null,
  component: 'div',
  m: null,
  mb: null,
  ml: null,
  mr: null,
  mt: null,
  mx: null,
  my: null,
  p: null,
  pb: null,
  pl: null,
  pr: null,
  pt: null,
  px: null,
  py: null,
  height: null,
  width: null,
  fontSize: null,
  bg: null,
  color: null,
  flex: null,
  order: null,
  alignSelf: null,
  border: null,
  borderBottom: null,
  borderLeft: null,
  borderRight: null,
  borderTop: null,
  borderColor: null,
  borderRadius: null,
  boxShadow: null,
  maxWidth: null,
  minWidth: null,
  maxHeight: null,
  minHeight: null,
  display: null,
  verticalAlign: null,
  opacity: null,
  overflow: null,
  ratio: null,
  flexBasis: null,
  background: null,
  backgroundImage: null,
  backgroundSize: null,
  backgroundPosition: null,
  backgroundRepeat: null,
  position: null,
  zIndex: null,
  left: null,
  top: null,
  right: null,
  bottom: null
};
var _default = StyledBox;
exports["default"] = _default;
//# sourceMappingURL=StyledBox.js.map