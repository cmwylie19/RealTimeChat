"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _Stack = require("./Stack");

var _StackItem = require("./StackItem");

var _gutters = require("../../styles/gutters");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

test('isMain set to true', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Stack.Stack, null, React.createElement(_StackItem.StackItem, {
    isFilled: true
  }, "Filled content")));
  expect(view).toMatchSnapshot();
});
test('isMain defaults to false', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Stack.Stack, null, React.createElement(_StackItem.StackItem, null, "Basic content")));
  expect(view).toMatchSnapshot();
});
Object.values(_gutters.GutterSize).forEach(function (gutter) {
  test("Gutter ".concat(gutter), function () {
    var view = (0, _enzyme.mount)(React.createElement(_Stack.Stack, {
      gutter: gutter
    }, React.createElement(_StackItem.StackItem, null, "Basic content")));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=Stack.test.js.map