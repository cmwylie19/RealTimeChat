"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _LoginMainFooter = require("./LoginMainFooter");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

test('renders with PatternFly Core styles', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_LoginMainFooter.LoginMainFooter, null));
  expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_LoginMainFooter.LoginMainFooter, {
    className: "extra-class"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
  var testId = 'login-body';
  var view = (0, _enzyme.shallow)(React.createElement(_LoginMainFooter.LoginMainFooter, {
    "data-testid": testId
  }));
  expect(view.prop('data-testid')).toBe(testId);
});
//# sourceMappingURL=LoginMainFooter.test.js.map