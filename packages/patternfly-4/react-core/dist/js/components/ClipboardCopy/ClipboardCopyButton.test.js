"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ClipboardCopyButton = require("./ClipboardCopyButton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  "id": 'my-id',
  "textId": 'my-text-id',
  "className": 'fancy-copy-button',
  "onClick": jest.fn(),
  "exitDelay": 1000,
  "entryDelay": 2000,
  "maxWidth": '500px',
  "position": 'right',
  'aria-label': 'click this button to copy text'
};
test('copy button render', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ClipboardCopyButton.ClipboardCopyButton, props, "Copy Me"));
  expect(view).toMatchSnapshot();
});
test('copy button onClick', function () {
  var onclick = jest.fn();
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ClipboardCopyButton.ClipboardCopyButton, _extends({}, props, {
    onClick: onclick
  }), "Copy to Clipboard"));
  view.find('button').simulate('click');
  expect(onclick).toBeCalled();
});
//# sourceMappingURL=ClipboardCopyButton.test.js.map