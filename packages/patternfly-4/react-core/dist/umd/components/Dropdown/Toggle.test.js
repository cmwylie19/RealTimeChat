(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./DropdownToggle", "./KebabToggle"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./DropdownToggle"), require("./KebabToggle"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.DropdownToggle, global.KebabToggle);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _DropdownToggle, _KebabToggle) {
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

  test('Dropdown toggle', () => {
    const view = (0, _enzyme.mount)(React.createElement(_DropdownToggle.DropdownToggle, {
      id: "Dropdown Toggle"
    }, "Dropdown"));
    expect(view).toMatchSnapshot();
  });
  test('Kebab toggle', () => {
    const view = (0, _enzyme.mount)(React.createElement(_KebabToggle.KebabToggle, {
      id: "Dropdown Toggle"
    }));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=Toggle.test.js.map