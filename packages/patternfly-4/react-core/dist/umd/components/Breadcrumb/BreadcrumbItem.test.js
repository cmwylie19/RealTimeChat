(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./BreadcrumbItem", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./BreadcrumbItem"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.BreadcrumbItem, global.enzyme);
    global.undefined = mod.exports;
  }
})(this, function (_react, _BreadcrumbItem, _enzyme) {
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

  describe('BreadcrumbItem component', () => {
    test('should render default breadcrumbItem', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_BreadcrumbItem.BreadcrumbItem, null, "Item"));
      expect(view).toMatchSnapshot();
    });
    test('should render breadcrumbItem with className', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_BreadcrumbItem.BreadcrumbItem, {
        className: "Class"
      }, "Item"));
      expect(view).toMatchSnapshot();
    });
    test('should render breadcrumbItem with id', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_BreadcrumbItem.BreadcrumbItem, {
        id: "Item 1"
      }, "Item"));
      expect(view).toMatchSnapshot();
    });
    test('should render active breadcrumbItem', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_BreadcrumbItem.BreadcrumbItem, {
        isActive: true
      }, "Item"));
      expect(view).toMatchSnapshot();
    });
    test('should render link breadcrumbItem', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_BreadcrumbItem.BreadcrumbItem, {
        to: "/somewhere"
      }, "Item"));
      expect(view).toMatchSnapshot();
    });
    test('should render breadcrumbItem with target', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_BreadcrumbItem.BreadcrumbItem, {
        target: "/somewhere"
      }, "Item"));
      expect(view).toMatchSnapshot();
    });
    test('should render breadcrumbItem with custom element', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_BreadcrumbItem.BreadcrumbItem, null, React.createElement("h1", null, "Header")));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=BreadcrumbItem.test.js.map