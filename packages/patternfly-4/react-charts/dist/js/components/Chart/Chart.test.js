"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _Chart = require("./Chart");

var _ChartGroup = require("../ChartGroup");

var _ChartLine = require("../ChartLine");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

Object.values([true, false]).forEach(function (isRead) {
  test('Chart', function () {
    var view = (0, _enzyme.shallow)(React.createElement(_Chart.Chart, null));
    expect(view).toMatchSnapshot();
  });
});
test('renders axis and component children', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Chart.Chart, {
    minDomain: {
      y: 0
    },
    height: 200,
    width: 200
  }, React.createElement(_ChartGroup.ChartGroup, null, React.createElement(_ChartLine.ChartLine, {
    data: [{
      x: 1,
      y: 1
    }, {
      x: 2,
      y: 2
    }, {
      x: 3,
      y: 5
    }, {
      x: 4,
      y: 3
    }]
  }), React.createElement(_ChartLine.ChartLine, {
    data: [{
      x: 1,
      y: 2
    }, {
      x: 2,
      y: 1
    }, {
      x: 3,
      y: 7
    }, {
      x: 4,
      y: 4
    }]
  }), React.createElement(_ChartLine.ChartLine, {
    data: [{
      x: 1,
      y: 3
    }, {
      x: 2,
      y: 4
    }, {
      x: 3,
      y: 9
    }, {
      x: 4,
      y: 5
    }]
  }), React.createElement(_ChartLine.ChartLine, {
    data: [{
      x: 1,
      y: 3
    }, {
      x: 2,
      y: 3
    }, {
      x: 3,
      y: 8
    }, {
      x: 4,
      y: 7
    }]
  }))));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=Chart.test.js.map