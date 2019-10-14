(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ModalBox"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ModalBox"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ModalBox);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _ModalBox) {
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

  test('ModalBox Test', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_ModalBox.ModalBox, {
      title: "Test Modal Box",
      id: "boxId"
    }, "This is a ModalBox"));
    expect(view).toMatchSnapshot();
  });
  test('ModalBox Test isLarge', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_ModalBox.ModalBox, {
      title: "Test Modal Box",
      id: "boxId",
      isLarge: true
    }, "This is a ModalBox"));
    expect(view).toMatchSnapshot();
  });
  test('ModalBox Test isSmall', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_ModalBox.ModalBox, {
      title: "Test Modal Box",
      id: "boxId",
      isSmall: true
    }, "This is a ModalBox"));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=ModalBox.test.js.map