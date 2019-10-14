(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./InternalDropdownItem", "./Separator"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./InternalDropdownItem"), require("./Separator"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.InternalDropdownItem, global.Separator);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _InternalDropdownItem, _Separator) {
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

  describe('dropdown items', () => {
    test('a', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_InternalDropdownItem.InternalDropdownItem, null, "Something"));
      expect(view).toMatchSnapshot();
    });
    test('button', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_InternalDropdownItem.InternalDropdownItem, {
        component: "button"
      }, "Something"));
      expect(view).toMatchSnapshot();
    });
    test('separator', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_Separator.DropdownSeparator, null));
      expect(view).toMatchSnapshot();
    });
    describe('hover', () => {
      test('a', () => {
        const view = (0, _enzyme.shallow)(React.createElement(_InternalDropdownItem.InternalDropdownItem, {
          isHovered: true
        }, "Something"));
        expect(view).toMatchSnapshot();
      });
      test('button', () => {
        const view = (0, _enzyme.shallow)(React.createElement(_InternalDropdownItem.InternalDropdownItem, {
          isHovered: true,
          component: "button"
        }, "Something"));
        expect(view).toMatchSnapshot();
      });
    });
    describe('disabled', () => {
      test('a', () => {
        const view = (0, _enzyme.shallow)(React.createElement(_InternalDropdownItem.InternalDropdownItem, {
          isDisabled: true
        }, "Something"));
        expect(view).toMatchSnapshot();
      });
      test('button', () => {
        const view = (0, _enzyme.shallow)(React.createElement(_InternalDropdownItem.InternalDropdownItem, {
          isDisabled: true,
          component: "button"
        }, "Something"));
        expect(view).toMatchSnapshot();
      });
    });
  });
});
//# sourceMappingURL=InternalDropdownItem.test.js.map