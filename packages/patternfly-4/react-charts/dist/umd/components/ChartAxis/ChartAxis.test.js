(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "../Chart", "./ChartAxis", "../ChartGroup", "../ChartLine"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("../Chart"), require("./ChartAxis"), require("../ChartGroup"), require("../ChartLine"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Chart, global.ChartAxis, global.ChartGroup, global.ChartLine);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _Chart, _ChartAxis, _ChartGroup, _ChartLine) {
  "use strict";

  var React = _interopRequireWildcard(_react);

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};

    if (obj != null) {
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  Object.values([true, false]).forEach(isRead => {
    test('ChartAxis', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_ChartAxis.ChartAxis, null));
      expect(view).toMatchSnapshot();
    });
  });
  test('renders component data', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_Chart.Chart, {
      domainPadding: {
        x: [30, 25]
      },
      height: 200,
      width: 300
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
    })), React.createElement(_ChartAxis.ChartAxis, {
      tickValues: [2, 3, 4]
    }), React.createElement(_ChartAxis.ChartAxis, {
      dependentAxis: true,
      tickValues: [2, 5, 8]
    })));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=ChartAxis.test.js.map