"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ContextSelector = require("./ContextSelector");

var _ContextSelectorItem = require("./ContextSelectorItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var items = [_react["default"].createElement(_ContextSelectorItem.ContextSelectorItem, {
  key: "0"
}, "My Project"), _react["default"].createElement(_ContextSelectorItem.ContextSelectorItem, {
  key: "1"
}, "OpenShift Cluster"), _react["default"].createElement(_ContextSelectorItem.ContextSelectorItem, {
  key: "2"
}, "Production Ansible"), _react["default"].createElement(_ContextSelectorItem.ContextSelectorItem, {
  key: "3"
}, "AWS"), _react["default"].createElement(_ContextSelectorItem.ContextSelectorItem, {
  key: "4"
}, "Azure")];
test('Renders ContextSelector', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ContextSelector.ContextSelector, null, " ", items, " "));
  expect(view).toMatchSnapshot();
});
test('Renders ContextSelector open', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ContextSelector.ContextSelector, {
    isOpen: true
  }, " ", items, " "));
  expect(view).toMatchSnapshot();
});
test('Verify onToggle is called ', function () {
  var mockfn = jest.fn();
  var view = (0, _enzyme.mount)(_react["default"].createElement(_ContextSelector.ContextSelector, {
    onToggle: mockfn
  }, " ", items, " "));
  view.find('button').at(0).simulate('click');
  expect(mockfn.mock.calls).toHaveLength(1);
});
//# sourceMappingURL=ContextSelector.test.js.map