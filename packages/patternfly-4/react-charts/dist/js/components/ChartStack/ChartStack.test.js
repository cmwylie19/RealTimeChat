"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _Chart = require("../Chart");

var _ChartBar = require("../ChartBar");

var _ChartStack = require("./ChartStack");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

Object.values([true, false]).forEach(function (isRead) {
  test('ChartStack', function () {
    var view = (0, _enzyme.shallow)(React.createElement(_ChartStack.ChartStack, null));
    expect(view).toMatchSnapshot();
  });
});
test('renders component data', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Chart.Chart, {
    domainPadding: {
      x: [30, 25]
    },
    height: 200,
    width: 300
  }, React.createElement(_ChartStack.ChartStack, null, React.createElement(_ChartBar.ChartBar, {
    data: [{
      x: 'Cats',
      y: 1
    }, {
      x: 'Dogs',
      y: 2
    }, {
      x: 'Birds',
      y: 5
    }, {
      x: 'Mice',
      y: 3
    }]
  }), React.createElement(_ChartBar.ChartBar, {
    data: [{
      x: 'Cats',
      y: 2
    }, {
      x: 'Dogs',
      y: 1
    }, {
      x: 'Birds',
      y: 7
    }, {
      x: 'Mice',
      y: 4
    }]
  }), React.createElement(_ChartBar.ChartBar, {
    data: [{
      x: 'Cats',
      y: 4
    }, {
      x: 'Dogs',
      y: 4
    }, {
      x: 'Birds',
      y: 9
    }, {
      x: 'Mice',
      y: 7
    }]
  }), React.createElement(_ChartBar.ChartBar, {
    data: [{
      x: 'Cats',
      y: 3
    }, {
      x: 'Dogs',
      y: 3
    }, {
      x: 'Birds',
      y: 8
    }, {
      x: 'Mice',
      y: 5
    }]
  }))));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=ChartStack.test.js.map