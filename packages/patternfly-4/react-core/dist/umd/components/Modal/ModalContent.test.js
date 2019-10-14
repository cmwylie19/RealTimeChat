(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ModalContent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ModalContent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ModalContent);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _ModalContent) {
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

  test('Modal Content Test only body', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_ModalContent.ModalContent, {
      title: "Test Modal Content title",
      id: "id",
      isOpen: true
    }, "This is a ModalBox header"));
    expect(view).toMatchSnapshot();
  });
  test('Modal Content Test isOpen', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_ModalContent.ModalContent, {
      title: "Test Modal Content title",
      id: "id",
      isOpen: true
    }, "This is a ModalBox header"));
    expect(view).toMatchSnapshot();
  });
  test('Modal Content Test with footer', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_ModalContent.ModalContent, {
      title: "Test Modal Content title",
      id: "id",
      isOpen: true,
      actions: ['Testing']
    }, "This is a ModalBox header"));
    expect(view).toMatchSnapshot();
  });
  test('Modal Content test without footer', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_ModalContent.ModalContent, {
      title: "Test Modal Content title",
      id: "id",
      isOpen: true
    }, "This is a ModalBox header"));
    expect(view).toMatchSnapshot();
  });
  test('Modal Content Test with onclose', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_ModalContent.ModalContent, {
      title: "Test Modal Content title",
      actions: ['Testing footer'],
      isLarge: true,
      onClose: () => undefined,
      id: "id",
      isOpen: true
    }, "This is a ModalBox header"));
    expect(view).toMatchSnapshot();
  });
  test('Modal Test with custom header', () => {
    const header = React.createElement("span", {
      id: "test-custom-header"
    }, "TEST");
    const view = (0, _enzyme.shallow)(React.createElement(_ModalContent.ModalContent, {
      header: header,
      title: "test-custom-header-modal",
      actions: ['Testing footer'],
      isLarge: true,
      onClose: () => undefined,
      id: "id",
      isOpen: true
    }, "This is a ModalBox header"));
    expect(view).toMatchSnapshot();
  });
  test('Modal Test with custom footer', () => {
    const footer = React.createElement("span", {
      id: "test-custom-footer"
    }, "TEST");
    const view = (0, _enzyme.shallow)(React.createElement(_ModalContent.ModalContent, {
      footer: footer,
      title: "Test Modal Custom Footer",
      isLarge: true,
      onClose: () => undefined,
      id: "id",
      isOpen: true
    }, "This is a ModalBox header"));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=ModalContent.test.js.map