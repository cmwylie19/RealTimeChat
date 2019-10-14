(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./DropdownToggle", "./dropdownConstants"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./DropdownToggle"), require("./dropdownConstants"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.DropdownToggle, global.dropdownConstants);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _DropdownToggle, _dropdownConstants) {
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

  describe('API', () => {
    test('click on closed', () => {
      const mockToggle = jest.fn();
      const view = (0, _enzyme.mount)(React.createElement(_DropdownToggle.DropdownToggle, {
        onToggle: mockToggle,
        parentRef: document.createElement('div')
      }, "Dropdown"));
      view.find('button').first().simulate('click');
      expect(mockToggle.mock.calls[0][0]).toBe(true);
    });
    test('click on opened', () => {
      const mockToggle = jest.fn();
      const view = (0, _enzyme.mount)(React.createElement(_DropdownToggle.DropdownToggle, {
        id: "Dropdown Toggle",
        onToggle: mockToggle,
        isOpen: true,
        parentRef: document.createElement('div')
      }, "Dropdown"));
      view.find('button').first().simulate('click');
      expect(mockToggle.mock.calls[0][0]).toBe(false);
    });
    test('on click outside has been removed', () => {
      let mousedown = () => {};

      document.addEventListener = jest.fn((event, cb) => {
        mousedown = cb;
      });
      document.removeEventListener = jest.fn((event, cb) => {
        if (mousedown === cb) {
          mousedown = () => {};
        }
      });
      const mockToggle = jest.fn();
      const view = (0, _enzyme.mount)(React.createElement(_DropdownToggle.DropdownToggle, {
        id: "Dropdown Toggle",
        onToggle: mockToggle,
        isOpen: true,
        parentRef: document.createElement('div')
      }, "Dropdown"));
      view.unmount();
      mousedown({
        target: document
      });
      expect(mockToggle.mock.calls).toHaveLength(0);
      expect(document.removeEventListener).toHaveBeenCalledWith('mousedown', expect.any(Function));
    });
    test('on touch outside has been removed', () => {
      let touchstart = () => {};

      document.addEventListener = jest.fn((event, cb) => {
        touchstart = cb;
      });
      document.removeEventListener = jest.fn((event, cb) => {
        if (touchstart === cb) {
          touchstart = () => {};
        }
      });
      const mockToggle = jest.fn();
      const view = (0, _enzyme.mount)(React.createElement(_DropdownToggle.DropdownToggle, {
        id: "Dropdown Toggle",
        onToggle: mockToggle,
        isOpen: true,
        parentRef: document.createElement('div')
      }, "Dropdown"));
      view.unmount();
      touchstart({
        target: document
      });
      expect(mockToggle.mock.calls).toHaveLength(0);
      expect(document.removeEventListener).toHaveBeenCalledWith('touchstart', expect.any(Function));
    });
  });
  describe('state', () => {
    test('hover', () => {
      const view = (0, _enzyme.mount)(React.createElement(_DropdownToggle.DropdownToggle, {
        id: "Dropdown Toggle",
        isHovered: true,
        parentRef: document.createElement('div')
      }, "Dropdown"));
      expect(view).toMatchSnapshot();
    });
    test('active', () => {
      const view = (0, _enzyme.mount)(React.createElement(_DropdownToggle.DropdownToggle, {
        id: "Dropdown Toggle",
        isActive: true,
        parentRef: document.createElement('div')
      }, "Dropdown"));
      expect(view).toMatchSnapshot();
    });
    test('focus', () => {
      const view = (0, _enzyme.mount)(React.createElement(_DropdownToggle.DropdownToggle, {
        id: "Dropdown Toggle",
        isFocused: true,
        parentRef: document.createElement('div')
      }, "Dropdown"));
      expect(view).toMatchSnapshot();
    });
    test('class changes', () => {
      const view = (0, _enzyme.mount)(React.createElement(_dropdownConstants.DropdownContext.Provider, {
        value: {
          toggleTextClass: 'some-test-class',
          toggleIconClass: 'another-test-class'
        }
      }, React.createElement(_DropdownToggle.DropdownToggle, {
        id: "Dropdown Toggle",
        isFocused: true,
        parentRef: document.createElement('div')
      }, "Dropdown")));
      expect(view).toMatchSnapshot();
    });
    test('class changes', () => {
      const view = (0, _enzyme.mount)(React.createElement(_dropdownConstants.DropdownContext.Provider, {
        value: {
          toggleTextClass: 'some-test-class',
          toggleIconClass: 'another-test-class'
        }
      }, React.createElement(_DropdownToggle.DropdownToggle, {
        id: "Dropdown Toggle",
        isFocused: true,
        parentRef: document.createElement('div')
      }, "Dropdown")));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=DropdownToggle.test.js.map