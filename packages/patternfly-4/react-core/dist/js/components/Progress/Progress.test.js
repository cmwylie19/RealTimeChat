"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Progress = require("./Progress");

var _ProgressContainer = require("./ProgressContainer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Simple progress', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Progress.Progress, {
    value: 33,
    id: "progress-simple-example"
  }));
  expect(view).toMatchSnapshot();
});
test('no value specified', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Progress.Progress, {
    id: "no-value"
  }));
  expect(view).toMatchSnapshot();
});
test('additional label', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Progress.Progress, {
    id: "additional-label",
    value: 33,
    label: "Additional label"
  }));
  expect(view).toMatchSnapshot();
});
test('Progress with aria-valuetext', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Progress.Progress, {
    value: 33,
    id: "progress-aria-valuetext",
    valueText: "Descriptive text here"
  }));
  expect(view).toMatchSnapshot();
});
test('value lower than minValue', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Progress.Progress, {
    value: 33,
    id: "lower-min-value",
    min: 40
  }));
  expect(view).toMatchSnapshot();
});
test('value higher than maxValue', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Progress.Progress, {
    value: 77,
    id: "higher-max-value",
    max: 60
  }));
  expect(view).toMatchSnapshot();
});
test('value scaled with minValue', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Progress.Progress, {
    min: 10,
    value: 50,
    id: "scaled-min-value"
  }));
  expect(view).toMatchSnapshot();
});
test('value scaled with maxValue', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Progress.Progress, {
    value: 50,
    id: "scaled-max-value",
    max: 80
  }));
  expect(view).toMatchSnapshot();
});
test('value scaled between minValue and maxValue', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Progress.Progress, {
    min: 10,
    value: 50,
    id: "scaled-range-value",
    max: 80
  }));
  expect(view).toMatchSnapshot();
});
describe('Progress size', function () {
  Object.keys(_Progress.ProgressSize).forEach(function (oneSize) {
    test(oneSize, function () {
      var view = (0, _enzyme.mount)(_react["default"].createElement(_Progress.Progress, {
        id: "".concat(oneSize, "-progress"),
        value: 33,
        size: oneSize
      }));
      expect(view).toMatchSnapshot();
    });
  });
});
describe('Progress variant', function () {
  Object.keys(_ProgressContainer.ProgressVariant).forEach(function (oneVariant) {
    test(oneVariant, function () {
      var view = (0, _enzyme.mount)(_react["default"].createElement(_Progress.Progress, {
        id: "".concat(oneVariant, "-progress"),
        value: 33,
        variant: oneVariant
      }));
      expect(view).toMatchSnapshot();
    });
  });
});
describe('Progress measure location', function () {
  Object.keys(_ProgressContainer.ProgressMeasureLocation).forEach(function (oneLocation) {
    test(oneLocation, function () {
      var view = (0, _enzyme.mount)(_react["default"].createElement(_Progress.Progress, {
        id: "".concat(oneLocation, "-progress"),
        value: 33,
        measureLocation: oneLocation
      }));
      expect(view).toMatchSnapshot();
    });
  });
  test('inside and small should render large', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Progress.Progress, {
      id: "large-progress",
      value: 33,
      measureLocation: _ProgressContainer.ProgressMeasureLocation.inside,
      size: _Progress.ProgressSize.sm
    }));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=Progress.test.js.map