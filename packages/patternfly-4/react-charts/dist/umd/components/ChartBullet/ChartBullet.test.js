(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ChartBullet"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ChartBullet"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ChartBullet);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _ChartBullet) {
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
    test('ChartBulletQualitativeRange', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_ChartBullet.ChartBullet, null));
      expect(view).toMatchSnapshot();
    });
  });
  test('renders component data', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_ChartBullet.ChartBullet, {
      ariaDesc: "Storage capacity",
      ariaTitle: "Bullet chart example",
      comparativeWarningMeasureData: [{
        name: 'Warning',
        y: 88
      }],
      labels: ({
        datum
      }) => `${datum.name}: ${datum.y}`,
      maxDomain: {
        y: 100
      },
      primarySegmentedMeasureData: [{
        name: 'Measure',
        y: 50
      }],
      qualitativeRangeData: [{
        name: 'Range',
        y: 50
      }, {
        name: 'Range',
        y: 75
      }],
      width: 450
    }));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=ChartBullet.test.js.map