(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./Grid", "../../styles/gutters", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./Grid"), require("../../styles/gutters"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.Grid, global.gutters, global.enzyme);
    global.undefined = mod.exports;
  }
})(this, function (_react, _Grid, _gutters, _enzyme) {
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
    test(`gutter ${gutter}`, () => {
      const view = (0, _enzyme.shallow)(React.createElement(_Grid.Grid, {
        gutter: "md"
      }));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=Grid.test.js.map