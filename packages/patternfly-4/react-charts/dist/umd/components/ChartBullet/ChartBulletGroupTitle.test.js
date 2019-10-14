(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ChartBulletGroupTitle"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ChartBulletGroupTitle"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ChartBulletGroupTitle);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _ChartBulletGroupTitle) {
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
    test('ChartBulletGroupTitle', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_ChartBulletGroupTitle.ChartBulletGroupTitle, null));
      expect(view).toMatchSnapshot();
    });
  });
  test('renders component data', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_ChartBulletGroupTitle.ChartBulletGroupTitle, {
      title: "Text label",
      subTitle: "Measure details"
    }));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=ChartBulletGroupTitle.test.js.map