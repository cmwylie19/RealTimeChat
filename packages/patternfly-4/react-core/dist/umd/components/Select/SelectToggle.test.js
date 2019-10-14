(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./SelectToggle"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./SelectToggle"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.SelectToggle);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _SelectToggle) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('API', () => {
    test('click on closed', () => {
      const mockToggle = jest.fn();
      const view = (0, _enzyme.mount)(_react2.default.createElement(_SelectToggle.SelectToggle, {
        id: "Select Toggle",
        onToggle: mockToggle,
        parentRef: {
          current: document.createElement('div')
        }
      }, "Select"));
      view.find('button').first().simulate('click');
      expect(mockToggle.mock.calls[0][0]).toBe(true);
    });
    test('click on opened', () => {
      const mockToggle = jest.fn();
      const view = (0, _enzyme.mount)(_react2.default.createElement(_SelectToggle.SelectToggle, {
        id: "Select Toggle",
        onToggle: mockToggle,
        isExpanded: true,
        parentRef: {
          current: document.createElement('div')
        }
      }, "Select"));
      view.find('button').first().simulate('click');
      expect(mockToggle.mock.calls[0][0]).toBe(false);
    });
    test('click on document', () => {
      const map = {};
      document.addEventListener = jest.fn((event, cb) => {
        map[event] = cb;
      });
      const mockToggle = jest.fn();
      (0, _enzyme.mount)(_react2.default.createElement(_SelectToggle.SelectToggle, {
        id: "Select Toggle",
        onToggle: mockToggle,
        isExpanded: true,
        parentRef: {
          current: document.createElement('div')
        }
      }, "Select"));
      map.mousedown({
        target: document
      });
      expect(mockToggle.mock.calls[0][0]).toBe(false);
    });
    test('touch on document', () => {
      const map = {};
      document.addEventListener = jest.fn((event, cb) => {
        map[event] = cb;
      });
      const mockToggle = jest.fn();
      (0, _enzyme.mount)(_react2.default.createElement(_SelectToggle.SelectToggle, {
        id: "Select Toggle",
        onToggle: mockToggle,
        isExpanded: true,
        parentRef: {
          current: document.createElement('div')
        }
      }, "Select"));
      map.touchstart({
        target: document
      });
      expect(mockToggle.mock.calls[0][0]).toBe(false);
    });
    test('on click outside has been removed', () => {
      const map = {};
      document.addEventListener = jest.fn((event, cb) => {
        map[event] = cb;
      });
      document.removeEventListener = jest.fn((event, cb) => {
        if (map[event] === cb) {
          map[event] = () => {};
        }
      });
      const mockToggle = jest.fn();
      const view = (0, _enzyme.mount)(_react2.default.createElement(_SelectToggle.SelectToggle, {
        id: "Select Toggle",
        onToggle: mockToggle,
        isExpanded: true,
        parentRef: {
          current: document.createElement('div')
        }
      }, "Select"));
      view.unmount();
      map.mousedown({
        target: document
      });
      expect(mockToggle.mock.calls).toHaveLength(0);
      expect(document.removeEventListener).toHaveBeenCalledWith('mousedown', expect.any(Function));
    });
    test('on touch outside has been removed', () => {
      const map = {};
      document.addEventListener = jest.fn((event, cb) => {
        map[event] = cb;
      });
      document.removeEventListener = jest.fn((event, cb) => {
        if (map[event] === cb) {
          map[event] = () => {};
        }
      });
      const mockToggle = jest.fn();
      const view = (0, _enzyme.mount)(_react2.default.createElement(_SelectToggle.SelectToggle, {
        id: "Select Toggle",
        onToggle: mockToggle,
        isExpanded: true,
        parentRef: {
          current: document.createElement('div')
        }
      }, "Select"));
      view.unmount();
      map.touchstart({
        target: document
      });
      expect(mockToggle.mock.calls).toHaveLength(0);
      expect(document.removeEventListener).toHaveBeenCalledWith('touchstart', expect.any(Function));
    });
  });
  describe('state', () => {
    test('hover', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_SelectToggle.SelectToggle, {
        id: "Select Toggle",
        isHovered: true,
        parentRef: {
          current: document.createElement('div')
        }
      }, "Select"));
      expect(view).toMatchSnapshot();
    });
    test('active', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_SelectToggle.SelectToggle, {
        id: "Select Toggle",
        isActive: true,
        parentRef: {
          current: document.createElement('div')
        }
      }, "Select"));
      expect(view).toMatchSnapshot();
    });
    test('focus', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_SelectToggle.SelectToggle, {
        id: "Select Toggle",
        isFocused: true,
        parentRef: {
          current: document.createElement('div')
        }
      }, "Select"));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=SelectToggle.test.js.map