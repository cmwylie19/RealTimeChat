(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./BackgroundImage", "react", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./BackgroundImage"), require("react"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.BackgroundImage, global.react, global.enzyme);
    global.undefined = mod.exports;
  }
})(this, function (_BackgroundImage, _react, _enzyme) {
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

  const images = {
    [_BackgroundImage.BackgroundImageSrc.lg]: '/assets/images/pfbg_1200.jpg',
    [_BackgroundImage.BackgroundImageSrc.sm]: '/assets/images/pfbg_768.jpg',
    [_BackgroundImage.BackgroundImageSrc.sm2x]: '/assets/images/pfbg_768@2x.jpg',
    [_BackgroundImage.BackgroundImageSrc.xs]: '/assets/images/pfbg_576.jpg',
    [_BackgroundImage.BackgroundImageSrc.xs2x]: '/assets/images/pfbg_576@2x.jpg',
    [_BackgroundImage.BackgroundImageSrc.filter]: '/assets/images/background-filter.svg'
  };
  Object.values([true, false]).forEach(isRead => {
    test('BackgroundImage', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_BackgroundImage.BackgroundImage, {
        src: images
      }));
      expect(view).toMatchSnapshot();
    });
  });
  test('allows passing in a single string as the image src', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_BackgroundImage.BackgroundImage, {
      src: images.lg
    }));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=BackgroundImage.test.js.map