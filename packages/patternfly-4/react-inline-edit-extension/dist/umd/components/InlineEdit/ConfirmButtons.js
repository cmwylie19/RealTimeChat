(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-styles", "../CancelButton", "../ConfirmButton", "./css/inline-edit-css", "@patternfly/react-styles/css/components/Table/inline-edit.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-styles"), require("../CancelButton"), require("../ConfirmButton"), require("./css/inline-edit-css"), require("@patternfly/react-styles/css/components/Table/inline-edit.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactStyles, global.CancelButton, global.ConfirmButton, global.inlineEditCss, global.inlineEdit);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactStyles, _CancelButton, _ConfirmButton, _inlineEditCss) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const buttonsTopPosition = (window, rowDimensions, bold) => {
    const boldShift = bold ? -1 : 0;
    return {
      bottom: window.height - rowDimensions.top - 1 + boldShift,
      right: window.width - rowDimensions.right + 10
    };
  };

  const buttonsBottomPosition = (window, rowDimensions, bold) => {
    const boldShift = bold ? -1 : 0;
    return {
      top: rowDimensions.bottom - 1 + boldShift,
      right: window.width - rowDimensions.right + 10
    };
  };

  const ConfirmButtons = ({
    messages: {
      confirmButtonLabel,
      cancelButtonLabel
    },
    onConfirm,
    onCancel,
    environment,
    buttonsOnTop,
    boldBorder
  }) => {
    if (environment == null) {
      return null;
    }

    const {
      window,
      row
    } = environment;
    const positionStyle = buttonsOnTop ? buttonsTopPosition(window, row, boldBorder) : buttonsBottomPosition(window, row, boldBorder);
    const className = (0, _reactStyles.css)(_inlineEditCss.inlineEditStyles.tableInlineEditButtons, buttonsOnTop ? _inlineEditCss.inlineEditStyles.modifiers.top : _inlineEditCss.inlineEditStyles.modifiers.bottom, boldBorder && _inlineEditCss.inlineEditStyles.modifiers.bold);
    return _react2.default.createElement("div", {
      style: positionStyle,
      className: className,
      key: "confirmButtons"
    }, _react2.default.createElement(_ConfirmButton.ConfirmButton, {
      key: "confirm",
      "aria-label": confirmButtonLabel,
      onMouseUp: onConfirm
    }), _react2.default.createElement(_CancelButton.CancelButton, {
      key: "cancel",
      "aria-label": cancelButtonLabel,
      onMouseUp: onCancel
    }));
  };

  ConfirmButtons.defaultProps = {
    onConfirm: () => undefined,
    onCancel: () => undefined,
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
    onConfirm: _propTypes2.default.func,

    /** Cancel edit callback */
    onCancel: _propTypes2.default.func,

    /** Inject confirm buttons positions */
    environment: _propTypes2.default.shape({
      window: _propTypes2.default.shape({
        width: _propTypes2.default.number,
        height: _propTypes2.default.number
      }),
      row: _propTypes2.default.shape({
        top: _propTypes2.default.number,
        bottom: _propTypes2.default.number,
        left: _propTypes2.default.number,
        right: _propTypes2.default.number
      })
    }),
    buttonsOnTop: _propTypes2.default.bool,
    boldBorder: _propTypes2.default.bool,
    messages: _propTypes2.default.shape({
      confirmButtonLabel: _propTypes2.default.string,
      cancelButtonLabel: _propTypes2.default.string
    })
  };
  exports.default = ConfirmButtons;
});
//# sourceMappingURL=ConfirmButtons.js.map