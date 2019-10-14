"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ContextSelectorItem = require("./ContextSelectorItem");

var _ContextSelectorMenuList = require("./ContextSelectorMenuList");

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
test('Renders ContextSelectorMenuList open', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ContextSelectorMenuList.ContextSelectorMenuList, {
    isOpen: false
  }, items));
  expect(view).toMatchSnapshot();
});
test('Renders ContextSelectorMenuList closed', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ContextSelectorMenuList.ContextSelectorMenuList, {
    isOpen: false
  }, items));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=ContextSelectorMenuList.test.js.map