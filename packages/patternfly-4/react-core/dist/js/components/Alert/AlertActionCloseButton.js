"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertActionCloseButton = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _Button = require("../Button");

var _reactIcons = require("@patternfly/react-icons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AlertActionCloseButton = function AlertActionCloseButton(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {
    return undefined;
  } : _ref$onClose,
      _ref$ariaLabel = _ref['aria-label'],
      ariaLabel = _ref$ariaLabel === void 0 ? '' : _ref$ariaLabel,
      title = _ref.title,
      _ref$variantLabel = _ref.variantLabel,
      variantLabel = _ref$variantLabel === void 0 ? '' : _ref$variantLabel,
      props = _objectWithoutProperties(_ref, ["className", "onClose", "aria-label", "title", "variantLabel"]);

  return React.createElement(_Button.Button, _extends({
    variant: _Button.ButtonVariant.plain,
    onClick: onClose,
    "aria-label": ariaLabel === '' ? "Close ".concat(variantLabel, " alert: ").concat(title) : ariaLabel
  }, props), React.createElement(_reactIcons.TimesIcon, null));
};

exports.AlertActionCloseButton = AlertActionCloseButton;
AlertActionCloseButton.propTypes = {
  className: _propTypes["default"].string,
  onClose: _propTypes["default"].func,
  'aria-label': _propTypes["default"].string,
  variantLabel: _propTypes["default"].string
};
//# sourceMappingURL=AlertActionCloseButton.js.map