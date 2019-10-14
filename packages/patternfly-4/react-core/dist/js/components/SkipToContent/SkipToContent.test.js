"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _SkipToContent = require("./SkipToContent");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {};
test('Verify Skip To Content', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_SkipToContent.SkipToContent, _extends({
    href: "#main-content"
  }, props))); // Add a useful assertion here.

  expect(view).toMatchSnapshot();
});
test('Verify Skip To Content if forced to display', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_SkipToContent.SkipToContent, _extends({
    href: "#main-content"
  }, props, {
    show: true
  }))); // Add a useful assertion here.

  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=SkipToContent.test.js.map