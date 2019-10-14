(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ModalBoxFooter"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ModalBoxFooter"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ModalBoxFooter);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _ModalBoxFooter) {
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

  test('ModalBoxFooter Test', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_ModalBoxFooter.ModalBoxFooter, {
      className: "test-box-footer-class"
    }, "This is a ModalBox Footer"));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=ModalBoxFooter.test.js.map