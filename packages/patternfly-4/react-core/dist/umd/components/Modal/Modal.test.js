(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "../../helpers/constants", "../../../../react-styles/dist/js", "@patternfly/react-styles/css/components/Backdrop/backdrop", "./Modal"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("../../helpers/constants"), require("../../../../react-styles/dist/js"), require("@patternfly/react-styles/css/components/Backdrop/backdrop"), require("./Modal"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.constants, global.js, global.backdrop, global.Modal);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _constants, _js, _backdrop, _Modal) {
  "use strict";

  var React = _interopRequireWildcard(_react);

  var _backdrop2 = _interopRequireDefault(_backdrop);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  jest.spyOn(document, 'createElement');
  jest.spyOn(document.body, 'addEventListener');
  const props = {
    title: 'Modal',
    onClose: jest.fn(),
    isOpen: false,
    children: 'modal content'
  };
  test('Modal creates a container element once for div', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_Modal.Modal, props));
    view.update();
    expect(document.createElement).toBeCalledWith('div');
    expect(document.createElement).toHaveBeenCalledTimes(1);
  });
  test('modal closes with escape', () => {
    (0, _enzyme.shallow)(React.createElement(_Modal.Modal, _extends({}, props, {
      isOpen: true,
      appendTo: document.body
    })));
    const mock = document.body.addEventListener.mock;
    const [event, handler] = mock.calls[0];
    expect(event).toBe('keydown');
    handler({
      keyCode: _constants.KEY_CODES.ESCAPE_KEY
    });
    expect(props.onClose).toBeCalled();
  });
  test('modal does not call onClose for esc key if it is not open', () => {
    (0, _enzyme.shallow)(React.createElement(_Modal.Modal, props));
    const mock = document.body.addEventListener.mock;
    const [event, handler] = mock.calls[0];
    expect(event).toBe('keydown');
    handler({
      keyCode: _constants.KEY_CODES.ESCAPE_KEY
    });
    expect(props.onClose).not.toBeCalled();
  });
  test('Each modal is given a new id', () => {
    const first = (0, _enzyme.shallow)(React.createElement(_Modal.Modal, props));
    const second = (0, _enzyme.shallow)(React.createElement(_Modal.Modal, props));
    expect(first.instance().id).not.toBe(second.instance().id);
  });
  test('modal removes body backdropOpen class when removed', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_Modal.Modal, _extends({}, props, {
      isOpen: true
    })));
    view.update();
    expect(document.body.className).toContain((0, _js.css)(_backdrop2.default.backdropOpen));
    view.setProps({
      isOpen: false
    });
    view.update();
    expect(document.body.className).not.toContain((0, _js.css)(_backdrop2.default.backdropOpen));
  });
  test('modal shows/hides the close button based on showClose (default true)', () => {
    const view = (0, _enzyme.mount)(React.createElement(_Modal.Modal, _extends({}, props, {
      isOpen: true
    })));
    view.update();
    expect(view.exists('.pf-c-modal-box .pf-c-button')).toBeTruthy();
    view.setProps({
      showClose: false
    });
    view.update();
    expect(view.exists('.pf-c-modal-box .pf-c-button')).toBeFalsy();
  });
});
//# sourceMappingURL=Modal.test.js.map