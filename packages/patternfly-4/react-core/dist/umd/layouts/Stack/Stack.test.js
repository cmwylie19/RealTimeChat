(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Stack", "./StackItem", "../../styles/gutters"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Stack"), require("./StackItem"), require("../../styles/gutters"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Stack, global.StackItem, global.gutters);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _Stack, _StackItem, _gutters) {
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

  test('isMain set to true', () => {
    const view = (0, _enzyme.mount)(React.createElement(_Stack.Stack, null, React.createElement(_StackItem.StackItem, {
      isFilled: true
    }, "Filled content")));
    expect(view).toMatchSnapshot();
  });
  test('isMain defaults to false', () => {
    const view = (0, _enzyme.mount)(React.createElement(_Stack.Stack, null, React.createElement(_StackItem.StackItem, null, "Basic content")));
    expect(view).toMatchSnapshot();
  });
  Object.values(_gutters.GutterSize).forEach(gutter => {
    test(`Gutter ${gutter}`, () => {
      const view = (0, _enzyme.mount)(React.createElement(_Stack.Stack, {
        gutter: gutter
      }, React.createElement(_StackItem.StackItem, null, "Basic content")));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=Stack.test.js.map