"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _Chart = require("../Chart/Chart");

var _ChartGroup = require("../ChartGroup/ChartGroup");

var _ChartScatter = require("./ChartScatter");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

Object.values([true, false]).forEach(function (isRead) {
  test('ChartScatter', function () {
    var view = (0, _enzyme.shallow)(React.createElement(_ChartScatter.ChartScatter, null));
    expect(view).toMatchSnapshot();
  });
});
test('renders component data', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Chart.Chart, {
    minDomain: {
      y: 0
    },
    height: 200,
    width: 200
  }, React.createElement(_ChartGroup.ChartGroup, null, React.createElement(_ChartScatter.ChartScatter, {
    data: [{
      x: 1,
      y: 1
    }, {
      x: 2,
      y: 2
    }, {
      x: 3,
      y: 3
    }, {
      x: 4,
      y: 4
    }]
  }), React.createElement(_ChartScatter.ChartScatter, {
    data: [{
      x: 2,
      y: 2
    }, {
      x: 3,
      y: 3
    }, {
      x: 4,
      y: 4
    }, {
      x: 5,
      y: 5
    }]
  }), React.createElement(_ChartScatter.ChartScatter, {
    data: [{
      x: 3,
      y: 3
    }, {
      x: 4,
      y: 4
    }, {
      x: 5,
      y: 5
    }, {
      x: 6,
      y: 6
    }]
  }), React.createElement(_ChartScatter.ChartScatter, {
    data: [{
      x: 4,
      y: 4
    }, {
      x: 5,
      y: 5
    }, {
      x: 6,
      y: 6
    }, {
      x: 7,
      y: 7
    }]
  }))));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=ChartScatter.test.js.map