(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./GridItem", "enzyme", "../../styles/sizes"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./GridItem"), require("enzyme"), require("../../styles/sizes"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.GridItem, global.enzyme, global.sizes);
    global.undefined = mod.exports;
  }
})(this, function (_react, _GridItem, _enzyme, _sizes) {
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

  test('adds span class', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_GridItem.GridItem, {
      span: 4
    }));
    expect(view.props().className).toMatchSnapshot();
  });
  test('adds offset class', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_GridItem.GridItem, {
      offset: 4
    }));
    expect(view.props().className).toMatchSnapshot();
  });
  test('adds row class', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_GridItem.GridItem, {
      rowSpan: 4
    }));
    expect(view.props().className).toMatchSnapshot();
  });
  Object.values(_sizes.DeviceSizes).forEach(size => {
    test(`adds ${size} span class`, () => {
      const props = {
        [size]: 4
      };
      const view = (0, _enzyme.shallow)(React.createElement(_GridItem.GridItem, props));
      expect(view.props().className).toMatchSnapshot();
    });
    test(`adds ${size} offset classes`, () => {
      const props = {
        [`${size}Offset`]: 1
      };
      const view = (0, _enzyme.shallow)(React.createElement(_GridItem.GridItem, props));
      expect(view.props().className).toMatchSnapshot();
    });
    test(`adds ${size} row classes`, () => {
      const props = {
        [`${size}RowSpan`]: 1
      };
      const view = (0, _enzyme.shallow)(React.createElement(_GridItem.GridItem, props));
      expect(view.props().className).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=GridItem.test.js.map