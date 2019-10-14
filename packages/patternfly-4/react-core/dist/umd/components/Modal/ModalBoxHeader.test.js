(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "../Title", "./ModalBoxHeader"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("../Title"), require("./ModalBoxHeader"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Title, global.ModalBoxHeader);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _Title, _ModalBoxHeader) {
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

  test('ModalBoxHeader Test', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_ModalBoxHeader.ModalBoxHeader, null, "This is a ModalBox header"));
    expect(view).toMatchSnapshot();
  });
  test('ModalBoxHeader Test with H3', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_ModalBoxHeader.ModalBoxHeader, {
      headingLevel: _Title.TitleLevel.h3
    }, "This is a ModalBox header"));
    expect(view).toMatchSnapshot();
  });
  test('ModalBoxHeader Test hideTitle', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_ModalBoxHeader.ModalBoxHeader, {
      hideTitle: true
    }, "This is a ModalBox header"));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=ModalBoxHeader.test.js.map