"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ClipboardCopyToggle = require("./ClipboardCopyToggle");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  id: 'my-id',
  textId: 'my-text-id',
  contentId: 'my-content-id',
  isExpanded: false,
  className: 'myclassName',
  onClick: jest.fn()
};
test('toggle button render', function () {
  var desc = 'toggle content';
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ClipboardCopyToggle.ClipboardCopyToggle, _extends({}, props, {
    "aria-label": desc
  })));
  expect(view).toMatchSnapshot();
});
test('toggle button onClick', function () {
  var onclick = jest.fn();
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ClipboardCopyToggle.ClipboardCopyToggle, _extends({}, props, {
    onClick: onclick
  })));
  view.find('button').simulate('click');
  expect(onclick).toBeCalled();
});
test('toggle button is on expanded mode', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ClipboardCopyToggle.ClipboardCopyToggle, _extends({}, props, {
    isExpanded: true
  })));
  expect(view.props()['aria-expanded']).toBe(true);
  view = (0, _enzyme.shallow)(_react["default"].createElement(_ClipboardCopyToggle.ClipboardCopyToggle, _extends({}, props, {
    isExpanded: false
  })));
  expect(view.props()['aria-expanded']).toBe(false);
});
//# sourceMappingURL=ClipboardCopyToggle.test.js.map