(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./AboutModalContainer"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./AboutModalContainer"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.AboutModalContainer);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _AboutModalContainer) {
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

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  const props = {
    children: 'modal content',
    productName: 'Product Name',
    trademark: 'Trademark and copyright information here',
    brandImageSrc: 'brandImg...',
    brandImageAlt: 'Brand Image',
    backgroundImageSrc: 'backgroundImageSrc...',
    ariaLabelledbyId: 'ariaLablledbyId',
    ariaDescribedById: 'ariaDescribedById'
  };
  test('About Modal Container Test simple', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_AboutModalContainer.AboutModalContainer, props, "This is ModalBox content"));
    expect(view).toMatchSnapshot();
  });
  test('About Modal Container Test isOpen', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_AboutModalContainer.AboutModalContainer, _extends({
      title: "Test Modal Container title"
    }, props, {
      isOpen: true
    }), "This is ModalBox content"));
    expect(view).toMatchSnapshot();
  });
  test('About Modal Container Test with onlose', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_AboutModalContainer.AboutModalContainer, _extends({
      onClose: () => undefined
    }, props), "This is ModalBox content"));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=AboutModalContainer.test.js.map