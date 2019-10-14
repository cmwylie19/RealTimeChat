"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ContextSelectorItem = require("./ContextSelectorItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Renders ContextSelectorItem', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ContextSelectorItem.ContextSelectorItem, {
    sendRef: jest.fn(),
    index: 0
  }, "My Project"));
  expect(view).toMatchSnapshot();
});
test('Renders ContextSelectorItem disabled and hovered', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ContextSelectorItem.ContextSelectorItem, {
    isDisabled: true,
    isHovered: true,
    sendRef: jest.fn(),
    index: 0
  }, "My Project"));
  expect(view).toMatchSnapshot();
});
test('Verify onClick is called ', function () {
  var mockfn = jest.fn();
  var view = (0, _enzyme.mount)(_react["default"].createElement(_ContextSelectorItem.ContextSelectorItem, {
    isHovered: true,
    onClick: mockfn,
    sendRef: jest.fn(),
    index: 0
  }, "My Project"));
  view.find('button').at(0).simulate('click');
  expect(mockfn.mock.calls).toHaveLength(1);
});
//# sourceMappingURL=ContextSelectorItem.test.js.map