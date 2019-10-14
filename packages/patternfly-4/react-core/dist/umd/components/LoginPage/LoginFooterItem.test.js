(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./LoginFooterItem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./LoginFooterItem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.LoginFooterItem);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _LoginFooterItem) {
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
    const view = (0, _enzyme.shallow)(React.createElement(_LoginFooterItem.LoginFooterItem, {
      target: "_self",
      href: "#"
    }));
    expect(view).toMatchSnapshot();
  });
  test('className is added to the root element', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_LoginFooterItem.LoginFooterItem, {
      className: "extra-class"
    }));
    expect(view.prop('className')).toMatchSnapshot();
  });
  test('extra props are spread to the root element', () => {
    const testId = 'login-body';
    const view = (0, _enzyme.shallow)(React.createElement(_LoginFooterItem.LoginFooterItem, {
      "data-testid": testId
    }));
    expect(view.prop('data-testid')).toBe(testId);
  });
  test('LoginFooterItem  with custom node', () => {
    const CustomNode = () => React.createElement("div", null, "My custom node");

    const view = (0, _enzyme.shallow)(React.createElement(_LoginFooterItem.LoginFooterItem, null, React.createElement(CustomNode, null)));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=LoginFooterItem.test.js.map