"use strict";

var _react = _interopRequireDefault(require("react"));

var _build = require("enzyme/build");

var _ConfirmButtons = _interopRequireDefault(require("./ConfirmButtons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getConfirmButtons = function getConfirmButtons() {
  return _react["default"].createElement(_ConfirmButtons["default"], {
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
};

describe('ConfirmButtons', function () {
  test('renders correctly', function () {
    var view = (0, _build.mount)(getConfirmButtons());
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=ConfirmButtons.test.js.map