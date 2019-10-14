"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _Toolbar = require("./Toolbar");

var _ToolbarGroup = require("./ToolbarGroup");

var _ToolbarItem = require("./ToolbarItem");

var _ToolbarSection = require("./ToolbarSection");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

test('Simple toolbar with single group', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Toolbar.Toolbar, null, React.createElement(_ToolbarGroup.ToolbarGroup, null, React.createElement(_ToolbarItem.ToolbarItem, null, "Item 1"), React.createElement(_ToolbarItem.ToolbarItem, null, "Item 2"))));
  expect(view).toMatchSnapshot();
});
test('Toolbar with multiple groups', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Toolbar.Toolbar, null, React.createElement(_ToolbarGroup.ToolbarGroup, null, React.createElement(_ToolbarItem.ToolbarItem, null, "Item 1"), React.createElement(_ToolbarItem.ToolbarItem, null, "Item 2")), React.createElement(_ToolbarGroup.ToolbarGroup, null, React.createElement(_ToolbarItem.ToolbarItem, null, "Item 3")), React.createElement(_ToolbarGroup.ToolbarGroup, null, React.createElement(_ToolbarItem.ToolbarItem, null, "Item 4"), React.createElement(_ToolbarItem.ToolbarItem, null, "Item 5"), React.createElement(_ToolbarItem.ToolbarItem, null, "Item 6"))));
  expect(view).toMatchSnapshot();
});
test('Toolbar with sections', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Toolbar.Toolbar, null, React.createElement(_ToolbarSection.ToolbarSection, {
    "aria-label": "First section"
  }, React.createElement(_ToolbarGroup.ToolbarGroup, null, React.createElement(_ToolbarItem.ToolbarItem, null, "Item 1"), React.createElement(_ToolbarItem.ToolbarItem, null, "Item 2")), React.createElement(_ToolbarGroup.ToolbarGroup, null, React.createElement(_ToolbarItem.ToolbarItem, null, "Item 3"))), React.createElement(_ToolbarSection.ToolbarSection, {
    "aria-label": "Second section"
  }, React.createElement(_ToolbarGroup.ToolbarGroup, null, React.createElement(_ToolbarItem.ToolbarItem, null, "Item 4"), React.createElement(_ToolbarItem.ToolbarItem, null, "Item 5"), React.createElement(_ToolbarItem.ToolbarItem, null, "Item 6")))));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=Toolbar.test.js.map