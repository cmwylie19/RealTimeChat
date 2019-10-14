"use strict";

var React = _interopRequireWildcard(require("react"));

var _GridItem = require("./GridItem");

var _enzyme = require("enzyme");

var _sizes = require("../../styles/sizes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

test('adds span class', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_GridItem.GridItem, {
    span: 4
  }));
  expect(view.props().className).toMatchSnapshot();
});
test('adds offset class', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_GridItem.GridItem, {
    offset: 4
  }));
  expect(view.props().className).toMatchSnapshot();
});
test('adds row class', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_GridItem.GridItem, {
    rowSpan: 4
  }));
  expect(view.props().className).toMatchSnapshot();
});
Object.values(_sizes.DeviceSizes).forEach(function (size) {
  test("adds ".concat(size, " span class"), function () {
    var props = _defineProperty({}, size, 4);

    var view = (0, _enzyme.shallow)(React.createElement(_GridItem.GridItem, props));
    expect(view.props().className).toMatchSnapshot();
  });
  test("adds ".concat(size, " offset classes"), function () {
    var props = _defineProperty({}, "".concat(size, "Offset"), 1);

    var view = (0, _enzyme.shallow)(React.createElement(_GridItem.GridItem, props));
    expect(view.props().className).toMatchSnapshot();
  });
  test("adds ".concat(size, " row classes"), function () {
    var props = _defineProperty({}, "".concat(size, "RowSpan"), 1);

    var view = (0, _enzyme.shallow)(React.createElement(_GridItem.GridItem, props));
    expect(view.props().className).toMatchSnapshot();
  });
});
//# sourceMappingURL=GridItem.test.js.map