"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ContextSelectorToggle = require("./ContextSelectorToggle");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Renders ContextSelectorToggle', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ContextSelectorToggle.ContextSelectorToggle, {
    id: "toggle-id"
  }));
  expect(view).toMatchSnapshot();
});
test('Verify onToggle is called ', function () {
  var mockfnOnToggle = jest.fn();
  var view = (0, _enzyme.mount)(_react["default"].createElement(_ContextSelectorToggle.ContextSelectorToggle, {
    onToggle: mockfnOnToggle,
    id: "toggle-id"
  }));
  view.find('button').at(0).simulate('click');
  expect(mockfnOnToggle.mock.calls).toHaveLength(1);
});
test('Verify ESC press ', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_ContextSelectorToggle.ContextSelectorToggle, {
    isOpen: true,
    id: "toggle-id"
  }));
  view.simulate('keyDown', {
    key: 'Escape'
  });
  expect(view).toMatchSnapshot();
});
test('Verify ESC press with not isOpen', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_ContextSelectorToggle.ContextSelectorToggle, {
    onToggle: jest.fn(),
    id: "toggle-id"
  }));
  view.simulate('keyDown', {
    key: 'Escape'
  });
  expect(view).toMatchSnapshot();
});
test('Verify keydown tab ', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_ContextSelectorToggle.ContextSelectorToggle, {
    isOpen: true,
    id: "toggle-id"
  }));
  view.simulate('keyDown', {
    key: 'Tab'
  });
  expect(view).toMatchSnapshot();
});
test('Verify keydown enter ', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_ContextSelectorToggle.ContextSelectorToggle, {
    onToggle: jest.fn(),
    onEnter: jest.fn(),
    id: "toggle-id"
  }));
  view.simulate('keyDown', {
    key: 'Enter'
  });
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=ContextSelectorToggle.test.js.map