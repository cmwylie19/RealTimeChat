"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _Chart = require("../Chart");

var _ChartGroup = require("../ChartGroup");

var _ChartThreshold = require("./ChartThreshold");

var _ChartTheme = require("../ChartTheme");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

Object.values([true, false]).forEach(function (isRead) {
  test('ChartThreshold', function () {
    var view = (0, _enzyme.shallow)(React.createElement(_ChartThreshold.ChartThreshold, null));
    expect(view).toMatchSnapshot();
  });
});
test('renders component data', function () {
  var data = [{
    name: 'Birds Threshold',
    x: 0,
    y: 2
  }, {
    name: 'Birds Threshold',
    x: 2,
    y: 2
  }, {
    name: 'Birds Threshold',
    x: 2,
    y: 3
  }, {
    name: 'Birds Threshold',
    x: 5,
    y: 3
  }];
  var view = (0, _enzyme.shallow)(React.createElement(_Chart.Chart, {
    minDomain: {
      y: 0
    },
    height: 200,
    width: 200
  }, React.createElement(_ChartGroup.ChartGroup, null, React.createElement(_ChartThreshold.ChartThreshold, {
    data: data,
    themeColor: _ChartTheme.ChartThemeColor.orange,
    themeVariant: _ChartTheme.ChartThemeVariant.light
  }))));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=ChartThreshold.test.js.map