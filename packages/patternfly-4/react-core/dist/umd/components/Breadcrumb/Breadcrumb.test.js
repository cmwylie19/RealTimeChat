(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./Breadcrumb", "./BreadcrumbItem", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./Breadcrumb"), require("./BreadcrumbItem"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.Breadcrumb, global.BreadcrumbItem, global.enzyme);
    global.undefined = mod.exports;
  }
})(this, function (_react, _Breadcrumb, _BreadcrumbItem, _enzyme) {
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

  describe('Breadcrumb component', () => {
    test('should render default breadcrumb', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_Breadcrumb.Breadcrumb, null));
      expect(view).toMatchSnapshot();
    });
    test('should render breadcrumb with className', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_Breadcrumb.Breadcrumb, {
        className: "className"
      }));
      expect(view).toMatchSnapshot();
    });
    test('should render breadcrumb with aria-label', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_Breadcrumb.Breadcrumb, {
        "aria-label": "custom label"
      }));
      expect(view).toMatchSnapshot();
    });
    test('should render breadcrumb with children', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_Breadcrumb.Breadcrumb, null, React.createElement(_BreadcrumbItem.BreadcrumbItem, {
        to: "#"
      }, "Item 1"), " ", React.createElement(_BreadcrumbItem.BreadcrumbItem, {
        to: "#"
      }, "Item 1")));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=Breadcrumb.test.js.map