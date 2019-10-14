(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./PageSection"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./PageSection"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.PageSection);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _PageSection) {
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

  jest.mock('./Page');
  test('Check page section with no padding example against snapshot', () => {
    const Section = React.createElement(_PageSection.PageSection, {
      noPadding: true
    });
    const view = (0, _enzyme.mount)(Section);
    expect(view).toMatchSnapshot();
  });
  test('Check page main nav section against snapshot', () => {
    const Section = React.createElement(_PageSection.PageSection, {
      type: _PageSection.PageSectionTypes.nav
    });
    const view = (0, _enzyme.mount)(Section);
    expect(view).toMatchSnapshot();
  });
  test('Check page section with no padding on mobile example against snapshot', () => {
    const Section = React.createElement(_PageSection.PageSection, {
      noPaddingMobile: true
    });
    const view = (0, _enzyme.mount)(Section);
    expect(view).toMatchSnapshot();
  });
  test('Check page section with no fill example against snapshot', () => {
    const Section = React.createElement(_PageSection.PageSection, {
      isFilled: false
    });
    const view = (0, _enzyme.mount)(Section);
    expect(view).toMatchSnapshot();
  });
  test('Check page section with fill example against snapshot', () => {
    const Section = React.createElement(_PageSection.PageSection, {
      isFilled: true
    });
    const view = (0, _enzyme.mount)(Section);
    expect(view).toMatchSnapshot();
  });
  test('Check page section with fill and no padding example against snapshot', () => {
    const Section = React.createElement(_PageSection.PageSection, {
      isFilled: true,
      noPadding: true
    });
    const view = (0, _enzyme.mount)(Section);
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=PageSection.test.js.map