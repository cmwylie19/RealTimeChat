(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "../ChartArea", "../ChartGroup", "../ChartVoronoiContainer", "./ChartTooltip"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("../ChartArea"), require("../ChartGroup"), require("../ChartVoronoiContainer"), require("./ChartTooltip"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ChartArea, global.ChartGroup, global.ChartVoronoiContainer, global.ChartTooltip);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _ChartArea, _ChartGroup, _ChartVoronoiContainer, _ChartTooltip) {
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
    test('ChartTooltip', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_ChartTooltip.ChartTooltip, {
        text: "This is a tooltip"
      }));
      expect(view).toMatchSnapshot();
    });
  });
  test('allows tooltip via container component', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_ChartGroup.ChartGroup, {
      containerComponent: React.createElement(_ChartVoronoiContainer.ChartVoronoiContainer, {
        labels: point => 'y: ' + point.y
      }),
      height: 200,
      width: 200
    }, React.createElement(_ChartArea.ChartArea, {
      data: [{
        name: 'Cats',
        x: 1,
        y: 1
      }, {
        name: 'Cats',
        x: 2,
        y: 2
      }, {
        name: 'Cats',
        x: 3,
        y: 3.2
      }, {
        name: 'Cats',
        x: 4,
        y: 3.5
      }]
    }), React.createElement(_ChartArea.ChartArea, {
      data: [{
        name: 'Dogs',
        x: 1,
        y: 0.5
      }, {
        name: 'Dogs',
        x: 2,
        y: 1
      }, {
        name: 'Dogs',
        x: 3,
        y: 2
      }, {
        name: 'Dogs',
        x: 4,
        y: 2.5
      }, {
        name: 'Dogs',
        x: 5,
        y: 2.5
      }]
    })));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=ChartTooltip.test.js.map