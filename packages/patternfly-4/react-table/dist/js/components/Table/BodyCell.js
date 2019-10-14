"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BodyCell = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _table = _interopRequireDefault(require("@patternfly/react-styles/css/components/Table/table"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BodyCell = function BodyCell(_ref) {
  var _ref$dataLabel = _ref['data-label'],
      dataLabel = _ref$dataLabel === void 0 ? '' : _ref$dataLabel,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      colSpan = _ref.colSpan,
      _ref$component = _ref.component,
      component = _ref$component === void 0 ? 'td' : _ref$component,
      isVisible = _ref.isVisible,
      parentId = _ref.parentId,
      _ref$textCenter = _ref.textCenter,
      textCenter = _ref$textCenter === void 0 ? false : _ref$textCenter,
      isOpen = _ref.isOpen,
      _ref$ariaControls = _ref.ariaControls,
      ariaControls = _ref$ariaControls === void 0 ? '' : _ref$ariaControls,
      props = _objectWithoutProperties(_ref, ["data-label", "className", "colSpan", "component", "isVisible", "parentId", "textCenter", "isOpen", "ariaControls"]);

  var Component = component;

  var mappedProps = _objectSpread({}, dataLabel ? {
    'data-label': dataLabel
  } : {}, {}, props);

  return parentId !== undefined && colSpan === undefined || !isVisible ? null : React.createElement(Component, _extends({}, mappedProps, {
    className: (0, _reactStyles.css)(className, textCenter && _table["default"].modifiers.center),
    colSpan: colSpan
  }));
};

exports.BodyCell = BodyCell;
BodyCell.propTypes = {
  'data-label': _propTypes["default"].string,
  className: _propTypes["default"].string,
  colSpan: _propTypes["default"].number,
  component: _propTypes["default"].node,
  isVisible: _propTypes["default"].bool,
  parentId: _propTypes["default"].number,
  textCenter: _propTypes["default"].bool,
  isOpen: _propTypes["default"].bool,
  ariaControls: _propTypes["default"].string
};
//# sourceMappingURL=BodyCell.js.map