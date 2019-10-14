"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _Spinner = require("./Spinner");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

test('simple spinner', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Spinner.Spinner, null));
  expect(view).toMatchSnapshot();
});
test('small spinner', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Spinner.Spinner, null));
  expect(view).toMatchSnapshot();
});
test('medium spinner', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Spinner.Spinner, null));
  expect(view).toMatchSnapshot();
});
test('large spinner', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Spinner.Spinner, null));
  expect(view).toMatchSnapshot();
});
test('extra large spinner', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Spinner.Spinner, null));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=Spinner.test.js.map