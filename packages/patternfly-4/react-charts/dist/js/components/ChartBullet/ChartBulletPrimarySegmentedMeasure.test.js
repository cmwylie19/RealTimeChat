"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _ChartBulletPrimarySegmentedMeasure = require("./ChartBulletPrimarySegmentedMeasure");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

Object.values([true, false]).forEach(function (isRead) {
  test('ChartBulletPrimarySegmentedMeasure', function () {
    var view = (0, _enzyme.shallow)(React.createElement(_ChartBulletPrimarySegmentedMeasure.ChartBulletPrimarySegmentedMeasure, null));
    expect(view).toMatchSnapshot();
  });
});
test('renders component data', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_ChartBulletPrimarySegmentedMeasure.ChartBulletPrimarySegmentedMeasure, {
    data: [{
      y: 50
    }, {
      y: 85
    }, {
      y: 150
    }],
    domain: {
      x: [0, 200]
    }
  }));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=ChartBulletPrimarySegmentedMeasure.test.js.map