(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme/build", "./ConfirmButtons"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme/build"), require("./ConfirmButtons"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.build, global.ConfirmButtons);
    global.undefined = mod.exports;
  }
})(this, function (_react, _build, _ConfirmButtons) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _ConfirmButtons2 = _interopRequireDefault(_ConfirmButtons);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const getConfirmButtons = () => _react2.default.createElement(_ConfirmButtons2.default, {
    onCancel: jest.fn(),
    onConfirm: jest.fn(),
    buttonsOnTop: true,
    boldBorder: true,
    messages: {
      confirmButtonLabel: 'Confirm',
      cancelButtonLabel: 'Discard'
    },
    environment: {
      window: {
        width: 500,
        height: 500
      },
      row: {
        top: 100,
        bottom: 90,
        left: 30,
        right: 40
      }
    }
  });

  describe('ConfirmButtons', () => {
    test('renders correctly', () => {
      const view = (0, _build.mount)(getConfirmButtons());
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=ConfirmButtons.test.js.map