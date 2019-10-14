"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _PageSection = require("./PageSection");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

jest.mock('./Page');
test('Check page section with no padding example against snapshot', function () {
  var Section = React.createElement(_PageSection.PageSection, {
    noPadding: true
  });
  var view = (0, _enzyme.mount)(Section);
  expect(view).toMatchSnapshot();
});
test('Check page main nav section against snapshot', function () {
  var Section = React.createElement(_PageSection.PageSection, {
    type: _PageSection.PageSectionTypes.nav
  });
  var view = (0, _enzyme.mount)(Section);
  expect(view).toMatchSnapshot();
});
test('Check page section with no padding on mobile example against snapshot', function () {
  var Section = React.createElement(_PageSection.PageSection, {
    noPaddingMobile: true
  });
  var view = (0, _enzyme.mount)(Section);
  expect(view).toMatchSnapshot();
});
test('Check page section with no fill example against snapshot', function () {
  var Section = React.createElement(_PageSection.PageSection, {
    isFilled: false
  });
  var view = (0, _enzyme.mount)(Section);
  expect(view).toMatchSnapshot();
});
test('Check page section with fill example against snapshot', function () {
  var Section = React.createElement(_PageSection.PageSection, {
    isFilled: true
  });
  var view = (0, _enzyme.mount)(Section);
  expect(view).toMatchSnapshot();
});
test('Check page section with fill and no padding example against snapshot', function () {
  var Section = React.createElement(_PageSection.PageSection, {
    isFilled: true,
    noPadding: true
  });
  var view = (0, _enzyme.mount)(Section);
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=PageSection.test.js.map