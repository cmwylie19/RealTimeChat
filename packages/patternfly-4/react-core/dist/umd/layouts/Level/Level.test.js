(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./Level", "../../styles/gutters", "./LevelItem", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./Level"), require("../../styles/gutters"), require("./LevelItem"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.Level, global.gutters, global.LevelItem, global.enzyme);
    global.undefined = mod.exports;
  }
})(this, function (_react, _Level, _gutters, _LevelItem, _enzyme) {
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

  Object.values(_gutters.GutterSize).forEach(gutter => {
    test(`Gutter ${gutter}`, () => {
      const view = (0, _enzyme.shallow)(React.createElement(_Level.Level, {
        gutter: gutter
      }));
      expect(view).toMatchSnapshot();
    });
  });
  test('item', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_LevelItem.LevelItem, null, "Level Item"));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=Level.test.js.map