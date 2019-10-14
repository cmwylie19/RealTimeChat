"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _accordion = _interopRequireDefault(require("@patternfly/react-styles/css/components/Accordion/accordion"));

var _AccordionContext = require("./AccordionContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Accordion = function Accordion(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$ariaLabel = _ref['aria-label'],
      ariaLabel = _ref$ariaLabel === void 0 ? '' : _ref$ariaLabel,
      _ref$headingLevel = _ref.headingLevel,
      headingLevel = _ref$headingLevel === void 0 ? 'h3' : _ref$headingLevel,
      _ref$asDefinitionList = _ref.asDefinitionList,
      asDefinitionList = _ref$asDefinitionList === void 0 ? true : _ref$asDefinitionList,
      props = _objectWithoutProperties(_ref, ["children", "className", "aria-label", "headingLevel", "asDefinitionList"]);

  var AccordionList = asDefinitionList ? 'dl' : 'div';
  return React.createElement(AccordionList, _extends({
    className: (0, _reactStyles.css)(_accordion["default"].accordion, className),
    "aria-label": ariaLabel
  }, props), React.createElement(_AccordionContext.AccordionContext.Provider, {
    value: {
      ContentContainer: asDefinitionList ? 'dd' : 'div',
      ToggleContainer: asDefinitionList ? 'dt' : headingLevel
    }
  }, children));
};

exports.Accordion = Accordion;
Accordion.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  'aria-label': _propTypes["default"].string,
  headingLevel: _propTypes["default"].oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  asDefinitionList: _propTypes["default"].bool
};
//# sourceMappingURL=Accordion.js.map