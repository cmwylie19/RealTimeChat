(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./SkipToContent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./SkipToContent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.SkipToContent);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _SkipToContent) {
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

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  const props = {};
  test('Verify Skip To Content', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_SkipToContent.SkipToContent, _extends({
      href: "#main-content"
    }, props))); // Add a useful assertion here.

    expect(view).toMatchSnapshot();
  });
  test('Verify Skip To Content if forced to display', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_SkipToContent.SkipToContent, _extends({
      href: "#main-content"
    }, props, {
      show: true
    }))); // Add a useful assertion here.

    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=SkipToContent.test.js.map