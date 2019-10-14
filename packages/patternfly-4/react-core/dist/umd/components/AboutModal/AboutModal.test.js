(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "react-dom", "enzyme", "./AboutModal", "../../helpers/constants"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("react-dom"), require("enzyme"), require("./AboutModal"), require("../../helpers/constants"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.reactDom, global.enzyme, global.AboutModal, global.constants);
    global.undefined = mod.exports;
  }
})(this, function (_react, _reactDom, _enzyme, _AboutModal, _constants) {
  "use strict";

  var React = _interopRequireWildcard(_react);

  var ReactDOM = _interopRequireWildcard(_reactDom);

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

  const mockListener = jest.spyOn(ReactDOM, 'createPortal');
  jest.spyOn(document, 'createElement');
  jest.spyOn(document, 'addEventListener');
  mockListener.mockImplementation(node => node);
  const props = {
    onClose: jest.fn(),
    children: 'modal content',
    productName: 'Product Name',
    trademark: 'Trademark and copyright information here',
    brandImageSrc: 'brandImg...',
    brandImageAlt: 'Brand Image',
    logoImageSrc: 'logoImg...',
    logoImageAlt: 'AboutModal Logo'
  };
  test('AboutModal creates a container element once for div', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_AboutModal.AboutModal, props, " Test About Modal "));
    view.update();
    expect(document.createElement).toBeCalledWith('div');
    expect(document.createElement).toHaveBeenCalledTimes(1);
  });
  test('About Modal closes with escape', () => {
    (0, _enzyme.shallow)(React.createElement(_AboutModal.AboutModal, _extends({}, props, {
      isOpen: true
    }), "Test About Modal"));
    const [event, handler] = document.addEventListener.mock.calls[0];
    expect(event).toBe('keydown');
    handler({
      keyCode: _constants.KEY_CODES.ESCAPE_KEY
    });
    expect(props.onClose).toBeCalled();
  });
  test('modal does not call onClose for esc key if it is not open', () => {
    (0, _enzyme.shallow)(React.createElement(_AboutModal.AboutModal, props));
    const [event, handler] = document.addEventListener.mock.calls[0];
    expect(event).toBe('keydown');
    handler({
      keyCode: _constants.KEY_CODES.ESCAPE_KEY
    });
    expect(props.onClose).not.toBeCalled();
  });
  test('Each modal is given new ariaDescribedById and ariaLabelledbyId', () => {
    const first = new _AboutModal.AboutModal(props);
    const second = new _AboutModal.AboutModal(props);
    expect(first.ariaLabelledBy).not.toBe(second.ariaLabelledBy);
    expect(first.ariaDescribedBy).not.toBe(second.ariaDescribedBy);
  });
  test('Console error is generated when the logoImageSrc is provided without logoImageAlt', () => {
    const noImgAltrops = {
      onClose: jest.fn(),
      children: 'modal content',
      productName: 'Product Name',
      trademark: 'Trademark and copyright information here',
      brandImageSrc: 'brandImg...',
      logoImageSrc: 'logoImg...'
    };
    const myMock = jest.fn();
    global.console = {
      error: myMock
    };
    const JSAboutModal = _AboutModal.AboutModal;
    (0, _enzyme.shallow)(React.createElement(JSAboutModal, noImgAltrops, " Test About Modal "));
    expect(myMock).toBeCalled();
  });
});
//# sourceMappingURL=AboutModal.test.js.map