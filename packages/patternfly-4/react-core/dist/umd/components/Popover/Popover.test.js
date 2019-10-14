(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Popover"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Popover"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Popover);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _Popover) {
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

  test('popover renders close-button, header and body', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_Popover.Popover, {
      position: "top",
      isVisible: true,
      hideOnOutsideClick: true,
      headerContent: React.createElement("div", null, "Popover Header"),
      bodyContent: React.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.")
    }, React.createElement("div", null, "Toggle Popover")));
    expect(view).toMatchSnapshot();
  });
  test('popover can specify position as object value', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_Popover.Popover, {
      position: _Popover.PopoverPosition.right,
      isVisible: true,
      hideOnOutsideClick: true,
      headerContent: React.createElement("div", null, "Popover Header"),
      bodyContent: React.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.")
    }, React.createElement("div", null, "Toggle Popover")));
    expect(view).toMatchSnapshot();
  });
  test('popover passes along values to tippy.js', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_Popover.Popover, {
      position: _Popover.PopoverPosition.right,
      isVisible: true,
      hideOnOutsideClick: true,
      headerContent: React.createElement("div", null, "Popover Header"),
      bodyContent: React.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis."),
      tippyProps: {
        duration: [200, 200],
        offset: 20
      }
    }, React.createElement("div", null, "Tippy Props Test")));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=Popover.test.js.map