(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "../Chart", "../ChartGroup", "./ChartLine"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("../Chart"), require("../ChartGroup"), require("./ChartLine"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Chart, global.ChartGroup, global.ChartLine);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _Chart, _ChartGroup, _ChartLine) {
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
    test('ChartLine', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_ChartLine.ChartLine, null));
      expect(view).toMatchSnapshot();
    });
  });
  test('renders component data', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_Chart.Chart, {
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
});
//# sourceMappingURL=ChartLine.test.js.map