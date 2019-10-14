(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./Bullseye", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./Bullseye"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.Bullseye, global.enzyme);
    global.undefined = mod.exports;
  }
})(this, function (_react, _Bullseye, _enzyme) {
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

  test('renders with PatternFly Core styles', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_Bullseye.Bullseye, null));
    expect(view).toMatchSnapshot();
  });
  test('className is added to the root element', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_Bullseye.Bullseye, {
      className: "extra-class"
    }));
    expect(view.prop('className')).toMatchSnapshot();
  });
  test('extra props are spread to the root element', () => {
    const testId = 'bullseye';
    const view = (0, _enzyme.shallow)(React.createElement(_Bullseye.Bullseye, {
      "data-testid": testId
    }));
    expect(view.prop('data-testid')).toBe(testId);
  });
  test('allows passing in a string as the component', () => {
    const component = 'div';
    const view = (0, _enzyme.shallow)(React.createElement(_Bullseye.Bullseye, {
      component: component
    }));
    expect(view.type()).toBe(component);
  });
  test('allows passing in a React Component as the component', () => {
    const Component = () => null;

    const view = (0, _enzyme.shallow)(React.createElement(_Bullseye.Bullseye, {
      component: Component
    }));
    expect(view.type()).toBe(Component);
  });
});
//# sourceMappingURL=Bullseye.test.js.map