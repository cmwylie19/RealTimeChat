(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./AboutModalBoxBrand"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./AboutModalBoxBrand"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.AboutModalBoxBrand);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _AboutModalBoxBrand) {
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

  test('test About Modal Brand', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_AboutModalBoxBrand.AboutModalBoxBrand, {
      src: "testimage..",
      alt: "brand"
    }));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=AboutModalBoxBrand.test.js.map