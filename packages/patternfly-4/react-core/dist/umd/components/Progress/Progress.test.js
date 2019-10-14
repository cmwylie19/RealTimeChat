(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Progress", "./ProgressContainer"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Progress"), require("./ProgressContainer"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Progress, global.ProgressContainer);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _Progress, _ProgressContainer) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('Simple progress', () => {
    const view = (0, _enzyme.mount)(_react2.default.createElement(_Progress.Progress, {
      value: 33,
      id: "progress-simple-example"
    }));
    expect(view).toMatchSnapshot();
  });
  test('no value specified', () => {
    const view = (0, _enzyme.mount)(_react2.default.createElement(_Progress.Progress, {
      id: "no-value"
    }));
    expect(view).toMatchSnapshot();
  });
  test('additional label', () => {
    const view = (0, _enzyme.mount)(_react2.default.createElement(_Progress.Progress, {
      id: "additional-label",
      value: 33,
      label: "Additional label"
    }));
    expect(view).toMatchSnapshot();
  });
  test('Progress with aria-valuetext', () => {
    const view = (0, _enzyme.mount)(_react2.default.createElement(_Progress.Progress, {
      value: 33,
      id: "progress-aria-valuetext",
      valueText: "Descriptive text here"
    }));
    expect(view).toMatchSnapshot();
  });
  test('value lower than minValue', () => {
    const view = (0, _enzyme.mount)(_react2.default.createElement(_Progress.Progress, {
      value: 33,
      id: "lower-min-value",
      min: 40
    }));
    expect(view).toMatchSnapshot();
  });
  test('value higher than maxValue', () => {
    const view = (0, _enzyme.mount)(_react2.default.createElement(_Progress.Progress, {
      value: 77,
      id: "higher-max-value",
      max: 60
    }));
    expect(view).toMatchSnapshot();
  });
  test('value scaled with minValue', () => {
    const view = (0, _enzyme.mount)(_react2.default.createElement(_Progress.Progress, {
      min: 10,
      value: 50,
      id: "scaled-min-value"
    }));
    expect(view).toMatchSnapshot();
  });
  test('value scaled with maxValue', () => {
    const view = (0, _enzyme.mount)(_react2.default.createElement(_Progress.Progress, {
      value: 50,
      id: "scaled-max-value",
      max: 80
    }));
    expect(view).toMatchSnapshot();
  });
  test('value scaled between minValue and maxValue', () => {
    const view = (0, _enzyme.mount)(_react2.default.createElement(_Progress.Progress, {
      min: 10,
      value: 50,
      id: "scaled-range-value",
      max: 80
    }));
    expect(view).toMatchSnapshot();
  });
  describe('Progress size', () => {
    Object.keys(_Progress.ProgressSize).forEach(oneSize => {
      test(oneSize, () => {
        const view = (0, _enzyme.mount)(_react2.default.createElement(_Progress.Progress, {
          id: `${oneSize}-progress`,
          value: 33,
          size: oneSize
        }));
        expect(view).toMatchSnapshot();
      });
    });
  });
  describe('Progress variant', () => {
    Object.keys(_ProgressContainer.ProgressVariant).forEach(oneVariant => {
      test(oneVariant, () => {
        const view = (0, _enzyme.mount)(_react2.default.createElement(_Progress.Progress, {
          id: `${oneVariant}-progress`,
          value: 33,
          variant: oneVariant
        }));
        expect(view).toMatchSnapshot();
      });
    });
  });
  describe('Progress measure location', () => {
    Object.keys(_ProgressContainer.ProgressMeasureLocation).forEach(oneLocation => {
      test(oneLocation, () => {
        const view = (0, _enzyme.mount)(_react2.default.createElement(_Progress.Progress, {
          id: `${oneLocation}-progress`,
          value: 33,
          measureLocation: oneLocation
        }));
        expect(view).toMatchSnapshot();
      });
    });
    test('inside and small should render large', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_Progress.Progress, {
        id: "large-progress",
        value: 33,
        measureLocation: _ProgressContainer.ProgressMeasureLocation.inside,
        size: _Progress.ProgressSize.sm
      }));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=Progress.test.js.map