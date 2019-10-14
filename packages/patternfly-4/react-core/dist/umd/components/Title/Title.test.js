(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "."], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("."));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global._);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _) {
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

  Object.values(_.TitleSize).forEach(size => {
    test(`${size} Title`, () => {
      const view = (0, _enzyme.shallow)(React.createElement(_.Title, {
        size: size,
        headingLevel: _.TitleLevel.h1
      }, size, " Title"));
      expect(view).toMatchSnapshot();
    });
  });
  test('Heading level can be set using a string value', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_.Title, {
      size: "lg",
      headingLevel: _.TitleLevel.h3
    }, "H3 Heading"));
    const isH3 = view.find('h3').length === 1;
    const isH1 = view.find('h1').length === 1;
    expect(isH1).toBe(false);
    expect(isH3).toBe(true);
  });
});
//# sourceMappingURL=Title.test.js.map