"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _Expandable = require("./Expandable");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var props = {};
test('Expandable', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Expandable.Expandable, props, "test "));
  expect(view).toMatchSnapshot();
});
test('Renders Expandable expanded', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Expandable.Expandable, {
    isExpanded: true
  }, " test "));
  expect(view).toMatchSnapshot();
});
test('Expandable onToggle called', function () {
  var mockfn = jest.fn();
  var view = (0, _enzyme.shallow)(React.createElement(_Expandable.Expandable, {
    onToggle: mockfn
  }, " test "));
  view.find('button').at(0).simulate('click');
  expect(mockfn.mock.calls).toHaveLength(1);
});
test('Renders Uncontrolled Expandable', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Expandable.Expandable, {
    toggleText: "Show More"
  }, " test "));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=Expandable.test.js.map