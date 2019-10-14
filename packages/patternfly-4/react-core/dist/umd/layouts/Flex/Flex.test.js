(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./Flex", "./FlexItem", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./Flex"), require("./FlexItem"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.Flex, global.FlexItem, global.enzyme);
    global.undefined = mod.exports;
  }
})(this, function (_react, _Flex, _FlexItem, _enzyme) {
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

  test('Simple flex with single item', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_Flex.Flex, null, React.createElement(_FlexItem.FlexItem, null, "Test")));
    expect(view).toMatchSnapshot();
  });
  test('Nested flex', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_Flex.Flex, null, React.createElement(_Flex.Flex, null, React.createElement(_FlexItem.FlexItem, null, "Test"))));
    expect(view).toMatchSnapshot();
  });
  test('className is added to the root element', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_Flex.Flex, {
      className: "extra-class"
    }));
    expect(view.prop('className')).toMatchSnapshot();
  });
  test('extra props are spread to the root element', () => {
    const testId = 'flex';
    const view = (0, _enzyme.shallow)(React.createElement(_Flex.Flex, {
      "data-testid": testId
    }));
    expect(view.prop('data-testid')).toBe(testId);
  });
});
//# sourceMappingURL=Flex.test.js.map