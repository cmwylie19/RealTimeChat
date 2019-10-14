(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ContextSelectorToggle"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ContextSelectorToggle"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ContextSelectorToggle);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _ContextSelectorToggle) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('Renders ContextSelectorToggle', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_ContextSelectorToggle.ContextSelectorToggle, {
      id: "toggle-id"
    }));
    expect(view).toMatchSnapshot();
  });
  test('Verify onToggle is called ', () => {
    const mockfnOnToggle = jest.fn();
    const view = (0, _enzyme.mount)(_react2.default.createElement(_ContextSelectorToggle.ContextSelectorToggle, {
      onToggle: mockfnOnToggle,
      id: "toggle-id"
    }));
    view.find('button').at(0).simulate('click');
    expect(mockfnOnToggle.mock.calls).toHaveLength(1);
  });
  test('Verify ESC press ', () => {
    const view = (0, _enzyme.mount)(_react2.default.createElement(_ContextSelectorToggle.ContextSelectorToggle, {
      isOpen: true,
      id: "toggle-id"
    }));
    view.simulate('keyDown', {
      key: 'Escape'
    });
    expect(view).toMatchSnapshot();
  });
  test('Verify ESC press with not isOpen', () => {
    const view = (0, _enzyme.mount)(_react2.default.createElement(_ContextSelectorToggle.ContextSelectorToggle, {
      onToggle: jest.fn(),
      id: "toggle-id"
    }));
    view.simulate('keyDown', {
      key: 'Escape'
    });
    expect(view).toMatchSnapshot();
  });
  test('Verify keydown tab ', () => {
    const view = (0, _enzyme.mount)(_react2.default.createElement(_ContextSelectorToggle.ContextSelectorToggle, {
      isOpen: true,
      id: "toggle-id"
    }));
    view.simulate('keyDown', {
      key: 'Tab'
    });
    expect(view).toMatchSnapshot();
  });
  test('Verify keydown enter ', () => {
    const view = (0, _enzyme.mount)(_react2.default.createElement(_ContextSelectorToggle.ContextSelectorToggle, {
      onToggle: jest.fn(),
      onEnter: jest.fn(),
      id: "toggle-id"
    }));
    view.simulate('keyDown', {
      key: 'Enter'
    });
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=ContextSelectorToggle.test.js.map