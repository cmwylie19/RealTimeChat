(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./BreadcrumbHeading", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./BreadcrumbHeading"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.BreadcrumbHeading, global.enzyme);
    global.undefined = mod.exports;
  }
})(this, function (_react, _BreadcrumbHeading, _enzyme) {
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

  describe('BreadcrumbHeading component', () => {
    test('should render default breadcrumbHeading', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_BreadcrumbHeading.BreadcrumbHeading, null, "Item"));
      expect(view).toMatchSnapshot();
    });
    test('should pass classname', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_BreadcrumbHeading.BreadcrumbHeading, {
        className: "Class"
      }, "Item"));
      expect(view).toMatchSnapshot();
    });
    test('should pass custom id', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_BreadcrumbHeading.BreadcrumbHeading, {
        id: "Id"
      }, "Item"));
      expect(view).toMatchSnapshot();
    });
    test('should render link breadcrumbTitle', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_BreadcrumbHeading.BreadcrumbHeading, {
        to: "/somewhere"
      }, "Item"));
      expect(view).toMatchSnapshot();
    });
    test('should render breadcrumbHeading with target', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_BreadcrumbHeading.BreadcrumbHeading, {
        to: "#here",
        target: "_blank"
      }, "Item"));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=BreadcrumbHeading.test.js.map