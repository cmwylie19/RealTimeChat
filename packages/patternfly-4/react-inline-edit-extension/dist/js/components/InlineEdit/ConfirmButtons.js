"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStyles = require("@patternfly/react-styles");

var _CancelButton = require("../CancelButton");

var _ConfirmButton = require("../ConfirmButton");

require("@patternfly/react-styles/css/components/Table/inline-edit.css");

var _inlineEditCss = require("./css/inline-edit-css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var buttonsTopPosition = function buttonsTopPosition(window, rowDimensions, bold) {
  var boldShift = bold ? -1 : 0;
  return {
    bottom: window.height - rowDimensions.top - 1 + boldShift,
    right: window.width - rowDimensions.right + 10
  };
};

var buttonsBottomPosition = function buttonsBottomPosition(window, rowDimensions, bold) {
  var boldShift = bold ? -1 : 0;
  return {
    top: rowDimensions.bottom - 1 + boldShift,
    right: window.width - rowDimensions.right + 10
  };
};

var ConfirmButtons = function ConfirmButtons(_ref) {
  var _ref$messages = _ref.messages,
      confirmButtonLabel = _ref$messages.confirmButtonLabel,
      cancelButtonLabel = _ref$messages.cancelButtonLabel,
      onConfirm = _ref.onConfirm,
      onCancel = _ref.onCancel,
      environment = _ref.environment,
      buttonsOnTop = _ref.buttonsOnTop,
      boldBorder = _ref.boldBorder;

  if (environment == null) {
    return null;
  }

  var window = environment.window,
      row = environment.row;
  var positionStyle = buttonsOnTop ? buttonsTopPosition(window, row, boldBorder) : buttonsBottomPosition(window, row, boldBorder);
  var className = (0, _reactStyles.css)(_inlineEditCss.inlineEditStyles.tableInlineEditButtons, buttonsOnTop ? _inlineEditCss.inlineEditStyles.modifiers.top : _inlineEditCss.inlineEditStyles.modifiers.bottom, boldBorder && _inlineEditCss.inlineEditStyles.modifiers.bold);
  return _react["default"].createElement("div", {
    style: positionStyle,
    className: className,
    key: "confirmButtons"
  }, _react["default"].createElement(_ConfirmButton.ConfirmButton, {
    key: "confirm",
    "aria-label": confirmButtonLabel,
    onMouseUp: onConfirm
  }), _react["default"].createElement(_CancelButton.CancelButton, {
    key: "cancel",
    "aria-label": cancelButtonLabel,
    onMouseUp: onCancel
  }));
};

ConfirmButtons.defaultProps = {
  onConfirm: function onConfirm() {
    return undefined;
  },
  onCancel: function onCancel() {
    return undefined;
  },
  buttonsOnTop: false,
  boldBorder: false,
  environment: undefined,
  messages: {
    confirmButtonLabel: 'Save',
    cancelButtonLabel: 'Cancel'
  }
};
ConfirmButtons.propTypes = {
  /** Confirm edit callback */
  onConfirm: _propTypes["default"].func,

  /** Cancel edit callback */
  onCancel: _propTypes["default"].func,

  /** Inject confirm buttons positions */
  environment: _propTypes["default"].shape({
    window: _propTypes["default"].shape({
      width: _propTypes["default"].number,
      height: _propTypes["default"].number
    }),
    row: _propTypes["default"].shape({
      top: _propTypes["default"].number,
      bottom: _propTypes["default"].number,
      left: _propTypes["default"].number,
      right: _propTypes["default"].number
    })
  }),
  buttonsOnTop: _propTypes["default"].bool,
  boldBorder: _propTypes["default"].bool,
  messages: _propTypes["default"].shape({
    confirmButtonLabel: _propTypes["default"].string,
    cancelButtonLabel: _propTypes["default"].string
  })
};
var _default = ConfirmButtons;
exports["default"] = _default;
//# sourceMappingURL=ConfirmButtons.js.map